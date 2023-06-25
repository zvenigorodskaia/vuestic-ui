import { defineApiDescription } from "~/modules/page-config/runtime";

export default defineApiDescription({
  props: {
    ampm: "Use 12-hours time format.",
    hoursFilter: "Function that allows you to hide some specific hours",
    minutesFilter: "Function that allows you to hide some specific minutes",
    secondsFilter: "Function that allows you to hide some specific seconds",
    view: "View specifying which columns will be shown",
    periodUpdatesModelValue: "If user will change period it will automatically update model value. You can turn off it and am/pm switch will only change view.",
    format: "Custom function that format model value as input text",
    parse: "Custom function that parses text from VaInput",
    manualInput: "Allows user to manually input date in VaInput",
    isOpen: "Value for dropdown. If `true`, then dropdown is shown",
    value: "The input value",
    type: "Sets input type",
    label: "Sets input label",
    placeholder: "Sets input placeholder",
    mask: "Sets input mask if using as string or options for mask",
    color: "Sets input color",
    removable: "Adds an button that clears the value",
    tabindex: "Sets input tabindex",
    returnRaw: "Sets possibility to return raw value",
    clearValue: "Sets value that should be set after clearing",
    autosize: "Sets textarea possibility to grow up automatically",
    minRows: "Minimal count of lines",
    maxRows: "Maximum count of lines",
    rules: "Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message",
    disabled: "Disable the input",
    readonly: "Puts input in readonly state",
    success: "Sets input state to success",
    messages: "Displays a list of messages or message if using a string",
    error: "Sets input state to error",
    errorMessages: "Displays a list of error messages or message if using a string",
    errorCount: "Number of error messages displayed",
    clearable: "Adds a button to reset the input field value",
    bordered: "Applies underscore",
    focused: "Applies focus style",
    canBeFocused: "If false, then input can not be focused using mouse or keyboard",
    icon: "Sets an icon. The default icon position is on the right",
    ariaLabel: "The aria-label of the component",
    closeOnAnchorClick: "Dropdown will be closed when anchor is clicked",
    closeOnContentClick: "Dropdown will be closed when clicked inside dropdown content",
    framed: "Adds borders to center of the picker",
    hoverOutTimeout: "Time in `ms` after mouse leave dropdown before it will be closed",
    hoverOverTimeout: "Time in `ms` after mouse enter dropdown before it will be opened",
    keepAnchorWidth: "If true, dropdown content will have exact same width as anchor",
    offset: "Dropdown content will be moved by main and cross axis according to current `placement`",
    placement: "Sets the placement of the dropdown content. [More about placements](/ui-elements/dropdown#placement-and-offset)",
    trigger: "Action that will triggered when open and close dropdown."
  },
});