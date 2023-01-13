"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pin48Filled = exports.Pin32Regular = exports.Pin32Filled = exports.Pin28Regular = exports.Pin28Filled = exports.Pin24Regular = exports.Pin24Filled = exports.Pin20Regular = exports.Pin20Filled = exports.Pin16Regular = exports.Pin16Filled = exports.Pin12Regular = exports.Pin12Filled = exports.Pill28Regular = exports.Pill28Filled = exports.Pill24Regular = exports.Pill24Filled = exports.Pill20Regular = exports.Pill20Filled = exports.Pill16Regular = exports.Pill16Filled = exports.PictureInPictureExit24Regular = exports.PictureInPictureExit24Filled = exports.PictureInPictureExit20Regular = exports.PictureInPictureExit20Filled = exports.PictureInPictureExit16Regular = exports.PictureInPictureExit16Filled = exports.PictureInPictureEnter24Regular = exports.PictureInPictureEnter24Filled = exports.PictureInPictureEnter20Regular = exports.PictureInPictureEnter20Filled = exports.PictureInPictureEnter16Regular = exports.PictureInPictureEnter16Filled = exports.PictureInPicture24Regular = exports.PictureInPicture24Filled = exports.PictureInPicture20Regular = exports.PictureInPicture20Filled = exports.PictureInPicture16Regular = exports.PictureInPicture16Filled = exports.Pi24Regular = exports.Pi24Filled = exports.Pi20Regular = exports.Pi20Filled = exports.PhotoFilter24Regular = exports.PhotoFilter24Filled = exports.PhotoFilter20Regular = exports.PhotoFilter20Filled = exports.PhoneVibrate24Regular = exports.PhoneVibrate24Filled = exports.PhoneVibrate20Regular = void 0;
exports.PlayCircle24Filled = exports.PlayCircle20Regular = exports.PlayCircle20Filled = exports.PlayCircle16Regular = exports.PlayCircle16Filled = exports.Play48Regular = exports.Play48Filled = exports.Play32Regular = exports.Play32Filled = exports.Play28Regular = exports.Play28Filled = exports.Play24Regular = exports.Play24Filled = exports.Play20Regular = exports.Play20Filled = exports.Play16Regular = exports.Play16Filled = exports.Play12Regular = exports.Play12Filled = exports.Pivot24Regular = exports.Pivot24Filled = exports.Pivot20Regular = exports.Pivot20Filled = exports.PipelinePlay20Regular = exports.PipelinePlay20Filled = exports.PipelineArrowCurveDown20Regular = exports.PipelineArrowCurveDown20Filled = exports.PipelineAdd32Regular = exports.PipelineAdd32Filled = exports.PipelineAdd20Regular = exports.PipelineAdd20Filled = exports.Pipeline32Regular = exports.Pipeline32Filled = exports.Pipeline24Regular = exports.Pipeline24Filled = exports.Pipeline20Regular = exports.Pipeline20Filled = exports.PinOff48Regular = exports.PinOff48Filled = exports.PinOff32Regular = exports.PinOff32Filled = exports.PinOff28Regular = exports.PinOff28Filled = exports.PinOff24Regular = exports.PinOff24Filled = exports.PinOff20Regular = exports.PinOff20Filled = exports.PinOff16Regular = exports.PinOff16Filled = exports.Pin48Regular = void 0;
exports.PortUsbC24Filled = exports.PortUsbC20Regular = exports.PortUsbC20Filled = exports.PortUsbA24Regular = exports.PortUsbA24Filled = exports.PortUsbA20Regular = exports.PortUsbA20Filled = exports.PortMicroUsb24Regular = exports.PortMicroUsb24Filled = exports.PortMicroUsb20Regular = exports.PortMicroUsb20Filled = exports.PortHdmi24Regular = exports.PortHdmi24Filled = exports.PortHdmi20Regular = exports.PortHdmi20Filled = exports.Poll24Regular = exports.Poll24Filled = exports.Poll20Regular = exports.Poll20Filled = exports.Poll16Regular = exports.Poll16Filled = exports.PointScan24Regular = exports.PointScan24Filled = exports.PointScan20Regular = exports.PointScan20Filled = exports.PlugDisconnected28Regular = exports.PlugDisconnected28Filled = exports.PlugDisconnected24Regular = exports.PlugDisconnected24Filled = exports.PlugDisconnected20Regular = exports.PlugDisconnected20Filled = exports.PlugConnectedCheckmark20Regular = exports.PlugConnectedCheckmark20Filled = exports.PlugConnectedAdd20Regular = exports.PlugConnectedAdd20Filled = exports.PlugConnected24Regular = exports.PlugConnected24Filled = exports.PlugConnected20Regular = exports.PlugConnected20Filled = exports.PlayingCards20Regular = exports.PlayingCards20Filled = exports.PlaySettings20Regular = exports.PlaySettings20Filled = exports.PlayMultiple16Regular = exports.PlayMultiple16Filled = exports.PlayCircle48Regular = exports.PlayCircle48Filled = exports.PlayCircle28Regular = exports.PlayCircle28Filled = exports.PlayCircle24Regular = void 0;
exports.PresenceAvailable16Filled = exports.PresenceAvailable12Regular = exports.PresenceAvailable12Filled = exports.PresenceAvailable10Regular = exports.PresenceAvailable10Filled = exports.PremiumPerson24Regular = exports.PremiumPerson24Filled = exports.PremiumPerson20Regular = exports.PremiumPerson20Filled = exports.PremiumPerson16Regular = exports.PremiumPerson16Filled = exports.Premium32Regular = exports.Premium32Filled = exports.Premium28Regular = exports.Premium28Filled = exports.Premium24Regular = exports.Premium24Filled = exports.Premium20Regular = exports.Premium20Filled = exports.Premium16Regular = exports.Premium16Filled = exports.Premium12Regular = exports.Premium12Filled = exports.Predictions24Regular = exports.Predictions24Filled = exports.Predictions20Regular = exports.Predictions20Filled = exports.Power28Regular = exports.Power28Filled = exports.Power24Regular = exports.Power24Filled = exports.Power20Regular = exports.Power20Filled = exports.PositionToFront24Regular = exports.PositionToFront24Filled = exports.PositionToFront20Regular = exports.PositionToFront20Filled = exports.PositionToBack24Regular = exports.PositionToBack24Filled = exports.PositionToBack20Regular = exports.PositionToBack20Filled = exports.PositionForward24Regular = exports.PositionForward24Filled = exports.PositionForward20Regular = exports.PositionForward20Filled = exports.PositionBackward24Regular = exports.PositionBackward24Filled = exports.PositionBackward20Regular = exports.PositionBackward20Filled = exports.PortUsbC24Regular = void 0;
exports.PresenterOff20Filled = exports.Presenter24Regular = exports.Presenter24Filled = exports.Presenter20Regular = exports.Presenter20Filled = exports.PresenceUnknown24Regular = exports.PresenceUnknown20Regular = exports.PresenceUnknown16Regular = exports.PresenceUnknown12Regular = exports.PresenceUnknown10Regular = exports.PresenceOof24Regular = exports.PresenceOof20Regular = exports.PresenceOof16Regular = exports.PresenceOof12Regular = exports.PresenceOof10Regular = exports.PresenceOffline24Regular = exports.PresenceOffline20Regular = exports.PresenceOffline16Regular = exports.PresenceOffline12Regular = exports.PresenceOffline10Regular = exports.PresenceDnd24Regular = exports.PresenceDnd24Filled = exports.PresenceDnd20Regular = exports.PresenceDnd20Filled = exports.PresenceDnd16Regular = exports.PresenceDnd16Filled = exports.PresenceDnd12Regular = exports.PresenceDnd12Filled = exports.PresenceDnd10Regular = exports.PresenceDnd10Filled = exports.PresenceBusy24Filled = exports.PresenceBusy20Filled = exports.PresenceBusy16Filled = exports.PresenceBusy12Filled = exports.PresenceBusy10Filled = exports.PresenceBlocked24Regular = exports.PresenceBlocked20Regular = exports.PresenceBlocked16Regular = exports.PresenceBlocked12Regular = exports.PresenceBlocked10Regular = exports.PresenceAway24Filled = exports.PresenceAway20Filled = exports.PresenceAway16Filled = exports.PresenceAway12Filled = exports.PresenceAway10Filled = exports.PresenceAvailable24Regular = exports.PresenceAvailable24Filled = exports.PresenceAvailable20Regular = exports.PresenceAvailable20Filled = exports.PresenceAvailable16Regular = void 0;
exports.Prohibited20Filled = exports.Prohibited16Regular = exports.Prohibited16Filled = exports.Prohibited12Regular = exports.Prohibited12Filled = exports.ProductionCheckmark24Regular = exports.ProductionCheckmark24Filled = exports.ProductionCheckmark20Regular = exports.ProductionCheckmark20Filled = exports.Production24Regular = exports.Production24Filled = exports.Production20Regular = exports.Production20Filled = exports.PrintAdd24Regular = exports.PrintAdd24Filled = exports.PrintAdd20Regular = exports.PrintAdd20Filled = exports.Print48Regular = exports.Print48Filled = exports.Print32Regular = exports.Print32Filled = exports.Print28Regular = exports.Print28Filled = exports.Print24Regular = exports.Print24Filled = exports.Print20Regular = exports.Print20Filled = exports.Print16Regular = exports.Print16Filled = exports.Previous48Regular = exports.Previous48Filled = exports.Previous32Regular = exports.Previous32Filled = exports.Previous28Regular = exports.Previous28Filled = exports.Previous24Regular = exports.Previous24Filled = exports.Previous20Regular = exports.Previous20Filled = exports.Previous16Regular = exports.Previous16Filled = exports.PreviewLink24Regular = exports.PreviewLink24Filled = exports.PreviewLink20Regular = exports.PreviewLink20Filled = exports.PreviewLink16Regular = exports.PreviewLink16Filled = exports.PresenterOff24Regular = exports.PresenterOff24Filled = exports.PresenterOff20Regular = void 0;
exports.PuzzleCube16Filled = exports.PulseSquare24Regular = exports.PulseSquare24Filled = exports.PulseSquare20Regular = exports.PulseSquare20Filled = exports.Pulse32Regular = exports.Pulse32Filled = exports.Pulse28Regular = exports.Pulse28Filled = exports.Pulse24Regular = exports.Pulse24Filled = exports.Pulse20Regular = exports.Pulse20Filled = exports.ProtocolHandler24Regular = exports.ProtocolHandler24Filled = exports.ProtocolHandler20Regular = exports.ProtocolHandler20Filled = exports.ProtocolHandler16Regular = exports.ProtocolHandler16Filled = exports.ProjectionScreenDismiss28Regular = exports.ProjectionScreenDismiss28Filled = exports.ProjectionScreenDismiss24Regular = exports.ProjectionScreenDismiss24Filled = exports.ProjectionScreenDismiss20Regular = exports.ProjectionScreenDismiss20Filled = exports.ProjectionScreenDismiss16Regular = exports.ProjectionScreenDismiss16Filled = exports.ProjectionScreen28Regular = exports.ProjectionScreen28Filled = exports.ProjectionScreen24Regular = exports.ProjectionScreen24Filled = exports.ProjectionScreen20Regular = exports.ProjectionScreen20Filled = exports.ProjectionScreen16Regular = exports.ProjectionScreen16Filled = exports.ProhibitedNote20Regular = exports.ProhibitedNote20Filled = exports.ProhibitedMultiple24Regular = exports.ProhibitedMultiple24Filled = exports.ProhibitedMultiple20Regular = exports.ProhibitedMultiple20Filled = exports.ProhibitedMultiple16Regular = exports.ProhibitedMultiple16Filled = exports.Prohibited48Regular = exports.Prohibited48Filled = exports.Prohibited28Regular = exports.Prohibited28Filled = exports.Prohibited24Regular = exports.Prohibited24Filled = exports.Prohibited20Regular = void 0;
exports.QuizNew20Filled = exports.QuestionCircle48Regular = exports.QuestionCircle48Filled = exports.QuestionCircle32Regular = exports.QuestionCircle32Filled = exports.QuestionCircle28Regular = exports.QuestionCircle28Filled = exports.QuestionCircle24Regular = exports.QuestionCircle24Filled = exports.QuestionCircle20Regular = exports.QuestionCircle20Filled = exports.QuestionCircle16Regular = exports.QuestionCircle16Filled = exports.QuestionCircle12Regular = exports.QuestionCircle12Filled = exports.Question48Regular = exports.Question48Filled = exports.Question28Regular = exports.Question28Filled = exports.Question24Regular = exports.Question24Filled = exports.Question20Regular = exports.Question20Filled = exports.Question16Regular = exports.Question16Filled = exports.QrCode28Regular = exports.QrCode28Filled = exports.QrCode24Regular = exports.QrCode24Filled = exports.QrCode20Regular = exports.QrCode20Filled = exports.PuzzlePieceShield20Regular = exports.PuzzlePieceShield20Filled = exports.PuzzlePiece24Regular = exports.PuzzlePiece24Filled = exports.PuzzlePiece20Regular = exports.PuzzlePiece20Filled = exports.PuzzlePiece16Regular = exports.PuzzlePiece16Filled = exports.PuzzleCubePiece20Regular = exports.PuzzleCubePiece20Filled = exports.PuzzleCube48Regular = exports.PuzzleCube48Filled = exports.PuzzleCube28Regular = exports.PuzzleCube28Filled = exports.PuzzleCube24Regular = exports.PuzzleCube24Filled = exports.PuzzleCube20Regular = exports.PuzzleCube20Filled = exports.PuzzleCube16Regular = void 0;
exports.ReOrderDotsVertical24Filled = exports.ReOrderDotsVertical20Regular = exports.ReOrderDotsVertical20Filled = exports.ReOrderDotsVertical16Regular = exports.ReOrderDotsVertical16Filled = exports.ReOrderDotsHorizontal24Regular = exports.ReOrderDotsHorizontal24Filled = exports.ReOrderDotsHorizontal20Regular = exports.ReOrderDotsHorizontal20Filled = exports.ReOrderDotsHorizontal16Regular = exports.ReOrderDotsHorizontal16Filled = exports.ReOrder24Regular = exports.ReOrder24Filled = exports.ReOrder16Regular = exports.ReOrder16Filled = exports.RatioOneToOne24Regular = exports.RatioOneToOne24Filled = exports.RatioOneToOne20Regular = exports.RatioOneToOne20Filled = exports.RatingMature24Regular = exports.RatingMature24Filled = exports.RatingMature20Regular = exports.RatingMature20Filled = exports.RatingMature16Regular = exports.RatingMature16Filled = exports.Ram20Regular = exports.Ram20Filled = exports.Ram16Regular = exports.Ram16Filled = exports.RadioButtonOff16Regular = exports.RadioButtonOff16Filled = exports.RadioButton24Regular = exports.RadioButton24Filled = exports.RadioButton20Regular = exports.RadioButton20Filled = exports.RadioButton16Regular = exports.RadioButton16Filled = exports.RadarRectangleMultiple20Regular = exports.RadarRectangleMultiple20Filled = exports.RadarCheckmark20Regular = exports.RadarCheckmark20Filled = exports.Radar20Regular = exports.Radar20Filled = exports.QuizNew48Regular = exports.QuizNew48Filled = exports.QuizNew28Regular = exports.QuizNew28Filled = exports.QuizNew24Regular = exports.QuizNew24Filled = exports.QuizNew20Regular = void 0;
exports.ReceiptCube20Filled = exports.ReceiptBag24Regular = exports.ReceiptBag24Filled = exports.ReceiptBag20Regular = exports.ReceiptBag20Filled = exports.ReceiptAdd24Regular = exports.ReceiptAdd24Filled = exports.ReceiptAdd20Regular = exports.ReceiptAdd20Filled = exports.Receipt28Regular = exports.Receipt28Filled = exports.Receipt24Regular = exports.Receipt24Filled = exports.Receipt20Regular = exports.Receipt20Filled = exports.Receipt16Regular = exports.Receipt16Filled = exports.RealEstate24Regular = exports.RealEstate24Filled = exports.RealEstate20Regular = exports.RealEstate20Filled = exports.ReadingModeMobile24Regular = exports.ReadingModeMobile24Filled = exports.ReadingModeMobile20Regular = exports.ReadingModeMobile20Filled = exports.ReadingListAdd28Regular = exports.ReadingListAdd28Filled = exports.ReadingListAdd24Regular = exports.ReadingListAdd24Filled = exports.ReadingListAdd20Regular = exports.ReadingListAdd20Filled = exports.ReadingListAdd16Regular = exports.ReadingListAdd16Filled = exports.ReadingList28Regular = exports.ReadingList28Filled = exports.ReadingList24Regular = exports.ReadingList24Filled = exports.ReadingList20Regular = exports.ReadingList20Filled = exports.ReadingList16Regular = exports.ReadingList16Filled = exports.ReadAloud28Regular = exports.ReadAloud28Filled = exports.ReadAloud24Regular = exports.ReadAloud24Filled = exports.ReadAloud20Regular = exports.ReadAloud20Filled = exports.ReadAloud16Regular = exports.ReadAloud16Filled = exports.ReOrderDotsVertical24Regular = void 0;
const tslib_1 = require("tslib");
const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));
const React = tslib_1.__importStar(require("react"));
const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));
const PhoneVibrate20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 14.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4ZM2.92 7.22a.5.5 0 0 0-.84.56l.38.57c.29.42.32.97.1 1.43-.4.78-.34 1.7.14 2.43l.38.57a.5.5 0 1 0 .84-.56l-.38-.57a1.43 1.43 0 0 1-.1-1.43c.4-.78.34-1.7-.14-2.43l-.38-.57Zm13.3-.14a.5.5 0 0 1 .7.14l.38.57c.48.73.54 1.65.15 2.43-.23.46-.2 1 .09 1.43l.38.57a.5.5 0 1 1-.84.56l-.38-.57a2.43 2.43 0 0 1-.15-2.43c.23-.46.2-1-.09-1.43l-.38-.57a.5.5 0 0 1 .14-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.PhoneVibrate20Regular = wrapIcon_1.default( /*#__PURE__*/PhoneVibrate20RegularIcon, 'PhoneVibrate20Regular');
const PhoneVibrate24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5Zm-2.5 16h-2.5a.75.75 0 0 0-.1 1.5h2.6a.75.75 0 1 0 0-1.5Zm6.88-10.43a1 1 0 0 1 1.25.45l.05.1L22 9.6a3 3 0 0 1-.27 2.74l-.11.17-.16.2a1 1 0 0 0-.16.85l.04.12.58 1.46a1 1 0 0 1-1.8.85l-.06-.1-.58-1.47a3 3 0 0 1 .27-2.74l.11-.17.16-.2a1 1 0 0 0 .16-.85l-.04-.12-.58-1.46a1 1 0 0 1 .56-1.3Zm-17.5 0a1 1 0 0 1 1.25.45l.05.1.58 1.47a3 3 0 0 1-.27 2.74l-.11.17-.16.2a1 1 0 0 0-.16.85l.04.12.58 1.46a1 1 0 0 1-1.8.85l-.06-.1L2 14.4a3 3 0 0 1 .27-2.74l.11-.17.16-.2a1 1 0 0 0 .16-.85l-.04-.12-.58-1.46a1 1 0 0 1 .56-1.3Z",
    fill: primaryFill
  }));
  ;
};
exports.PhoneVibrate24Filled = wrapIcon_1.default( /*#__PURE__*/PhoneVibrate24FilledIcon, 'PhoneVibrate24Filled');
const PhoneVibrate24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.5 14a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h2.5Zm7.4-9.37.05.1.58 1.45c.33.83.24 1.77-.25 2.51l-.1.16-.16.2c-.23.31-.3.7-.2 1.08l.04.14.59 1.45a.75.75 0 0 1-1.35.65l-.05-.1-.58-1.45a2.75 2.75 0 0 1 .25-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.14-.59-1.45a.75.75 0 0 1 1.3-.74l.05.09Zm-16.5 0 .05.1.58 1.45c.33.83.24 1.77-.25 2.51l-.1.16-.16.2c-.23.31-.3.7-.2 1.08l.04.14.59 1.45a.75.75 0 0 1-1.35.65l-.05-.1-.58-1.45a2.75 2.75 0 0 1 .25-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.14-.59-1.45a.75.75 0 0 1 1.3-.74l.05.09Z",
    fill: primaryFill
  }));
  ;
};
exports.PhoneVibrate24Regular = wrapIcon_1.default( /*#__PURE__*/PhoneVibrate24RegularIcon, 'PhoneVibrate24Regular');
const PhotoFilter20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.26 13.74a6 6 0 1 1 7.48-7.48 6 6 0 1 1-7.48 7.48ZM3.5 8A4.5 4.5 0 0 0 6 12.03V12a6 6 0 0 1 6.03-6A4.5 4.5 0 0 0 3.5 8Zm4.47 6A4.5 4.5 0 1 0 14 7.97V8a6 6 0 0 1-6 6h-.03Z",
    fill: primaryFill
  }));
  ;
};
exports.PhotoFilter20Filled = wrapIcon_1.default( /*#__PURE__*/PhotoFilter20FilledIcon, 'PhotoFilter20Filled');
const PhotoFilter20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8a6 6 0 0 0 4.26 5.74 6 6 0 1 0 7.48-7.48A6 6 0 0 0 2 8Zm6-5a5 5 0 0 1 4.6 3.03L12 6a6 6 0 0 0-5.97 6.6A5 5 0 0 1 8 3Zm9 9a5 5 0 0 1-9.6 1.97L8 14a6 6 0 0 0 5.97-6.6A5 5 0 0 1 17 12Z",
    fill: primaryFill
  }));
  ;
};
exports.PhotoFilter20Regular = wrapIcon_1.default( /*#__PURE__*/PhotoFilter20RegularIcon, 'PhotoFilter20Regular');
const PhotoFilter24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 2a7.5 7.5 0 0 1 7.18 5.32 7.5 7.5 0 1 1-9.36 9.36A7.5 7.5 0 0 1 9.5 2ZM17 9.6v-.1A7.5 7.5 0 0 1 9.6 17 5.5 5.5 0 1 0 17 9.6ZM9.5 4A5.5 5.5 0 0 0 7 14.4v.1A7.5 7.5 0 0 1 14.4 7a5.5 5.5 0 0 0-4.9-3Z",
    fill: primaryFill
  }));
  ;
};
exports.PhotoFilter24Filled = wrapIcon_1.default( /*#__PURE__*/PhotoFilter24FilledIcon, 'PhotoFilter24Filled');
const PhotoFilter24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 2a7.5 7.5 0 0 1 7.18 5.32 7.5 7.5 0 1 1-9.36 9.36A7.5 7.5 0 0 1 9.5 2Zm7.49 7.04v.22l.01.24a7.5 7.5 0 0 1-7.96 7.49 6 6 0 1 0 7.95-7.95ZM9.5 3.5a6 6 0 0 0-2.49 11.46v-.22L7 14.5a7.5 7.5 0 0 1 7.96-7.49A6 6 0 0 0 9.5 3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PhotoFilter24Regular = wrapIcon_1.default( /*#__PURE__*/PhotoFilter24RegularIcon, 'PhotoFilter24Regular');
const Pi20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.4 4.78c-.17.32-.18.76-.12 1.07a.75.75 0 1 1-1.47.3c-.1-.52-.11-1.34.26-2.06.41-.79 1.22-1.34 2.47-1.34H16.5a.75.75 0 0 1 0 1.5h-2.25v9.42c0 1.5.45 1.89.7 2 .32.15.8.08 1.21-.13a.75.75 0 0 1 .68 1.34c-.6.3-1.6.58-2.53.15-1.01-.47-1.56-1.61-1.56-3.36V4.25H8.24a90.75 90.75 0 0 1-.6 6.32 44.66 44.66 0 0 1-.61 3.55 12.38 12.38 0 0 1-.86 2.72.75.75 0 1 1-1.34-.68c.26-.5.5-1.33.73-2.36.23-1.03.42-2.21.58-3.42.31-2.28.5-4.62.6-6.13h-2.2c-.74 0-1.01.28-1.14.53Z",
    fill: primaryFill
  }));
  ;
};
exports.Pi20Filled = wrapIcon_1.default( /*#__PURE__*/Pi20FilledIcon, 'Pi20Filled');
const Pi20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.18 4.67a2 2 0 0 0-.14 1.23.5.5 0 1 1-.98.2 3 3 0 0 1 .23-1.9C2.66 3.5 3.38 3 4.54 3H16.5a.5.5 0 1 1 0 1H14v9.67c0 1.54.47 2.05.84 2.23.42.2 1 .09 1.43-.14a.5.5 0 1 1 .46.9c-.56.28-1.49.53-2.32.14-.88-.41-1.41-1.42-1.41-3.13V4H8v.03a90.2 90.2 0 0 1-.62 6.51 44.43 44.43 0 0 1-.6 3.52c-.23 1.06-.5 2-.83 2.66a.5.5 0 1 1-.9-.44c.27-.55.53-1.39.76-2.43.22-1.03.42-2.22.58-3.44.33-2.42.53-4.92.6-6.41H4.55c-.83 0-1.18.33-1.36.67Z",
    fill: primaryFill
  }));
  ;
};
exports.Pi20Regular = wrapIcon_1.default( /*#__PURE__*/Pi20RegularIcon, 'Pi20Regular');
const Pi24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7a3 3 0 0 1 3-3h15.25a1 1 0 1 1 0 2H17v10.7a1.5 1.5 0 0 0 2 1.42l.16-.06a1 1 0 1 1 .68 1.88l-.16.06A3.5 3.5 0 0 1 15 16.7V6H9.98a53.9 53.9 0 0 1-.36 4.21 45.04 45.04 0 0 1-1.93 9.12 1 1 0 1 1-1.88-.66 43.1 43.1 0 0 0 1.82-8.7A65.6 65.6 0 0 0 7.98 6H5a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0V7Z",
    fill: primaryFill
  }));
  ;
};
exports.Pi24Filled = wrapIcon_1.default( /*#__PURE__*/Pi24FilledIcon, 'Pi24Filled');
const Pi24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 6.75A2.75 2.75 0 0 1 5.25 4h15a.75.75 0 0 1 0 1.5H17v11.45c0 1.21 1.2 2.06 2.34 1.65l.16-.06a.75.75 0 0 1 .5 1.42l-.16.05a3.25 3.25 0 0 1-4.34-3.06V5.5h-6a56.9 56.9 0 0 1-.25 4.53c-.25 2.87-.76 6.5-1.8 9.47a.75.75 0 0 1-1.4-.5 40.07 40.07 0 0 0 1.7-9.1A67.9 67.9 0 0 0 8 5.5H5.25C4.56 5.5 4 6.06 4 6.75v.5a.75.75 0 0 1-1.5 0v-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pi24Regular = wrapIcon_1.default( /*#__PURE__*/Pi24RegularIcon, 'Pi24Regular');
const PictureInPicture16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H7v-2c0-1.1.9-2 2-2h5V4.5A2.5 2.5 0 0 0 11.5 2h-8ZM8 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture16Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPicture16FilledIcon, 'PictureInPicture16Filled');
const PictureInPicture16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.5A2.5 2.5 0 0 1 3.5 2h8A2.5 2.5 0 0 1 14 4.5V8h-1V4.5c0-.83-.67-1.5-1.5-1.5h-8C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H7v1H3.5A2.5 2.5 0 0 1 1 9.5v-5ZM9 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture16Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPicture16RegularIcon, 'PictureInPicture16Regular');
const PictureInPicture20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 3A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15H9v-2.5a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05v-4.3A2.75 2.75 0 0 0 15.25 3H4.75ZM18 11.09a1.5 1.5 0 0 0-.5-.09h-6c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.65-.42-1.2-1-1.41Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture20Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPicture20FilledIcon, 'PictureInPicture20Filled');
const PictureInPicture20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75V10h-1V5.75C17 4.78 16.22 4 15.25 4H4.75C3.78 4 3 4.78 3 5.75v6.5c0 .97.78 1.75 1.75 1.75H9v1H4.75A2.75 2.75 0 0 1 2 12.25v-6.5ZM11.5 11c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-6Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture20Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPicture20RegularIcon, 'PictureInPicture20Regular');
const PictureInPicture24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 3A3.25 3.25 0 0 0 2 6.25v9.5C2 17.55 3.46 19 5.25 19H11v-4a3 3 0 0 1 3-3h7a3 3 0 0 1 1 .17V6.25C22 4.45 20.54 3 18.75 3H5.25ZM22 13.27a2 2 0 0 0-1-.27h-7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-1-1.73Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture24Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPicture24FilledIcon, 'PictureInPicture24Filled');
const PictureInPicture24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.25C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25V12h-1.5V6.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75v-9.5ZM14 13a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPicture24Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPicture24RegularIcon, 'PictureInPicture24Regular');
const PictureInPictureEnter16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H7v-2c0-1.1.9-2 2-2h5V4.5A2.5 2.5 0 0 0 11.5 2h-8Zm.15 2.65c.2-.2.5-.2.7 0L6 6.29V5.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L3.64 5.35a.5.5 0 0 1 0-.7ZM8 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter16Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter16FilledIcon, 'PictureInPictureEnter16Filled');
const PictureInPictureEnter16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H7v-1H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3h8c.83 0 1.5.67 1.5 1.5V8h1V4.5A2.5 2.5 0 0 0 11.5 2h-8Zm.85 2.65a.5.5 0 1 0-.7.7L5.29 7H4.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .35-.14A.5.5 0 0 0 7 7.5v-2a.5.5 0 0 0-1 0v.8L4.35 4.64ZM9 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter16Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter16RegularIcon, 'PictureInPictureEnter16Regular');
const PictureInPictureEnter20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 3A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15H9v-2.5a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05v-4.3A2.75 2.75 0 0 0 15.25 3H4.75Zm.6 2.65L8 8.29V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.8L4.64 6.35a.5.5 0 1 1 .7-.7ZM18 11.09a1.5 1.5 0 0 0-.5-.09h-6c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.65-.42-1.2-1-1.41Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter20Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter20FilledIcon, 'PictureInPictureEnter20Filled');
const PictureInPictureEnter20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75V10h-1V5.75C17 4.78 16.22 4 15.25 4H4.75C3.78 4 3 4.78 3 5.75v6.5c0 .97.78 1.75 1.75 1.75H9v1H4.75A2.75 2.75 0 0 1 2 12.25v-6.5ZM11.5 11c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-6ZM4.65 5.65c.2-.2.5-.2.7 0L8 8.29V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.8L4.64 6.35a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter20Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter20RegularIcon, 'PictureInPictureEnter20Regular');
const PictureInPictureEnter24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 3A3.25 3.25 0 0 0 2 6.25v9.5C2 17.55 3.46 19 5.25 19H11v-4a3 3 0 0 1 3-3h7a3 3 0 0 1 1 .17V6.25C22 4.45 20.54 3 18.75 3H5.25Zm1.03 3.22L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 1.06-1.06ZM22 13.27a2 2 0 0 0-1-.27h-7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-1-1.73Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter24Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter24FilledIcon, 'PictureInPictureEnter24Filled');
const PictureInPictureEnter24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.25C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25V12h-1.5V6.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75v-9.5ZM14 13a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7ZM5.22 6.22c.3-.3.77-.3 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureEnter24Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureEnter24RegularIcon, 'PictureInPictureEnter24Regular');
const PictureInPictureExit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5Zm-5 4.5V8h5a2 2 0 0 0 2-2V4h3.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 11.5Zm8.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.8l-1.65-1.65a.5.5 0 0 0-.7.7L11.29 11h-.79Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit16Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit16FilledIcon, 'PictureInPictureExit16Filled');
const PictureInPictureExit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5Zm2-2h3.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 11.5V8H2v3.5A2.5 2.5 0 0 0 4.5 14h8a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 4H9v1Zm2 4.3v-.8a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.64 8.35a.5.5 0 1 1 .7-.7L11 9.29Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit16Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit16RegularIcon, 'PictureInPictureExit16Regular');
const PictureInPictureExit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4A1.5 1.5 0 0 0 2.5 9h6Zm0 1h-6c-.17 0-.34-.02-.5-.05v4.3A2.75 2.75 0 0 0 4.75 17h10.5A2.75 2.75 0 0 0 18 14.25v-6.5A2.75 2.75 0 0 0 15.25 5H11v2.5A2.5 2.5 0 0 1 8.5 10Zm3.85.65L15 13.29V11.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.8l-2.65-2.65a.5.5 0 0 1 .7-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit20Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit20FilledIcon, 'PictureInPictureExit20Filled');
const PictureInPictureExit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4c0 .65.42 1.2 1 1.41l.02.01c.15.05.31.08.48.08h6Zm6.75-3H11V5h4.25A2.75 2.75 0 0 1 18 7.75v6.5A2.75 2.75 0 0 1 15.25 17H4.75A2.75 2.75 0 0 1 2 14.25v-4.3c.16.03.33.05.5.05H3v4.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 6.78 16.22 6 15.25 6ZM14 12.3l-2.65-2.65a.5.5 0 0 0-.7.7L13.29 13H11.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.8Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit20Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit20RegularIcon, 'PictureInPictureExit20Regular');
const PictureInPictureExit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7Zm0 1H3a3 3 0 0 1-1-.17v5.92C2 19.55 3.46 21 5.25 21h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 6.45 20.54 5 18.75 5H13v4a3 3 0 0 1-3 3Zm4.25 4h1.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06L17 14.94v-1.69a.75.75 0 0 1 1.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit24Filled = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit24FilledIcon, 'PictureInPictureExit24Filled');
const PictureInPictureExit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7Zm8.75-4.5H13V5h5.75C20.55 5 22 6.46 22 8.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.75v-5.92A3 3 0 0 0 3 12h.5v5.75c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75ZM15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06L15.94 16Z",
    fill: primaryFill
  }));
  ;
};
exports.PictureInPictureExit24Regular = wrapIcon_1.default( /*#__PURE__*/PictureInPictureExit24RegularIcon, 'PictureInPictureExit24Regular');
const Pill16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.05A3.5 3.5 0 1 1 12.95 8L8 12.95A3.5 3.5 0 0 1 3.05 8L8 3.05Zm2.12 6.36 2.12-2.12a2.5 2.5 0 0 0-3.53-3.53L6.59 5.88l3.53 3.53Zm-2.27 1.44a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 1 0 .7.7l1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill16Filled = wrapIcon_1.default( /*#__PURE__*/Pill16FilledIcon, 'Pill16Filled');
const Pill16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.35 10.35a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 1 0 .7.7l1.5-1.5Zm5.6-7.3a3.5 3.5 0 0 0-4.95 0L3.05 8A3.5 3.5 0 1 0 8 12.95L12.95 8a3.5 3.5 0 0 0 0-4.95ZM5.88 6.6l3.53 3.53-2.12 2.12a2.5 2.5 0 0 1-3.53-3.53l2.12-2.12Zm6.36.7-2.12 2.12L6.6 5.88 8.7 3.76a2.5 2.5 0 1 1 3.53 3.53Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill16Regular = wrapIcon_1.default( /*#__PURE__*/Pill16RegularIcon, 'Pill16Regular');
const Pill20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.15 3.15a4.04 4.04 0 1 1 5.7 5.7l-8 8a4.04 4.04 0 1 1-5.7-5.7l8-8Zm5 .7a3.04 3.04 0 0 0-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 0 0 0-4.3Zm-7.3 10.3a.5.5 0 0 0-.7 0l-1.5 1.5a.91.91 0 0 1-1.3 0 .5.5 0 0 0-.85.35c0 .14.06.27.15.36.75.74 1.96.74 2.7 0l1.5-1.5a.5.5 0 0 0 0-.71Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill20Filled = wrapIcon_1.default( /*#__PURE__*/Pill20FilledIcon, 'Pill20Filled');
const Pill20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.85 13.15c.2.2.2.5 0 .7l-1.5 1.5c-.74.75-1.95.75-2.7 0A.5.5 0 0 1 5 14.5a.5.5 0 0 1 .35.15c.36.35.94.35 1.3 0l1.5-1.5c.2-.2.5-.2.7 0Zm2.3-10a4.04 4.04 0 1 1 5.7 5.7l-8 8a4.04 4.04 0 1 1-5.7-5.7l8-8Zm5 .7a3.04 3.04 0 0 0-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 0 0 0-4.3Zm-4.36 8.65L7.5 8.2l-3.65 3.65a3.04 3.04 0 0 0 4.3 4.3l3.64-3.65Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill20Regular = wrapIcon_1.default( /*#__PURE__*/Pill20RegularIcon, 'Pill20Regular');
const Pill24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.3 3.53a5.07 5.07 0 0 1 7.17 7.17l-9.77 9.77a5.07 5.07 0 0 1-7.17-7.17l9.77-9.77Zm6.11 1.06a3.57 3.57 0 0 0-5.05 0l-4.35 4.35L15.06 14l4.35-4.35a3.57 3.57 0 0 0 0-5.05Zm-8.6 13.69a.75.75 0 0 0-1.06-1.06L8.3 18.66a1.5 1.5 0 0 1-2.1.02l-.02-.02a.75.75 0 1 0-1.04 1.08l.02.02a3 3 0 0 0 4.2-.04l1.44-1.44Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill24Filled = wrapIcon_1.default( /*#__PURE__*/Pill24FilledIcon, 'Pill24Filled');
const Pill24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.53 15.47c.3.3.3.77 0 1.06l-2 2c-.84.84-2.2.85-3.05 0A.75.75 0 0 1 6 17.26c.2 0 .4.08.53.22.26.26.68.26.94 0l2-2c.3-.3.77-.3 1.06 0ZM13.3 3.53a5.07 5.07 0 0 1 7.17 7.17l-9.77 9.77a5.07 5.07 0 0 1-7.17-7.17l9.77-9.77Zm6.11 1.06a3.57 3.57 0 0 0-5.05 0l-4.35 4.35L15.06 14l4.35-4.35a3.57 3.57 0 0 0 0-5.05ZM14 15.06 8.95 10 4.6 14.36a3.57 3.57 0 1 0 5.05 5.05l4.35-4.35Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill24Regular = wrapIcon_1.default( /*#__PURE__*/Pill24RegularIcon, 'Pill24Regular');
const Pill28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.78 3.74a6 6 0 0 1 8.48 8.5L12.22 24.26a6 6 0 0 1-8.48-8.5L15.78 3.74Zm1.93 12.91 5.49-5.48a4.5 4.5 0 0 0-6.36-6.36l-5.5 5.48 6.37 6.36Zm-5.93 4.63a.75.75 0 0 0-1.06-1.06L8.74 22.2c-.4.4-1.07.4-1.48 0l-.48-.48a.75.75 0 0 0-1.06 1.06l.48.48c1 1 2.6 1 3.6 0l1.98-1.98Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill28Filled = wrapIcon_1.default( /*#__PURE__*/Pill28FilledIcon, 'Pill28Filled');
const Pill28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.78 20.28a.75.75 0 0 0-1.06-1.06L8.74 21.2c-.4.4-1.07.4-1.48 0l-.48-.48a.75.75 0 0 0-1.06 1.06l.48.48c1 1 2.6 1 3.6 0l1.98-1.98ZM24.25 3.75a6 6 0 0 0-8.47 0L3.74 15.75a6 6 0 0 0 8.48 8.5l12.04-12.02a6 6 0 0 0 0-8.49Zm-13.96 7.6 6.36 6.36-5.49 5.48a4.5 4.5 0 0 1-6.36-6.36l5.49-5.48Zm12.9-.18-5.48 5.48-6.36-6.36 5.49-5.48a4.5 4.5 0 0 1 6.36 6.36Z",
    fill: primaryFill
  }));
  ;
};
exports.Pill28Regular = wrapIcon_1.default( /*#__PURE__*/Pill28RegularIcon, 'Pill28Regular');
const Pin12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.05 1.44a1.5 1.5 0 0 0-2.38.34L4.14 4.61l-2.33.93a.5.5 0 0 0-.16.81L3.29 8l-2.14 2.15L1 11l.85-.15L4 8.71l1.65 1.64a.5.5 0 0 0 .81-.16l.94-2.34 2.82-1.52a1.5 1.5 0 0 0 .34-2.38l-2.5-2.51Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin12Filled = wrapIcon_1.default( /*#__PURE__*/Pin12FilledIcon, 'Pin12Filled');
const Pin12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.05 1.44a1.5 1.5 0 0 0-2.38.34L4.14 4.61l-2.33.93a.5.5 0 0 0-.16.81L3.29 8l-2.14 2.15L1 11l.85-.15L4 8.71l1.65 1.64a.5.5 0 0 0 .81-.16l.94-2.34 2.82-1.52a1.5 1.5 0 0 0 .34-2.38l-2.5-2.51Zm-1.5.82a.5.5 0 0 1 .8-.12l2.5 2.52a.5.5 0 0 1-.1.79L6.75 7.06a.5.5 0 0 0-.22.25l-.72 1.8-2.93-2.93 1.8-.71a.5.5 0 0 0 .25-.23l1.61-2.98Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin12Regular = wrapIcon_1.default( /*#__PURE__*/Pin12RegularIcon, 'Pin12Regular');
const Pin16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.06 2.45a1.5 1.5 0 0 0-2.39.35L5.65 6.59l-2.8.94a.5.5 0 0 0-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 0 0 .82-.2l.94-2.8 3.78-2.03a1.5 1.5 0 0 0 .35-2.38l-3.48-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin16Filled = wrapIcon_1.default( /*#__PURE__*/Pin16FilledIcon, 'Pin16Filled');
const Pin16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.06 2.45a1.5 1.5 0 0 0-2.39.35L5.65 6.59l-2.8.94a.5.5 0 0 0-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 0 0 .82-.2l.94-2.8 3.78-2.03a1.5 1.5 0 0 0 .35-2.38l-3.48-3.5Zm-1.5.82a.5.5 0 0 1 .8-.12l3.48 3.5a.5.5 0 0 1-.12.8l-3.96 2.1a.5.5 0 0 0-.23.3l-.75 2.22-3.85-3.85 2.23-.75a.5.5 0 0 0 .28-.23l2.12-3.97Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin16Regular = wrapIcon_1.default( /*#__PURE__*/Pin16RegularIcon, 'Pin16Regular');
const Pin20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.33 2.62a2 2 0 0 0-3.2.52L8.38 6.6a1.5 1.5 0 0 1-.78.72L4 8.75a1 1 0 0 0-.33 1.64l2.61 2.6L3 16.3v.7h.7L7 13.72l2.61 2.6a1 1 0 0 0 1.64-.33l1.43-3.59c.14-.34.4-.62.72-.78l3.46-1.73a2 2 0 0 0 .52-3.2l-4.05-4.06Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin20Filled = wrapIcon_1.default( /*#__PURE__*/Pin20FilledIcon, 'Pin20Filled');
const Pin20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.12 3.14a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.52 3.2l-3.46 1.74a1.5 1.5 0 0 0-.72.78L11.25 16a1 1 0 0 1-1.64.33L7 13.7 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 0 1 .34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46Zm2.5.18a1 1 0 0 0-1.6.26L9.29 7.04a2.5 2.5 0 0 1-1.31 1.2L4.39 9.69l5.93 5.93 1.43-3.59a2.5 2.5 0 0 1 1.2-1.3l3.46-1.74a1 1 0 0 0 .26-1.6l-4.05-4.06Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin20Regular = wrapIcon_1.default( /*#__PURE__*/Pin20RegularIcon, 'Pin20Regular');
const Pin24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m21.07 7.76-4.83-4.83a2.75 2.75 0 0 0-4.4.72L9.4 8.52a.75.75 0 0 1-.42.37L4.8 10.33a1.25 1.25 0 0 0-.48 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.44-4.17c.06-.18.2-.33.37-.42l4.87-2.44a2.75 2.75 0 0 0 .72-4.4Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin24Filled = wrapIcon_1.default( /*#__PURE__*/Pin24FilledIcon, 'Pin24Filled');
const Pin24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16.24 2.93 4.83 4.83a2.75 2.75 0 0 1-.72 4.4l-4.87 2.44a.75.75 0 0 0-.37.42l-1.44 4.17a1.25 1.25 0 0 1-2.07.48l-3.1-3.1L4.06 21H3v-1.06l4.44-4.44-3.1-3.1c-.66-.66-.4-1.77.47-2.07l4.17-1.44c.18-.06.34-.2.42-.37l2.44-4.87a2.75 2.75 0 0 1 4.4-.72Zm3.77 5.89-4.83-4.83c-.6-.6-1.62-.44-2 .33l-2.44 4.87c-.26.52-.72.93-1.27 1.12l-3.8 1.3 6.71 6.71 1.31-3.79c.2-.55.6-1.01 1.12-1.27l4.87-2.44c.77-.38.93-1.4.33-2Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin24Regular = wrapIcon_1.default( /*#__PURE__*/Pin24RegularIcon, 'Pin24Regular');
const Pin28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.04 3.48a3.25 3.25 0 0 0-5.24.9l-2.55 5.4c-.2.4-.53.72-.95.88l-4.13 1.59a1.75 1.75 0 0 0-.61 2.87l3.13 3.13L3 23.94V25h1.06l5.69-5.69 3.13 3.13c.9.9 2.42.57 2.87-.6l1.6-4.14c.15-.42.47-.76.88-.95l5.38-2.55a3.25 3.25 0 0 0 .91-5.24l-5.48-5.48Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin28Filled = wrapIcon_1.default( /*#__PURE__*/Pin28FilledIcon, 'Pin28Filled');
const Pin28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.8 4.38a3.25 3.25 0 0 1 5.24-.9l5.48 5.48a3.25 3.25 0 0 1-.9 5.24l-5.4 2.55c-.4.2-.72.53-.88.95l-1.59 4.13a1.75 1.75 0 0 1-2.87.61l-3.13-3.13L4.06 25H3v-1.06l5.69-5.69-3.13-3.13c-.9-.9-.58-2.42.6-2.87l4.14-1.6c.42-.15.76-.47.95-.88l2.55-5.39Zm4.18.16c-.86-.86-2.3-.6-2.82.49l-2.55 5.39c-.36.75-1 1.34-1.77 1.64L6.7 13.65a.25.25 0 0 0-.1.4l7.33 7.33c.13.13.35.08.41-.09l1.6-4.13c.3-.77.88-1.4 1.63-1.77l5.4-2.55a1.75 1.75 0 0 0 .48-2.82l-5.48-5.48Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin28Regular = wrapIcon_1.default( /*#__PURE__*/Pin28RegularIcon, 'Pin28Regular');
const Pin32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.74 4.28a4 4 0 0 1 6.41-1.04l6.61 6.61a4 4 0 0 1-1.04 6.4l-6.35 3.18a1.5 1.5 0 0 0-.75.87l-1.66 4.98a2 2 0 0 1-3.31.78l-4.15-4.15-6.09 6.1H4v-1.42l6.09-6.09-4.15-4.15a2 2 0 0 1 .78-3.31l4.98-1.66c.38-.13.7-.4.87-.75l3.17-6.35Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin32Filled = wrapIcon_1.default( /*#__PURE__*/Pin32FilledIcon, 'Pin32Filled');
const Pin32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.15 3.24a4 4 0 0 0-6.4 1.04l-3.18 6.35a1.5 1.5 0 0 1-.87.75l-4.98 1.66a2 2 0 0 0-.78 3.31l4.15 4.15L4 26.6V28h1.41l6.09-6.09 4.15 4.15a2 2 0 0 0 3.31-.78l1.66-4.98c.13-.38.4-.69.75-.87l6.35-3.17a4 4 0 0 0 1.04-6.41l-6.61-6.61Zm-4.62 1.93a2 2 0 0 1 3.2-.52l6.62 6.61a2 2 0 0 1-.52 3.2l-6.35 3.18a3.5 3.5 0 0 0-1.76 2.03l-1.66 4.98-9.7-9.71 4.97-1.66a3.5 3.5 0 0 0 2.03-1.76l3.17-6.35Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin32Regular = wrapIcon_1.default( /*#__PURE__*/Pin32RegularIcon, 'Pin32Regular');
const Pin48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m31.82 5.55 10.63 10.63a4.75 4.75 0 0 1-1.23 7.61l-10.55 5.27c-.3.15-.51.4-.62.71l-2.69 7.77a2.75 2.75 0 0 1-4.54 1.05L17 32.77 7.77 42H6v-1.77L15.23 31l-5.82-5.82a2.75 2.75 0 0 1 1.05-4.54l7.77-2.69c.3-.1.56-.33.7-.62l5.28-10.55a4.75 4.75 0 0 1 7.6-1.23Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin48Filled = wrapIcon_1.default( /*#__PURE__*/Pin48FilledIcon, 'Pin48Filled');
const Pin48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M42.45 16.18 31.82 5.55a4.75 4.75 0 0 0-7.61 1.23l-5.27 10.55c-.15.3-.4.52-.71.62l-7.77 2.69a2.75 2.75 0 0 0-1.05 4.54L15.23 31 6 40.23V42h1.77L17 32.77l5.82 5.82a2.75 2.75 0 0 0 4.54-1.05l2.69-7.77c.1-.3.33-.56.62-.7l10.55-5.28a4.75 4.75 0 0 0 1.23-7.6Zm-12.4-8.86 10.63 10.63a2.25 2.25 0 0 1-.58 3.6l-10.55 5.28a3.75 3.75 0 0 0-1.86 2.13L25 36.73a.25.25 0 0 1-.41.1L11.18 23.4a.25.25 0 0 1 .1-.41l7.76-2.69c.93-.32 1.7-.99 2.13-1.86L26.45 7.9a2.25 2.25 0 0 1 3.6-.58Z",
    fill: primaryFill
  }));
  ;
};
exports.Pin48Regular = wrapIcon_1.default( /*#__PURE__*/Pin48RegularIcon, 'Pin48Regular');
const PinOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m9.56 10.27 4.59 4.58a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l4.58 4.59-.08.15-2.8.94a.5.5 0 0 0-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 0 0 .82-.2l.94-2.8.15-.08Zm3.63-1.95-1.79.96L6.72 4.6l.95-1.8a1.5 1.5 0 0 1 2.39-.34l3.48 3.5c.71.7.54 1.9-.35 2.37Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff16Filled = wrapIcon_1.default( /*#__PURE__*/PinOff16FilledIcon, 'PinOff16Filled');
const PinOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m9.56 10.27 4.59 4.58a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l4.58 4.59-.08.15-2.8.94a.5.5 0 0 0-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 0 0 .82-.2l.94-2.8.15-.08Zm-.74-.74-.06.03a.5.5 0 0 0-.23.28l-.75 2.23-3.85-3.85 2.23-.75a.5.5 0 0 0 .28-.23l.03-.06 2.35 2.35Zm3.9-2.09-2.06 1.1.74.74 1.79-.96a1.5 1.5 0 0 0 .35-2.38l-3.48-3.5a1.5 1.5 0 0 0-2.39.36l-.95 1.8.73.73 1.1-2.06a.5.5 0 0 1 .8-.12l3.49 3.5a.5.5 0 0 1-.12.8Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff16Regular = wrapIcon_1.default( /*#__PURE__*/PinOff16RegularIcon, 'PinOff16Regular');
const PinOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L6.9 7.6 4.02 8.75a1 1 0 0 0-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 0 0 1.64-.34l1.15-2.88 4.75 4.75a.5.5 0 0 0 .7-.7l-15-15Zm14.01 7.73-3.24 1.62L8.5 6.38l1.62-3.24a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.52 3.2Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff20Filled = wrapIcon_1.default( /*#__PURE__*/PinOff20FilledIcon, 'PinOff20Filled');
const PinOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L6.9 7.6 4.02 8.75a1 1 0 0 0-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 0 0 1.64-.34l1.15-2.88 4.75 4.75a.5.5 0 0 0 .7-.7l-15-15Zm8.78 10.18-1.31 3.28-5.93-5.93 3.28-1.3 3.96 3.95Zm1.33-1.62-.08.04.74.75 3.24-1.62a2 2 0 0 0 .52-3.2l-4.05-4.06a2 2 0 0 0-3.2.52L8.5 6.38l.75.74.04-.08 1.73-3.45a1 1 0 0 1 1.6-.26l4.05 4.05a1 1 0 0 1-.26 1.6l-3.45 1.73Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff20Regular = wrapIcon_1.default( /*#__PURE__*/PinOff20RegularIcon, 'PinOff20Regular');
const PinOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l5.9 5.9-3.3 1.15a1.25 1.25 0 0 0-.49 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.14-3.31 5.91 5.9a.75.75 0 1 0 1.06-1.06L3.28 2.22Zm17.07 9.94-3.34 1.67L10.17 7l1.67-3.34a2.75 2.75 0 0 1 4.4-.72l4.83 4.83a2.75 2.75 0 0 1-.72 4.4Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff24Filled = wrapIcon_1.default( /*#__PURE__*/PinOff24FilledIcon, 'PinOff24Filled');
const PinOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l5.9 5.9-3.3 1.15a1.25 1.25 0 0 0-.49 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.14-3.31 5.91 5.9a.75.75 0 1 0 1.06-1.06L3.28 2.22ZM13.64 14.7l-1.26 3.62-6.7-6.7 3.62-1.26 4.34 4.34Zm6.04-3.88-3.78 1.9L17 13.82l3.34-1.67a2.75 2.75 0 0 0 .72-4.4l-4.83-4.83a2.75 2.75 0 0 0-4.4.72l-1.67 3.34 1.12 1.11 1.89-3.78c.38-.77 1.4-.93 2-.33l4.83 4.83c.6.6.44 1.62-.33 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff24Regular = wrapIcon_1.default( /*#__PURE__*/PinOff24RegularIcon, 'PinOff24Regular');
const PinOff28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l7.57 7.57-3.62 1.4a1.75 1.75 0 0 0-.61 2.87l3.13 3.13L3 23.94V25h1.06l5.69-5.69 3.13 3.13c.9.9 2.42.57 2.87-.6l1.4-3.63 7.57 7.57a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm8.52 6.4 7.58 7.58 4.23-2a3.25 3.25 0 0 0 .91-5.24l-5.48-5.48a3.25 3.25 0 0 0-5.24.9l-2 4.24Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff28Filled = wrapIcon_1.default( /*#__PURE__*/PinOff28FilledIcon, 'PinOff28Filled');
const PinOff28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l7.57 7.57-3.62 1.4a1.75 1.75 0 0 0-.61 2.87l3.13 3.13L3 23.94V25h1.06l5.69-5.69 3.13 3.13c.9.9 2.42.57 2.87-.6l1.4-3.63 7.57 7.57a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm12.7 14.83a3.4 3.4 0 0 0-.04.11l-1.59 4.13a.25.25 0 0 1-.4.1l-7.33-7.33a.25.25 0 0 1 .09-.41l4.13-1.6c.03 0 .07-.02.11-.04L16 17.05ZM11.8 8.62l1.13 1.12 2.23-4.71a1.75 1.75 0 0 1 2.82-.5l5.48 5.5c.86.85.6 2.3-.49 2.81l-4.71 2.23 1.12 1.13 4.23-2a3.25 3.25 0 0 0 .91-5.24l-5.48-5.48a3.25 3.25 0 0 0-5.24.9l-2 4.24Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff28Regular = wrapIcon_1.default( /*#__PURE__*/PinOff28RegularIcon, 'PinOff28Regular');
const PinOff32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m20.19 21.6 8.1 8.1a1 1 0 0 0 1.42-1.4l-26-26a1 1 0 0 0-1.42 1.4l8.1 8.11-3.67 1.23a2 2 0 0 0-.78 3.31l4.15 4.15L4 26.59V28h1.41l6.09-6.09 4.15 4.15a2 2 0 0 0 3.31-.78l1.23-3.68Zm7.53-5.34-5.28 2.64-9.34-9.33 2.64-5.3a4 4 0 0 1 6.41-1.03l6.61 6.61a4 4 0 0 1-1.04 6.4Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff32Filled = wrapIcon_1.default( /*#__PURE__*/PinOff32FilledIcon, 'PinOff32Filled');
const PinOff32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m20.19 21.6-1.23 3.68a2 2 0 0 1-3.31.78l-4.15-4.15L5.41 28H4v-1.41l6.09-6.09-4.15-4.15a2 2 0 0 1 .78-3.31l3.68-1.23-8.1-8.1a1 1 0 0 1 1.4-1.42l26 26a1 1 0 0 1-1.4 1.42l-8.11-8.1Zm-1.58-1.58-6.63-6.63-4.63 1.55 9.71 9.7 1.55-4.62Zm8.22-5.55-5.89 2.94 1.5 1.5 5.28-2.65a4 4 0 0 0 1.04-6.41l-6.6-6.61a4 4 0 0 0-6.42 1.04L13.1 9.57l1.5 1.49 2.93-5.89a2 2 0 0 1 3.2-.52l6.62 6.61a2 2 0 0 1-.52 3.2Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff32Regular = wrapIcon_1.default( /*#__PURE__*/PinOff32RegularIcon, 'PinOff32Regular');
const PinOff48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m29.52 31.3 12.1 12.08a1.25 1.25 0 1 0 1.76-1.76l-37-37a1.25 1.25 0 1 0-1.76 1.76l12.09 12.1-6.25 2.16a2.75 2.75 0 0 0-1.05 4.54L15.23 31 6 40.23V42h1.77L17 32.77l5.82 5.82a2.75 2.75 0 0 0 4.54-1.05l2.16-6.25Zm11.7-7.51-8.09 4.04-12.96-12.96 4.04-8.09a4.75 4.75 0 0 1 7.6-1.23l10.64 10.63a4.75 4.75 0 0 1-1.23 7.61Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff48Filled = wrapIcon_1.default( /*#__PURE__*/PinOff48FilledIcon, 'PinOff48Filled');
const PinOff48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.7 18.48 4.63 6.38a1.25 1.25 0 1 1 1.76-1.76l37 37a1.25 1.25 0 0 1-1.76 1.76L29.52 31.3l-2.16 6.25a2.75 2.75 0 0 1-4.54 1.05L17 32.77 7.77 42H6v-1.77L15.23 31l-5.82-5.82a2.75 2.75 0 0 1 1.05-4.54l6.25-2.16Zm10.86 10.85-8.89-8.89-7.4 2.56a.25.25 0 0 0-.1.41L24.6 36.82c.13.13.35.08.41-.1l2.56-7.4Zm12.54-7.78-8.83 4.42 1.86 1.86 8.09-4.04a4.75 4.75 0 0 0 1.23-7.6L31.82 5.54a4.75 4.75 0 0 0-7.61 1.23l-4.04 8.09 1.86 1.86 4.42-8.83a2.25 2.25 0 0 1 3.6-.58l10.63 10.63a2.25 2.25 0 0 1-.58 3.6Z",
    fill: primaryFill
  }));
  ;
};
exports.PinOff48Regular = wrapIcon_1.default( /*#__PURE__*/PinOff48RegularIcon, 'PinOff48Regular');
const Pipeline20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9Zm13 0v9a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-3 0ZM14 14V6H6v8h8Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline20Filled = wrapIcon_1.default( /*#__PURE__*/Pipeline20FilledIcon, 'Pipeline20Filled');
const Pipeline20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0V14H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM15 7H5v6h10V7Zm2-1.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline20Regular = wrapIcon_1.default( /*#__PURE__*/Pipeline20RegularIcon, 'Pipeline20Regular');
const Pipeline24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0V6Zm16 0a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0V6Zm-1.5 0h-9v11h9V6Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline24Filled = wrapIcon_1.default( /*#__PURE__*/Pipeline24FilledIcon, 'Pipeline24Filled');
const Pipeline24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.25A2.25 2.25 0 0 1 6.49 6H17.5a2.25 2.25 0 0 1 4.49.25v10.5a2.25 2.25 0 0 1-4.49.25H6.5A2.25 2.25 0 0 1 2 16.75V6.25Zm3 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V6.25Zm1.5 9.25h11v-8h-11v8Zm14-9.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V6.25Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline24Regular = wrapIcon_1.default( /*#__PURE__*/Pipeline24RegularIcon, 'Pipeline24Regular');
const Pipeline32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V8Zm24 0a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V8Zm-2 1H8v14h16V9Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline32Filled = wrapIcon_1.default( /*#__PURE__*/Pipeline32FilledIcon, 'Pipeline32Filled');
const Pipeline32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9a3 3 0 0 1 6 0h16a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0H8a3 3 0 1 1-6 0V9Zm4 0a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9Zm2 12h16V11H8v10ZM28 9a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0V9Z",
    fill: primaryFill
  }));
  ;
};
exports.Pipeline32Regular = wrapIcon_1.default( /*#__PURE__*/Pipeline32RegularIcon, 'Pipeline32Regular');
const PipelineAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9Zm12 3.52A5.5 5.5 0 0 0 9.02 14H6V6h8v3.02Zm1-3.52v3.52c1.13.1 2.17.55 3 1.24V5.5a1.5 1.5 0 0 0-3 0Zm4 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineAdd20Filled = wrapIcon_1.default( /*#__PURE__*/PipelineAdd20FilledIcon, 'PipelineAdd20Filled');
const PipelineAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.76a5.5 5.5 0 0 0-1-.66V5.5a.5.5 0 0 0-1 0v3.7c-.32-.08-.66-.15-1-.18V7H5v6h4.2c-.08.32-.15.66-.18 1H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineAdd20Regular = wrapIcon_1.default( /*#__PURE__*/PipelineAdd20RegularIcon, 'PipelineAdd20Regular');
const PipelineAdd32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6a2 2 0 0 0-2 2v16a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2Zm24 0a2 2 0 0 0-2 2v6.51a9.02 9.02 0 0 1 4 2.83V8a2 2 0 0 0-2-2Zm-5 8c.34 0 .67.02 1 .05V9H8v14h6a9 9 0 0 1 9-9Zm0 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineAdd32Filled = wrapIcon_1.default( /*#__PURE__*/PipelineAdd32FilledIcon, 'PipelineAdd32Filled');
const PipelineAdd32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9a3 3 0 0 1 6 0h16a3 3 0 1 1 6 0v8.34a9.05 9.05 0 0 0-2-1.82V9a1 1 0 1 0-2 0v5.51a8.95 8.95 0 0 0-2-.46V11H8v10h6.22a9.03 9.03 0 0 0-.22 2H8a3 3 0 1 1-6 0V9Zm4 0a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9Zm17 21.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineAdd32Regular = wrapIcon_1.default( /*#__PURE__*/PipelineAdd32RegularIcon, 'PipelineAdd32Regular');
const PipelineArrowCurveDown20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 21,
    height: 20,
    viewBox: "0 0 21 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.7-.7ZM2 9.74a5.48 5.48 0 0 0 3 1.24v3.52a1.5 1.5 0 0 1-3 0V9.74ZM10.98 6A5.5 5.5 0 0 1 6 10.98V14h8V6h-3.02Zm5.52-2c-.83 0-1.5.67-1.5 1.5v9a1.5 1.5 0 0 0 3 0v-9c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineArrowCurveDown20Filled = wrapIcon_1.default( /*#__PURE__*/PipelineArrowCurveDown20FilledIcon, 'PipelineArrowCurveDown20Filled');
const PipelineArrowCurveDown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.98 6c-.03.34-.1.68-.18 1H15v6H5v-2.02c-.35-.03-.68-.1-1-.19v3.71a.5.5 0 0 1-1 0v-4.1c-.37-.19-.7-.4-1-.66v4.76a1.5 1.5 0 0 0 3 0V14h10v.5a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-3 0V6h-4.02Zm5.52-1c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5Zm-11-4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm2.6 5.4c.2.2.2.5 0 .7L6.37 8.85a.5.5 0 0 1-.7 0L3.9 7.1a.5.5 0 1 1 .7-.7l.9.9V5.74C5.5 4.78 4.72 4 3.75 4H3.5a.5.5 0 1 1 0-1h.25A2.75 2.75 0 0 1 6.5 5.75v1.54l.9-.9c.2-.19.51-.19.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelineArrowCurveDown20Regular = wrapIcon_1.default( /*#__PURE__*/PipelineArrowCurveDown20RegularIcon, 'PipelineArrowCurveDown20Regular');
const PipelinePlay20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9Zm12 3.52A5.5 5.5 0 0 0 9.02 14H6V6h8v3.02Zm1-3.52v3.52c1.13.1 2.17.55 3 1.24V5.5a1.5 1.5 0 0 0-3 0Zm4 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelinePlay20Filled = wrapIcon_1.default( /*#__PURE__*/PipelinePlay20FilledIcon, 'PipelinePlay20Filled');
const PipelinePlay20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.76a5.5 5.5 0 0 0-1-.66V5.5a.5.5 0 0 0-1 0v3.7c-.32-.08-.66-.15-1-.18V7H5v6h4.2c-.08.32-.15.66-.18 1H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
  ;
};
exports.PipelinePlay20Regular = wrapIcon_1.default( /*#__PURE__*/PipelinePlay20RegularIcon, 'PipelinePlay20Regular');
const Pivot20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.59a1.5 1.5 0 0 1 .35-1.56l1-1a1.5 1.5 0 0 1 2.47.56h.59a.5.5 0 0 0 .5-.5v-.59a1.5 1.5 0 0 1-.56-2.47l1-1a1.5 1.5 0 0 1 1.56-.35V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5ZM6 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6ZM7 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm9.85 2.15a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7l1 1a.5.5 0 0 0 .7-.7l-.14-.15h1.79a2.5 2.5 0 0 0 2.5-2.5v-1.8l.15.15a.5.5 0 0 0 .7-.7l-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.Pivot20Filled = wrapIcon_1.default( /*#__PURE__*/Pivot20FilledIcon, 'Pivot20Filled');
const Pivot20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h4.59a1.5 1.5 0 0 0 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.59a1.5 1.5 0 0 0-1 0V5.5c0-.83-.67-1.5-1.5-1.5h-9ZM6 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm4 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4ZM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Zm10.85 2.15a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7l1 1a.5.5 0 0 0 .7-.7l-.14-.15h1.79a2.5 2.5 0 0 0 2.5-2.5v-1.8l.15.15a.5.5 0 0 0 .7-.7l-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.Pivot20Regular = wrapIcon_1.default( /*#__PURE__*/Pivot20RegularIcon, 'Pivot20Regular');
const Pivot24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.5V17a3.5 3.5 0 0 0 3.5 3.5h4.38a2.25 2.25 0 0 1 .53-2.34l1.5-1.5a2.25 2.25 0 0 1 3.71.84h.88v-.88a2.25 2.25 0 0 1-.84-3.71l1.5-1.5a2.25 2.25 0 0 1 2.34-.53V6.5A3.5 3.5 0 0 0 17 3H6.5A3.5 3.5 0 0 0 3 6.5ZM6.5 5h1C8.33 5 9 5.67 9 6.5v1C9 8.33 8.33 9 7.5 9h-1A1.5 1.5 0 0 1 5 7.5v-1C5 5.67 5.67 5 6.5 5ZM11 6.5c0-.83.67-1.5 1.5-1.5H17c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4.5A1.5 1.5 0 0 1 11 7.5v-1ZM7.5 11c.83 0 1.5.67 1.5 1.5V17c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 5 17v-4.5c0-.83.67-1.5 1.5-1.5h1Zm12.78 1.47a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.22-.22v2.44c0 .97-.78 1.75-1.75 1.75h-2.44l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h2.44c1.8 0 3.25-1.46 3.25-3.25v-2.44l.22.22a.75.75 0 1 0 1.06-1.06l-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pivot24Filled = wrapIcon_1.default( /*#__PURE__*/Pivot24FilledIcon, 'Pivot24Filled');
const Pivot24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 6.25c0-.97.78-1.75 1.75-1.75h11c.97 0 1.75.78 1.75 1.75v4.63a2.25 2.25 0 0 1 1.5 0V6.25c0-1.8-1.46-3.25-3.25-3.25h-11A3.25 3.25 0 0 0 3 6.25v11c0 1.8 1.46 3.25 3.25 3.25h4.63a2.25 2.25 0 0 1 0-1.5H6.25c-.97 0-1.75-.78-1.75-1.75v-11ZM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Zm5.5 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7ZM6 12.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4Zm14.28-.03a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.22-.22v2.44c0 .97-.78 1.75-1.75 1.75h-2.44l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h2.44c1.8 0 3.25-1.46 3.25-3.25v-2.44l.22.22a.75.75 0 1 0 1.06-1.06l-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pivot24Regular = wrapIcon_1.default( /*#__PURE__*/Pivot24RegularIcon, 'Pivot24Regular');
const Play12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2a1 1 0 0 0-1.5.86v6.28a1 1 0 0 0 1.5.87l5.49-3.14a1 1 0 0 0 0-1.74L4.49 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Play12Filled = wrapIcon_1.default( /*#__PURE__*/Play12FilledIcon, 'Play12Filled');
const Play12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.86A1 1 0 0 1 4.5 2l5.49 3.14a1 1 0 0 1 0 1.74L4.49 10A1 1 0 0 1 3 9.14V2.86ZM9.5 6 4 2.86v6.28L9.5 6Z",
    fill: primaryFill
  }));
  ;
};
exports.Play12Regular = wrapIcon_1.default( /*#__PURE__*/Play12RegularIcon, 'Play12Regular');
const Play16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.24 2.2A1.5 1.5 0 0 0 4 3.5v9a1.5 1.5 0 0 0 2.24 1.3l8-4.5a1.5 1.5 0 0 0 0-2.6l-8-4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Play16Filled = wrapIcon_1.default( /*#__PURE__*/Play16FilledIcon, 'Play16Filled');
const Play16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z",
    fill: primaryFill
  }));
  ;
};
exports.Play16Regular = wrapIcon_1.default( /*#__PURE__*/Play16RegularIcon, 'Play16Regular');
const Play20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.22 8.68a1.5 1.5 0 0 1 0 2.63l-10 5.5A1.5 1.5 0 0 1 5 15.5v-11A1.5 1.5 0 0 1 7.22 3.2l10 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Play20Filled = wrapIcon_1.default( /*#__PURE__*/Play20FilledIcon, 'Play20Filled');
const Play20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.22 8.69a1.5 1.5 0 0 1 0 2.62l-10 5.5A1.5 1.5 0 0 1 5 15.5v-11A1.5 1.5 0 0 1 7.22 3.2l10 5.5Zm-.48 1.75a.5.5 0 0 0 0-.88l-10-5.5A.5.5 0 0 0 6 4.5v11c0 .38.4.62.74.44l10-5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Play20Regular = wrapIcon_1.default( /*#__PURE__*/Play20RegularIcon, 'Play20Regular');
const Play24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 0 1 0 3.96L8.33 20.7A2.25 2.25 0 0 1 5 18.73V5.27Z",
    fill: primaryFill
  }));
  ;
};
exports.Play24Filled = wrapIcon_1.default( /*#__PURE__*/Play24FilledIcon, 'Play24Filled');
const Play24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.6 4.61a.75.75 0 0 0-1.1.66v13.46c0 .56.6.93 1.1.65l12.37-6.72a.75.75 0 0 0 0-1.32L7.61 4.61ZM5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 0 1 0 3.96L8.33 20.7A2.25 2.25 0 0 1 5 18.73V5.27Z",
    fill: primaryFill
  }));
  ;
};
exports.Play24Regular = wrapIcon_1.default( /*#__PURE__*/Play24RegularIcon, 'Play24Regular');
const Play28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.14 3.38A2.75 2.75 0 0 0 6 5.76v16.48c0 2.13 2.3 3.45 4.14 2.38l14.7-8.6a2.35 2.35 0 0 0 0-4.05l-14.7-8.59Z",
    fill: primaryFill
  }));
  ;
};
exports.Play28Filled = wrapIcon_1.default( /*#__PURE__*/Play28FilledIcon, 'Play28Filled');
const Play28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.38 4.68A1.25 1.25 0 0 0 7.5 5.76v16.48c0 .97 1.05 1.57 1.88 1.08l14.7-8.59a.85.85 0 0 0 0-1.46l-14.7-8.6ZM6 5.76c0-2.13 2.3-3.45 4.14-2.38l14.7 8.6a2.35 2.35 0 0 1 0 4.05l-14.7 8.59A2.75 2.75 0 0 1 6 22.24V5.76Z",
    fill: primaryFill
  }));
  ;
};
exports.Play28Regular = wrapIcon_1.default( /*#__PURE__*/Play28RegularIcon, 'Play28Regular');
const Play32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.22 4.46A3.5 3.5 0 0 0 7 7.51V24.5a3.5 3.5 0 0 0 5.23 3.04l15-8.5a3.5 3.5 0 0 0 0-6.09l-15-8.49Z",
    fill: primaryFill
  }));
  ;
};
exports.Play32Filled = wrapIcon_1.default( /*#__PURE__*/Play32FilledIcon, 'Play32Filled');
const Play32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.24 6.2A1.5 1.5 0 0 0 9 7.5v17a1.5 1.5 0 0 0 2.24 1.3l15-8.5a1.5 1.5 0 0 0 0-2.6l-15-8.5ZM7 7.5a3.5 3.5 0 0 1 5.22-3.04l15 8.5a3.5 3.5 0 0 1 0 6.09l-15 8.5A3.5 3.5 0 0 1 7 24.5v-17Z",
    fill: primaryFill
  }));
  ;
};
exports.Play32Regular = wrapIcon_1.default( /*#__PURE__*/Play32RegularIcon, 'Play32Regular');
const Play48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16.75 8.41 24.42 12.7a3.25 3.25 0 0 1 0 5.77l-24.42 12.7A3.25 3.25 0 0 1 12 36.7V11.3a3.25 3.25 0 0 1 4.55-2.98l.2.1Z",
    fill: primaryFill
  }));
  ;
};
exports.Play48Filled = wrapIcon_1.default( /*#__PURE__*/Play48FilledIcon, 'Play48Filled');
const Play48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16.75 8.41 24.42 12.7a3.25 3.25 0 0 1 0 5.77l-24.42 12.7A3.25 3.25 0 0 1 12 36.7V11.3a3.25 3.25 0 0 1 4.55-2.98l.2.1Zm-1.15 2.22-.11-.05a.75.75 0 0 0-.99.71V36.7a.75.75 0 0 0 1.1.67L40 24.67a.75.75 0 0 0 0-1.34L15.6 10.63Z",
    fill: primaryFill
  }));
  ;
};
exports.Play48Regular = wrapIcon_1.default( /*#__PURE__*/Play48RegularIcon, 'Play48Regular');
const PlayCircle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm8.5 0a.5.5 0 0 0-.25-.44L7.62 6.08a.75.75 0 0 0-1.12.65v2.54c0 .58.62.94 1.12.65l2.63-1.48A.5.5 0 0 0 10.5 8Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle16Filled = wrapIcon_1.default( /*#__PURE__*/PlayCircle16FilledIcon, 'PlayCircle16Filled');
const PlayCircle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 8a.5.5 0 0 1-.25.44L7.62 9.92a.75.75 0 0 1-1.12-.65V6.73c0-.58.62-.94 1.12-.65l2.63 1.48a.5.5 0 0 1 .25.44ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle16Regular = wrapIcon_1.default( /*#__PURE__*/PlayCircle16RegularIcon, 'PlayCircle16Regular');
const PlayCircle20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6-2.17v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 0 0 0-.86L9.13 7.18A.75.75 0 0 0 8 7.83Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle20Filled = wrapIcon_1.default( /*#__PURE__*/PlayCircle20FilledIcon, 'PlayCircle20Filled');
const PlayCircle20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.13 7.18A.75.75 0 0 0 8 7.83v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 0 0 0-.86L9.13 7.18ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle20Regular = wrapIcon_1.default( /*#__PURE__*/PlayCircle20RegularIcon, 'PlayCircle20Regular');
const PlayCircle24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle24Filled = wrapIcon_1.default( /*#__PURE__*/PlayCircle24FilledIcon, 'PlayCircle24Filled');
const PlayCircle24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle24Regular = wrapIcon_1.default( /*#__PURE__*/PlayCircle24RegularIcon, 'PlayCircle24Regular');
const PlayCircle28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-1.23 7.28 6.5 3.86a1 1 0 0 1 0 1.72l-6.5 3.86a1.5 1.5 0 0 1-2.27-1.29v-6.86a1.5 1.5 0 0 1 2.27-1.3Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle28Filled = wrapIcon_1.default( /*#__PURE__*/PlayCircle28FilledIcon, 'PlayCircle28Filled');
const PlayCircle28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.77 9.28c-1-.6-2.27.12-2.27 1.29v6.86a1.5 1.5 0 0 0 2.27 1.3l6.5-3.87a1 1 0 0 0 0-1.72l-6.5-3.86ZM2 14a12 12 0 1 1 24 0 12 12 0 0 1-24 0ZM14 3.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle28Regular = wrapIcon_1.default( /*#__PURE__*/PlayCircle28RegularIcon, 'PlayCircle28Regular');
const PlayCircle48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 44a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm9.77-21.29c.97.58.97 2 0 2.58L21.4 32.68c-1.5.9-3.4-.19-3.4-1.94V17.26c0-1.75 1.9-2.83 3.4-1.93l12.37 7.38Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle48Filled = wrapIcon_1.default( /*#__PURE__*/PlayCircle48FilledIcon, 'PlayCircle48Filled');
const PlayCircle48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M33.77 22.71 21.4 15.33c-1.5-.9-3.4.18-3.4 1.93v13.48c0 1.75 1.9 2.83 3.4 1.94l12.37-7.4c.97-.57.97-1.99 0-2.57ZM24 44a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm0-37.5a17.5 17.5 0 1 1 0 35 17.5 17.5 0 0 1 0-35Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayCircle48Regular = wrapIcon_1.default( /*#__PURE__*/PlayCircle48RegularIcon, 'PlayCircle48Regular');
const PlayMultiple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.44 12.56a1.5 1.5 0 0 0 1.8.24l8-4.5a1.5 1.5 0 0 0 0-2.6L6.21 1.18A1.52 1.52 0 0 0 4 2.5v9c0 .4.16.78.44 1.06Zm7.32-1.72 1.22-.68.02.25a1.51 1.51 0 0 1-.76 1.31l-5.08 2.86c-.51.27-1.08.41-1.66.42-.3 0-.61-.04-.91-.13A3.46 3.46 0 0 1 2 11.5V5.91a1.48 1.48 0 0 1 1-1.39v6.98a2.51 2.51 0 0 0 3.7 2.19l5.05-2.84a.01.01 0 0 0 .01-.01Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayMultiple16Filled = wrapIcon_1.default( /*#__PURE__*/PlayMultiple16FilledIcon, 'PlayMultiple16Filled');
const PlayMultiple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.44 12.56a1.5 1.5 0 0 0 1.8.24l8-4.5a1.5 1.5 0 0 0 0-2.6L6.21 1.18A1.52 1.52 0 0 0 4 2.5v9c0 .4.16.78.44 1.06Zm.7-10.41a.5.5 0 0 1 .6-.08l8 4.5a.5.5 0 0 1 0 .87l-7.99 4.49A.5.5 0 0 1 5 11.5v-9a.5.5 0 0 1 .15-.35Zm6.62 8.69 1.22-.68.02.25a1.51 1.51 0 0 1-.76 1.31l-5.08 2.86c-.51.27-1.08.41-1.66.42-.3 0-.61-.04-.91-.13A3.46 3.46 0 0 1 2 11.5V5.91a1.48 1.48 0 0 1 1-1.39v6.98a2.51 2.51 0 0 0 3.7 2.19l5.05-2.84a.01.01 0 0 0 .01-.01Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayMultiple16Regular = wrapIcon_1.default( /*#__PURE__*/PlayMultiple16RegularIcon, 'PlayMultiple16Regular');
const PlaySettings20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.22 8.68a1.5 1.5 0 0 1 0 2.63L12 14.2A5.5 5.5 0 0 0 5 9.2V4.5a1.5 1.5 0 0 1 2.23-1.32l10 5.5ZM4.06 11.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 4 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 9 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM6.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PlaySettings20Filled = wrapIcon_1.default( /*#__PURE__*/PlaySettings20FilledIcon, 'PlaySettings20Filled');
const PlaySettings20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.22 8.69a1.5 1.5 0 0 1 0 2.62l-5.23 2.88a5.5 5.5 0 0 0-.16-1.05l4.9-2.7a.5.5 0 0 0 0-.88l-9.99-5.5A.5.5 0 0 0 6 4.5v4.52c-.34.03-.68.1-1 .19V4.5a1.5 1.5 0 0 1 2.22-1.32l10 5.5ZM4.06 11.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 4 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 9 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM6.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PlaySettings20Regular = wrapIcon_1.default( /*#__PURE__*/PlaySettings20RegularIcon, 'PlaySettings20Regular');
const PlayingCards20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.82 2.74c.07-.27.19-.52.33-.74H7a2 2 0 0 0-2 2v5.54l1.82-6.8ZM4 3.5c0-.15.01-.3.04-.45l-.06.02a2 2 0 0 0-1.41 2.45l1.42 5.34L4 3.5Zm6.1-1.43a2 2 0 0 0-2.45 1.41L4.82 14.03a2 2 0 0 0 1.41 2.45l5.42 1.45a2 2 0 0 0 2.45-1.41l2.83-10.55a2 2 0 0 0-1.4-2.45L10.1 2.07ZM12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1.25 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayingCards20Filled = wrapIcon_1.default( /*#__PURE__*/PlayingCards20FilledIcon, 'PlayingCards20Filled');
const PlayingCards20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.85 3.03a1 1 0 0 0-1.23.71L5.78 14.3a1 1 0 0 0 .71 1.22l5.42 1.46a1 1 0 0 0 1.22-.71L15.97 5.7a1 1 0 0 0-.7-1.22L9.84 3.03Zm-2.2.45a2 2 0 0 1 2.46-1.41l5.41 1.45a2 2 0 0 1 1.41 2.45L14.1 16.52a2 2 0 0 1-2.45 1.41l-5.42-1.45a2 2 0 0 1-1.41-2.45L7.65 3.48ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.25 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.15 2H7a2 2 0 0 0-2 2v5.52L6 5.8V4a1 1 0 0 1 .74-.97l.08-.29A2.51 2.51 0 0 1 7.15 2ZM4.04 3.05C4 3.2 4 3.35 4 3.5v.64a1 1 0 0 0-.47 1.12L4 6.99v3.86L2.56 5.52a2 2 0 0 1 1.41-2.45l.06-.02Z",
    fill: primaryFill
  }));
  ;
};
exports.PlayingCards20Regular = wrapIcon_1.default( /*#__PURE__*/PlayingCards20RegularIcon, 'PlayingCards20Regular');
const PlugConnected20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 0 0 .48-5.12l2.45-2.45ZM7.55 8.85a1.49 1.49 0 0 0-2.1 0l-.3.3a4.04 4.04 0 0 0-.48 5.12l-2.45 2.45a.75.75 0 1 0 1.06 1.06l2.45-2.45a4.04 4.04 0 0 0 5.12-.48l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnected20Filled = wrapIcon_1.default( /*#__PURE__*/PlugConnected20FilledIcon, 'PlugConnected20Filled');
const PlugConnected20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.85a.5.5 0 0 0-.7-.7L14.48 4.8a4.04 4.04 0 0 0-5.33.34l-.3.3a1.49 1.49 0 0 0 0 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 0 0 .34-5.33l2.66-2.67Zm-4 7.6c-.2.19-.5.19-.7 0l-3.6-3.6c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 0 1 4.3 4.3l-.3.3Zm-6.3-1.6a1.49 1.49 0 0 0-2.1 0l-.3.3a4.04 4.04 0 0 0-.34 5.33l-2.66 2.67a.5.5 0 0 0 .7.7l2.67-2.66a4.04 4.04 0 0 0 5.33-.34l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6Zm-1.4.7c.2-.19.5-.19.7 0l3.6 3.6c.19.2.19.5 0 .7l-.3.3a3.04 3.04 0 1 1-4.3-4.3l.3-.3Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnected20Regular = wrapIcon_1.default( /*#__PURE__*/PlugConnected20RegularIcon, 'PlugConnected20Regular');
const PlugConnected24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.49 5.57a5.97 5.97 0 0 1-1.9 8.96c-.64.35-1.42.14-1.94-.38l-5.8-5.8c-.52-.52-.73-1.3-.38-1.95a6 6 0 0 1 8.96-1.89l2.29-2.29a.75.75 0 1 1 1.06 1.06l-2.29 2.3ZM3.28 21.78l2.3-2.29a5.97 5.97 0 0 0 8.95-1.9c.35-.64.14-1.42-.38-1.94l-5.8-5.8c-.52-.52-1.3-.73-1.95-.38a6 6 0 0 0-1.89 8.96l-2.29 2.29a.75.75 0 1 0 1.06 1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnected24Filled = wrapIcon_1.default( /*#__PURE__*/PlugConnected24FilledIcon, 'PlugConnected24Filled');
const PlugConnected24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.49 5.57a5.97 5.97 0 0 1-1.9 8.96c-.64.35-1.42.14-1.94-.38l-5.8-5.8c-.52-.52-.73-1.3-.38-1.95a6 6 0 0 1 8.96-1.89l2.29-2.29a.75.75 0 1 1 1.06 1.06l-2.29 2.3Zm-2.02 7.26a4.5 4.5 0 1 0-6.3-6.3c-.27.35-.19.83.12 1.14l5.04 5.04c.31.3.8.39 1.14.12ZM3.28 21.78l2.3-2.29a5.97 5.97 0 0 0 8.95-1.9c.35-.64.14-1.42-.38-1.94l-5.8-5.8c-.52-.52-1.3-.73-1.95-.38a6 6 0 0 0-1.89 8.96l-2.29 2.29a.75.75 0 1 0 1.06 1.06Zm4.39-10.49 5.04 5.04c.3.31.39.8.12 1.14a4.5 4.5 0 1 1-6.3-6.3c.35-.27.83-.19 1.14.12Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnected24Regular = wrapIcon_1.default( /*#__PURE__*/PlugConnected24RegularIcon, 'PlugConnected24Regular');
const PlugConnectedAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47a5.48 5.48 0 0 1 4.55-.85 4.04 4.04 0 0 0-.53-3.44l2.45-2.45ZM7.55 8.85l2.47 2.46a5.48 5.48 0 0 0-.85 4.55 4.04 4.04 0 0 1-3.44-.53l-2.45 2.45a.75.75 0 0 1-1.06-1.06l2.45-2.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2.1 0Zm9.45 9.4a4.5 4.5 0 1 1-5-7.5 4.5 4.5 0 0 1 5 7.5Zm-2.15-6.1a.5.5 0 0 0-.85.35V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnectedAdd20Filled = wrapIcon_1.default( /*#__PURE__*/PlugConnectedAdd20FilledIcon, 'PlugConnectedAdd20Filled');
const PlugConnectedAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.96 2.3a.5.5 0 0 0-.82-.15l-2.7 2.7a4.04 4.04 0 0 0-5.33.33l-.6.61a1.05 1.05 0 0 0 0 1.49l2.76 2.76c.28-.2.58-.37.89-.52L9.52 6.88a.5.5 0 0 1 0-.7l.3-.3a3.03 3.03 0 0 1 4.29 0v.02a3.04 3.04 0 0 1 .73 3.11c.34.02.68.07 1 .16a4.03 4.03 0 0 0-.69-3.62l2.7-2.7a.5.5 0 0 0 .11-.54ZM7.28 8.5l2.77 2.77c-.2.28-.38.57-.53.88L6.9 9.52a.49.49 0 0 0-.7 0l-.3.3a3.04 3.04 0 0 0 0 4.29h.01a3.03 3.03 0 0 0 3.11.73c.02.34.07.68.15 1a4.03 4.03 0 0 1-3.6-.69l-2.7 2.7a.5.5 0 1 1-.71-.7l2.7-2.7a4.03 4.03 0 0 1 .33-5.34l.3-.3.31-.31a1.05 1.05 0 0 1 1.49 0ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnectedAdd20Regular = wrapIcon_1.default( /*#__PURE__*/PlugConnectedAdd20RegularIcon, 'PlugConnectedAdd20Regular');
const PlugConnectedCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47a5.48 5.48 0 0 1 4.55-.85 4.04 4.04 0 0 0-.53-3.44l2.45-2.45ZM7.55 8.85l2.47 2.46a5.48 5.48 0 0 0-.85 4.55 4.04 4.04 0 0 1-3.44-.53l-2.45 2.45a.75.75 0 0 1-1.06-1.06l2.45-2.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2.1 0ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnectedCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/PlugConnectedCheckmark20FilledIcon, 'PlugConnectedCheckmark20Filled');
const PlugConnectedCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.85a.5.5 0 0 0-.7-.7L14.48 4.8a4.04 4.04 0 0 0-5.33.34l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47c.28-.2.58-.38.9-.52L9.55 6.85c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 0 1 5.01 3.16c.35.02.68.08 1 .16.37-1.23.15-2.6-.67-3.65l2.66-2.67Zm-10.3 6 2.47 2.46c-.2.28-.38.58-.52.9L6.85 9.55c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 0 0 3.16 5.01c.02.35.08.68.16 1-1.23.37-2.6.15-3.65-.67l-2.67 2.66a.5.5 0 0 1-.7-.7l2.66-2.67a4.04 4.04 0 0 1 .34-5.33l.3-.3a1.49 1.49 0 0 1 2.1 0ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugConnectedCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/PlugConnectedCheckmark20RegularIcon, 'PlugConnectedCheckmark20Regular');
const PlugDisconnected20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.78 2.22c.3.3.3.77 0 1.06l-1.45 1.45a4.04 4.04 0 0 1-.48 5.12l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 0 1 0-1.48l.6-.61a4.05 4.05 0 0 1 5.13-.48l1.45-1.45c.3-.3.77-.3 1.06 0Zm-9 6.25c.3.3.3.77 0 1.06L7.51 10.8l1.69 1.7 1.27-1.28a.75.75 0 1 1 1.06 1.06l-1.28 1.28c.48.58.45 1.45-.1 2l-.3.3a4.04 4.04 0 0 1-5.12.47l-1.45 1.45a.75.75 0 0 1-1.06-1.06l1.45-1.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2-.1l1.27-1.28c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected20Filled = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected20FilledIcon, 'PlugDisconnected20Filled');
const PlugDisconnected20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.15c.2.2.2.5 0 .7L16.2 4.52a4.04 4.04 0 0 1-.34 5.33l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 0 1 0-1.48l.6-.61a4.04 4.04 0 0 1 5.34-.34l1.67-1.66c.2-.2.5-.2.7 0Zm-2.71 2.7a3.04 3.04 0 0 0-4.29 0l-.3.3c-.19.2-.19.5 0 .7l3.6 3.6c.2.19.5.19.7 0l.3-.3a3.04 3.04 0 0 0 0-4.29l-.01-.01Zm-5.79 3.8c.2.2.2.5 0 .7L7.71 11 9 12.3l1.65-1.65a.5.5 0 0 1 .7.7L9.71 13l.44.45c.59.58.59 1.52 0 2.1l-.3.3a4.04 4.04 0 0 1-5.33.34l-1.67 1.66a.5.5 0 0 1-.7-.7l1.66-1.67a4.04 4.04 0 0 1 .34-5.33l.3-.3a1.49 1.49 0 0 1 2.1 0l.45.44 1.65-1.64c.2-.2.5-.2.7 0Zm-4.5 6.5a3.04 3.04 0 0 0 4.3 0l.3-.3c.19-.2.19-.5 0-.7l-3.6-3.6c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 0 0 0 4.3Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected20Regular = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected20RegularIcon, 'PlugDisconnected20Regular');
const PlugDisconnected24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.7 3.7a1 1 0 0 0-1.4-1.4l-1.8 1.79a4.25 4.25 0 0 0-5.26.6l-1.06 1.07c-.69.69-.69 1.8 0 2.48l3.58 3.58c.69.69 1.8.69 2.48 0l1.07-1.06a4.25 4.25 0 0 0 .6-5.26l1.8-1.8Zm-11 8a1 1 0 0 0-1.4-1.4l-1.48 1.46-.29-.29a.75.75 0 0 0-1.06 0l-1.78 1.77a4.25 4.25 0 0 0-.6 5.26l-1.8 1.8a1 1 0 1 0 1.42 1.4l1.8-1.79a4.25 4.25 0 0 0 5.25-.6l1.77-1.78c.3-.3.3-.77 0-1.06l-.3-.3 1.48-1.46a1 1 0 0 0-1.42-1.42l-1.47 1.47-1.58-1.58 1.47-1.47Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected24Filled = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected24FilledIcon, 'PlugDisconnected24Filled');
const PlugDisconnected24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.78 3.28a.75.75 0 0 0-1.06-1.06l-2.01 2.01a4.25 4.25 0 0 0-5.47.46l-1.06 1.07c-.69.69-.69 1.8 0 2.48l3.58 3.58c.69.69 1.8.69 2.48 0l1.07-1.06a4.25 4.25 0 0 0 .46-5.47l2.01-2.01Zm-3.59 2.48.03.02.02.03a2.75 2.75 0 0 1 0 3.88l-1.06 1.07c-.1.1-.26.1-.36 0l-3.58-3.58a.25.25 0 0 1 0-.36l1.07-1.06a2.75 2.75 0 0 1 3.88 0Zm-7.41 5.52a.75.75 0 1 0-1.06-1.06L8 11.94l-.47-.47a.75.75 0 0 0-1.06 0l-1.78 1.77a4.25 4.25 0 0 0-.46 5.47l-2.01 2.01a.75.75 0 1 0 1.06 1.06l2.01-2.01a4.25 4.25 0 0 0 5.47-.46l1.77-1.78c.3-.3.3-.77 0-1.06l-.47-.47 1.72-1.72a.75.75 0 1 0-1.06-1.06L11 14.94 9.06 13l1.72-1.72Zm-3.31 2.25 3 3 .47.47-1.25 1.24a2.75 2.75 0 0 1-3.88 0l-.05-.05a2.75 2.75 0 0 1 0-3.88L7 13.06l.47.47Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected24Regular = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected24RegularIcon, 'PlugDisconnected24Regular');
const PlugDisconnected28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.74 6.33a5.5 5.5 0 0 1-.5 7.2l-1.94 1.95c-.3.3-.77.3-1.06 0l-6.72-6.71a.75.75 0 0 1 0-1.06l1.95-1.95a5.5 5.5 0 0 1 7.21-.5l3.04-3.04a.75.75 0 0 1 1.07 1.06l-3.05 3.05Zm-9.96 5.95a.75.75 0 0 0-1.06-1.06l-2.13 2.12-.82-.82a.75.75 0 0 0-1.06 0l-1.95 1.94a5.5 5.5 0 0 0-.5 7.22l-3.04 3.04a.75.75 0 1 0 1.07 1.06l3.04-3.04a5.5 5.5 0 0 0 7.21-.5l1.95-1.94c.29-.3.29-.77 0-1.06l-.83-.83 2.12-2.13a.75.75 0 1 0-1.06-1.06l-2.12 2.13-2.95-2.95 2.13-2.12Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected28Filled = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected28FilledIcon, 'PlugDisconnected28Filled');
const PlugDisconnected28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.74 6.33a5.5 5.5 0 0 1-.5 7.2l-1.94 1.95c-.3.3-.77.3-1.06 0l-6.72-6.71a.75.75 0 0 1 0-1.06l1.95-1.95a5.5 5.5 0 0 1 7.21-.5l3.04-3.04a.75.75 0 0 1 1.07 1.06l-3.05 3.05Zm-2.97 7.56 1.42-1.41a4 4 0 1 0-5.66-5.66L14.1 8.24l5.66 5.65Zm-7-2.68c.3.3.3.77 0 1.07l-2.12 2.12 2.95 2.95 2.12-2.13a.75.75 0 1 1 1.06 1.06l-2.12 2.13.83.83c.29.29.29.76 0 1.06l-1.95 1.94a5.5 5.5 0 0 1-7.21.5l-3.04 3.04a.75.75 0 0 1-1.07-1.06l3.05-3.04a5.5 5.5 0 0 1 .5-7.22l1.94-1.94c.3-.3.77-.3 1.06 0l.82.82 2.13-2.13c.3-.29.77-.29 1.06 0ZM6.84 21.2a4 4 0 0 0 5.65 0l1.42-1.42-5.66-5.66-1.42 1.41a4 4 0 0 0 0 5.65v.01h.01Z",
    fill: primaryFill
  }));
  ;
};
exports.PlugDisconnected28Regular = wrapIcon_1.default( /*#__PURE__*/PlugDisconnected28RegularIcon, 'PlugDisconnected28Regular');
const PointScan20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 2.5a.5.5 0 0 0-1 0v4.02A5 5 0 0 0 3.52 11H8V6.52a5.07 5.07 0 0 1 1 0V2.5ZM2.5 11h1.02a5.06 5.06 0 0 0 0 1H2.5a.5.5 0 0 1 0-1ZM8 17.5v-1.02a5.07 5.07 0 0 0 1 0v1.02a.5.5 0 0 1-1 0Zm5.48-5.5h4.02a.5.5 0 0 0 0-1h-4.02a5.07 5.07 0 0 1 0 1H9v4.48A5 5 0 0 0 13.48 12ZM8 16.48A5 5 0 0 1 3.52 12H8v4.48ZM9 11h4.48A5 5 0 0 0 9 6.52V11Z",
    fill: primaryFill
  }));
  ;
};
exports.PointScan20Filled = wrapIcon_1.default( /*#__PURE__*/PointScan20FilledIcon, 'PointScan20Filled');
const PointScan20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c.28 0 .5.22.5.5v4.02A5 5 0 0 1 13.48 11h4.02a.5.5 0 0 1 0 1h-4.02A5 5 0 0 1 9 16.48v1.02a.5.5 0 0 1-1 0v-1.02A5 5 0 0 1 3.52 12H2.5a.5.5 0 0 1 0-1h1.02A5 5 0 0 1 8 6.52V2.5c0-.28.22-.5.5-.5ZM4.53 12A4 4 0 0 0 8 15.47V12H4.53ZM8 11V7.53A4 4 0 0 0 4.53 11H8Zm1 1v3.47A4 4 0 0 0 12.47 12H9Zm3.47-1A4 4 0 0 0 9 7.53V11h3.47Z",
    fill: primaryFill
  }));
  ;
};
exports.PointScan20Regular = wrapIcon_1.default( /*#__PURE__*/PointScan20RegularIcon, 'PointScan20Regular');
const PointScan24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 2c.38 0 .7.28.74.65l.01.1v4.8A6.25 6.25 0 0 1 16.46 13h4.79a.75.75 0 0 1 .1 1.5H16.45A6.25 6.25 0 0 1 11 19.96v1.29a.75.75 0 0 1-1.5.1V19.95a6.25 6.25 0 0 1-5.46-5.45H2.75a.75.75 0 0 1-.1-1.5H4.05A6.25 6.25 0 0 1 9.5 7.54V2.75c0-.41.34-.75.75-.75Zm0 5.5c-.25 0-.5.01-.75.04V13H4.04a6.31 6.31 0 0 0 0 1.5H9.5v5.46a6.3 6.3 0 0 0 1.5 0V14.5h5.46a6.31 6.31 0 0 0 0-1.5H11V7.54c-.25-.03-.5-.04-.75-.04Z",
    fill: primaryFill
  }));
  ;
};
exports.PointScan24Filled = wrapIcon_1.default( /*#__PURE__*/PointScan24FilledIcon, 'PointScan24Filled');
const PointScan24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 2c.38 0 .7.28.74.65l.01.1v4.8A6.25 6.25 0 0 1 16.46 13h4.79a.75.75 0 0 1 .1 1.5H16.45A6.25 6.25 0 0 1 11 19.96v1.29a.75.75 0 0 1-1.5.1V19.95a6.25 6.25 0 0 1-5.46-5.45H2.75a.75.75 0 0 1-.1-1.5H4.05A6.25 6.25 0 0 1 9.5 7.54V2.75c0-.41.34-.75.75-.75ZM9.5 14.5H5.56a4.75 4.75 0 0 0 3.94 3.94V14.5Zm5.44 0H11v3.94a4.75 4.75 0 0 0 3.94-3.94ZM9.5 9.06A4.75 4.75 0 0 0 5.56 13H9.5V9.06Zm1.5 0V13h3.94a4.75 4.75 0 0 0-3.72-3.9L11 9.06Z",
    fill: primaryFill
  }));
  ;
};
exports.PointScan24Regular = wrapIcon_1.default( /*#__PURE__*/PointScan24RegularIcon, 'PointScan24Regular');
const Poll16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V3ZM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V9Zm10-2a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0V7Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll16Filled = wrapIcon_1.default( /*#__PURE__*/Poll16FilledIcon, 'Poll16Filled');
const Poll16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Zm1 2v10a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0ZM3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2Zm1 6a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0v4Zm7-6a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0V7Zm3 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll16Regular = wrapIcon_1.default( /*#__PURE__*/Poll16RegularIcon, 'Poll16Regular');
const Poll20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2Zm-6 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Zm12-4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll20Filled = wrapIcon_1.default( /*#__PURE__*/Poll20FilledIcon, 'Poll20Filled');
const Poll20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 4a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0V4Zm2-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Zm-8 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm12-5a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2Zm-1 2a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V8Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll20Regular = wrapIcon_1.default( /*#__PURE__*/Poll20RegularIcon, 'Poll20Regular');
const Poll24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 2a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 1 1-5.5 0V4.75A2.75 2.75 0 0 1 11.75 2Zm7 5a2.75 2.75 0 0 1 2.75 2.75v9.5a2.75 2.75 0 1 1-5.5 0v-9.5A2.75 2.75 0 0 1 18.75 7Zm-14 5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-5.5 0v-4.5A2.75 2.75 0 0 1 4.75 12Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll24Filled = wrapIcon_1.default( /*#__PURE__*/Poll24FilledIcon, 'Poll24Filled');
const Poll24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 2a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 1 1-5.5 0V4.75A2.75 2.75 0 0 1 11.75 2Zm7 5a2.75 2.75 0 0 1 2.75 2.75v9.5a2.75 2.75 0 1 1-5.5 0v-9.5A2.75 2.75 0 0 1 18.75 7Zm-14 5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-5.5 0v-4.5A2.75 2.75 0 0 1 4.75 12Zm7-8.5c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 0 0 2.5 0V4.75c0-.69-.56-1.25-1.25-1.25Zm7 5c-.69 0-1.25.56-1.25 1.25v9.5a1.25 1.25 0 0 0 2.5 0v-9.5c0-.69-.56-1.25-1.25-1.25Zm-14 5c-.69 0-1.25.56-1.25 1.25v4.5a1.25 1.25 0 1 0 2.5 0v-4.5c0-.69-.56-1.25-1.25-1.25Z",
    fill: primaryFill
  }));
  ;
};
exports.Poll24Regular = wrapIcon_1.default( /*#__PURE__*/Poll24RegularIcon, 'Poll24Regular');
const PortHdmi20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.85 7.44A1.5 1.5 0 0 1 5.91 7h8.18c.4 0 .78.16 1.06.44l2.41 2.41c.28.28.44.67.44 1.06v.59c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.59c0-.4.16-.78.44-1.06l2.41-2.41ZM6.5 9.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.PortHdmi20Filled = wrapIcon_1.default( /*#__PURE__*/PortHdmi20FilledIcon, 'PortHdmi20Filled');
const PortHdmi20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.85 7.44A1.5 1.5 0 0 1 5.91 7h8.18c.4 0 .78.16 1.06.44l2.41 2.41c.28.28.44.67.44 1.06v.59c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.59c0-.4.16-.78.44-1.06l2.41-2.41ZM5.91 8a.5.5 0 0 0-.35.15l-2.41 2.41a.5.5 0 0 0-.15.35v.59c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-.59a.5.5 0 0 0-.15-.35l-2.41-2.41a.5.5 0 0 0-.35-.15H5.9ZM6 10c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10Z",
    fill: primaryFill
  }));
  ;
};
exports.PortHdmi20Regular = wrapIcon_1.default( /*#__PURE__*/PortHdmi20RegularIcon, 'PortHdmi20Regular');
const PortHdmi24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m21.41 11.41-2.82-2.82A2 2 0 0 0 17.17 8H6.83a2 2 0 0 0-1.42.59l-2.82 2.82A2 2 0 0 0 2 12.83V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.17a2 2 0 0 0-.59-1.42ZM17 12a.75.75 0 0 1-.75.75h-8.5a.75.75 0 1 1 0-1.5h8.5A.76.76 0 0 1 17 12Z",
    fill: primaryFill
  }));
  ;
};
exports.PortHdmi24Filled = wrapIcon_1.default( /*#__PURE__*/PortHdmi24FilledIcon, 'PortHdmi24Filled');
const PortHdmi24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.41 11.41 18.6 8.6A2 2 0 0 0 17.17 8H6.83a2 2 0 0 0-1.42.59L2.6 11.4A2 2 0 0 0 2 12.83V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.17a2 2 0 0 0-.59-1.42ZM20.5 14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1.17a.5.5 0 0 1 .15-.36l2.82-2.82a.5.5 0 0 1 .36-.15h10.34a.5.5 0 0 1 .36.15l2.82 2.82a.5.5 0 0 1 .15.36V14Zm-4.25-2.75h-8.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PortHdmi24Regular = wrapIcon_1.default( /*#__PURE__*/PortHdmi24RegularIcon, 'PortHdmi24Regular');
const PortMicroUsb20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.43 8.3c.26-.2.58-.3.9-.3h5.34c.32 0 .64.1.9.3l1.33 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7l1.33-1Z",
    fill: primaryFill
  }));
  ;
};
exports.PortMicroUsb20Filled = wrapIcon_1.default( /*#__PURE__*/PortMicroUsb20FilledIcon, 'PortMicroUsb20Filled');
const PortMicroUsb20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.43 8.3c.26-.2.58-.3.9-.3h5.34c.32 0 .64.1.9.3l1.33 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7l1.33-1Zm.9.7a.5.5 0 0 0-.3.1l-1.33 1a.5.5 0 0 0 .3.9h8a.5.5 0 0 0 .3-.9l-1.33-1a.5.5 0 0 0-.3-.1H7.33Z",
    fill: primaryFill
  }));
  ;
};
exports.PortMicroUsb20Regular = wrapIcon_1.default( /*#__PURE__*/PortMicroUsb20RegularIcon, 'PortMicroUsb20Regular');
const PortMicroUsb24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 12.83V13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.17a2 2 0 0 1 .59-1.42l1.82-1.82A2 2 0 0 1 8.83 9h6.34a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 1 .59 1.42Z",
    fill: primaryFill
  }));
  ;
};
exports.PortMicroUsb24Filled = wrapIcon_1.default( /*#__PURE__*/PortMicroUsb24FilledIcon, 'PortMicroUsb24Filled');
const PortMicroUsb24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.17 10.5a.5.5 0 0 1 .36.15l1.82 1.82a.5.5 0 0 1 .15.36V13a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.17a.5.5 0 0 1 .15-.36l1.82-1.82a.5.5 0 0 1 .36-.15h6.34Zm0-1.5H8.83a2 2 0 0 0-1.42.59L5.6 11.4A2 2 0 0 0 5 12.83V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.17a2 2 0 0 0-.59-1.42L16.6 9.6A2 2 0 0 0 15.17 9Z",
    fill: primaryFill
  }));
  ;
};
exports.PortMicroUsb24Regular = wrapIcon_1.default( /*#__PURE__*/PortMicroUsb24RegularIcon, 'PortMicroUsb24Regular');
const PortUsbA20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Zm0 1.5h11V10h-11V8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbA20Filled = wrapIcon_1.default( /*#__PURE__*/PortUsbA20FilledIcon, 'PortUsbA20Filled');
const PortUsbA20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11ZM4 8.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V10H4V8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbA20Regular = wrapIcon_1.default( /*#__PURE__*/PortUsbA20RegularIcon, 'PortUsbA20Regular');
const PortUsbA24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM6 10h12v2H6v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbA24Filled = wrapIcon_1.default( /*#__PURE__*/PortUsbA24FilledIcon, 'PortUsbA24Filled');
const PortUsbA24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM5.5 10a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v2h-13v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbA24Regular = wrapIcon_1.default( /*#__PURE__*/PortUsbA24RegularIcon, 'PortUsbA24Regular');
const PortUsbC20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 10c0-1.1.9-2 2-2h7a2 2 0 1 1 0 4h-7a2 2 0 0 1-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbC20Filled = wrapIcon_1.default( /*#__PURE__*/PortUsbC20FilledIcon, 'PortUsbC20Filled');
const PortUsbC20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 10c0-1.1.9-2 2-2h7a2 2 0 1 1 0 4h-7a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbC20Regular = wrapIcon_1.default( /*#__PURE__*/PortUsbC20RegularIcon, 'PortUsbC20Regular');
const PortUsbC24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 12a3 3 0 0 1-3 3H8a3 3 0 0 1 0-6h8a3 3 0 0 1 3 3Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbC24Filled = wrapIcon_1.default( /*#__PURE__*/PortUsbC24FilledIcon, 'PortUsbC24Filled');
const PortUsbC24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 10.5a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h8ZM16 9H8a3 3 0 1 0 0 6h8a3 3 0 0 0 0-6Z",
    fill: primaryFill
  }));
  ;
};
exports.PortUsbC24Regular = wrapIcon_1.default( /*#__PURE__*/PortUsbC24RegularIcon, 'PortUsbC24Regular');
const PositionBackward20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6H9.5A3.5 3.5 0 0 0 6 9.5V13H4.5A2.5 2.5 0 0 1 2 10.5v-6ZM9.5 7A2.5 2.5 0 0 0 7 9.5v6A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7h-6ZM8 9.5C8 8.67 8.67 8 9.5 8h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionBackward20Filled = wrapIcon_1.default( /*#__PURE__*/PositionBackward20FilledIcon, 'PositionBackward20Filled');
const PositionBackward20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H6v-1.7l-.7.7h-.8a1.5 1.5 0 0 1-.65-.15L6 9.71V9.5c0-.57.14-1.11.38-1.59l-3.23 3.24A1.5 1.5 0 0 1 3 10.5v-.94L9.56 3h.94c.23 0 .45.05.65.15L7.9 6.38A3.49 3.49 0 0 1 9.5 6h.2l2.15-2.15c.1.2.15.42.15.65v.8l-.7.7H13V4.5A2.5 2.5 0 0 0 10.5 2h-6ZM3 4.5C3 3.67 3.67 3 4.5 3h.65L3 5.15V4.5Zm0 2.06L6.56 3h1.59L3 8.15V6.56ZM7 9.5A2.5 2.5 0 0 1 9.5 7h6A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6ZM9.5 8C8.67 8 8 8.67 8 9.5v6c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-6Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionBackward20Regular = wrapIcon_1.default( /*#__PURE__*/PositionBackward20RegularIcon, 'PositionBackward20Regular');
const PositionBackward24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 6.5h-5.75a4.25 4.25 0 0 0-4.25 4.25v5.75H5.25A3.25 3.25 0 0 1 2 13.25v-8C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V6.5ZM22 18.75c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 0 1-3.25-3.25v-8c0-1.8 1.46-3.25 3.25-3.25h8c1.8 0 3.25 1.46 3.25 3.25v8Zm-3.25 1.75c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75h-8C9.78 9 9 9.78 9 10.75v8c0 .97.78 1.75 1.75 1.75h8Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionBackward24Filled = wrapIcon_1.default( /*#__PURE__*/PositionBackward24FilledIcon, 'PositionBackward24Filled');
const PositionBackward24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 16.5H5.25A3.25 3.25 0 0 1 2 13.25v-8C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V6.5h-1.65l.15-.15v-1.1c0-.23-.04-.45-.13-.65l-1.9 1.9h-2.12l2.92-2.92a1.75 1.75 0 0 0-.52-.08h-1.28L3.5 11.97v1.28c0 .18.03.36.08.52l2.92-2.92v2.12l-1.9 1.9c.2.09.42.13.65.13h1.1l.15-.15v1.65Zm3.35-13H7.97L3.5 7.97v1.88L9.85 3.5Zm-4 0h-.6c-.97 0-1.75.78-1.75 1.75v.6L5.85 3.5ZM22 18.75c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 0 1-3.25-3.25v-8c0-1.8 1.46-3.25 3.25-3.25h8c1.8 0 3.25 1.46 3.25 3.25v8Zm-3.25 1.75c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75h-8C9.78 9 9 9.78 9 10.75v8c0 .97.78 1.75 1.75 1.75h8Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionBackward24Regular = wrapIcon_1.default( /*#__PURE__*/PositionBackward24RegularIcon, 'PositionBackward24Regular');
const PositionForward20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 14v1.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H14v1h1.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5V14H7ZM2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 2 10.5v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionForward20Filled = wrapIcon_1.default( /*#__PURE__*/PositionForward20FilledIcon, 'PositionForward20Filled');
const PositionForward20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 14v1.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H14v1h1.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5V14H7ZM2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 2 10.5v-6ZM4.5 3C3.67 3 3 3.67 3 4.5v.65L5.15 3H4.5Zm2.06 0L3 6.56v1.59L8.15 3H6.56ZM3 10.5c0 .23.05.45.15.65l8-8A1.5 1.5 0 0 0 10.5 3h-.94L3 9.56v.94ZM4.5 12h.8L12 5.3v-.8c0-.23-.05-.45-.15-.65l-8 8c.2.1.42.15.65.15Zm5.2 0h.8c.83 0 1.5-.67 1.5-1.5v-.8L9.7 12Zm-1.4 0L12 8.3V6.7L6.7 12h1.6Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionForward20Regular = wrapIcon_1.default( /*#__PURE__*/PositionForward20RegularIcon, 'PositionForward20Regular');
const PositionForward24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.25 16.5c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25h-8A3.25 3.25 0 0 0 2 5.25v8c0 1.8 1.46 3.25 3.25 3.25h8Zm-5.75 1H9v1.25c0 .97.78 1.75 1.75 1.75h8c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75H17.5V7.5h1.25c1.8 0 3.25 1.46 3.25 3.25v8c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 0 1-3.25-3.25V17.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionForward24Filled = wrapIcon_1.default( /*#__PURE__*/PositionForward24FilledIcon, 'PositionForward24Filled');
const PositionForward24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.75 22c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H17.5V9h1.25c.97 0 1.75.78 1.75 1.75v8c0 .97-.78 1.75-1.75 1.75h-8c-.97 0-1.75-.78-1.75-1.75V17.5H7.5v1.25c0 1.8 1.46 3.25 3.25 3.25h8Zm-5.5-5.5c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25h-8A3.25 3.25 0 0 0 2 5.25v8c0 1.8 1.46 3.25 3.25 3.25h8ZM15 13.25c0 .97-.78 1.75-1.75 1.75h-.78L15 12.47v.78Zm0-2.78L10.47 15h-2L15 8.47v2ZM6.35 15h-1.1c-.23 0-.45-.04-.65-.13L14.87 4.6c.09.2.13.42.13.65v1.1L6.35 15Zm-2.77-1.23a1.75 1.75 0 0 1-.08-.52v-1.28l8.47-8.47h1.28c.18 0 .36.03.52.08L3.57 13.77ZM3.5 9.85V7.97L7.97 3.5h1.88L3.5 9.85Zm0-4v-.6c0-.97.78-1.75 1.75-1.75h.6L3.5 5.85Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionForward24Regular = wrapIcon_1.default( /*#__PURE__*/PositionForward24RegularIcon, 'PositionForward24Regular');
const PositionToBack20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3ZM5 9h1.3C7.8 9 9 7.8 9 6.3V5h3.5A2.5 2.5 0 0 1 15 7.5V11h-1.3a2.7 2.7 0 0 0-2.7 2.7V15H7.5A2.5 2.5 0 0 1 5 12.5V9ZM1 3c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToBack20Filled = wrapIcon_1.default( /*#__PURE__*/PositionToBack20FilledIcon, 'PositionToBack20Filled');
const PositionToBack20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3ZM5 9v3.5A2.5 2.5 0 0 0 7.5 15H11v-1H9.7l1.67-1.66c.23-.4.57-.74.97-.97L14 9.7V11h1V7.5A2.5 2.5 0 0 0 12.5 5H9v1h1.3L8.62 7.66c-.23.4-.57.74-.97.97L6 10.3V9H5Zm6.7-3h.8c.23 0 .45.05.65.15l-7 7A1.5 1.5 0 0 1 6 12.5v-.8L11.7 6Zm-4.2 8a1.5 1.5 0 0 1-.65-.15l7-7c.1.2.15.42.15.65v.8L8.3 14h-.8ZM1 3c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToBack20Regular = wrapIcon_1.default( /*#__PURE__*/PositionToBack20RegularIcon, 'PositionToBack20Regular');
const PositionToBack24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 11h1.25A3.75 3.75 0 0 0 11 7.25V6h3.75C16.55 6 18 7.46 18 9.25V13h-1.25A3.75 3.75 0 0 0 13 16.75V18H9.25A3.25 3.25 0 0 1 6 14.75V11ZM1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75v3.5A2.75 2.75 0 0 1 7.25 10h-3.5A2.75 2.75 0 0 1 1 7.25v-3.5ZM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM14 16.75A2.75 2.75 0 0 1 16.75 14h3.5A2.75 2.75 0 0 1 23 16.75v3.5A2.75 2.75 0 0 1 20.25 23h-3.5A2.75 2.75 0 0 1 14 20.25v-3.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToBack24Filled = wrapIcon_1.default( /*#__PURE__*/PositionToBack24FilledIcon, 'PositionToBack24Filled');
const PositionToBack24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 16.75A2.75 2.75 0 0 1 16.75 14h3.5A2.75 2.75 0 0 1 23 16.75v3.5A2.75 2.75 0 0 1 20.25 23h-3.5A2.75 2.75 0 0 1 14 20.25v-3.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM6 11v3.75C6 16.55 7.46 18 9.25 18H13v-1.5h-.32l.37-.37a3.75 3.75 0 0 1 3.08-3.08l.37-.37v.33l.25-.01H18V9.25C18 7.45 16.54 6 14.75 6H11v1.5h.56l-.68.68a3.76 3.76 0 0 1-2.7 2.7l-.68.68V11l-.25.01H6Zm7.68-3.5h1.07c.24 0 .47.05.68.14l-7.8 7.79c-.08-.21-.13-.44-.13-.68v-1.07l6.18-6.18Zm-4.43 9c-.17 0-.34-.02-.5-.07l7.68-7.68c.05.16.07.33.07.5v1.31l-5.94 5.94H9.25ZM1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75v3.5A2.75 2.75 0 0 1 7.25 10h-3.5A2.75 2.75 0 0 1 1 7.25v-3.5ZM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToBack24Regular = wrapIcon_1.default( /*#__PURE__*/PositionToBack24RegularIcon, 'PositionToBack24Regular');
const PositionToFront20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v1h-.5c-.17 0-.34.01-.5.04V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.04C4 7.16 4 7.33 4 7.5V8H3a2 2 0 0 1-2-2V3Zm11 13v1c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v.5c0 .17-.01.34-.04.5H17a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.04c-.16.03-.33.04-.5.04H12ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToFront20Filled = wrapIcon_1.default( /*#__PURE__*/PositionToFront20FilledIcon, 'PositionToFront20Filled');
const PositionToFront20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h1v-.5c0-.17.01-.34.04-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.04C7.16 4 7.33 4 7.5 4H8V3a2 2 0 0 0-2-2H3Zm9 16v-1h.5c.17 0 .34-.01.5-.04V17a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1.04c.03-.16.04-.33.04-.5V12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Zm2.28-1.48a1.5 1.5 0 0 0-1.26 1.26l1.26-1.26ZM6 10.29 10.3 6H8.7L6 8.7v1.6ZM11.7 6 6 11.7v.8c0 .23.05.45.15.65l7-7A1.5 1.5 0 0 0 12.5 6h-.8Zm-4.2 8h.8L14 8.3v-.8c0-.23-.05-.45-.15-.65l-7 7c.2.1.42.15.65.15Zm2.2 0h1.6l2.7-2.7V9.7L9.7 14Zm3.02-.02a1.5 1.5 0 0 0 1.26-1.26l-1.26 1.26Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToFront20Regular = wrapIcon_1.default( /*#__PURE__*/PositionToFront20RegularIcon, 'PositionToFront20Regular');
const PositionToFront24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75V5h-.75c-.26 0-.5.02-.75.07V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.32c-.05.24-.07.5-.07.75V10H3.75A2.75 2.75 0 0 1 1 7.25v-3.5ZM14 19v1.25A2.75 2.75 0 0 0 16.75 23h3.5A2.75 2.75 0 0 0 23 20.25v-3.5A2.75 2.75 0 0 0 20.25 14H19v.75c0 .26-.02.5-.07.75h1.32c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.32c-.24.05-.5.07-.75.07H14ZM6 9.25C6 7.45 7.46 6 9.25 6h5.5C16.55 6 18 7.46 18 9.25v5.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 0 1 6 14.75v-5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToFront24Filled = wrapIcon_1.default( /*#__PURE__*/PositionToFront24FilledIcon, 'PositionToFront24Filled');
const PositionToFront24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75V5h-.75c-.26 0-.5.02-.75.07V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.32c-.05.24-.07.5-.07.75V10H3.75A2.75 2.75 0 0 1 1 7.25v-3.5ZM14 19v1.25A2.75 2.75 0 0 0 16.75 23h3.5A2.75 2.75 0 0 0 23 20.25v-3.5A2.75 2.75 0 0 0 20.25 14H19v.75c0 .26-.02.5-.07.75h1.32c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.32c-.24.05-.5.07-.75.07H14ZM9.25 6A3.25 3.25 0 0 0 6 9.25v5.5C6 16.55 7.46 18 9.25 18h5.5c1.8 0 3.25-1.46 3.25-3.25v-5.5C18 7.45 16.54 6 14.75 6h-5.5Zm2.31 1.5L7.5 11.56V9.68L9.68 7.5h1.88ZM7.5 13.68l6.18-6.18h1.07c.24 0 .47.05.68.14l-7.8 7.79c-.08-.21-.13-.44-.13-.68v-1.07Zm1.25 2.75 7.68-7.68c.05.16.07.33.07.5v1.31l-5.94 5.94H9.25c-.17 0-.34-.02-.5-.07Zm5.94.07h-2l3.81-3.82v2.07l-.03-.03-1.78 1.78Z",
    fill: primaryFill
  }));
  ;
};
exports.PositionToFront24Regular = wrapIcon_1.default( /*#__PURE__*/PositionToFront24RegularIcon, 'PositionToFront24Regular');
const Power20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.75 2.5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm3 1.5a.75.75 0 1 0-.76 1.3A6 6 0 1 1 7 5.3.75.75 0 1 0 6.25 4a7.5 7.5 0 1 0 7.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Power20Filled = wrapIcon_1.default( /*#__PURE__*/Power20FilledIcon, 'Power20Filled');
const Power20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6ZM13.74 4a.5.5 0 1 0-.5.87 6.5 6.5 0 1 1-6.49 0 .5.5 0 1 0-.5-.87 7.5 7.5 0 1 0 7.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Power20Regular = wrapIcon_1.default( /*#__PURE__*/Power20RegularIcon, 'Power20Regular');
const Power24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 4.84a1 1 0 0 1 .85 1.82 7 7 0 1 0 5.92 0 1 1 0 0 1 .84-1.8 9 9 0 1 1-7.6-.02ZM12 2a1 1 0 0 1 1 .88V10a1 1 0 0 1-2 .12V3a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.Power24Filled = wrapIcon_1.default( /*#__PURE__*/Power24FilledIcon, 'Power24Filled');
const Power24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 4.82a.75.75 0 0 1 .64 1.36 7.51 7.51 0 1 0 6.34 0 .75.75 0 1 1 .63-1.35 9 9 0 1 1-7.6-.01ZM12 2.5c.38 0 .7.28.74.64v7.6a.75.75 0 0 1-1.48.1l-.01-.1v-7.5c0-.4.33-.74.75-.74Z",
    fill: primaryFill
  }));
  ;
};
exports.Power24Regular = wrapIcon_1.default( /*#__PURE__*/Power24RegularIcon, 'Power24Regular');
const Power28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0V3Zm-4.6 3.75a1 1 0 1 0-.8-1.83 11 11 0 1 0 8.8 0 1 1 0 0 0-.8 1.83 9 9 0 1 1-7.2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Power28Filled = wrapIcon_1.default( /*#__PURE__*/Power28FilledIcon, 'Power28Filled');
const Power28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.69 5.27a.75.75 0 0 1-.4.98 9.5 9.5 0 1 0 7.42 0 .75.75 0 0 1 .58-1.38 11 11 0 1 1-8.58 0c.38-.16.82.02.98.4ZM14 2c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Power28Regular = wrapIcon_1.default( /*#__PURE__*/Power28RegularIcon, 'Power28Regular');
const Predictions20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 1 1 0 1 3.5 3.5 0 0 0-1.82.73A2.77 2.77 0 0 0 15 8.45a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 0 1-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5ZM6.15 12.17l-.94 3.4c-.17.61.08 1.34.74 1.63 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 0 0 .82-1.75l-.98-3.23a6.5 6.5 0 0 1-7.61-.06Zm6.77-9.84c-.04.22-.1.38-.16.5a.97.97 0 0 1-.4.42c-.34.2-.82.23-1.36.23a1.5 1.5 0 1 0 0 2.98c.91 0 1.34.35 1.58.7.3.4.42.95.42 1.3a1.5 1.5 0 0 0 1.61 1.48A5.5 5.5 0 0 1 4.5 6.96a5.48 5.48 0 0 1 8.42-4.63Z",
    fill: primaryFill
  }));
  ;
};
exports.Predictions20Filled = wrapIcon_1.default( /*#__PURE__*/Predictions20FilledIcon, 'Predictions20Filled');
const Predictions20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 1 1 0 1 3.5 3.5 0 0 0-1.82.73A2.77 2.77 0 0 0 15 8.45a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 0 1-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5Zm.04 2.73a2.95 2.95 0 0 1-1.33 1.33 3.53 3.53 0 0 1 1.33 1.48 4.2 4.2 0 0 1 1.52-1.44 3.22 3.22 0 0 1-1.52-1.37Zm-7.26 6.8A4.46 4.46 0 0 1 10 2.5c.9 0 1.74.26 2.44.72a.99.99 0 0 0 .32-.38c.06-.12.12-.28.16-.5A5.5 5.5 0 0 0 4.5 6.96c0 1.67.75 3.16 1.93 4.16l-1.22 4.44c-.17.62.08 1.35.74 1.64 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 0 0 .82-1.75l-1.26-4.17a.49.49 0 0 0-.03-.07c.45-.36.85-.8 1.16-1.28a1.53 1.53 0 0 1-1.01-.3 4.5 4.5 0 0 1-6.32.89Zm5.3 1.26 1.2 3.96c.07.24-.05.46-.23.54a9.36 9.36 0 0 1-7.19 0c-.14-.06-.24-.24-.18-.47l1.12-4.1a5.5 5.5 0 0 0 5.28.07Z",
    fill: primaryFill
  }));
  ;
};
exports.Predictions20Regular = wrapIcon_1.default( /*#__PURE__*/Predictions20RegularIcon, 'Predictions20Regular');
const Predictions24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16.68 14.93 1.29 3.85c.26.8-.08 1.67-.81 2.08-1.37.77-3.1 1.14-5.16 1.14s-3.79-.37-5.16-1.14a1.75 1.75 0 0 1-.8-2.08l1.28-3.85a7.72 7.72 0 0 0 9.36 0ZM12 2c1.34 0 2.58.39 3.63 1.06-.08.31-.2.54-.37.7-.25.26-.68.42-1.32.47l-.22.02h-.38c-2.17.16-2.12 3.5.16 3.5.89 0 1.46.18 1.76.49.26.25.42.68.47 1.32l.02.22v.38c.1 1.32 1.36 1.81 2.34 1.5A6.75 6.75 0 1 1 12 2Zm6.25 0c0 1.15.27 1.96.78 2.47.47.47 1.2.74 2.21.78h.26c.96 0 1 1.38.12 1.5h-.12c-1.15 0-1.96.27-2.47.78-.47.47-.74 1.2-.78 2.21V10c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.47-.47-1.2-.74-2.21-.78h-.26c-.96 0-1-1.38-.12-1.5h.12c1.15 0 1.96-.27 2.47-.78.51-.51.78-1.32.78-2.47 0-1 1.5-1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Predictions24Filled = wrapIcon_1.default( /*#__PURE__*/Predictions24FilledIcon, 'Predictions24Filled');
const Predictions24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2c1.15 0 2.24.29 3.19.8-.08.45-.23.76-.43.96-.1.11-.25.2-.43.28A5.25 5.25 0 1 0 11.77 14L12 14a5.28 5.28 0 0 0 4.38-2.35c.64.22 1.4.08 1.9-.4a6.76 6.76 0 0 1-1.93 2.67l1.62 4.86c.26.8-.08 1.67-.81 2.08-1.37.77-3.1 1.14-5.16 1.14s-3.79-.37-5.16-1.14a1.75 1.75 0 0 1-.8-2.08l1.61-4.86A6.74 6.74 0 0 1 12 2Zm3.06 12.8-.36.14h-.02c-.73.32-1.52.51-2.35.55H12.24l-.24.01h-.33a6.68 6.68 0 0 1-2.35-.55l-.02-.01-.36-.15-1.48 4.46c-.04.12 0 .24.11.3 1.13.63 2.6.95 4.43.95 1.83 0 3.3-.32 4.43-.95.1-.06.15-.18.11-.3l-1.48-4.46Zm-3.37.7H12h-.31Zm6.3-13.62L18 2c0 1.15.27 1.96.78 2.47.47.47 1.2.74 2.21.78h.26c.96 0 1 1.38.12 1.5h-.12c-1.15 0-1.96.27-2.47.78-.47.47-.74 1.2-.78 2.21V10c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.47-.47-1.2-.74-2.21-.78h-.26c-.96 0-1-1.38-.12-1.5h.12c1.15 0 1.96-.27 2.47-.78.51-.51.78-1.32.78-2.47 0-.96 1.38-1 1.5-.12Zm-.74 3.07-.14.2a3.6 3.6 0 0 1-.9.85 3.64 3.64 0 0 1 1.04 1.05A3.64 3.64 0 0 1 18.3 6a3.64 3.64 0 0 1-.9-.84l-.15-.2Z",
    fill: primaryFill
  }));
  ;
};
exports.Predictions24Regular = wrapIcon_1.default( /*#__PURE__*/Predictions24RegularIcon, 'Predictions24Regular');
const Premium12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 1h1.05L3 4H1.2l1.35-2.72A.5.5 0 0 1 3 1ZM1.23 5l3.01 4.69L2.97 5H1.23ZM4 5l1.53 5.65a.48.48 0 0 0 .92 0L8 5H4Zm5.02 0L7.76 9.69 10.77 5H9.03Zm1.78-1H9L7.96 1H9c.19 0 .36.1.45.28L10.8 4ZM7.95 4h-3.9l1.06-3H6.9l1.05 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium12Filled = wrapIcon_1.default( /*#__PURE__*/Premium12FilledIcon, 'Premium12Filled');
const Premium12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.99 1H3a.5.5 0 0 0-.45.28l-1.5 3a.5.5 0 0 0 .05.52l4.5 6a.49.49 0 0 0 .22.16.5.5 0 0 0 .59-.17L10.9 4.8a.5.5 0 0 0 .05-.52l-1.5-3A.5.5 0 0 0 9 1H6.99Zm-.35 1 .67 2H4.69l.67-2h1.28Zm1.72 2-.67-2h1l1 2H8.36ZM7.31 5 6 8.92 4.7 5h2.6Zm.14 2.74L8.36 5H9.5L7.45 7.74Zm-2.9 0L2.5 5h1.14l.91 2.74ZM3.64 4H2.31l1-2h1l-.67 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium12Regular = wrapIcon_1.default( /*#__PURE__*/Premium12RegularIcon, 'Premium12Regular');
const Premium16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2a.75.75 0 0 0-.66.4l-2 3.75a.75.75 0 0 0 .07.81l6.25 8a.75.75 0 0 0 1.18 0l6.25-8a.75.75 0 0 0 .07-.81l-2-3.75a.75.75 0 0 0-.66-.4h-8.5Zm-.88 4L4.2 3.5h1.28L4.85 6H2.87Zm.61 1.5h1.55l1.03 3.3-2.58-3.3Zm3.12 0h2.8L8 11.99 6.6 7.5Zm4.37 0h1.55l-2.58 3.3 1.03-3.3ZM13.13 6h-1.98l-.63-2.5h1.28L13.13 6ZM9.6 6H6.4l.62-2.5h1.96L9.6 6Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium16Filled = wrapIcon_1.default( /*#__PURE__*/Premium16FilledIcon, 'Premium16Filled');
const Premium16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2a.5.5 0 0 0-.45.28l-2 4a.5.5 0 0 0 .06.54l6.5 8a.5.5 0 0 0 .78 0l6.5-8a.5.5 0 0 0 .06-.54l-2-4A.5.5 0 0 0 12.5 2h-9ZM2.3 6l1.5-3h2.06l-.75 3h-2.8Zm.25 1h2.58l1.62 5.16L2.55 7Zm3.63 0h3.64L8 12.82 6.18 7Zm4.69 0h2.58l-4.2 5.16L10.87 7Zm2.82-1h-2.8l-.75-3h2.05l1.5 3ZM9.86 6H6.14l.75-3h2.22l.75 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium16Regular = wrapIcon_1.default( /*#__PURE__*/Premium16RegularIcon, 'Premium16Regular');
const Premium20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2.75a.75.75 0 0 0-.66.39l-2.75 5c-.15.27-.11.6.08.84l7.25 8.75a.75.75 0 0 0 1.16 0l7.25-8.75c.2-.24.23-.57.08-.84l-2.75-5a.75.75 0 0 0-.66-.39h-9ZM4.16 7.5l1.78-3.25h1.5L6.31 7.5H4.16ZM6.14 9l1.93 4.75L4.14 9h2ZM10 14.48 7.76 9h4.39l-2.16 5.48ZM7.89 7.5l1.14-3.25h1.95l1.2 3.25H7.88Zm5.88 0-1.2-3.25h1.49l1.78 3.25h-2.07Zm0 1.5h2.1l-4.01 4.83L13.76 9Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium20Filled = wrapIcon_1.default( /*#__PURE__*/Premium20FilledIcon, 'Premium20Filled');
const Premium20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a.5.5 0 0 0-.43.24l-3 5a.5.5 0 0 0 .05.58l7.5 9a.5.5 0 0 0 .76 0l7.5-9a.5.5 0 0 0 .05-.58l-3-5A.5.5 0 0 0 14.5 3h-9ZM3.38 8l2.4-4h1.98l-1.6 4H3.38Zm2.78 1 2.26 5.83L3.57 9h2.59ZM10 16.12 7.23 9h5.54L10 16.12ZM7.24 8l1.6-4h2.32l1.6 4H7.24Zm6.6 0-1.6-4h1.98l2.4 4h-2.78Zm0 1h2.6l-4.86 5.83L13.84 9Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium20Regular = wrapIcon_1.default( /*#__PURE__*/Premium20RegularIcon, 'Premium20Regular');
const Premium24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 3a1 1 0 0 1 .83.44l.06.11 3 6a1 1 0 0 1-.06 1.01l-.09.1-8.97 9.98a.99.99 0 0 1-.89.35l-.1-.02a.98.98 0 0 1-.54-.32l-8.98-9.98a1 1 0 0 1-.2-1l.05-.12 3-6a1 1 0 0 1 .77-.54L6 3h12Zm-3.42 8H9.42L12 17.34 14.58 11Zm4.17 0h-2.02l-1.66 4.09L18.75 11ZM7.26 11H5.25l3.67 4.09L7.26 11Zm1.36-6h-2l-2 4h2.7l1.3-4Zm4.65 0h-2.54l-1.3 4h5.14l-1.3-4Zm4.11 0h-2l1.3 4h2.7l-2-4Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium24Filled = wrapIcon_1.default( /*#__PURE__*/Premium24FilledIcon, 'Premium24Filled');
const Premium24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 3c.24 0 .46.12.6.3l.06.1 3.26 6.02.04.1.01.03.02.1v.1c0 .07 0 .14-.02.2l-.05.13-.03.06a.76.76 0 0 1-.08.1l.06-.07-.02.03-9.25 10.5a.72.72 0 0 1-.3.24l-.1.03-.08.02L12 21h-.1l-.12-.03a.72.72 0 0 1-.17-.08h-.01a.67.67 0 0 1-.13-.1l-9.3-10.55-.02-.04-.04-.06a.74.74 0 0 1-.1-.3L2 9.75v-.07l.02-.08.02-.1.02-.05.03-.06 3.25-6a.75.75 0 0 1 .56-.38L6 3h12Zm-3 7.5H9l3 7.69 3-7.69Zm-7.61 0H4.4l5.35 6.07-2.37-6.07Zm12.2 0H16.6l-2.37 6.07 5.35-6.07Zm-10.62-6H6.44L4.01 9h3.52l1.44-4.5Zm4.48 0h-2.9L9.1 9h5.79l-1.44-4.5Zm4.1 0h-2.52L16.47 9h3.52l-2.44-4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium24Regular = wrapIcon_1.default( /*#__PURE__*/Premium24RegularIcon, 'Premium24Regular');
const Premium28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.75 3c.3 0 .6.14.78.37l.07.11 4.25 7a1 1 0 0 1-.01 1.06l-.08.1-11 13a1 1 0 0 1-1.44.1l-.08-.1-11-13a1 1 0 0 1-.15-1.05l.06-.1 4.25-7A1 1 0 0 1 7.12 3L7.25 3h13.5Zm-3.23 9h-7.04L14 20.67 17.52 12Zm5.32 0h-3.17l-2.91 7.2 6.08-7.2ZM8.33 12H5.16l6.08 7.2L8.33 12Zm1.34-7H7.81l-3.03 5h3.46l1.43-5Zm6.58 0h-4.5l-1.43 5h7.36l-1.43-5Zm3.94 0h-1.87l1.43 5h3.47L20.2 5Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium28Filled = wrapIcon_1.default( /*#__PURE__*/Premium28FilledIcon, 'Premium28Filled');
const Premium28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.25 3c.24 0 .47.12.6.31l.06.09 4.01 7.51.04.1.01.04.02.08.01.09v.1-.07c0 .1-.02.2-.06.3l-.03.06-.04.06-.05.07L14.6 24.7a.73.73 0 0 1-.38.27l-.06.01-.1.02h-.16l-.08-.02-.1-.04h-.03a.7.7 0 0 1-.25-.19L2.17 11.73l-.06-.1-.05-.08-.03-.1-.03-.13v-.13l.02-.1v-.04l.04-.1.03-.05 4-7.5a.75.75 0 0 1 .56-.4h14.6Zm-3.34 9h-7.82L14 22.16 17.9 12Zm-9.42 0h-4.1l7.37 8.52L8.5 12Zm15.12 0h-4.1l-3.27 8.51L23.61 12ZM10.03 4.5H7.2l-3.2 6h4.42l1.6-6Zm6.4 0h-4.85l-1.6 6h8.04l-1.6-6Zm4.37 0h-2.82l1.6 6H24l-3.2-6Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium28Regular = wrapIcon_1.default( /*#__PURE__*/Premium28RegularIcon, 'Premium28Regular');
const Premium32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4c-.48 0-.92.27-1.13.7l-3.75 7.76c-.2.43-.15.95.16 1.33l12.75 15.75a1.25 1.25 0 0 0 1.94 0l12.75-15.75c.3-.38.37-.9.16-1.33L26.13 4.7C25.92 4.27 25.48 4 25 4H7Zm-1.64 7.5 2.42-5h3.7l-1.57 5H5.36Zm.3 2.5h4.1l2.87 8.6L5.67 14Zm6.74 0h7.2L16 24.8 12.4 14Zm9.83 0h4.1l-6.96 8.6 2.86-8.6Zm4.4-2.5H22.1l-1.56-5h3.69l2.42 5Zm-7.16 0h-6.94l1.56-5h3.82l1.56 5Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium32Filled = wrapIcon_1.default( /*#__PURE__*/Premium32FilledIcon, 'Premium32Filled');
const Premium32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4a1 1 0 0 0-.9.55l-4 8a1 1 0 0 0 .12 1.08l13 16a1 1 0 0 0 1.56 0l13-16a1 1 0 0 0 .11-1.08l-4-8A1 1 0 0 0 25 4H7Zm-2.38 8 3-6h4.1l-1.5 6h-5.6Zm.48 2h5.17l3.22 10.33L5.1 14Zm7.26 0h7.28L16 25.65 12.36 14Zm9.38 0h5.16l-8.4 10.33L21.75 14Zm5.64-2h-5.6l-1.5-6h4.1l3 6Zm-7.66 0h-7.44l1.5-6h4.44l1.5 6Z",
    fill: primaryFill
  }));
  ;
};
exports.Premium32Regular = wrapIcon_1.default( /*#__PURE__*/Premium32RegularIcon, 'Premium32Regular');
const PremiumPerson16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2a.75.75 0 0 0-.66.4l-2 3.75a.75.75 0 0 0 .07.81l4.93 6.32c-.06-.26-.09-.52-.09-.78 0-1 .6-1.87 1.45-2.27L6.6 7.5h.94c.1-.57.35-1.09.72-1.5H6.4l.62-2.5h1.96l.42 1.7a3 3 0 0 1 1.5-.17l-.38-1.53h1.28L13.13 6h-.4a2.99 2.99 0 0 1 .65 2.83l1.46-1.87a.75.75 0 0 0 .07-.81l-2-3.75a.75.75 0 0 0-.66-.4h-8.5Zm-.88 4L4.2 3.5h1.28L4.85 6H2.87Zm.61 1.5h1.55l1.03 3.3-2.58-3.3Zm9.02.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S7 13.75 7 12.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson16Filled = wrapIcon_1.default( /*#__PURE__*/PremiumPerson16FilledIcon, 'PremiumPerson16Filled');
const PremiumPerson16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2a.5.5 0 0 0-.45.28l-2 4a.5.5 0 0 0 .06.54l4.9 6.03a2.5 2.5 0 0 1 .19-1.35L2.56 7h2.58l1.29 4.11c.2-.3.48-.57.8-.76L6.19 7h1.5a3 3 0 0 1 .58-1H6.14l.75-3h2.22l.53 2.12a3 3 0 0 1 1-.12l-.5-2h2.05l1.5 3h-.95a3 3 0 0 1 .59 1h.12l-.09.1a3 3 0 0 1 .08 1.5l1.45-1.78a.5.5 0 0 0 .06-.54l-2-4A.5.5 0 0 0 12.5 2h-9ZM2.3 6l1.5-3h2.06l-.75 3h-2.8Zm10.2 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S7 13.75 7 12.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson16Regular = wrapIcon_1.default( /*#__PURE__*/PremiumPerson16RegularIcon, 'PremiumPerson16Regular');
const PremiumPerson20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2.75a.75.75 0 0 0-.66.39l-2.75 5c-.15.27-.11.6.08.84l7.25 8.75a.75.75 0 0 0 1.16 0l.48-.59a3.27 3.27 0 0 1-.06-.64c0-1.3 1-2.38 2.27-2.49a2.99 2.99 0 0 1 .17-4.19l.32-.82h4.05l.02-.02c.2-.24.23-.57.08-.84l-2.75-5a.75.75 0 0 0-.66-.39h-9ZM4.16 7.5l1.78-3.25h1.5L6.31 7.5H4.16ZM6.14 9l1.93 4.75L4.14 9h2ZM10 14.48 7.76 9h4.39l-2.16 5.48ZM7.89 7.5l1.14-3.25h1.95l1.2 3.25H7.88Zm5.88 0-1.2-3.25h1.49l1.78 3.25h-2.07ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson20Filled = wrapIcon_1.default( /*#__PURE__*/PremiumPerson20FilledIcon, 'PremiumPerson20Filled');
const PremiumPerson20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a.5.5 0 0 0-.43.24l-3 5a.5.5 0 0 0 .05.58l7.49 9a.5.5 0 0 0 .86-.13L13.84 9h3.9l.14-.18a.5.5 0 0 0 .05-.58l-3-5A.5.5 0 0 0 14.5 3h-9Zm7.27 6L10 16.12 7.23 9h5.54ZM3.38 8l2.4-4h1.98l-1.6 4H3.38Zm2.78 1 2.26 5.83L3.57 9h2.59Zm1.08-1 1.6-4h2.32l1.6 4H7.24Zm6.6 0-1.6-4h1.98l2.4 4h-2.78Zm1.66 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson20Regular = wrapIcon_1.default( /*#__PURE__*/PremiumPerson20RegularIcon, 'PremiumPerson20Regular');
const PremiumPerson24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.83 3.44A1 1 0 0 0 18 3H5.88a1 1 0 0 0-.77.55l-3 6-.06.13a1 1 0 0 0 .2.99l8.99 9.98c.14.17.33.28.53.32l.11.02a1 1 0 0 0 .89-.35l.26-.29a3.79 3.79 0 0 1-.03-.48v-.1A2.77 2.77 0 0 1 15.77 17h.28a3.49 3.49 0 0 1 2.45-6c.85 0 1.62.3 2.23.8l1.01-1.13.09-.1a1 1 0 0 0 .06-1.02l-3-6-.06-.1ZM9.43 11h5.15L12 17.34 9.42 11Zm-4.18 0h2.01l1.66 4.09L5.25 11Zm1.37-6h2l-1.3 4h-2.7l2-4Zm4.1 0h2.55l1.3 4H9.43l1.3-4Zm4.66 0h2l2 4h-2.7l-1.3-4ZM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson24Filled = wrapIcon_1.default( /*#__PURE__*/PremiumPerson24FilledIcon, 'PremiumPerson24Filled');
const PremiumPerson24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 3c.24 0 .46.12.6.3l.06.1 3.26 6.02.04.1.01.03.02.1v.1c0 .07 0 .14-.02.2l-.05.13-.03.06a.8.8 0 0 1-.04.06.75.75 0 0 1-.04.05l.02-.03-1.27 1.45c-.43-.31-.92-.53-1.46-.62l.49-.55H16.6L12.7 20.52c-.12.3-.4.48-.7.48h-.1a.74.74 0 0 1-.1-.03h-.02a.72.72 0 0 1-.17-.08h-.01a.67.67 0 0 1-.13-.1l-9.3-10.55-.02-.04-.04-.06a.74.74 0 0 1-.1-.3L2 9.75v-.07l.02-.08.02-.1.02-.05.03-.06 3.25-6a.75.75 0 0 1 .56-.38L6 3h12Zm-3 7.5H9l3 7.69 3-7.69Zm-7.61 0H4.4l5.35 6.07-2.37-6.07Zm1.58-6H6.44L4.01 9h3.52l1.44-4.5Zm4.48 0h-2.9L9.1 9h5.79l-1.44-4.5Zm4.1 0h-2.52L16.47 9h3.52l-2.44-4.5Zm3.45 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z",
    fill: primaryFill
  }));
  ;
};
exports.PremiumPerson24Regular = wrapIcon_1.default( /*#__PURE__*/PremiumPerson24RegularIcon, 'PremiumPerson24Regular');
const PresenceAvailable10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable10Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable10FilledIcon, 'PresenceAvailable10Filled');
const PresenceAvailable10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.1-1.6c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable10RegularIcon, 'PresenceAvailable10Regular');
const PresenceAvailable12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Zm2.53-6.72L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.22-2.22a.75.75 0 0 1 1.06 1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable12Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable12FilledIcon, 'PresenceAvailable12Filled');
const PresenceAvailable12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm7.03-1.78c.3.3.3.77 0 1.06L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.22-2.22c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable12RegularIcon, 'PresenceAvailable12Regular');
const PresenceAvailable16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm3.7-9.3-4 4a1 1 0 0 1-1.41 0l-2-2a1 1 0 1 1 1.42-1.4L7 8.58l3.3-3.3a1 1 0 0 1 1.4 1.42Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable16Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable16FilledIcon, 'PresenceAvailable16Filled');
const PresenceAvailable16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.7 6.7a1 1 0 0 0-1.4-1.4L7 8.58l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable16RegularIcon, 'PresenceAvailable16Regular');
const PresenceAvailable20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4.2-11.8-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 1 1 1.4 1.42Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable20Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable20FilledIcon, 'PresenceAvailable20Filled');
const PresenceAvailable20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm12.2-3.2a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 0 1 1.4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable20RegularIcon, 'PresenceAvailable20Regular');
const PresenceAvailable24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm5.06-13.44-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.94 4.44-4.44a1.5 1.5 0 0 1 2.12 2.12Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable24Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable24FilledIcon, 'PresenceAvailable24Filled');
const PresenceAvailable24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm14.06-3.56a1.5 1.5 0 0 1 0 2.12l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.94 4.44-4.44a1.5 1.5 0 0 1 2.12 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAvailable24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceAvailable24RegularIcon, 'PresenceAvailable24Regular');
const PresenceAway10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-7v1.8l1.35 1.35a.5.5 0 1 1-.7.7l-1.5-1.5A.5.5 0 0 1 4 5V3a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAway10Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAway10FilledIcon, 'PresenceAway10Filled');
const PresenceAway12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Zm.5-8.75v2.4l1.49 1.28A.75.75 0 1 1 7 8.07l-1.75-1.5A.75.75 0 0 1 5 6V3.25a.75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAway12Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAway12FilledIcon, 'PresenceAway12Filled');
const PresenceAway16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.5-11.5v3.02l2.12 1.7a1 1 0 1 1-1.24 1.56l-2.5-2A1 1 0 0 1 6.5 8V4.5a1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAway16Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAway16FilledIcon, 'PresenceAway16Filled');
const PresenceAway20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14V9.6l2.7 2.7a1 1 0 0 1-1.4 1.42l-3-3A1 1 0 0 1 8 10V6a1 1 0 1 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAway20Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAway20FilledIcon, 'PresenceAway20Filled');
const PresenceAway24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm1-17.5v4.81l2.98 2.55a1.5 1.5 0 0 1-1.96 2.28l-3.5-3A1.5 1.5 0 0 1 10 12V6.5a1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceAway24Filled = wrapIcon_1.default( /*#__PURE__*/PresenceAway24FilledIcon, 'PresenceAway24Filled');
const PresenceBlocked10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0ZM9 5a4 4 0 0 1-6.45 3.16l5.61-5.61C8.69 3.22 9 4.08 9 5ZM7.45 1.84 1.84 7.45a4 4 0 0 1 5.61-5.61Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBlocked10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceBlocked10RegularIcon, 'PresenceBlocked10Regular');
const PresenceBlocked12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Zm-1.5 0c0-.97-.3-1.87-.83-2.6L3.39 9.66A4.5 4.5 0 0 0 10.5 6ZM8.6 2.33a4.5 4.5 0 0 0-6.28 6.28l6.29-6.28Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBlocked12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceBlocked12RegularIcon, 'PresenceBlocked12Regular');
const PresenceBlocked16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0c0-1.3-.41-2.5-1.1-3.48L4.51 12.9A6 6 0 0 0 14 8Zm-2.52-4.9a6 6 0 0 0-8.37 8.37l8.37-8.36Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBlocked16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceBlocked16RegularIcon, 'PresenceBlocked16Regular');
const PresenceBlocked20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 10a10 10 0 1 0-20 0 10 10 0 0 0 20 0Zm-2 0a8 8 0 0 1-12.9 6.32L16.31 5.09A7.97 7.97 0 0 1 18 10Zm-3.1-6.32L3.69 14.91A8 8 0 0 1 14.91 3.68Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBlocked20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceBlocked20RegularIcon, 'PresenceBlocked20Regular');
const PresenceBlocked24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-3 0c0-1.94-.62-3.74-1.66-5.21L6.79 19.34A9 9 0 0 0 21 12Zm-3.79-7.34A9 9 0 0 0 4.66 17.21L17.21 4.66Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBlocked24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceBlocked24RegularIcon, 'PresenceBlocked24Regular');
const PresenceBusy10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBusy10Filled = wrapIcon_1.default( /*#__PURE__*/PresenceBusy10FilledIcon, 'PresenceBusy10Filled');
const PresenceBusy12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBusy12Filled = wrapIcon_1.default( /*#__PURE__*/PresenceBusy12FilledIcon, 'PresenceBusy12Filled');
const PresenceBusy16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBusy16Filled = wrapIcon_1.default( /*#__PURE__*/PresenceBusy16FilledIcon, 'PresenceBusy16Filled');
const PresenceBusy20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBusy20Filled = wrapIcon_1.default( /*#__PURE__*/PresenceBusy20FilledIcon, 'PresenceBusy20Filled');
const PresenceBusy24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceBusy24Filled = wrapIcon_1.default( /*#__PURE__*/PresenceBusy24FilledIcon, 'PresenceBusy24Filled');
const PresenceDnd10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd10Filled = wrapIcon_1.default( /*#__PURE__*/PresenceDnd10FilledIcon, 'PresenceDnd10Filled');
const PresenceDnd10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm2 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 3 5Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceDnd10RegularIcon, 'PresenceDnd10Regular');
const PresenceDnd12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12ZM3.75 5.25h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd12Filled = wrapIcon_1.default( /*#__PURE__*/PresenceDnd12FilledIcon, 'PresenceDnd12Filled');
const PresenceDnd12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3 6c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 6Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceDnd12RegularIcon, 'PresenceDnd12Regular');
const PresenceDnd16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5.25 7h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 1 1 0-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd16Filled = wrapIcon_1.default( /*#__PURE__*/PresenceDnd16FilledIcon, 'PresenceDnd16Filled');
const PresenceDnd16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 7a1 1 0 0 0 0 2h5.5a1 1 0 1 0 0-2h-5.5ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceDnd16RegularIcon, 'PresenceDnd16Regular');
const PresenceDnd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd20Filled = wrapIcon_1.default( /*#__PURE__*/PresenceDnd20FilledIcon, 'PresenceDnd20Filled');
const PresenceDnd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4 0a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceDnd20RegularIcon, 'PresenceDnd20Regular');
const PresenceDnd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24ZM7.5 10.5h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd24Filled = wrapIcon_1.default( /*#__PURE__*/PresenceDnd24FilledIcon, 'PresenceDnd24Filled');
const PresenceDnd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm3 0c0-.83.67-1.5 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 6 12Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceDnd24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceDnd24RegularIcon, 'PresenceDnd24Regular');
const PresenceOffline10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 1 1-.7.7L5 5.71 3.85 6.85a.5.5 0 1 1-.7-.7L4.29 5 3.15 3.85a.5.5 0 1 1 .7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOffline10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOffline10RegularIcon, 'PresenceOffline10Regular');
const PresenceOffline12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.03 3.97c.3.3.3.77 0 1.06L7.06 6l.97.97a.75.75 0 0 1-1.06 1.06L6 7.06l-.97.97a.75.75 0 0 1-1.06-1.06L4.94 6l-.97-.97a.75.75 0 0 1 1.06-1.06l.97.97.97-.97c.3-.3.77-.3 1.06 0ZM0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Zm6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOffline12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOffline12RegularIcon, 'PresenceOffline12Regular');
const PresenceOffline16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.7 5.3a1 1 0 0 1 0 1.4L9.42 8l1.3 1.3a1 1 0 0 1-1.42 1.4L8 9.42l-1.3 1.3a1 1 0 0 1-1.4-1.42L6.58 8l-1.3-1.3a1 1 0 0 1 1.42-1.4L8 6.58l1.3-1.3a1 1 0 0 1 1.4 0ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOffline16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOffline16RegularIcon, 'PresenceOffline16Regular');
const PresenceOffline20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.7 6.3a1 1 0 0 1 0 1.4L11.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L10 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L8.58 10l-2.3-2.3a1 1 0 0 1 1.42-1.4L10 8.58l2.3-2.3a1 1 0 0 1 1.4 0ZM0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOffline20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOffline20RegularIcon, 'PresenceOffline20Regular');
const PresenceOffline24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.06 7.94a1.5 1.5 0 0 1 0 2.12L14.12 12l1.94 1.94a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.12L9.88 12l-1.94-1.94a1.5 1.5 0 1 1 2.12-2.12L12 9.88l1.94-1.94a1.5 1.5 0 0 1 2.12 0ZM0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0Zm12-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOffline24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOffline24RegularIcon, 'PresenceOffline24Regular');
const PresenceOof10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.35 3.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7L4.7 5.5h1.8a.5.5 0 1 0 0-1H4.7l.65-.65ZM5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOof10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOof10RegularIcon, 'PresenceOof10Regular');
const PresenceOof12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.28 4.53a.75.75 0 0 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h2.69a.75.75 0 1 0 0-1.5h-2.7l.73-.72ZM6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOof12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOof12RegularIcon, 'PresenceOof12Regular');
const PresenceOof16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 6.2a1 1 0 1 0-1.4-1.4L4.3 7.3a1 1 0 0 0 0 1.4l2.5 2.5a1 1 0 0 0 1.4-1.4L7.42 9H11a1 1 0 1 0 0-2H7.41l.8-.8ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOof16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOof16RegularIcon, 'PresenceOof16Regular');
const PresenceOof20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.7 7.7A1 1 0 1 0 9.28 6.3l-3 3a1 1 0 0 0 0 1.41l3 3a1 1 0 1 0 1.42-1.41l-1.3-1.3H13a1 1 0 1 0 0-2H9.4l1.3-1.29ZM10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOof20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOof20RegularIcon, 'PresenceOof20Regular');
const PresenceOof24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.56 9.06a1.5 1.5 0 0 0-2.12-2.12l-4 4a1.5 1.5 0 0 0 0 2.12l4 4a1.5 1.5 0 0 0 2.12-2.12l-1.44-1.44h5.38a1.5 1.5 0 1 0 0-3h-5.38l1.44-1.44ZM12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceOof24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceOof24RegularIcon, 'PresenceOof24Regular');
const PresenceUnknown10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceUnknown10Regular = wrapIcon_1.default( /*#__PURE__*/PresenceUnknown10RegularIcon, 'PresenceUnknown10Regular');
const PresenceUnknown12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceUnknown12Regular = wrapIcon_1.default( /*#__PURE__*/PresenceUnknown12RegularIcon, 'PresenceUnknown12Regular');
const PresenceUnknown16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceUnknown16Regular = wrapIcon_1.default( /*#__PURE__*/PresenceUnknown16RegularIcon, 'PresenceUnknown16Regular');
const PresenceUnknown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceUnknown20Regular = wrapIcon_1.default( /*#__PURE__*/PresenceUnknown20RegularIcon, 'PresenceUnknown20Regular');
const PresenceUnknown24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenceUnknown24Regular = wrapIcon_1.default( /*#__PURE__*/PresenceUnknown24RegularIcon, 'PresenceUnknown24Regular');
const Presenter20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l3.7-3.56a.5.5 0 0 0-.34-.86H3.49a.5.5 0 0 0-.35.86l3.7 3.56c.1.1.16.23.16.36ZM8.5 7C7.67 7 7 7.67 7 8.5V9h6v-.5c0-.83-.67-1.5-1.5-1.5h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.Presenter20Filled = wrapIcon_1.default( /*#__PURE__*/Presenter20FilledIcon, 'Presenter20Filled');
const Presenter20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM8.5 8a.5.5 0 0 0-.5.5V9H7v-.5C7 7.67 7.67 7 8.5 7h3c.83 0 1.5.67 1.5 1.5V9h-1v-.5a.5.5 0 0 0-.5-.5h-3ZM7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l3.7-3.56a.5.5 0 0 0-.34-.86H3.49a.5.5 0 0 0-.35.86l3.7 3.56c.1.1.16.23.16.36Zm1 1.72v-1.72c0-.4-.17-.8-.46-1.08L4.74 11h10.53l-2.81 2.7c-.3.29-.46.68-.46 1.08v1.72a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Presenter20Regular = wrapIcon_1.default( /*#__PURE__*/Presenter20RegularIcon, 'Presenter20Regular');
const Presenter24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.24 13c.71 0 1.03.89.47 1.33L16 18.11v1.64C16 21 14.99 22 13.75 22h-3.5C9.01 22 8 21 8 19.75v-1.64l-4.72-3.78A.75.75 0 0 1 3.75 13h16.5ZM8.75 9h6.5c.91 0 1.67.7 1.74 1.6V12H7v-1.25c0-.92.7-1.67 1.6-1.74L8.76 9h6.5-6.5ZM12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
    fill: primaryFill
  }));
  ;
};
exports.Presenter24Filled = wrapIcon_1.default( /*#__PURE__*/Presenter24FilledIcon, 'Presenter24Filled');
const Presenter24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.24 13c.71 0 1.03.89.47 1.33L16 18.11v1.64C16 21 14.99 22 13.75 22h-3.5C9.01 22 8 21 8 19.75v-1.64l-4.72-3.78A.75.75 0 0 1 3.75 13h16.5Zm-2.13 1.5H5.89l3.33 2.66c.18.15.28.36.28.59v2c0 .42.34.75.75.75h3.5c.41 0 .75-.33.75-.75v-2c0-.23.1-.44.28-.59l3.33-2.66ZM8.75 9h6.5c.91 0 1.67.7 1.74 1.6V12h-1.5v-1.25a.25.25 0 0 0-.19-.24l-.05-.01h-6.5a.25.25 0 0 0-.24.2l-.01.05V12H7v-1.25c0-.92.7-1.67 1.6-1.74L8.76 9h6.5-6.5ZM12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.Presenter24Regular = wrapIcon_1.default( /*#__PURE__*/Presenter24RegularIcon, 'Presenter24Regular');
const PresenterOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.15 7.85c-.1.2-.15.42-.15.65V9h1.3l1 1H3.5a.5.5 0 0 0-.36.86l3.7 3.56c.1.1.16.23.16.36v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l.29-.27 3.7 3.7a.5.5 0 0 0 .71-.7l-10-10-5-5a.5.5 0 1 0-.7.7l5 5Zm9.7 3.01-1.97 1.9L12.12 10h4.39a.5.5 0 0 1 .35.86ZM13 9h-1.88l-2-2h2.38c.83 0 1.5.67 1.5 1.5V9Zm-3-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenterOff20Filled = wrapIcon_1.default( /*#__PURE__*/PresenterOff20FilledIcon, 'PresenterOff20Filled');
const PresenterOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 8.5c0-.23.05-.45.15-.65l-5-5a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.71-3.7-.29.27a.5.5 0 0 0-.15.36v1.72c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 16.5v-1.72a.5.5 0 0 0-.15-.36l-3.7-3.56a.5.5 0 0 1 .34-.86h5.8l-1-1H7v-.5Zm3.3 2.5H4.72l2.81 2.7c.3.29.46.68.46 1.08v1.72c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-1.72c0-.4.17-.8.46-1.08l.27-.26L10.3 11ZM12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.88 4h1.38c.28 0 .5.22.5.5V9h1v-.5c0-.83-.67-1.5-1.5-1.5H9.12l1 1Zm4.76 4.76-.7-.7L15.26 11h-2.15l-1-1h4.39a.5.5 0 0 1 .35.86l-1.98 1.9Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenterOff20Regular = wrapIcon_1.default( /*#__PURE__*/PresenterOff20RegularIcon, 'PresenterOff20Regular');
const PresenterOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.85 5.86C7.44 9.4 7 10.02 7 10.75V12h3.94l1 1h-8.2c-.7 0-1.01.89-.46 1.33L8 18.11v1.64C8 21 9 22 10.25 22h3.5c1.24 0 2.25-1 2.25-2.25v-1.64l.58-.47 4.14 4.14a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM16.18 13l2.76 2.76 1.77-1.43a.75.75 0 0 0-.47-1.33h-4.06Zm-4-4 3 3H17V10.61C16.92 9.7 16.16 9 15.24 9h-3.06ZM12 8a3 3 0 0 1-.98-.16L9.16 5.98A3 3 0 1 1 12 8Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenterOff24Filled = wrapIcon_1.default( /*#__PURE__*/PresenterOff24FilledIcon, 'PresenterOff24Filled');
const PresenterOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.85 5.86C7.44 9.4 7 10.02 7 10.75V12h1.5v-1.31c.03-.1.13-.19.25-.19h.69l2.5 2.5h-8.2c-.7 0-1.01.89-.46 1.33L8 18.11v1.64C8 21 9 22 10.25 22h3.5c1.24 0 2.25-1 2.25-2.25v-1.64l.58-.47 4.14 4.14a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm12.23 14.35-.73.6a.75.75 0 0 0-.28.58v2c0 .42-.34.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-2c0-.23-.1-.44-.28-.59L5.89 14.5h7.55l2.07 2.07ZM12 8a3 3 0 0 1-.98-.16L9.16 5.98A3 3 0 1 1 12 8Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8.24 9.5h-4.06l2.76 2.76 1.77-1.43a.75.75 0 0 0-.47-1.33Zm-6.56-2.5L12.18 9h3.06c.92 0 1.68.7 1.75 1.6V12h-1.5v-1.25a.25.25 0 0 0-.19-.24l-.06-.01h-1.56Z",
    fill: primaryFill
  }));
  ;
};
exports.PresenterOff24Regular = wrapIcon_1.default( /*#__PURE__*/PresenterOff24RegularIcon, 'PresenterOff24Regular');
const PreviewLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-6ZM3 5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm9 0H4v1h8V5ZM9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9Zm0 1h3v1H9V9Zm-6 1.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM3.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink16Filled = wrapIcon_1.default( /*#__PURE__*/PreviewLink16FilledIcon, 'PreviewLink16Filled');
const PreviewLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2A2.5 2.5 0 0 0 1 4.5v6A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 12.5 2h-9ZM2 4.5C2 3.67 2.67 3 3.5 3h9c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5v-6ZM3 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Zm9 0H4v1h8V5ZM8 9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Zm4 0H9v1h3V9ZM3.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM3 10.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink16Regular = wrapIcon_1.default( /*#__PURE__*/PreviewLink16RegularIcon, 'PreviewLink16Regular');
const PreviewLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2 0v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Zm11 0H5v2h10V7Zm-3 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3Zm0 1h3v1h-3v-1Zm-8-.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink20Filled = wrapIcon_1.default( /*#__PURE__*/PreviewLink20FilledIcon, 'PreviewLink20Filled');
const PreviewLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5ZM4 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm11 0H5v2h10V7Zm-3 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3Zm0 1h3v1h-3v-1Zm-8-.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink20Regular = wrapIcon_1.default( /*#__PURE__*/PreviewLink20RegularIcon, 'PreviewLink20Regular');
const PreviewLink24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5Zm3 1v2c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-2C19 7.56 18.44 7 17.75 7H6.25C5.56 7 5 7.56 5 8.25Zm1.5.25V10h11V8.5h-11Zm7.75 4.5c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25h-3.5Zm.25 2.5v-1h3v1h-3ZM5 13.75c0 .41.34.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Zm.75 1.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink24Filled = wrapIcon_1.default( /*#__PURE__*/PreviewLink24FilledIcon, 'PreviewLink24Filled');
const PreviewLink24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM5.25 5.5c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75H5.25ZM5 8.25C5 7.56 5.56 7 6.25 7h11.5c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H6.25c-.69 0-1.25-.56-1.25-1.25v-2Zm1.5.25V10h11V8.5h-11Zm7.75 4.5c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25h-3.5Zm.25 2.5v-1h3v1h-3ZM5 13.75c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm.75 1.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PreviewLink24Regular = wrapIcon_1.default( /*#__PURE__*/PreviewLink24RegularIcon, 'PreviewLink24Regular');
const Previous16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 3a1 1 0 0 0-1.58-.81l-7 4.96a1 1 0 0 0 0 1.63l7 5.03a1 1 0 0 0 1.58-.8V3ZM2 2.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0v-11Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous16Filled = wrapIcon_1.default( /*#__PURE__*/Previous16FilledIcon, 'Previous16Filled');
const Previous16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 2.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0v-11ZM14 3a1 1 0 0 0-1.58-.81l-7 4.96a1 1 0 0 0 0 1.63l7 5.03a1 1 0 0 0 1.58-.8V3ZM6 7.96 13 3v10L6 7.96Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous16Regular = wrapIcon_1.default( /*#__PURE__*/Previous16RegularIcon, 'Previous16Regular');
const Previous20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 4.25c0-1-1.12-1.6-1.95-1.04l-8.5 5.71c-.73.5-.73 1.57 0 2.07l8.5 5.8c.83.56 1.95-.03 1.95-1.04V4.25ZM3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous20Filled = wrapIcon_1.default( /*#__PURE__*/Previous20FilledIcon, 'Previous20Filled');
const Previous20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Zm14 .75c0-1-1.12-1.6-1.95-1.04l-8.5 5.71c-.73.5-.73 1.57 0 2.07l8.5 5.8c.83.56 1.95-.03 1.95-1.04V4.25Zm-1.39-.2c.17-.12.39 0 .39.2v11.5c0 .2-.22.32-.4.2l-8.49-5.78a.25.25 0 0 1 0-.42l8.5-5.7Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous20Regular = wrapIcon_1.default( /*#__PURE__*/Previous20RegularIcon, 'Previous20Regular');
const Previous24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0V3.75Zm18 1c0-1.4-1.58-2.24-2.74-1.44l-10.5 7.2a1.75 1.75 0 0 0 0 2.87l10.5 7.3c1.15.81 2.74-.02 2.74-1.43V4.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous24Filled = wrapIcon_1.default( /*#__PURE__*/Previous24FilledIcon, 'Previous24Filled');
const Previous24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 4.75c0-1.4-1.58-2.24-2.74-1.44l-10.5 7.2a1.75 1.75 0 0 0 0 2.87l10.5 7.3c1.15.81 2.74-.02 2.74-1.43V4.75Zm-1.9-.2c.17-.12.4 0 .4.2v14.5c0 .2-.23.32-.4.2l-10.5-7.3a.25.25 0 0 1 .01-.41l10.5-7.2ZM3 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0V3.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous24Regular = wrapIcon_1.default( /*#__PURE__*/Previous24RegularIcon, 'Previous24Regular');
const Previous28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM25 5.25a2.25 2.25 0 0 0-3.53-1.84l-12.5 8.68a2.25 2.25 0 0 0-.02 3.68l12.5 8.81A2.25 2.25 0 0 0 25 22.75V5.25Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous28Filled = wrapIcon_1.default( /*#__PURE__*/Previous28FilledIcon, 'Previous28Filled');
const Previous28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM25 5.25a2.25 2.25 0 0 0-3.53-1.84l-12.5 8.68a2.25 2.25 0 0 0-.02 3.68l12.5 8.81A2.25 2.25 0 0 0 25 22.75V5.25Zm-2.68-.61a.75.75 0 0 1 1.18.61v17.5c0 .6-.69.96-1.18.6l-12.5-8.8a.75.75 0 0 1 0-1.23l12.5-8.68Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous28Regular = wrapIcon_1.default( /*#__PURE__*/Previous28RegularIcon, 'Previous28Regular');
const Previous32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0V5Zm22 1.5c0-2-2.23-3.19-3.9-2.07l-14 9.43A2.5 2.5 0 0 0 10.1 18l14 9.56A2.5 2.5 0 0 0 28 25.5v-19Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous32Filled = wrapIcon_1.default( /*#__PURE__*/Previous32FilledIcon, 'Previous32Filled');
const Previous32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0V5Zm22 1.5c0-2-2.23-3.19-3.9-2.07l-14 9.43A2.5 2.5 0 0 0 10.1 18l14 9.56A2.5 2.5 0 0 0 28 25.5v-19Zm-2.78-.41a.5.5 0 0 1 .78.41v19a.5.5 0 0 1-.78.4l-14-9.55a.5.5 0 0 1 0-.83l14-9.43Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous32Regular = wrapIcon_1.default( /*#__PURE__*/Previous32RegularIcon, 'Previous32Regular');
const Previous48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.25 6c.69 0 1.25.56 1.25 1.25v33.5a1.25 1.25 0 1 1-2.5 0V7.25C6 6.56 6.56 6 7.25 6ZM42 9.26a3.25 3.25 0 0 0-5.09-2.68l-21.5 14.74a3.25 3.25 0 0 0 0 5.36l21.5 14.74A3.25 3.25 0 0 0 42 38.74V9.26Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous48Filled = wrapIcon_1.default( /*#__PURE__*/Previous48FilledIcon, 'Previous48Filled');
const Previous48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 7.25a1.25 1.25 0 1 0-2.5 0v33.5a1.25 1.25 0 1 0 2.5 0V7.25Zm33.5 2a3.25 3.25 0 0 0-5.09-2.67l-21.5 14.74a3.25 3.25 0 0 0 0 5.36l21.5 14.74A3.25 3.25 0 0 0 42 38.74V9.26Zm-3.67-.61a.75.75 0 0 1 1.17.62v29.48c0 .6-.68.96-1.17.62l-21.5-14.74a.75.75 0 0 1 0-1.24l21.5-14.74Z",
    fill: primaryFill
  }));
  ;
};
exports.Previous48Regular = wrapIcon_1.default( /*#__PURE__*/Previous48RegularIcon, 'Previous48Regular');
const Print16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2C4.67 2 4 2.67 4 3.5V4H3a2 2 0 0 0-2 2v4.5c0 .83.67 1.5 1.5 1.5H4v.5c0 .83.67 1.5 1.5 1.5h5.1c.83 0 1.5-.67 1.5-1.5V12h1.4c.83 0 1.5-.67 1.5-1.5V6a2 2 0 0 0-2-2h-1v-.5c0-.83-.67-1.5-1.5-1.5h-5ZM11 4H5v-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V4Zm-5.5 6h5.1c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Print16Filled = wrapIcon_1.default( /*#__PURE__*/Print16FilledIcon, 'Print16Filled');
const Print16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5C4 2.67 4.67 2 5.5 2h5c.83 0 1.5.67 1.5 1.5V4h1a2 2 0 0 1 2 2v4.5c0 .83-.67 1.5-1.5 1.5h-1.4v.5c0 .83-.67 1.5-1.5 1.5H5.5A1.5 1.5 0 0 1 4 12.5V12H2.5A1.5 1.5 0 0 1 1 10.5V6c0-1.1.9-2 2-2h1v-.5Zm7 .5v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V4h6ZM4 5H3a1 1 0 0 0-1 1v4.5c0 .28.22.5.5.5H4v-.5C4 9.67 4.67 9 5.5 9h5.1c.83 0 1.5.67 1.5 1.5v.5h1.4a.5.5 0 0 0 .5-.5V6a1 1 0 0 0-1-1H4Zm1.5 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h5.1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Print16Regular = wrapIcon_1.default( /*#__PURE__*/Print16RegularIcon, 'Print16Regular');
const Print20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V5h.5A2.5 2.5 0 0 1 18 7.5v5c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5V14H3.5A1.5 1.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5H5v-.5Zm9 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V5h8v-.5Zm-8 7v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Print20Filled = wrapIcon_1.default( /*#__PURE__*/Print20FilledIcon, 'Print20Filled');
const Print20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V5h.5A2.5 2.5 0 0 1 18 7.5v5c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5V14H3.5A1.5 1.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5H5v-.5ZM6 5h8v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V5Zm-1 8v-1.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V13h1.5a.5.5 0 0 0 .5-.5v-5c0-.83-.67-1.5-1.5-1.5h-11C3.67 6 3 6.67 3 7.5v5c0 .28.22.5.5.5H5Zm1.5-2a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.Print20Regular = wrapIcon_1.default( /*#__PURE__*/Print20RegularIcon, 'Print20Regular');
const Print24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 17.5v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 21 6 20 6 18.75V17.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 7.45 3.46 6 5.25 6H6v-.75C6 4.01 7 3 8.25 3h7.5C17 3 18 4 18 5.25V6h.75C20.55 6 22 7.46 22 9.25v6c0 1.24-1 2.25-2.24 2.25H18Zm-2.25-4h-7.5a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 0 0-.75-.75Zm0-9h-7.5a.75.75 0 0 0-.75.75V6h9v-.75a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Print24Filled = wrapIcon_1.default( /*#__PURE__*/Print24FilledIcon, 'Print24Filled');
const Print24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.75 3C17 3 18 4 18 5.25V6h.75C20.55 6 22 7.46 22 9.25v6c0 1.24-1 2.25-2.24 2.25H18v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 21 6 20 6 18.75V17.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 7.45 3.46 6 5.25 6H6v-.75C6 4.01 7 3 8.25 3h7.5Zm0 10.5h-7.5a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 0 0-.75-.75Zm3-6H5.25c-.97 0-1.75.79-1.75 1.75v6c0 .41.34.75.75.75H6v-1.75C6 13.01 7 12 8.25 12h7.5c1.24 0 2.25 1 2.25 2.25V16h1.78c.4-.01.73-.34.73-.75v-6c0-.96-.8-1.75-1.76-1.75Zm-3-3h-7.5a.75.75 0 0 0-.75.75V6h9v-.75a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Print24Regular = wrapIcon_1.default( /*#__PURE__*/Print24RegularIcon, 'Print24Regular');
const Print28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 5.77V7H6a4 4 0 0 0-4 4v7a3 3 0 0 0 3 3h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-4-4h-1V5.75A2.75 2.75 0 0 0 18.25 3l-8.5.02A2.75 2.75 0 0 0 7 5.77Zm12.5-.02V7h-11V5.77c0-.7.56-1.25 1.25-1.25l8.5-.02c.69 0 1.25.56 1.25 1.25ZM10 15.5h8c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 8.5 22v-5c0-.83.67-1.5 1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Print28Filled = wrapIcon_1.default( /*#__PURE__*/Print28FilledIcon, 'Print28Filled');
const Print28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 5.77V7H6a4 4 0 0 0-4 4v7a3 3 0 0 0 3 3h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-4-4h-1V5.75A2.75 2.75 0 0 0 18.25 3l-8.5.02A2.75 2.75 0 0 0 7 5.77ZM21 19.5V17a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v2.5H5A1.5 1.5 0 0 1 3.5 18v-7A2.5 2.5 0 0 1 6 8.5h16a2.5 2.5 0 0 1 2.5 2.5v7c0 .83-.67 1.5-1.5 1.5h-2ZM19.5 5.75V7h-11V5.77c0-.7.56-1.25 1.25-1.25l8.5-.02c.69 0 1.25.56 1.25 1.25ZM10 15.5h8c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 8.5 22v-5c0-.83.67-1.5 1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Print28Regular = wrapIcon_1.default( /*#__PURE__*/Print28RegularIcon, 'Print28Regular');
const Print32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 6.5V8H7a5 5 0 0 0-5 5v7.5A3.5 3.5 0 0 0 5.5 24H7v1.5a3.5 3.5 0 0 0 3.5 3.5h11a3.5 3.5 0 0 0 3.5-3.5V24h1.5a3.5 3.5 0 0 0 3.5-3.5V13a5 5 0 0 0-5-5h-1V6.5A3.5 3.5 0 0 0 20.5 3h-9A3.5 3.5 0 0 0 8 6.5ZM11.5 5h9c.83 0 1.5.67 1.5 1.5V8H10V6.5c0-.83.67-1.5 1.5-1.5ZM9 19.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 9 25.5v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.Print32Filled = wrapIcon_1.default( /*#__PURE__*/Print32FilledIcon, 'Print32Filled');
const Print32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 6.5V8h1a5 5 0 0 1 5 5v7.5a3.5 3.5 0 0 1-3.5 3.5H25v1.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 7 25.5V24H5.5A3.5 3.5 0 0 1 2 20.5V13a5 5 0 0 1 5-5h1V6.5A3.5 3.5 0 0 1 11.5 3h9A3.5 3.5 0 0 1 24 6.5Zm-14 0V8h12V6.5c0-.83-.67-1.5-1.5-1.5h-9c-.83 0-1.5.67-1.5 1.5Zm-1 19c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5v6ZM25 22h1.5c.83 0 1.5-.67 1.5-1.5V13a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7.5c0 .83.67 1.5 1.5 1.5H7v-2.5a3.5 3.5 0 0 1 3.5-3.5h11a3.5 3.5 0 0 1 3.5 3.5V22Z",
    fill: primaryFill
  }));
  ;
};
exports.Print32Regular = wrapIcon_1.default( /*#__PURE__*/Print32RegularIcon, 'Print32Regular');
const Print48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M31.75 8a3.25 3.25 0 0 1 3.24 3.07l.01.18V14h1.75c2.9 0 5.25 2.35 5.25 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25H35v1.75c0 1.8-1.46 3.25-3.25 3.25h-15.5A3.25 3.25 0 0 1 13 37.75V36H9.25A3.25 3.25 0 0 1 6 32.75v-13.5C6 16.35 8.35 14 11.25 14H13v-2.75a3.25 3.25 0 0 1 3.07-3.24l.18-.01h15.5ZM15.5 37.75c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 0 0-.75-.75h-15.5a.75.75 0 0 0-.75.75v8.5ZM31.75 10.5h-15.5c-.38 0-.7.28-.74.65l-.01.1V14h17v-2.75c0-.38-.28-.7-.65-.74l-.1-.01Z",
    fill: primaryFill
  }));
  ;
};
exports.Print48Filled = wrapIcon_1.default( /*#__PURE__*/Print48FilledIcon, 'Print48Filled');
const Print48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.25 8h15.5a3.25 3.25 0 0 1 3.24 3.07l.01.18V14h1.75c2.9 0 5.25 2.35 5.25 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25H35v1.75c0 1.8-1.46 3.25-3.25 3.25h-15.5A3.25 3.25 0 0 1 13 37.75V36H9.25A3.25 3.25 0 0 1 6 32.75v-13.5C6 16.35 8.35 14 11.25 14H13v-2.75a3.25 3.25 0 0 1 3.07-3.24l.18-.01Zm15.5 20.5h-15.5a.75.75 0 0 0-.75.75v8.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 0 0-.75-.75Zm5-12h-25.5a2.75 2.75 0 0 0-2.75 2.75v13.5c0 .41.34.75.75.75H13v-4.25c0-1.8 1.46-3.25 3.25-3.25h15.5c1.8 0 3.25 1.46 3.25 3.25v4.25h3.75c.41 0 .75-.34.75-.75v-13.5a2.75 2.75 0 0 0-2.75-2.75Zm-5-6h-15.5c-.38 0-.7.28-.74.65l-.01.1V14h17v-2.75c0-.38-.28-.7-.65-.74l-.1-.01Z",
    fill: primaryFill
  }));
  ;
};
exports.Print48Regular = wrapIcon_1.default( /*#__PURE__*/Print48RegularIcon, 'Print48Regular');
const PrintAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5V15H3.5A1.5 1.5 0 0 1 2 13.5v-5A2.5 2.5 0 0 1 4.5 6H5v-.5C5 4.67 5.67 4 6.5 4h2.7c-.08.32-.15.66-.18 1H6.5a.5.5 0 0 0-.5.5V6h3.02c.26 2.8 2.61 5 5.48 5ZM6 12.5v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PrintAdd20Filled = wrapIcon_1.default( /*#__PURE__*/PrintAdd20FilledIcon, 'PrintAdd20Filled');
const PrintAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm2 10v-3.1c.36-.18.7-.4 1-.66v3.76c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5V15H3.5A1.5 1.5 0 0 1 2 13.5v-5A2.5 2.5 0 0 1 4.5 6H5v-.5C5 4.67 5.67 4 6.5 4h2.7c-.08.32-.15.66-.18 1H6.5a.5.5 0 0 0-.5.5V6h3.02c.03.34.1.68.19 1H4.5C3.67 7 3 7.67 3 8.5v5c0 .28.22.5.5.5H5v-1.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V14h1.5a.5.5 0 0 0 .5-.5ZM6.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.PrintAdd20Regular = wrapIcon_1.default( /*#__PURE__*/PrintAdd20RegularIcon, 'PrintAdd20Regular');
const PrintAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM18 7v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H18Zm-.5 6c1.75 0 3.34-.7 4.5-1.81v5.06c0 1.24-1 2.25-2.24 2.25H18v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V18.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 8.45 3.46 7 5.25 7H6v-.75C6 5.01 7 4 8.25 4h3.25c-.2.47-.34.98-.42 1.5H8.25a.75.75 0 0 0-.75.75V7h3.52a6.5 6.5 0 0 0 6.48 6Zm-1 2.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PrintAdd24Filled = wrapIcon_1.default( /*#__PURE__*/PrintAdd24FilledIcon, 'PrintAdd24Filled');
const PrintAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM18 7v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H18Zm2.5 9.25v-3.98a6.52 6.52 0 0 0 1.5-1.08v5.06c0 1.24-1 2.25-2.24 2.25H18v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V18.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 8.45 3.46 7 5.25 7H6v-.75C6 5.01 7 4 8.25 4h3.25c-.2.47-.34.98-.42 1.5H8.25a.75.75 0 0 0-.75.75V7h3.52c.04.52.14 1.03.3 1.5H5.24c-.97 0-1.75.79-1.75 1.75v6c0 .41.34.75.75.75H6v-1.75C6 14.01 7 13 8.25 13h7.5c1.24 0 2.25 1 2.25 2.25V17h1.78c.4-.01.73-.34.73-.75Zm-4-1a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PrintAdd24Regular = wrapIcon_1.default( /*#__PURE__*/PrintAdd24RegularIcon, 'PrintAdd24Regular');
const Production20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM2 12a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4Zm5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Production20Filled = wrapIcon_1.default( /*#__PURE__*/Production20FilledIcon, 'Production20Filled');
const Production20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2Zm-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 12a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4Zm4-3a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6H6Z",
    fill: primaryFill
  }));
  ;
};
exports.Production20Regular = wrapIcon_1.default( /*#__PURE__*/Production20RegularIcon, 'Production20Regular');
const Production24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 5.25c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75v-2.5ZM15.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5ZM15 5.25c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-2.5a.25.25 0 0 1-.25-.25v-2.5ZM2 16a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 16Zm6.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Production24Filled = wrapIcon_1.default( /*#__PURE__*/Production24FilledIcon, 'Production24Filled');
const Production24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5Zm7.25 1.75c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75v-2.5ZM15.25 5a.25.25 0 0 0-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5ZM7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2 16a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 16Zm4.5-3a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6h-11Z",
    fill: primaryFill
  }));
  ;
};
exports.Production24Regular = wrapIcon_1.default( /*#__PURE__*/Production24RegularIcon, 'Production24Regular');
const ProductionCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM6 8a4 4 0 1 0 0 8h3.2a5.5 5.5 0 0 1 .1-3.29A1 1 0 0 1 10 11a1 1 0 0 1 .23.03 5.49 5.49 0 0 1 7.1-1.25A4 4 0 0 0 14 8H6Zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ProductionCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/ProductionCheckmark20FilledIcon, 'ProductionCheckmark20Filled');
const ProductionCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM2 12a4 4 0 0 1 4-4h8a4 4 0 0 1 3.33 1.78A5.47 5.47 0 0 0 14 9H6a3 3 0 1 0 0 6h3.02c.03.34.1.68.19 1H6a4 4 0 0 1-4-4Zm8-1a1 1 0 0 1 .23.03 5.5 5.5 0 0 0-.93 1.68A1 1 0 0 1 10 11Zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ProductionCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/ProductionCheckmark20RegularIcon, 'ProductionCheckmark20Regular');
const ProductionCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5Zm7.25 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5c-.97 0-1.75.78-1.75 1.75ZM15.25 5h2.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-2.5a.25.25 0 0 1-.25-.25v-2.5c0-.14.11-.25.25-.25ZM6.5 11.5a4.5 4.5 0 1 0 0 9h5.23a6.47 6.47 0 0 1-.72-3.37 1.5 1.5 0 0 1 .7-2.6A6.53 6.53 0 0 1 15 11.5H6.5Zm.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm16 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ProductionCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/ProductionCheckmark24FilledIcon, 'ProductionCheckmark24Filled');
const ProductionCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5Zm7.25 1.75c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75v-2.5ZM15.25 5a.25.25 0 0 0-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5ZM7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6.5 13h6.31A6.51 6.51 0 0 1 15 11.5H6.5a4.5 4.5 0 1 0 0 9h5.23a6.46 6.46 0 0 1-.56-1.5H6.5a3 3 0 1 1 0-6Zm4 3c0 .45.2.85.51 1.13.05-.94.3-1.82.7-2.6A1.5 1.5 0 0 0 10.5 16ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ProductionCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/ProductionCheckmark24RegularIcon, 'ProductionCheckmark24Regular');
const Prohibited12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0ZM9.5 6c0-.7-.2-1.34-.55-1.89L4.1 8.95A3.5 3.5 0 0 0 9.5 6ZM7.89 3.05A3.5 3.5 0 0 0 3.05 7.9L7.9 3.05Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited12Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited12FilledIcon, 'Prohibited12Filled');
const Prohibited12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1ZM2 6a4 4 0 0 1 6.45-3.16L2.84 8.45A3.98 3.98 0 0 1 2 6Zm1.55 3.16 5.61-5.61a4 4 0 0 1-5.61 5.61Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited12Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited12RegularIcon, 'Prohibited12Regular');
const Prohibited16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.5a4.5 4.5 0 0 0-3.67 7.1l6.28-6.27A4.48 4.48 0 0 0 8 3.5Zm3.67 1.9-6.28 6.27a4.5 4.5 0 0 0 6.28-6.28ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited16Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited16FilledIcon, 'Prohibited16Filled');
const Prohibited16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a5 5 0 0 0-3.87 8.16l7.03-7.03A4.98 4.98 0 0 0 8 3Zm3.87 1.84-7.03 7.03a5 5 0 0 0 7.04-7.04ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited16Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited16RegularIcon, 'Prohibited16Regular');
const Prohibited20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0c0-1.52-.53-2.93-1.4-4.04L5.96 15.1A6.5 6.5 0 0 0 16.5 10ZM4.9 14.04l9.14-9.14a6.5 6.5 0 0 0-9.13 9.13Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited20Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited20FilledIcon, 'Prohibited20Filled');
const Prohibited20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1 0c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A7 7 0 0 0 17 10ZM4.7 14.58l9.88-9.87a7 7 0 0 0-9.87 9.87Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited20Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited20RegularIcon, 'Prohibited20Regular');
const Prohibited24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm6.11 5.65L7.65 18.11A7.5 7.5 0 0 0 18.11 7.65ZM12 4.5a7.5 7.5 0 0 0-6.11 11.85L16.35 5.89A7.47 7.47 0 0 0 12 4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited24Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited24FilledIcon, 'Prohibited24Filled');
const Prohibited24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm6.52 4.54L6.54 18.52A8.5 8.5 0 0 0 18.51 6.55ZM12 3.5a8.5 8.5 0 0 0-6.52 13.96L17.46 5.48A8.47 8.47 0 0 0 12 3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited24Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited24RegularIcon, 'Prohibited24Regular');
const Prohibited28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm7.54 6.22L8.22 21.54A9.5 9.5 0 0 0 21.54 8.22ZM14 4.5a9.5 9.5 0 0 0-7.54 15.28L19.78 6.46A9.46 9.46 0 0 0 14 4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited28Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited28FilledIcon, 'Prohibited28Filled');
const Prohibited28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm7.94 5.12L7.12 21.94A10.5 10.5 0 0 0 21.93 7.13ZM14 3.5a10.5 10.5 0 0 0-7.94 17.38L20.88 6.06A10.46 10.46 0 0 0 14 3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited28Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited28RegularIcon, 'Prohibited28Regular');
const Prohibited48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 5c5.12 0 9.76 2.02 13.18 5.31a2 2 0 0 1 .5.51A19 19 0 1 1 24 5Zm11.93 9.9L14.9 35.93A15 15 0 0 0 36.15 15.2l-.22-.3ZM24 9a15 15 0 0 0-11.93 24.1L33.1 12.07A14.93 14.93 0 0 0 24 9Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited48Filled = wrapIcon_1.default( /*#__PURE__*/Prohibited48FilledIcon, 'Prohibited48Filled');
const Prohibited48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 5a19 19 0 1 1 0 38 19 19 0 0 1 0-38Zm12.52 8.25L13.25 36.52a16.5 16.5 0 0 0 23.27-23.27ZM24 7.5a16.5 16.5 0 0 0-12.52 27.25l23.27-23.27A16.44 16.44 0 0 0 24 7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Prohibited48Regular = wrapIcon_1.default( /*#__PURE__*/Prohibited48RegularIcon, 'Prohibited48Regular');
const ProhibitedMultiple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10Zm0-1.5c-.7 0-1.34-.2-1.89-.55L9.95 5.1A3.5 3.5 0 0 1 7 10.5Zm1.89-6.45L4.05 8.9A3.5 3.5 0 0 1 8.9 4.05ZM13 7a6 6 0 0 1-7.14 5.9 5 5 0 0 0 7.03-7.03c.07.36.11.74.11 1.13Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple16Filled = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple16FilledIcon, 'ProhibitedMultiple16Filled');
const ProhibitedMultiple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10Zm0-1c-.92 0-1.78-.31-2.45-.84l5.61-5.61A4 4 0 0 1 7 11Zm2.45-7.16L3.84 9.45a4 4 0 0 1 5.61-5.61ZM13 7c0 .38-.03.75-.1 1.1a4.01 4.01 0 0 1-4.8 4.8 6.03 6.03 0 0 1-2.24 0 5 5 0 0 0 7.03-7.03c.07.36.11.74.11 1.13Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple16Regular = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple16RegularIcon, 'ProhibitedMultiple16Regular');
const ProhibitedMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 2a7 7 0 1 1 0 14A7 7 0 0 1 9 2Zm3.32 2.62a5.5 5.5 0 0 0-7.7 7.7l7.7-7.7Zm1.06 1.06-7.7 7.7a5.5 5.5 0 0 0 7.7-7.7ZM9 17a8 8 0 0 0 7.75-10 7 7 0 0 1-9.74 9.74c.63.17 1.3.26 1.99.26Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple20FilledIcon, 'ProhibitedMultiple20Filled');
const ProhibitedMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9a7 7 0 1 1 14 0A7 7 0 0 1 2 9Zm7-6a6 6 0 0 0-4.58 9.87l8.45-8.45A5.98 5.98 0 0 0 9 3Zm0 12a6 6 0 0 0 4.58-9.87l-8.45 8.45A5.98 5.98 0 0 0 9 15Zm2 3a6.97 6.97 0 0 1-4-1.25 8.01 8.01 0 0 0 3.07.18 6 6 0 0 0 6.86-6.86 8.07 8.07 0 0 0-.18-3.06A7 7 0 0 1 11 18Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple20RegularIcon, 'ProhibitedMultiple20Regular');
const ProhibitedMultiple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.75 19.5a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Zm0-2c-1.5 0-2.9-.5-4.01-1.32l9.44-9.44a6.75 6.75 0 0 1-5.43 10.76Zm4.01-12.18-9.44 9.44a6.75 6.75 0 0 1 9.44-9.44Zm5.74 5.43a9.75 9.75 0 0 1-12.8 9.26A8.75 8.75 0 0 0 20.02 7.7c.3.97.48 2 .48 3.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple24Filled = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple24FilledIcon, 'ProhibitedMultiple24Filled');
const ProhibitedMultiple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10.75a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Zm8.75-7.25a7.25 7.25 0 0 0-5.63 11.82l10.2-10.2a7.22 7.22 0 0 0-4.57-1.62Zm0 14.5a7.25 7.25 0 0 0 5.63-11.82l-10.2 10.2A7.22 7.22 0 0 0 10.75 18Zm2.5 4c-2.1 0-4.04-.75-5.55-1.99a9.74 9.74 0 0 0 4.4.4 7.25 7.25 0 0 0 8.32-8.31 9.84 9.84 0 0 0-.4-4.4A8.75 8.75 0 0 1 13.25 22Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedMultiple24Regular = wrapIcon_1.default( /*#__PURE__*/ProhibitedMultiple24RegularIcon, 'ProhibitedMultiple24Regular');
const ProhibitedNote20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10.17A8.02 8.02 0 0 0 10 2a8 8 0 0 0-.84 15.96A3 3 0 0 1 9 17v-.58a6.47 6.47 0 0 1-3.04-1.32l1.57-1.57 7.57-7.57A6.47 6.47 0 0 1 16.5 10h.5a3 3 0 0 1 1 .17ZM14.04 4.9 4.9 14.04a6.5 6.5 0 0 1 9.13-9.13ZM10 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedNote20Filled = wrapIcon_1.default( /*#__PURE__*/ProhibitedNote20FilledIcon, 'ProhibitedNote20Filled');
const ProhibitedNote20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10v.17a3 3 0 0 0-1-.17c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A6.97 6.97 0 0 0 9 16.93V17a3 3 0 0 0 .16.96A8 8 0 1 1 18 10ZM4.7 14.58l9.88-9.87a7 7 0 0 0-9.87 9.87ZM12 11a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-5Zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1Zm-.5-2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ProhibitedNote20Regular = wrapIcon_1.default( /*#__PURE__*/ProhibitedNote20RegularIcon, 'ProhibitedNote20Regular');
const ProjectionScreen16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2a1 1 0 0 0 0 2v4.5A2.5 2.5 0 0 0 5.5 11h2v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2h2A2.5 2.5 0 0 0 13 8.5V4a1 1 0 1 0 0-2H3Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen16Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen16FilledIcon, 'ProjectionScreen16Filled');
const ProjectionScreen16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2a1 1 0 0 0 0 2v4.5A2.5 2.5 0 0 0 5.5 11h2v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2h2A2.5 2.5 0 0 0 13 8.5V4a1 1 0 1 0 0-2H3Zm1 2h8v4.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 4 8.5V4Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen16Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen16RegularIcon, 'ProjectionScreen16Regular');
const ProjectionScreen20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3a1 1 0 0 0 0 2v6a3 3 0 0 0 3 3h3.5v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2H14a3 3 0 0 0 3-3V5a1 1 0 1 0 0-2H3Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen20Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen20FilledIcon, 'ProjectionScreen20Filled');
const ProjectionScreen20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3a1 1 0 0 0 0 2v6a3 3 0 0 0 3 3h3.5v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2H14a3 3 0 0 0 3-3V5a1 1 0 1 0 0-2H3Zm1 2h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen20Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen20RegularIcon, 'ProjectionScreen20Regular');
const ProjectionScreen24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3A1.5 1.5 0 0 0 3 5.91v7.34A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.91A1.5 1.5 0 0 0 20.5 3h-17Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen24Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen24FilledIcon, 'ProjectionScreen24Filled');
const ProjectionScreen24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3A1.5 1.5 0 0 0 3 5.91v7.34A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.91A1.5 1.5 0 0 0 20.5 3h-17Zm1 3h15v7.25c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25V6Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen24Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen24RegularIcon, 'ProjectionScreen24Regular');
const ProjectionScreen28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3a2 2 0 0 0-1 3.73v9.52c0 2.35 1.9 4.25 4.25 4.25h6v3h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-3h6c2.35 0 4.25-1.9 4.25-4.25V6.73A2 2 0 0 0 24 3H4Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen28Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen28FilledIcon, 'ProjectionScreen28Filled');
const ProjectionScreen28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3a2 2 0 0 0-1 3.73v9.52c0 2.35 1.9 4.25 4.25 4.25h6v3h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-3h6c2.35 0 4.25-1.9 4.25-4.25V6.73A2 2 0 0 0 24 3H4Zm.5 4h19v9.25A2.75 2.75 0 0 1 20.75 19H7.25a2.75 2.75 0 0 1-2.75-2.75V7Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreen28Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreen28RegularIcon, 'ProjectionScreen28Regular');
const ProjectionScreenDismiss16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 4.79 9.35 3.65a.5.5 0 1 0-.7.7L9.79 5.5 8.65 6.65a.5.5 0 1 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L11.21 5.5l1.14-1.15ZM10.5 11c.37 0 .73-.04 1.07-.1A2.5 2.5 0 0 1 9.5 12h-2v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2h-2A2.5 2.5 0 0 1 2 9.5V5a1 1 0 0 1 0-2h3.6a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss16Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss16FilledIcon, 'ProjectionScreenDismiss16Filled');
const ProjectionScreenDismiss16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 4.79 9.35 3.65a.5.5 0 1 0-.7.7L9.79 5.5 8.65 6.65a.5.5 0 1 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L11.21 5.5l1.14-1.15ZM10.5 11c.37 0 .73-.04 1.07-.1A2.5 2.5 0 0 1 9.5 12h-2v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2h-2A2.5 2.5 0 0 1 2 9.5V5a1 1 0 0 1 0-2h3.6a5.46 5.46 0 0 0-.58 2H3v4.5c0 .83.67 1.5 1.5 1.5h5c.12 0 .23-.01.34-.04.22.03.44.04.66.04Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss16Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss16RegularIcon, 'ProjectionScreenDismiss16Regular');
const ProjectionScreenDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM14.5 11c.9 0 1.75-.22 2.5-.6v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss20FilledIcon, 'ProjectionScreenDismiss20Filled');
const ProjectionScreenDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM16 11v-.2c.35-.1.68-.24 1-.4v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.47 5.47 0 0 0-.58 2H4v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss20RegularIcon, 'ProjectionScreenDismiss20Regular');
const ProjectionScreenDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7L18.21 6.5l1.64-1.65a.5.5 0 0 0-.7-.7L17.5 5.79l-1.65-1.64ZM17.5 13c1.29 0 2.49-.38 3.5-1.02v1.27A3.75 3.75 0 0 1 17.25 17h-4.5v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V17h-4.5A3.75 3.75 0 0 1 3 13.25V5.91A1.5 1.5 0 0 1 3.5 3h8.52a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss24FilledIcon, 'ProjectionScreenDismiss24Filled');
const ProjectionScreenDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7L18.21 6.5l1.64-1.65a.5.5 0 0 0-.7-.7L17.5 5.79l-1.65-1.64Zm3.65 9.1v-.56a6.47 6.47 0 0 0 1.5-.71v1.27A3.75 3.75 0 0 1 17.25 17h-4.5v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V17h-4.5A3.75 3.75 0 0 1 3 13.25V5.91A1.5 1.5 0 0 1 3.5 3h8.52c-.56.88-.92 1.9-1 3H4.5v7.25c0 1.24 1 2.25 2.25 2.25h10.5c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss24RegularIcon, 'ProjectionScreenDismiss24Regular');
const ProjectionScreenDismiss28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7L21.21 7.5l2.64-2.65a.5.5 0 0 0-.7-.7L20.5 6.79l-2.65-2.64ZM20.5 15c1.69 0 3.25-.56 4.5-1.5v2.75c0 2.35-1.9 4.25-4.25 4.25h-6v3h4.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h4.5v-3h-6A4.25 4.25 0 0 1 3 16.25V6.73A2 2 0 0 1 4 3h10.5a7.5 7.5 0 0 0 6 12Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss28Filled = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss28FilledIcon, 'ProjectionScreenDismiss28Filled');
const ProjectionScreenDismiss28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7L21.21 7.5l2.64-2.65a.5.5 0 0 0-.7-.7L20.5 6.79l-2.65-2.64Zm5.65 12.1v-1.87a7.49 7.49 0 0 0 1.5-.88v2.75c0 2.35-1.9 4.25-4.25 4.25h-6v3h4.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h4.5v-3h-6A4.25 4.25 0 0 1 3 16.25V6.73A2 2 0 0 1 4 3h10.5a7.46 7.46 0 0 0-1.48 4H4.5v9.25A2.75 2.75 0 0 0 7.25 19h13.5a2.75 2.75 0 0 0 2.75-2.75Z",
    fill: primaryFill
  }));
  ;
};
exports.ProjectionScreenDismiss28Regular = wrapIcon_1.default( /*#__PURE__*/ProjectionScreenDismiss28RegularIcon, 'ProjectionScreenDismiss28Regular');
const ProtocolHandler16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.59 4.41 1.4 6.6a2 2 0 0 0 0 2.82L3.6 11.6a2 2 0 0 0 2.82 0L8.6 9.4a2 2 0 0 0 0-2.82L6.4 4.4a2 2 0 0 0-2.82 0Zm6 7.18-.88-.88.58-.59a3 3 0 0 0 0-4.24l-.58-.59.88-.88a2 2 0 0 1 2.82 0L14.6 6.6a2 2 0 0 1 0 2.82L12.4 11.6a2 2 0 0 1-2.82 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler16Filled = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler16FilledIcon, 'ProtocolHandler16Filled');
const ProtocolHandler16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.59 4.41 1.4 6.6a2 2 0 0 0 0 2.82L3.6 11.6a2 2 0 0 0 2.82 0L8.6 9.4a2 2 0 0 0 0-2.82L6.4 4.4a2 2 0 0 0-2.82 0ZM2.12 7.3 4.3 5.12a1 1 0 0 1 1.42 0L7.88 7.3a1 1 0 0 1 0 1.42L5.7 10.88a1 1 0 0 1-1.42 0L2.12 8.7a1 1 0 0 1 0-1.42Zm7.47 4.3-.88-.88.58-.59.12-.12.88.88a1 1 0 0 0 1.42 0l2.17-2.17a1 1 0 0 0 0-1.42L11.7 5.12a1 1 0 0 0-1.42 0L9.41 6a3.05 3.05 0 0 0-.12-.12l-.58-.59.88-.88a2 2 0 0 1 2.82 0L14.6 6.6a2 2 0 0 1 0 2.82L12.4 11.6a2 2 0 0 1-2.82 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler16Regular = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler16RegularIcon, 'ProtocolHandler16Regular');
const ProtocolHandler20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.59 5.41 2.4 8.6a2 2 0 0 0 0 2.82L5.6 14.6a2 2 0 0 0 2.82 0l3.18-3.18a2 2 0 0 0 0-2.82L8.4 5.4a2 2 0 0 0-2.82 0Zm6 9.18-.88-.88 1.58-1.59a3 3 0 0 0 0-4.24l-1.58-1.59.88-.88a2 2 0 0 1 2.82 0L17.6 8.6a2 2 0 0 1 0 2.82L14.4 14.6a2 2 0 0 1-2.82 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler20Filled = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler20FilledIcon, 'ProtocolHandler20Filled');
const ProtocolHandler20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.59 5.41 2.4 8.6a2 2 0 0 0 0 2.82L5.6 14.6a2 2 0 0 0 2.82 0l3.18-3.18a2 2 0 0 0 0-2.82L8.4 5.4a2 2 0 0 0-2.82 0ZM3.12 9.3 6.3 6.12a1 1 0 0 1 1.42 0l3.17 3.17a1 1 0 0 1 0 1.42L7.7 13.88a1 1 0 0 1-1.42 0L3.12 10.7a1 1 0 0 1 0-1.42Zm8.47 5.3-.88-.88.7-.71.88.88a1 1 0 0 0 1.42 0l3.17-3.17a1 1 0 0 0 0-1.42L13.7 6.12a1 1 0 0 0-1.42 0l-.88.88-.7-.7.88-.89a2 2 0 0 1 2.82 0L17.6 8.6a2 2 0 0 1 0 2.82L14.4 14.6a2 2 0 0 1-2.82 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler20Regular = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler20RegularIcon, 'ProtocolHandler20Regular');
const ProtocolHandler24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m13.48 17.73-.77-.77 2.48-2.49a3.5 3.5 0 0 0 0-4.95L12.7 7.04l.77-.77a2.5 2.5 0 0 1 3.54 0l3.96 3.96a2.5 2.5 0 0 1 0 3.54l-3.96 3.96a2.5 2.5 0 0 1-3.54 0Zm1-3.96a2.5 2.5 0 0 0 0-3.54l-3.96-3.96a2.5 2.5 0 0 0-3.54 0l-3.96 3.96a2.5 2.5 0 0 0 0 3.54l3.96 3.96a2.5 2.5 0 0 0 3.54 0l3.96-3.96Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler24Filled = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler24FilledIcon, 'ProtocolHandler24Filled');
const ProtocolHandler24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m13.73 17.73-1.02-1.02 1.06-1.06 1.02 1.02a1 1 0 0 0 1.42 0l3.96-3.96a1 1 0 0 0 0-1.42l-3.96-3.96a1 1 0 0 0-1.42 0l-1.02 1.02L12.7 7.3l1.02-1.02a2.5 2.5 0 0 1 3.54 0l3.96 3.96a2.5 2.5 0 0 1 0 3.54l-3.96 3.96a2.5 2.5 0 0 1-3.54 0Zm-7-11.46-3.96 3.96a2.5 2.5 0 0 0 0 3.54l3.96 3.96a2.5 2.5 0 0 0 3.54 0l3.96-3.96a2.5 2.5 0 0 0 0-3.54l-3.96-3.96a2.5 2.5 0 0 0-3.54 0Zm-2.9 5.02 3.96-3.96a1 1 0 0 1 1.42 0l3.96 3.96a1 1 0 0 1 0 1.42l-3.96 3.96a1 1 0 0 1-1.42 0l-3.96-3.96a1 1 0 0 1 0-1.42Z",
    fill: primaryFill
  }));
  ;
};
exports.ProtocolHandler24Regular = wrapIcon_1.default( /*#__PURE__*/ProtocolHandler24RegularIcon, 'ProtocolHandler24Regular');
const Pulse20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.01 3c.33 0 .62.23.71.55l2.82 10.07 2.24-7.1a.75.75 0 0 1 1.4-.07L15.5 9.5h1.76a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.69-.45l-.7-1.65-2.4 7.58a.75.75 0 0 1-1.43-.03L6.97 6.41l-1.25 4.06A.75.75 0 0 1 5 11H2.75a.75.75 0 0 1 0-1.5h1.7l1.83-5.97c.1-.32.4-.53.73-.53Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse20Filled = wrapIcon_1.default( /*#__PURE__*/Pulse20FilledIcon, 'Pulse20Filled');
const Pulse20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3a.5.5 0 0 1 .48.37l3.05 11.3 2.5-8.31a.5.5 0 0 1 .94-.04L15.35 10h2.15a.5.5 0 0 1 0 1H15a.5.5 0 0 1-.47-.32l-.98-2.62-2.57 8.58a.5.5 0 0 1-.96-.01L6.99 5.37l-1.5 5.27A.5.5 0 0 1 5 11H2.5a.5.5 0 0 1 0-1h2.12l1.9-6.64A.5.5 0 0 1 7 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse20Regular = wrapIcon_1.default( /*#__PURE__*/Pulse20RegularIcon, 'Pulse20Regular');
const Pulse24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.47 7.24 3.06 12.99c.23 1 1.63 1.04 1.93.06l2.94-9.58.39 1.53a1 1 0 0 0 .97.76H21a1 1 0 1 0 0-2h-2.47l-1.06-4.24c-.25-.99-1.63-1.02-1.93-.05l-2.91 9.47-3.15-13.4c-.24-1.03-1.7-1.04-1.95-.02L5.47 11H3a1 1 0 0 0 0 2h3.25a1 1 0 0 0 .97-.76l1.25-5Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse24Filled = wrapIcon_1.default( /*#__PURE__*/Pulse24FilledIcon, 'Pulse24Filled');
const Pulse24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.46 6.8 3.29 13.63c.17.73 1.2.77 1.44.05l3.26-10.12.58 2.1c.1.32.39.54.72.54h3.5a.75.75 0 0 0 0-1.5h-2.93l-1.1-3.95a.75.75 0 0 0-1.44-.03l-3.2 9.96-3.35-13.9c-.19-.76-1.26-.77-1.46-.02l-2.1 7.94H2.75a.75.75 0 0 0 0 1.5h3.5c.34 0 .63-.23.72-.56l1.5-5.63Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse24Regular = wrapIcon_1.default( /*#__PURE__*/Pulse24RegularIcon, 'Pulse24Regular');
const Pulse28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.04 3a1 1 0 0 1 .94.78l3.7 16.5 3.87-11.6a1 1 0 0 1 1.88-.05L22.18 13H25a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-.93-.63l-.98-2.46-4.14 12.4a1 1 0 0 1-1.93-.09L9.86 7.94l-1.9 6.35A1 1 0 0 1 7 15H3a1 1 0 1 1 0-2h3.26l2.78-9.29a1 1 0 0 1 1-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse28Filled = wrapIcon_1.default( /*#__PURE__*/Pulse28FilledIcon, 'Pulse28Filled');
const Pulse28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.02 3c.35.01.64.25.71.59l3.9 17.79L18.8 8.52a.75.75 0 0 1 1.43.03l1.35 4.95h3.68a.75.75 0 0 1 0 1.5H21a.75.75 0 0 1-.72-.55l-.84-3.07-4.23 13.1a.75.75 0 0 1-1.44-.07L9.9 6.81l-2.18 7.65A.75.75 0 0 1 7 15H2.75a.75.75 0 0 1 0-1.5h3.68l2.85-9.96c.1-.33.4-.55.74-.54Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse28Regular = wrapIcon_1.default( /*#__PURE__*/Pulse28RegularIcon, 'Pulse28Regular');
const Pulse32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.53 5c.55.01 1.02.38 1.17.91l4.36 15.44 3.25-10.47a1.25 1.25 0 0 1 2.33-.15l2.16 4.77h2.95a1.25 1.25 0 1 1 0 2.5H24c-.49 0-.94-.29-1.14-.73l-1.14-2.51-3.53 11.36a1.25 1.25 0 0 1-2.4-.03L11.4 10.5l-2.21 6.65c-.17.5-.65.85-1.19.85H4.25a1.25 1.25 0 1 1 0-2.5H7.1l3.21-9.65c.18-.52.67-.86 1.22-.85Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse32Filled = wrapIcon_1.default( /*#__PURE__*/Pulse32FilledIcon, 'Pulse32Filled');
const Pulse32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.52 5a1 1 0 0 1 .94.73l4.58 16.65 3.5-11.67a1 1 0 0 1 1.88-.1L24.67 16H28a1 1 0 1 1 0 2h-4a1 1 0 0 1-.92-.62l-1.43-3.41-3.7 12.32a1 1 0 0 1-1.91-.02L11.43 9.52 8.95 17.3A1 1 0 0 1 8 18H4a1 1 0 1 1 0-2h3.27l3.28-10.3a1 1 0 0 1 .97-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.Pulse32Regular = wrapIcon_1.default( /*#__PURE__*/Pulse32RegularIcon, 'Pulse32Regular');
const PulseSquare20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm5.97 1.33a.5.5 0 0 0-.94 0L6.65 10H5.5a.5.5 0 0 0 0 1H7c.2 0 .4-.13.47-.32l1.02-2.73 2.04 5.72a.5.5 0 0 0 .92.05L12.8 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.45.28l-.97 1.95-2.1-5.9Z",
    fill: primaryFill
  }));
  ;
};
exports.PulseSquare20Filled = wrapIcon_1.default( /*#__PURE__*/PulseSquare20FilledIcon, 'PulseSquare20Filled');
const PulseSquare20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.97 6.33a.5.5 0 0 0-.94 0L6.65 10H5.5a.5.5 0 0 0 0 1H7c.2 0 .4-.13.47-.32l1.02-2.73 2.04 5.72a.5.5 0 0 0 .92.05L12.8 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.45.28l-.97 1.95-2.1-5.9ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5ZM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z",
    fill: primaryFill
  }));
  ;
};
exports.PulseSquare20Regular = wrapIcon_1.default( /*#__PURE__*/PulseSquare20RegularIcon, 'PulseSquare20Regular');
const PulseSquare24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.75 3C19.99 3 21 4 21 5.25v13.5C21 20 20 21 18.75 21H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h13.5ZM9.8 7.95 8.26 11.5H6.75a.75.75 0 0 0 0 1.5h2c.3 0 .56-.18.68-.45l1.04-2.36 2.33 5.83a.75.75 0 0 0 1.37.06L15.71 13h1.54a.75.75 0 1 0 0-1.5h-2a.75.75 0 0 0-.67.41l-1 2-2.39-5.94a.75.75 0 0 0-1.38-.02Z",
    fill: primaryFill
  }));
  ;
};
exports.PulseSquare24Filled = wrapIcon_1.default( /*#__PURE__*/PulseSquare24FilledIcon, 'PulseSquare24Filled');
const PulseSquare24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.75 3C19.99 3 21 4 21 5.25v13.5C21 20 20 21 18.75 21H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h13.5Zm0 1.5H5.25a.75.75 0 0 0-.75.75v13.5c0 .42.34.75.75.75h13.5c.41 0 .75-.33.75-.75V5.25a.75.75 0 0 0-.75-.75Zm-10.5 7 1.56-3.55a.75.75 0 0 1 1.34-.08l.04.1 2.39 5.95 1-2a.75.75 0 0 1 .56-.41l.11-.01h2a.75.75 0 0 1 .1 1.5H15.71l-1.54 3.08a.75.75 0 0 1-1.32.04l-.05-.1-2.33-5.83-1.04 2.36c-.1.24-.32.4-.57.44l-.11.01h-2a.75.75 0 0 1-.1-1.5h1.6l1.56-3.55-1.55 3.55Z",
    fill: primaryFill
  }));
  ;
};
exports.PulseSquare24Regular = wrapIcon_1.default( /*#__PURE__*/PulseSquare24RegularIcon, 'PulseSquare24Regular');
const PuzzleCube16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 4V6h4v4H6Zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm1 3h4v-3H6v3Zm5 0v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5H11Zm3-8v4h-3V6h3Zm0-1v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube16Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCube16FilledIcon, 'PuzzleCube16Filled');
const PuzzleCube16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5v6.5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H5v3H2Zm8 8H6v-2h4v2Zm-7-2h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Zm7-1H6V6h4v4ZM3 6h2v4H3V6Zm7-1H6V3h4v2Zm1 1h2v4h-2V6Zm0 5h2v.5c0 .83-.67 1.5-1.5 1.5H11v-2Zm2-6.5V5h-2V3h.5c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube16Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCube16RegularIcon, 'PuzzleCube16Regular');
const PuzzleCube20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-1-1V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube20Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCube20FilledIcon, 'PuzzleCube20Filled');
const PuzzleCube20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 14.5V7h4V3h7.5A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5ZM8 4v3h4V4H8Zm5 0v3h3V5.5c0-.83-.67-1.5-1.5-1.5H13Zm3 4h-3v4h3V8Zm0 5h-3v3h1.5c.83 0 1.5-.67 1.5-1.5V13Zm-4 3v-3H8v3h4Zm-5 0v-3H4v1.5c0 .83.67 1.5 1.5 1.5H7Zm-3-4h3V8H4v4Zm8-4H8v4h4V8Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube20Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCube20RegularIcon, 'PuzzleCube20Regular');
const PuzzleCube24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h5v-5h-5v5Zm6.5 0h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5Zm5-6.5v-5h-5v5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm11.5-6.5v5h-5v-5h5Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube24Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCube24FilledIcon, 'PuzzleCube24Filled');
const PuzzleCube24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 8.5v9.25C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H8.5v5.5H3ZM8.5 10v4h-4v-4h4Zm1.5 4v-4h4v4h-4Zm5.5 0v-4h4v4h-4ZM10 15.5h4v4h-4v-4Zm5.5 0h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5v-4Zm0-11h2.25c.97 0 1.75.78 1.75 1.75V8.5h-4v-4Zm-1.5 4h-4v-4h4v4Zm-5.5 7v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube24Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCube24RegularIcon, 'PuzzleCube24Regular');
const PuzzleCube28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h6v-6.5h-6V25Zm7.5 0h2.75A3.75 3.75 0 0 0 25 21.25V18.5h-6.5V25Zm6.5-8v-6h-6.5v6H25Zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube28Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCube28FilledIcon, 'PuzzleCube28Filled');
const PuzzleCube28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 9.5v11.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H9.5v6.5H3Zm1.5 11.75V18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25ZM9.5 11v6h-5v-6h5ZM11 23.5v-5h6v5h-6ZM17 11v6h-6v-6h6Zm1.5 12.5v-5h5v2.75c0 1.24-1 2.25-2.25 2.25H18.5Zm5-12.5v6h-5v-6h5Zm-2.25-6.5c1.24 0 2.25 1 2.25 2.25V9.5h-5v-5h2.75ZM11 4.5h6v5h-6v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube28Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCube28RegularIcon, 'PuzzleCube28Regular');
const PuzzleCube48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 6v10.5h10V6H19Zm-2.5 13H6v10h10.5V19ZM19 29V19h10v10H19Zm-2.5 2.5H6v4.25C6 39.2 8.8 42 12.25 42h4.25V31.5ZM19 42h10V31.5H19V42Zm12.5 0V31.5H42v4.25C42 39.2 39.2 42 35.75 42H31.5ZM42 19v10H31.5V19H42Zm0-2.5v-4.25C42 8.8 39.2 6 35.75 6H31.5v10.5H42Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube48Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCube48FilledIcon, 'PuzzleCube48Filled');
const PuzzleCube48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 17v18.75C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6H17v11H6Zm2.5 11.5v-9H17v9H8.5Zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 0 1-3.75-3.75Zm20 3.75h-9V31h9v8.5Zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 0 1-3.75 3.75Zm3.75-20v9H31v-9h8.5Zm0-7.25V17H31V8.5h4.75a3.75 3.75 0 0 1 3.75 3.75Zm-20-3.75h9V17h-9V8.5Zm9 11v9h-9v-9h9Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCube48Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCube48RegularIcon, 'PuzzleCube48Regular');
const PuzzleCubePiece20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.8 1.29a1 1 0 0 1 1.4 0l1.51 1.5a1 1 0 0 1 0 1.42l-1.5 1.5a1 1 0 0 1-1.42 0l-1.5-1.5a1 1 0 0 1 0-1.42l1.5-1.5ZM5.5 17H7v-4H3v1.5A2.5 2.5 0 0 0 5.5 17ZM7 8v4H3V8h4Zm5 4H8V8h4v4Zm-4 1h4v4H8v-4Zm5-5v4h4V8h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM3 7h4V3H5.5A2.5 2.5 0 0 0 3 5.5V7Zm5 0V3h4v4H8Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCubePiece20Filled = wrapIcon_1.default( /*#__PURE__*/PuzzleCubePiece20FilledIcon, 'PuzzleCubePiece20Filled');
const PuzzleCubePiece20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.2 1.29a1 1 0 0 0-1.4 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 1.4 0l1.51-1.5a1 1 0 0 0 0-1.42l-1.5-1.5ZM15 3.5 16.5 2 18 3.5 16.5 5 15 3.5ZM13 3H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7h-4V3ZM5.36 16A1.5 1.5 0 0 1 4 14.5V13h3v3H5.36ZM8 13h4v3H8v-3Zm8 1.64A1.5 1.5 0 0 1 14.5 16H13v-3h3V14.64ZM8 8h4v4H8V8Zm5 4V8h3v4h-3ZM8 4h4v3H8V4ZM5.5 4H7v3H4V5.36A1.5 1.5 0 0 1 5.5 4ZM4 12V8h3v4H4Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzleCubePiece20Regular = wrapIcon_1.default( /*#__PURE__*/PuzzleCubePiece20RegularIcon, 'PuzzleCubePiece20Regular');
const PuzzlePiece16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 1a2 2 0 0 0-2 2H5.5C4.67 3 4 3.67 4 4.5V6a2 2 0 0 0 0 4v1.5c0 .83.67 1.5 1.5 1.5H7a2 2 0 0 0 4 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-1a1 1 0 1 1 0-2h1V4.5c0-.83-.67-1.5-1.5-1.5H11a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece16Filled = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece16FilledIcon, 'PuzzlePiece16Filled');
const PuzzlePiece16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3a2 2 0 0 1 4 0h1.5c.83 0 1.5.67 1.5 1.5V7h-1a1 1 0 0 0 0 2h1v2.5c0 .83-.67 1.5-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5C4 3.67 4.67 3 5.5 3H7Zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5c0 .28.22.5.5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece16Regular = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece16RegularIcon, 'PuzzlePiece16Regular');
const PuzzlePiece20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 2a2 2 0 0 1 2 2v.06h3a1 1 0 0 1 1 1V8h-1a2 2 0 0 0-2 1.85V10a2 2 0 0 0 1.85 2H17v3.06a1 1 0 0 1-1 1h-3v.09a2 2 0 0 1-4-.1H6a1 1 0 0 1-1-1V12a2 2 0 1 1 0-4V5.06a1 1 0 0 1 1-1h3V4c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece20Filled = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece20FilledIcon, 'PuzzlePiece20Filled');
const PuzzlePiece20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.1 2c-1.07.08-1.94.9-2.08 1.94V4H6.35A1.5 1.5 0 0 0 5 5.5v2.27h-.06A2.25 2.25 0 0 0 3 10v.16c.08 1.06.9 1.93 1.94 2.07H5v2.42A1.5 1.5 0 0 0 6.5 16h2.02v.06A2.25 2.25 0 0 0 10.75 18h.16a2.25 2.25 0 0 0 2.07-1.94V16h2.52c.83 0 1.5-.67 1.5-1.5v-3.25h-1.87A1.25 1.25 0 0 1 14 10v-.12c.06-.63.6-1.13 1.25-1.13H17V5.36A1.5 1.5 0 0 0 15.5 4h-2.02v-.06A2.25 2.25 0 0 0 11.25 2h-.15Zm.15 1c.69 0 1.25.56 1.25 1.25V5h3l.1.01a.5.5 0 0 1 .4.5v2.24h-.75c-1.17 0-2.15.9-2.24 2.07l-.01.16c0 1.2.9 2.17 2.07 2.26l.16.01H16v2.25a.5.5 0 0 1-.5.5H12v.75a1.25 1.25 0 0 1-2.5 0V15h-3a.5.5 0 0 1-.5-.5v-3.25h-.75a1.25 1.25 0 0 1 0-2.5H6V5.5c0-.27.23-.5.5-.5H10v-.75c0-.69.56-1.25 1.25-1.25Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece20Regular = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece20RegularIcon, 'PuzzlePiece20Regular');
const PuzzlePiece24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 2c1.36 0 2.47 1.1 2.47 2.47V5H19a1 1 0 0 1 1 1v3.5h-1.53a2.47 2.47 0 0 0-2.46 2.3l-.01.17v.06c0 1.31 1.02 2.38 2.3 2.46l.17.01H20V18a1 1 0 0 1-1 1h-3.53v.53a2.47 2.47 0 1 1-4.94 0V19H7a1 1 0 0 1-1-1v-3.53h-.53a2.47 2.47 0 0 1 0-4.94H6V6a1 1 0 0 1 1-1h3.53v-.53C10.53 3.11 11.63 2 13 2Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece24Filled = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece24FilledIcon, 'PuzzlePiece24Filled');
const PuzzlePiece24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 2a3 3 0 0 1 3 2.82V5h2.25c.87 0 1.59.63 1.73 1.46l.01.15v3.89H18a1.5 1.5 0 0 0-1.48 1.24l-.01.13V12c0 .74.53 1.37 1.23 1.48l.13.02H20v3.75c0 .92-.7 1.67-1.6 1.75H16v.17a3 3 0 0 1-2.64 2.8l-.18.02H13a3 3 0 0 1-3-2.81V19H7.75c-.87 0-1.59-.63-1.73-1.46l-.01-.14-.01-.15V15h-.16a3 3 0 0 1-2.8-2.64l-.02-.18V12a3 3 0 0 1 2.82-3H6V6.75c0-.87.63-1.59 1.46-1.73l.15-.01.14-.01H10v-.17a3 3 0 0 1 2.64-2.8l.18-.02H13Zm0 1.5c-.78 0-1.42.6-1.5 1.36V6.5H7.75a.25.25 0 0 0-.24.2l-.01.05v3.75H6a1.5 1.5 0 0 0-.14 3H7.5v3.75c0 .12.08.22.2.25h3.8V19a1.5 1.5 0 0 0 3 .14V17.5h3.75c.12 0 .22-.08.24-.19V15h-.69a3 3 0 0 1-2.8-2.85v-.35A3 3 0 0 1 17.84 9h.67V6.75c0-.1-.05-.18-.13-.22l-.06-.02-.06-.01H14.5V5c0-.82-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePiece24Regular = wrapIcon_1.default( /*#__PURE__*/PuzzlePiece24RegularIcon, 'PuzzlePiece24Regular');
const PuzzlePieceShield20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 15.06V12.7c.18.08.36.15.55.21.29.1.61.1.9 0a6.77 6.77 0 0 0 3.39-2.38A6.63 6.63 0 0 0 11 6.58V4.04l-.02-.19v-.04A1.4 1.4 0 0 0 9.5 2.67 2 2 0 0 1 13 4v.06h3a1 1 0 0 1 1 1V8h-1a2 2 0 0 0-2 1.85V10a2 2 0 0 0 1.85 2H17v3.06a1 1 0 0 1-1 1h-3v.09a2 2 0 0 1-4-.1H6a1 1 0 0 1-1-1ZM8 3.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 0 1-.26 0A6.66 6.66 0 0 1 4 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15L2 6.58v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0C6.82 2.7 7.4 3.1 8 3.35Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePieceShield20Filled = wrapIcon_1.default( /*#__PURE__*/PuzzlePieceShield20FilledIcon, 'PuzzlePieceShield20Filled');
const PuzzlePieceShield20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 14.5v-1.79a9 9 0 0 0 .54.21c.15.05.3.08.46.08v1.5c0 .28.22.5.5.5h3v.75a1.25 1.25 0 0 0 2.5 0V15h3.5a.5.5 0 0 0 .5-.5v-2.25H15.06A2.25 2.25 0 0 1 13 9.97v-.16a2.25 2.25 0 0 1 2.25-2.07H16V5.5a.5.5 0 0 0-.41-.49H12.5v-.76a1.25 1.25 0 0 0-1.85-1.1c-.24-.28-.59-.47-1-.48.37-.38.88-.63 1.44-.66l.16-.01c1.14 0 2.08.85 2.23 1.94V4h2.02c.78 0 1.42.6 1.5 1.36v3.39h-1.75c-.65 0-1.2.5-1.25 1.13V10c0 .65.5 1.2 1.13 1.24l.12.01H17v3.25c0 .83-.67 1.5-1.5 1.5h-2.52v.06a2.25 2.25 0 0 1-2.08 1.93l-.15.01a2.25 2.25 0 0 1-2.23-1.94V16H6.5A1.5 1.5 0 0 1 5 14.65v-.15ZM8 3.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 0 1-.26 0A6.66 6.66 0 0 1 4 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15L2 6.58v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0C6.82 2.7 7.4 3.1 8 3.35Z",
    fill: primaryFill
  }));
  ;
};
exports.PuzzlePieceShield20Regular = wrapIcon_1.default( /*#__PURE__*/PuzzlePieceShield20RegularIcon, 'PuzzlePieceShield20Regular');
const QrCode20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 11h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2ZM5 5h2v2H5V5Zm0-2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-2.5ZM5 13h2v2H5v-2Zm0-2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5Zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-2.5ZM13 5h2v2h-2V5Zm0-2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2Zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode20Filled = wrapIcon_1.default( /*#__PURE__*/QrCode20FilledIcon, 'QrCode20Filled');
const QrCode20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 15h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4-4h2v2h-2v-2Zm2 2h2v2h-2v-2Zm2-2h2v2h-2v-2ZM3 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm0 1h2v2H5V5Zm-2 8c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Zm2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm0 1h2v2H5v-2Zm6-8c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2Zm0 1h2v2h-2V5Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode20Regular = wrapIcon_1.default( /*#__PURE__*/QrCode20RegularIcon, 'QrCode20Regular');
const QrCode24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 6H6v2h2V6Zm-5-.5A2.5 2.5 0 0 1 5.5 3h3A2.5 2.5 0 0 1 11 5.5v3A2.5 2.5 0 0 1 8.5 11h-3A2.5 2.5 0 0 1 3 8.5v-3ZM5.5 5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM6 16h2v2H6v-2Zm-3-.5A2.5 2.5 0 0 1 5.5 13h3a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 21h-3A2.5 2.5 0 0 1 3 18.5v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM18 6h-2v2h2V6Zm-2.5-3A2.5 2.5 0 0 0 13 5.5v3a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 21 8.5v-3A2.5 2.5 0 0 0 18.5 3h-3ZM15 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM13 13h2.75v2.75H13V13Zm5.25 2.75h-2.5v2.5H13V21h2.75v-2.75h2.5V21H21v-2.75h-2.75v-2.5Zm0 0V13H21v2.75h-2.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode24Filled = wrapIcon_1.default( /*#__PURE__*/QrCode24FilledIcon, 'QrCode24Filled');
const QrCode24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 6H6v2h2V6Zm-5-.75C3 4.01 4 3 5.25 3h3.5C9.99 3 11 4 11 5.25v3.5C11 9.99 10 11 8.75 11h-3.5C4.01 11 3 10 3 8.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75h-3.5ZM6 16h2v2H6v-2Zm-3-.75C3 14.01 4 13 5.25 13h3.5C9.99 13 11 14 11 15.25v3.5C11 19.99 10 21 8.75 21h-3.5C4.01 21 3 20 3 18.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75h-3.5ZM18 6h-2v2h2V6Zm-2.75-3C14.01 3 13 4 13 5.25v3.5C13 9.99 14 11 15.25 11h3.5C19.99 11 21 10 21 8.75v-3.5C21 4.01 20 3 18.75 3h-3.5Zm-.75 2.25c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5ZM13 13h2.75v2.75H13V13Zm5.25 2.75h-2.5v2.5H13V21h2.75v-2.75h2.5V21H21v-2.75h-2.75v-2.5Zm0 0V13H21v2.75h-2.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode24Regular = wrapIcon_1.default( /*#__PURE__*/QrCode24RegularIcon, 'QrCode24Regular');
const QrCode28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.33 15v3.33h3.34v3.34H25V25h-3.33v-3.33h-3.34V25H15v-3.33h3.33v-3.34H15V15h3.33Zm-7.83 0a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 22.5v-5A2.5 2.5 0 0 1 5.5 15h5Zm0 2h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm-.75 1.25v3.5h-3.5v-3.5h3.5ZM25 15v3.33h-3.33V15H25ZM10.5 3A2.5 2.5 0 0 1 13 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5v-5A2.5 2.5 0 0 1 5.5 3h5Zm12 0A2.5 2.5 0 0 1 25 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 17.5 3h5Zm-12 2h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm12 0h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm-.75 1.25v3.5h-3.5v-3.5h3.5Zm-12 0v3.5h-3.5v-3.5h3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode28Filled = wrapIcon_1.default( /*#__PURE__*/QrCode28FilledIcon, 'QrCode28Filled');
const QrCode28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.75 15c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 25 3 24 3 22.75v-5.5C3 16.01 4 15 5.25 15h5.5Zm7.58 0v3.33h3.34v3.34h-3.34V25H15v-3.33h3.33v-3.34H15V15h3.33ZM25 21.67V25h-3.33v-3.33H25ZM10.75 16.5h-5.5a.75.75 0 0 0-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 0 0-.75-.75Zm-1.25 2v3h-3v-3h3ZM25 15v3.33h-3.33V15H25ZM10.75 3C11.99 3 13 4 13 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 13 3 12 3 10.75v-5.5C3 4.01 4 3 5.25 3h5.5Zm12 0C23.99 3 25 4 25 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C16.01 13 15 12 15 10.75v-5.5C15 4.01 16 3 17.25 3h5.5Zm-12 1.5h-5.5a.75.75 0 0 0-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 0 0-.75-.75Zm12 0h-5.5a.75.75 0 0 0-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 0 0-.75-.75ZM9.5 6.5v3h-3v-3h3Zm12 0v3h-3v-3h3Z",
    fill: primaryFill
  }));
  ;
};
exports.QrCode28Regular = wrapIcon_1.default( /*#__PURE__*/QrCode28RegularIcon, 'QrCode28Regular');
const Question16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 0 1 3 0c0 .65-.12 1.02-.25 1.25-.14.24-.33.4-.6.64l-.06.05c-.26.21-.6.5-.88.93-.3.49-.46 1.08-.46 1.88v.5a.75.75 0 0 0 1.5 0v-.5c0-.58.12-.89.24-1.08.13-.22.31-.37.62-.63.28-.23.66-.55.94-1.05.29-.5.45-1.14.45-1.99a3 3 0 0 0-3-3Zm0 12.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Question16Filled = wrapIcon_1.default( /*#__PURE__*/Question16FilledIcon, 'Question16Filled');
const Question16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a3 3 0 0 0-3 3 .5.5 0 0 0 1 0 2 2 0 0 1 4 0c0 .68-.14 1.08-.31 1.36-.19.3-.43.5-.75.75l-.02.02c-.3.24-.67.53-.95.98-.3.47-.47 1.07-.47 1.89v.5a.5.5 0 0 0 1 0V10c0-.68.14-1.08.31-1.36.19-.3.43-.5.75-.75l.02-.02c.3-.24.67-.53.95-.98.3-.47.47-1.07.47-1.89a3 3 0 0 0-3-3Zm0 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Question16Regular = wrapIcon_1.default( /*#__PURE__*/Question16RegularIcon, 'Question16Regular');
const Question20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a4 4 0 0 0-4 4 .75.75 0 0 0 1.5 0A2.5 2.5 0 0 1 10 4.5 2.5 2.5 0 0 1 12.5 7c0 .6-.16.97-.37 1.27a5 5 0 0 1-.97.92c-.4.33-.9.73-1.28 1.3-.39.58-.63 1.3-.63 2.26v.5a.75.75 0 0 0 1.5 0v-.5c0-.67.16-1.1.38-1.43.23-.35.55-.62.97-.96l.06-.05c.38-.3.84-.67 1.2-1.17C13.74 8.6 14 7.9 14 7a4 4 0 0 0-4-4Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Question20Filled = wrapIcon_1.default( /*#__PURE__*/Question20FilledIcon, 'Question20Filled');
const Question20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a4 4 0 0 0-4 4 .5.5 0 0 0 1 0 3 3 0 0 1 6 0c0 1.25-.7 1.86-1.58 2.62l-.03.03c-.86.73-1.89 1.62-1.89 3.35v.5a.5.5 0 0 0 1 0V13c0-1.25.7-1.86 1.58-2.62l.03-.03C12.97 9.62 14 8.73 14 7a4 4 0 0 0-4-4Zm0 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Question20Regular = wrapIcon_1.default( /*#__PURE__*/Question20RegularIcon, 'Question20Regular');
const Question24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4a5 5 0 0 0-5 5 1 1 0 0 0 2 0 3 3 0 1 1 6 0c0 .82-.2 1.3-.44 1.63-.26.36-.62.64-1.13.98l-.11.08c-.45.3-1.02.7-1.47 1.25A3.89 3.89 0 0 0 11 15.5v.5a1 1 0 1 0 2 0v-.5c0-.66.18-1.02.4-1.3.26-.31.6-.55 1.11-.9l.06-.04a6.2 6.2 0 0 0 1.62-1.47c.5-.7.81-1.6.81-2.79a5 5 0 0 0-5-5Zm0 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Question24Filled = wrapIcon_1.default( /*#__PURE__*/Question24FilledIcon, 'Question24Filled');
const Question24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4a5 5 0 0 0-5 5 .75.75 0 0 0 1.5 0 3.5 3.5 0 1 1 7 0c0 .85-.22 1.42-.53 1.86a5.82 5.82 0 0 1-1.44 1.34c-1 .77-2.28 1.73-2.28 3.8v.25a.75.75 0 0 0 1.5 0V16c0-1.32.71-1.86 1.79-2.68l.04-.04c.53-.4 1.15-.88 1.62-1.56A5 5 0 0 0 12 4Zm0 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Question24Regular = wrapIcon_1.default( /*#__PURE__*/Question24RegularIcon, 'Question24Regular');
const Question28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 4a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 8 0c0 1.06-.26 1.74-.61 2.27-.36.53-.84.95-1.44 1.48l-.1.1a8.85 8.85 0 0 0-1.93 2.14 7.15 7.15 0 0 0-.92 3.76V20a1 1 0 1 0 2 0v-.25c0-1.28.28-2.12.64-2.74a6.94 6.94 0 0 1 1.66-1.79c.57-.5 1.24-1.07 1.75-1.84.58-.87.95-1.94.95-3.38a6 6 0 0 0-6-6Zm0 21.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Question28Filled = wrapIcon_1.default( /*#__PURE__*/Question28FilledIcon, 'Question28Filled');
const Question28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 4a6 6 0 0 0-6 6 .75.75 0 0 0 1.5 0 4.5 4.5 0 1 1 9 0c0 1.38-.3 2.23-.7 2.84a6.53 6.53 0 0 1-1.63 1.56l-.03.03c-.64.48-1.38 1.05-1.95 1.9-.58.9-.94 2.05-.94 3.67v.25a.75.75 0 0 0 1.5 0V20c0-1.38.3-2.23.7-2.84.4-.63.96-1.05 1.63-1.56l.03-.03a7.82 7.82 0 0 0 1.95-1.9c.58-.9.94-2.05.94-3.67a6 6 0 0 0-6-6Zm0 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Question28Regular = wrapIcon_1.default( /*#__PURE__*/Question28RegularIcon, 'Question28Regular');
const Question48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 5c-5.55 0-10 4.51-10 10.25a1.5 1.5 0 0 0 3 0A7.06 7.06 0 0 1 24 8c3.83 0 7 3.11 7 7.25 0 1.84-.45 2.85-1.02 3.6-.48.63-1.03 1.09-1.73 1.68l-1 .85a12.25 12.25 0 0 0-3.3 4.37c-.9 2.04-1.45 4.73-1.45 8.5v.25a1.5 1.5 0 0 0 3 0v-.25c0-3.48.51-5.73 1.2-7.28a9.27 9.27 0 0 1 2.54-3.35c.22-.18.46-.38.7-.6.8-.66 1.73-1.43 2.43-2.35 1.01-1.33 1.63-3 1.63-5.42C34 9.51 29.55 5 24 5Zm0 37a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Question48Filled = wrapIcon_1.default( /*#__PURE__*/Question48FilledIcon, 'Question48Filled');
const Question48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 5.5a10 10 0 0 0-10 10 1.25 1.25 0 1 0 2.5 0 7.5 7.5 0 0 1 15 0c0 1.88-.47 2.94-1.1 3.74-.51.66-1.1 1.14-1.85 1.74l-.99.82c-1.17 1-2.4 2.27-3.33 4.29-.92 2-1.48 4.66-1.48 8.41v.25a1.25 1.25 0 1 0 2.5 0v-.25c0-3.5.53-5.78 1.25-7.37a9.56 9.56 0 0 1 2.69-3.43l.75-.62c.82-.66 1.73-1.4 2.43-2.3 1-1.28 1.63-2.9 1.63-5.28a10 10 0 0 0-10-10ZM24 42a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Question48Regular = wrapIcon_1.default( /*#__PURE__*/Question48RegularIcon, 'Question48Regular');
const QuestionCircle12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Zm.5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5 4.75a.5.5 0 0 1-1 0c0-.59.27-1.04.67-1.34C5.05 3.13 5.54 3 6 3c.46 0 .95.12 1.33.41.4.3.67.75.67 1.34 0 .43-.14.76-.37 1-.18.2-.41.34-.58.43L7 6.21c-.19.11-.3.19-.37.29-.06.08-.13.22-.13.5a.5.5 0 0 1-1 0c0-.47.12-.83.34-1.11.2-.27.47-.43.66-.54l.03-.02c.2-.11.3-.17.37-.25.05-.05.1-.13.1-.33 0-.25-.1-.42-.27-.54A1.25 1.25 0 0 0 6 4c-.29 0-.55.08-.73.21a.63.63 0 0 0-.27.54Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle12Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle12FilledIcon, 'QuestionCircle12Filled');
const QuestionCircle12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.27 4.21a.63.63 0 0 0-.27.54.5.5 0 0 1-1 0c0-.59.27-1.04.67-1.34C5.05 3.12 5.54 3 6 3c.46 0 .95.12 1.33.4.4.3.67.76.67 1.35 0 .43-.14.76-.37 1-.18.2-.41.34-.58.43L7 6.21c-.19.11-.3.19-.37.28-.06.09-.13.22-.13.5a.5.5 0 0 1-1 0c0-.46.12-.82.34-1.1.2-.27.47-.43.66-.54l.03-.02c.2-.11.3-.17.37-.25.05-.05.1-.13.1-.33 0-.25-.1-.42-.27-.54A1.25 1.25 0 0 0 6 4c-.29 0-.55.08-.73.21ZM6 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle12Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle12RegularIcon, 'QuestionCircle12Regular');
const QuestionCircle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 8.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0-1.5Zm0-6a2 2 0 0 0-2 2 .5.5 0 0 0 1 0 1 1 0 0 1 2 0c0 .37-.08.58-.37.9l-.11.12-.27.27c-.54.57-.75.98-.75 1.71a.5.5 0 0 0 1 0c0-.37.08-.58.37-.9l.11-.12.27-.27c.54-.57.75-.98.75-1.71a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle16Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle16FilledIcon, 'QuestionCircle16Filled');
const QuestionCircle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm0 7.5A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5Zm0-6a2 2 0 0 1 2 2c0 .73-.21 1.14-.75 1.7l-.27.28c-.38.4-.48.6-.48 1.02a.5.5 0 0 1-1 0c0-.73.21-1.14.75-1.7l.27-.28c.38-.4.48-.6.48-1.02a1 1 0 0 0-2 0 .5.5 0 0 1-1 0c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle16Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle16RegularIcon, 'QuestionCircle16Regular');
const QuestionCircle20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 11.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0-8A2.5 2.5 0 0 0 7.5 8a.5.5 0 0 0 1 0 1.5 1.5 0 1 1 2.63.98l-.1.11-.12.1-.25.19A3.2 3.2 0 0 0 9.5 12a.5.5 0 0 0 1 0c0-.76.2-1.25.53-1.61l.08-.08.08-.07.09-.07.22-.17.15-.12A2.5 2.5 0 0 0 10 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle20Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle20FilledIcon, 'QuestionCircle20Filled');
const QuestionCircle20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 10.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-8a2.5 2.5 0 0 1 1.65 4.38l-.15.12-.22.17-.09.07-.16.15c-.33.36-.53.85-.53 1.61a.5.5 0 0 1-1 0 3.2 3.2 0 0 1 1.16-2.62l.25-.19.12-.1A1.5 1.5 0 0 0 10 6.5c-.83 0-1.5.67-1.5 1.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 10 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle20Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle20RegularIcon, 'QuestionCircle20Regular');
const QuestionCircle24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8.75A2.75 2.75 0 0 0 9.25 9.5a.75.75 0 0 0 1.5.1v-.1a1.25 1.25 0 1 1 2.5 0c0 .54-.13.8-.64 1.33l-.14.14c-.88.88-1.22 1.45-1.22 2.53a.75.75 0 0 0 1.5 0c0-.54.13-.8.64-1.33l.14-.14c.88-.88 1.22-1.45 1.22-2.53A2.75 2.75 0 0 0 12 6.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle24Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle24FilledIcon, 'QuestionCircle24Filled');
const QuestionCircle24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.67a8.34 8.34 0 0 0 0 16.66 8.34 8.34 0 0 0 0-16.66Zm0 11.83a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8.75a2.75 2.75 0 0 1 2.75 2.75c0 1.01-.3 1.57-1.05 2.36l-.17.17c-.62.62-.78.89-.78 1.47a.75.75 0 0 1-1.5 0c0-1.01.3-1.57 1.05-2.36l.17-.17c.62-.62.78-.89.78-1.47a1.25 1.25 0 0 0-2.5-.13v.13a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 6.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle24Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle24RegularIcon, 'QuestionCircle24Regular');
const QuestionCircle28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 16.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm0-11.75a3.85 3.85 0 0 0-3.75 3.75.75.75 0 0 0 1.5 0c0-1.18 1.1-2.25 2.25-2.25a2.36 2.36 0 0 1 2.25 2.25c0 .88-.24 1.38-.93 2.08l-.16.15-.57.52c-.94.9-1.34 1.6-1.34 2.75a.75.75 0 0 0 1.5 0c0-.65.21-1.03.89-1.67l.16-.15.2-.19.2-.18c1.08-1.04 1.55-1.88 1.55-3.31A3.85 3.85 0 0 0 14 6.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle28Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle28FilledIcon, 'QuestionCircle28Filled');
const QuestionCircle28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm0 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm0-11.75a3.85 3.85 0 0 1 3.75 3.75c0 1.43-.47 2.27-1.55 3.3L16 14l-.2.19c-.8.74-1.05 1.12-1.05 1.82a.75.75 0 0 1-1.5 0c0-1.15.4-1.84 1.34-2.75l.57-.52c.81-.78 1.09-1.29 1.09-2.23 0-1.18-1.1-2.25-2.25-2.25a2.36 2.36 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0A3.85 3.85 0 0 1 14 6.75Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle28Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle28RegularIcon, 'QuestionCircle28Regular');
const QuestionCircle32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 2a14 14 0 1 1 0 28 14 14 0 0 1 0-28Zm1.5 20a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM14 12c0-.54.18-1.04.5-1.4.3-.34.77-.6 1.5-.6 1.3 0 2.38 1.35 2.03 2.76-.18.72-.61 1.13-1.26 1.75-.05.06-.11.12-.18.17-.72.7-1.59 1.65-1.59 3.32a1 1 0 1 0 2 0c0-.83.35-1.27.98-1.88l.2-.18a5.5 5.5 0 0 0 1.79-2.7A4.2 4.2 0 0 0 16 8a3.9 3.9 0 0 0-3 1.27A4.1 4.1 0 0 0 12 12a1 1 0 1 0 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle32Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle32FilledIcon, 'QuestionCircle32Filled');
const QuestionCircle32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 22a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14 12c0-.54.18-1.04.5-1.4.3-.34.77-.6 1.5-.6 1.3 0 2.38 1.35 2.03 2.76-.18.72-.61 1.13-1.26 1.75-.05.06-.11.12-.18.17-.72.7-1.59 1.65-1.59 3.32a1 1 0 1 0 2 0c0-.83.35-1.27.98-1.88l.2-.18a5.5 5.5 0 0 0 1.79-2.7A4.2 4.2 0 0 0 16 8a3.9 3.9 0 0 0-3 1.27A4.1 4.1 0 0 0 12 12a1 1 0 1 0 2 0ZM2 16a14 14 0 1 1 28 0 14 14 0 0 1-28 0ZM16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle32Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle32RegularIcon, 'QuestionCircle32Regular');
const QuestionCircle48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 4a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm.25 28a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0-19A6.37 6.37 0 0 0 18 19.25a1.25 1.25 0 0 0 2.47.25l.02-.12.02-.32a3.88 3.88 0 0 1 3.74-3.56A3.87 3.87 0 0 1 28 19.25c0 1.19-.42 2.04-1.62 3.4l-.2.23-1.03 1.1c-1.64 1.77-2.32 2.99-2.31 4.78a1.25 1.25 0 0 0 2.44.35l.03-.12.02-.12v-.13l.01-.16c.04-.8.4-1.49 1.28-2.5l.19-.22 1.01-1.08c1.91-2.06 2.68-3.41 2.68-5.53A6.36 6.36 0 0 0 24.25 13Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle48Filled = wrapIcon_1.default( /*#__PURE__*/QuestionCircle48FilledIcon, 'QuestionCircle48Filled');
const QuestionCircle48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24 4a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm0 2.5a17.5 17.5 0 1 0 0 35 17.5 17.5 0 0 0 0-35Zm.25 25.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-19a6.36 6.36 0 0 1 6.25 6.25c0 2.12-.77 3.47-2.68 5.53l-1.01 1.08c-1.03 1.14-1.43 1.87-1.47 2.72V28.87l-.03.12a1.25 1.25 0 0 1-2.47-.23c-.01-1.79.67-3.01 2.3-4.79l1.03-1.1C27.53 21.39 28 20.5 28 19.26a3.87 3.87 0 0 0-3.75-3.75 3.88 3.88 0 0 0-3.74 3.56l-.02.32a1.25 1.25 0 0 1-2.49-.13A6.37 6.37 0 0 1 24.25 13Z",
    fill: primaryFill
  }));
  ;
};
exports.QuestionCircle48Regular = wrapIcon_1.default( /*#__PURE__*/QuestionCircle48RegularIcon, 'QuestionCircle48Regular');
const QuizNew20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1-.4-4H5.5a.5.5 0 0 1 0-1h4.1A5.5 5.5 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 11h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM8 5c.2 0 .38.12.46.3l2 4.5a.5.5 0 1 1-.92.4L9.01 9H6.99l-.53 1.2a.5.5 0 0 1-.92-.4l2-4.5A.5.5 0 0 1 8 5Zm.56 3L8 6.73 7.44 8h1.12Zm4.94-2.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm5.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew20Filled = wrapIcon_1.default( /*#__PURE__*/QuizNew20FilledIcon, 'QuizNew20Filled');
const QuizNew20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v3.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm3.7 10c.1-.35.24-.68.4-1H5.5a.5.5 0 0 0 0 1h3.7Zm-.7 2a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3ZM8 5c.2 0 .38.12.46.3l2 4.5a.5.5 0 1 1-.92.4L9.01 9H6.99l-.53 1.2a.5.5 0 0 1-.92-.4l2-4.5A.5.5 0 0 1 8 5Zm.56 3L8 6.73 7.44 8h1.12Zm4.94-2.5a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1Zm5.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew20Regular = wrapIcon_1.default( /*#__PURE__*/QuizNew20RegularIcon, 'QuizNew20Regular');
const QuizNew24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.52 9 10 7.73 9.48 9h1.04ZM5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.27a6.47 6.47 0 0 1-.52-6H5.75a.75.75 0 0 1 0-1.5h6.63A6.49 6.49 0 0 1 21 12.02V5.75A2.75 2.75 0 0 0 18.25 3H5.75Zm3.5 15.5h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5Zm1.44-13.04 2.25 5.5a.75.75 0 0 1-1.39.57l-.42-1.03H8.87l-.43 1.03a.75.75 0 0 1-1.38-.56l2.25-5.5a.75.75 0 0 1 1.38 0Zm5.81.29V7h1.25a.75.75 0 0 1 0 1.5H16.5v1.25a.75.75 0 0 1-1.5 0V8.5h-1.25a.75.75 0 0 1 0-1.5H15V5.75a.75.75 0 0 1 1.5 0ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 1 1 0 1H18Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew24Filled = wrapIcon_1.default( /*#__PURE__*/QuizNew24FilledIcon, 'QuizNew24Filled');
const QuizNew24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27c-.46-.3-.97-.53-1.5-.7V5.74c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.56c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm3.75 7.75h5.63a6.5 6.5 0 0 0-.88 1.5H6.75a.75.75 0 0 1 0-1.5Zm3.5 5h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5ZM10 5c.3 0 .58.18.7.46l2.24 5.5a.75.75 0 0 1-1.39.57l-.42-1.03H8.87l-.43 1.03a.75.75 0 0 1-1.38-.56l2.25-5.5A.75.75 0 0 1 10 5Zm-.52 4h1.04L10 7.73 9.48 9Zm6.27-4c.41 0 .75.33.75.75V7h1.25a.75.75 0 0 1 0 1.5H16.5v1.25a.75.75 0 0 1-1.5 0V8.5h-1.25a.75.75 0 0 1 0-1.5H15V5.75c0-.42.34-.75.75-.75ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 1 1 0 1H18Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew24Regular = wrapIcon_1.default( /*#__PURE__*/QuizNew24RegularIcon, 'QuizNew24Regular');
const QuizNew28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.48 11h-1.96l.98-2.32.98 2.32ZM3 5.75A2.75 2.75 0 0 1 5.75 3h16.5A2.75 2.75 0 0 1 25 5.75v8.79A7.47 7.47 0 0 0 14.45 16H7.23a.75.75 0 0 0 0 1.5h6.35a7.47 7.47 0 0 0 .87 7.5h-8.7A2.75 2.75 0 0 1 3 22.25V5.75Zm9.2.7a.75.75 0 0 0-1.39 0l-2.75 6.51a.75.75 0 1 0 1.38.58l.44-1.04h3.24l.44 1.04a.75.75 0 0 0 1.38-.58l-2.75-6.5Zm-5.72 14.3c0 .42.33.75.75.75h4.52a.75.75 0 0 0 0-1.5H7.23a.75.75 0 0 0-.75.75Zm12.02-14a.75.75 0 0 0-1.5 0V8h-1.25a.75.75 0 0 0 0 1.5H17v1.25a.75.75 0 0 0 1.5 0V9.5h1.25a.75.75 0 0 0 0-1.5H18.5V6.75Zm8.45 13.75a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1h3.5v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1h-3.5v-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew28Filled = wrapIcon_1.default( /*#__PURE__*/QuizNew28FilledIcon, 'QuizNew28Filled');
const QuizNew28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h16.5A2.75 2.75 0 0 1 25 5.75v8.75a7.49 7.49 0 0 0-1.5-.88V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h7.87c.24.54.53 1.04.88 1.5H5.75A2.75 2.75 0 0 1 3 22.25V5.75ZM6.75 16h7.75a7.5 7.5 0 0 0-.88 1.5H6.75a.75.75 0 0 1 0-1.5ZM6 20.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM11.5 6c.3 0 .57.18.7.46l2.74 6.5a.75.75 0 1 1-1.38.58l-.44-1.04H9.88l-.44 1.04a.75.75 0 1 1-1.38-.58l2.75-6.5a.75.75 0 0 1 .7-.46Zm-.98 5h1.96l-.98-2.32-.98 2.32Zm7.23-5c.41 0 .75.34.75.75V8h1.25a.75.75 0 0 1 0 1.5H18.5v1.25a.75.75 0 0 1-1.5 0V9.5h-1.25a.75.75 0 0 1 0-1.5H17V6.75c0-.41.34-.75.75-.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew28Regular = wrapIcon_1.default( /*#__PURE__*/QuizNew28RegularIcon, 'QuizNew28Regular');
const QuizNew48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.64 19.02h3.71l-1.85-4.5-1.86 4.5ZM11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h13.27a12.94 12.94 0 0 1-1.24-11.5H11.25a1.25 1.25 0 1 1 0-2.5h13.27A12.99 12.99 0 0 1 42 23.75v-12.5C42 8.35 39.65 6 36.75 6h-25.5ZM10 35.25c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 0 1 0 2.5h-8c-.69 0-1.25-.56-1.25-1.25ZM19.5 10c.5 0 .96.3 1.15.77l4.76 11.5a1.25 1.25 0 0 1-2.32.96l-.7-1.71H16.6l-.7 1.71a1.25 1.25 0 1 1-2.32-.95l4.75-11.5c.2-.48.65-.78 1.16-.78Zm12.25 0c.69 0 1.25.56 1.25 1.25V14h2.75a1.25 1.25 0 1 1 0 2.5H33v2.75a1.25 1.25 0 0 1-2.5 0V16.5h-2.75a1.25 1.25 0 1 1 0-2.5h2.75v-2.75c0-.7.56-1.25 1.25-1.25Zm14.73 25a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew48Filled = wrapIcon_1.default( /*#__PURE__*/QuizNew48FilledIcon, 'QuizNew48Filled');
const QuizNew48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h13.27c-.5-.78-.92-1.62-1.25-2.5H11.25a2.75 2.75 0 0 1-2.75-2.75v-25.5a2.75 2.75 0 0 1 2.75-2.75h25.5a2.75 2.75 0 0 1 2.75 2.75v11.39c.88.28 1.72.66 2.5 1.11v-12.5C42 8.35 39.65 6 36.75 6h-25.5Zm13.27 22c-.5.78-.92 1.61-1.24 2.5H11.25a1.25 1.25 0 1 1 0-2.5h13.27ZM33 11.25a1.25 1.25 0 0 0-2.5 0V14h-2.75a1.25 1.25 0 1 0 0 2.5h2.75v2.75a1.25 1.25 0 0 0 2.5 0V16.5h2.75a1.25 1.25 0 1 0 0-2.5H33v-2.75Zm-12.35-.48a1.25 1.25 0 0 0-2.3 0l-4.76 11.5a1.25 1.25 0 1 0 2.32.96l.7-1.71h5.78l.7 1.71a1.25 1.25 0 1 0 2.32-.95l-4.76-11.5Zm.7 8.25h-3.7l1.85-4.5 1.85 4.5ZM10 35.25c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 0 1 0 2.5h-8c-.69 0-1.25-.56-1.25-1.25ZM46.48 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.QuizNew48Regular = wrapIcon_1.default( /*#__PURE__*/QuizNew48RegularIcon, 'QuizNew48Regular');
const Radar20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.28 3.24-1.09 1.1a6.5 6.5 0 1 0 1.4 10.26.75.75 0 0 1 1.07 1.06 8 8 0 1 1-1.38-12.42Zm-3.3 3.3 1.17-1.17a5.1 5.1 0 1 0 1.46 8.24.75.75 0 1 0-1.06-1.06 3.6 3.6 0 1 1-1.56-6.01Zm4.8-2.32c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 1 1-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0Zm1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Radar20Filled = wrapIcon_1.default( /*#__PURE__*/Radar20FilledIcon, 'Radar20Filled');
const Radar20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 3.38-.72.72a7 7 0 1 0 1.17 10.85.5.5 0 0 1 .7.7A8 8 0 1 1 14.5 3.39Zm-2.94 2.94.75-.75a5 5 0 1 0 1.23 7.97.5.5 0 1 0-.71-.71 4 4 0 1 1-1.27-6.51Zm4.3-2.17c.19.2.19.5 0 .7l-4.9 4.9a1 1 0 1 1-.7-.72l4.89-4.88c.2-.2.5-.2.7 0ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.Radar20Regular = wrapIcon_1.default( /*#__PURE__*/Radar20RegularIcon, 'Radar20Regular');
const RadarCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.28 3.24-1.09 1.1a6.5 6.5 0 0 0-9.66 5.02 5.5 5.5 0 0 0-1.53.9 8 8 0 0 1 12.28-7.01ZM9.75 18c.37-.46.67-.97.89-1.53a6.47 6.47 0 0 0 3.96-1.87.75.75 0 0 1 1.06 1.06A7.98 7.98 0 0 1 9.75 18ZM11 14.5c0 .17 0 .34-.02.5a5.08 5.08 0 0 0 2.63-1.4.75.75 0 1 0-1.06-1.05c-.47.47-1.04.78-1.64.93.06.33.09.67.09 1.02ZM5.5 9c.35 0 .69.03 1.02.1a3.58 3.58 0 0 1 4.47-2.56l1.16-1.17A5.1 5.1 0 0 0 5 9.02L5.5 9Zm3 .9c.64.41 1.19.96 1.6 1.6a1.5 1.5 0 0 0 1.35-1.89l4.33-4.33a.75.75 0 0 0-1.06-1.06l-4.33 4.33A1.5 1.5 0 0 0 8.5 9.9Zm8.75 3.35a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-4.25 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.RadarCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/RadarCheckmark20FilledIcon, 'RadarCheckmark20Filled');
const RadarCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 3.38-.72.72A7 7 0 0 0 3 9.6c-.36.18-.7.4-1 .65a8 8 0 0 1 12.5-6.87ZM9.75 18c.25-.31.47-.65.66-1.01a6.97 6.97 0 0 0 4.54-2.04.5.5 0 0 1 .7.7A7.98 7.98 0 0 1 9.76 18ZM11 14.5l-.01.4a4.98 4.98 0 0 0 2.55-1.36.5.5 0 1 0-.71-.71c-.54.53-1.18.88-1.86 1.05.02.2.03.41.03.62ZM5.5 9l.62.03a3.98 3.98 0 0 1 5.44-2.71l.75-.75A5 5 0 0 0 5.1 9L5.5 9Zm3.54 1.3c.24.2.46.42.67.66a1 1 0 0 0 1.26-1.22l4.88-4.89a.5.5 0 0 0-.7-.7l-4.9 4.88a1 1 0 0 0-1.2 1.26ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.RadarCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/RadarCheckmark20RegularIcon, 'RadarCheckmark20Regular');
const RadarRectangleMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.28 3.24-1.09 1.1A6.5 6.5 0 0 0 3.58 11H2.06a7.99 7.99 0 0 1 12.22-7.76ZM10 17v-.5c1.66 0 3.33-.63 4.6-1.9a.75.75 0 0 1 1.06 1.06A7.98 7.98 0 0 1 9.83 18a3 3 0 0 0 .17-1Zm0-2.5v.6c1.3 0 2.61-.5 3.6-1.5a.75.75 0 1 0-1.05-1.05 3.6 3.6 0 0 1-2.86 1.04c.2.25.31.57.31.91ZM6.5 11h.04A3.6 3.6 0 0 1 11 6.54l1.16-1.17A5.1 5.1 0 0 0 5 11h1.5Zm9.28-6.78c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 1 1-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0Zm1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM1.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5Zm7 2c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.RadarRectangleMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/RadarRectangleMultiple20FilledIcon, 'RadarRectangleMultiple20Filled');
const RadarRectangleMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 3.38-.72.72A7 7 0 0 0 3.08 11H2.05A7.99 7.99 0 0 1 14.5 3.38ZM9.83 18a3 3 0 0 0 .17-1c1.8 0 3.58-.68 4.95-2.05a.5.5 0 0 1 .7.7A7.98 7.98 0 0 1 9.84 18Zm.17-3.5v.5c1.28 0 2.56-.49 3.54-1.46a.5.5 0 1 0-.71-.71c-.8.8-1.86 1.2-2.92 1.17.06.16.09.32.09.5ZM5.1 11h1.03a4 4 0 0 1 5.43-4.68l.75-.75A5 5 0 0 0 5.1 11Zm10.75-6.85c.2.2.2.5 0 .7l-4.88 4.9a1 1 0 1 1-.71-.72l4.89-4.88c.2-.2.5-.2.7 0ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM1.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5Zm7 2c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.RadarRectangleMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/RadarRectangleMultiple20RegularIcon, 'RadarRectangleMultiple20Regular');
const RadioButton16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-9a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton16Filled = wrapIcon_1.default( /*#__PURE__*/RadioButton16FilledIcon, 'RadioButton16Filled');
const RadioButton16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton16Regular = wrapIcon_1.default( /*#__PURE__*/RadioButton16RegularIcon, 'RadioButton16Regular');
const RadioButton20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-13a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton20Filled = wrapIcon_1.default( /*#__PURE__*/RadioButton20FilledIcon, 'RadioButton20Filled');
const RadioButton20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton20Regular = wrapIcon_1.default( /*#__PURE__*/RadioButton20RegularIcon, 'RadioButton20Regular');
const RadioButton24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton24Filled = wrapIcon_1.default( /*#__PURE__*/RadioButton24FilledIcon, 'RadioButton24Filled');
const RadioButton24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-1.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButton24Regular = wrapIcon_1.default( /*#__PURE__*/RadioButton24RegularIcon, 'RadioButton24Regular');
const RadioButtonOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.15 14.85c.1.1.22.15.35.15a.5.5 0 0 0 .35-.85l-13-13a.5.5 0 0 0-.7.7l2.28 2.28a6 6 0 0 0 8.44 8.44l2.28 2.28Zm-2.99-2.98-1.42-1.43a3 3 0 0 1-4.18-4.18L4.13 4.84a5 5 0 0 0 7.03 7.03ZM4.95 2.83a6 6 0 0 1 8.22 8.22l-.74-.74a5 5 0 0 0-6.74-6.74l-.74-.74Zm5.94 5.94a3 3 0 0 0-3.66-3.66l3.66 3.66Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButtonOff16Filled = wrapIcon_1.default( /*#__PURE__*/RadioButtonOff16FilledIcon, 'RadioButtonOff16Filled');
const RadioButtonOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m1.85 1.15 13 13a.5.5 0 0 1-.7.7l-2.28-2.27a6 6 0 0 1-8.46-8.46L1.16 1.86a.5.5 0 0 1 .7-.7ZM3 8a5 5 0 0 0 5 5c1.2 0 2.3-.42 3.16-1.13L4.13 4.84A4.98 4.98 0 0 0 3 8Zm10 0a5 5 0 0 0-5-5c-.83 0-1.6.22-2.3.58l-.74-.75a6 6 0 0 1 8.2 8.2l-.74-.73c.36-.7.58-1.47.58-2.3Z",
    fill: primaryFill
  }));
  ;
};
exports.RadioButtonOff16Regular = wrapIcon_1.default( /*#__PURE__*/RadioButtonOff16RegularIcon, 'RadioButtonOff16Regular');
const Ram16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8h2V6h-2v2ZM7 8h2V6H7v2ZM4 8h2V6H4v2Zm9-5H3a2 2 0 0 0-2 2v4a2 2 0 0 0 1 1.73v1.02c0 .69.56 1.25 1.25 1.25H6.5a.5.5 0 0 0 .35-.15L8 11.71l1.15 1.14c.09.1.22.15.35.15h3.25c.69 0 1.25-.56 1.25-1.25v-1.02A2 2 0 0 0 15 9V5a2 2 0 0 0-2-2Zm0 5.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3Z",
    fill: primaryFill
  }));
  ;
};
exports.Ram16Filled = wrapIcon_1.default( /*#__PURE__*/Ram16FilledIcon, 'Ram16Filled');
const Ram16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 5h9c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5ZM9 8V6H7v2h2ZM6 6H4v2h2V6Zm4 2h2V6h-2v2ZM3 3h10a2 2 0 0 1 2 2v4a2 2 0 0 1-1 1.73v1.02c0 .69-.56 1.25-1.25 1.25H9.5a.5.5 0 0 1-.35-.15L8 11.71l-1.15 1.14a.5.5 0 0 1-.35.15H3.25C2.56 13 2 12.44 2 11.75v-1.02A2 2 0 0 1 1 9V5c0-1.1.9-2 2-2Zm.25 9h3.04l1-1H3v.75c0 .14.11.25.25.25Zm9.5 0c.14 0 .25-.11.25-.25V11H8.7l1 1h3.05Zm.25-2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10Z",
    fill: primaryFill
  }));
  ;
};
exports.Ram16Regular = wrapIcon_1.default( /*#__PURE__*/Ram16RegularIcon, 'Ram16Regular');
const Ram20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7h2.5v3H5V7Zm6.5 0v3h-3V7h3Zm1 3H15V7h-2.5v3Zm3.54-6c.26 0 .5.05.74.16A2.06 2.06 0 0 1 18 5.96V11a2 2 0 0 1-1 1.73v1.77a1.45 1.45 0 0 1-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 0 1-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 0 1-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 0 1 3 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 0 1 2 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 0 1 3.96 4h12.08Zm-.66 2.08A.95.95 0 0 0 15 6H5a.85.85 0 0 0-.4.08c-.12.06-.22.13-.31.22A1 1 0 0 0 4 7v3c0 .15.03.28.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.25.08.39.08h10c.14 0 .27-.02.4-.08.12-.06.22-.13.31-.22A1 1 0 0 0 16 10V7a1 1 0 0 0-.3-.71 1.1 1.1 0 0 0-.32-.21Z",
    fill: primaryFill
  }));
  ;
};
exports.Ram20Filled = wrapIcon_1.default( /*#__PURE__*/Ram20FilledIcon, 'Ram20Filled');
const Ram20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.04 4c.26 0 .5.05.74.16A2.06 2.06 0 0 1 18 5.96V11a2 2 0 0 1-1 1.73v1.77a1.45 1.45 0 0 1-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 0 1-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 0 1-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 0 1 3 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 0 1 2 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 0 1 3.96 4h12.08ZM17 6a.95.95 0 0 0-.08-.38 1.1 1.1 0 0 0-.2-.32A1 1 0 0 0 16 5H3.99a.97.97 0 0 0-.7.29c-.1.09-.16.2-.22.32A.85.85 0 0 0 3 6v5c0 .14.03.27.08.4.05.11.12.22.2.31.1.1.2.16.32.21.12.05.25.07.4.08h12a.97.97 0 0 0 .7-.29c.1-.09.16-.2.22-.32A.85.85 0 0 0 17 11V6Zm-2 0c.14 0 .26.03.38.08s.23.12.32.2A1 1 0 0 1 16 7v3.01a.97.97 0 0 1-.29.7c-.09.1-.2.16-.32.22A.85.85 0 0 1 15 11H5a.97.97 0 0 1-.4-.08 1.1 1.1 0 0 1-.31-.2.85.85 0 0 1-.21-.32A1.2 1.2 0 0 1 4 10V7a.97.97 0 0 1 .29-.7c.09-.1.2-.16.32-.22A.85.85 0 0 1 5 6h10ZM7.5 7H5v3h2.5V7Zm4 3V7h-3v3h3Zm1 0H15V7h-2.5v3Zm3.5 3H4v1.5c0 .14.05.25.15.35.1.1.21.15.35.15h3.8l1.35-1.35c.1-.1.21-.15.35-.15.14 0 .25.05.35.15L11.71 15h3.79c.14 0 .25-.05.35-.15.1-.1.15-.21.15-.35V13Z",
    fill: primaryFill
  }));
  ;
};
exports.Ram20Regular = wrapIcon_1.default( /*#__PURE__*/Ram20RegularIcon, 'Ram20Regular');
const RatingMature16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7Zm3.92.74A.5.5 0 0 0 5 5.5v5a.5.5 0 1 0 1 0V7.24l1.58 2.53a.5.5 0 0 0 .84 0L10 7.24v3.26a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.92-.26L8 8.56 5.92 5.24Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature16Filled = wrapIcon_1.default( /*#__PURE__*/RatingMature16FilledIcon, 'RatingMature16Filled');
const RatingMature16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.92 5.24A.5.5 0 0 0 5 5.5v5a.5.5 0 1 0 1 0V7.24l1.58 2.53a.5.5 0 0 0 .84 0L10 7.24v3.26a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.92-.26L8 8.56 5.92 5.24ZM4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature16Regular = wrapIcon_1.default( /*#__PURE__*/RatingMature16RegularIcon, 'RatingMature16Regular');
const RatingMature20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.92 1.24A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.24l1.58 2.53a.5.5 0 0 0 .84 0L12 9.24v3.26a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.92-.26L10 10.56 7.92 7.24Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature20Filled = wrapIcon_1.default( /*#__PURE__*/RatingMature20FilledIcon, 'RatingMature20Filled');
const RatingMature20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.92 7.24A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.24l1.58 2.53a.5.5 0 0 0 .84 0L12 9.24v3.26a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.92-.26L10 10.56 7.92 7.24ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature20Regular = wrapIcon_1.default( /*#__PURE__*/RatingMature20RegularIcon, 'RatingMature20Regular');
const RatingMature24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25Zm5.83 2.02a.75.75 0 0 0-1.33.48v6.5a.75.75 0 1 0 1.5 0v-4.43l2.42 2.91a.75.75 0 0 0 1.16 0l2.42-2.9v4.42a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.33-.48L12 12.07l-3.17-3.8Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature24Filled = wrapIcon_1.default( /*#__PURE__*/RatingMature24FilledIcon, 'RatingMature24Filled');
const RatingMature24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.83 8.27a.75.75 0 0 0-1.33.48v6.5a.75.75 0 1 0 1.5 0v-4.43l2.42 2.91a.75.75 0 0 0 1.16 0l2.42-2.9v4.42a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.33-.48L12 12.07l-3.17-3.8ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25Z",
    fill: primaryFill
  }));
  ;
};
exports.RatingMature24Regular = wrapIcon_1.default( /*#__PURE__*/RatingMature24RegularIcon, 'RatingMature24Regular');
const RatioOneToOne20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM7 7.5v5a.5.5 0 0 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5A.5.5 0 0 1 7 7.5Zm7 0v5a.5.5 0 1 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5a.5.5 0 0 1 .72.45Zm-4 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.RatioOneToOne20Filled = wrapIcon_1.default( /*#__PURE__*/RatioOneToOne20FilledIcon, 'RatioOneToOne20Filled');
const RatioOneToOne20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.76 7.07c.15.1.24.26.24.43v5a.5.5 0 0 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5a.5.5 0 0 1 .48.02ZM14 7.5a.5.5 0 0 0-.72-.45l-1 .5a.5.5 0 1 0 .44.9L13 8.3v4.19a.5.5 0 0 0 1 0v-5Zm-4 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM4.75 5C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 5.78 16.22 5 15.25 5H4.75Z",
    fill: primaryFill
  }));
  ;
};
exports.RatioOneToOne20Regular = wrapIcon_1.default( /*#__PURE__*/RatioOneToOne20RegularIcon, 'RatioOneToOne20Regular');
const RatioOneToOne24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25ZM8.5 8.75v6.5a.75.75 0 0 1-1.5 0v-5.1l-.33.22a.75.75 0 1 1-.84-1.24l1.5-1a.75.75 0 0 1 1.17.62Zm9 0v6.5a.75.75 0 1 1-1.5 0v-5.1l-.33.22a.75.75 0 1 1-.84-1.24l1.5-1a.75.75 0 0 1 1.17.62ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.RatioOneToOne24Filled = wrapIcon_1.default( /*#__PURE__*/RatioOneToOne24FilledIcon, 'RatioOneToOne24Filled');
const RatioOneToOne24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 8.75a.75.75 0 0 0-1.17-.62l-1.5 1a.75.75 0 1 0 .84 1.24l.33-.22v5.1a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.17-.62l-1.5 1a.75.75 0 1 0 .84 1.24l.33-.22v5.1a.75.75 0 1 0 1.5 0v-6.5ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25ZM3.5 7.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5Z",
    fill: primaryFill
  }));
  ;
};
exports.RatioOneToOne24Regular = wrapIcon_1.default( /*#__PURE__*/RatioOneToOne24RegularIcon, 'RatioOneToOne24Regular');
const ReOrder16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 9.25h10.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h10.6-10.5Zm0-4h10.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h10.6-10.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrder16Filled = wrapIcon_1.default( /*#__PURE__*/ReOrder16FilledIcon, 'ReOrder16Filled');
const ReOrder16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 9h11a.5.5 0 0 1 .09 1H2.5a.5.5 0 0 1-.09-1H13.5h-11Zm0-3h11a.5.5 0 0 1 .09 1H2.5a.5.5 0 0 1-.09-1H13.5h-11Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrder16Regular = wrapIcon_1.default( /*#__PURE__*/ReOrder16RegularIcon, 'ReOrder16Regular');
const ReOrder24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 13h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Zm0-4h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrder24Filled = wrapIcon_1.default( /*#__PURE__*/ReOrder24FilledIcon, 'ReOrder24Filled');
const ReOrder24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 13.25h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-4h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrder24Regular = wrapIcon_1.default( /*#__PURE__*/ReOrder24RegularIcon, 'ReOrder24Regular');
const ReOrderDotsHorizontal16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-4.5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM3.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm7.5 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM8 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-6-1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal16Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal16FilledIcon, 'ReOrderDotsHorizontal16Filled');
const ReOrderDotsHorizontal16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal16Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal16RegularIcon, 'ReOrderDotsHorizontal16Regular');
const ReOrderDotsHorizontal20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM5.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8.5 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM10.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM4 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal20Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal20FilledIcon, 'ReOrderDotsHorizontal20Filled');
const ReOrderDotsHorizontal20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM9 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal20Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal20RegularIcon, 'ReOrderDotsHorizontal20Regular');
const ReOrderDotsHorizontal24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal24Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal24FilledIcon, 'ReOrderDotsHorizontal24Filled');
const ReOrderDotsHorizontal24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsHorizontal24Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsHorizontal24RegularIcon, 'ReOrderDotsHorizontal24Regular');
const ReOrderDotsVertical16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical16Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical16FilledIcon, 'ReOrderDotsVertical16Filled');
const ReOrderDotsVertical16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical16Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical16RegularIcon, 'ReOrderDotsVertical16Regular');
const ReOrderDotsVertical20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical20Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical20FilledIcon, 'ReOrderDotsVertical20Filled');
const ReOrderDotsVertical20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical20Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical20RegularIcon, 'ReOrderDotsVertical20Regular');
const ReOrderDotsVertical24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical24Filled = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical24FilledIcon, 'ReOrderDotsVertical24Filled');
const ReOrderDotsVertical24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.ReOrderDotsVertical24Regular = wrapIcon_1.default( /*#__PURE__*/ReOrderDotsVertical24RegularIcon, 'ReOrderDotsVertical24Regular');
const ReadAloud16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.04 1.5c.14-.4.57-.6.96-.46.22.1 0 0 0 0h.01l.02.01a2.15 2.15 0 0 1 .19.08c.11.06.28.14.47.26.38.23.87.6 1.37 1.14 1 1.1 1.94 2.91 1.94 5.72a.75.75 0 0 1-1.5 0c0-2.44-.8-3.89-1.56-4.72a4.69 4.69 0 0 0-1.43-1.07h-.02a.75.75 0 0 1-.45-.96ZM7.2 3.47a.75.75 0 0 0-1.4 0l-3.75 9.5a.75.75 0 0 0 1.4.56l.9-2.28h4.3l.9 2.28a.75.75 0 1 0 1.4-.56L7.2 3.47Zm.86 6.28H4.94L6.5 5.79l1.56 3.96Zm2.67-6.08a.75.75 0 0 0-.96 1.15v.01a1.83 1.83 0 0 1 .18.17c.12.12.28.3.44.53.32.46.61 1.06.61 1.72a.75.75 0 0 0 1.5 0c0-1.09-.46-1.99-.89-2.59a5.94 5.94 0 0 0-.85-.96l-.02-.02h-.01Zm-.96 1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud16Filled = wrapIcon_1.default( /*#__PURE__*/ReadAloud16FilledIcon, 'ReadAloud16Filled');
const ReadAloud16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.03 1.32a.5.5 0 0 1 .65-.29l.02.01a2.25 2.25 0 0 1 .19.08l.5.27c.4.25.94.63 1.47 1.2A8.3 8.3 0 0 1 15 8.5a.5.5 0 0 1-1 0c0-2.61-.95-4.24-1.86-5.22a6.07 6.07 0 0 0-1.81-1.31.5.5 0 0 1-.3-.65Zm-3.07 2a.5.5 0 0 0-.92 0l-4 10a.5.5 0 1 0 .92.37L4.04 11h4.92l1.08 2.69a.5.5 0 1 0 .92-.38l-4-10ZM8.56 10H4.44L6.5 4.85 8.56 10Zm1.66-6.45a.5.5 0 0 0-.45.9h.01a1.54 1.54 0 0 1 .24.15 3.45 3.45 0 0 1 1.48 2.9.5.5 0 0 0 1 0 4.45 4.45 0 0 0-2.24-3.93l-.02-.01h-.01s.15.08 0 0Zm-.45.9Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud16Regular = wrapIcon_1.default( /*#__PURE__*/ReadAloud16RegularIcon, 'ReadAloud16Regular');
const ReadAloud20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.84 2.14c.2-.36.66-.5 1.02-.3a9.94 9.94 0 0 1 5.39 8.08.75.75 0 1 1-1.5.16 8.45 8.45 0 0 0-4.6-6.92.75.75 0 0 1-.3-1.02ZM8.7 4.22a.75.75 0 0 0-1.38 0l-4.5 11a.75.75 0 0 0 1.38.56l1.45-3.53h4.72l1.45 3.53a.75.75 0 0 0 1.38-.56l-4.5-11Zm1.06 6.53h-3.5L8 6.48l1.75 4.27Zm2.62-6.4a.75.75 0 0 0-.74 1.3c1.52.87 2.4 2.4 2.63 3.96a.75.75 0 1 0 1.48-.22 6.92 6.92 0 0 0-3.37-5.04Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud20Filled = wrapIcon_1.default( /*#__PURE__*/ReadAloud20FilledIcon, 'ReadAloud20Filled');
const ReadAloud20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.06 2.26a.5.5 0 0 1 .68-.2A9.7 9.7 0 0 1 18 9.94a.5.5 0 0 1-1 .12 8.7 8.7 0 0 0-4.74-7.12.5.5 0 0 1-.2-.68Zm-3.6 2.05a.5.5 0 0 0-.92 0l-4.5 11a.5.5 0 1 0 .92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 1 0 .92-.38l-4.5-11ZM10.12 11H5.88L8 5.82 10.12 11Zm2.13-6.43a.5.5 0 0 0-.5.86 5.67 5.67 0 0 1 2.76 4.14.5.5 0 0 0 .98-.14 6.67 6.67 0 0 0-3.24-4.86Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud20Regular = wrapIcon_1.default( /*#__PURE__*/ReadAloud20RegularIcon, 'ReadAloud20Regular');
const ReadAloud24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.6 2.08a1 1 0 0 1 1.32-.49c.26.14 0 0 0 0h.01l.02.02a4.9 4.9 0 0 1 .3.16 12.27 12.27 0 0 1 3.11 2.5A10.75 10.75 0 0 1 22 13.13a1 1 0 0 1-1.98-.26 8.75 8.75 0 0 0-2.13-7.27 10.27 10.27 0 0 0-2.8-2.19 1 1 0 0 1-.49-1.33ZM9.92 4.63a1 1 0 0 0-1.86 0l-5.5 14a1 1 0 0 0 1.86.74L6.15 15h5.7l1.72 4.37a1 1 0 0 0 1.86-.74l-5.5-14ZM11.07 13H6.93L9 7.73 11.07 13Zm4.38-7.4a1 1 0 0 0-.9 1.8c.3.14.8.57 1.23 1.26.42.67.72 1.48.72 2.34a1 1 0 0 0 2 0c0-1.31-.45-2.5-1.03-3.41a5.57 5.57 0 0 0-2.02-1.98Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud24Filled = wrapIcon_1.default( /*#__PURE__*/ReadAloud24FilledIcon, 'ReadAloud24Filled');
const ReadAloud24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.86 2.1a.75.75 0 1 0-.72 1.3 10.23 10.23 0 0 1 4.1 3.83c.9 1.53 1.31 3.35 1.26 5.46a.75.75 0 0 0 1.5.04c.06-2.38-.43-4.47-1.46-6.25a11.72 11.72 0 0 0-4.68-4.39Zm-.24 3.6A.75.75 0 1 0 14.91 7c.72.4 1.3.96 1.73 1.72.44.76.65 1.54.63 2.37a.75.75 0 0 0 1.5.03 5.92 5.92 0 0 0-.83-3.15 5.92 5.92 0 0 0-2.32-2.29ZM9 4c.3 0 .58.19.7.47l5.75 14.5a.75.75 0 0 1-1.4.56L12.25 15h-6.5l-1.8 4.53a.75.75 0 1 1-1.4-.56L8.3 4.47A.75.75 0 0 1 9 4Zm0 2.78L6.34 13.5h5.32L9 6.78Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud24Regular = wrapIcon_1.default( /*#__PURE__*/ReadAloud24RegularIcon, 'ReadAloud24Regular');
const ReadAloud28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.6 2.58a1 1 0 0 1 1.32-.49A12.89 12.89 0 0 1 26 14.54a1 1 0 0 1-2-.08c.26-6.28-3.76-9.55-5.92-10.55a1 1 0 0 1-.49-1.33Zm-5.91 2.07a1 1 0 0 0-1.88 0l-6.75 18a1 1 0 0 0 1.88.7l2-5.35h7.62l2 5.35a1 1 0 0 0 1.88-.7l-6.75-18ZM13.8 16H7.69l3.06-8.15L13.81 16Zm4.77-9.81a1 1 0 0 0-1.16 1.62c.8.57 1.42 1.2 1.86 2 .44.78.72 1.8.72 3.19a1 1 0 0 0 2 0c0-1.68-.34-3.04-.97-4.17a8.04 8.04 0 0 0-2.45-2.64Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud28Filled = wrapIcon_1.default( /*#__PURE__*/ReadAloud28FilledIcon, 'ReadAloud28Filled');
const ReadAloud28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.57 2.93a.75.75 0 0 1 1-.36 12.64 12.64 0 0 1 6.93 12.21.75.75 0 1 1-1.5-.06c.27-6.41-3.85-9.76-6.07-10.79a.75.75 0 0 1-.36-1Zm-6.12 1.55a.75.75 0 0 0-1.4 0l-7 18.5a.75.75 0 1 0 1.4.54L6.54 18h8.42l2.09 5.52a.75.75 0 0 0 1.4-.54l-7-18.5ZM14.4 16.5H7.11l3.64-9.63 3.64 9.63Zm3.8-9.86a.75.75 0 1 0-.88 1.22c1.68 1.2 3.19 2.68 3.19 5.39a.75.75 0 1 0 1.5 0c0-3.44-2-5.31-3.81-6.61Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadAloud28Regular = wrapIcon_1.default( /*#__PURE__*/ReadAloud28RegularIcon, 'ReadAloud28Regular');
const ReadingList16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.39a.61.61 0 0 1 1.13-.34.75.75 0 0 0 1.24-.84A2.11 2.11 0 1 0 4 6.5h7.31a.75.75 0 0 0 0-1.5h-7.2a.61.61 0 0 1-.61-.61ZM7.75 2.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-3 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM2 10.75c0-.41.34-.75.75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm2.75 1.75a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5h-8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList16Filled = wrapIcon_1.default( /*#__PURE__*/ReadingList16FilledIcon, 'ReadingList16Filled');
const ReadingList16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5a1 1 0 0 1 1.84-.56.5.5 0 1 0 .83-.55A2 2 0 1 0 4.07 7h7.43a.5.5 0 0 0 0-1H4.08a.5.5 0 0 0-.04 0A1 1 0 0 1 3 5Zm4.5-1a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1h-6Zm-3 4a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9ZM2 10.5c0-.28.22-.5.5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5ZM4.5 12a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList16Regular = wrapIcon_1.default( /*#__PURE__*/ReadingList16RegularIcon, 'ReadingList16Regular');
const ReadingList20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 5.5a1 1 0 0 1 1.84-.56.75.75 0 0 0 1.24-.83A2.5 2.5 0 1 0 4.6 8h10.67a.75.75 0 0 0 0-1.5H4.5a1 1 0 0 1-1-1ZM9.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-4 5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5H5.75ZM2 12.25c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM5.75 14a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5H5.75Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList20Filled = wrapIcon_1.default( /*#__PURE__*/ReadingList20FilledIcon, 'ReadingList20Filled');
const ReadingList20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25a1.25 1.25 0 0 1 2.3-.7.5.5 0 1 0 .82-.55 2.25 2.25 0 1 0-1.74 3.5H15.5a.5.5 0 0 0 0-1H4.38a.5.5 0 0 0-.06 0A1.25 1.25 0 0 1 3 6.25ZM8.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM2 13c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 2 13Zm3.5 2a.5.5 0 0 0 0 1h12a.5.5 0 1 0 0-1h-12Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList20Regular = wrapIcon_1.default( /*#__PURE__*/ReadingList20RegularIcon, 'ReadingList20Regular');
const ReadingList24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 18a1 1 0 0 1 .12 2H7a1 1 0 0 1-.12-2H20Zm-3-3a1 1 0 0 1 .12 2H4a1 1 0 0 1-.12-2H17Zm3-3a1 1 0 0 1 .12 2H7a1 1 0 0 1-.12-2H20ZM6 5a3 3 0 0 1 2.78 1.87 1 1 0 0 1-1.8.86l-.05-.1A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .12 2H6a3 3 0 0 1 0-6Zm14 1a1 1 0 0 1 .12 2H11a1 1 0 0 1-.12-2H20Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList24Filled = wrapIcon_1.default( /*#__PURE__*/ReadingList24FilledIcon, 'ReadingList24Filled');
const ReadingList24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 18h13a.75.75 0 0 1 .1 1.5H7a.75.75 0 0 1-.1-1.5H7Zm10-3a.75.75 0 0 1 .1 1.5H4a.75.75 0 0 1-.1-1.5H17Zm3-3a.75.75 0 0 1 .1 1.5H7a.75.75 0 0 1-.1-1.5H20ZM6 5c1.13 0 2.13.69 2.55 1.72a.75.75 0 0 1-1.35.65l-.04-.09A1.25 1.25 0 1 0 6 9h11.5a.75.75 0 0 1 .1 1.5H6A2.75 2.75 0 0 1 6 5Zm14 1a.75.75 0 0 1 .1 1.5H11a.75.75 0 0 1-.1-1.5H20Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList24Regular = wrapIcon_1.default( /*#__PURE__*/ReadingList24RegularIcon, 'ReadingList24Regular');
const ReadingList28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 7.5a1.5 1.5 0 0 1 2.75-.83A1 1 0 0 0 8.4 5.56 3.5 3.5 0 1 0 5.48 11H21a1 1 0 1 0 0-2H5.5A1.5 1.5 0 0 1 4 7.5ZM12 5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H12Zm-5 8a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H7Zm-5 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H7Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList28Filled = wrapIcon_1.default( /*#__PURE__*/ReadingList28FilledIcon, 'ReadingList28Filled');
const ReadingList28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 7.51a1.98 1.98 0 0 1 3.63-1.1.75.75 0 1 0 1.25-.83 3.48 3.48 0 1 0-2.94 5.4c.05.02.1.02.14.02h15.67a.75.75 0 0 0 0-1.5H5.62a.75.75 0 0 0-.14-.01c-1.1 0-1.98-.89-1.98-1.98ZM11.75 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5h-13.5Zm-5 7.25a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H6.75ZM2 17.75c0-.41.33-.75.75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm4.74 2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H6.74Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingList28Regular = wrapIcon_1.default( /*#__PURE__*/ReadingList28RegularIcon, 'ReadingList28Regular');
const ReadingListAdd16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3.88a.61.61 0 0 1 1.13-.34.75.75 0 0 0 1.24-.83 2.11 2.11 0 1 0-2.09 3.26c.07.02.15.03.22.03h3.34a5.47 5.47 0 0 1 4.72-.78.75.75 0 0 0-.75-.72H4.11a.61.61 0 0 1-.61-.62ZM4.75 7h1.5a5.5 5.5 0 0 0-.88 1.5h-.62a.75.75 0 0 1 0-1.5Zm-2 2.5h2.34a5.53 5.53 0 0 0-.07 1.5H2.75a.75.75 0 0 1 0-1.5Zm2 2.5h.46c.15.54.38 1.04.68 1.5H4.75a.75.75 0 0 1 0-1.5Zm3-10a.75.75 0 1 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd16Filled = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd16FilledIcon, 'ReadingListAdd16Filled');
const ReadingListAdd16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4a1 1 0 0 1 1.84-.56.5.5 0 1 0 .83-.55A2 2 0 1 0 4.07 6h3.27c.89-.63 1.98-1 3.15-1H4.08a.5.5 0 0 0-.04 0A1 1 0 0 1 3 4Zm.5 3h2.76c-.26.3-.48.64-.66 1H3.5a.5.5 0 1 1 0-1Zm-1 2h2.7c-.08.32-.15.66-.18 1H2.5a.5.5 0 0 1 0-1Zm1 2h1.52c.03.34.1.68.19 1H3.5a.5.5 0 0 1 0-1Zm4-8a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1h-6Zm7.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 1 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 1 0 0-1H11V8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd16Regular = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd16RegularIcon, 'ReadingListAdd16Regular');
const ReadingListAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 5.5a1 1 0 0 1 1.84-.56.75.75 0 0 0 1.24-.83A2.5 2.5 0 1 0 4.6 8h10.67a.75.75 0 0 0 0-1.5H4.5a1 1 0 0 1-1-1ZM9.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-4 5a.75.75 0 0 0 0 1.5h4.98A5.48 5.48 0 0 1 14.5 9H5.75Zm-3 2.5h7.14c-.3.46-.53.96-.68 1.5H2.75a.75.75 0 0 1 0-1.5Zm3 2.5h3.27a5.57 5.57 0 0 0 .07 1.5H5.75a.75.75 0 0 1 0-1.5Zm13.25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd20Filled = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd20FilledIcon, 'ReadingListAdd20Filled');
const ReadingListAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.25a1.25 1.25 0 0 1 2.3-.7.5.5 0 1 0 .82-.55 2.25 2.25 0 1 0-1.74 3.5H15.5a.5.5 0 0 0 0-1H4.38a.5.5 0 0 0-.06 0A1.25 1.25 0 0 1 3 5.25ZM8.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h5.84c.9-.63 1.98-1 3.16-1h-9Zm-3 2.5h7.39c-.2.31-.38.65-.52 1H2.5a.5.5 0 0 1 0-1Zm3 2.5h3.52a5.57 5.57 0 0 0 0 1H5.5a.5.5 0 0 1 0-1Zm13.5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd20Regular = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd20RegularIcon, 'ReadingListAdd20Regular');
const ReadingListAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2h-.09a.5.5 0 0 0-.4.4l-.01.1V17h-2.6a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 0 0 .4-.4l.01-.1V18h2.6a.5.5 0 0 0 .4-.41v-.18a.5.5 0 0 0-.4-.4l-.1-.01H18v-2.6a.5.5 0 0 0-.41-.4h-.09Zm-6.48 4c.05.7.22 1.38.48 2H7a1 1 0 0 1-.12-2h4.14Zm.48-3c-.26.62-.43 1.3-.48 2H4a1 1 0 0 1-.12-2h7.62Zm2.54-3c-.81.51-1.5 1.2-2.02 2H7a1 1 0 0 1-.12-2h7.16ZM6 5a3 3 0 0 1 2.78 1.87 1 1 0 0 1-1.8.86l-.05-.1A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .12 2H6a3 3 0 0 1 0-6Zm14 1a1 1 0 0 1 .12 2H11a1 1 0 0 1-.12-2H20Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd24Filled = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd24FilledIcon, 'ReadingListAdd24Filled');
const ReadingListAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2h-.09a.5.5 0 0 0-.4.4l-.01.1V17h-2.6a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 0 0 .4-.4l.01-.1V18h2.6a.5.5 0 0 0 .4-.41v-.18a.5.5 0 0 0-.4-.4l-.1-.01H18v-2.6a.5.5 0 0 0-.41-.4h-.09Zm-6.48 4c.04.52.14 1.02.3 1.5H7a.75.75 0 0 1-.1-1.5H11.02Zm.48-3c-.2.47-.34.98-.42 1.5H4a.75.75 0 0 1-.1-1.5h7.6Zm2.54-3c-.64.4-1.2.91-1.66 1.5H7a.75.75 0 0 1-.1-1.5h7.14ZM6 5c1.13 0 2.13.69 2.55 1.72a.75.75 0 0 1-1.35.65l-.04-.09A1.25 1.25 0 1 0 6 9h11.5a.75.75 0 0 1 .1 1.5H6A2.75 2.75 0 0 1 6 5Zm14 1a.75.75 0 0 1 .1 1.5H11a.75.75 0 0 1-.1-1.5H20Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd24Regular = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd24RegularIcon, 'ReadingListAdd24Regular');
const ReadingListAdd28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 7.5a1.5 1.5 0 0 1 2.75-.83A1 1 0 0 0 8.4 5.56 3.5 3.5 0 1 0 5.46 11H21a1 1 0 1 0 0-2H5.5A1.5 1.5 0 0 1 4 7.5ZM12 5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H12Zm-5 8a1 1 0 1 0 0 2h8.4a7.47 7.47 0 0 1 5.06-2H7Zm-4 4h10.87c-.33.62-.58 1.3-.72 2H3a1 1 0 1 1 0-2Zm4 4h6.02c.04.7.18 1.37.4 2H7a1 1 0 1 1 0-2Zm20-.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd28Filled = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd28FilledIcon, 'ReadingListAdd28Filled');
const ReadingListAdd28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 7.51a1.98 1.98 0 0 1 3.63-1.1.75.75 0 1 0 1.25-.83 3.48 3.48 0 1 0-2.93 5.4c.04.02.08.02.13.02h15.67a.75.75 0 1 0 0-1.5H5.62a.75.75 0 0 0-.14-.01C4.4 9.49 3.5 8.6 3.5 7.5ZM11.75 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5h-13.5Zm-5 7.25a.75.75 0 0 0 0 1.5h8.93a7.48 7.48 0 0 1 2.9-1.5H6.74Zm-4 3.75h11.11c-.24.47-.45.97-.59 1.5H2.75a.75.75 0 1 1 0-1.5Zm4 3.5H13c0 .51.05 1.02.15 1.5h-6.4a.75.75 0 1 1 0-1.5Zm20.25 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 1 0 1 0V21h3.5a.5.5 0 1 0 0-1H21v-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingListAdd28Regular = wrapIcon_1.default( /*#__PURE__*/ReadingListAdd28RegularIcon, 'ReadingListAdd28Regular');
const ReadingModeMobile20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-13Zm2 3c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM6.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 10.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingModeMobile20Filled = wrapIcon_1.default( /*#__PURE__*/ReadingModeMobile20FilledIcon, 'ReadingModeMobile20Filled');
const ReadingModeMobile20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-13ZM5.5 3a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-9Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingModeMobile20Regular = wrapIcon_1.default( /*#__PURE__*/ReadingModeMobile20RegularIcon, 'ReadingModeMobile20Regular');
const ReadingModeMobile24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65Zm-5.5 11h-4.6a.75.75 0 0 0 0 1.5H12.35a.75.75 0 0 0 0-1.5h-.1Zm4-3h-8.6a.75.75 0 0 0 0 1.5h8.7a.75.75 0 0 0 0-1.5h-.1Zm0-3h-8.6a.75.75 0 0 0 0 1.5h8.7a.75.75 0 0 0 0-1.5h-.1Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingModeMobile24Filled = wrapIcon_1.default( /*#__PURE__*/ReadingModeMobile24FilledIcon, 'ReadingModeMobile24Filled');
const ReadingModeMobile24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65Zm0 1.5H6.25c-.38 0-.7.28-.74.65l-.01.1v15.5c0 .38.28.7.65.74h11.6c.38 0 .7-.27.74-.64l.01-.1V4.25c0-.38-.28-.7-.65-.74h-.1Zm-5.5 9.5a.75.75 0 0 1 .1 1.5h-4.6a.75.75 0 0 1-.1-1.5h4.6Zm4-3a.75.75 0 0 1 .1 1.5h-8.6a.75.75 0 0 1-.1-1.5h8.6Zm0-3a.75.75 0 0 1 .1 1.5h-8.6a.75.75 0 0 1-.1-1.5h8.6Z",
    fill: primaryFill
  }));
  ;
};
exports.ReadingModeMobile24Regular = wrapIcon_1.default( /*#__PURE__*/ReadingModeMobile24RegularIcon, 'ReadingModeMobile24Regular');
const RealEstate20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3a1 1 0 0 1 2 0h13a1 1 0 1 1 0 2H4v12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3Zm3 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 5 13.5v-7Zm3 7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.34-.75l-2.33-2.07a.5.5 0 0 0-.66 0L8.34 10.2a1 1 0 0 0-.34.75v2.55Z",
    fill: primaryFill
  }));
  ;
};
exports.RealEstate20Filled = wrapIcon_1.default( /*#__PURE__*/RealEstate20FilledIcon, 'RealEstate20Filled');
const RealEstate20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2C2.67 2 2 2.67 2 3.5v13.75c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-2.01c.53.47 1.23.76 2 .76h7a3 3 0 0 0 3-3V5.92A1.5 1.5 0 0 0 16.5 3H4.91c-.2-.58-.76-1-1.41-1ZM16 6v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h11Zm.5-1H4v12H3V3.5a.5.5 0 0 1 1 0V4h12.5a.5.5 0 0 1 0 1Zm-9 5.45V13c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1c0-.27.22-.5.5-.5h1c.28 0 .5.23.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.34-.74l-2.33-2.08a.5.5 0 0 0-.66 0L7.84 9.71a1 1 0 0 0-.34.74Z",
    fill: primaryFill
  }));
  ;
};
exports.RealEstate20Regular = wrapIcon_1.default( /*#__PURE__*/RealEstate20RegularIcon, 'RealEstate20Regular');
const RealEstate24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4a1 1 0 1 1 2 0h16a1 1 0 1 1 0 2H5v15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4Zm3 3.75c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75v8.5A2.75 2.75 0 0 1 18.25 19h-9.5A2.75 2.75 0 0 1 6 16.25v-8.5Zm4 4.71v3.04c0 .28.22.5.5.5h1.75c.14 0 .25-.11.25-.25V14.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1.25c0 .14.11.25.25.25h1.75a.5.5 0 0 0 .5-.5v-3.04a1 1 0 0 0-.35-.76l-2.82-2.42a.5.5 0 0 0-.66 0l-2.82 2.42a1 1 0 0 0-.35.76Z",
    fill: primaryFill
  }));
  ;
};
exports.RealEstate24Filled = wrapIcon_1.default( /*#__PURE__*/RealEstate24FilledIcon, 'RealEstate24Filled');
const RealEstate24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 12.46a1 1 0 0 1 .35-.76l2.82-2.42a.5.5 0 0 1 .66 0l2.82 2.42a1 1 0 0 1 .35.76v3.04a.5.5 0 0 1-.5.5h-1.75a.25.25 0 0 1-.25-.25V14.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.25c0 .14-.11.25-.25.25H10.5a.5.5 0 0 1-.5-.5v-3.04Zm-3 8.57v-2.78c.63.47 1.4.75 2.25.75h8.5a3.75 3.75 0 0 0 3.75-3.75V7.32A2 2 0 0 0 20 4H6.73A2 2 0 0 0 3 5v16.03c0 .54.43.97.97.97h2.06c.54 0 .97-.43.97-.97ZM5 4.5a.5.5 0 0 1 .49.4l.12.6H20a.5.5 0 0 1 0 1H5.5v14h-1V5c0-.28.22-.5.5-.5Zm4.25 13c-1.24 0-2.25-1-2.25-2.25V8h13v7.25c0 1.24-1 2.25-2.25 2.25h-8.5Z",
    fill: primaryFill
  }));
  ;
};
exports.RealEstate24Regular = wrapIcon_1.default( /*#__PURE__*/RealEstate24RegularIcon, 'RealEstate24Regular');
const Receipt16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2C2.78 2 2 2.78 2 3.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V10h-3V3.75C11 2.78 10.22 2 9.25 2h-5.5ZM11 13v-2h2v1.25c0 .41-.34.75-.75.75H11ZM5 5h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1Zm-.5 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm.5 2h1.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt16Filled = wrapIcon_1.default( /*#__PURE__*/Receipt16FilledIcon, 'Receipt16Filled');
const Receipt16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2C2.78 2 2 2.78 2 3.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V10h-3V3.75C11 2.78 10.22 2 9.25 2h-5.5ZM11 13v-2h2v1.25c0 .41-.34.75-.75.75H11Zm-1 0H3.75a.75.75 0 0 1-.75-.75v-8.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75V13ZM5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5Zm-.5 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm.5 2a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H5Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt16Regular = wrapIcon_1.default( /*#__PURE__*/Receipt16RegularIcon, 'Receipt16Regular');
const Receipt20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM6.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt20Filled = wrapIcon_1.default( /*#__PURE__*/Receipt20FilledIcon, 'Receipt20Filled');
const Receipt20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm11 8v3a2 2 0 0 0 2-2v-1h-2Zm-1 3V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9c0 1.1.9 2 2 2h7ZM6 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt20Regular = wrapIcon_1.default( /*#__PURE__*/Receipt20RegularIcon, 'Receipt20Regular');
const Receipt24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6.25C4 5.01 5 4 6.25 4h8.5C15.99 4 17 5 17 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-11c-1.24 0-2.25-1-2.25-2.25v-12ZM17 19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2V19ZM7.75 8a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt24Filled = wrapIcon_1.default( /*#__PURE__*/Receipt24FilledIcon, 'Receipt24Filled');
const Receipt24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6.25C4 5.01 5 4 6.25 4h8.5C15.99 4 17 5 17 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-10A3.25 3.25 0 0 1 4 17.25v-11Zm13 9.25V19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2ZM15.5 19V6.25a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v11c0 .97.78 1.75 1.75 1.75h8.25ZM7 8.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 7 8.75Zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt24Regular = wrapIcon_1.default( /*#__PURE__*/Receipt24RegularIcon, 'Receipt24Regular');
const Receipt28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V17h-5V6.75A3.75 3.75 0 0 0 16.25 3h-9.5ZM20 23.5v-5h3.5v2.75c0 1.24-1 2.25-2.25 2.25H20ZM7.75 8h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5ZM7 13.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM7.75 18h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt28Filled = wrapIcon_1.default( /*#__PURE__*/Receipt28FilledIcon, 'Receipt28Filled');
const Receipt28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V17h-5V6.75A3.75 3.75 0 0 0 16.25 3h-9.5ZM20 23.5v-5h3.5v2.75c0 1.24-1 2.25-2.25 2.25H20Zm-1.5 0H6.75c-1.24 0-2.25-1-2.25-2.25V6.75c0-1.24 1-2.25 2.25-2.25h9.5c1.24 0 2.25 1 2.25 2.25V23.5ZM7.75 8a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM7 13.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM7.75 18a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Receipt28Regular = wrapIcon_1.default( /*#__PURE__*/Receipt28RegularIcon, 'Receipt28Regular');
const ReceiptAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.2A5.5 5.5 0 0 0 4 9.2V4Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm2.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptAdd20Filled = wrapIcon_1.default( /*#__PURE__*/ReceiptAdd20FilledIcon, 'ReceiptAdd20Filled');
const ReceiptAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11h-3.02c-.03.34-.1.68-.19 1H15a3 3 0 0 0 3-3v-2h-3V4a2 2 0 0 0-2-2H6Zm9 13v-3h2v1a2 2 0 0 1-2 2ZM7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM7 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptAdd20Regular = wrapIcon_1.default( /*#__PURE__*/ReceiptAdd20RegularIcon, 'ReceiptAdd20Regular');
const ReceiptAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.25C5 3.01 6 2 7.25 2h8.5C16.99 2 18 3 18 4.25V12h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-5.33a6.55 6.55 0 0 0-1.3-5h2.63a.75.75 0 0 0 0-1.5H9.97A6.47 6.47 0 0 0 5 11.17V4.25ZM18 17h.25c.97 0 1.75-.78 1.75-1.75V13.5h-2V17ZM8.75 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm3.25 9a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18v2.5a.5.5 0 1 1-1 0V18H3.5a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H7Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptAdd24Filled = wrapIcon_1.default( /*#__PURE__*/ReceiptAdd24FilledIcon, 'ReceiptAdd24Filled');
const ReceiptAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.25C5 3.01 6 2 7.25 2h8.5C16.99 2 18 3 18 4.25V12h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-5.33a6.54 6.54 0 0 0 .06-1.5h3.52V4.25a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75V11c-.52 0-1.02.06-1.5.17V4.25ZM18 17h.25c.97 0 1.75-.78 1.75-1.75V13.5h-2V17Zm-3.75-3.5h-2.63A6.54 6.54 0 0 0 9.97 12h4.28a.75.75 0 0 1 0 1.5ZM8 5.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 5.75Zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 9.25Zm4 8.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18v2.5a.5.5 0 1 1-1 0V18H3.5a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 0 1 0 1H7Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptAdd24Regular = wrapIcon_1.default( /*#__PURE__*/ReceiptAdd24RegularIcon, 'ReceiptAdd24Regular');
const ReceiptBag20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v4a3 3 0 0 1 1 .17A3 3 0 0 1 9 11v.09c.58.2 1 .76 1 1.41V16h5a3 3 0 0 0 3-3v-2h-3V4a2 2 0 0 0-2-2H6Zm11 11a2 2 0 0 1-2 2v-3h2v1ZM7 5.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM5 9.27A2 2 0 0 0 2 11v1h-.5a.5.5 0 0 0-.5.5V17c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-4.5a.5.5 0 0 0-.5-.5H8v-1a2 2 0 0 0-3-1.73ZM5 11v1H3v-1a1 1 0 1 1 2 0Zm1 0a2 2 0 0 0-.25-.97A1 1 0 0 1 7 11v1H6v-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptBag20Filled = wrapIcon_1.default( /*#__PURE__*/ReceiptBag20FilledIcon, 'ReceiptBag20Filled');
const ReceiptBag20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-5v-1h4V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4.17A3 3 0 0 0 4 8V4Zm11 8v3a2 2 0 0 0 2-2v-1h-2ZM7 5.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM7.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 9.27A2 2 0 0 0 2 11v1h-.5a.5.5 0 0 0-.5.5V17c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-4.5a.5.5 0 0 0-.5-.5H8v-1a2 2 0 0 0-3-1.73ZM5 11v1H3v-1a1 1 0 1 1 2 0Zm1 0a2 2 0 0 0-.25-.97A1 1 0 0 1 7 11v1H6v-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptBag20Regular = wrapIcon_1.default( /*#__PURE__*/ReceiptBag20RegularIcon, 'ReceiptBag20Regular');
const ReceiptBag24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.25 2C6.01 2 5 3 5 4.25v5.29c.26.03.51.1.75.19a3.5 3.5 0 0 1 2.4-.04.75.75 0 0 1 .6-1.2h5.5a.75.75 0 0 1 0 1.51H8.8a3.5 3.5 0 0 1 1.56 2h3.89a.75.75 0 0 1 0 1.5h-3.28c.33.32.53.76.53 1.25v3.75h6.75c1.8 0 3.25-1.46 3.25-3.25V12H18V4.25C18 3.01 17 2 15.75 2h-8.5Zm11 15H18v-3.5h2v1.75c0 .97-.78 1.75-1.75 1.75ZM8 5.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 5.75Zm-7 9c0-.41.34-.75.75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.17A2.5 2.5 0 0 1 9.5 13v1h.25c.41 0 .75.34.75.75v6c0 1.24-1 2.25-2.25 2.25h-5C2.01 23 1 22 1 20.75v-6ZM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.13.3.2.63.2.98Zm-1.5 1v-1a1 1 0 0 0-2 0v1h2Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptBag24Filled = wrapIcon_1.default( /*#__PURE__*/ReceiptBag24FilledIcon, 'ReceiptBag24Filled');
const ReceiptBag24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.25 2C6.01 2 5 3 5 4.25v5.29c.26.03.51.1.75.19.24-.1.49-.16.75-.2V4.26c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75V17h-5v1.5h6.75c1.8 0 3.25-1.46 3.25-3.25V12H18V4.25C18 3.01 17 2 15.75 2h-8.5Zm11 15H18v-3.5h2v1.75c0 .97-.78 1.75-1.75 1.75Zm-7.28-3.5h3.28a.75.75 0 0 0 0-1.5h-3.9c.1.32.15.65.15 1v.17c.18.08.34.2.47.33ZM8.8 10h5.45a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.6 1.2c.23.07.45.18.65.3Zm-.05-5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM1 14.75c0-.41.34-.75.75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.17A2.5 2.5 0 0 1 9.5 13v1h.25c.41 0 .75.34.75.75v6c0 1.24-1 2.25-2.25 2.25h-5C2.01 23 1 22 1 20.75v-6ZM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.13.3.2.63.2.98Zm-1.5 1v-1a1 1 0 1 0-2 0v1h2Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptBag24Regular = wrapIcon_1.default( /*#__PURE__*/ReceiptBag24RegularIcon, 'ReceiptBag24Regular');
const ReceiptCube20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.5v-4.38a1 1 0 0 0-.55-.9l-4-2a1 1 0 0 0-.9 0L4 9.25V4Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-6 8.88v-3.76a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 .9 0l3 1.5a1 1 0 0 1 .55.9v3.76a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.57a.5.5 0 0 0 .27.65L5 13.9v2.61a.5.5 0 0 0 1 0v-2.61l2.2-.93a.5.5 0 0 0-.4-.92L5.5 13l-2.3-.97a.5.5 0 0 0-.66.27Z",
    fill: primaryFill
  }));
  ;
};
exports.ReceiptCube20Filled = wrapIcon_1.default( /*#__PURE__*/ReceiptCube20FilledIcon, 'ReceiptCube20Filled');