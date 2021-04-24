import * as ayu from "ayu";
export declare type SchemeName = keyof typeof ayu;
declare const _default: (variant: SchemeName, bordered: boolean) => {
    type: string;
    colors: {
        focusBorder: string;
        foreground: string;
        "widget.shadow": string;
        "selection.background": string;
        "textBlockQuote.background": string;
        "textLink.foreground": string;
        "textLink.activeForeground": string;
        "textPreformat.foreground": string;
        "button.background": string;
        "button.foreground": string;
        "button.hoverBackground": string;
        "dropdown.background": string;
        "dropdown.foreground": string;
        "dropdown.border": string;
        "input.background": string;
        "input.border": string;
        "input.foreground": string;
        "input.placeholderForeground": string;
        "inputOption.activeBorder": string;
        "inputValidation.errorBackground": string;
        "inputValidation.errorBorder": string;
        "inputValidation.infoBackground": string;
        "inputValidation.infoBorder": string;
        "inputValidation.warningBackground": string;
        "inputValidation.warningBorder": string;
        "scrollbar.shadow": string;
        "scrollbarSlider.background": string;
        "scrollbarSlider.hoverBackground": string;
        "scrollbarSlider.activeBackground": string;
        "badge.background": string;
        "badge.foreground": string;
        "progressBar.background": string;
        "list.activeSelectionBackground": string;
        "list.activeSelectionForeground": string;
        "list.focusBackground": string;
        "list.focusForeground": string;
        "list.highlightForeground": string;
        "list.hoverBackground": string;
        "list.hoverForeground": string;
        "list.inactiveSelectionBackground": string;
        "list.inactiveSelectionForeground": string;
        "list.invalidItemForeground": string;
        "activityBar.background": string;
        "activityBar.foreground": string;
        "activityBar.border": string;
        "activityBarBadge.background": string;
        "activityBarBadge.foreground": string;
        "sideBar.background": string;
        "sideBar.border": string;
        "sideBarTitle.foreground": string;
        "sideBarSectionHeader.background": string;
        "sideBarSectionHeader.foreground": string;
        "editorGroup.border": string;
        "editorGroup.background": string;
        "editorGroupHeader.noTabsBackground": string;
        "editorGroupHeader.tabsBackground": string;
        "editorGroupHeader.tabsBorder": string;
        "tab.activeBackground": string;
        "tab.activeForeground": string;
        "tab.border": string;
        "tab.activeBorder": string;
        "tab.activeBorderTop": string;
        "tab.unfocusedActiveBorder": string;
        "tab.unfocusedActiveBorderTop": string;
        "tab.inactiveBackground": string;
        "tab.inactiveForeground": string;
        "tab.unfocusedActiveForeground": string;
        "tab.unfocusedInactiveForeground": string;
        "editor.background": string;
        "editor.foreground": string;
        "editorLineNumber.foreground": string;
        "editorLineNumber.activeForeground": string;
        "editorCursor.foreground": string;
        "editor.selectionBackground": string;
        "editor.inactiveSelectionBackground": string;
        "editor.selectionHighlightBackground": string;
        "editor.selectionHighlightBorder": string;
        "editor.wordHighlightBackground": string;
        "editor.wordHighlightStrongBackground": string;
        "editor.findMatchBackground": string;
        "editor.findMatchBorder": string;
        "editor.findMatchHighlightBackground": string;
        "editor.findMatchHighlightBorder": string;
        "editor.findRangeHighlightBackground": string;
        "editor.findRangeHighlightBorder": string;
        "editor.lineHighlightBackground": string;
        "editorLink.activeForeground": string;
        "editor.rangeHighlightBackground": string;
        "editorWhitespace.foreground": string;
        "editorIndentGuide.background": string;
        "editorIndentGuide.activeBackground": string;
        "editorRuler.foreground": string;
        "editorCodeLens.foreground": string;
        "editorBracketMatch.background": string;
        "editorBracketMatch.border": string;
        "editorOverviewRuler.border": string;
        "editorOverviewRuler.modifiedForeground": string;
        "editorOverviewRuler.addedForeground": string;
        "editorOverviewRuler.deletedForeground": string;
        "editorOverviewRuler.errorForeground": string;
        "editorOverviewRuler.warningForeground": string;
        "editorError.foreground": string;
        "editorWarning.foreground": string;
        "editorGutter.modifiedBackground": string;
        "editorGutter.addedBackground": string;
        "editorGutter.deletedBackground": string;
        "diffEditor.insertedTextBackground": string;
        "diffEditor.removedTextBackground": string;
        "editorWidget.background": string;
        "editorSuggestWidget.background": string;
        "editorSuggestWidget.border": string;
        "editorSuggestWidget.highlightForeground": string;
        "editorSuggestWidget.selectedBackground": string;
        "editorHoverWidget.background": string;
        "editorHoverWidget.border": string;
        "debugExceptionWidget.border": string;
        "debugExceptionWidget.background": string;
        "editorMarkerNavigation.background": string;
        "peekView.border": string;
        "peekViewEditor.background": string;
        "peekViewEditor.matchHighlightBackground": string;
        "peekViewResult.background": string;
        "peekViewResult.fileForeground": string;
        "peekViewResult.matchHighlightBackground": string;
        "peekViewTitle.background": string;
        "peekViewTitleDescription.foreground": string;
        "peekViewTitleLabel.foreground": string;
        "panel.background": string;
        "panel.border": string;
        "panelTitle.activeBorder": string;
        "panelTitle.activeForeground": string;
        "panelTitle.inactiveForeground": string;
        "statusBar.background": string;
        "statusBar.foreground": string;
        "statusBar.border": string;
        "statusBar.debuggingBackground": string;
        "statusBar.debuggingForeground": string;
        "statusBar.noFolderBackground": string;
        "statusBarItem.activeBackground": string;
        "statusBarItem.hoverBackground": string;
        "statusBarItem.prominentBackground": string;
        "statusBarItem.prominentHoverBackground": string;
        "titleBar.activeBackground": string;
        "titleBar.activeForeground": string;
        "titleBar.inactiveBackground": string;
        "titleBar.inactiveForeground": string;
        "titleBar.border": string;
        "extensionButton.prominentForeground": string;
        "extensionButton.prominentBackground": string;
        "extensionButton.prominentHoverBackground": string;
        "pickerGroup.border": string;
        "pickerGroup.foreground": string;
        "debugToolBar.background": string;
        "walkThrough.embeddedEditorBackground": string;
        "gitDecoration.modifiedResourceForeground": string;
        "gitDecoration.deletedResourceForeground": string;
        "gitDecoration.untrackedResourceForeground": string;
        "gitDecoration.ignoredResourceForeground": string;
        "gitDecoration.conflictingResourceForeground": string;
        "gitDecoration.submoduleResourceForeground": string;
        "settings.headerForeground": string;
        "settings.modifiedItemIndicator": string;
        "terminal.background": string;
        "terminal.foreground": string;
        "terminal.ansiBlack": string;
        "terminal.ansiRed": string;
        "terminal.ansiGreen": string;
        "terminal.ansiYellow": string;
        "terminal.ansiBlue": string;
        "terminal.ansiMagenta": string;
        "terminal.ansiCyan": string;
        "terminal.ansiWhite": string;
        "terminal.ansiBrightBlack": string;
        "terminal.ansiBrightRed": string;
        "terminal.ansiBrightGreen": string;
        "terminal.ansiBrightYellow": string;
        "terminal.ansiBrightBlue": string;
        "terminal.ansiBrightMagenta": string;
        "terminal.ansiBrightCyan": string;
        "terminal.ansiBrightWhite": string;
    };
    tokenColors: ({
        settings: {
            background: string;
            foreground: string;
            fontStyle?: undefined;
        };
        name?: undefined;
        scope?: undefined;
    } | {
        name: string;
        scope: string[];
        settings: {
            fontStyle: string;
            foreground: string;
            background?: undefined;
        };
    } | {
        name: string;
        scope: string[];
        settings: {
            foreground: string;
            background?: undefined;
            fontStyle?: undefined;
        };
    } | {
        scope: string[];
        settings: {
            foreground: string;
            background?: undefined;
            fontStyle?: undefined;
        };
        name?: undefined;
    } | {
        name: string;
        scope: string[];
        settings: {
            fontStyle: string;
            background?: undefined;
            foreground?: undefined;
        };
    } | {
        name: string;
        scope: string[];
        settings: {
            background: string;
            foreground?: undefined;
            fontStyle?: undefined;
        };
    } | {
        name: string;
        scope: string[];
        settings: {
            fontStyle: string;
            background: string;
            foreground: string;
        };
    } | {
        name: string;
        scope: string[];
        settings: {
            background: string;
            foreground: string;
            fontStyle?: undefined;
        };
    })[];
};
export default _default;
