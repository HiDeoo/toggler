'use babel';

import { CompositeDisposable } from 'atom';
import fs from 'fs';
import path from 'path';

import defaults from './defaults.json';

/**
 * Toggler class.
 */
class Toggler {

  /**
   * Activates the plugin and registers for various subscriptions.
   */
  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'toggler:toggle': () => this.toggle()
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'toggler:config': () => this.configure()
    }));

    if (Toggler.isConfigured()) {
      this.loadConfiguration();
    } else {
      this.configure();
    }
  }

  /**
   * Deactivates the plugin and removes all subscriptions.
   */
  deactivate() {
    this.subscriptions.dispose();
  }

  /**
   * Toggles words.
   */
  toggle() {
    const editor = atom.workspace.getActiveTextEditor();

    if (editor === undefined || this.configuration === undefined) {
      return;
    }

    const selections = editor.getSelections();

    selections.forEach((selection) => {
      let text = selection.getText();
      let selected = true;

      if (text.length === 0) {
        selected = false;

        selection.selectWord();
        text = selection.getText();
      }

      const toggle = this.getToggle(text);

      if (toggle !== null) {
        selection.insertText(toggle, { select: selected,  });
      } else {
        atom.notifications.addWarning(`Toggler: Could not find toggles for '${text}'. Please use the \`toggler:config\` command to add one.`);
      }
    });
  }

  /**
   * Returns the next toggle for a specific word.
   * @param  {string} word - The word to find a toggle for.
   * @return {string|null} The toggle or `null` if no toggle found.
   */
  getToggle(word) {
    for (let i = 0; i < this.configuration.length; i++) {
      const group = this.configuration[i];

      for (let j = 0; j < group.length; j++) {
        const currentWord = group[j];
        const nextWordIndex = (j + 1) % group.length;

        if (word.toLowerCase() === currentWord.toLowerCase()) {
          if (word === currentWord.toLowerCase()) {
            return group[nextWordIndex].toLowerCase();
          } else if (word === currentWord.toUpperCase()) {
            return group[nextWordIndex].toUpperCase();
          } else if (word === Toggler.capitalize(currentWord)) {
            return Toggler.capitalize(group[nextWordIndex]);
          }

          return group[nextWordIndex];
        }
      }
    }

    return null;
  }

  /**
   * Open the configuration file.
   */
  configure() {
    const configPath = Toggler.getConfigPath();
    const isConfigured = Toggler.isConfigured();

    atom.workspace.open(configPath, { searchAllPanes: true })
      .then((editor) => {
        const disposable = editor.onDidSave(() => { this.loadConfiguration(true); });
        editor.onDidDestroy(() => { disposable.dispose(); });

        if (isConfigured === false) {
          editor.setText(Toggler.readFile(path.join(__dirname, 'defaults.json')));
          editor.save();
        }
      });
  }

  /**
   * Load the configuration file if not already loaded.
   * @param  {Boolean} force - When `true`, reload the configuration even if it's already loaded.
   */
  loadConfiguration(force = false) {
    if (this.configuration !== undefined && force === false) {
      return;
    }

    try {
      this.configuration = JSON.parse(Toggler.readFile(Toggler.getConfigPath()));
    } catch (e) {
      atom.notifications.addError(
        'Toggler: Could not read configuration file. Please use the `toggler:config` command.',
        { detail: e.message }
      );
    }
  }

  /**
   * Returns the configuration file path.
   * @return {stirng} The configuration file path.
   */
  static getConfigPath() {
    return path.join(atom.getConfigDirPath(), 'toggler.json');
  }

  /**
   * Reads a file synchronously.
   * @param  {string} path - The file path.
   * @return {string} The content of the file.
   */
  static readFile(path) {
    return fs.readFileSync(path, 'utf8');
  }

  /**
   * Returns `true` if the Toggler plugin is already configured.
   * This is done by checking if the configuration file exists or not.
   * @return {Boolean} `true` when configured.
   */
  static isConfigured() {
    return fs.existsSync(Toggler.getConfigPath());
  }

  /**
   * Capitalizes a string.
   * @param  {string} string - The string to capitalize.
   * @return {string} The capitalized string.
   */
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

export default new Toggler();
