function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Svg, { Path } from "react-native-svg";
import * as React from "react-native";
import wrapIcon from "../utils/wrapIcon";

const AccessTimeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const AccessTimeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessTimeFilledIcon, 'AccessTimeFilled');

const AccessTimeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

export const AccessTimeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessTimeRegularIcon, 'AccessTimeRegular');

const AccessibilityFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z",
    fill: primaryFill
  }));
};

export const AccessibilityFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessibilityFilledIcon, 'AccessibilityFilled');

const AccessibilityRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z",
    fill: primaryFill
  }));
};

export const AccessibilityRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessibilityRegularIcon, 'AccessibilityRegular');

const AccessibilityCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const AccessibilityCheckmarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessibilityCheckmarkFilledIcon, 'AccessibilityCheckmarkFilled');

const AccessibilityCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const AccessibilityCheckmarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AccessibilityCheckmarkRegularIcon, 'AccessibilityCheckmarkRegular');

const AddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75Z",
    fill: primaryFill
  }));
};

export const AddFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddFilledIcon, 'AddFilled');

const AddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V2.5Z",
    fill: primaryFill
  }));
};

export const AddRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddRegularIcon, 'AddRegular');

const AddCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM6 10c0 .28.22.5.5.5h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

export const AddCircleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddCircleFilledIcon, 'AddCircleFilled');

const AddCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
    fill: primaryFill
  }));
};

export const AddCircleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddCircleRegularIcon, 'AddCircleRegular');

const AddSquareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5.5 3.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

export const AddSquareFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSquareFilledIcon, 'AddSquareFilled');

const AddSquareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm5 2c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const AddSquareRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSquareRegularIcon, 'AddSquareRegular');

const AddSquareMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 0 1-4 4H7a2 2 0 0 1-1.73-1H13a3 3 0 0 0 3-3V5.27ZM15 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5Zm-3 4a.5.5 0 0 1-.5.5h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1h2v-2a.5.5 0 1 1 1 0v2h2c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
};

export const AddSquareMultipleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSquareMultipleFilledIcon, 'AddSquareMultipleFilled');

const AddSquareMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 5.27V13a3 3 0 0 1-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73ZM11.5 9.5a.5.5 0 0 0 0-1h-2v-2a.5.5 0 1 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2ZM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8Zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z",
    fill: primaryFill
  }));
};

export const AddSquareMultipleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSquareMultipleRegularIcon, 'AddSquareMultipleRegular');

const AddSubtractCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 12a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17ZM5.5 7c0-.28.22-.5.5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AddSubtractCircleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSubtractCircleFilledIcon, 'AddSubtractCircleFilled');

const AddSubtractCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-3-7a.5.5 0 0 0-1 0v1H6a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 1 0 0-1H8v-1ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17Zm-5.3-2.42a7 7 0 0 1 9.87-9.87l-9.86 9.87Z",
    fill: primaryFill
  }));
};

export const AddSubtractCircleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AddSubtractCircleRegularIcon, 'AddSubtractCircleRegular');

const AirplaneFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 2c.6 0 1.16.36 1.4.92l2.37 5.4 3.23-.2a1.88 1.88 0 0 1 2 1.76V10c0 1.04-.84 1.88-1.88 1.88H16l-3.23-.2-2.37 5.4c-.24.56-.8.92-1.4.92a.88.88 0 0 1-.88-.88v-.06l.7-5.63-2.46-.16-1.14 2.28a.8.8 0 0 1-.72.45.5.5 0 0 1-.5-.5v-2.38l-1.06-.06a1 1 0 0 1-.94-1v-.12a1 1 0 0 1 .94-1L4 8.88V6.5c0-.28.22-.5.5-.5.3 0 .59.17.72.45l1.14 2.28 2.46-.16L8.12 3A.88.88 0 0 1 9 2Z",
    fill: primaryFill
  }));
};

export const AirplaneFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AirplaneFilledIcon, 'AirplaneFilled');

const AirplaneRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.78 8.29 8.1 2.81a1.16 1.16 0 0 1 1-1.3h.08l.17-.01c.6 0 1.13.35 1.37.9l2.51 5.74 2.75-.09c1.03-.03 1.9.73 2 1.74l.02.15V10c0 1.08-.87 1.95-1.96 1.95l-2.8-.1-2.52 5.75c-.24.55-.78.9-1.37.9h-.1a1.16 1.16 0 0 1-1.15-1.3l.68-5.5-2.14-.06-.96 1.67c-.24.43-.7.69-1.18.69a1 1 0 0 1-1-1v-1.47h-.16a1.53 1.53 0 0 1 0-3.05l.16-.01V7a1 1 0 0 1 1-1c.49 0 .94.26 1.18.69l.96 1.67 2.14-.07Zm.57-5.79h-.12a.16.16 0 0 0-.14.18l.82 6.57-3.84.13-1.26-2.2A.36.36 0 0 0 4.5 7v2.43l-.98.04a.53.53 0 0 0 0 1.06l.98.04V13h.08c.1-.03.18-.1.23-.18l1.26-2.2 3.84.13-.82 6.59c0 .09.07.16.16.16h.1a.5.5 0 0 0 .45-.3l2.79-6.36 3.46.11c.52 0 .95-.42.95-.95v-.03a.95.95 0 0 0-.98-.92l-3.43.11L9.8 2.8a.5.5 0 0 0-.45-.3Z",
    fill: primaryFill
  }));
};

export const AirplaneRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AirplaneRegularIcon, 'AirplaneRegular');

const AirplaneTakeOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m11.3 5.49.38-.33A4.9 4.9 0 0 1 14.5 4c.2 0 .38.02.55.06 1.24.24 2.15 1.22 2.67 1.93.6.8.1 1.82-.74 2.09L12.8 9.43l-3.1 4c-.97 1.26-2.97.35-2.65-1.2l.29-1.47-3.02 1.04A1.75 1.75 0 0 1 2 10.15V7.16c0-.08 0-.15.02-.22.16-.9 1.28-1.21 1.9-.62.1.1.18.2.25.34l.59 1.23 5.8-1.94c.26-.08.5-.25.74-.46ZM5.38 6.62l3.73-1.24-1.6-1.1a1.6 1.6 0 0 0-2.17 2.3l.04.04ZM2.75 16.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z",
    fill: primaryFill
  }));
};

export const AirplaneTakeOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AirplaneTakeOffFilledIcon, 'AirplaneTakeOffFilled');

const AirplaneTakeOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.5 4c-1.41-.01-2.63.96-3.2 1.49-.23.21-.48.38-.74.46l-.41.14L7.5 4.28a1.6 1.6 0 0 0-2.17 2.3l.7.88-1.28.43-.6-1.23C3.65 5.57 2 5.95 2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.6-.8-1.7-1.97-3.22-1.98ZM7.04 7.13l-.9-1.17a.6.6 0 0 1 .8-.86L8.96 6.5l-1.92.64Zm4.94-.91c.55-.51 1.51-1.23 2.52-1.22 1 0 1.85.8 2.41 1.58.07.1.08.2.04.3-.04.1-.13.2-.28.25l-4.32 1.4a.5.5 0 0 0-.25.16l-3.19 4.13c-.32.42-.99.12-.88-.4l.29-1.47a1 1 0 0 0-1.3-1.14l-3.03 1.04c-.48.17-.99-.19-.99-.7V7.16c0-.05.02-.08.03-.1a.15.15 0 0 1 .08-.04l.1.01.06.07.78 1.62c.1.22.37.33.6.25l6.23-2.07c.43-.14.8-.4 1.1-.68ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

export const AirplaneTakeOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AirplaneTakeOffRegularIcon, 'AirplaneTakeOffRegular');

const AlbumFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 6c0-1.1.9-2 2-2v12a2 2 0 0 1-2-2V6Zm7 2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1ZM5 16V4h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5Zm4.5-9C8.67 7 8 7.67 8 8.5v1c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-4Z",
    fill: primaryFill
  }));
};

export const AlbumFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlbumFilledIcon, 'AlbumFilled');

const AlbumRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 8.5C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 8 9.5v-1ZM9.5 8a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4 9h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v10ZM5 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V5Z",
    fill: primaryFill
  }));
};

export const AlbumRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlbumRegularIcon, 'AlbumRegular');

const AlbumAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4a2 2 0 0 0-2 2v3.26A5.49 5.49 0 0 1 4 8.2V4Zm12 12h-5.6a5.48 5.48 0 0 0 0-5h3.1c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-4C8.67 7 8 7.67 8 8.5v.1a5.48 5.48 0 0 0-3-.58V4h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-2.5-6H9.74A5.53 5.53 0 0 0 9 9.26V8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
};

export const AlbumAddFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlbumAddFilledIcon, 'AlbumAddFilled');

const AlbumAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5.6c.16-.32.3-.65.4-1H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v3.02a5.57 5.57 0 0 0-1 0V5H4a1 1 0 0 0-1 1v2.6c-.36.18-.7.4-1 .66V6Zm11.5 5h-3.1a5.5 5.5 0 0 0-.66-1h3.76a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.76a5.5 5.5 0 0 0-1-.66v-.1C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
};

export const AlbumAddRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlbumAddRegularIcon, 'AlbumAddRegular');

const AlertFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.45 16a2.5 2.5 0 0 1-4.9 0h4.9ZM10 2a5.92 5.92 0 0 1 5.98 5.36l.02.22V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Z",
    fill: primaryFill
  }));
};

export const AlertFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertFilledIcon, 'AlertFilled');

const AlertRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2a5.92 5.92 0 0 1 5.98 5.36l.02.22V11.4l.92 2.22a1 1 0 0 1 .06.17l.01.08.01.13a1 1 0 0 1-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm1.5 13h-3v.15a1.5 1.5 0 0 0 1.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15ZM10 3a4.9 4.9 0 0 0-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0 0 10 3Z",
    fill: primaryFill
  }));
};

export const AlertRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertRegularIcon, 'AlertRegular');

const AlertBadgeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.45 16a2.5 2.5 0 0 1-4.9 0h4.9ZM10 2c1.09 0 2.11.28 3 .77a3 3 0 0 0 3 5.06v3.58l.95 2.59.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: primaryFill
  }));
};

export const AlertBadgeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertBadgeFilledIcon, 'AlertBadgeFilled');

const AlertBadgeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2c1.09 0 2.11.28 3 .77-.26.23-.47.5-.64.8A5.16 5.16 0 0 0 10 3a4.9 4.9 0 0 0-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V8a3 3 0 0 0 1-.17v3.57l.92 2.22a1 1 0 0 1 .06.17l.01.08.01.13a1 1 0 0 1-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm1.5 13h-3v.15a1.5 1.5 0 0 0 1.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15Zm1.7-10.89A2 2 0 0 1 15 3a2 2 0 1 1-1.8 1.11Z",
    fill: primaryFill
  }));
};

export const AlertBadgeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertBadgeRegularIcon, 'AlertBadgeRegular');

const AlertOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.3 15H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57Zm13 6.68c0 .18-.06.34-.16.46L5.79 3.66A6.1 6.1 0 0 1 9.99 2a5.92 5.92 0 0 1 6 5.36v.22l.01.22v3.6l.95 2.6.03.08.01.09v.08ZM12.45 16a2.5 2.5 0 0 1-4.9 0h4.9Z",
    fill: primaryFill
  }));
};

export const AlertOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertOffFilledIcon, 'AlertOffFilled');

const AlertOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.3 15h-1.8v.17a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57ZM13.3 14 5.34 6.05a4.6 4.6 0 0 0-.32 1.33L5 7.6V11.5l-.04.2L4 14h9.3Zm-1.8 1h-3v.14a1.5 1.5 0 0 0 1.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15Zm3.54-3.32.87 2.1.86.85c.15-.17.23-.4.23-.64v-.13l-.02-.08a1 1 0 0 0-.06-.17L16 11.4V7.58l-.02-.22A5.92 5.92 0 0 0 10 2a6.1 6.1 0 0 0-4.21 1.66l.7.71A5.1 5.1 0 0 1 10 3a4.9 4.9 0 0 1 5 4.6l.01.21v3.69l.04.2Z",
    fill: primaryFill
  }));
};

export const AlertOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertOffRegularIcon, 'AlertOffRegular');

const AlertOnFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M1.8 2.1a.5.5 0 1 0-.6.8l2 1.5a.5.5 0 1 0 .6-.8l-2-1.5ZM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H1Zm11.45 9a2.5 2.5 0 0 1-4.9 0h4.9ZM10 2a5.92 5.92 0 0 1 5.98 5.35l.02.23V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.13.95-2.58V7.57A5.9 5.9 0 0 1 10 2Zm8.9.2a.5.5 0 0 0-.7-.1l-2 1.5a.5.5 0 0 0 .6.8l2-1.5a.5.5 0 0 0 .1-.7Zm.6 5.3A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

export const AlertOnFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertOnFilledIcon, 'AlertOnFilled');

const AlertOnRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M1.8 2.1a.5.5 0 1 0-.6.8l2 1.5a.5.5 0 1 0 .6-.8l-2-1.5ZM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H1Zm9-5a5.92 5.92 0 0 1 5.98 5.35l.02.23V11.4l.92 2.22a1 1 0 0 1 .06.17l.01.08.01.13a1 1 0 0 1-.75.97l-.11.02L16 15h-3.5v.16a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm1.5 13h-3v.14a1.5 1.5 0 0 0 1.36 1.35l.14.01c.78 0 1.42-.6 1.5-1.36V15ZM10 3a4.9 4.9 0 0 0-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0 0 10 3Zm8.9-.8a.5.5 0 0 0-.7-.1l-2 1.5a.5.5 0 0 0 .6.8l2-1.5a.5.5 0 0 0 .1-.7Zm.6 5.3A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

export const AlertOnRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertOnRegularIcon, 'AlertOnRegular');

const AlertSnoozeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2c.89 0 1.74.19 2.5.52A1.5 1.5 0 0 0 14 4h.63l-1.3 1.83A1.47 1.47 0 0 0 12 5H9.45l-.18.02h-.04a1.5 1.5 0 0 0-.33 2.86l-.58.69-.1.13-.01.04A1.5 1.5 0 0 0 9.5 11h2.54l.18-.02h.05a1.5 1.5 0 0 0 1.09-2.12c.19.09.4.14.64.14h2v2.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm2.45 14a2.5 2.5 0 0 1-4.9 0h4.9ZM14 2h3.5c.37 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1h-3.6a.5.5 0 0 1-.44-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.1-1h.1ZM9.5 6H12c.4 0 .62.43.43.75l-.05.07L10.57 9H12a.5.5 0 0 1 .09 1h-2.6a.5.5 0 0 1-.42-.75l.04-.07L10.93 7H9.5a.5.5 0 0 1-.1-1h.1Z",
    fill: primaryFill
  }));
};

export const AlertSnoozeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertSnoozeFilledIcon, 'AlertSnoozeFilled');

const AlertSnoozeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 11.5V8.05a5 5 0 0 1 6.36-4.87.5.5 0 1 0 .27-.96A6 6 0 0 0 4 8v3.4l-.92 2.22A1 1 0 0 0 4 15h3.5a2.5 2.5 0 0 0 5 0H16a1 1 0 0 0 .92-1.38L16 11.4V10a.5.5 0 0 0-1 0v1.5c0 .07.01.13.04.2L16 14H4l.96-2.3a.5.5 0 0 0 .04-.2ZM8.5 15h3a1.5 1.5 0 0 1-3 0ZM14 2h3.5c.38 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1H14a.5.5 0 0 1-.45-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.09-1H14ZM9.5 6H12c.4 0 .62.43.43.75l-.04.07L10.57 9H12a.5.5 0 0 1 .1 1H9.5a.5.5 0 0 1-.43-.75l.05-.07L10.93 7H9.5a.5.5 0 0 1-.09-1h.1Z",
    fill: primaryFill
  }));
};

export const AlertSnoozeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertSnoozeRegularIcon, 'AlertSnoozeRegular');

const AlertUrgentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.47 12.25a5.16 5.16 0 0 1 9.42-4.2l1.22 2.75 1.67 1.62c.38.37.27 1-.22 1.22l-9.73 4.33a.75.75 0 0 1-1.05-.65L3.68 15l-1.21-2.75Zm6.36 5.09a1.49 1.49 0 0 0 2.68-1.2l-2.68 1.2Zm3.26-12.61a.5.5 0 0 1 .69-.14 6.17 6.17 0 0 1 2.91 4.91.5.5 0 1 1-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 0 0-2.45-3.69.5.5 0 0 1-.13-.7Zm.49-2.49a.5.5 0 0 1 .68-.16c2.46 1.5 4.58 3.8 4.74 7.9a.5.5 0 0 1-1 .04c-.14-3.68-2-5.7-4.26-7.09a.5.5 0 0 1-.16-.69Z",
    fill: primaryFill
  }));
};

export const AlertUrgentFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertUrgentFilledIcon, 'AlertUrgentFilled');

const AlertUrgentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.26 2.08a.5.5 0 1 0-.52.85C15 4.31 16.86 6.34 17 10.02a.5.5 0 0 0 1-.04c-.16-4.1-2.28-6.4-4.74-7.9ZM12.1 4.73a.5.5 0 0 1 .69-.14 6.17 6.17 0 0 1 2.91 4.91.5.5 0 0 1-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 0 0-2.45-3.69.5.5 0 0 1-.13-.7Zm-7.01.7a5.16 5.16 0 0 0-2.61 6.82L3.69 15l.09 2.32c.02.53.57.87 1.05.65l9.73-4.33c.49-.21.6-.85.22-1.22L13.1 10.8 11.9 8.05a5.16 5.16 0 0 0-6.81-2.61Zm-1.7 6.41a4.16 4.16 0 0 1 7.6-3.38l1.3 2.92 1.54 1.5-9.06 4.03-.08-2.14-1.3-2.93Zm7.3 6.04c-.68.3-1.46.05-1.85-.54l2.68-1.2c.19.7-.16 1.44-.83 1.74Z",
    fill: primaryFill
  }));
};

export const AlertUrgentRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlertUrgentRegularIcon, 'AlertUrgentRegular');

const AlignBottomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 17a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1h-15ZM4 13c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8Zm7 0c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v5Z",
    fill: primaryFill
  }));
};

export const AlignBottomFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignBottomFilledIcon, 'AlignBottomFilled');

const AlignBottomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 16.5c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0-.5.5Zm9-3.5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v5Zm2 1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1Zm-7 1a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8Z",
    fill: primaryFill
  }));
};

export const AlignBottomRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignBottomRegularIcon, 'AlignBottomRegular');

const AlignCenterHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 9.5a.5.5 0 0 1-.5.5H16v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2H9v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4H2.5a.5.5 0 0 1 0-1H4V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v4h2V7c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v2h1.5c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
};

export const AlignCenterHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignCenterHorizontalFilledIcon, 'AlignCenterHorizontalFilled');

const AlignCenterHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 9.5a.5.5 0 0 1-.5.5H16v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2H9v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4H2.5a.5.5 0 0 1 0-1H4V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v4h2V7c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v2h1.5c.28 0 .5.22.5.5ZM5 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9Zm7-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5Z",
    fill: primaryFill
  }));
};

export const AlignCenterHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignCenterHorizontalRegularIcon, 'AlignCenterHorizontalRegular');

const AlignCenterVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 18a.5.5 0 0 1-.5-.5V16H8a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h2V9H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4V2.5a.5.5 0 0 1 1 0V4h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4v2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }));
};

export const AlignCenterVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignCenterVerticalFilledIcon, 'AlignCenterVerticalFilled');

const AlignCenterVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 18a.5.5 0 0 1-.5-.5V16H8a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h2V9H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4V2.5a.5.5 0 0 1 1 0V4h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4v2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5a.5.5 0 0 1-.5.5ZM6 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm2 7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8Z",
    fill: primaryFill
  }));
};

export const AlignCenterVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignCenterVerticalRegularIcon, 'AlignCenterVerticalRegular');

const AlignEndHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2Z",
    fill: primaryFill
  }));
};

export const AlignEndHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignEndHorizontalFilledIcon, 'AlignEndHorizontalFilled');

const AlignEndHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2ZM9 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

export const AlignEndHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignEndHorizontalRegularIcon, 'AlignEndHorizontalRegular');

const AlignEndVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 10c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AlignEndVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignEndVerticalFilledIcon, 'AlignEndVerticalFilled');

const AlignEndVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 8a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AlignEndVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignEndVerticalRegularIcon, 'AlignEndVerticalRegular');

const AlignLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5ZM7 11a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7ZM5 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
};

export const AlignLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignLeftFilledIcon, 'AlignLeftFilled');

const AlignLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5ZM7 11a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7Zm-1 2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1ZM5 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7Z",
    fill: primaryFill
  }));
};

export const AlignLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignLeftRegularIcon, 'AlignLeftRegular');

const AlignRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM13 11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h5Zm2-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6Z",
    fill: primaryFill
  }));
};

export const AlignRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignRightFilledIcon, 'AlignRightFilled');

const AlignRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM13 11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h5Zm1 2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1Zm1-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6Zm-2-1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z",
    fill: primaryFill
  }));
};

export const AlignRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignRightRegularIcon, 'AlignRightRegular');

const AlignSpaceAroundHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 16c.83 0 1.5-.67 1.5-1.5v-9C9 4.67 8.33 4 7.5 4h-2C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h2Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.5 16c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2Z",
    fill: primaryFill
  }));
};

export const AlignSpaceAroundHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceAroundHorizontalFilledIcon, 'AlignSpaceAroundHorizontalFilled');

const AlignSpaceAroundHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2ZM5 6v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceAroundHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceAroundHorizontalRegularIcon, 'AlignSpaceAroundHorizontalRegular');

const AlignSpaceAroundVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 11a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceAroundVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceAroundVerticalFilledIcon, 'AlignSpaceAroundVerticalFilled');

const AlignSpaceAroundVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6ZM5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 11a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z",
    fill: primaryFill
  }));
};

export const AlignSpaceAroundVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceAroundVerticalRegularIcon, 'AlignSpaceAroundVerticalRegular');

const AlignSpaceBetweenHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Z",
    fill: primaryFill
  }));
};

export const AlignSpaceBetweenHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceBetweenHorizontalFilledIcon, 'AlignSpaceBetweenHorizontalFilled');

const AlignSpaceBetweenHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3ZM2 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceBetweenHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceBetweenHorizontalRegularIcon, 'AlignSpaceBetweenHorizontalRegular');

const AlignSpaceBetweenVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 14a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceBetweenVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceBetweenVerticalFilledIcon, 'AlignSpaceBetweenVerticalFilled');

const AlignSpaceBetweenVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6ZM5 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 14a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z",
    fill: primaryFill
  }));
};

export const AlignSpaceBetweenVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceBetweenVerticalRegularIcon, 'AlignSpaceBetweenVerticalRegular');

const AlignSpaceEvenlyHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1Z",
    fill: primaryFill
  }));
};

export const AlignSpaceEvenlyHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceEvenlyHorizontalFilledIcon, 'AlignSpaceEvenlyHorizontalFilled');

const AlignSpaceEvenlyHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8Zm7 2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v8Zm7 2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8Z",
    fill: primaryFill
  }));
};

export const AlignSpaceEvenlyHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceEvenlyHorizontalRegularIcon, 'AlignSpaceEvenlyHorizontalRegular');

const AlignSpaceEvenlyVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 13a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceEvenlyVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceEvenlyVerticalFilledIcon, 'AlignSpaceEvenlyVerticalFilled');

const AlignSpaceEvenlyVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 15c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z",
    fill: primaryFill
  }));
};

export const AlignSpaceEvenlyVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceEvenlyVerticalRegularIcon, 'AlignSpaceEvenlyVerticalRegular');

const AlignSpaceFitVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 10.5a2 2 0 0 0-2 2V17c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignSpaceFitVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceFitVerticalFilledIcon, 'AlignSpaceFitVerticalFilled');

const AlignSpaceFitVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6ZM5 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 10.5a2 2 0 0 0-2 2V17c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4.5Z",
    fill: primaryFill
  }));
};

export const AlignSpaceFitVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignSpaceFitVerticalRegularIcon, 'AlignSpaceFitVerticalRegular');

const AlignStartHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Z",
    fill: primaryFill
  }));
};

export const AlignStartHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStartHorizontalFilledIcon, 'AlignStartHorizontalFilled');

const AlignStartHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8ZM7 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

export const AlignStartHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStartHorizontalRegularIcon, 'AlignStartHorizontalRegular');

const AlignStartVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 6a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignStartVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStartVerticalFilledIcon, 'AlignStartVerticalFilled');

const AlignStartVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 6a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6ZM5 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8Z",
    fill: primaryFill
  }));
};

export const AlignStartVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStartVerticalRegularIcon, 'AlignStartVerticalRegular');

const AlignStretchHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v1Z",
    fill: primaryFill
  }));
};

export const AlignStretchHorizontalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStretchHorizontalFilledIcon, 'AlignStretchHorizontalFilled');

const AlignStretchHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h6Zm1-2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v1Zm-2 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6Z",
    fill: primaryFill
  }));
};

export const AlignStretchHorizontalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStretchHorizontalRegularIcon, 'AlignStretchHorizontalRegular');

const AlignStretchVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 13c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 15a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1Z",
    fill: primaryFill
  }));
};

export const AlignStretchVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStretchVerticalFilledIcon, 'AlignStretchVerticalFilled');

const AlignStretchVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 13c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6Zm2 1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 15h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2Zm-1-2V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Z",
    fill: primaryFill
  }));
};

export const AlignStretchVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignStretchVerticalRegularIcon, 'AlignStretchVerticalRegular');

const AlignTopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM11 7c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V7ZM6 5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const AlignTopFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignTopFilledIcon, 'AlignTopFilled');

const AlignTopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM11 7c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V7Zm2-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1ZM6 5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6ZM5 7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Z",
    fill: primaryFill
  }));
};

export const AlignTopRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AlignTopRegularIcon, 'AlignTopRegular');

const AnimalCatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.97 18H13v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 0 1 3.5 3.5V18h.25c.47 0 .9-.2 1.21-.5h.04v-.04c.29-.3.47-.72.47-1.18v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 6.69 6.69 0 0 0-1.04 1.8c-.23.46-.39.96-.47 1.49l-.01.06A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Z",
    fill: primaryFill
  }));
};

export const AnimalCatFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalCatFilledIcon, 'AnimalCatFilled');

const AnimalCatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.97 18h9.28c.95 0 1.72-.77 1.72-1.72v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 8.11 8.11 0 0 0-1.52 3.35A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Zm7.97-15v1.12c0 .28.22.5.5.5h1.93c.4 0 .75.2.96.53l.5.81c.46.75-.08 1.72-.95 1.72h-.41a.5.5 0 0 0-.5.5v8.1c0 .4-.32.72-.72.72h-.72v-.72a2.93 2.93 0 0 0-2.93-2.93H9.6a.5.5 0 0 0 0 1h1.01c1.07 0 1.93.87 1.93 1.93V17h-5.9A18 18 0 0 1 7 13.05c.26-1.1.67-2.16 1.32-2.93A3.32 3.32 0 0 1 11 8.88a.5.5 0 0 0 .5-.5V4.45c0-.8.64-1.44 1.43-1.45Z",
    fill: primaryFill
  }));
};

export const AnimalCatRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalCatRegularIcon, 'AnimalCatRegular');

const AnimalDogFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 2c-.33 0-.81.1-1.23.4-.44.31-.77.84-.77 1.6v1.25c0 .13.04.34.16.5.09.12.25.25.59.25.34 0 .5-.13.6-.26a.9.9 0 0 0 .15-.49.5.5 0 1 1 1 0c0 .3-.08.71-.35 1.08-.28.39-.74.67-1.4.67-.32 0-.6-.06-.82-.18a6.5 6.5 0 0 1-1.78 3.83 7.47 7.47 0 0 0-1.89 3.48A9.33 9.33 0 0 0 6 15.95v.08a1.34 1.34 0 0 1-.13.5.82.82 0 0 1-.28.32c-.12.08-.3.15-.59.15a2 2 0 0 1-1.2-3.6.5.5 0 1 0-.6-.8A3 3 0 0 0 5 18h8v-.5c0-.4-.19-1.05-.73-1.33-.19-.1-.44-.17-.77-.17h-1a.5.5 0 0 1 0-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 0 1 1 0v2.95c.79.57 1 1.52 1 2.05v.5h2.5a.5.5 0 0 0 .5-.5c0-.87-.3-1.52-.8-1.95-.36-.29-.78-.45-1.2-.51V7h.5c.83 0 1.5-.67 1.5-1.5V4.28a1 1 0 0 0-.49-.85l-1.78-1.07A2.5 2.5 0 0 0 13.45 2H12Z",
    fill: primaryFill
  }));
};

export const AnimalDogFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalDogFilledIcon, 'AnimalDogFilled');

const AnimalDogRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.77 2.4c.42-.3.9-.4 1.23-.4h1.45c.45 0 .9.12 1.28.36l1.78 1.07c.3.18.49.5.49.85V5.5c0 .83-.67 1.5-1.5 1.5H15v8.04c.42.06.84.22 1.2.51.5.43.8 1.08.8 1.95a.5.5 0 0 1-.5.5H5a3 3 0 0 1-1.8-5.4.5.5 0 0 1 .6.8A2 2 0 0 0 5 17c.29 0 .47-.07.59-.15.12-.08.21-.2.28-.32A1.34 1.34 0 0 0 6 16v-.05a4.69 4.69 0 0 1 .03-.5c.04-.33.1-.8.23-1.32.27-1.05.8-2.4 1.89-3.48C9.99 8.8 10 6.33 10 5.5V4c0-.76.33-1.29.77-1.6Zm.15 4.5a7.51 7.51 0 0 1-2.07 4.45 6.47 6.47 0 0 0-1.61 3.02 8.33 8.33 0 0 0-.24 1.6v.06a1.78 1.78 0 0 1-.03.29 2.34 2.34 0 0 1-.22.68h6.17c-.1-.32-.3-.65-.65-.83-.19-.1-.44-.17-.77-.17h-1a.5.5 0 0 1 0-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 0 1 1 0v2.95c.58.42.85 1.04.95 1.55h2a1.2 1.2 0 0 0-.4-.68A1.64 1.64 0 0 0 14.5 16a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h1a.5.5 0 0 0 .5-.5V4.28l-1.78-1.07a1.5 1.5 0 0 0-.77-.21H12c-.17 0-.44.06-.65.2-.18.14-.35.36-.35.8v1.5c0 .09.03.23.1.33.06.08.16.17.4.17.24 0 .34-.09.4-.17.07-.1.1-.24.1-.33a.5.5 0 0 1 1 0c0 .25-.07.6-.3.92-.24.33-.64.58-1.2.58-.22 0-.4-.04-.58-.1ZM7 16h-.5Z",
    fill: primaryFill
  }));
};

export const AnimalDogRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalDogRegularIcon, 'AnimalDogRegular');

const AnimalRabbitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m12.68 4.38 4.23 4.23a2.78 2.78 0 0 1-2.6 4.67v.16c0 .86-.7 1.56-1.57 1.56H11v-1.25c0-.54-.28-.98-.67-1.28-.38-.3-.9-.47-1.43-.47H7.5a.5.5 0 1 0 0 1h1.4c.33 0 .62.1.82.26.2.15.28.33.28.49V15H5.56C4.7 15 4 14.3 4 13.44v-2.21A2.12 2.12 0 1 1 6.05 8.3C6.5 8.11 7 8 7.52 8h3.28c.47 0 .92.1 1.33.26l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 1 1 1.64-1.64Z",
    fill: primaryFill
  }));
};

export const AnimalRabbitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalRabbitFilledIcon, 'AnimalRabbitFilled');

const AnimalRabbitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.51 15.01h2.12c.91 0 1.68-.57 1.99-1.37.88.07 1.79-.23 2.46-.9a3.15 3.15 0 0 0 0-4.45l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 0 0-.54-.05H7.54c-.33 0-.65.05-.95.13A2.5 2.5 0 1 0 4 11.95v.93c0 1.18.95 2.13 2.12 2.13h4.39Zm1.64-10.23L16.38 9a2.15 2.15 0 0 1-2 3.6l-.56-.13-.06.56c-.07.56-.54.99-1.12.99h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 0 0 0 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 0 1 7.54 9h3.68c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 0 1 0-.74c.2-.2.52-.2.72 0Zm-6.5 3.77a3.55 3.55 0 0 0-1.6 2.38 1.5 1.5 0 1 1 1.6-2.38Z",
    fill: primaryFill
  }));
};

export const AnimalRabbitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalRabbitRegularIcon, 'AnimalRabbitRegular');

const AnimalRabbitOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L7.3 8.01c-.44.02-.86.13-1.25.3A2.12 2.12 0 1 0 4 11.22v2.21C4 14.3 4.7 15 5.56 15H10v-1.25c0-.16-.08-.34-.28-.49-.2-.15-.49-.26-.82-.26H7.5a.5.5 0 0 1 0-1h1.4c.54 0 1.05.17 1.43.47.39.3.67.74.67 1.28V15h1.74c.43 0 .82-.18 1.1-.45l3.3 3.3a.5.5 0 0 0 .71-.7l-15-15Zm14.06 10.39c-.42.42-.94.67-1.48.77l-5.3-5.3h.67c.47 0 .92.09 1.33.25l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 1 1 1.64-1.64l4.23 4.23a2.78 2.78 0 0 1 0 3.93Z",
    fill: primaryFill
  }));
};

export const AnimalRabbitOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalRabbitOffFilledIcon, 'AnimalRabbitOffFilled');

const AnimalRabbitOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L7.3 8.01c-.24.02-.48.06-.7.12A2.5 2.5 0 1 0 4 11.95v.93c0 1.18.95 2.13 2.12 2.13h6.51c.47 0 .9-.15 1.26-.41l3.26 3.25a.5.5 0 0 0 .7-.7l-15-15Zm10.32 11.73c-.16.08-.34.13-.54.13h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 0 0 0 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 0 1 7.54 9h.75l4.88 4.88ZM5.66 8.54a3.55 3.55 0 0 0-1.6 2.38 1.5 1.5 0 1 1 1.6-2.38Zm10.71 3.48c-.44.44-1.02.65-1.6.62l.9.9a3.15 3.15 0 0 0 1.41-5.26l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 0 0-.54-.05h-1.1l1 1h.1c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 0 1 0-.74c.2-.2.52-.2.72 0L16.38 9c.84.84.84 2.2 0 3.04Z",
    fill: primaryFill
  }));
};

export const AnimalRabbitOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalRabbitOffRegularIcon, 'AnimalRabbitOffRegular');

const AnimalTurtleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-2.5 2.08c.65-.14 1.3-.32 1.93-.55l.44 1.05a.31.31 0 0 1-.3.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75Zm-7.95-.55c.64.23 1.29.41 1.95.55l-.36.75a.31.31 0 0 1-.28.18H4.07a.3.3 0 0 1-.29-.43l.44-1.05ZM3.97 10l-.34 1.12c-.27-.26-.5-.65-.58-1.12h.92Z",
    fill: primaryFill
  }));
};

export const AnimalTurtleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalTurtleFilledIcon, 'AnimalTurtleFilled');

const AnimalTurtleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-.57 1.53.44 1.05a.31.31 0 0 1-.3.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75c.65-.14 1.3-.32 1.93-.55Zm-7.93.55-.36.75a.31.31 0 0 1-.28.18H4.07a.31.31 0 0 1-.29-.43l.44-1.05c.64.23 1.29.41 1.95.55Zm-2.54-1.96c-.27-.26-.5-.65-.58-1.12h.92l-.34 1.12ZM5.5 8.44c.27-.91.6-1.77 1.15-2.4A3.03 3.03 0 0 1 9.1 5c1.2 0 2 .43 2.56 1.05.59.63.96 1.5 1.23 2.39l.9 3.13c-3 1.1-6.25 1.1-9.25 0l.95-3.13Z",
    fill: primaryFill
  }));
};

export const AnimalTurtleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AnimalTurtleRegularIcon, 'AnimalTurtleRegular');

const AppFolderFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6Zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2ZM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3-2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z",
    fill: primaryFill
  }));
};

export const AppFolderFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppFolderFilledIcon, 'AppFolderFilled');

const AppFolderRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Zm3 0H6v2h2V6Zm-3 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Zm3 0H6v2h2v-2Zm4-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2Zm0 1h2v2h-2V6Zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm3 0h-2v2h2v-2ZM5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z",
    fill: primaryFill
  }));
};

export const AppFolderRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppFolderRegularIcon, 'AppFolderRegular');

const AppGenericFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5V7Zm2 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6Zm0 1h2v5H6V9Zm4.5 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 8.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AppGenericFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppGenericFilledIcon, 'AppGenericFilled');

const AppGenericRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7ZM5 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Zm3 0H6v5h2V9Zm2 1.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5-2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

export const AppGenericRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppGenericRegularIcon, 'AppGenericRegular');

const AppRecentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM2 6c0-1.1.9-2 2-2v12a2 2 0 0 1-2-2V6Zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
    fill: primaryFill
  }));
};

export const AppRecentFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppRecentFilledIcon, 'AppRecentFilled');

const AppRecentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 2a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2H7Zm8 3h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1V5ZM5 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v10ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z",
    fill: primaryFill
  }));
};

export const AppRecentRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppRecentRegularIcon, 'AppRecentRegular');

const AppTitleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7ZM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z",
    fill: primaryFill
  }));
};

export const AppTitleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppTitleFilledIcon, 'AppTitleFilled');

const AppTitleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7ZM4 17.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AppTitleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppTitleRegularIcon, 'AppTitleRegular');

const ApprovalsAppFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.78.72a.75.75 0 0 0-1.06 1.06L9.94 3H9.5a7.5 7.5 0 1 0 7.5 7.5.75.75 0 0 0-1.5 0 6 6 0 1 1-6.06-6l-.72.72a.75.75 0 0 0 1.06 1.06l2.25-2.25c.3-.3.3-.77 0-1.06L9.78.72Zm3.74 6.24c.3.29.3.76.02 1.06l-3.85 4a.75.75 0 0 1-1.08 0l-1.65-1.71a.75.75 0 1 1 1.08-1.04l1.11 1.15 3.31-3.44c.29-.3.76-.3 1.06-.02Z",
    fill: primaryFill
  }));
};

export const ApprovalsAppFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ApprovalsAppFilledIcon, 'ApprovalsAppFilled');

const ApprovalsAppRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.85 1.15a.5.5 0 1 0-.7.7L10.29 3H9.5a7.5 7.5 0 1 0 7.5 7.5.5.5 0 0 0-1 0A6.5 6.5 0 1 1 9.5 4h.8L9.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm3.5 5.99c.2.2.2.5.01.7l-3.85 4a.5.5 0 0 1-.72 0l-1.65-1.7a.5.5 0 0 1 .72-.7l1.29 1.34 3.49-3.63c.2-.2.5-.2.7-.01Z",
    fill: primaryFill
  }));
};

export const ApprovalsAppRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ApprovalsAppRegularIcon, 'ApprovalsAppRegular');

const AppsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 17A1.5 1.5 0 0 1 3 15.65V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.4l2.19-2.27a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.02l-.1.11-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5H4.5Zm5-6.5H4v5c0 .22.14.4.33.47l.08.02.09.01h5v-5.5Zm6 0h-5V16h5a.5.5 0 0 0 .5-.4V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.79V9.5h1.79L10.5 7.71ZM9 4.01H4.5a.5.5 0 0 0-.5.4v5.1h5.5v-5a.5.5 0 0 0-.33-.48l-.08-.02H9Z",
    fill: primaryFill
  }));
};

export const AppsFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsFilledIcon, 'AppsFilled');

const AppsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 17A1.5 1.5 0 0 1 3 15.65V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.4l2.19-2.27a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.02l-.1.11-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5H4.5Zm5-6.5H4v5c0 .22.14.4.33.47l.08.02.09.01h5v-5.5Zm6 0h-5V16h5a.5.5 0 0 0 .5-.4V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.79V9.5h1.79L10.5 7.71ZM9 4.01H4.5a.5.5 0 0 0-.5.4v5.1h5.5v-5a.5.5 0 0 0-.33-.48l-.08-.02H9Zm5.12-.84a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.61 2.62c.17.17.43.2.62.07l.08-.06 2.76-2.63a.5.5 0 0 0 .05-.64l-.05-.06-2.75-2.72Z",
    fill: primaryFill
  }));
};

export const AppsRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsRegularIcon, 'AppsRegular');

const AppsAddInFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 2.5c.41 0 .75.34.75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5c0-.41.34-.75.75-.75ZM4.75 3C3.78 3 3 3.78 3 4.75v10.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-4.5C17 9.78 16.22 9 15.25 9h-4a.25.25 0 0 1-.25-.25v-4C11 3.78 10.22 3 9.25 3h-4.5ZM4.5 4.75c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v4c0 .08 0 .17.02.25H4.5V4.75Zm5 5.75v5H4.75a.25.25 0 0 1-.25-.25V10.5h5Zm1.5 5v-5.02l.25.02h4c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25H11Z",
    fill: primaryFill
  }));
};

export const AppsAddInFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsAddInFilledIcon, 'AppsAddInFilled');

const AppsAddInRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 3a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V6h2a.5.5 0 0 0 0-1h-2V3ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11Zm6-6.5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5h-5Zm-1 5.5v-5.5H4v5a.5.5 0 0 0 .5.5h5Zm0-11.5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5v-5Z",
    fill: primaryFill
  }));
};

export const AppsAddInRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsAddInRegularIcon, 'AppsAddInRegular');

const AppsListFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-6-1c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 16.5v-1Zm0-6C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 10.5v-1Zm0-6C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1Z",
    fill: primaryFill
  }));
};

export const AppsListFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsListFilledIcon, 'AppsListFilled');

const AppsListRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1ZM3.5 3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 9.5C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 10.5v-1ZM3.5 9a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 15.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 16.5v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const AppsListRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsListRegularIcon, 'AppsListRegular');

const AppsListDetailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2Zm6 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-6 4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2Zm6 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z",
    fill: primaryFill
  }));
};

export const AppsListDetailFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsListDetailFilledIcon, 'AppsListDetailFilled');

const AppsListDetailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2ZM3 5.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2ZM9.5 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-6 4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2ZM3 12.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Zm6.5-.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z",
    fill: primaryFill
  }));
};

export const AppsListDetailRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AppsListDetailRegularIcon, 'AppsListDetailRegular');

const ArchiveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75v-1.5ZM3 8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Zm5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

export const ArchiveFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveFilledIcon, 'ArchiveFilled');

const ArchiveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2 4.75C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75ZM4 8v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8H4Z",
    fill: primaryFill
  }));
};

export const ArchiveRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveRegularIcon, 'ArchiveRegular');

const ArchiveArrowBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75v-1.5ZM3 8h14v1.6a5.48 5.48 0 0 0-5.66.4H8.5a.5.5 0 0 0 0 1h1.76a5.48 5.48 0 0 0-.66 6H6a3 3 0 0 1-3-3V8Zm11.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

export const ArchiveArrowBackFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveArrowBackFilledIcon, 'ArchiveArrowBackFilled');

const ArchiveArrowBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 10a.5.5 0 0 0 0 1h1.76c.31-.38.67-.72 1.08-1H8.5ZM6 16h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V9.6c-.32-.16-.65-.3-1-.4V8H4v6c0 1.1.9 2 2 2ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

export const ArchiveArrowBackRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveArrowBackRegularIcon, 'ArchiveArrowBackRegular');

const ArchiveMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 2C2.67 2 2 2.67 2 3.5v1C2 5.33 2.67 6 3.5 6h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11ZM15 7H3v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7ZM7 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z",
    fill: primaryFill
  }));
};

export const ArchiveMultipleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveMultipleFilledIcon, 'ArchiveMultipleFilled');

const ArchiveMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4-6C2.67 2 2 2.67 2 3.5v2c0 .66.42 1.21 1 1.42A.5.5 0 0 0 3 7v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7a.5.5 0 0 0 0-.08c.58-.2 1-.76 1-1.42v-2c0-.83-.67-1.5-1.5-1.5h-11ZM4 12.5V7h10v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 12.5Zm-1-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z",
    fill: primaryFill
  }));
};

export const ArchiveMultipleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveMultipleRegularIcon, 'ArchiveMultipleRegular');

const ArchiveSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75v-1.5ZM3 8h14v1.6a5.48 5.48 0 0 0-5.66.4H8.5a.5.5 0 0 0 0 1h1.76a5.48 5.48 0 0 0-.66 6H6a3 3 0 0 1-3-3V8Zm9.07 3.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

export const ArchiveSettingsFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveSettingsFilledIcon, 'ArchiveSettingsFilled');

const ArchiveSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.75C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V9.6c-.32-.16-.65-.3-1-.4V8H4v6c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75Zm4.75 6h2.84c-.4.28-.77.62-1.08 1H8.5a.5.5 0 0 1 0-1Zm3.57 1.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

export const ArchiveSettingsRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArchiveSettingsRegularIcon, 'ArchiveSettingsRegular');

const ArrowAutofitContentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9Zm.5 3.5h8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitContentFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitContentFilledIcon, 'ArrowAutofitContentFilled');

const ArrowAutofitContentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitContentRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitContentRegularIcon, 'ArrowAutofitContentRegular');

const ArrowAutofitDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.71 14.77-.7.73V2.75a.75.75 0 1 0-1.5 0v12.76l-.72-.74a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04ZM5 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 0 1 0 1.5H5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitDownFilledIcon, 'ArrowAutofitDownFilled');

const ArrowAutofitDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.14 15.2 15 16.36V2.5a.5.5 0 1 0-1 0v13.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7ZM5 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 1 1 0 1H5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitDownRegularIcon, 'ArrowAutofitDownRegular');

const ArrowAutofitHeightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15 4.5.71.73A.75.75 0 0 0 16.8 4.2l-1.82-1.88a1 1 0 0 0-1.44 0l-1.82 1.88a.75.75 0 0 0 1.08 1.04l.71-.74v2.76a.75.75 0 0 0 1.5 0V4.5ZM3 5c0-1.1.9-2 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5Zm12.71 9.77-.7.73v-2.75a.75.75 0 1 0-1.5 0v2.76l-.72-.74a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitHeightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitHeightFilledIcon, 'ArrowAutofitHeightFilled');

const ArrowAutofitHeightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15 3.63 1.14 1.18a.5.5 0 1 0 .72-.7l-1.82-1.88a.75.75 0 0 0-1.08 0L12.14 4.1a.5.5 0 1 0 .72.7L14 3.63V7.5a.5.5 0 0 0 1 0V3.63ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.14 10.2L15 16.36V12.5a.5.5 0 1 0-1 0v3.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitHeightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitHeightRegularIcon, 'ArrowAutofitHeightRegular');

const ArrowAutofitHeightDottedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.71 5.23-1.46-1.51-1.46 1.51a.75.75 0 0 1-1.08-1.04l1.82-1.88a1 1 0 0 1 1.44 0l1.82 1.88a.75.75 0 0 1-1.08 1.04Zm0 9.54-1.46 1.51-1.46-1.51a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04ZM14.25 12c.42 0 .75.34.75.75v.5a.75.75 0 1 1-1.5 0v-.5c0-.41.34-.75.75-.75Zm.75-1.75a.75.75 0 1 1-1.5 0v-.5a.75.75 0 0 1 1.5 0v.5ZM14.25 8c.42 0 .75-.34.75-.75v-.5a.75.75 0 1 0-1.5 0v.5c0 .41.34.75.75.75ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5h4.25a.75.75 0 0 0 0-1.5H5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitHeightDottedFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitHeightDottedFilledIcon, 'ArrowAutofitHeightDottedFilled');

const ArrowAutofitHeightDottedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.14 4.8 14.5 3.12l-1.64 1.7a.5.5 0 0 1-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 1 1-.72.7ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1H5Zm9.5 2c.28 0 .5.22.5.5V7a.5.5 0 1 1-1 0V5.5c0-.28.23-.5.5-.5Zm.5 8a.5.5 0 1 0-1 0v1.5a.5.5 0 0 0 1 0V13Zm-.5-4c.28 0 .5.22.5.5v1a.5.5 0 1 1-1 0v-1c0-.28.23-.5.5-.5Zm1.64 6.2-1.64 1.69-1.64-1.7a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitHeightDottedRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitHeightDottedRegularIcon, 'ArrowAutofitHeightDottedRegular');

const ArrowAutofitUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.71 5.23-.7-.73v12.75a.75.75 0 1 1-1.5 0V4.49l-.72.74a.75.75 0 0 1-1.08-1.04l1.82-1.88a1 1 0 0 1 1.44 0l1.82 1.88a.75.75 0 0 1-1.08 1.04ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5h4.25a.75.75 0 0 0 0-1.5H5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitUpFilledIcon, 'ArrowAutofitUpFilled');

const ArrowAutofitUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.14 4.8 15 3.64V17.5a.5.5 0 1 1-1 0V3.63L12.86 4.8a.5.5 0 0 1-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 1 1-.72.7ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1H5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitUpRegularIcon, 'ArrowAutofitUpRegular');

const ArrowAutofitWidthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.5 15-.73.71a.75.75 0 1 0 1.04 1.08l1.89-1.82a1 1 0 0 0 0-1.44l-1.89-1.82a.75.75 0 0 0-1.04 1.08l.74.71h-2.76a.75.75 0 0 0 0 1.5h2.75ZM15 3a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v4.25a.75.75 0 0 1-1.5 0V5c0-1.1.9-2 2-2h10ZM5.23 15.71l-.73-.7h2.75a.75.75 0 1 0 0-1.5H4.5l.73-.72a.75.75 0 0 0-1.04-1.08l-1.88 1.82a1 1 0 0 0 0 1.44l1.88 1.82a.75.75 0 0 0 1.04-1.08Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitWidthFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitWidthFilledIcon, 'ArrowAutofitWidthFilled');

const ArrowAutofitWidthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m16.37 15-1.18 1.14a.5.5 0 1 0 .7.72l1.88-1.82c.3-.3.3-.78 0-1.08l-1.88-1.82a.5.5 0 1 0-.7.72L16.38 14H12.5a.5.5 0 1 0 0 1h3.87ZM15 3a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V5c0-1.1.9-2 2-2h10ZM4.81 16.14 3.63 15H7.5a.5.5 0 1 0 0-1H3.63l1.18-1.14a.5.5 0 0 0-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 1 0 .69-.72Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitWidthRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitWidthRegularIcon, 'ArrowAutofitWidthRegular');

const ArrowAutofitWidthDottedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m14.77 15.71 1.51-1.46-1.51-1.46a.75.75 0 1 1 1.04-1.08l1.89 1.82a1 1 0 0 1 0 1.44l-1.89 1.82a.75.75 0 0 1-1.04-1.08Zm-9.54 0-1.5-1.46 1.5-1.46a.75.75 0 0 0-1.04-1.08l-1.88 1.82a1 1 0 0 0 0 1.44l1.88 1.82a.75.75 0 0 0 1.04-1.08ZM8 14.25c0 .42-.33.75-.75.75h-.5a.75.75 0 1 1 0-1.5h.5c.42 0 .75.34.75.75Zm1.75.75a.75.75 0 1 1 0-1.5h.5a.75.75 0 0 1 0 1.5h-.5Zm2.25-.75c0 .42.34.75.75.75h.5a.75.75 0 1 0 0-1.5h-.5a.75.75 0 0 0-.75.75ZM17 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.25a.75.75 0 0 0 1.5 0V5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v4.25a.75.75 0 1 0 1.5 0V5Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitWidthDottedFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitWidthDottedFilledIcon, 'ArrowAutofitWidthDottedFilled');

const ArrowAutofitWidthDottedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.2 16.14 1.7-1.64-1.7-1.64a.5.5 0 0 1 .69-.72l1.88 1.82c.3.3.3.79 0 1.08l-1.88 1.82a.5.5 0 1 1-.7-.72ZM17 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 1 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5a.5.5 0 1 0 1 0V5Zm-2 9.5a.5.5 0 0 1-.5.5H13a.5.5 0 1 1 0-1h1.5c.28 0 .5.23.5.5ZM7 15a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0 0 1H7Zm4-.5a.5.5 0 0 1-.5.5h-1a.5.5 0 1 1 0-1h1c.28 0 .5.23.5.5Zm-6.19 1.64-1.7-1.64 1.7-1.64a.5.5 0 0 0-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 1 0 .69-.72Z",
    fill: primaryFill
  }));
};

export const ArrowAutofitWidthDottedRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowAutofitWidthDottedRegularIcon, 'ArrowAutofitWidthDottedRegular');

const ArrowBetweenDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 1.75a.75.75 0 0 0-1.5 0v.5C3.5 3.22 4.28 4 5.25 4h9C15.22 4 16 3.22 16 2.25v-.5a.75.75 0 0 0-1.5 0v.5c0 .14-.11.25-.25.25h-9A.25.25 0 0 1 5 2.25v-.5ZM9.75 5c.41 0 .75.34.75.75v6.69l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.44V5.75c0-.41.34-.75.75-.75ZM3.5 17.75c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z",
    fill: primaryFill
  }));
};

export const ArrowBetweenDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBetweenDownFilledIcon, 'ArrowBetweenDownFilled');

const ArrowBetweenDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 2a.5.5 0 0 0-1 0v.5C3 3.33 3.67 4 4.5 4h10c.83 0 1.5-.67 1.5-1.5V2a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V2Zm5.5 3c.28 0 .5.22.5.5v7.8l3.65-3.65a.5.5 0 0 1 .7.7l-4.5 4.5a.5.5 0 0 1-.7 0l-4.5-4.5a.5.5 0 0 1 .7-.7L9 13.29V5.5c0-.28.22-.5.5-.5ZM3 17.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v.5a.5.5 0 0 1-1 0v-.5Z",
    fill: primaryFill
  }));
};

export const ArrowBetweenDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBetweenDownRegularIcon, 'ArrowBetweenDownRegular');

const ArrowBetweenUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 18.25a.75.75 0 0 1-1.5 0v-.5c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v.5ZM9.75 15c.41 0 .75-.34.75-.75V7.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-1.06 0L4.97 9.47a.75.75 0 1 0 1.06 1.06L9 7.56v6.69c0 .41.34.75.75.75ZM3.5 2.25C3.5 3.22 4.28 4 5.25 4h9C15.22 4 16 3.22 16 2.25v-.5a.75.75 0 0 0-1.5 0v.5c0 .14-.11.25-.25.25h-9A.25.25 0 0 1 5 2.25v-.5a.75.75 0 0 0-1.5 0v.5Z",
    fill: primaryFill
  }));
};

export const ArrowBetweenUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBetweenUpFilledIcon, 'ArrowBetweenUpFilled');

const ArrowBetweenUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 18a.5.5 0 0 1-1 0v-.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v.5Zm5.5-3a.5.5 0 0 0 .5-.5V6.7l3.65 3.65a.5.5 0 0 0 .7-.7l-4.5-4.5a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 0 0 .7.7L9 6.71v7.79c0 .28.22.5.5.5ZM3 2.5C3 3.33 3.67 4 4.5 4h10c.83 0 1.5-.67 1.5-1.5V2a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V2a.5.5 0 0 0-1 0v.5Z",
    fill: primaryFill
  }));
};

export const ArrowBetweenUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBetweenUpRegularIcon, 'ArrowBetweenUpRegular');

const ArrowBidirectionalUpDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.78 7.78a.75.75 0 0 1-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 14.44V5.56L6.78 7.78Z",
    fill: primaryFill
  }));
};

export const ArrowBidirectionalUpDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBidirectionalUpDownFilledIcon, 'ArrowBidirectionalUpDownFilled');

const ArrowBidirectionalUpDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.35 7.35a.5.5 0 1 1-.7-.7l3.5-3.5c.2-.2.5-.2.7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 4.71v10.58l2.65-2.64a.5.5 0 0 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 0 1 .7-.7L9 15.29V4.71L6.35 7.35Z",
    fill: primaryFill
  }));
};

export const ArrowBidirectionalUpDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBidirectionalUpDownRegularIcon, 'ArrowBidirectionalUpDownRegular');

const ArrowBounceFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.75 6a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V8.56l6.47 6.47c.3.3.77.3 1.06 0l6.75-6.75a.75.75 0 0 0-1.06-1.06l-6.22 6.22L4.56 7.5h4.69a.75.75 0 0 0 0-1.5h-6.5Z",
    fill: primaryFill
  }));
};

export const ArrowBounceFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBounceFilledIcon, 'ArrowBounceFilled');

const ArrowBounceRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V7.7l7.15 7.15c.2.2.5.2.7 0l7-7a.5.5 0 0 0-.7-.7l-6.65 6.64L3.7 7h5.8a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
};

export const ArrowBounceRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowBounceRegularIcon, 'ArrowBounceRegular');

const ArrowCircleDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.65.85a.5.5 0 0 0-.7-.7l-2.15 2.14V6.5a.5.5 0 0 0-1 0v5.8l-2.15-2.15a.5.5 0 0 0-.7.7l3 3c.2.2.5.2.7 0l3-3Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownFilledIcon, 'ArrowCircleDownFilled');

const ArrowCircleDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m13.35 10.85-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7l2.15 2.14V6.5a.5.5 0 0 1 1 0v5.8l2.15-2.15a.5.5 0 0 1 .7.7ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownRegularIcon, 'ArrowCircleDownRegular');

const ArrowCircleDownDoubleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.35 13.85 9 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.65 3.85L15 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownDoubleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownDoubleFilledIcon, 'ArrowCircleDownDoubleFilled');

const ArrowCircleDownDoubleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m9 12.2-1.65 1.65a.5.5 0 0 1-.7 0L5 12.21a.5.5 0 1 1 .7-.71l.8.8V6.5a.5.5 0 0 1 1 0v5.8l.8-.8a.5.5 0 1 1 .7.7Zm1 5.8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-3.65 3.85L15 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownDoubleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownDoubleRegularIcon, 'ArrowCircleDownDoubleRegular');

const ArrowCircleDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.85 10.86a.5.5 0 0 1-.35.14h-5a.5.5 0 0 1 0-1h3.8L7.14 7.85a.5.5 0 1 1 .7-.7L12 11.29V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.14.35Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownRightFilledIcon, 'ArrowCircleDownRightFilled');

const ArrowCircleDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.85 12.86a.5.5 0 0 1-.35.14h-5a.5.5 0 0 1 0-1h3.8L7.14 7.85a.5.5 0 1 1 .7-.7L12 11.29V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.14.35ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownRightRegularIcon, 'ArrowCircleDownRightRegular');

const ArrowCircleDownSplitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-9.2 2.41a.5.5 0 1 0-.71-.7l-.59.58V9h5v3.3l-.59-.6a.5.5 0 0 0-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44a.5.5 0 0 0-.7-.7l-.59.58V8.5A.5.5 0 0 0 13 8h-2.5V5.5a.5.5 0 0 0-1 0V8H7a.5.5 0 0 0-.5.5v3.8l-.59-.6a.5.5 0 0 0-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownSplitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownSplitFilledIcon, 'ArrowCircleDownSplitFilled');

const ArrowCircleDownSplitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m8.8 12.41-1.45 1.44a.5.5 0 0 1-.7 0L5.2 12.41a.5.5 0 0 1 .7-.7l.59.58V8.5c0-.28.22-.5.5-.5h2.5V5.5a.5.5 0 0 1 1 0V8H13c.28 0 .5.22.5.5v3.8l.59-.6a.5.5 0 0 1 .7.71l-1.44 1.44a.5.5 0 0 1-.7 0l-1.44-1.44a.5.5 0 0 1 .7-.7l.59.58V9h-5v3.3l.59-.6a.5.5 0 1 1 .7.71ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownSplitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownSplitRegularIcon, 'ArrowCircleDownSplitRegular');

const ArrowCircleDownUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-5.8-1.65 1.65a.5.5 0 0 1-.7 0L5 12.21a.5.5 0 1 1 .7-.71l.8.8V6.5a.5.5 0 0 1 1 0v5.8l.8-.8a.5.5 0 1 1 .7.7Zm6-4.4a.5.5 0 0 1-.7.7l-.8-.8v5.8a.5.5 0 0 1-1 0V7.7l-.8.8a.5.5 0 1 1-.7-.7l1.65-1.65c.2-.2.5-.2.7 0L15 7.79Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownUpFilledIcon, 'ArrowCircleDownUpFilled');

const ArrowCircleDownUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.35 13.85 9 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0ZM15 7.8l-1.65-1.64a.5.5 0 0 0-.7 0L11 7.79a.5.5 0 1 0 .7.71l.8-.8v5.8a.5.5 0 1 0 1 0V7.7l.8.8a.5.5 0 1 0 .7-.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    fill: primaryFill
  }));
};

export const ArrowCircleDownUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleDownUpRegularIcon, 'ArrowCircleDownUpRegular');

const ArrowCircleLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-.85-4.65a.5.5 0 0 0 .7-.7L7.71 10.5h5.79a.5.5 0 0 0 0-1H7.7l2.15-2.15a.5.5 0 0 0-.7-.7l-3 3a.5.5 0 0 0 0 .7l3 3Z",
    fill: primaryFill
  }));
};

export const ArrowCircleLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleLeftFilledIcon, 'ArrowCircleLeftFilled');

const ArrowCircleLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m9.15 13.35-3-3a.5.5 0 0 1 0-.7l3-3a.5.5 0 1 1 .7.7L7.71 9.5h5.79a.5.5 0 0 1 0 1H7.7l2.15 2.15a.5.5 0 0 1-.7.7ZM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
    fill: primaryFill
  }));
};

export const ArrowCircleLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleLeftRegularIcon, 'ArrowCircleLeftRegular');

const ArrowCircleRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.85-4.65a.5.5 0 0 1-.7-.7l2.14-2.15H6.5a.5.5 0 0 1 0-1h5.8l-2.15-2.15a.5.5 0 0 1 .7-.7l3 3c.2.2.2.5 0 .7l-3 3Z",
    fill: primaryFill
  }));
};

export const ArrowCircleRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleRightFilledIcon, 'ArrowCircleRightFilled');

const ArrowCircleRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m10.85 13.35 3-3a.5.5 0 0 0 0-.7l-3-3a.5.5 0 0 0-.7.7l2.14 2.15H6.5a.5.5 0 0 0 0 1h5.8l-2.15 2.15a.5.5 0 0 0 .7.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    fill: primaryFill
  }));
};

export const ArrowCircleRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleRightRegularIcon, 'ArrowCircleRightRegular');

const ArrowCircleUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4.65-.85a.5.5 0 1 0 .7.7L9.5 7.71v5.79a.5.5 0 0 0 1 0V7.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3a.5.5 0 0 0-.7 0l-3 3Z",
    fill: primaryFill
  }));
};

export const ArrowCircleUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleUpFilledIcon, 'ArrowCircleUpFilled');

const ArrowCircleUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m6.65 9.15 3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L10.5 7.71v5.79a.5.5 0 0 1-1 0V7.7L7.35 9.86a.5.5 0 0 1-.7-.7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleUpRegularIcon, 'ArrowCircleUpRegular');

const ArrowCircleUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7.15 7.14A.5.5 0 0 1 7.5 7h5a.5.5 0 0 1 0 1H8.7l4.15 4.15a.5.5 0 0 1-.7.7L8 8.71v3.79a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .14-.35Z",
    fill: primaryFill
  }));
};

export const ArrowCircleUpLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleUpLeftFilledIcon, 'ArrowCircleUpLeftFilled');

const ArrowCircleUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.15 7.14A.5.5 0 0 1 7.5 7h5a.5.5 0 0 1 0 1H8.7l4.15 4.15a.5.5 0 0 1-.7.7L8 8.71v3.79a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .14-.35ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

export const ArrowCircleUpLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCircleUpLeftRegularIcon, 'ArrowCircleUpLeftRegular');

const ArrowClockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.63 2.03A8 8 0 1 0 18 9.73a.75.75 0 1 0-1.5.05c0 .25 0 .5-.02.73a6.5 6.5 0 1 1-1.56-4.75l.2.24h-2.37l-.1.01a.75.75 0 0 0 0 1.49H16.85c.33-.05.6-.31.64-.64V2.66a.75.75 0 0 0-.64-.65h-.2c-.34.05-.6.3-.65.64v2.06a7.98 7.98 0 0 0-5.37-2.68Z",
    fill: primaryFill
  }));
};

export const ArrowClockwiseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowClockwiseFilledIcon, 'ArrowClockwiseFilled');

const ArrowClockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.07 9.05a7 7 0 0 1 12.55-3.22l.13.17H12.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.2a8 8 0 1 0 1.99 4.77.5.5 0 0 0-1 .08 7 7 0 1 1-13.92-.5Z",
    fill: primaryFill
  }));
};

export const ArrowClockwiseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowClockwiseRegularIcon, 'ArrowClockwiseRegular');

const ArrowClockwiseDashesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.44 2.15a8.03 8.03 0 0 1 3.12 0 .75.75 0 0 1-.3 1.47 6.54 6.54 0 0 0-2.53 0 .75.75 0 0 1-.29-1.47Zm4.96 1.4a.75.75 0 0 1 1.05-.2c.57.38 1.1.84 1.55 1.36V2.75a.75.75 0 0 1 1.5 0v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1 0-1.5h2.37a6.54 6.54 0 0 0-1.5-1.4.75.75 0 0 1-.21-1.05ZM6.4 4.6a.75.75 0 0 0-.84-1.24 8.04 8.04 0 0 0-2.2 2.2.75.75 0 0 0 1.24.84 6.54 6.54 0 0 1 1.8-1.8ZM3.03 7.85c.41.08.67.47.6.88a6.54 6.54 0 0 0 0 2.54.75.75 0 0 1-1.48.29 8.04 8.04 0 0 1 0-3.12c.08-.4.48-.67.88-.6ZM18 10v-.25a.75.75 0 0 0-1.5 0V10c0 .44-.04.86-.12 1.27a.75.75 0 1 0 1.47.29c.1-.5.15-1.03.15-1.56ZM3.55 13.4a.75.75 0 0 1 1.04.21c.48.71 1.09 1.32 1.8 1.8a.75.75 0 0 1-.84 1.24 8.04 8.04 0 0 1-2.2-2.2.75.75 0 0 1 .2-1.04Zm13.1 1.05a.75.75 0 0 0-1.24-.84 6.54 6.54 0 0 1-1.8 1.8.75.75 0 0 0 .84 1.24 8.04 8.04 0 0 0 2.2-2.2Zm-8.8 2.52c.08-.41.47-.67.88-.6a6.54 6.54 0 0 0 2.54 0 .75.75 0 1 1 .29 1.48 8.03 8.03 0 0 1-3.12 0 .75.75 0 0 1-.6-.88Z",
    fill: primaryFill
  }));
};

export const ArrowClockwiseDashesFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowClockwiseDashesFilledIcon, 'ArrowClockwiseDashesFilled');

const ArrowClockwiseDashesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.13 2.22a8.02 8.02 0 0 1 3.74 0 .5.5 0 0 1-.23.97 7.02 7.02 0 0 0-3.28 0 .5.5 0 1 1-.23-.97ZM6.51 3.34a.5.5 0 0 1-.17.69 7.04 7.04 0 0 0-2.31 2.31.5.5 0 0 1-.85-.52 8.04 8.04 0 0 1 2.64-2.64.5.5 0 0 1 .69.16Zm7.67-.16a.5.5 0 1 0-.52.85c.82.5 1.53 1.18 2.09 1.97H12.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.2a8.04 8.04 0 0 0-1.82-1.52ZM2.82 7.76a.5.5 0 0 1 .37.6 7.02 7.02 0 0 0 0 3.28.5.5 0 0 1-.97.23 8.02 8.02 0 0 1 0-3.74.5.5 0 0 1 .6-.37ZM18 10v-.5a.5.5 0 0 0-1 0v.5c0 .56-.07 1.11-.2 1.64a.5.5 0 1 0 .98.23c.14-.6.22-1.23.22-1.87ZM3.34 13.5a.5.5 0 0 1 .69.16 7.04 7.04 0 0 0 2.31 2.31.5.5 0 1 1-.52.85 8.04 8.04 0 0 1-2.64-2.64.5.5 0 0 1 .16-.69Zm13.48.68a.5.5 0 0 0-.85-.52 7.04 7.04 0 0 1-2.31 2.31.5.5 0 0 0 .52.85 8.04 8.04 0 0 0 2.64-2.64Zm-9.06 3a.5.5 0 0 1 .6-.37 7.02 7.02 0 0 0 3.28 0 .5.5 0 1 1 .23.97 8.02 8.02 0 0 1-3.74 0 .5.5 0 0 1-.37-.6Z",
    fill: primaryFill
  }));
};

export const ArrowClockwiseDashesRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowClockwiseDashesRegularIcon, 'ArrowClockwiseDashesRegular');

const ArrowCollapseAllFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm3.22 2.22c.3-.3.77-.3 1.06 0l2.75 2.75a.75.75 0 1 1-1.06 1.06L6.5 9.31v6.44a.75.75 0 0 1-1.5 0V9.31l-1.47 1.47a.75.75 0 1 1-1.06-1.06l2.75-2.75Zm4.28.78c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowCollapseAllFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCollapseAllFilledIcon, 'ArrowCollapseAllFilled');

const ArrowCollapseAllRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm3.15 2.65c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 0 1-.7.7L6 8.71v6.79a.5.5 0 0 1-1 0V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7l2.5-2.5ZM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
};

export const ArrowCollapseAllRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCollapseAllRegularIcon, 'ArrowCollapseAllRegular');

const ArrowCounterclockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.37 2.03A8 8 0 1 1 2 9.73a.75.75 0 0 1 1.5.05 6.5 6.5 0 1 0 1.57-4.03l-.2.25h2.38l.1.01a.75.75 0 0 1 0 1.49H3.15a.75.75 0 0 1-.64-.64V2.66c.04-.34.3-.6.64-.65h.2c.34.05.6.3.65.64v2.06a7.98 7.98 0 0 1 5.37-2.68Z",
    fill: primaryFill
  }));
};

export const ArrowCounterclockwiseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCounterclockwiseFilledIcon, 'ArrowCounterclockwiseFilled');

const ArrowCounterclockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.93 9.05A7 7 0 0 0 4.38 5.83L4.25 6H7.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.2a8 8 0 1 1-1.99 4.77.5.5 0 1 1 1 .08 7 7 0 1 0 13.92-.5Z",
    fill: primaryFill
  }));
};

export const ArrowCounterclockwiseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCounterclockwiseRegularIcon, 'ArrowCounterclockwiseRegular');

const ArrowCounterclockwiseDashesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.56 2.15a8.04 8.04 0 0 0-3.12 0 .75.75 0 0 0 .3 1.47 6.54 6.54 0 0 1 2.53 0 .75.75 0 0 0 .29-1.47ZM6.6 3.55a.75.75 0 0 0-1.05-.2c-.57.38-1.1.84-1.55 1.36V2.75a.75.75 0 0 0-1.5 0v4c0 .41.34.75.75.75h4a.75.75 0 0 0 0-1.5H4.88c.42-.54.93-1.02 1.5-1.4.35-.24.45-.7.22-1.05ZM13.6 4.6a.75.75 0 0 1 .84-1.24 8.04 8.04 0 0 1 2.2 2.2.75.75 0 0 1-1.24.84 6.54 6.54 0 0 0-1.8-1.8Zm3.36 3.26a.75.75 0 0 0-.6.88 6.54 6.54 0 0 1 0 2.54.75.75 0 1 0 1.48.29 8.03 8.03 0 0 0 0-3.12.75.75 0 0 0-.88-.6ZM2 10v-.25a.75.75 0 0 1 1.5 0V10c0 .44.04.86.12 1.27a.75.75 0 0 1-1.47.29C2.05 11.06 2 10.53 2 10Zm14.45 3.4a.75.75 0 0 0-1.04.21 6.54 6.54 0 0 1-1.8 1.8.75.75 0 0 0 .84 1.24 8.04 8.04 0 0 0 2.2-2.2.75.75 0 0 0-.2-1.04Zm-13.1 1.05a.75.75 0 0 1 1.24-.84c.48.71 1.09 1.32 1.8 1.8a.75.75 0 0 1-.84 1.24 8.04 8.04 0 0 1-2.2-2.2Zm8.8 2.52a.75.75 0 0 0-.88-.6 6.54 6.54 0 0 1-2.54 0 .75.75 0 1 0-.29 1.48 8.03 8.03 0 0 0 3.12 0c.4-.08.67-.48.6-.88Z",
    fill: primaryFill
  }));
};

export const ArrowCounterclockwiseDashesFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCounterclockwiseDashesFilledIcon, 'ArrowCounterclockwiseDashesFilled');

const ArrowCounterclockwiseDashesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.87 2.22a8.02 8.02 0 0 0-3.74 0 .5.5 0 1 0 .23.97 7.02 7.02 0 0 1 3.28 0 .5.5 0 0 0 .23-.97Zm1.62 1.12a.5.5 0 0 0 .17.69 7.04 7.04 0 0 1 2.31 2.31.5.5 0 1 0 .85-.52 8.04 8.04 0 0 0-2.64-2.64.5.5 0 0 0-.69.16Zm-7.67-.16a.5.5 0 1 1 .52.85A7.04 7.04 0 0 0 4.25 6H7.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.2a8.04 8.04 0 0 1 1.82-1.52Zm11.36 4.58a.5.5 0 0 0-.37.6 7.02 7.02 0 0 1 0 3.28.5.5 0 1 0 .97.23 8.02 8.02 0 0 0 0-3.74.5.5 0 0 0-.6-.37ZM2 10v-.5a.5.5 0 0 1 1 0v.5c0 .56.07 1.11.2 1.64a.5.5 0 0 1-.98.23A8.02 8.02 0 0 1 2 10Zm14.66 3.5a.5.5 0 0 0-.69.16 7.04 7.04 0 0 1-2.31 2.31.5.5 0 0 0 .52.85 8.04 8.04 0 0 0 2.64-2.64.5.5 0 0 0-.16-.69Zm-13.48.68a.5.5 0 1 1 .85-.52 7.04 7.04 0 0 0 2.31 2.31.5.5 0 1 1-.52.85 8.04 8.04 0 0 1-2.64-2.64Zm9.06 3a.5.5 0 0 0-.6-.37 7.02 7.02 0 0 1-3.28 0 .5.5 0 1 0-.23.97 8.02 8.02 0 0 0 3.74 0 .5.5 0 0 0 .37-.6Z",
    fill: primaryFill
  }));
};

export const ArrowCounterclockwiseDashesRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCounterclockwiseDashesRegularIcon, 'ArrowCounterclockwiseDashesRegular');

const ArrowCurveDownLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.39 3.14a.75.75 0 1 0-.78-1.28 7.2 7.2 0 0 0-2.98 3.13A11.6 11.6 0 0 0 8.75 10v5.44l-2.72-2.72a.75.75 0 1 0-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 0 0-1.06-1.06l-2.72 2.72V10c0-1.95.25-3.32.74-4.37a5.71 5.71 0 0 1 2.4-2.49Z",
    fill: primaryFill
  }));
};

export const ArrowCurveDownLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveDownLeftFilledIcon, 'ArrowCurveDownLeftFilled');

const ArrowCurveDownLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.26 2.93a.5.5 0 0 0-.52-.86A6.95 6.95 0 0 0 9.86 5.1C9.26 6.38 9 7.96 9 10v6.3l-3.15-3.15a.5.5 0 1 0-.7.7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7L10 16.29V10c0-1.96.25-3.38.76-4.47a5.96 5.96 0 0 1 2.5-2.6Z",
    fill: primaryFill
  }));
};

export const ArrowCurveDownLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveDownLeftRegularIcon, 'ArrowCurveDownLeftRegular');

const ArrowCurveDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.61 3.14a.75.75 0 1 1 .78-1.28 7.2 7.2 0 0 1 2.98 3.13c.63 1.33.88 2.96.88 5.01v5.44l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V10c0-1.95-.25-3.32-.74-4.37a5.71 5.71 0 0 0-2.4-2.49Z",
    fill: primaryFill
  }));
};

export const ArrowCurveDownRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveDownRightFilledIcon, 'ArrowCurveDownRightFilled');

const ArrowCurveDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.74 2.93a.5.5 0 1 1 .52-.86 6.95 6.95 0 0 1 2.88 3.03c.6 1.28.86 2.86.86 4.9v6.3l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L10 16.29V10c0-1.96-.25-3.38-.76-4.47a5.96 5.96 0 0 0-2.5-2.6Z",
    fill: primaryFill
  }));
};

export const ArrowCurveDownRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveDownRightRegularIcon, 'ArrowCurveDownRightRegular');

const ArrowCurveUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.03 7.03a.75.75 0 0 1-1.06-1.06l4-4c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72v5.44c0 1.95.25 3.32.74 4.37a5.71 5.71 0 0 0 2.4 2.49.75.75 0 1 1-.78 1.28 7.2 7.2 0 0 1-2.98-3.13 11.6 11.6 0 0 1-.88-5.01V4.31L6.03 7.03Z",
    fill: primaryFill
  }));
};

export const ArrowCurveUpLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveUpLeftFilledIcon, 'ArrowCurveUpLeftFilled');

const ArrowCurveUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.85 6.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0l4 4a.5.5 0 0 1-.7.7L10 3.71V10c0 1.96.25 3.38.76 4.47a5.96 5.96 0 0 0 2.5 2.6.5.5 0 0 1-.52.86 6.95 6.95 0 0 1-2.88-3.03C9.26 13.62 9 12.04 9 10V3.7L5.85 6.86Z",
    fill: primaryFill
  }));
};

export const ArrowCurveUpLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveUpLeftRegularIcon, 'ArrowCurveUpLeftRegular');

const ArrowCurveUpRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.97 7.03a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v5.44c0 1.95-.25 3.32-.74 4.37a5.71 5.71 0 0 1-2.4 2.49.75.75 0 1 0 .78 1.28 7.2 7.2 0 0 0 2.98-3.13c.63-1.33.88-2.96.88-5.01V4.31l2.72 2.72Z",
    fill: primaryFill
  }));
};

export const ArrowCurveUpRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveUpRightFilledIcon, 'ArrowCurveUpRightFilled');

const ArrowCurveUpRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.15 6.85a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L10 3.71V10c0 1.96-.25 3.38-.76 4.47a5.96 5.96 0 0 1-2.5 2.6.5.5 0 0 0 .52.86 6.95 6.95 0 0 0 2.88-3.03c.6-1.28.86-2.86.86-4.9V3.7l3.15 3.15Z",
    fill: primaryFill
  }));
};

export const ArrowCurveUpRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowCurveUpRightRegularIcon, 'ArrowCurveUpRightRegular');

const ArrowDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.8 11.27a.75.75 0 0 0-1.1-1.04l-4.95 5.24V2.75a.75.75 0 0 0-1.5 0v12.73l-4.96-5.25a.75.75 0 0 0-1.09 1.04l6.07 6.41a1 1 0 0 0 1.45 0l6.07-6.41Z",
    fill: primaryFill
  }));
};

export const ArrowDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownFilledIcon, 'ArrowDownFilled');

const ArrowDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.87 10.84a.5.5 0 1 0-.74-.68l-5.63 6.17V2.5a.5.5 0 0 0-1 0v13.83l-5.63-6.17a.5.5 0 0 0-.74.68l6.31 6.91a.75.75 0 0 0 1.11 0l6.32-6.91Z",
    fill: primaryFill
  }));
};

export const ArrowDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownRegularIcon, 'ArrowDownRegular');

const ArrowDownLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v5.69L15.72 3.22a.75.75 0 1 1 1.06 1.06L5.56 15.5h5.7c.4 0 .74.34.74.75Z",
    fill: primaryFill
  }));
};

export const ArrowDownLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownLeftFilledIcon, 'ArrowDownLeftFilled');

const ArrowDownLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z",
    fill: primaryFill
  }));
};

export const ArrowDownLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownLeftRegularIcon, 'ArrowDownLeftRegular');

const ArrowDownloadFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.24 16.5a.75.75 0 0 1 .1 1.5H4.76a.75.75 0 0 1-.1-1.5h10.6ZM10 2c.38 0 .7.28.75.65V12.95l2.97-2.98c.27-.26.68-.29.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-4.24 4.25-.07.07-.1.05-.03.03-.1.03-.11.03-.07.01H10l-.15-.01-.08-.03a.73.73 0 0 1-.26-.14l-4.29-4.29A.75.75 0 0 1 6.2 9.9l.08.07 2.97 2.97V2.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowDownloadFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownloadFilledIcon, 'ArrowDownloadFilled');

const ArrowDownloadRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.5 17a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1H15.5ZM10 2a.5.5 0 0 1 .5.41V14.3l3.64-3.65a.5.5 0 0 1 .64-.06l.07.06c.17.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 0 1-.25.14L10 16a.5.5 0 0 1-.4-.2l-4.46-4.45a.5.5 0 0 1 .64-.76l.07.06 3.65 3.64V2.5c0-.27.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowDownloadRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowDownloadRegularIcon, 'ArrowDownloadRegular');

const ArrowEjectFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.2 4.6c-.6-.8-1.8-.8-2.4 0l-4.5 6A1.5 1.5 0 0 0 5.5 13h9a1.5 1.5 0 0 0 1.2-2.4l-4.5-6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z",
    fill: primaryFill
  }));
};

export const ArrowEjectFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEjectFilledIcon, 'ArrowEjectFilled');

const ArrowEjectRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.6 5.2a.5.5 0 0 1 .8 0l4.5 6a.5.5 0 0 1-.4.8h-9a.5.5 0 0 1-.4-.8l4.5-6Zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.5 6A1.5 1.5 0 0 0 5.5 13h9a1.5 1.5 0 0 0 1.2-2.4l-4.5-6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z",
    fill: primaryFill
  }));
};

export const ArrowEjectRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEjectRegularIcon, 'ArrowEjectRegular');

const ArrowEnterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.75 17.5a.75.75 0 0 1 0-1.5H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.75a.75.75 0 0 1 0-1.5H14A3.5 3.5 0 0 1 17.5 6v8a3.5 3.5 0 0 1-3.5 3.5H7.75Zm0-11.3a.75.75 0 0 1 1.05.04l3 3.25c.27.29.27.73 0 1.02l-3 3.25a.75.75 0 1 1-1.1-1.02l1.84-1.99H1.75a.75.75 0 0 1 0-1.5h7.79l-1.84-2a.75.75 0 0 1 .04-1.05Z",
    fill: primaryFill
  }));
};

export const ArrowEnterFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterFilledIcon, 'ArrowEnterFilled');

const ArrowEnterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 17a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7.5Zm.15-10.85c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 0 1-.7-.7l2.64-2.65H1.5a.5.5 0 0 1 0-1h8.8L7.64 6.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowEnterRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterRegularIcon, 'ArrowEnterRegular');

const ArrowEnterLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m4.64 12.5 2.87 2.7a.75.75 0 0 1-1.02 1.1l-4.25-4a.75.75 0 0 1 0-1.1l4.25-4A.75.75 0 1 1 7.5 8.3L4.64 11h10.11c.97 0 1.75-.78 1.75-1.75v-4.5a.75.75 0 0 1 1.5 0v4.5c0 1.8-1.46 3.25-3.25 3.25H4.65Z",
    fill: primaryFill
  }));
};

export const ArrowEnterLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterLeftFilledIcon, 'ArrowEnterLeftFilled');

const ArrowEnterLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m3.76 12 3.33 3.14a.5.5 0 0 1-.68.72l-4.25-4a.5.5 0 0 1 0-.72l4.25-4a.5.5 0 1 1 .68.72L3.76 11H15a2 2 0 0 0 2-2V4.5a.5.5 0 0 1 1 0V9a3 3 0 0 1-3 3H3.76Z",
    fill: primaryFill
  }));
};

export const ArrowEnterLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterLeftRegularIcon, 'ArrowEnterLeftRegular');

const ArrowEnterUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.8 2.24a.75.75 0 0 0-1.1 0l-4 4.25A.75.75 0 1 0 4.8 7.5l2.7-2.87v10.11c0 1.8 1.46 3.25 3.25 3.25h4.5a.75.75 0 0 0 0-1.5h-4.5c-.97 0-1.75-.78-1.75-1.75V4.65l2.7 2.86a.75.75 0 1 0 1.1-1.02l-4-4.25Z",
    fill: primaryFill
  }));
};

export const ArrowEnterUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterUpFilledIcon, 'ArrowEnterUpFilled');

const ArrowEnterUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.86 2.16a.5.5 0 0 0-.72 0l-4 4.25a.5.5 0 0 0 .72.68L8 3.76V15a3 3 0 0 0 3 3h4.5a.5.5 0 0 0 0-1H11a2 2 0 0 1-2-2V3.76l3.14 3.33a.5.5 0 0 0 .72-.68l-4-4.25Z",
    fill: primaryFill
  }));
};

export const ArrowEnterUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowEnterUpRegularIcon, 'ArrowEnterUpRegular');

const ArrowExitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.75 17.5a.75.75 0 0 0 0-1.5H6.5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6.25a.75.75 0 0 0 0-1.5H6.5A3.5 3.5 0 0 0 3 6v8a3.5 3.5 0 0 0 3.5 3.5h6.25Zm1-11.3a.75.75 0 0 1 1.05.04l3 3.25c.27.29.27.73 0 1.02l-3 3.25a.75.75 0 1 1-1.1-1.02l1.84-1.99H7.75a.75.75 0 0 1 0-1.5h7.79l-1.84-2a.75.75 0 0 1 .04-1.05Z",
    fill: primaryFill
  }));
};

export const ArrowExitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExitFilledIcon, 'ArrowExitFilled');

const ArrowExitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.5 17a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6.5Zm1.15-10.85c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 0 1-.7-.7l2.64-2.65H7.5a.5.5 0 0 1 0-1h8.8l-2.65-2.65a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowExitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExitRegularIcon, 'ArrowExitRegular');

const ArrowExpandFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.75 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V5.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h1.69a.75.75 0 0 0 0-1.5h-3.5Zm0 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L5.56 15.5h1.69a.75.75 0 0 1 0 1.5h-3.5ZM17 3.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69l-2.22 2.22a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5ZM16.25 17c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22h-1.69a.75.75 0 0 0 0 1.5h3.5Z",
    fill: primaryFill
  }));
};

export const ArrowExpandFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExpandFilledIcon, 'ArrowExpandFilled');

const ArrowExpandRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V4.7l3.15 3.15a.5.5 0 1 0 .7-.7L4.71 4H7.5a.5.5 0 0 0 0-1h-4Zm0 14a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.8l3.15-3.15a.5.5 0 0 1 .7.7L4.71 16H7.5a.5.5 0 0 1 0 1h-4ZM17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.8l-3.15 3.15a.5.5 0 0 0 .7.7L16 4.71V7.5a.5.5 0 0 0 1 0v-4ZM16.5 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.8l-3.15-3.15a.5.5 0 0 0-.7.7L15.29 16H12.5a.5.5 0 0 0 0 1h4Z",
    fill: primaryFill
  }));
};

export const ArrowExpandRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExpandRegularIcon, 'ArrowExpandRegular');

const ArrowExportLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.75 3.75c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75ZM5 10c0-.41.34-.75.75-.75h10.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06l4 4a.77.77 0 0 1 .15.22.75.75 0 0 1-.15.84l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.75A.75.75 0 0 1 5 10Z",
    fill: primaryFill
  }));
};

export const ArrowExportLtrFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportLtrFilledIcon, 'ArrowExportLtrFilled');

const ArrowExportLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM5 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 0 1 .7-.7l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H5.5A.5.5 0 0 1 5 10Z",
    fill: primaryFill
  }));
};

export const ArrowExportLtrRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportLtrRegularIcon, 'ArrowExportLtrRegular');

const ArrowExportRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.25 3.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75ZM15 10a.75.75 0 0 0-.75-.75H4.06l2.72-2.72a.75.75 0 0 0-1.06-1.06l-4 4a.76.76 0 0 0-.22.53.75.75 0 0 0 .22.53l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72h10.19c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowExportRtlFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportRtlFilledIcon, 'ArrowExportRtlFilled');

const ArrowExportRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5ZM15 10a.5.5 0 0 0-.5-.5H3.7l3.15-3.15a.5.5 0 0 0-.7-.7l-4 4a.5.5 0 0 0 0 .7l4 4a.5.5 0 0 0 .7-.7L3.71 10.5H14.5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowExportRtlRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportRtlRegularIcon, 'ArrowExportRtlRegular');

const ArrowExportUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.53 1.72a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v10.19a.75.75 0 0 0 1.5 0V4.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4ZM4.5 16.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Z",
    fill: primaryFill
  }));
};

export const ArrowExportUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportUpFilledIcon, 'ArrowExportUpFilled');

const ArrowExportUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.65 2.15c.2-.2.5-.2.7 0l4 4a.5.5 0 0 1-.7.7L10.5 3.71V14.5a.5.5 0 0 1-1 0V3.7L6.35 6.86a.5.5 0 1 1-.7-.7l4-4ZM4 17.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowExportUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowExportUpRegularIcon, 'ArrowExportUpRegular');

const ArrowFitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.8 6.72c.28.3.28.77-.01 1.06L4.57 9h3.68a.75.75 0 0 1 0 1.5H4.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.51-2.5c.3-.3.77-.3 1.06 0Zm8.42 0c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-3.69a.75.75 0 0 1 0-1.5h3.69l-1.22-1.22a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowFitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowFitFilledIcon, 'ArrowFitFilled');

const ArrowFitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.35 6.65c.2.2.2.5 0 .7L3.71 9H8.5a.5.5 0 0 1 0 1H3.7l1.65 1.65a.5.5 0 0 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5c.2-.2.5-.2.7 0Zm9.3 0c.2-.2.5-.2.7 0l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L16.29 10H11.5a.5.5 0 0 1 0-1h4.8l-1.65-1.65a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowFitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowFitRegularIcon, 'ArrowFitRegular');

const ArrowFitInFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.21 7.78a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 .01 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.68L5.21 7.78Zm9.58 0a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0-.01 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.68l1.22-1.22Z",
    fill: primaryFill
  }));
};

export const ArrowFitInFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowFitInFilledIcon, 'ArrowFitInFilled');

const ArrowFitInRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.65 7.35a.5.5 0 1 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L7.29 10H2.5a.5.5 0 0 1 0-1h4.8L5.64 7.35Zm8.7 0a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L12.71 10h4.79a.5.5 0 0 0 0-1h-4.8l1.65-1.65Z",
    fill: primaryFill
  }));
};

export const ArrowFitInRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowFitInRegularIcon, 'ArrowFitInRegular');

const ArrowForwardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.69 9.5-2.96 2.96a.75.75 0 0 0 .97 1.14l.09-.08 4.24-4.24a.75.75 0 0 0 .07-.98l-.07-.08-4.24-4.24a.75.75 0 0 0-1.14.97l.08.09L15.69 8H10a7.75 7.75 0 0 0-7.75 7.5v.25a.75.75 0 0 0 1.5 0A6.25 6.25 0 0 1 9.77 9.5H15.7Z",
    fill: primaryFill
  }));
};

export const ArrowForwardFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardFilledIcon, 'ArrowForwardFilled');

const ArrowForwardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m16.3 9-3.4 3.39a.5.5 0 0 0 .64.76l.07-.05 4.24-4.25a.5.5 0 0 0 .06-.63l-.06-.07-4.24-4.25a.5.5 0 0 0-.76.64l.05.07L16.3 8H10a7.5 7.5 0 0 0-7.5 7.26v.24a.5.5 0 0 0 1 0A6.5 6.5 0 0 1 9.77 9h6.53Z",
    fill: primaryFill
  }));
};

export const ArrowForwardRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardRegularIcon, 'ArrowForwardRegular');

const ArrowForwardDownLightningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.69 7-2.26-2.26a.75.75 0 0 1 .98-1.13l.08.07 3.54 3.54.07.08.04.06.05.1.03.08.02.07v.06l.01.1v.06l-.02.09-.03.1-.05.1-.03.05a.75.75 0 0 1-.09.11l-3.54 3.54a.75.75 0 0 1-1.13-.98l.07-.08L15.7 8.5H12c-3.65 0-6.13-2.08-6.25-5.04v-.21a.75.75 0 0 1 1.5 0c0 2.13 1.7 3.66 4.5 3.75h3.94ZM11 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 5 14h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 8 12h-.75l.28-.84a.5.5 0 0 0-.47-.66H5.88Z",
    fill: primaryFill
  }));
};

export const ArrowForwardDownLightningFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardDownLightningFilledIcon, 'ArrowForwardDownLightningFilled');

const ArrowForwardDownLightningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.3 7 13.6 4.32a.5.5 0 0 1 .64-.77l.07.06 3.56 3.57.05.07.03.06.02.06v.03c.02.03.02.06.02.1v-.02.06l-.02.09-.02.06-.04.08-.05.07-3.55 3.55a.5.5 0 0 1-.77-.64l.06-.07L16.3 8H12C8.48 8 6.11 6.02 6 3.2V3a.5.5 0 0 1 1 0c0 2.27 1.8 3.9 4.74 4h4.56ZM11 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 5 14h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 8 12h-.75l.28-.84a.5.5 0 0 0-.47-.66H5.88Z",
    fill: primaryFill
  }));
};

export const ArrowForwardDownLightningRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardDownLightningRegularIcon, 'ArrowForwardDownLightningRegular');

const ArrowForwardDownPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.43 4.75 15.7 7h-3.95c-2.8-.1-4.49-1.62-4.49-3.75a.75.75 0 0 0-1.5 0v.21C5.87 6.42 8.35 8.5 12 8.5h3.69l-2.26 2.26-.07.08a.75.75 0 0 0 1.13.98l3.54-3.54a.75.75 0 0 0 .09-.1l.03-.06.05-.1.03-.1.02-.1V7.68l-.01-.06-.02-.07-.03-.09-.05-.1-.04-.05-.07-.08-3.54-3.54-.08-.07a.75.75 0 0 0-.98 1.14ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.75 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

export const ArrowForwardDownPersonFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardDownPersonFilledIcon, 'ArrowForwardDownPersonFilled');

const ArrowForwardDownPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.61 4.32 16.3 7h-4.55C8.8 6.9 7 5.27 7 3a.5.5 0 0 0-1 0v.2C6.11 6.03 8.48 8 12 8h4.3l-2.69 2.68-.06.07a.5.5 0 0 0 .77.64l3.55-3.55.05-.07.04-.08.02-.06.02-.09v-.06.02a.5.5 0 0 0-.01-.1v-.03l-.03-.06-.03-.06-.05-.07-3.56-3.57-.07-.06a.5.5 0 0 0-.64.77ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.75 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

export const ArrowForwardDownPersonRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowForwardDownPersonRegularIcon, 'ArrowForwardDownPersonRegular');

const ArrowHookDownLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4.75c0-.41.34-.75.75-.75h4.5c1.59 0 2.7.62 3.53 1.59C15.6 6.54 16 7.79 16 9c0 1.22-.3 2.46-1.12 3.41A4.62 4.62 0 0 1 11.25 14H6.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 .02-1.08l3.5-3.25a.75.75 0 0 1 1.02 1.1l-2.1 1.95h4.59c1.16 0 1.86-.44 2.4-1.07.55-.64.85-1.52.85-2.43 0-.9-.3-1.79-.85-2.43a2.92 2.92 0 0 0-2.4-1.07h-4.5A.75.75 0 0 1 6 4.75Z",
    fill: primaryFill
  }));
};

export const ArrowHookDownLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookDownLeftFilledIcon, 'ArrowHookDownLeftFilled');

const ArrowHookDownLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4.5c0-.28.22-.5.5-.5H11c1.64 0 2.9.62 3.75 1.57C15.59 6.52 16 7.77 16 9s-.41 2.48-1.25 3.43A4.85 4.85 0 0 1 11 14H5.7l2.65 2.65a.5.5 0 0 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5a.5.5 0 1 1 .7.7L5.71 13H11c1.36 0 2.35-.5 3-1.24.66-.74 1-1.74 1-2.76 0-1.02-.34-2.02-1-2.76A3.86 3.86 0 0 0 11 5H6.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowHookDownLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookDownLeftRegularIcon, 'ArrowHookDownLeftRegular');

const ArrowHookDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 14c.06 0-.06 0 0 0h4.65l-2.27 2.27a.75.75 0 1 0 1.06 1.06l3.35-3.35a.75.75 0 0 0 .21-.64.75.75 0 0 0-.21-.45l-3.25-3.24a.75.75 0 1 0-1.06 1.06l1.8 1.79H9a3.5 3.5 0 1 1 0-7h4.25a.75.75 0 0 0 0-1.5H9a5 5 0 0 0 0 10Z",
    fill: primaryFill
  }));
};

export const ArrowHookDownRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookDownRightFilledIcon, 'ArrowHookDownRightFilled');

const ArrowHookDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 9a5 5 0 0 1 5-5h4.5a.5.5 0 0 1 0 1H9a4 4 0 1 0 0 8h5.3l-2.7-2.7a.5.5 0 1 1 .7-.7l3.54 3.53a.5.5 0 0 1 .13.5.5.5 0 0 1-.14.25L12.3 17.4a.5.5 0 0 1-.71-.7l2.7-2.71H9a5 5 0 0 1-5-5Z",
    fill: primaryFill
  }));
};

export const ArrowHookDownRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookDownRightRegularIcon, 'ArrowHookDownRightRegular');

const ArrowHookUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 15.25c0 .41.34.75.75.75h4.5a4.4 4.4 0 0 0 3.53-1.59A5.24 5.24 0 0 0 16 11c0-1.22-.3-2.46-1.12-3.41A4.62 4.62 0 0 0 11.25 6H6.56l2.22-2.22a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 .02 1.08l3.5 3.25a.75.75 0 0 0 1.02-1.1L6.66 7.5h4.59c1.16 0 1.86.44 2.4 1.07.55.64.85 1.52.85 2.43 0 .9-.3 1.79-.85 2.43a2.92 2.92 0 0 1-2.4 1.07h-4.5a.75.75 0 0 0-.75.75Z",
    fill: primaryFill
  }));
};

export const ArrowHookUpLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookUpLeftFilledIcon, 'ArrowHookUpLeftFilled');

const ArrowHookUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 15.5c0 .28.22.5.5.5H11c1.64 0 2.9-.62 3.75-1.57A5.16 5.16 0 0 0 16 11c0-1.23-.41-2.48-1.25-3.43A4.85 4.85 0 0 0 11 6H5.7l2.65-2.65a.5.5 0 1 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L5.71 7H11c1.36 0 2.35.5 3 1.24.66.74 1 1.74 1 2.76 0 1.02-.34 2.02-1 2.76A3.86 3.86 0 0 1 11 15H6.5a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowHookUpLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookUpLeftRegularIcon, 'ArrowHookUpLeftRegular');

const ArrowHookUpRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 6c.06 0-.06 0 0 0h4.65l-2.27-2.27a.75.75 0 1 1 1.06-1.06l3.35 3.35c.17.18.24.42.21.64a.75.75 0 0 1-.21.45l-3.25 3.24a.75.75 0 1 1-1.06-1.06l1.8-1.79H9a3.5 3.5 0 1 0 0 7h4.25a.75.75 0 0 1 0 1.5H9A5 5 0 0 1 9 6Z",
    fill: primaryFill
  }));
};

export const ArrowHookUpRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookUpRightFilledIcon, 'ArrowHookUpRightFilled');

const ArrowHookUpRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 11a5 5 0 0 0 5 5h4.5a.5.5 0 0 0 0-1H9a4 4 0 0 1 0-8h5.3l-2.7 2.7a.5.5 0 1 0 .7.7l3.54-3.53a.5.5 0 0 0 .13-.5.5.5 0 0 0-.14-.25L12.3 2.6a.5.5 0 1 0-.71.7L14.29 6H9a5 5 0 0 0-5 5Z",
    fill: primaryFill
  }));
};

export const ArrowHookUpRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowHookUpRightRegularIcon, 'ArrowHookUpRightRegular');

const ArrowImportFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.25 3.75c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75ZM2 10c0-.41.34-.75.75-.75h10.19l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.77.77 0 0 1 .15.22.75.75 0 0 1-.15.84l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2.75A.75.75 0 0 1 2 10Z",
    fill: primaryFill
  }));
};

export const ArrowImportFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowImportFilledIcon, 'ArrowImportFilled');

const ArrowImportRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM2 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 0 1 .7-.7l4 4A.5.5 0 0 1 15 10a.5.5 0 0 1-.15.35l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H2.5A.5.5 0 0 1 2 10Z",
    fill: primaryFill
  }));
};

export const ArrowImportRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowImportRegularIcon, 'ArrowImportRegular');

const ArrowJoinFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 2c.28 0 .5.22.5.5C5 6.12 7.88 9 11.5 9h.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L12.29 10h-.79A6.46 6.46 0 0 0 5 16.5a.5.5 0 0 1-1 0 7.45 7.45 0 0 1 4.78-7A7.45 7.45 0 0 1 4 2.5c0-.28.22-.5.5-.5Zm5.53 9.2A5.43 5.43 0 0 0 7 13.3v.7c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v.7a5.43 5.43 0 0 0 3.03 2.1 1.5 1.5 0 0 1 2.53-1.36l2 2a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-2.53-1.37Z",
    fill: primaryFill
  }));
};

export const ArrowJoinFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowJoinFilledIcon, 'ArrowJoinFilled');

const ArrowJoinRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 2.5a.5.5 0 0 0-1 0 7.45 7.45 0 0 0 4.78 7 7.45 7.45 0 0 0-4.78 7 .5.5 0 0 0 1 0c0-3.62 2.88-6.5 6.5-6.5h.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L12.29 9h-.79A6.46 6.46 0 0 1 5 2.5ZM8.5 4a.5.5 0 0 0 0 1H15c.52 0 1 .48 1 1v7c0 .52-.48 1-1 1H8.5a.5.5 0 0 0 0 1H15c1.08 0 2-.92 2-2V6c0-1.08-.92-2-2-2H8.5Z",
    fill: primaryFill
  }));
};

export const ArrowJoinRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowJoinRegularIcon, 'ArrowJoinRegular');

const ArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.73 16.8a.75.75 0 0 0 1.03-1.1l-5.24-4.95h12.73a.75.75 0 0 0 0-1.5H4.52l5.24-4.96A.75.75 0 1 0 8.73 3.2L2.31 9.27a1 1 0 0 0 0 1.46l6.42 6.07Z",
    fill: primaryFill
  }));
};

export const ArrowLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowLeftFilledIcon, 'ArrowLeftFilled');

const ArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.16 16.37a.5.5 0 1 0 .67-.74L3.67 10H17.5a.5.5 0 0 0 0-1H3.67l6.16-5.63a.5.5 0 0 0-.67-.74L2.24 8.94a.75.75 0 0 0 0 1.11l6.92 6.32Z",
    fill: primaryFill
  }));
};

export const ArrowLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowLeftRegularIcon, 'ArrowLeftRegular');

const ArrowMaximizeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 3a1 1 0 0 1 1 1v5.25a.75.75 0 0 1-1.5 0v-3.7L5.56 15.5h3.69a.75.75 0 0 1 0 1.5H4a1 1 0 0 1-1-1v-5.25a.75.75 0 0 1 1.5 0v3.69l9.94-9.94h-3.69a.75.75 0 0 1 0-1.5H16Z",
    fill: primaryFill
  }));
};

export const ArrowMaximizeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMaximizeFilledIcon, 'ArrowMaximizeFilled');

const ArrowMaximizeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 3h6.04l.09.02.06.02.08.04.05.04.06.06.03.04.04.07.03.08.02.08V9.5a.5.5 0 0 1-1 .09V4.7L4.7 16h4.8a.5.5 0 0 1 .5.41v.09a.5.5 0 0 1-.41.5H3.41l-.1-.04-.08-.04-.05-.04-.06-.06-.03-.04-.04-.07-.03-.08v-.02A.5.5 0 0 1 3 16.5v.07-6.07a.5.5 0 0 1 1-.09v4.89L15.3 4h-4.8a.5.5 0 0 1-.5-.41V3.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowMaximizeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMaximizeRegularIcon, 'ArrowMaximizeRegular');

const ArrowMaximizeVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.58 1.33a.6.6 0 0 1 .84 0l2.13 2.13a.6.6 0 0 1-.85.84l-1.1-1.1v4.3a.6.6 0 1 1-1.2 0V3.2L8.3 4.3a.6.6 0 0 1-.85-.84l2.13-2.13ZM3.9 10c0-.33.27-.6.6-.6h11a.6.6 0 1 1 0 1.2h-11a.6.6 0 0 1-.6-.6Zm6.7 6.8v-4.3a.6.6 0 0 0-1.2 0v4.3l-1.1-1.1a.6.6 0 0 0-.85.85l2.13 2.12a.6.6 0 0 0 .84 0l2.13-2.12a.6.6 0 1 0-.85-.85l-1.1 1.1Z",
    fill: primaryFill
  }));
};

export const ArrowMaximizeVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMaximizeVerticalFilledIcon, 'ArrowMaximizeVerticalFilled');

const ArrowMaximizeVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.65 1.4c.2-.2.5-.2.7 0l2.12 2.13a.5.5 0 0 1-.7.7L10.5 2.96V7.5a.5.5 0 0 1-1 0V2.96L8.23 4.23a.5.5 0 1 1-.7-.7L9.65 1.4ZM4 10c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 4 10Zm6.5 7.04V12.5a.5.5 0 0 0-1 0v4.54l-1.27-1.27a.5.5 0 1 0-.7.7l2.12 2.13c.2.2.5.2.7 0l2.12-2.12a.5.5 0 0 0-.7-.71l-1.27 1.27Z",
    fill: primaryFill
  }));
};

export const ArrowMaximizeVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMaximizeVerticalRegularIcon, 'ArrowMaximizeVerticalRegular');

const ArrowMinimizeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.75 11h4.5c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 0 1-1.5.1v-2.79l-4.47 4.47a.75.75 0 0 1-1.13-.98l.07-.08 4.47-4.47H3.75a.75.75 0 0 1-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h4.5-4.5Zm14.28-9.03c.27.27.3.68.07.98l-.07.08L13.06 8h3.19c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-5a.75.75 0 0 1-.74-.65l-.01-.1v-5a.75.75 0 0 1 1.5-.1v3.29l4.97-4.97c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowMinimizeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMinimizeFilledIcon, 'ArrowMinimizeFilled');

const ArrowMinimizeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 11h5a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-1 .09V12.7l-5.15 5.15a.5.5 0 0 1-.76-.63l.06-.07L7.29 12H3.5a.5.5 0 0 1-.5-.41v-.09a.5.5 0 0 1 .41-.5H8.5h-5Zm14.35-8.85c.18.17.2.44.06.63l-.06.07L12.71 8h3.79a.5.5 0 0 1 .5.41v.09a.5.5 0 0 1-.41.5h-5.18l-.1-.04-.08-.04-.05-.04-.03-.03-.04-.04-.04-.06-.03-.06-.02-.06V8.6a.5.5 0 0 1-.02-.1v.07V3.5a.5.5 0 0 1 1-.09V7.3l5.15-5.15c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowMinimizeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMinimizeRegularIcon, 'ArrowMinimizeRegular');

const ArrowMinimizeVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 1.5c.41 0 .75.34.75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V2.25c0-.41.34-.75.75-.75ZM3.5 9.75c0-.41.34-.75.75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75Zm8.78 4.47-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.69a.75.75 0 0 0 1.5 0v-2.69l.72.72a.75.75 0 1 0 1.06-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowMinimizeVerticalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMinimizeVerticalFilledIcon, 'ArrowMinimizeVerticalFilled');

const ArrowMinimizeVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 1c.28 0 .5.22.5.5v3.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9 5.29V1.5c0-.28.22-.5.5-.5Zm-6 8.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Zm6.5 4.2v3.8a.5.5 0 0 1-1 0v-3.8l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L10 13.71Z",
    fill: primaryFill
  }));
};

export const ArrowMinimizeVerticalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMinimizeVerticalRegularIcon, 'ArrowMinimizeVerticalRegular');

const ArrowMoveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.53 2.22a.75.75 0 0 0-1.06 0L7.22 4.47a.75.75 0 0 0 1.06 1.06l.97-.97v2.69a.75.75 0 0 0 1.5 0V4.56l.97.97a.75.75 0 1 0 1.06-1.06l-2.25-2.25ZM2.22 9.47c-.3.3-.3.77 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h2.69a.75.75 0 0 0 0-1.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06L2.22 9.47Zm8.31 8.31 2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97v-2.69a.75.75 0 0 0-1.5 0v2.69l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25c.3.3.77.3 1.06 0Zm5-10.56 2.25 2.25c.3.3.3.77 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.69a.75.75 0 0 1 0-1.5h2.69l-.97-.97a.75.75 0 0 1 1.06-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowMoveFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMoveFilledIcon, 'ArrowMoveFilled');

const ArrowMoveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.35 2.15a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 1 0 .7.7L9.5 3.71V7.5a.5.5 0 0 0 1 0V3.7l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5Zm-8.2 7.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L3.71 10.5H7.5a.5.5 0 0 0 0-1H3.7l1.65-1.65a.5.5 0 1 0-.7-.7l-2.5 2.5ZM10 18a.5.5 0 0 1-.35-.15l-2.5-2.5a.5.5 0 0 1 .7-.7l1.65 1.64V12.5a.5.5 0 0 1 1 0v3.8l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5A.5.5 0 0 1 10 18Zm7.85-7.65a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7l1.64 1.65H12.5a.5.5 0 0 0 0 1h3.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5Z",
    fill: primaryFill
  }));
};

export const ArrowMoveRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMoveRegularIcon, 'ArrowMoveRegular');

const ArrowMoveInwardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.03 3.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v3.19l1.22-1.22c.3-.3.77-.3 1.06 0ZM3.72 6.97c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h3.19L3.72 8.03a.75.75 0 0 1 0-1.06Zm11.5 0a.75.75 0 1 1 1.06 1.06l-1.22 1.22h3.19a.75.75 0 0 1 0 1.5h-3.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5Zm-2.19 9.31c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v3.19a.75.75 0 0 0 1.5 0v-3.19l1.22 1.22c.3.3.77.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowMoveInwardFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMoveInwardFilledIcon, 'ArrowMoveInwardFilled');

const ArrowMoveInwardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.15 16.35c.2.2.5.2.7 0l1.65-1.64v3.79a.5.5 0 0 0 1 0v-3.8l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0 0 .7Zm9.2-8.5a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7l-1.64-1.65h3.79a.5.5 0 0 0 0-1h-3.8l1.65-1.65Zm-12.7 0a.5.5 0 1 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7l1.64-1.65H1.5a.5.5 0 0 1 0-1h3.8L3.64 7.85Zm4.2-4.2a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7L10.5 5.29V1.5a.5.5 0 0 0-1 0v3.8L7.85 3.64Z",
    fill: primaryFill
  }));
};

export const ArrowMoveInwardRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowMoveInwardRegularIcon, 'ArrowMoveInwardRegular');

const ArrowNextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.75 4.75c.38 0 .7.28.74.65l.01.1v9a.75.75 0 0 1-1.5.1V5.5c0-.41.34-.75.75-.75Zm-8.28.22a.75.75 0 0 1 .98-.07l.08.07 4.5 4.5c.27.27.3.68.07.98l-.07.08-4.5 4.5a.75.75 0 0 1-1.13-.98l.07-.08L9.44 10 5.47 6.03a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowNextFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowNextFilledIcon, 'ArrowNextFilled');

const ArrowNextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V5.5c0-.28.22-.5.5-.5Zm-7.85.15a.5.5 0 0 1 .63-.06l.07.06 4.5 4.5c.18.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 0 1-.76-.63l.06-.07L9.79 10 5.65 5.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowNextRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowNextRegularIcon, 'ArrowNextRegular');

const ArrowOutlineUpRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.33 2c.96-.1 1.77.71 1.66 1.67l-1.08 9.7a1.5 1.5 0 0 1-2.55.9L13.3 13.2l-4.36 4.36a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.12L6.8 6.7 5.74 5.64a1.5 1.5 0 0 1 .89-2.55L16.33 2Z",
    fill: primaryFill
  }));
};

export const ArrowOutlineUpRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowOutlineUpRightFilledIcon, 'ArrowOutlineUpRightFilled');

const ArrowOutlineUpRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 3.56a.5.5 0 0 0-.56-.56l-9.7 1.08a.5.5 0 0 0-.3.85l1.42 1.42a.5.5 0 0 1 0 .71l-4.71 4.72a.5.5 0 0 0 0 .7l4.37 4.37c.2.2.5.2.7 0l4.72-4.71c.2-.2.51-.2.7 0l1.43 1.42c.3.3.8.12.85-.3L17 3.56ZM16.33 2c.96-.1 1.77.7 1.66 1.66l-1.08 9.7a1.5 1.5 0 0 1-2.55.9L13.3 13.2l-4.36 4.36a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.12L6.8 6.7 5.74 5.64a1.5 1.5 0 0 1 .89-2.55L16.33 2Z",
    fill: primaryFill
  }));
};

export const ArrowOutlineUpRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowOutlineUpRightRegularIcon, 'ArrowOutlineUpRightRegular');

const ArrowParagraphFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.25 2c.41 0 .75.34.75.75v2.5A2.75 2.75 0 0 1 15.25 8h-3.8l1.36 1.5a.75.75 0 0 1-1.12 1L9.2 7.75a.75.75 0 0 1 0-1L11.7 4a.75.75 0 0 1 1.12 1l-1.36 1.5h3.8c.69 0 1.25-.56 1.25-1.25v-2.5c0-.41.34-.75.75-.75ZM8.3 9.5a.75.75 0 1 0-1.1 1L8.55 12h-5.8a.75.75 0 0 0 0 1.5h5.8L7.2 15a.75.75 0 0 0 1.1 1l2.5-2.75a.75.75 0 0 0 0-1L8.3 9.5Z",
    fill: primaryFill
  }));
};

export const ArrowParagraphFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowParagraphFilledIcon, 'ArrowParagraphFilled');

const ArrowParagraphRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 10.85a.5.5 0 0 0 .7-.7L10.71 8h4.79A2.5 2.5 0 0 0 18 5.5v-3s0-.5-.5-.5-.5.5-.5.5v3c0 .83-.67 1.5-1.5 1.5h-4.8l2.15-2.15a.5.5 0 0 0-.7-.7l-3 3a.5.5 0 0 0 0 .7l3 3Zm-4.3-1.7a.5.5 0 1 0-.7.7L9.29 12H2.5s-.5 0-.5.5.5.5.5.5h6.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3a.5.5 0 0 0 0-.7l-3-3Z",
    fill: primaryFill
  }));
};

export const ArrowParagraphRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowParagraphRegularIcon, 'ArrowParagraphRegular');

const ArrowPreviousFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 4.75c-.38 0-.7.28-.74.65l-.01.1v9a.75.75 0 0 0 1.5.1V5.5A.75.75 0 0 0 6 4.75Zm8.28.22a.75.75 0 0 0-.98-.07l-.08.07-4.5 4.5a.75.75 0 0 0-.07.98l.07.08 4.5 4.5a.75.75 0 0 0 1.13-.98l-.07-.08L10.31 10l3.97-3.97c.3-.3.3-.77 0-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowPreviousFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowPreviousFilledIcon, 'ArrowPreviousFilled');

const ArrowPreviousRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 5a.5.5 0 0 0-.5.41v9.09a.5.5 0 0 0 1 .09V5.5A.5.5 0 0 0 6 5Zm7.85.15a.5.5 0 0 0-.63-.06l-.07.06-4.5 4.5a.5.5 0 0 0-.06.63l.06.07 4.5 4.5a.5.5 0 0 0 .76-.63l-.06-.07L9.71 10l4.14-4.15a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowPreviousRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowPreviousRegularIcon, 'ArrowPreviousRegular');

const ArrowRedoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.14 6.5h-2.39a.75.75 0 1 0 0 1.5h4.4c.47 0 .85-.38.85-.85v-4.4a.75.75 0 0 0-1.5 0V5.7l-3.06-2.66a5.25 5.25 0 0 0-6.88 7.92l8.17 7.1a.75.75 0 1 0 .98-1.13l-8.17-7.1a3.75 3.75 0 1 1 4.92-5.66l2.68 2.33Z",
    fill: primaryFill
  }));
};

export const ArrowRedoFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRedoFilledIcon, 'ArrowRedoFilled');

const ArrowRedoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 2.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6h-4.9a.5.5 0 0 1 0-1h3.6l-3.48-3.02a4 4 0 1 0-5.24 6.04l8.17 7.1a.5.5 0 1 1-.66.76l-8.17-7.1a5 5 0 1 1 6.56-7.55L15 6.46V2.5Z",
    fill: primaryFill
  }));
};

export const ArrowRedoRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRedoRegularIcon, 'ArrowRedoRegular');

const ArrowRepeat1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.75 6.01c.18 0 .35.06.48.17a4.98 4.98 0 0 1 1.74 4.4c-.46-.23-.95-.4-1.47-.49V10a3.5 3.5 0 0 0-1.26-2.69.75.75 0 0 1 .5-1.3Zm-5.38 7.49c-.18.47-.3.98-.35 1.5H8.56l1.22 1.22c.27.27.3.68.08.98l-.08.08a.75.75 0 0 1-.97.07l-.09-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.14.98l-.08.08-1.22 1.22h1.81Zm-.15-10.78a.75.75 0 0 1 .98-.07l.08.07 2.5 2.5.08.08c.19.26.2.62 0 .89l-.08.09-2.5 2.5-.08.07c-.26.2-.62.2-.88.01l-.1-.08-.07-.08a.75.75 0 0 1 0-.89l.07-.09 1.22-1.22H7a3.5 3.5 0 0 0-3.5 3.3v.2c0 1.08.5 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56A5 5 0 0 1 6.78 5h4.66l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.95-2.66a.62.62 0 0 0-.68.23c-.21.3-.58.73-1.1.98a.5.5 0 1 0 .45.9c.3-.15.56-.34.78-.53v3.08a.5.5 0 0 0 1 0v-4.08a.61.61 0 0 0-.45-.58Z",
    fill: primaryFill
  }));
};

export const ArrowRepeat1Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeat1FilledIcon, 'ArrowRepeat1Filled');

const ArrowRepeat1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1 1.08 3.72c-.31-.15-.64-.28-.98-.37a4 4 0 0 0-.88-2.73.5.5 0 0 1 .39-.81ZM10.2 14c-.08.32-.15.66-.18 1H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h3.2Zm1.45-11.35a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.95-2.66a.62.62 0 0 0-.68.23c-.21.3-.58.73-1.1.98a.5.5 0 1 0 .45.9c.3-.15.56-.34.78-.53v3.08a.5.5 0 0 0 1 0v-4.08a.61.61 0 0 0-.45-.58Z",
    fill: primaryFill
  }));
};

export const ArrowRepeat1Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeat1RegularIcon, 'ArrowRepeat1Regular');

const ArrowRepeatAllFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.75 6.01c.18 0 .34.06.47.17a5 5 0 0 1-3 8.82H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.13.98l-.07.08-1.22 1.22H13a3.5 3.5 0 0 0 3.5-3.3V10a3.5 3.5 0 0 0-1.26-2.69.75.75 0 0 1 .5-1.3Zm-5.53-3.29a.75.75 0 0 1 .98-.07l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.08.07c-.26.2-.62.2-.89.01l-.09-.08-.07-.08a.75.75 0 0 1-.01-.89l.08-.09 1.22-1.22H7a3.5 3.5 0 0 0-3.5 3.3v.2c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56A5 5 0 0 1 6.78 5h4.66l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98Z",
    fill: primaryFill
  }));
};

export const ArrowRepeatAllFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeatAllFilledIcon, 'ArrowRepeatAllFilled');

const ArrowRepeatAllRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02A5 5 0 0 1 13.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 0 0 3.11-6.52.5.5 0 0 1 .39-.81Zm-4.85-4.02a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63Z",
    fill: primaryFill
  }));
};

export const ArrowRepeatAllRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeatAllRegularIcon, 'ArrowRepeatAllRegular');

const ArrowRepeatAllOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.22 2.22a.75.75 0 0 1 .98-.07l.08.07 14.5 14.5.07.08a.75.75 0 0 1-1.05 1.05l-.08-.07-2.86-2.85c-.18.03-.37.05-.57.06L13 15H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.13.98l-.07.08-1.22 1.22h3.88L5.69 6.75A3.5 3.5 0 0 0 3.5 9.81V10c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56 4.98 4.98 0 0 1 .82-8.17L2.22 3.28l-.07-.08a.75.75 0 0 1 .07-.98Zm13.53 3.79c.18 0 .34.06.47.17a4.98 4.98 0 0 1 .03 7.62l-1.06-1.07a3.5 3.5 0 0 0 .05-5.42.75.75 0 0 1 .5-1.3Zm-5.53-3.3a.75.75 0 0 1 .98-.06l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.02.02-1.06-1.06.02-.02 1.22-1.22H8.95L7.45 5h3.99l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98Z",
    fill: primaryFill
  }));
};

export const ArrowRepeatAllOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeatAllOffFilledIcon, 'ArrowRepeatAllOffFilled');

const ArrowRepeatAllOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.15 2.15a.5.5 0 0 1 .63-.06l.07.06 15 15 .06.07a.5.5 0 0 1-.7.7l-.06-.07-3-2.98a5 5 0 0 1-.85.12L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6l.28-.01-7.72-7.72a4 4 0 0 0-1.66 6.25c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 4.8 5.5L2.15 2.85l-.06-.07a.5.5 0 0 1 .06-.63ZM16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1-.83 7.1l-.71-.72a4 4 0 0 0 .76-5.76.5.5 0 0 1 .39-.81ZM12.28 2.6l.07.06 2.5 2.5c.18.17.2.44.06.63l-.06.07-2.5 2.5a.5.5 0 0 1-.76-.63l.06-.07L13.28 6h-.14L13 6H8.1l-1-1h6.2l-1.65-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .63-.06Z",
    fill: primaryFill
  }));
};

export const ArrowRepeatAllOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRepeatAllOffRegularIcon, 'ArrowRepeatAllOffRegular');

const ArrowReplyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m4.31 9.5 2.96 2.96a.75.75 0 0 1-.97 1.14l-.09-.08-4.24-4.24a.75.75 0 0 1-.07-.98l.07-.08 4.24-4.24a.75.75 0 0 1 1.14.97l-.08.09L4.31 8H10c4.2 0 7.62 3.34 7.75 7.5v.25a.75.75 0 0 1-1.5 0 6.25 6.25 0 0 0-6.02-6.25H4.3l2.96 2.96L4.31 9.5Z",
    fill: primaryFill
  }));
};

export const ArrowReplyFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyFilledIcon, 'ArrowReplyFilled');

const ArrowReplyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m3.7 9 3.4 3.39a.5.5 0 0 1-.64.76l-.07-.05-4.24-4.25a.5.5 0 0 1-.06-.63l.06-.07L6.39 3.9a.5.5 0 0 1 .76.64l-.05.07L3.7 8H10a7.5 7.5 0 0 1 7.5 7.26v.24a.5.5 0 0 1-1 0A6.5 6.5 0 0 0 10.23 9H3.7l3.4 3.39L3.7 9Z",
    fill: primaryFill
  }));
};

export const ArrowReplyRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyRegularIcon, 'ArrowReplyRegular');

const ArrowReplyAllFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.27 3.98c.27.26.3.68.08.97l-.08.09L8.31 8H10c4.2 0 7.62 3.34 7.75 7.5v.25a.75.75 0 0 1-1.5 0 6.25 6.25 0 0 0-6.02-6.25H8.3l2.96 2.96a.75.75 0 0 1-.97 1.14l-.09-.08-4.24-4.24a.75.75 0 0 1-.07-.98l.07-.08 4.24-4.24c.3-.3.77-.3 1.06 0Zm-9.3 4.24 4.24-4.24a.75.75 0 0 1 1.14.98l-.08.08-3.7 3.71 3.7 3.72a.75.75 0 0 1-.97 1.13l-.09-.07-4.24-4.25a.75.75 0 0 1-.07-.97l.07-.09 4.24-4.24-4.24 4.24Z",
    fill: primaryFill
  }));
};

export const ArrowReplyAllFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyAllFilledIcon, 'ArrowReplyAllFilled');

const ArrowReplyAllRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.1 3.9c.17.18.19.45.05.64l-.05.07L6.7 8H10a7.5 7.5 0 0 1 7.5 7.26v.24a.5.5 0 0 1-1 0A6.5 6.5 0 0 0 10.23 9H6.7l3.4 3.39a.5.5 0 0 1-.64.76l-.07-.05-4.24-4.25a.5.5 0 0 1-.06-.63l.06-.07L9.39 3.9c.2-.2.51-.2.7 0ZM2.15 8.15 6.39 3.9a.5.5 0 0 1 .76.64l-.05.07L3.2 8.5l3.9 3.89a.5.5 0 0 1-.64.76l-.07-.05-4.24-4.25a.5.5 0 0 1-.06-.63l.06-.07L6.39 3.9 2.15 8.15Z",
    fill: primaryFill
  }));
};

export const ArrowReplyAllRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyAllRegularIcon, 'ArrowReplyAllRegular');

const ArrowReplyDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m4.31 10.5 2.96-2.96A.75.75 0 0 0 6.3 6.4l-.09.07-4.24 4.25a.75.75 0 0 0-.07.97l.07.09 4.24 4.24a.75.75 0 0 0 1.14-.98l-.08-.08L4.31 12H10c4.2 0 7.62-3.34 7.75-7.5v-.25a.75.75 0 0 0-1.5 0 6.25 6.25 0 0 1-6.02 6.24H4.3l2.96-2.95-2.96 2.96Z",
    fill: primaryFill
  }));
};

export const ArrowReplyDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyDownFilledIcon, 'ArrowReplyDownFilled');

const ArrowReplyDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m3.7 11 3.4-3.4a.5.5 0 0 0-.64-.76l-.07.06-4.24 4.24a.5.5 0 0 0-.06.64l.06.07 4.24 4.24a.5.5 0 0 0 .76-.63l-.05-.07-3.4-3.4H10a7.5 7.5 0 0 0 7.5-7.25V4.5a.5.5 0 0 0-1 0 6.5 6.5 0 0 1-6.27 6.5H3.7l3.4-3.4L3.7 11Z",
    fill: primaryFill
  }));
};

export const ArrowReplyDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowReplyDownRegularIcon, 'ArrowReplyDownRegular');

const ArrowResetFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.03 2.47c.3.3.3.77 0 1.06L4.81 4.75H11A6.25 6.25 0 1 1 4.75 11a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 0 11 6.25H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowResetFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowResetFilledIcon, 'ArrowResetFilled');

const ArrowResetRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.85 2.65c.2.2.2.5 0 .7L4.21 5H11a6 6 0 1 1-6 6 .5.5 0 0 1 1 0 5 5 0 1 0 5-5H4.2l1.65 1.65a.5.5 0 1 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowResetRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowResetRegularIcon, 'ArrowResetRegular');

const ArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.27 3.2a.75.75 0 0 0-1.04 1.1l5.24 4.95H2.75a.75.75 0 0 0 0 1.5h12.73l-5.25 4.96a.75.75 0 1 0 1.04 1.09l6.41-6.07a1 1 0 0 0 0-1.46l-6.41-6.06Z",
    fill: primaryFill
  }));
};

export const ArrowRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRightFilledIcon, 'ArrowRightFilled');

const ArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.84 2.63a.5.5 0 0 0-.68.74L16.33 9H2.5a.5.5 0 0 0 0 1h13.83l-6.17 5.63a.5.5 0 0 0 .68.74l6.91-6.32a.75.75 0 0 0 0-1.1l-6.91-6.32Z",
    fill: primaryFill
  }));
};

export const ArrowRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRightRegularIcon, 'ArrowRightRegular');

const ArrowRotateClockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 3.5A6.5 6.5 0 0 0 3.5 10 .75.75 0 0 1 2 10a8 8 0 1 1 12.66 6.5h1.09a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.23A6.5 6.5 0 0 0 10 3.5Zm2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

export const ArrowRotateClockwiseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRotateClockwiseFilledIcon, 'ArrowRotateClockwiseFilled');

const ArrowRotateClockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 10a7 7 0 1 1 10 6.33V14.5a.5.5 0 0 0-1 0v3c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-1.62A8 8 0 1 0 2 10a.5.5 0 0 0 1 0Zm7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

export const ArrowRotateClockwiseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRotateClockwiseRegularIcon, 'ArrowRotateClockwiseRegular');

const ArrowRotateCounterclockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 3.5a6.5 6.5 0 0 1 6.5 6.5.75.75 0 0 0 1.5 0 8 8 0 1 0-12.66 6.5H4.25a.75.75 0 0 0 0 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v1.23A6.5 6.5 0 0 1 10 3.5ZM7.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

export const ArrowRotateCounterclockwiseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRotateCounterclockwiseFilledIcon, 'ArrowRotateCounterclockwiseFilled');

const ArrowRotateCounterclockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 10a7 7 0 1 0-10 6.33V14.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.62A8 8 0 1 1 18 10a.5.5 0 0 1-1 0Zm-7 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

export const ArrowRotateCounterclockwiseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRotateCounterclockwiseRegularIcon, 'ArrowRotateCounterclockwiseRegular');

const ArrowRoutingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 5h-4.19A2.75 2.75 0 0 0 8.5 7.75v5.5c0 .64-.48 1.17-1.1 1.24a2.75 2.75 0 1 0 0 1.5 2.75 2.75 0 0 0 2.6-2.74v-5.5c0-.69.56-1.25 1.25-1.25h4.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3Z",
    fill: primaryFill
  }));
};

export const ArrowRoutingFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRoutingFilledIcon, 'ArrowRoutingFilled');

const ArrowRoutingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.85 2.15a.5.5 0 0 0-.7.7L16.29 5H11.5A2.5 2.5 0 0 0 9 7.5v6c0 .83-.67 1.5-1.5 1.5h-.55a2.5 2.5 0 1 0 0 1h.55a2.5 2.5 0 0 0 2.5-2.5v-6c0-.83.67-1.5 1.5-1.5h4.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3a.5.5 0 0 0 0-.7l-3-3ZM6 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

export const ArrowRoutingRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRoutingRegularIcon, 'ArrowRoutingRegular');

const ArrowRoutingRectangleMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 5h-4.19A2.75 2.75 0 0 0 8.5 7.75v5.5c0 .64-.48 1.17-1.1 1.24a2.75 2.75 0 1 0 0 1.5 2.75 2.75 0 0 0 2.6-2.74v-5.5c0-.69.56-1.25 1.25-1.25h4.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3ZM11 12.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4Zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2v-2.5Z",
    fill: primaryFill
  }));
};

export const ArrowRoutingRectangleMultipleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRoutingRectangleMultipleFilledIcon, 'ArrowRoutingRectangleMultipleFilled');

const ArrowRoutingRectangleMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.85 2.15a.5.5 0 0 0-.7.7L16.29 5H11.5A2.5 2.5 0 0 0 9 7.5v6c0 .83-.67 1.5-1.5 1.5h-.55a2.5 2.5 0 1 0 0 1h.55a2.5 2.5 0 0 0 2.5-2.5v-6c0-.83.67-1.5 1.5-1.5h4.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3a.5.5 0 0 0 0-.7l-3-3ZM6 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5-3c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4Zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2v-2.5Z",
    fill: primaryFill
  }));
};

export const ArrowRoutingRectangleMultipleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowRoutingRectangleMultipleRegularIcon, 'ArrowRoutingRectangleMultipleRegular');

const ArrowShuffleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.78 3.72a.75.75 0 1 0-1.06 1.06l.75.75c-3.09.28-4.88 2.2-6.47 3.9l-.05.06C7.2 11.38 5.65 13 2.75 13a.75.75 0 0 0 0 1.5c3.58 0 5.53-2.09 7.25-3.94l.05-.05c1.58-1.7 2.98-3.17 5.34-3.46l-.67.67a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2ZM2.75 5.5c2.78 0 4.58 1.26 6.05 2.7l-.48.5-.1.1-.45.49C6.42 7.97 4.99 7 2.75 7a.75.75 0 1 1 0-1.5Zm12.72 8.97c-2.34-.21-3.94-1.37-5.27-2.66l.49-.51.09-.1.45-.49c1.17 1.14 2.4 2.02 4.16 2.24l-.67-.67a.75.75 0 1 1 1.06-1.06l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowShuffleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowShuffleFilledIcon, 'ArrowShuffleFilled');

const ArrowShuffleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.85 4.15a.5.5 0 0 0-.7.7L16.3 6c-3.33.07-5.29 1.9-7.1 3.6l-.04.03C7.28 11.4 5.53 13 2.5 13a.5.5 0 0 0 0 1c3.45 0 5.45-1.87 7.3-3.6l.04-.03C11.68 8.65 13.4 7.07 16.3 7l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM2.5 6c2.81 0 4.66 1.24 6.26 2.64l-.28.26-.46.43C6.52 8.03 4.92 7 2.5 7a.5.5 0 0 1 0-1Zm13.8 8c-2.7-.06-4.5-1.28-6.06-2.64l.28-.26.46-.43c1.46 1.27 3 2.27 5.31 2.33l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L16.3 14Z",
    fill: primaryFill
  }));
};

export const ArrowShuffleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowShuffleRegularIcon, 'ArrowShuffleRegular');

const ArrowShuffleOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3 3a7.9 7.9 0 0 0-2.4-.35.75.75 0 0 0 0 1.5c2.24 0 3.67.97 5.02 2.29l.4-.42.7.7C7.14 11.44 5.6 13 2.75 13a.75.75 0 0 0 0 1.5c3.53 0 5.47-2.03 7.18-3.86l.7.7c-.13.16-.28.31-.43.47.85.82 1.8 1.6 3 2.1l1.43 1.42a.75.75 0 0 0 1.04 1.04l1.48 1.48a.5.5 0 0 0 .7-.7l-15-15Zm12.16 10.74 2.08 2.08.69-.69c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.67.67a6.32 6.32 0 0 1-.38-.06Zm-4.75-4.75 1.06 1.06a6.92 6.92 0 0 1 4.07-2.15l-.67.67a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.75.75c-2.3.21-3.9 1.34-5.21 2.6Z",
    fill: primaryFill
  }));
};

export const ArrowShuffleOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowShuffleOffFilledIcon, 'ArrowShuffleOffFilled');

const ArrowShuffleOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L6.09 6.8A8.12 8.12 0 0 0 2.5 6a.5.5 0 1 0 0 1c2.42 0 4.02 1.02 5.52 2.33l.31-.3.7.72C7.2 11.45 5.48 13 2.5 13a.5.5 0 0 0 0 1c3.4 0 5.4-1.83 7.25-3.55l.7.71-.2.2c.53.47 1.1.92 1.72 1.32l5.18 5.17a.5.5 0 0 0 .7-.7l-15-15Zm12.12 10.7 1.14 1.14h.19l-.1.1.71.7.94-.94a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 13a7.5 7.5 0 0 1-1.32-.15ZM10.52 8.4l.71.71c1.39-1.16 2.9-2.05 5.06-2.1l-1.14 1.14a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.3 6c-2.54.06-4.28 1.14-5.78 2.4Z",
    fill: primaryFill
  }));
};

export const ArrowShuffleOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowShuffleOffRegularIcon, 'ArrowShuffleOffRegular');

const ArrowSortFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.84 16.72a.76.76 0 0 1-.59.28.73.73 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.07l1.72 1.73V3.75a.75.75 0 0 1 1.5 0v10.68l1.72-1.71a.75.75 0 1 1 1.06 1.06l-2.94 2.94ZM6.34 3.28A.76.76 0 0 0 5.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 0 0 3.28 7.3L5 5.56v10.69a.75.75 0 0 0 1.5 0V5.57l1.72 1.71a.75.75 0 1 0 1.06-1.06L6.34 3.28Z",
    fill: primaryFill
  }));
};

export const ArrowSortFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortFilledIcon, 'ArrowSortFilled');

const ArrowSortRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.35 7.35 5 4.71V16.5a.5.5 0 0 0 1 0V4.7l2.65 2.65a.5.5 0 0 0 .7-.7l-3.49-3.5A.5.5 0 0 0 5.5 3a.5.5 0 0 0-.39.18L1.65 6.65a.5.5 0 1 0 .7.7Zm15.3 5.3L15 15.29V3.5a.5.5 0 0 0-1 0v11.8l-2.65-2.65a.5.5 0 0 0-.7.7l3.49 3.5a.5.5 0 0 0 .36.15.5.5 0 0 0 .39-.18l3.46-3.47a.5.5 0 1 0-.7-.7Z",
    fill: primaryFill
  }));
};

export const ArrowSortRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortRegularIcon, 'ArrowSortRegular');

const ArrowSortDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 17c.23 0 .45-.1.59-.28l2.94-2.94a.75.75 0 0 0-1.06-1.06l-1.72 1.71V3.75a.75.75 0 0 0-1.5 0v10.7L7.28 12.7a.75.75 0 1 0-1.06 1.06l3 3.01c.15.15.34.22.53.22Z",
    fill: primaryFill
  }));
};

export const ArrowSortDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortDownFilledIcon, 'ArrowSortDownFilled');

const ArrowSortDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m10 15.29 2.65-2.64a.5.5 0 0 1 .7.7L9.9 16.82a.5.5 0 0 1-.74.03h-.01l-3.5-3.5a.5.5 0 1 1 .71-.7L9 15.29V3.5a.5.5 0 0 1 1 0v11.79Z",
    fill: primaryFill
  }));
};

export const ArrowSortDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortDownRegularIcon, 'ArrowSortDownRegular');

const ArrowSortDownLinesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.75 17c.23 0 .45-.1.59-.28l2.94-2.94a.75.75 0 0 0-1.06-1.06L7.5 14.43V3.75a.75.75 0 0 0-1.5 0v10.7L4.28 12.7a.75.75 0 1 0-1.06 1.06l3 3.01c.15.15.34.22.53.22Zm3-13a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z",
    fill: primaryFill
  }));
};

export const ArrowSortDownLinesFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortDownLinesFilledIcon, 'ArrowSortDownLinesFilled');

const ArrowSortDownLinesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m7.2 15.29 2.65-2.64a.5.5 0 0 1 .71.7L7.1 16.82a.5.5 0 0 1-.74.03l-3.5-3.5a.5.5 0 1 1 .71-.7l2.65 2.64V3.5a.5.5 0 0 1 1 0v11.79ZM9.5 4a.5.5 0 0 0 0 1h7a.5.5 0 1 0 0-1h-7Zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5Zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2Z",
    fill: primaryFill
  }));
};

export const ArrowSortDownLinesRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortDownLinesRegularIcon, 'ArrowSortDownLinesRegular');

const ArrowSortUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 3c.23 0 .45.1.59.28l2.94 2.94a.75.75 0 0 1-1.06 1.06L10.5 5.57v10.68a.75.75 0 0 1-1.5 0V5.55L7.28 7.3a.75.75 0 1 1-1.06-1.06l3-3.01A.73.73 0 0 1 9.75 3Z",
    fill: primaryFill
  }));
};

export const ArrowSortUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortUpFilledIcon, 'ArrowSortUpFilled');

const ArrowSortUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 4.71 6.35 7.35a.5.5 0 1 1-.7-.7L9.1 3.18a.5.5 0 0 1 .74-.03h.01l3.5 3.5a.5.5 0 1 1-.71.7L10 4.71V16.5a.5.5 0 0 1-1 0V4.71Z",
    fill: primaryFill
  }));
};

export const ArrowSortUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSortUpRegularIcon, 'ArrowSortUpRegular');

const ArrowSplitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 3c.41 0 .75.34.75.75V8H13a2 2 0 0 1 2 2v4.44l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V10a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v4.44l1.22-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L5 14.44V10c0-1.1.9-2 2-2h2.25V3.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowSplitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSplitFilledIcon, 'ArrowSplitFilled');

const ArrowSplitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 3c.28 0 .5.22.5.5V8H13a2 2 0 0 1 2 2v5.3l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.7L14 15.29V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5.3l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.7L5 15.29V10c0-1.1.9-2 2-2h2.5V3.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowSplitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSplitRegularIcon, 'ArrowSplitRegular');

const ArrowSquareDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5.5 3.5v5.8l2.65-2.65a.5.5 0 0 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 0 1 .7-.7l2.65 2.64V6.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

export const ArrowSquareDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSquareDownFilledIcon, 'ArrowSquareDownFilled');

const ArrowSquareDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 6.5a.5.5 0 0 0-1 0v5.8L6.85 9.64a.5.5 0 1 0-.7.7l3.5 3.5c.2.2.5.2.7 0l3.5-3.5a.5.5 0 1 0-.7-.7l-2.65 2.64V6.5ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5ZM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z",
    fill: primaryFill
  }));
};

export const ArrowSquareDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSquareDownRegularIcon, 'ArrowSquareDownRegular');

const ArrowStepBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.85 3.15c.2.2.2.5 0 .7L4.71 7H10a8 8 0 0 1 6.94 4.04.5.5 0 1 1-.88.5A7 7 0 0 0 10 8H4.7l3.15 3.15a.5.5 0 0 1-.7.7L3.15 7.87a.5.5 0 0 1-.01-.72l4-4c.19-.2.5-.2.7 0ZM12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
};

export const ArrowStepBackFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepBackFilledIcon, 'ArrowStepBackFilled');

const ArrowStepBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.85 3.15c.2.2.2.5 0 .7L4.71 7H10a8 8 0 0 1 6.94 4.04.5.5 0 1 1-.88.5A7 7 0 0 0 10 8H4.7l3.15 3.15a.5.5 0 0 1-.7.7L3.15 7.87a.5.5 0 0 1-.01-.72l4-4c.19-.2.5-.2.7 0ZM8 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    fill: primaryFill
  }));
};

export const ArrowStepBackRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepBackRegularIcon, 'ArrowStepBackRegular');

const ArrowStepInFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 2c.28 0 .5.22.5.5v7.8l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7l3.15 3.14V2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepInFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInFilledIcon, 'ArrowStepInFilled');

const ArrowStepInRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-14c.28 0 .5.22.5.5v7.8l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7l3.15 3.14V2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepInRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInRegularIcon, 'ArrowStepInRegular');

const ArrowStepInLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm14-2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepInLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInLeftFilledIcon, 'ArrowStepInLeftFilled');

const ArrowStepInLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepInLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInLeftRegularIcon, 'ArrowStepInLeftRegular');

const ArrowStepInRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2 10c0-.28.22-.5.5-.5h7.8L7.14 6.35a.5.5 0 1 1 .7-.7l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H2.5A.5.5 0 0 1 2 10Z",
    fill: primaryFill
  }));
};

export const ArrowStepInRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInRightFilledIcon, 'ArrowStepInRightFilled');

const ArrowStepInRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM2 10c0-.28.22-.5.5-.5h7.8L7.14 6.35a.5.5 0 1 1 .7-.7l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H2.5A.5.5 0 0 1 2 10Z",
    fill: primaryFill
  }));
};

export const ArrowStepInRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepInRightRegularIcon, 'ArrowStepInRightRegular');

const ArrowStepOutFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepOutFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepOutFilledIcon, 'ArrowStepOutFilled');

const ArrowStepOutRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowStepOutRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepOutRegularIcon, 'ArrowStepOutRegular');

const ArrowStepOverFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 3.15a.5.5 0 0 0 0 .7L15.29 7H10a8 8 0 0 0-6.94 4.04.5.5 0 1 0 .88.5A7 7 0 0 1 10 8h5.3l-3.15 3.15a.5.5 0 1 0 .7.7l3.99-3.98a.5.5 0 0 0 .01-.72l-4-4a.5.5 0 0 0-.7 0ZM8 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
    fill: primaryFill
  }));
};

export const ArrowStepOverFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepOverFilledIcon, 'ArrowStepOverFilled');

const ArrowStepOverRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 3.15a.5.5 0 0 0 0 .7L15.29 7H10a8 8 0 0 0-6.94 4.04.5.5 0 1 0 .88.5A7 7 0 0 1 10 8h5.3l-3.15 3.15a.5.5 0 1 0 .7.7l3.99-3.98a.5.5 0 0 0 .01-.72l-4-4a.5.5 0 0 0-.7 0ZM12 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-2-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

export const ArrowStepOverRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowStepOverRegularIcon, 'ArrowStepOverRegular');

const ArrowSwapFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.78 3.22a.75.75 0 1 0-1.06 1.06L13.44 6H4.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3Zm-4.5 7.56a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L6.56 14h8.69a.75.75 0 0 0 0-1.5H6.56l1.72-1.72Z",
    fill: primaryFill
  }));
};

export const ArrowSwapFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSwapFilledIcon, 'ArrowSwapFilled');

const ArrowSwapRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 3.15c.2-.2.5-.2.7 0l3 3c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7-.7L14.29 7H4.5a.5.5 0 0 1 0-1h9.8l-2.15-2.15a.5.5 0 0 1 0-.7Zm-4.3 7c.2.2.2.5 0 .7L5.71 13h9.79a.5.5 0 0 1 0 1H5.7l2.15 2.15a.5.5 0 0 1-.7.7l-3-3a.5.5 0 0 1 0-.7l3-3c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowSwapRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSwapRegularIcon, 'ArrowSwapRegular');

const ArrowSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.89 3.75a6.25 6.25 0 0 0-3.63 11.26.75.75 0 0 1-.9 1.2 7.75 7.75 0 0 1 4-13.93l-.6-.59A.75.75 0 0 1 9.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 0 1-1.06-1.06L9.9 3.75Zm.22 12.5a6.25 6.25 0 0 0 3.63-11.26.75.75 0 0 1 .9-1.2 7.75 7.75 0 0 1-4 13.93l.6.59a.75.75 0 1 1-1.06 1.06l-2.12-2.12a.75.75 0 0 1 0-1.06l2.12-2.13a.75.75 0 1 1 1.06 1.07l-1.13 1.12Z",
    fill: primaryFill
  }));
};

export const ArrowSyncFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncFilledIcon, 'ArrowSyncFilled');

const ArrowSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 10.14 3.5L8.59 5.04a.5.5 0 0 0 .7.7l2.12-2.11ZM8.6 16.36a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.5 7.5 0 0 0 4.07-13.5.5.5 0 1 0-.59.8A6.5 6.5 0 0 1 9.86 16.5l1.55-1.55a.5.5 0 1 0-.7-.7l-2.12 2.11Z",
    fill: primaryFill
  }));
};

export const ArrowSyncRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncRegularIcon, 'ArrowSyncRegular');

const ArrowSyncCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01.07A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l1 .98a.5.5 0 1 1-.71.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.65-1.85a.5.5 0 0 0-.7 0L9 10.79 7.85 9.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowSyncCheckmarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncCheckmarkFilledIcon, 'ArrowSyncCheckmarkFilled');

const ArrowSyncCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01a6.48 6.48 0 0 0 4.74-1.9 6.5 6.5 0 0 0-.7-9.8.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l.98.98a.5.5 0 1 1-.7.71l-2.12-2.12a.5.5 0 0 1 0-.7Zm3.76-8.21c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7L9 10.79l2.65-2.64c.2-.2.5-.2.7 0ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
};

export const ArrowSyncCheckmarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncCheckmarkRegularIcon, 'ArrowSyncCheckmarkRegular');

const ArrowSyncCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.5-8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.7a3.5 3.5 0 0 0-5.6-.53.5.5 0 1 0 .74.66 2.5 2.5 0 0 1 4.15.67h-.79a.5.5 0 1 0 0 1h2Zm-7.5.5v2a.5.5 0 0 0 1 0v-.7a3.5 3.5 0 0 0 5.6.53.5.5 0 0 0-.74-.66A2.5 2.5 0 0 1 7.71 11h.79a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowSyncCircleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncCircleFilledIcon, 'ArrowSyncCircleFilled');

const ArrowSyncCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-2.5c1.02 0 1.9.62 2.3 1.5h-.8a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.7a3.5 3.5 0 0 0-5.6-.53.5.5 0 0 0 .74.66A2.5 2.5 0 0 1 10 7.5Zm-3 4.3v.7a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.8a2.5 2.5 0 0 0 4.16.67.5.5 0 0 1 .75.66A3.5 3.5 0 0 1 7 11.8Z",
    fill: primaryFill
  }));
};

export const ArrowSyncCircleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncCircleRegularIcon, 'ArrowSyncCircleRegular');

const ArrowSyncDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8 6.5 6.5 0 0 1 5.28-11.55l.02-.02ZM8.6 16.36l.02-.02a6.48 6.48 0 0 0 5.99-1.74 6.5 6.5 0 0 0-.7-9.8.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l.98.98a.5.5 0 1 1-.7.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-3.15-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 0 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 1 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15Z",
    fill: primaryFill
  }));
};

export const ArrowSyncDismissFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncDismissFilledIcon, 'ArrowSyncDismissFilled');

const ArrowSyncDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 2.93c.2.2.2.51 0 .7l-.01.02a6.48 6.48 0 0 0-6 1.75 6.5 6.5 0 0 0 .7 9.8.5.5 0 1 1-.6.8A7.5 7.5 0 0 1 9.59 2.5l-1-.99a.5.5 0 0 1 .71-.7l2.12 2.12Zm-2.8 13.42-.02.01a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.5 7.5 0 0 0 4.07-13.5.5.5 0 1 0-.59.8 6.5 6.5 0 0 1-5.3 11.55Zm3.24-8.2c.2.2.2.5 0 .7L10.71 10l1.14 1.15a.5.5 0 0 1-.7.7L10 10.71l-1.15 1.14a.5.5 0 0 1-.7-.7L9.29 10 8.15 8.85a.5.5 0 1 1 .7-.7L10 9.29l1.15-1.14c.2-.2.5-.2.7 0ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
};

export const ArrowSyncDismissRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncDismissRegularIcon, 'ArrowSyncDismissRegular');

const ArrowSyncOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.89 3.75a6.24 6.24 0 0 0-3.12.9L5.68 3.56a7.73 7.73 0 0 1 3.67-1.28l-.59-.59A.75.75 0 0 1 9.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 0 1-1.06-1.06L9.9 3.75ZM4.18 4.88a7.75 7.75 0 0 0 1.18 11.33.75.75 0 1 0 .9-1.2 6.25 6.25 0 0 1-1.02-9.06l8.81 8.8a6.23 6.23 0 0 1-3.94 1.5l1.13-1.12a.75.75 0 0 0-1.06-1.07L8.06 16.2c-.3.29-.3.76 0 1.06l2.12 2.12a.75.75 0 1 0 1.06-1.06l-.59-.59a7.72 7.72 0 0 0 4.47-1.9l2.03 2.03a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l2.03 2.03Zm11.17 8.35 1.09 1.09a7.75 7.75 0 0 0-1.8-10.53.75.75 0 0 0-.9 1.2 6.25 6.25 0 0 1 1.6 8.24Z",
    fill: primaryFill
  }));
};

export const ArrowSyncOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncOffFilledIcon, 'ArrowSyncOffFilled');

const ArrowSyncOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1c-1.3.07-2.6.48-3.73 1.23l.73.73a6.49 6.49 0 0 1 3.55-.98L8.59 5.05a.5.5 0 0 0 .7.7l2.12-2.11ZM4.35 5.06a7.5 7.5 0 0 0 1.16 10.95.5.5 0 0 0 .6-.8 6.5 6.5 0 0 1-1.04-9.44l9.16 9.17a6.48 6.48 0 0 1-4.37 1.56l1.55-1.55a.5.5 0 1 0-.7-.7l-2.12 2.11a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.47 7.47 0 0 0 4.53-1.85l2.2 2.21a.5.5 0 0 0 .71-.7l-15-15a.5.5 0 1 0-.7.7l2.2 2.21ZM15.3 4.7a7.5 7.5 0 0 1 .96 9.44l-.73-.73A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8c.29.21.56.45.81.7Z",
    fill: primaryFill
  }));
};

export const ArrowSyncOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowSyncOffRegularIcon, 'ArrowSyncOffRegular');

const ArrowTrendingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.94 5.46a.75.75 0 0 0-.7-.46h-5.49a.75.75 0 0 0 0 1.5h3.69l-4.94 4.94-1.97-1.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L8 11.06l1.97 1.97c.3.3.77.3 1.06 0l5.47-5.47v3.69a.75.75 0 0 0 1.5 0v-5.5c0-.1-.02-.2-.06-.29Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingFilledIcon, 'ArrowTrendingFilled');

const ArrowTrendingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.96 5.3a.5.5 0 0 0-.46-.3h-6a.5.5 0 0 0 0 1h4.8l-5.8 5.8-2.15-2.15a.5.5 0 0 0-.7 0l-5.5 5.5a.5.5 0 0 0 .7.7L8 10.71l2.15 2.14c.2.2.5.2.7 0L17 6.71v4.79a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.04-.2Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingRegularIcon, 'ArrowTrendingRegular');

const ArrowTrendingCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.75 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.8l-4.5 4.1a.75.75 0 0 1-1.03-.02L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l1.5 1.5 3.79-3.47h-2.57a.75.75 0 1 1 0-1.5h4.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.62-1.83a.5.5 0 0 0-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 0 0-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 0 0 .05-.7Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingCheckmarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingCheckmarkFilledIcon, 'ArrowTrendingCheckmarkFilled');

const ArrowTrendingCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V4.7l-4.65 4.65a.5.5 0 0 1-.7 0L9 7.71l-5.15 5.14a.5.5 0 0 1-.7-.7l5.5-5.5a.5.5 0 0 1 .7 0L11 8.29 15.3 4h-2.8a.5.5 0 0 1 0-1h4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.62-1.83a.5.5 0 0 0-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 0 0-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 0 0 .05-.7Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingCheckmarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingCheckmarkRegularIcon, 'ArrowTrendingCheckmarkRegular');

const ArrowTrendingDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.94 14.54a.75.75 0 0 1-.7.46h-5.49a.75.75 0 0 1 0-1.5h3.69L10.5 8.56l-1.97 1.97c-.3.3-.77.3-1.06 0L2.22 5.28a.75.75 0 0 1 1.06-1.06L8 8.94l1.97-1.97c.3-.3.77-.3 1.06 0l5.47 5.47V8.75a.75.75 0 0 1 1.5 0v5.5c0 .1-.02.2-.06.29Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingDownFilledIcon, 'ArrowTrendingDownFilled');

const ArrowTrendingDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.96 14.7a.5.5 0 0 1-.46.3h-6a.5.5 0 0 1 0-1h4.8l-5.8-5.8-2.15 2.15a.5.5 0 0 1-.7 0l-5.5-5.5a.5.5 0 1 1 .7-.7L8 9.29l2.15-2.14c.2-.2.5-.2.7 0L17 13.29V8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.04.2Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingDownRegularIcon, 'ArrowTrendingDownRegular');

const ArrowTrendingLinesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 2.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-4.47 4.47c-.3.3-.77.3-1.06 0L8.5 6.56l-4.22 4.22a.75.75 0 1 1-1.06-1.06l4.75-4.75c.3-.3.77-.3 1.06 0l2.47 2.47 3.94-3.94h-.69a.75.75 0 0 1-.75-.75ZM3.75 14c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75Zm4.75-2.25a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM11.75 13c.41 0 .75.34.75.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.41.34-.75.75-.75Zm4.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingLinesFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingLinesFilledIcon, 'ArrowTrendingLinesFilled');

const ArrowTrendingLinesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.5 2a.5.5 0 0 0 0 1h1.8l-4.8 4.8-2.65-2.65a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0 .7.7L8.5 6.21l2.65 2.64c.2.2.5.2.7 0L17 3.71V5.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3Zm1 7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5Zm-8 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Zm3.5 2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Zm-8 1a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingLinesRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingLinesRegularIcon, 'ArrowTrendingLinesRegular');

const ArrowTrendingSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.75 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 0 1 0-1.5h4.5Zm-4.68 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingSettingsFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingSettingsFilledIcon, 'ArrowTrendingSettingsFilled');

const ArrowTrendingSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V4.7l-4.65 4.65a.5.5 0 0 1-.7 0L9 7.71l-5.15 5.14a.5.5 0 0 1-.7-.7l5.5-5.5a.5.5 0 0 1 .7 0L11 8.29 15.3 4h-2.8a.5.5 0 0 1 0-1h4Zm-4.43 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingSettingsRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingSettingsRegularIcon, 'ArrowTrendingSettingsRegular');

const ArrowTrendingTextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.75 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 0 1 0-1.5h4.5ZM10 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingTextFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingTextFilledIcon, 'ArrowTrendingTextFilled');

const ArrowTrendingTextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.8L11 8.3 9.35 6.64a.5.5 0 0 0-.7 0l-5.5 5.5a.5.5 0 0 0 .7.7L9 7.71l1.65 1.64a.5.5 0 0 0 .7 0L16 4.71V7.5a.5.5 0 0 0 1 0v-4ZM10 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingTextRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingTextRegularIcon, 'ArrowTrendingTextRegular');

const ArrowTrendingWrenchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.75 3a.75.75 0 0 1 .75.75v4.5c0 .26-.14.5-.34.63a1.38 1.38 0 0 0-1.15-.9H16V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 0 1 0-1.5h4.5Zm-.65 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 0 0-3.71 4.66l-2.72 2.7a1.5 1.5 0 0 0 2.13 2.13l2.7-2.71a3.5 3.5 0 0 0 4.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 1 1-2.12-2.12l.97-.97Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingWrenchFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingWrenchFilledIcon, 'ArrowTrendingWrenchFilled');

const ArrowTrendingWrenchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V4.7l-4.65 4.65a.5.5 0 0 1-.7 0L9 7.71l-5.15 5.14a.5.5 0 0 1-.7-.7l5.5-5.5a.5.5 0 0 1 .7 0L11 8.29 15.3 4h-2.8a.5.5 0 0 1 0-1h4Zm-.4 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 0 0-3.71 4.66l-2.72 2.7a1.5 1.5 0 0 0 2.13 2.13l2.7-2.71a3.5 3.5 0 0 0 4.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 1 1-2.12-2.12l.97-.97Z",
    fill: primaryFill
  }));
};

export const ArrowTrendingWrenchRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTrendingWrenchRegularIcon, 'ArrowTrendingWrenchRegular');

const ArrowTurnBidirectionalDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 6H9a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L7.5 15.44V9c0-.83.67-1.5 1.5-1.5h6.44l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4c.3-.3.3-.77 0-1.06l-4-4Z",
    fill: primaryFill
  }));
};

export const ArrowTurnBidirectionalDownRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnBidirectionalDownRightFilledIcon, 'ArrowTurnBidirectionalDownRightFilled');

const ArrowTurnBidirectionalDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.85 2.15a.5.5 0 0 0-.7.7L16.29 6H9a3 3 0 0 0-3 3v7.3l-3.15-3.15a.5.5 0 0 0-.7.7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7L7 16.29V9c0-1.1.9-2 2-2h7.3l-3.15 3.15a.5.5 0 0 0 .7.7l4-4a.5.5 0 0 0 0-.7l-4-4Z",
    fill: primaryFill
  }));
};

export const ArrowTurnBidirectionalDownRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnBidirectionalDownRightRegularIcon, 'ArrowTurnBidirectionalDownRightRegular');

const ArrowTurnDownLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.28 16.78c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L6.56 11.5H13c.83 0 1.5-.67 1.5-1.5V3.75a.75.75 0 0 1 1.5 0V10a3 3 0 0 1-3 3H6.56l2.72 2.72c.3.3.3.77 0 1.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownLeftFilledIcon, 'ArrowTurnDownLeftFilled');

const ArrowTurnDownLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.85 16.85a.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 1 1 .7.7L5.71 12H12a2 2 0 0 0 2-2V3.5a.5.5 0 0 1 1 0V10a3 3 0 0 1-3 3H5.7l3.15 3.15c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownLeftRegularIcon, 'ArrowTurnDownLeftRegular');

const ArrowTurnDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.72 16.78c.3.3.77.3 1.06 0l4-4c.3-.3.3-.77 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H7A1.5 1.5 0 0 1 5.5 10V3.75a.75.75 0 0 0-1.5 0V10a3 3 0 0 0 3 3h6.44l-2.72 2.72c-.3.3-.3.77 0 1.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownRightFilledIcon, 'ArrowTurnDownRightFilled');

const ArrowTurnDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.15 16.85c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7l-4-4a.5.5 0 0 0-.7.7L14.29 12H8a2 2 0 0 1-2-2V3.5a.5.5 0 0 0-1 0V10a3 3 0 0 0 3 3h6.3l-3.15 3.15a.5.5 0 0 0 0 .7Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownRightRegularIcon, 'ArrowTurnDownRightRegular');

const ArrowTurnDownUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.45 3.47a.75.75 0 0 0-1.03-.4l-5 2.5a.75.75 0 1 0 .67 1.35l3.24-1.62L10 15.12 5.44 4.45a.75.75 0 0 0-1.38.6l4.8 11.19c.43 1 1.85 1 2.29 0l4.6-10.46 1.3 3.25a.75.75 0 1 0 1.4-.56l-2-5Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownUpFilledIcon, 'ArrowTurnDownUpFilled');

const ArrowTurnDownUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.57 3a.5.5 0 0 1 .4.31l2 5a.5.5 0 1 1-.93.38L15.5 4.85l-4.59 11.52a1 1 0 0 1-1.85.03L4.04 4.7a.5.5 0 0 1 .92-.4L9.98 16l4.57-11.47-3.83 1.92a.5.5 0 1 1-.44-.9l4.98-2.49a.5.5 0 0 1 .3-.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnDownUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnDownUpRegularIcon, 'ArrowTurnDownUpRegular');

const ArrowTurnLeftDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.22 10.72c-.3.3-.3.77 0 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L8.5 13.44V7c0-.83.67-1.5 1.5-1.5h6.25a.75.75 0 0 0 0-1.5H10a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftDownFilledIcon, 'ArrowTurnLeftDownFilled');

const ArrowTurnLeftDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.15 11.15a.5.5 0 0 0 0 .7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7L8 14.29V8c0-1.1.9-2 2-2h6.5a.5.5 0 0 0 0-1H10a3 3 0 0 0-3 3v6.3l-3.15-3.15a.5.5 0 0 0-.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftDownRegularIcon, 'ArrowTurnLeftDownRegular');

const ArrowTurnLeftRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.53 15.45a.75.75 0 0 0 .4-1.03l-2.5-5a.75.75 0 1 0-1.35.67l1.62 3.24L3.88 9l10.67-4.57a.75.75 0 1 0-.6-1.38L2.77 7.86a1.25 1.25 0 0 0 0 2.29l10.46 4.6-3.25 1.3a.75.75 0 1 0 .56 1.4l5-2Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftRightFilledIcon, 'ArrowTurnLeftRightFilled');

const ArrowTurnLeftRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 14.57a.5.5 0 0 1-.31.4l-5 2a.5.5 0 0 1-.38-.93l3.84-1.54L2.63 9.91a1 1 0 0 1-.03-1.85l11.7-5.02a.5.5 0 0 1 .4.92L3 8.98l11.47 4.57-1.92-3.83a.5.5 0 0 1 .9-.44l2.49 4.98c.05.1.07.2.06.3Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftRightRegularIcon, 'ArrowTurnLeftRightRegular');

const ArrowTurnLeftUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.22 9.28a.75.75 0 0 1 0-1.06l4-4c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.5 6.56V13c0 .83.67 1.5 1.5 1.5h6.25a.75.75 0 0 1 0 1.5H10a3 3 0 0 1-3-3V6.56L4.28 9.28c-.3.3-.77.3-1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftUpFilledIcon, 'ArrowTurnLeftUpFilled');

const ArrowTurnLeftUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.15 8.85a.5.5 0 0 1 0-.7l4-4c.2-.2.5-.2.7 0l4 4a.5.5 0 0 1-.7.7L8 5.71V12c0 1.1.9 2 2 2h6.5a.5.5 0 0 1 0 1H10a3 3 0 0 1-3-3V5.7L3.85 8.86a.5.5 0 0 1-.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnLeftUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnLeftUpRegularIcon, 'ArrowTurnLeftUpRegular');

const ArrowTurnRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.72 3.22c.3-.3.77-.3 1.06 0l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H7c-.83 0-1.5.67-1.5 1.5v6.25a.75.75 0 0 1-1.5 0V10a3 3 0 0 1 3-3h6.44l-2.72-2.72a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightFilledIcon, 'ArrowTurnRightFilled');

const ArrowTurnRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.15 3.15c.2-.2.5-.2.7 0l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7L14.29 8H8a2 2 0 0 0-2 2v6.5a.5.5 0 0 1-1 0V10a3 3 0 0 1 3-3h6.3l-3.15-3.15a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightRegularIcon, 'ArrowTurnRightRegular');

const ArrowTurnRightDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.78 10.72c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V7c0-.83-.67-1.5-1.5-1.5H3.75a.75.75 0 0 1 0-1.5H10a3 3 0 0 1 3 3v6.44l2.72-2.72c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightDownFilledIcon, 'ArrowTurnRightDownFilled');

const ArrowTurnRightDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.85 11.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 .7-.7L12 14.29V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1 0-1H10a3 3 0 0 1 3 3v6.3l3.15-3.15c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightDownRegularIcon, 'ArrowTurnRightDownRegular');

const ArrowTurnRightLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.47 15.45a.75.75 0 0 1-.4-1.03l2.5-5a.75.75 0 1 1 1.35.67L6.3 13.33 16.12 9 5.45 4.44a.75.75 0 0 1 .6-1.38l11.19 4.8c1 .43 1 1.85 0 2.29l-10.46 4.6 3.25 1.3a.75.75 0 1 1-.56 1.4l-5-2Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightLeftFilledIcon, 'ArrowTurnRightLeftFilled');

const ArrowTurnRightLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 14.57a.5.5 0 0 0 .31.4l5 2a.5.5 0 1 0 .38-.93L5.85 14.5l11.52-4.59a1 1 0 0 0 .03-1.85L5.7 3.04a.5.5 0 0 0-.4.92L17 8.98 5.53 13.55l1.92-3.83a.5.5 0 1 0-.9-.44l-2.49 4.98a.5.5 0 0 0-.06.3Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightLeftRegularIcon, 'ArrowTurnRightLeftRegular');

const ArrowTurnRightUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.78 9.28c.3-.3.3-.77 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72V13c0 .83-.67 1.5-1.5 1.5H3.75a.75.75 0 0 0 0 1.5H10a3 3 0 0 0 3-3V6.56l2.72 2.72c.3.3.77.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightUpFilledIcon, 'ArrowTurnRightUpFilled');

const ArrowTurnRightUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.85 8.85a.5.5 0 0 0 0-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L12 5.71V12a2 2 0 0 1-2 2H3.5a.5.5 0 0 0 0 1H10a3 3 0 0 0 3-3V5.7l3.15 3.15c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

export const ArrowTurnRightUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnRightUpRegularIcon, 'ArrowTurnRightUpRegular');

const ArrowTurnUpDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.45 16.53a.75.75 0 0 1-1.03.4l-5-2.5a.75.75 0 1 1 .67-1.35l3.24 1.62L10 4.88 5.44 15.55a.75.75 0 1 1-1.38-.6l4.8-11.19c.43-1 1.85-1 2.29 0l4.6 10.46 1.3-3.25a.75.75 0 0 1 1.4.56l-2 5Z",
    fill: primaryFill
  }));
};

export const ArrowTurnUpDownFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnUpDownFilledIcon, 'ArrowTurnUpDownFilled');

const ArrowTurnUpDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.57 17a.5.5 0 0 0 .4-.31l2-5a.5.5 0 0 0-.93-.38l-1.54 3.84-4.59-11.52a1 1 0 0 0-1.85-.03L4.04 15.3a.5.5 0 1 0 .92.4L9.98 4l4.57 11.47-3.83-1.92a.5.5 0 1 0-.44.9l4.98 2.49c.1.05.2.07.3.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnUpDownRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnUpDownRegularIcon, 'ArrowTurnUpDownRegular');

const ArrowTurnUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.28 3.22a.75.75 0 0 0-1.06 0l-4 4c-.3.3-.3.77 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L6.56 8.5H13c.83 0 1.5.67 1.5 1.5v6.25a.75.75 0 0 0 1.5 0V10a3 3 0 0 0-3-3H6.56l2.72-2.72c.3-.3.3-.77 0-1.06Z",
    fill: primaryFill
  }));
};

export const ArrowTurnUpLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnUpLeftFilledIcon, 'ArrowTurnUpLeftFilled');

const ArrowTurnUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.85 3.15a.5.5 0 0 0-.7 0l-4 4a.5.5 0 0 0 0 .7l4 4a.5.5 0 0 0 .7-.7L5.71 8H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V10a3 3 0 0 0-3-3H5.7l3.15-3.15a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const ArrowTurnUpLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowTurnUpLeftRegularIcon, 'ArrowTurnUpLeftRegular');

const ArrowUndoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.86 6.5h2.39a.75.75 0 0 1 0 1.5h-4.4A.85.85 0 0 1 4 7.15v-4.4a.75.75 0 0 1 1.5 0V5.7l3.06-2.66a5.25 5.25 0 0 1 6.89 7.92l-8.17 7.1a.75.75 0 1 1-.99-1.13l8.17-7.1a3.75 3.75 0 1 0-4.92-5.66L6.86 6.5Z",
    fill: primaryFill
  }));
};

export const ArrowUndoFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUndoFilledIcon, 'ArrowUndoFilled');

const ArrowUndoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 2.5a.5.5 0 0 0-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 0 0 0-1H5.9l3.48-3.02a4 4 0 0 1 5.25 6.04l-8.17 7.1a.5.5 0 0 0 .65.76l8.17-7.1a5 5 0 0 0-6.56-7.55L5 6.46V2.5Z",
    fill: primaryFill
  }));
};

export const ArrowUndoRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUndoRegularIcon, 'ArrowUndoRegular');

const ArrowUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.2 8.73a.75.75 0 0 0 1.1 1.04l4.95-5.24v12.72a.75.75 0 0 0 1.5 0V4.52l4.95 5.25a.75.75 0 0 0 1.1-1.04l-6.08-6.41a1 1 0 0 0-1.45 0L3.2 8.73Z",
    fill: primaryFill
  }));
};

export const ArrowUpFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpFilledIcon, 'ArrowUpFilled');

const ArrowUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.13 9.16a.5.5 0 1 0 .74.68L9.5 3.67V17.5a.5.5 0 1 0 1 0V3.67l5.63 6.17a.5.5 0 1 0 .74-.68l-6.32-6.92a.75.75 0 0 0-1.1 0L3.13 9.16Z",
    fill: primaryFill
  }));
};

export const ArrowUpRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpRegularIcon, 'ArrowUpRegular');

const ArrowUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 3.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0V5.56l11.22 11.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h5.69c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

export const ArrowUpLeftFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpLeftFilledIcon, 'ArrowUpLeftFilled');

const ArrowUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 4a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0V4.7l12.15 12.15a.5.5 0 0 0 .7-.7L4.71 4h6.79Z",
    fill: primaryFill
  }));
};

export const ArrowUpLeftRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpLeftRegularIcon, 'ArrowUpLeftRegular');

const ArrowUpRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 3.75c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5a.75.75 0 1 1-1.5 0V5.56L4.28 16.78a.75.75 0 0 1-1.06-1.06L14.44 4.5h-5.7A.75.75 0 0 1 8 3.75Z",
    fill: primaryFill
  }));
};

export const ArrowUpRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpRightFilledIcon, 'ArrowUpRightFilled');

const ArrowUpRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 4a.5.5 0 1 1 0-1h8c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0V4.7L3.85 16.86a.5.5 0 0 1-.7-.7L15.29 4H8.5Z",
    fill: primaryFill
  }));
};

export const ArrowUpRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUpRightRegularIcon, 'ArrowUpRightRegular');

const ArrowUploadFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 2a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 2H4.5Zm6 15.35a.75.75 0 0 1-1.5-.1V7.05l-2.97 2.98-.08.07a.75.75 0 0 1-.98-1.14l4.29-4.28a.73.73 0 0 1 .26-.15l.08-.02.15-.02h.06l.07.01.12.03.09.04.04.02.09.06.07.06 4.24 4.26.07.08c.22.3.2.71-.07.98l-.08.07c-.3.22-.72.2-.98-.07L10.5 7.05V17.35Z",
    fill: primaryFill
  }));
};

export const ArrowUploadFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUploadFilledIcon, 'ArrowUploadFilled');

const ArrowUploadRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 3a.5.5 0 0 0 .09-.99H4a.5.5 0 0 0-.09.98L4 3h11ZM9.5 18a.5.5 0 0 0 .5-.41V5.7l3.64 3.65c.17.18.44.2.64.06l.07-.06a.5.5 0 0 0 .06-.63l-.06-.07-4.5-4.5A.5.5 0 0 0 9.6 4h-.1a.5.5 0 0 0-.4.19L4.64 8.65a.5.5 0 0 0 .64.76l.07-.06L9 5.71V17.5c0 .28.22.5.5.5Z",
    fill: primaryFill
  }));
};

export const ArrowUploadRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowUploadRegularIcon, 'ArrowUploadRegular');

const ArrowWrapFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.75 3.5a3.25 3.25 0 0 1 0 6.5h-7.5a1.75 1.75 0 1 0 0 3.5h9.19l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H6.25a3.25 3.25 0 0 1 0-6.5h7.5a1.75 1.75 0 1 0 0-3.5h-10a.75.75 0 0 1 0-1.5h10Z",
    fill: primaryFill
  }));
};

export const ArrowWrapFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowWrapFilledIcon, 'ArrowWrapFilled');

const ArrowWrapRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 4a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h10.3l-.65-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H3.5a.5.5 0 0 1 0-1H14Z",
    fill: primaryFill
  }));
};

export const ArrowWrapRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowWrapRegularIcon, 'ArrowWrapRegular');

const ArrowWrapOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l.98.98A.75.75 0 0 0 3.75 5h.54l3.5 3.5H6.25a3.25 3.25 0 1 0 0 6.5h8.04l.71.7a.75.75 0 0 0 .8.8l1.35 1.35a.5.5 0 0 0 .7-.7l-15-15ZM12.8 13.5H6.25a1.75 1.75 0 1 1 0-3.5h3.04l3.5 3.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.75 8.5h-3.13l1.5 1.5h1.63a3.25 3.25 0 0 0 0-6.5H5.62L7.12 5h6.63a1.75 1.75 0 1 1 0 3.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m17.34 15.22-2.33-2.33a.75.75 0 0 1 1.27-.67l1.5 1.5c.3.3.3.77 0 1.06l-.44.44Z",
    fill: primaryFill
  }));
};

export const ArrowWrapOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowWrapOffFilledIcon, 'ArrowWrapOffFilled');

const ArrowWrapOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.17 1.18A.5.5 0 0 0 3.5 5h.8l4 4H6a3 3 0 1 0 0 6h8.3l1.35 1.35 1.5 1.5a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14H6a2 2 0 1 1 0-4h3.3l4 4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 9h-2.88l1 1H14a3 3 0 1 0 0-6H6.12l1 1H14a2 2 0 1 1 0 4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.41 15.3 16.12 14h.17l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-.44.44Z",
    fill: primaryFill
  }));
};

export const ArrowWrapOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowWrapOffRegularIcon, 'ArrowWrapOffRegular');

const ArrowsBidirectionalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.68 5.03c.2.08.32.26.32.47V8h6V5.5a.5.5 0 0 1 .87-.33l4 4.5a.5.5 0 0 1 0 .66l-4 4.5a.5.5 0 0 1-.87-.33V12H7v2.5a.5.5 0 0 1-.87.33l-4-4.5a.5.5 0 0 1 0-.66l4-4.5a.5.5 0 0 1 .55-.14Z",
    fill: primaryFill
  }));
};

export const ArrowsBidirectionalFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowsBidirectionalFilledIcon, 'ArrowsBidirectionalFilled');

const ArrowsBidirectionalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.68 5.03c.2.08.32.26.32.47V8h6V5.5a.5.5 0 0 1 .87-.33l4 4.5a.5.5 0 0 1 0 .66l-4 4.5a.5.5 0 0 1-.87-.33V12H7v2.5a.5.5 0 0 1-.87.33l-4-4.5a.5.5 0 0 1 0-.66l4-4.5a.5.5 0 0 1 .55-.14ZM3.17 10 6 13.18V11.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.68L16.83 10 14 6.82V8.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V6.82L3.17 10Z",
    fill: primaryFill
  }));
};

export const ArrowsBidirectionalRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/ArrowsBidirectionalRegularIcon, 'ArrowsBidirectionalRegular');

const AttachFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m5.28 10.6 5.3-5.3a2.75 2.75 0 1 1 3.9 3.9L8.1 15.55a1.25 1.25 0 1 1-1.77-1.77L12 8.13a.75.75 0 0 0-1.06-1.06l-5.66 5.66a2.75 2.75 0 0 0 3.89 3.89l6.36-6.36a4.25 4.25 0 0 0-6-6.02l-5.31 5.3a.75.75 0 0 0 1.06 1.07Z",
    fill: primaryFill
  }));
};

export const AttachFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachFilledIcon, 'AttachFilled');

const AttachRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m4.83 10.48 5.65-5.65a3 3 0 0 1 4.25 4.24L8 15.8a1.5 1.5 0 0 1-2.12-2.12l6-6.01a.5.5 0 1 0-.7-.71l-6 6.01a2.5 2.5 0 0 0 3.53 3.54l6.71-6.72a4 4 0 1 0-5.65-5.66L4.12 9.78a.5.5 0 0 0 .7.7Z",
    fill: primaryFill
  }));
};

export const AttachRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachRegularIcon, 'AttachRegular');

const AttachArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m5.28 10.6 5.3-5.3A2.75 2.75 0 0 1 14.65 9c.56.02 1.1.12 1.6.29a4.25 4.25 0 0 0-6.73-5.05l-5.3 5.3a.75.75 0 0 0 1.06 1.07Zm2.83 4.96.9-.9c.01.63.13 1.22.34 1.78l-.18.18a2.75 2.75 0 0 1-3.89-3.89l5.66-5.66A.75.75 0 1 1 12 8.13L6.34 13.8a1.25 1.25 0 0 0 1.77 1.77ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

export const AttachArrowRightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachArrowRightFilledIcon, 'AttachArrowRightFilled');

const AttachArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m4.83 10.48 5.65-5.65A3 3 0 0 1 14.79 9c.4.02.78.08 1.14.18a4 4 0 0 0-6.14-5.07L4.12 9.78a.5.5 0 0 0 .7.7ZM8 15.78l1-.99c.02.42.09.83.2 1.21l-.5.5a2.5 2.5 0 1 1-3.53-3.54l6.01-6.01a.5.5 0 1 1 .7.7l-6 6.02A1.5 1.5 0 0 0 8 15.79ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 1 0-.7.7L15.29 14H12.5a.5.5 0 1 0 0 1h2.8l-1.15 1.15a.5.5 0 1 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

export const AttachArrowRightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachArrowRightRegularIcon, 'AttachArrowRightRegular');

const AttachTextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.75 3.5c-1.24 0-2.25 1-2.25 2.25v7.5a.75.75 0 0 1-1.5 0v-7.5a3.75 3.75 0 0 1 7.5-.25v10.25a2.25 2.25 0 0 1-4.5 0V5.77a.75.75 0 0 1 1.5 0v9.98a.75.75 0 0 0 1.5 0v-10C9 4.51 8 3.5 6.75 3.5ZM12 8.25c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75-3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM12 11.25c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z",
    fill: primaryFill
  }));
};

export const AttachTextFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachTextFilledIcon, 'AttachTextFilled');

const AttachTextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 4A2.5 2.5 0 0 0 4 6.5V14a.5.5 0 0 1-1 0V6.5a3.5 3.5 0 1 1 7 0V15a2 2 0 0 1-4 0V6.5a.5.5 0 0 1 1 0V15a1 1 0 1 0 2 0V6.5A2.5 2.5 0 0 0 6.5 4ZM12 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-.5 3.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

export const AttachTextRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AttachTextRegularIcon, 'AttachTextRegular');

const AutoFitHeightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.25 2a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm0 14.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm6.03-1.72 2-2a.75.75 0 1 0-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0Z",
    fill: primaryFill
  }));
};

export const AutoFitHeightFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutoFitHeightFilledIcon, 'AutoFitHeightFilled');

const AutoFitHeightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4Zm0 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4ZM9.15 5.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L10 6.71v6.58l1.15-1.14a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L9 13.29V6.71L7.85 7.85a.5.5 0 1 1-.7-.7l2-2Z",
    fill: primaryFill
  }));
};

export const AutoFitHeightRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutoFitHeightRegularIcon, 'AutoFitHeightRegular');

const AutoFitWidthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 4.25a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm-14.5 0a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm1.72 6.03 2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06Z",
    fill: primaryFill
  }));
};

export const AutoFitWidthFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutoFitWidthFilledIcon, 'AutoFitWidthFilled');

const AutoFitWidthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V4ZM3 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V4Zm11.85 5.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L13.29 10H6.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L6.71 9h6.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2Z",
    fill: primaryFill
  }));
};

export const AutoFitWidthRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutoFitWidthRegularIcon, 'AutoFitWidthRegular');

const AutocorrectFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.17 14.75 8.03 4.16a2.25 2.25 0 0 1 3.94 0L14.1 8h3.15a.75.75 0 0 1 0 1.5h-2.26a4.25 4.25 0 1 1-2.89-1.49l.15-.01h.03l-1.84-3.25a.5.5 0 0 0-.87 0L3.47 15.5l-.06.12a.75.75 0 1 1-1.31-.73l.07-.13ZM9 12.25a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z",
    fill: primaryFill
  }));
};

export const AutocorrectFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutocorrectFilledIcon, 'AutocorrectFilled');

const AutocorrectRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.14 5.48a1 1 0 0 1 1.72 0L12.98 9h-.48a3.75 3.75 0 1 0 2.3 1h2.7a.5.5 0 0 0 0-1h-3.35l-2.44-4.03a2 2 0 0 0-3.42 0L2.07 15.24a.5.5 0 0 0 .86.52L9.14 5.48ZM12.25 10a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z",
    fill: primaryFill
  }));
};

export const AutocorrectRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutocorrectRegularIcon, 'AutocorrectRegular');

const AutosumFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.81 3.7a.75.75 0 0 1 .69-.45h11a.75.75 0 0 1 0 1.5H6.26l4.15 4.3c.26.28.28.72.03 1l-4.34 5.2h9.4a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.58-1.23l4.94-5.9-4.9-5.1a.75.75 0 0 1-.15-.81Z",
    fill: primaryFill
  }));
};

export const AutosumFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutosumFilledIcon, 'AutosumFilled');

const AutosumRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.04 3.8a.5.5 0 0 1 .46-.3h11a.5.5 0 1 1 0 1H5.67l4.56 4.73a.5.5 0 0 1 .02.67l-4.68 5.6h9.93a.5.5 0 1 1 0 1h-11a.5.5 0 0 1-.38-.82L9.2 9.6 4.14 4.35a.5.5 0 0 1-.1-.55Z",
    fill: primaryFill
  }));
};

export const AutosumRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/AutosumRegularIcon, 'AutosumRegular');

const BackpackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

export const BackpackFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackpackFilledIcon, 'BackpackFilled');

const BackpackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z",
    fill: primaryFill
  }));
};

export const BackpackRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackpackRegularIcon, 'BackpackRegular');

const BackpackAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

export const BackpackAddFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackpackAddFilledIcon, 'BackpackAddFilled');

const BackpackAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

export const BackpackAddRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackpackAddRegularIcon, 'BackpackAddRegular');

const BackspaceFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

export const BackspaceFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackspaceFilledIcon, 'BackspaceFilled');

const BackspaceRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7ZM6.59 4.66A2.5 2.5 0 0 1 8.29 4h7.21A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.28a2.5 2.5 0 0 1-1.7-.66l-3.78-3.5a2.5 2.5 0 0 1 0-3.68l3.79-3.5Zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 0 0 0 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28Z",
    fill: primaryFill
  }));
};

export const BackspaceRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BackspaceRegularIcon, 'BackspaceRegular');

const BadgeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a3 3 0 0 0 1-.17V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8.17A3 3 0 0 0 16 7Z",
    fill: primaryFill
  }));
};

export const BadgeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BadgeFilledIcon, 'BadgeFilled');

const BadgeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm1 9V6.83A3 3 0 0 1 16 7v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a3 3 0 0 1 .17-1H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2Z",
    fill: primaryFill
  }));
};

export const BadgeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BadgeRegularIcon, 'BadgeRegular');

const BalloonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 7a5 5 0 0 1 10 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 0 1-2.9 2.1V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.05a5.06 5.06 0 0 1-2.9-2.09C5.66 10.6 5 8.86 5 7Zm5.57-3a.5.5 0 1 0-.14 1c.81.11 1.46.76 1.57 1.57a.5.5 0 0 0 1-.14A2.86 2.86 0 0 0 10.56 4Z",
    fill: primaryFill
  }));
};

export const BalloonFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BalloonFilledIcon, 'BalloonFilled');

const BalloonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 4.43a.5.5 0 0 1 .57-.43 2.86 2.86 0 0 1 2.42 2.43.5.5 0 0 1-.99.14A1.86 1.86 0 0 0 10.43 5a.5.5 0 0 1-.43-.57ZM5 7a5 5 0 0 1 10 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 0 1-2.9 2.1V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.05a5.06 5.06 0 0 1-2.9-2.09C5.66 10.6 5 8.86 5 7Zm5-4a4 4 0 0 0-4 4c0 1.64.59 3.16 1.4 4.27C8.24 12.4 9.23 13 10 13s1.76-.6 2.6-1.73A7.31 7.31 0 0 0 14 7a4 4 0 0 0-4-4Z",
    fill: primaryFill
  }));
};

export const BalloonRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BalloonRegularIcon, 'BalloonRegular');

const BarcodeScannerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 5.75A2.75 2.75 0 0 1 4.75 3h.75a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25v.75a.75.75 0 0 1-1.5 0v-.75Zm11.75-2c0-.41.34-.75.75-.75h.75A2.75 2.75 0 0 1 18 5.75v.75a.75.75 0 0 1-1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1-.75-.75Zm-11 9c.41 0 .75.34.75.75v.75c0 .69.56 1.25 1.25 1.25h.75a.75.75 0 0 1 0 1.5h-.75A2.75 2.75 0 0 1 2 14.25v-.75c0-.41.34-.75.75-.75Zm14.5 0c.41 0 .75.34.75.75v.75A2.75 2.75 0 0 1 15.25 17h-.75a.75.75 0 0 1 0-1.5h.75c.69 0 1.25-.56 1.25-1.25v-.75c0-.41.34-.75.75-.75ZM5.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0v-6.5c0-.41.34-.75.75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5ZM11.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0v-6.5c0-.41.34-.75.75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z",
    fill: primaryFill
  }));
};

export const BarcodeScannerFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BarcodeScannerFilledIcon, 'BarcodeScannerFilled');

const BarcodeScannerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h1a.5.5 0 0 1 0 1h-1C3.67 4 3 4.67 3 5.5v1a.5.5 0 0 1-1 0v-1Zm12-2c0-.28.22-.5.5-.5h1A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 1-.5-.5ZM2.5 13c.28 0 .5.22.5.5v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Zm15 0c.28 0 .5.22.5.5v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1c.83 0 1.5-.67 1.5-1.5v-1c0-.28.22-.5.5-.5Zm-12-7c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2.5-.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
};

export const BarcodeScannerRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BarcodeScannerRegularIcon, 'BarcodeScannerRegular');

const Battery0FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery0Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery0FilledIcon, 'Battery0Filled');

const Battery0RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Z",
    fill: primaryFill
  }));
};

export const Battery0Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery0RegularIcon, 'Battery0Regular');

const Battery10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h8.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery10Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery10FilledIcon, 'Battery10Filled');

const Battery10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h8.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h8.33-8.33Z",
    fill: primaryFill
  }));
};

export const Battery10Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery10RegularIcon, 'Battery10Regular');

const Battery1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm-9 1.95a.5.5 0 0 0-.5.5v5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

export const Battery1Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery1FilledIcon, 'Battery1Filled');

const Battery1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-9.25 1c.28 0 .5.22.5.5v5a.5.5 0 1 1-1 0v-5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const Battery1Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery1RegularIcon, 'Battery1Regular');

const Battery2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83h-.33ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery2Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery2FilledIcon, 'Battery2Filled');

const Battery2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h.33-.33Z",
    fill: primaryFill
  }));
};

export const Battery2Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery2RegularIcon, 'Battery2Regular');

const Battery3FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h1.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery3Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery3FilledIcon, 'Battery3Filled');

const Battery3RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h1.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h1.33-1.33Z",
    fill: primaryFill
  }));
};

export const Battery3Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery3RegularIcon, 'Battery3Regular');

const Battery4FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h2.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery4Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery4FilledIcon, 'Battery4Filled');

const Battery4RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h2.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h2.33-2.33Z",
    fill: primaryFill
  }));
};

export const Battery4Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery4RegularIcon, 'Battery4Regular');

const Battery5FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h3.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery5Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery5FilledIcon, 'Battery5Filled');

const Battery5RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h3.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h3.33-3.33Z",
    fill: primaryFill
  }));
};

export const Battery5Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery5RegularIcon, 'Battery5Regular');

const Battery6FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h4.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery6Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery6FilledIcon, 'Battery6Filled');

const Battery6RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h4.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h4.33-4.33Z",
    fill: primaryFill
  }));
};

export const Battery6Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery6RegularIcon, 'Battery6Regular');

const Battery7FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h5.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery7Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery7FilledIcon, 'Battery7Filled');

const Battery7RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h5.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h5.33-5.33Z",
    fill: primaryFill
  }));
};

export const Battery7Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery7RegularIcon, 'Battery7Regular');

const Battery8FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h6.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery8Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery8FilledIcon, 'Battery8Filled');

const Battery8RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h6.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h6.33-6.33Z",
    fill: primaryFill
  }));
};

export const Battery8Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery8RegularIcon, 'Battery8Regular');

const Battery9FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h7.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z",
    fill: primaryFill
  }));
};

export const Battery9Filled = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery9FilledIcon, 'Battery9Filled');

const Battery9RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h7.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h7.33-7.33Z",
    fill: primaryFill
  }));
};

export const Battery9Regular = /*#__PURE__*/wrapIcon( /*#__PURE__*/Battery9RegularIcon, 'Battery9Regular');

const BatteryChargeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.63 5h3.87A2.5 2.5 0 0 1 16 7.37v.98h1.17a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82H16v.84a2.5 2.5 0 0 1-2.35 2.5H7.12a.63.63 0 0 1-.62-.54v-3.84c0-.31.23-.57.54-.62H7.85c.6 0 1.09-.46 1.14-1.04l.01-.1V5.62c0-.32.24-.58.54-.62h3.96-3.88ZM6.29 3.34h.09c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9h-.92v5.38c0 .31-.23.57-.54.61L5 15a.63.63 0 0 1-.62-.54V9h-.92C2.66 9 2 8.35 2 7.54v-1.9c0-.35.28-.63.63-.63H3V3.96c0-.31.24-.57.54-.61l.08-.01c.32 0 .58.23.62.54l.01.08v1.05h1.5V3.95c0-.32.24-.58.54-.62h.09-.09Z",
    fill: primaryFill
  }));
};

export const BatteryChargeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryChargeFilledIcon, 'BatteryChargeFilled');

const BatteryChargeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 7.35v.98l1.17.02a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82l-.11.01H16v.82a2.5 2.5 0 0 1-2.35 2.5H7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6.76c.65 0 1.18-.5 1.24-1.13V7.25c0-.65-.49-1.19-1.12-1.25H9.54C9.2 6 9 5.85 9 5.5s.22-.5.54-.5h3.96A2.5 2.5 0 0 1 16 7.35ZM6.3 3.34h.08c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9H3.46C2.66 9 2 8.35 2 7.54v-1.9c0-.35.28-.63.63-.63H3V3.96c0-.31.24-.57.54-.61l.08-.01c.32 0 .58.23.62.54l.01.08v1.05h1.5V3.95c0-.32.24-.58.54-.62ZM5.5 9v5.5a.5.5 0 1 1-1 0V9h1ZM7 6v1.5a.5.5 0 0 1-.41.5H3.5a.5.5 0 0 1-.5-.4V6h4Z",
    fill: primaryFill
  }));
};

export const BatteryChargeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryChargeRegularIcon, 'BatteryChargeRegular');

const BatteryCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.7A5.5 5.5 0 0 0 2 9.26V7.5Zm8 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 14.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const BatteryCheckmarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryCheckmarkFilledIcon, 'BatteryCheckmarkFilled');

const BatteryCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.7c.09-.34.15-.7.18-1.06h2.77c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24H4.5c-.65 0-1.4.5-1.5 1.13V8.6c-.36.18-.7.4-1 .66V7.5A2.5 2.5 0 0 1 4.5 5h9ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 14.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

export const BatteryCheckmarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryCheckmarkRegularIcon, 'BatteryCheckmarkRegular');

const BatterySaverFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m9.59 5 3.91.01A2.5 2.5 0 0 1 16 7.37v.98h1.17a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82l-.11.01H16v.83a2.5 2.5 0 0 1-2.35 2.5h-.15L6 15c-.18 0-.5-.12-.5-.5s.3-.5.5-.5h.04C7.32 14 10 13.01 10 9.72c0-1.02-.45-2.68-.96-3.92a.58.58 0 0 1 .47-.8h.08Zm-2.42-.71C8.38 6.53 9 8.33 9 9.56c0 1.24-.58 2.28-1.14 2.77a.93.93 0 0 1-.15.1l-.1.05a.35.35 0 0 1-.46-.18.36.36 0 0 1-.02-.2l.02-.08c.47-1.19.7-2.36.68-3.5a.59.59 0 0 0-.59-.58.59.59 0 0 0-.57.56v.02c0 .29 0 .58-.04.88l-.05.37-.04.19-.05.26-.08.32-.03.12c-.13.48-.31.96-.53 1.44a5.55 5.55 0 0 1-3.04 2.86.58.58 0 0 1-.77-.32.6.6 0 0 1 .32-.77 4.69 4.69 0 0 0 1.8-1.28c-1.29-.4-2.04-1.3-2.14-2.56-.12-1.42.41-2.39 1.76-3.47l.65-.5.29-.23a6.89 6.89 0 0 0 1.46-1.56c.23-.36.78-.37.99.02Z",
    fill: primaryFill
  }));
};

export const BatterySaverFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatterySaverFilledIcon, 'BatterySaverFilled');

const BatterySaverRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 9.56c0-1.23-.62-3.03-1.83-5.27-.21-.39-.76-.38-1-.02-.32.51-.8 1.03-1.45 1.56l-.29.22-.65.51C2.43 7.64 1.9 8.61 2.02 10.03c.1 1.25.85 2.15 2.15 2.56-.46.54-1.06.96-1.81 1.28a.6.6 0 0 0-.32.77c.13.3.47.44.77.32a5.55 5.55 0 0 0 3.04-2.86c.22-.48.4-.96.53-1.44l.03-.12.08-.32.05-.26.04-.19.05-.37c.03-.3.05-.6.04-.88V8.5c.01-.3.26-.56.57-.56.32 0 .59.25.6.58a9.02 9.02 0 0 1-.7 3.5l-.01.07c-.02.07 0 .15.02.21.08.18.3.26.47.18l.09-.04.15-.11A3.81 3.81 0 0 0 9 9.56Zm7-2.2A2.5 2.5 0 0 0 13.5 5H9.53c-.3 0-.53.14-.53.5s.2.5.53.5h4.34c.64.06 1.13.6 1.13 1.24v5.63c-.06.63-.6 1.13-1.25 1.13H6c-.3 0-.5.2-.5.5s.2.5.5.5h7.65A2.5 2.5 0 0 0 16 12.5v-.82H17.28a.83.83 0 0 0 .72-.83V9.08a.83.83 0 0 0-.84-.73L16 8.33v-.98Z",
    fill: primaryFill
  }));
};

export const BatterySaverRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatterySaverRegularIcon, 'BatterySaverRegular');

const BatteryWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.26L8.29 9.1a2 2 0 0 0-3.58 0l-2.34 4.7A2.49 2.49 0 0 1 2 12.5v-5Zm3.6 2.05-3.5 7A1 1 0 0 0 3 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM7 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
};

export const BatteryWarningFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryWarningFilledIcon, 'BatteryWarningFilled');

const BatteryWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.26l-.53-1.06h3.04c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24H4.5c-.65 0-1.4.5-1.5 1.13v5.46l-.63 1.26A2.49 2.49 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9ZM5.6 9.55l-3.5 7A1 1 0 0 0 3 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM7 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
};

export const BatteryWarningRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BatteryWarningRegularIcon, 'BatteryWarningRegular');

const BeachFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.39 2.7a5.21 5.21 0 0 0-7.13 1.9l-.2.35a.5.5 0 0 0 .19.68l3.83 2.21-2.1 3.68a5.94 5.94 0 0 0-5.32 2.73h.04a1.5 1.5 0 0 1 1.49 1.03c.35 1.05 1.58.98 1.9.07a1.5 1.5 0 0 1 2.83 0c.31.9 1.54.98 1.9-.07a1.5 1.5 0 0 1 1.51-1.03 6.32 6.32 0 0 0-3.31-2.52l1.93-3.39 3.47 2a.5.5 0 0 0 .68-.18l.2-.34a5.21 5.21 0 0 0-1.91-7.12ZM5.24 15.6a.5.5 0 0 0-.96.03c-.17.7-.5 1.08-.86 1.3-.38.23-.87.32-1.42.32a.5.5 0 0 0 0 1c.64 0 1.33-.1 1.94-.47.34-.2.64-.5.88-.87a2.96 2.96 0 0 0 4.68-.01 2.96 2.96 0 0 0 4.74-.06c.64.9 1.7 1.41 2.76 1.41a.5.5 0 1 0 0-1c-.98 0-1.96-.64-2.29-1.65a.5.5 0 0 0-.95 0 1.98 1.98 0 0 1-3.79.07.5.5 0 0 0-.94 0 1.98 1.98 0 0 1-3.8-.08Z",
    fill: primaryFill
  }));
};

export const BeachFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeachFilledIcon, 'BeachFilled');

const BeachRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.26 4.6a5.21 5.21 0 0 1 9.03 5.22l-.2.34a.5.5 0 0 1-.67.19l-3.47-2-1.93 3.38c1.34.4 2.5 1.33 3.31 2.52h-.09c-.34 0-.66.11-.92.31A4.9 4.9 0 0 0 9.5 12.5a4.9 4.9 0 0 0-3.82 2.06 1.5 1.5 0 0 0-1.01-.3 5.94 5.94 0 0 1 5.31-2.74l2.1-3.68-3.83-2.2a.5.5 0 0 1-.18-.7l.2-.33Zm.92.42 1.7.98.02-.02a8.08 8.08 0 0 1 3.27-2.74 4.22 4.22 0 0 0-4.99 1.78ZM14 7.8c.47-.82.7-1.46.77-2.09a5.8 5.8 0 0 0-.06-1.62 6.96 6.96 0 0 0-2.95 2.41L14 7.8Zm.87.5 1.61.93a4.22 4.22 0 0 0-.74-5.02c.07.56.09 1.1.02 1.63-.1.79-.38 1.56-.89 2.46Zm-9.63 7.3a.5.5 0 0 0-.96.03c-.17.7-.5 1.08-.86 1.3-.38.23-.87.32-1.42.32a.5.5 0 0 0 0 1c.64 0 1.33-.1 1.94-.47.34-.2.64-.5.88-.87a2.96 2.96 0 0 0 4.68-.01 2.96 2.96 0 0 0 4.74-.06c.64.9 1.7 1.41 2.76 1.41a.5.5 0 1 0 0-1c-.98 0-1.96-.64-2.29-1.65a.5.5 0 0 0-.95 0 1.98 1.98 0 0 1-3.79.07.5.5 0 0 0-.94 0 1.98 1.98 0 0 1-3.8-.08Z",
    fill: primaryFill
  }));
};

export const BeachRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeachRegularIcon, 'BeachRegular');

const BeakerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.25 4v4.75c0 .4-.1.81-.3 1.18l-.84 1.57h7.78l-.84-1.57a2.5 2.5 0 0 1-.3-1.18V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75Zm7.17 8.5H5.58l-1.23 2.3A1.5 1.5 0 0 0 5.67 17h8.66a1.5 1.5 0 0 0 1.32-2.2l-1.23-2.3Z",
    fill: primaryFill
  }));
};

export const BeakerFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerFilledIcon, 'BeakerFilled');

const BeakerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 4h.75v4.75c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 0 0 5.67 17h8.66a1.5 1.5 0 0 0 1.32-2.2l-2.6-4.87a2.5 2.5 0 0 1-.3-1.18V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm1.75 4.75V4h3.5v4.75c0 .57.14 1.14.41 1.65l.6 1.1H7.24l.59-1.1c.27-.5.41-1.08.41-1.65ZM6.71 12.5h6.58l1.48 2.76a.5.5 0 0 1-.44.74H5.67a.5.5 0 0 1-.44-.74L6.7 12.5Z",
    fill: primaryFill
  }));
};

export const BeakerRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerRegularIcon, 'BeakerRegular');

const BeakerEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.25 3v4.75c0 .4-.1.81-.3 1.18l-.84 1.57h7.78l-.84-1.57a2.5 2.5 0 0 1-.3-1.18V3h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75Zm7.17 8.5H3.58l-1.23 2.3A1.5 1.5 0 0 0 3.67 16h5.8c.16-.5.43-.96.8-1.33l2.51-2.5-.36-.67Zm-1.44 3.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

export const BeakerEditFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerEditFilledIcon, 'BeakerEditFilled');

const BeakerEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 3h.75v4.75c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 0 0 3.67 16h5.8c.11-.36.29-.7.52-1H3.67a.5.5 0 0 1-.44-.74L4.7 11.5h6.58l.75 1.4.74-.74-1.73-3.23a2.5 2.5 0 0 1-.3-1.18V3h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm1.75 4.75V3h3.5v4.75c0 .57.14 1.14.41 1.65l.6 1.1H5.24l.59-1.1c.27-.5.41-1.08.41-1.65Zm4.73 7.63 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

export const BeakerEditRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerEditRegularIcon, 'BeakerEditRegular');

const BeakerOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l5.1 5.1v.8c0 .4-.1.81-.3 1.18l-.84 1.57h4.68l1 1H5.58l-1.23 2.3A1.5 1.5 0 0 0 5.67 17h8.66c.55 0 1-.29 1.27-.7l1.55 1.55a.5.5 0 0 0 .7-.7l-15-15Zm4.4 2.98 6.37 6.37h.27l-.84-1.57a2.5 2.5 0 0 1-.3-1.18V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75v1.13Z",
    fill: primaryFill
  }));
};

export const BeakerOffFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerOffFilledIcon, 'BeakerOffFilled');

const BeakerOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l5.1 5.1v.8c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 0 0 5.67 17h8.66c.55 0 1-.29 1.27-.7l1.55 1.55a.5.5 0 0 0 .7-.7l-15-15Zm11.98 13.39a.5.5 0 0 1-.5.46H5.67a.5.5 0 0 1-.44-.74L6.7 12.5h5.08l3.04 3.04Zm-4.04-4.04H7.25l.59-1.1c.24-.45.37-.94.4-1.45l2.55 2.55Zm.96-2.75c0 .35.05.7.16 1.04l2.29 2.29-1.15-2.15a2.5 2.5 0 0 1-.3-1.18V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75v1.13l1 1V4h3.5v4.75Z",
    fill: primaryFill
  }));
};

export const BeakerOffRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BeakerOffRegularIcon, 'BeakerOffRegular');

const BedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.5 9a2.5 2.5 0 0 1 2.5 2.34v5.16a.5.5 0 0 1-1 .09V14H3v2.5a.5.5 0 0 1-1 .09V11.5A2.5 2.5 0 0 1 4.34 9H15.5Zm-9-6h7A2.5 2.5 0 0 1 16 5.34V8h-2v-.5a.5.5 0 0 0-.41-.5H11a.5.5 0 0 0-.5.41V8h-1v-.5a.5.5 0 0 0-.41-.5H6.5a.5.5 0 0 0-.5.41V8H4V5.5A2.5 2.5 0 0 1 6.34 3h.16Z",
    fill: primaryFill
  }));
};

export const BedFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BedFilledIcon, 'BedFilled');

const BedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 3A2.5 2.5 0 0 1 16 5.34v2.71a2.5 2.5 0 0 1 2 2.28v6.17a.5.5 0 0 1-1 .09V14H3v2.5a.5.5 0 0 1-1 .09V10.5a2.5 2.5 0 0 1 2-2.45V5.5A2.5 2.5 0 0 1 6.34 3h7.16Zm2 6h-11c-.78 0-1.42.6-1.5 1.36V13h14v-2.5c0-.78-.6-1.42-1.36-1.5h-.14Zm-2-5h-7c-.78 0-1.42.6-1.5 1.36V8h1v-.5c0-.28.22-.5.5-.5H9c.28 0 .5.22.5.5V8h1v-.5c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5V8h1V5.5c0-.78-.6-1.42-1.36-1.5h-.14Z",
    fill: primaryFill
  }));
};

export const BedRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BedRegularIcon, 'BedRegular');

const BezierCurveSquareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 3a2 2 0 0 0-2 2v8c1.4 0 2.26-.4 2.86-.96.62-.57.99-1.35 1.3-2.2l.28-.87.13-.41c.14-.41.29-.83.47-1.19s.41-.7.74-.96C9.1 6.14 9.52 6 10 6s.89.14 1.22.4c.33.26.56.6.74.97.18.36.33.78.47 1.19l.13.4c.09.3.18.58.29.87.3.86.67 1.64 1.29 2.21.6.56 1.47.96 2.86.96V5a2 2 0 0 0-2-2H5Zm12 11c-1.6 0-2.74-.47-3.54-1.23a6.39 6.39 0 0 1-1.56-2.6l-.3-.92-.12-.38a8 8 0 0 0-.41-1.05c-.15-.3-.3-.5-.46-.63A.93.93 0 0 0 10 7a.93.93 0 0 0-.6.2c-.17.12-.32.32-.47.62-.14.3-.27.64-.4 1.05l-.13.38-.3.92c-.32.9-.76 1.86-1.56 2.6A4.95 4.95 0 0 1 3 14v1c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1Z",
    fill: primaryFill
  }));
};

export const BezierCurveSquareFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BezierCurveSquareFilledIcon, 'BezierCurveSquareFilled');

const BezierCurveSquareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm11 9.92a3.5 3.5 0 0 1-1.86-.88 5.42 5.42 0 0 1-1.3-2.2l-.28-.87-.13-.41a8.91 8.91 0 0 0-.47-1.19c-.18-.36-.41-.7-.74-.96C10.9 6.14 10.48 6 10 6s-.89.14-1.22.4c-.33.26-.56.6-.74.97-.18.36-.33.78-.47 1.19l-.13.4c-.09.3-.18.58-.29.87-.3.86-.67 1.64-1.29 2.21a3.5 3.5 0 0 1-1.86.88V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.92ZM4 13.93a4.55 4.55 0 0 0 2.54-1.16c.8-.74 1.24-1.7 1.56-2.6l.3-.92.12-.38c.14-.4.27-.76.41-1.05.15-.3.3-.5.46-.63.16-.12.34-.19.61-.19.27 0 .45.07.6.2.17.12.32.32.47.62a8 8 0 0 1 .4 1.05l.13.38.3.92c.32.9.76 1.86 1.56 2.6.63.59 1.45 1 2.54 1.16V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.07Z",
    fill: primaryFill
  }));
};

export const BezierCurveSquareRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BezierCurveSquareRegularIcon, 'BezierCurveSquareRegular');

const BinFullFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.75 2.93a.5.5 0 1 0-.5-.86l-12 7A.5.5 0 0 0 2 9.5v6A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-6a.5.5 0 0 0-.5-.5H17V6.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5V7H9.5C8.67 7 8 7.67 8 8.5V9H4.35l10.4-6.07ZM12 8v1H9v-.5c0-.28.22-.5.5-.5H12Zm1 1V6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9h-3Z",
    fill: primaryFill
  }));
};

export const BinFullFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BinFullFilledIcon, 'BinFullFilled');

const BinFullRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.93 2.25a.5.5 0 0 1-.18.68L4.35 9H8v-.5C8 7.67 8.67 7 9.5 7H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V9h.5c.28 0 .5.22.5.5v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-6c0-.18.1-.34.25-.43l12-7a.5.5 0 0 1 .68.18ZM16.5 10H3v5.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V10h-.5ZM12 9V8H9.5a.5.5 0 0 0-.5.5V9h3Zm1 0h3V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V9Z",
    fill: primaryFill
  }));
};

export const BinFullRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BinFullRegularIcon, 'BinFullRegular');

const BluetoothFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.53 2.04c-.3.11-.5.4-.5.71v5.88l-1.8-1.46a.75.75 0 0 0-.95 1.16L8.34 10l-2.06 1.67a.75.75 0 1 0 .94 1.16l1.82-1.46v5.88a.75.75 0 0 0 1.33.47l3.46-4.25a.75.75 0 0 0-.1-1.05l-3-2.42 3-2.42a.75.75 0 0 0 .1-1.05l-3.46-4.25a.75.75 0 0 0-.84-.24Zm1 9.73 1.66 1.34-1.65 2.03v-3.37Zm0-3.54V4.86l1.66 2.03-1.65 1.34Z",
    fill: primaryFill
  }));
};

export const BluetoothFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothFilledIcon, 'BluetoothFilled');

const BluetoothRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.32 2.03A.5.5 0 0 0 9 2.5v6.33L6.8 7.1a.5.5 0 0 0-.6.78L8.86 10 6.2 12.1a.5.5 0 1 0 .62.8L9 11.16v6.33a.5.5 0 0 0 .87.33l4-4.5a.5.5 0 0 0-.06-.72L10.49 10l3.32-2.6a.5.5 0 0 0 .06-.73l-4-4.5a.5.5 0 0 0-.55-.14ZM10 10.9l2.77 2.17L10 16.18v-5.3Zm0-1.78v-5.3l2.77 3.13L10 9.1Z",
    fill: primaryFill
  }));
};

export const BluetoothRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothRegularIcon, 'BluetoothRegular');

const BluetoothConnectedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.53 2.04c-.3.11-.5.4-.5.71v5.88l-1.8-1.46a.75.75 0 0 0-.95 1.16L8.34 10l-2.06 1.67a.75.75 0 1 0 .94 1.16l1.82-1.46v5.88a.75.75 0 0 0 1.33.47l3.46-4.25a.75.75 0 0 0-.1-1.05l-3-2.42 3-2.42a.75.75 0 0 0 .1-1.05l-3.46-4.25a.75.75 0 0 0-.84-.24Zm1 9.73 1.66 1.34-1.65 2.03v-3.37Zm0-3.54V4.86l1.66 2.03-1.65 1.34ZM16 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

export const BluetoothConnectedFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothConnectedFilledIcon, 'BluetoothConnectedFilled');

const BluetoothConnectedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.32 2.03A.5.5 0 0 0 9 2.5v6.33L6.8 7.1a.5.5 0 0 0-.6.78L8.86 10 6.2 12.1a.5.5 0 1 0 .62.8L9 11.16v6.33a.5.5 0 0 0 .87.33l4-4.5a.5.5 0 0 0-.06-.72L10.49 10l3.32-2.6a.5.5 0 0 0 .06-.73l-4-4.5a.5.5 0 0 0-.55-.14ZM10 10.9l2.77 2.17L10 16.18v-5.3Zm0-1.78v-5.3l2.77 3.13L10 9.1Zm6 .89a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

export const BluetoothConnectedRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothConnectedRegularIcon, 'BluetoothConnectedRegular');

const BluetoothDisabledFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.87 9.57 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.8-3.79-2.77 3.41a.76.76 0 0 1-.07.08l-.14.17a.75.75 0 0 1-1.33-.47V11.36l-1.82 1.47a.75.75 0 0 1-.94-1.16l2.59-2.1ZM12.29 13l-1.75-1.74V15.14l.93-1.14.82-1Zm1.43-5.4L11.5 9.37 9.04 6.92V2.75a.75.75 0 0 1 1.33-.47l3.46 4.25a.75.75 0 0 1-.1 1.05Zm-2.2-.17h.01l.66-.53-1.65-2.03v3.36l.99-.8Z",
    fill: primaryFill
  }));
};

export const BluetoothDisabledFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothDisabledFilledIcon, 'BluetoothDisabledFilled');

const BluetoothDisabledRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 9.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L13.29 14l-3.42 3.84A.5.5 0 0 1 9 17.5v-6.33L6.8 12.9a.5.5 0 0 1-.6-.78L9 9.9v-.2Zm3.58 3.58L10 10.71v5.47l2.58-2.9ZM13.8 7.4l-2.4 1.9-.72-.72 2.08-1.63L10 3.82v4.06l-1-1V2.5a.5.5 0 0 1 .87-.33l4 4.5a.5.5 0 0 1-.06.72Z",
    fill: primaryFill
  }));
};

export const BluetoothDisabledRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothDisabledRegularIcon, 'BluetoothDisabledRegular');

const BluetoothSearchingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.53 2.04c-.3.11-.5.4-.5.71v5.88l-1.8-1.46a.75.75 0 0 0-.95 1.16L8.34 10l-2.06 1.67a.75.75 0 1 0 .94 1.16l1.82-1.46v5.88a.75.75 0 0 0 1.33.47l3.46-4.25a.75.75 0 0 0-.1-1.05l-3-2.42 3-2.42a.75.75 0 0 0 .1-1.05l-3.46-4.25a.75.75 0 0 0-.84-.24Zm1 9.73 1.66 1.34-1.65 2.03v-3.37Zm0-3.54V4.86l1.66 2.03-1.65 1.34Zm6.72-1.9a.75.75 0 0 1 1 .35 7.72 7.72 0 0 1 0 6.64.75.75 0 0 1-1.35-.64 6.22 6.22 0 0 0 0-5.36.75.75 0 0 1 .35-1Zm-1.04 1.94a.75.75 0 1 0-1.42.5 3.74 3.74 0 0 1 0 2.47.75.75 0 1 0 1.42.49 5.24 5.24 0 0 0 0-3.46Z",
    fill: primaryFill
  }));
};

export const BluetoothSearchingFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothSearchingFilledIcon, 'BluetoothSearchingFilled');

const BluetoothSearchingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.32 2.03A.5.5 0 0 0 9 2.5v6.33L6.8 7.1a.5.5 0 0 0-.6.78L8.86 10 6.2 12.1a.5.5 0 1 0 .62.8L9 11.16v6.33a.5.5 0 0 0 .87.33l4-4.5a.5.5 0 0 0-.06-.72L10.49 10l3.32-2.6a.5.5 0 0 0 .06-.73l-4-4.5a.5.5 0 0 0-.55-.14ZM10 10.9l2.77 2.17L10 16.18v-5.3Zm0-1.78v-5.3l2.77 3.13L10 9.1Zm6.34-2.53a.5.5 0 0 1 .7.15 6 6 0 0 1-.01 6.54.5.5 0 0 1-.84-.54 5 5 0 0 0 0-5.45.5.5 0 0 1 .15-.7Zm-.91 1.35a.5.5 0 0 0-.86.52 3 3 0 0 1 0 3.1.5.5 0 1 0 .86.51 4 4 0 0 0 0-4.13Z",
    fill: primaryFill
  }));
};

export const BluetoothSearchingRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BluetoothSearchingRegularIcon, 'BluetoothSearchingRegular');

const BlurFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2a8 8 0 1 0 5.3 14H10v-1h6.25a8 8 0 0 0 .68-1H10v-1h7.42c.13-.32.24-.66.33-1H10v-1h7.94c.04-.33.06-.66.06-1h-8V9h7.94c-.04-.34-.1-.67-.2-1H10V7h7.42c-.14-.35-.3-.68-.49-1H10V5h6.25c-.3-.36-.61-.7-.96-1H10V3h3.88A7.96 7.96 0 0 0 10 2Z",
    fill: primaryFill
  }));
};

export const BlurFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BlurFilledIcon, 'BlurFilled');

const BlurRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 2a8 8 0 1 0 5.3 14H10v1a7 7 0 1 1 0-14h3.88A7.96 7.96 0 0 0 10 2Zm0 2h5.3c.34.3.66.64.95 1H10V4Zm6.93 2H10v1h7.42c-.14-.35-.3-.68-.49-1ZM10 8h7.75c.08.33.15.66.19 1H10V8Zm8 2h-8v1h7.94c.04-.33.06-.66.06-1Zm-8 2h7.75c-.09.34-.2.68-.33 1H10v-1Zm6.93 2H10v1h6.25a8 8 0 0 0 .68-1Z",
    fill: primaryFill
  }));
};

export const BlurRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BlurRegularIcon, 'BlurRegular');

const BoardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 3v4H3V6a3 3 0 0 1 3-3h3.5Zm1 0v9H17V6a3 3 0 0 0-3-3h-3.5ZM17 13h-6.5v4H14a3 3 0 0 0 3-3v-1Zm-7.5 4V8H3v6a3 3 0 0 0 3 3h3.5Z",
    fill: primaryFill
  }));
};

export const BoardFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardFilledIcon, 'BoardFilled');

const BoardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v1.06L9.5 7V4H6Zm4.5 0v8H16V6a2 2 0 0 0-2-2h-3.5Zm5.5 9h-5.5v3H14a2 2 0 0 0 2-2v-1Zm-6.5 3V8L4 8.06V14c0 1.1.9 2 2 2h3.5Z",
    fill: primaryFill
  }));
};

export const BoardRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardRegularIcon, 'BoardRegular');

const BoardGamesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.95 5.5a2.6 2.6 0 0 1 .98.18 2.5 2.5 0 1 1-2.29 4.42l.45 1.86c.2.78-.4 1.54-1.21 1.54h-.76c-.81 0-1.41-.76-1.22-1.55l.45-1.85a2.48 2.48 0 0 1-1.41.4 2 2 0 0 0-.7-1.07 3.99 3.99 0 0 0-.4-3.64 2.5 2.5 0 0 1 1.2-.29 2.5 2.5 0 0 1 2.46-3 2.5 2.5 0 0 1 2.45 3ZM6.5 5a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z",
    fill: primaryFill
  }));
};

export const BoardGamesFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardGamesFilledIcon, 'BoardGamesFilled');

const BoardGamesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 3a2 2 0 0 0-1.96 2.4.5.5 0 0 1-.54.6 2 2 0 0 0-.92.22 4 4 0 0 0-.55-.83c.3-.17.62-.29.97-.35V5a3 3 0 1 1 6 0v.04a3 3 0 1 1-1.14 5.9l.22.9a1.75 1.75 0 0 1-1.7 2.16h-.76a1.75 1.75 0 0 1-1.7-2.16l.45-1.86a.5.5 0 1 1 .97.24l-.45 1.85c-.12.47.24.93.73.93h.76c.49 0 .84-.45.73-.93l-.45-1.85a.5.5 0 0 1 .76-.54A2 2 0 1 0 15.96 6a.5.5 0 0 1-.5-.6A2 2 0 0 0 13.5 3Zm-9 5a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.9a.5.5 0 0 0-.5.56 6.86 6.86 0 0 0 2.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 0 1-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 0 0 2.34-4.5.5.5 0 0 0-.5-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8c-.25-.33-.4-.75-.4-1.2Zm2-3a3 3 0 0 0-2.82 4.03A1.5 1.5 0 0 0 4 12h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1.5 1.5 0 0 0 .32-2.97A3 3 0 0 0 6.5 5Z",
    fill: primaryFill
  }));
};

export const BoardGamesRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardGamesRegularIcon, 'BoardGamesRegular');

const BoardHeartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 7V3H6a3 3 0 0 0-3 3v1h6.5Zm1.25 8.41 3.43 3.46c.18.17.46.17.64 0l3.43-3.46A2.6 2.6 0 0 0 17 11.06a2.55 2.55 0 0 0-2.38.7l-.12.12-.12-.12a2.55 2.55 0 0 0-3.84.24 2.6 2.6 0 0 0 .21 3.41ZM9.5 17v-1.58a3.6 3.6 0 0 1 0-3.67V8H3v6a3 3 0 0 0 3 3h3.5Zm5-6.43a3.55 3.55 0 0 1 2.5-.53V6a3 3 0 0 0-3-3h-3.5v7.66a3.55 3.55 0 0 1 4-.09Z",
    fill: primaryFill
  }));
};

export const BoardHeartFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardHeartFilledIcon, 'BoardHeartFilled');

const BoardHeartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.92l-.88-.89a3.53 3.53 0 0 1-.1-.11H6a2 2 0 0 1-2-2V8.06L9.5 8v3.75a3.59 3.59 0 0 1 1-1.09V4H14a2 2 0 0 1 2 2v4.03c.33-.04.67-.04 1 .01V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h3.5v3L4 7.06V6Zm13 5.06a2.6 2.6 0 0 1 1.25 4.35l-3.43 3.46a.45.45 0 0 1-.64 0l-3.43-3.46a2.6 2.6 0 0 1-.21-3.41 2.55 2.55 0 0 1 3.84-.24l.12.12.12-.12a2.55 2.55 0 0 1 2.38-.7Z",
    fill: primaryFill
  }));
};

export const BoardHeartRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardHeartRegularIcon, 'BoardHeartRegular');

const BoardSplitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 3a3 3 0 0 0-3 3v3h8V3H6Zm5 7H3v4a3 3 0 0 0 3 3h5v-7Zm3 7h-2v-4h5v1a3 3 0 0 1-3 3Zm3-5h-5V8h5v4Zm0-5h-5V3h2a3 3 0 0 1 3 3v1Z",
    fill: primaryFill
  }));
};

export const BoardSplitFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardSplitFilledIcon, 'BoardSplitFilled');

const BoardSplitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4v4c0 1.1.9 2 2 2h5v-6H4Zm7-1V4H6a2 2 0 0 0-2 2v3h7Zm1 7h2a2 2 0 0 0 2-2v-1h-4v3Zm4-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 1h-4v4h4V8Z",
    fill: primaryFill
  }));
};

export const BoardSplitRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BoardSplitRegularIcon, 'BoardSplitRegular');

const BookFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm.75 2.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

export const BookFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookFilledIcon, 'BookFilled');

const BookRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5Zm1 0v1h6V5H7ZM4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Z",
    fill: primaryFill
  }));
};

export const BookRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookRegularIcon, 'BookRegular');

const BookAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1h4.2A5.5 5.5 0 0 1 16 9.2V4a2 2 0 0 0-2-2H6Zm.75 2.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

export const BookAddFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookAddFilledIcon, 'BookAddFilled');

const BookAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 3H6a1 1 0 0 0-1 1v11h4.02c.03.34.1.68.19 1H5a1 1 0 0 0 1 1h3.6c.18.36.4.7.66 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.2c-.32-.08-.66-.15-1-.18V4a1 1 0 0 0-1-1ZM6 5v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm1 0h6v1H7V5Zm12 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

export const BookAddRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookAddRegularIcon, 'BookAddRegular');

const BookArrowClockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 2.98a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V.98a.5.5 0 0 1 .5-.5c.28 0 .5.22.5.5v2ZM9.02 6A5.5 5.5 0 0 0 16 10.77V15a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h4.24a5.5 5.5 0 0 0-1.22 4Z",
    fill: primaryFill
  }));
};

export const BookArrowClockwiseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookArrowClockwiseFilledIcon, 'BookArrowClockwiseFilled');

const BookArrowClockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.5 3.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 0 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 0 0 0 1h2Zm-1.5 7.3c-.32.08-.66.15-1 .18V15H5V4a1 1 0 0 1 1-1h3.59c.18-.36.4-.7.65-1H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1v-4.23Z",
    fill: primaryFill
  }));
};

export const BookArrowClockwiseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookArrowClockwiseRegularIcon, 'BookArrowClockwiseRegular');

const BookClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.5-6c.28 0 .5.22.5.5V9h1a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

export const BookClockFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookClockFilledIcon, 'BookClockFilled');

const BookClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-1.5a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V7.5Z",
    fill: primaryFill
  }));
};

export const BookClockRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookClockRegularIcon, 'BookClockRegular');

const BookCoinsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 1c-.76 0-1.47.16-2.02.48C7.43 5.8 7 6.31 7 7c0 .69.43 1.2.98 1.52.55.32 1.26.48 2.02.48s1.47-.16 2.02-.48c.55-.32.98-.83.98-1.52 0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0 0 10 5ZM7.03 9.03a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3Zm0 2a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3Z",
    fill: primaryFill
  }));
};

export const BookCoinsFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookCoinsFilledIcon, 'BookCoinsFilled');

const BookCoinsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-8 7.25c0-.08.01-.15.03-.22l.45.3a5.1 5.1 0 0 0 5.49-.3c.02.07.03.14.03.22 0 .3-.18.55-.33.71-.17.18-.4.36-.65.5a4.1 4.1 0 0 1-4.04 0 2.8 2.8 0 0 1-.65-.5 1.1 1.1 0 0 1-.33-.71Zm.03-2.22a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3ZM8 7c0-.21.13-.45.48-.66.36-.2.9-.34 1.52-.34.63 0 1.16.14 1.52.34.35.21.48.45.48.66 0 .21-.13.45-.48.66-.36.2-.9.34-1.52.34a3.1 3.1 0 0 1-1.52-.34C8.13 7.45 8 7.2 8 7Zm2-2c-.76 0-1.47.16-2.02.48C7.43 5.8 7 6.31 7 7c0 .69.43 1.2.98 1.52.55.32 1.26.48 2.02.48s1.47-.16 2.02-.48c.55-.32.98-.83.98-1.52 0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0 0 10 5Z",
    fill: primaryFill
  }));
};

export const BookCoinsRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookCoinsRegularIcon, 'BookCoinsRegular');

const BookCompassFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 .5a.5.5 0 0 0-.5.5v1.06a2 2 0 0 0-.74 3.5L7.54 12.3a.5.5 0 0 0 .92.4l1.21-2.73a2.01 2.01 0 0 0 .66 0l1.21 2.73a.5.5 0 1 0 .92-.4l-1.22-2.73a2 2 0 0 0-.74-3.5V5a.5.5 0 0 0-.5-.5Zm-.5 2.63a1 1 0 1 0 1 1.74 1 1 0 0 0-1-1.74Z",
    fill: primaryFill
  }));
};

export const BookCompassFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookCompassFilledIcon, 'BookCompassFilled');

const BookCompassRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-5 .5c.28 0 .5.22.5.5v1.06a2 2 0 0 1 .74 3.5l1.22 2.74a.5.5 0 0 1-.92.4l-1.21-2.73a2.01 2.01 0 0 1-.66 0L8.46 12.7a.5.5 0 1 1-.92-.4l1.22-2.73a2 2 0 0 1 .74-3.5V5c0-.28.22-.5.5-.5Zm-.5 2.63a1 1 0 1 0 1 1.74 1 1 0 0 0-1-1.74Z",
    fill: primaryFill
  }));
};

export const BookCompassRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookCompassRegularIcon, 'BookCompassRegular');

const BookContactsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 10.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-.25Z",
    fill: primaryFill
  }));
};

export const BookContactsFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookContactsFilledIcon, 'BookContactsFilled');

const BookContactsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 10.75V11c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75ZM4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Z",
    fill: primaryFill
  }));
};

export const BookContactsRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookContactsRegularIcon, 'BookContactsRegular');

const BookDatabaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm4.48 2.34C8.13 6.55 8 6.8 8 7c0 .21.13.45.48.66.36.2.9.34 1.52.34a3.1 3.1 0 0 0 1.52-.34c.35-.21.48-.45.48-.66 0-.21-.13-.45-.48-.66A3.1 3.1 0 0 0 10 6a3.1 3.1 0 0 0-1.52.34Zm-.5-.86C7.43 5.8 7 6.31 7 7v4c0 .63.45 1.14.97 1.46A3.9 3.9 0 0 0 10 13c.78 0 1.5-.21 2.03-.54.52-.32.97-.83.97-1.46V7c0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0 0 10 5c-.76 0-1.47.16-2.02.48ZM12 11V8.53A4.1 4.1 0 0 1 10 9a4.1 4.1 0 0 1-2-.47V11c0 .12.1.36.5.6.36.23.9.4 1.5.4s1.14-.17 1.5-.4c.4-.24.5-.48.5-.6Z",
    fill: primaryFill
  }));
};

export const BookDatabaseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookDatabaseFilledIcon, 'BookDatabaseFilled');

const BookDatabaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM8.48 6.34C8.13 6.55 8 6.8 8 7c0 .21.13.45.48.66.36.2.9.34 1.52.34a3.1 3.1 0 0 0 1.52-.34c.35-.21.48-.45.48-.66 0-.21-.13-.45-.48-.66A3.1 3.1 0 0 0 10 6a3.1 3.1 0 0 0-1.52.34ZM12 8.54A4.1 4.1 0 0 1 10 9a4.1 4.1 0 0 1-2-.47V11c0 .12.1.36.5.6.36.23.9.4 1.5.4s1.14-.17 1.5-.4c.4-.24.5-.48.5-.6V8.53ZM7 7c0-.69.43-1.2.98-1.52A4.08 4.08 0 0 1 10 5c.76 0 1.47.16 2.02.48.55.32.98.83.98 1.52v4c0 .63-.45 1.14-.97 1.46A3.9 3.9 0 0 1 10 13a3.9 3.9 0 0 1-2.03-.54C7.45 12.14 7 11.63 7 11V7Z",
    fill: primaryFill
  }));
};

export const BookDatabaseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookDatabaseRegularIcon, 'BookDatabaseRegular');

const BookExclamationMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 10 5Zm.75 7.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
    fill: primaryFill
  }));
};

export const BookExclamationMarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookExclamationMarkFilledIcon, 'BookExclamationMarkFilled');

const BookExclamationMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 2c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm0 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

export const BookExclamationMarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookExclamationMarkRegularIcon, 'BookExclamationMarkRegular');

const BookGlobeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 10.5-.04-.02a.62.62 0 0 1-.15-.14 2.76 2.76 0 0 1-.4-.82A9.4 9.4 0 0 1 9.01 9h1.98a9.4 9.4 0 0 1-.4 2.52c-.13.38-.27.65-.4.82a.62.62 0 0 1-.15.14.15.15 0 0 1-.03.02H10ZM13.97 9a4 4 0 0 1-2.6 3.26l.17-.42c.25-.76.41-1.75.45-2.84h1.98Zm0-1h-1.98a10.43 10.43 0 0 0-.61-3.26A4 4 0 0 1 13.97 8Zm-5.35 4.26A4 4 0 0 1 6.03 9h1.98a10.43 10.43 0 0 0 .61 3.26ZM6.03 8a4 4 0 0 1 2.6-3.26l-.17.42c-.25.76-.41 1.75-.45 2.84H6.03ZM10 4.5l.04.02c.04.02.09.06.15.14.13.17.27.44.4.82.21.64.36 1.52.4 2.52H9.01c.04-1 .19-1.88.4-2.52.13-.38.27-.65.4-.82a.62.62 0 0 1 .15-.14.15.15 0 0 1 .03-.02H10Z",
    fill: primaryFill
  }));
};

export const BookGlobeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookGlobeFilledIcon, 'BookGlobeFilled');

const BookGlobeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM7.04 8h.97c.05-.77.2-1.49.42-2.06A3 3 0 0 0 7.04 8ZM6 8.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.96-.5a3 3 0 0 0-1.4-2.06c.23.57.38 1.29.43 2.06h.97Zm-.97 1c-.05.77-.2 1.49-.42 2.06A3 3 0 0 0 12.96 9h-.97Zm-1-1a5.56 5.56 0 0 0-.39-1.78 1.88 1.88 0 0 0-.37-.59c-.11-.11-.2-.13-.23-.13-.04 0-.12.02-.23.13-.12.12-.25.31-.37.6-.2.45-.34 1.06-.38 1.77h1.96ZM9.01 9c.04.7.18 1.32.38 1.78.12.28.25.47.37.59.11.11.2.13.23.13.04 0 .12-.02.23-.13.12-.12.25-.31.37-.6.2-.45.34-1.06.38-1.77H9.02Zm-1 0h-.98a3 3 0 0 0 1.4 2.06A6.75 6.75 0 0 1 8 9Z",
    fill: primaryFill
  }));
};

export const BookGlobeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookGlobeRegularIcon, 'BookGlobeRegular');

const BookInformationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.25 6.75a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4Z",
    fill: primaryFill
  }));
};

export const BookInformationFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookInformationFilledIcon, 'BookInformationFilled');

const BookInformationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-3.25 2.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-.25 6.75a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4Z",
    fill: primaryFill
  }));
};

export const BookInformationRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookInformationRegularIcon, 'BookInformationRegular');

const BookLetterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 3c.2 0 .38.12.46.3l3 7a.5.5 0 0 1-.92.4l-.73-1.7H8.2l-.73 1.7a.5.5 0 0 1-.92-.4l3-7A.5.5 0 0 1 10 5Zm-1.38 5h2.76L10 6.77 8.62 10Z",
    fill: primaryFill
  }));
};

export const BookLetterFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookLetterFilledIcon, 'BookLetterFilled');

const BookLetterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 2c.2 0 .38.12.46.3l3 7a.5.5 0 0 1-.92.4l-.73-1.7H8.2l-.73 1.7a.5.5 0 0 1-.92-.4l3-7A.5.5 0 0 1 10 5Zm-1.38 5h2.76L10 6.77 8.62 10Z",
    fill: primaryFill
  }));
};

export const BookLetterRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookLetterRegularIcon, 'BookLetterRegular');

const BookNumberFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.61 8h.98l-.2 1h-.98l.2-1ZM6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V4a2 2 0 0 0-2-2H6Zm5.6 3.51a.5.5 0 0 1 .4.59l-.19.9h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.1a.5.5 0 1 1 0 1h-1.3L11 11.1a.5.5 0 0 1-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 1 1-.98-.2l.18-.9h-.94a.5.5 0 0 1 0-1H8.4l.2-1H7.5a.5.5 0 0 1 0-1h1.29l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.98l.22-1.1a.5.5 0 0 1 .59-.39Z",
    fill: primaryFill
  }));
};

export const BookNumberFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookNumberFilledIcon, 'BookNumberFilled');

const BookNumberRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 7.5c0-.27.22-.5.5-.5h1.29l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.98l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.1a.5.5 0 1 1 0 1h-1.3L11 11.1a.5.5 0 0 1-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 1 1-.98-.2l.18-.9h-.94a.5.5 0 0 1 0-1H8.4l.2-1H7.5a.5.5 0 0 1-.5-.5ZM10.4 9l.2-1H9.6l-.2 1h.98ZM6 2h8a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.5.5H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2ZM5 15h10V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11Z",
    fill: primaryFill
  }));
};

export const BookNumberRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookNumberRegularIcon, 'BookNumberRegular');

const BookOpenFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16.14c-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H12c-.79 0-1.5-.33-2-.86ZM3.5 4.75v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm7.25 9.5c0 .69.56 1.25 1.25 1.25h4.25c.14 0 .25-.11.25-.25V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5Z",
    fill: primaryFill
  }));
};

export const BookOpenFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenFilledIcon, 'BookOpenFilled');

const BookOpenRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16c-.46.6-1.18 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5H12a2.5 2.5 0 0 1-2-1ZM3 4.5v11c0 .28.22.5.5.5H8c.83 0 1.5-.67 1.5-1.5v-9C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5Zm7.5 10c0 .83.67 1.5 1.5 1.5h4.5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5v9Z",
    fill: primaryFill
  }));
};

export const BookOpenRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenRegularIcon, 'BookOpenRegular');

const BookOpenGlobeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 4.75v5.5a5.5 5.5 0 0 0-1.5-.88V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v4.73a5.5 5.5 0 0 0-1.5 2.38V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H8c.42 0 .8-.2 1.02-.53.05.58.19 1.13.4 1.64-.42.25-.9.39-1.42.39H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.01 14a8.9 8.9 0 0 1 .54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.62 10.78c.07-.16.13-.31.21-.46a4.5 4.5 0 0 0-2.8 3.68H12c.05-1.23.27-2.36.61-3.22Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.38 10.78a5.35 5.35 0 0 0-.2-.46c1.5.6 2.6 2 2.8 3.68h-1.99a9.92 9.92 0 0 0-.61-3.22Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 15h1.97a4.5 4.5 0 0 1-2.8 3.68A9.92 9.92 0 0 0 17 15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.92 18.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 0 1-.54-2.85h2.98a8.9 8.9 0 0 1-.54 2.85c-.17.42-.35.72-.53.91Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.03 15a4.5 4.5 0 0 0 2.8 3.68A9.92 9.92 0 0 1 12 15h-1.98Z",
    fill: primaryFill
  }));
};

export const BookOpenGlobeFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenGlobeFilledIcon, 'BookOpenGlobeFilled');

const BookOpenGlobeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 4.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5v5.23c-.4.43-.75.93-1 1.48V5.5C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5H8c.43 0 .82-.18 1.1-.48.06.37.17.72.3 1.05-.4.27-.88.43-1.4.43H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.01 14a8.9 8.9 0 0 1 .54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m12.62 10.78.2-.46a4.5 4.5 0 0 0-2.8 3.68h1.99c.05-1.23.27-2.36.61-3.22Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.38 10.78a5.29 5.29 0 0 0-.21-.46c1.51.6 2.62 2 2.8 3.68H17a9.92 9.92 0 0 0-.61-3.22Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.99 15h1.98a4.5 4.5 0 0 1-2.8 3.68 9.92 9.92 0 0 0 .82-3.68Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.92 18.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 0 1-.54-2.85h2.98a8.9 8.9 0 0 1-.54 2.85c-.17.42-.35.72-.53.91Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.03 15a4.5 4.5 0 0 0 2.8 3.68A9.92 9.92 0 0 1 12 15h-1.98Z",
    fill: primaryFill
  }));
};

export const BookOpenGlobeRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenGlobeRegularIcon, 'BookOpenGlobeRegular');

const BookOpenMicrophoneFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16.14c-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v6.75a2.5 2.5 0 0 0-1.5-2.3V4.76a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5c0 .3.1.58.28.8.09.7.34 1.37.72 1.94a2.74 2.74 0 0 1-1.75-.85ZM3.5 4.75v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm13.93 11.34c.35-.43.57-.98.57-1.59a.5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.46v.54a.5.5 0 0 1-1 0v-.54a3.49 3.49 0 0 1-3-3.46.5.5 0 0 1 1 0 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 1.93-.9ZM15.5 16a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Z",
    fill: primaryFill
  }));
};

export const BookOpenMicrophoneFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenMicrophoneFilledIcon, 'BookOpenMicrophoneFilled');

const BookOpenMicrophoneRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16c-.46.6-1.18 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5v7c0-.82-.4-1.54-1-2v-5a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5v9c0 .52.27.99.68 1.25.13.45.32.86.57 1.24A2.5 2.5 0 0 1 10 16ZM3 4.5v11c0 .28.22.5.5.5H8c.83 0 1.5-.67 1.5-1.5v-9C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5Zm14.43 11.6c.35-.44.57-1 .57-1.6a.5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.46v.54a.5.5 0 0 1-1 0v-.54a3.49 3.49 0 0 1-3-3.46.5.5 0 0 1 1 0 2.49 2.49 0 0 0 2.5 2.5 2.5 2.5 0 0 0 1.93-.9ZM14 11.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z",
    fill: primaryFill
  }));
};

export const BookOpenMicrophoneRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookOpenMicrophoneRegularIcon, 'BookOpenMicrophoneRegular');

const BookPulseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm5.46 2.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z",
    fill: primaryFill
  }));
};

export const BookPulseFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookPulseFilledIcon, 'BookPulseFilled');

const BookPulseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM9.46 6.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z",
    fill: primaryFill
  }));
};

export const BookPulseRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookPulseRegularIcon, 'BookPulseRegular');

const BookQuestionMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm2.76 4.4a.9.9 0 0 0-.26.6.5.5 0 0 1-1 0c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28 0 1.05-.73 1.55-1.28 1.82a8 8 0 0 1-.39.18h-.01a5.75 5.75 0 0 0-.32.15V10a.5.5 0 0 1-1 0V9c0-.25.13-.43.24-.53.11-.1.24-.18.35-.23l.32-.15.02-.01a7 7 0 0 0 .35-.16c.45-.22.72-.47.72-.92a.9.9 0 0 0-.26-.6c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

export const BookQuestionMarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookQuestionMarkFilledIcon, 'BookQuestionMarkFilled');

const BookQuestionMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM8.76 6.4c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4c.2.22.26.47.26.6 0 .45-.27.7-.72.92a7 7 0 0 1-.35.16l-.02.01-.32.15c-.1.05-.24.12-.35.23A.73.73 0 0 0 9.5 9v1a.5.5 0 1 0 1 0v-.85l.04-.02.28-.13h.01a8 8 0 0 0 .4-.18c.54-.27 1.27-.77 1.27-1.82 0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28a.5.5 0 0 0 1 0 .9.9 0 0 1 .26-.6ZM10 13a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

export const BookQuestionMarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookQuestionMarkRegularIcon, 'BookQuestionMarkRegular');

const BookQuestionMarkRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.24 4.4c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4a.9.9 0 0 0-.26.6c0 .45.27.7.72.92l.35.16.02.01.32.15c.1.05.24.12.35.23.11.1.24.28.24.53v1a.5.5 0 1 1-1 0v-.85l-.04-.02A5.75 5.75 0 0 0 9.18 9h-.01a7.97 7.97 0 0 1-.4-.18C8.24 8.55 7.5 8.05 7.5 7c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28a.5.5 0 0 1-1 0 .9.9 0 0 0-.26-.6ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

export const BookQuestionMarkRtlFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookQuestionMarkRtlFilledIcon, 'BookQuestionMarkRtlFilled');

const BookQuestionMarkRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-2.76 3.4c.2.22.26.47.26.6a.5.5 0 0 0 1 0c0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28 0 1.05.73 1.55 1.28 1.82l.39.18h.01a5.75 5.75 0 0 1 .32.15V10a.5.5 0 0 0 1 0V9a.73.73 0 0 0-.24-.53c-.11-.1-.24-.18-.35-.23l-.32-.15-.02-.01-.35-.16C8.77 7.7 8.5 7.45 8.5 7a.9.9 0 0 1 .26-.6c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

export const BookQuestionMarkRtlRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookQuestionMarkRtlRegularIcon, 'BookQuestionMarkRtlRegular');

const BookSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.59 7.88 1.26 1.27a.5.5 0 0 1-.7.7l-1.27-1.26a2.5 2.5 0 1 1 .7-.7ZM8 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
};

export const BookSearchFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookSearchFilledIcon, 'BookSearchFilled');

const BookSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-2.41 6.88a2.5 2.5 0 1 0-.7.7l1.26 1.27a.5.5 0 0 0 .7-.7L11.6 9.88ZM8 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
};

export const BookSearchRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookSearchRegularIcon, 'BookSearchRegular');

const BookStarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6.45 1.29a.5.5 0 0 0-.9 0l-.83 1.77-1.93.23a.5.5 0 0 0-.28.87l1.43 1.33-.38 1.91a.5.5 0 0 0 .73.53l1.71-.95 1.7.95a.5.5 0 0 0 .74-.53l-.38-1.91 1.43-1.33a.5.5 0 0 0-.28-.87l-1.93-.23-.83-1.77Zm-.94 2.44L10 6.7l.49 1.04a.5.5 0 0 0 .39.29l1.14.14-.84.78a.5.5 0 0 0-.15.46l.22 1.14-1-.56a.5.5 0 0 0-.5 0l-1 .56.22-1.14a.5.5 0 0 0-.15-.46l-.84-.78 1.14-.14a.5.5 0 0 0 .4-.29Z",
    fill: primaryFill
  }));
};

export const BookStarFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookStarFilledIcon, 'BookStarFilled');

const BookStarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-4.55 1.29a.5.5 0 0 0-.9 0l-.83 1.77-1.93.23a.5.5 0 0 0-.28.87l1.43 1.33-.38 1.91a.5.5 0 0 0 .73.53l1.71-.95 1.7.95a.5.5 0 0 0 .74-.53l-.38-1.91 1.43-1.33a.5.5 0 0 0-.28-.87l-1.93-.23-.83-1.77Zm-.94 2.44L10 6.7l.49 1.04a.5.5 0 0 0 .39.29l1.14.14-.84.78a.5.5 0 0 0-.15.46l.22 1.14-1-.56a.5.5 0 0 0-.5 0l-1 .56.22-1.14a.5.5 0 0 0-.15-.46l-.84-.78 1.14-.14a.5.5 0 0 0 .4-.29Z",
    fill: primaryFill
  }));
};

export const BookStarRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookStarRegularIcon, 'BookStarRegular');

const BookTemplateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 1A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H8V9H5.5a.5.5 0 0 1 0-1h2.67a3 3 0 0 1 .6-1H5.5a.5.5 0 0 1 0-1H16V3.5A2.5 2.5 0 0 0 13.5 1h-9ZM5 4.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1h7.5a.5.5 0 0 0 .5-.5V9Zm-8 7V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7h-7Z",
    fill: primaryFill
  }));
};

export const BookTemplateFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookTemplateFilledIcon, 'BookTemplateFilled');

const BookTemplateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5V6h-1V3.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 2 3 2.67 3 3.5v9c0 .83.67 1.5 1.5 1.5H8v1H4.5A2.5 2.5 0 0 1 2 12.5v-9ZM5.5 6H11a3 3 0 0 0-2.24 1H5.5a.5.5 0 0 1 0-1Zm2.67 2H5.5a.5.5 0 0 0 0 1H8a3 3 0 0 1 .17-1ZM5.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1h7.5a.5.5 0 0 0 .5-.5V9Zm-8 7V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7h-7Z",
    fill: primaryFill
  }));
};

export const BookTemplateRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookTemplateRegularIcon, 'BookTemplateRegular');

const BookThetaFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm1 7c0-1.06.3-2.04.83-2.77A2.7 2.7 0 0 1 10 5c.9 0 1.66.5 2.17 1.23.52.73.83 1.71.83 2.77s-.3 2.04-.83 2.77A2.7 2.7 0 0 1 10 13c-.9 0-1.66-.5-2.17-1.23A4.79 4.79 0 0 1 7 9Zm4.97.5c-.07.67-.3 1.25-.6 1.68-.4.54-.88.82-1.37.82-.49 0-.97-.28-1.36-.82a3.62 3.62 0 0 1-.61-1.68h3.94Zm0-1a3.62 3.62 0 0 0-.6-1.68C10.96 6.28 10.48 6 10 6c-.49 0-.97.28-1.36.82a3.62 3.62 0 0 0-.61 1.68h3.94Z",
    fill: primaryFill
  }));
};

export const BookThetaFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookThetaFilledIcon, 'BookThetaFilled');

const BookThetaRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM7 9c0-1.06.3-2.04.83-2.77A2.7 2.7 0 0 1 10 5c.9 0 1.66.5 2.17 1.23.52.73.83 1.71.83 2.77s-.3 2.04-.83 2.77A2.7 2.7 0 0 1 10 13c-.9 0-1.66-.5-2.17-1.23A4.79 4.79 0 0 1 7 9Zm4.97.5H8.03c.07.67.3 1.25.6 1.68.4.54.88.82 1.37.82.49 0 .97-.28 1.36-.82.31-.43.54-1.01.61-1.68Zm0-1a3.62 3.62 0 0 0-.6-1.68C10.96 6.28 10.48 6 10 6c-.49 0-.97.28-1.36.82a3.62 3.62 0 0 0-.61 1.68h3.94Z",
    fill: primaryFill
  }));
};

export const BookThetaRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookThetaRegularIcon, 'BookThetaRegular');

const BookToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5V3h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7Zm-5.96-4.96.01-.04H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V11h-4.5A2.5 2.5 0 0 1 9 8.5v-4a2.5 2.5 0 0 1 2.04-2.46Z",
    fill: primaryFill
  }));
};

export const BookToolboxFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookToolboxFilledIcon, 'BookToolboxFilled');

const BookToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5V3h3v-.5a.5.5 0 0 0-.5-.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7ZM6 2h5.05v.04A2.5 2.5 0 0 0 9.5 3H6a1 1 0 0 0-1 1v11h10v-4h1v4.5a.5.5 0 0 1-.5.5H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
};

export const BookToolboxRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookToolboxRegularIcon, 'BookToolboxRegular');

const BookmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v13a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13Z",
    fill: primaryFill
  }));
};

export const BookmarkFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkFilledIcon, 'BookmarkFilled');

const BookmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v13a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13ZM6.5 3C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42V4.5c0-.83-.67-1.5-1.5-1.5h-7Z",
    fill: primaryFill
  }));
};

export const BookmarkRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkRegularIcon, 'BookmarkRegular');

const BookmarkAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5a5.5 5.5 0 0 0 1.5-.2v6.7a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.76a5.5 5.5 0 0 0 4.24 9Z",
    fill: primaryFill
  }));
};

export const BookmarkAddFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkAddFilledIcon, 'BookmarkAddFilled');

const BookmarkAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm0 13.02v-5.54c.34-.03.68-.1 1-.19v6.71a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.76c-.26.3-.48.64-.66 1H6.5C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42Z",
    fill: primaryFill
  }));
};

export const BookmarkAddRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkAddRegularIcon, 'BookmarkAddRegular');

const BookmarkMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.27 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.78.42l-.22-.15V5.5A2.5 2.5 0 0 0 12.5 3H6.27ZM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .78.42L9 15.1l4.22 2.82a.5.5 0 0 0 .78-.42V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

export const BookmarkMultipleFilled = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkMultipleFilledIcon, 'BookmarkMultipleFilled');

const BookmarkMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.27 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.78.42l-.22-.15V5.5A2.5 2.5 0 0 0 12.5 3H6.27ZM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .78.42L9 15.1l4.22 2.82a.5.5 0 0 0 .78-.42V6a2 2 0 0 0-2-2H6ZM5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10.57l-3.72-2.49a.5.5 0 0 0-.56 0L5 16.57V6Z",
    fill: primaryFill
  }));
};

export const BookmarkMultipleRegular = /*#__PURE__*/wrapIcon( /*#__PURE__*/BookmarkMultipleRegularIcon, 'BookmarkMultipleRegular');