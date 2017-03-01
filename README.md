# Toggler Package

[![OS X Build Status](https://travis-ci.org/HiDeoo/toggler.svg?branch=master)](https://travis-ci.org/HiDeoo/toggler)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/4kncgpbed7lpcqo1/branch/master?svg=true)](https://ci.appveyor.com/project/HiDeoo/toggler/branch/master)
[![Dependency Status](https://david-dm.org/HiDeoo/toggler.svg)](https://david-dm.org/HiDeoo/toggler)

Toggle words and symbols in Atom using a user defined configuration.

![Screenshot of the Toggler Package](http://i.imgur.com/uCltY1U.gif)

[Changelog](https://github.com/HiDeoo/toggler/blob/master/CHANGELOG.md)

## Features

As none of the existing words toggling package were fitting my needs, I decided to write my own with the following features:

  * **Easily user customizable.**
  * Maintain word case.
  * Multiple toggles support.
  * Multiple cursors support.
  * Multiple selections support.

## Usage

Set your cursor on a word or select a word and press the associated keybinding (<kbd>Ctrl</kbd>+<kbd>r</kbd> by default).

You can also use the Atom Command Palette and choose the `Toggler - Toggle` command, or use the `Toggle` action in a context menu or use the application menu `Packages -> Toggler -> Toggle`.

## Configuration.

The configuration is saved in a `toggler.json` file which will be located in your Atom configuration directory.

To open the configuration, you can use the Atom Command Palette and choose the `Toggler - Config` command, or use the application menu `Packages -> Toggler -> Configure`. This will automatically open the configuration file in Atom.

```
[
  ["0", "1"],
  ["enable", "disable"],
  ["enabled", "disabled"],
  ["on", "off"],
  ["true", "false"],
  ["yes", "no"],

  ["(", ")"],
  ["[", "]"],
  ["[]", "{}"],
  ["{", "}"],
  ["'", "\"", "`"],

  ["*", "/"],
  ["*=", "/="],
  ["&", "|"],
  ["&&", "||"],
  ["+", "-"],
  ["++", "--"],
  ["+=", "-="],
  ["<", ">"],
  ["<<", ">>"],
  ["<=", ">="],
  ["==", "!="],
  ["===", "!=="],

  ["absolute", "relative"],
  ["high", "low"],
  ["horizontal", "vertical"],
  ["in", "out"],
  ["inner", "outer"],
  ["left", "right"],
  ["top", "bottom"],
  ["up", "down"],

  ["black", "white"],
  ["gray", "maroon", "red", "purple", "fuchsia", "green", "yellow", "blue", "aqua"],

  ["const", "let", "var"],
  ["import", "export"],
  ["join", "split"],
  ["JSON.parse", "JSON.stringify"],
  ["parse", "stringify"],
  ["pop", "push"],
  ["shift", "unshift"],
  ["test", "test.only"],

  ["atan", "tan"],
  ["ceil", "floor"],
  ["cos", "sin"],
  ["Math.atan", "Math.tan"],
  ["Math.ceil", "Math.floor"],
  ["Math.cos", "Math.sin"],
  ["Math.min", "Math.max"],
  ["min", "max"],

  ["addEventListener", "removeEventListener"],
  ["animationstart", "animationend"],
  ["change", "input", "submit"],
  ["click", "dblclick"],
  ["compositionstart", "compositionend"],
  ["copy", "cut", "paste"],
  ["dragenter", "dragleave"],
  ["dragstart", "dragend"],
  ["focus", "blur"],
  ["keydown", "keyup"],
  ["mousedown", "mouseup"],
  ["mouseenter", "mouseleave"],
  ["onAnimationStart", "onAnimationEnd"],
  ["onChange", "onInput", "onSubmit"],
  ["onClick", "onDoubleClick"],
  ["onCompositionStart", "onCompositionEnd"],
  ["onCopy", "onCut", "onPaste"],
  ["onDragEnter", "onDragLeave"],
  ["onDragStart", "onDragEnd"],
  ["onFocus", "onBlur"],
  ["onKeyDown", "onKeyUp"],
  ["onMouseDown", "onMouseUp"],
  ["onMouseEnter", "onMouseLeave"],
  ["onTouchStart", "onTouchEnd"],
  ["touchstart", "touchend"],

  ["div", "span"],
  ["head", "body"],
  ["header", "footer"],
  ["ol", "ul"],
  ["tr", "td"],

  ["componentDidMount", "componentWillUnmount"],
  ["getState", "setState"],

  ["activate", "deactivate"],
  ["add", "remove"],
  ["address", "port"],
  ["available", "unavailable"],
  ["background", "foreground"],
  ["before", "after"],
  ["client", "server"],
  ["connect", "disconnect"],
  ["connected", "disconnected"],
  ["drag", "drop"],
  ["file", "folder"],
  ["first", "last"],
  ["from", "to"],
  ["get", "set"],
  ["input", "output"],
  ["install", "uninstall"],
  ["key", "value"],
  ["load", "unload"],
  ["minor", "major"],
  ["online", "offline"],
  ["open", "close"],
  ["parent", "child"],
  ["positive", "negative"],
  ["prefix", "suffix"],
  ["previous", "next"],
  ["public", "private"],
  ["req", "res"],
  ["request", "response"],
  ["row", "column"],
  ["short", "long"],
  ["show", "hide"],
  ["source", "destination"],
  ["start", "stop"],
  ["valid", "invalid"],
  ["visible", "hidden"],
  ["width", "height"],
  ["x", "y"]
]

```

## Copyright and license

Copyright (c) 2017 HiDeoo. Code released under the [MIT license](https://github.com/HiDeoo/toggler/blob/master/LICENSE.md).
