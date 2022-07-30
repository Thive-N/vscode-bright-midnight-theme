import {
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
} from "./templates";

const BaseColorsMap: BaseColors = {
    focusBorder: "focusBorder",
    foreground: "foreground",
    disabledForeground: "disabledForeground",
    widgetShadow: "widget.shadow",
    selectionBackground: "selection.background",
    descriptionForeground: "descriptionForeground",
    errorForeground: "errorForeground",
    iconForeground: "icon.foreground",
    sashHoverBorder: "sash.hoverBorder",
};

const windowBorderMap: WindowBorder = {
    activeBorder: "window.activeBorder",
    inactiveBorder: "window.inactiveBorder",
};

const textColorsMap: TextColors = {
    blockQuoteBackground: "textBlockQuote.background",
    blockQuoteBorder: "textBlockQuote.border",
    codeBlockBackground: "textCodeBlock.background",
    linkActiveForeground: "textLink.activeForeground",
    linkForeground: "textLink.foreground",
    preformatForeground: "textPreformat.foreground",
    seperatorForeground: "textSeparator.foreground",
};

const actionColorsMap: ActionColors = {
    hoverBackground: "toolbar.hoverBackground",
    hoverOutline: "toolbar.hoverOutline",
    activeBackground: "toolbar.activeBackground",
};
