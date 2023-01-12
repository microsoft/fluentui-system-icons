"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentMention16Filled = exports.CommentLightning24Regular = exports.CommentLightning24Filled = exports.CommentLightning20Regular = exports.CommentLightning20Filled = exports.CommentError24Regular = exports.CommentError24Filled = exports.CommentError20Regular = exports.CommentError20Filled = exports.CommentError16Regular = exports.CommentError16Filled = exports.CommentEdit24Regular = exports.CommentEdit24Filled = exports.CommentEdit20Regular = exports.CommentEdit20Filled = exports.CommentDismiss24Regular = exports.CommentDismiss24Filled = exports.CommentDismiss20Regular = exports.CommentDismiss20Filled = exports.CommentCheckmark48Regular = exports.CommentCheckmark48Filled = exports.CommentCheckmark28Regular = exports.CommentCheckmark28Filled = exports.CommentCheckmark24Regular = exports.CommentCheckmark24Filled = exports.CommentCheckmark20Regular = exports.CommentCheckmark20Filled = exports.CommentCheckmark16Regular = exports.CommentCheckmark16Filled = exports.CommentCheckmark12Regular = exports.CommentCheckmark12Filled = exports.CommentArrowRight48Regular = exports.CommentArrowRight48Filled = exports.CommentArrowRight28Regular = exports.CommentArrowRight28Filled = exports.CommentArrowRight24Regular = exports.CommentArrowRight24Filled = exports.CommentArrowRight20Regular = exports.CommentArrowRight20Filled = exports.CommentArrowRight16Regular = exports.CommentArrowRight16Filled = exports.CommentArrowRight12Regular = exports.CommentArrowRight12Filled = exports.CommentArrowLeft48Regular = exports.CommentArrowLeft48Filled = exports.CommentArrowLeft28Regular = exports.CommentArrowLeft28Filled = exports.CommentArrowLeft24Regular = exports.CommentArrowLeft24Filled = exports.CommentArrowLeft20Regular = void 0;
exports.Communication20Filled = exports.Communication16Regular = exports.Communication16Filled = exports.CommentOff48Regular = exports.CommentOff48Filled = exports.CommentOff28Regular = exports.CommentOff28Filled = exports.CommentOff24Regular = exports.CommentOff24Filled = exports.CommentOff20Regular = exports.CommentOff20Filled = exports.CommentOff16Regular = exports.CommentOff16Filled = exports.CommentNote24Regular = exports.CommentNote24Filled = exports.CommentNote20Regular = exports.CommentNote20Filled = exports.CommentMultipleLink32Regular = exports.CommentMultipleLink32Filled = exports.CommentMultipleLink28Regular = exports.CommentMultipleLink28Filled = exports.CommentMultipleLink24Regular = exports.CommentMultipleLink24Filled = exports.CommentMultipleLink20Regular = exports.CommentMultipleLink20Filled = exports.CommentMultipleLink16Regular = exports.CommentMultipleLink16Filled = exports.CommentMultipleCheckmark28Regular = exports.CommentMultipleCheckmark28Filled = exports.CommentMultipleCheckmark24Regular = exports.CommentMultipleCheckmark24Filled = exports.CommentMultipleCheckmark20Regular = exports.CommentMultipleCheckmark20Filled = exports.CommentMultipleCheckmark16Regular = exports.CommentMultipleCheckmark16Filled = exports.CommentMultiple32Regular = exports.CommentMultiple32Filled = exports.CommentMultiple28Regular = exports.CommentMultiple28Filled = exports.CommentMultiple24Regular = exports.CommentMultiple24Filled = exports.CommentMultiple20Regular = exports.CommentMultiple20Filled = exports.CommentMultiple16Regular = exports.CommentMultiple16Filled = exports.CommentMention24Regular = exports.CommentMention24Filled = exports.CommentMention20Regular = exports.CommentMention20Filled = exports.CommentMention16Regular = void 0;
exports.ContactCard16Filled = exports.Connector24Regular = exports.Connector24Filled = exports.Connector20Regular = exports.Connector20Filled = exports.Connector16Regular = exports.Connector16Filled = exports.Connected20Regular = exports.Connected20Filled = exports.Connected16Regular = exports.Connected16Filled = exports.ConferenceRoom48Regular = exports.ConferenceRoom48Filled = exports.ConferenceRoom28Regular = exports.ConferenceRoom28Filled = exports.ConferenceRoom24Regular = exports.ConferenceRoom24Filled = exports.ConferenceRoom20Regular = exports.ConferenceRoom20Filled = exports.ConferenceRoom16Regular = exports.ConferenceRoom16Filled = exports.Cone16Regular = exports.Cone16Filled = exports.Compose28Regular = exports.Compose28Filled = exports.Compose24Regular = exports.Compose24Filled = exports.Compose20Regular = exports.Compose20Filled = exports.Compose16Regular = exports.Compose16Filled = exports.Component2DoubleTapSwipeUp24Regular = exports.Component2DoubleTapSwipeUp24Filled = exports.Component2DoubleTapSwipeDown24Regular = exports.Component2DoubleTapSwipeDown24Filled = exports.CompassNorthwest28Regular = exports.CompassNorthwest28Filled = exports.CompassNorthwest24Regular = exports.CompassNorthwest24Filled = exports.CompassNorthwest20Regular = exports.CompassNorthwest20Filled = exports.CompassNorthwest16Regular = exports.CompassNorthwest16Filled = exports.CommunicationPerson24Regular = exports.CommunicationPerson24Filled = exports.CommunicationPerson20Regular = exports.CommunicationPerson20Filled = exports.Communication24Regular = exports.Communication24Filled = exports.Communication20Regular = void 0;
exports.ContentView28Filled = exports.ContentView24Regular = exports.ContentView24Filled = exports.ContentView20Regular = exports.ContentView20Filled = exports.ContentSettings32Regular = exports.ContentSettings32Filled = exports.ContentSettings24Regular = exports.ContentSettings24Filled = exports.ContentSettings20Regular = exports.ContentSettings20Filled = exports.ContentSettings16Regular = exports.ContentSettings16Filled = exports.ContactCardRibbon48Regular = exports.ContactCardRibbon48Filled = exports.ContactCardRibbon32Regular = exports.ContactCardRibbon32Filled = exports.ContactCardRibbon28Regular = exports.ContactCardRibbon28Filled = exports.ContactCardRibbon24Regular = exports.ContactCardRibbon24Filled = exports.ContactCardRibbon20Regular = exports.ContactCardRibbon20Filled = exports.ContactCardRibbon16Regular = exports.ContactCardRibbon16Filled = exports.ContactCardLink20Regular = exports.ContactCardLink20Filled = exports.ContactCardLink16Regular = exports.ContactCardLink16Filled = exports.ContactCardGroup48Regular = exports.ContactCardGroup48Filled = exports.ContactCardGroup28Regular = exports.ContactCardGroup28Filled = exports.ContactCardGroup24Regular = exports.ContactCardGroup24Filled = exports.ContactCardGroup20Regular = exports.ContactCardGroup20Filled = exports.ContactCardGroup16Regular = exports.ContactCardGroup16Filled = exports.ContactCard48Regular = exports.ContactCard48Filled = exports.ContactCard32Regular = exports.ContactCard32Filled = exports.ContactCard28Regular = exports.ContactCard28Filled = exports.ContactCard24Regular = exports.ContactCard24Filled = exports.ContactCard20Regular = exports.ContactCard20Filled = exports.ContactCard16Regular = void 0;
exports.CopySelect20Filled = exports.CopyArrowRight24Regular = exports.CopyArrowRight24Filled = exports.CopyArrowRight20Regular = exports.CopyArrowRight20Filled = exports.CopyArrowRight16Regular = exports.CopyArrowRight16Filled = exports.CopyAdd24Regular = exports.CopyAdd24Filled = exports.CopyAdd20Regular = exports.CopyAdd20Filled = exports.Copy24Regular = exports.Copy24Filled = exports.Copy20Regular = exports.Copy20Filled = exports.Copy16Regular = exports.Copy16Filled = exports.Cookies24Regular = exports.Cookies24Filled = exports.Cookies20Regular = exports.Cookies20Filled = exports.ConvertRange24Regular = exports.ConvertRange24Filled = exports.ConvertRange20Regular = exports.ConvertRange20Filled = exports.ControlButton24Regular = exports.ControlButton24Filled = exports.ControlButton20Regular = exports.ControlButton20Filled = exports.ContractDownLeft48Regular = exports.ContractDownLeft48Filled = exports.ContractDownLeft32Regular = exports.ContractDownLeft32Filled = exports.ContractDownLeft28Regular = exports.ContractDownLeft28Filled = exports.ContractDownLeft24Regular = exports.ContractDownLeft24Filled = exports.ContractDownLeft20Regular = exports.ContractDownLeft20Filled = exports.ContractDownLeft16Regular = exports.ContractDownLeft16Filled = exports.ContentViewGallery28Regular = exports.ContentViewGallery28Filled = exports.ContentViewGallery24Regular = exports.ContentViewGallery24Filled = exports.ContentViewGallery20Regular = exports.ContentViewGallery20Filled = exports.ContentView32Regular = exports.ContentView32Filled = exports.ContentView28Regular = void 0;
exports.Crown20Filled = exports.Crown16Regular = exports.Crown16Filled = exports.CropInterimOff24Regular = exports.CropInterimOff24Filled = exports.CropInterimOff20Regular = exports.CropInterimOff20Filled = exports.CropInterim24Regular = exports.CropInterim24Filled = exports.CropInterim20Regular = exports.CropInterim20Filled = exports.Crop48Regular = exports.Crop48Filled = exports.Crop32Regular = exports.Crop32Filled = exports.Crop28Regular = exports.Crop28Filled = exports.Crop24Regular = exports.Crop24Filled = exports.Crop20Regular = exports.Crop20Filled = exports.Crop16Regular = exports.Crop16Filled = exports.CreditCardToolbox24Regular = exports.CreditCardToolbox24Filled = exports.CreditCardToolbox20Regular = exports.CreditCardToolbox20Filled = exports.CreditCardPerson24Regular = exports.CreditCardPerson24Filled = exports.CreditCardPerson20Regular = exports.CreditCardPerson20Filled = exports.CreditCardClock32Regular = exports.CreditCardClock32Filled = exports.CreditCardClock28Regular = exports.CreditCardClock28Filled = exports.CreditCardClock24Regular = exports.CreditCardClock24Filled = exports.CreditCardClock20Regular = exports.CreditCardClock20Filled = exports.Couch48Regular = exports.Couch48Filled = exports.Couch32Regular = exports.Couch32Filled = exports.Couch24Regular = exports.Couch24Filled = exports.Couch20Regular = exports.Couch20Filled = exports.Couch12Regular = exports.Couch12Filled = exports.CopySelect20Regular = void 0;
exports.CurrencyDollarRupee24Filled = exports.CurrencyDollarRupee20Regular = exports.CurrencyDollarRupee20Filled = exports.CurrencyDollarRupee16Regular = exports.CurrencyDollarRupee16Filled = exports.CurrencyDollarEuro24Regular = exports.CurrencyDollarEuro24Filled = exports.CurrencyDollarEuro20Regular = exports.CurrencyDollarEuro20Filled = exports.CurrencyDollarEuro16Regular = exports.CurrencyDollarEuro16Filled = exports.CubeTree24Regular = exports.CubeTree24Filled = exports.CubeTree20Regular = exports.CubeTree20Filled = exports.CubeSync24Regular = exports.CubeSync24Filled = exports.CubeSync20Regular = exports.CubeSync20Filled = exports.CubeRotate20Regular = exports.CubeRotate20Filled = exports.CubeQuick28Regular = exports.CubeQuick28Filled = exports.CubeQuick24Regular = exports.CubeQuick24Filled = exports.CubeQuick20Regular = exports.CubeQuick20Filled = exports.CubeQuick16Regular = exports.CubeQuick16Filled = exports.CubeMultiple24Regular = exports.CubeMultiple24Filled = exports.CubeMultiple20Regular = exports.CubeMultiple20Filled = exports.CubeLink20Regular = exports.CubeLink20Filled = exports.CubeArrowCurveDown20Regular = exports.CubeArrowCurveDown20Filled = exports.CubeAdd20Regular = exports.CubeAdd20Filled = exports.Cube32Regular = exports.Cube32Filled = exports.Cube24Regular = exports.Cube24Filled = exports.Cube20Regular = exports.Cube20Filled = exports.Cube16Regular = exports.Cube16Filled = exports.Cube12Regular = exports.Cube12Filled = exports.Crown20Regular = void 0;
exports.DataBarVertical16Filled = exports.DataBarHorizontalDescending16Regular = exports.DataBarHorizontalDescending16Filled = exports.DataBarHorizontal24Regular = exports.DataBarHorizontal24Filled = exports.DataBarHorizontal20Regular = exports.DataBarHorizontal20Filled = exports.DataArea24Regular = exports.DataArea24Filled = exports.DataArea20Regular = exports.DataArea20Filled = exports.DarkTheme24Regular = exports.DarkTheme24Filled = exports.DarkTheme20Regular = exports.DarkTheme20Filled = exports.Cut24Regular = exports.Cut24Filled = exports.Cut20Regular = exports.Cut20Filled = exports.CursorHoverOff48Regular = exports.CursorHoverOff48Filled = exports.CursorHoverOff28Regular = exports.CursorHoverOff28Filled = exports.CursorHoverOff24Regular = exports.CursorHoverOff24Filled = exports.CursorHoverOff20Regular = exports.CursorHoverOff20Filled = exports.CursorHoverOff16Regular = exports.CursorHoverOff16Filled = exports.CursorHover48Regular = exports.CursorHover48Filled = exports.CursorHover32Regular = exports.CursorHover32Filled = exports.CursorHover28Regular = exports.CursorHover28Filled = exports.CursorHover24Regular = exports.CursorHover24Filled = exports.CursorHover20Regular = exports.CursorHover20Filled = exports.CursorHover16Regular = exports.CursorHover16Filled = exports.CursorClick24Regular = exports.CursorClick24Filled = exports.CursorClick20Regular = exports.CursorClick20Filled = exports.Cursor24Regular = exports.Cursor24Filled = exports.Cursor20Regular = exports.Cursor20Filled = exports.CurrencyDollarRupee24Regular = void 0;
exports.DataTrending16Filled = exports.DataTreemap24Regular = exports.DataTreemap24Filled = exports.DataTreemap20Regular = exports.DataTreemap20Filled = exports.DataSunburst24Regular = exports.DataSunburst24Filled = exports.DataSunburst20Regular = exports.DataSunburst20Filled = exports.DataScatter24Regular = exports.DataScatter24Filled = exports.DataScatter20Regular = exports.DataScatter20Filled = exports.DataPie24Regular = exports.DataPie24Filled = exports.DataPie20Regular = exports.DataPie20Filled = exports.DataLine24Regular = exports.DataLine24Filled = exports.DataLine20Regular = exports.DataLine20Filled = exports.DataHistogram24Regular = exports.DataHistogram24Filled = exports.DataHistogram20Regular = exports.DataHistogram20Filled = exports.DataFunnel24Regular = exports.DataFunnel24Filled = exports.DataFunnel20Regular = exports.DataFunnel20Filled = exports.DataBarVerticalStar32Regular = exports.DataBarVerticalStar32Filled = exports.DataBarVerticalStar24Regular = exports.DataBarVerticalStar24Filled = exports.DataBarVerticalStar20Regular = exports.DataBarVerticalStar20Filled = exports.DataBarVerticalStar16Regular = exports.DataBarVerticalStar16Filled = exports.DataBarVerticalAscending16Regular = exports.DataBarVerticalAscending16Filled = exports.DataBarVerticalAdd24Regular = exports.DataBarVerticalAdd24Filled = exports.DataBarVerticalAdd20Regular = exports.DataBarVerticalAdd20Filled = exports.DataBarVertical32Regular = exports.DataBarVertical32Filled = exports.DataBarVertical24Regular = exports.DataBarVertical24Filled = exports.DataBarVertical20Regular = exports.DataBarVertical20Filled = exports.DataBarVertical16Regular = void 0;
exports.DatabaseArrowUp20Filled = exports.DatabaseArrowRight32Regular = exports.DatabaseArrowRight32Filled = exports.DatabaseArrowRight24Regular = exports.DatabaseArrowRight24Filled = exports.DatabaseArrowRight20Regular = exports.DatabaseArrowRight20Filled = exports.DatabaseArrowDown20Regular = exports.DatabaseArrowDown20Filled = exports.Database32Regular = exports.Database32Filled = exports.Database24Regular = exports.Database24Filled = exports.Database20Regular = exports.Database20Filled = exports.Database16Regular = exports.Database16Filled = exports.DataWhisker24Regular = exports.DataWhisker24Filled = exports.DataWhisker20Regular = exports.DataWhisker20Filled = exports.DataWaterfall24Regular = exports.DataWaterfall24Filled = exports.DataWaterfall20Regular = exports.DataWaterfall20Filled = exports.DataUsageToolbox24Regular = exports.DataUsageToolbox24Filled = exports.DataUsageToolbox20Regular = exports.DataUsageToolbox20Filled = exports.DataUsageSettings20Regular = exports.DataUsageSettings20Filled = exports.DataUsageEdit24Regular = exports.DataUsageEdit24Filled = exports.DataUsageEdit20Regular = exports.DataUsageEdit20Filled = exports.DataUsage24Regular = exports.DataUsage24Filled = exports.DataUsage20Regular = exports.DataUsage20Filled = exports.DataTrending48Regular = exports.DataTrending48Filled = exports.DataTrending32Regular = exports.DataTrending32Filled = exports.DataTrending28Regular = exports.DataTrending28Filled = exports.DataTrending24Regular = exports.DataTrending24Filled = exports.DataTrending20Regular = exports.DataTrending20Filled = exports.DataTrending16Regular = void 0;

const tslib_1 = require("tslib");

const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));

const React = tslib_1.__importStar(require("react"));

const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));

const CommentArrowLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM10.5 6a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L15.29 6H10.5Zm6.5 6.28v-.3c.36-.23.7-.5 1-.79v1.09a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h3.42c-.2.32-.38.65-.52 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft20Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft20RegularIcon, 'CommentArrowLeft20Regular');

const CommentArrowLeft24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.02 3A6.5 6.5 0 0 0 22 11.2v3.55c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 0 1 6 21v-3h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77Zm5.48-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.22 2.59-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07L19.29 6h-5.38a.5.5 0 0 0-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 7h5.3l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.06-.07 2.54-2.54.04-.05.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 0 0-.56 0Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft24Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft24FilledIcon, 'CommentArrowLeft24Filled');

const CommentArrowLeft24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.02 3c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77Zm5.48-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.22 2.59-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07L19.29 6h-5.38a.5.5 0 0 0-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 7h5.3l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.06-.07 2.54-2.54.04-.05.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 0 0-.56 0Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft24Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft24RegularIcon, 'CommentArrowLeft24Regular');

const CommentArrowLeft28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16.5 7a.5.5 0 0 0 0 1h6.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3A.5.5 0 0 0 25 7.5a.5.5 0 0 0-.15-.35l-3-3a.5.5 0 0 0-.7.7L23.29 7H16.5Zm4 8c2.17 0 4.13-.92 5.5-2.4v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75a7.5 7.5 0 0 0 6 12Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft28Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft28FilledIcon, 'CommentArrowLeft28Filled');

const CommentArrowLeft28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16.5 7a.5.5 0 0 0 0 1h6.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3A.5.5 0 0 0 25 7.5a.5.5 0 0 0-.15-.35l-3-3a.5.5 0 0 0-.7.7L23.29 7H16.5Zm8 10.25v-3.4A7.54 7.54 0 0 0 26 12.6v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75c-.35.46-.64.96-.88 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft28Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft28RegularIcon, 'CommentArrowLeft28Regular');

const CommentArrowLeft48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.7-5.7a1 1 0 0 0 0 1.4l3.29 3.3H28a1 1 0 1 0 0 2h11.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4l-5-5a1 1 0 0 0-1.42 0ZM35 26c3.5 0 6.66-1.38 9-3.62v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8A13 13 0 0 0 35 26Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft48Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft48FilledIcon, 'CommentArrowLeft48Filled');

const CommentArrowLeft48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.7-5.7a1 1 0 0 0 0 1.4l3.29 3.3H28a1 1 0 1 0 0 2h11.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4l-5-5a1 1 0 0 0-1.42 0Zm5.2 21.45v-4.49c.9-.52 1.75-1.16 2.5-1.88v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8c-.5.78-.92 1.62-1.25 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 0 0 4.75-4.75Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft48Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft48RegularIcon, 'CommentArrowLeft48Regular');

const CommentArrowRight12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5.5a.5.5 0 0 0 0-1H7.7l.65-.65a.5.5 0 1 0-.7-.7l-1.5 1.5A.5.5 0 0 0 6 3.5a.5.5 0 0 0 .15.35l1.5 1.5a.5.5 0 1 0 .7-.7L7.71 4h2.79Zm-2 4c.92 0 1.77-.28 2.48-.75A2 2 0 0 1 9 9H6.65l-2.87 1.92A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 0 0 8.5 8Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight12Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight12FilledIcon, 'CommentArrowRight12Filled');

const CommentArrowRight12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5.5a.5.5 0 0 0 0-1H7.7l.65-.65a.5.5 0 1 0-.7-.7l-1.5 1.5A.5.5 0 0 0 6 3.5a.5.5 0 0 0 .15.35l1.5 1.5a.5.5 0 1 0 .7-.7L7.71 4h2.79ZM3 2h1.26c.12-.36.3-.7.5-1H3a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 .78.42L6.65 9H9a2 2 0 0 0 1.98-1.75c-.46.31-.99.54-1.55.65A1 1 0 0 1 9 8H6.5a.5.5 0 0 0-.28.08L4 9.57V8.5a.5.5 0 0 0-.5-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight12Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight12RegularIcon, 'CommentArrowRight12Regular');

const CommentArrowRight16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35A.5.5 0 0 0 8 5.5a.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L9.71 6h2.79a.5.5 0 0 0 0-1H9.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2ZM10.5 11A5.5 5.5 0 0 0 15 8.66v.84a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.76a5.5 5.5 0 0 0 4.24 9Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight16Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight16FilledIcon, 'CommentArrowRight16Filled');

const CommentArrowRight16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35A.5.5 0 0 0 8 5.5a.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L9.71 6h2.79a.5.5 0 0 0 0-1H9.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2ZM3.5 3h2.1c.18-.36.4-.7.66-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-.84c-.29.41-.63.78-1.02 1.1A1.5 1.5 0 0 1 12.5 11H8.31L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight16Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight16RegularIcon, 'CommentArrowRight16Regular');

const CommentArrowRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 6h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2ZM14.5 11c1.33 0 2.55-.47 3.5-1.26v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight20Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight20FilledIcon, 'CommentArrowRight20Filled');

const CommentArrowRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 6h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2ZM17 12.28V10.4c.36-.18.7-.4 1-.66v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5c-.16.32-.3.65-.4 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight20Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight20RegularIcon, 'CommentArrowRight20Regular');

const CommentArrowRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.02 3A6.5 6.5 0 0 0 22 11.2v3.55c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 0 1 6 21v-3h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77Zm5.48-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-1.28 2.59-.07.06-2.53 2.53-.03.04-.04.07-.03.08-.02.08v.14l.02.06.03.06.03.06.04.05 2.53 2.53a.5.5 0 0 0 .76-.63l-.06-.07L15.21 7h5.29a.5.5 0 0 0 .5-.41V6.5a.5.5 0 0 0-.41-.5H15.2l1.65-1.65a.5.5 0 0 0 .06-.63l-.06-.07a.5.5 0 0 0-.63-.06Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight24Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight24FilledIcon, 'CommentArrowRight24Filled');

const CommentArrowRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.02 3c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77Zm5.48-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-1.28 2.59-.07.06-2.53 2.53-.03.04-.04.07-.03.08-.02.08v.14l.02.06.03.06.03.06.04.05 2.53 2.53a.5.5 0 0 0 .76-.63l-.06-.07L15.21 7h5.29a.5.5 0 0 0 .5-.41V6.5a.5.5 0 0 0-.41-.5H15.2l1.65-1.65a.5.5 0 0 0 .06-.63l-.06-.07a.5.5 0 0 0-.63-.06Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight24Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight24RegularIcon, 'CommentArrowRight24Regular');

const CommentArrowRight28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.5.5a.5.5 0 0 0 0-1h-4.8l1.65-1.65a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L19.71 7h4.79Zm-3 6c1.75 0 3.33-.69 4.5-1.81v6.06A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h10.27a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight28Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight28FilledIcon, 'CommentArrowRight28Filled');

const CommentArrowRight28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.5.5a.5.5 0 0 0 0-1h-4.8l1.65-1.65a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L19.71 7h4.79Zm0 10.25v-4.98a6.52 6.52 0 0 0 1.5-1.08v6.06A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h10.27c-.3.46-.53.97-.7 1.5H5.74c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight28Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight28RegularIcon, 'CommentArrowRight28Regular');

const CommentArrowRight48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM33.7 7.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L30.42 14H42a1 1 0 1 0 0-2H30.41l3.3-3.3a1 1 0 0 0 0-1.4ZM35 26c3.5 0 6.66-1.38 9-3.62v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8A13 13 0 0 0 35 26Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight48Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight48FilledIcon, 'CommentArrowRight48Filled');

const CommentArrowRight48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM33.7 7.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L30.42 14H42a1 1 0 1 0 0-2H30.41l3.3-3.3a1 1 0 0 0 0-1.4Zm7.8 21.45v-4.49c.9-.52 1.75-1.16 2.5-1.88v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8c-.5.78-.92 1.62-1.25 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 0 0 4.75-4.75Z",
    fill: primaryFill
  }));
};

exports.CommentArrowRight48Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowRight48RegularIcon, 'CommentArrowRight48Regular');

const CommentCheckmark12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.65-1.35a.5.5 0 0 0-.7 0L8 3.79l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2a.5.5 0 0 0 0-.7ZM8.5 8c.92 0 1.77-.28 2.48-.75A2 2 0 0 1 9 9H6.65l-2.87 1.92A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 0 0 8.5 8Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark12Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark12FilledIcon, 'CommentCheckmark12Filled');

const CommentCheckmark12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Zm-1.65-1.35c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM3 2h1.26c.12-.36.3-.7.5-1H3a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 .78.42L6.65 9H9a2 2 0 0 0 1.98-1.75c-.46.31-.99.54-1.55.65A1 1 0 0 1 9 8H6.5a.5.5 0 0 0-.28.08L4 9.57V8.5a.5.5 0 0 0-.5-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark12Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark12RegularIcon, 'CommentCheckmark12Regular');

const CommentCheckmark16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0ZM10.5 11A5.5 5.5 0 0 0 15 8.66v.84a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.76a5.5 5.5 0 0 0 4.24 9Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark16Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark16FilledIcon, 'CommentCheckmark16Filled');

const CommentCheckmark16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L9.5 6.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7ZM3.5 3h2.1c.18-.36.4-.7.66-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-.84c-.29.41-.63.78-1.02 1.1A1.5 1.5 0 0 1 12.5 11H8.31L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark16Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark16RegularIcon, 'CommentCheckmark16Regular');

const CommentCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L13.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7ZM14.5 11c1.33 0 2.55-.47 3.5-1.26v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark20FilledIcon, 'CommentCheckmark20Filled');

const CommentCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85L13.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Zm.85 8.63V10.4c.36-.18.7-.4 1-.66v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5c-.16.32-.3.65-.4 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark20RegularIcon, 'CommentCheckmark20Regular');

const CommentCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0L16.5 7.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7ZM17.5 13c1.75 0 3.33-.69 4.5-1.81v3.56c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark24FilledIcon, 'CommentCheckmark24Filled');

const CommentCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.85-2.35L16.5 7.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7Zm.35 10.6v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark24RegularIcon, 'CommentCheckmark24Regular');

const CommentCheckmark28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L19 9.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7ZM20.5 15c2.17 0 4.13-.92 5.5-2.4v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75a7.5 7.5 0 0 0 6 12Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark28Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark28FilledIcon, 'CommentCheckmark28Filled');

const CommentCheckmark28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L19 9.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Zm.15 12.6v-3.4A7.54 7.54 0 0 0 26 12.6v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75c-.35.46-.64.96-.88 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark28Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark28RegularIcon, 'CommentCheckmark28Regular');

const CommentCheckmark48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.3-4.7a1 1 0 0 0-1.4 0L33 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.42ZM35 26c3.5 0 6.66-1.38 9-3.62v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8A13 13 0 0 0 35 26Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark48Filled = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark48FilledIcon, 'CommentCheckmark48Filled');

const CommentCheckmark48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M46 13a11 11 0 1 0-22 0 11 11 0 0 0 22 0Zm-4.3-4.7a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Zm-.2 20.45v-4.49c.9-.52 1.75-1.16 2.5-1.88v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8c-.5.78-.92 1.62-1.25 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 0 0 4.75-4.75Z",
    fill: primaryFill
  }));
};

exports.CommentCheckmark48Regular = wrapIcon_1.default( /*#__PURE__*/CommentCheckmark48RegularIcon, 'CommentCheckmark48Regular');

const CommentDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM14.5 11c1.33 0 2.55-.47 3.5-1.26v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
};

exports.CommentDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/CommentDismiss20FilledIcon, 'CommentDismiss20Filled');

const CommentDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5Zm1.8 6.78V10.4c.36-.18.7-.4 1-.66v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5c-.16.32-.3.65-.4 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z",
    fill: primaryFill
  }));
};

exports.CommentDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/CommentDismiss20RegularIcon, 'CommentDismiss20Regular');

const CommentDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7L18.21 6.5l1.64-1.65a.5.5 0 0 0-.7-.7L17.5 5.79l-1.65-1.64ZM17.5 13c1.75 0 3.33-.69 4.5-1.81v3.56c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/CommentDismiss24FilledIcon, 'CommentDismiss24Filled');

const CommentDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7L18.21 6.5l1.64-1.65a.5.5 0 0 0-.7-.7L17.5 5.79l-1.65-1.64Zm4.65 10.6v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.CommentDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/CommentDismiss24RegularIcon, 'CommentDismiss24Regular');

const CommentEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.4 17.6a1 1 0 0 0 1.4.2L8 16.9l.05-.25.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83A2.87 2.87 0 0 1 18 8.7V5.57A2.58 2.58 0 0 0 15.4 3H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6Zm9.4-8.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.CommentEdit20Filled = wrapIcon_1.default( /*#__PURE__*/CommentEdit20FilledIcon, 'CommentEdit20Filled');

const CommentEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 8.13V5.57C17 4.7 16.3 4 15.4 4H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l2.17-1.6-.31 1.25-.05.26-1.21.9a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.6v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h10.8C16.84 3 18 4.15 18 5.57v3.12c-.3-.26-.64-.44-1-.56Zm-2.2 1.42-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.CommentEdit20Regular = wrapIcon_1.default( /*#__PURE__*/CommentEdit20RegularIcon, 'CommentEdit20Regular');

const CommentEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.25C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25v4.67a3.29 3.29 0 0 0-4.6.04l-5.91 5.9c-.47.48-.8 1.07-.97 1.72l-.4 1.58L8 21.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5Zm16.1 5.42-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.CommentEdit24Filled = wrapIcon_1.default( /*#__PURE__*/CommentEdit24FilledIcon, 'CommentEdit24Filled');

const CommentEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 14.75C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 0 0 2 1l2.12-1.59.4-1.58c.07-.29.18-.56.31-.82l-3.33 2.5V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v3.84c.55.14 1.07.42 1.5.83V6.25C22 4.45 20.54 3 18.75 3H5.25A3.25 3.25 0 0 0 2 6.25v8.5Zm16.1-3.08-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 1 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.CommentEdit24Regular = wrapIcon_1.default( /*#__PURE__*/CommentEdit24RegularIcon, 'CommentEdit24Regular');

const CommentError16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 8.66A5.5 5.5 0 1 1 6.26 2H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-.84ZM10.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.24 0Z",
    fill: primaryFill
  }));
};

exports.CommentError16Filled = wrapIcon_1.default( /*#__PURE__*/CommentError16FilledIcon, 'CommentError16Filled');

const CommentError16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.6 3H3.5C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H5v2.9L8.31 11h4.19a1.5 1.5 0 0 0 1.48-1.24c.39-.32.73-.69 1.02-1.1v.84a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.76c-.26.3-.48.64-.66 1Zm4.9 7a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.24 0Z",
    fill: primaryFill
  }));
};

exports.CommentError16Regular = wrapIcon_1.default( /*#__PURE__*/CommentError16RegularIcon, 'CommentError16Regular');

const CommentError20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25ZM18 9.73A5.5 5.5 0 0 1 9.6 3h-5A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56V9.74Z",
    fill: primaryFill
  }));
};

exports.CommentError20Filled = wrapIcon_1.default( /*#__PURE__*/CommentError20FilledIcon, 'CommentError20Filled');

const CommentError20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25ZM17 10.4v1.88c0 .85-.7 1.56-1.6 1.56h-4.92L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57C3 4.7 3.7 4 4.6 4h4.6c.1-.35.24-.68.4-1h-5A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56V9.74c-.3.26-.64.48-1 .66Z",
    fill: primaryFill
  }));
};

exports.CommentError20Regular = wrapIcon_1.default( /*#__PURE__*/CommentError20RegularIcon, 'CommentError20Regular');

const CommentError24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Zm0 2.87c1.75 0 3.33-.69 4.5-1.81v3.56c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentError24Filled = wrapIcon_1.default( /*#__PURE__*/CommentError24FilledIcon, 'CommentError24Filled');

const CommentError24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Zm3 4.62v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.CommentError24Regular = wrapIcon_1.default( /*#__PURE__*/CommentError24RegularIcon, 'CommentError24Regular');

const CommentLightning20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.61 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Zm-.64 1h-.47a1.5 1.5 0 0 1-1.38-2.08L11.33 3H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56V7l-3.83 3.58c-1.1 1.02-2.84-.01-2.48-1.46L11.97 8Z",
    fill: primaryFill
  }));
};

exports.CommentLightning20Filled = wrapIcon_1.default( /*#__PURE__*/CommentLightning20FilledIcon, 'CommentLightning20Filled');

const CommentLightning20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.61 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Zm-1.28-4-.41 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56V7.94L18 7v5.28a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h6.73Z",
    fill: primaryFill
  }));
};

exports.CommentLightning20Regular = wrapIcon_1.default( /*#__PURE__*/CommentLightning20RegularIcon, 'CommentLightning20Regular');

const CommentLightning24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.32 1h4.83a.5.5 0 0 1 .43.75L19.75 5h1.5c.64 0 .99.76.56 1.24L17 11.75c-.5.58-1.45.09-1.26-.66L16.5 8h-3a.5.5 0 0 1-.45-.71l2.82-6a.5.5 0 0 1 .45-.29ZM5.25 3h8.7l-1.81 3.86A1.5 1.5 0 0 0 13.5 9h1.72l-.46 1.85c-.44 1.76 1.78 2.93 2.98 1.56L22 7.55v7.2c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3Z",
    fill: primaryFill
  }));
};

exports.CommentLightning24Filled = wrapIcon_1.default( /*#__PURE__*/CommentLightning24FilledIcon, 'CommentLightning24Filled');

const CommentLightning24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.32 1h4.82a.5.5 0 0 1 .44.75L19.75 5h1.5c.64 0 .98.76.56 1.24l-4.82 5.51c-.5.58-1.45.09-1.26-.66L16.5 8h-3a.5.5 0 0 1-.46-.71l2.82-6a.5.5 0 0 1 .46-.29ZM5.25 3h8.7l-.7 1.5h-8c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-5.5l1.5-1.7v7.2c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3Z",
    fill: primaryFill
  }));
};

exports.CommentLightning24Regular = wrapIcon_1.default( /*#__PURE__*/CommentLightning24RegularIcon, 'CommentLightning24Regular');

const CommentMention16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 2a2.5 2.5 0 1 0 .83 4.85.5.5 0 1 1 .34.94A3.5 3.5 0 1 1 15 4.5a1.5 1.5 0 0 1-2.5 1.13 1.5 1.5 0 1 1-.35-2.47.5.5 0 0 1 .85.35v1a.5.5 0 0 0 1 0A2.5 2.5 0 0 0 11.5 2ZM11 4.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM3.5 2h4.26A4.5 4.5 0 0 0 15 7.33V9.5a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2Z",
    fill: primaryFill
  }));
};

exports.CommentMention16Filled = wrapIcon_1.default( /*#__PURE__*/CommentMention16FilledIcon, 'CommentMention16Filled');

const CommentMention16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 2a2.5 2.5 0 1 0 .83 4.85.5.5 0 1 1 .34.94A3.5 3.5 0 1 1 15 4.5a1.5 1.5 0 0 1-2.5 1.13 1.5 1.5 0 1 1-.35-2.47.5.5 0 0 1 .85.35v1a.5.5 0 0 0 1 0A2.5 2.5 0 0 0 11.5 2ZM11 4.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm4 5V7.33c-.29.35-.62.66-1 .91V9.5c0 .83-.67 1.5-1.5 1.5H8.31L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3h3.76c.12-.36.3-.7.5-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5Z",
    fill: primaryFill
  }));
};

exports.CommentMention16Regular = wrapIcon_1.default( /*#__PURE__*/CommentMention16RegularIcon, 'CommentMention16Regular');

const CommentMention20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 2a3 3 0 1 0 1.28 5.71.5.5 0 0 1 .44.9A4 4 0 1 1 19 5v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 5a2 2 0 0 1 3.04-1.7.5.5 0 0 1 .96.2v2a.5.5 0 1 0 1 0V5a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 5c1.13 0 2.16-.37 3-1v3.28a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5.82A4.98 4.98 0 0 0 15 10Z",
    fill: primaryFill
  }));
};

exports.CommentMention20Filled = wrapIcon_1.default( /*#__PURE__*/CommentMention20FilledIcon, 'CommentMention20Filled');

const CommentMention20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 2a3 3 0 1 0 1.28 5.71.5.5 0 0 1 .44.9A4 4 0 1 1 19 5v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 5a2 2 0 0 1 3.04-1.7.5.5 0 0 1 .96.2v2a.5.5 0 1 0 1 0V5a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4 7.28V9a5 5 0 0 1-1 .58v2.7c0 .85-.7 1.56-1.6 1.56h-4.92L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57C3 4.7 3.7 4 4.6 4h5.5c.07-.35.18-.68.32-1H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56Z",
    fill: primaryFill
  }));
};

exports.CommentMention20Regular = wrapIcon_1.default( /*#__PURE__*/CommentMention20RegularIcon, 'CommentMention20Regular');

const CommentMention24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 6a4 4 0 0 1 8-.01v.76a.75.75 0 0 1-1.5 0V4a.5.5 0 0 0-1 0 2.5 2.5 0 1 0 .3 3.73 1.75 1.75 0 0 0 3.2-.98V6a5 5 0 1 0-2.22 4.17.5.5 0 0 0-.56-.84A4 4 0 0 1 14 6Zm4 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5.25 3h7.55a6 6 0 0 0 9.2 7.47v4.28c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3Z",
    fill: primaryFill
  }));
};

exports.CommentMention24Filled = wrapIcon_1.default( /*#__PURE__*/CommentMention24FilledIcon, 'CommentMention24Filled');

const CommentMention24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 2a4 4 0 1 0 2.22 7.34.5.5 0 0 1 .56.83A5 5 0 1 1 23 6v.75a1.75 1.75 0 0 1-3.2.98A2.5 2.5 0 0 1 15.5 6a2.5 2.5 0 0 1 4-2 .5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0V6A4 4 0 0 0 18 2Zm-1.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm5.5 8.75v-4.28a6 6 0 0 1-1.5.99v3.29c0 .97-.78 1.75-1.75 1.75h-6.24L7.5 20.25V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.97.78-1.75 1.75-1.75h6.94c.14-.53.34-1.04.61-1.5H5.25A3.25 3.25 0 0 0 2 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 0 0 2 1L13 18h5.74c1.8 0 3.25-1.45 3.25-3.25Z",
    fill: primaryFill
  }));
};

exports.CommentMention24Regular = wrapIcon_1.default( /*#__PURE__*/CommentMention24RegularIcon, 'CommentMention24Regular');

const CommentMultiple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2c.46-.6 1.18-1 2-1H12a3 3 0 0 1 3 3v4.5c0 .82-.4 1.54-1 2V4a2 2 0 0 0-2-2H3.5ZM13 5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2v1.03a1 1 0 0 0 1.58.81L7.16 13H11a2 2 0 0 0 2-2V5Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple16Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultiple16FilledIcon, 'CommentMultiple16Filled');

const CommentMultiple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2c.46-.6 1.18-1 2-1H12a3 3 0 0 1 3 3v4.5c0 .82-.4 1.54-1 2V4a2 2 0 0 0-2-2H3.5ZM13 5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2v1.03a1 1 0 0 0 1.58.81L7.16 13H11a2 2 0 0 0 2-2V5Zm-1 6a1 1 0 0 1-1 1H6.84L4 14.03V12H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple16Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultiple16RegularIcon, 'CommentMultiple16Regular');

const CommentMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0 1 16 7.5v5.45a2.5 2.5 0 0 0 2-2.45V6a4 4 0 0 0-4-4H6.5Zm-2 3A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v1.03a1 1 0 0 0 1.58.81L9.16 16h3.34a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 12.5 5h-8Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultiple20FilledIcon, 'CommentMultiple20Filled');

const CommentMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.04A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.03a1 1 0 0 0 1.58.81L9.16 16h4.34a2.5 2.5 0 0 0 2.5-2.5v-.55a2.5 2.5 0 0 0 2-2.45v-5A3.5 3.5 0 0 0 14.5 2h-8Zm7 13H8.84L6 17.03V15H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h9c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5Zm0-11H5.09c.2-.58.76-1 1.41-1h8A2.5 2.5 0 0 1 17 5.5v5c0 .65-.42 1.2-1 1.41V6.5A2.5 2.5 0 0 0 13.5 4Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultiple20RegularIcon, 'CommentMultiple20Regular');

const CommentMultiple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 2a3.25 3.25 0 0 0-3.24 3h9.74C17.1 5 19 6.9 19 9.25v6.74c1.67-.12 3-1.53 3-3.24v-6A4.75 4.75 0 0 0 17.25 2h-9Zm9.74 14a3.25 3.25 0 0 1-3.24 3h-4.08L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-6.5A3.25 3.25 0 0 1 5.25 6h9.5C16.55 6 18 7.46 18 9.25V16Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple24Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultiple24FilledIcon, 'CommentMultiple24Filled');

const CommentMultiple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 5c.13-1.67 1.54-3 3.25-3h9A4.75 4.75 0 0 1 22 6.75v6a3.25 3.25 0 0 1-3 3.24A3.25 3.25 0 0 1 15.74 19h-5.08L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3-3.24Zm1.52 0h9.23C17.55 5 19 6.46 19 8.25v6.23c.85-.12 1.5-.85 1.5-1.73v-6c0-1.8-1.46-3.25-3.25-3.25h-9c-.88 0-1.61.65-1.73 1.5ZM5.25 17.5H6.5v2.75l3.67-2.75h5.58c.97 0 1.75-.78 1.75-1.75v-7.5c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple24Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultiple24RegularIcon, 'CommentMultiple24Regular');

const CommentMultiple28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.75 2.01a3.75 3.75 0 0 0-3.67 3h12.17A4.75 4.75 0 0 1 23 9.76v8.67c1.71-.35 3-1.87 3-3.68V7.76a5.75 5.75 0 0 0-5.75-5.75H9.75ZM22 9.76a3.75 3.75 0 0 0-3.75-3.75H5.75A3.75 3.75 0 0 0 2 9.76v8.99a3.75 3.75 0 0 0 3.75 3.75H6v2.24a1.25 1.25 0 0 0 2 1l4.25-3.24h6A3.75 3.75 0 0 0 22 18.75V9.76Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple28Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultiple28FilledIcon, 'CommentMultiple28Filled');

const CommentMultiple28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 6.01v-.25a3.75 3.75 0 0 1 3.75-3.75h10.5A5.75 5.75 0 0 1 26 7.76v6.99a3.75 3.75 0 0 1-3.75 3.75H22v.25a3.75 3.75 0 0 1-3.75 3.75h-6l-4.24 3.23c-.83.63-2.01.05-2.01-.99V22.5h-.25A3.75 3.75 0 0 1 2 18.75V9.76a3.75 3.75 0 0 1 3.75-3.75H6Zm1.5-.25v.25h10.75A3.75 3.75 0 0 1 22 9.76V17h.25c1.24 0 2.25-1 2.25-2.25V7.76c0-2.35-1.9-4.25-4.25-4.25H9.75c-1.24 0-2.25 1-2.25 2.25Zm-4 4v8.99c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75v2.49l4.05-3.09c.13-.1.29-.15.45-.15h6.25c1.24 0 2.25-1 2.25-2.25V9.76c0-1.24-1-2.25-2.25-2.25H5.75c-1.24 0-2.25 1-2.25 2.25Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple28Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultiple28RegularIcon, 'CommentMultiple28Regular');

const CommentMultiple32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 3a4 4 0 0 0-3.73 2.54c.24-.03.48-.04.73-.04h13a6 6 0 0 1 6 6v9.2A4 4 0 0 0 29 17V9.5A6.5 6.5 0 0 0 22.5 3h-12ZM3 11.5A4.5 4.5 0 0 1 7.5 7h13a4.5 4.5 0 0 1 4.5 4.5v10a4.5 4.5 0 0 1-4.5 4.5h-5.64l-4.4 3.65A1.5 1.5 0 0 1 8 28.5V26H7a4 4 0 0 1-4-4V11.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple32Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultiple32FilledIcon, 'CommentMultiple32Filled');

const CommentMultiple32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 7.11V7a4 4 0 0 1 4-4h12A6.5 6.5 0 0 1 29 9.5V17a4 4 0 0 1-4 4v.5a4.5 4.5 0 0 1-4.5 4.5h-5.64l-4.4 3.65A1.5 1.5 0 0 1 8 28.5V26H7a4 4 0 0 1-4-4V11.5a4.5 4.5 0 0 1 3.5-4.39Zm2-.11h12a4.5 4.5 0 0 1 4.5 4.5V19a2 2 0 0 0 2-2V9.5A4.5 4.5 0 0 0 22.5 5h-12a2 2 0 0 0-2 2Zm-1 2A2.5 2.5 0 0 0 5 11.5V22c0 1.1.9 2 2 2h2a1 1 0 0 1 1 1v2.43l3.86-3.2a1 1 0 0 1 .64-.23h6a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 20.5 9h-13Z",
    fill: primaryFill
  }));
};

exports.CommentMultiple32Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultiple32RegularIcon, 'CommentMultiple32Regular');

const CommentMultipleCheckmark16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 1a2.5 2.5 0 0 0-2.45 2H10a3 3 0 0 1 2.97 2.59c.81.4 1.51 1 2.03 1.75V4a3 3 0 0 0-3-3H5.5ZM10 4a2 2 0 0 1 1.81 1.16 5.51 5.51 0 0 0-5.73 8.61l-1.5 1.07A1 1 0 0 1 3 14.03V13a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7Zm5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark16Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark16FilledIcon, 'CommentMultipleCheckmark16Filled');

const CommentMultipleCheckmark16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.05 3A2.5 2.5 0 0 1 5.5 1H12a3 3 0 0 1 3 3v3.34c-.28-.4-.62-.77-1-1.08V4a2 2 0 0 0-2-2H5.5c-.65 0-1.2.42-1.41 1H11a2 2 0 0 1 2 2v.6c-.32-.16-.65-.3-1-.4V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2.03l1.56-1.11c.15.3.32.58.52.85l-1.5 1.07A1 1 0 0 1 3 14.03V13a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h.05ZM15 10.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark16Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark16RegularIcon, 'CommentMultipleCheckmark16Regular');

const CommentMultipleCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0 1 16 7.5v1.7c.74.22 1.42.58 2 1.06V6a4 4 0 0 0-4-4H6.5ZM15 7.5v1.52A5.5 5.5 0 0 0 9.2 16h-.04l-2.58 1.84A1 1 0 0 1 5 17.03V16h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5Zm4 7a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark20FilledIcon, 'CommentMultipleCheckmark20Filled');

const CommentMultipleCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.04A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.03a1 1 0 0 0 1.58.81L9.16 16h.05c-.1-.32-.16-.66-.19-1h-.18L6 17.03V15H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h9c.83 0 1.5.67 1.5 1.5v2.52c.34.03.68.1 1 .19V6.5A2.5 2.5 0 0 0 13.5 4H5.09c.2-.58.76-1 1.41-1h8A2.5 2.5 0 0 1 17 5.5v4.1c.36.18.7.4 1 .66V5.5A3.5 3.5 0 0 0 14.5 2h-8ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark20RegularIcon, 'CommentMultipleCheckmark20Regular');

const CommentMultipleCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 2a3.25 3.25 0 0 0-3.24 3h9.74C17.1 5 19 6.9 19 9.25v1.92c1.15.27 2.18.85 3 1.64V6.75A4.75 4.75 0 0 0 17.25 2h-9ZM18 9.25v1.77A6.5 6.5 0 0 0 11.17 19h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-6.5A3.25 3.25 0 0 1 5.25 6h9.5C16.55 6 18 7.46 18 9.25Zm5 8.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-2.15-2.35c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 3.65-3.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark24FilledIcon, 'CommentMultipleCheckmark24Filled');

const CommentMultipleCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 5c.13-1.67 1.54-3 3.25-3h9A4.75 4.75 0 0 1 22 6.75v6.06a6.52 6.52 0 0 0-1.5-1.08V6.75c0-1.8-1.46-3.25-3.25-3.25h-9c-.88 0-1.61.65-1.73 1.5h9.23C17.55 5 19 6.46 19 8.25v2.92a6.52 6.52 0 0 0-1.5-.17V8.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75H6.5v2.75l3.67-2.75H11c0 .52.06 1.02.17 1.5h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3-3.24Zm18 12.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-2.15-2.35c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 3.65-3.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark24RegularIcon, 'CommentMultipleCheckmark24Regular');

const CommentMultipleCheckmark28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 20.5c0 .7.1 1.36.27 2h-1.02l-4.24 3.23c-.83.63-2.01.04-2.01-.99V22.5h-.25A3.75 3.75 0 0 1 2 18.75V9.76a3.75 3.75 0 0 1 3.75-3.75h12.5A3.75 3.75 0 0 1 22 9.76v3.39a7.5 7.5 0 0 0-9 7.35ZM25.25 7.76v6.94A7.49 7.49 0 0 0 23 13.43V9.76a4.75 4.75 0 0 0-4.75-4.75H6.85a3 3 0 0 1 2.9-2.25h10.5a5 5 0 0 1 5 5ZM27 20.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-2.65-2.85c.2.2.2.5 0 .7l-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L19 22.29l4.65-4.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark28Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark28FilledIcon, 'CommentMultipleCheckmark28Filled');

const CommentMultipleCheckmark28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 5.76c0-1.24 1-2.25 2.25-2.25h10.5c2.35 0 4.25 1.9 4.25 4.25v6.4c.53.33 1.02.73 1.45 1.19.03-.2.05-.4.05-.6V7.76a5.75 5.75 0 0 0-5.75-5.75H9.75A3.75 3.75 0 0 0 6 5.76v.25h-.25A3.75 3.75 0 0 0 2 9.76v8.99a3.75 3.75 0 0 0 3.75 3.75H6v2.24a1.25 1.25 0 0 0 2 1l4.25-3.24h1.02a7.48 7.48 0 0 1-.25-1.5H12a.75.75 0 0 0-.45.15L7.5 24.24v-2.49a.75.75 0 0 0-.75-.75h-1c-1.24 0-2.25-1-2.25-2.25V9.76c0-1.24 1-2.25 2.25-2.25h12.5c1.24 0 2.25 1 2.25 2.25V13c.51 0 1.02.05 1.5.15V9.76a3.75 3.75 0 0 0-3.75-3.75H7.5v-.25ZM27 20.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-2.65-2.85c.2.2.2.5 0 .7l-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L19 22.29l4.65-4.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleCheckmark28Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleCheckmark28RegularIcon, 'CommentMultipleCheckmark28Regular');

const CommentMultipleLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 1a2.5 2.5 0 0 0-2.45 2H10a3 3 0 0 1 3 3v3.04c.62.08 1.2.34 1.67.71.2-.37.33-.8.33-1.25V4a3 3 0 0 0-3-3H5.5ZM12 6v3H8.5a3.5 3.5 0 0 0-3.05 5.22l-.87.62A1 1 0 0 1 3 14.03V13a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2Zm-3.5 4a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink16Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink16FilledIcon, 'CommentMultipleLink16Filled');

const CommentMultipleLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.05 3A2.5 2.5 0 0 1 5.5 1H12a3 3 0 0 1 3 3v4.5c0 .46-.12.88-.33 1.25a3.5 3.5 0 0 0-.87-.5c.13-.22.2-.48.2-.75V4a2 2 0 0 0-2-2H5.5c-.65 0-1.2.42-1.41 1H11a2 2 0 0 1 2 2v4.04a3.53 3.53 0 0 0-.5-.04H12V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2.03l1.08-.77c.08.34.2.66.37.96l-.87.62A1 1 0 0 1 3 14.03V13a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h.05Zm5.45 7a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink16Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink16RegularIcon, 'CommentMultipleLink16Regular');

const CommentMultipleLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0 1 16 7.5V11h.5c.49 0 .95.1 1.38.28.08-.24.12-.5.12-.78V6a4 4 0 0 0-4-4H6.5ZM15 7.5V11h-2.5a3.5 3.5 0 0 0-3.16 5h-.18l-2.58 1.84A1 1 0 0 1 5 17.03V16h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink20Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink20FilledIcon, 'CommentMultipleLink20Filled');

const CommentMultipleLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a2.5 2.5 0 0 0-2.46 2.04A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.03a1 1 0 0 0 1.58.81L9.16 16h.18a3.48 3.48 0 0 1-.3-1h-.2L6 17.03V15H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h9c.83 0 1.5.67 1.5 1.5V11h1V6.5A2.5 2.5 0 0 0 13.5 4H5.09c.2-.58.76-1 1.41-1h8A2.5 2.5 0 0 1 17 5.5v5c0 .18-.03.36-.1.52.35.04.67.13.98.26.08-.24.12-.5.12-.78v-5A3.5 3.5 0 0 0 14.5 2h-8Zm6 10a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink20Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink20RegularIcon, 'CommentMultipleLink20Regular');

const CommentMultipleLink24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 2a3.25 3.25 0 0 0-3.24 3h9.74C17.1 5 19 6.9 19 9.25V13h.25c.95 0 1.84.28 2.59.77.1-.32.16-.67.16-1.02v-6A4.75 4.75 0 0 0 17.25 2h-9ZM18 9.25V13h-2.25a4.75 4.75 0 0 0-4.58 6h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-6.5A3.25 3.25 0 0 1 5.25 6h9.5C16.55 6 18 7.46 18 9.25Zm5 8.5A3.75 3.75 0 0 0 19.25 14h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5v-.01h.2A3.75 3.75 0 0 0 23 17.74Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink24Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink24FilledIcon, 'CommentMultipleLink24Filled');

const CommentMultipleLink24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 5c.13-1.67 1.54-3 3.25-3h9A4.75 4.75 0 0 1 22 6.75v6c0 .35-.06.7-.16 1.02a4.73 4.73 0 0 0-1.39-.62c.03-.13.05-.26.05-.4v-6c0-1.8-1.46-3.25-3.25-3.25h-9c-.88 0-1.61.65-1.73 1.5h9.23C17.55 5 19 6.46 19 8.25V13h-1.5V8.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75H6.5v2.75l3.67-2.75H11a4.82 4.82 0 0 0 .16 1.5h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3-3.24Zm18 12.75A3.75 3.75 0 0 0 19.25 14h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5v-.01h.2A3.75 3.75 0 0 0 23 17.74Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink24Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink24RegularIcon, 'CommentMultipleLink24Regular');

const CommentMultipleLink28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.75 2.01a3.75 3.75 0 0 0-3.67 3h12.17A4.75 4.75 0 0 1 23 9.76V16h.25c.82 0 1.6.21 2.27.58.3-.54.48-1.17.48-1.83V7.76a5.75 5.75 0 0 0-5.75-5.75H9.75ZM22 9.76V16h-4.25a4.75 4.75 0 0 0-4.42 6.5h-1.08l-4.24 3.23c-.83.63-2.01.04-2.01-.99V22.5h-.25A3.75 3.75 0 0 1 2 18.75V9.76a3.75 3.75 0 0 1 3.75-3.75h12.5A3.75 3.75 0 0 1 22 9.76Zm-4.25 8.74a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 20.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM23.25 23a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink28Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink28FilledIcon, 'CommentMultipleLink28Filled');

const CommentMultipleLink28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 6.01v-.25a3.75 3.75 0 0 1 3.75-3.75h10.5A5.75 5.75 0 0 1 26 7.76v6.99c0 .66-.17 1.29-.48 1.83a4.72 4.72 0 0 0-1.45-.5c.27-.38.43-.84.43-1.33V7.76c0-2.35-1.9-4.25-4.25-4.25H9.75c-1.24 0-2.25 1-2.25 2.25v.25h10.75A3.75 3.75 0 0 1 22 9.76V16h-1.5V9.76c0-1.24-1-2.25-2.25-2.25H5.75c-1.24 0-2.25 1-2.25 2.25v8.99c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75v2.49l4.05-3.09c.13-.1.29-.15.45-.15h1c.03.53.15 1.03.33 1.5h-1.08l-4.24 3.23c-.83.63-2.01.05-2.01-.99V22.5h-.25A3.75 3.75 0 0 1 2 18.75V9.76a3.75 3.75 0 0 1 3.75-3.75H6ZM17.75 18.5a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 20.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM23.25 23a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink28Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink28RegularIcon, 'CommentMultipleLink28Regular');

const CommentMultipleLink32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 3a4 4 0 0 0-3.73 2.54c.24-.03.48-.04.73-.04h13a6 6 0 0 1 6 6v6.52c.77.06 1.5.27 2.16.6.22-.5.34-1.04.34-1.62V9.5A6.5 6.5 0 0 0 22.5 3h-12ZM25 11.5V18h-5a6 6 0 0 0-5.53 8.33l-4.01 3.32A1.5 1.5 0 0 1 8 28.5V26H7a4 4 0 0 1-4-4V11.5A4.5 4.5 0 0 1 7.5 7h13a4.5 4.5 0 0 1 4.5 4.5Zm-3.5 9a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1Zm4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9h-.5Zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink32Filled = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink32FilledIcon, 'CommentMultipleLink32Filled');

const CommentMultipleLink32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 7.11V7a4 4 0 0 1 4-4h12A6.5 6.5 0 0 1 29 9.5V17c0 .58-.12 1.12-.34 1.62-.6-.3-1.26-.5-1.95-.58A2 2 0 0 0 27 17V9.5A4.5 4.5 0 0 0 22.5 5h-12a2 2 0 0 0-2 2h12a4.5 4.5 0 0 1 4.5 4.5V18h-2v-6.5A2.5 2.5 0 0 0 20.5 9h-13A2.5 2.5 0 0 0 5 11.5V22c0 1.1.9 2 2 2h2a1 1 0 0 1 1 1v2.43l3.86-3.2a1 1 0 0 1 .14-.1c.02.78.18 1.52.47 2.2l-4.01 3.32A1.5 1.5 0 0 1 8 28.5V26H7a4 4 0 0 1-4-4V11.5a4.5 4.5 0 0 1 3.5-4.39Zm15 13.39a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1Zm4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9h-.5Zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z",
    fill: primaryFill
  }));
};

exports.CommentMultipleLink32Regular = wrapIcon_1.default( /*#__PURE__*/CommentMultipleLink32RegularIcon, 'CommentMultipleLink32Regular');

const CommentNote20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 1c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-6Zm1 5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM12 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM4.6 3H9v4.5a2.5 2.5 0 0 0 2.5 2.5h6c.17 0 .34-.02.5-.05v2.33a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3Z",
    fill: primaryFill
  }));
};

exports.CommentNote20Filled = wrapIcon_1.default( /*#__PURE__*/CommentNote20FilledIcon, 'CommentNote20Filled');

const CommentNote20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 1c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-6Zm1 5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM12 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM4.6 3H9v1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56V10h.5c.17 0 .34-.02.5-.05v2.33a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3Z",
    fill: primaryFill
  }));
};

exports.CommentNote20Regular = wrapIcon_1.default( /*#__PURE__*/CommentNote20RegularIcon, 'CommentNote20Regular');

const CommentNote24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V3Zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5.25 3H11v6a3 3 0 0 0 3 3h7a3 3 0 0 0 1-.17v2.92c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 0 1 6 21v-3h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3Z",
    fill: primaryFill
  }));
};

exports.CommentNote24Filled = wrapIcon_1.default( /*#__PURE__*/CommentNote24FilledIcon, 'CommentNote24Filled');

const CommentNote24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V3Zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5.25 3H11v1.5H5.25c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75V12h.5a3 3 0 0 0 1-.17v2.92c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3Z",
    fill: primaryFill
  }));
};

exports.CommentNote24Regular = wrapIcon_1.default( /*#__PURE__*/CommentNote24RegularIcon, 'CommentNote24Regular');

const CommentOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m11.3 12 2.85 2.85a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h2.6ZM15 9.5c0 .92-.5 1.72-1.23 2.15L4.12 2h8.38A2.5 2.5 0 0 1 15 4.5v5Z",
    fill: primaryFill
  }));
};

exports.CommentOff16Filled = wrapIcon_1.default( /*#__PURE__*/CommentOff16FilledIcon, 'CommentOff16Filled');

const CommentOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m11.3 12 2.85 2.85a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h2.6Zm-1-1H8.3L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5c0-.49.23-.92.6-1.2l7.7 7.7ZM14 9.5c0 .64-.4 1.2-.97 1.4l.74.75A2.5 2.5 0 0 0 15 9.5v-5A2.5 2.5 0 0 0 12.5 2H4.12l1 1h7.38c.83 0 1.5.67 1.5 1.5v5Z",
    fill: primaryFill
  }));
};

exports.CommentOff16Regular = wrapIcon_1.default( /*#__PURE__*/CommentOff16RegularIcon, 'CommentOff16Regular');

const CommentOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 0 0 .71-.7l-2.3-2.31L3.82 3.12l-.97-.97ZM18 12.28c0 .97-.55 1.81-1.35 2.25L5.12 3H15.4C16.84 3 18 4.15 18 5.57v6.7Z",
    fill: primaryFill
  }));
};

exports.CommentOff20Filled = wrapIcon_1.default( /*#__PURE__*/CommentOff20FilledIcon, 'CommentOff20Filled');

const CommentOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 0 0 .71-.7l-2.3-2.31L3.82 3.12l-.97-.97Zm10.29 11.7h-2.66L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57c0-.5.24-.95.62-1.24l9.52 9.51ZM17 12.27c0 .69-.46 1.28-1.11 1.49l.76.76A2.56 2.56 0 0 0 18 12.28V5.57A2.58 2.58 0 0 0 15.4 3H5.12l1 1h9.28c.9 0 1.6.71 1.6 1.57v6.7Z",
    fill: primaryFill
  }));
};

exports.CommentOff20Regular = wrapIcon_1.default( /*#__PURE__*/CommentOff20RegularIcon, 'CommentOff20Regular');

const CommentOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l.7.7A3.24 3.24 0 0 0 2 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 0 0 2 1L13 18h3.94l3.78 3.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM22 14.75c0 1.1-.55 2.08-1.4 2.67L6.18 3h12.57C20.55 3 22 4.46 22 6.25v8.5Z",
    fill: primaryFill
  }));
};

exports.CommentOff24Filled = wrapIcon_1.default( /*#__PURE__*/CommentOff24FilledIcon, 'CommentOff24Filled');

const CommentOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l.7.7A3.24 3.24 0 0 0 2 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 0 0 2 1L13 18h3.93l3.78 3.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM15.44 16.5H12.5L7.5 20.25V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.47.18-.9.48-1.2L15.44 16.5Zm5.06-1.75c0 .7-.4 1.3-1 1.58l1.1 1.1a3.25 3.25 0 0 0 1.4-2.68v-8.5C22 4.45 20.54 3 18.75 3H6.18l1.5 1.5h11.07c.97 0 1.75.78 1.75 1.75v8.5Z",
    fill: primaryFill
  }));
};

exports.CommentOff24Regular = wrapIcon_1.default( /*#__PURE__*/CommentOff24RegularIcon, 'CommentOff24Regular');

const CommentOff28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l.85.85A3.74 3.74 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.3a1.75 1.75 0 0 0 2.77 1.41L16.31 21h3.63l4.78 4.78a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm2.9.78 17.65 17.65a3.75 3.75 0 0 0 2.17-3.4V6.75A3.75 3.75 0 0 0 22.25 3H6.18Z",
    fill: primaryFill
  }));
};

exports.CommentOff28Filled = wrapIcon_1.default( /*#__PURE__*/CommentOff28FilledIcon, 'CommentOff28Filled');

const CommentOff28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l.85.85A3.74 3.74 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.3a1.75 1.75 0 0 0 2.77 1.41L16.31 21h3.63l4.78 4.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM18.44 19.5h-2.62l-6.92 5c-.17.12-.4 0-.4-.2v-4.8H5.75c-1.24 0-2.25-1-2.25-2.25V6.75c0-.6.24-1.16.63-1.56l14.3 14.31ZM6.18 3l1.5 1.5h14.57c1.24 0 2.25 1 2.25 2.25v10.5c0 1.1-.8 2.03-1.85 2.22l1.18 1.18a3.75 3.75 0 0 0 2.17-3.4V6.75A3.75 3.75 0 0 0 22.25 3H6.18Z",
    fill: primaryFill
  }));
};

exports.CommentOff28Regular = wrapIcon_1.default( /*#__PURE__*/CommentOff28RegularIcon, 'CommentOff28Regular');

const CommentOff48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m34.23 36 7.64 7.63a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l1.87 1.88A7.23 7.23 0 0 0 4 13.25v15.5c0 4 3.25 7.25 7.25 7.25H12v5.82a2.25 2.25 0 0 0 3.55 1.84L26.4 36h7.83ZM11.3 6l29.05 29.05a7.25 7.25 0 0 0 3.65-6.3v-15.5c0-4-3.25-7.25-7.25-7.25H11.3Z",
    fill: primaryFill
  }));
};

exports.CommentOff48Filled = wrapIcon_1.default( /*#__PURE__*/CommentOff48FilledIcon, 'CommentOff48Filled');

const CommentOff48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m34.23 36 7.64 7.63a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l1.87 1.88A7.23 7.23 0 0 0 4 13.25v15.5c0 4 3.25 7.25 7.25 7.25H12v5.82a2.25 2.25 0 0 0 3.55 1.84L26.4 36h7.83Zm-2.5-2.5H25.6l-11.1 7.84V33.5h-3.25a4.75 4.75 0 0 1-4.75-4.75v-15.5c0-1.37.58-2.6 1.5-3.47L31.74 33.5ZM11.3 6l2.5 2.5h22.95a4.75 4.75 0 0 1 4.75 4.75v15.5a4.75 4.75 0 0 1-3.02 4.43l1.87 1.87a7.25 7.25 0 0 0 3.65-6.3v-15.5c0-4-3.25-7.25-7.25-7.25H11.3Z",
    fill: primaryFill
  }));
};

exports.CommentOff48Regular = wrapIcon_1.default( /*#__PURE__*/CommentOff48RegularIcon, 'CommentOff48Regular');

const Communication16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.5a5.5 5.5 0 0 0-3.9 9.39.75.75 0 1 1-1.05 1.06 7 7 0 1 1 9.9 0 .75.75 0 1 1-1.06-1.06A5.5 5.5 0 0 0 8 3.5Zm0 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.25 9a2.75 2.75 0 1 1 4.7 1.94A.75.75 0 0 0 11 12 4.24 4.24 0 0 0 8 4.75 4.25 4.25 0 0 0 5 12a.75.75 0 1 0 1.05-1.06c-.5-.5-.8-1.18-.8-1.94Z",
    fill: primaryFill
  }));
};

exports.Communication16Filled = wrapIcon_1.default( /*#__PURE__*/Communication16FilledIcon, 'Communication16Filled');

const Communication16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a6 6 0 0 0-4.25 10.24.5.5 0 1 1-.7.7 7 7 0 1 1 9.9 0 .5.5 0 1 1-.7-.7A6 6 0 0 0 8 3Zm0 2.5a3.5 3.5 0 0 0-2.47 5.97.5.5 0 1 1-.71.71A4.49 4.49 0 0 1 8 4.5a4.5 4.5 0 0 1 3.18 7.68.5.5 0 0 1-.7-.7A3.5 3.5 0 0 0 8 5.5ZM8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

exports.Communication16Regular = wrapIcon_1.default( /*#__PURE__*/Communication16RegularIcon, 'Communication16Regular');

const Communication20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 11a6.5 6.5 0 1 1 11.1 4.6.75.75 0 1 0 1.06 1.05 8 8 0 1 0-11.33 0A.75.75 0 0 0 5.4 15.6 6.48 6.48 0 0 1 3.5 11Zm3 0a3.5 3.5 0 1 1 5.98 2.47.75.75 0 1 0 1.06 1.06A4.99 4.99 0 0 0 10 6a5 5 0 0 0-3.54 8.53.75.75 0 0 0 1.06-1.06A3.49 3.49 0 0 1 6.5 11ZM10 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    fill: primaryFill
  }));
};

exports.Communication20Filled = wrapIcon_1.default( /*#__PURE__*/Communication20FilledIcon, 'Communication20Filled');

const Communication20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 4a7 7 0 0 0-4.95 11.95.5.5 0 0 1-.7.7 8 8 0 1 1 11.32 0 .5.5 0 0 1-.72-.7A7 7 0 0 0 10 4Zm0 3a4 4 0 0 0-2.83 6.82.5.5 0 1 1-.71.71A4.99 4.99 0 0 1 10 6a5 5 0 0 1 3.54 8.53.5.5 0 0 1-.71-.7A3.99 3.99 0 0 0 10 7Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-1 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

exports.Communication20Regular = wrapIcon_1.default( /*#__PURE__*/Communication20RegularIcon, 'Communication20Regular');

const Communication24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 5a8 8 0 0 0-5.66 13.65 1 1 0 1 1-1.42 1.41 10 10 0 1 1 14.16 0 1 1 0 0 1-1.42-1.4A8 8 0 0 0 12 5Zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 6.83 2.83 1 1 0 0 0 1.41 1.41A5.98 5.98 0 0 0 12 7a6 6 0 0 0-4.24 10.24 1 1 0 1 0 1.41-1.41A3.98 3.98 0 0 1 8 13Z",
    fill: primaryFill
  }));
};

exports.Communication24Filled = wrapIcon_1.default( /*#__PURE__*/Communication24FilledIcon, 'Communication24Filled');

const Communication24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4.5A8.5 8.5 0 0 0 5.98 19a.75.75 0 0 1-1.06 1.06 10 10 0 1 1 14.15 0 .75.75 0 0 1-1.05-1.05A8.5 8.5 0 0 0 12 4.5ZM12 8a5 5 0 0 0-3.53 8.54.75.75 0 0 1-1.06 1.06 6.5 6.5 0 1 1 9.19 0 .75.75 0 0 1-1.07-1.06A5 5 0 0 0 12 8Zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

exports.Communication24Regular = wrapIcon_1.default( /*#__PURE__*/Communication24RegularIcon, 'Communication24Regular');

const CommunicationPerson20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 4.5a6.5 6.5 0 0 0-4.6 11.1.75.75 0 1 1-1.06 1.05 8 8 0 1 1 13.63-6.35 3 3 0 0 0-1.76-1.21A6.5 6.5 0 0 0 10 4.5Zm4.64 4.63a5 5 0 1 0-8.18 5.4.75.75 0 0 0 1.06-1.06 3.5 3.5 0 1 1 5.81-3.54 3 3 0 0 1 1.3-.8ZM8 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm9.5 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.CommunicationPerson20Filled = wrapIcon_1.default( /*#__PURE__*/CommunicationPerson20FilledIcon, 'CommunicationPerson20Filled');

const CommunicationPerson20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 11a7 7 0 0 1 13.79-1.7c.48.22.88.57 1.18 1a8 8 0 1 0-13.63 6.35.5.5 0 0 0 .7-.7A6.98 6.98 0 0 1 3 11Zm11.64-1.87a5 5 0 1 0-8.18 5.4.5.5 0 0 0 .7-.7A3.99 3.99 0 0 1 10 7a4 4 0 0 1 3.74 2.57c.27-.2.57-.35.9-.44ZM8 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7.5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.CommunicationPerson20Regular = wrapIcon_1.default( /*#__PURE__*/CommunicationPerson20RegularIcon, 'CommunicationPerson20Regular');

const CommunicationPerson24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 13a8 8 0 0 1 15.8-1.75 3.5 3.5 0 0 1 2.16 2.7 10 10 0 1 0-17.03 6.12 1 1 0 0 0 1.4-1.42A7.97 7.97 0 0 1 4 13Zm13.7-1.9a6 6 0 1 0-9.94 6.14 1 1 0 1 0 1.41-1.41 4 4 0 1 1 6.74-3.68 3.5 3.5 0 0 1 1.78-1.06ZM10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11 1.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
};

exports.CommunicationPerson24Filled = wrapIcon_1.default( /*#__PURE__*/CommunicationPerson24FilledIcon, 'CommunicationPerson24Filled');

const CommunicationPerson24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 13a8.5 8.5 0 0 1 16.88-1.46 3.5 3.5 0 0 1 1.58 2.4 10 10 0 1 0-17.03 6.12.75.75 0 0 0 1.05-1.05A8.47 8.47 0 0 1 3.5 13Zm14.7-1.99A6.5 6.5 0 1 0 7.4 17.6a.75.75 0 1 0 1.07-1.06 5 5 0 1 1 8.3-5.07c.42-.25.9-.41 1.42-.46ZM9.5 13a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
};

exports.CommunicationPerson24Regular = wrapIcon_1.default( /*#__PURE__*/CommunicationPerson24RegularIcon, 'CommunicationPerson24Regular');

const CompassNorthwest16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2.5V1a7 7 0 0 0-6.93 6H2.5a.5.5 0 0 1 0 1H1a7 7 0 0 0 7 7v-1.5a.5.5 0 0 1 1 0v1.43A7 7 0 0 0 15 8h-1.5a.5.5 0 0 1 0-1h1.43A7 7 0 0 0 9 1.07V2.5a.5.5 0 0 1-1 0Zm1.44 5.34 1 1.92a.5.5 0 0 1-.68.68l-1.92-1a3 3 0 0 1-1.28-1.28l-.99-1.91a.5.5 0 0 1 .68-.68l1.9 1a3 3 0 0 1 1.29 1.27Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest16Filled = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest16FilledIcon, 'CompassNorthwest16Filled');

const CompassNorthwest16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.48 5.13a1 1 0 0 0-1.35 1.35l.99 1.9a3.5 3.5 0 0 0 1.5 1.5l1.91 1a1 1 0 0 0 1.35-1.35l-1-1.92a3.5 3.5 0 0 0-1.5-1.5l-1.9-.98Zm-.46.89 1.9.99c.46.23.84.6 1.07 1.06L10 10 8.07 9a2.5 2.5 0 0 1-1.06-1.06L6 6.02ZM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 1v1.5a.5.5 0 0 0 1 0V2.08A6 6 0 0 1 13.92 7H12.5a.5.5 0 0 0 0 1H14a6 6 0 0 1-5 5.92V12.5a.5.5 0 0 0-1 0V14a6 6 0 0 1-6-6h1.5a.5.5 0 0 0 0-1H2.08A6 6 0 0 1 8 2Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest16Regular = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest16RegularIcon, 'CompassNorthwest16Regular');

const CompassNorthwest20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.06 9A8 8 0 0 1 10 2v1.5a.5.5 0 0 0 1 0V2.06A8 8 0 0 1 17.94 9H16.5a.5.5 0 0 0 0 1H18a8 8 0 0 1-7 7.94V16.5a.5.5 0 0 0-1 0V18a8 8 0 0 1-8-8h1.5a.5.5 0 0 0 0-1H2.06Zm10.1.48a3 3 0 0 0-1.65-1.6l-3.49-1.4a.42.42 0 0 0-.54.54l1.4 3.49a3 3 0 0 0 1.6 1.65l3.73 1.6c.34.14.7-.2.55-.55l-1.6-3.73Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest20Filled = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest20FilledIcon, 'CompassNorthwest20Filled');

const CompassNorthwest20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.42 6.1A1 1 0 0 0 6.1 7.42l1.48 3.26a3.5 3.5 0 0 0 1.74 1.74l3.26 1.48a1 1 0 0 0 1.32-1.32l-1.48-3.26a3.5 3.5 0 0 0-1.74-1.74L7.42 6.1Zm-.41.9 3.26 1.49c.55.25.99.7 1.24 1.24L12.99 13l-3.26-1.48c-.55-.25-.99-.7-1.24-1.24L7.01 7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1v1.5a.5.5 0 0 0 1 0V3.07A7 7 0 0 1 16.93 9H15.5a.5.5 0 0 0 0 1H17a7 7 0 0 1-6 6.93V15.5a.5.5 0 0 0-1 0V17a7 7 0 0 1-7-7h1.5a.5.5 0 0 0 0-1H3.07A7 7 0 0 1 10 3Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest20Regular = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest20RegularIcon, 'CompassNorthwest20Regular');

const CompassNorthwest24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.25 11h-1.2A10 10 0 0 1 11 2.05v1.2a.75.75 0 0 0 1.5 0V2A10 10 0 0 1 21.95 11h-1.2a.75.75 0 0 0 0 1.5h1.24a10 10 0 0 1-9.5 9.49v-1.24a.75.75 0 0 0-1.5 0v1.2a10 10 0 0 1-8.98-9.45h1.24a.75.75 0 0 0 0-1.5Zm11.4.53a4 4 0 0 0-2.2-2.14L8.44 7.78a.5.5 0 0 0-.65.65l1.6 4.03a4 4 0 0 0 2.14 2.2l4.33 1.85a.5.5 0 0 0 .66-.66l-1.86-4.32Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest24Filled = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest24FilledIcon, 'CompassNorthwest24Filled');

const CompassNorthwest24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.7 7.08c-1.01-.4-2.02.6-1.62 1.63l1.6 4.03a4.75 4.75 0 0 0 2.55 2.6l4.33 1.86c1.03.44 2.08-.6 1.64-1.64l-1.86-4.33a4.75 4.75 0 0 0-2.6-2.54L8.7 7.09Zm1.38 5.1L8.7 8.69l3.49 1.4c.8.31 1.44.94 1.78 1.73l1.61 3.75-3.75-1.6a3.25 3.25 0 0 1-1.74-1.79ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-7.75 9h-.7A8.5 8.5 0 0 1 11 3.56v.69a.75.75 0 0 0 1.5 0v-.74A8.5 8.5 0 0 1 20.44 11h-.69a.75.75 0 0 0 0 1.5h.74a8.5 8.5 0 0 1-7.99 7.99v-.74a.75.75 0 0 0-1.5 0v.7a8.5 8.5 0 0 1-7.49-7.95h.74a.75.75 0 0 0 0-1.5Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest24Regular = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest24RegularIcon, 'CompassNorthwest24Regular');

const CompassNorthwest28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.04 13A12 12 0 0 1 13 2.04v1.21a.75.75 0 0 0 1.5 0V2.01A12 12 0 0 1 25.96 13h-1.2a.75.75 0 0 0 0 1.5h1.23A12 12 0 0 1 14.5 25.99v-1.24a.75.75 0 0 0-1.5 0v1.2A12 12 0 0 1 2.01 14.5h1.24a.75.75 0 1 0 0-1.5h-1.2Zm8.66 1.42a5 5 0 0 0 2.88 2.88l5 1.92c.4.15.8-.25.64-.65l-1.92-5a5 5 0 0 0-2.87-2.87l-5-1.92a.5.5 0 0 0-.65.65l1.92 5Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest28Filled = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest28FilledIcon, 'CompassNorthwest28Filled');

const CompassNorthwest28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.7 8.08c-1.01-.39-2 .6-1.62 1.62l1.92 5a5.75 5.75 0 0 0 3.3 3.3l5 1.92c1.01.39 2-.6 1.62-1.62l-1.92-5a5.75 5.75 0 0 0-3.3-3.3l-5-1.92Zm1.7 6.07L9.68 9.68l4.47 1.72a4.25 4.25 0 0 1 2.45 2.45l1.72 4.47-4.47-1.72a4.25 4.25 0 0 1-2.45-2.45ZM14 2a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-1 1.55v.7a.75.75 0 0 0 1.5 0v-.74A10.5 10.5 0 0 1 24.45 13h-.7a.75.75 0 0 0 0 1.5h.74a10.5 10.5 0 0 1-9.99 9.99v-.74a.75.75 0 0 0-1.5 0v.7a10.5 10.5 0 0 1-9.49-9.95h.74a.75.75 0 0 0 0-1.5h-.7C4.02 8 8 4.02 13 3.55Z",
    fill: primaryFill
  }));
};

exports.CompassNorthwest28Regular = wrapIcon_1.default( /*#__PURE__*/CompassNorthwest28RegularIcon, 'CompassNorthwest28Regular');

const Component2DoubleTapSwipeDown24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 15.71v-1.58a5.5 5.5 0 1 1 4.21-.1l-.2.1v1.58a7 7 0 1 0-4.26-.08l.25.08Zm0-2.68v-1.8A3 3 0 0 1 12 6a3 3 0 0 1 2.14 5.1l-.14.14v1.8a4.5 4.5 0 1 0-4.2-.1l.2.1Zm1.39 8.76a1 1 0 0 0 1.22 0l.1-.08 3-3 .08-.1a1 1 0 0 0 0-1.22l-.08-.1-.1-.08a1 1 0 0 0-1.22 0l-.1.08L13 18.6V9a1 1 0 0 0-2-.12V18.6l-1.3-1.3-.09-.08a1 1 0 0 0-1.4 1.4l.08.1 3 3 .1.08Z",
    fill: primaryFill
  }));
};

exports.Component2DoubleTapSwipeDown24Filled = wrapIcon_1.default( /*#__PURE__*/Component2DoubleTapSwipeDown24FilledIcon, 'Component2DoubleTapSwipeDown24Filled');

const Component2DoubleTapSwipeDown24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 8c.38 0 .7.28.74.65l.01.1v10.7l2.22-2.21a.75.75 0 0 1 .98-.08l.08.08c.27.26.3.68.07.97l-.07.09-3.5 3.5a.75.75 0 0 1-.98.07l-.08-.07-3.5-3.5a.75.75 0 0 1 .98-1.14l.08.08 2.22 2.21V8.75c0-.41.34-.75.75-.75Zm0-6a7 7 0 0 1 1.75 13.78v-1.56a5.5 5.5 0 1 0-3.5 0v1.56A7 7 0 0 1 12 2Zm0 2.5a4.5 4.5 0 0 1 1.75 8.65v-1.71a3 3 0 1 0-3.5 0v1.7A4.5 4.5 0 0 1 12 4.5Z",
    fill: primaryFill
  }));
};

exports.Component2DoubleTapSwipeDown24Regular = wrapIcon_1.default( /*#__PURE__*/Component2DoubleTapSwipeDown24RegularIcon, 'Component2DoubleTapSwipeDown24Regular');

const Component2DoubleTapSwipeUp24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8.29v1.58a5.5 5.5 0 1 0 4.21.1l-.2-.1V8.3a7 7 0 1 1-4.26.08l.25-.08Zm0 2.68v1.8A3 3 0 0 0 12 18a3 3 0 0 0 2.14-5.1l-.14-.14v-1.8a4.5 4.5 0 1 1-4.2.1l.2-.1Zm1.39-8.76a1 1 0 0 1 1.22 0l.1.08 3 3 .08.1a1 1 0 0 1 0 1.22l-.08.1-.1.08a1 1 0 0 1-1.22 0l-.1-.08L13 5.4V15a1 1 0 0 1-2 .12V5.4l-1.3 1.3-.09.08a1 1 0 0 1-1.4-1.4l.08-.1 3-3 .1-.08Z",
    fill: primaryFill
  }));
};

exports.Component2DoubleTapSwipeUp24Filled = wrapIcon_1.default( /*#__PURE__*/Component2DoubleTapSwipeUp24FilledIcon, 'Component2DoubleTapSwipeUp24Filled');

const Component2DoubleTapSwipeUp24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 16.02c.38 0 .7-.29.74-.65l.01-.1V4.57l2.22 2.21c.27.27.68.3.98.07l.08-.07a.75.75 0 0 0 .07-.98l-.07-.08-3.5-3.5a.75.75 0 0 0-.98-.07l-.08.07-3.5 3.5a.75.75 0 0 0 .98 1.13l.08-.07 2.22-2.22v10.7c0 .42.34.76.75.76Zm0 6a7 7 0 0 0 1.75-13.78V9.8a5.5 5.5 0 1 1-3.5 0V8.24A7 7 0 0 0 12 22.02Zm0-2.5a4.5 4.5 0 0 0 1.75-8.65v1.71a3 3 0 1 1-3.5 0v-1.71A4.5 4.5 0 0 0 12 19.52Z",
    fill: primaryFill
  }));
};

exports.Component2DoubleTapSwipeUp24Regular = wrapIcon_1.default( /*#__PURE__*/Component2DoubleTapSwipeUp24RegularIcon, 'Component2DoubleTapSwipeUp24Regular');

const Compose16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h4.5a.75.75 0 1 1 0 1.5h-4.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 0 1 1.5 0v4.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5Zm12.78-3.53c.3.3.3.77 0 1.06l-7.5 7.5L6 10l.22-1.28 7.5-7.5c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.Compose16Filled = wrapIcon_1.default( /*#__PURE__*/Compose16FilledIcon, 'Compose16Filled');

const Compose16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.85 1.85a.5.5 0 1 0-.7-.7l-8 8L6 10l.85-.15 8-8ZM4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-1 0v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7C3 3.67 3.67 3 4.5 3h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
};

exports.Compose16Regular = wrapIcon_1.default( /*#__PURE__*/Compose16RegularIcon, 'Compose16Regular');

const Compose20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.78 3.28a.75.75 0 1 0-1.06-1.06l-7.5 7.5L9 11l1.28-.22 7.5-7.5ZM5.75 3A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17h8.5A2.75 2.75 0 0 0 17 14.25v-5.5a.75.75 0 0 0-1.5 0v5.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25h5.5a.75.75 0 0 0 0-1.5h-5.5Z",
    fill: primaryFill
  }));
};

exports.Compose20Filled = wrapIcon_1.default( /*#__PURE__*/Compose20FilledIcon, 'Compose20Filled');

const Compose20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.85a.5.5 0 0 0-.7-.7l-8 8L9 11l.85-.15 8-8ZM5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-6a.5.5 0 0 0-1 0v6c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4h6a.5.5 0 0 0 0-1h-6Z",
    fill: primaryFill
  }));
};

exports.Compose20Regular = wrapIcon_1.default( /*#__PURE__*/Compose20RegularIcon, 'Compose20Regular');

const Compose24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.96 13.46 21.7 3.7a1 1 0 0 0-1.42-1.42l-9.75 9.75-.29 1.71 1.7-.3ZM6.5 3A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5V10a1 1 0 1 0-2 0v7.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-11C5 5.67 5.67 5 6.5 5H14a1 1 0 1 0 0-2H6.5Z",
    fill: primaryFill
  }));
};

exports.Compose24Filled = wrapIcon_1.default( /*#__PURE__*/Compose24FilledIcon, 'Compose24Filled');

const Compose24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.78 3.28a.75.75 0 1 0-1.06-1.06l-10 10-.47 1.53 1.53-.47 10-10ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25v-8a.75.75 0 0 0-1.5 0v8c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75h8a.75.75 0 0 0 0-1.5h-8Z",
    fill: primaryFill
  }));
};

exports.Compose24Regular = wrapIcon_1.default( /*#__PURE__*/Compose24RegularIcon, 'Compose24Regular');

const Compose28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M25.7 3.7a1 1 0 0 0-1.4-1.4l-13 13L11 17l1.7-.3 13-13ZM6.5 3A3.5 3.5 0 0 0 3 6.5v15A3.5 3.5 0 0 0 6.5 25h15a3.5 3.5 0 0 0 3.5-3.5v-10a1 1 0 1 0-2 0v10c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 5 21.5v-15C5 5.67 5.67 5 6.5 5h10a1 1 0 1 0 0-2h-10Z",
    fill: primaryFill
  }));
};

exports.Compose28Filled = wrapIcon_1.default( /*#__PURE__*/Compose28FilledIcon, 'Compose28Filled');

const Compose28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M25.78 3.28a.75.75 0 1 0-1.06-1.06L11.47 15.47 11 17l1.53-.47L25.78 3.28ZM6.25 3A3.25 3.25 0 0 0 3 6.25v15.5C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V11.2a.75.75 0 0 0-1.5 0v10.55c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75H16.8a.75.75 0 1 0 0-1.5H6.25Z",
    fill: primaryFill
  }));
};

exports.Compose28Regular = wrapIcon_1.default( /*#__PURE__*/Compose28RegularIcon, 'Compose28Regular');

const Cone16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 15c-2.23 0-6-.42-6-2l.01-.12.05-.2a.5.5 0 0 1 .04-.1l5.45-11.3a.52.52 0 0 1 .9 0l5.45 11.3a.5.5 0 0 1 .04.1l.05.2.01.12c0 1.58-3.77 2-6 2Z",
    fill: primaryFill
  }));
};

exports.Cone16Filled = wrapIcon_1.default( /*#__PURE__*/Cone16FilledIcon, 'Cone16Filled');

const Cone16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 15c-2.23 0-6-.42-6-2l.01-.12.05-.2a.5.5 0 0 1 .04-.1l5.45-11.3a.52.52 0 0 1 .9 0l5.45 11.3a.5.5 0 0 1 .04.1l.05.2.01.12c0 1.58-3.77 2-6 2Zm-4.99-1.98c.2.34 2.03.98 4.99.98 2.94 0 4.76-.63 4.99-1l-.01-.03L8 2.65 3.01 13.02Z",
    fill: primaryFill
  }));
};

exports.Cone16Regular = wrapIcon_1.default( /*#__PURE__*/Cone16RegularIcon, 'Cone16Regular');

const ConferenceRoom16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.18 2.11a.5.5 0 0 1 .42-.1l5 1c.23.05.4.25.4.49v9a.5.5 0 0 1-.4.49l-5 1a.5.5 0 0 1-.6-.5V2.5M10 8a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3H3.5a.5.5 0 0 0-.5.5v9c0 .27.22.5.5.5H6V3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.18 2.11A.5.5 0 0 0 7 2.5Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom16Filled = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom16FilledIcon, 'ConferenceRoom16Filled');

const ConferenceRoom16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.6 2a.5.5 0 0 0-.6.49v11a.5.5 0 0 0 .6.49l5-1a.5.5 0 0 0 .4-.5V3.5a.5.5 0 0 0-.4-.49l-5-1ZM8 12.89V3.1l4 .8v8.18l-4 .8Zm-2 .1v-1H4V4h2V3H3.5a.5.5 0 0 0-.5.5v9c0 .27.22.5.5.5H6Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom16Regular = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom16RegularIcon, 'ConferenceRoom16Regular');

const ConferenceRoom20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.19 2.11a.5.5 0 0 1 .41-.1l7 1.5c.23.05.4.25.4.5v12a.5.5 0 0 1-.4.48l-7 1.5a.5.5 0 0 1-.6-.49v-15c0-.15.07-.3.19-.39Zm3.31 7.9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM8 3H3.5a.5.5 0 0 0-.5.5V16.5c0 .27.22.5.5.5H8V3Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom20Filled = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom20FilledIcon, 'ConferenceRoom20Filled');

const ConferenceRoom20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.49 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.6 2.01a.5.5 0 0 0-.6.5V17.5a.5.5 0 0 0 .6.5l7-1.51A.5.5 0 0 0 17 16V4a.5.5 0 0 0-.4-.49l-7-1.5Zm.4 14.87V3.12l6 1.29V15.6l-6 1.28ZM8 17v-1H4V4h4V3H3.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5H8Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom20Regular = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom20RegularIcon, 'ConferenceRoom20Regular');

const ConferenceRoom24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m10.6 2.01 9 2c.23.05.4.25.4.49v15a.5.5 0 0 1-.4.5l-9 2a.5.5 0 0 1-.6-.5v-19a.5.5 0 0 1 .6-.49ZM9 4v16H4.75a.75.75 0 0 1-.74-.65l-.01-.1V4.75c0-.38.28-.7.65-.74l.1-.01H9Zm4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom24Filled = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom24FilledIcon, 'ConferenceRoom24Filled');

const ConferenceRoom24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m10.82 2 .1.02 8.5 2c.3.07.53.32.57.63l.01.1v14.5c0 .31-.2.59-.48.7l-.1.03-8.5 2a.75.75 0 0 1-.91-.63l-.01-.1V2.75c0-.41.33-.74.72-.75h.1Zm.68 1.7v16.6l7-1.64V5.34l-7-1.64ZM9 4v1.5H5.5v13H9V20H4.75a.75.75 0 0 1-.74-.65l-.01-.1V4.75c0-.38.28-.7.65-.74l.1-.01H9Zm5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom24Regular = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom24RegularIcon, 'ConferenceRoom24Regular');

const ConferenceRoom28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m11.9 2.01 11.5 2.25c.35.07.6.38.6.74v18c0 .36-.25.67-.6.74l-11.5 2.25a.75.75 0 0 1-.9-.74V2.75c0-.47.43-.83.9-.74ZM15 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5-8.5v19H4.75a.75.75 0 0 1-.74-.65l-.01-.1V5.25c0-.38.28-.7.65-.74l.1-.01H10Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom28Filled = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom28FilledIcon, 'ConferenceRoom28Filled');

const ConferenceRoom28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m11.9 2.01 11.5 2.25c.35.07.6.38.6.74v18c0 .36-.25.67-.6.74l-11.5 2.25a.75.75 0 0 1-.9-.74V2.75c0-.47.43-.83.9-.74Zm.6 1.65v20.68l10-1.96V5.62l-10-1.96ZM10 4.5V6H5.5v16H10v1.5H4.75a.75.75 0 0 1-.74-.65l-.01-.1V5.25c0-.38.28-.7.65-.74l.1-.01H10Zm5 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom28Regular = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom28RegularIcon, 'ConferenceRoom28Regular');

const ConferenceRoom48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m22.5 7.78 14.5 3c.58.12 1 .63 1 1.22v24c0 .6-.42 1.1-1 1.22l-14.5 3c-.77.16-1.5-.43-1.5-1.22V9c0-.8.73-1.38 1.5-1.22ZM18 10l.13 28h-6.88c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-25.5c0-.65.5-1.18 1.12-1.24l.13-.01H18Zm8.5 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom48Filled = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom48FilledIcon, 'ConferenceRoom48Filled');

const ConferenceRoom48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m22.5 7.78 14.5 3c.58.12 1 .63 1 1.22v24c0 .6-.42 1.1-1 1.22l-14.5 3c-.77.16-1.5-.43-1.5-1.22V9c0-.8.73-1.38 1.5-1.22ZM18 10v2.5h-5.5v23H18V38h-6.75c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-25.5c0-.65.5-1.18 1.12-1.24l.13-.01H18Zm5.5.54v26.93l12-2.49V13.02l-12-2.48Zm3 11.96a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
};

exports.ConferenceRoom48Regular = wrapIcon_1.default( /*#__PURE__*/ConferenceRoom48RegularIcon, 'ConferenceRoom48Regular');

const Connected16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.02 4.72a2 2 0 1 1 .7-.7l2.26 2.26a2 2 0 0 1 2.04 0l2.26-2.26a2 2 0 1 1 .7.7L9.72 6.98a2 2 0 0 1 0 2.04l2.26 2.26a2 2 0 1 1-.7.7L9.02 9.72a2 2 0 0 1-2.04 0l-2.26 2.26a2 2 0 1 1-.7-.7l2.26-2.26a2 2 0 0 1 0-2.04L4.02 4.72Z",
    fill: primaryFill
  }));
};

exports.Connected16Filled = wrapIcon_1.default( /*#__PURE__*/Connected16FilledIcon, 'Connected16Filled');

const Connected16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.02 4.72a2 2 0 1 1 .7-.7l2.26 2.26a2 2 0 0 1 2.04 0l2.26-2.26a2 2 0 1 1 .7.7L9.72 6.98a2 2 0 0 1 0 2.04l2.26 2.26a2 2 0 1 1-.7.7L9.02 9.72a2 2 0 0 1-2.04 0l-2.26 2.26a2 2 0 1 1-.7-.7l2.26-2.26a2 2 0 0 1 0-2.04L4.02 4.72ZM4 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm9-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM9 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.Connected16Regular = wrapIcon_1.default( /*#__PURE__*/Connected16RegularIcon, 'Connected16Regular');

const Connected20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .51-.15.98-.41 1.38L8.62 7.9a2.49 2.49 0 0 1 2.76 0l2.03-2.03a2.5 2.5 0 1 1 .7.7L12.1 8.63a2.49 2.49 0 0 1 0 2.76l2.03 2.03a2.5 2.5 0 1 1-.7.7l-2.04-2.02a2.49 2.49 0 0 1-2.76 0L6.6 14.12a2.5 2.5 0 1 1-.7-.7l2.02-2.04a2.49 2.49 0 0 1 0-2.76L5.88 6.6A2.5 2.5 0 1 1 7 4.5Z",
    fill: primaryFill
  }));
};

exports.Connected20Filled = wrapIcon_1.default( /*#__PURE__*/Connected20FilledIcon, 'Connected20Filled');

const Connected20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.88 6.59a2.5 2.5 0 1 1 .7-.7L8.63 7.9a2.49 2.49 0 0 1 2.76 0l2.03-2.03a2.5 2.5 0 1 1 .7.7L12.1 8.63a2.49 2.49 0 0 1 0 2.76l2.03 2.03a2.5 2.5 0 1 1-.7.7l-2.04-2.02a2.49 2.49 0 0 1-2.76 0L6.6 14.12a2.5 2.5 0 1 1-.7-.7l2.02-2.04a2.49 2.49 0 0 1 0-2.76L5.88 6.6ZM6 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm11 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM4.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM11.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z",
    fill: primaryFill
  }));
};

exports.Connected20Regular = wrapIcon_1.default( /*#__PURE__*/Connected20RegularIcon, 'Connected20Regular');

const Connector16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3a.5.5 0 0 0-.5.5v1.88l-.95 1.9A.5.5 0 0 0 2 7.5v3c0 .28.22.5.5.5H3v1.5a.5.5 0 0 0 1 0V11h1v1.5a.5.5 0 0 0 1 0V11h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.05-.22L6 5.38V3.5a.5.5 0 0 0-.5-.5h-2Zm9 10h-2a.5.5 0 0 1-.5-.5v-1.88l-.95-1.9A.5.5 0 0 1 9 8.5v-3c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V5h.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.05.22l-.95 1.9v1.88a.5.5 0 0 1-.5.5ZM11 5h1V4h-1v1Z",
    fill: primaryFill
  }));
};

exports.Connector16Filled = wrapIcon_1.default( /*#__PURE__*/Connector16FilledIcon, 'Connector16Filled');

const Connector16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5a.5.5 0 0 0-1 0v1.88l-.95 1.9A.5.5 0 0 0 2 7.5v3c0 .28.22.5.5.5H3v1.5a.5.5 0 0 0 1 0V11h1v1.5a.5.5 0 0 0 1 0V11h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.05-.22L6 5.38V3.5a.5.5 0 0 0-1 0v2c0 .08.02.15.05.22L6 7.62V10H3V7.62l.95-1.9A.5.5 0 0 0 4 5.5v-2Zm8 9v-2a.5.5 0 0 1 .05-.22l.95-1.9V6h-3v2.38l.95 1.9a.5.5 0 0 1 .05.22v2a.5.5 0 0 1-1 0v-1.88l-.95-1.9A.5.5 0 0 1 9 8.5v-3c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.05.22l-.95 1.9v1.88a.5.5 0 0 1-1 0ZM11 5h1V4h-1v1Z",
    fill: primaryFill
  }));
};

exports.Connector16Regular = wrapIcon_1.default( /*#__PURE__*/Connector16RegularIcon, 'Connector16Regular');

const Connector20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3a.5.5 0 0 0-.5.5v2.8L2.15 8.14A.5.5 0 0 0 2 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.15-.35L7 6.29V3.5a.5.5 0 0 0-.5-.5h-2Zm11 14a.5.5 0 0 0 .5-.5v-2.8l1.85-1.85a.5.5 0 0 0 .15-.35v-5a.5.5 0 0 0-.5-.5H17V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V6h-.5a.5.5 0 0 0-.5.5v5c0 .13.05.26.15.35L13 13.71v2.79c0 .28.22.5.5.5h2ZM13 6V4h3v2h-3Z",
    fill: primaryFill
  }));
};

exports.Connector20Filled = wrapIcon_1.default( /*#__PURE__*/Connector20FilledIcon, 'Connector20Filled');

const Connector20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5a.5.5 0 0 0-1 0v2.8L2.15 8.14A.5.5 0 0 0 2 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.15-.35L7 6.29V3.5a.5.5 0 0 0-1 0v3c0 .13.05.26.15.35L8 8.71V13H3V8.7l1.85-1.85A.5.5 0 0 0 5 6.5v-3Zm10 13v-3a.5.5 0 0 1 .15-.35L17 11.29V7h-5v4.3l1.85 1.85c.1.09.15.22.15.35v3a.5.5 0 0 1-1 0v-2.8l-1.85-1.85a.5.5 0 0 1-.15-.35v-5c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V6h.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.15.35L16 13.71v2.79a.5.5 0 0 1-1 0ZM13 6h3V4h-3v2Z",
    fill: primaryFill
  }));
};

exports.Connector20Regular = wrapIcon_1.default( /*#__PURE__*/Connector20RegularIcon, 'Connector20Regular');

const Connector24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 4c.42 0 .75.34.75.75v2.77l1.88 2.82c.08.12.12.27.12.41v4.5c0 .41-.33.75-.75.75H9v3.25a.75.75 0 0 1-1.5.1V16h-2v3.26a.75.75 0 0 1-1.49.1V16H2.74a.75.75 0 0 1-.75-.75v-4.5c0-.14.05-.29.13-.41L4 7.52V4.75c0-.41.34-.75.75-.75h3.5Zm7 0h4.5c.38 0 .7.28.74.65l.01.1V8h.75c.42 0 .75.34.75.75v4.5c0 .14-.04.29-.12.41L20 16.48v2.77c0 .41-.33.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-2.77l-1.87-2.82a.75.75 0 0 1-.13-.41v-4.5c0-.41.34-.75.75-.75h.76V4.75c0-.38.28-.7.64-.74h4.6-4.5ZM19 5.5h-3V8h3V5.5Z",
    fill: primaryFill
  }));
};

exports.Connector24Filled = wrapIcon_1.default( /*#__PURE__*/Connector24FilledIcon, 'Connector24Filled');

const Connector24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 4c.38 0 .7.28.74.65l.01.1v2.77l1.88 2.82c.06.1.1.2.11.3l.01.11v4.5c0 .38-.28.7-.65.74l-.1.01H9v3.25a.75.75 0 0 1-1.5.1V16h-2v3.26a.75.75 0 0 1-1.49.1V16H2.74a.75.75 0 0 1-.74-.65v-4.6c0-.1.02-.22.07-.32l.05-.1L4 7.54V4.74a.75.75 0 0 1 1.5-.1v3.1c0 .11-.02.22-.07.32l-.05.1-1.88 2.81v3.52h6v-3.52L7.63 8.17a.75.75 0 0 1-.12-.31V4.75c0-.41.33-.75.74-.75Zm7 0h4.5c.38 0 .7.28.74.65l.01.1V8h.75c.38 0 .7.28.74.65l.01.1v4.5c0 .1-.02.22-.07.32l-.05.1-1.88 2.8v2.78a.75.75 0 0 1-1.5.1v-3.1c0-.11.03-.22.07-.32l.06-.1 1.87-2.81V9.5h-6v3.52l1.88 2.81c.06.1.1.2.12.31v3.11a.75.75 0 0 1-1.49.1v-2.87l-1.88-2.82a.75.75 0 0 1-.12-.3V8.75c0-.38.28-.7.64-.74l.1-.01h.76V4.75c0-.38.28-.7.64-.74h4.6-4.5ZM19 5.5h-3V8h3V5.5Z",
    fill: primaryFill
  }));
};

exports.Connector24Regular = wrapIcon_1.default( /*#__PURE__*/Connector24RegularIcon, 'Connector24Regular');

const ContactCard16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5Zm4.26 2.96a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71Zm-1.4.68a.86.86 0 0 0-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.62.16 1.27.16 1.88 0h.06a1.67 1.67 0 0 0 1.26-1.63.86.86 0 0 0-.86-.86h-2.8ZM9.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.ContactCard16Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard16FilledIcon, 'ContactCard16Filled');

const ContactCard16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5ZM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 0 0-.75-.75H2.75ZM9.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.26 7.71a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71Zm-1.4.68a.86.86 0 0 0-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.62.16 1.27.16 1.88 0h.06a1.67 1.67 0 0 0 1.26-1.63.86.86 0 0 0-.86-.86h-2.8Z",
    fill: primaryFill
  }));
};

exports.ContactCard16Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard16RegularIcon, 'ContactCard16Regular');

const ContactCard20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-13Zm3 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1.55.75h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8 0-.52.42-.94.95-.94ZM11 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.ContactCard20Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard20FilledIcon, 'ContactCard20Filled');

const ContactCard20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4 3.2c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2 5.75C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v8.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-8.5ZM3.75 5a.75.75 0 0 0-.75.75v8.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 0 0-.75-.75H3.75Z",
    fill: primaryFill
  }));
};

exports.ContactCard20Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard20RegularIcon, 'ContactCard20Regular');

const ContactCard24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm-10 8.5h-3.5c-.38 0-.7.28-.74.65l-.01.1v.6c.17 1.11 1.1 1.65 2.5 1.65 1.33 0 2.24-.49 2.46-1.5l.03-.15.01-.1v-.5c0-.38-.28-.7-.65-.74l-.1-.01Zm8 .5h-4.6a.75.75 0 0 0 0 1.49H17.85a.75.75 0 0 0 0-1.49h-.1ZM8 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75 1h-4.6a.75.75 0 0 0 0 1.5H17.85a.75.75 0 0 0 0-1.5h-.1Z",
    fill: primaryFill
  }));
};

exports.ContactCard24Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard24FilledIcon, 'ContactCard24Filled');

const ContactCard24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75V6.25a.75.75 0 0 0-.75-.75Zm-10 7c.41 0 .75.34.75.75v.6c-.17 1.11-1.1 1.65-2.5 1.65s-2.33-.54-2.5-1.65v-.6c0-.41.34-.75.75-.75h3.5Zm3.5.5h4.5a.75.75 0 0 1 .1 1.49h-4.6a.75.75 0 0 1-.1-1.49h4.6-4.5ZM8 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.25 1h4.5a.75.75 0 0 1 .1 1.5h-4.6a.75.75 0 0 1-.1-1.5h4.6-4.5Z",
    fill: primaryFill
  }));
};

exports.ContactCard24Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard24RegularIcon, 'ContactCard24Regular');

const ContactCard28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v14.5A2.75 2.75 0 0 0 4.75 24h18.5A2.75 2.75 0 0 0 26 21.25V6.75A2.75 2.75 0 0 0 23.25 4H4.75ZM15 11.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7 14.5h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.ContactCard28Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard28FilledIcon, 'ContactCard28Filled');

const ContactCard28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 11.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7 14.5h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 0 1 1-1ZM2 6.75A2.75 2.75 0 0 1 4.75 4h18.5A2.75 2.75 0 0 1 26 6.75v14.5A2.75 2.75 0 0 1 23.25 24H4.75A2.75 2.75 0 0 1 2 21.25V6.75ZM4.75 5.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h18.5c.7 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75Z",
    fill: primaryFill
  }));
};

exports.ContactCard28Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard28RegularIcon, 'ContactCard28Regular');

const ContactCard32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 4A3.25 3.25 0 0 0 2 7.25v17.5C2 26.55 3.46 28 5.25 28h21.5c1.8 0 3.25-1.46 3.25-3.25V7.25C30 5.45 28.54 4 26.75 4H5.25ZM18 13a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm1 4h6a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2Zm-6-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5Z",
    fill: primaryFill
  }));
};

exports.ContactCard32Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard32FilledIcon, 'ContactCard32Filled');

const ContactCard32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 13a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm-6-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5ZM2 7.25C2 5.45 3.46 4 5.25 4h21.5C28.55 4 30 5.46 30 7.25v17.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 24.75V7.25ZM5.25 6C4.56 6 4 6.56 4 7.25v17.5c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25V7.25C28 6.56 27.44 6 26.75 6H5.25Z",
    fill: primaryFill
  }));
};

exports.ContactCard32Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard32RegularIcon, 'ContactCard32Regular');

const ContactCard48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5C4 38.1 5.9 40 8.25 40h31.5C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H8.25ZM19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5Zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25ZM26.25 26h9.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5Z",
    fill: primaryFill
  }));
};

exports.ContactCard48Filled = wrapIcon_1.default( /*#__PURE__*/ContactCard48FilledIcon, 'ContactCard48Filled');

const ContactCard48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5Zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25ZM26.25 26a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5h-9.5ZM4 12.25C4 9.9 5.9 8 8.25 8h31.5C42.1 8 44 9.9 44 12.25v23.5C44 38.1 42.1 40 39.75 40H8.25A4.25 4.25 0 0 1 4 35.75v-23.5Zm4.25-1.75c-.97 0-1.75.78-1.75 1.75v23.5c0 .97.78 1.75 1.75 1.75h31.5c.97 0 1.75-.78 1.75-1.75v-23.5c0-.97-.78-1.75-1.75-1.75H8.25Z",
    fill: primaryFill
  }));
};

exports.ContactCard48Regular = wrapIcon_1.default( /*#__PURE__*/ContactCard48RegularIcon, 'ContactCard48Regular');

const ContactCardGroup16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 3h-9ZM10 6.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm.5 2.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.75 8h2.5c.41 0 .75.34.75.75v.75S7 11 5 11 3 9.5 3 9.5v-.75c0-.41.34-.75.75-.75ZM8.5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.56 3.7A2.4 2.4 0 0 0 8 9.56v-.81c0-.27-.06-.52-.17-.75h.67c.28 0 .5.22.5.5V9a1 1 0 0 1-1 1h-.07l.01-.05Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup16Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup16FilledIcon, 'ContactCardGroup16Filled');

const ContactCardGroup16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.75 8a.75.75 0 0 0-.75.75v.75S3 11 5 11s2-1.5 2-1.5v-.75A.75.75 0 0 0 6.25 8h-2.5ZM8.5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.56 3.7V10H8a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5h-.67c.11.23.17.48.17.75v.81a1.96 1.96 0 0 1-.06.4ZM1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5ZM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup16Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup16RegularIcon, 'ContactCardGroup16Regular');

const ContactCardGroup20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM4 10.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 .75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75ZM6.25 9a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.25-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.07 3.98a2.26 2.26 0 0 0 .07-.41V10.75c0-.27-.06-.52-.17-.75H10a1 1 0 0 1 1 1c0 .83-.67 1.5-1.5 1.5h-.26c.1-.2.16-.37.2-.52Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup20Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup20FilledIcon, 'ContactCardGroup20Filled');

const ContactCardGroup20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-8-.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 .75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75ZM6.25 9a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.25-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.07 3.98c-.03.15-.1.33-.2.52h.27c.83 0 1.5-.67 1.5-1.5a1 1 0 0 0-1-1h-.67c.11.23.17.48.17.75V11.57a1.84 1.84 0 0 1-.07.4ZM4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-7Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup20Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup20RegularIcon, 'ContactCardGroup20Regular');

const ContactCardGroup24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5a3.25 3.25 0 0 1 3.07-3.24L5.25 4h13.5Zm-9.5 8.5h-3.5c-.38 0-.7.28-.74.65l-.01.1v.58c0 1.27.97 1.92 2.5 1.92 1.47 0 2.42-.6 2.5-1.76v-.74c0-.38-.28-.7-.65-.74l-.1-.01Zm3 0h-1.42c.09.18.15.38.17.59v1c-.03.33-.1.63-.21.9l.34.01c1.05 0 1.79-.4 1.86-1.27l.01-.15v-.33c0-.38-.28-.7-.65-.74l-.1-.01h-1.42 1.42Zm6 0h-3.1a.75.75 0 0 0 0 1.5h3.2a.75.75 0 0 0 0-1.5h-.1ZM7.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3.87.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm6.88.5h-3.1a.75.75 0 0 0 0 1.5h3.2a.75.75 0 0 0 0-1.5h-.1Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup24Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup24FilledIcon, 'ContactCardGroup24Filled');

const ContactCardGroup24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5a3.25 3.25 0 0 1 3.07-3.24L5.25 4h13.5Zm0 1.5H5.11c-.9.08-1.61.83-1.61 1.75v9.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75Zm-9.5 7c.42 0 .75.34.75.75v.58c0 1.27-.97 1.92-2.5 1.92S5 15.1 5 13.83v-.58c0-.41.34-.75.75-.75h3.5Zm1.58 0h1.42c.41 0 .75.34.75.75v.33c0 .97-.77 1.42-1.88 1.42-.11 0-.22 0-.33-.02.11-.26.18-.56.2-.9l.01-.25v-.58c0-.27-.06-.52-.17-.75Zm4.42 0h3a.75.75 0 0 1 .1 1.5h-3.1a.75.75 0 0 1-.1-1.5h3.1-3Zm-7.75-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.87.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm3.88.5h3a.75.75 0 0 1 .1 1.5h-3.1a.75.75 0 0 1-.1-1.5h3.1-3Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup24Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup24RegularIcon, 'ContactCardGroup24Regular');

const ContactCardGroup28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75A3.75 3.75 0 0 0 2 7.75Zm15 4.5c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 2.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 1 1 0-1.5ZM15 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-8 2.5h3.5a1 1 0 0 1 1 1v1s0 2-2.75 2-2.75-2-2.75-2v-1a1 1 0 0 1 1-1Zm3.5-2.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm3 5.75h-1.21a3.04 3.04 0 0 0 .2-.97l.01-.03v-1a2 2 0 0 0-.27-1h2.27a1 1 0 0 1 1 1 2 2 0 0 1-2 2Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup28Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup28FilledIcon, 'ContactCardGroup28Filled');

const ContactCardGroup28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 12.25c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 2.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM15 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-8 2.5a1 1 0 0 0-1 1v1s0 2 2.75 2 2.75-2 2.75-2v-1a1 1 0 0 0-1-1H7Zm3.5-2.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm3 5.75h-1.21a3.04 3.04 0 0 0 .2-.93v-.02h.01V15.5a2 2 0 0 0-.27-1h2.27a1 1 0 0 1 1 1 2 2 0 0 1-2 2ZM2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.75A3.75 3.75 0 0 1 2 20.25V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v12.5c0 1.24 1.01 2.25 2.25 2.25h16.5c1.24 0 2.25-1 2.25-2.25V7.75c0-1.24-1-2.25-2.25-2.25H5.75Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup28Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup28RegularIcon, 'ContactCardGroup28Regular');

const ContactCardGroup48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5C4 37.2 6.8 40 10.25 40h27.5C41.2 40 44 37.2 44 33.75v-19.5C44 10.8 41.2 8 37.75 8h-27.5ZM18 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4.5 3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm6.5-1.75c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 4.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5a1.25 1.25 0 1 1 0-2.5ZM10 26.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5v-1.5ZM23 30h-1.47a5.47 5.47 0 0 0 .47-1.94V26.5c0-.54-.12-1.05-.34-1.5h2.84c.83 0 1.5.67 1.5 1.5v.5a3 3 0 0 1-3 3Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup48Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup48FilledIcon, 'ContactCardGroup48Filled');

const ContactCardGroup48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4.5 3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6.5-1.75c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 4.25a1.25 1.25 0 1 0 0 2.5h6.5a1.25 1.25 0 1 0 0-2.5h-6.5ZM10 26.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5v-1.5Zm11.87 2.51c-.07.29-.18.63-.34.99H23a3 3 0 0 0 3-3v-.5c0-.83-.67-1.5-1.5-1.5h-2.84c.22.45.34.96.34 1.5v1.56a3.15 3.15 0 0 1-.02.3c-.02.16-.05.39-.11.65ZM4 14.25C4 10.8 6.8 8 10.25 8h27.5C41.2 8 44 10.8 44 14.25v19.5C44 37.2 41.2 40 37.75 40h-27.5A6.25 6.25 0 0 1 4 33.75v-19.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v19.5a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-19.5a3.75 3.75 0 0 0-3.75-3.75h-27.5Z",
    fill: primaryFill
  }));
};

exports.ContactCardGroup48Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardGroup48RegularIcon, 'ContactCardGroup48Regular');

const ContactCardLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 3C1.78 3 1 3.78 1 4.75v6.5c0 .97.78 1.75 1.75 1.75h2.29a3.53 3.53 0 0 1 .3-2c-.34 0-.69-.03-1.02-.12h-.05A1.67 1.67 0 0 1 3 9.24c0-.47.38-.86.86-.86h2.8c.44 0 .8.33.86.75.3-.1.64-.14.98-.14h4c.98 0 1.86.4 2.5 1.05v-5.3C15 3.78 14.22 3 13.25 3H2.75Zm3.87 3.36a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0ZM9 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 10a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ContactCardLink16Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardLink16FilledIcon, 'ContactCardLink16Filled');

const ContactCardLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 3C1.78 3 1 3.78 1 4.75v6.5c0 .97.78 1.75 1.75 1.75h2.29a3.53 3.53 0 0 1 0-1H2.75a.75.75 0 0 1-.75-.75v-6.5c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v4.59c.37.17.71.42 1 .71v-5.3C15 3.78 14.22 3 13.25 3H2.75Zm4.77 6.14a.86.86 0 0 0-.86-.75h-2.8a.86.86 0 0 0-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.33.09.68.13 1.02.12a3.5 3.5 0 0 1 2.18-1.86ZM9 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.26 7.71a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71ZM8.5 10a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ContactCardLink16Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardLink16RegularIcon, 'ContactCardLink16Regular');

const ContactCardLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v5.84a3.49 3.49 0 0 0-1.5-.34h-4a3.5 3.5 0 0 0-3.16 5H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm3 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm4 3.2a.95.95 0 0 0-.95-.95h-3.1a.95.95 0 0 0-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ContactCardLink20Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardLink20FilledIcon, 'ContactCardLink20Filled');

const ContactCardLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.55.75a.95.95 0 0 0-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8a.95.95 0 0 0-.95-.94h-3.1ZM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.75 4C3.78 4 3 4.78 3 5.75v8.5c0 .97.78 1.75 1.75 1.75h5.59a3.47 3.47 0 0 1-.3-1H4.75a.75.75 0 0 1-.75-.75v-8.5c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v5.29c.35.05.69.15 1 .3V5.75C19 4.78 18.22 4 17.25 4H4.75Zm8.75 8a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ContactCardLink20Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardLink20RegularIcon, 'ContactCardLink20Regular');

const ContactCardRibbon16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v1.79a3.98 3.98 0 0 0-2.37-.52.5.5 0 0 0-.13-.02h-3a.5.5 0 0 0 0 1h.85a4 4 0 0 0-1.28 2.24.5.5 0 0 0-.05.39 4.05 4.05 0 0 0 .98 3.02V13H2.75C1.78 13 1 12.22 1 11.25v-6.5Zm4.26 2.96a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71Zm-1.4.68a.86.86 0 0 0-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.62.16 1.27.16 1.88 0h.06a1.67 1.67 0 0 0 1.26-1.63.86.86 0 0 0-.86-.86h-2.8ZM16 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L13 15l1.62.97c.17.1.38-.03.38-.22v-2.29Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon16Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon16FilledIcon, 'ContactCardRibbon16Filled');

const ContactCardRibbon16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v1.79c-.3-.18-.65-.32-1-.41V4.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0-.75.75v6.5c0 .41.34.75.75.75h6.79a4 4 0 0 0 .46.65V13H2.75C1.78 13 1 12.22 1 11.25v-6.5ZM12.5 6a.5.5 0 0 1 .13.02c-.87.08-1.66.43-2.28.98H9.5a.5.5 0 0 1 0-1h3ZM5.26 7.71a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71Zm-1.4.68a.86.86 0 0 0-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.62.16 1.27.16 1.88 0h.06a1.67 1.67 0 0 0 1.26-1.63.86.86 0 0 0-.86-.86h-2.8ZM16 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L13 15l1.62.97c.17.1.38-.03.38-.22v-2.29Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon16Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon16RegularIcon, 'ContactCardRibbon16Regular');

const ContactCardRibbon20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5H13v-.35a3.98 3.98 0 0 1-.87-3.65h-.63a.5.5 0 0 1 0-1h1.04A4 4 0 0 1 18 9.54V5.5c0-.83-.67-1.5-1.5-1.5h-13Zm3 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.55.75c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8 0-.52.42-.94.95-.94h3.1ZM11 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm8 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon20Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon20FilledIcon, 'ContactCardRibbon20Filled');

const ContactCardRibbon20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4 3.2c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h.63c.09-.35.23-.7.4-1H11.5Zm-7.75 4h8.79c.13.23.28.45.46.65V16H3.75C2.78 16 2 15.22 2 14.25v-8.5C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v3.79c-.3-.18-.65-.32-1-.41V5.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v8.5c0 .41.34.75.75.75ZM19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon20Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon20RegularIcon, 'ContactCardRibbon20Regular');

const ContactCardRibbon24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v5.5A4.48 4.48 0 0 0 15.76 13h-2.61a.75.75 0 0 0 0 1.49H15.11a4.51 4.51 0 0 0 .89 3.84V20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm-13.5 8.5c-.38 0-.7.28-.74.65l-.01.1v.6c.17 1.11 1.1 1.65 2.5 1.65 1.33 0 2.24-.49 2.46-1.5l.03-.15.01-.1v-.5c0-.38-.28-.7-.65-.74l-.1-.01h-3.5ZM8 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75 1h-4.6a.75.75 0 0 0 0 1.5H17.85a.75.75 0 0 0 0-1.5h-.1Zm5.25 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-6 3.74v3.05c0 .63.76.95 1.21.5l1.29-1.29 1.29 1.29a.71.71 0 0 0 1.21-.5v-3.05a4.48 4.48 0 0 1-5 0Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon24Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon24FilledIcon, 'ContactCardRibbon24Filled');

const ContactCardRibbon24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v5.5c-.45-.3-.96-.52-1.5-.64V6.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v11.5c0 .42.34.75.75.75H16V20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm-6.5 9h2.51c-.3.45-.52.95-.65 1.5h-1.86a.75.75 0 0 1-.1-1.5h.1Zm-3.5-.5c.41 0 .75.34.75.75v.6c-.17 1.11-1.1 1.65-2.5 1.65s-2.33-.54-2.5-1.65v-.6c0-.41.34-.75.75-.75h3.5ZM8 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.25 1h4.5a.75.75 0 0 1 .1 1.5h-4.6a.75.75 0 0 1-.1-1.5h.1Zm9.75 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-6 3.74v3.05c0 .63.76.95 1.21.5l1.29-1.29 1.29 1.29a.71.71 0 0 0 1.21-.5v-3.05a4.48 4.48 0 0 1-5 0Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon24Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon24RegularIcon, 'ContactCardRibbon24Regular');

const ContactCardRibbon28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v14.5A2.75 2.75 0 0 0 4.75 24H18v-2.34a5.48 5.48 0 0 1-.63-5.16h-1.62a.75.75 0 0 1 0-1.5h2.5a5.49 5.49 0 0 1 7.75-.74V6.75A2.75 2.75 0 0 0 23.25 4H4.75ZM15 11.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-3.75 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7 14.5h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 0 1 1-1Zm19 1.17a4.48 4.48 0 0 1 0 5.66 4.5 4.5 0 1 1 0-5.66Zm-1.1 7.78a5.47 5.47 0 0 1-2.35.55h-.1a5.7 5.7 0 0 1-2.45-.6 5.5 5.5 0 0 1-1-.66v3.56a.7.7 0 0 0 1.13.55L22.5 25l2.37 1.85A.7.7 0 0 0 26 26.3v-3.56c-.34.28-.7.52-1.1.71Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon28Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon28FilledIcon, 'ContactCardRibbon28Filled');

const ContactCardRibbon28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 11.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h1.62a5.5 5.5 0 0 1 .89-1.5h-2.51Zm-11 7.5H18V24H4.75A2.75 2.75 0 0 1 2 21.25V6.75A2.75 2.75 0 0 1 4.75 4h18.5A2.75 2.75 0 0 1 26 6.75v7.5a5.5 5.5 0 0 0-1.5-.87V6.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25Zm17.75.5a4.5 4.5 0 1 0 0-8.98 4.5 4.5 0 0 0 0 8.98Zm2.4.45a5.47 5.47 0 0 1-2.35.55h-.1a5.7 5.7 0 0 1-2.45-.6 5.5 5.5 0 0 1-1-.66v3.56a.7.7 0 0 0 1.13.55L22.5 25l2.37 1.85A.7.7 0 0 0 26 26.3v-3.56c-.34.28-.7.52-1.1.71Zm-13.65-11.7a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7 14.5h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon28Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon28RegularIcon, 'ContactCardRibbon28Regular');

const ContactCardRibbon32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 4A3.25 3.25 0 0 0 2 7.25v17.5C2 26.55 3.46 28 5.25 28H19.5v-3.9a6.97 6.97 0 0 1-.84-5.1H18a1 1 0 1 1 0-2h1.44c.78-1.35 2-2.41 3.46-3H18a1 1 0 1 1 0-2h7a1 1 0 0 1 .86 1.5c1.57.09 3 .69 4.14 1.64V7.25C30 5.45 28.54 4 26.75 4H5.25ZM13 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5Zm22.88 8.14a6.76 6.76 0 0 1-4.37 1.61h-.02A6.72 6.72 0 0 1 21 25.53v4.52c0 .74.81 1.2 1.44.81L25.5 29l3.06 1.86a.95.95 0 0 0 1.44-.81v-4.52l-.12.1Zm-.71-1.04a5.53 5.53 0 0 0 .83-7.26 5.5 5.5 0 1 0-.83 7.26Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon32Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon32FilledIcon, 'ContactCardRibbon32Filled');

const ContactCardRibbon32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 13a1 1 0 0 1 1-1h7a1 1 0 0 1 .86 1.5 7.1 7.1 0 0 0-2.96.5H18a1 1 0 0 1-1-1Zm11-5.75v6.71a7 7 0 0 1 2 1.18V7.25C30 5.45 28.54 4 26.75 4H5.25A3.25 3.25 0 0 0 2 7.25v17.5C2 26.55 3.46 28 5.25 28H19.5v-2H5.25C4.56 26 4 25.44 4 24.75V7.25C4 6.56 4.56 6 5.25 6h21.5c.69 0 1.25.56 1.25 1.25ZM18 17h1.44a6.95 6.95 0 0 0-.78 2H18a1 1 0 1 1 0-2Zm3.26 0a5.49 5.49 0 0 0 4.24 9 5.48 5.48 0 0 0 4.5-8.66A5.53 5.53 0 0 0 25.5 15c-1.7 0-3.23.78-4.24 2Zm1.24 9.55a6.74 6.74 0 0 1-1.5-1.02v4.52c0 .74.81 1.2 1.44.81L25.5 29l3.06 1.86a.95.95 0 0 0 1.44-.81v-4.52a6.62 6.62 0 0 1-1.5 1.02c-.9.45-1.92.7-2.99.7h-.02a6.72 6.72 0 0 1-2.99-.7ZM13 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon32Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon32RegularIcon, 'ContactCardRibbon32Regular');

const ContactCardRibbon48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5C4 38.1 5.9 40 8.25 40H31v-3.67a9.46 9.46 0 0 1-1.79-7.83h-2.96a1.25 1.25 0 1 1 0-2.5h3.88a9.53 9.53 0 0 1 5.32-4.5h-9.2a1.25 1.25 0 1 1 0-2.5h9.5a1.25 1.25 0 0 1 .82 2.2A9.55 9.55 0 0 1 44 22.75v-10.5C44 9.9 42.1 8 39.75 8H8.25ZM19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5ZM38.5 38a7.48 7.48 0 0 0 7.5-7.5 7.47 7.47 0 0 0-7.5-7.5 7.49 7.49 0 1 0 0 15Zm3.59 1.3A9.48 9.48 0 0 0 44 38.25v6.7c0 .86-.96 1.35-1.65.85L38.5 43l-3.85 2.8c-.69.5-1.65 0-1.65-.84v-6.71A9.48 9.48 0 0 0 38.44 40h.12a9.47 9.47 0 0 0 3.53-.7Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon48Filled = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon48FilledIcon, 'ContactCardRibbon48Filled');

const ContactCardRibbon48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5Zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 0 1 .82 2.2c-.38.08-.76.18-1.12.3h-9.2c-.69 0-1.25-.56-1.25-1.25Zm16.5-8v9.23c.9.3 1.74.73 2.5 1.27v-10.5C44 9.9 42.1 8 39.75 8H8.25A4.25 4.25 0 0 0 4 12.25v23.5C4 38.1 5.9 40 8.25 40H31v-2.5H8.25c-.97 0-1.75-.78-1.75-1.75v-23.5c0-.97.78-1.75 1.75-1.75h31.5c.97 0 1.75.78 1.75 1.75ZM26.25 26h3.88a9.43 9.43 0 0 0-.92 2.5h-2.96a1.25 1.25 0 1 1 0-2.5Zm6.25 0a7.47 7.47 0 0 0-1.5 4.5 7.5 7.5 0 1 0 1.5-4.5Zm6.06 14A9.47 9.47 0 0 0 44 38.25v6.7c0 .86-.96 1.35-1.65.85L38.5 43l-3.85 2.8c-.69.5-1.65 0-1.65-.84v-6.71A9.48 9.48 0 0 0 38.44 40h.12Z",
    fill: primaryFill
  }));
};

exports.ContactCardRibbon48Regular = wrapIcon_1.default( /*#__PURE__*/ContactCardRibbon48RegularIcon, 'ContactCardRibbon48Regular');

const ContentSettings16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h6.5A2.75 2.75 0 0 1 14 4.75v1.5a5.5 5.5 0 0 0-1.5-.88V5h-9v6.25c0 .7.56 1.25 1.25 1.25h.62c.22.55.52 1.05.89 1.5H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM5 6h2.34c-.4.28-.77.62-1.08 1H5.5v1.2a5.48 5.48 0 0 0-.41 3.3h-.1a.5.5 0 0 1-.5-.5V6.5c0-.28.23-.5.5-.5Zm1.5 2.72.36.35a2 2 0 0 1 0 2.86l-.36.35c.13.31.3.6.49.87l.4-.11a2 2 0 0 1 2.51 1.45l.12.48a4.26 4.26 0 0 0 .96 0l.12-.48a2 2 0 0 1 2.52-1.45l.4.11c.18-.27.35-.56.47-.87l-.35-.35a2 2 0 0 1 0-2.86l.35-.35c-.12-.31-.29-.6-.48-.87l-.4.11a2 2 0 0 1-2.51-1.45l-.12-.48a4.25 4.25 0 0 0-.96 0l-.12.48a2 2 0 0 1-2.52 1.45l-.4-.11c-.18.27-.35.56-.48.87Zm4 2.78a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ContentSettings16Filled = wrapIcon_1.default( /*#__PURE__*/ContentSettings16FilledIcon, 'ContentSettings16Filled');

const ContentSettings16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v1.76a5.5 5.5 0 0 0-1-.66V5H3v6.5c0 .83.67 1.5 1.5 1.5h1.1c.19.36.4.7.66 1H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM3.09 4h9.83c-.2-.58-.76-1-1.42-1h-7c-.65 0-1.2.42-1.41 1ZM4.5 6h2.83c-.4.28-.77.62-1.08 1H5v3.28a5.6 5.6 0 0 0 0 .44V11h.01c.03.34.1.68.19 1h-.7a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5Zm2 2.72.35.35a2 2 0 0 1 0 2.86l-.35.35c.13.31.29.6.48.87l.4-.11a2 2 0 0 1 2.52 1.45l.11.48a4.26 4.26 0 0 0 .96 0l.12-.48a2 2 0 0 1 2.52-1.45l.4.11c.19-.27.35-.56.48-.87l-.36-.35a2 2 0 0 1 0-2.86l.36-.35c-.13-.31-.3-.6-.48-.87l-.4.11a2 2 0 0 1-2.52-1.45l-.12-.48a4.25 4.25 0 0 0-.96 0l-.11.48a2 2 0 0 1-2.52 1.45l-.4-.11c-.2.27-.35.56-.48.87Zm4 2.78a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ContentSettings16Regular = wrapIcon_1.default( /*#__PURE__*/ContentSettings16RegularIcon, 'ContentSettings16Regular');

const ContentSettings20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 5.25A2.75 2.75 0 0 1 5.25 2.5h9.5a2.75 2.75 0 0 1 2.75 2.75v4.64c-.46-.3-.96-.53-1.5-.68V7H4v7.75c0 .69.56 1.25 1.25 1.25h3.96c.15.54.38 1.04.68 1.5H5.25a2.75 2.75 0 0 1-2.75-2.75v-9.5ZM9 14.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5ZM6 14V9h2v5H6Zm4-5.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm2.07 2.94a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ContentSettings20Filled = wrapIcon_1.default( /*#__PURE__*/ContentSettings20FilledIcon, 'ContentSettings20Filled');

const ContentSettings20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5Zm5 3v6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-6c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5ZM6 9v5h2V9H6Zm4-.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm2.07 2.94a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ContentSettings20Regular = wrapIcon_1.default( /*#__PURE__*/ContentSettings20RegularIcon, 'ContentSettings20Regular');

const ContentSettings24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.93 3H6.07A3.25 3.25 0 0 0 3 6.26v11.68A3.25 3.25 0 0 0 6.26 21h5.77a6.46 6.46 0 0 1-.85-2H6.12A1.25 1.25 0 0 1 5 17.74V8h14v3.17c.72.17 1.4.46 2 .85V6.07A3.25 3.25 0 0 0 17.93 3ZM11 10.16a.75.75 0 0 0-.74-.65h-3.6a.75.75 0 0 0-.65.75v7.1c.06.37.37.65.75.65h3.6a.75.75 0 0 0 .65-.75v-7.1ZM7.5 11h2v5.5h-2V11Zm10.5-.75a.75.75 0 0 0-.75-.75h-4.6a.75.75 0 0 0 .1 1.5h4.6a.75.75 0 0 0 .65-.75Zm-3.72 3.73a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 .01 1.8l.54.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.ContentSettings24Filled = wrapIcon_1.default( /*#__PURE__*/ContentSettings24FilledIcon, 'ContentSettings24Filled');

const ContentSettings24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.75 3h.19A3.25 3.25 0 0 1 21 6.08V12.02c-.46-.3-.97-.53-1.5-.7V8h-15v9.75c0 .92.7 1.67 1.6 1.74l.15.01h5.06c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 0 1-3.24-3.07L3 17.75V6.25a3.25 3.25 0 0 1 3.07-3.24L6.25 3h11.5Zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v.25h15v-.25c0-.97-.78-1.75-1.75-1.75Zm-7.5 5c.38 0 .7.28.74.65l.01.1v7c0 .38-.28.7-.65.74l-.1.01h-3.5a.75.75 0 0 1-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01h3.5ZM9.5 11h-2v5.5h2V11Zm8.5-.75a.75.75 0 0 0-.75-.75h-4.6a.75.75 0 0 0 .1 1.5h4.6a.75.75 0 0 0 .65-.75Zm-3.72 3.73a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 .01 1.8l.54.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.5-.52a2 2 0 0 1 2.89 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.ContentSettings24Regular = wrapIcon_1.default( /*#__PURE__*/ContentSettings24RegularIcon, 'ContentSettings24Regular');

const ContentSettings32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v5a9.99 9.99 0 0 0-2.5-1.37V10h-19v13A2.5 2.5 0 0 0 9 25.5h3.63A10 10 0 0 0 14 28H9a5 5 0 0 1-5-5V9Zm12 4v1c-.75.57-1.43 1.24-2 2v-2h-4v8h2c0 .68.07 1.35.2 2H9a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm.68 15.57.04-.16a4 4 0 0 0-2.9-5.02c-.12-.9-.1-1.82.08-2.74a4 4 0 0 0 2.88-4.99c.7-.6 1.5-1.1 2.34-1.43a4 4 0 0 0 5.8 0l.1-.12a7.97 7.97 0 0 1 2.3 1.32l-.04.16a4 4 0 0 0 2.9 5.02c.12.9.1 1.82-.08 2.74a4 4 0 0 0-2.88 4.99c-.7.61-1.5 1.1-2.34 1.43a4 4 0 0 0-5.8 0l-.1.12a7.97 7.97 0 0 1-2.3-1.32ZM20.85 24c1.06.61 2.44.22 3.08-.88.64-1.1.3-2.5-.78-3.12a2.27 2.27 0 0 0-3.08.89c-.64 1.1-.3 2.5.78 3.1Z",
    fill: primaryFill
  }));
};

exports.ContentSettings32Filled = wrapIcon_1.default( /*#__PURE__*/ContentSettings32FilledIcon, 'ContentSettings32Filled');

const ContentSettings32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h5a9.99 9.99 0 0 1-1.17-2H9a3 3 0 0 1-3-3V10h20v2.83c.72.32 1.39.71 2 1.17V9a5 5 0 0 0-5-5H9Zm16.83 4H6.17A3 3 0 0 1 9 6h14a3 3 0 0 1 2.83 2ZM16 14v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.2c-.13-.65-.2-1.32-.2-2h-2v-8h4v2c.57-.76 1.25-1.43 2-2Zm.68 14.57.04-.16a4 4 0 0 0-2.9-5.02c-.12-.9-.1-1.82.08-2.74a4 4 0 0 0 2.88-4.99c.7-.6 1.5-1.1 2.34-1.43a4 4 0 0 0 5.8 0l.1-.12a7.96 7.96 0 0 1 2.3 1.32l-.04.16a4 4 0 0 0 2.9 5.02c.12.9.1 1.82-.08 2.74a4 4 0 0 0-2.88 4.99c-.7.61-1.5 1.1-2.34 1.43a4 4 0 0 0-5.8 0l-.1.12a7.97 7.97 0 0 1-2.3-1.32ZM20.85 24c1.06.61 2.44.22 3.08-.88.64-1.1.29-2.5-.78-3.12a2.27 2.27 0 0 0-3.08.89c-.64 1.1-.3 2.5.78 3.1Z",
    fill: primaryFill
  }));
};

exports.ContentSettings32Regular = wrapIcon_1.default( /*#__PURE__*/ContentSettings32RegularIcon, 'ContentSettings32Regular');

const ContentView20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7H6v2h8V7Zm-2 5h2v1h-2v-1ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM5 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm7 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Zm-7 .5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.ContentView20Filled = wrapIcon_1.default( /*#__PURE__*/ContentView20FilledIcon, 'ContentView20Filled');

const ContentView20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm9 0H6v2h8V7Zm-2 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2Zm0 1h2v1h-2v-1Zm-7-.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

exports.ContentView20Regular = wrapIcon_1.default( /*#__PURE__*/ContentView20RegularIcon, 'ContentView20Regular');

const ContentView24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM6 8.25c0-.97.78-1.75 1.75-1.75h8.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-8.5C6.78 11.5 6 10.72 6 9.75v-1.5ZM7.75 8a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h8.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25h-8.5Zm-1 5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 16.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM15.25 13h1c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-1c0-.97.78-1.75 1.75-1.75ZM15 14.75c0-.14.11-.25.25-.25h1c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1a.25.25 0 0 1-.25-.25v-1Z",
    fill: primaryFill
  }));
};

exports.ContentView24Filled = wrapIcon_1.default( /*#__PURE__*/ContentView24FilledIcon, 'ContentView24Filled');

const ContentView24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25ZM6 8.25c0-.97.78-1.75 1.75-1.75h8.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-8.5C6.78 11.5 6 10.72 6 9.75v-1.5ZM7.75 8a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h8.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25h-8.5Zm-1 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM6 16.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM15.25 13c-.97 0-1.75.78-1.75 1.75v1c0 .97.78 1.75 1.75 1.75h1c.97 0 1.75-.78 1.75-1.75v-1c0-.97-.78-1.75-1.75-1.75h-1ZM15 14.75c0-.14.11-.25.25-.25h1c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1a.25.25 0 0 1-.25-.25v-1Z",
    fill: primaryFill
  }));
};

exports.ContentView24Regular = wrapIcon_1.default( /*#__PURE__*/ContentView24RegularIcon, 'ContentView24Regular');

const ContentView28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM6 9c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Zm2-.5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h12a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H8ZM6.75 15h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5ZM6 19.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 6 19.5Zm11.25-5h3c.97 0 1.75.78 1.75 1.75v3c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-3c0-.97.78-1.75 1.75-1.75ZM17 16.25c0-.14.11-.25.25-.25h3c.14 0 .25.11.25.25v3c0 .14-.11.25-.25.25h-3a.25.25 0 0 1-.25-.25v-3Z",
    fill: primaryFill
  }));
};

exports.ContentView28Filled = wrapIcon_1.default( /*#__PURE__*/ContentView28FilledIcon, 'ContentView28Filled');

const ContentView28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM4.5 6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25V6.75ZM6 9c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Zm2-.5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h12a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H8Zm-2 7.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm8.75-2.5c0-.97.78-1.75 1.75-1.75h3c.97 0 1.75.78 1.75 1.75v3c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-3Zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .14.11.25.25.25h3c.14 0 .25-.11.25-.25v-3a.25.25 0 0 0-.25-.25h-3Z",
    fill: primaryFill
  }));
};

exports.ContentView28Regular = wrapIcon_1.default( /*#__PURE__*/ContentView28RegularIcon, 'ContentView28Regular');

const ContentView32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 11H10v3h12v-3Zm-3 9h3v2h-3v-2ZM9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9Zm-1 7c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3Zm11 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2ZM8 19a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Zm1 3h5a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2Z",
    fill: primaryFill
  }));
};

exports.ContentView32Filled = wrapIcon_1.default( /*#__PURE__*/ContentView32FilledIcon, 'ContentView32Filled');

const ContentView32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 11c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3Zm14 0H10v3h12v-3Zm-3 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3Zm0 2h3v2h-3v-2ZM8 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9ZM9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9ZM6 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z",
    fill: primaryFill
  }));
};

exports.ContentView32Regular = wrapIcon_1.default( /*#__PURE__*/ContentView32RegularIcon, 'ContentView32Regular');

const ContentViewGallery20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 7H6v2h3V7ZM3 6a3 3 0 0 1 3-3h6v14H6a3 3 0 0 1-3-3V6Zm2 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 13.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm8 3.5h1a3 3 0 0 0 3-3v-1h-4v4Zm4-5V8h-4v4h4Zm0-5V6a3 3 0 0 0-3-3h-1v4h4Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery20Filled = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery20FilledIcon, 'ContentViewGallery20Filled');

const ContentViewGallery20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6Zm0 1h3v2H6V7Zm-1 4.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm8 10V4H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5Zm3 0a2 2 0 0 0 2-2v-1h-4v3h2Zm2-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 5V8h-4v4h4Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery20Regular = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery20RegularIcon, 'ContentViewGallery20Regular');

const ContentViewGallery24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3h8.25v18H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3Zm11.5 18H16v-5h5v1.75c0 1.8-1.46 3.25-3.25 3.25ZM21 14.5h-5v-5h5v5ZM16 8V3h1.75C19.55 3 21 4.46 21 6.25V8h-5ZM6 13.75c0 .41.34.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75ZM7.25 6.5C6.56 6.5 6 7.06 6 7.75v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM7.5 10V8h3v2h-3ZM6 16.75c0 .41.34.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery24Filled = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery24FilledIcon, 'ContentViewGallery24Filled');

const ContentViewGallery24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h7.25v-15H6.25Zm11.5 15c.97 0 1.75-.78 1.75-1.75V16H15v3.5h2.75Zm1.75-5v-5H15v5h4.5Zm0-6.5V6.25c0-.97-.78-1.75-1.75-1.75H15V8h4.5ZM6 13.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM7.25 6.5C6.56 6.5 6 7.06 6 7.75v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM7.5 10V8h3v2h-3ZM6 16.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery24Regular = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery24RegularIcon, 'ContentViewGallery24Regular');

const ContentViewGallery28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3H17v22H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3ZM18.5 17v-6H25v6h-6.5Zm0 8v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25H18.5Zm0-22v6.5H25V6.75A3.75 3.75 0 0 0 21.25 3H18.5ZM7.75 7.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-5ZM8 12V9h4.5v3H8Zm-1.5 4.25c0 .41.34.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75ZM7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery28Filled = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery28FilledIcon, 'ContentViewGallery28Filled');

const ContentViewGallery28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM6.75 4.5c-1.24 0-2.25 1-2.25 2.25v14.5c0 1.24 1 2.25 2.25 2.25H16v-19H6.75Zm14.5 19c1.24 0 2.25-1 2.25-2.25V18.5h-6v5h3.75ZM23.5 17v-6h-6v6h6Zm0-7.5V6.75c0-1.24-1-2.25-2.25-2.25H17.5v5h6Zm-15.75-2c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-5ZM8 12V9h4.5v3H8Zm-1.5 4.25c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z",
    fill: primaryFill
  }));
};

exports.ContentViewGallery28Regular = wrapIcon_1.default( /*#__PURE__*/ContentViewGallery28RegularIcon, 'ContentViewGallery28Regular');

const ContractDownLeft16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3C3.67 3 3 3.67 3 4.5V8h3.23C7.21 8 8 8.8 8 9.77V13h3.5c.83 0 1.5-.67 1.5-1.5V9.27a.5.5 0 0 1 1 0v2.23a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h2.23a.5.5 0 0 1 0 1H4.5Zm9 3h-2.8l3.15-3.15a.5.5 0 0 0-.7-.7L10 5.29V2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .52.5h3.98a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft16Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft16FilledIcon, 'ContractDownLeft16Filled');

const ContractDownLeft16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4.5C3 3.67 3.67 3 4.5 3h2.23a.5.5 0 0 0 0-1H4.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5V9.27a.5.5 0 0 0-1 0v2.23c0 .83-.67 1.5-1.5 1.5H8V9.77C8 8.79 7.2 8 6.23 8H3V4.5ZM3 9h3.23c.43 0 .77.34.77.77V13H4.5A1.5 1.5 0 0 1 3 11.5V9Zm7.7-3h2.8a.5.5 0 0 1 0 1H9.52A.5.5 0 0 1 9 6.5v-4a.5.5 0 0 1 1 0v2.8l3.15-3.15a.5.5 0 0 1 .7.7L10.71 6Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft16Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft16RegularIcon, 'ContractDownLeft16Regular');

const ContractDownLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.7 8 4.15-4.15a.5.5 0 0 0-.7-.7L12 7.29V3.5a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-3.8ZM6 4a2 2 0 0 0-2 2v4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft20Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft20FilledIcon, 'ContractDownLeft20Filled');

const ContractDownLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.7 8 4.15-4.15a.5.5 0 0 0-.7-.7L12 7.29V3.5a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-3.8ZM4 6c0-1.1.9-2 2-2h2.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-4v-4a2 2 0 0 0-2-2H4V6Zm0 5h4a1 1 0 0 1 1 1v4H6a2 2 0 0 1-2-2v-3Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft20Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft20RegularIcon, 'ContractDownLeft20Regular');

const ContractDownLeft24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 4.5c-.97 0-1.75.78-1.75 1.75V12h4.75A2.75 2.75 0 0 1 12 14.75v4.75h5.75c.97 0 1.75-.78 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h4a.75.75 0 0 1 0 1.5h-4Zm9.31 5h4.69a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 1.5 0v4.69l5.22-5.22a.75.75 0 1 1 1.06 1.06L15.56 9.5Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft24Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft24FilledIcon, 'ContractDownLeft24Filled');

const ContractDownLeft24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 6.25V12h4.75A2.75 2.75 0 0 1 12 14.75v4.75h5.75c.97 0 1.75-.78 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h4a.75.75 0 0 1 0 1.5h-4c-.97 0-1.75.78-1.75 1.75Zm0 7.25v4.25c0 .97.78 1.75 1.75 1.75h4.25v-4.75c0-.69-.56-1.25-1.25-1.25H4.5Zm11.06-4h4.69a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 1.5 0v4.69l5.22-5.22a.75.75 0 1 1 1.06 1.06L15.56 9.5Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft24Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft24RegularIcon, 'ContractDownLeft24Regular');

const ContractDownLeft28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 4.5c-1.24 0-2.25 1-2.25 2.25V14h6.75A2.75 2.75 0 0 1 14 16.75v6.75h7.25c1.24 0 2.25-1 2.25-2.25v-5a.75.75 0 0 1 1.5 0v5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h5a.75.75 0 0 1 0 1.5h-5ZM18.06 11h6.19a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75v-8a.75.75 0 1 1 1.5 0v6.19l6.72-6.72a.75.75 0 1 1 1.06 1.06L18.06 11Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft28Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft28FilledIcon, 'ContractDownLeft28Filled');

const ContractDownLeft28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24.78 4.28a.75.75 0 0 0-1.06-1.06L17 9.94V3.75a.75.75 0 0 0-1.5 0v8c0 .41.34.75.75.75h8a.75.75 0 0 0 0-1.5h-6.19l6.72-6.72ZM4.5 6.75V14h6.75A2.75 2.75 0 0 1 14 16.75v6.75h7.25c1.24 0 2.25-1 2.25-2.25v-5a.75.75 0 0 1 1.5 0v5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h5a.75.75 0 0 1 0 1.5h-5c-1.24 0-2.25 1-2.25 2.25Zm0 8.75v5.75c0 1.24 1 2.25 2.25 2.25h5.75v-6.75c0-.69-.56-1.25-1.25-1.25H4.5Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft28Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft28RegularIcon, 'ContractDownLeft28Regular');

const ContractDownLeft32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m21.41 12 7.3-7.3a1 1 0 0 0-1.42-1.4L20 10.58V4a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-6.59ZM7.5 5A2.5 2.5 0 0 0 5 7.5V16h7.23A3.77 3.77 0 0 1 16 19.77V27h8.5a2.5 2.5 0 0 0 2.5-2.5V19a1 1 0 1 1 2 0v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3H13a1 1 0 1 1 0 2H7.5Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft32Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft32FilledIcon, 'ContractDownLeft32Filled');

const ContractDownLeft32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7.5V16h7.23A3.77 3.77 0 0 1 16 19.77V27h8.5a2.5 2.5 0 0 0 2.5-2.5V19a1 1 0 1 1 2 0v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3H13a1 1 0 1 1 0 2H7.5A2.5 2.5 0 0 0 5 7.5ZM5 18v6.5A2.5 2.5 0 0 0 7.5 27H14v-7.23c0-.98-.8-1.77-1.77-1.77H5Zm16.41-6H28a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v6.59l7.3-7.3a1 1 0 1 1 1.4 1.42L21.42 12Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft32Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft32RegularIcon, 'ContractDownLeft32Regular');

const ContractDownLeft48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.25 8.5a3.75 3.75 0 0 0-3.75 3.75V24h10.25c2.9 0 5.25 2.35 5.25 5.25V39.5h11.75a3.75 3.75 0 0 0 3.75-3.75v-7.88a1.25 1.25 0 1 1 2.5 0v7.88C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5C6 8.8 8.8 6 12.25 6h7.88a1.25 1.25 0 1 1 0 2.5h-7.88ZM42 19.75c0 .69-.56 1.25-1.25 1.25h-12.5c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 1 1 2.5 0v9.48L39.87 6.37a1.25 1.25 0 0 1 1.76 1.76L31.27 18.5h9.48c.69 0 1.25.56 1.25 1.25Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft48Filled = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft48FilledIcon, 'ContractDownLeft48Filled');

const ContractDownLeft48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M41.63 8.13a1.25 1.25 0 0 0-1.76-1.76L29.5 16.73V7.25a1.25 1.25 0 0 0-2.5 0v12.5c0 .7.56 1.25 1.25 1.25h12.5a1.25 1.25 0 1 0 0-2.5h-9.48L41.63 8.13ZM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h7.88a1.25 1.25 0 1 0 0-2.5h-7.88A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-7.88a1.25 1.25 0 0 0-2.5 0v7.88a3.75 3.75 0 0 1-3.75 3.75H24V29.25c0-2.9-2.35-5.25-5.25-5.25H8.5V12.25Zm0 14.25h10.25a2.75 2.75 0 0 1 2.75 2.75V39.5h-9.25a3.75 3.75 0 0 1-3.75-3.75V26.5Z",
    fill: primaryFill
  }));
};

exports.ContractDownLeft48Regular = wrapIcon_1.default( /*#__PURE__*/ContractDownLeft48RegularIcon, 'ContractDownLeft48Regular');

const ControlButton20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H6Zm3 .5a.5.5 0 0 0-1 0V9h-.5a.5.5 0 0 0 0 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 0 0 0-1h-.25a.25.25 0 0 1-.25-.25V10h.5a.5.5 0 0 0 0-1H9V7.5Zm7 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm-4 3c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1c-.83 0-1.5.67-1.5 1.5v2a.5.5 0 0 0 1 0v-2Z",
    fill: primaryFill
  }));
};

exports.ControlButton20Filled = wrapIcon_1.default( /*#__PURE__*/ControlButton20FilledIcon, 'ControlButton20Filled');

const ControlButton20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H6Zm3 .5a.5.5 0 0 0-1 0V9h-.5a.5.5 0 0 0 0 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 0 0 0-1h-.25a.25.25 0 0 1-.25-.25V10h.5a.5.5 0 0 0 0-1H9V7.5Zm7 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm-4 3c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1c-.83 0-1.5.67-1.5 1.5v2a.5.5 0 0 0 1 0v-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5Z",
    fill: primaryFill
  }));
};

exports.ControlButton20Regular = wrapIcon_1.default( /*#__PURE__*/ControlButton20RegularIcon, 'ControlButton20Regular');

const ControlButton24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM7.75 8A2.75 2.75 0 0 0 5 10.75v2.5A2.75 2.75 0 0 0 7.75 16h.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5h-.5Zm3.75.75a.75.75 0 0 0-1.5 0V11h-.25a.75.75 0 0 0 0 1.5H10V14c0 1.1.9 2 2 2h.25a.75.75 0 0 0 0-1.5H12a.5.5 0 0 1-.5-.5v-1.5h.75a.75.75 0 0 0 0-1.5h-.75V8.75Zm8 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-4 4.25c0-.28.22-.5.5-.5h.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V13Z",
    fill: primaryFill
  }));
};

exports.ControlButton24Filled = wrapIcon_1.default( /*#__PURE__*/ControlButton24FilledIcon, 'ControlButton24Filled');

const ControlButton24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.75 8A2.75 2.75 0 0 0 5 10.75v2.5A2.75 2.75 0 0 0 7.75 16h.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5h-.5Zm3.75.75a.75.75 0 0 0-1.5 0V11h-.25a.75.75 0 0 0 0 1.5H10V14c0 1.1.9 2 2 2h.25a.75.75 0 0 0 0-1.5H12a.5.5 0 0 1-.5-.5v-1.5h.75a.75.75 0 0 0 0-1.5h-.75V8.75Zm8 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-4 4.25c0-.28.22-.5.5-.5h.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V13ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25ZM3.5 7.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5Z",
    fill: primaryFill
  }));
};

exports.ControlButton24Regular = wrapIcon_1.default( /*#__PURE__*/ControlButton24RegularIcon, 'ControlButton24Regular');

const ConvertRange20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm12.5 5c.28 0 .5.22.5.5v2a2.5 2.5 0 0 1-2.5 2.5h-1.8l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L13.71 11h1.79c.83 0 1.5-.67 1.5-1.5v-2c0-.28.22-.5.5-.5Zm-5.62 3H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1.09a1.5 1.5 0 0 1-1.56-.35l-2-2a1.5 1.5 0 0 1 0-2.12l.44-.44ZM6.5 14c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ConvertRange20Filled = wrapIcon_1.default( /*#__PURE__*/ConvertRange20FilledIcon, 'ConvertRange20Filled');

const ConvertRange20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5ZM4 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Zm3 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H7Zm4.88-3.5H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1.09a1.5 1.5 0 0 1-1 0V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6.09c.07-.2.19-.4.35-.56l.44-.44ZM18 7.5a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L13.71 12h1.79A2.5 2.5 0 0 0 18 9.5v-2Z",
    fill: primaryFill
  }));
};

exports.ConvertRange20Regular = wrapIcon_1.default( /*#__PURE__*/ConvertRange20RegularIcon, 'ConvertRange20Regular');

const ConvertRange24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3C5.01 3 4 4 4 5.25v2.5C4 8.99 5 10 6.25 10h9.5C16.99 10 18 9 18 7.75v-2.5C18 4.01 17 3 15.75 3h-9.5Zm11.1 13.45-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2-2a.75.75 0 0 1-.07-.98l.07-.08 2-2a.75.75 0 0 1 1.13.98l-.07.08-.72.72h1.5c.65 0 1.18-.5 1.24-1.12l.01-.13V9.75a.75.75 0 0 1 1.5-.1V12a2.75 2.75 0 0 1-2.58 2.74l-.17.01h-1.5l.72.72c.27.26.3.68.07.98ZM14.27 12l-.78.79-.12.14-.03.03c-.5.68-.45 1.65.17 2.28l2.03 2.02.14.12.03.03c.68.5 1.66.45 2.28-.17l.01-.02v2.03c0 1.24-1 2.25-2.25 2.25h-9.5c-1.24 0-2.25-1-2.25-2.25v-5C4 13.01 5 12 6.25 12h8.02ZM8 16.75c0 .41.31.75.7.75h4.6c.39 0 .7-.34.7-.75s-.31-.75-.7-.75H8.7c-.39 0-.7.34-.7.75Z",
    fill: primaryFill
  }));
};

exports.ConvertRange24Filled = wrapIcon_1.default( /*#__PURE__*/ConvertRange24FilledIcon, 'ConvertRange24Filled');

const ConvertRange24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3C5.01 3 4 4 4 5.25v2.5C4 8.99 5 10 6.25 10h9.5C16.99 10 18 9 18 7.75v-2.5C18 4.01 17 3 15.75 3h-9.5ZM5.5 5.25c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-2.5ZM8.7 16c-.39 0-.7.34-.7.75s.31.75.7.75h4.6c.39 0 .7-.34.7-.75s-.31-.75-.7-.75H8.7Zm8.65.45-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2-2a.75.75 0 0 1-.07-.98l.07-.08 2-2a.75.75 0 0 1 1.13.98l-.07.08-.72.72h1.5c.65 0 1.18-.5 1.24-1.12l.01-.13V9.75a.75.75 0 0 1 1.5-.1V12a2.75 2.75 0 0 1-2.58 2.74l-.17.01h-1.5l.72.72c.27.26.3.68.07.98Zm.65 2.8v-2.03l-.01.02c-.4.4-.96.57-1.49.5v1.51c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75h6.82c.06-.2.15-.38.27-.54l.03-.03.12-.14.78-.79H6.25C5.01 12 4 13 4 14.25v5c0 1.24 1 2.25 2.25 2.25h9.5c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.ConvertRange24Regular = wrapIcon_1.default( /*#__PURE__*/ConvertRange24RegularIcon, 'ConvertRange24Regular');

const Cookies20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 0 1 9.87-7.78.5.5 0 0 1 .24.85 2 2 0 0 0 .95 3.38c.26.06.44.29.44.55A2 2 0 0 0 17 8.32a.5.5 0 0 1 .87.24A8 8 0 1 1 2 10Zm5-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.Cookies20Filled = wrapIcon_1.default( /*#__PURE__*/Cookies20FilledIcon, 'Cookies20Filled');

const Cookies20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-12a8 8 0 1 0 7.87 6.56.5.5 0 0 0-.87-.24A2 2 0 0 1 13.5 7c0-.26-.18-.5-.44-.55a2 2 0 0 1-.95-3.38.5.5 0 0 0-.24-.85A8.02 8.02 0 0 0 10 2Zm-7 8a7 7 0 0 1 7.87-6.95 2.99 2.99 0 0 0 1.65 4.29 3 3 0 0 0 4.47 2.26l.01.4a7 7 0 1 1-14 0Z",
    fill: primaryFill
  }));
};

exports.Cookies20Regular = wrapIcon_1.default( /*#__PURE__*/Cookies20RegularIcon, 'Cookies20Regular');

const Cookies24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2c.71 0 1.42.07 2.1.22.59.13.8.84.38 1.27a2.5 2.5 0 0 0 1.2 4.2c.38.08.62.43.58.8l-.01.26a2.5 2.5 0 0 0 4.37 1.66.75.75 0 0 1 1.31.4A10 10 0 1 1 12 2Zm3 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    fill: primaryFill
  }));
};

exports.Cookies24Filled = wrapIcon_1.default( /*#__PURE__*/Cookies24FilledIcon, 'Cookies24Filled');

const Cookies24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2c.71 0 1.42.07 2.1.22.59.13.8.84.38 1.27a2.5 2.5 0 0 0 1.2 4.2c.38.08.62.43.58.8l-.01.26a2.5 2.5 0 0 0 4.37 1.66.75.75 0 0 1 1.31.4A10 10 0 1 1 12 2Zm0 1.5a8.5 8.5 0 1 0 8.47 9.26l.02-.25v-.16l-.2.09c-.32.14-.67.23-1.04.28l-.27.02-.23.01a4 4 0 0 1-3.96-3.4l-.02-.2-.01-.19-.15-.06a4 4 0 0 1-2.34-3.23l-.02-.22v-.2a4 4 0 0 1 .21-1.3l.1-.23.08-.2-.28-.01L12 3.5ZM15 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

exports.Cookies24Regular = wrapIcon_1.default( /*#__PURE__*/Cookies24RegularIcon, 'Cookies24Regular');

const Copy16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.09v6.41A2.5 2.5 0 0 0 6.34 13h4.57c-.2.58-.76 1-1.41 1H6a3 3 0 0 1-3-3V5.5c0-.65.42-1.2 1-1.41ZM11.5 2c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7C5 2.67 5.67 2 6.5 2h5Z",
    fill: primaryFill
  }));
};

exports.Copy16Filled = wrapIcon_1.default( /*#__PURE__*/Copy16FilledIcon, 'Copy16Filled');

const Copy16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.09v6.41A2.5 2.5 0 0 0 6.34 13h4.57c-.2.58-.76 1-1.41 1H6a3 3 0 0 1-3-3V5.5c0-.65.42-1.2 1-1.41ZM11.5 2c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7C5 2.67 5.67 2 6.5 2h5Zm0 1h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.Copy16Regular = wrapIcon_1.default( /*#__PURE__*/Copy16RegularIcon, 'Copy16Regular');

const Copy20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z",
    fill: primaryFill
  }));
};

exports.Copy20Filled = wrapIcon_1.default( /*#__PURE__*/Copy20FilledIcon, 'Copy20Filled');

const Copy20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z",
    fill: primaryFill
  }));
};

exports.Copy20Regular = wrapIcon_1.default( /*#__PURE__*/Copy20RegularIcon, 'Copy20Regular');

const Copy24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12ZM17.75 2C18.99 2 20 3 20 4.25v13c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Z",
    fill: primaryFill
  }));
};

exports.Copy24Filled = wrapIcon_1.default( /*#__PURE__*/Copy24FilledIcon, 'Copy24Filled');

const Copy24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12ZM17.75 2C18.99 2 20 3 20 4.25v13c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-13a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
};

exports.Copy24Regular = wrapIcon_1.default( /*#__PURE__*/Copy24RegularIcon, 'Copy24Regular');

const CopyAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v5.2A5.5 5.5 0 0 0 9.2 16H8a2 2 0 0 1-2-2V4Zm4.26 14a5.5 5.5 0 0 1-.66-1H7.5A2.5 2.5 0 0 1 5 14.5V4.27A2 2 0 0 0 4 6v8.5A3.5 3.5 0 0 0 7.5 18h2.76ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.CopyAdd20Filled = wrapIcon_1.default( /*#__PURE__*/CopyAdd20FilledIcon, 'CopyAdd20Filled');

const CopyAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.2c-.08-.32-.15-.66-.18-1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H8Zm-.5 15h2.1c.18.36.4.7.66 1H7.5A3.5 3.5 0 0 1 4 14.5V6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.CopyAdd20Regular = wrapIcon_1.default( /*#__PURE__*/CopyAdd20RegularIcon, 'CopyAdd20Regular');

const CopyAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 6.75V4.63C3.63 4.93 3 5.77 3 6.75v10.5A4.75 4.75 0 0 0 7.75 22h5.06c-.42-.44-.79-.94-1.08-1.5H7.75a3.25 3.25 0 0 1-3.25-3.25V6.75ZM19 11.17a6.52 6.52 0 0 0-7.69 8.33H7.75c-1.24 0-2.25-1-2.25-2.25v-13C5.5 3.01 6.5 2 7.75 2h9C17.99 2 19 3 19 4.25v6.92Zm-1.5.83a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 1 0 1 0Z",
    fill: primaryFill
  }));
};

exports.CopyAdd24Filled = wrapIcon_1.default( /*#__PURE__*/CopyAdd24FilledIcon, 'CopyAdd24Filled');

const CopyAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 6.75V4.63C2.63 4.93 2 5.77 2 6.75v10.5A4.75 4.75 0 0 0 6.75 22h5.06c-.42-.44-.79-.94-1.08-1.5H6.75a3.25 3.25 0 0 1-3.25-3.25V6.75ZM18 11.17V4.25C18 3.01 17 2 15.75 2h-9C5.51 2 4.5 3 4.5 4.25v13c0 1.24 1 2.25 2.25 2.25h3.56a6.48 6.48 0 0 1-.3-1.5H6.76a.75.75 0 0 1-.75-.75v-13c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75V11c.52 0 1.02.06 1.5.17Zm-1.5.83a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H17v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H16v2.5a.5.5 0 1 0 1 0Z",
    fill: primaryFill
  }));
};

exports.CopyAdd24Regular = wrapIcon_1.default( /*#__PURE__*/CopyAdd24RegularIcon, 'CopyAdd24Regular');

const CopyArrowRight16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 4.09v6.41A2.5 2.5 0 0 0 5.34 13H6.4A5 5 0 0 0 7 14H5a3 3 0 0 1-3-3V5.5c0-.65.42-1.2 1-1.41Zm7.8 3.96-.08.04-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 1.65 1.65H8.4a.5.5 0 0 0-.4.41L8 11v.09c.05.2.2.36.41.4l.09.01h3.8l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.07-.07 2.53-2.53.04-.05.04-.08.02-.08.01-.07V10.9l-.03-.08-.04-.08-.04-.05-2.53-2.53-.07-.06a.5.5 0 0 0-.5-.04ZM10.5 2c.83 0 1.5.67 1.5 1.5v2.6A5.03 5.03 0 0 0 6 11c0 .34.03.68.1 1h-.6A1.5 1.5 0 0 1 4 10.5v-7C4 2.67 4.67 2 5.5 2h5Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight16Filled = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight16FilledIcon, 'CopyArrowRight16Filled');

const CopyArrowRight16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 4.09v6.41A2.5 2.5 0 0 0 5.34 13H6.4A5 5 0 0 0 7 14H5a3 3 0 0 1-3-3V5.5c0-.65.42-1.2 1-1.41Zm7.8 3.96-.08.04-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 1.65 1.65H8.4a.5.5 0 0 0-.4.41L8 11v.09c.05.2.2.36.41.4l.09.01h3.8l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.07-.07 2.53-2.53.04-.05.04-.08.02-.08.01-.07V10.9l-.03-.08-.04-.08-.04-.05-2.53-2.53-.07-.06a.5.5 0 0 0-.5-.04ZM10.5 2c.83 0 1.5.67 1.5 1.5v2.6c-.32-.07-.66-.1-1-.1V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5H6c0 .34.03.68.1 1h-.6A1.5 1.5 0 0 1 4 10.5v-7C4 2.67 4.67 2 5.5 2h5Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight16Regular = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight16RegularIcon, 'CopyArrowRight16Regular');

const CopyArrowRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v5.2A5.5 5.5 0 0 0 9.2 16H8a2 2 0 0 1-2-2V4Zm4.26 14a5.5 5.5 0 0 1-.66-1H7.5A2.5 2.5 0 0 1 5 14.5V4.27A2 2 0 0 0 4 6v8.5A3.5 3.5 0 0 0 7.5 18h2.76Zm4.24-8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight20Filled = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight20FilledIcon, 'CopyArrowRight20Filled');

const CopyArrowRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.2c-.08-.32-.15-.66-.18-1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H8Zm-.5 15h2.1c.18.36.4.7.66 1H7.5A3.5 3.5 0 0 1 4 14.5V6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17Zm7-7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight20Regular = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight20RegularIcon, 'CopyArrowRight20Regular');

const CopyArrowRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-12-7.37V17.25c0 1.8 1.46 3.25 3.25 3.25h2.98c.3.56.66 1.06 1.08 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12Zm12.78 9.96a.5.5 0 0 0-.56 0l-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07L19.29 17H14.4a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01h4.8l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.06-.07 2.53-2.53.04-.05.04-.08.03-.08V17.39l-.01-.04-.04-.08-.02-.04-.04-.05-2.53-2.53-.07-.06ZM17.75 2C18.99 2 20 3 20 4.25v7.25a6.5 6.5 0 0 0-8.69 8H8.75c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight24Filled = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight24FilledIcon, 'CopyArrowRight24Filled');

const CopyArrowRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-12-7.37V17.25c0 1.8 1.46 3.25 3.25 3.25h2.98c.3.56.66 1.06 1.08 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12Zm12.78 9.96a.5.5 0 0 0-.56 0l-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07L19.29 17H14.4a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01h4.8l-1.65 1.65-.06.07a.5.5 0 0 0 .7.7l.06-.07 2.53-2.53.04-.05.04-.08.03-.08V17.39l-.01-.04-.04-.08-.02-.04-.04-.05-2.53-2.53-.07-.06ZM17.75 2C18.99 2 20 3 20 4.25v7.25c-.47-.2-.98-.34-1.5-.42V4.25a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v13c0 .41.34.75.75.75h2.27c.04.52.14 1.02.3 1.5H8.74c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Z",
    fill: primaryFill
  }));
};

exports.CopyArrowRight24Regular = wrapIcon_1.default( /*#__PURE__*/CopyArrowRight24RegularIcon, 'CopyArrowRight24Regular');

const CopySelect20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H8Zm-1 9a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM16 3a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-7-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 6h1v6.5A2.5 2.5 0 0 0 7.5 15H14v1a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 14.5V8c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
};

exports.CopySelect20Filled = wrapIcon_1.default( /*#__PURE__*/CopySelect20FilledIcon, 'CopySelect20Filled');

const CopySelect20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H8Zm-1 9a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM16 3a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-7-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 6h1v1H4a1 1 0 0 0-1 1v6.5A2.5 2.5 0 0 0 5.5 17H12a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 14.5V8c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
};

exports.CopySelect20Regular = wrapIcon_1.default( /*#__PURE__*/CopySelect20RegularIcon, 'CopySelect20Regular');

const Couch12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2h-5C2.67 2 2 2.67 2 3.5v.51L2.25 4c1.16 0 2.11.88 2.24 2H7.5A2.25 2.25 0 0 1 10 4.01V3.5C10 2.67 9.33 2 8.5 2Zm1.25 3c.09 0 .17 0 .25.03.57.11 1 .62 1 1.22V8.5c0 .65-.42 1.2-1 1.41v.59a.5.5 0 0 1-1 0V10H3v.5a.5.5 0 0 1-1 0v-.59c-.58-.2-1-.76-1-1.41V6.25a1.25 1.25 0 0 1 2.5 0c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75C8.5 5.56 9.06 5 9.75 5Z",
    fill: primaryFill
  }));
};

exports.Couch12Filled = wrapIcon_1.default( /*#__PURE__*/Couch12FilledIcon, 'Couch12Filled');

const Couch12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2C2.67 2 2 2.67 2 3.5v1.17c-.6.28-1 .88-1 1.58V8.5c0 .65.42 1.2 1 1.41v.59a.5.5 0 0 0 1 0V10h6v.5a.5.5 0 0 0 1 0v-.59c.58-.2 1-.76 1-1.41V6.25c0-.7-.4-1.3-1-1.58V3.5C10 2.67 9.33 2 8.5 2h-5Zm6 7h-7a.5.5 0 0 1-.5-.5V6.25a.75.75 0 0 1 1.5 0v.25c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 1-.5.5ZM9 4.52c-.77.1-1.37.71-1.48 1.48H4.48A1.75 1.75 0 0 0 3 4.52V3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1.02Z",
    fill: primaryFill
  }));
};

exports.Couch12Regular = wrapIcon_1.default( /*#__PURE__*/Couch12RegularIcon, 'Couch12Regular');

const Couch20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.83 2h6.34A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2Zm2 4a2 2 0 0 0-1.94 1.5c-.07.27-.28.5-.56.5h-7c-.28 0-.5-.23-.56-.5A2 2 0 0 0 2 10v2c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
};

exports.Couch20Filled = wrapIcon_1.default( /*#__PURE__*/Couch20FilledIcon, 'Couch20Filled');

const Couch20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4a2 2 0 0 0-2 2v1.05A2.5 2.5 0 0 0 2 9.5V12c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 0-2-2.45V6a2 2 0 0 0-2-2H6Zm9 3.05A2.5 2.5 0 0 0 13.05 9h-6.1A2.5 2.5 0 0 0 5 7.05V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.05ZM16 13H4a1 1 0 0 1-1-1V9.5a1.5 1.5 0 1 1 3 0c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5 1.5 1.5 0 0 1 3 0V12a1 1 0 0 1-1 1Z",
    fill: primaryFill
  }));
};

exports.Couch20Regular = wrapIcon_1.default( /*#__PURE__*/Couch20RegularIcon, 'Couch20Regular');

const Couch24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.75 4h-9.5A2.75 2.75 0 0 0 4.5 6.75V8a3.5 3.5 0 0 1 3.46 3h8.08c.24-1.7 1.7-3 3.46-3V6.75A2.75 2.75 0 0 0 16.75 4Zm.25 7.5a2.5 2.5 0 0 1 5 0v2.75c0 1.43-1.1 2.61-2.5 2.74v1.26a.75.75 0 0 1-1.5 0V17H6v1.25a.75.75 0 0 1-1.5 0v-1.26A2.75 2.75 0 0 1 2 14.25V11.5a2.5 2.5 0 0 1 5 0c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.Couch24Filled = wrapIcon_1.default( /*#__PURE__*/Couch24FilledIcon, 'Couch24Filled');

const Couch24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.25 4A2.75 2.75 0 0 0 4.5 6.75v1.34A3.25 3.25 0 0 0 2 11.25v3c0 1.43 1.1 2.61 2.5 2.74v1.26a.75.75 0 0 0 1.5 0V17h12v1.25a.75.75 0 0 0 1.5 0v-1.26c1.4-.13 2.5-1.3 2.5-2.74v-3a3.25 3.25 0 0 0-2.5-3.16V6.75A2.75 2.75 0 0 0 16.75 4h-9.5Zm12 11.5H4.75c-.69 0-1.25-.56-1.25-1.25v-3a1.75 1.75 0 1 1 3.5 0v.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75v-.5a1.75 1.75 0 1 1 3.5 0v3c0 .69-.56 1.25-1.25 1.25ZM18 8.09A3.25 3.25 0 0 0 15.5 11h-7A3.25 3.25 0 0 0 6 8.09V6.75c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v1.34Z",
    fill: primaryFill
  }));
};

exports.Couch24Regular = wrapIcon_1.default( /*#__PURE__*/Couch24RegularIcon, 'Couch24Regular');

const Couch32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6H9a4 4 0 0 0-4 4v1.02l.5-.02a5 5 0 0 1 4.98 4.5h11.04A5 5 0 0 1 27 11.02V10a4 4 0 0 0-4-4Zm4 6.54A3.5 3.5 0 0 0 23 16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1 3.5 3.5 0 1 0-7 0v4a4 4 0 0 0 3 3.87V26a1 1 0 1 0 2 0v-2h18v2a1 1 0 1 0 2 0v-2.13A4 4 0 0 0 30 20v-4a3.5 3.5 0 0 0-3-3.46Z",
    fill: primaryFill
  }));
};

exports.Couch32Filled = wrapIcon_1.default( /*#__PURE__*/Couch32FilledIcon, 'Couch32Filled');

const Couch32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 6a4 4 0 0 0-4 4v1.26a4.5 4.5 0 0 0-3 4.24V20a4 4 0 0 0 3 3.87V26a1 1 0 1 0 2 0v-2h18v2a1 1 0 1 0 2 0v-2.13A4 4 0 0 0 30 20v-4.5a4.5 4.5 0 0 0-3-4.24V10a4 4 0 0 0-4-4H9Zm17 16H6a2 2 0 0 1-2-2v-4.5a2.5 2.5 0 0 1 5 0v.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.5a2.5 2.5 0 0 1 5 0V20a2 2 0 0 1-2 2Zm-1-10.97A4.5 4.5 0 0 0 21.03 15H10.97A4.5 4.5 0 0 0 7 11.03V10c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v1.03Z",
    fill: primaryFill
  }));
};

exports.Couch32Regular = wrapIcon_1.default( /*#__PURE__*/Couch32RegularIcon, 'Couch32Regular');

const Couch48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M34.75 11h-21.5A5.25 5.25 0 0 0 8 16.25v.77l.5-.02a6.5 6.5 0 0 1 6.48 6h18.04A6.5 6.5 0 0 1 40 17.02v-.77c0-2.9-2.35-5.25-5.25-5.25Zm4.75 8a4.5 4.5 0 0 1 4.5 4.5v6.25c0 2.47-1.7 4.54-4 5.1v2.9a1.25 1.25 0 1 1-2.5 0V35h-27v2.75a1.25 1.25 0 1 1-2.5 0v-2.9c-2.3-.56-4-2.63-4-5.1V23.5a4.5 4.5 0 0 1 9 0v.5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-.5a4.5 4.5 0 0 1 4.5-4.5Z",
    fill: primaryFill
  }));
};

exports.Couch48Filled = wrapIcon_1.default( /*#__PURE__*/Couch48FilledIcon, 'Couch48Filled');

const Couch48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.25 11A5.25 5.25 0 0 0 8 16.25v1.46A5.5 5.5 0 0 0 4 23v6.75c0 2.47 1.7 4.54 4 5.1v2.9a1.25 1.25 0 1 0 2.5 0V35h27v2.75a1.25 1.25 0 1 0 2.5 0v-2.9c2.3-.56 4-2.63 4-5.1V23a5.5 5.5 0 0 0-4-5.3v-1.45c0-2.9-2.35-5.25-5.25-5.25h-21.5Zm24.25 6.6A5.5 5.5 0 0 0 33 23H15a5.5 5.5 0 0 0-4.5-5.4v-1.35a2.75 2.75 0 0 1 2.75-2.75h21.5a2.75 2.75 0 0 1 2.75 2.75v1.34ZM6.5 23a3 3 0 1 1 6 0v1.25c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25V23a3 3 0 1 1 6 0v6.75a2.75 2.75 0 0 1-2.75 2.75H9.25a2.75 2.75 0 0 1-2.75-2.75V23Z",
    fill: primaryFill
  }));
};

exports.Couch48Regular = wrapIcon_1.default( /*#__PURE__*/Couch48RegularIcon, 'Couch48Regular');

const CreditCardClock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM9.2 16H4.76A2.75 2.75 0 0 1 2 13.25V9h12.5a5.5 5.5 0 0 0-5.3 7Zm9.8-1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock20Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardClock20FilledIcon, 'CreditCardClock20Filled');

const CreditCardClock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h4.46c-.1-.32-.16-.66-.19-1H4.75C3.78 15 3 14.22 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V8H3V6.75Zm16 7.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock20Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardClock20RegularIcon, 'CreditCardClock20Regular');

const CreditCardClock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8.25C2 6.45 3.46 5 5.25 5h13.5C20.55 5 22 6.46 22 8.25V9.5H2V8.25ZM11.17 19H5.25A3.25 3.25 0 0 1 2 15.75V11h15.5a6.5 6.5 0 0 0-6.33 8Zm6.33-7a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2 5.5h-2V15a.5.5 0 0 0-1 0v3c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock24Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardClock24FilledIcon, 'CreditCardClock24Filled');

const CreditCardClock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5C2 17.55 3.46 19 5.25 19h5.92a6.52 6.52 0 0 1-.17-1.5H5.25c-.97 0-1.75-.78-1.75-1.75V11H22V8.25C22 6.45 20.54 5 18.75 5H5.25ZM20.5 8.25V9.5h-17V8.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75Zm-3 3.75a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2 5.5h-2V15a.5.5 0 0 0-1 0v3c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock24Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardClock24RegularIcon, 'CreditCardClock24Regular');

const CreditCardClock28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 5A3.75 3.75 0 0 0 2 8.75v.75h24v-.75A3.75 3.75 0 0 0 22.25 5H5.75ZM2 19.25V11h24v4.4A7.5 7.5 0 0 0 13.43 23H5.75A3.75 3.75 0 0 1 2 19.25Zm25 1.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6.5-4a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock28Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardClock28FilledIcon, 'CreditCardClock28Filled');

const CreditCardClock28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8.75A3.75 3.75 0 0 1 5.75 5h16.5A3.75 3.75 0 0 1 26 8.75v6.65c-.44-.48-.95-.9-1.5-1.25V11h-21v8.25c0 1.24 1.01 2.25 2.25 2.25h7.32c.07.52.19 1.02.36 1.5H5.75A3.75 3.75 0 0 1 2 19.25V8.75ZM5.75 6.5c-1.24 0-2.25 1-2.25 2.25v.75h21v-.75c0-1.24-1-2.25-2.25-2.25H5.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6.5-4a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock28Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardClock28RegularIcon, 'CreditCardClock28Regular');

const CreditCardClock32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 5A4.5 4.5 0 0 0 2 9.5V11h28V9.5A4.5 4.5 0 0 0 25.5 5h-19ZM2 22.5V13h28v4.34A9 9 0 0 0 14.94 27H6.5A4.5 4.5 0 0 1 2 22.5Zm21 8a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM22.75 18a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock32Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardClock32FilledIcon, 'CreditCardClock32Filled');

const CreditCardClock32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v7.84a9.05 9.05 0 0 0-2-1.82V13H4v9.5A2.5 2.5 0 0 0 6.5 25h7.72c.16.7.4 1.37.72 2H6.5A4.5 4.5 0 0 1 2 22.5v-13ZM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7h-19ZM23 30.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM22.75 18a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
};

exports.CreditCardClock32Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardClock32RegularIcon, 'CreditCardClock32Regular');

const CreditCardPerson20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM2 9h12.5a3 3 0 0 0-2.23 5.01c-1.1.1-2 .92-2.22 1.99h-5.3A2.75 2.75 0 0 1 2 13.25V9Zm14.5 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardPerson20Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardPerson20FilledIcon, 'CreditCardPerson20Filled');

const CreditCardPerson20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h5.3c.07-.37.23-.7.45-1H4.75C3.78 15 3 14.22 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V8H3V6.75ZM16.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.CreditCardPerson20Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardPerson20RegularIcon, 'CreditCardPerson20Regular');

const CreditCardPerson24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 5A3.25 3.25 0 0 0 2 8.25V9.5h20V8.25C22 6.45 20.54 5 18.75 5H5.25ZM2 15.75V11h16.5a3.5 3.5 0 0 0-2.45 6h-.28c-1.26 0-2.33.84-2.66 2H5.25A3.25 3.25 0 0 1 2 15.75Zm19-1.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
};

exports.CreditCardPerson24Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardPerson24FilledIcon, 'CreditCardPerson24Filled');

const CreditCardPerson24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5C2 17.55 3.46 19 5.25 19h7.86c.18-.61.56-1.14 1.07-1.5H5.25c-.97 0-1.75-.78-1.75-1.75V11H22V8.25C22 6.45 20.54 5 18.75 5H5.25ZM20.5 8.25V9.5h-17V8.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75Zm.5 6.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
};

exports.CreditCardPerson24Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardPerson24RegularIcon, 'CreditCardPerson24Regular');

const CreditCardToolbox20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM13.5 9H2v4.25A2.75 2.75 0 0 0 4.75 16H9v-2.5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 13.5 9ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
};

exports.CreditCardToolbox20Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardToolbox20FilledIcon, 'CreditCardToolbox20Filled');

const CreditCardToolbox20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16H9v-1H4.75C3.78 15 3 14.22 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V8H3V6.75ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
};

exports.CreditCardToolbox20Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardToolbox20RegularIcon, 'CreditCardToolbox20Regular');

const CreditCardToolbox24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8.25C2 6.45 3.46 5 5.25 5h13.5C20.55 5 22 6.46 22 8.25V9.5H2V8.25ZM15.75 11H2v4.75C2 17.55 3.46 19 5.25 19H11v-2.75a2.5 2.5 0 0 1 2-2.45v-.05A2.75 2.75 0 0 1 15.75 11Zm-2.25 3.75h.5v-1c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v1h.5c.83 0 1.5.67 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75c0-.83.67-1.5 1.5-1.5Zm2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25h-3.5Zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.CreditCardToolbox24Filled = wrapIcon_1.default( /*#__PURE__*/CreditCardToolbox24FilledIcon, 'CreditCardToolbox24Filled');

const CreditCardToolbox24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5C2 17.55 3.46 19 5.25 19H11v-1.5H5.25c-.97 0-1.75-.78-1.75-1.75V11H22V8.25C22 6.45 20.54 5 18.75 5H5.25ZM20.5 8.25V9.5h-17V8.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75Zm-7 6.5h.5v-1c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v1h.5c.83 0 1.5.67 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75c0-.83.67-1.5 1.5-1.5Zm2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25h-3.5Zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.CreditCardToolbox24Regular = wrapIcon_1.default( /*#__PURE__*/CreditCardToolbox24RegularIcon, 'CreditCardToolbox24Regular');

const Crop16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 1.75a.75.75 0 0 0-1.5 0V3.5H1.75a.75.75 0 0 0 0 1.5H3.5v4.5a3 3 0 0 0 3 3H11v1.75a.75.75 0 0 0 1.5 0V12.5h1.75a.75.75 0 0 0 0-1.5H6.5A1.5 1.5 0 0 1 5 9.5V1.75Zm6 4.75V10h1.5V6.5a3 3 0 0 0-3-3H6V5h3.5c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.Crop16Filled = wrapIcon_1.default( /*#__PURE__*/Crop16FilledIcon, 'Crop16Filled');

const Crop16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 1.5a.5.5 0 0 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v4.5A2.5 2.5 0 0 0 6.5 12H11v2.5a.5.5 0 0 0 1 0V12h2.5a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 9.5v-8Zm6 5V10h1V6.5A2.5 2.5 0 0 0 9.5 4H6v1h3.5c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.Crop16Regular = wrapIcon_1.default( /*#__PURE__*/Crop16RegularIcon, 'Crop16Regular');

const Crop20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v6.75a2.75 2.75 0 0 0 2.75 2.75H14v1.75a.75.75 0 0 0 1.5 0V15.5h1.75a.75.75 0 0 0 0-1.5h-10C6.56 14 6 13.44 6 12.75v-10Zm8 4.5V13h1.5V7.25a2.75 2.75 0 0 0-2.75-2.75H7V6h5.75c.69 0 1.25.56 1.25 1.25Z",
    fill: primaryFill
  }));
};

exports.Crop20Filled = wrapIcon_1.default( /*#__PURE__*/Crop20FilledIcon, 'Crop20Filled');

const Crop20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.5a.5.5 0 0 0-1 0V5H2.5a.5.5 0 0 0 0 1H5v6.5A2.5 2.5 0 0 0 7.5 15H14v2.5a.5.5 0 0 0 1 0V15h2.5a.5.5 0 0 0 0-1h-10A1.5 1.5 0 0 1 6 12.5v-10Zm8 5V13h1V7.5A2.5 2.5 0 0 0 12.5 5H7v1h5.5c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.Crop20Regular = wrapIcon_1.default( /*#__PURE__*/Crop20RegularIcon, 'Crop20Regular');

const Crop24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 15.5c0 .78.6 1.42 1.36 1.5H21a1 1 0 0 1 .12 2H19v2a1 1 0 0 1-2 .12V19H8.5A3.5 3.5 0 0 1 5 15.7V7H3a1 1 0 0 1-.12-2H5V3a1 1 0 0 1 2-.12V15.5ZM8 5h7.5A3.5 3.5 0 0 1 19 8.3V16h-2V8.5c0-.78-.6-1.42-1.36-1.5H8V5Z",
    fill: primaryFill
  }));
};

exports.Crop24Filled = wrapIcon_1.default( /*#__PURE__*/Crop24FilledIcon, 'Crop24Filled');

const Crop24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.25 17a.75.75 0 0 1 .1 1.5H18.5v2.75a.75.75 0 0 1-1.5.1V18.5H8.75a3.25 3.25 0 0 1-3.24-3.07l-.01-.18V7H2.75a.75.75 0 0 1-.1-1.5H5.5V2.75a.75.75 0 0 1 1.5-.1v12.6c0 .92.7 1.67 1.6 1.74l.15.01h12.5ZM8 5.5h7.25a3.25 3.25 0 0 1 3.24 3.07l.01.18V16H17V8.75c0-.92-.7-1.67-1.6-1.74L15.24 7H8V5.5Z",
    fill: primaryFill
  }));
};

exports.Crop24Regular = wrapIcon_1.default( /*#__PURE__*/Crop24RegularIcon, 'Crop24Regular');

const Crop28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v9.75C6 20.1 7.9 22 10.25 22H20v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H10.25C9.01 20 8 19 8 17.75V3Zm12 7.25V19h2v-8.75C22 7.9 20.1 6 17.75 6H9v2h8.75C18.99 8 20 9 20 10.25Z",
    fill: primaryFill
  }));
};

exports.Crop28Filled = wrapIcon_1.default( /*#__PURE__*/Crop28FilledIcon, 'Crop28Filled');

const Crop28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2.75a.75.75 0 0 0-1.5 0V6.5H2.75a.75.75 0 0 0 0 1.5H6.5v9.75a3.75 3.75 0 0 0 3.75 3.75H20v3.75a.75.75 0 0 0 1.5 0V21.5h3.75a.75.75 0 0 0 0-1.5h-15C9.01 20 8 19 8 17.75v-15Zm12 7.5V19h1.5v-8.75a3.75 3.75 0 0 0-3.75-3.75H9V8h8.75C18.99 8 20 9 20 10.25Z",
    fill: primaryFill
  }));
};

exports.Crop28Regular = wrapIcon_1.default( /*#__PURE__*/Crop28RegularIcon, 'Crop28Regular');

const Crop32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 3.25a1.25 1.25 0 1 0-2.5 0V6.5H3.25a1.25 1.25 0 1 0 0 2.5H6.5v11.5a5 5 0 0 0 5 5H23v3.25a1.25 1.25 0 1 0 2.5 0V25.5h3.25a1.25 1.25 0 1 0 0-2.5H11.5A2.5 2.5 0 0 1 9 20.5V3.25Zm14 8.25v10h2.5v-10a5 5 0 0 0-5-5h-10V9h10a2.5 2.5 0 0 1 2.5 2.5Z",
    fill: primaryFill
  }));
};

exports.Crop32Filled = wrapIcon_1.default( /*#__PURE__*/Crop32FilledIcon, 'Crop32Filled');

const Crop32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v11.5a4.5 4.5 0 0 0 4.5 4.5H23v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2H11.5A2.5 2.5 0 0 1 9 20.5V3Zm14 8.5v10h2v-10A4.5 4.5 0 0 0 20.5 7h-10v2h10a2.5 2.5 0 0 1 2.5 2.5Z",
    fill: primaryFill
  }));
};

exports.Crop32Regular = wrapIcon_1.default( /*#__PURE__*/Crop32RegularIcon, 'Crop32Regular');

const Crop48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 5.5a1.5 1.5 0 0 0-3 0V11H5.5a1.5 1.5 0 0 0 0 3H11v16.25A6.75 6.75 0 0 0 17.75 37H34v5.5a1.5 1.5 0 0 0 3 0V37h5.5a1.5 1.5 0 0 0 0-3H17.75A3.75 3.75 0 0 1 14 30.25V5.5Zm20 12.25V32h3V17.75A6.75 6.75 0 0 0 30.25 11H16v3h14.25A3.75 3.75 0 0 1 34 17.75Z",
    fill: primaryFill
  }));
};

exports.Crop48Filled = wrapIcon_1.default( /*#__PURE__*/Crop48FilledIcon, 'Crop48Filled');

const Crop48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 5.25a1.25 1.25 0 1 0-2.5 0v6.25H5.25a1.25 1.25 0 1 0 0 2.5h6.25v16.25c0 3.45 2.8 6.25 6.25 6.25H34v6.25a1.25 1.25 0 1 0 2.5 0V36.5h6.25a1.25 1.25 0 1 0 0-2.5h-25A3.75 3.75 0 0 1 14 30.25v-25Zm20 12.5V32h2.5V17.75c0-3.45-2.8-6.25-6.25-6.25H16V14h14.25A3.75 3.75 0 0 1 34 17.75Z",
    fill: primaryFill
  }));
};

exports.Crop48Regular = wrapIcon_1.default( /*#__PURE__*/Crop48RegularIcon, 'Crop48Regular');

const CropInterim20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4h3a2 2 0 0 0 1.77 1.99l.47 4.16A2 2 0 0 0 11 12H6a2 2 0 0 0-1.24-1.85L5.23 6A2 2 0 0 0 7 4Zm6.23 6.01-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 1 0-2.5 2.85L3.78 10A2 2 0 1 0 5.73 13h5.54a2 2 0 1 0 1.96-2.99Zm.74-2.4A4.5 4.5 0 1 1 9.65 15h.85a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.72A5.48 5.48 0 0 0 18.5 12a5.5 5.5 0 0 0-4.65-5.43l.12 1.03Z",
    fill: primaryFill
  }));
};

exports.CropInterim20Filled = wrapIcon_1.default( /*#__PURE__*/CropInterim20FilledIcon, 'CropInterim20Filled');

const CropInterim20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1H7a2 2 0 0 1-1.77 1.99l-.47 4.16A2 2 0 0 1 6 12h5a2 2 0 0 1 1.24-1.85L11.77 6A2 2 0 0 1 10 4Zm1.27 9H5.73a2 2 0 1 1-1.96-2.99l.47-4.16A2 2 0 1 1 6.74 3h3.53a2 2 0 1 1 2.5 2.85l.46 4.16A2 2 0 1 1 11.27 13ZM3 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm2-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1.97-4.4A4.5 4.5 0 1 1 9.65 15h.85a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.72A5.48 5.48 0 0 0 18.5 12a5.5 5.5 0 0 0-4.65-5.43l.12 1.03Z",
    fill: primaryFill
  }));
};

exports.CropInterim20Regular = wrapIcon_1.default( /*#__PURE__*/CropInterim20RegularIcon, 'CropInterim20Regular');

const CropInterim24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.67 9.1a6.5 6.5 0 1 1-5.17 11.52v.63c0 .38-.29.7-.65.74l-.1.01a.75.75 0 0 1-.75-.65v-2.6c0-.38.28-.7.64-.74h2.61a.75.75 0 0 1 .1 1.48l-.1.01h-.74a4.98 4.98 0 0 0 8-4 5 5 0 0 0-3.6-4.8l-.24-1.6ZM14.5 3a2.5 2.5 0 0 1 .97 4.8l.82 5.32A2.5 2.5 0 1 1 13.5 17H6.5a2.5 2.5 0 1 1-2.78-3.88l.82-5.3A2.5 2.5 0 1 1 7.5 4h4.99c.46-.6 1.18-1 2-1Zm-2.5 2.5H8c0 1.2-.84 2.2-1.96 2.45l-.8 5.16A2.5 2.5 0 0 1 7 15.31l.01.19h6a2.5 2.5 0 0 1 1.76-2.39l-.8-5.16A2.5 2.5 0 0 1 12 5.67V5.5Z",
    fill: primaryFill
  }));
};

exports.CropInterim24Filled = wrapIcon_1.default( /*#__PURE__*/CropInterim24FilledIcon, 'CropInterim24Filled');

const CropInterim24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.67 9.1a6.5 6.5 0 1 1-5.17 11.52v.63c0 .38-.29.7-.65.74l-.1.01a.75.75 0 0 1-.75-.65v-2.6c0-.38.28-.7.64-.74h2.61a.75.75 0 0 1 .1 1.48l-.1.01h-.74a4.98 4.98 0 0 0 8-4 5 5 0 0 0-3.6-4.8l-.24-1.6ZM14.5 3a2.5 2.5 0 0 1 .97 4.8l.82 5.32A2.5 2.5 0 1 1 13.5 17H6.5a2.5 2.5 0 1 1-2.78-3.88l.82-5.3A2.5 2.5 0 1 1 7.5 4h4.99c.46-.6 1.18-1 2-1ZM4.5 14.5h-.12a1 1 0 0 0 0 2h.12a1 1 0 0 0 1-.88v-.24a1 1 0 0 0-.52-.76l-.11-.05-.13-.04-.08-.02-.16-.01Zm10.7.05-.06.02-.06.03-.1.05a1 1 0 0 0 .4 1.84l.12.01a1 1 0 0 0 .12-2h-.12l-.16.01-.15.04ZM11.98 5.5H8c0 1.2-.84 2.2-1.96 2.45l-.8 5.16A2.5 2.5 0 0 1 7 15.31l.01.19h6a2.5 2.5 0 0 1 1.76-2.39l-.8-5.16A2.5 2.5 0 0 1 12 5.67V5.5Zm1.77.7.03.02.12.1.08.05.1.05.1.04.1.02.07.02h.25l.17-.04.12-.05.09-.04.1-.06.1-.1.08-.08a1 1 0 0 0-.3-1.5l-.1-.05-.15-.05-.08-.01a.99.99 0 0 0-.15-.02l-.12.01a1 1 0 0 0-.6 1.69ZM4.5 5.5a1 1 0 0 0 .22.63l.07.07a1 1 0 0 0 .19.16l.1.05.1.04.09.03.1.02h.13a1 1 0 0 0 .17-.01l.07-.02.11-.03.06-.02.15-.09.08-.06.06-.05.08-.1.06-.08a1 1 0 0 0 .15-.42l.01-.12v-.12l-.03-.1-.01-.07a1 1 0 0 0-.84-.7H5.5a1 1 0 0 0-.17 0l-.08.02-.09.03-.05.02-.1.05a1 1 0 0 0-.51.87Z",
    fill: primaryFill
  }));
};

exports.CropInterim24Regular = wrapIcon_1.default( /*#__PURE__*/CropInterim24RegularIcon, 'CropInterim24Regular');

const CropInterimOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m3.02 3.73-.87-.88a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.2-1.2A5.47 5.47 0 0 1 9 15.78v.72a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.85a4.49 4.49 0 0 0 5.56.92l-1.94-1.94L13 14a2 2 0 0 1-1.73-1H5.73a2 2 0 1 1-1.96-2.99l.47-4.16a2 2 0 0 1-1.22-2.12Zm8 8L5.27 5.98h-.04l-.47 4.17A2 2 0 0 1 6 12h5c0-.1 0-.18.02-.27Zm.75-5.74.46 4.12 2.63 2.63A2 2 0 0 0 13.23 10l-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 0 0-2.47-.86l2.6 2.6A2 2 0 0 0 7 4h3a2 2 0 0 0 1.77 1.99Zm4.92 8.58.72.72a5.5 5.5 0 0 0-3.56-8.72l.12 1.03a4.5 4.5 0 0 1 2.72 6.97Z",
    fill: primaryFill
  }));
};

exports.CropInterimOff20Filled = wrapIcon_1.default( /*#__PURE__*/CropInterimOff20FilledIcon, 'CropInterimOff20Filled');

const CropInterimOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m3.02 3.73-.87-.88a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.2-1.2A5.47 5.47 0 0 1 9 15.78v.72a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.85a4.49 4.49 0 0 0 5.56.92l-1.94-1.94L13 14a2 2 0 0 1-1.73-1H5.73a2 2 0 1 1-1.96-2.99l.47-4.16a2 2 0 0 1-1.22-2.12Zm8 8L5.27 5.98a2 2 0 0 1-.04 0l-.47 4.17A2 2 0 0 1 6 12h5c0-.1 0-.18.02-.27Zm.75-5.74.46 4.12 2.63 2.63A2 2 0 0 0 13.23 10l-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 0 0-2.47-.86l.87.87a1 1 0 0 1 .86.86l.87.87A2 2 0 0 0 7 4h3a2 2 0 0 0 1.77 1.99Zm4.92 8.58.72.72a5.5 5.5 0 0 0-3.56-8.72l.12 1.03a4.5 4.5 0 0 1 2.72 6.97ZM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-9 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
};

exports.CropInterimOff20Regular = wrapIcon_1.default( /*#__PURE__*/CropInterimOff20RegularIcon, 'CropInterimOff20Regular');

const CropInterimOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.06 1.06a2.49 2.49 0 0 0 1.26 3.47l-.82 5.31A2.5 2.5 0 1 0 6.5 17h7a2.5 2.5 0 0 0 3.16.72l1.8 1.8a4.98 4.98 0 0 1-5.95-.02h.84a.75.75 0 0 0-.1-1.5h-2.6a.75.75 0 0 0-.65.75v2.6c.05.37.37.65.75.65h.1a.75.75 0 0 0 .65-.75v-.63a6.48 6.48 0 0 0 8.04-.02l1.18 1.18a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm10 12.13c-.17.34-.28.73-.28 1.15H7v-.19a2.5 2.5 0 0 0-1.76-2.2l.8-5.16c.22-.05.42-.13.62-.23l6.63 6.63ZM7.19 4l1.5 1.5h3.3l.01.17a2.5 2.5 0 0 0 1.97 2.28l.52 3.35 1.8 1.8-.82-5.3A2.5 2.5 0 1 0 12.49 4h-5.3Zm13.07 13.07 1.16 1.16a6.5 6.5 0 0 0-4.74-9.12l.25 1.6a5 5 0 0 1 3.33 6.36Z",
    fill: primaryFill
  }));
};

exports.CropInterimOff24Filled = wrapIcon_1.default( /*#__PURE__*/CropInterimOff24FilledIcon, 'CropInterimOff24Filled');

const CropInterimOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.06 1.06a2.49 2.49 0 0 0 1.26 3.47l-.82 5.31A2.5 2.5 0 1 0 6.5 17h7a2.5 2.5 0 0 0 3.16.72l1.8 1.8a4.98 4.98 0 0 1-5.95-.02h.84a.75.75 0 0 0-.1-1.5h-2.6a.75.75 0 0 0-.65.75v2.6c.05.37.37.65.75.65h.1a.75.75 0 0 0 .65-.75v-.63a6.48 6.48 0 0 0 8.04-.02l1.18 1.18a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm10 12.13c-.17.34-.28.73-.28 1.15H7v-.19a2.5 2.5 0 0 0-1.76-2.2l.8-5.16c.22-.05.43-.13.62-.23l6.63 6.63Zm-8.78.15a1 1 0 0 1 .16.01l.08.02.13.04.1.05a1 1 0 0 1 .52.76l.01.12v.12a1 1 0 0 1-1 .88h-.12a1 1 0 0 1 0-2h.12ZM7.18 4l1.5 1.5h3.3l.01.17a2.5 2.5 0 0 0 1.97 2.28l.52 3.35 1.8 1.8-.82-5.3A2.5 2.5 0 1 0 12.5 4h-5.3Zm6.58 2.2a1 1 0 0 1 .61-1.69h.27l.08.02.15.05.1.06v-.01a1 1 0 0 1 .3 1.5l-.08.08-.1.1-.1.06-.09.04-.12.05-.17.04h-.25l-.08-.02-.09-.02-.1-.04-.1-.05-.08-.05-.12-.1-.03-.02Zm6.5 10.87 1.15 1.16a6.5 6.5 0 0 0-4.74-9.12l.25 1.6a5 5 0 0 1 3.33 6.36Z",
    fill: primaryFill
  }));
};

exports.CropInterimOff24Regular = wrapIcon_1.default( /*#__PURE__*/CropInterimOff24RegularIcon, 'CropInterimOff24Regular');

const Crown16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.4 5.72 8.76 3.65a1 1 0 1 0-1.52 0L5.6 5.72a.5.5 0 0 1-.6.14L2.48 4.68a1 1 0 1 0-.9.82l1.3 6.5c.13.58.64 1 1.23 1h7.78c.6 0 1.1-.42 1.22-1l1.3-6.5h.09a1 1 0 1 0-.98-.82L11 5.86a.5.5 0 0 1-.6-.14ZM8 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.Crown16Filled = wrapIcon_1.default( /*#__PURE__*/Crown16FilledIcon, 'Crown16Filled');

const Crown16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.4-4.28L8.76 3.65a1 1 0 1 0-1.52 0L5.6 5.72a.5.5 0 0 1-.6.14L2.48 4.68a1 1 0 1 0-.9.82l1.3 6.5c.13.58.64 1 1.23 1h7.78c.6 0 1.1-.42 1.22-1l1.3-6.5h.09a1 1 0 1 0-.98-.82L11 5.86a.5.5 0 0 1-.6-.14ZM8 4.3l1.62 2.04a1.5 1.5 0 0 0 1.81.42l1.88-.88-1.18 5.92a.25.25 0 0 1-.24.2H4.1a.25.25 0 0 1-.24-.2L2.69 5.88l1.88.88c.63.3 1.38.13 1.81-.42L8 4.3Z",
    fill: primaryFill
  }));
};

exports.Crown16Regular = wrapIcon_1.default( /*#__PURE__*/Crown16RegularIcon, 'Crown16Regular');

const Crown20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.74 5.31 6.6 8.05a.5.5 0 0 1-.62.14L3.86 7.12a1.5 1.5 0 1 0-1.67.85L3.9 16c.12.58.63.99 1.22.99h9.78c.6 0 1.1-.41 1.22-1l1.7-8.03a1.5 1.5 0 1 0-1.67-.85L14 8.2a.5.5 0 0 1-.62-.14L11.26 5.3a1.5 1.5 0 1 0-2.53 0ZM10 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.Crown20Filled = wrapIcon_1.default( /*#__PURE__*/Crown20FilledIcon, 'Crown20Filled');

const Crown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.74 5.31 6.6 8.05a.5.5 0 0 1-.62.14L3.86 7.12a1.5 1.5 0 1 0-1.67.85L3.9 16c.12.58.63.99 1.22.99h9.78c.6 0 1.1-.41 1.22-1l1.7-8.03a1.5 1.5 0 1 0-1.67-.85L14 8.2a.5.5 0 0 1-.62-.14L11.26 5.3a1.5 1.5 0 1 0-2.53 0Zm1.26 0 2.6 3.35a1.5 1.5 0 0 0 1.86.42l2.34-1.17-1.66 7.9a.25.25 0 0 1-.25.19H5.11a.25.25 0 0 1-.25-.2L3.2 7.91l2.34 1.17a1.5 1.5 0 0 0 1.86-.42L10 5.31Z",
    fill: primaryFill
  }));
};

exports.Crown20Regular = wrapIcon_1.default( /*#__PURE__*/Crown20RegularIcon, 'Crown20Regular');

const Cube12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.43 2.07a1.5 1.5 0 0 0-.86 0l-2.85.85a1 1 0 0 0-.72.95v4.26c0 .44.3.83.72.96l2.85.85c.28.08.58.08.86 0l2.85-.85a1 1 0 0 0 .72-.96V3.87a1 1 0 0 0-.72-.95l-2.85-.85Zm-2.4 2.77a.5.5 0 0 1 .63-.31L6 4.97l1.34-.44a.5.5 0 0 1 .32.95l-1.16.38V7a.5.5 0 0 1-1 0V5.86l-1.16-.38a.5.5 0 0 1-.31-.64Z",
    fill: primaryFill
  }));
};

exports.Cube12Filled = wrapIcon_1.default( /*#__PURE__*/Cube12FilledIcon, 'Cube12Filled');

const Cube12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.03 4.84a.5.5 0 0 1 .63-.31L6 4.97l1.34-.44a.5.5 0 0 1 .32.95l-1.16.38V7a.5.5 0 0 1-1 0V5.86l-1.16-.38a.5.5 0 0 1-.31-.64Zm1.54-2.77c.28-.09.58-.09.86 0l2.85.85a1 1 0 0 1 .72.95v4.26a1 1 0 0 1-.72.96l-2.85.85a1.5 1.5 0 0 1-.86 0l-2.85-.85A1 1 0 0 1 2 8.13V3.87c0-.44.29-.83.7-.95l2.87-.85Zm.57.95a.5.5 0 0 0-.28 0L3 3.87v4.26l2.86.85c.1.02.19.02.28 0L9 8.13V3.87l-2.86-.85Z",
    fill: primaryFill
  }));
};

exports.Cube12Regular = wrapIcon_1.default( /*#__PURE__*/Cube12RegularIcon, 'Cube12Regular');

const Cube16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.92 1.38a3 3 0 0 1 2.16 0l4.96 1.9c.58.23.96.79.96 1.4v6.63a1.5 1.5 0 0 1-.96 1.4l-4.96 1.91a3 3 0 0 1-2.16 0l-4.96-1.9a1.5 1.5 0 0 1-.96-1.4V4.68c0-.62.38-1.18.96-1.4l4.96-1.91ZM4.7 5.04a.5.5 0 0 0-.4.92l3.2 1.37v3.17a.5.5 0 0 0 1 0V7.33l3.2-1.37a.5.5 0 1 0-.4-.92L8 6.46 4.7 5.04Z",
    fill: primaryFill
  }));
};

exports.Cube16Filled = wrapIcon_1.default( /*#__PURE__*/Cube16FilledIcon, 'Cube16Filled');

const Cube16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.7 5.04a.5.5 0 0 0-.4.92l3.2 1.37v3.17a.5.5 0 0 0 1 0V7.33l3.2-1.37a.5.5 0 1 0-.4-.92L8 6.46 4.7 5.04Zm4.38-3.66a3 3 0 0 0-2.16 0l-4.96 1.9A1.5 1.5 0 0 0 1 4.69v6.63c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 0 0 2.16 0l4.96-1.9c.58-.23.96-.79.96-1.4V4.68a1.5 1.5 0 0 0-.96-1.4L9.08 1.38Zm-1.8.93a2 2 0 0 1 1.44 0l4.96 1.9c.2.08.32.27.32.48v6.62c0 .2-.13.4-.32.47l-4.96 1.9a2 2 0 0 1-1.44 0l-4.96-1.9A.5.5 0 0 1 2 11.3V4.7c0-.21.13-.4.32-.47l4.96-1.9Z",
    fill: primaryFill
  }));
};

exports.Cube16Regular = wrapIcon_1.default( /*#__PURE__*/Cube16RegularIcon, 'Cube16Regular');

const Cube20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 0 1-.94 1.4l-5.76 2.3a3.5 3.5 0 0 1-2.6 0l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm-3 3.56a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9Z",
    fill: primaryFill
  }));
};

exports.Cube20Filled = wrapIcon_1.default( /*#__PURE__*/Cube20FilledIcon, 'Cube20Filled');

const Cube20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9Zm5.6-3.56a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.76 2.3a.5.5 0 0 1 .31.47v7.64a.5.5 0 0 1-.31.47l-5.76 2.3a2.5 2.5 0 0 1-1.86 0l-5.76-2.3a.5.5 0 0 1-.31-.47V6.18c0-.2.12-.4.31-.47l5.76-2.3Z",
    fill: primaryFill
  }));
};

exports.Cube20Regular = wrapIcon_1.default( /*#__PURE__*/Cube20RegularIcon, 'Cube20Regular');

const Cube24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.4 2.51a3.75 3.75 0 0 0-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .7.43 1.35 1.1 1.62l7.5 3.04c.9.36 1.9.36 2.8 0l7.5-3.04c.67-.27 1.1-.91 1.1-1.62V7.17c0-.71-.43-1.35-1.1-1.62l-7.5-3.04ZM6.06 7.98a.75.75 0 0 1 .97-.43L12 9.44l4.98-1.9a.75.75 0 1 1 .54 1.41l-4.77 1.8v5.5a.75.75 0 1 1-1.5 0v-5.5l-4.77-1.8a.75.75 0 0 1-.43-.97Z",
    fill: primaryFill
  }));
};

exports.Cube24Filled = wrapIcon_1.default( /*#__PURE__*/Cube24FilledIcon, 'Cube24Filled');

const Cube24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.05 7.98a.75.75 0 0 1 .97-.43L12 9.44l4.98-1.9a.75.75 0 1 1 .54 1.41l-4.77 1.8v5.5a.75.75 0 1 1-1.5 0v-5.5l-4.77-1.8a.75.75 0 0 1-.43-.97Zm4.54-5.47c.9-.37 1.92-.37 2.82 0l7.5 3.04c.66.27 1.09.91 1.09 1.62v9.66c0 .7-.43 1.35-1.1 1.62l-7.5 3.04c-.9.36-1.9.36-2.8 0l-7.5-3.04c-.67-.27-1.1-.91-1.1-1.62V7.17c0-.71.43-1.35 1.1-1.62l7.5-3.04Zm2.26 1.4a2.25 2.25 0 0 0-1.7 0l-7.5 3.03a.25.25 0 0 0-.15.23v9.66c0 .1.06.19.16.23l7.5 3.04c.54.22 1.14.22 1.69 0l7.5-3.04c.09-.04.15-.13.15-.23V7.17c0-.1-.06-.2-.16-.23l-7.5-3.04Z",
    fill: primaryFill
  }));
};

exports.Cube24Regular = wrapIcon_1.default( /*#__PURE__*/Cube24RegularIcon, 'Cube24Regular');

const Cube32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.85 2.76a6 6 0 0 1 4.3 0l9.93 3.81A3 3 0 0 1 30 9.37v13.26a3 3 0 0 1-1.92 2.8l-9.93 3.81a6 6 0 0 1-4.3 0l-9.93-3.81A3 3 0 0 1 2 22.63V9.37a3 3 0 0 1 1.92-2.8l9.93-3.81Zm-4.46 7.32a1 1 0 1 0-.78 1.84L15 14.66V21a1 1 0 1 0 2 0v-6.34l6.4-2.74a1 1 0 0 0-.8-1.84L16 12.91l-6.6-2.83Z",
    fill: primaryFill
  }));
};

exports.Cube32Filled = wrapIcon_1.default( /*#__PURE__*/Cube32FilledIcon, 'Cube32Filled');

const Cube32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.4 10.08a1 1 0 1 0-.8 1.84l6.4 2.74V21a1 1 0 1 0 2 0v-6.34l6.4-2.74a1 1 0 0 0-.8-1.84L16 12.91l-6.6-2.83Zm8.75-7.32a6 6 0 0 0-4.3 0L3.92 6.57A3 3 0 0 0 2 9.37v13.26a3 3 0 0 0 1.92 2.8l9.93 3.81a6 6 0 0 0 4.3 0l9.93-3.81a3 3 0 0 0 1.92-2.8V9.37a3 3 0 0 0-1.92-2.8l-9.93-3.81Zm-3.59 1.86a4 4 0 0 1 2.88 0l9.92 3.82a1 1 0 0 1 .64.93v13.26a1 1 0 0 1-.64.93l-9.92 3.82a4 4 0 0 1-2.88 0l-9.92-3.82a1 1 0 0 1-.64-.93V9.37a1 1 0 0 1 .64-.93l9.92-3.82Z",
    fill: primaryFill
  }));
};

exports.Cube32Regular = wrapIcon_1.default( /*#__PURE__*/Cube32RegularIcon, 'Cube32Regular');

const CubeAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.48 5.48 0 0 0-7.5.47v-1.9l4.2-1.87a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9a.5.5 0 1 0-.4.9l4.2 1.88v3.38a5.48 5.48 0 0 0 .58 5.56 3.5 3.5 0 0 1-1.38-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.CubeAdd20Filled = wrapIcon_1.default( /*#__PURE__*/CubeAdd20FilledIcon, 'CubeAdd20Filled');

const CubeAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.07 16.59c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 0 1-1.37-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 0 0-1-.66V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0l-5.76 2.3a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3ZM5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.87v3.38a5.5 5.5 0 0 1 1-1.48v-1.9l4.2-1.87a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.CubeAdd20Regular = wrapIcon_1.default( /*#__PURE__*/CubeAdd20RegularIcon, 'CubeAdd20Regular');

const CubeArrowCurveDown20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.89V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 0 0-.7.7l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm3.6-.9c0 .78-.17 1.53-.46 2.2l3.76-1.66a.5.5 0 0 1 .4.91l-4.2 1.87v4.67a.5.5 0 0 1-1 0V9.27a5.49 5.49 0 0 1-7.5.46v4.08c0 .61.37 1.16.94 1.39l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.39l-5.76-2.3a3.5 3.5 0 0 0-1.38-.25A5.47 5.47 0 0 1 11 5.5Z",
    fill: primaryFill
  }));
};

exports.CubeArrowCurveDown20Filled = wrapIcon_1.default( /*#__PURE__*/CubeArrowCurveDown20FilledIcon, 'CubeArrowCurveDown20Filled');

const CubeArrowCurveDown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.89-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 0 0-.7.7l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.71ZM2 9.73c.3.26.64.48 1 .66v3.42c0 .2.12.39.31.46l5.76 2.3c.6.24 1.26.24 1.86 0l5.76-2.3a.5.5 0 0 0 .31-.46V6.17a.5.5 0 0 0-.31-.46l-5.76-2.3a2.5 2.5 0 0 0-.4-.12 5.49 5.49 0 0 0-.6-1.06c.46-.01.93.07 1.37.25l5.76 2.3c.57.23.94.78.94 1.4v7.63a1.5 1.5 0 0 1-.94 1.39l-5.76 2.3a3.5 3.5 0 0 1-2.6 0l-5.76-2.3A1.5 1.5 0 0 1 2 13.8V9.74Zm8.54-2.02A5.5 5.5 0 0 1 9.5 9.27v4.22a.5.5 0 0 0 1 0V8.82l4.2-1.87a.5.5 0 1 0-.4-.91L10.54 7.7Z",
    fill: primaryFill
  }));
};

exports.CubeArrowCurveDown20Regular = wrapIcon_1.default( /*#__PURE__*/CubeArrowCurveDown20RegularIcon, 'CubeArrowCurveDown20Regular');

const CubeLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.85a3.54 3.54 0 0 0-.5-.03h-4a3.5 3.5 0 0 0-2.73 5.68c-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm-3 3.56a.5.5 0 1 0-.4.92l4.2 1.86v4.68a.5.5 0 0 0 1 0V8.82l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM13.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CubeLink20Filled = wrapIcon_1.default( /*#__PURE__*/CubeLink20FilledIcon, 'CubeLink20Filled');

const CubeLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.04 6.3a.5.5 0 0 1 .66-.26L10 7.95l4.3-1.9a.5.5 0 1 1 .4.9l-4.2 1.87v4.68a.5.5 0 0 1-1 0V8.82L5.3 6.96a.5.5 0 0 1-.26-.66ZM8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.85a3.54 3.54 0 0 0-.5-.03H17V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0L3.31 5.7a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3c.37.15.77.2 1.16.17.13.33.31.65.54.92-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM13.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.CubeLink20Regular = wrapIcon_1.default( /*#__PURE__*/CubeLink20RegularIcon, 'CubeLink20Regular');

const CubeMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 2.51a5 5 0 0 1 3.6 0l4.24 1.64c.58.22.96.77.96 1.4v.14a2.5 2.5 0 0 0-.6-.34l-4.96-1.9a4 4 0 0 0-2.88 0L3.6 5.35c-.22.09-.42.2-.6.34v-.14c0-.63.38-1.18.96-1.4L8.21 2.5Zm2.88 1.87a3 3 0 0 0-2.16 0l-4.96 1.9A1.5 1.5 0 0 0 3 7.69v6.63c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 0 0 2.16 0l4.96-1.9c.58-.23.96-.79.96-1.4V7.68a1.5 1.5 0 0 0-.96-1.4l-4.96-1.91ZM6.04 8.3a.5.5 0 0 1 .66-.26L10 9.46l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37v3.17a.5.5 0 1 1-1 0v-3.17L6.3 8.96a.5.5 0 0 1-.26-.66Z",
    fill: primaryFill
  }));
};

exports.CubeMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/CubeMultiple20FilledIcon, 'CubeMultiple20Filled');

const CubeMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 2.51a5 5 0 0 1 3.6 0l4.24 1.64c.58.22.96.77.96 1.4v.14a2.5 2.5 0 0 0-.6-.34l-4.96-1.9a4 4 0 0 0-2.88 0L3.6 5.34c-.22.09-.42.2-.6.34v-.14c0-.63.38-1.18.96-1.4L8.21 2.5Zm-2.16 5.8a.5.5 0 0 1 .66-.27L10 9.46l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37v3.17a.5.5 0 0 1-1 0v-3.17L6.3 8.96a.5.5 0 0 1-.26-.66Zm2.88-3.93a3 3 0 0 1 2.16 0l4.96 1.9c.58.23.96.79.96 1.4v6.63a1.5 1.5 0 0 1-.96 1.4l-4.96 1.91a3 3 0 0 1-2.16 0l-4.96-1.9a1.5 1.5 0 0 1-.96-1.4V7.68c0-.62.38-1.18.96-1.4l4.96-1.91Zm1.8.93a2 2 0 0 0-1.44 0L4.32 7.22a.5.5 0 0 0-.32.47v6.62c0 .21.13.4.32.47l4.96 1.9a2 2 0 0 0 1.44 0l4.96-1.9a.5.5 0 0 0 .32-.47V7.7a.5.5 0 0 0-.32-.47l-4.96-1.9Z",
    fill: primaryFill
  }));
};

exports.CubeMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/CubeMultiple20RegularIcon, 'CubeMultiple20Regular');

const CubeMultiple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.52 4.25a4.5 4.5 0 0 1 3.07.04l5.91 2.1a3 3 0 0 1 1 .59v-.42a2 2 0 0 0-1.33-1.88L14 2.85a6 6 0 0 0-4.02 0L4.83 4.68A2 2 0 0 0 3.5 6.56v.42a3 3 0 0 1 1-.6l5.91-2.1c.04 0 .07-.02.1-.03Zm2.73.98a3.75 3.75 0 0 0-2.5 0l-5.92 2.1A2 2 0 0 0 3.5 9.2v8.24a2 2 0 0 0 1.33 1.88l5.92 2.1c.8.29 1.7.29 2.5 0l5.92-2.1a2 2 0 0 0 1.33-1.88V9.2a2 2 0 0 0-1.33-1.88l-5.92-2.1Zm-6.8 4.88c.14-.39.57-.6.96-.45L12 11.29l4.6-1.63a.75.75 0 0 1 .5 1.4l-4.35 1.55v4.72a.75.75 0 0 1-1.5 0v-4.72l-4.34-1.54a.75.75 0 0 1-.46-.96Z",
    fill: primaryFill
  }));
};

exports.CubeMultiple24Filled = wrapIcon_1.default( /*#__PURE__*/CubeMultiple24FilledIcon, 'CubeMultiple24Filled');

const CubeMultiple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.52 4.25a4.5 4.5 0 0 1 3.07.04l5.91 2.1a3 3 0 0 1 1 .59v-.42a2 2 0 0 0-1.33-1.88L14 2.85a6 6 0 0 0-4.02 0L4.83 4.68A2 2 0 0 0 3.5 6.56v.42a3 3 0 0 1 1-.6l5.91-2.1c.04 0 .07-.02.1-.03Zm-4.07 5.86c.14-.39.57-.6.96-.45L12 11.28l4.6-1.62a.75.75 0 0 1 .5 1.4l-4.35 1.55v4.72a.75.75 0 0 1-1.5 0v-4.72l-4.34-1.54a.75.75 0 0 1-.46-.96Zm4.3-4.88c.8-.29 1.7-.29 2.5 0l5.92 2.1A2 2 0 0 1 20.5 9.2v8.24a2 2 0 0 1-1.33 1.88l-5.92 2.1c-.8.29-1.7.29-2.5 0l-5.92-2.1a2 2 0 0 1-1.33-1.88V9.2a2 2 0 0 1 1.33-1.88l5.92-2.1Zm2 1.41a2.25 2.25 0 0 0-1.5 0l-5.92 2.1a.5.5 0 0 0-.33.47v8.24c0 .2.13.4.33.47l5.92 2.1c.48.17 1.02.17 1.5 0l5.92-2.1a.5.5 0 0 0 .33-.47V9.2a.5.5 0 0 0-.33-.47l-5.92-2.1Z",
    fill: primaryFill
  }));
};

exports.CubeMultiple24Regular = wrapIcon_1.default( /*#__PURE__*/CubeMultiple24RegularIcon, 'CubeMultiple24Regular');

const CubeQuick16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.93 4.14c.36-.18.78-.18 1.14 0l2.25 1.15c.42.22.68.65.68 1.12v3.18c0 .47-.26.9-.68 1.12l-2.25 1.15c-.36.19-.78.19-1.14 0l-2.25-1.15A1.25 1.25 0 0 1 7 9.59V6.41c0-.47.26-.9.68-1.12l2.25-1.15ZM8.55 6.78a.5.5 0 0 0 .23.67l1.22.6V9.5a.5.5 0 0 0 1 0V8.06l1.22-.61a.5.5 0 1 0-.44-.9l-1.28.64-1.28-.64a.5.5 0 0 0-.67.23ZM1.5 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm.5-2c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.CubeQuick16Filled = wrapIcon_1.default( /*#__PURE__*/CubeQuick16FilledIcon, 'CubeQuick16Filled');

const CubeQuick16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.07 4.14a1.25 1.25 0 0 0-1.14 0L7.68 5.29c-.42.22-.68.65-.68 1.12v3.18c0 .47.26.9.68 1.12l2.25 1.15c.36.19.78.19 1.14 0l2.25-1.15c.42-.22.68-.65.68-1.12V6.41c0-.47-.26-.9-.68-1.12l-2.25-1.15Zm-.68.89a.25.25 0 0 1 .22 0l2.25 1.15c.09.05.14.13.14.23v3.18c0 .1-.05.18-.14.23l-2.25 1.15a.25.25 0 0 1-.22 0L8.14 9.82A.25.25 0 0 1 8 9.59V6.41c0-.1.05-.18.14-.23l2.25-1.15ZM9.22 6.55a.5.5 0 1 0-.44.9l1.22.6V9.5a.5.5 0 0 0 1 0V8.06l1.22-.61a.5.5 0 1 0-.44-.9l-1.28.64-1.28-.64ZM1.5 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm.5-2c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.CubeQuick16Regular = wrapIcon_1.default( /*#__PURE__*/CubeQuick16RegularIcon, 'CubeQuick16Regular');

const CubeQuick20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.81 4.67a1.5 1.5 0 0 1 1.38 0l3 1.54c.5.25.81.77.81 1.33v3.92a1.5 1.5 0 0 1-.81 1.33l-3 1.54a1.5 1.5 0 0 1-1.38 0l-3-1.54A1.5 1.5 0 0 1 9 11.46V7.54c0-.56.31-1.08.81-1.33l3-1.54Zm-1.76 3.1a.5.5 0 0 0 .23.68L13 9.3v2.19a.5.5 0 1 0 1 0V9.3l1.72-.85a.5.5 0 1 0-.44-.9l-1.78.9-1.78-.9a.5.5 0 0 0-.67.23ZM3.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-1 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.CubeQuick20Filled = wrapIcon_1.default( /*#__PURE__*/CubeQuick20FilledIcon, 'CubeQuick20Filled');

const CubeQuick20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.27 5.56a.5.5 0 0 1 .46 0l3 1.54a.5.5 0 0 1 .27.44v3.92a.5.5 0 0 1-.27.44l-3 1.54a.5.5 0 0 1-.46 0l-3-1.54a.5.5 0 0 1-.27-.44V7.54c0-.18.1-.36.27-.44l3-1.54Zm.92-.9a1.5 1.5 0 0 0-1.38 0l-3 1.55c-.5.26-.81.77-.81 1.33v3.92c0 .56.31 1.07.81 1.33l3 1.54c.43.22.95.22 1.38 0l3-1.54c.5-.26.81-.77.81-1.33V7.54a1.5 1.5 0 0 0-.81-1.33l-3-1.54ZM3 6.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-1 3c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm8.05-4.72a.5.5 0 0 1 .67-.23l1.78.9 1.78-.9a.5.5 0 1 1 .44.9L14 9.3v2.19a.5.5 0 1 1-1 0V9.3l-1.72-.85a.5.5 0 0 1-.23-.67Z",
    fill: primaryFill
  }));
};

exports.CubeQuick20Regular = wrapIcon_1.default( /*#__PURE__*/CubeQuick20RegularIcon, 'CubeQuick20Regular');

const CubeQuick24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.6 6.22a2 2 0 0 1 1.8 0l3.5 1.76A2 2 0 0 1 22 9.77v4.46a2 2 0 0 1-1.1 1.79l-3.5 1.77a2 2 0 0 1-1.8 0l-3.5-1.77a2 2 0 0 1-1.1-1.79V9.77a2 2 0 0 1 1.1-1.79l3.5-1.76Zm-2.02 4.19a.75.75 0 0 0 .33 1l1.84.94v1.9a.75.75 0 1 0 1.5 0v-1.9l1.84-.94a.75.75 0 0 0-.68-1.33l-1.91.97-1.91-.97a.75.75 0 0 0-1 .33ZM4.75 7a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm-2 4a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 15.75c0-.42.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.CubeQuick24Filled = wrapIcon_1.default( /*#__PURE__*/CubeQuick24FilledIcon, 'CubeQuick24Filled');

const CubeQuick24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.27 7.55a.5.5 0 0 1 .46 0l3.5 1.77a.5.5 0 0 1 .27.45v4.46a.5.5 0 0 1-.27.45l-3.5 1.77a.5.5 0 0 1-.46 0l-3.5-1.77a.5.5 0 0 1-.27-.45V9.77c0-.19.1-.36.27-.45l3.5-1.77Zm1.13-1.33a2 2 0 0 0-1.8 0l-3.5 1.76A2 2 0 0 0 11 9.77v4.46a2 2 0 0 0 1.1 1.79l3.5 1.77a2 2 0 0 0 1.8 0l3.5-1.77a2 2 0 0 0 1.1-1.79V9.77a2 2 0 0 0-1.1-1.79l-3.5-1.76ZM4 7.75c0-.42.34-.75.75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5A.75.75 0 0 1 4 7.75Zm-2 4c0-.42.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM4.75 15a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm8.83-4.6a.75.75 0 0 1 1.01-.32l1.91.97 1.91-.97a.75.75 0 0 1 .68 1.33l-1.84.94v1.9a.75.75 0 0 1-1.5 0v-1.9l-1.84-.94a.75.75 0 0 1-.33-1Z",
    fill: primaryFill
  }));
};

exports.CubeQuick24Regular = wrapIcon_1.default( /*#__PURE__*/CubeQuick24RegularIcon, 'CubeQuick24Regular');

const CubeQuick28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.61 7.2a2 2 0 0 1 1.78 0l4.5 2.23a2 2 0 0 1 1.11 1.8v5.55a2 2 0 0 1-1.11 1.79l-4.5 2.22a2 2 0 0 1-1.78 0l-4.5-2.22a2 2 0 0 1-1.11-1.8v-5.55a2 2 0 0 1 1.11-1.79l4.5-2.22Zm-2.52 4.7c-.2.35-.06.81.3 1l2.36 1.3v3.05a.75.75 0 1 0 1.5 0V14.2l2.36-1.3a.75.75 0 0 0-.72-1.3l-2.39 1.3-2.4-1.3a.75.75 0 0 0-1 .3ZM4.75 8.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm-2 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM4 18.25c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.CubeQuick28Filled = wrapIcon_1.default( /*#__PURE__*/CubeQuick28FilledIcon, 'CubeQuick28Filled');

const CubeQuick28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.72 8.55a.5.5 0 0 0-.44 0l-4.5 2.23a.5.5 0 0 0-.28.44v5.56c0 .19.1.36.28.44l4.5 2.23c.14.07.3.07.44 0l4.5-2.23a.5.5 0 0 0 .28-.44v-5.56a.5.5 0 0 0-.28-.44l-4.5-2.23Zm-1.1-1.34a2 2 0 0 1 1.77 0l4.5 2.22a2 2 0 0 1 1.11 1.8v5.55a2 2 0 0 1-1.11 1.79l-4.5 2.22a2 2 0 0 1-1.78 0l-4.5-2.22a2 2 0 0 1-1.11-1.8v-5.55a2 2 0 0 1 1.11-1.79l4.5-2.22ZM4 9.25c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 4 9.25Zm-2 4.5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm2.75 3.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm11.36-5.9a.75.75 0 1 0-.72 1.3l2.36 1.3v3.05a.75.75 0 0 0 1.5 0V14.2l2.36-1.3a.75.75 0 1 0-.72-1.3l-2.39 1.3-2.4-1.3Z",
    fill: primaryFill
  }));
};

exports.CubeQuick28Regular = wrapIcon_1.default( /*#__PURE__*/CubeQuick28RegularIcon, 'CubeQuick28Regular');

const CubeRotate20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.53 2.63c.93-.43 2-.43 2.94 0l4.66 2.15c.53.24.87.78.87 1.36V8h-1a1.5 1.5 0 0 0-.81 2.76A10.54 10.54 0 0 1 9.99 12c-2.1 0-3.92-.5-5.18-1.24A1.5 1.5 0 0 0 4 8H3V6.14c0-.58.34-1.12.87-1.36l4.66-2.15ZM6.7 6.54a.5.5 0 0 0-.4.92l3.2 1.37v1.67a.5.5 0 1 0 1 0V8.83l3.2-1.37a.5.5 0 1 0-.4-.92L10 7.96 6.7 6.54Zm8.8 2.96c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1.64 1.37A12.4 12.4 0 0 1 10 14a12.4 12.4 0 0 1-6.36-1.61A6.2 6.2 0 0 1 2 11.02V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48a4.12 4.12 0 0 0 .92 1 6.57 6.57 0 0 0 .76.54c.4.25.87.47 1.37.67 1.27.5 2.8.8 4.47.8s3.2-.3 4.47-.8a8.67 8.67 0 0 0 2.13-1.2 5.24 5.24 0 0 0 .92-1H16a.5.5 0 0 1-.5-.5ZM10 15c-2.66 0-5.16-.67-7-1.83v.7c0 .58.34 1.1.87 1.35l4.66 2.15c.93.43 2 .43 2.94 0l4.66-2.15c.53-.24.87-.77.87-1.36v-.69A13.32 13.32 0 0 1 10 15Z",
    fill: primaryFill
  }));
};

exports.CubeRotate20Filled = wrapIcon_1.default( /*#__PURE__*/CubeRotate20FilledIcon, 'CubeRotate20Filled');

const CubeRotate20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.95 3.53a2.5 2.5 0 0 1 2.1 0L15.7 5.7a.5.5 0 0 1 .29.45V8h1V6.14a1.5 1.5 0 0 0-.87-1.36l-4.66-2.15a3.5 3.5 0 0 0-2.94 0L3.87 4.78A1.5 1.5 0 0 0 3 6.14V8h1V6.14c0-.2.11-.37.29-.45l4.66-2.16ZM3.4 11a6.46 6.46 0 0 0 .76.54A11.4 11.4 0 0 0 10 13a11.4 11.4 0 0 0 6-1.56 6.46 6.46 0 0 0 1-.8c.2-.21.38-.42.52-.64H16a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1.64 1.37l-.36.21c-1.6.87-3.7 1.4-6 1.4a12.67 12.67 0 0 1-6.36-1.61A6.2 6.2 0 0 1 2 11.02V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48a4.12 4.12 0 0 0 .92 1Zm.6 2.72v.14c0 .2.11.37.29.45l4.66 2.16c.67.3 1.43.3 2.1 0l4.66-2.16a.5.5 0 0 0 .29-.45v-.14a10 10 0 0 0 1-.55v.7a1.5 1.5 0 0 1-.87 1.35l-4.66 2.15c-.93.43-2 .43-2.94 0l-4.66-2.15A1.5 1.5 0 0 1 3 13.86v-.69c.31.2.65.39 1 .55ZM6.04 6.8a.5.5 0 0 1 .66-.26L10 7.96l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37V11a.5.5 0 1 1-1 0V8.83L6.3 7.46a.5.5 0 0 1-.26-.66Z",
    fill: primaryFill
  }));
};

exports.CubeRotate20Regular = wrapIcon_1.default( /*#__PURE__*/CubeRotate20RegularIcon, 'CubeRotate20Regular');

const CubeSync20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.48 5.48 0 0 0-7.5.47v-1.9l4.2-1.87a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9a.5.5 0 1 0-.4.9l4.2 1.87v3.39a5.48 5.48 0 0 0 .58 5.56 3.5 3.5 0 0 1-1.38-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.CubeSync20Filled = wrapIcon_1.default( /*#__PURE__*/CubeSync20FilledIcon, 'CubeSync20Filled');

const CubeSync20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.86v3.39a5.5 5.5 0 0 1 1-1.48v-1.9l4.2-1.87a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM9.07 16.6c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 0 1-1.37-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 0 0-1-.66V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0l-5.76 2.3a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.CubeSync20Regular = wrapIcon_1.default( /*#__PURE__*/CubeSync20RegularIcon, 'CubeSync20Regular');

const CubeSync24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.4 2.51a3.75 3.75 0 0 0-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .71.43 1.35 1.1 1.62l7.5 3.04c.62.25 1.3.33 1.96.23a6.47 6.47 0 0 1-1.31-6.01v-4.95l-4.77-1.8a.75.75 0 0 1 .54-1.41L12 9.45l4.98-1.9a.75.75 0 1 1 .54 1.4l-4.77 1.81v2.3a6.48 6.48 0 0 1 9.25-.25V7.17c0-.7-.43-1.35-1.1-1.62l-7.5-3.04Zm-1.4 15a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm8.5-3.5c.28 0 .5.21.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-4.03.03.5.5 0 0 1-.8-.59 3.5 3.5 0 0 1 5.33-.4v-.55c0-.28.22-.5.5-.5ZM15 19.94v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 1 1 0 1h-1a2.5 2.5 0 0 0 3.91.11.5.5 0 0 1 .77.65 3.5 3.5 0 0 1-5.18.19Z",
    fill: primaryFill
  }));
};

exports.CubeSync24Filled = wrapIcon_1.default( /*#__PURE__*/CubeSync24FilledIcon, 'CubeSync24Filled');

const CubeSync24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.05 7.99a.75.75 0 0 1 .97-.44L12 9.45l4.98-1.9a.75.75 0 1 1 .54 1.4l-4.77 1.81v2.3a6.49 6.49 0 0 0-1.5 2.65v-4.95l-4.77-1.8a.75.75 0 0 1-.43-.97Zm14.45-.82v4.56c.55.29 1.06.65 1.5 1.08V7.17c0-.7-.43-1.35-1.1-1.62l-7.5-3.04a3.75 3.75 0 0 0-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .71.43 1.35 1.1 1.62l7.5 3.04c.62.25 1.3.33 1.96.23a6.5 6.5 0 0 1-.96-1.5c-.15-.02-.3-.06-.45-.12l-7.5-3.04a.25.25 0 0 1-.15-.23V7.17c0-.1.06-.19.16-.23l7.5-3.04a2.25 2.25 0 0 1 1.69 0l7.5 3.04c.09.04.15.13.15.23ZM12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm8.5-3.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-4.03.04.5.5 0 0 1-.8-.59 3.5 3.5 0 0 1 5.33-.4v-.55c0-.28.22-.5.5-.5ZM15 19.95v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 1 1 0 1h-1a2.5 2.5 0 0 0 3.91.11.5.5 0 0 1 .77.65 3.5 3.5 0 0 1-5.18.19Z",
    fill: primaryFill
  }));
};

exports.CubeSync24Regular = wrapIcon_1.default( /*#__PURE__*/CubeSync24RegularIcon, 'CubeSync24Regular');

const CubeTree20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.57 2.07c.28-.09.58-.09.86 0l2.85.85a1 1 0 0 1 .72.95v4.26a1 1 0 0 1-.72.96l-2.79.83a.5.5 0 0 1 .01.08v1H12a2 2 0 0 1 2 2v.05a2.5 2.5 0 1 1-1 0V13a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.05a2.5 2.5 0 1 1-1 0V13c0-1.1.9-2 2-2h1.5v-1a.5.5 0 0 1 0-.08l-2.78-.83A1 1 0 0 1 6 8.13V3.87a1 1 0 0 1 .72-.95l2.85-.85Zm-.91 2.46a.5.5 0 0 0-.32.95l1.16.38V7a.5.5 0 0 0 1 0V5.86l1.16-.38a.5.5 0 1 0-.32-.95L10 4.97l-1.34-.44Z",
    fill: primaryFill
  }));
};

exports.CubeTree20Filled = wrapIcon_1.default( /*#__PURE__*/CubeTree20FilledIcon, 'CubeTree20Filled');

const CubeTree20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.66 4.53a.5.5 0 0 0-.32.95l1.16.38V7a.5.5 0 0 0 1 0V5.86l1.16-.38a.5.5 0 1 0-.32-.95L10 4.97l-1.34-.44Zm1.77-2.46a1.5 1.5 0 0 0-.86 0l-2.86.85a.99.99 0 0 0-.71.95v4.26c0 .44.3.83.72.96l2.79.83a.5.5 0 0 0-.01.08v1H8a2 2 0 0 0-2 2v.05a2.5 2.5 0 1 0 1 0V13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.05a2.5 2.5 0 1 0 1 0V13a2 2 0 0 0-2-2h-1.5v-1a.5.5 0 0 0 0-.08l2.78-.83a1 1 0 0 0 .72-.96V3.87a1 1 0 0 0-.72-.95l-2.85-.85Zm-.57.95a.5.5 0 0 1 .28 0l2.86.85v4.26l-2.86.85a.5.5 0 0 1-.28 0L7 8.13V3.87l2.86-.85ZM5 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm8.5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
};

exports.CubeTree20Regular = wrapIcon_1.default( /*#__PURE__*/CubeTree20RegularIcon, 'CubeTree20Regular');

const CubeTree24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.76 2.04a.75.75 0 0 1 .48 0l3.75 1.25c.3.1.51.39.51.71v5c0 .32-.2.6-.51.71l-3.24 1.08V13h1.75c1.24 0 2.25 1 2.25 2.25v.84a3 3 0 1 1-1.5 0v-.84a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v.84a3 3 0 1 1-1.5 0v-.84c0-1.24 1-2.25 2.25-2.25h1.75v-2.2L8.01 9.7A.75.75 0 0 1 7.5 9V4c0-.32.2-.6.51-.71l3.75-1.25ZM9.8 5.5c-.13.4.08.82.47.95l.99.33v.96a.75.75 0 0 0 1.5 0v-.96l.99-.33a.75.75 0 0 0-.48-1.42L12 5.46l-1.26-.42a.75.75 0 0 0-.95.47Z",
    fill: primaryFill
  }));
};

exports.CubeTree24Filled = wrapIcon_1.default( /*#__PURE__*/CubeTree24FilledIcon, 'CubeTree24Filled');

const CubeTree24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.79 5.51c.13-.39.55-.6.95-.47l1.26.42 1.26-.42a.75.75 0 0 1 .48 1.42l-.99.33v.96a.75.75 0 0 1-1.5 0v-.96l-.99-.33a.75.75 0 0 1-.47-.95Zm2.45-3.47a.75.75 0 0 0-.48 0L8.01 3.29c-.3.1-.51.39-.51.71v5c0 .32.2.6.51.71l3.24 1.08V13H9.5c-1.24 0-2.25 1-2.25 2.25v.84a3 3 0 1 0 1.5 0v-.84c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v.84a3 3 0 1 0 1.5 0v-.84c0-1.24-1-2.25-2.25-2.25h-1.75v-2.2l3.24-1.09c.3-.1.51-.39.51-.71V4c0-.32-.2-.6-.51-.71l-3.75-1.25ZM9 8.46V4.54l3-1 3 1v3.92l-3 1-3-1ZM8 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
};

exports.CubeTree24Regular = wrapIcon_1.default( /*#__PURE__*/CubeTree24RegularIcon, 'CubeTree24Regular');

const CurrencyDollarEuro16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 2a.75.75 0 0 0-.75.75v.35c-1.15.33-2 1.4-2 2.65v.04c0 1.1.65 2.1 1.67 2.55L4 8.5v2.75c-.3-.23-.5-.6-.5-1v-.6a.75.75 0 0 0-1.5 0v.6c0 1.26.85 2.32 2 2.65v.36a.75.75 0 1 0 1.5 0v-.36a2.78 2.78 0 0 0 .34-5.23L5.5 7.5V4.75c.3.23.5.6.5 1v.62a.75.75 0 1 0 1.5 0v-.62c0-1.26-.84-2.32-2-2.65v-.35A.75.75 0 0 0 4.75 2ZM3.5 5.75c0-.4.2-.77.5-1v2.06c-.31-.24-.5-.62-.5-1.02v-.04Zm2 5.48V9.2c.31.24.5.62.5 1.03 0 .41-.2.78-.5 1.01Zm5-3.23h.75a.75.75 0 0 0 0-1.5h-.55c.11-.42.28-.8.47-1.1.4-.65.87-.9 1.26-.9.14 0 .28.05.38.11a.75.75 0 1 0 .88-1.2c-.38-.28-.84-.4-1.26-.4-1.09 0-1.96.69-2.53 1.59-.34.54-.6 1.19-.75 1.9h-.4a.75.75 0 1 0 0 1.5H9c0 .34.02.67.07 1h-.32a.75.75 0 1 0 0 1.5h.7c.12.32.28.63.45.9.57.9 1.44 1.6 2.53 1.6.4 0 .88-.1 1.28-.41a.75.75 0 1 0-.92-1.19c-.07.06-.2.1-.36.1-.39 0-.86-.25-1.26-.9a3.22 3.22 0 0 1-.06-.1h.14a.75.75 0 1 0 0-1.5h-.67a5.86 5.86 0 0 1-.08-1Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro16Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro16FilledIcon, 'CurrencyDollarEuro16Filled');

const CurrencyDollarEuro16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2a.5.5 0 0 0-.5.5v.33a2.7 2.7 0 0 0-2 2.6v.1c0 1.1.65 2.1 1.65 2.55l.35.16v3.87a1.7 1.7 0 0 1-1-1.55v-.72a.5.5 0 0 0-1 0v.72c0 1.25.85 2.3 2 2.61v.34a.5.5 0 0 0 1 0v-.26a2.7 2.7 0 0 0 2.4-2.69v-.09c0-1.1-.64-2.1-1.65-2.54L5 7.59V3.76c.8.14 1.4.84 1.4 1.67v.74a.5.5 0 0 0 1 0v-.74A2.7 2.7 0 0 0 5 2.75V2.5a.5.5 0 0 0-.5-.5ZM3 5.43c0-.68.41-1.28 1-1.55v3.26c-.61-.3-1-.93-1-1.61v-.1Zm2 6.8V8.69l.34.16c.65.29 1.06.93 1.06 1.63v.09c0 .84-.6 1.53-1.4 1.68ZM9.07 9A7.07 7.07 0 0 1 9 8h-.5a.5.5 0 0 1 0-1h.57c.13-.94.45-1.8.91-2.47C10.6 3.63 11.5 3 12.56 3c.4 0 .85.12 1.22.36a.5.5 0 0 1-.56.83 1.22 1.22 0 0 0-.66-.19c-.63 0-1.26.38-1.75 1.1-.35.51-.6 1.17-.73 1.91h.42a.5.5 0 0 1 0 1H10c0 .35.03.68.08 1h.42a.5.5 0 1 1 0 1h-.15c.12.33.28.64.46.9.5.72 1.12 1.1 1.75 1.1.25 0 .49-.06.65-.18a.5.5 0 0 1 .58.82c-.38.26-.84.36-1.23.36-1.06 0-1.96-.63-2.58-1.54A5.45 5.45 0 0 1 9.3 10h-.8a.5.5 0 0 1 0-1h.58Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro16Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro16RegularIcon, 'CurrencyDollarEuro16Regular');

const CurrencyDollarEuro20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2a.75.75 0 0 0-.75.75v.33A3.5 3.5 0 0 0 2 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 0 1-1.25-1.86V12.4a.75.75 0 0 0-1.5 0v1.08a3.5 3.5 0 0 0 2.75 3.42v.35a.75.75 0 0 0 1.5 0v-.35A3.5 3.5 0 0 0 9 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 0 1 7.5 6.5v1.1a.75.75 0 0 0 1.5 0V6.5a3.5 3.5 0 0 0-2.75-3.42v-.33A.75.75 0 0 0 5.5 2Zm-2 4.5a2 2 0 0 1 1.25-1.86v4.18A2.28 2.28 0 0 1 3.5 6.78V6.5Zm2.75 8.84v-4.16a2.27 2.27 0 0 1 1.25 2.03v.27a2 2 0 0 1-1.25 1.86ZM12.5 10c0-.34.02-.66.06-.98h1.7a.75.75 0 0 0 0-1.5h-1.38A6.1 6.1 0 0 1 13.61 6c.67-1 1.52-1.5 2.36-1.5.3 0 .63.1.86.25a.75.75 0 0 0 .84-1.24 3.1 3.1 0 0 0-1.7-.51c-1.49 0-2.75.9-3.6 2.16a7.8 7.8 0 0 0-1.05 2.36h-.57a.75.75 0 0 0 0 1.5h.3a10.02 10.02 0 0 0-.05 1h-.25a.75.75 0 1 0 0 1.5h.37a8.2 8.2 0 0 0 1.25 3.32c.85 1.26 2.11 2.16 3.6 2.16.54 0 1.2-.14 1.72-.52a.75.75 0 1 0-.87-1.22c-.21.15-.53.24-.85.24-.84 0-1.69-.5-2.36-1.5a6.6 6.6 0 0 1-.97-2.48h1.61a.75.75 0 1 0 0-1.5H12.5V10Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro20Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro20FilledIcon, 'CurrencyDollarEuro20Filled');

const CurrencyDollarEuro20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2a.5.5 0 0 0-.5.5v.54c-1.7.24-3 1.7-3 3.46v.13c0 1.43.84 2.73 2.14 3.31l.86.38v5.62a2.5 2.5 0 0 1-2-2.45v-.99a.5.5 0 1 0-1 0v.99a3.5 3.5 0 0 0 3 3.46v.55a.5.5 0 0 0 1 0v-.55c1.7-.24 3-1.7 3-3.46v-.12c0-1.43-.84-2.72-2.14-3.3L6 9.66V4.06A2.5 2.5 0 0 1 8 6.5v1a.5.5 0 0 0 1 0v-1a3.5 3.5 0 0 0-3-3.46V2.5a.5.5 0 0 0-.5-.5ZM3 6.5c0-1.2.86-2.22 2-2.45v5.18l-.45-.2A2.63 2.63 0 0 1 3 6.63V6.5Zm3 9.44v-5.17l.45.2A2.62 2.62 0 0 1 8 13.37v.12a2.5 2.5 0 0 1-2 2.45ZM12 10c0-.34.02-.68.06-1h1.44a.5.5 0 1 0 0-1h-1.26c.21-.89.57-1.67 1.01-2.3.77-1.1 1.78-1.7 2.85-1.7.39 0 .81.11 1.12.31a.5.5 0 1 0 .55-.84A3.15 3.15 0 0 0 16.1 3c-1.48 0-2.76.85-3.66 2.12-.57.8-1 1.79-1.23 2.88h-.71a.5.5 0 1 0 0 1h.55a9.7 9.7 0 0 0-.05 1h-.5a.5.5 0 0 0 0 1h.55c.16 1.5.65 2.84 1.39 3.88A4.55 4.55 0 0 0 16.1 17c.54 0 1.17-.13 1.68-.48a.5.5 0 0 0-.56-.82c-.3.2-.72.3-1.12.3-1.07 0-2.08-.6-2.85-1.7a7.19 7.19 0 0 1-1.2-3.3h1.45a.5.5 0 0 0 0-1H12Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro20Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro20RegularIcon, 'CurrencyDollarEuro20Regular');

const CurrencyDollarEuro24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2a1 1 0 0 0-1 1v.11A4.5 4.5 0 0 0 2 7.5v.38c0 1.9 1.09 3.61 2.8 4.42l.7.33v6.14a2.5 2.5 0 0 1-1.5-2.3v-.84a1 1 0 1 0-2 0v.85a4.5 4.5 0 0 0 3.5 4.39v.12a1 1 0 0 0 2 0v-.12a4.5 4.5 0 0 0 3.5-4.4v-.36c0-1.89-1.09-3.6-2.8-4.41l-.7-.34V5.21A2.5 2.5 0 0 1 9 7.5v.86a1 1 0 1 0 2 0V7.5a4.5 4.5 0 0 0-3.5-4.39V3a1 1 0 0 0-1-1ZM4 7.5c0-1.03.62-1.9 1.5-2.3v5.21A2.88 2.88 0 0 1 4 7.88V7.5Zm3.5 11.27v-5.19c.92.5 1.5 1.47 1.5 2.53v.37a2.5 2.5 0 0 1-1.5 2.3ZM15 12c0-.33.01-.66.04-.98H16a1 1 0 0 0 0-2h-.58c.24-.8.58-1.52.98-2.12.85-1.27 1.92-1.9 2.96-1.9.38 0 .79.12 1.07.31a1 1 0 1 0 1.13-1.65 3.97 3.97 0 0 0-2.2-.66c-1.91 0-3.53 1.16-4.62 2.79-.62.92-1.1 2.02-1.39 3.23H12a1 1 0 1 0 0 2h1.04c-.03.33-.04.65-.04.98v.03h-1a1 1 0 1 0 0 2h1.16c.25 1.59.8 3.03 1.58 4.18 1.1 1.63 2.7 2.79 4.62 2.79.7 0 1.54-.17 2.23-.67a1 1 0 0 0-1.18-1.62c-.25.18-.64.29-1.05.29-1.04 0-2.1-.63-2.96-1.9a8.4 8.4 0 0 1-1.21-3.07H16a1 1 0 0 0 0-2h-1V12Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro24Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro24FilledIcon, 'CurrencyDollarEuro24Filled');

const CurrencyDollarEuro24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 2a.75.75 0 0 0-.75.75v.32A4.25 4.25 0 0 0 2 7.25v.54a4.75 4.75 0 0 0 2.67 4.27l.83.4v6.92a2.75 2.75 0 0 1-2-2.65v-.98a.75.75 0 0 0-1.5 0v.98c0 2.1 1.51 3.83 3.5 4.18v.34a.75.75 0 0 0 1.5 0v-.34a4.25 4.25 0 0 0 3.5-4.18v-.53a4.75 4.75 0 0 0-2.67-4.27l-.83-.4V4.6c1.16.33 2 1.4 2 2.65v1a.75.75 0 1 0 1.5 0v-1c0-2.1-1.51-3.83-3.5-4.18v-.32A.75.75 0 0 0 6.25 2ZM3.5 7.25c0-1.26.85-2.32 2-2.65v6.2l-.17-.09A3.25 3.25 0 0 1 3.5 7.8v-.54ZM7 19.37V13.2l.17.08A3.25 3.25 0 0 1 9 16.2v.53c0 1.26-.84 2.32-2 2.64ZM14.5 12l.01-.5h1.74a.75.75 0 1 0 0-1.5h-1.57a8.8 8.8 0 0 1 1.37-3.4c.94-1.36 2.18-2.1 3.45-2.1.47 0 .97.14 1.34.38a.75.75 0 0 0 .82-1.26A4.03 4.03 0 0 0 19.5 3c-1.9 0-3.54 1.1-4.68 2.74A10.39 10.39 0 0 0 13.16 10h-1.4a.75.75 0 1 0-.01 1.5h1.26a12.65 12.65 0 0 0 0 1h-1.26a.75.75 0 0 0 0 1.5h1.41c.26 1.62.84 3.1 1.66 4.26C15.96 19.9 17.6 21 19.5 21c.7 0 1.52-.17 2.18-.63a.75.75 0 0 0-.85-1.23 2.4 2.4 0 0 1-1.33.36c-1.27 0-2.5-.74-3.45-2.1a8.8 8.8 0 0 1-1.37-3.4h1.57a.75.75 0 1 0 0-1.5H14.5l-.01-.5Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarEuro24Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarEuro24RegularIcon, 'CurrencyDollarEuro24Regular');

const CurrencyDollarRupee16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2.75a.75.75 0 0 0-1.5 0v.35c-1.15.33-2 1.4-2 2.65v.04c0 1.1.65 2.1 1.67 2.55L4 8.5v2.75c-.3-.23-.5-.6-.5-1v-.6a.75.75 0 0 0-1.5 0v.6c0 1.26.85 2.32 2 2.65v.36a.75.75 0 1 0 1.5 0v-.36a2.78 2.78 0 0 0 .34-5.23L5.5 7.5V4.75c.3.23.5.6.5 1v.62a.75.75 0 1 0 1.5 0v-.62c0-1.26-.84-2.32-2-2.65v-.35Zm-1.5 2v2.06c-.31-.24-.5-.62-.5-1.02v-.04c0-.4.2-.77.5-1Zm1.5 4.44c.31.24.5.62.5 1.03 0 .41-.2.78-.5 1.01V9.2ZM8 3.25c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-.4c.09.16.17.33.23.5h.17a.75.75 0 0 1 0 1.5h-.04a3 3 0 0 1-2.88 2.5l3.5 4.28a.75.75 0 0 1-1.16.95l-4.5-5.5A.75.75 0 0 1 8.75 7h1.5c.65 0 1.2-.42 1.41-1H8.75a.75.75 0 1 1 0-1.5h2.62a1.5 1.5 0 0 0-1.12-.5h-1.5A.75.75 0 0 1 8 3.25Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee16Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee16FilledIcon, 'CurrencyDollarRupee16Filled');

const CurrencyDollarRupee16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2.5a.5.5 0 1 0-1 0v.33a2.7 2.7 0 0 0-2 2.6v.1c0 1.1.65 2.1 1.65 2.55l.35.16v3.87a1.7 1.7 0 0 1-1-1.55v-.72a.5.5 0 0 0-1 0v.72c0 1.25.85 2.3 2 2.61v.34a.5.5 0 0 0 1 0v-.26a2.7 2.7 0 0 0 2.4-2.69v-.09c0-1.1-.64-2.1-1.65-2.54L5 7.59V3.76c.8.14 1.4.84 1.4 1.67v.74a.5.5 0 0 0 1 0v-.74A2.7 2.7 0 0 0 5 2.75V2.5ZM4 3.88v3.26c-.61-.3-1-.93-1-1.61v-.1c0-.68.41-1.28 1-1.55Zm1 4.8.34.16c.65.29 1.06.93 1.06 1.63v.09c0 .84-.6 1.53-1.4 1.68V8.68ZM8 3.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-1c.22.29.37.63.45 1h.55a.5.5 0 0 1 0 1h-.55a2.5 2.5 0 0 1-2.45 2h-.93l4.31 5.18a.5.5 0 0 1-.76.64l-5-6A.5.5 0 0 1 8.5 7h2c.65 0 1.2-.42 1.41-1H8.5a.5.5 0 1 1 0-1h3.41c-.2-.58-.76-1-1.41-1h-2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee16Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee16RegularIcon, 'CurrencyDollarRupee16Regular');

const CurrencyDollarRupee20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 2.75a.75.75 0 1 0-1.5 0v.33A3.5 3.5 0 0 0 2 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 0 1-1.25-1.86V12.4a.75.75 0 0 0-1.5 0v1.08a3.5 3.5 0 0 0 2.75 3.42v.35a.75.75 0 0 0 1.5 0v-.35A3.5 3.5 0 0 0 9 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 0 1 7.5 6.5v1.1a.75.75 0 0 0 1.5 0V6.5a3.5 3.5 0 0 0-2.75-3.42v-.33Zm-1.5 1.9v4.17A2.28 2.28 0 0 1 3.5 6.78V6.5a2 2 0 0 1 1.25-1.86Zm1.5 6.53a2.27 2.27 0 0 1 1.25 2.03v.27a2 2 0 0 1-1.25 1.86v-4.16ZM10.75 3a.75.75 0 0 0 0 1.5h2.75c.88 0 1.65.5 2.02 1.25h-4.77a.75.75 0 0 0 0 1.5h4.94A2.25 2.25 0 0 1 13.5 9h-2.75a.75.75 0 0 0-.57 1.24l6.5 7.5a.75.75 0 1 0 1.14-.98l-5.43-6.26h1.11c1.9 0 3.47-1.42 3.72-3.25h.03a.75.75 0 0 0 0-1.5h-.13a3.74 3.74 0 0 0-.62-1.25h.75a.75.75 0 0 0 0-1.5h-6.5Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee20Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee20FilledIcon, 'CurrencyDollarRupee20Filled');

const CurrencyDollarRupee20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2c.28 0 .5.22.5.5v.54c1.7.24 3 1.7 3 3.46v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-2-2.45v5.63l.86.38A3.62 3.62 0 0 1 9 13.36v.13a3.5 3.5 0 0 1-3 3.46v.55a.5.5 0 0 1-1 0v-.55a3.5 3.5 0 0 1-3-3.46v-.99a.5.5 0 1 1 1 0v.99a2.5 2.5 0 0 0 2 2.45v-5.62l-.86-.38A3.63 3.63 0 0 1 2 6.63V6.5a3.5 3.5 0 0 1 3-3.46V2.5c0-.28.22-.5.5-.5ZM3 6.5v.13c0 1.03.6 1.97 1.55 2.4l.45.2V4.05A2.5 2.5 0 0 0 3 6.5Zm3 9.44a2.5 2.5 0 0 0 2-2.45v-.12c0-1.04-.6-1.97-1.55-2.4l-.45-.2v5.17ZM10 3.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0-3c0-.28.22-.5.5-.5h3a3.5 3.5 0 1 1 0 7h-1.9l6.28 7.17a.5.5 0 0 1-.76.66l-7-8A.5.5 0 0 1 10.5 9h3a2.5 2.5 0 0 0 0-5h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee20Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee20RegularIcon, 'CurrencyDollarRupee20Regular');

const CurrencyDollarRupee24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 3v.11A4.5 4.5 0 0 1 11 7.5v.86a1 1 0 1 1-2 0V7.5a2.5 2.5 0 0 0-1.5-2.3v6.16l.7.34c1.71.8 2.8 2.52 2.8 4.4v.38a4.5 4.5 0 0 1-3.5 4.39v.12a1 1 0 0 1-2 0v-.12a4.5 4.5 0 0 1-3.5-4.4v-.84a1 1 0 1 1 2 0v.85c0 1.02.62 1.9 1.5 2.3v-6.15l-.7-.33A4.88 4.88 0 0 1 2 7.88V7.5a4.5 4.5 0 0 1 3.5-4.39V3a1 1 0 0 1 2 0Zm-2 2.2A2.5 2.5 0 0 0 4 7.5v.38c0 1.06.58 2.03 1.5 2.53v-5.2Zm2 8.38v5.2a2.5 2.5 0 0 0 1.5-2.3v-.37c0-1.06-.58-2.03-1.5-2.53ZM13 3a1 1 0 0 0 0 2h2.5c.82 0 1.54.4 2 1H13a1 1 0 1 0 0 2h4.95a2.5 2.5 0 0 1-2.45 2H13a1 1 0 0 0-.82 1.57l7 10a1 1 0 0 0 1.64-1.14L14.92 12h.58a4.5 4.5 0 0 0 4.47-4H21a1 1 0 1 0 0-2h-1.26c-.12-.36-.3-.7-.5-1H21a1 1 0 1 0 0-2h-8Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee24Filled = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee24FilledIcon, 'CurrencyDollarRupee24Filled');

const CurrencyDollarRupee24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2.75a.75.75 0 1 0-1.5 0v.32A4.25 4.25 0 0 0 2 7.25v.54a4.75 4.75 0 0 0 2.67 4.27l.83.4v6.92a2.75 2.75 0 0 1-2-2.65v-.98a.75.75 0 0 0-1.5 0v.98c0 2.1 1.51 3.83 3.5 4.18v.34a.75.75 0 0 0 1.5 0v-.34a4.25 4.25 0 0 0 3.5-4.18v-.53a4.75 4.75 0 0 0-2.67-4.27l-.83-.4V4.6c1.16.33 2 1.4 2 2.65v1a.75.75 0 1 0 1.5 0v-1c0-2.1-1.51-3.83-3.5-4.18v-.32ZM5.5 4.6v6.2l-.17-.09A3.25 3.25 0 0 1 3.5 7.8v-.54c0-1.26.85-2.32 2-2.65ZM7 13.2l.17.08A3.25 3.25 0 0 1 9 16.2v.53c0 1.26-.84 2.32-2 2.64V13.2ZM12.75 3a.75.75 0 0 0 0 1.5H15c1.07 0 2 .6 2.45 1.5h-4.7a.75.75 0 0 0 0 1.5h4.99A2.75 2.75 0 0 1 15 10h-2.25a.75.75 0 0 0-.61 1.19l7.5 10.5a.75.75 0 1 0 1.22-.88l-6.65-9.31H15a4.25 4.25 0 0 0 4.24-4h2.01a.75.75 0 0 0 0-1.5h-2.19a4.24 4.24 0 0 0-.82-1.5h3.01a.75.75 0 0 0 0-1.5h-8.5Z",
    fill: primaryFill
  }));
};

exports.CurrencyDollarRupee24Regular = wrapIcon_1.default( /*#__PURE__*/CurrencyDollarRupee24RegularIcon, 'CurrencyDollarRupee24Regular');

const Cursor20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.64 2.29A1 1 0 0 0 5 3.06v14a1 1 0 0 0 1.76.65l3.52-4.07c.28-.33.7-.52 1.13-.52h5.6a1 1 0 0 0 .63-1.77l-11-9.06Z",
    fill: primaryFill
  }));
};

exports.Cursor20Filled = wrapIcon_1.default( /*#__PURE__*/Cursor20FilledIcon, 'Cursor20Filled');

const Cursor20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.06a1 1 0 0 1 1.64-.77l11 9.06a1 1 0 0 1-.63 1.77h-5.6c-.43 0-.85.19-1.13.52L6.76 17.7A1 1 0 0 1 5 17.06v-14Zm12 9.06L6 3.06v14l3.52-4.08a2.5 2.5 0 0 1 1.9-.86H17Z",
    fill: primaryFill
  }));
};

exports.Cursor20Regular = wrapIcon_1.default( /*#__PURE__*/Cursor20RegularIcon, 'Cursor20Regular');

const Cursor24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.92 2.3A1.5 1.5 0 0 0 5.5 3.48V20.5a1.5 1.5 0 0 0 2.68.93l4.19-5.3c.31-.4.79-.62 1.3-.62h6.84a1.5 1.5 0 0 0 .93-2.69L7.92 2.3Z",
    fill: primaryFill
  }));
};

exports.Cursor24Filled = wrapIcon_1.default( /*#__PURE__*/Cursor24FilledIcon, 'Cursor24Filled');

const Cursor24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3.48A1.5 1.5 0 0 1 7.92 2.3L21.44 12.8a1.5 1.5 0 0 1-.93 2.69h-6.85c-.5 0-.98.23-1.3.62l-4.18 5.3a1.5 1.5 0 0 1-2.68-.93v-17ZM20.51 14 7 3.48V20.5l4.2-5.3c.59-.75 1.5-1.2 2.46-1.2h6.85Z",
    fill: primaryFill
  }));
};

exports.Cursor24Regular = wrapIcon_1.default( /*#__PURE__*/Cursor24RegularIcon, 'Cursor24Regular');

const CursorClick20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM3.61 3.61c.2-.2.51-.2.7 0l1.42 1.42a.5.5 0 1 1-.7.7L3.6 4.32a.5.5 0 0 1 0-.7Zm7.78 0c.2.2.2.51 0 .7L9.97 5.74a.5.5 0 1 1-.7-.7l1.41-1.42c.2-.2.51-.2.7 0ZM2 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm5.5.53v9.26c0 .45.54.67.85.36l2.56-2.56a2 2 0 0 1 1.42-.59h3.23a.5.5 0 0 0 .31-.9L8.31 7.65a.5.5 0 0 0-.81.4Z",
    fill: primaryFill
  }));
};

exports.CursorClick20Filled = wrapIcon_1.default( /*#__PURE__*/CursorClick20FilledIcon, 'CursorClick20Filled');

const CursorClick20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM3.61 3.61c.2-.2.51-.2.7 0l1.42 1.42a.5.5 0 1 1-.7.7L3.6 4.32a.5.5 0 0 1 0-.7Zm7.78 0c.2.2.2.51 0 .7L9.97 5.74a.5.5 0 1 1-.7-.7l1.41-1.42c.2-.2.51-.2.7 0ZM2 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6.64-.2A1 1 0 0 0 7 8.07v9.1a1 1 0 0 0 1.75.66l2.03-2.32c.28-.32.7-.51 1.13-.51h3.2a1 1 0 0 0 .65-1.77L8.64 7.3ZM8 17.17v-9.1L15.12 14H11.9c-.72 0-1.4.31-1.88.85L8 17.17Z",
    fill: primaryFill
  }));
};

exports.CursorClick20Regular = wrapIcon_1.default( /*#__PURE__*/CursorClick20RegularIcon, 'CursorClick20Regular');

const CursorClick24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.25 2c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75ZM4.47 3.97c.3-.3.77-.3 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06L4.47 5.03a.75.75 0 0 1 0-1.06Zm9.56 0c.3.3.3.77 0 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06l1.75-1.75c.3-.3.77-.3 1.06 0ZM2.5 8.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm6 .74a1.32 1.32 0 0 1 2.18-1l8.46 7.25c.9.78.39 2.27-.8 2.32l-3.85.15c-.41.02-.8.2-1.07.5l-2.62 2.93c-.8.9-2.3.33-2.3-.88V9.5Z",
    fill: primaryFill
  }));
};

exports.CursorClick24Filled = wrapIcon_1.default( /*#__PURE__*/CursorClick24FilledIcon, 'CursorClick24Filled');

const CursorClick24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.25 2c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75ZM4.47 3.97c.3-.3.77-.3 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06L4.47 5.03a.75.75 0 0 1 0-1.06Zm9.56 0c.3.3.3.77 0 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06l1.75-1.75c.3-.3.77-.3 1.06 0ZM2.5 8.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm8.18-.26a1.32 1.32 0 0 0-2.18 1v11.27c0 1.21 1.5 1.78 2.3.88l2.62-2.92c.27-.31.66-.5 1.07-.5l3.84-.16a1.32 1.32 0 0 0 .8-2.32l-8.45-7.25ZM10 20.29V9.89l7.81 6.69-3.38.13c-.82.03-1.59.4-2.13 1L10 20.3Z",
    fill: primaryFill
  }));
};

exports.CursorClick24Regular = wrapIcon_1.default( /*#__PURE__*/CursorClick24RegularIcon, 'CursorClick24Regular');

const CursorHover16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.16 1.82 1.5 1.5 0 0 0-.28-.38l-4-4A1.5 1.5 0 0 0 7 8.5V12H3a2 2 0 0 1-2-2V5Zm7.85 3.15A.5.5 0 0 0 8 8.5v6a.5.5 0 0 0 .9.3l1.35-1.8h2.25a.5.5 0 0 0 .35-.85l-4-4Z",
    fill: primaryFill
  }));
};

exports.CursorHover16Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover16FilledIcon, 'CursorHover16Filled');

const CursorHover16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.16 1.82 1.5 1.5 0 0 0-.28-.38l-.45-.45A1 1 0 0 0 14 10V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v1H3a2 2 0 0 1-2-2V5Zm7.85 3.15A.5.5 0 0 0 8 8.5v6a.5.5 0 0 0 .9.3l1.35-1.8h2.25a.5.5 0 0 0 .35-.85l-4-4ZM9 13V9.7l2.3 2.3H10a.5.5 0 0 0-.4.2L9 13Z",
    fill: primaryFill
  }));
};

exports.CursorHover16Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover16RegularIcon, 'CursorHover16Regular');

const CursorHover20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h5v-4.5a1.5 1.5 0 0 1 2.56-1.06l5 5c.11.11.2.24.28.38A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H4Zm6.85 6.15a.5.5 0 0 0-.85.35v7a.5.5 0 0 0 .91.29l1.57-2.25 2.94.45a.5.5 0 0 0 .43-.84l-5-5ZM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2Z",
    fill: primaryFill
  }));
};

exports.CursorHover20Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover20FilledIcon, 'CursorHover20Filled');

const CursorHover20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-1.16 1.82 1.5 1.5 0 0 0-.28-.38l-.45-.45A1 1 0 0 0 17 13V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H4a2 2 0 0 1-2-2V6Zm8.85 4.15a.5.5 0 0 0-.85.35v7a.5.5 0 0 0 .91.29l1.57-2.25 2.94.45a.5.5 0 0 0 .43-.84l-5-5ZM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2Z",
    fill: primaryFill
  }));
};

exports.CursorHover20Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover20RegularIcon, 'CursorHover20Regular');

const CursorHover24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-7.25a1.75 1.75 0 0 1 2.78-1.41l7.5 7.5c.38.27.62.68.7 1.11A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4h-15Zm6.78 6.22a.75.75 0 0 0-1.28.53v10.5a.75.75 0 0 0 1.37.42l2.46-3.58 4.27.9a.75.75 0 0 0 .68-1.27l-7.5-7.5Z",
    fill: primaryFill
  }));
};

exports.CursorHover24Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover24FilledIcon, 'CursorHover24Filled');

const CursorHover24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.5 5.5h-15a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H9V18H4.5A2.5 2.5 0 0 1 2 15.5v-9A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v9a2.5 2.5 0 0 1-2.02 2.45 1.75 1.75 0 0 0-.7-1.11l-.33-.34h.55a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-8.22 4.72a.75.75 0 0 0-1.28.53v10.5a.75.75 0 0 0 1.37.42l2.46-3.58 4.27.9a.75.75 0 0 0 .68-1.27l-7.5-7.5Zm.22 8.62v-6.28L15.94 17l-2.29-.48a.75.75 0 0 0-.77.3l-1.38 2.02Z",
    fill: primaryFill
  }));
};

exports.CursorHover24Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover24RegularIcon, 'CursorHover24Regular');

const CursorHover28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.75A2.75 2.75 0 0 1 4.75 5h18.5A2.75 2.75 0 0 1 26 7.75v11.5A2.75 2.75 0 0 1 23.25 22h-.07c.18-.6.02-1.28-.44-1.74l-9-9a1.75 1.75 0 0 0-2.99 1.24V22h-6A2.75 2.75 0 0 1 2 19.25V7.75Zm11.03 4.22a.75.75 0 0 0-1.28.53v12.75a.75.75 0 0 0 1.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.7.67a.75.75 0 0 0 .63-1.27l-9-9Z",
    fill: primaryFill
  }));
};

exports.CursorHover28Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover28FilledIcon, 'CursorHover28Filled');

const CursorHover28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.75A2.75 2.75 0 0 1 4.75 5h18.5A2.75 2.75 0 0 1 26 7.75v11.5A2.75 2.75 0 0 1 23.25 22h-.07c.15-.51.06-1.06-.24-1.5h.31c.69 0 1.25-.56 1.25-1.25V7.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h6V22h-6A2.75 2.75 0 0 1 2 19.25V7.75Zm11.03 4.22a.75.75 0 0 0-1.28.53v12.75a.75.75 0 0 0 1.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.7.67a.75.75 0 0 0 .63-1.27l-9-9Zm.22 11.2v-8.86l6.13 6.13-2.47-.35c-.6-.09-1.2.14-1.6.6l-2.06 2.49Z",
    fill: primaryFill
  }));
};

exports.CursorHover28Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover28RegularIcon, 'CursorHover28Regular');

const CursorHover32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.33 3.64 3 3 0 0 0-.55-.76l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .7-1.7l-8-8a1 1 0 0 0-1.7.7v12Z",
    fill: primaryFill
  }));
};

exports.CursorHover32Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover32FilledIcon, 'CursorHover32Filled');

const CursorHover32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.33 3.64 3 3 0 0 0-.55-.76l-.89-.9A2 2 0 0 0 28 20V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h8v2H6a4 4 0 0 1-4-4V10Zm15.7 6.3a1 1 0 0 0-1.7.7v12a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .7-1.7l-8-8ZM18 26v-6.59L22.59 24H20a1 1 0 0 0-.8.4L18 26Z",
    fill: primaryFill
  }));
};

exports.CursorHover32Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover32RegularIcon, 'CursorHover32Regular');

const CursorHover48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.75 9.25a3.5 3.5 0 0 0-3.5 3.5v18.5a3.5 3.5 0 0 0 3.5 3.5H18v-13.5a3.25 3.25 0 0 1 5.55-2.3l15.5 15.5c.1.1.18.2.26.3a3.5 3.5 0 0 0 3.44-3.5v-18.5a3.5 3.5 0 0 0-3.5-3.5H8.75Zm13.38 11.12a1.25 1.25 0 0 0-2.13.88v21.5a1.25 1.25 0 0 0 2.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.39 2.14a1.25 1.25 0 0 0 1.2-2.1l-15.5-15.5Z",
    fill: primaryFill
  }));
};

exports.CursorHover48Filled = wrapIcon_1.default( /*#__PURE__*/CursorHover48FilledIcon, 'CursorHover48Filled');

const CursorHover48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v18.5c0 2.4-1.78 4.39-4.1 4.7a3.24 3.24 0 0 0-.85-1.5l-.95-.95h1.15c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25H8.75c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25H18V36H8.75A4.75 4.75 0 0 1 4 31.25v-18.5Zm18.13 7.62a1.25 1.25 0 0 0-2.13.88v21.5a1.25 1.25 0 0 0 2.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.39 2.14a1.25 1.25 0 0 0 1.2-2.1l-15.5-15.5Zm.37 18.3v-14.4L32.64 34.4l-3.97-1.02a3.25 3.25 0 0 0-3.5 1.33l-2.67 3.95Z",
    fill: primaryFill
  }));
};

exports.CursorHover48Regular = wrapIcon_1.default( /*#__PURE__*/CursorHover48RegularIcon, 'CursorHover48Regular');

const CursorHoverOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.3 13 1.85 1.85a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L2.39 3.1A2 2 0 0 0 1 5v5c0 1.1.9 2 2 2h4V8.5c0-.23.05-.45.15-.65l.85.86v5.79a.5.5 0 0 0 .9.3l1.35-1.8h2.04Zm1.6-1.22A2 2 0 0 0 15 10V5a2 2 0 0 0-2-2H5.12l8.79 8.78Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff16Filled = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff16FilledIcon, 'CursorHoverOff16Filled');

const CursorHoverOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.3 13 1.85 1.85a.5.5 0 0 0 .7-.7l-2-2-11-11a.5.5 0 1 0-.7.7L2.39 3.1A2 2 0 0 0 1 5v5c0 1.1.9 2 2 2h4v-1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.3L8 8.7v5.8a.5.5 0 0 0 .9.3l1.35-1.8h2.04Zm-1-1H10a.5.5 0 0 0-.4.2L9 13V9.7l2.3 2.3Zm1.81-1a1 1 0 0 0 .89-1V5a1 1 0 0 0-1-1H6.12l-1-1H13a2 2 0 0 1 2 2v5a2 2 0 0 1-1.1 1.78l-.79-.79Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff16Regular = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff16RegularIcon, 'CursorHoverOff16Regular');

const CursorHoverOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.39 4.1A2 2 0 0 0 2 6v7c0 1.1.9 2 2 2h5v-4.5c0-.23.05-.45.15-.65l.85.86v6.79a.5.5 0 0 0 .91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 0 0 .7-.7l-8-8-7-7Zm11.22 12.62-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2v-4.2l3.07 3.06Zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.12l10.79 10.78Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff20Filled = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff20FilledIcon, 'CursorHoverOff20Filled');

const CursorHoverOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.39 4.1A2 2 0 0 0 2 6v7c0 1.1.9 2 2 2h5v-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.3l5.7 5.7v6.8a.5.5 0 0 0 .91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 0 0 .7-.7l-15-15Zm11.22 12.62-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2v-4.2l3.07 3.06Zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.12l1 1H16a1 1 0 0 1 1 1v7a1 1 0 0 1-.89 1l.8.78Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff20Regular = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff20RegularIcon, 'CursorHoverOff20Regular');

const CursorHoverOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.05 1.05A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-7.25c0-.2.04-.4.1-.59l.9.9v10.19a.75.75 0 0 0 1.37.42l2.46-3.58 4.05.85 2.84 2.84a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM7.18 4l13.63 13.63A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4H7.18Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff24Filled = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff24FilledIcon, 'CursorHoverOff24Filled');

const CursorHoverOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.05 1.05A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-1.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 .94-1L10 11.06v10.19a.75.75 0 0 0 1.37.42l2.46-3.58 4.05.85 2.84 2.84a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm8.22 10.34L15.94 17l-2.29-.48a.75.75 0 0 0-.77.3l-1.38 2.02v-6.28Zm9 2.94a1 1 0 0 1-.83.99l1.14 1.14A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4H7.18l1.5 1.5H19.5a1 1 0 0 1 1 1v9Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff24Regular = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff24RegularIcon, 'CursorHoverOff24Regular');

const CursorHoverOff28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.81 1.81A2.75 2.75 0 0 0 2 7.75v11.5A2.75 2.75 0 0 0 4.75 22h6v-9.5c0-.2.04-.4.1-.59l.9.9v12.44a.75.75 0 0 0 1.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.45.64 3.57 3.57a.75.75 0 0 0 1.06-1.06l-3.74-3.74-.01-.01-9-9-9.75-9.75ZM8.18 5l16.56 16.56A2.75 2.75 0 0 0 26 19.25V7.75A2.75 2.75 0 0 0 23.25 5H8.18Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff28Filled = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff28FilledIcon, 'CursorHoverOff28Filled');

const CursorHoverOff28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.81 1.81A2.75 2.75 0 0 0 2 7.75v11.5A2.75 2.75 0 0 0 4.75 22h6v-1.5h-6c-.69 0-1.25-.56-1.25-1.25V7.75c0-.69.56-1.25 1.25-1.25h.69l6.31 6.31v12.44a.75.75 0 0 0 1.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.45.64 3.57 3.57a.75.75 0 0 0 1.06-1.06l-3.74-3.74-.01-.01-9-9v-.01L3.27 2.22Zm9.97 12.1 6.13 6.12-2.47-.35c-.6-.09-1.2.14-1.6.6l-2.06 2.49V14.3ZM9.68 6.5 8.18 5h15.07A2.75 2.75 0 0 1 26 7.75v11.5c0 .97-.5 1.82-1.26 2.31l-1.12-1.12c.51-.16.88-.63.88-1.19V7.75c0-.69-.56-1.25-1.25-1.25H9.68Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff28Regular = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff28RegularIcon, 'CursorHoverOff28Regular');

const CursorHoverOff48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m36.1 37.88 5.77 5.75a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l3.29 3.3a3.5 3.5 0 0 0-2.41 3.32v18.5a3.5 3.5 0 0 0 3.5 3.5H18v-13.5c0-.43.09-.85.24-1.24L20 21.77v20.98a1.25 1.25 0 0 0 2.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.06 2.06ZM14.56 9.25l25.43 25.42a3.5 3.5 0 0 0 2.77-3.42v-18.5a3.5 3.5 0 0 0-3.5-3.5h-24.7Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff48Filled = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff48FilledIcon, 'CursorHoverOff48Filled');

const CursorHoverOff48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m36.1 37.88 5.77 5.75a1.25 1.25 0 0 0 1.76-1.76l-6-6-15.5-15.5-16-16a1.25 1.25 0 1 0-1.76 1.76L6.7 8.47c-1.6.76-2.7 2.4-2.7 4.28v18.5A4.75 4.75 0 0 0 8.75 36H18v-2.5H8.75c-1.24 0-2.25-1-2.25-2.25v-18.5c0-1.24 1-2.24 2.23-2.25L20 21.77v20.98a1.25 1.25 0 0 0 2.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.06 2.06Zm-3.46-3.48-3.97-1.01a3.25 3.25 0 0 0-3.5 1.33l-2.67 3.95v-14.4L32.64 34.4ZM13.3 8l2.5 2.5h23.45c1.24 0 2.25 1 2.25 2.25v18.5c0 1.24-1 2.25-2.25 2.25h-.45l2.18 2.18A4.75 4.75 0 0 0 44 31.25v-18.5A4.75 4.75 0 0 0 39.25 8H13.3Z",
    fill: primaryFill
  }));
};

exports.CursorHoverOff48Regular = wrapIcon_1.default( /*#__PURE__*/CursorHoverOff48RegularIcon, 'CursorHoverOff48Regular');

const Cut20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.88 3.16-3.1 4.77-.9-1.38 2.74-4.2a.75.75 0 0 1 1.26.8Zm-2.38 8.6a3.24 3.24 0 0 1 4.5 2.99 3.25 3.25 0 1 1-5.72-2.11L10 10.66l-1.28 1.98a3.25 3.25 0 1 1-1.21-.88l1.6-2.47-3.99-6.13a.75.75 0 0 1 1.26-.82l6.12 9.41Zm.2 1.6a1.75 1.75 0 1 0 .01-.02l-.02.02ZM6.24 13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z",
    fill: primaryFill
  }));
};

exports.Cut20Filled = wrapIcon_1.default( /*#__PURE__*/Cut20FilledIcon, 'Cut20Filled');

const Cut20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.92 2.23a.5.5 0 0 0-.84.54L9.4 9.43l-1.92 2.96a3 3 0 1 0 .78.64L10 10.35l1.74 2.68a3 3 0 1 0 .78-.64L5.92 2.23ZM14 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7.2-6.49-.6-.92 3.48-5.36a.5.5 0 0 1 .84.54l-3.73 5.74Z",
    fill: primaryFill
  }));
};

exports.Cut20Regular = wrapIcon_1.default( /*#__PURE__*/Cut20RegularIcon, 'Cut20Regular');

const Cut24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.83 2.44a1 1 0 0 0-1.66 1.12l4.8 7.11-2.33 3.68A3.99 3.99 0 0 0 3 18a4 4 0 1 0 7.2-2.4l1.98-3.12 1.89 2.8A3.99 3.99 0 0 0 17 22a4 4 0 1 0-1.25-7.8l-3.62-5.38-4.3-6.38ZM5 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.48-9.21 3.33-5.26a1 1 0 0 0-1.7-1.07L13.3 6.98l1.22 1.81Z",
    fill: primaryFill
  }));
};

exports.Cut24Filled = wrapIcon_1.default( /*#__PURE__*/Cut24FilledIcon, 'Cut24Filled');

const Cut24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.14 9.34 7.37 2.33a.75.75 0 1 0-1.24.84l5.13 7.55-2.4 3.74a4 4 0 1 0 1.18.94l2.14-3.33 2.06 3.03A3.99 3.99 0 0 0 17 22a4 4 0 1 0-1.5-7.71l-2.44-3.6-.92-1.35ZM4.5 18a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm10 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-.56-8.68 3.94-6.17a.75.75 0 1 0-1.26-.8l-3.6 5.62.92 1.35Z",
    fill: primaryFill
  }));
};

exports.Cut24Regular = wrapIcon_1.default( /*#__PURE__*/Cut24RegularIcon, 'Cut24Regular');

const DarkTheme20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    fill: primaryFill
  }));
};

exports.DarkTheme20Filled = wrapIcon_1.default( /*#__PURE__*/DarkTheme20FilledIcon, 'DarkTheme20Filled');

const DarkTheme20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 1 1 0 14V3Zm0-1a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    fill: primaryFill
  }));
};

exports.DarkTheme20Regular = wrapIcon_1.default( /*#__PURE__*/DarkTheme20RegularIcon, 'DarkTheme20Regular');

const DarkTheme24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-2V4a8 8 0 1 1 0 16Z",
    fill: primaryFill
  }));
};

exports.DarkTheme24Filled = wrapIcon_1.default( /*#__PURE__*/DarkTheme24FilledIcon, 'DarkTheme24Filled');

const DarkTheme24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-1.5v-17a8.5 8.5 0 0 1 0 17Z",
    fill: primaryFill
  }));
};

exports.DarkTheme24Regular = wrapIcon_1.default( /*#__PURE__*/DarkTheme24RegularIcon, 'DarkTheme24Regular');

const DataArea20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.49a.5.5 0 0 0-1 .01v15c0 .28.22.5.5.5h15a.5.5 0 1 0 0-1H3V2.49ZM16 16V5.5a.5.5 0 0 0-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 0 0-.45-.03L4 8.3V16h12Z",
    fill: primaryFill
  }));
};

exports.DataArea20Filled = wrapIcon_1.default( /*#__PURE__*/DataArea20FilledIcon, 'DataArea20Filled');

const DataArea20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 1 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 1 0 0-1H16V5.5a.5.5 0 0 0-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 0 0-.45-.03L3 8.74V2.5Zm0 7.32 3.97-1.76 3.28 1.87c.18.1.4.09.56-.04L15 6.54V17H3V9.82Z",
    fill: primaryFill
  }));
};

exports.DataArea20Regular = wrapIcon_1.default( /*#__PURE__*/DataArea20RegularIcon, 'DataArea20Regular');

const DataArea24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75a.75.75 0 0 1 1.5 0V19.5h15.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75V3.75Zm16.5 3a.75.75 0 0 0-1.2-.6l-5.6 4.2L8.88 8.1a.75.75 0 0 0-.72-.02L5.5 9.4v9.09h14V6.75Z",
    fill: primaryFill
  }));
};

exports.DataArea24Filled = wrapIcon_1.default( /*#__PURE__*/DataArea24FilledIcon, 'DataArea24Filled');

const DataArea24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75a.75.75 0 0 1 1.5 0v6.26l3.65-1.92c.23-.12.5-.12.73.01l3.82 2.25 5.6-4.2a.75.75 0 0 1 1.2.6V19.5h.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75V3.75Zm1.5 7.95v7.8H18V8.25l-4.8 3.6a.75.75 0 0 1-.83.05L8.48 9.6 4.5 11.7Z",
    fill: primaryFill
  }));
};

exports.DataArea24Regular = wrapIcon_1.default( /*#__PURE__*/DataArea24RegularIcon, 'DataArea24Regular');

const DataBarHorizontal20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontal20Filled = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontal20FilledIcon, 'DataBarHorizontal20Filled');

const DataBarHorizontal20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4c0-1.1.9-2 2-2h5a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H4Zm-2 7c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H4Zm-2 7c0-1.1.9-2 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontal20Regular = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontal20RegularIcon, 'DataBarHorizontal20Regular');

const DataBarHorizontal24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 18.25c0-1.24-1-2.25-2.25-2.25H5.25a2.25 2.25 0 1 0 0 4.5h13.5c1.24 0 2.25-1 2.25-2.25Zm-4-6.5c0-1.24-1-2.25-2.25-2.25h-9.5a2.25 2.25 0 1 0 0 4.5h9.5C16 14 17 13 17 11.75Zm-4-6.5C13 4.01 12 3 10.75 3h-5.5a2.25 2.25 0 0 0 0 4.5h5.5C12 7.5 13 6.5 13 5.25Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontal24Filled = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontal24FilledIcon, 'DataBarHorizontal24Filled');

const DataBarHorizontal24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 18.25c0-1.24-1-2.25-2.25-2.25H5.25a2.25 2.25 0 1 0 0 4.5h13.5c1.24 0 2.25-1 2.25-2.25Zm-4-6.5c0-1.24-1-2.25-2.25-2.25h-9.5a2.25 2.25 0 1 0 0 4.5h9.5C16 14 17 13 17 11.75Zm-4-6.5C13 4.01 12 3 10.75 3h-5.5a2.25 2.25 0 0 0 0 4.5h5.5C12 7.5 13 6.5 13 5.25Zm6.5 13c0 .41-.34.75-.75.75H5.25a.75.75 0 0 1 0-1.5h13.5c.41 0 .75.34.75.75Zm-4-6.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1 0-1.5h9.5c.41 0 .75.34.75.75Zm-4-6.5c0 .41-.34.75-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5c.41 0 .75.34.75.75Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontal24Regular = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontal24RegularIcon, 'DataBarHorizontal24Regular');

const DataBarHorizontalDescending16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h10ZM7 15a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h4Zm4-7a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontalDescending16Filled = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontalDescending16FilledIcon, 'DataBarHorizontalDescending16Filled');

const DataBarHorizontalDescending16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h10ZM2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5 12a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h4Zm-5-2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm9-5a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2Zm-1 0a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Z",
    fill: primaryFill
  }));
};

exports.DataBarHorizontalDescending16Regular = wrapIcon_1.default( /*#__PURE__*/DataBarHorizontalDescending16RegularIcon, 'DataBarHorizontalDescending16Regular');

const DataBarVertical16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2C2.67 2 2 2.67 2 3.5v9a1.5 1.5 0 0 0 3 0v-9C5 2.67 4.33 2 3.5 2Zm4 3C6.67 5 6 5.67 6 6.5v6a1.5 1.5 0 0 0 3 0v-6C9 5.67 8.33 5 7.5 5Zm4 3c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical16Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVertical16FilledIcon, 'DataBarVertical16Filled');

const DataBarVertical16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3.5a1.5 1.5 0 1 1 3 0v9a1.5 1.5 0 0 1-3 0v-9ZM3.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5ZM6 6.5a1.5 1.5 0 1 1 3 0v6a1.5 1.5 0 0 1-3 0v-6ZM7.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Zm4 2c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5ZM11 9.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical16Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVertical16RegularIcon, 'DataBarVertical16Regular');

const DataBarVertical20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2Zm5 3a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2Zm5 3a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical20Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVertical20FilledIcon, 'DataBarVertical20Filled');

const DataBarVertical20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2ZM4 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5Zm4 3a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0V8Zm2-1a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm3 4a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical20Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVertical20RegularIcon, 'DataBarVertical20Regular');

const DataBarVertical24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3C6.99 3 8 4 8 5.25v13.5a2.25 2.25 0 1 1-4.5 0V5.25C3.5 4 4.5 3 5.75 3Zm6.5 4c1.24 0 2.25 1 2.25 2.25v9.5a2.25 2.25 0 1 1-4.5 0v-9.5C10 8 11 7 12.25 7Zm6.5 4c1.24 0 2.25 1 2.25 2.25v5.5a2.25 2.25 0 1 1-4.5 0v-5.5c0-1.24 1-2.25 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical24Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVertical24FilledIcon, 'DataBarVertical24Filled');

const DataBarVertical24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3C6.99 3 8 4 8 5.25v13.5a2.25 2.25 0 1 1-4.5 0V5.25C3.5 4 4.5 3 5.75 3Zm6.5 4c1.24 0 2.25 1 2.25 2.25v9.5a2.25 2.25 0 1 1-4.5 0v-9.5C10 8 11 7 12.25 7Zm6.5 4c1.24 0 2.25 1 2.25 2.25v5.5a2.25 2.25 0 1 1-4.5 0v-5.5c0-1.24 1-2.25 2.25-2.25Zm-13-6.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75Zm6.5 4a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75Zm6.5 4a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical24Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVertical24RegularIcon, 'DataBarVertical24Regular');

const DataBarVertical32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7a3 3 0 1 1 6 0v18a3 3 0 1 1-6 0V7Zm8 6a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0V13Zm11 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0v-6a3 3 0 0 0-3-3Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical32Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVertical32FilledIcon, 'DataBarVertical32Filled');

const DataBarVertical32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7a3 3 0 1 1 6 0v18a3 3 0 1 1-6 0V7Zm3-1a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm5 7a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0V13Zm3-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V13a1 1 0 0 0-1-1Zm8 4a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0v-6a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Z",
    fill: primaryFill
  }));
};

exports.DataBarVertical32Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVertical32RegularIcon, 'DataBarVertical32Regular');

const DataBarVerticalAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3a2 2 0 0 1 2 2v4.6a5.48 5.48 0 0 0-4-.4V5c0-1.1.9-2 2-2ZM9 14.5c0 .88.2 1.72.58 2.46A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-3 4.9ZM7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAdd20Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAdd20FilledIcon, 'DataBarVerticalAdd20Filled');

const DataBarVerticalAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4V5a1 1 0 1 0-2 0v4.02c-.34.03-.68.1-1 .19V5c0-1.1.9-2 2-2ZM9.07 15.36c.09.57.26 1.1.5 1.6A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6c-.36.18-.7.4-1 .66V8a1 1 0 1 0-2 0v7a1 1 0 0 0 .07.36ZM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4c0-1.1.9-2 2-2Zm1 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAdd20Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAdd20RegularIcon, 'DataBarVerticalAdd20Regular');

const DataBarVerticalAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3C17 3 16 4 16 5.25v5.92a6.47 6.47 0 0 1 4.5.56V5.25C20.5 4 19.5 3 18.25 3ZM14 9.25v2.77A6.5 6.5 0 0 0 12 20.98l-.26.02c-1.24 0-2.25-1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.5 0Zm-11 4a2.25 2.25 0 1 1 4.5 0v5.5a2.25 2.25 0 1 1-4.5 0v-5.5Zm20 4.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAdd24Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAdd24FilledIcon, 'DataBarVerticalAdd24Filled');

const DataBarVerticalAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3C17 3 16 4 16 5.25v5.92c.48-.11.98-.17 1.5-.17V5.25a.75.75 0 0 1 1.5 0v5.92c.53.13 1.03.32 1.5.56V5.25C20.5 4 19.5 3 18.25 3ZM14 9.25v2.77c-.57.36-1.07.81-1.5 1.33v-4.1a.75.75 0 0 0-1.5 0v8.1a6.75 6.75 0 0 0 0 .3v1.1c0 .23.1.43.25.56.18.6.43 1.16.76 1.68l-.26.01c-1.24 0-2.25-1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.5 0Zm-11 4a2.25 2.25 0 1 1 4.5 0v5.5a2.25 2.25 0 1 1-4.5 0v-5.5Zm3 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm17 4.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAdd24Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAdd24RegularIcon, 'DataBarVerticalAdd24Regular');

const DataBarVerticalAscending16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V3ZM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V9Zm7-4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAscending16Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAscending16FilledIcon, 'DataBarVerticalAscending16Filled');

const DataBarVerticalAscending16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V3Zm2 11a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v10a1 1 0 0 0 1 1ZM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V9Zm2 5a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm5-9a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Zm0 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalAscending16Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalAscending16RegularIcon, 'DataBarVerticalAscending16Regular');

const DataBarVerticalStar16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2.5a1.5 1.5 0 0 0-3 0v4.1a5.48 5.48 0 0 1 3-.58V2.5Zm-4 3v1.76a5.49 5.49 0 0 0-1.8 5.71A1.5 1.5 0 0 1 5 11.5v-6a1.5 1.5 0 1 1 3 0ZM2.5 7C3.33 7 4 7.67 4 8.5v3a1.5 1.5 0 0 1-3 0v-3C1 7.67 1.67 7 2.5 7ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H9c-.48 0-.68.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar16Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar16FilledIcon, 'DataBarVerticalStar16Filled');

const DataBarVerticalStar16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2.5a1.5 1.5 0 0 0-3 0v4.1c.32-.16.65-.3 1-.4V2.5a.5.5 0 0 1 1 0v3.52a5.57 5.57 0 0 1 1 0V2.5ZM8 7.26V5.5a1.5 1.5 0 1 0-3 0v6c0 .65.42 1.2 1 1.41V5.5a.5.5 0 0 1 1 0v2.84c.28-.4.62-.77 1-1.08ZM4 8.5a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 0 0 3 0v-3ZM2.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H9c-.48 0-.68.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar16Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar16RegularIcon, 'DataBarVerticalStar16Regular');

const DataBarVerticalStar20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3a2 2 0 0 1 2 2v4.6a5.48 5.48 0 0 0-4-.4V5c0-1.1.9-2 2-2ZM9 14.5c0 .88.2 1.72.58 2.46A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-3 4.9ZM7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar20Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar20FilledIcon, 'DataBarVerticalStar20Filled');

const DataBarVerticalStar20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4V5a1 1 0 1 0-2 0v4.02c-.34.03-.68.1-1 .19V5c0-1.1.9-2 2-2ZM9.07 15.36c.09.57.26 1.1.5 1.6A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6c-.36.18-.7.4-1 .66V8a1 1 0 1 0-2 0v7a1 1 0 0 0 .07.36ZM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4c0-1.1.9-2 2-2Zm1 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar20Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar20RegularIcon, 'DataBarVerticalStar20Regular');

const DataBarVerticalStar24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3C17.01 3 16 4 16 5.25v5.92a6.51 6.51 0 0 1 4.5.56V5.25C20.5 4 19.5 3 18.25 3ZM14 9.25v2.77a6.5 6.5 0 0 0-1.99 8.96l-.26.02c-1.24 0-2.25-1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.5 0Zm-11 4a2.25 2.25 0 1 1 4.5 0v5.5a2.25 2.25 0 1 1-4.5 0v-5.5Zm20 4.25a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.94-3.08a.58.58 0 0 0-1.12 0l-.55 1.79h-1.8c-.57 0-.8.75-.35 1.1l1.46 1.1-.56 1.79c-.17.56.44 1.03.9.68l1.46-1.1 1.46 1.1c.46.35 1.07-.12.9-.68l-.56-1.79 1.46-1.1c.46-.35.22-1.1-.35-1.1h-1.8l-.55-1.79Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar24Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar24FilledIcon, 'DataBarVerticalStar24Filled');

const DataBarVerticalStar24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3C17.01 3 16 4 16 5.25v5.92c.48-.11.98-.17 1.5-.17V5.25a.75.75 0 1 1 1.5 0v5.92c.53.13 1.03.32 1.5.56V5.25C20.5 4 19.5 3 18.25 3ZM14 9.25v2.77c-.57.36-1.07.81-1.5 1.33v-4.1a.75.75 0 0 0-1.5 0v8.09a6.62 6.62 0 0 0 0 .32v1.1c0 .21.1.42.26.55.17.6.43 1.16.75 1.68l-.26.01c-1.24 0-2.25-1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.5 0Zm-11 4a2.25 2.25 0 1 1 4.5 0v5.5a2.25 2.25 0 1 1-4.5 0v-5.5Zm3 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm17 4.25a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.94-3.08a.58.58 0 0 0-1.12 0l-.55 1.79h-1.8c-.57 0-.8.75-.35 1.1l1.46 1.1-.56 1.79c-.17.56.44 1.03.9.68l1.46-1.1 1.46 1.1c.46.35 1.07-.12.9-.68l-.56-1.79 1.46-1.1c.46-.35.22-1.1-.35-1.1h-1.8l-.55-1.79Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar24Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar24RegularIcon, 'DataBarVerticalStar24Regular');

const DataBarVerticalStar32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7a3 3 0 1 0-6 0v7.22a9.03 9.03 0 0 1 6 .72V7Zm-8 6v1.94a9 9 0 0 0-3.51 13.02A3 3 0 0 1 13 25V13a3 3 0 1 1 6 0Zm-8 6a3 3 0 1 0-6 0v6a3 3 0 1 0 6 0v-6Zm19.5 4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.21-4.86-.94 2.83h-3a.75.75 0 0 0-.43 1.36l2.4 1.7-.92 2.8a.75.75 0 0 0 1.14.84L23 25.93l2.46 1.74a.75.75 0 0 0 1.14-.84l-.93-2.8 2.41-1.7a.75.75 0 0 0-.43-1.36h-3l-.94-2.83a.75.75 0 0 0-1.42 0Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar32Filled = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar32FilledIcon, 'DataBarVerticalStar32Filled');

const DataBarVerticalStar32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7a3 3 0 1 0-6 0v7.22a9.03 9.03 0 0 1 2-.22V7a1 1 0 1 1 2 0v7.22c.7.16 1.37.4 2 .72V7Zm-8 6v1.94c-.73.36-1.4.81-2 1.35V13a1 1 0 1 0-2 0v5.87a8.96 8.96 0 0 0 .49 9.09A3 3 0 0 1 13 25V13a3 3 0 1 1 6 0Zm-8 6a3 3 0 1 0-6 0v6a3 3 0 1 0 6 0v-6Zm-3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm22.5 5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.21-4.86-.94 2.83h-3a.75.75 0 0 0-.43 1.36l2.4 1.7-.92 2.8a.75.75 0 0 0 1.14.84L23 25.93l2.46 1.74a.75.75 0 0 0 1.14-.84l-.93-2.8 2.41-1.7a.75.75 0 0 0-.43-1.36h-3l-.94-2.83a.75.75 0 0 0-1.42 0Z",
    fill: primaryFill
  }));
};

exports.DataBarVerticalStar32Regular = wrapIcon_1.default( /*#__PURE__*/DataBarVerticalStar32RegularIcon, 'DataBarVerticalStar32Regular');

const DataFunnel20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4c0-1.1.9-2 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2 6c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Zm4 4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4H8Z",
    fill: primaryFill
  }));
};

exports.DataFunnel20Filled = wrapIcon_1.default( /*#__PURE__*/DataFunnel20FilledIcon, 'DataFunnel20Filled');

const DataFunnel20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4c0-1.1.9-2 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H4Zm0 7c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Zm2 5a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4H8Zm-1 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z",
    fill: primaryFill
  }));
};

exports.DataFunnel20Regular = wrapIcon_1.default( /*#__PURE__*/DataFunnel20RegularIcon, 'DataFunnel20Regular');

const DataFunnel24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.25 7.5a2.75 2.75 0 1 0 0-5.5H4.75a2.75 2.75 0 0 0 0 5.5h14.5Zm-2 7a2.75 2.75 0 1 0 0-5.5H6.75a2.75 2.75 0 0 0 0 5.5h10.5ZM17 18.75A2.75 2.75 0 0 0 14.25 16h-4.5a2.75 2.75 0 0 0 0 5.5h4.5A2.75 2.75 0 0 0 17 18.75Z",
    fill: primaryFill
  }));
};

exports.DataFunnel24Filled = wrapIcon_1.default( /*#__PURE__*/DataFunnel24FilledIcon, 'DataFunnel24Filled');

const DataFunnel24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 4.75a2.75 2.75 0 0 1-2.75 2.75H4.75a2.75 2.75 0 1 1 0-5.5h14.5A2.75 2.75 0 0 1 22 4.75Zm-2 7a2.75 2.75 0 0 1-2.75 2.75H6.75a2.75 2.75 0 1 1 0-5.5h10.5A2.75 2.75 0 0 1 20 11.75Zm-3 7a2.75 2.75 0 0 1-2.75 2.75h-4.5a2.75 2.75 0 1 1 0-5.5h4.5A2.75 2.75 0 0 1 17 18.75Zm3.5-14c0-.69-.56-1.25-1.25-1.25H4.75a1.25 1.25 0 1 0 0 2.5h14.5c.7 0 1.25-.56 1.25-1.25Zm-2 7c0-.69-.56-1.25-1.25-1.25H6.75a1.25 1.25 0 0 0 0 2.5h10.5c.7 0 1.25-.56 1.25-1.25Zm-3 7c0-.69-.56-1.25-1.25-1.25h-4.5a1.25 1.25 0 0 0 0 2.5h4.5c.7 0 1.25-.56 1.25-1.25Z",
    fill: primaryFill
  }));
};

exports.DataFunnel24Regular = wrapIcon_1.default( /*#__PURE__*/DataFunnel24RegularIcon, 'DataFunnel24Regular');

const DataHistogram20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4.5c0-.83-.67-1.5-1.5-1.5h-1C8.67 3 8 3.67 8 4.5V17h4V4.5ZM13 6v11h3.5a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2h-2ZM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
};

exports.DataHistogram20Filled = wrapIcon_1.default( /*#__PURE__*/DataHistogram20FilledIcon, 'DataHistogram20Filled');

const DataHistogram20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1ZM7 9V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11c0-1.1.9-2 2-2h2Zm0 7v-6H5a1 1 0 0 0-1 1v5h3Zm6 0h3V8a1 1 0 0 0-1-1h-2v9Z",
    fill: primaryFill
  }));
};

exports.DataHistogram20Regular = wrapIcon_1.default( /*#__PURE__*/DataHistogram20RegularIcon, 'DataHistogram20Regular');

const DataHistogram24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.23c0-1.24 1-2.25 2.25-2.25h1.5c1.24 0 2.25 1 2.25 2.25V21H9V5.23ZM7.5 10H5.25C4.01 10 3 11 3 12.25v8c0 .41.34.75.75.75H7.5V10Zm9 11h3.75c.41 0 .75-.34.75-.75v-11C21 8.01 20 7 18.75 7H16.5v14Z",
    fill: primaryFill
  }));
};

exports.DataHistogram24Filled = wrapIcon_1.default( /*#__PURE__*/DataHistogram24FilledIcon, 'DataHistogram24Filled');

const DataHistogram24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 5.23c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V7h3.25C19.99 7 21 8 21 9.25v11c0 .41-.34.75-.75.75H3.75a.75.75 0 0 1-.75-.75v-8C3 11.01 4 10 5.25 10H8.5V5.23ZM10 19.5h4V5.23a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75V19.5Zm-1.5-8H5.25a.75.75 0 0 0-.75.75v7.25h4v-8Zm7 8h4V9.25a.75.75 0 0 0-.75-.75H15.5v11Z",
    fill: primaryFill
  }));
};

exports.DataHistogram24Regular = wrapIcon_1.default( /*#__PURE__*/DataHistogram24RegularIcon, 'DataHistogram24Regular');

const DataLine20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5.5a2.5 2.5 0 0 1-3.44 2.32l-1.29 1.92A2.5 2.5 0 0 1 11.5 14a2.5 2.5 0 0 1-2.05-1.08L6.95 14A2.51 2.51 0 0 1 4.5 17a2.5 2.5 0 1 1 2.05-3.92L9.05 12a2.51 2.51 0 0 1 3.4-2.83l1.28-1.92A2.5 2.5 0 0 1 15.5 3 2.5 2.5 0 0 1 18 5.5Z",
    fill: primaryFill
  }));
};

exports.DataLine20Filled = wrapIcon_1.default( /*#__PURE__*/DataLine20FilledIcon, 'DataLine20Filled');

const DataLine20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 5.5a2.5 2.5 0 1 1 1.56 2.32l-1.29 1.92A2.5 2.5 0 0 1 11.5 14a2.5 2.5 0 0 1-2.05-1.08L6.95 14A2.51 2.51 0 0 1 4.5 17a2.5 2.5 0 1 1 2.05-3.92L9.05 12A2.51 2.51 0 0 1 11.5 9c.33 0 .65.07.94.18l1.29-1.92A2.5 2.5 0 0 1 13 5.5Zm-3 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-7 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
};

exports.DataLine20Regular = wrapIcon_1.default( /*#__PURE__*/DataLine20RegularIcon, 'DataLine20Regular');

const DataLine24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 6a3 3 0 1 1 2.52 2.96l-2.03 3.36a3 3 0 0 1-4.75 3.65L8 17.84V18a3 3 0 1 1-.47-1.6l3.54-1.77A3.01 3.01 0 0 1 14 11c.48 0 .94.11 1.34.32l1.8-2.97A3 3 0 0 1 16 6Z",
    fill: primaryFill
  }));
};

exports.DataLine24Filled = wrapIcon_1.default( /*#__PURE__*/DataLine24FilledIcon, 'DataLine24Filled');

const DataLine24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM16 6a3 3 0 1 1 2.52 2.96l-2.03 3.36a3 3 0 0 1-4.75 3.65L8 17.84V18a3 3 0 1 1-.47-1.6l3.54-1.77A3.01 3.01 0 0 1 14 11c.48 0 .94.11 1.34.32l1.8-2.97A3 3 0 0 1 16 6Zm-2 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-9 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.DataLine24Regular = wrapIcon_1.default( /*#__PURE__*/DataLine24RegularIcon, 'DataLine24Regular');

const DataPie20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 1 1 8 4.07ZM17.06 10c.5 0 .93-.37.94-.86V9a7 7 0 0 0-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 0 0 1 1h6.06Z",
    fill: primaryFill
  }));
};

exports.DataPie20Filled = wrapIcon_1.default( /*#__PURE__*/DataPie20FilledIcon, 'DataPie20Filled');

const DataPie20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 12a1 1 0 0 1-1-1V5.08A6 6 0 1 0 14.92 12H9ZM8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 1 1 8 4.07ZM11 9V3a6 6 0 0 1 6 6h-6Zm6.06 1c.5 0 .93-.37.94-.86V9a7 7 0 0 0-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 0 0 1 1h6.06Z",
    fill: primaryFill
  }));
};

exports.DataPie20Regular = wrapIcon_1.default( /*#__PURE__*/DataPie20RegularIcon, 'DataPie20Regular');

const DataPie24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 4.25c.41 0 .75.34.75.75v8h8c.38 0 .7.28.74.65l.01.1c0 4.97-4.03 8.5-9 8.5a9 9 0 0 1-9-9c0-4.97 3.53-9 8.5-9Zm3-2.5a9 9 0 0 1 9 9c0 .41-.34.75-.75.75h-8.25a.75.75 0 0 1-.75-.75V2.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.DataPie24Filled = wrapIcon_1.default( /*#__PURE__*/DataPie24FilledIcon, 'DataPie24Filled');

const DataPie24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 4.25c.41 0 .75.34.75.75v8h8c.38 0 .7.28.74.65l.01.1c0 4.97-4.03 8.5-9 8.5a9 9 0 0 1-9-9c0-4.97 3.53-9 8.5-9ZM9.5 5.79l-.2.02c-3.7.47-6.05 3.62-6.05 7.44a7.5 7.5 0 0 0 7.5 7.5c3.82 0 6.97-2.35 7.44-6.04l.02-.21h-7.96a.75.75 0 0 1-.74-.65l-.01-.1V5.79Zm3.75-4.04a9 9 0 0 1 9 9c0 .41-.34.75-.75.75h-8.25a.75.75 0 0 1-.75-.75V2.5c0-.41.34-.75.75-.75ZM14 3.29V10h6.71l-.02-.2A7.5 7.5 0 0 0 14.2 3.3L14 3.3Z",
    fill: primaryFill
  }));
};

exports.DataPie24Regular = wrapIcon_1.default( /*#__PURE__*/DataPie24RegularIcon, 'DataPie24Regular');

const DataScatter20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 0 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1H3V2.5ZM7.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    fill: primaryFill
  }));
};

exports.DataScatter20Filled = wrapIcon_1.default( /*#__PURE__*/DataScatter20FilledIcon, 'DataScatter20Filled');

const DataScatter20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 0 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1H3V2.5Zm3 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm7-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-1 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
    fill: primaryFill
  }));
};

exports.DataScatter20Regular = wrapIcon_1.default( /*#__PURE__*/DataScatter20RegularIcon, 'DataScatter20Regular');

const DataScatter24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75a.75.75 0 0 1 1.5 0V19.5h15.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75V3.75ZM14 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    fill: primaryFill
  }));
};

exports.DataScatter24Filled = wrapIcon_1.default( /*#__PURE__*/DataScatter24FilledIcon, 'DataScatter24Filled');

const DataScatter24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75a.75.75 0 0 1 1.5 0V19.5h15.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75V3.75ZM17 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
};

exports.DataScatter24Regular = wrapIcon_1.default( /*#__PURE__*/DataScatter24RegularIcon, 'DataScatter24Regular');

const DataSunburst20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.94 3.13a.5.5 0 0 1-.2.68A7.03 7.03 0 0 0 3.8 6.73a.5.5 0 0 1-.89-.46 8.03 8.03 0 0 1 3.35-3.35.5.5 0 0 1 .67.21Zm6.12 0a.5.5 0 0 1 .67-.2 8.03 8.03 0 0 1 3.35 3.34.5.5 0 0 1-.89.46 7.03 7.03 0 0 0-2.92-2.92.5.5 0 0 1-.21-.68Zm-9.93 9.93a.5.5 0 0 1 .68.2 7.03 7.03 0 0 0 2.92 2.93.5.5 0 0 1-.46.89 8.03 8.03 0 0 1-3.35-3.35.5.5 0 0 1 .21-.67Zm13.74 0a.5.5 0 0 1 .2.67 8.03 8.03 0 0 1-3.34 3.35.5.5 0 1 1-.46-.89 7.03 7.03 0 0 0 2.92-2.92.5.5 0 0 1 .68-.21ZM10 5.5c-.15 0-.3 0-.45.02a.5.5 0 1 1-.1-1L10 4.5a5.5 5.5 0 0 1 5.25 3.85.5.5 0 1 1-.96.3A4.5 4.5 0 0 0 10 5.5Zm-2.6.2a.5.5 0 0 1-.1.7 4.5 4.5 0 0 0-1.2 5.85.5.5 0 0 1-.86.5A5.48 5.48 0 0 1 6.7 5.6a.5.5 0 0 1 .7.1Zm7.52 5.32a.5.5 0 0 1 .33.63 5.5 5.5 0 0 1-8 3.11.5.5 0 0 1 .5-.86 4.5 4.5 0 0 0 6.54-2.55.5.5 0 0 1 .63-.33ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: primaryFill
  }));
};

exports.DataSunburst20Filled = wrapIcon_1.default( /*#__PURE__*/DataSunburst20FilledIcon, 'DataSunburst20Filled');

const DataSunburst20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.94 3.13a.5.5 0 0 1-.2.68A7.03 7.03 0 0 0 3.8 6.73a.5.5 0 0 1-.89-.46 8.03 8.03 0 0 1 3.35-3.35.5.5 0 0 1 .67.21Zm6.12 0a.5.5 0 0 1 .67-.2 8.03 8.03 0 0 1 3.35 3.34.5.5 0 0 1-.89.46 7.03 7.03 0 0 0-2.92-2.92.5.5 0 0 1-.21-.68Zm-9.93 9.93a.5.5 0 0 1 .68.2 7.03 7.03 0 0 0 2.92 2.93.5.5 0 0 1-.46.89 8.03 8.03 0 0 1-3.35-3.35.5.5 0 0 1 .21-.67Zm13.74 0a.5.5 0 0 1 .2.67 8.03 8.03 0 0 1-3.34 3.35.5.5 0 1 1-.46-.89 7.03 7.03 0 0 0 2.92-2.92.5.5 0 0 1 .68-.21ZM10 5.5c-.15 0-.3 0-.45.02a.5.5 0 1 1-.1-1L10 4.5a5.5 5.5 0 0 1 5.25 3.85.5.5 0 1 1-.96.3A4.5 4.5 0 0 0 10 5.5Zm-2.6.2a.5.5 0 0 1-.1.7 4.5 4.5 0 0 0-1.2 5.85.5.5 0 0 1-.86.5A5.48 5.48 0 0 1 6.7 5.6a.5.5 0 0 1 .7.1Zm7.52 5.32a.5.5 0 0 1 .33.63 5.5 5.5 0 0 1-8 3.11.5.5 0 0 1 .5-.86 4.5 4.5 0 0 0 6.54-2.55.5.5 0 0 1 .63-.33ZM8 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    fill: primaryFill
  }));
};

exports.DataSunburst20Regular = wrapIcon_1.default( /*#__PURE__*/DataSunburst20RegularIcon, 'DataSunburst20Regular');

const DataSunburst24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3.51c0 .32.2.6.5.74a8.53 8.53 0 0 1 4.25 4.26c.13.29.42.5.74.5.52 0 .9-.52.68-1-1-2.31-2.87-4.17-5.18-5.18-.48-.21-.99.16-.99.68Zm-6.99-.68c.48-.21.99.16.99.68 0 .32-.2.6-.5.74A8.53 8.53 0 0 0 4.26 8.5c-.13.29-.42.5-.74.5-.52 0-.9-.52-.68-1C3.83 5.7 5.7 3.84 8 2.83ZM15 20.49c0-.32.2-.6.5-.74a8.53 8.53 0 0 0 4.25-4.26c.13-.29.42-.49.74-.49.52 0 .9.5.68.99-1 2.31-2.87 4.18-5.18 5.18-.48.21-.99-.16-.99-.68Zm-10.75-5A.82.82 0 0 0 3.5 15c-.52 0-.9.5-.68.99 1 2.31 2.87 4.18 5.18 5.18.48.21.99-.16.99-.68 0-.32-.2-.6-.5-.74a8.53 8.53 0 0 1-4.25-4.26ZM12 6.5c-.2 0-.38.01-.57.03a.75.75 0 1 1-.16-1.5 7 7 0 0 1 7.55 5.4.75.75 0 1 1-1.46.35A5.5 5.5 0 0 0 12 6.5Zm-2.88-.1c.23.34.14.81-.2 1.04a5.5 5.5 0 0 0-1.48 7.64.75.75 0 0 1-1.24.84A6.97 6.97 0 0 1 8.08 6.2a.75.75 0 0 1 1.04.2Zm9.11 6.5c.4.11.64.52.53.92A7 7 0 0 1 8.75 18.2a.75.75 0 0 1 .7-1.33 5.5 5.5 0 0 0 7.86-3.44c.1-.4.52-.63.92-.52ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
};

exports.DataSunburst24Filled = wrapIcon_1.default( /*#__PURE__*/DataSunburst24FilledIcon, 'DataSunburst24Filled');

const DataSunburst24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 4.25a.82.82 0 0 1-.5-.74c0-.52.5-.9.99-.68 2.31 1 4.18 2.87 5.18 5.18.21.48-.16 1-.68 1-.32 0-.6-.21-.74-.5a8.53 8.53 0 0 0-4.26-4.26ZM9 3.5c0-.52-.5-.9-.99-.68C5.7 3.83 3.83 5.7 2.83 8c-.21.48.16 1 .68 1 .32 0 .6-.21.74-.5A8.53 8.53 0 0 1 8.5 4.25c.29-.13.49-.42.49-.74Zm6.5 16.24c-.3.13-.5.42-.5.74 0 .52.5.9.99.68 2.31-1 4.18-2.87 5.18-5.18.21-.48-.16-.99-.68-.99-.32 0-.6.2-.74.5a8.53 8.53 0 0 1-4.26 4.25ZM3.5 15c.32 0 .6.2.74.5a8.53 8.53 0 0 0 4.26 4.25c.29.13.49.42.49.74 0 .52-.5.9-.99.68-2.31-1-4.18-2.87-5.18-5.18-.21-.48.16-.99.68-.99ZM12 6.5c-.2 0-.38.01-.57.03a.75.75 0 1 1-.16-1.5 7 7 0 0 1 7.55 5.4.75.75 0 1 1-1.46.35A5.5 5.5 0 0 0 12 6.5Zm-2.88-.1c.23.34.14.81-.2 1.04a5.5 5.5 0 0 0-1.48 7.64.75.75 0 1 1-1.24.84A6.97 6.97 0 0 1 8.08 6.2a.75.75 0 0 1 1.04.2Zm9.11 6.5c.4.11.64.52.53.92A7 7 0 0 1 8.75 18.2a.75.75 0 1 1 .7-1.33 5.5 5.5 0 0 0 7.86-3.44c.1-.4.52-.63.92-.52ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z",
    fill: primaryFill
  }));
};

exports.DataSunburst24Regular = wrapIcon_1.default( /*#__PURE__*/DataSunburst24RegularIcon, 'DataSunburst24Regular');

const DataTreemap20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1V3Zm1 14h6a3 3 0 0 0 3-3v-1H8v4Zm9-5V6a3 3 0 0 0-3-3H8v9h9Z",
    fill: primaryFill
  }));
};

exports.DataTreemap20Filled = wrapIcon_1.default( /*#__PURE__*/DataTreemap20FilledIcon, 'DataTreemap20Filled');

const DataTreemap20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1 1v12H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1Zm1 12v-3h8v1a2 2 0 0 1-2 2H8Zm8-4H8V4h6a2 2 0 0 1 2 2v6Z",
    fill: primaryFill
  }));
};

exports.DataTreemap20Regular = wrapIcon_1.default( /*#__PURE__*/DataTreemap20RegularIcon, 'DataTreemap20Regular');

const DataTreemap24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3H9v18H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM10.5 21h7.25c1.8 0 3.25-1.46 3.25-3.25V15.5H10.5V21ZM21 14V6.25C21 4.45 19.54 3 17.75 3H10.5v11H21Z",
    fill: primaryFill
  }));
};

exports.DataTreemap24Filled = wrapIcon_1.default( /*#__PURE__*/DataTreemap24FilledIcon, 'DataTreemap24Filled');

const DataTreemap24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H9v-15H6.25Zm4.25 0V14h9V6.25c0-.97-.78-1.75-1.75-1.75H10.5Zm9 11h-9v4h7.25c.97 0 1.75-.78 1.75-1.75V15.5Z",
    fill: primaryFill
  }));
};

exports.DataTreemap24Regular = wrapIcon_1.default( /*#__PURE__*/DataTreemap24RegularIcon, 'DataTreemap24Regular');

const DataTrending16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2.75a.75.75 0 0 0-1.5 0v8.5A2.75 2.75 0 0 0 4.75 14h8.5a.75.75 0 0 0 0-1.5h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Zm6.25 2c0 .41.34.75.75.75h.94L9 7.94 7.53 6.47a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06L7 8.06l1.47 1.47c.3.3.77.3 1.06 0l2.97-2.97v1.02a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-.75-.75H10.5a.75.75 0 0 0-.75.75Z",
    fill: primaryFill
  }));
};

exports.DataTrending16Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending16FilledIcon, 'DataTrending16Filled');

const DataTrending16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 0 0-1 0v9A2.5 2.5 0 0 0 4.5 14h9a.5.5 0 0 0 0-1h-9A1.5 1.5 0 0 1 3 11.5v-9Zm7 2c0 .28.22.5.5.5h1.8L9 8.3 7.35 6.64a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 1 0 .7.7L7 7.71l1.65 1.64c.2.2.5.2.7 0L13 5.71v1.87a.5.5 0 0 0 1 0V4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.DataTrending16Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending16RegularIcon, 'DataTrending16Regular');

const DataTrending20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v10.5A2.75 2.75 0 0 0 5.75 17h10.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V3.75ZM12.75 5a.75.75 0 0 0 0 1.5h1.69L11 9.94 9.53 8.47a.75.75 0 0 0-1.06 0l-2.75 2.75a.75.75 0 1 0 1.06 1.06L9 10.06l1.47 1.47a.75.75 0 0 0 1.06 0l3.97-3.97v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5Z",
    fill: primaryFill
  }));
};

exports.DataTrending20Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending20FilledIcon, 'DataTrending20Filled');

const DataTrending20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5a.5.5 0 0 0-1 0v11A2.5 2.5 0 0 0 5.5 17h11a.5.5 0 0 0 0-1h-11A1.5 1.5 0 0 1 4 14.5v-11ZM12.5 5a.5.5 0 0 0 0 1h2.8L11 10.3 9.35 8.64a.5.5 0 0 0-.7 0l-3.5 3.5a.5.5 0 0 0 .7.7L9 9.71l1.65 1.64a.5.5 0 0 0 .7 0L16 6.71V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4Z",
    fill: primaryFill
  }));
};

exports.DataTrending20Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending20RegularIcon, 'DataTrending20Regular');

const DataTrending24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4a1 1 0 0 0-2 0v13.5A3.5 3.5 0 0 0 6.5 21H20a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5V4Zm10 2a1 1 0 1 0 0 2h2.09l-3.84 3.84-1.8-1.8a1 1 0 0 0-1.4 0L6.78 13.3a1 1 0 1 0 1.42 1.42l2.54-2.55 1.8 1.8a1 1 0 0 0 1.4 0L18.5 9.4v2.09a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1H15Z",
    fill: primaryFill
  }));
};

exports.DataTrending24Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending24FilledIcon, 'DataTrending24Filled');

const DataTrending24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v14C3 19.55 4.46 21 6.25 21h14a.75.75 0 0 0 0-1.5h-14c-.97 0-1.75-.78-1.75-1.75v-14ZM14.75 6a.75.75 0 0 0 0 1.5h3.19l-4.69 4.69-1.97-1.97a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l3.22-3.22 1.97 1.97c.3.3.77.3 1.06 0L19 8.56v3.2a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-.75-.75h-5Z",
    fill: primaryFill
  }));
};

exports.DataTrending24Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending24RegularIcon, 'DataTrending24Regular');

const DataTrending28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3a1 1 0 0 1 1 1v17c0 1.1.9 2 2 2h17a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1Zm19 6.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.59l-5.09 5.09-2.3-2.3a1 1 0 0 0-1.4 0l-5.5 5.5a1 1 0 1 0 1.4 1.42l4.8-4.8 2.3 2.3a1 1 0 0 0 1.4 0L23 9.4Z",
    fill: primaryFill
  }));
};

exports.DataTrending28Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending28FilledIcon, 'DataTrending28Filled');

const DataTrending28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 3c.41 0 .75.34.75.75v17.5c0 1.24 1 2.25 2.25 2.25h17.5a.75.75 0 0 1 0 1.5H6.75A3.75 3.75 0 0 1 3 21.25V3.75c0-.41.34-.75.75-.75Zm18.19 4.5-5.69 5.69-2.47-2.47a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 1 0 1.06 1.06l4.97-4.97 2.47 2.47c.3.3.77.3 1.06 0L23 8.56v3.69a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h3.69Z",
    fill: primaryFill
  }));
};

exports.DataTrending28Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending28RegularIcon, 'DataTrending28Regular');

const DataTrending32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3a1 1 0 0 1 1 1v20.5A2.5 2.5 0 0 0 7.5 27H28a1 1 0 1 1 0 2H7.5A4.5 4.5 0 0 1 3 24.5V4a1 1 0 0 1 1-1Zm15 4.75c0-.69.56-1.25 1.25-1.25h7c.69 0 1.25.56 1.25 1.25v7a1.25 1.25 0 0 1-2.5 0v-3.98l-6.62 6.61c-.48.5-1.28.5-1.76 0l-3.12-3.11-5.37 5.36a1.25 1.25 0 0 1-1.76-1.76l6.25-6.25a1.25 1.25 0 0 1 1.76 0l3.12 3.11L24.23 9h-3.98C19.55 9 19 8.44 19 7.75Z",
    fill: primaryFill
  }));
};

exports.DataTrending32Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending32FilledIcon, 'DataTrending32Filled');

const DataTrending32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3a1 1 0 0 1 1 1v20.5A2.5 2.5 0 0 0 7.5 27H28a1 1 0 1 1 0 2H7.5A4.5 4.5 0 0 1 3 24.5V4a1 1 0 0 1 1-1Zm15 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-4.59l-7.3 7.3a1 1 0 0 1-1.4 0L14 14.4l-5.3 5.3a1 1 0 0 1-1.4-1.42l6-6a1 1 0 0 1 1.4 0l3.3 3.3L24.59 9H20a1 1 0 0 1-1-1Z",
    fill: primaryFill
  }));
};

exports.DataTrending32Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending32RegularIcon, 'DataTrending32Regular');

const DataTrending48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 6C8.33 6 9 6.67 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28C6 6.67 6.67 6 7.5 6ZM38 17.12v6.38a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.38l-8.43 8.43-4.44-4.04a1.5 1.5 0 0 0-2.04.02l-8.5 8a1.5 1.5 0 1 0 2.06 2.18l7.49-7.05 4.47 4.07c.6.54 1.5.52 2.07-.05L38 17.12Z",
    fill: primaryFill
  }));
};

exports.DataTrending48Filled = wrapIcon_1.default( /*#__PURE__*/DataTrending48FilledIcon, 'DataTrending48Filled');

const DataTrending48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 7.25a1.25 1.25 0 1 0-2.5 0v28.5C6 39.2 8.8 42 12.25 42h28.5a1.25 1.25 0 1 0 0-2.5h-28.5a3.75 3.75 0 0 1-3.75-3.75V7.25Zm19.5 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v10a1.25 1.25 0 1 1-2.5 0v-6.98L27.88 26.38c-.47.48-1.23.5-1.72.04l-4.62-4.2-7.4 7.41a1.25 1.25 0 0 1-1.77-1.76l8.25-8.25a1.25 1.25 0 0 1 1.72-.04l4.62 4.2 9.27-9.28h-6.98c-.69 0-1.25-.56-1.25-1.25Z",
    fill: primaryFill
  }));
};

exports.DataTrending48Regular = wrapIcon_1.default( /*#__PURE__*/DataTrending48RegularIcon, 'DataTrending48Regular');

const DataUsage20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5 7c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM6 8.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5ZM13.5 6c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.DataUsage20Filled = wrapIcon_1.default( /*#__PURE__*/DataUsage20FilledIcon, 'DataUsage20Filled');

const DataUsage20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 10a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM6 8.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5ZM13.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm1 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z",
    fill: primaryFill
  }));
};

exports.DataUsage20Regular = wrapIcon_1.default( /*#__PURE__*/DataUsage20RegularIcon, 'DataUsage20Regular');

const DataUsage24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5ZM7.75 9a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 7.75 9Zm8.5-2a.74.74 0 0 0-.75.73v8.54c0 .4.34.73.75.73s.75-.33.75-.73V7.73c0-.4-.34-.73-.75-.73Zm-4.27 5c-.4 0-.73.33-.73.73l.04 3.55c0 .4.33.72.73.72.4 0 .73-.34.73-.74l-.04-3.54c0-.4-.33-.73-.73-.72Z",
    fill: primaryFill
  }));
};

exports.DataUsage24Filled = wrapIcon_1.default( /*#__PURE__*/DataUsage24FilledIcon, 'DataUsage24Filled');

const DataUsage24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.25 3A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5Zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.7-.56-1.25-1.25-1.25ZM7.75 9c.38 0 .7.28.74.64l.01.1v6.51a.75.75 0 0 1-1.5.1v-6.6c0-.42.34-.75.75-.75Zm8.5-2c.38 0 .7.27.74.63l.01.1v8.54c0 .4-.34.73-.75.73a.74.74 0 0 1-.74-.63l-.01-.1V7.73c0-.4.34-.73.75-.73Zm-4.27 5c.37 0 .67.26.73.62v.1l.04 3.54c0 .4-.32.73-.73.74a.73.73 0 0 1-.73-.62v-.1l-.04-3.55c0-.4.32-.73.73-.73Z",
    fill: primaryFill
  }));
};

exports.DataUsage24Regular = wrapIcon_1.default( /*#__PURE__*/DataUsage24RegularIcon, 'DataUsage24Regular');

const DataUsageEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5.48c.15-.5.42-.96.8-1.33l1.84-1.85a.5.5 0 0 1-.12-.32v-7a.5.5 0 0 1 1 0v6.44l2.1-2.1c.27-.27.57-.47.9-.6V4a2 2 0 0 0-2-2H4Zm5 7c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM5 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm5.98 7.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.82 4.83a2.2 2.2 0 0 1-1.03.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.DataUsageEdit20Filled = wrapIcon_1.default( /*#__PURE__*/DataUsageEdit20FilledIcon, 'DataUsageEdit20Filled');

const DataUsageEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 15h5.99c-.23.3-.4.64-.51 1H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5.23c-.33.14-.63.34-.9.61l-.1.1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm8-9.5a.5.5 0 0 1 1 0v6.44l-.88.88a.5.5 0 0 1-.12-.32v-7Zm-7 2a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5ZM9 9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3A.5.5 0 0 0 9 9Zm1.98 6.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.82 4.83a2.2 2.2 0 0 1-1.03.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.DataUsageEdit20Regular = wrapIcon_1.default( /*#__PURE__*/DataUsageEdit20RegularIcon, 'DataUsageEdit20Regular');

const DataUsageEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 4.75A2.75 2.75 0 0 0 17.25 2H4.75A2.75 2.75 0 0 0 2 4.75v12.5A2.75 2.75 0 0 0 4.75 20h6.67l.1-.42c.16-.65.5-1.24.97-1.72l2.16-2.15a.71.71 0 0 1-.15-.44V6.73c0-.4.34-.73.75-.73s.75.33.75.73v7.62l2.4-2.39a3.27 3.27 0 0 1 1.6-.88V4.75Zm-14 4a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0v-6.5Zm4.25 2.98c0-.4.32-.73.73-.73.4 0 .73.31.73.72l.04 3.54c0 .4-.32.73-.73.74a.73.73 0 0 1-.73-.72l-.04-3.55Zm8.85.94-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.DataUsageEdit24Filled = wrapIcon_1.default( /*#__PURE__*/DataUsageEdit24FilledIcon, 'DataUsageEdit24Filled');

const DataUsageEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 4.75A2.75 2.75 0 0 0 17.25 2H4.75A2.75 2.75 0 0 0 2 4.75v12.5A2.75 2.75 0 0 0 4.75 20h6.67l.1-.42c.1-.39.25-.75.46-1.08H4.75c-.69 0-1.25-.56-1.25-1.25V4.75c0-.7.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v7.1c.44-.4.96-.65 1.5-.77V4.75Zm-4 9.6V6.63a.74.74 0 0 0-.75-.63.74.74 0 0 0-.75.73V15.37c.02.12.07.24.15.34L16 14.35Zm-8.5-5.7a.75.75 0 0 0-1.5.1v6.6a.75.75 0 0 0 1.5-.1v-6.6Zm4.2 2.97a.73.73 0 0 0-.72-.62c-.4 0-.73.33-.73.73l.04 3.55v.1c.06.35.36.62.73.62.4 0 .73-.34.73-.74l-.04-3.54v-.1Zm7.4 1.05-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.DataUsageEdit24Regular = wrapIcon_1.default( /*#__PURE__*/DataUsageEdit24RegularIcon, 'DataUsageEdit24Regular');

const DataUsageSettings20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.2a5.5 5.5 0 0 0-3 0V6.5a.5.5 0 0 0-1 0v3.1a5.5 5.5 0 0 0-2.5 2.6v-1.7a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .52.5 5.5 5.5 0 0 0 .58 3H5a3 3 0 0 1-3-3V6Zm3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm6.57 3.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.DataUsageSettings20Filled = wrapIcon_1.default( /*#__PURE__*/DataUsageSettings20FilledIcon, 'DataUsageSettings20Filled');

const DataUsageSettings20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.6a5.5 5.5 0 0 1-.4-1H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.02a5.5 5.5 0 0 1 1 .19V6a3 3 0 0 0-3-3H5Zm4.02 11a5.5 5.5 0 0 1 .48-1.8v-1.7a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .52.5Zm3.38-4.58.6-.21V6.5a.5.5 0 0 0-1 0v3.1c.13-.06.26-.13.4-.18ZM5.5 8a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm6.57 3.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.DataUsageSettings20Regular = wrapIcon_1.default( /*#__PURE__*/DataUsageSettings20RegularIcon, 'DataUsageSettings20Regular');

const DataUsageToolbox20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5v-2.5c0-.17.02-.34.05-.5H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0V12c.37-.5.91-.84 1.54-.96A2.5 2.5 0 0 1 12 9.5v-4a.5.5 0 0 1 1 0v3.55c.16-.03.33-.05.5-.05h2c.17 0 .34.02.5.05V4a2 2 0 0 0-2-2H4Zm1 5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm7 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DataUsageToolbox20Filled = wrapIcon_1.default( /*#__PURE__*/DataUsageToolbox20FilledIcon, 'DataUsageToolbox20Filled');

const DataUsageToolbox20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .55.5c.08-.37.23-.71.45-1V9.5A.5.5 0 0 0 9 9Zm-5 6h5v1H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5.05a2.51 2.51 0 0 0-.5-.05H15V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm9-9.5v3.55c-.37.07-.7.23-1 .45v-4a.5.5 0 0 1 1 0Zm-8 2a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm7 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DataUsageToolbox20Regular = wrapIcon_1.default( /*#__PURE__*/DataUsageToolbox20RegularIcon, 'DataUsageToolbox20Regular');

const DataUsageToolbox24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.25 2A2.75 2.75 0 0 1 20 4.75v6.6c-.24-.06-.49-.1-.75-.1H16V6.73c0-.4-.34-.73-.75-.73a.74.74 0 0 0-.75.73v4.82A2.75 2.75 0 0 0 13 14v.05c-.48.1-.92.34-1.26.67l-.03-3a.73.73 0 0 0-1.46.01l.04 3.55c0 .4.33.72.73.72h.03c-.03.16-.05.33-.05.5V20H4.75A2.75 2.75 0 0 1 2 17.25V4.75A2.75 2.75 0 0 1 4.75 2h12.5ZM6.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 6.75 8ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.DataUsageToolbox24Filled = wrapIcon_1.default( /*#__PURE__*/DataUsageToolbox24FilledIcon, 'DataUsageToolbox24Filled');

const DataUsageToolbox24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.25 2A2.75 2.75 0 0 1 20 4.75v6.6c-.24-.06-.49-.1-.75-.1h-.75v-6.5c0-.7-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H11V20H4.75A2.75 2.75 0 0 1 2 17.25V4.75A2.75 2.75 0 0 1 4.75 2h12.5ZM16 6.73v4.52h-.25c-.45 0-.88.1-1.25.3V6.73c0-.4.34-.73.75-.73.38 0 .7.27.74.63l.01.1Zm-4.29 4.99.03 3c-.34.34-.59.78-.69 1.28h-.03a.73.73 0 0 1-.73-.62v-.1l-.04-3.55c0-.4.32-.73.73-.73.37 0 .67.26.73.62v.1ZM6.75 8c.38 0 .7.28.74.64l.01.1v6.51a.75.75 0 0 1-1.5.1v-6.6c0-.42.34-.75.75-.75ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.DataUsageToolbox24Regular = wrapIcon_1.default( /*#__PURE__*/DataUsageToolbox24RegularIcon, 'DataUsageToolbox24Regular');

const DataWaterfall20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3.5c0-.28.22-.5.5-.5H7a2 2 0 0 1 2 2v4.5h6c1.04 0 2 .74 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.04 0-2-.74-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DataWaterfall20Filled = wrapIcon_1.default( /*#__PURE__*/DataWaterfall20FilledIcon, 'DataWaterfall20Filled');

const DataWaterfall20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3.5c0-.28.22-.5.5-.5H7a2 2 0 0 1 2 2v4.5h6c1.04 0 2 .74 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.04 0-2-.74-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5ZM4 4v4.5a1 1 0 0 0 1 1h3V5a1 1 0 0 0-1-1H4Zm12 12v-4.7c0-.38-.38-.8-1-.8h-3v4.7c0 .38.38.8 1 .8h3Z",
    fill: primaryFill
  }));
};

exports.DataWaterfall20Regular = wrapIcon_1.default( /*#__PURE__*/DataWaterfall20RegularIcon, 'DataWaterfall20Regular');

const DataWaterfall24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 3a.75.75 0 0 0 0 1.5H4v5.75c0 1.24 1 2.25 2.25 2.25h6.25v6.25c0 1.24 1 2.25 2.25 2.25h6.5a.75.75 0 0 0 0-1.5H20v-6.25c0-1.24-1-2.25-2.25-2.25H11.5V5.25c0-1.24-1-2.25-2.25-2.25h-6.5Z",
    fill: primaryFill
  }));
};

exports.DataWaterfall24Filled = wrapIcon_1.default( /*#__PURE__*/DataWaterfall24FilledIcon, 'DataWaterfall24Filled');

const DataWaterfall24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3.75c0-.41.34-.75.75-.75h6.5c1.24 0 2.25 1 2.25 2.25V11h6.25c1.24 0 2.25 1 2.25 2.25v6.25h1.25a.75.75 0 0 1 0 1.5h-6.5c-1.24 0-2.25-1-2.25-2.25V12.5H6.25c-1.24 0-2.25-1-2.25-2.25V4.5H2.75A.75.75 0 0 1 2 3.75ZM18.5 19.5v-6.25a.75.75 0 0 0-.75-.75H14v6.25c0 .41.34.75.75.75h3.75ZM10 5.25a.75.75 0 0 0-.75-.75H5.5v5.75c0 .41.34.75.75.75H10V5.25Z",
    fill: primaryFill
  }));
};

exports.DataWaterfall24Regular = wrapIcon_1.default( /*#__PURE__*/DataWaterfall24RegularIcon, 'DataWaterfall24Regular');

const DataWhisker20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a.5.5 0 0 0 0 1h1v1h-.5C4.67 4 4 4.67 4 5.5V10h5V5.5C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm7 2a.5.5 0 0 0 0 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5V9h5V7.5c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 0 0 0-1h-3ZM4.5 15.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5V11H4v1.5c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 0 0-.5.5ZM12 18a.5.5 0 0 1 0-1h1v-1h-.5a1.5 1.5 0 0 1-1.5-1.5V10h5v4.5c0 .83-.67 1.5-1.5 1.5H14v1h1a.5.5 0 0 1 0 1h-3Z",
    fill: primaryFill
  }));
};

exports.DataWhisker20Filled = wrapIcon_1.default( /*#__PURE__*/DataWhisker20FilledIcon, 'DataWhisker20Filled');

const DataWhisker20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a.5.5 0 0 0 0 1h1v1h-.5C4.67 4 4 4.67 4 5.5v7c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5v-7C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm0 10.5V11h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm0-7c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V10H5V5.5ZM12 4a.5.5 0 0 0 0 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h.5v1h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1v-1h.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 0 0 0-1h-3Zm3 5h-3V7.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9Zm-3 1h3v4.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V10Z",
    fill: primaryFill
  }));
};

exports.DataWhisker20Regular = wrapIcon_1.default( /*#__PURE__*/DataWhisker20RegularIcon, 'DataWhisker20Regular');

const DataWhisker24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 2a.75.75 0 0 0 0 1.5h1V5h-.5C5.01 5 4 6 4 7.25V11h7V7.25C11 6.01 10 5 8.75 5h-.5V3.5h1a.75.75 0 0 0 0-1.5h-3.5Zm0 16a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25V12.5H4v1.75c0 1.24 1 2.25 2.25 2.25h.5V18h-1ZM14 4.75c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-1V7h.5C18.99 7 20 8 20 9.25V11h-7V9.25C13 8.01 14 7 15.25 7h.5V5.5h-1a.75.75 0 0 1-.75-.75Zm-1 11.5V12.5h7v3.75c0 1.24-1 2.25-2.25 2.25h-.5V20h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-1.5h-.5c-1.24 0-2.25-1-2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.DataWhisker24Filled = wrapIcon_1.default( /*#__PURE__*/DataWhisker24FilledIcon, 'DataWhisker24Filled');

const DataWhisker24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.75 4a.75.75 0 0 0 0 1.5h1V7h-.5C14.01 7 13 8 13 9.25v7c0 1.24 1 2.25 2.25 2.25h.5V20h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25v-7C20 8.01 19 7 17.75 7h-.5V5.5h1a.75.75 0 0 0 0-1.5h-3.5Zm-.25 5.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V11h-4V9.25Zm0 3.25h4v3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1-.75-.75V12.5ZM5.75 2a.75.75 0 0 0 0 1.5h1V5h-.5C5.01 5 4 6 4 7.25v7c0 1.24 1 2.25 2.25 2.25h.5V18h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25v-7C11 6.01 10 5 8.75 5h-.5V3.5h1a.75.75 0 0 0 0-1.5h-3.5Zm.5 13a.75.75 0 0 1-.75-.75V12.5h4v1.75c0 .41-.34.75-.75.75h-2.5Zm3.25-4h-4V7.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V11Z",
    fill: primaryFill
  }));
};

exports.DataWhisker24Regular = wrapIcon_1.default( /*#__PURE__*/DataWhisker24RegularIcon, 'DataWhisker24Regular');

const Database16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 3.5C13 4.88 10.76 6 8 6S3 4.88 3 3.5 5.24 1 8 1s5 1.12 5 2.5Zm-10 9V5.49C4.06 6.4 5.86 7 8 7s3.94-.59 5-1.51v7.01c0 1.43-2.15 2.5-5 2.5s-5-1.07-5-2.5Z",
    fill: primaryFill
  }));
};

exports.Database16Filled = wrapIcon_1.default( /*#__PURE__*/Database16FilledIcon, 'Database16Filled');

const Database16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1C5.15 1 3 2.08 3 3.5v9C3 13.93 5.15 15 8 15s5-1.07 5-2.5v-9C13 2.08 10.85 1 8 1Zm0 1c2.44 0 4 .89 4 1.5S10.44 5 8 5s-4-.89-4-1.5S5.56 2 8 2Zm0 12c-2.44 0-4-.89-4-1.5V5.02c1.21.7 2.6 1.04 4 .98 1.4.06 2.79-.28 4-.98v7.48c0 .61-1.56 1.5-4 1.5Z",
    fill: primaryFill
  }));
};

exports.Database16Regular = wrapIcon_1.default( /*#__PURE__*/Database16RegularIcon, 'Database16Regular');

const Database20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9V15c0 1.66-2.69 3-6 3s-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98Z",
    fill: primaryFill
  }));
};

exports.Database20Filled = wrapIcon_1.default( /*#__PURE__*/Database20FilledIcon, 'Database20Filled');

const Database20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5c0-1 .88-1.76 1.9-2.22C6.98 2.28 8.43 2 10 2c1.57 0 3.02.29 4.1.78C15.12 3.24 16 3.99 16 5v10c0 1-.88 1.76-1.9 2.22-1.08.5-2.53.78-4.1.78-1.57 0-3.02-.29-4.1-.78C4.88 16.76 4 16.01 4 15V5Zm1 0c0 .37.36.88 1.32 1.31.91.42 2.22.69 3.68.69s2.77-.27 3.68-.69C14.64 5.88 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.19 9.19 0 0 0 10 3c-1.46 0-2.77.27-3.68.69C5.36 4.12 5 4.63 5 5Zm10 1.7c-.27.2-.58.38-.9.52-1.08.5-2.53.78-4.1.78-1.57 0-3.02-.29-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.88 1.32 1.31.91.42 2.22.69 3.68.69s2.77-.27 3.68-.69c.96-.43 1.32-.94 1.32-1.31V6.7Z",
    fill: primaryFill
  }));
};

exports.Database20Regular = wrapIcon_1.default( /*#__PURE__*/Database20RegularIcon, 'Database20Regular');

const Database24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4Zm6.33.17c.59-.3 1.17-.67 1.67-1.12V18c0 2.2-3.58 4-8 4s-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33 2.4 0 4.63-.48 6.33-1.33Z",
    fill: primaryFill
  }));
};

exports.Database24Filled = wrapIcon_1.default( /*#__PURE__*/Database24FilledIcon, 'Database24Filled');

const Database24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6c0-.7.32-1.3.77-1.78a5.61 5.61 0 0 1 1.8-1.2A13.65 13.65 0 0 1 12 2c2.08 0 4 .38 5.43 1.02.72.32 1.34.72 1.8 1.2.45.49.77 1.09.77 1.78v12c0 .7-.32 1.3-.77 1.78-.46.48-1.08.88-1.8 1.2A13.65 13.65 0 0 1 12 22c-2.08 0-4-.38-5.43-1.02a5.61 5.61 0 0 1-1.8-1.2A2.6 2.6 0 0 1 4 18V6Zm1.5 0c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75 0-.2-.09-.46-.37-.75-.27-.3-.71-.6-1.31-.86-1.2-.54-2.9-.89-4.82-.89-1.92 0-3.62.35-4.82.89-.6.26-1.04.56-1.31.86-.28.3-.37.54-.37.75Zm13 2.4a6.8 6.8 0 0 1-1.07.58A13.65 13.65 0 0 1 12 10c-2.08 0-4-.38-5.43-1.02A6.8 6.8 0 0 1 5.5 8.4V18c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75V8.4Z",
    fill: primaryFill
  }));
};

exports.Database24Regular = wrapIcon_1.default( /*#__PURE__*/Database24RegularIcon, 'Database24Regular');

const Database32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 14c3.26 0 6.3-.6 8.6-1.64.83-.38 1.67-.87 2.4-1.48V25c0 2.76-4.92 5-11 5S5 27.76 5 25V10.88c.73.61 1.57 1.1 2.4 1.48A21.33 21.33 0 0 0 16 14ZM5 7c0-2.76 4.92-5 11-5s11 2.24 11 5-4.92 5-11 5S5 9.76 5 7Z",
    fill: primaryFill
  }));
};

exports.Database32Filled = wrapIcon_1.default( /*#__PURE__*/Database32FilledIcon, 'Database32Filled');

const Database32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7c0-2.76-4.92-5-11-5S5 4.24 5 7v18c0 2.76 4.92 5 11 5s11-2.24 11-5V7Zm-2 0c0 .11-.2.87-2.05 1.71A17.4 17.4 0 0 1 16 10a17.4 17.4 0 0 1-6.95-1.29C7.19 7.87 7 7.11 7 7c0-.11.2-.87 2.05-1.71A17.4 17.4 0 0 1 16 4c2.82 0 5.27.52 6.95 1.29C24.81 6.13 25 6.89 25 7Zm0 2.88V25c0 .11-.2.87-2.05 1.71A17.4 17.4 0 0 1 16 28a17.4 17.4 0 0 1-6.95-1.29C7.19 25.87 7 25.11 7 25V9.88C9 11.16 12.28 12 16 12c3.72 0 7-.84 9-2.12Z",
    fill: primaryFill
  }));
};

exports.Database32Regular = wrapIcon_1.default( /*#__PURE__*/Database32RegularIcon, 'Database32Regular');

const DatabaseArrowDown20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0 0 10.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowDown20Filled = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowDown20FilledIcon, 'DatabaseArrowDown20Filled');

const DatabaseArrowDown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4.2c-.32-.08-.66-.15-1-.18V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 9.6 17c.18.36.4.7.66 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm14 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowDown20Regular = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowDown20RegularIcon, 'DatabaseArrowDown20Regular');

const DatabaseArrowRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0 0 10.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight20Filled = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight20FilledIcon, 'DatabaseArrowRight20Filled');

const DatabaseArrowRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4.2c-.32-.08-.66-.15-1-.18V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 9.6 17c.18.36.4.7.66 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm9.5 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight20Regular = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight20RegularIcon, 'DatabaseArrowRight20Regular');

const DatabaseArrowRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4Zm6.33.17c.59-.3 1.17-.67 1.67-1.12v2.45a6.5 6.5 0 0 0-7.2 10.48L12 22c-4.42 0-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33 2.4 0 4.63-.48 6.33-1.33ZM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-3 5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight24Filled = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight24FilledIcon, 'DatabaseArrowRight24Filled');

const DatabaseArrowRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6c0-.7.32-1.3.77-1.78a5.61 5.61 0 0 1 1.8-1.2A13.65 13.65 0 0 1 12 2c2.08 0 4 .38 5.43 1.02.72.32 1.34.72 1.8 1.2.45.49.77 1.09.77 1.78v5.5c-.47-.2-.98-.34-1.5-.42V8.39a6.8 6.8 0 0 1-1.07.6A13.65 13.65 0 0 1 12 10c-2.08 0-4-.38-5.43-1.02A6.8 6.8 0 0 1 5.5 8.4V18c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.14.51 2.74.86 4.55.89.28.54.64 1.04 1.06 1.48L12 22c-2.08 0-4-.38-5.43-1.02a5.61 5.61 0 0 1-1.8-1.2A2.6 2.6 0 0 1 4 18V6Zm1.5 0c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75 0-.2-.09-.46-.37-.75-.27-.3-.71-.6-1.31-.86-1.2-.54-2.9-.89-4.82-.89-1.92 0-3.62.35-4.82.89-.6.26-1.04.56-1.31.86-.28.3-.37.54-.37.75Zm12 6a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-3 5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight24Regular = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight24RegularIcon, 'DatabaseArrowRight24Regular');

const DatabaseArrowRight32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 14c3.26 0 6.3-.6 8.6-1.64.83-.38 1.67-.87 2.4-1.48v4.33a9 9 0 0 0-9.76 14.76c-.4.02-.82.03-1.24.03-6.08 0-11-2.24-11-5V10.88c.73.61 1.57 1.1 2.4 1.48A21.33 21.33 0 0 0 16 14ZM5 7c0-2.76 4.92-5 11-5s11 2.24 11 5-4.92 5-11 5S5 9.76 5 7Zm26 16.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-12.25-1h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L26.44 24h-7.69a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight32Filled = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight32FilledIcon, 'DatabaseArrowRight32Filled');

const DatabaseArrowRight32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7c0-2.76-4.92-5-11-5S5 4.24 5 7v18c0 2.76 4.92 5 11 5 .42 0 .83-.01 1.24-.03A9.04 9.04 0 0 1 15.7 28c-2.7-.04-5.03-.55-6.65-1.29C7.19 25.87 7 25.11 7 25V9.88C9 11.16 12.28 12 16 12c3.72 0 7-.84 9-2.12v4.74c.7.12 1.37.32 2 .59V7Zm-2 0c0 .11-.2.87-2.05 1.71A17.4 17.4 0 0 1 16 10a17.4 17.4 0 0 1-6.95-1.29C7.19 7.87 7 7.11 7 7c0-.11.2-.87 2.05-1.71A17.4 17.4 0 0 1 16 4c2.82 0 5.27.52 6.95 1.29C24.81 6.13 25 6.89 25 7Zm6 16.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-12.25-1h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L26.44 24h-7.69a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowRight32Regular = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowRight32RegularIcon, 'DatabaseArrowRight32Regular');

const DatabaseArrowUp20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0 0 10.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM10 14.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.85-2.35a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 0 0 1 0v-2.8l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.DatabaseArrowUp20Filled = wrapIcon_1.default( /*#__PURE__*/DatabaseArrowUp20FilledIcon, 'DatabaseArrowUp20Filled');