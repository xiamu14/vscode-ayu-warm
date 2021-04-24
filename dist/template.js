"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ayu = require("ayu");
var color_1 = require("ayu/dist/color");
var chroma = require("chroma-js");
var terminalColors = {
    light: {
        black: "#000000",
        white: "#c7c7c7",
        brightBlack: "#686868",
        brightWhite: "#d1d1d1",
    },
    dark: {
        black: ayu.dark.ui.line.hex(),
        white: "#c7c7c7",
        brightBlack: "#686868",
        brightWhite: "#ffffff",
    },
    mirage: {
        black: ayu.mirage.ui.line.hex(),
        white: "#c7c7c7",
        brightBlack: "#686868",
        brightWhite: "#ffffff",
    },
};
exports.default = (function (variant, bordered) {
    var scheme = ayu[variant];
    ayu.light.common.bg = new color_1.Color(chroma("F8F9FA"), chroma("fefae9")); // 背景色修改这里即可
    return {
        type: variant === "light" ? "light" : "dark",
        colors: {
            // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference
            // CONTRAST COLOURS
            // --
            // BASE COLOURS
            focusBorder: scheme.common.ui.fade(0.4).hex(),
            foreground: scheme.common.ui.hex(),
            "widget.shadow": scheme.ui.panel.shadow.hex(),
            "selection.background": scheme.ui.selection.bg.alpha(0.992).hex(),
            // TEXT COLOURS
            "textBlockQuote.background": scheme.ui.panel.bg.hex(),
            "textLink.foreground": scheme.common.accent.hex(),
            "textLink.activeForeground": scheme.common.accent.hex(),
            "textPreformat.foreground": scheme.common.fg.hex(),
            // BUTTON CONTROL
            "button.background": scheme.common.accent.hex(),
            "button.foreground": scheme.common.bg.fade(0.5).hex(),
            "button.hoverBackground": scheme.common.accent.darken(0.1).hex(),
            // DROPDOWN CONTROL
            "dropdown.background": scheme.ui.panel.bg.hex(),
            "dropdown.foreground": scheme.common.ui.hex(),
            "dropdown.border": scheme.common.ui.fade(0.7).hex(),
            // INPUT CONTROL
            "input.background": scheme.ui.panel.bg.hex(),
            "input.border": scheme.common.ui.fade(0.7).hex(),
            "input.foreground": scheme.common.fg.hex(),
            "input.placeholderForeground": scheme.common.ui.fade(0.3).hex(),
            "inputOption.activeBorder": scheme.common.accent.hex(),
            "inputValidation.errorBackground": scheme.common.bg.hex(),
            "inputValidation.errorBorder": scheme.syntax.error.hex(),
            "inputValidation.infoBackground": scheme.common.bg.hex(),
            "inputValidation.infoBorder": scheme.syntax.tag.hex(),
            "inputValidation.warningBackground": scheme.common.bg.hex(),
            "inputValidation.warningBorder": scheme.syntax.func.hex(),
            // SCROLLBAR CONTROL
            "scrollbar.shadow": scheme.ui.line.hex(),
            "scrollbarSlider.background": scheme.common.ui.alpha(0.4).hex(),
            "scrollbarSlider.hoverBackground": scheme.common.ui.alpha(0.6).hex(),
            "scrollbarSlider.activeBackground": scheme.common.ui.alpha(0.7).hex(),
            // BADGE
            "badge.background": scheme.common.accent.hex(),
            "badge.foreground": scheme.common.bg.hex(),
            // PROGRESS BAR
            "progressBar.background": scheme.common.accent.hex(),
            // LISTS AND TREES
            "list.activeSelectionBackground": scheme.ui.line.hex(),
            "list.activeSelectionForeground": scheme.common.ui.hex(),
            "list.focusBackground": scheme.ui.line.hex(),
            "list.focusForeground": scheme.common.ui.hex(),
            "list.highlightForeground": scheme.common.accent.hex(),
            "list.hoverBackground": scheme.ui.line.hex(),
            "list.hoverForeground": scheme.common.ui.hex(),
            "list.inactiveSelectionBackground": scheme.ui.line.hex(),
            "list.inactiveSelectionForeground": scheme.common.ui.hex(),
            "list.invalidItemForeground": scheme.common.ui.fade(0.3).hex(),
            // ACTIVITY BAR
            "activityBar.background": scheme.common.bg.hex(),
            "activityBar.foreground": scheme.common.ui.alpha(0.8).hex(),
            "activityBar.border": bordered
                ? scheme.ui.line.hex()
                : scheme.common.bg.hex(),
            "activityBarBadge.background": scheme.common.accent.hex(),
            "activityBarBadge.foreground": scheme.common.bg.hex(),
            // SIDE BAR
            "sideBar.background": scheme.common.bg.hex(),
            "sideBar.border": bordered
                ? scheme.ui.line.hex()
                : scheme.common.bg.hex(),
            "sideBarTitle.foreground": scheme.common.ui.hex(),
            "sideBarSectionHeader.background": scheme.common.bg.hex(),
            "sideBarSectionHeader.foreground": scheme.common.ui.hex(),
            // EDITOR GROUPS & TABS
            "editorGroup.border": scheme.ui.line.hex(),
            "editorGroup.background": scheme.ui.panel.bg.hex(),
            "editorGroupHeader.noTabsBackground": scheme.common.bg.hex(),
            "editorGroupHeader.tabsBackground": scheme.common.bg.hex(),
            "editorGroupHeader.tabsBorder": bordered
                ? scheme.ui.line.hex()
                : scheme.common.bg.hex(),
            "tab.activeBackground": bordered
                ? scheme.ui.panel.bg.hex()
                : scheme.common.bg.hex(),
            "tab.activeForeground": scheme.common.fg.hex(),
            "tab.border": bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),
            "tab.activeBorder": bordered ? undefined : scheme.common.accent.hex(),
            "tab.activeBorderTop": bordered ? scheme.common.accent.hex() : undefined,
            "tab.unfocusedActiveBorder": bordered
                ? undefined
                : scheme.common.ui.hex(),
            "tab.unfocusedActiveBorderTop": bordered
                ? scheme.common.ui.hex()
                : undefined,
            "tab.inactiveBackground": scheme.common.bg.hex(),
            "tab.inactiveForeground": scheme.common.ui.hex(),
            "tab.unfocusedActiveForeground": scheme.common.ui.hex(),
            "tab.unfocusedInactiveForeground": scheme.common.ui.hex(),
            // EDITOR
            "editor.background": bordered
                ? scheme.ui.panel.bg.hex()
                : scheme.common.bg.hex(),
            "editor.foreground": scheme.common.fg.hex(),
            "editorLineNumber.foreground": scheme.ui.gutter.normal.hex(),
            "editorLineNumber.activeForeground": scheme.ui.gutter.active.hex(),
            "editorCursor.foreground": scheme.common.accent.hex(),
            "editor.selectionBackground": scheme.ui.selection.bg.hex(),
            "editor.inactiveSelectionBackground": scheme.ui.selection.inactive.hex(),
            "editor.selectionHighlightBackground": scheme.ui.selection.inactive.hex(),
            "editor.selectionHighlightBorder": scheme.ui.selection.border.hex(),
            "editor.wordHighlightBackground": scheme.ui.selection.inactive.hex(),
            "editor.wordHighlightStrongBackground": scheme.common.accent
                .alpha(0.2)
                .hex(),
            "editor.findMatchBackground": scheme.common.accent.alpha(0.05).hex(),
            "editor.findMatchBorder": scheme.common.accent.hex(),
            "editor.findMatchHighlightBackground": scheme.common.accent
                .alpha(0.05)
                .hex(),
            "editor.findMatchHighlightBorder": scheme.common.accent.alpha(0.35).hex(),
            "editor.findRangeHighlightBackground": scheme.ui.selection.inactive.hex(),
            "editor.findRangeHighlightBorder": scheme.common.bg.hex() + "00",
            // 'editor.hoverHighlightBackground': '',
            "editor.lineHighlightBackground": scheme.ui.line.hex(),
            // 'editor.lineHighlightBorder': '',
            "editorLink.activeForeground": scheme.common.accent.hex(),
            "editor.rangeHighlightBackground": scheme.ui.line.hex(),
            "editorWhitespace.foreground": scheme.ui.gutter.normal.hex(),
            "editorIndentGuide.background": scheme.ui.guide.normal.hex(),
            "editorIndentGuide.activeBackground": scheme.ui.guide.active.hex(),
            "editorRuler.foreground": scheme.ui.guide.normal.hex(),
            "editorCodeLens.foreground": scheme.syntax.comment.hex(),
            "editorBracketMatch.background": scheme.ui.gutter.normal.alpha(0.3).hex(),
            "editorBracketMatch.border": scheme.ui.gutter.active.alpha(0.6).hex(),
            // OVERVIEW RULER
            "editorOverviewRuler.border": scheme.ui.line.hex(),
            "editorOverviewRuler.modifiedForeground": scheme.vcs.modified
                .alpha(0.6)
                .hex(),
            "editorOverviewRuler.addedForeground": scheme.vcs.added.alpha(0.6).hex(),
            "editorOverviewRuler.deletedForeground": scheme.vcs.removed
                .alpha(0.6)
                .hex(),
            "editorOverviewRuler.errorForeground": scheme.syntax.error.hex(),
            "editorOverviewRuler.warningForeground": scheme.common.accent.hex(),
            // ERRORS AND WARNINGS
            "editorError.foreground": scheme.syntax.error.hex(),
            "editorWarning.foreground": scheme.common.accent.hex(),
            // GUTTER
            "editorGutter.modifiedBackground": scheme.vcs.modified.alpha(0.6).hex(),
            "editorGutter.addedBackground": scheme.vcs.added.alpha(0.6).hex(),
            "editorGutter.deletedBackground": scheme.vcs.removed.alpha(0.6).hex(),
            // DIFF EDITOR
            "diffEditor.insertedTextBackground": scheme.syntax.string
                .alpha(0.15)
                .hex(),
            "diffEditor.removedTextBackground": scheme.syntax.operator
                .alpha(0.15)
                .hex(),
            // EDITOR WIDGET
            "editorWidget.background": scheme.ui.panel.bg.hex(),
            "editorSuggestWidget.background": scheme.ui.panel.bg.hex(),
            "editorSuggestWidget.border": scheme.ui.panel.border.hex(),
            "editorSuggestWidget.highlightForeground": scheme.common.accent.hex(),
            "editorSuggestWidget.selectedBackground": scheme.ui.line.hex(),
            "editorHoverWidget.background": scheme.ui.panel.bg.hex(),
            "editorHoverWidget.border": scheme.ui.panel.border.hex(),
            // DEBUG EXCEPTION
            "debugExceptionWidget.border": scheme.ui.line.hex(),
            "debugExceptionWidget.background": scheme.ui.panel.bg.hex(),
            // EDITOR MARKER
            "editorMarkerNavigation.background": scheme.ui.panel.bg.hex(),
            // PEEK VIEW
            "peekView.border": scheme.ui.line.hex(),
            "peekViewEditor.background": scheme.ui.panel.bg.hex(),
            "peekViewEditor.matchHighlightBackground": scheme.common.accent
                .alpha(0.2)
                .hex(),
            "peekViewResult.background": scheme.ui.panel.bg.hex(),
            "peekViewResult.fileForeground": scheme.common.ui.hex(),
            "peekViewResult.matchHighlightBackground": scheme.common.accent
                .alpha(0.2)
                .hex(),
            "peekViewTitle.background": scheme.ui.panel.bg.hex(),
            "peekViewTitleDescription.foreground": scheme.common.ui.hex(),
            "peekViewTitleLabel.foreground": scheme.common.ui.hex(),
            // Merge Conflicts
            // 'merge.currentHeaderBackground': '?',
            // 'merge.currentContentBackground': '?',
            // 'merge.incomingHeaderBackground': '?',
            // 'merge.incomingContentBackground': '?',
            // 'merge.border': '?',
            // 'merge.commonContentBackground': '?',
            // 'merge.commonHeaderBackground': '?',
            // 'editorOverviewRuler.currentContentForeground': '?',
            // 'editorOverviewRuler.incomingContentForeground': '?',
            // 'editorOverviewRuler.commonContentForeground': '?',
            // Panel
            "panel.background": scheme.common.bg.hex(),
            "panel.border": scheme.ui.line.hex(),
            "panelTitle.activeBorder": scheme.common.accent.hex(),
            "panelTitle.activeForeground": scheme.common.fg.hex(),
            "panelTitle.inactiveForeground": scheme.common.ui.hex(),
            // STATUS BAR
            "statusBar.background": scheme.common.bg.hex(),
            "statusBar.foreground": scheme.common.ui.hex(),
            "statusBar.border": bordered
                ? scheme.ui.line.hex()
                : scheme.common.bg.hex(),
            "statusBar.debuggingBackground": scheme.syntax.operator.hex(),
            "statusBar.debuggingForeground": scheme.common.bg.fade(0.5).hex(),
            "statusBar.noFolderBackground": scheme.ui.panel.bg.hex(),
            "statusBarItem.activeBackground": "#00000050",
            "statusBarItem.hoverBackground": "#00000030",
            "statusBarItem.prominentBackground": scheme.ui.line.hex(),
            "statusBarItem.prominentHoverBackground": "#00000030",
            // TITLE BAR
            "titleBar.activeBackground": scheme.common.bg.hex(),
            "titleBar.activeForeground": scheme.common.fg.hex(),
            "titleBar.inactiveBackground": scheme.common.bg.hex(),
            "titleBar.inactiveForeground": scheme.common.ui.hex(),
            "titleBar.border": bordered
                ? scheme.ui.line.hex()
                : scheme.common.bg.hex(),
            // MENU BAR
            // 'menubar.selectionForeground': '?',
            // 'menubar.selectionBackground': '?',
            // 'menubar.selectionBorder': '?',
            // 'menu.foreground': '?',
            // 'menu.background': '?',
            // 'menu.selectionForeground': '?',
            // 'menu.selectionBackground': '?',
            // 'menu.selectionBorder': '?',
            // NOTIFICATION
            // 'notificationCenter.border': '?',
            // 'notificationCenterHeader.foreground': '?',
            // 'notificationCenterHeader.background': '?',
            // 'notificationToast.border': '?',
            // 'notifications.foreground': '?',
            // 'notifications.background': '?',
            // 'notifications.border': '?',
            // 'notificationLink.foreground': '?',
            // EXTENSIONS
            "extensionButton.prominentForeground": scheme.common.bg.fade(0.5).hex(),
            "extensionButton.prominentBackground": scheme.common.accent.hex(),
            "extensionButton.prominentHoverBackground": scheme.common.accent
                .darken(0.1)
                .hex(),
            // QUICK PICKER
            "pickerGroup.border": scheme.ui.line.hex(),
            "pickerGroup.foreground": scheme.common.ui.fade(0.5).hex(),
            // DEBUG
            "debugToolBar.background": scheme.ui.panel.bg.hex(),
            // 'debugToolBar.border': '',
            // WELCOME PAGE
            // 'welcomePage.buttonBackground': '?'
            // 'welcomePage.buttonHoverBackground': '?'
            "walkThrough.embeddedEditorBackground": scheme.ui.panel.bg.hex(),
            // GIT
            "gitDecoration.modifiedResourceForeground": scheme.vcs.modified
                .alpha(0.7)
                .hex(),
            "gitDecoration.deletedResourceForeground": scheme.vcs.removed
                .alpha(0.7)
                .hex(),
            "gitDecoration.untrackedResourceForeground": scheme.vcs.added
                .alpha(0.7)
                .hex(),
            "gitDecoration.ignoredResourceForeground": scheme.common.ui
                .fade(0.5)
                .hex(),
            "gitDecoration.conflictingResourceForeground": "",
            "gitDecoration.submoduleResourceForeground": scheme.syntax.constant
                .alpha(0.7)
                .hex(),
            // Settings
            "settings.headerForeground": scheme.common.fg.hex(),
            "settings.modifiedItemIndicator": scheme.vcs.modified.hex(),
            // TERMINAL
            "terminal.background": scheme.common.bg.hex(),
            "terminal.foreground": scheme.common.fg.hex(),
            "terminal.ansiBlack": terminalColors[variant].black,
            "terminal.ansiRed": scheme.syntax.markup.darken(0.1).hex(),
            "terminal.ansiGreen": scheme.vcs.added.hex(),
            "terminal.ansiYellow": scheme.syntax.func.darken(0.1).hex(),
            "terminal.ansiBlue": scheme.syntax.entity.darken(0.1).hex(),
            "terminal.ansiMagenta": scheme.syntax.constant.darken(0.1).hex(),
            "terminal.ansiCyan": scheme.syntax.regexp.darken(0.1).hex(),
            "terminal.ansiWhite": terminalColors[variant].white,
            "terminal.ansiBrightBlack": terminalColors[variant].brightBlack,
            "terminal.ansiBrightRed": scheme.syntax.markup.hex(),
            "terminal.ansiBrightGreen": scheme.syntax.string.hex(),
            "terminal.ansiBrightYellow": scheme.syntax.func.hex(),
            "terminal.ansiBrightBlue": scheme.syntax.entity.hex(),
            "terminal.ansiBrightMagenta": scheme.syntax.constant.hex(),
            "terminal.ansiBrightCyan": scheme.syntax.regexp.hex(),
            "terminal.ansiBrightWhite": terminalColors[variant].brightWhite,
        },
        tokenColors: [
            {
                settings: {
                    background: scheme.common.bg.hex(),
                    foreground: scheme.common.fg.hex(),
                },
            },
            {
                name: "Comment",
                scope: ["comment"],
                settings: {
                    fontStyle: "italic",
                    foreground: scheme.syntax.comment.hex(),
                },
            },
            {
                name: "String",
                scope: ["string", "constant.other.symbol"],
                settings: {
                    foreground: scheme.syntax.string.hex(),
                },
            },
            {
                name: "Regular Expressions and Escape Characters",
                scope: ["string.regexp", "constant.character", "constant.other"],
                settings: {
                    foreground: scheme.syntax.regexp.hex(),
                },
            },
            {
                name: "Number",
                scope: ["constant.numeric"],
                settings: {
                    foreground: scheme.common.accent.hex(),
                },
            },
            {
                name: "Built-in constants",
                scope: ["constant.language"],
                settings: {
                    foreground: scheme.common.accent.hex(),
                },
            },
            {
                name: "Variable",
                scope: ["variable"],
                settings: {
                    foreground: scheme.common.fg.hex(),
                },
            },
            {
                name: "Member Variable",
                scope: ["variable.member"],
                settings: {
                    foreground: scheme.syntax.markup.hex(),
                },
            },
            {
                name: "Language variable",
                scope: ["variable.language"],
                settings: {
                    fontStyle: "italic",
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            // ------
            // Keywords
            {
                name: "Storage",
                scope: ["storage"],
                settings: {
                    foreground: scheme.syntax.keyword.hex(),
                },
            },
            {
                name: "Keyword",
                scope: ["keyword"],
                settings: {
                    foreground: scheme.syntax.keyword.hex(),
                },
            },
            // ------
            // Operators
            {
                name: "Operators",
                scope: ["keyword.operator"],
                settings: {
                    foreground: scheme.syntax.operator.hex(),
                },
            },
            // ------
            // Punctuation
            {
                name: "Separators like ; or ,",
                scope: ["punctuation.separator", "punctuation.terminator"],
                settings: {
                    foreground: scheme.common.fg.alpha(0.7).hex(),
                },
            },
            {
                name: "Punctuation",
                scope: ["punctuation.section"],
                settings: {
                    foreground: scheme.common.fg.hex(),
                },
            },
            {
                name: "Accessor",
                scope: ["punctuation.accessor"],
                settings: {
                    foreground: scheme.syntax.operator.hex(),
                },
            },
            // ------
            // Types
            {
                name: "Types fixes",
                scope: [
                    "source.java storage.type",
                    "source.haskell storage.type",
                    "source.c storage.type",
                ],
                settings: {
                    foreground: scheme.syntax.entity.hex(),
                },
            },
            {
                name: "Inherited class type",
                scope: ["entity.other.inherited-class"],
                settings: {
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            // Fixes
            {
                name: "Lambda arrow",
                scope: ["storage.type.function"],
                settings: {
                    foreground: scheme.syntax.keyword.hex(),
                },
            },
            {
                name: "Java primitive variable types",
                scope: ["source.java storage.type.primitive"],
                settings: {
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            // ------
            // Function/method names in definitions
            // and calls
            {
                name: "Function name",
                scope: ["entity.name.function"],
                settings: {
                    foreground: scheme.syntax.func.hex(),
                },
            },
            {
                name: "Function arguments",
                scope: ["variable.parameter", "meta.parameter"],
                settings: {
                    foreground: scheme.syntax.constant.hex(),
                },
            },
            {
                name: "Function call",
                scope: [
                    "variable.function",
                    "variable.annotation",
                    "meta.function-call.generic",
                    "support.function.go",
                ],
                settings: {
                    foreground: scheme.syntax.func.hex(),
                },
            },
            {
                name: "Library function",
                scope: ["support.function", "support.macro"],
                settings: {
                    foreground: scheme.syntax.markup.hex(),
                },
            },
            // ------
            // Import/export paths
            {
                name: "Imports and packages",
                scope: ["entity.name.import", "entity.name.package"],
                settings: {
                    foreground: scheme.syntax.string.hex(),
                },
            },
            {
                name: "Entity name",
                scope: ["entity.name"],
                settings: {
                    foreground: scheme.syntax.entity.hex(),
                },
            },
            // Tag and their attributes
            {
                name: "Tag",
                scope: ["entity.name.tag", "meta.tag.sgml"],
                settings: {
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            {
                name: "Tag start/end",
                scope: [
                    "punctuation.definition.tag.end",
                    "punctuation.definition.tag.begin",
                    "punctuation.definition.tag",
                ],
                settings: {
                    foreground: scheme.syntax.tag.alpha(0.5).hex(),
                },
            },
            {
                name: "Tag attribute",
                scope: ["entity.other.attribute-name"],
                settings: {
                    foreground: scheme.syntax.func.hex(),
                },
            },
            {
                name: "Library constant",
                scope: ["support.constant"],
                settings: {
                    fontStyle: "italic",
                    foreground: scheme.syntax.operator.hex(),
                },
            },
            {
                name: "Library class/type",
                scope: ["support.type", "support.class", "source.go storage.type"],
                settings: {
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            {
                name: "Decorators/annotation",
                scope: [
                    "meta.decorator variable.other",
                    "meta.decorator punctuation.decorator",
                    "storage.type.annotation",
                ],
                settings: {
                    foreground: scheme.syntax.special.hex(),
                },
            },
            {
                name: "Invalid",
                scope: ["invalid"],
                settings: {
                    foreground: scheme.syntax.error.hex(),
                },
            },
            {
                name: "diff.header",
                scope: ["meta.diff", "meta.diff.header"],
                settings: {
                    foreground: "#c594c5",
                },
            },
            {
                name: "Ruby class methods",
                scope: ["source.ruby variable.other.readwrite"],
                settings: {
                    foreground: scheme.syntax.func.hex(),
                },
            },
            {
                name: "CSS tag names",
                scope: [
                    "source.css entity.name.tag",
                    "source.sass entity.name.tag",
                    "source.scss entity.name.tag",
                    "source.less entity.name.tag",
                    "source.stylus entity.name.tag",
                ],
                settings: {
                    foreground: scheme.syntax.entity.hex(),
                },
            },
            {
                name: "CSS browser prefix",
                scope: [
                    "source.css support.type",
                    "source.sass support.type",
                    "source.scss support.type",
                    "source.less support.type",
                    "source.stylus support.type",
                ],
                settings: {
                    foreground: scheme.syntax.comment.hex(),
                },
            },
            {
                name: "CSS Properties",
                scope: ["support.type.property-name"],
                settings: {
                    fontStyle: "normal",
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            {
                name: "Search Results Nums",
                scope: ["constant.numeric.line-number.find-in-files - match"],
                settings: {
                    foreground: scheme.syntax.comment.hex(),
                },
            },
            {
                name: "Search Results Match Nums",
                scope: ["constant.numeric.line-number.match"],
                settings: {
                    foreground: scheme.syntax.keyword.hex(),
                },
            },
            {
                name: "Search Results Lines",
                scope: ["entity.name.filename.find-in-files"],
                settings: {
                    foreground: scheme.syntax.string.hex(),
                },
            },
            {
                scope: ["message.error"],
                settings: {
                    foreground: scheme.syntax.error.hex(),
                },
            },
            {
                name: "Markup heading",
                scope: ["markup.heading", "markup.heading entity.name"],
                settings: {
                    fontStyle: "bold",
                    foreground: scheme.syntax.string.hex(),
                },
            },
            {
                name: "Markup links",
                scope: ["markup.underline.link", "string.other.link"],
                settings: {
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            {
                name: "Markup Italic",
                scope: ["markup.italic"],
                settings: {
                    fontStyle: "italic",
                    foreground: scheme.syntax.markup.hex(),
                },
            },
            {
                name: "Markup Bold",
                scope: ["markup.bold"],
                settings: {
                    fontStyle: "bold",
                    foreground: scheme.syntax.markup.hex(),
                },
            },
            {
                name: "Markup Bold/italic",
                scope: ["markup.italic markup.bold", "markup.bold markup.italic"],
                settings: {
                    fontStyle: "bold italic",
                },
            },
            {
                name: "Markup Code",
                scope: ["markup.raw"],
                settings: {
                    background: scheme.common.fg.alpha(0.02).hex(),
                },
            },
            {
                name: "Markup Code Inline",
                scope: ["markup.raw.inline"],
                settings: {
                    background: scheme.common.fg.alpha(0.06).hex(),
                },
            },
            {
                name: "Markdown Separator",
                scope: ["meta.separator"],
                settings: {
                    fontStyle: "bold",
                    background: scheme.common.fg.alpha(0.06).hex(),
                    foreground: scheme.syntax.comment.hex(),
                },
            },
            {
                name: "Markup Blockquote",
                scope: ["markup.quote"],
                settings: {
                    foreground: scheme.syntax.regexp.hex(),
                    fontStyle: "italic",
                },
            },
            {
                name: "Markup List Bullet",
                scope: ["markup.list punctuation.definition.list.begin"],
                settings: {
                    foreground: scheme.syntax.func.hex(),
                },
            },
            {
                name: "Markup added",
                scope: ["markup.inserted"],
                settings: {
                    foreground: scheme.vcs.added.hex(),
                },
            },
            {
                name: "Markup modified",
                scope: ["markup.changed"],
                settings: {
                    foreground: scheme.vcs.modified.hex(),
                },
            },
            {
                name: "Markup removed",
                scope: ["markup.deleted"],
                settings: {
                    foreground: scheme.vcs.removed.hex(),
                },
            },
            {
                name: "Markup Strike",
                scope: ["markup.strike"],
                settings: {
                    foreground: scheme.syntax.special.hex(),
                },
            },
            {
                name: "Markup Table",
                scope: ["markup.table"],
                settings: {
                    background: scheme.common.fg.alpha(0.06).hex(),
                    foreground: scheme.syntax.tag.hex(),
                },
            },
            {
                name: "Markup Raw Inline",
                scope: ["text.html.markdown markup.inline.raw"],
                settings: {
                    foreground: scheme.syntax.operator.hex(),
                },
            },
            {
                name: "Markdown - Line Break",
                scope: ["text.html.markdown meta.dummy.line-break"],
                settings: {
                    background: scheme.syntax.comment.hex(),
                    foreground: scheme.syntax.comment.hex(),
                },
            },
            {
                name: "Markdown - Raw Block Fenced",
                scope: ["punctuation.definition.markdown"],
                settings: {
                    background: scheme.common.fg.hex(),
                    foreground: scheme.syntax.comment.hex(),
                },
            },
        ],
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMkI7QUFDM0Isd0NBQXVDO0FBQ3ZDLGtDQUFxQztBQUlyQyxJQUFNLGNBQWMsR0FBRztJQUNyQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsU0FBUztRQUNoQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztLQUN2QjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQzdCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDL0IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLFNBQVM7S0FDdkI7Q0FDRixDQUFDO0FBRUYsbUJBQWUsVUFBQyxPQUFtQixFQUFFLFFBQWlCO0lBQ3BELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtJQUNqRixPQUFPO1FBQ0wsSUFBSSxFQUFFLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUM1QyxNQUFNLEVBQUU7WUFDTix1RkFBdUY7WUFFdkYs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