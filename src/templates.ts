// required variables to make the theme
interface Defaults {
    name: string;
    type: string;
}

// group for base colors that are used if not overriden by another color
interface BaseColors {
    // border color for a focused item
    focusBorder?: string;

    // overall freground color if this is not overriden
    foreground?: string;

    // foreground color for disabled elements
    disabledForeground?: string;

    // shadow color of widgets e.g the find and replace element
    widgetShadow?: string;

    // background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal)
    selectionBackground?: string;

    // foreground color for description text providing additional information, for example for a label
    descriptionForeground?: string;

    // overall foreground color for error messages (this color is only used if not overridden by a component)
    errorForeground?: string;

    // the default color for icons in the workbench
    iconForeground?: string;

    // the hover border color for draggable sashes
    sashHoverBorder?: string;
}

// the theme colors for the vscode window border
interface WindowBorder {
    // border color if the window is active
    activeBorder?: string;

    // border color if the window is inactive
    inactiveBorder?: string;
}

// Colors inside a text document, such as the welcome page
interface TextColors {
    // background color for block quotes in text
    blockQuoteBackground?: string;

    // border color for block quotes in text
    blockQuoteBorder?: string;

    // background color for code block in text
    codeBlockBackground?: string;

    // foreground color for links in text when clicked on and on mouse hover
    linkActiveForeground?: string;

    // foreground color for links
    linkForeground?: string;

    // foreground color for preformatted text segments
    preformatForeground?: string;

    // text seperator colors
    seperatorForeground?: string;
}

// a set of colors to control the interactions with actions across the workbench
interface ActionColors {
    // toolbar bacground when hovering over actions using the mouse
    hoverBackground?: string;

    // toolbar outline when hovering over actions using the mouse
    hoverOutline?: string;

    //toolbar background when holding the mouse over actions
    activeBackground?: string;
}

// a set of colors for button widgets such as Open Folder button in the Explorer of a new window.
interface ButtonControl {
    // Button background color
    buttonBackground?: string;

    // Button foreground color
    buttonForeground?: string;

    // Button border color.
    buttonBorder?: string;

    // Button background color when hovering
    hoverBackground?: string;

    // Secondary button foreground color
    secondaryForeground?: string;

    // Secondary button background color
    secondaryBackground?: string;

    // Secondary button background color when hovering
    secondaryHoverBackground?: string;

    // Background color of checkbox widget
    checkboxBackground?: string;
    // Foreground color of checkbox widget
    checkboxForeground?: string;
    // Border color of checkbox widget
    checkboxBorder?: string;
}

// A set of colors for all Dropdown widgets
// this is not used on MacOS
interface DropdownControl {
    // Dropdown background
    background?: string;

    // Dropdown list background
    listBackground?: string;

    // Dropdown border
    border?: string;

    // Dropdown Foreground
    foreground?: string;
}

interface InputControl {
    // input box base colors
    background?: string;
    border?: string;
    foreground?: string;
    placeholderForeground?: string;

    // options on input box
    activeBackground?: string;
    activeBorder?: string;
    activeForeground?: string;
    hoverBackground?: string;

    // option error severity colors
    errorBackground?: string;
    errorForeground?: string;
    errorBorder?: string;
    infoBackground?: string;
    infoForeground?: string;
    infoBorder?: string;
    warningBackground?: string;
    warningForeground?: string;
    warningBorder?: string;
}

interface ScrollbarControl {
    shadow?: string;
    activeBackground?: string;
    background?: string;
    hoverBackground?: string;
}

interface Badge {
    foreground?: string;
    background?: string;
}

interface ProgressBar {
    background?: string;
}

interface ListAndTrees {
    // Lists
    activeSelectionBackground;
    activeSelectionForeground;
    activeSelectionIconForeground;
    dropBackground;
    focusBackground;
    focusForeground;
    focusHighlightForeground;
    focusOutline;
    highlightForeground;
    hoverBackground;
    hoverForeground;
    inactiveSelectionBackground;
    inactiveSelectionForeground;
    inactiveSelectionIconForeground;
    inactiveFocusBackground;
    inactiveFocusOutline;
    invalidItemForeground;
    errorForeground;
    warningForeground;
    filterMatchBackground;
    filterMatchBorder;
    deemphasizedForeground;

    // FilterWidget on Trees
    background;
    outline;
    noMatchesOutline;

    // Tree
    indentGuidesStroke;
    tableColumnsBorder;
    tableOddRowsBackground;
}

interface ActivityBar {
    background;
    dropBorder;
    foreground;
    inactiveForeground;
    border;

    activeBorder;
    activeBackground;
    activeFocusBorder;

    BarBadgebackground;
    BarBadgeforeground;
}

interface SideBar {
    background;
    foreground;
    border;
    dropBackground;
    titleForeground;
    sectionHeaderBackground;
    sectionHeaderBoreground;
    sectionHeaderBorder;
}

interface Minimap {
    findMatchHighlight;
    selectionHighlight;
    errorHighlight;
    warningHighlight;
    background;
    selectionOccurrenceHighlight;
    foregroundOpacity;
    sliderBackground;
    sliderHoverBackground;
    sliderActiveBackground;
    gutterAddedBackground;
    gutterModifiedBackground;
    gutterDeletedBackground;
}

interface EditorTabs {
    editorGroupborder;
    editorGroupDropBackground;
    editorGroupHeaderNoTabsBackground;
    editorGroupHeaderTabsBackground;
    editorGroupHeaderTabsBorder;
    editorGroupHeaderBorder;

    lastPinnedBorder;
    inactiveForeground;
    unfocusedHoverBackground;
    hoverForeground;
    unfocusedHoverForeground;
    hoverBorder;
    unfocusedHoverBorder;
    activeModifiedBorder;
}

interface EditorColors {
    editorBackground;
    editorForeground;

    editorLineNumberForeground;
    editorLineNumberActiveForeground;
    editorCursorBackground;
    editorCursorForeground;

    editorSelectionBackground;
    editorSelectionForeground;
    editorInactiveSelectionBackground;
    editorSelectionHighlightBackground;
    editorSelectionHighlightBorder;

    editorWordHighlightBackground;
    editorWordHighlightBorder;
    editorWordHighlightStrongBackground;
    editorWordHighlightStrongBorder;

    editorFindMatchBackground;
    editorFindMatchHighlightBackground;
    editorFindRangeHighlightBackground;
    editorFindMatchBorder;
    editorFindMatchHighlightBorder;
    editorFindRangeHighlightBorder;

    searchEditorFindMatchBackground;
    searchEditorFindMatchBorder;
    searchEditorTextInputBorder;

    editorHoverHighlightBackground;

    editorLineHighlightBackground;
    editorLineHighlightBorder;

    editorUnicodeHighlightBorder;
    editorUnicodeHighlightBackground;

    editorLinkActiveForeground;

    editorRangeHighlightBackground;
    editorRangeHighlightBorder;

    editorSymbolHighlightBackground;
    editorSymbolHighlightBorder;

    editorWhitespaceForeground;

    editorIndentGuideBackground;
    editorIndentGuideActiveBackground;

    editorInlayHintBackground;
    editorInlayHintForeground;
    editorInlayHintTypeForeground;
    editorInlayHintTypeBackground;
    editorInlayHintParameterForeground;
    editorInlayHintParameterBackground;

    editorRulerForeground;

    editorLinkedEditingBackground;

    editorCodeLensForeground;

    editorLightBulbForeground;
    editorLightBulbAutoFixForeground;

    editorBracketMatchBackground;
    editorBracketMatchBorder;

    editorBracketHighlightForeground1;
    editorBracketHighlightForeground2;
    editorBracketHighlightForeground3;
    editorBracketHighlightForeground4;
    editorBracketHighlightForeground5;
    editorBracketHighlightForeground6;
    editorBracketHighlightUnexpectedBracketForeground;

    editorBracketPairGuideActiveBackground1;
    editorBracketPairGuideActiveBackground2;
    editorBracketPairGuideActiveBackground3;
    editorBracketPairGuideActiveBackground4;
    editorBracketPairGuideActiveBackground5;
    editorBracketPairGuideActiveBackground6;
    editorBracketPairGuideBackground1;
    editorBracketPairGuideBackground2;
    editorBracketPairGuideBackground3;
    editorBracketPairGuideBackground4;
    editorBracketPairGuideBackground5;
    editorBracketPairGuideBackground6;

    editorOverviewRulerBackground;
    editorOverviewRulerBorder;
    editorOverviewRulerFindMatchForeground;
    editorOverviewRulerRangeHighlightForeground;
    editorOverviewRulerSelectionHighlightForeground;
    editorOverviewRulerWordHighlightForeground;
    editorOverviewRulerWordHighlightStrongForeground;
    editorOverviewRulerModifiedForeground;
    editorOverviewRulerAddedForeground;
    editorOverviewRulerDeletedForeground;
    editorOverviewRulerErrorForeground;
    editorOverviewRulerWarningForeground;
    editorOverviewRulerInfoForeground;
    editorOverviewRulerBracketMatchForeground;

    editorErrorForeground;
    editorErrorBorder;
    editorErrorBackground;
    editorWarningForeground;
    editorWarningBorder;
    editorWarningBackground;
    editorInfoForeground;
    editorInfoBorder;
    editorInfoBackground;
    editorHintForeground;
    editorHintBorder;
    problemsErrorIconForeground;
    problemsWarningIconForeground;
    problemsInfoIconForeground;

    editorUnnecessaryCodeBorder;
    editorUnnecessaryCodeOpacity;

    editorGutterBackground;
    editorGutterModifiedBackground;
    editorGutterAddedBackground;
    editorGutterDeletedBackground;
    editorGutterCommentRangeForeground;
    editorGutterFoldingControlForeground;

    editorCommentsWidgetResolvedBorder;
    editorCommentsWidgetUnresolvedBorder;
    editorCommentsWidgetRangeBackground;
    editorCommentsWidgetRangeBorder;
    editorCommentsWidgetRangeActiveBackground;
    editorCommentsWidgetRangeActiveBorder;
}

interface DiffEditorColors {
    insertedTextBackground;
    insertedTextBorder;
    removedTextBackground;
    removedTextBorder;
    border;
    diagonalFill;
    insertedLineBackground;
    removedLineBackground;
    diffEditorInsertedLineBackground;
    diffEditorRemovedLineBackground;
    OverviewInsertedForeground;
    OverviewRemovedForeground;
}

interface EditorWidgetColors {}

interface Theme {
    defaults: Defaults;
    baseColors?: BaseColors;
    windowBorder?: WindowBorder;
    textColors?: TextColors;
}
export {
    Theme,
    Defaults,
    BaseColors,
    WindowBorder,
    TextColors,
    ActionColors,
    ButtonControl,
    DropdownControl,
    InputControl,
    ScrollbarControl,
    Badge,
    ProgressBar,
    ListAndTrees,
    ActivityBar,
    SideBar,
    Minimap,
    EditorColors,
    EditorTabs,
    DiffEditorColors,
};
