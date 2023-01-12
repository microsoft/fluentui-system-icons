"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxDismissRegular = exports.BoxDismissFilled = exports.BoxCheckmarkRegular = exports.BoxCheckmarkFilled = exports.BoxArrowUpRegular = exports.BoxArrowUpFilled = exports.BoxArrowLeftRegular = exports.BoxArrowLeftFilled = exports.BoxRegular = exports.BoxFilled = exports.BowlSaladRegular = exports.BowlSaladFilled = exports.BowlChopsticksRegular = exports.BowlChopsticksFilled = exports.BotAddRegular = exports.BotAddFilled = exports.BotRegular = exports.BotFilled = exports.BorderTopBottomThickRegular = exports.BorderTopBottomThickFilled = exports.BorderTopBottomDoubleRegular = exports.BorderTopBottomDoubleFilled = exports.BorderTopBottomRegular = exports.BorderTopBottomFilled = exports.BorderTopRegular = exports.BorderTopFilled = exports.BorderRightRegular = exports.BorderRightFilled = exports.BorderOutsideThickRegular = exports.BorderOutsideThickFilled = exports.BorderOutsideRegular = exports.BorderOutsideFilled = exports.BorderNoneRegular = exports.BorderNoneFilled = exports.BorderLeftRightRegular = exports.BorderLeftRightFilled = exports.BorderLeftRegular = exports.BorderLeftFilled = exports.BorderBottomThickRegular = exports.BorderBottomThickFilled = exports.BorderBottomDoubleRegular = exports.BorderBottomDoubleFilled = exports.BorderBottomRegular = exports.BorderBottomFilled = exports.BorderAllRegular = exports.BorderAllFilled = exports.BookmarkSearchRegular = exports.BookmarkSearchFilled = exports.BookmarkOffRegular = exports.BookmarkOffFilled = void 0;
exports.BroomRegular = exports.BroomFilled = exports.BroadActivityFeedRegular = exports.BroadActivityFeedFilled = exports.BrightnessLowRegular = exports.BrightnessLowFilled = exports.BrightnessHighRegular = exports.BrightnessHighFilled = exports.BriefcaseOffRegular = exports.BriefcaseOffFilled = exports.BriefcaseMedicalRegular = exports.BriefcaseMedicalFilled = exports.BriefcaseRegular = exports.BriefcaseFilled = exports.BreakoutRoomRegular = exports.BreakoutRoomFilled = exports.BranchRequestRegular = exports.BranchRequestFilled = exports.BranchForkLinkRegular = exports.BranchForkLinkFilled = exports.BranchForkHintRegular = exports.BranchForkHintFilled = exports.BranchForkRegular = exports.BranchForkFilled = exports.BranchCompareRegular = exports.BranchCompareFilled = exports.BranchRegular = exports.BranchFilled = exports.BrainCircuitRegular = exports.BrainCircuitFilled = exports.BracesVariableRegular = exports.BracesVariableFilled = exports.BracesRegular = exports.BracesFilled = exports.BoxToolboxRegular = exports.BoxToolboxFilled = exports.BoxSearchRegular = exports.BoxSearchFilled = exports.BoxMultipleSearchRegular = exports.BoxMultipleSearchFilled = exports.BoxMultipleCheckmarkRegular = exports.BoxMultipleCheckmarkFilled = exports.BoxMultipleArrowRightRegular = exports.BoxMultipleArrowRightFilled = exports.BoxMultipleArrowLeftRegular = exports.BoxMultipleArrowLeftFilled = exports.BoxMultipleRegular = exports.BoxMultipleFilled = exports.BoxEditRegular = exports.BoxEditFilled = void 0;
exports.CalculatorArrowClockwiseRegular = exports.CalculatorArrowClockwiseFilled = exports.CalculatorRegular = exports.CalculatorFilled = exports.BuildingTownhouseRegular = exports.BuildingTownhouseFilled = exports.BuildingSkyscraperRegular = exports.BuildingSkyscraperFilled = exports.BuildingShopRegular = exports.BuildingShopFilled = exports.BuildingRetailToolboxRegular = exports.BuildingRetailToolboxFilled = exports.BuildingRetailShieldRegular = exports.BuildingRetailShieldFilled = exports.BuildingRetailMoreRegular = exports.BuildingRetailMoreFilled = exports.BuildingRetailMoneyRegular = exports.BuildingRetailMoneyFilled = exports.BuildingRetailRegular = exports.BuildingRetailFilled = exports.BuildingPeopleRegular = exports.BuildingPeopleFilled = exports.BuildingMultipleRegular = exports.BuildingMultipleFilled = exports.BuildingLighthouseRegular = exports.BuildingLighthouseFilled = exports.BuildingHomeRegular = exports.BuildingHomeFilled = exports.BuildingGovernmentRegular = exports.BuildingGovernmentFilled = exports.BuildingFactoryRegular = exports.BuildingFactoryFilled = exports.BuildingDesktopRegular = exports.BuildingDesktopFilled = exports.BuildingBankToolboxRegular = exports.BuildingBankToolboxFilled = exports.BuildingBankLinkRegular = exports.BuildingBankLinkFilled = exports.BuildingBankRegular = exports.BuildingBankFilled = exports.BuildingRegular = exports.BuildingFilled = exports.BugProhibitedRegular = exports.BugProhibitedFilled = exports.BugArrowCounterclockwiseRegular = exports.BugArrowCounterclockwiseFilled = exports.BugRegular = exports.BugFilled = exports.BubbleMultipleRegular = exports.BubbleMultipleFilled = void 0;
exports.CalendarPatternRegular = exports.CalendarPatternFilled = exports.CalendarMultipleRegular = exports.CalendarMultipleFilled = exports.CalendarMonthRegular = exports.CalendarMonthFilled = exports.CalendarMentionRegular = exports.CalendarMentionFilled = exports.CalendarMailRegular = exports.CalendarMailFilled = exports.CalendarLtrRegular = exports.CalendarLtrFilled = exports.CalendarLockRegular = exports.CalendarLockFilled = exports.CalendarInfoRegular = exports.CalendarInfoFilled = exports.CalendarErrorRegular = exports.CalendarErrorFilled = exports.CalendarEmptyRegular = exports.CalendarEmptyFilled = exports.CalendarEditRegular = exports.CalendarEditFilled = exports.CalendarDayRegular = exports.CalendarDayFilled = exports.CalendarDataBarRegular = exports.CalendarDataBarFilled = exports.CalendarClockRegular = exports.CalendarClockFilled = exports.CalendarCheckmarkRegular = exports.CalendarCheckmarkFilled = exports.CalendarChatRegular = exports.CalendarChatFilled = exports.CalendarCancelRegular = exports.CalendarCancelFilled = exports.CalendarAssistantRegular = exports.CalendarAssistantFilled = exports.CalendarArrowRightRegular = exports.CalendarArrowRightFilled = exports.CalendarArrowDownRegular = exports.CalendarArrowDownFilled = exports.CalendarArrowCounterclockwiseRegular = exports.CalendarArrowCounterclockwiseFilled = exports.CalendarAgendaRegular = exports.CalendarAgendaFilled = exports.CalendarAddRegular = exports.CalendarAddFilled = exports.Calendar3DayRegular = exports.Calendar3DayFilled = exports.CalculatorMultipleRegular = exports.CalculatorMultipleFilled = void 0;
exports.CallInboundRegular = exports.CallInboundFilled = exports.CallForwardRegular = exports.CallForwardFilled = exports.CallExclamationRegular = exports.CallExclamationFilled = exports.CallEndRegular = exports.CallEndFilled = exports.CallDismissRegular = exports.CallDismissFilled = exports.CallConnectingRegular = exports.CallConnectingFilled = exports.CallCheckmarkRegular = exports.CallCheckmarkFilled = exports.CallAddRegular = exports.CallAddFilled = exports.CallRegular = exports.CallFilled = exports.CalendarWorkWeekRegular = exports.CalendarWorkWeekFilled = exports.CalendarWeekStartRegular = exports.CalendarWeekStartFilled = exports.CalendarWeekNumbersRegular = exports.CalendarWeekNumbersFilled = exports.CalendarToolboxRegular = exports.CalendarToolboxFilled = exports.CalendarTodayRegular = exports.CalendarTodayFilled = exports.CalendarSyncRegular = exports.CalendarSyncFilled = exports.CalendarStarRegular = exports.CalendarStarFilled = exports.CalendarShieldRegular = exports.CalendarShieldFilled = exports.CalendarSettingsRegular = exports.CalendarSettingsFilled = exports.CalendarSearchRegular = exports.CalendarSearchFilled = exports.CalendarRtlRegular = exports.CalendarRtlFilled = exports.CalendarReplyRegular = exports.CalendarReplyFilled = exports.CalendarQuestionMarkRegular = exports.CalendarQuestionMarkFilled = exports.CalendarPlayRegular = exports.CalendarPlayFilled = exports.CalendarPhoneRegular = exports.CalendarPhoneFilled = exports.CalendarPersonRegular = exports.CalendarPersonFilled = void 0;
exports.CastRegular = exports.CastFilled = exports.CartRegular = exports.CartFilled = exports.CaretUpRegular = exports.CaretUpFilled = exports.CaretRightRegular = exports.CaretRightFilled = exports.CaretLeftRegular = exports.CaretLeftFilled = exports.CaretDownRightRegular = exports.CaretDownRightFilled = exports.CaretDownRegular = exports.CaretDownFilled = exports.CameraSwitchRegular = exports.CameraSwitchFilled = exports.CameraSparklesRegular = exports.CameraSparklesFilled = exports.CameraOffRegular = exports.CameraOffFilled = exports.CameraEditRegular = exports.CameraEditFilled = exports.CameraDomeRegular = exports.CameraDomeFilled = exports.CameraAddRegular = exports.CameraAddFilled = exports.CameraRegular = exports.CameraFilled = exports.CalligraphyPenQuestionMarkRegular = exports.CalligraphyPenQuestionMarkFilled = exports.CalligraphyPenErrorRegular = exports.CalligraphyPenErrorFilled = exports.CalligraphyPenCheckmarkRegular = exports.CalligraphyPenCheckmarkFilled = exports.CalligraphyPenRegular = exports.CalligraphyPenFilled = exports.CallWarningRegular = exports.CallWarningFilled = exports.CallTransferRegular = exports.CallTransferFilled = exports.CallProhibitedRegular = exports.CallProhibitedFilled = exports.CallPauseRegular = exports.CallPauseFilled = exports.CallParkRegular = exports.CallParkFilled = exports.CallOutboundRegular = exports.CallOutboundFilled = exports.CallMissedRegular = exports.CallMissedFilled = void 0;
exports.ChatAddRegular = exports.ChatAddFilled = exports.ChatRegular = exports.ChatFilled = exports.ChartPersonRegular = exports.ChartPersonFilled = exports.ChartMultipleRegular = exports.ChartMultipleFilled = exports.ChannelSubtractRegular = exports.ChannelSubtractFilled = exports.ChannelShareRegular = exports.ChannelShareFilled = exports.ChannelDismissRegular = exports.ChannelDismissFilled = exports.ChannelArrowLeftRegular = exports.ChannelArrowLeftFilled = exports.ChannelAlertRegular = exports.ChannelAlertFilled = exports.ChannelAddRegular = exports.ChannelAddFilled = exports.ChannelRegular = exports.ChannelFilled = exports.CertificateRegular = exports.CertificateFilled = exports.CenterVerticalRegular = exports.CenterVerticalFilled = exports.CenterHorizontalRegular = exports.CenterHorizontalFilled = exports.CellularWarningRegular = exports.CellularWarningFilled = exports.CellularOffRegular = exports.CellularOffFilled = exports.CellularData5Regular = exports.CellularData5Filled = exports.CellularData4Regular = exports.CellularData4Filled = exports.CellularData3Regular = exports.CellularData3Filled = exports.CellularData2Regular = exports.CellularData2Filled = exports.CellularData1Regular = exports.CellularData1Filled = exports.Cellular5GRegular = exports.Cellular5GFilled = exports.Cellular4GRegular = exports.Cellular4GFilled = exports.Cellular3GRegular = exports.Cellular3GFilled = exports.CatchUpRegular = exports.CatchUpFilled = void 0;
exports.CheckmarkCircleRegular = exports.CheckmarkCircleFilled = exports.CheckmarkRegular = exports.CheckmarkFilled = exports.CheckboxWarningRegular = exports.CheckboxWarningFilled = exports.CheckboxUncheckedRegular = exports.CheckboxUncheckedFilled = exports.CheckboxPersonRegular = exports.CheckboxPersonFilled = exports.CheckboxIndeterminateRegular = exports.CheckboxIndeterminateFilled = exports.CheckboxCheckedSyncRegular = exports.CheckboxCheckedSyncFilled = exports.CheckboxCheckedRegular = exports.CheckboxCheckedFilled = exports.CheckboxArrowRightRegular = exports.CheckboxArrowRightFilled = exports.Checkbox2Regular = exports.Checkbox2Filled = exports.Checkbox1Regular = exports.Checkbox1Filled = exports.CheckRegular = exports.CheckFilled = exports.ChatWarningRegular = exports.ChatWarningFilled = exports.ChatVideoRegular = exports.ChatVideoFilled = exports.ChatSettingsRegular = exports.ChatSettingsFilled = exports.ChatOffRegular = exports.ChatOffFilled = exports.ChatMultipleRegular = exports.ChatMultipleFilled = exports.ChatMailRegular = exports.ChatMailFilled = exports.ChatHelpRegular = exports.ChatHelpFilled = exports.ChatEmptyRegular = exports.ChatEmptyFilled = exports.ChatDismissRegular = exports.ChatDismissFilled = exports.ChatCursorRegular = exports.ChatCursorFilled = exports.ChatBubblesQuestionRegular = exports.ChatBubblesQuestionFilled = exports.ChatArrowDoubleBackRegular = exports.ChatArrowDoubleBackFilled = exports.ChatArrowBackRegular = exports.ChatArrowBackFilled = void 0;
exports.CircleLineRegular = exports.CircleLineFilled = exports.CircleImageRegular = exports.CircleImageFilled = exports.CircleHalfFillRegular = exports.CircleHalfFillFilled = exports.CircleEraserRegular = exports.CircleEraserFilled = exports.CircleEditRegular = exports.CircleEditFilled = exports.CircleRegular = exports.CircleFilled = exports.ChevronUpDownRegular = exports.ChevronUpDownFilled = exports.ChevronUpRegular = exports.ChevronUpFilled = exports.ChevronRightRegular = exports.ChevronRightFilled = exports.ChevronLeftRegular = exports.ChevronLeftFilled = exports.ChevronDownRegular = exports.ChevronDownFilled = exports.ChevronDoubleUpRegular = exports.ChevronDoubleUpFilled = exports.ChevronDoubleRightRegular = exports.ChevronDoubleRightFilled = exports.ChevronDoubleLeftRegular = exports.ChevronDoubleLeftFilled = exports.ChevronDoubleDownRegular = exports.ChevronDoubleDownFilled = exports.ChevronCircleUpRegular = exports.ChevronCircleUpFilled = exports.ChevronCircleRightRegular = exports.ChevronCircleRightFilled = exports.ChevronCircleLeftRegular = exports.ChevronCircleLeftFilled = exports.ChevronCircleDownRegular = exports.ChevronCircleDownFilled = exports.ChessRegular = exports.ChessFilled = exports.CheckmarkUnderlineCircleRegular = exports.CheckmarkUnderlineCircleFilled = exports.CheckmarkStarburstRegular = exports.CheckmarkStarburstFilled = exports.CheckmarkSquareRegular = exports.CheckmarkSquareFilled = exports.CheckmarkNoteRegular = exports.CheckmarkNoteFilled = exports.CheckmarkLockRegular = exports.CheckmarkLockFilled = void 0;
exports.ClipboardMoreRegular = exports.ClipboardMoreFilled = exports.ClipboardMonthRegular = exports.ClipboardMonthFilled = exports.ClipboardLinkRegular = exports.ClipboardLinkFilled = exports.ClipboardLetterRegular = exports.ClipboardLetterFilled = exports.ClipboardImageRegular = exports.ClipboardImageFilled = exports.ClipboardHeartRegular = exports.ClipboardHeartFilled = exports.ClipboardErrorRegular = exports.ClipboardErrorFilled = exports.ClipboardEditRegular = exports.ClipboardEditFilled = exports.ClipboardDayRegular = exports.ClipboardDayFilled = exports.ClipboardDataBarRegular = exports.ClipboardDataBarFilled = exports.ClipboardCodeRegular = exports.ClipboardCodeFilled = exports.ClipboardClockRegular = exports.ClipboardClockFilled = exports.ClipboardCheckmarkRegular = exports.ClipboardCheckmarkFilled = exports.ClipboardBulletListRtlRegular = exports.ClipboardBulletListRtlFilled = exports.ClipboardBulletListLtrRegular = exports.ClipboardBulletListLtrFilled = exports.ClipboardArrowRightRegular = exports.ClipboardArrowRightFilled = exports.Clipboard3DayRegular = exports.Clipboard3DayFilled = exports.ClipboardRegular = exports.ClipboardFilled = exports.ClearFormattingRegular = exports.ClearFormattingFilled = exports.ClassificationRegular = exports.ClassificationFilled = exports.ClassRegular = exports.ClassFilled = exports.CityRegular = exports.CityFilled = exports.CircleSmallRegular = exports.CircleSmallFilled = exports.CircleOffRegular = exports.CircleOffFilled = exports.CircleMultipleSubtractCheckmarkRegular = exports.CircleMultipleSubtractCheckmarkFilled = void 0;
const tslib_1 = require("tslib");
const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));
const React = tslib_1.__importStar(require("react"));
const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));
const BookmarkOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16 16.7 1.15 1.15a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71V17.5a.5.5 0 0 0 .8.4l5.2-3.78 5.2 3.78a.5.5 0 0 0 .8-.4v-.8Zm0-12.2v9.38L4.8 2.68A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BookmarkOffFilled = wrapIcon_1.default( /*#__PURE__*/BookmarkOffFilledIcon, 'BookmarkOffFilled');
const BookmarkOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L16 16.71v.79a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4V4.7Zm11 11L5 5.7v10.82l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42v-.81Zm0-11.2v8.38l1 1V4.5A2.5 2.5 0 0 0 13.5 2h-7a2.5 2.5 0 0 0-1.7.67l.7.71a1.5 1.5 0 0 1 1-.38h7c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BookmarkOffRegular = wrapIcon_1.default( /*#__PURE__*/BookmarkOffRegularIcon, 'BookmarkOffRegular');
const BookmarkSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.6 7.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L15.6 7.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm0 4.62v8.38a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.26a4.5 4.5 0 0 0 5.68 6.56l.56.56Z",
    fill: primaryFill
  }));
  ;
};
exports.BookmarkSearchFilled = wrapIcon_1.default( /*#__PURE__*/BookmarkSearchFilledIcon, 'BookmarkSearchFilled');
const BookmarkSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.6 7.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L15.6 7.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm0 4.62v8.38a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.26c-.2.3-.38.64-.5 1H6.5C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42V8.74c.15-.05.3-.11.44-.18l.56.56Z",
    fill: primaryFill
  }));
  ;
};
exports.BookmarkSearchRegular = wrapIcon_1.default( /*#__PURE__*/BookmarkSearchRegularIcon, 'BookmarkSearchRegular');
const BorderAllFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 4.5c-.97 0-1.75.78-1.75 1.75v3h4.75V4.5h-3Zm4.5 0v4.75h4.75v-3c0-.97-.78-1.75-1.75-1.75h-3Zm4.75 6.25h-4.75v4.75h3c.97 0 1.75-.78 1.75-1.75v-3ZM9.25 15.5v-4.75H4.5v3c0 .97.78 1.75 1.75 1.75h3ZM3 6.25C3 4.45 4.46 3 6.25 3h7.5C15.55 3 17 4.46 17 6.25v7.5c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderAllFilled = wrapIcon_1.default( /*#__PURE__*/BorderAllFilledIcon, 'BorderAllFilled');
const BorderAllRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v3.5h5.5V4H6Zm4.5 0v5.5H16V6a2 2 0 0 0-2-2h-3.5Zm5.5 6.5h-5.5V16H14a2 2 0 0 0 2-2v-3.5ZM9.5 16v-5.5H4V14c0 1.1.9 2 2 2h3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderAllRegular = wrapIcon_1.default( /*#__PURE__*/BorderAllRegularIcon, 'BorderAllRegular');
const BorderBottomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm.71 11.75a.7.7 0 0 1 .04 0h2.5a.7.7 0 0 1 .04 0H14a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49c.22.56.77.95 1.4.95h2.71ZM4.61 5.45a1.5 1.5 0 0 1 .93-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.49Zm9.94-.85a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.5 1.41ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomFilled = wrapIcon_1.default( /*#__PURE__*/BorderBottomFilledIcon, 'BorderBottomFilled');
const BorderBottomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.54 4.05a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6ZM3.07 14.66a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM14.6 3.06a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.58.5.5 0 0 1-.6-.46 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomRegular = wrapIcon_1.default( /*#__PURE__*/BorderBottomRegularIcon, 'BorderBottomRegular');
const BorderBottomDoubleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm-2.55.85a1.5 1.5 0 0 0-.88.94.75.75 0 0 1-1.38-.58 3 3 0 0 1 1.77-1.77.75.75 0 1 1 .5 1.41Zm9.95.85a1.5 1.5 0 0 0-.94-.88.75.75 0 0 1 .58-1.38 3 3 0 0 1 1.78 1.77h-.01a.75.75 0 1 1-1.41.49ZM3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm11.75-.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-12.5 6c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 13a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomDoubleFilled = wrapIcon_1.default( /*#__PURE__*/BorderBottomDoubleFilledIcon, 'BorderBottomDoubleFilled');
const BorderBottomDoubleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4.05 5.54a2 2 0 0 1 1.55-1.5.5.5 0 0 0 .4-.59.5.5 0 0 0-.66-.38 3 3 0 0 0-2.29 2.34.5.5 0 0 0 .4.6.5.5 0 0 0 .6-.47ZM14.6 3.05a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm0 5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm.5-2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomDoubleRegular = wrapIcon_1.default( /*#__PURE__*/BorderBottomDoubleRegularIcon, 'BorderBottomDoubleRegular');
const BorderBottomThickFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Zm-4.64.5a1 1 0 1 1 1.16 1.62 1 1 0 0 0-.4.4 1 1 0 0 1-1.84-.33 1 1 0 0 1 .22-.83c.22-.35.51-.64.85-.87ZM6 15a1 1 0 0 1-.88-.52 1 1 0 0 0-1.84.33 1 1 0 0 0 .22.83A3 3 0 0 0 6 17h8a3 3 0 0 0 2.5-1.35 1 1 0 1 0-1.62-1.17A1 1 0 0 1 14 15H6Zm9.64-11.5a1 1 0 1 0-1.16 1.62c.17.1.3.23.4.4a1 1 0 0 0 1.84-.33 1 1 0 0 0-.22-.83 3.02 3.02 0 0 0-.85-.87ZM4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0v2Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomThickFilled = wrapIcon_1.default( /*#__PURE__*/BorderBottomThickFilledIcon, 'BorderBottomThickFilled');
const BorderBottomThickRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm.71 11.75a.7.7 0 0 1 .04 0h2.5a.7.7 0 0 1 .04 0H14a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49c.22.56.77.95 1.4.95h2.71ZM4.61 5.45a1.5 1.5 0 0 1 .93-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.49Zm9.94-.85a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.5 1.41ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderBottomThickRegular = wrapIcon_1.default( /*#__PURE__*/BorderBottomThickRegularIcon, 'BorderBottomThickRegular');
const BorderLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.25 8c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75ZM3 11.27V14a3 3 0 0 0 1.96 2.81.75.75 0 0 0 .58-1.38A1.5 1.5 0 0 1 4.5 14V6a1.5 1.5 0 0 1 1.03-1.43.75.75 0 0 0-.58-1.38A3 3 0 0 0 3 6v5.27ZM14.55 4.6a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.49 1.41Zm.85 9.95a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.77-1.77.75.75 0 1 0-1.41-.5ZM8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM8 16.25c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderLeftFilled = wrapIcon_1.default( /*#__PURE__*/BorderLeftFilledIcon, 'BorderLeftFilled');
const BorderLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1.05-2.96a2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .66-.38 3 3 0 0 1 2.29 2.34.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47ZM5.34 3.07a.5.5 0 0 1 .66.38.5.5 0 0 1-.46.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.6 1.95.5.5 0 0 1 .4.6.5.5 0 0 1-.66.38A3 3 0 0 1 3 14V6a3 3 0 0 1 2.34-2.93Zm11.6 11.52a3 3 0 0 1-2.36 2.36.5.5 0 0 1-.58-.4.5.5 0 0 1 .46-.6 2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .4.6ZM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderLeftRegular = wrapIcon_1.default( /*#__PURE__*/BorderLeftRegularIcon, 'BorderLeftRegular');
const BorderLeftRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 6a1.5 1.5 0 0 0-1.04-1.43.75.75 0 0 1 .58-1.38A3 3 0 0 1 17 6v8a3 3 0 0 1-1.96 2.81.75.75 0 1 1-.58-1.38l.07-.03c.57-.21.97-.76.97-1.4V6ZM8.75 3a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Zm0 12.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM5.45 4.6A1.5 1.5 0 0 0 4.5 6v8a1.5 1.5 0 0 0 1.03 1.43h.01a.75.75 0 0 1-.58 1.38A3 3 0 0 1 3 14.01V6a3 3 0 0 1 1.96-2.82.75.75 0 1 1 .49 1.42Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderLeftRightFilled = wrapIcon_1.default( /*#__PURE__*/BorderLeftRightFilledIcon, 'BorderLeftRightFilled');
const BorderLeftRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.66 3.07a.5.5 0 0 0-.66.38.5.5 0 0 0 .46.6A2 2 0 0 1 16 6v8a2 2 0 0 1-1.6 1.95.5.5 0 0 0-.4.6.5.5 0 0 0 .66.38A3 3 0 0 0 17 14V6a3 3 0 0 0-2.34-2.93Zm-9.32 0a.5.5 0 0 1 .66.38.5.5 0 0 1-.46.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.6 1.95.5.5 0 0 1 .4.6.5.5 0 0 1-.66.38A3 3 0 0 1 3 14V6a3 3 0 0 1 2.34-2.93ZM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderLeftRightRegular = wrapIcon_1.default( /*#__PURE__*/BorderLeftRightRegularIcon, 'BorderLeftRightRegular');
const BorderNoneFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Zm0 12.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM5.45 4.6a1.5 1.5 0 0 0-.88.94.75.75 0 0 1-1.38-.58 3 3 0 0 1 1.77-1.77.75.75 0 1 1 .5 1.41Zm9.95.85a1.5 1.5 0 0 0-.94-.88.75.75 0 0 1 .58-1.38 3 3 0 0 1 1.78 1.77h-.01a.75.75 0 1 1-1.41.49ZM3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Zm11.75-.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .5-1.41Zm9.95-.85a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.78-1.77h-.01a.75.75 0 1 0-1.41-.49Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderNoneFilled = wrapIcon_1.default( /*#__PURE__*/BorderNoneFilledIcon, 'BorderNoneFilled');
const BorderNoneRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-2.46.55a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6Zm0 11.9a2 2 0 0 1-1.5-1.55.5.5 0 0 0-.59-.4.5.5 0 0 0-.38.66 3 3 0 0 0 2.34 2.29.5.5 0 0 0 .6-.4.5.5 0 0 0-.47-.6Zm9.05-12.9a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4Zm-.13 12.9a2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .38.66 3 3 0 0 1-2.34 2.29.5.5 0 0 1-.6-.4.5.5 0 0 1 .47-.6ZM16 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3ZM3.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderNoneRegular = wrapIcon_1.default( /*#__PURE__*/BorderNoneRegularIcon, 'BorderNoneRegular');
const BorderOutsideFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderOutsideFilled = wrapIcon_1.default( /*#__PURE__*/BorderOutsideFilledIcon, 'BorderOutsideFilled');
const BorderOutsideRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderOutsideRegular = wrapIcon_1.default( /*#__PURE__*/BorderOutsideRegularIcon, 'BorderOutsideRegular');
const BorderOutsideThickFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderOutsideThickFilled = wrapIcon_1.default( /*#__PURE__*/BorderOutsideThickFilledIcon, 'BorderOutsideThickFilled');
const BorderOutsideThickRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderOutsideThickRegular = wrapIcon_1.default( /*#__PURE__*/BorderOutsideThickRegularIcon, 'BorderOutsideThickRegular');
const BorderRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM17 8.73V6a3 3 0 0 0-1.96-2.81.75.75 0 1 0-.58 1.38l.07.03c.57.21.97.76.97 1.4v8a1.5 1.5 0 0 1-1.04 1.43.75.75 0 0 0 .58 1.38A3 3 0 0 0 17 14V8.73ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .49-1.41ZM4.6 5.45a1.5 1.5 0 0 1 .94-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.5ZM11.25 17a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM12 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderRightFilled = wrapIcon_1.default( /*#__PURE__*/BorderRightFilledIcon, 'BorderRightFilled');
const BorderRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm1.05 2.96a2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.66.38 3 3 0 0 1-2.29-2.34.5.5 0 0 1 .4-.6.5.5 0 0 1 .6.47Zm10.61 2.47a.5.5 0 0 1-.66-.38.5.5 0 0 1 .46-.6A2 2 0 0 0 16 14V6a2 2 0 0 0-1.6-1.95.5.5 0 0 1-.4-.6.5.5 0 0 1 .66-.38A3 3 0 0 1 17 6v8a3 3 0 0 1-2.34 2.93ZM3.06 5.4a3 3 0 0 1 2.36-2.36.5.5 0 0 1 .58.4.5.5 0 0 1-.46.6 2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.4-.59ZM12 3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3c.28 0 .5.22.5.5ZM11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderRightRegular = wrapIcon_1.default( /*#__PURE__*/BorderRightRegularIcon, 'BorderRightRegular');
const BorderTopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 16.25c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75ZM8.73 3H6a3 3 0 0 0-2.81 1.96.75.75 0 0 0 1.38.58l.03-.07A1.5 1.5 0 0 1 6 4.5h8a1.5 1.5 0 0 1 1.43 1.04.75.75 0 0 0 1.38-.58A3 3 0 0 0 14 3H8.73Zm6.67 11.55a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.77-1.77.75.75 0 1 0-1.41-.49Zm-9.95.85a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .5-1.41ZM17 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM3.75 8c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopFilled = wrapIcon_1.default( /*#__PURE__*/BorderTopFilledIcon, 'BorderTopFilled');
const BorderTopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Zm2.96-1.05a2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .38.66 3 3 0 0 1-2.34 2.29.5.5 0 0 1-.6-.4.5.5 0 0 1 .47-.6Zm2.47-10.61a.5.5 0 1 1-.98.2A2 2 0 0 0 14 4H6a2 2 0 0 0-1.95 1.6.5.5 0 0 1-.6.4.5.5 0 0 1-.38-.66A3 3 0 0 1 6 3h8a3 3 0 0 1 2.93 2.34ZM5.4 16.94a3 3 0 0 1-2.36-2.36.5.5 0 0 1 .4-.58.5.5 0 0 1 .6.46 2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.59.4ZM3.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5Zm13.5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopRegular = wrapIcon_1.default( /*#__PURE__*/BorderTopRegularIcon, 'BorderTopRegular');
const BorderTopBottomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6Zm-3 6.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm12.5 0a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm-10.9 3.3c.22.56.77.95 1.4.95h8a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomFilled = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomFilledIcon, 'BorderTopBottomFilled');
const BorderTopBottomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.07 5.34a.5.5 0 0 0 .38.66.5.5 0 0 0 .6-.46A2 2 0 0 1 6 4h8a2 2 0 0 1 1.95 1.6.5.5 0 0 0 .6.4.5.5 0 0 0 .38-.66A3 3 0 0 0 14 3H6a3 3 0 0 0-2.93 2.34Zm0 9.32a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomRegular = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomRegularIcon, 'BorderTopBottomRegular');
const BorderTopBottomDoubleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6ZM3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm12.5 0a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm-12.5 4.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3 13.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomDoubleFilled = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomDoubleFilledIcon, 'BorderTopBottomDoubleFilled');
const BorderTopBottomDoubleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.05 5.41A3 3 0 0 1 6 3h8a3 3 0 0 1 2.95 2.41.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47A2 2 0 0 0 14 4H6a2 2 0 0 0-1.95 1.6.5.5 0 0 1-.6.4.5.5 0 0 1-.4-.59ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm-13 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 14.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0-3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomDoubleRegular = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomDoubleRegularIcon, 'BorderTopBottomDoubleRegular');
const BorderTopBottomThickFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.12 5.52A1 1 0 0 1 6 5h8a1 1 0 0 1 .88.52 1 1 0 0 0 1.84-.33 1 1 0 0 0-.22-.83A3 3 0 0 0 14 3H6a3 3 0 0 0-2.5 1.35 1 1 0 1 0 1.62 1.17Zm0 8.96A1 1 0 0 0 6 15h8a1 1 0 0 0 .88-.52 1 1 0 0 1 1.84.33 1 1 0 0 1-.22.83A3 3 0 0 1 14 17H6a3 3 0 0 1-2.5-1.35 1 1 0 1 1 1.62-1.17ZM4 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 0 0 2 0V9a1 1 0 1 0-2 0v2Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomThickFilled = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomThickFilledIcon, 'BorderTopBottomThickFilled');
const BorderTopBottomThickRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6ZM3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM14 15.5H6a1.5 1.5 0 0 1-1.43-1.04.75.75 0 0 0-1.38.58A3 3 0 0 0 6 17h8a3 3 0 0 0 2.81-1.96.75.75 0 0 0-1.38-.58l-.03.08a1.5 1.5 0 0 1-1.4.96Zm1.5-4.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BorderTopBottomThickRegular = wrapIcon_1.default( /*#__PURE__*/BorderTopBottomThickRegularIcon, 'BorderTopBottomThickRegular');
const BotFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.7 11.5c.99 0 1.8.81 1.8 1.81v.7a3.52 3.52 0 0 1-1.13 2.55c-.95.87-2.6 1.44-5.37 1.44s-4.42-.57-5.37-1.44A3.52 3.52 0 0 1 3.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h9.4ZM6.5 3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 0 0-.5.5V3h-3ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BotFilled = wrapIcon_1.default( /*#__PURE__*/BotFilledIcon, 'BotFilled');
const BotRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5ZM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Zm3.75 14c2.62-.04 4.2-.6 5.12-1.44A3.52 3.52 0 0 0 16.5 14h.01v-.69c0-1-.81-1.8-1.8-1.8h-3.2v-.01H5.3c-.99 0-1.8.81-1.8 1.81v.7c.04.77.25 1.75 1.13 2.55.93.84 2.5 1.4 5.12 1.44h.5Zm-4.94-5.5h9.38c.45 0 .81.37.81.81v.44c0 .69-.13 1.46-.8 2.07C14 16.45 12.66 17 10 17s-4.01-.55-4.7-1.18a2.63 2.63 0 0 1-.8-2.07v-.44c0-.44.36-.8.8-.8Z",
    fill: primaryFill
  }));
  ;
};
exports.BotRegular = wrapIcon_1.default( /*#__PURE__*/BotRegularIcon, 'BotRegular');
const BotAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 9c.14 0 .27 0 .4.02.07-.17.1-.34.1-.52v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 0 0-.5.5V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h4.84c.9-.63 1.98-1 3.16-1ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2 8c0-1.1.33-2.13.89-3H5.3c-1 0-1.81.81-1.81 1.81v.7c.04.77.25 1.75 1.13 2.55.95.87 2.6 1.44 5.37 1.44h.26A5.48 5.48 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BotAddFilled = wrapIcon_1.default( /*#__PURE__*/BotAddFilledIcon, 'BotAddFilled');
const BotAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h4.84a5.47 5.47 0 0 1 3.57-.98c.06-.17.09-.34.09-.52v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5ZM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Zm2 7.5h1.39c-.2.31-.38.65-.52 1H5.31a.8.8 0 0 0-.81.81v.44c0 .69.13 1.46.8 2.07.65.6 1.9 1.12 4.3 1.18.18.35.4.69.66 1h-.51c-2.62-.04-4.2-.6-5.12-1.44A3.52 3.52 0 0 1 3.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h3.2v-.01Zm10.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BotAddRegular = wrapIcon_1.default( /*#__PURE__*/BotAddRegularIcon, 'BotAddRegular');
const BowlChopsticksFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.24 2.07a.5.5 0 0 1 .69.17L9.09 9h1.82L7.07 2.76a.5.5 0 0 1 .86-.52L12.09 9h5.41c.28 0 .5.22.5.5v.5c0 .7-.09 1.36-.25 2H2.25A8.01 8.01 0 0 1 2 10v-.5c0-.28.22-.5.5-.5h5.41L4.07 2.76a.5.5 0 0 1 .17-.69ZM10 18a8 8 0 0 1-7.42-5h14.84A8 8 0 0 1 10 18Z",
    fill: primaryFill
  }));
  ;
};
exports.BowlChopsticksFilled = wrapIcon_1.default( /*#__PURE__*/BowlChopsticksFilledIcon, 'BowlChopsticksFilled');
const BowlChopsticksRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.93 2.24a.5.5 0 0 0-.86.52L7.91 9H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 1 0 16 0v-.5a.5.5 0 0 0-.5-.5h-5.41L7.93 2.24a.5.5 0 0 0-.86.52L10.91 9H9.1L4.93 2.24ZM3.29 12A7 7 0 0 1 3 10h14a7 7 0 0 1-.29 2H3.29Zm.38 1h12.66a7 7 0 0 1-12.66 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BowlChopsticksRegular = wrapIcon_1.default( /*#__PURE__*/BowlChopsticksRegularIcon, 'BowlChopsticksRegular');
const BowlSaladFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.92 4.83a3.5 3.5 0 0 1 6.25.17 3.75 3.75 0 0 0-3.39 2.32 6.15 6.15 0 0 0-2.86-2.49ZM17 9a3.76 3.76 0 0 0-2.7-3.85A4.5 4.5 0 0 0 6 4.48 10.07 10.07 0 0 0 3.14 4a9.5 9.5 0 0 0-.67 0 .5.5 0 0 0-.47.47 4.84 4.84 0 0 0 0 .67c.01.41.05.98.17 1.62.12.68.33 1.46.68 2.23H2.5a.5.5 0 0 0-.5.5v.5c0 .7.09 1.36.25 2h15.5c.16-.64.25-1.3.25-2v-.5a.5.5 0 0 0-.5-.5H17ZM4 9a7.87 7.87 0 0 1-.83-2.4A10.47 10.47 0 0 1 3 5a9.4 9.4 0 0 1 1.59.16c1.18.22 2.57.69 3.57 1.7A5.83 5.83 0 0 1 9.48 9H7.7L5.85 7.15a.5.5 0 1 0-.7.7L6.29 9H4Zm6.54 0-.02-.08-.01-.17a2.75 2.75 0 1 1 5.49.25h-5.46ZM10 18a8 8 0 0 1-7.42-5h14.84A8 8 0 0 1 10 18Z",
    fill: primaryFill
  }));
  ;
};
exports.BowlSaladFilled = wrapIcon_1.default( /*#__PURE__*/BowlSaladFilledIcon, 'BowlSaladFilled');
const BowlSaladRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.92 4.83a3.5 3.5 0 0 1 6.25.17 3.75 3.75 0 0 0-3.39 2.32 6.15 6.15 0 0 0-2.86-2.49ZM17 9a3.76 3.76 0 0 0-2.7-3.85A4.5 4.5 0 0 0 6 4.48 10.07 10.07 0 0 0 3.14 4a9.5 9.5 0 0 0-.67 0 .5.5 0 0 0-.47.47 4.84 4.84 0 0 0 0 .67c.01.41.05.98.17 1.62.12.68.33 1.46.68 2.23H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 1 0 16 0v-.5a.5.5 0 0 0-.5-.5H17ZM4 9a7.87 7.87 0 0 1-.83-2.4A10.47 10.47 0 0 1 3 5a9.4 9.4 0 0 1 1.59.16c1.18.22 2.57.69 3.57 1.7A5.83 5.83 0 0 1 9.48 9H7.7L5.85 7.15a.5.5 0 1 0-.7.7L6.29 9H4Zm6.54 0-.02-.08-.01-.17a2.75 2.75 0 1 1 5.49.25h-5.46ZM3 10h14a7 7 0 0 1-.29 2H3.29A7 7 0 0 1 3 10Zm7 7a7 7 0 0 1-6.33-4h12.66A7 7 0 0 1 10 17Z",
    fill: primaryFill
  }));
  ;
};
exports.BowlSaladRegular = wrapIcon_1.default( /*#__PURE__*/BowlSaladRegularIcon, 'BowlSaladRegular');
const BoxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m10 7.96 3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-8.9L2.04 5.86Zm8.46 11.87c.27-.04.54-.1.8-.21l5.76-2.3c.57-.23.94-.78.94-1.4V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v8.9ZM17.42 5l-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxFilled = wrapIcon_1.default( /*#__PURE__*/BoxFilledIcon, 'BoxFilled');
const BoxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm4.13 4.35 6.5-2.6v7.58a.5.5 0 0 1-.31.47l-5.76 2.3c-.14.06-.28.1-.43.13V8.84Zm-1 0v7.88a2.5 2.5 0 0 1-.43-.13l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxRegular = wrapIcon_1.default( /*#__PURE__*/BoxRegularIcon, 'BoxRegular');
const BoxArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96ZM2 6.18c0-.11.01-.22.04-.33L9.5 8.84v3.36a5.48 5.48 0 0 0 0 4.6v.93a3.5 3.5 0 0 1-.8-.21l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18Zm16 0v4.08a5.48 5.48 0 0 0-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33Zm1 8.32a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-6.86-.35 2-2a.5.5 0 1 1 .71.7L13.71 14h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1-.15-.35.5.5 0 0 1 .14-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/BoxArrowLeftFilledIcon, 'BoxArrowLeftFilled');
const BoxArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 0 1-.62-1.06 2.5 2.5 0 0 1-.39-.12l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v3.36c.25-.54.6-1.04 1-1.48V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm12.63 10a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-6.86-.34 2-2a.5.5 0 1 1 .71.7L13.71 14h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1-.15-.35.5.5 0 0 1 .14-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/BoxArrowLeftRegularIcon, 'BoxArrowLeftRegular');
const BoxArrowUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96ZM2 6.18c0-.11.01-.22.04-.33L9.5 8.84v3.36a5.48 5.48 0 0 0 0 4.6v.93a3.5 3.5 0 0 1-.8-.21l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18Zm16 0v4.08a5.48 5.48 0 0 0-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.35-6.86 2 2a.5.5 0 1 1-.7.71L15 13.71v2.79a.5.5 0 0 1-1 0v-2.8l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.14Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxArrowUpFilled = wrapIcon_1.default( /*#__PURE__*/BoxArrowUpFilledIcon, 'BoxArrowUpFilled');
const BoxArrowUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 0 1-.62-1.06 2.5 2.5 0 0 1-.39-.12l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v3.36c.25-.54.6-1.04 1-1.48V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm8.13 14.5a4.5 4.5 0 1 0 0-8.99 4.5 4.5 0 0 0 0 9Zm.35-6.85 2 2a.5.5 0 1 1-.7.71L15 13.71v2.79a.5.5 0 0 1-1 0v-2.8l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.14Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxArrowUpRegular = wrapIcon_1.default( /*#__PURE__*/BoxArrowUpRegularIcon, 'BoxArrowUpRegular');
const BoxCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96ZM2 6.18c0-.11.01-.22.04-.33L9.5 8.84v3.36a5.48 5.48 0 0 0 0 4.6v.93a3.5 3.5 0 0 1-.8-.21l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18Zm16 0v4.08a5.48 5.48 0 0 0-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1-3.7 2.65-2.65a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/BoxCheckmarkFilledIcon, 'BoxCheckmarkFilled');
const BoxCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 0 1-.62-1.06 2.5 2.5 0 0 1-.39-.12l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v3.36c.25-.54.6-1.04 1-1.48V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm8.13 14.5a4.5 4.5 0 1 0 0-8.99 4.5 4.5 0 0 0 0 9Zm-1-3.7 2.65-2.64a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/BoxCheckmarkRegularIcon, 'BoxCheckmarkRegular');
const BoxDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-.94a5.48 5.48 0 0 1 0-4.58V8.84L2.04 5.85ZM18 6.17v4.08a5.48 5.48 0 0 0-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33Zm1 8.32a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxDismissFilled = wrapIcon_1.default( /*#__PURE__*/BoxDismissFilledIcon, 'BoxDismissFilled');
const BoxDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 0 1-.62-1.06 2.51 2.51 0 0 1-.39-.12l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v3.37c.25-.55.6-1.05 1-1.49V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxDismissRegular = wrapIcon_1.default( /*#__PURE__*/BoxDismissRegularIcon, 'BoxDismissRegular');
const BoxEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.36.12.37-1.49.07-.23V8.84L2.04 5.85ZM18 6.17v2.95a2.87 2.87 0 0 0-2.9.71l-4.6 4.6v-5.6l7.46-2.99c.03.1.04.22.04.33Zm-7.02 9.2 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxEditFilled = wrapIcon_1.default( /*#__PURE__*/BoxEditFilledIcon, 'BoxEditFilled');
const BoxEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.36.12.24-.97a2.53 2.53 0 0 1-.23-.08l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v7.08c.16-.47.42-.9.77-1.25l.23-.23v-5.6l6.5-2.6V9c.34-.01.68.03 1 .13V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm4.61 10.89 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxEditRegular = wrapIcon_1.default( /*#__PURE__*/BoxEditRegularIcon, 'BoxEditRegular');
const BoxMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34A2.5 2.5 0 0 1 14 10.1v4.78c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07ZM6.42 7.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v4.78a1.5 1.5 0 0 1-.96 1.4l-3.46 1.33a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.91a.5.5 0 0 0-.64-.28L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.8-1.07a.5.5 0 0 0 .3-.65Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleFilled = wrapIcon_1.default( /*#__PURE__*/BoxMultipleFilledIcon, 'BoxMultipleFilled');
const BoxMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.71A1.5 1.5 0 0 0 7 5.11v1.1a4 4 0 0 1 1 0v-1.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47v7.78c0 .2-.13.4-.32.47L14 14.39v.5c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.11a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm2.51 2.92a.5.5 0 0 0-.64-.3l-2.77 1.07a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 1 0-.35.93l2.76 1.07c.35.13.73.13 1.08 0l2.76-1.07a.5.5 0 0 0 .3-.64Zm-5 5a.5.5 0 0 0-.64-.3L7.5 11.15l-2.95-1.13a.5.5 0 0 0-.35.93L7 12.02v2.49a.5.5 0 1 0 1 0v-2.49l2.8-1.08a.5.5 0 0 0 .3-.64ZM8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.71a1.5 1.5 0 0 0-.96 1.4v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l3.46-1.33c.58-.22.96-.78.96-1.4v-4.78a1.5 1.5 0 0 0-.96-1.4L8.58 7.38Zm-1.8.93a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47v4.78c0 .2-.13.4-.32.47l-3.46 1.33a2 2 0 0 1-1.44 0l-3.46-1.33a.5.5 0 0 1-.32-.47v-4.78c0-.2.13-.4.32-.47l3.46-1.33Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleRegular = wrapIcon_1.default( /*#__PURE__*/BoxMultipleRegularIcon, 'BoxMultipleRegular');
const BoxMultipleArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34c.61.23 1.1.7 1.36 1.27a5.55 5.55 0 0 1 4.24 1.2V5.12a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07Zm-3.41 4.18c.3.11.54.32.71.57-.62.21-1.2.53-1.7.93a.5.5 0 0 0-.6-.2L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.09-.8a5.48 5.48 0 0 0-.39 5.98l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 1 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/BoxMultipleArrowLeftFilledIcon, 'BoxMultipleArrowLeftFilled');
const BoxMultipleArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1 0V5.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47V9.6c.36.18.7.4 1 .66V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33ZM12.04 8.7c.3.11.54.32.71.57-.33.11-.65.26-.95.43a.5.5 0 0 0-.12-.07L8.22 8.31a2 2 0 0 0-1.44 0L3.32 9.64a.5.5 0 0 0-.32.47v4.78c0 .2.13.4.32.47l3.46 1.33a2 2 0 0 0 1.44 0l1.07-.42c.11.32.25.63.41.92l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33Zm-1.6 1.3a.5.5 0 0 1 .61.2c-.36.3-.68.63-.96 1l-2.09.8v2.5a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10Zm5.65-4.72a.5.5 0 0 0-.64-.28l-2.77 1.06a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 0 0-.35.93L11.96 7c.35.14.73.14 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.34a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 1 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/BoxMultipleArrowLeftRegularIcon, 'BoxMultipleArrowLeftRegular');
const BoxMultipleArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34c.61.23 1.1.7 1.36 1.27a5.55 5.55 0 0 1 4.24 1.2V5.12a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07Zm-3.41 4.18c.3.11.54.32.71.57-.62.21-1.2.53-1.7.93a.5.5 0 0 0-.6-.2L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.09-.8a5.48 5.48 0 0 0-.39 5.98l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/BoxMultipleArrowRightFilledIcon, 'BoxMultipleArrowRightFilled');
const BoxMultipleArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1 0V5.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47V9.6c.36.18.7.4 1 .66V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33ZM12.04 8.7c.3.11.54.32.71.57-.33.11-.65.26-.95.43a.5.5 0 0 0-.12-.07L8.22 8.31a2 2 0 0 0-1.44 0L3.32 9.64a.5.5 0 0 0-.32.47v4.78c0 .2.13.4.32.47l3.46 1.33a2 2 0 0 0 1.44 0l1.07-.42c.11.32.25.63.41.92l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33Zm-1.6 1.3a.5.5 0 0 1 .61.2c-.36.3-.68.63-.96 1l-2.09.8v2.5a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10Zm5.65-4.72a.5.5 0 0 0-.64-.28l-2.77 1.06a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 0 0-.35.93L11.96 7c.35.14.73.14 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.36a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/BoxMultipleArrowRightRegularIcon, 'BoxMultipleArrowRightRegular');
const BoxMultipleCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34c.61.23 1.1.7 1.36 1.27a5.55 5.55 0 0 1 4.24 1.2V5.12a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07Zm-3.41 4.18c.3.11.54.32.71.57-.62.21-1.2.53-1.7.93a.5.5 0 0 0-.6-.2L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.09-.8a5.48 5.48 0 0 0-.39 5.98l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/BoxMultipleCheckmarkFilledIcon, 'BoxMultipleCheckmarkFilled');
const BoxMultipleCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1 0V5.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47V9.6c.36.18.7.4 1 .66V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33ZM12.04 8.7c.3.11.54.32.71.57-.33.11-.65.26-.95.43a.5.5 0 0 0-.12-.07L8.22 8.31a2 2 0 0 0-1.44 0L3.32 9.64a.5.5 0 0 0-.32.47v4.78c0 .2.13.4.32.47l3.46 1.33a2 2 0 0 0 1.44 0l1.07-.42c.11.32.25.63.41.92l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33Zm-1.6 1.3a.5.5 0 0 1 .61.2c-.36.3-.68.63-.96 1l-2.09.8v2.5a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10Zm5.65-4.72a.5.5 0 0 0-.64-.28l-2.77 1.06a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 0 0-.35.93L11.96 7c.35.14.73.14 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.84a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/BoxMultipleCheckmarkRegularIcon, 'BoxMultipleCheckmarkRegular');
const BoxMultipleSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22A4.5 4.5 0 0 0 13.74 9a2.5 2.5 0 0 0-1.34-1.23L8.94 6.44A4 4 0 0 0 7 6.21V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.44a.5.5 0 0 0-.64-.29L12.68 5.6a.5.5 0 0 1-.36 0L9.55 4.53a.5.5 0 0 0-.35.94l2.76 1.06c.35.13.73.13 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM12.6 9.09a1.5 1.5 0 0 0-.56-.38L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75a4.49 4.49 0 0 1-1.02-5.43l-1.5.58v2.49a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10a.5.5 0 0 1 .25-.03c.54-.44 1.2-.75 1.9-.9Zm3.7 6.5a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleSearchFilled = wrapIcon_1.default( /*#__PURE__*/BoxMultipleSearchFilledIcon, 'BoxMultipleSearchFilled');
const BoxMultipleSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22a4.48 4.48 0 0 0-.98-2.44V5.11a.5.5 0 0 0-.32-.47l-3.46-1.33a2 2 0 0 0-1.44 0L8.32 4.64a.5.5 0 0 0-.32.47v1.1a4 4 0 0 0-1 0V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm1.18 6.7a1.5 1.5 0 0 0-.56-.37L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75c-.27-.23-.5-.5-.71-.8l-1.6.62a2 2 0 0 1-1.43 0l-3.46-1.33a.5.5 0 0 1-.32-.47V10.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.16 1.22c.38-.2.79-.35 1.22-.44Zm-1.9.9a.5.5 0 0 0-.25.03L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l1.5-.57c.29-.57.7-1.07 1.2-1.46ZM15.45 5a.5.5 0 1 1 .35.93L13.04 7a1.5 1.5 0 0 1-1.08 0L9.2 5.94A.5.5 0 0 1 9.55 5l2.77 1.06a.5.5 0 0 0 .36 0l2.77-1.06Zm.85 10.59a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxMultipleSearchRegular = wrapIcon_1.default( /*#__PURE__*/BoxMultipleSearchRegularIcon, 'BoxMultipleSearchRegular');
const BoxSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m10 7.96 3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-2.17a4.48 4.48 0 0 1 0-4.12v-2.6L2.04 5.85ZM18 13.42V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v1.3a4.5 4.5 0 0 1 7.5 3.28Zm-.58-8.44-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM16.3 15.6a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 1 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxSearchFilled = wrapIcon_1.default( /*#__PURE__*/BoxSearchFilledIcon, 'BoxSearchFilled');
const BoxSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 0 0 2.6 0l.1-.04a4.51 4.51 0 0 1-.98-.7c-.32.1-.67.08-.98-.04l-.3-.12-.07-.03-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v2.6c.25-.5.6-.93 1-1.3v-1.3l6.5-2.6v4.43c.63.77 1 1.76 1 2.83V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm9.93 11.1a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 0 0 .7-.7L16.3 15.6ZM16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxSearchRegular = wrapIcon_1.default( /*#__PURE__*/BoxSearchRegularIcon, 'BoxSearchRegular');
const BoxToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1V13.5c0-.56.19-1.08.5-1.5V8.84L2.04 5.85ZM18 6.17v4.87h-.04A2.5 2.5 0 0 0 15.5 9h-2a2.5 2.5 0 0 0-2.46 2.04c-.19.04-.37.1-.54.17V8.84l7.46-2.99c.03.1.04.22.04.33ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxToolboxFilled = wrapIcon_1.default( /*#__PURE__*/BoxToolboxFilledIcon, 'BoxToolboxFilled');
const BoxToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1v-1.06L3.31 14.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6V12c.26-.34.6-.62 1-.8V8.85l6.5-2.6V9.5c.5.37.84.91.96 1.54l.04.01V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm5.63 7.5v-.5c0-.82.67-1.49 1.5-1.49h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5v.5h3v-.5a.5.5 0 0 0-.5-.5ZM17 16.5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BoxToolboxRegular = wrapIcon_1.default( /*#__PURE__*/BoxToolboxRegularIcon, 'BoxToolboxRegular');
const BracesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 5.75A2.75 2.75 0 0 1 6.23 3a.75.75 0 1 1 0 1.5C5.55 4.5 5 5.06 5 5.75L5 8.38c0 .6-.21 1.17-.58 1.62.37.45.58 1.02.58 1.62v2.63c0 .7.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5 2.75 2.75 0 0 1-2.75-2.75v-2.63c0-.4-.22-.76-.57-.94a.75.75 0 0 1 0-1.36c.35-.18.57-.54.57-.94V5.75Zm13 0A2.75 2.75 0 0 0 13.77 3a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25L15 8.38c0 .6.21 1.17.58 1.62a2.56 2.56 0 0 0-.58 1.62v2.63c0 .7-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-2.63c0-.4.22-.76.57-.94a.75.75 0 0 0 0-1.36 1.06 1.06 0 0 1-.57-.94V5.75Z",
    fill: primaryFill
  }));
  ;
};
exports.BracesFilled = wrapIcon_1.default( /*#__PURE__*/BracesFilledIcon, 'BracesFilled');
const BracesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 3A2.5 2.5 0 0 0 4 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 0 0 0 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 0 0 6.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 5 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C5 4.67 5.67 4 6.5 4a.5.5 0 0 0 0-1Zm7 0A2.5 2.5 0 0 1 16 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 0 1 0 .9 1.3 1.3 0 0 0-.72 1.17v2.88a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0 1 15 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.BracesRegular = wrapIcon_1.default( /*#__PURE__*/BracesRegularIcon, 'BracesRegular');
const BracesVariableFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 2.5A2.75 2.75 0 0 0 3 5.25v3.13c0 .4-.22.76-.57.94a.75.75 0 0 0 0 1.36c.35.18.57.54.57.94v3.13a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25v-3.13c0-.6-.21-1.17-.58-1.62.37-.45.58-1.02.58-1.62V5.25C4.5 4.56 5.06 4 5.75 4a.75.75 0 0 0 0-1.5Zm8.5 0A2.75 2.75 0 0 1 17 5.25v3.13c0 .4.22.76.57.94a.75.75 0 0 1 0 1.36c-.35.18-.57.54-.57.94v3.13a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25v-3.13c0-.6.21-1.17.58-1.62a2.56 2.56 0 0 1-.58-1.62V5.25c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1 0-1.5ZM8.11 6.06a.75.75 0 1 0-1.22.88L9.08 10l-2.19 3.06a.75.75 0 0 0 1.22.88L10 11.29l1.89 2.65a.75.75 0 0 0 1.22-.88L10.92 10l2.19-3.06a.75.75 0 0 0-1.22-.88L10 8.71 8.11 6.06Z",
    fill: primaryFill
  }));
  ;
};
exports.BracesVariableFilled = wrapIcon_1.default( /*#__PURE__*/BracesVariableFilledIcon, 'BracesVariableFilled');
const BracesVariableRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 0 0 0 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C4 4.67 4.67 4 5.5 4a.5.5 0 0 0 0-1Zm9 0A2.5 2.5 0 0 1 17 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 0 1 0 .9 1.3 1.3 0 0 0-.72 1.17v2.88a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0 1 16 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1ZM7.9 6.2a.5.5 0 0 0-.8.6L9.38 10l-2.3 3.2a.5.5 0 0 0 .82.6L10 10.85l2.1 2.93a.5.5 0 0 0 .8-.58L10.62 10l2.3-3.2a.5.5 0 1 0-.82-.6L10 9.15 7.9 6.21Z",
    fill: primaryFill
  }));
  ;
};
exports.BracesVariableRegular = wrapIcon_1.default( /*#__PURE__*/BracesVariableRegularIcon, 'BracesVariableRegular');
const BrainCircuitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.13 2.8A3.9 3.9 0 0 1 8.5 2a.9.9 0 0 1 .54.21c.13.1.24.22.35.35.07.09.11.2.11.32V6.5H8.41a1.5 1.5 0 1 0 0 1H9.5v9.42a.5.5 0 0 1-.18.38c-.47.38-1.08.7-1.82.7-1.19 0-2.07-.6-2.64-1.31a4.06 4.06 0 0 1-.82-1.76c-.33-.08-.7-.25-1.05-.55A3 3 0 0 1 2 12c0-.56.04-1.06.12-1.5h3.13c.64 0 1.16.47 1.24 1.09a1.5 1.5 0 1 0 1 0A2.25 2.25 0 0 0 5.25 9.5h-2.8a1.9 1.9 0 0 1 .83-.85c-.29-.83-.21-1.8.06-2.57.18-.49.45-.96.84-1.27.25-.2.55-.34.88-.36.14-.68.55-1.25 1.07-1.66Zm4.37 11.7h.75c1.24 0 2.25-1 2.25-2.25v-1.84a1.5 1.5 0 1 0-1 0v1.84c0 .69-.56 1.25-1.25 1.25h-.75V2.88a.5.5 0 0 1 .11-.32c.1-.13.22-.25.35-.35A.9.9 0 0 1 11.5 2c.85 0 1.71.28 2.37.8.52.4.93.97 1.07 1.65.33.02.63.16.88.36.39.31.66.78.84 1.27.27.77.35 1.74.06 2.57l.21.12c.28.19.49.45.64.76.3.6.43 1.44.43 2.47a3 3 0 0 1-.99 2.38c-.34.3-.72.47-1.05.55-.1.56-.38 1.2-.82 1.76A3.34 3.34 0 0 1 12.5 18c-.74 0-1.35-.32-1.82-.7a.5.5 0 0 1-.18-.38V14.5ZM7 6.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm6-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.BrainCircuitFilled = wrapIcon_1.default( /*#__PURE__*/BrainCircuitFilledIcon, 'BrainCircuitFilled');
const BrainCircuitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.13 2.8A3.9 3.9 0 0 1 8.5 2a1.76 1.76 0 0 1 1.5.78A1.76 1.76 0 0 1 11.5 2c.85 0 1.71.28 2.37.8.52.4.93.97 1.07 1.65.33.02.63.16.88.36.39.31.66.78.84 1.27.27.77.35 1.74.06 2.57l.21.12c.28.19.49.45.64.76.3.6.43 1.44.43 2.47a3 3 0 0 1-.99 2.38c-.34.3-.72.47-1.05.55-.1.56-.38 1.2-.82 1.76A3.34 3.34 0 0 1 12.5 18c-.94 0-1.69-.52-2.17-1.03a4.25 4.25 0 0 1-.33-.38c-.1.12-.2.25-.33.38A3.06 3.06 0 0 1 7.5 18c-1.19 0-2.07-.6-2.64-1.31a4.06 4.06 0 0 1-.82-1.76c-.33-.08-.7-.25-1.05-.55A3 3 0 0 1 2 12c0-1.03.13-1.87.43-2.47a1.91 1.91 0 0 1 .85-.88c-.29-.83-.21-1.8.06-2.57.18-.49.45-.96.84-1.27.25-.2.55-.34.88-.36.14-.68.55-1.25 1.07-1.66ZM9.5 4.5V4.5a1.78 1.78 0 0 0-.02-.24 2.58 2.58 0 0 0-.14-.57c-.07-.2-.17-.38-.3-.5A.76.76 0 0 0 8.5 3c-.65 0-1.29.22-1.76.58C6.28 3.94 6 4.43 6 5a.5.5 0 0 1-.66.47c-.19-.06-.35-.02-.53.12-.2.16-.39.45-.53.83-.28.78-.25 1.73.14 2.3A.5.5 0 0 1 4.5 9h.75c1.24 0 2.25 1 2.25 2.25v.34a1.5 1.5 0 1 1-1 0v-.34c0-.69-.56-1.25-1.25-1.25H3.5a.5.5 0 0 1-.18-.03c-.2.4-.32 1.06-.32 2.03 0 .86.31 1.34.64 1.62.34.3.73.38.86.38.28 0 .5.22.5.5 0 .37.2 1.01.64 1.56.43.54 1.05.94 1.86.94.56 0 1.06-.31 1.45-.72a3.12 3.12 0 0 0 .55-.81V7.5H8.41a1.5 1.5 0 1 1 0-1H9.5v-2Zm1 10v.97l.01.03.1.2c.1.17.25.38.44.58.39.4.9.72 1.45.72.81 0 1.43-.4 1.86-.94.44-.55.64-1.2.64-1.56 0-.28.22-.5.5-.5.13 0 .52-.08.86-.38.33-.28.64-.76.64-1.62 0-.97-.12-1.63-.32-2.03-.1-.19-.2-.3-.3-.37a.66.66 0 0 0-.38-.1.5.5 0 0 1-.42-.78c.39-.57.42-1.52.14-2.3a1.89 1.89 0 0 0-.53-.83c-.18-.14-.34-.18-.53-.12A.5.5 0 0 1 14 5c0-.57-.28-1.06-.74-1.42A2.91 2.91 0 0 0 11.5 3a.76.76 0 0 0-.54.19c-.13.11-.23.28-.3.49a2.58 2.58 0 0 0-.16.81v9.01h.75c.69 0 1.25-.56 1.25-1.25v-1.84a1.5 1.5 0 1 1 1 0v1.84c0 1.24-1 2.25-2.25 2.25h-.75ZM6.5 7a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM13 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-6 3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.BrainCircuitRegular = wrapIcon_1.default( /*#__PURE__*/BrainCircuitRegularIcon, 'BrainCircuitRegular');
const BranchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchFilled = wrapIcon_1.default( /*#__PURE__*/BranchFilledIcon, 'BranchFilled');
const BranchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 3a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchRegular = wrapIcon_1.default( /*#__PURE__*/BranchRegularIcon, 'BranchRegular');
const BranchCompareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.15 6.85a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM5 8a3 3 0 1 0-1-.17v4.67A3.5 3.5 0 0 0 7.5 16h1.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L9.29 15H7.5A2.5 2.5 0 0 1 5 12.5V8Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchCompareFilled = wrapIcon_1.default( /*#__PURE__*/BranchCompareFilledIcon, 'BranchCompareFilled');
const BranchCompareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.15 6.85a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM17 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a3 3 0 0 1-3 3v4.5A2.5 2.5 0 0 0 7.5 15h1.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L9.29 16H7.5A3.5 3.5 0 0 1 4 12.5V7.83A3 3 0 1 1 8 5ZM7 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchCompareRegular = wrapIcon_1.default( /*#__PURE__*/BranchCompareRegularIcon, 'BranchCompareRegular');
const BranchForkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5a3 3 0 0 1-2.5 2.96V10H12c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 1 1 1 0v.54A2.5 2.5 0 0 1 12 11H6.5v1.04a3 3 0 1 1-1 0V7.96A3 3 0 1 1 9 5Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkFilled = wrapIcon_1.default( /*#__PURE__*/BranchForkFilledIcon, 'BranchForkFilled');
const BranchForkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5a3 3 0 1 0-3.5 2.96v4.08a3 3 0 1 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 9 5ZM6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkRegular = wrapIcon_1.default( /*#__PURE__*/BranchForkRegularIcon, 'BranchForkRegular');
const BranchForkHintFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a3 3 0 0 0-.5 5.96v3.79a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 6 2ZM4.87 13.4a.5.5 0 1 0-.58-.8 3.02 3.02 0 0 0-1.12 1.54.5.5 0 1 0 .96.3 1.99 1.99 0 0 1 .74-1.03Zm2.9-.8a.5.5 0 1 0-.57.8 2.02 2.02 0 0 1 .75 1.04.5.5 0 1 0 .95-.3 2.99 2.99 0 0 0-1.12-1.55ZM4.3 16a.5.5 0 0 0-.88.5 3 3 0 0 0 1.38 1.27.5.5 0 1 0 .42-.91 2 2 0 0 1-.92-.85Zm4.37.5a.5.5 0 0 0-.87-.5 2 2 0 0 1-.98.88.5.5 0 1 0 .38.92 3 3 0 0 0 1.47-1.3Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkHintFilled = wrapIcon_1.default( /*#__PURE__*/BranchForkHintFilledIcon, 'BranchForkHintFilled');
const BranchForkHintRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a3 3 0 0 0-.5 5.96v3.79a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 6 2Zm8 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-1.13 6.4a.5.5 0 1 0-.58-.8 3.02 3.02 0 0 0-1.12 1.54.5.5 0 1 0 .96.3 1.99 1.99 0 0 1 .74-1.03Zm2.9-.8a.5.5 0 1 0-.57.8 2.02 2.02 0 0 1 .75 1.04.5.5 0 1 0 .95-.3 2.99 2.99 0 0 0-1.12-1.55ZM4.3 16a.5.5 0 0 0-.88.5 3 3 0 0 0 1.38 1.27.5.5 0 1 0 .42-.91 2 2 0 0 1-.92-.85Zm4.37.5a.5.5 0 0 0-.87-.5 2 2 0 0 1-.98.88.5.5 0 1 0 .38.92 3 3 0 0 0 1.47-1.3Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkHintRegular = wrapIcon_1.default( /*#__PURE__*/BranchForkHintRegularIcon, 'BranchForkHintRegular');
const BranchForkLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 7.96a3 3 0 1 0-1 0v4.08a3 3 0 1 0 1 0V11H11a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H5.5V7.96Zm7 5.04a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkLinkFilled = wrapIcon_1.default( /*#__PURE__*/BranchForkLinkFilledIcon, 'BranchForkLinkFilled');
const BranchForkLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a3 3 0 0 1 .5 5.96V10H11c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 1 1 1 0v.54A2.5 2.5 0 0 1 11 11H5.5v1.04a3 3 0 1 1-1 0V7.96A3 3 0 0 1 5 2ZM3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-.5 6a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchForkLinkRegular = wrapIcon_1.default( /*#__PURE__*/BranchForkLinkRegularIcon, 'BranchForkLinkRegular');
const BranchRequestFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 5a3 3 0 0 1-2.5 2.96v4.08a3 3 0 1 1-1 0V7.96A3 3 0 1 1 8 5Zm3.85 1.85a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L10.71 4h1.79A3.5 3.5 0 0 1 16 7.5v4.67a3 3 0 1 1-1-.17V7.5A2.5 2.5 0 0 0 12.5 5h-1.8l1.15 1.15c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchRequestFilled = wrapIcon_1.default( /*#__PURE__*/BranchRequestFilledIcon, 'BranchRequestFilled');
const BranchRequestRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 7.96a3 3 0 1 0-1 0v4.08a3 3 0 1 0 1 0V7.96ZM5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4.15-8.15a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM17 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BranchRequestRegular = wrapIcon_1.default( /*#__PURE__*/BranchRequestRegularIcon, 'BranchRequestRegular');
const BreakoutRoomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.35A3.99 3.99 0 0 0 12 14v-2a4 4 0 0 0-4-4H6c-1.2 0-2.27.52-3 1.35V6Zm3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BreakoutRoomFilled = wrapIcon_1.default( /*#__PURE__*/BreakoutRoomFilledIcon, 'BreakoutRoomFilled');
const BreakoutRoomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.35c.32-.29.6-.62.81-1H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.54c-.38.21-.71.49-1 .81V6Zm3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6Zm-2 3c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BreakoutRoomRegular = wrapIcon_1.default( /*#__PURE__*/BreakoutRoomRegularIcon, 'BreakoutRoomRegular');
const BriefcaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h1.5A2.5 2.5 0 0 1 17 8.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-5A2.5 2.5 0 0 1 5.5 6H7V3.5ZM12 6V4H8v2h4Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseFilled = wrapIcon_1.default( /*#__PURE__*/BriefcaseFilledIcon, 'BriefcaseFilled');
const BriefcaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 3a.5.5 0 0 0-.5.5V6H5.5A2.5 2.5 0 0 0 3 8.5v5A2.5 2.5 0 0 0 5.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 6H13V3.5a.5.5 0 0 0-.5-.5h-5ZM12 6H8V4h4v2ZM5.5 7h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 13.5v-5C4 7.67 4.67 7 5.5 7Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseRegular = wrapIcon_1.default( /*#__PURE__*/BriefcaseRegularIcon, 'BriefcaseRegular');
const BriefcaseMedicalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 3a.5.5 0 0 0-.5.5V6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2V3.5a.5.5 0 0 0-.5-.5h-5ZM12 6H8V4h4v2Zm-2 3c.28 0 .5.22.5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseMedicalFilled = wrapIcon_1.default( /*#__PURE__*/BriefcaseMedicalFilledIcon, 'BriefcaseMedicalFilled');
const BriefcaseMedicalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 9.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2ZM7 3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V3.5Zm5 .5H8v2h4V4ZM5 7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseMedicalRegular = wrapIcon_1.default( /*#__PURE__*/BriefcaseMedicalRegularIcon, 'BriefcaseMedicalRegular');
const BriefcaseOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L5.3 6.01A2.5 2.5 0 0 0 3 8.5v5A2.5 2.5 0 0 0 5.5 16h9c.24 0 .47-.03.7-.1l1.95 1.95a.5.5 0 0 0 .7-.7l-1.73-1.74L2.85 2.15ZM17 13.5c0 .4-.1.78-.26 1.12L8.12 6H12V4H8v1.88l-1-1V3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h1.5A2.5 2.5 0 0 1 17 8.5v5Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseOffFilled = wrapIcon_1.default( /*#__PURE__*/BriefcaseOffFilledIcon, 'BriefcaseOffFilled');
const BriefcaseOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L5.3 6.01A2.5 2.5 0 0 0 3 8.5v5A2.5 2.5 0 0 0 5.5 16h9c.24 0 .47-.03.7-.1l1.95 1.95a.5.5 0 0 0 .7-.7l-1.73-1.74-.72-.71L2.85 2.15ZM14.3 15H5.5A1.5 1.5 0 0 1 4 13.5v-5C4 7.67 4.67 7 5.5 7h.8l8 8ZM16 13.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-5A2.5 2.5 0 0 0 14.5 6H13V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1.38l1 1V4h4v2H8.12l1 1h5.38c.83 0 1.5.67 1.5 1.5v5Z",
    fill: primaryFill
  }));
  ;
};
exports.BriefcaseOffRegular = wrapIcon_1.default( /*#__PURE__*/BriefcaseOffRegularIcon, 'BriefcaseOffRegular');
const BrightnessHighFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm3 4a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-7.5 6.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM4 10a.5.5 0 0 1-.5.5H2.46a.5.5 0 0 1 0-1H3.5c.28 0 .5.22.5.5Zm.85-5.85a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm-.7 11.7c.2.2.5.2.7 0l1-1a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7Zm11-11.7a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Zm.7 11.7a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l1 1c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
  ;
};
exports.BrightnessHighFilled = wrapIcon_1.default( /*#__PURE__*/BrightnessHighFilledIcon, 'BrightnessHighFilled');
const BrightnessHighRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 16c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-6.5-5.5a.5.5 0 0 0 0-1H2.46a.5.5 0 0 0 0 1H3.5Zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 1 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm.7 11.7a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm11-11.7a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm-.7 11.7a.5.5 0 0 0 .7-.7l-1-1a.5.5 0 0 0-.7.7l1 1Z",
    fill: primaryFill
  }));
  ;
};
exports.BrightnessHighRegular = wrapIcon_1.default( /*#__PURE__*/BrightnessHighRegularIcon, 'BrightnessHighRegular');
const BrightnessLowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 7V7a3 3 0 1 1 0 6Zm6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 15c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-5.5-4.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Zm.65-5.35c.2-.2.5-.2.7 0l.5.5a.5.5 0 1 1-.7.7l-.5-.5a.5.5 0 0 1 0-.7Zm.7 9.7a.5.5 0 0 1-.7-.7l.5-.5a.5.5 0 0 1 .7.7l-.5.5Zm9-9.7a.5.5 0 0 0-.7 0l-.5.5a.5.5 0 0 0 .7.7l.5-.5a.5.5 0 0 0 0-.7Zm-.7 9.7a.5.5 0 0 0 .7-.7l-.5-.5a.5.5 0 0 0-.7.7l.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BrightnessLowFilled = wrapIcon_1.default( /*#__PURE__*/BrightnessLowFilledIcon, 'BrightnessLowFilled');
const BrightnessLowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm10 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-6.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM5 10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm.85-4.85a.5.5 0 1 0-.7.7l.5.5a.5.5 0 1 0 .7-.7l-.5-.5Zm-.7 9.7c.2.2.5.2.7 0l.5-.5a.5.5 0 0 0-.7-.7l-.5.5a.5.5 0 0 0 0 .7Zm9-9.7a.5.5 0 0 1 .7.7l-.5.5a.5.5 0 0 1-.7-.7l.5-.5Zm.7 9.7a.5.5 0 0 1-.7 0l-.5-.5a.5.5 0 0 1 .7-.7l.5.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
  ;
};
exports.BrightnessLowRegular = wrapIcon_1.default( /*#__PURE__*/BrightnessLowRegularIcon, 'BrightnessLowRegular');
const BroadActivityFeedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-13Zm0 9c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4Zm9 0c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4Z",
    fill: primaryFill
  }));
  ;
};
exports.BroadActivityFeedFilled = wrapIcon_1.default( /*#__PURE__*/BroadActivityFeedFilledIcon, 'BroadActivityFeedFilled');
const BroadActivityFeedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 8.5v-4ZM3.5 4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-13ZM2 13.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 15.5v-2Zm1.5-.5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-4Zm9-1c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4Zm-.5 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BroadActivityFeedRegular = wrapIcon_1.default( /*#__PURE__*/BroadActivityFeedRegularIcon, 'BroadActivityFeedRegular');
const BroomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.91 2.18c.2.2.2.51 0 .7L13.3 7.5a5.6 5.6 0 0 0-.7-.7l4.6-4.62c.2-.2.51-.2.71 0Zm-5.66 5.66a4.5 4.5 0 0 0-6.36 0l-.42.42 6.36 6.36.42-.42a4.5 4.5 0 0 0 0-6.36Zm-10.5 2.75 2.9-1.74 6.5 6.5a.5.5 0 0 0 .1.08L9.5 18.35a.5.5 0 0 1-.78.1l-7.07-7.08a.5.5 0 0 1 .1-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.BroomFilled = wrapIcon_1.default( /*#__PURE__*/BroomFilledIcon, 'BroomFilled');
const BroomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.91 2.18c.2.2.2.51 0 .7l-5.32 5.33a4.5 4.5 0 0 1-.34 6l-.66.66-2.09 3.48a.5.5 0 0 1-.78.1l-7.07-7.08a.5.5 0 0 1 .1-.78L5.22 8.5l.66-.66a4.5 4.5 0 0 1 5.99-.34l5.32-5.32c.2-.2.51-.2.71 0ZM6.24 8.9l4.95 4.95.36-.35A3.5 3.5 0 1 0 6.6 8.55l-.36.35Zm-.78.63L2.8 11.12l6.16 6.17 1.6-2.66-5.11-5.1Z",
    fill: primaryFill
  }));
  ;
};
exports.BroomRegular = wrapIcon_1.default( /*#__PURE__*/BroomRegularIcon, 'BroomRegular');
const BubbleMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.17 15.6a3.5 3.5 0 1 0 3.74-4.58 6 6 0 0 1-3.74 4.57ZM12 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM7.03 7.5a.5.5 0 0 0 .3.64 2.5 2.5 0 0 1 1.53 1.53.5.5 0 1 0 .94-.34A3.5 3.5 0 0 0 7.67 7.2a.5.5 0 0 0-.64.3Z",
    fill: primaryFill
  }));
  ;
};
exports.BubbleMultipleFilled = wrapIcon_1.default( /*#__PURE__*/BubbleMultipleFilledIcon, 'BubbleMultipleFilled');
const BubbleMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM12 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM3 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 7 5Zm5.5 13a3.5 3.5 0 0 1-3.33-2.4c.32-.13.63-.28.91-.45A2.5 2.5 0 1 0 12.66 12c.1-.31.2-.64.25-.98A3.5 3.5 0 0 1 12.5 18ZM7.67 7.2a.5.5 0 1 0-.34.94 2.5 2.5 0 0 1 1.53 1.53.5.5 0 1 0 .94-.34A3.5 3.5 0 0 0 7.67 7.2Z",
    fill: primaryFill
  }));
  ;
};
exports.BubbleMultipleRegular = wrapIcon_1.default( /*#__PURE__*/BubbleMultipleRegularIcon, 'BubbleMultipleRegular');
const BugFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 2.5a.5.5 0 0 0-1 0V3c0 .4.12.77.32 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 0 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2c0-.83.67-1.5 1.5-1.5H6a4 4 0 0 0 8 0h.5c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 0-2.5-2.5H14v-1.5h3.5a.5.5 0 0 0 0-1H14V8h.5A2.5 2.5 0 0 0 17 5.5v-2a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5H14a3 3 0 0 0-2.32-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 1 1-2 0v-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BugFilled = wrapIcon_1.default( /*#__PURE__*/BugFilledIcon, 'BugFilled');
const BugRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 2.5a.5.5 0 0 0-1 0V3c0 .4.12.77.32 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 0 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2c0-.83.67-1.5 1.5-1.5H6a4 4 0 0 0 8 0h.5c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 0-2.5-2.5H14v-1.5h3.5a.5.5 0 0 0 0-1H14V8h.5A2.5 2.5 0 0 0 17 5.5v-2a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5H14a3 3 0 0 0-2.32-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 1 1-2 0v-.5ZM13 7v6a3 3 0 1 1-6 0V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.BugRegular = wrapIcon_1.default( /*#__PURE__*/BugRegularIcon, 'BugRegular');
const BugArrowCounterclockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96A5.49 5.49 0 0 1 14 9.02V8h.5A2.5 2.5 0 0 0 17 5.5v-2ZM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.25a2.74 2.74 0 0 1-2.05-.92.5.5 0 1 1 .75-.66 1.75 1.75 0 1 0 .4-2.67h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.63V12a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1 1.5 5.05Z",
    fill: primaryFill
  }));
  ;
};
exports.BugArrowCounterclockwiseFilled = wrapIcon_1.default( /*#__PURE__*/BugArrowCounterclockwiseFilledIcon, 'BugArrowCounterclockwiseFilled');
const BugArrowCounterclockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1-.41-1.09A2.99 2.99 0 0 1 7 13V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.21c.33-.09.66-.15 1-.19V8h.5A2.5 2.5 0 0 0 17 5.5v-2ZM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.25a2.74 2.74 0 0 1-2.05-.92.5.5 0 1 1 .75-.66 1.75 1.75 0 1 0 .4-2.67h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.63V12a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1 1.5 5.05Z",
    fill: primaryFill
  }));
  ;
};
exports.BugArrowCounterclockwiseRegular = wrapIcon_1.default( /*#__PURE__*/BugArrowCounterclockwiseRegularIcon, 'BugArrowCounterclockwiseRegular');
const BugProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9c-.46-.6-.7-1.34-.7-2.1Zm3.5 3.5c-.76 0-1.5-.24-2.1-.7l4.9-4.9a3.48 3.48 0 0 1-.33 4.57A3.5 3.5 0 0 1 14.5 18ZM17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1 .85-6.17A5.5 5.5 0 0 1 14 9.03V8h.5A2.5 2.5 0 0 0 17 5.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BugProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/BugProhibitedFilledIcon, 'BugProhibitedFilled');
const BugProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.18 15.87c.1.38.23.74.4 1.09A3.99 3.99 0 0 1 6 13h-.5A1.5 1.5 0 0 0 4 14.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 5.5 12H6v-1.5H2.5a.5.5 0 0 1 0-1H6V8h-.5A2.5 2.5 0 0 1 3 5.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 0 5.5 7H6a3 3 0 0 1 2.31-2.92A2 2 0 0 1 8 3v-.5a.5.5 0 0 1 1 0V3a1 1 0 0 0 2 0v-.5a.5.5 0 0 1 1 0V3a2 2 0 0 1-.31 1.08A3 3 0 0 1 14 7h.5A1.5 1.5 0 0 0 16 5.5v-2a.5.5 0 0 1 1 0v2A2.5 2.5 0 0 1 14.5 8H14v1.03c-.34.03-.67.09-1 .18V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2.99 2.99 0 0 0 2.18 2.87ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7.3 2.1 4.9-4.9a3.48 3.48 0 0 0-4.57.33 3.5 3.5 0 0 0-.33 4.57Zm6.3-2.1c0-.76-.24-1.5-.7-2.1l-4.9 4.9a3.48 3.48 0 0 0 4.57-.33A3.5 3.5 0 0 0 18 14.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BugProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/BugProhibitedRegularIcon, 'BugProhibitedRegular');
const BuildingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 0 1-.5.5H13v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V18H4.5a.5.5 0 0 1-.5-.5v-14Zm2.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 15v3h-1.5v-3H12Zm-2.5 0H8v3h1.5v-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingFilled = wrapIcon_1.default( /*#__PURE__*/BuildingFilledIcon, 'BuildingFilled');
const BuildingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 18a.5.5 0 0 1-.5-.5v-14C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 0 1-.5.5h-11ZM5 3.5V17h2v-2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17h2V9.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5ZM12 15h-1.5v2H12v-2Zm-2.5 0H8v2h1.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRegularIcon, 'BuildingRegular');
const BuildingBankFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 16.1 8H3.9a.92.92 0 0 1-.52-1.67l5.85-4.15Zm.77 3.7a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.66ZM4.5 9v4h2V9h-2ZM3 16.17c0-1.2.97-2.17 2.17-2.17h9.66c1.2 0 2.17.97 2.17 2.17v.33a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-.33ZM15.5 9v4h-2V9h2Zm-3 0v4h-2V9h2Zm-3 0v4h-2V9h2Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankFilled = wrapIcon_1.default( /*#__PURE__*/BuildingBankFilledIcon, 'BuildingBankFilled');
const BuildingBankRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66Zm6 7.47V8h.1a.92.92 0 0 0 .52-1.67l-5.85-4.15a1.33 1.33 0 0 0-1.54 0L3.38 6.33A.92.92 0 0 0 3.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1.33c0-.77-.4-1.45-1-1.83ZM9.8 3a.33.33 0 0 1 .4 0l5.63 4H4.17L9.8 3ZM15 8v5h-2V8h2ZM5 13V8h2v5H5Zm.17 1h9.66c.65 0 1.17.52 1.17 1.17V16H4v-.83c0-.65.52-1.17 1.17-1.17Zm4.33-1H8V8h1.5v5Zm1 0V8H12v5h-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankRegular = wrapIcon_1.default( /*#__PURE__*/BuildingBankRegularIcon, 'BuildingBankRegular');
const BuildingBankLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 16.1 8H3.9a.92.92 0 0 1-.52-1.67l5.85-4.15Zm.77 3.7a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.66ZM4.5 9v4h2V9h-2ZM3 16.17c0-1.2.97-2.17 2.17-2.17h3.17a3.49 3.49 0 0 0 0 3H3.5a.5.5 0 0 1-.5-.5v-.33ZM9.05 13c.14-.14.29-.26.45-.37V9h-2v4h1.55Zm2.45-1h1V9h-2v3.14c.32-.09.65-.14 1-.14Zm2 0h2V9h-2v3Zm-2 1a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankLinkFilled = wrapIcon_1.default( /*#__PURE__*/BuildingBankLinkFilledIcon, 'BuildingBankLinkFilled');
const BuildingBankLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM3.5 17h4.84a3.48 3.48 0 0 1-.3-1H4v-.83c0-.65.52-1.17 1.17-1.17h3.17c.17-.38.42-.71.71-1H8V8h1.5v4.63c.3-.21.64-.38 1-.49V8H12v4h1V8h2v4h.5c.17 0 .34.01.5.03V8h.1a.92.92 0 0 0 .52-1.67l-5.85-4.15a1.33 1.33 0 0 0-1.54 0L3.38 6.33A.92.92 0 0 0 3.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5ZM9.8 3a.33.33 0 0 1 .4 0l5.63 4H4.17L9.8 3ZM5 13V8h2v5H5Zm6.5 0a2.5 2.5 0 0 0 0 5h.5a.5.5 0 1 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 1 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 1 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankLinkRegular = wrapIcon_1.default( /*#__PURE__*/BuildingBankLinkRegularIcon, 'BuildingBankLinkRegular');
const BuildingBankToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 15.1 8H2.9a.92.92 0 0 1-.52-1.67l5.85-4.15ZM9 5.88A.83.83 0 1 0 9 4.2a.83.83 0 0 0 0 1.66ZM3.5 9v4h2V9h-2Zm.67 5C2.97 14 2 14.97 2 16.17v.33c0 .28.22.5.5.5H9v-3H4.17Zm7.33-4V9h-2v3c.37-.5.91-.84 1.54-.96.07-.38.23-.74.46-1.04Zm-3 3V9h-2v4h2Zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankToolboxFilled = wrapIcon_1.default( /*#__PURE__*/BuildingBankToolboxFilledIcon, 'BuildingBankToolboxFilled');
const BuildingBankToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM2.5 17H9v-1H3v-.83c0-.65.52-1.17 1.17-1.17H9v-.5c0-.56.19-1.08.5-1.5V8H11v3.05h.04A2.5 2.5 0 0 1 12 9.5V8h2v1h1V8h.1a.92.92 0 0 0 .52-1.67L9.77 2.18a1.33 1.33 0 0 0-1.54 0L2.38 6.33A.92.92 0 0 0 2.9 8H3v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5ZM8.8 3a.33.33 0 0 1 .4 0l5.63 4H3.17L8.8 3ZM4 13V8h2v5H4Zm4.5 0H7V8h1.5v5Zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 1 0-1 0v.5h-3v-.5a.5.5 0 1 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingBankToolboxRegular = wrapIcon_1.default( /*#__PURE__*/BuildingBankToolboxRegularIcon, 'BuildingBankToolboxRegular');
const BuildingDesktopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8h-3c-.82 0-1.57.33-2.1.86A.75.75 0 1 0 7.16 10 3 3 0 0 0 7 11v4H3.25C2.56 15 2 14.44 2 13.75V3.25ZM8.27 10A2 2 0 0 1 10 9h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v1h1.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H12v-1h-2a2 2 0 0 1-2-2v-4c0-.36.1-.7.27-1ZM10 10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7ZM4 4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 9.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.5 7A.75.75 0 1 0 8 7a.75.75 0 0 0-1.5 0ZM14 18v-1h-1v1h1Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingDesktopFilled = wrapIcon_1.default( /*#__PURE__*/BuildingDesktopFilledIcon, 'BuildingDesktopFilled');
const BuildingDesktopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.25c0-.14.11-.25.25-.25h5.5c.14 0 .25.11.25.25v2.5C9 6.44 9.56 7 10.25 7h1.5c.14 0 .25.11.25.25V8h1v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 0 1-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7v-1H3.25a.25.25 0 0 1-.25-.25V3.25ZM7.25 8.5c.27 0 .51.15.64.36A3 3 0 0 0 7.17 10a.75.75 0 0 1 .08-1.5Zm-2.5-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.5 7A.75.75 0 1 1 4 7a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 11c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v1h1.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H12v-1h-2a2 2 0 0 1-2-2v-4Zm2 5h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm4 2v-1h-1v1h1Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingDesktopRegular = wrapIcon_1.default( /*#__PURE__*/BuildingDesktopRegularIcon, 'BuildingDesktopRegular');
const BuildingFactoryFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.94 3.4c.05-.79.7-1.4 1.5-1.4h1.12c.8 0 1.45.61 1.5 1.4l.87 13a1.5 1.5 0 0 1-1.5 1.6H3.57a1.5 1.5 0 0 1-1.5-1.6l.87-13ZM8.44 18c.34-.46.53-1.04.49-1.67L8.4 8.51l3.76-3.38a.5.5 0 0 1 .84.37v3.38l4.16-3.75a.5.5 0 0 1 .84.37v11c0 .83-.67 1.5-1.5 1.5H8.43ZM16 17v-4.2a.8.8 0 0 0-.8-.8h-3.4a.8.8 0 0 0-.8.8V17h5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingFactoryFilled = wrapIcon_1.default( /*#__PURE__*/BuildingFactoryFilledIcon, 'BuildingFactoryFilled');
const BuildingFactoryRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.44 2a1.5 1.5 0 0 0-1.5 1.4l-.87 13a1.5 1.5 0 0 0 1.5 1.6h2.86a1.5 1.5 0 0 0 1.5-1.6l-.87-13A1.5 1.5 0 0 0 5.56 2H4.44Zm-.5 1.47a.5.5 0 0 1 .5-.47h1.12c.27 0 .49.2.5.47l.87 13a.5.5 0 0 1-.5.53H3.57a.5.5 0 0 1-.5-.53l.87-13ZM16.5 18H8.43c.22-.3.38-.63.45-1H10v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h.5a.5.5 0 0 0 .5-.5V6.62l-4.17 3.75A.5.5 0 0 1 12 10V6.62L8.49 9.78 8.4 8.51l3.76-3.38a.5.5 0 0 1 .84.37v3.38l4.16-3.75a.5.5 0 0 1 .84.37v11c0 .83-.67 1.5-1.5 1.5ZM11 17h4v-4h-4v4Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingFactoryRegular = wrapIcon_1.default( /*#__PURE__*/BuildingFactoryRegularIcon, 'BuildingFactoryRegular');
const BuildingGovernmentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 2a.5.5 0 0 0-.5.5v2.6A5 5 0 0 0 5 10v1H4a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2h-1v-1a5 5 0 0 0-5-5V4h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3ZM6 13.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Zm8.5-.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM9 9.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Zm2.5-.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingGovernmentFilled = wrapIcon_1.default( /*#__PURE__*/BuildingGovernmentFilledIcon, 'BuildingGovernmentFilled');
const BuildingGovernmentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H10v1a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4c0-1.1.9-2 2-2h1v-1a5 5 0 0 1 4-4.9V2.5Zm7 9.5h-1.5a.5.5 0 0 1-.5-.5V10a4 4 0 0 0-8 0v1.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0-1 1v4h5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h5v-4a1 1 0 0 0-1-1ZM6 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm9 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM8.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3.5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM9 17h2v-2H9v2Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingGovernmentRegular = wrapIcon_1.default( /*#__PURE__*/BuildingGovernmentRegularIcon, 'BuildingGovernmentRegular');
const BuildingHomeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.25 2C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7.5v-1.74c0-.68.3-1.33.82-1.78l3.47-2.96c.35-.3.78-.47 1.21-.52v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 0 1-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5Zm1.5 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM5.5 7A.75.75 0 1 1 4 7a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6.06.03c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingHomeFilled = wrapIcon_1.default( /*#__PURE__*/BuildingHomeFilledIcon, 'BuildingHomeFilled');
const BuildingHomeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.25 3a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H7.5v1H3.25C2.56 15 2 14.44 2 13.75V3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8c-.35.04-.7.16-1 .37V7.25a.25.25 0 0 0-.25-.25h-1.5C9.56 7 9 6.44 9 5.75v-2.5A.25.25 0 0 0 8.75 3h-5.5Zm10.81 6.28c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95ZM5.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 8 7Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingHomeRegular = wrapIcon_1.default( /*#__PURE__*/BuildingHomeRegularIcon, 'BuildingHomeRegular');
const BuildingLighthouseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.25 2.07a.5.5 0 0 0-.5 0L5.57 3.88A1.13 1.13 0 0 0 6 6v2.2a2 2 0 0 0-1.15 1.59l-.79 7.11a1 1 0 0 0 1 1.11h7.88a1 1 0 0 0 1-1.11l-.8-7.11A2 2 0 0 0 12 8.18V6a1.13 1.13 0 0 0 .43-2.12L9.25 2.07ZM11 8H7V6h4v2Zm-5.48 4.88 6.76-1.8.22 1.9-7.2 1.92.22-2.02ZM16.5 7h-2a.5.5 0 1 1 0-1h2a.5.5 0 0 1 0 1Zm-.65-3.15a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 0 0 .7.7l1-1Zm0 6a.5.5 0 0 0 0-.7l-1-1a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingLighthouseFilled = wrapIcon_1.default( /*#__PURE__*/BuildingLighthouseFilledIcon, 'BuildingLighthouseFilled');
const BuildingLighthouseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.75 2.07a.5.5 0 0 1 .5 0l3.18 1.81A1.13 1.13 0 0 1 12 6v2.2a2 2 0 0 1 1.15 1.59l.79 7.11a1 1 0 0 1-1 1.11H5.06a1 1 0 0 1-1-1.11l.8-7.11A2 2 0 0 1 6 8.18V6a1.13 1.13 0 0 1-.43-2.1l3.18-1.82Zm.25 1L6.07 4.76a.13.13 0 0 0 .06.25h5.74a.13.13 0 0 0 .06-.25L9 3.08ZM11.16 9H6.84a1 1 0 0 0-1 .89l-.2 1.92 6.53-1.74-.02-.18a1 1 0 0 0-.99-.89ZM11 8V6H7v2h4Zm-5.7 6.9 7.2-1.92-.22-1.9-6.76 1.8-.23 2.02Zm-.13 1.07L5.06 17h7.88l-.33-3.01-7.44 1.98ZM14.5 7h2a.5.5 0 0 0 0-1h-2a.5.5 0 1 0 0 1Zm1.35-3.85c.2.2.2.5 0 .7l-1 1a.5.5 0 1 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm0 6a.5.5 0 1 1-.7.7l-1-1a.5.5 0 0 1 .7-.7l1 1Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingLighthouseRegular = wrapIcon_1.default( /*#__PURE__*/BuildingLighthouseRegularIcon, 'BuildingLighthouseRegular');
const BuildingMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H4Zm7 3h-1a2 2 0 0 0-2 2v10H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1ZM5.25 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.25-2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.75-2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingMultipleFilled = wrapIcon_1.default( /*#__PURE__*/BuildingMultipleFilledIcon, 'BuildingMultipleFilled');
const BuildingMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm10 13h2v-2h-2v2Zm3 0h2V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2ZM11 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13h5V7c0-1.1.9-2 2-2h1V4Zm1 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 14.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.5 8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingMultipleRegular = wrapIcon_1.default( /*#__PURE__*/BuildingMultipleRegularIcon, 'BuildingMultipleRegular');
const BuildingPeopleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2C4.67 2 4 2.67 4 3.5v14c0 .28.22.5.5.5h4.74A2.98 2.98 0 0 1 9 16.81c0-1.05.7-1.97 1.7-2.23a2.75 2.75 0 1 1 4.55-3c.2-.2.47-.35.75-.45V9.5c0-.83-.67-1.5-1.5-1.5H13V3.5c0-.83-.67-1.5-1.5-1.5h-6Zm2 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.5 4.06c0 1.1-.86 2.19-3 2.19s-3-1.1-3-2.19c0-.72.58-1.31 1.29-1.31h3.42c.71 0 1.29.59 1.29 1.31Zm.48 1.69h.02c1.79 0 2.5-.94 2.5-1.88a1.1 1.1 0 0 0-1.07-1.12H16.6c.25.38.4.83.4 1.31 0 .58-.17 1.18-.52 1.69ZM18 13.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingPeopleFilled = wrapIcon_1.default( /*#__PURE__*/BuildingPeopleFilledIcon, 'BuildingPeopleFilled');
const BuildingPeopleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.01 17H5V3.5c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5v5c0 .28.22.5.5.5h2c.28 0 .5.22.5.5v1.67c.1.13.17.27.24.41.22-.2.48-.35.76-.45V9.5c0-.83-.67-1.5-1.5-1.5H13V3.5c0-.83-.67-1.5-1.5-1.5h-6C4.67 2 4 2.67 4 3.5v14c0 .28.22.5.5.5h4.74a2.97 2.97 0 0 1-.23-1Zm5.49-4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.5 4.06c0 1.1-.86 2.19-3 2.19s-3-1.1-3-2.19c0-.72.58-1.31 1.29-1.31h3.42c.71 0 1.29.59 1.29 1.31Zm.48 1.69h.02c1.79 0 2.5-.94 2.5-1.88a1.1 1.1 0 0 0-1.07-1.12H16.6c.25.38.4.83.4 1.31 0 .58-.17 1.18-.52 1.69ZM18 13.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingPeopleRegular = wrapIcon_1.default( /*#__PURE__*/BuildingPeopleRegularIcon, 'BuildingPeopleRegular');
const BuildingRetailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10V8h8v2H6Zm6 4v-1h2v1h-2Zm6-9.5c0 .65-.42 1.2-1 1.41V16.5a.5.5 0 0 1-.5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17H3.5a.5.5 0 0 1-.5-.5V5.91A1.5 1.5 0 0 1 3.5 3h13c.83 0 1.5.67 1.5 1.5Zm-15 0c0 .28.22.5.5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5ZM5.5 7a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm6 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3ZM6 17h3v-4H6v4Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailFilled = wrapIcon_1.default( /*#__PURE__*/BuildingRetailFilledIcon, 'BuildingRetailFilled');
const BuildingRetailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 7a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm5.5 2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3Zm.5 2v-1h2v1h-2ZM2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM4 6v10h1v-3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V16h6V6H4Zm2 10h3v-3H6v3Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRetailRegularIcon, 'BuildingRetailRegular');
const BuildingRetailMoneyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10V8h8v2H6Zm11-4.09A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3.3-.2.66-.3 1.04-.3h6V5.91ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM5 7.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3ZM9 13v4H6v-4h3Zm8.5 0c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6Zm0 5c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailMoneyFilled = wrapIcon_1.default( /*#__PURE__*/BuildingRetailMoneyFilledIcon, 'BuildingRetailMoneyFilled');
const BuildingRetailMoneyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V12h-1V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3A2 2 0 0 0 9 14v-1H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm2 3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm13 4.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5ZM17.5 18c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailMoneyRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRetailMoneyRegularIcon, 'BuildingRetailMoneyRegular');
const BuildingRetailMoreFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.3a1 1 0 0 1 .7-.3h10.6a1 1 0 0 1 .7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H2.2a1.21 1.21 0 0 1-.85-2.07L4 3.3ZM17 9H3v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9ZM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailMoreFilled = wrapIcon_1.default( /*#__PURE__*/BuildingRetailMoreFilledIcon, 'BuildingRetailMoreFilled');
const BuildingRetailMoreRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 3.3a1 1 0 0 1 .7-.3h10.6a1 1 0 0 1 .7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H17v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h-.79a1.21 1.21 0 0 1-.85-2.07L4 3.3ZM16 15V8H4v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Zm1.79-8c.18 0 .28-.23.14-.36L15.3 4H4.71L2.07 6.64A.21.21 0 0 0 2.2 7H17.8Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailMoreRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRetailMoreRegularIcon, 'BuildingRetailMoreRegular');
const BuildingRetailShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.5c0 .65-.42 1.2-1 1.41v3.36c-.34-.24-.63-.5-.85-.73A1.6 1.6 0 0 0 15 8.06V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h4.58a1.5 1.5 0 0 0-.08.5V13v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17H3.5a.5.5 0 0 1-.5-.5V5.91A1.5 1.5 0 0 1 3.5 3h13c.83 0 1.5.67 1.5 1.5Zm-15 0c0 .28.22.5.5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5ZM14 8v.4l-.15.14A4.71 4.71 0 0 1 11.22 10H6V8h8Zm-5 5H6v4h3v-4Zm9.5-2.04a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailShieldFilled = wrapIcon_1.default( /*#__PURE__*/BuildingRetailShieldFilledIcon, 'BuildingRetailShieldFilled');
const BuildingRetailShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V16H4V6h12v2.4l.15.14c.22.23.51.49.85.73V5.9A1.5 1.5 0 0 0 16.5 3h-13ZM3 4.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM9 16H6v-3h3v3Zm6-7.94V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h4.58a1.6 1.6 0 0 1 1.14-1H6V8h8v.4c.29-.22.64-.34 1-.34Zm3.5 2.9a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailShieldRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRetailShieldRegularIcon, 'BuildingRetailShieldRegular');
const BuildingRetailToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.91A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.37-.5.91-.84 1.54-.96l.01-.04H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V9h.5c.56 0 1.08.19 1.5.5V5.91ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM9 13v4H6v-4h3Zm4.5-4h.5V8H6v2h5.5c.46-.6 1.18-1 2-1ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailToolboxFilled = wrapIcon_1.default( /*#__PURE__*/BuildingRetailToolboxFilledIcon, 'BuildingRetailToolboxFilled');
const BuildingRetailToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V9.5c-.3-.22-.63-.38-1-.45V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c-.31.42-.5.94-.5 1.5V13H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 7.5V9h-1V8H6v2h5.5c-.22.3-.38.63-.45 1H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingRetailToolboxRegular = wrapIcon_1.default( /*#__PURE__*/BuildingRetailToolboxRegularIcon, 'BuildingRetailToolboxRegular');
const BuildingShopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 12h2v2h-2v-2ZM5 2h10a.5.5 0 0 1 .38.18l2.5 3c.12.14.12.21.12.3V7a3 3 0 0 1-1 2.24v8.26a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.24A3 3 0 0 1 2 7V5.5a.5.5 0 0 1 .12-.32l2.5-3A.5.5 0 0 1 5 2ZM3 6v1a2 2 0 1 0 4 0V6H3Zm5 0v1a2 2 0 1 0 4 0V6H8Zm5 0v1a2 2 0 1 0 4 0V6h-4ZM5.23 3 3.57 5h3.57l.67-2H5.23Zm6.58 2-.67-2H8.86l-.67 2h3.62Zm1.05 0h3.57l-1.66-2h-2.58l.67 2ZM11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM9 18v-6H6v6h3Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingShopFilled = wrapIcon_1.default( /*#__PURE__*/BuildingShopFilledIcon, 'BuildingShopFilled');
const BuildingShopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm1 2.5v-2h2v2h-2ZM5 2a.5.5 0 0 0-.38.18l-2.5 3A.5.5 0 0 0 2 5.5V7a3 3 0 0 0 1 2.24v8.26c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V9.24A3 3 0 0 0 18 7V5.48c0-.09 0-.16-.12-.3l-2.5-3A.5.5 0 0 0 15 2H5Zm0 7a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2ZM5 17H4V9.83a3 3 0 0 0 3.5-1.17 3 3 0 0 0 5 0A3 3 0 0 0 16 9.83V17h-6v-5.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17ZM7.14 5H3.57l1.66-2h2.58l-.67 2Zm4.67 0H8.19l.67-2h2.28l.67 2Zm1.05 0-.67-2h2.58l1.66 2h-3.57ZM6 17v-5h3v5H6Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingShopRegular = wrapIcon_1.default( /*#__PURE__*/BuildingShopRegularIcon, 'BuildingShopRegular');
const BuildingSkyscraperFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V3H7v-.5ZM5.46 4a.5.5 0 0 0-.46.5V5h6v-.5a.5.5 0 0 0-.46-.5H5.46Zm8.29 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75-3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5 6h6v.02c.6.34 1 .99 1 1.73V8h.5a4.5 4.5 0 0 1 4.5 4.5v4a.5.5 0 0 1-.5.5H9v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V17H4.5a.5.5 0 0 1-.5-.5V7.75a2 2 0 0 1 1-1.73V6Zm7 10h4v-3.5A3.5 3.5 0 0 0 12.5 9H12v7ZM7.5 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingSkyscraperFilled = wrapIcon_1.default( /*#__PURE__*/BuildingSkyscraperFilledIcon, 'BuildingSkyscraperFilled');
const BuildingSkyscraperRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5.25 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7 2a.5.5 0 0 0-.5.5V4h-.94a.5.5 0 0 0-.5.5v1.74A2 2 0 0 0 4 8v8.5c0 .27.22.5.5.5h12a.5.5 0 0 0 .5-.5v-4A4.5 4.5 0 0 0 12.5 8H12a2 2 0 0 0-.94-1.7V4.5a.5.5 0 0 0-.5-.5H9.5V2.5A.5.5 0 0 0 9 2H7Zm3 4H6.06V5h4v1H10Zm1 10h-1v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8Zm-4 0v-2h2v2H7Zm9 0h-4V9h.5a3.5 3.5 0 0 1 3.5 3.5V16ZM8.5 4h-1V3h1v1Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingSkyscraperRegular = wrapIcon_1.default( /*#__PURE__*/BuildingSkyscraperRegularIcon, 'BuildingSkyscraperRegular');
const BuildingTownhouseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.96 3.3a1 1 0 0 0-1.42 0l-2.1 2.1A1.5 1.5 0 0 0 3 6.44v9.05c0 .83.67 1.5 1.5 1.5H7v-3.5c0-.28.22-.5.5-.5h2V6.45c0-.4-.16-.78-.44-1.06l-2.1-2.1Zm3.54 3.15V13h2c.28 0 .5.22.5.5V17h2.5c.83 0 1.5-.67 1.5-1.5V6.45c0-.4-.16-.78-.44-1.06l-2.1-2.1a1 1 0 0 0-1.42 0l-2.1 2.1a1.5 1.5 0 0 0-.44 1.06Zm0 7.55v3H12v-3h-1.5Zm-1 3v-3H8v3h1.5ZM7 7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm8.25-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingTownhouseFilled = wrapIcon_1.default( /*#__PURE__*/BuildingTownhouseFilledIcon, 'BuildingTownhouseFilled');
const BuildingTownhouseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.1 3.24a1 1 0 0 1 1.3 0L9.97 5.4l.03.03.03-.03 2.57-2.17a1 1 0 0 1 1.3 0l2.57 2.17c.34.29.53.7.53 1.15v8.94c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V6.56c0-.45.2-.86.53-1.15L6.1 3.24ZM10.5 13h2c.28 0 .5.22.5.5V16h2.5a.5.5 0 0 0 .5-.5V6.56a.5.5 0 0 0-.18-.39L13.25 4l-2.57 2.17a.5.5 0 0 0-.18.39V13Zm-1 0V6.56a.5.5 0 0 0-.18-.39L6.75 4 4.18 6.17a.5.5 0 0 0-.18.39v8.94c0 .28.22.5.5.5H7v-2.5c0-.28.22-.5.5-.5h2ZM8 16h1.5v-2H8v2Zm2.5-2v2H12v-2h-1.5ZM6.75 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.75-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.BuildingTownhouseRegular = wrapIcon_1.default( /*#__PURE__*/BuildingTownhouseRegularIcon, 'BuildingTownhouseRegular');
const CalculatorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorFilled = wrapIcon_1.default( /*#__PURE__*/CalculatorFilledIcon, 'CalculatorFilled');
const CalculatorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 4C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-5ZM7 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1Zm9 10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v11Zm-1-11c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorRegular = wrapIcon_1.default( /*#__PURE__*/CalculatorRegularIcon, 'CalculatorRegular');
const CalculatorArrowClockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h3.77a5.48 5.48 0 0 1-.64-6.07 1 1 0 1 1 1.17-1.52A5.48 5.48 0 0 1 16 9.19V4.5A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9.5-1.52a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorArrowClockwiseFilled = wrapIcon_1.default( /*#__PURE__*/CalculatorArrowClockwiseFilledIcon, 'CalculatorArrowClockwiseFilled');
const CalculatorArrowClockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.63-3.07c.3-.58.7-1.1 1.17-1.52a1 1 0 1 0-1.17 1.52ZM6.5 17h3.11c.18.36.4.7.66 1H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v4.69c-.32-.1-.66-.16-1-.19V4.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5ZM6 5.5C6 4.67 6.67 4 7.5 4h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Zm10 7.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorArrowClockwiseRegular = wrapIcon_1.default( /*#__PURE__*/CalculatorArrowClockwiseRegularIcon, 'CalculatorArrowClockwiseRegular');
const CalculatorMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM5 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorMultipleFilled = wrapIcon_1.default( /*#__PURE__*/CalculatorMultipleFilledIcon, 'CalculatorMultipleFilled');
const CalculatorMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm0 1h6v2H6V5Zm2 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM4 4.5C4 3.67 4.67 3 5.5 3h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5v-9ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalculatorMultipleRegular = wrapIcon_1.default( /*#__PURE__*/CalculatorMultipleRegularIcon, 'CalculatorMultipleRegular');
const Calendar3DayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6ZM10 6a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Zm3.5 0a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41a.5.5 0 0 0-.5-.41Z",
    fill: primaryFill
  }));
  ;
};
exports.Calendar3DayFilled = wrapIcon_1.default( /*#__PURE__*/Calendar3DayFilledIcon, 'Calendar3DayFilled');
const Calendar3DayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-8 2a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5ZM10 6a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Zm3.5 0a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Calendar3DayRegular = wrapIcon_1.default( /*#__PURE__*/Calendar3DayRegularIcon, 'Calendar3DayRegular');
const CalendarAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAddFilled = wrapIcon_1.default( /*#__PURE__*/CalendarAddFilledIcon, 'CalendarAddFilled');
const CalendarAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAddRegular = wrapIcon_1.default( /*#__PURE__*/CalendarAddRegularIcon, 'CalendarAddRegular');
const CalendarAgendaFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-3-8a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18A.5.5 0 0 0 14 10Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAgendaFilled = wrapIcon_1.default( /*#__PURE__*/CalendarAgendaFilledIcon, 'CalendarAgendaFilled');
const CalendarAgendaRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5Zm-2-8a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAgendaRegular = wrapIcon_1.default( /*#__PURE__*/CalendarAgendaRegularIcon, 'CalendarAgendaRegular');
const CalendarArrowCounterclockwiseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11A1.5 1.5 0 0 0 4 5.87V7.3l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5ZM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.92a1.5 1.5 0 0 0 1.55-.36l1.5-1.5c.3-.3.44-.68.44-1.06H17ZM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowCounterclockwiseFilled = wrapIcon_1.default( /*#__PURE__*/CalendarArrowCounterclockwiseFilledIcon, 'CalendarArrowCounterclockwiseFilled');
const CalendarArrowCounterclockwiseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 17A2.5 2.5 0 0 1 3 14.5v-4a.5.5 0 0 1 1 0v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H6.5c0-.36-.14-.72-.4-1H16v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowCounterclockwiseRegular = wrapIcon_1.default( /*#__PURE__*/CalendarArrowCounterclockwiseRegularIcon, 'CalendarArrowCounterclockwiseRegular');
const CalendarArrowDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6V7Zm2 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowDownFilled = wrapIcon_1.default( /*#__PURE__*/CalendarArrowDownFilledIcon, 'CalendarArrowDownFilled');
const CalendarArrowDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowDownRegular = wrapIcon_1.default( /*#__PURE__*/CalendarArrowDownRegularIcon, 'CalendarArrowDownRegular');
const CalendarArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6Zm2 4.9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/CalendarArrowRightFilledIcon, 'CalendarArrowRightFilled');
const CalendarArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/CalendarArrowRightRegularIcon, 'CalendarArrowRightRegular');
const CalendarAssistantFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.1-7.17a.5.5 0 0 1 .48-.33h1.18a.5.5 0 0 1 .47.66l-.28.84H16a.5.5 0 0 1 .42.77l-2.25 3.5a.5.5 0 0 1-.9-.4l.5-1.87H13a.5.5 0 0 1-.47-.67l.88-2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAssistantFilled = wrapIcon_1.default( /*#__PURE__*/CalendarAssistantFilledIcon, 'CalendarAssistantFilled');
const CalendarAssistantRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 13 15h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 16 13h-.75l.28-.84a.5.5 0 0 0-.47-.66h-1.18Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarAssistantRegular = wrapIcon_1.default( /*#__PURE__*/CalendarAssistantRegularIcon, 'CalendarAssistantRegular');
const CalendarCancelFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5.7 1.15 1.15a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarCancelFilled = wrapIcon_1.default( /*#__PURE__*/CalendarCancelFilledIcon, 'CalendarCancelFilled');
const CalendarCancelRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5.7 1.15 1.15a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarCancelRegular = wrapIcon_1.default( /*#__PURE__*/CalendarCancelRegularIcon, 'CalendarCancelRegular');
const CalendarChatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h3.92l.07-.23A5.48 5.48 0 0 1 14.5 9c.9 0 1.75.22 2.5.6V7Zm-7 7.5c0 .8.2 1.54.56 2.18l-.54 1.8c-.1.3.2.6.51.5l1.79-.54A4.5 4.5 0 1 0 10 14.5Zm2.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1Zm-.5 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarChatFilled = wrapIcon_1.default( /*#__PURE__*/CalendarChatFilledIcon, 'CalendarChatFilled');
const CalendarChatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 16h3.7c.08.27.18.52.29.77l-.07.23H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5Zm0-12C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9Zm5.06 12.68-.54 1.8c-.1.3.2.6.5.5l1.8-.54a4.5 4.5 0 1 0-1.76-1.75ZM12.5 16a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm0-3h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarChatRegular = wrapIcon_1.default( /*#__PURE__*/CalendarChatRegularIcon, 'CalendarChatRegular');
const CalendarCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/CalendarCheckmarkFilledIcon, 'CalendarCheckmarkFilled');
const CalendarCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/CalendarCheckmarkRegularIcon, 'CalendarCheckmarkRegular');
const CalendarClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarClockFilled = wrapIcon_1.default( /*#__PURE__*/CalendarClockFilledIcon, 'CalendarClockFilled');
const CalendarClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm9 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarClockRegular = wrapIcon_1.default( /*#__PURE__*/CalendarClockRegularIcon, 'CalendarClockRegular');
const CalendarDataBarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 17H10v-2a2 2 0 0 1 3-1.73V11a2 2 0 1 1 4 0V7H3v7.5A2.5 2.5 0 0 0 5.5 17Zm9-14A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm.5 7a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarDataBarFilled = wrapIcon_1.default( /*#__PURE__*/CalendarDataBarFilledIcon, 'CalendarDataBarFilled');
const CalendarDataBarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H10v-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.27c.6.34 1 .99 1 1.73V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm9.5 6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarDataBarRegular = wrapIcon_1.default( /*#__PURE__*/CalendarDataBarRegularIcon, 'CalendarDataBarRegular');
const CalendarDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-1.78 6H7.28c-.44 0-.6.05-.77.13a.9.9 0 0 0-.38.38c-.07.14-.12.29-.13.62v2.59c0 .44.05.6.13.77.1.16.22.29.38.38.14.07.29.12.62.13H12.72c.44 0 .6-.05.77-.13a.9.9 0 0 0 .38-.38c.07-.14.12-.29.13-.62v-2.59c0-.44-.05-.6-.13-.77a.9.9 0 0 0-.38-.38 1.24 1.24 0 0 0-.62-.13h-.15Zm.2 1h.07V13H7.01v-2.98h5.9Zm.58-4H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 0-1h-.09Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarDayFilled = wrapIcon_1.default( /*#__PURE__*/CalendarDayFilledIcon, 'CalendarDayFilled');
const CalendarDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-1.78 5c.44 0 .6.05.77.13.16.1.29.22.38.38.08.16.13.33.13.77v2.44c0 .44-.05.6-.13.77a.9.9 0 0 1-.38.38c-.16.08-.33.13-.77.13H7.28c-.44 0-.6-.05-.77-.13a.9.9 0 0 1-.38-.38c-.08-.16-.13-.33-.13-.77v-2.44c0-.44.05-.6.13-.77a.9.9 0 0 1 .38-.38c.16-.08.33-.13.77-.13h5.44Zm.2 1H7V13h5.98v-2.98h-.08Zm.58-4a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h7.09Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarDayRegular = wrapIcon_1.default( /*#__PURE__*/CalendarDayRegularIcon, 'CalendarDayRegular');
const CalendarEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2c-.7.03-1.37.31-1.9.84l-4.83 4.83c-.4.4-.7.92-.84 1.48l-.21.85H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-3.52 12.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarEditFilled = wrapIcon_1.default( /*#__PURE__*/CalendarEditFilledIcon, 'CalendarEditFilled');
const CalendarEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5V9c-.34.02-.68.1-1 .23V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.97l-.04.15-.21.85H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-3.52 11.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarEditRegular = wrapIcon_1.default( /*#__PURE__*/CalendarEditRegularIcon, 'CalendarEditRegular');
const CalendarEmptyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarEmptyFilled = wrapIcon_1.default( /*#__PURE__*/CalendarEmptyFilledIcon, 'CalendarEmptyFilled');
const CalendarEmptyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7Zm-1.5-3h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarEmptyRegular = wrapIcon_1.default( /*#__PURE__*/CalendarEmptyRegularIcon, 'CalendarEmptyRegular');
const CalendarErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6V7Zm2 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarErrorFilled = wrapIcon_1.default( /*#__PURE__*/CalendarErrorFilledIcon, 'CalendarErrorFilled');
const CalendarErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarErrorRegular = wrapIcon_1.default( /*#__PURE__*/CalendarErrorRegularIcon, 'CalendarErrorRegular');
const CalendarInfoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-.63 9.5a.62.62 0 1 1 1.25 0 .62.62 0 0 1-1.24 0Zm1.13 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarInfoFilled = wrapIcon_1.default( /*#__PURE__*/CalendarInfoFilledIcon, 'CalendarInfoFilled');
const CalendarInfoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-.63 8.5a.62.62 0 1 1 1.25 0 .62.62 0 0 1-1.24 0Zm1.13 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarInfoRegular = wrapIcon_1.default( /*#__PURE__*/CalendarInfoRegularIcon, 'CalendarInfoRegular');
const CalendarLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.4a3 3 0 0 0-4.5 2.6v.06A2 2 0 0 0 11 14v3H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-1 9v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarLockFilled = wrapIcon_1.default( /*#__PURE__*/CalendarLockFilledIcon, 'CalendarLockFilled');
const CalendarLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v3.9c-.3-.17-.64-.3-1-.36V7H4v7.5c0 .83.67 1.5 1.5 1.5H11v1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-1 8v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarLockRegular = wrapIcon_1.default( /*#__PURE__*/CalendarLockRegularIcon, 'CalendarLockRegular');
const CalendarLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7Zm-9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarLtrFilled = wrapIcon_1.default( /*#__PURE__*/CalendarLtrFilledIcon, 'CalendarLtrFilled');
const CalendarLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5V7Zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarLtrRegular = wrapIcon_1.default( /*#__PURE__*/CalendarLtrRegularIcon, 'CalendarLtrRegular');
const CalendarMailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h12v-.5A2.5 2.5 0 0 0 11.5 2h-7ZM14 6H2v5.5A2.5 2.5 0 0 0 4.5 14H5v-3a3 3 0 0 1 3-3h6V6Zm-7.93 4.48A2 2 0 0 1 8 9h8a2 2 0 0 1 1.93 1.48L12 13.96l-5.93-3.48Zm6.31 4.42L18 11.6V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.4l5.62 3.3c.23.14.53.14.76 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMailFilled = wrapIcon_1.default( /*#__PURE__*/CalendarMailFilledIcon, 'CalendarMailFilled');
const CalendarMailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-1V6H3v5.5c0 .83.67 1.5 1.5 1.5H5v1h-.5A2.5 2.5 0 0 1 2 11.5v-7Zm11 0c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h10v-.5ZM8 9a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H8Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.02l-5 2.94-5-2.94V11Zm0 1.18 4.62 2.72c.23.14.53.14.76 0L17 12.18V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.82Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMailRegular = wrapIcon_1.default( /*#__PURE__*/CalendarMailRegularIcon, 'CalendarMailRegular');
const CalendarMentionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v3.42A4.98 4.98 0 0 0 10 15c0 .71.15 1.39.42 2H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm.5 9a3 3 0 1 0 1.28 5.71.5.5 0 1 1 .44.9A4 4 0 1 1 19 15v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 15a2 2 0 0 1 3.17-1.62.5.5 0 0 1 .83.37v1.75a.5.5 0 1 0 1 0V15a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMentionFilled = wrapIcon_1.default( /*#__PURE__*/CalendarMentionFilledIcon, 'CalendarMentionFilled');
const CalendarMentionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.92a4.96 4.96 0 0 0-1-.32V7H4v7.5c0 .83.67 1.5 1.5 1.5h4.6c.07.35.18.68.32 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm.5 8a3 3 0 1 0 1.28 5.71.5.5 0 1 1 .44.9A4 4 0 1 1 19 15v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 15a2 2 0 0 1 3.17-1.62.5.5 0 0 1 .83.37v1.75a.5.5 0 1 0 1 0V15a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMentionRegular = wrapIcon_1.default( /*#__PURE__*/CalendarMentionRegularIcon, 'CalendarMentionRegular');
const CalendarMonthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM7 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMonthFilled = wrapIcon_1.default( /*#__PURE__*/CalendarMonthFilledIcon, 'CalendarMonthFilled');
const CalendarMonthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5ZM7 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMonthRegular = wrapIcon_1.default( /*#__PURE__*/CalendarMonthRegularIcon, 'CalendarMonthRegular');
const CalendarMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 13.5V6H2v7.5A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5V5h14v-.5ZM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 0 1-3.5 3.5H5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMultipleFilled = wrapIcon_1.default( /*#__PURE__*/CalendarMultipleFilledIcon, 'CalendarMultipleFilled');
const CalendarMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 4.5A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM3 6h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5V6Zm1.5-3h9c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3ZM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 0 1-3.5 3.5H5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarMultipleRegular = wrapIcon_1.default( /*#__PURE__*/CalendarMultipleRegularIcon, 'CalendarMultipleRegular');
const CalendarPatternFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3ZM4.5 5.75V7h11V5.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25ZM14.7 8l-4 4h2.6l2.2-2.2V8h-.8Zm-1.4 0h-2.6l-4 4h2.6l4-4Zm-8 4 4-4H6.7l-2.2 2.2V12h.8Zm-.8-3.2.8-.8h-.8v.8ZM14.7 12h.8v-.8l-.8.8Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPatternFilled = wrapIcon_1.default( /*#__PURE__*/CalendarPatternFilledIcon, 'CalendarPatternFilled');
const CalendarPatternRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5V7h12V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5ZM14.7 8l-4 4h2.6L16 9.3V8h-1.3Zm-1.4 0h-2.6l-4 4h2.6l4-4Zm-8 4 4-4H6.7L4 10.7V12h1.3ZM4 9.3 5.3 8H4v1.3ZM14.7 12H16v-1.3L14.7 12Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPatternRegular = wrapIcon_1.default( /*#__PURE__*/CalendarPatternRegularIcon, 'CalendarPatternRegular');
const CalendarPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.4a3 3 0 0 0-3.73 4.6 2.5 2.5 0 0 0-2.23 3H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm3 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPersonFilled = wrapIcon_1.default( /*#__PURE__*/CalendarPersonFilledIcon, 'CalendarPersonFilled');
const CalendarPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v3.9c-.3-.17-.64-.3-1-.36V7H4v7.5c0 .83.67 1.5 1.5 1.5h5.55a2.51 2.51 0 0 0-.01 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm3 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPersonRegular = wrapIcon_1.default( /*#__PURE__*/CalendarPersonRegularIcon, 'CalendarPersonRegular');
const CalendarPhoneFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v1.05a2.51 2.51 0 0 0-.5-.05h-3a2.5 2.5 0 0 0-2.5 2.5v6c0 .17.02.34.05.5H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-.75 6c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-5.5C18 9.78 17.22 9 16.25 9h-2.5Zm.25 6.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPhoneFilled = wrapIcon_1.default( /*#__PURE__*/CalendarPhoneFilledIcon, 'CalendarPhoneFilled');
const CalendarPhoneRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v2.55a2.51 2.51 0 0 0-.5-.05H16V7H4v7.5c0 .83.67 1.5 1.5 1.5H11v.5c0 .17.02.34.05.5H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-.75 5c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-5.5C18 9.78 17.22 9 16.25 9h-2.5Zm.25 6.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPhoneRegular = wrapIcon_1.default( /*#__PURE__*/CalendarPhoneRegularIcon, 'CalendarPhoneRegular');
const CalendarPlayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 0 1-.03.54.46.46 0 0 1-.13.13l-2.3 1.57a.54.54 0 0 1-.12.06.45.45 0 0 1-.32-.02.57.57 0 0 1-.16-.1.5.5 0 0 1-.14-.36v-3.08a.51.51 0 0 1 .3-.46.44.44 0 0 1 .18-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPlayFilled = wrapIcon_1.default( /*#__PURE__*/CalendarPlayFilledIcon, 'CalendarPlayFilled');
const CalendarPlayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 0 1-.03.54.46.46 0 0 1-.13.13l-2.3 1.57a.54.54 0 0 1-.12.06.45.45 0 0 1-.32-.02.57.57 0 0 1-.16-.1.5.5 0 0 1-.14-.36v-3.08a.51.51 0 0 1 .3-.46.44.44 0 0 1 .18-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarPlayRegular = wrapIcon_1.default( /*#__PURE__*/CalendarPlayRegularIcon, 'CalendarPlayRegular');
const CalendarQuestionMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.62-2a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm-1.23-3.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarQuestionMarkFilled = wrapIcon_1.default( /*#__PURE__*/CalendarQuestionMarkFilledIcon, 'CalendarQuestionMarkFilled');
const CalendarQuestionMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.62-2a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm-1.23-3.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarQuestionMarkRegular = wrapIcon_1.default( /*#__PURE__*/CalendarQuestionMarkRegularIcon, 'CalendarQuestionMarkRegular');
const CalendarReplyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarReplyFilled = wrapIcon_1.default( /*#__PURE__*/CalendarReplyFilledIcon, 'CalendarReplyFilled');
const CalendarReplyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarReplyRegular = wrapIcon_1.default( /*#__PURE__*/CalendarReplyRegularIcon, 'CalendarReplyRegular');
const CalendarRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V7Zm9 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarRtlFilled = wrapIcon_1.default( /*#__PURE__*/CalendarRtlFilledIcon, 'CalendarRtlFilled');
const CalendarRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7Zm-1.5-3h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarRtlRegular = wrapIcon_1.default( /*#__PURE__*/CalendarRtlRegularIcon, 'CalendarRtlRegular');
const CalendarSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14.5V7H3v2.47a4.5 4.5 0 0 1 6.06 5.97L10.62 17h3.88a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5ZM7.1 16.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L7.1 16.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSearchFilled = wrapIcon_1.default( /*#__PURE__*/CalendarSearchFilledIcon, 'CalendarSearchFilled');
const CalendarSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.76c.32-.12.65-.2 1-.23V7h12v7.5c0 .83-.67 1.5-1.5 1.5H9.12l1 1h4.38a2.5 2.5 0 0 0 2.5-2.5v-9ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm1.1 12.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L6.6 16.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSearchRegular = wrapIcon_1.default( /*#__PURE__*/CalendarSearchRegularIcon, 'CalendarSearchRegular');
const CalendarSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-2.43 8.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSettingsFilled = wrapIcon_1.default( /*#__PURE__*/CalendarSettingsFilledIcon, 'CalendarSettingsFilled');
const CalendarSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-2.43 7.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSettingsRegular = wrapIcon_1.default( /*#__PURE__*/CalendarSettingsRegularIcon, 'CalendarSettingsRegular');
const CalendarShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v1.61c-.2-.04-.41-.1-.61-.18-.46-.2-.92-.52-1.38-1A1.39 1.39 0 0 0 14 7H17ZM3 7h11c-.36 0-.73.14-1 .43a3.5 3.5 0 0 1-2.6 1.24c-.81 0-1.4.67-1.4 1.41v2.8A6.49 6.49 0 0 0 10.53 17H5.5A2.5 2.5 0 0 1 3 14.5V7Zm11.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM16 9.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 0 1-.26 0A6.66 6.66 0 0 1 12 17c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15l-.01-.27v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0c.54.57 1.11.97 1.72 1.23Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarShieldFilled = wrapIcon_1.default( /*#__PURE__*/CalendarShieldFilledIcon, 'CalendarShieldFilled');
const CalendarShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h5.03a5.81 5.81 0 0 1-.7-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v1.23c.33.2.66.32 1 .38V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 1h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM17 9.62a4.06 4.06 0 0 1-1-.27 5.16 5.16 0 0 1-1.72-1.23.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77A5.5 5.5 0 0 0 11.01 16c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V10a.4.4 0 0 0-.4-.33c-.2 0-.4-.02-.6-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarShieldRegular = wrapIcon_1.default( /*#__PURE__*/CalendarShieldRegularIcon, 'CalendarShieldRegular');
const CalendarStarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6Zm2 4.9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarStarFilled = wrapIcon_1.default( /*#__PURE__*/CalendarStarFilledIcon, 'CalendarStarFilled');
const CalendarStarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarStarRegular = wrapIcon_1.default( /*#__PURE__*/CalendarStarRegularIcon, 'CalendarStarRegular');
const CalendarSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSyncFilled = wrapIcon_1.default( /*#__PURE__*/CalendarSyncFilledIcon, 'CalendarSyncFilled');
const CalendarSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarSyncRegular = wrapIcon_1.default( /*#__PURE__*/CalendarSyncRegularIcon, 'CalendarSyncRegular');
const CalendarTodayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 4.5V7H3v7.5A2.5 2.5 0 0 0 5.5 17h3v-1.75a1.5 1.5 0 0 1-.98-2.64h.01l1.5-1.25a1.5 1.5 0 0 1 1.94 0l1.5 1.25a1.5 1.5 0 0 1-.97 2.64V17h3a2.5 2.5 0 0 0 2.5-2.5ZM12 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm-5.82 8.63a.5.5 0 0 0 .64-.76l-1.5-1.25a.5.5 0 0 0-.64 0l-1.5 1.25a.5.5 0 1 0 .64.76l.68-.56v3.93a.5.5 0 1 0 1 0v-3.93l.68.56Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarTodayFilled = wrapIcon_1.default( /*#__PURE__*/CalendarTodayFilledIcon, 'CalendarTodayFilled');
const CalendarTodayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-3v-1h3c.83 0 1.5-.67 1.5-1.5V7H4v7.5c0 .83.67 1.5 1.5 1.5h3v1h-3A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.88 5.07a.5.5 0 0 1-.7.06l-.68-.56v3.93a.5.5 0 1 1-1 0v-3.93l-.68.56a.5.5 0 0 1-.64-.76l1.5-1.25a.5.5 0 0 1 .64 0l1.5 1.25c.21.17.24.49.06.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarTodayRegular = wrapIcon_1.default( /*#__PURE__*/CalendarTodayRegularIcon, 'CalendarTodayRegular');
const CalendarToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17H9v-3.5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 13.5 9h2c.56 0 1.08.19 1.5.5V7Zm-5 5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarToolboxFilled = wrapIcon_1.default( /*#__PURE__*/CalendarToolboxFilledIcon, 'CalendarToolboxFilled');
const CalendarToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 16H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.05c.37.07.7.23 1 .45v-4A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H9v-1ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm6.5 8v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarToolboxRegular = wrapIcon_1.default( /*#__PURE__*/CalendarToolboxRegularIcon, 'CalendarToolboxRegular');
const CalendarWeekNumbersFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM7 6.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0ZM6.5 9c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm.5 3.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWeekNumbersFilled = wrapIcon_1.default( /*#__PURE__*/CalendarWeekNumbersFilledIcon, 'CalendarWeekNumbersFilled');
const CalendarWeekNumbersRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9Zm3 1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM6.5 9c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm.5 3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWeekNumbersRegular = wrapIcon_1.default( /*#__PURE__*/CalendarWeekNumbersRegularIcon, 'CalendarWeekNumbersRegular');
const CalendarWeekStartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWeekStartFilled = wrapIcon_1.default( /*#__PURE__*/CalendarWeekStartFilledIcon, 'CalendarWeekStartFilled');
const CalendarWeekStartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-8 2a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWeekStartRegular = wrapIcon_1.default( /*#__PURE__*/CalendarWeekStartRegularIcon, 'CalendarWeekStartRegular');
const CalendarWorkWeekFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 9V7h6v2H7Zm10-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6.5 6h7c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWorkWeekFilled = wrapIcon_1.default( /*#__PURE__*/CalendarWorkWeekFilledIcon, 'CalendarWorkWeekFilled');
const CalendarWorkWeekRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 6a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7ZM7 9V7h6v2H7Zm10-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4Z",
    fill: primaryFill
  }));
  ;
};
exports.CalendarWorkWeekRegular = wrapIcon_1.default( /*#__PURE__*/CalendarWorkWeekRegularIcon, 'CalendarWorkWeekRegular');
const CallFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.99 2.07A2 2 0 0 1 9.3 3l.08.15.66 1.47a2.5 2.5 0 0 1-.44 2.72l-.13.13-1.05.98c-.19.17-.04.86.64 2.04.6 1.06 1.1 1.56 1.35 1.58h.1l2.05-.64a1.5 1.5 0 0 1 1.56.45l.1.11 1.35 1.88a2 2 0 0 1-.13 2.5l-.12.12-.54.52a3.5 3.5 0 0 1-3.72.7c-1.93-.78-3.69-2.56-5.29-5.33S3.52 7.2 3.82 5.14a3.5 3.5 0 0 1 2.26-2.8l.19-.06.72-.21Z",
    fill: primaryFill
  }));
  ;
};
exports.CallFilled = wrapIcon_1.default( /*#__PURE__*/CallFilledIcon, 'CallFilled');
const CallRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m6.99 2.07-.72.21a3.5 3.5 0 0 0-2.45 2.86c-.3 2.06.36 4.48 1.96 7.25 1.6 2.77 3.36 4.55 5.3 5.33a3.5 3.5 0 0 0 3.7-.7l.55-.52a2 2 0 0 0 .25-2.62L14.22 12a1.5 1.5 0 0 0-1.65-.56l-2.05.63-.06.01c-.22.04-.74-.45-1.4-1.58-.67-1.18-.82-1.87-.63-2.04l1.05-.98a2.5 2.5 0 0 0 .57-2.85l-.66-1.47a2 2 0 0 0-2.4-1.1Zm1.49 1.5.66 1.47a1.5 1.5 0 0 1-.35 1.71l-1.04.98c-.67.63-.45 1.71.45 3.27.85 1.47 1.62 2.19 2.45 2.06l.12-.02 2.09-.64a.5.5 0 0 1 .55.19l1.36 1.88a1 1 0 0 1-.13 1.3l-.54.52a2.5 2.5 0 0 1-2.65.5c-1.7-.68-3.3-2.3-4.8-4.9-1.5-2.59-2.1-4.8-1.84-6.61a2.5 2.5 0 0 1 1.75-2.04l.72-.22a1 1 0 0 1 1.2.55Z",
    fill: primaryFill
  }));
  ;
};
exports.CallRegular = wrapIcon_1.default( /*#__PURE__*/CallRegularIcon, 'CallRegular');
const CallAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM15 2.5a.5.5 0 0 0-1 0V5h-2.5a.5.5 0 0 0 0 1H14v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H15V2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallAddFilled = wrapIcon_1.default( /*#__PURE__*/CallAddFilledIcon, 'CallAddFilled');
const CallAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm.49.87c-.59.33-.98.89-1 1.66-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 0 0 4.62 5.15 1.9 1.9 0 0 0 1.91.16 2.91 2.91 0 0 0 1.45-1.65.84.84 0 0 0-.06-.7l-.95-1.7a1.5 1.5 0 0 0-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32A5.32 5.32 0 0 1 6.13 9.4c-.17-.72.2-1.4.71-1.78l.6-.46c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 0 0-.58-.43 3.1 3.1 0 0 0-2.25.22ZM15 2.5a.5.5 0 0 0-1 0V5h-2.5a.5.5 0 0 0 0 1H14v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H15V2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallAddRegular = wrapIcon_1.default( /*#__PURE__*/CallAddRegularIcon, 'CallAddRegular');
const CallCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 0 0-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 0 1-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 0 0 .82-3.36l-.9-1.56c-.25-.46-.69-.79-1.2-.91Zm11.31.03c.2.2.2.5 0 .7l-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/CallCheckmarkFilledIcon, 'CallCheckmarkFilled');
const CallCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm14.81-2.82c.2.2.2.5 0 .7l-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/CallCheckmarkRegularIcon, 'CallCheckmarkRegular');
const CallConnectingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm9.2-.38a.5.5 0 1 0-.5.88l.4.21a8.5 8.5 0 0 1 4.32 6.58l.03.32a.5.5 0 1 0 1-.1l-.03-.32a9.5 9.5 0 0 0-4.84-7.35l-.39-.22Zm-1.18 2.68a.5.5 0 0 1 .69-.17l.12.07a6.5 6.5 0 0 1 3.07 4.51l.04.27a.5.5 0 1 1-.98.16l-.05-.27a5.5 5.5 0 0 0-2.6-3.8l-.12-.08a.5.5 0 0 1-.17-.69Z",
    fill: primaryFill
  }));
  ;
};
exports.CallConnectingFilled = wrapIcon_1.default( /*#__PURE__*/CallConnectingFilledIcon, 'CallConnectingFilled');
const CallConnectingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm9.7-2.9a.5.5 0 1 0-.48.87l.38.21a8.5 8.5 0 0 1 4.33 6.58l.03.32a.5.5 0 1 0 1-.1l-.03-.32a9.5 9.5 0 0 0-4.84-7.35l-.39-.22Zm-1.17 2.67a.5.5 0 0 1 .69-.17l.12.08a6.5 6.5 0 0 1 3.07 4.5l.04.27a.5.5 0 1 1-.98.16l-.05-.27a5.5 5.5 0 0 0-2.6-3.8l-.12-.08a.5.5 0 0 1-.17-.69Z",
    fill: primaryFill
  }));
  ;
};
exports.CallConnectingRegular = wrapIcon_1.default( /*#__PURE__*/CallConnectingRegularIcon, 'CallConnectingRegular');
const CallDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 0 0-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 0 1-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 0 0 .82-3.36l-.9-1.56c-.25-.46-.69-.79-1.2-.91Zm11.31.03c.2.2.2.5 0 .7L15.21 5.5l2.64 2.65a.5.5 0 0 1-.7.7L14.5 6.21l-2.65 2.64a.5.5 0 0 1-.7-.7l2.64-2.65-2.64-2.65a.5.5 0 0 1 .7-.7l2.65 2.64 2.65-2.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallDismissFilled = wrapIcon_1.default( /*#__PURE__*/CallDismissFilledIcon, 'CallDismissFilled');
const CallDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm14.81-2.82c.2.2.2.5 0 .7L15.21 5.5l2.64 2.65a.5.5 0 0 1-.7.7L14.5 6.21l-2.65 2.64a.5.5 0 0 1-.7-.7l2.64-2.65-2.64-2.65a.5.5 0 0 1 .7-.7l2.65 2.64 2.65-2.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallDismissRegular = wrapIcon_1.default( /*#__PURE__*/CallDismissRegularIcon, 'CallDismissRegular');
const CallEndFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.96 10.94-.16.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0s-.2.75-.5 1.75c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 7.3 6.67 6.51 9.99 6.5c3.33 0 5.6.78 7.16 2.16.66.58.97 1.46.8 2.28Z",
    fill: primaryFill
  }));
  ;
};
exports.CallEndFilled = wrapIcon_1.default( /*#__PURE__*/CallEndFilledIcon, 'CallEndFilled');
const CallEndRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0s-.2.75-.5 1.75c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 7.3 6.68 6 10 6Zm3.48 3.53.02.1a46.1 46.1 0 0 0 .46 1.58c.13.45.39.6.6.62l1.64.16c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0 0 10 7C6.93 7 4.6 8.2 3.37 9.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.65 115.65 0 0 0 .46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 0 1 5.73 0c.15.07.48.29.59.68v.03Z",
    fill: primaryFill
  }));
  ;
};
exports.CallEndRegular = wrapIcon_1.default( /*#__PURE__*/CallEndRegularIcon, 'CallEndRegular');
const CallExclamationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.8 7.77.16-.83c.16-.82-.15-1.7-.8-2.28-1.57-1.38-3.84-2.16-7.17-2.16-3.32 0-5.89.79-7.31 2.17-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 0 0 4.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 0 1 5 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22Zm-3.3 5.73a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.CallExclamationFilled = wrapIcon_1.default( /*#__PURE__*/CallExclamationFilledIcon, 'CallExclamationFilled');
const CallExclamationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.68 2 10 2Zm3.48 3.53.02.1a46.1 46.1 0 0 0 .46 1.58c.13.45.39.6.6.62L16.2 8c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0 0 10 3C6.93 3 4.6 4.2 3.37 5.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.6 115.6 0 0 0 .46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 0 1 5.73 0c.15.07.48.29.59.68v.03Zm1.02 7.97a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.CallExclamationRegular = wrapIcon_1.default( /*#__PURE__*/CallExclamationRegularIcon, 'CallExclamationRegular');
const CallForwardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m9.29 2.2-.85-.16a2.53 2.53 0 0 0-2.32.81C4.7 4.42 4 6.87 4 10.2c0 3.32.72 5.7 2.13 7.12.6.6 1.5.83 2.34.58l.84-.25c.8-.23 1.33-1 1.24-1.82l-.17-1.63a1.53 1.53 0 0 0-1.26-1.36l-1.8-.32a6.36 6.36 0 0 1-.16-4.98l1.93-.5c.7-.19 1.21-.8 1.28-1.5l.17-1.65a1.54 1.54 0 0 0-1.25-1.7Zm5.06 3.45a.5.5 0 0 0-.7.7L16.29 9H10.5a.5.5 0 0 0 0 1h5.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallForwardFilled = wrapIcon_1.default( /*#__PURE__*/CallForwardFilledIcon, 'CallForwardFilled');
const CallForwardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.93 2.08-.18-.04c-1-.17-2.02.18-2.71.94C4.67 4.5 4 6.85 4 10c0 3.15.67 5.5 2.03 7.01a2.97 2.97 0 0 0 2.9.9l.65-.15a2.2 2.2 0 0 0 1.67-2.36L11.1 14a2.2 2.2 0 0 0-1.69-1.92l-1.4-.32-.03-.02-.04-.07a1.63 1.63 0 0 1-.1-.24c-.09-.32-.14-.8-.14-1.43 0-.85.1-1.42.25-1.68a.2.2 0 0 1 .13-.09l1.33-.3A2.2 2.2 0 0 0 11.11 6l.14-1.4a2.2 2.2 0 0 0-1.68-2.37l-.64-.15ZM5.19 10c0-2.88.59-4.95 1.73-6.21.4-.45 1-.66 1.6-.57l.13.03.65.15a1 1 0 0 1 .76 1.08l-.14 1.4a1 1 0 0 1-.76.87l-1.34.31a1.4 1.4 0 0 0-.88.64c-.3.49-.42 1.25-.42 2.3 0 1.6.29 2.58 1.08 2.88l.11.03 1.45.34a1 1 0 0 1 .76.87l.14 1.4a1 1 0 0 1-.75 1.07l-.65.16c-.64.15-1.3-.05-1.74-.54-1.14-1.27-1.73-3.33-1.73-6.2Zm9.16-4.35a.5.5 0 0 0-.7.7L16.29 9H10.5a.5.5 0 0 0 0 1h5.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallForwardRegular = wrapIcon_1.default( /*#__PURE__*/CallForwardRegularIcon, 'CallForwardRegular');
const CallInboundFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 0 0-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 0 1-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 0 0 .82-3.36l-.9-1.56c-.25-.46-.69-.79-1.2-.91Zm11.31.03c.2.2.2.5 0 .7L12.71 8h3.79a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 1 1 1 0v3.8l5.15-5.15c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallInboundFilled = wrapIcon_1.default( /*#__PURE__*/CallInboundFilledIcon, 'CallInboundFilled');
const CallInboundRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm14.81-2.12a.5.5 0 1 0-.7-.7L12 7.29V3.5a.5.5 0 0 0-1 0v5c0 .29.22.5.5.5h5a.5.5 0 0 0 0-1h-3.8l5.15-5.14Z",
    fill: primaryFill
  }));
  ;
};
exports.CallInboundRegular = wrapIcon_1.default( /*#__PURE__*/CallInboundRegularIcon, 'CallInboundRegular');
const CallMissedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.8 7.77.16-.83c.16-.82-.15-1.7-.8-2.28-1.57-1.38-3.84-2.16-7.17-2.16-3.32 0-5.89.79-7.31 2.17-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 0 0 4.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 0 1 5 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22ZM9.5 11.5c.28 0 .5.22.5.5v1.5h1a.5.5 0 1 1 0 1H9.5A.5.5 0 0 1 9 14v-2c0-.28.22-.5.5-.5Zm-4 2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM10 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
    fill: primaryFill
  }));
  ;
};
exports.CallMissedFilled = wrapIcon_1.default( /*#__PURE__*/CallMissedFilledIcon, 'CallMissedFilled');
const CallMissedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.68 2 10 2Zm3.48 3.53.02.1a46.1 46.1 0 0 0 .46 1.58c.13.45.39.6.6.62L16.2 8c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0 0 10 3C6.93 3 4.6 4.2 3.37 5.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.6 115.6 0 0 0 .46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 0 1 5.73 0c.15.07.48.29.59.68v.03ZM10 12a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 1 0 0-1h-1V12Zm-4.5 1.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM10 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
    fill: primaryFill
  }));
  ;
};
exports.CallMissedRegular = wrapIcon_1.default( /*#__PURE__*/CallMissedRegularIcon, 'CallMissedRegular');
const CallOutboundFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 0 0-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 0 1-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 0 0 .82-3.36l-.9-1.56c-.25-.46-.69-.79-1.2-.91Zm4.6 6.73a.5.5 0 0 1 0-.7L16.3 3H12.5a.5.5 0 1 1 0-1h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V3.7l-5.15 5.15a.5.5 0 0 1-.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CallOutboundFilled = wrapIcon_1.default( /*#__PURE__*/CallOutboundFilledIcon, 'CallOutboundFilled');
const CallOutboundRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm8.1 3.18a.5.5 0 1 0 .71.7L17 3.71V7.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 1 0 0 1h3.8l-5.15 5.15Z",
    fill: primaryFill
  }));
  ;
};
exports.CallOutboundRegular = wrapIcon_1.default( /*#__PURE__*/CallOutboundRegularIcon, 'CallOutboundRegular');
const CallParkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM12.5 2a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0V7h1.5a2.5 2.5 0 0 0 0-5h-2Zm2 4H13V3h1.5a1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.CallParkFilled = wrapIcon_1.default( /*#__PURE__*/CallParkFilledIcon, 'CallParkFilled');
const CallParkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53ZM12.5 2a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0V7h1.5a2.5 2.5 0 0 0 0-5h-2Zm2 4H13V3h1.5a1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.CallParkRegular = wrapIcon_1.default( /*#__PURE__*/CallParkRegularIcon, 'CallParkRegular');
const CallPauseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM13 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.CallPauseFilled = wrapIcon_1.default( /*#__PURE__*/CallPauseFilledIcon, 'CallPauseFilled');
const CallPauseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm.49.87c-.59.33-.98.89-1 1.66-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 0 0 4.62 5.15 1.9 1.9 0 0 0 1.91.16 2.91 2.91 0 0 0 1.45-1.65.84.84 0 0 0-.06-.7l-.95-1.7a1.5 1.5 0 0 0-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32A5.32 5.32 0 0 1 6.13 9.4c-.17-.72.2-1.4.71-1.78l.6-.46c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 0 0-.58-.43 3.1 3.1 0 0 0-2.25.22ZM13 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z",
    fill: primaryFill
  }));
  ;
};
exports.CallPauseRegular = wrapIcon_1.default( /*#__PURE__*/CallPauseRegularIcon, 'CallPauseRegular');
const CallProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.96 6.94-.16.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.67 2.51 9.99 2.5c3.33 0 5.6.78 7.16 2.16.66.58.97 1.46.8 2.28ZM6.82 16.68a4.5 4.5 0 1 0 6.36-6.36 4.5 4.5 0 0 0-6.36 6.36Zm5.65-.7a3.5 3.5 0 0 1-4.57.32l4.9-4.9a3.5 3.5 0 0 1-.33 4.57Zm-.37-5.28-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z",
    fill: primaryFill
  }));
  ;
};
exports.CallProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/CallProhibitedFilledIcon, 'CallProhibitedFilled');
const CallProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.15 4.66A10.37 10.37 0 0 0 10 2C6.67 2 4.1 3.29 2.68 4.67c-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 0 0 4.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 0 1 5 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22l.16-.83c.16-.82-.15-1.7-.8-2.28Zm-3.65.96-.02-.1-.01-.02c-.1-.4-.44-.61-.6-.68a7.62 7.62 0 0 0-5.73-.01c-.16.09-.51.34-.61.7l-.03.1a90.96 90.96 0 0 1-.46 1.6c-.09.3-.17.47-.24.56a.2.2 0 0 1-.05.05l-.05.01L4.07 8a.74.74 0 0 1-.77-.5l-.24-.83c-.15-.48-.02-.96.31-1.28A9.62 9.62 0 0 1 10 3a9.37 9.37 0 0 1 6.5 2.4c.4.37.57.89.48 1.35l-.16.83c-.05.24-.27.45-.62.41l-1.64-.16c-.21-.02-.47-.17-.6-.62a59.02 59.02 0 0 1-.46-1.59ZM6.82 16.68a4.5 4.5 0 1 0 6.36-6.36 4.5 4.5 0 0 0-6.36 6.36Zm5.65-.7a3.5 3.5 0 0 1-4.57.32l4.9-4.9a3.5 3.5 0 0 1-.33 4.57Zm-.37-5.28-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z",
    fill: primaryFill
  }));
  ;
};
exports.CallProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/CallProhibitedRegularIcon, 'CallProhibitedRegular');
const CallTransferFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM12 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm3 1a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8l-2.15 2.15a.5.5 0 0 0 .7.7L17 3.71V7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallTransferFilled = wrapIcon_1.default( /*#__PURE__*/CallTransferFilledIcon, 'CallTransferFilled');
const CallTransferRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53ZM12 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM17.5 8a.5.5 0 0 1-.5-.5V3.7l-2.15 2.15a.5.5 0 1 1-.7-.7L16.29 3H12.5a.5.5 0 1 1 0-1h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CallTransferRegular = wrapIcon_1.default( /*#__PURE__*/CallTransferRegularIcon, 'CallTransferRegular');
const CallWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.6 1.55-3.5 7A1 1 0 0 0 10 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM14 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM13.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.26c-.32.12-.62.06-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.26.06-.56.34-.78l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Z",
    fill: primaryFill
  }));
  ;
};
exports.CallWarningFilled = wrapIcon_1.default( /*#__PURE__*/CallWarningFilledIcon, 'CallWarningFilled');
const CallWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.6 1.55-3.5 7A1 1 0 0 0 10 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM14 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM13.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.78.18.8.59 1.56 1.15 2.12.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm.49.88c-.59.32-.98.88-1 1.65-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 0 0 4.62 5.15 1.9 1.9 0 0 0 1.91.16 2.91 2.91 0 0 0 1.45-1.65.84.84 0 0 0-.06-.7l-.95-1.7a1.5 1.5 0 0 0-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32a5.32 5.32 0 0 1-1.42-2.61c-.17-.73.2-1.4.71-1.8l.6-.45c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 0 0-.58-.43 3.1 3.1 0 0 0-2.25.23Z",
    fill: primaryFill
  }));
  ;
};
exports.CallWarningRegular = wrapIcon_1.default( /*#__PURE__*/CallWarningRegularIcon, 'CallWarningRegular');
const CalligraphyPenFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.5a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.2L5.24 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91c.16.27.4.48.69.59v-7.04a1 1 0 1 1 1 0v7.03c.28-.11.52-.31.67-.58l3.47-5.9a2.5 2.5 0 0 0 .1-2.34L13.28 6h.22c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenFilled = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenFilledIcon, 'CalligraphyPenFilled');
const CalligraphyPenRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.5a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9a2.5 2.5 0 0 0 .1-2.34L13.29 6h.21c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM12.18 6l1.67 3.5c.2.46.18.98-.07 1.4l-3.28 5.61v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h4.36Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenRegular = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenRegularIcon, 'CalligraphyPenRegular');
const CalligraphyPenCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L13.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 11 .33-.01a2.5 2.5 0 0 1-.2.42l-3.46 5.91c-.15.27-.4.47-.67.58v-7.03a1 1 0 0 0 .46-1.16c.95.8 2.19 1.29 3.54 1.29Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 0 0-.8 1.83v7.04a1.37 1.37 0 0 1-.7-.59l-3.46-5.9a2.5 2.5 0 0 1-.1-2.34L6.7 6h-.2A1.5 1.5 0 0 1 5 4.5v-2a.5.5 0 0 1 1 0v2c0 .28.22.5.5.5h2.52L9 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenCheckmarkFilledIcon, 'CalligraphyPenCheckmarkFilled');
const CalligraphyPenCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.35-5.65-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 2.65-2.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.85 10.99a5.64 5.64 0 0 1-1.09-.04l-3.26 5.56v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h1.2a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9c.08-.14.14-.28.2-.43Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenCheckmarkRegularIcon, 'CalligraphyPenCheckmarkRegular');
const CalligraphyPenErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Zm0 2.87.35-.01a2.5 2.5 0 0 1-.2.42l-3.47 5.91c-.15.27-.4.48-.68.59v-7.04a1 1 0 0 0 .46-1.16c.95.8 2.19 1.29 3.54 1.29ZM9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 0 0-.8 1.83v7.04a1.37 1.37 0 0 1-.68-.59l-3.47-5.9a2.5 2.5 0 0 1-.1-2.34l1.23-2.6A1.75 1.75 0 0 1 5 4.75v-2a.75.75 0 0 1 1.5 0v2c0 .14.11.25.25.25h2.27L9 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenErrorFilled = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenErrorFilledIcon, 'CalligraphyPenErrorFilled');
const CalligraphyPenErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM14 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.24 0Zm-.28 3.49a5.64 5.64 0 0 1-1.09-.04l-3.26 5.56v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h1.2a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9c.08-.14.14-.28.2-.43Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenErrorRegular = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenErrorRegularIcon, 'CalligraphyPenErrorRegular');
const CalligraphyPenQuestionMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm.62 7a.62.62 0 1 0-1.24 0 .62.62 0 0 0 1.24 0Zm1.23-3.55c0-1.1-.82-1.95-1.85-1.95-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 11 .33-.01a2.5 2.5 0 0 1-.2.42l-3.46 5.91c-.15.27-.4.47-.67.58v-7.03a1 1 0 0 0 .46-1.16c.95.8 2.19 1.29 3.54 1.29Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 0 0-.8 1.83v7.04a1.37 1.37 0 0 1-.7-.59l-3.46-5.9a2.5 2.5 0 0 1-.1-2.34L6.7 6h-.2A1.5 1.5 0 0 1 5 4.5v-2a.5.5 0 0 1 1 0v2c0 .28.22.5.5.5h2.52L9 5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenQuestionMarkFilled = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenQuestionMarkFilledIcon, 'CalligraphyPenQuestionMarkFilled');
const CalligraphyPenQuestionMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.85 10.99a5.64 5.64 0 0 1-1.09-.04l-3.26 5.56v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h1.2a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9c.08-.14.14-.28.2-.43Z",
    fill: primaryFill
  }));
  ;
};
exports.CalligraphyPenQuestionMarkRegular = wrapIcon_1.default( /*#__PURE__*/CalligraphyPenQuestionMarkRegularIcon, 'CalligraphyPenQuestionMarkRegular');
const CameraFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-.22-7.17c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0 1 18 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.68l.6-1.17ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraFilled = wrapIcon_1.default( /*#__PURE__*/CameraFilledIcon, 'CameraFilled');
const CameraRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.12-8a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12Zm-.44 1.28A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v8c0 .83-.68 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-8C3 5.67 3.67 5 4.5 5h2a.5.5 0 0 0 .44-.28l.73-1.44Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraRegular = wrapIcon_1.default( /*#__PURE__*/CameraRegularIcon, 'CameraRegular');
const CameraAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0 1 18 6.5v3.76a5.48 5.48 0 0 0-4.13-1.23 4 4 0 1 0-4.85 4.85A5.56 5.56 0 0 0 9.6 17H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17ZM10 7a3 3 0 0 1 2.9 2.24 5.51 5.51 0 0 0-3.66 3.66A3 3 0 0 1 10 7Zm9 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraAddFilled = wrapIcon_1.default( /*#__PURE__*/CameraAddFilledIcon, 'CameraAddFilled');
const CameraAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.12 2a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-8C3 5.67 3.68 5 4.5 5h2a.5.5 0 0 0 .45-.28l.73-1.44A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v3.1c.35.19.69.4 1 .66V6.5A2.5 2.5 0 0 0 15.5 4h-1.7l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12ZM10 6a4 4 0 0 1 3.88 3.03c-.33.04-.66.11-.98.2a3 3 0 1 0-3.66 3.67c-.1.32-.17.65-.2.98A4 4 0 0 1 10 6Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraAddRegular = wrapIcon_1.default( /*#__PURE__*/CameraAddRegularIcon, 'CameraAddRegular');
const CameraDomeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5ZM10 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 7h14v4a7 7 0 1 1-14 0V7Zm7 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraDomeFilled = wrapIcon_1.default( /*#__PURE__*/CameraDomeFilledIcon, 'CameraDomeFilled');
const CameraDomeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v1c0 .65-.42 1.2-1 1.41V11a7 7 0 1 1-14 0V6.91c-.58-.2-1-.76-1-1.41v-1ZM4 7v4a6 6 0 1 0 12 0V7H4Zm-.5-3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-13Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraDomeRegular = wrapIcon_1.default( /*#__PURE__*/CameraDomeRegularIcon, 'CameraDomeRegular');
const CameraEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.12 2a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17H8l.06-.35.37-1.5c.12-.46.34-.9.64-1.26a4 4 0 1 1 4.82-4.83l.21-.22A2.87 2.87 0 0 1 18 8.7V6.5A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.16A1.5 1.5 0 0 0 11.89 2H8.12ZM13 9.94A3 3 0 1 0 9.94 13L13 9.94Zm1.8-.4-4.82 4.84a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraEditFilled = wrapIcon_1.default( /*#__PURE__*/CameraEditFilledIcon, 'CameraEditFilled');
const CameraEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.08.32 1.34.83L13.8 4h1.7A2.5 2.5 0 0 1 18 6.5v2.2c-.3-.26-.65-.45-1-.56V6.5c0-.83-.68-1.5-1.5-1.5h-2a.5.5 0 0 1-.45-.28l-.73-1.44A.5.5 0 0 0 11.9 3H8.12a.5.5 0 0 0-.44.28l-.73 1.44A.5.5 0 0 1 6.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5h3.72l-.16.65L8 17H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17Zm7.1 6.23a4 4 0 1 0-4.8 4.83c.05-.08.12-.15.2-.22l.66-.67A3 3 0 1 1 13 9.94l.89-.88Zm.93.49-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraEditRegular = wrapIcon_1.default( /*#__PURE__*/CameraEditRegularIcon, 'CameraEditRegular');
const CameraOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.2 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 0 1 2 14.5v-8c0-1.02.62-1.9 1.5-2.3Zm8.95 8.96-.71-.71a3 3 0 0 1-4.18-4.18l-.72-.72a4 4 0 0 0 5.61 5.61ZM9.22 7.1l3.68 3.68A3 3 0 0 0 9.22 7.1ZM14 10c0 .55-.11 1.08-.32 1.56l4.06 4.06c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12a1.5 1.5 0 0 0-1.34.83L6.2 4h-.07l2.32 2.32A3.99 3.99 0 0 1 14 10Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraOffFilled = wrapIcon_1.default( /*#__PURE__*/CameraOffFilledIcon, 'CameraOffFilled');
const CameraOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.2 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 0 1 2 14.5v-8c0-1.02.62-1.9 1.5-2.3ZM15.3 16l-2.85-2.84a4 4 0 0 1-5.61-5.61L4.31 5c-.74.1-1.3.73-1.3 1.49v8c0 .83.67 1.5 1.5 1.5h10.78Zm-3.56-3.55L7.55 8.26a3 3 0 0 0 4.18 4.18Zm-3.3-6.13.78.78a3 3 0 0 1 3.68 3.68l.78.78A3.99 3.99 0 0 0 10 6c-.55 0-1.08.11-1.56.32ZM17 14.5c0 .12 0 .23-.03.34l.77.78c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12a1.5 1.5 0 0 0-1.34.83L6.2 4h-.07l.79.79a.5.5 0 0 0 .04-.07l.73-1.44A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v8Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraOffRegular = wrapIcon_1.default( /*#__PURE__*/CameraOffRegularIcon, 'CameraOffRegular');
const CameraSparklesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm1-4.85.4-.15H8.13a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-2.6a1.29 1.29 0 0 1-1.25-.14c-.23-.16-.4-.39-.49-.65l-.24-.76a.59.59 0 0 0-.14-.23.74.74 0 0 0-.22-.14l-.79-.25A1.31 1.31 0 0 1 14 8.5a1.3 1.3 0 0 1 .05-.63c-.16-.04-.3-.11-.44-.21-.21-.17-.37-.4-.46-.66l-.33-1.13a1.12 1.12 0 0 0-.26-.38l-.06-.06a1 1 0 0 0-.4-.23L11 4.84a1.42 1.42 0 0 1-1-1.34c0-.3.1-.58.29-.82.17-.25.42-.44.71-.53ZM6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraSparklesFilled = wrapIcon_1.default( /*#__PURE__*/CameraSparklesFilledIcon, 'CameraSparklesFilled');
const CameraSparklesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM8.12 2h3.29l-.41.15c-.29.1-.54.28-.71.53-.08.1-.14.2-.18.32H8.12a.5.5 0 0 0-.44.28l-.73 1.44A.5.5 0 0 1 6.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2.6a1.29 1.29 0 0 0 1 0v2.6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17c.26-.51.78-.83 1.34-.83ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraSparklesRegular = wrapIcon_1.default( /*#__PURE__*/CameraSparklesRegularIcon, 'CameraSparklesRegular');
const CameraSwitchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.15 2.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L15.29 5H4a1 1 0 0 0-1 1v6.5a.5.5 0 0 1-1 0V6c0-1.1.9-2 2-2h11.3l-1.15-1.15a.5.5 0 0 1 0-.7ZM17 14a1 1 0 0 1-1 1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L4.71 16H16a2 2 0 0 0 2-2V7.5a.5.5 0 0 0-1 0V14Zm-4-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraSwitchFilled = wrapIcon_1.default( /*#__PURE__*/CameraSwitchFilledIcon, 'CameraSwitchFilled');
const CameraSwitchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.85 2.15a.5.5 0 0 0-.7.7L15.29 4H4a2 2 0 0 0-2 2v6.5a.5.5 0 0 0 1 0V6a1 1 0 0 1 1-1h11.3l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM16 15a1 1 0 0 0 1-1V7.5a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H4.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L4.71 15H16Zm-3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CameraSwitchRegular = wrapIcon_1.default( /*#__PURE__*/CameraSwitchRegularIcon, 'CameraSwitchRegular');
const CaretDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.8 7a1 1 0 0 0-.78 1.63l3.81 4.72c.6.74 1.74.74 2.34 0l3.81-4.72A1 1 0 0 0 14.2 7H5.8Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretDownFilled = wrapIcon_1.default( /*#__PURE__*/CaretDownFilledIcon, 'CaretDownFilled');
const CaretDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.02 8.63A1 1 0 0 1 5.8 7h8.4a1 1 0 0 1 .78 1.63l-3.81 4.72a1.5 1.5 0 0 1-2.34 0L5.02 8.63ZM14.2 8H5.8l3.81 4.72c.2.25.58.25.78 0L14.2 8Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretDownRegular = wrapIcon_1.default( /*#__PURE__*/CaretDownRegularIcon, 'CaretDownRegular');
const CaretDownRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.96a1 1 0 0 0-1.7-.71l-8.05 8.04a1 1 0 0 0 .7 1.71h7.55c.83 0 1.5-.67 1.5-1.5V5.96Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretDownRightFilled = wrapIcon_1.default( /*#__PURE__*/CaretDownRightFilledIcon, 'CaretDownRightFilled');
const CaretDownRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.3 5.25a1 1 0 0 1 1.7.7v7.55c0 .83-.67 1.5-1.5 1.5H5.96a1 1 0 0 1-.71-1.7l8.04-8.05Zm.7.7L5.96 14h7.54a.5.5 0 0 0 .5-.5V5.96Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretDownRightRegular = wrapIcon_1.default( /*#__PURE__*/CaretDownRightRegularIcon, 'CaretDownRightRegular');
const CaretLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 14.2a1 1 0 0 1-1.63.78l-4.72-3.81a1.5 1.5 0 0 1 0-2.34l4.72-3.81A1 1 0 0 1 13 5.8v8.4Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretLeftFilled = wrapIcon_1.default( /*#__PURE__*/CaretLeftFilledIcon, 'CaretLeftFilled');
const CaretLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.37 14.98A1 1 0 0 0 13 14.2V5.8a1 1 0 0 0-1.63-.78L6.65 8.83a1.5 1.5 0 0 0 0 2.34l4.72 3.81ZM12 5.8v8.4L7.28 10.4a.5.5 0 0 1 0-.78L12 5.8Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretLeftRegular = wrapIcon_1.default( /*#__PURE__*/CaretLeftRegularIcon, 'CaretLeftRegular');
const CaretRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 14.2a1 1 0 0 0 1.63.78l4.72-3.81a1.5 1.5 0 0 0 0-2.34L8.63 5.02A1 1 0 0 0 7 5.8v8.4Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretRightFilled = wrapIcon_1.default( /*#__PURE__*/CaretRightFilledIcon, 'CaretRightFilled');
const CaretRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.63 14.98A1 1 0 0 1 7 14.2V5.8a1 1 0 0 1 1.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81ZM8 5.8v8.4l4.72-3.81a.5.5 0 0 0 0-.78L8 5.8Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretRightRegular = wrapIcon_1.default( /*#__PURE__*/CaretRightRegularIcon, 'CaretRightRegular');
const CaretUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.8 13.9a1 1 0 0 1-.78-1.62l3.81-4.72a1.5 1.5 0 0 1 2.34 0l3.81 4.72a1 1 0 0 1-.78 1.63H5.8Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretUpFilled = wrapIcon_1.default( /*#__PURE__*/CaretUpFilledIcon, 'CaretUpFilled');
const CaretUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.02 12.28a1 1 0 0 0 .78 1.63h8.4a1 1 0 0 0 .78-1.63l-3.81-4.72a1.5 1.5 0 0 0-2.34 0l-3.81 4.72Zm9.18.63H5.8L9.6 8.19a.5.5 0 0 1 .78 0l3.81 4.72Z",
    fill: primaryFill
  }));
  ;
};
exports.CaretUpRegular = wrapIcon_1.default( /*#__PURE__*/CaretUpRegularIcon, 'CaretUpRegular');
const CartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.5c0-.28.22-.5.5-.5h.44c.72 0 1.14.47 1.38.94.17.32.29.72.39 1.06H16a1 1 0 0 1 .96 1.27l-1.5 5.28A2 2 0 0 1 13.55 13H8.46a2 2 0 0 1-1.93-1.47L5.9 9.17l-.01-.03-1.03-3.5-.1-.33a5.2 5.2 0 0 0-.32-.91c-.16-.31-.3-.4-.5-.4H3.5a.5.5 0 0 1-.5-.5ZM8.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.CartFilled = wrapIcon_1.default( /*#__PURE__*/CartFilledIcon, 'CartFilled');
const CartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.5c0-.28.22-.5.5-.5h.44c.72 0 1.14.47 1.38.94.17.32.29.72.39 1.06H16a1 1 0 0 1 .96 1.27l-1.5 5.28A2 2 0 0 1 13.55 13H8.46a2 2 0 0 1-1.93-1.47L5.9 9.17l-.01-.03-1.03-3.5-.1-.33a5.2 5.2 0 0 0-.32-.91c-.16-.31-.3-.4-.5-.4H3.5a.5.5 0 0 1-.5-.5Zm3.84 5.37.66 2.4a1 1 0 0 0 .96.73h5.08a1 1 0 0 0 .96-.73L16 6H6l.84 2.87ZM10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CartRegular = wrapIcon_1.default( /*#__PURE__*/CartRegularIcon, 'CartRegular');
const CastFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-13ZM4 8c0-.28.22-.5.5-.5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 0 0-5-5A.5.5 0 0 1 4 8Zm.5 2A3.5 3.5 0 0 1 8 13.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 0 4.5 11a.5.5 0 0 1 0-1Zm.25 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CastFilled = wrapIcon_1.default( /*#__PURE__*/CastFilledIcon, 'CastFilled');
const CastRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM3.5 5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13Zm2 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM4 10.5c0-.28.22-.5.5-.5A3.5 3.5 0 0 1 8 13.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 0 4.5 11a.5.5 0 0 1-.5-.5ZM4 8c0-.28.22-.5.5-.5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 0 0-5-5A.5.5 0 0 1 4 8Z",
    fill: primaryFill
  }));
  ;
};
exports.CastRegular = wrapIcon_1.default( /*#__PURE__*/CastRegularIcon, 'CastRegular');
const CatchUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.67 7.14c.1-.2.38-.19.46.02l2.33 6.2a1.75 1.75 0 0 0 3.23.14l1.22-2.6a.25.25 0 0 1 .23-.15h1.06a1.5 1.5 0 1 0 0-1.5h-1.06c-.68 0-1.3.4-1.59 1l-1.22 2.6c-.1.2-.38.2-.46-.01l-2.33-6.2A1.75 1.75 0 0 0 6.3 6.5L5.1 9.1a.25.25 0 0 1-.22.15H3.8a1.5 1.5 0 1 0 0 1.5h1.07c.67 0 1.29-.4 1.58-1l1.22-2.6Z",
    fill: primaryFill
  }));
  ;
};
exports.CatchUpFilled = wrapIcon_1.default( /*#__PURE__*/CatchUpFilledIcon, 'CatchUpFilled');
const CatchUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.45 7.27a.5.5 0 0 1 .91.04l2.35 5.76a1.5 1.5 0 0 0 2.73.11l1.23-2.4a.5.5 0 0 1 .44-.28h.98a1.5 1.5 0 1 0 0-1h-.98a1.5 1.5 0 0 0-1.33.82l-1.23 2.4a.5.5 0 0 1-.91-.03L9.29 6.93a1.5 1.5 0 0 0-2.73-.11l-1.23 2.4a.5.5 0 0 1-.44.28H3.9a1.5 1.5 0 1 0 0 1h.98a1.5 1.5 0 0 0 1.33-.82l1.23-2.4Z",
    fill: primaryFill
  }));
  ;
};
exports.CatchUpRegular = wrapIcon_1.default( /*#__PURE__*/CatchUpRegularIcon, 'CatchUpRegular');
const Cellular3GFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.03 3c-.32 0-.74.14-1.16.6a.5.5 0 1 1-.74-.66A2.57 2.57 0 0 1 4.03 2c.64 0 1.2.28 1.57.7A1.5 1.5 0 0 1 5.28 5c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 0 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35Zm.72 10c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Zm-7.5-2h.25s.13 0 .28.06c.17.07.36.18.48.42a.5.5 0 0 0 .89-.46C10.62 2 9.53 2 9.5 2h-.25C8.01 2 7 3 7 4.25v1.5a2.25 2.25 0 0 0 4.5 0v-.5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1h1a1.25 1.25 0 0 1-2.5 0v-1.5C8 3.56 8.56 3 9.25 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular3GFilled = wrapIcon_1.default( /*#__PURE__*/Cellular3GFilledIcon, 'Cellular3GFilled');
const Cellular3GRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.03 3c-.32 0-.74.14-1.16.6a.5.5 0 1 1-.74-.66A2.57 2.57 0 0 1 4.03 2c.64 0 1.2.28 1.57.7A1.5 1.5 0 0 1 5.28 5c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 0 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35ZM16.5 5a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM9.25 3h.25s.13 0 .28.06c.17.07.36.18.48.42a.5.5 0 0 0 .89-.46C10.62 2 9.53 2 9.5 2h-.25C8.01 2 7 3 7 4.25v1.5a2.25 2.25 0 0 0 4.5 0v-.5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1h1a1.25 1.25 0 0 1-2.5 0v-1.5C8 3.56 8.56 3 9.25 3Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular3GRegular = wrapIcon_1.default( /*#__PURE__*/Cellular3GRegularIcon, 'Cellular3GRegular');
const Cellular4GFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 1 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 1 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3ZM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75ZM4.95 2.7a.7.7 0 0 0-1.26-.4L1.13 5.9A.7.7 0 0 0 1.7 7h2.26v.5a.5.5 0 1 0 1 0V7h.54a.5.5 0 0 0 0-1h-.54V2.7Zm-1 .94V6H2.29l1.68-2.36Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular4GFilled = wrapIcon_1.default( /*#__PURE__*/Cellular4GFilledIcon, 'Cellular4GFilled');
const Cellular4GRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 1 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 1 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3Zm7 2a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM4.96 2.7a.7.7 0 0 0-1.27-.4L1.13 5.9A.7.7 0 0 0 1.7 7h2.26v.5a.5.5 0 1 0 1 0V7h.54a.5.5 0 0 0 0-1h-.54V2.7Zm-1 .94V6H2.28l1.68-2.36Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular4GRegular = wrapIcon_1.default( /*#__PURE__*/Cellular4GRegularIcon, 'Cellular4GRegular');
const Cellular5GFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 0 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 0 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3ZM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Zm-14-3a.5.5 0 0 0-.5.44l-.25 2a.5.5 0 0 0 .54.56l.18-.02 1.37-.11c.49-.04.91.35.91.84v.22C5 6.52 4.52 7 3.93 7a.98.98 0 0 1-.75-.32 1.23 1.23 0 0 1-.2-.3l-.01-.02a.5.5 0 0 0-.94.36l.01.02a1.44 1.44 0 0 0 .1.2A1.98 1.98 0 0 0 3.93 8C5.07 8 6 7.07 6 5.93V5.7c0-1.08-.92-1.93-2-1.84l-.93.08L3.2 3H5.5a.5.5 0 0 0 0-1H2.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular5GFilled = wrapIcon_1.default( /*#__PURE__*/Cellular5GFilledIcon, 'Cellular5GFilled');
const Cellular5GRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 0 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 0 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3Zm7 2a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM2.75 2a.5.5 0 0 0-.5.44l-.25 2a.5.5 0 0 0 .54.56l.18-.02 1.37-.11c.49-.04.91.35.91.84v.22C5 6.52 4.52 7 3.93 7a.98.98 0 0 1-.75-.32 1.23 1.23 0 0 1-.2-.3l-.01-.02a.5.5 0 0 0-.94.36l.01.02a1.44 1.44 0 0 0 .1.2A1.98 1.98 0 0 0 3.93 8C5.07 8 6 7.07 6 5.93V5.7c0-1.08-.92-1.93-2-1.84l-.93.08L3.2 3H5.5a.5.5 0 0 0 0-1H2.75Z",
    fill: primaryFill
  }));
  ;
};
exports.Cellular5GRegular = wrapIcon_1.default( /*#__PURE__*/Cellular5GRegularIcon, 'Cellular5GRegular');
const CellularData1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V8.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V6.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData1Filled = wrapIcon_1.default( /*#__PURE__*/CellularData1FilledIcon, 'CellularData1Filled');
const CellularData1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 4a.5.5 0 0 1 .5.41V15.5a.5.5 0 0 1-.99.09V4.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.4v5.1a.5.5 0 0 1-.99.09v-5.1c0-.27.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.4v3.1a.5.5 0 0 1-1 .09v-3.1c0-.27.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09v-7.1c0-.27.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V6.5c0-.27.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData1Regular = wrapIcon_1.default( /*#__PURE__*/CellularData1RegularIcon, 'CellularData1Regular');
const CellularData2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.1v-2.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.1v-4.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64v6.61a.75.75 0 0 1-1.48.11l-.01-.11v-6.5c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64v8.61a.75.75 0 0 1-1.48.11l-.01-.11v-8.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData2Filled = wrapIcon_1.default( /*#__PURE__*/CellularData2FilledIcon, 'CellularData2Filled');
const CellularData2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 10a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V10.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V12.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V8.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V6.5c0-.27.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData2Regular = wrapIcon_1.default( /*#__PURE__*/CellularData2RegularIcon, 'CellularData2Regular');
const CellularData3FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.1v-2.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.1v-4.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V8.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData3Filled = wrapIcon_1.default( /*#__PURE__*/CellularData3FilledIcon, 'CellularData3Filled');
const CellularData3RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 10a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V10.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.1a.5.5 0 0 1-1 .08V12.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V8.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData3Regular = wrapIcon_1.default( /*#__PURE__*/CellularData3RegularIcon, 'CellularData3Regular');
const CellularData4FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData4Filled = wrapIcon_1.default( /*#__PURE__*/CellularData4FilledIcon, 'CellularData4Filled');
const CellularData4RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 10a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V10.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V12.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData4Regular = wrapIcon_1.default( /*#__PURE__*/CellularData4RegularIcon, 'CellularData4Regular');
const CellularData5FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData5Filled = wrapIcon_1.default( /*#__PURE__*/CellularData5FilledIcon, 'CellularData5Filled');
const CellularData5RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 12a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V12.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularData5Regular = wrapIcon_1.default( /*#__PURE__*/CellularData5RegularIcon, 'CellularData5Regular');
const CellularOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L10 10.71v4.65a.75.75 0 0 0 1.5-.11v-3.04l1.5 1.5V15.36a.75.75 0 0 0 1.5-.11v-.04l2.65 2.64a.5.5 0 0 0 .7-.7l-15-15ZM13 10.88V6.75a.75.75 0 0 1 1.5-.11v5.74l-1.5-1.5Zm4.48 4.48L16 13.88l.01-9.13a.74.74 0 0 1 1.48-.12l.01.1-.01 10.52-.01.1ZM5.49 12.64a.75.75 0 0 0-1.49.11v2.61a.75.75 0 0 0 1.5-.11v-2.61Zm3-2a.75.75 0 0 0-1.49.11v4.61a.75.75 0 0 0 1.5-.11v-4.61Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularOffFilled = wrapIcon_1.default( /*#__PURE__*/CellularOffFilledIcon, 'CellularOffFilled');
const CellularOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L10 10.71v4.88a.5.5 0 0 0 1-.09v-3.8l2 2V15.6a.5.5 0 0 0 1-.09v-.8l3.15 3.15a.5.5 0 0 0 .7-.7l-15-15ZM13 10.88V6.5a.5.5 0 0 1 1-.09v5.47l-1-1Zm3 3V4.5a.5.5 0 0 1 1-.09V14.88l-1-1Zm-8-3.47a.5.5 0 0 0-1 .09v5l.01.09a.5.5 0 0 0 1-.09v-5L8 10.41Zm-3 2a.5.5 0 0 0-1 .09v3.09a.5.5 0 0 0 1-.09v-3.09Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularOffRegular = wrapIcon_1.default( /*#__PURE__*/CellularOffRegularIcon, 'CellularOffRegular');
const CellularWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v3.79l-1.47 2.93a.75.75 0 0 1-.02-.1l-.01-.12v-6.5c0-.41.34-.75.75-.75ZM13 9.68c.4-.45.95-.68 1.5-.68V6.64a.75.75 0 0 0-1.5.11v2.93Zm3.3.43 1.19 2.39.01-7.76v-.11a.74.74 0 0 0-1.49.12v4.93c.1.12.2.27.28.43Zm-2.7.44-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularWarningFilled = wrapIcon_1.default( /*#__PURE__*/CellularWarningFilledIcon, 'CellularWarningFilled');
const CellularWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 4a.5.5 0 0 1 .5.41v7.12l-.7-1.42c-.09-.17-.19-.31-.3-.44V4.5c0-.28.23-.5.5-.5ZM10 15.53l1-2V8.4a.5.5 0 0 0-1 .1v7.03Zm3-5.85c.27-.32.62-.52 1-.62V6.41a.5.5 0 0 0-1 .1v3.17ZM7.5 10a.5.5 0 0 1 .5.4v5.1a.5.5 0 0 1-.99.09v-5.1c0-.27.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.4v3.1a.5.5 0 0 1-1 .09v-3.1c0-.27.22-.5.5-.5Zm9.1-1.45-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.CellularWarningRegular = wrapIcon_1.default( /*#__PURE__*/CellularWarningRegularIcon, 'CellularWarningRegular');
const CenterHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9Z",
    fill: primaryFill
  }));
  ;
};
exports.CenterHorizontalFilled = wrapIcon_1.default( /*#__PURE__*/CenterHorizontalFilledIcon, 'CenterHorizontalFilled');
const CenterHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9ZM8 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
  ;
};
exports.CenterHorizontalRegular = wrapIcon_1.default( /*#__PURE__*/CenterHorizontalRegularIcon, 'CenterHorizontalRegular');
const CenterVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
  ;
};
exports.CenterVerticalFilled = wrapIcon_1.default( /*#__PURE__*/CenterVerticalFilledIcon, 'CenterVerticalFilled');
const CenterVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z",
    fill: primaryFill
  }));
  ;
};
exports.CenterVerticalRegular = wrapIcon_1.default( /*#__PURE__*/CenterVerticalRegularIcon, 'CenterVerticalRegular');
const CertificateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5v-.67c.09-.1.17-.22.24-.33H16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.47c-.36.18-.7.4-1 .68V5c0-1.1.9-2 2-2h12ZM1.5 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0ZM5 16c-.93 0-1.78-.28-2.5-.76V18c0 .41.47.65.8.4l1.4-1.05a.5.5 0 0 1 .6 0l1.4 1.05c.33.25.8.01.8-.4v-2.76c-.72.48-1.57.76-2.5.76Zm10-9.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm-.5 4.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4Z",
    fill: primaryFill
  }));
  ;
};
exports.CertificateFilled = wrapIcon_1.default( /*#__PURE__*/CertificateFilledIcon, 'CertificateFilled');
const CertificateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.15c.3-.27.64-.5 1-.68V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.74l-.24.33V15H16a2 2 0 0 0 2-2V5ZM1.5 11.5c0 .95.38 1.82 1 2.45V18c0 .41.47.65.8.4l1.4-1.05a.5.5 0 0 1 .6 0l1.4 1.05c.33.25.8.01.8-.4v-4.05A3.49 3.49 0 0 0 5 8a3.5 3.5 0 0 0-3.5 3.5ZM5 15c.54 0 1.05-.12 1.5-.34v2.09L5.26 16a.5.5 0 0 0-.52 0l-1.24.75v-2.09c.45.22.96.34 1.5.34Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm10-7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm-.5 4.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4Z",
    fill: primaryFill
  }));
  ;
};
exports.CertificateRegular = wrapIcon_1.default( /*#__PURE__*/CertificateRegularIcon, 'CertificateRegular');
const ChannelFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm-4-5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelFilled = wrapIcon_1.default( /*#__PURE__*/ChannelFilledIcon, 'ChannelFilled');
const ChannelRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm0-1c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15Zm3.5 4c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelRegular = wrapIcon_1.default( /*#__PURE__*/ChannelRegularIcon, 'ChannelRegular');
const ChannelAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1 0-5H7.5a.5.5 0 0 1 0-1h2.76A5.49 5.49 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm15.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelAddFilled = wrapIcon_1.default( /*#__PURE__*/ChannelAddFilledIcon, 'ChannelAddFilled');
const ChannelAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15ZM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h3.7Zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelAddRegular = wrapIcon_1.default( /*#__PURE__*/ChannelAddRegularIcon, 'ChannelAddRegular');
const ChannelAlertFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1 0-5H7.5a.5.5 0 0 1 0-1h2.76A5.49 5.49 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm15.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM16.5 13a2 2 0 1 0-4 0v1.8l-.35.35a.5.5 0 0 0 .35.85h4a.5.5 0 0 0 .35-.85l-.35-.36V13Zm-3.41 4a1.5 1.5 0 0 0 2.82 0H13.1Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelAlertFilled = wrapIcon_1.default( /*#__PURE__*/ChannelAlertFilledIcon, 'ChannelAlertFilled');
const ChannelAlertRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15ZM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h3.7Zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM16.5 13a2 2 0 1 0-4 0v1.8l-.35.35a.5.5 0 0 0 .35.85h4a.5.5 0 0 0 .35-.85l-.35-.36V13Zm-3.41 4a1.5 1.5 0 0 0 2.82 0H13.1Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelAlertRegular = wrapIcon_1.default( /*#__PURE__*/ChannelAlertRegularIcon, 'ChannelAlertRegular');
const ChannelArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1 0-5H7.5a.5.5 0 0 1 0-1h2.76A5.49 5.49 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm15.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/ChannelArrowLeftFilledIcon, 'ChannelArrowLeftFilled');
const ChannelArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15ZM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h3.7Zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/ChannelArrowLeftRegularIcon, 'ChannelArrowLeftRegular');
const ChannelDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1 0-5H7.5a.5.5 0 0 1 0-1h2.76A5.49 5.49 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm15.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelDismissFilled = wrapIcon_1.default( /*#__PURE__*/ChannelDismissFilledIcon, 'ChannelDismissFilled');
const ChannelDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15ZM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h3.7Zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelDismissRegular = wrapIcon_1.default( /*#__PURE__*/ChannelDismissRegularIcon, 'ChannelDismissRegular');
const ChannelShareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5h-5C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h4.51a2.25 2.25 0 1 1 .12 1H5.5A2.5 2.5 0 0 1 3 10.5v-5ZM7.5 14a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 9.5 17h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7H9.87A2.25 2.25 0 1 0 10 8h4.51c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelShareFilled = wrapIcon_1.default( /*#__PURE__*/ChannelShareFilledIcon, 'ChannelShareFilled');
const ChannelShareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5h-5C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h4.51a2.25 2.25 0 1 1 .12 1H5.5A2.5 2.5 0 0 1 3 10.5v-5Zm8 6.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM7.5 14a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 9.5 17h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7H9.87A2.25 2.25 0 1 0 10 8h4.51c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5a.5.5 0 0 0-.5-.5Zm.25-7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelShareRegular = wrapIcon_1.default( /*#__PURE__*/ChannelShareRegularIcon, 'ChannelShareRegular');
const ChannelSubtractFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.2 4.52A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.48 5.48 0 0 0-6.74 1.4H7.5a.5.5 0 0 0 0 1h2.1a5.48 5.48 0 0 0 0 5H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 1 0 .2-3.92ZM7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM3 5.63a1 1 0 1 1 1 1.73 1 1 0 0 1-1-1.73ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelSubtractFilled = wrapIcon_1.default( /*#__PURE__*/ChannelSubtractFilledIcon, 'ChannelSubtractFilled');
const ChannelSubtractRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.2 4.52a2.02 2.02 0 0 1 1.06.13C4.53 4.25 5 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v3.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9a2.5 2.5 0 0 0-2.3 1.52ZM9.6 17c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V8.44a2 2 0 0 1-1 0v6.06A2.5 2.5 0 0 0 5.5 17h4.1Zm0-5c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3 5.63a1 1 0 0 1 1 0 1 1 0 1 1-1 0ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.ChannelSubtractRegular = wrapIcon_1.default( /*#__PURE__*/ChannelSubtractRegularIcon, 'ChannelSubtractRegular');
const ChartMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 11c0-.37.1-.7.27-1H10.5A1.5 1.5 0 0 1 9 8.5V2.02a7.5 7.5 0 0 0 0 14.96V15a2 2 0 0 1 3-1.73V13a2 2 0 0 1 3-1.73V11Zm-5-8.98V8.5c0 .28.22.5.5.5h6.48A7.5 7.5 0 0 0 10 2.02ZM16 11a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7Zm-6 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm3-2a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChartMultipleFilled = wrapIcon_1.default( /*#__PURE__*/ChartMultipleFilledIcon, 'ChartMultipleFilled');
const ChartMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 9.5a6.5 6.5 0 0 0 6 6.48v1A7.5 7.5 0 1 1 16.98 9a2 2 0 0 0-1.71 1H10.5A1.5 1.5 0 0 1 9 8.5V3.02A6.5 6.5 0 0 0 3 9.5ZM15.98 9A6.5 6.5 0 0 0 10 3.02V8.5c0 .28.22.5.5.5h5.48Zm.02 2a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7Zm-6 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm3-2a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChartMultipleRegular = wrapIcon_1.default( /*#__PURE__*/ChartMultipleRegularIcon, 'ChartMultipleRegular');
const ChartPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2.5a.5.5 0 1 0-1 0V3H4.75A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15h1.82l-1.49 2.23a.5.5 0 0 0 .84.55L7.77 15H11.5a2.5 2.5 0 0 1 1.77-.99A2.99 2.99 0 0 1 15.5 9a3 3 0 0 1 2.5 1.34V5.75A2.75 2.75 0 0 0 15.25 3H10.5v-.5ZM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0-2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Zm12 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChartPersonFilled = wrapIcon_1.default( /*#__PURE__*/ChartPersonFilledIcon, 'ChartPersonFilled');
const ChartPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5V3h4.75A2.75 2.75 0 0 1 18 5.75v4.6c-.26-.4-.6-.72-1-.95V5.75c0-.65-.35-1.22-.88-1.52l-.02-.01a1.74 1.74 0 0 0-.85-.22H4.75C3.78 4 3 4.78 3 5.75v6.55c.03.94.8 1.7 1.75 1.7h8.51l.01.01a2.5 2.5 0 0 0-1.77.99H7.77l-1.85 2.78a.5.5 0 1 1-.84-.55L6.57 15H4.75A2.75 2.75 0 0 1 2 12.25v-6.5A2.75 2.75 0 0 1 4.75 3H9.5v-.5c0-.28.22-.5.5-.5ZM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 9c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 9Zm12.5 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChartPersonRegular = wrapIcon_1.default( /*#__PURE__*/ChartPersonRegularIcon, 'ChartPersonRegular');
const ChatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm.5 9H7.41a.5.5 0 0 0 0 1H10.59a.5.5 0 0 0 0-1h-.09Zm2-3H7.41a.5.5 0 0 0 0 1h5.18a.5.5 0 0 0 0-1h-.09Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatFilled = wrapIcon_1.default( /*#__PURE__*/ChatFilledIcon, 'ChatFilled');
const ChatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04A7 7 0 1 0 10 3Zm.5 8a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1h3.09Zm2-3a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1h5.09Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatRegular = wrapIcon_1.default( /*#__PURE__*/ChatRegularIcon, 'ChatRegular');
const ChatAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06a7.97 7.97 0 0 0 3.86.86A5.5 5.5 0 0 1 18 10.26L18 10Zm1 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatAddFilled = wrapIcon_1.default( /*#__PURE__*/ChatAddFilledIcon, 'ChatAddFilled');
const ChatAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25 5.5 5.5 0 0 0-1.01-.66 7 7 0 1 0-13.1 3.83.5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04c.92.51 1.94.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 0 1-3.86-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatAddRegular = wrapIcon_1.default( /*#__PURE__*/ChatAddRegularIcon, 'ChatAddRegular');
const ChatArrowBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25A5.5 5.5 0 0 0 10.26 18a7.93 7.93 0 0 1-3.87-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm4.5 17a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatArrowBackFilled = wrapIcon_1.default( /*#__PURE__*/ChatArrowBackFilledIcon, 'ChatArrowBackFilled');
const ChatArrowBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25 5.5 5.5 0 0 0-1.01-.66 7 7 0 1 0-13.1 3.83.5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04c.92.51 1.94.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 0 1-3.86-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm4.5 17a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatArrowBackRegular = wrapIcon_1.default( /*#__PURE__*/ChatArrowBackRegularIcon, 'ChatArrowBackRegular');
const ChatArrowDoubleBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25A5.5 5.5 0 0 0 10.26 18a7.93 7.93 0 0 1-3.87-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.65-1.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Zm1.86.65.64-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1h-1.8Z",
    fill: primaryFill,
    opacity: 0.99
  }));
  ;
};
exports.ChatArrowDoubleBackFilled = wrapIcon_1.default( /*#__PURE__*/ChatArrowDoubleBackFilledIcon, 'ChatArrowDoubleBackFilled');
const ChatArrowDoubleBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25 5.5 5.5 0 0 0-1.01-.66 7 7 0 1 0-13.1 3.83.5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04c.92.51 1.94.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 0 1-3.86-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.65-1.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Zm1.86.65.64-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1h-1.8Z",
    fill: primaryFill,
    opacity: 0.99
  }));
  ;
};
exports.ChatArrowDoubleBackRegular = wrapIcon_1.default( /*#__PURE__*/ChatArrowDoubleBackRegularIcon, 'ChatArrowDoubleBackRegular');
const ChatBubblesQuestionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 1a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.5 1Zm0 3.9c-.37.07-.76.3-1.07.85a.5.5 0 1 1-.87-.5A2.57 2.57 0 0 1 8.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.1.21-.1.44a.5.5 0 0 1-1 0c0-.27.02-.61.25-.97.2-.34.56-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.3-.2-.68-.3-1.05-.22Zm.25 6.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-2.21 3.24a6.49 6.49 0 0 0 7.7 1.64l2.49.7a1 1 0 0 0 1.2-1.33l-.8-2.08a6.47 6.47 0 0 0-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 0 1 .16 5.98l-.13.2.97 2.54-2.86-.8-.18.09A5.47 5.47 0 0 1 8.3 15a7.5 7.5 0 0 1-1.75-.26Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatBubblesQuestionFilled = wrapIcon_1.default( /*#__PURE__*/ChatBubblesQuestionFilledIcon, 'ChatBubblesQuestionFilled');
const ChatBubblesQuestionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 4.9c-.37.07-.76.3-1.07.85a.5.5 0 1 1-.86-.5A2.57 2.57 0 0 1 8.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.09.21-.09.44a.5.5 0 0 1-1 0c0-.27.01-.61.24-.97.2-.34.57-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.29-.2-.67-.3-1.05-.22Zm.25 6.6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 1a6.5 6.5 0 0 0-5.67 9.67l-.8 2.08a1 1 0 0 0 1.2 1.32l2.5-.7A6.5 6.5 0 1 0 8.5 1ZM3 7.5a5.5 5.5 0 1 1 3 4.9l-.18-.09-2.86.8.97-2.53-.13-.21A5.47 5.47 0 0 1 3 7.5Zm8.46 9.5a6.49 6.49 0 0 1-4.92-2.26A7.5 7.5 0 0 0 8.3 15a5.47 5.47 0 0 0 5.66.4l.18-.09 2.86.8-.97-2.53.13-.21A5.47 5.47 0 0 0 16 7.39c0-.6-.1-1.2-.24-1.76a6.48 6.48 0 0 1 1.38 8.04l.8 2.08a1 1 0 0 1-1.21 1.32l-2.49-.7c-.84.4-1.78.63-2.78.63Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatBubblesQuestionRegular = wrapIcon_1.default( /*#__PURE__*/ChatBubblesQuestionRegularIcon, 'ChatBubblesQuestionRegular');
const ChatCursorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2a5.97 5.97 0 0 0 4 .73V8.75c0-1.5 1.74-2.3 2.88-1.34l1.8 1.53A6 6 0 0 0 8 1Zm2 7.75v9a.75.75 0 0 0 1.37.42l1.98-2.95a.5.5 0 0 1 .42-.22h3.48c.7 0 1.02-.87.49-1.32l-6.5-5.5a.75.75 0 0 0-1.24.57Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatCursorFilled = wrapIcon_1.default( /*#__PURE__*/ChatCursorFilledIcon, 'ChatCursorFilled');
const ChatCursorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2a5.97 5.97 0 0 0 4 .73V11.9a5.02 5.02 0 0 1-3.67-.67.5.5 0 0 0-.43-.06l-1.66.56.51-1.79a.5.5 0 0 0-.05-.39 5 5 0 1 1 9.15-1.32l.83.7A6 6 0 0 0 8 1Zm2 7.75v9a.75.75 0 0 0 1.37.42l1.98-2.95a.5.5 0 0 1 .42-.22h3.48c.7 0 1.02-.87.49-1.32l-6.5-5.5a.75.75 0 0 0-1.24.57Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatCursorRegular = wrapIcon_1.default( /*#__PURE__*/ChatCursorRegularIcon, 'ChatCursorRegular');
const ChatDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0 0 18 10ZM7.85 7.15 10 9.29l2.15-2.14a.5.5 0 0 1 .7.7L10.71 10l2.14 2.15a.5.5 0 0 1-.7.7L10 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L9.29 10 7.15 7.85a.5.5 0 1 1 .7-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatDismissFilled = wrapIcon_1.default( /*#__PURE__*/ChatDismissFilledIcon, 'ChatDismissFilled');
const ChatDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.85 7.15a.5.5 0 1 0-.7.7L9.29 10l-2.14 2.15a.5.5 0 0 0 .7.7L10 10.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 10l2.14-2.15a.5.5 0 0 0-.7-.7L10 9.29 7.85 7.15ZM18 10a8 8 0 1 0-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0 0 18 10ZM3 10a7 7 0 1 1 3.58 6.1l-.09-.03-.1-.02a.5.5 0 0 0-.18 0l-3.02.76.75-3.02.02-.1a.5.5 0 0 0-.07-.27A6.97 6.97 0 0 1 3 10Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatDismissRegular = wrapIcon_1.default( /*#__PURE__*/ChatDismissRegularIcon, 'ChatDismissRegular');
const ChatEmptyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0 0 18 10Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatEmptyFilled = wrapIcon_1.default( /*#__PURE__*/ChatEmptyFilledIcon, 'ChatEmptyFilled');
const ChatEmptyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04A7 7 0 1 0 10 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatEmptyRegular = wrapIcon_1.default( /*#__PURE__*/ChatEmptyRegularIcon, 'ChatEmptyRegular');
const ChatHelpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 4.26 7.07L2.62 18a.5.5 0 0 1-.6-.61l.9-3.64A7.97 7.97 0 0 1 2 10Zm7.25-2.7c.15-.17.39-.3.75-.3s.6.13.75.3c.16.2.25.44.25.7 0 .32-.07.52-.17.69-.1.17-.23.3-.42.5l-.02.03c-.19.2-.42.44-.6.78-.18.35-.29.76-.29 1.3a.5.5 0 1 0 1 0c0-.4.08-.64.18-.84.1-.2.24-.35.43-.55l.04-.04c.17-.18.38-.4.55-.68.18-.32.3-.7.3-1.19a1.95 1.95 0 0 0-2-2 1.95 1.95 0 0 0-2 2 .5.5 0 0 0 1 0c0-.26.09-.5.25-.7Zm1.45 6.21a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatHelpFilled = wrapIcon_1.default( /*#__PURE__*/ChatHelpFilledIcon, 'ChatHelpFilled');
const ChatHelpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.25 7.3c-.16.2-.25.44-.25.7a.5.5 0 0 1-1 0 1.95 1.95 0 0 1 2-2 1.95 1.95 0 0 1 2 2c0 .49-.12.87-.3 1.19-.17.28-.38.5-.55.68l-.04.04c-.19.2-.33.35-.43.55-.1.2-.18.45-.18.83a.5.5 0 1 1-1 0 2.71 2.71 0 0 1 .89-2.07l.02-.02c.19-.2.32-.34.42-.51.1-.17.17-.37.17-.69 0-.26-.09-.5-.25-.7A.95.95 0 0 0 10 7c-.36 0-.6.13-.75.3Zm.75 6.91a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM2 10a8 8 0 1 1 4.26 7.07L2.62 18a.5.5 0 0 1-.6-.61l.9-3.64A7.97 7.97 0 0 1 2 10Zm8-7a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .04.37l-.75 3.02 3.02-.75a.5.5 0 0 1 .37.05A7 7 0 1 0 10 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatHelpRegular = wrapIcon_1.default( /*#__PURE__*/ChatHelpRegularIcon, 'ChatHelpRegular');
const ChatMailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7a6 6 0 1 1 3 5.2l-2.34.77a.5.5 0 0 1-.64-.6l.71-2.5A5.98 5.98 0 0 1 2 7Zm4.5-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.28 14.95-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 0 0-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.2l-4.28 2.15a.5.5 0 0 1-.44 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatMailFilled = wrapIcon_1.default( /*#__PURE__*/ChatMailFilledIcon, 'ChatMailFilled');
const ChatMailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 6c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 6Zm.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2A6 6 0 1 0 8 1ZM3 7a5 5 0 1 1 2.33 4.23.5.5 0 0 0-.43-.06l-1.66.56.51-1.79a.5.5 0 0 0-.05-.39A4.97 4.97 0 0 1 3 7Zm9.28 7.95-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 0 0-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.2l-4.28 2.15a.5.5 0 0 1-.44 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatMailRegular = wrapIcon_1.default( /*#__PURE__*/ChatMailRegularIcon, 'ChatMailRegular');
const ChatMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.54 2a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.54 2ZM6.57 15.74a6.49 6.49 0 0 0 7.71 1.64l2.49.7a1 1 0 0 0 1.2-1.33l-.8-2.08a6.47 6.47 0 0 0-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 0 1 .16 5.98l-.13.2.97 2.54-2.86-.8-.18.09a5.47 5.47 0 0 1-5.67-.4 7.5 7.5 0 0 1-1.76-.26Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatMultipleFilled = wrapIcon_1.default( /*#__PURE__*/ChatMultipleFilledIcon, 'ChatMultipleFilled');
const ChatMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.54 2a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.54 2Zm-5.5 6.5a5.5 5.5 0 1 1 3 4.9l-.18-.09-2.86.8.97-2.53-.13-.21a5.47 5.47 0 0 1-.8-2.87ZM11.5 18a6.49 6.49 0 0 1-4.93-2.26 7.5 7.5 0 0 0 1.76.26 5.47 5.47 0 0 0 5.67.4l.18-.09 2.86.8-.97-2.53.13-.21a5.47 5.47 0 0 0-.16-5.98c-.01-.6-.1-1.2-.24-1.76a6.48 6.48 0 0 1 1.38 8.04l.8 2.08a1 1 0 0 1-1.21 1.32l-2.49-.7c-.84.4-1.79.63-2.78.63Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatMultipleRegular = wrapIcon_1.default( /*#__PURE__*/ChatMultipleRegularIcon, 'ChatMultipleRegular');
const ChatOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7L4.71 4 16 15.3l1.85 1.85a.5.5 0 0 1-.7.7L15.29 16a7.97 7.97 0 0 1-8.9 1.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3Zm6.97 6.98-.68-.68H7.41a.5.5 0 0 0 0 1H10.59a.5.5 0 0 0 .38-.32ZM8.29 9l-.97-.97a.5.5 0 0 0 .09.96L7.5 9h.8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 9h-1.38l5.5 5.5A8 8 0 0 0 5.5 3.39L10.11 8H12.6a.5.5 0 0 1 0 1h-.09Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatOffFilled = wrapIcon_1.default( /*#__PURE__*/ChatOffFilledIcon, 'ChatOffFilled');
const ChatOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7L4.71 4l.7.7 9.88 9.88.7.71 1.86 1.86a.5.5 0 0 1-.7.7L15.29 16a7.97 7.97 0 0 1-8.9 1.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3Zm10.58 10.6-3.61-3.62a.5.5 0 0 1-.38.31l-.09.01h-3a.5.5 0 0 1-.09-1H10.3l-2-2h-.8a.5.5 0 0 1-.18-.97L4.71 5.42a6.97 6.97 0 0 0-.82 8 .5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04a6.97 6.97 0 0 0 8-.82Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16.62 14.5-.72-.73A7 7 0 0 0 6.23 4.1l-.73-.72A8 8 0 0 1 16.61 14.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 9h-1.38l-1-1h2.38a.5.5 0 0 1 .09 1h-.09Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatOffRegular = wrapIcon_1.default( /*#__PURE__*/ChatOffRegularIcon, 'ChatOffRegular');
const ChatSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.25A5.5 5.5 0 0 0 10.26 18a7.93 7.93 0 0 1-3.87-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm2.07 9.44a2 2 0 0 1-1.44 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatSettingsFilled = wrapIcon_1.default( /*#__PURE__*/ChatSettingsFilledIcon, 'ChatSettingsFilled');
const ChatSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .04.37l-.75 3.02 3.02-.75a.5.5 0 0 1 .37.05c.9.5 1.92.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 0 1-3.99-.92L2.62 18a.5.5 0 0 1-.6-.61l.9-3.64A8 8 0 1 1 18 10.26c-.3-.26-.64-.48-1-.67A7 7 0 0 0 10 3Zm2.07 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatSettingsRegular = wrapIcon_1.default( /*#__PURE__*/ChatSettingsRegularIcon, 'ChatSettingsRegular');
const ChatVideoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0 0 18 10ZM6 8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Zm7.15-.15a.5.5 0 0 1 .85.36v3.58a.5.5 0 0 1-.85.36L12 11V9l1.15-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatVideoFilled = wrapIcon_1.default( /*#__PURE__*/ChatVideoFilledIcon, 'ChatVideoFilled');
const ChatVideoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Zm6 1 1.15-1.15a.5.5 0 0 1 .85.36v3.58a.5.5 0 0 1-.85.36L12 11V9Zm-2-7a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04A7 7 0 1 0 10 3Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatVideoRegular = wrapIcon_1.default( /*#__PURE__*/ChatVideoRegularIcon, 'ChatVideoRegular');
const ChatWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 3.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5Zm0 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatWarningFilled = wrapIcon_1.default( /*#__PURE__*/ChatWarningFilledIcon, 'ChatWarningFilled');
const ChatWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04A7 7 0 1 0 10 3Zm0 2.5c.28 0 .5.22.5.5v5.5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5Zm0 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChatWarningRegular = wrapIcon_1.default( /*#__PURE__*/ChatWarningRegularIcon, 'ChatWarningRegular');
const CheckFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.88 5H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7.12l-4.44 4.44a1.5 1.5 0 0 1-2.12-2.12L15.88 5ZM4 8.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm13.85-5.65a.5.5 0 0 0-.7-.7l-5 5a.5.5 0 0 0 .7.7l5-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckFilled = wrapIcon_1.default( /*#__PURE__*/CheckFilledIcon, 'CheckFilled');
const CheckRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 7.12V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h11.88l-1 1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.12l1-1ZM4 8.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm13.85-6.35c.2.2.2.5 0 .7l-6 6a.5.5 0 0 1-.7-.7l6-6c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckRegular = wrapIcon_1.default( /*#__PURE__*/CheckRegularIcon, 'CheckRegular');
const Checkbox1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8c.77 0 1.47-.29 2-.76v-.83a1.5 1.5 0 0 1-1.4-2.61l2-1.5c.12-.1.26-.16.4-.21V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7Zm3.87 4.2a.5.5 0 0 1 .28.45v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .52-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.Checkbox1Filled = wrapIcon_1.default( /*#__PURE__*/Checkbox1FilledIcon, 'Checkbox1Filled');
const Checkbox1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8c.77 0 1.47-.29 2-.76v-.83c-.22.08-.44.1-.67.08A2 2 0 0 1 14 16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.75l.6-.45c.12-.1.26-.16.4-.21V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5Zm3.87 4.2a.5.5 0 0 1 .28.45v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .52-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.Checkbox1Regular = wrapIcon_1.default( /*#__PURE__*/Checkbox1RegularIcon, 'Checkbox1Regular');
const Checkbox2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7.05c.06-.3.18-.63.4-1 .23-.4.57-.8 1.04-1.23a1.5 1.5 0 0 1-1.12-2.48A3.51 3.51 0 0 1 15.82 11c.42-.02.82.05 1.18.17V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45 1.43 1.43 0 0 1 .03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29Z",
    fill: primaryFill
  }));
  ;
};
exports.Checkbox2Filled = wrapIcon_1.default( /*#__PURE__*/Checkbox2FilledIcon, 'Checkbox2Filled');
const Checkbox2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7.05c.06-.3.18-.63.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5c.35 0 .69.06 1 .17V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45 1.43 1.43 0 0 1 .03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29Z",
    fill: primaryFill
  }));
  ;
};
exports.Checkbox2Regular = wrapIcon_1.default( /*#__PURE__*/Checkbox2RegularIcon, 'Checkbox2Regular');
const CheckboxArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2A5.5 5.5 0 0 1 16 9.2V5a3 3 0 0 0-3-3H5Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxArrowRightFilledIcon, 'CheckboxArrowRightFilled');
const CheckboxArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4.02c.34.03.68.1 1 .19V5a3 3 0 0 0-3-3H5Zm7.85 4.85a.5.5 0 0 0-.7-.7L7.5 10.79 5.85 9.15a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxArrowRightRegularIcon, 'CheckboxArrowRightRegular');
const CheckboxCheckedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxCheckedFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxCheckedFilledIcon, 'CheckboxCheckedFilled');
const CheckboxCheckedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm9.85 1.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxCheckedRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxCheckedRegularIcon, 'CheckboxCheckedRegular');
const CheckboxCheckedSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2A5.5 5.5 0 0 1 16 9.2V5a3 3 0 0 0-3-3H5Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxCheckedSyncFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxCheckedSyncFilledIcon, 'CheckboxCheckedSyncFilled');
const CheckboxCheckedSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4.02c.34.03.68.1 1 .19V5a3 3 0 0 0-3-3H5Zm7.85 4.85a.5.5 0 0 0-.7-.7L7.5 10.79 5.85 9.15a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxCheckedSyncRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxCheckedSyncRegularIcon, 'CheckboxCheckedSyncRegular');
const CheckboxIndeterminateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4.5 6c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H6A1.5 1.5 0 0 1 4.5 14V6ZM7 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxIndeterminateFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxIndeterminateFilledIcon, 'CheckboxIndeterminateFilled');
const CheckboxIndeterminateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2.5-1C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxIndeterminateRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxIndeterminateRegularIcon, 'CheckboxIndeterminateRegular');
const CheckboxPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.04a2.5 2.5 0 0 1 2.23-2.99A2.99 2.99 0 0 1 15.5 9c.55 0 1.06.15 1.5.4V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxPersonFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxPersonFilledIcon, 'CheckboxPersonFilled');
const CheckboxPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.04a3.3 3.3 0 0 1 .01-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.04c.36.06.7.19 1 .36V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxPersonRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxPersonRegularIcon, 'CheckboxPersonRegular');
const CheckboxUncheckedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5H6Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxUncheckedFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxUncheckedFilledIcon, 'CheckboxUncheckedFilled');
const CheckboxUncheckedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxUncheckedRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxUncheckedRegularIcon, 'CheckboxUncheckedRegular');
const CheckboxWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.27l3.44-6.9a2 2 0 0 1 3.58 0l.71 1.42V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7Zm-.25 2.7-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxWarningFilled = wrapIcon_1.default( /*#__PURE__*/CheckboxWarningFilledIcon, 'CheckboxWarningFilled');
const CheckboxWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.27l.5-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.67c.11.13.21.27.3.44l.7 1.41V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5Zm-.25 2.7-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckboxWarningRegular = wrapIcon_1.default( /*#__PURE__*/CheckboxWarningRegularIcon, 'CheckboxWarningRegular');
const CheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.03 13.9 3.56 10a.75.75 0 0 0-1.12 1l4 4.5c.29.32.79.34 1.09.03l10.5-10.5a.75.75 0 0 0-1.06-1.06l-9.94 9.94Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkFilledIcon, 'CheckmarkFilled');
const CheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.37 10.17a.5.5 0 0 0-.74.66l4 4.5c.19.22.52.23.72.02l10.5-10.5a.5.5 0 0 0-.7-.7L7.02 14.27l-3.65-4.1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkRegularIcon, 'CheckmarkRegular');
const CheckmarkCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm3.36 5.65a.5.5 0 0 0-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 0 0-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 0 0-.06-.63Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkCircleFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkCircleFilledIcon, 'CheckmarkCircleFilled');
const CheckmarkCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 0 1-.64.07l-.07-.06-2-2a.5.5 0 0 1 .63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkCircleRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkCircleRegularIcon, 'CheckmarkCircleRegular');
const CheckmarkLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.33A3 3 0 0 0 12.5 12v.06A2 2 0 0 0 11 14v3.94A8 8 0 1 1 10 2Zm3.36 5.65a.5.5 0 0 0-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 0 0-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 0 0-.06-.63ZM15.5 10a2 2 0 0 1 2 2v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1c0-1.1.9-2 2-2Zm-.65 6.37a.75.75 0 1 0 1.3-.74.75.75 0 0 0-1.3.74ZM15.5 11a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkLockFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkLockFilledIcon, 'CheckmarkLockFilled');
const CheckmarkLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 8 8.33 3.02 3.02 0 0 0-1.03-.94A7 7 0 1 0 11 16.93v1A8 8 0 1 1 10 2Zm6.97 8.64A2 2 0 0 1 17.5 12v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1a2 2 0 0 1 3.47-1.36ZM14.5 13h2v-1a1 1 0 1 0-2 0v1Zm.35 3.37a.75.75 0 1 0 1.3-.74.75.75 0 0 0-1.3.74Zm-1.5-8.72c.18.17.2.44.07.63l-.06.07-4 4a.5.5 0 0 1-.64.07l-.07-.06-2-2a.5.5 0 0 1 .63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkLockRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkLockRegularIcon, 'CheckmarkLockRegular');
const CheckmarkNoteFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.03 12.9 2.56 9a.75.75 0 1 0-1.12 1l4 4.5c.29.32.79.34 1.09.03l10.5-10.5a.75.75 0 0 0-1.06-1.06l-9.94 9.94ZM11 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkNoteFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkNoteFilledIcon, 'CheckmarkNoteFilled');
const CheckmarkNoteRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1.67 9.13a.5.5 0 0 1 .7.04l3.65 4.1L16.15 3.15a.5.5 0 1 1 .7.7l-10.5 10.5a.5.5 0 0 1-.72-.02l-4-4.5a.5.5 0 0 1 .04-.7ZM11 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkNoteRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkNoteRegularIcon, 'CheckmarkNoteRegular');
const CheckmarkSquareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.35 5.35-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L9 11.29l3.65-3.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkSquareFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkSquareFilledIcon, 'CheckmarkSquareFilled');
const CheckmarkSquareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm9.35 2.35a.5.5 0 0 0-.7-.7L9 11.29 7.35 9.65a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l4-4Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkSquareRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkSquareRegularIcon, 'CheckmarkSquareRegular');
const CheckmarkStarburstFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.46 1.9.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 0 0 0 1.1l.4.99a2.42 2.42 0 0 1-1.3 3.1l-.97.42a1.5 1.5 0 0 0-.78.78l-.42.98a2.42 2.42 0 0 1-3.1 1.28l-1-.39a1.5 1.5 0 0 0-1.09 0l-.99.4a2.42 2.42 0 0 1-3.1-1.3l-.43-.97a1.5 1.5 0 0 0-.77-.78l-.98-.42a2.42 2.42 0 0 1-1.28-3.1l.39-1a1.5 1.5 0 0 0 0-1.09l-.4-.99a2.42 2.42 0 0 1 1.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 0 1 3.1-1.28Zm4.17 5.77-3.65 4.1-1.63-1.62a.5.5 0 0 0-.7.7l2 2c.2.2.53.2.72-.02l4-4.5a.5.5 0 0 0-.74-.66Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkStarburstFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkStarburstFilledIcon, 'CheckmarkStarburstFilled');
const CheckmarkStarburstRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.46 1.9.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 0 0 0 1.1l.4.99a2.42 2.42 0 0 1-1.3 3.1l-.97.42a1.5 1.5 0 0 0-.78.78l-.42.98a2.42 2.42 0 0 1-3.1 1.28l-1-.39a1.5 1.5 0 0 0-1.09 0l-.99.4a2.42 2.42 0 0 1-3.1-1.3l-.43-.97a1.5 1.5 0 0 0-.77-.78l-.98-.42a2.42 2.42 0 0 1-1.28-3.1l.39-1a1.5 1.5 0 0 0 0-1.09l-.4-.99a2.42 2.42 0 0 1 1.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 0 1 3.1-1.28Zm3.44.93-.99.39a2.5 2.5 0 0 1-1.83 0l-.99-.4a1.42 1.42 0 0 0-1.81.76l-.43.98a2.5 2.5 0 0 1-1.3 1.3l-.97.42c-.7.3-1.03 1.1-.75 1.81l.39 1a2.5 2.5 0 0 1 0 1.82l-.4 1c-.27.7.06 1.5.76 1.81l.98.43a2.5 2.5 0 0 1 1.3 1.3l.42.97c.3.7 1.1 1.03 1.81.75l1-.39a2.5 2.5 0 0 1 1.82 0l1 .4c.7.27 1.5-.06 1.81-.76l.43-.98a2.5 2.5 0 0 1 1.3-1.3l.97-.42c.7-.3 1.03-1.1.75-1.82l-.39-.99a2.5 2.5 0 0 1 0-1.83l.4-.99a1.42 1.42 0 0 0-.76-1.81l-.98-.43a2.5 2.5 0 0 1-1.3-1.3l-.42-.97c-.3-.7-1.1-1.03-1.82-.75Zm-2.92 8.94 3.65-4.1a.5.5 0 0 1 .8.59l-.06.07-4 4.5a.5.5 0 0 1-.65.08l-.07-.06-2-2a.5.5 0 0 1 .63-.76l.07.06 1.63 1.62 3.65-4.1-3.65 4.1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkStarburstRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkStarburstRegularIcon, 'CheckmarkStarburstRegular');
const CheckmarkUnderlineCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7.5 13h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkUnderlineCircleFilled = wrapIcon_1.default( /*#__PURE__*/CheckmarkUnderlineCircleFilledIcon, 'CheckmarkUnderlineCircleFilled');
const CheckmarkUnderlineCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7 13.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.CheckmarkUnderlineCircleRegular = wrapIcon_1.default( /*#__PURE__*/CheckmarkUnderlineCircleRegularIcon, 'CheckmarkUnderlineCircleRegular');
const ChessFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2a.5.5 0 0 0-.5.5v2.6a3 3 0 0 0 2.2 2.89 16.03 16.03 0 0 1-1.67 6.05c.18.21.36.37.5.49.51.43.97 1.14.97 2.02 0 .54-.18 1.04-.48 1.45H17c.83 0 1.5-.67 1.5-1.5v-.3c0-.35-.12-.68-.3-.94A15.03 15.03 0 0 1 15.8 8 3 3 0 0 0 18 5.1V2.5a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 0v-.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 0v-.75a.75.75 0 0 0-.75-.75h-.75Zm-4 3a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChessFilled = wrapIcon_1.default( /*#__PURE__*/ChessFilledIcon, 'ChessFilled');
const ChessRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a1 1 0 0 1 1-1h.5c.39 0 .74.15 1 .38a1.5 1.5 0 0 1 1-.38h1c.38 0 .73.15 1 .38a1.5 1.5 0 0 1 1-.38h.5a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-1.95 2.44c.28 4.04 1.7 6.58 2.19 7.35.16.25.26.55.26.88v.33c0 .83-.67 1.5-1.5 1.5h-5.48c.22-.3.37-.63.44-1H17a.5.5 0 0 0 .5-.5v-.33c0-.11-.03-.23-.1-.34-.58-.9-2.16-3.78-2.38-8.3a.5.5 0 0 1 .5-.53A1.5 1.5 0 0 0 17 5.5V3h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H11v2.5c0 .82.66 1.49 1.48 1.5a.5.5 0 0 1 .5.52 18.32 18.32 0 0 1-1.76 7.2 2.82 2.82 0 0 0-.2-.2 4.2 4.2 0 0 1-.55-.55 17.38 17.38 0 0 0 1.48-6.03A2.5 2.5 0 0 1 10 5.5V3ZM4.5 8a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.9a.5.5 0 0 0-.5.56 6.86 6.86 0 0 0 2.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 0 1-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 0 0 2.34-4.5.5.5 0 0 0-.5-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8c-.25-.33-.4-.75-.4-1.2Zm2-3a3 3 0 0 0-2.82 4.03A1.5 1.5 0 0 0 4 12h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1.5 1.5 0 0 0 .32-2.97A3 3 0 0 0 6.5 5Z",
    fill: primaryFill
  }));
  ;
};
exports.ChessRegular = wrapIcon_1.default( /*#__PURE__*/ChessRegularIcon, 'ChessRegular');
const ChevronCircleDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4.85-1.85a.5.5 0 1 0-.7.7l3.5 3.5a.5.5 0 0 0 .7 0l3.5-3.5a.5.5 0 0 0-.7-.7L10 11.29 6.85 8.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleDownFilled = wrapIcon_1.default( /*#__PURE__*/ChevronCircleDownFilledIcon, 'ChevronCircleDownFilled');
const ChevronCircleDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM6.85 8.15a.5.5 0 1 0-.7.7l3.5 3.5a.5.5 0 0 0 .7 0l3.5-3.5a.5.5 0 0 0-.7-.7L10 11.29 6.85 8.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleDownRegular = wrapIcon_1.default( /*#__PURE__*/ChevronCircleDownRegularIcon, 'ChevronCircleDownRegular');
const ChevronCircleLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm1.85 4.85a.5.5 0 0 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L8.71 10l3.14-3.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleLeftFilled = wrapIcon_1.default( /*#__PURE__*/ChevronCircleLeftFilledIcon, 'ChevronCircleLeftFilled');
const ChevronCircleLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-6.15-3.15a.5.5 0 0 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L8.71 10l3.14-3.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleLeftRegular = wrapIcon_1.default( /*#__PURE__*/ChevronCircleLeftRegularIcon, 'ChevronCircleLeftRegular');
const ChevronCircleRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1.85-4.85a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5a.5.5 0 1 0-.7.7L11.29 10l-3.14 3.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleRightFilled = wrapIcon_1.default( /*#__PURE__*/ChevronCircleRightFilledIcon, 'ChevronCircleRightFilled');
const ChevronCircleRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-8-7a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm6.15 3.15a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5a.5.5 0 1 0-.7.7L11.29 10l-3.14 3.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleRightRegular = wrapIcon_1.default( /*#__PURE__*/ChevronCircleRightRegularIcon, 'ChevronCircleRightRegular');
const ChevronCircleUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm4.85 1.85a.5.5 0 0 1-.7-.7l3.5-3.5a.5.5 0 0 1 .7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 8.71l-3.15 3.14Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleUpFilled = wrapIcon_1.default( /*#__PURE__*/ChevronCircleUpFilledIcon, 'ChevronCircleUpFilled');
const ChevronCircleUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0Zm7 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-3.15-6.15a.5.5 0 0 1-.7-.7l3.5-3.5a.5.5 0 0 1 .7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 8.71l-3.15 3.14Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronCircleUpRegular = wrapIcon_1.default( /*#__PURE__*/ChevronCircleUpRegularIcon, 'ChevronCircleUpRegular');
const ChevronDoubleDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.8 8.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 13.2l4.73-4.5a.75.75 0 0 1 1.06.02Zm0-4c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 9.2l4.73-4.5a.75.75 0 0 1 1.06.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleDownFilled = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleDownFilledIcon, 'ChevronDoubleDownFilled');
const ChevronDoubleDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.85 8.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 9.35a.5.5 0 1 1 .7-.7L10 13.8l5.15-5.16c.2-.2.5-.2.7 0Zm0-4c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 5.35a.5.5 0 1 1 .7-.7L10 9.8l5.15-5.16c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleDownRegular = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleDownRegularIcon, 'ChevronDoubleDownRegular');
const ChevronDoubleLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L6.8 10l4.5 4.73c.29.3.28.78-.02 1.06Zm4 0a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.09 1.04L10.79 10l4.5 4.73c.3.3.28.78-.02 1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleLeftFilled = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleLeftFilledIcon, 'ChevronDoubleLeftFilled');
const ChevronDoubleLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.35 15.85a.5.5 0 0 1-.7 0L5.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L6.2 10l5.16 5.15c.2.2.2.5 0 .7Zm4 0a.5.5 0 0 1-.7 0L9.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L10.2 10l5.16 5.15c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleLeftRegular = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleLeftRegularIcon, 'ChevronDoubleLeftRegular');
const ChevronDoubleRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 4.2a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L13.2 10l-4.5-4.73a.75.75 0 0 1 .02-1.06Zm-4 0a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L9.2 10l-4.5-4.73a.75.75 0 0 1 .02-1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleRightFilled = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleRightFilledIcon, 'ChevronDoubleRightFilled');
const ChevronDoubleRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L13.8 10 8.65 4.85a.5.5 0 0 1 0-.7Zm-4 0c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L9.8 10 4.65 4.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleRightRegular = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleRightRegularIcon, 'ChevronDoubleRightRegular');
const ChevronDoubleUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.2 15.27a.75.75 0 0 1 .03-1.06l5.25-5a.75.75 0 0 1 1.04 0l5.25 5a.75.75 0 0 1-1.04 1.08L10 10.8l-4.73 4.5a.75.75 0 0 1-1.06-.02Zm0-5a.75.75 0 0 1 .03-1.06l5.25-5a.75.75 0 0 1 1.04 0l5.25 5a.75.75 0 0 1-1.04 1.08L10 5.8l-4.73 4.5a.75.75 0 0 1-1.06-.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleUpFilled = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleUpFilledIcon, 'ChevronDoubleUpFilled');
const ChevronDoubleUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.15 9.65a.5.5 0 0 0 .7.7L10 5.2l5.15 5.16a.5.5 0 1 0 .7-.7L10.4 4.16a.55.55 0 0 0-.78 0L4.15 9.65Zm0 5a.5.5 0 0 0 .7.7L10 10.2l5.15 5.16a.5.5 0 1 0 .7-.7L10.4 9.16a.55.55 0 0 0-.78 0l-5.46 5.49Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDoubleUpRegular = wrapIcon_1.default( /*#__PURE__*/ChevronDoubleUpRegularIcon, 'ChevronDoubleUpRegular');
const ChevronDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.8 7.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 12.2l4.73-4.5a.75.75 0 0 1 1.06.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDownFilled = wrapIcon_1.default( /*#__PURE__*/ChevronDownFilledIcon, 'ChevronDownFilled');
const ChevronDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronDownRegular = wrapIcon_1.default( /*#__PURE__*/ChevronDownRegularIcon, 'ChevronDownRegular');
const ChevronLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronLeftFilled = wrapIcon_1.default( /*#__PURE__*/ChevronLeftFilledIcon, 'ChevronLeftFilled');
const ChevronLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronLeftRegular = wrapIcon_1.default( /*#__PURE__*/ChevronLeftRegularIcon, 'ChevronLeftRegular');
const ChevronRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.73 4.2a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L12.2 10l-4.5-4.73a.75.75 0 0 1 .02-1.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronRightFilled = wrapIcon_1.default( /*#__PURE__*/ChevronRightFilledIcon, 'ChevronRightFilled');
const ChevronRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronRightRegular = wrapIcon_1.default( /*#__PURE__*/ChevronRightRegularIcon, 'ChevronRightRegular');
const ChevronUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.2 12.27a.75.75 0 0 1 .03-1.06l5.25-5a.75.75 0 0 1 1.04 0l5.25 5a.75.75 0 0 1-1.04 1.08L10 7.8l-4.73 4.5a.75.75 0 0 1-1.06-.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronUpFilled = wrapIcon_1.default( /*#__PURE__*/ChevronUpFilledIcon, 'ChevronUpFilled');
const ChevronUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.15 12.35a.5.5 0 0 1 0-.7L9.6 6.16a.55.55 0 0 1 .78 0l5.46 5.49a.5.5 0 0 1-.7.7L10 7.2l-5.15 5.16a.5.5 0 0 1-.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronUpRegular = wrapIcon_1.default( /*#__PURE__*/ChevronUpRegularIcon, 'ChevronUpRegular');
const ChevronUpDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.1 7.3a.75.75 0 0 1-1.13.98L10 4.31 6.03 8.28l-.08.07a.75.75 0 0 1-.98-1.13l4.5-4.5.08-.07c.3-.22.71-.2.98.07l4.5 4.5.07.08ZM4.9 12.7a.75.75 0 0 1 1.13-.98L10 15.69l3.97-3.97.08-.07a.75.75 0 0 1 .98 1.13l-4.5 4.5-.08.07c-.3.22-.71.2-.98-.07l-4.5-4.5-.07-.08Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronUpDownFilled = wrapIcon_1.default( /*#__PURE__*/ChevronUpDownFilledIcon, 'ChevronUpDownFilled');
const ChevronUpDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.91 7.22a.5.5 0 0 1-.76.63L10 3.71 5.85 7.85l-.07.06a.5.5 0 0 1-.63-.76l4.5-4.5.07-.06a.5.5 0 0 1 .63.06l4.5 4.5.06.07ZM5.1 12.78a.5.5 0 0 1 .76-.63L10 16.29l4.15-4.14.07-.06a.5.5 0 0 1 .63.76l-4.5 4.5-.07.06a.5.5 0 0 1-.63-.06l-4.5-4.5-.06-.07Z",
    fill: primaryFill
  }));
  ;
};
exports.ChevronUpDownRegular = wrapIcon_1.default( /*#__PURE__*/ChevronUpDownRegularIcon, 'ChevronUpDownRegular');
const CircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleFilled = wrapIcon_1.default( /*#__PURE__*/CircleFilledIcon, 'CircleFilled');
const CircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleRegular = wrapIcon_1.default( /*#__PURE__*/CircleRegularIcon, 'CircleRegular');
const CircleEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 0-1 15.94c.02-.1.03-.2.06-.29l.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83a2.87 2.87 0 0 1 2.85-.72A8 8 0 0 0 10 2Zm.98 13.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleEditFilled = wrapIcon_1.default( /*#__PURE__*/CircleEditFilledIcon, 'CircleEditFilled');
const CircleEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a7 7 0 0 0-.77 13.96l-.17.7c-.03.09-.04.18-.05.28a8 8 0 1 1 8.94-8.82c-.33-.1-.68-.14-1.02-.11A7 7 0 0 0 10 3Zm.98 12.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleEditRegular = wrapIcon_1.default( /*#__PURE__*/CircleEditRegularIcon, 'CircleEditRegular');
const CircleEraserFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 17.17a2.5 2.5 0 0 1 0-3.53l4.9-4.9a2.5 2.5 0 0 1 3.54 0l.8.8a8 8 0 1 0-8.44 8.44l-.8-.8Zm7.74-7.73 2.1 2.1a1.5 1.5 0 0 1 0 2.12l-3.6 3.6-4.22-4.22 3.6-3.6a1.5 1.5 0 0 1 2.12 0Zm-2.21 8.52-4.22-4.22-.6.6a1.5 1.5 0 0 0 0 2.13l2.1 2.1a1.5 1.5 0 0 0 1.12.43h4.09a.5.5 0 0 0 0-1h-2.53l.04-.04Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleEraserFilled = wrapIcon_1.default( /*#__PURE__*/CircleEraserFilledIcon, 'CircleEraserFilled');
const CircleEraserRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 17.17c-.1-.1-.2-.22-.29-.35A7 7 0 0 1 10 3a7 7 0 0 1 6.82 5.44c.13.09.24.18.35.3l.8.8a8 8 0 1 0-8.43 8.44l-.8-.8Zm.7-.7a1.5 1.5 0 0 1 0-2.13l4.9-4.9a1.5 1.5 0 0 1 2.13 0l2.1 2.1a1.5 1.5 0 0 1 0 2.12L14.22 18h2.53a.5.5 0 0 1 0 1h-4.1a1.5 1.5 0 0 1-1.12-.44l-2.1-2.1Zm5.62-6.32-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.71l-2.1-2.1a.5.5 0 0 0-.7 0Zm-1.5 7.1-2.8-2.8-.6.6a.5.5 0 0 0 0 .71l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleEraserRegular = wrapIcon_1.default( /*#__PURE__*/CircleEraserRegularIcon, 'CircleEraserRegular');
const CircleHalfFillFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.54 9.25h12.92a6.5 6.5 0 0 0-12.92 0ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleHalfFillFilled = wrapIcon_1.default( /*#__PURE__*/CircleHalfFillFilledIcon, 'CircleHalfFillFilled');
const CircleHalfFillRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a7 7 0 0 1 6.98 6.5H3.02A7 7 0 0 1 10 3Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleHalfFillRegular = wrapIcon_1.default( /*#__PURE__*/CircleHalfFillRegularIcon, 'CircleHalfFillRegular');
const CircleImageFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 7h2.48A5.5 5.5 0 1 0 7 12.98V10.5A3.5 3.5 0 0 1 10.5 7Zm0 1A2.5 2.5 0 0 0 8 10.5v5c0 .5.15.98.41 1.38l3.18-3.17a2 2 0 0 1 2.82 0l3.18 3.17c.26-.4.41-.87.41-1.38v-5A2.5 2.5 0 0 0 15.5 8h-5Zm5.5 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.88 6.59L13.7 14.4a1 1 0 0 0-1.42 0L9.12 17.6c.4.26.87.41 1.38.41h5c.5 0 .98-.15 1.38-.41Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleImageFilled = wrapIcon_1.default( /*#__PURE__*/CircleImageFilledIcon, 'CircleImageFilled');
const CircleImageRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 3a4.5 4.5 0 0 0-.5 8.97v1A5.5 5.5 0 1 1 12.98 7h-1A4.5 4.5 0 0 0 7.5 3Zm8.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5.5-3A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5ZM9 10.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .23-.05.45-.15.65l-2.44-2.44a2 2 0 0 0-2.82 0l-2.44 2.44A1.5 1.5 0 0 1 9 15.5v-5Zm.85 6.35 2.44-2.44a1 1 0 0 1 1.42 0l2.44 2.44c-.2.1-.42.15-.65.15h-5a1.5 1.5 0 0 1-.65-.15Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleImageRegular = wrapIcon_1.default( /*#__PURE__*/CircleImageRegularIcon, 'CircleImageRegular');
const CircleLineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.98 10.5H2.02a8 8 0 0 0 15.96 0Zm0-1H2.02a8 8 0 0 1 15.96 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleLineFilled = wrapIcon_1.default( /*#__PURE__*/CircleLineFilledIcon, 'CircleLineFilled');
const CircleLineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.02 9.5h13.96a7 7 0 0 0-13.96 0ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm14.98.5H3.02a7 7 0 0 0 13.96 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleLineRegular = wrapIcon_1.default( /*#__PURE__*/CircleLineRegularIcon, 'CircleLineRegular');
const CircleMultipleSubtractCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.92 6A7 7 0 0 0 6 12.92 6 6 0 1 1 12.92 6Zm-3.8 0H4.5a.5.5 0 0 0 0 1h3.2c.44-.38.92-.72 1.42-1ZM19 13a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-3.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleMultipleSubtractCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/CircleMultipleSubtractCheckmarkFilledIcon, 'CircleMultipleSubtractCheckmarkFilled');
const CircleMultipleSubtractCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2a5 5 0 0 1 4.92 4.08c.32-.05.66-.08 1-.08A6 6 0 1 0 6 12.92c0-.34.03-.68.08-1A5 5 0 0 1 7 2ZM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm11.35 5.85a.5.5 0 0 0-.7-.7l-2.65 2.64-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3ZM13 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-1a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleMultipleSubtractCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/CircleMultipleSubtractCheckmarkRegularIcon, 'CircleMultipleSubtractCheckmarkRegular');
const CircleOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m15.3 16 1.85 1.85a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71A8 8 0 0 0 15.3 16Zm2.7-6c0 1.67-.51 3.21-1.38 4.5L5.5 3.38A8 8 0 0 1 18 10Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleOffFilled = wrapIcon_1.default( /*#__PURE__*/CircleOffFilledIcon, 'CircleOffFilled');
const CircleOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L15.29 16A8 8 0 0 1 4 4.7Zm10.58 10.6L4.71 5.41a7 7 0 0 0 9.87 9.87ZM17 10c0 1.39-.4 2.69-1.1 3.77l.72.73A8 8 0 0 0 5.5 3.39l.72.71A7 7 0 0 1 17 10Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleOffRegular = wrapIcon_1.default( /*#__PURE__*/CircleOffRegularIcon, 'CircleOffRegular');
const CircleSmallFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleSmallFilled = wrapIcon_1.default( /*#__PURE__*/CircleSmallFilledIcon, 'CircleSmallFilled');
const CircleSmallRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: primaryFill
  }));
  ;
};
exports.CircleSmallRegular = wrapIcon_1.default( /*#__PURE__*/CircleSmallRegularIcon, 'CircleSmallRegular');
const CityFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5v2.55a2.5 2.5 0 0 0-2 2.45V18h-2V8a2 2 0 0 0-2-2v-.5C8 4.67 8.67 4 9.5 4h1V2.5c0-.28.22-.5.5-.5ZM8.64 7.24c-.28-.2-.48-.2-.64-.15a.77.77 0 0 0-.14.06L4.73 9.03A1.5 1.5 0 0 0 4 10.32v6.18c0 .83.67 1.5 1.5 1.5H9V8a1 1 0 0 0-.36-.76ZM15.5 9h-1c-.83 0-1.5.68-1.5 1.5V18h3.5c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-1Z",
    fill: primaryFill
  }));
  ;
};
exports.CityFilled = wrapIcon_1.default( /*#__PURE__*/CityFilledIcon, 'CityFilled');
const CityRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5V9h2.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-6.18c0-.53.28-1.02.73-1.29l3-1.8c.09-.05.18-.1.27-.13V5.5C7 4.67 7.67 4 8.5 4h1V2.5c0-.28.22-.5.5-.5ZM8 7.1c.56.2 1 .73 1 1.42V17h2v-6.5c0-.65.42-1.2 1-1.41V5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1.6Zm4.5 2.9a.5.5 0 0 0-.5.5V17h3.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3ZM7.24 8.09l-3 1.8a.5.5 0 0 0-.24.43v6.18c0 .28.22.5.5.5H8V8.52a.5.5 0 0 0-.76-.43Z",
    fill: primaryFill
  }));
  ;
};
exports.CityRegular = wrapIcon_1.default( /*#__PURE__*/CityRegularIcon, 'CityRegular');
const ClassFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3v6.5a.5.5 0 0 1-.8.4L8.5 7.62 6.8 8.9a.5.5 0 0 1-.8-.4V2Zm4 0H7v5.5l1.2-.9a.5.5 0 0 1 .6 0l1.2.9V2Z",
    fill: primaryFill
  }));
  ;
};
exports.ClassFilled = wrapIcon_1.default( /*#__PURE__*/ClassFilledIcon, 'ClassFilled');
const ClassRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 1 1-1.73V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2-2v6.5a.5.5 0 0 0 .8.4l1.7-1.28 1.7 1.28a.5.5 0 0 0 .8-.4V2H6Zm1 5.5V3h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0L7 7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClassRegular = wrapIcon_1.default( /*#__PURE__*/ClassRegularIcon, 'ClassRegular');
const ClassificationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.57 16.48a1 1 0 0 1-1.42 0L3.5 10.82a1 1 0 0 1 0-1.41l1.42-1.42-.08-.1a1 1 0 0 1 .08-1.31L6.68 4.8a2.5 2.5 0 0 1 3.53 0l1.31 1.31 1.44-2.41a2.44 2.44 0 0 1 3.83-.48 2.42 2.42 0 0 1-.5 3.8l-2.43 1.42 1.3 1.31a2.5 2.5 0 0 1 0 3.54l-1.77 1.76a1 1 0 0 1-1.41 0l-1.41 1.42ZM5.62 8.7 4.2 10.1l5.66 5.66 1.41-1.41L5.62 8.7Zm8.2-4.48-1.56 2.63.87.87 2.66-1.55a1.43 1.43 0 0 0 .01-2.46 1.44 1.44 0 0 0-1.98.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClassificationFilled = wrapIcon_1.default( /*#__PURE__*/ClassificationFilledIcon, 'ClassificationFilled');
const ClassificationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.31 2.85a2.42 2.42 0 0 1-.02 4.18l-2.43 1.42 1.3 1.31a2.5 2.5 0 0 1 0 3.54l-1.77 1.76a1 1 0 0 1-1.41 0l-1.41 1.42a1 1 0 0 1-1.42 0L3.5 10.82a1 1 0 0 1 0-1.41l1.42-1.42-.08-.1a1 1 0 0 1 .08-1.31L6.68 4.8a2.5 2.5 0 0 1 3.53 0l1.31 1.31 1.44-2.41a2.44 2.44 0 0 1 3.35-.86ZM5.61 8.7l-1.4 1.41 5.65 5.66 1.41-1.41L5.62 8.7Zm1.77-3.18L5.62 7.28l7.07 7.08 1.76-1.77a1.5 1.5 0 0 0 0-2.12l-1.7-1.71-.04-.03-1.44-1.44-.05-.06L9.5 5.52a1.5 1.5 0 0 0-2.12 0Zm6.44-1.3-1.56 2.63.87.87 2.66-1.55a1.43 1.43 0 0 0 .01-2.46 1.44 1.44 0 0 0-1.98.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClassificationRegular = wrapIcon_1.default( /*#__PURE__*/ClassificationRegularIcon, 'ClassificationRegular');
const ClearFormattingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.47 3c-.38 0-.7.28-.75.65l-.13 1a.75.75 0 1 0 1.49.2l.04-.35H7.9l-1.57 9h-.58a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.4l1.57-9h2.69l-.02.16a.75.75 0 1 0 1.48.2l.14-1.01a.75.75 0 0 0-.75-.85h-8.5ZM2.75 15.5a.75.75 0 0 0 0 1.5H9.6a5.46 5.46 0 0 1-.5-1.5H2.74Zm16.25-1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ClearFormattingFilled = wrapIcon_1.default( /*#__PURE__*/ClearFormattingFilledIcon, 'ClearFormattingFilled');
const ClearFormattingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.25 3a.5.5 0 0 0-.5.42l-.24 1.5a.5.5 0 0 0 .98.16L4.67 4h3.57l-1.73 9.91a.5.5 0 0 0-.01.09h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1l1.74-9.91A.5.5 0 0 0 9.25 4h3.41l-.15.92a.5.5 0 1 0 .98.16l.25-1.5a.5.5 0 0 0-.49-.58h-9ZM9.6 17c-.16-.32-.3-.65-.4-1H2.5a.5.5 0 0 0 0 1h7.1Zm9.4-2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
  ;
};
exports.ClearFormattingRegular = wrapIcon_1.default( /*#__PURE__*/ClearFormattingRegularIcon, 'ClearFormattingRegular');
const ClipboardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardFilledIcon, 'ClipboardFilled');
const ClipboardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardRegularIcon, 'ClipboardRegular');
const Clipboard3DayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-1 11v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0Zm5.5.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5Zm-3-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Clipboard3DayFilled = wrapIcon_1.default( /*#__PURE__*/Clipboard3DayFilledIcon, 'Clipboard3DayFilled');
const Clipboard3DayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 14.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-1 0v6Zm5.5.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5Zm-3-.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-1 0v6ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.Clipboard3DayRegular = wrapIcon_1.default( /*#__PURE__*/Clipboard3DayRegularIcon, 'Clipboard3DayRegular');
const ClipboardArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRightFilledIcon, 'ClipboardArrowRightFilled');
const ClipboardArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRightRegularIcon, 'ClipboardArrowRightRegular');
const ClipboardBulletListLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1ZM8.5 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1-6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardBulletListLtrFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtrFilledIcon, 'ClipboardBulletListLtrFilled');
const ClipboardBulletListLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1-6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardBulletListLtrRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtrRegularIcon, 'ClipboardBulletListLtrRegular');
const ClipboardBulletListRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1ZM8 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm4.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 14.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardBulletListRtlFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtlFilledIcon, 'ClipboardBulletListRtlFilled');
const ClipboardBulletListRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.75 9.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 14.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardBulletListRtlRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtlRegularIcon, 'ClipboardBulletListRtlRegular');
const ClipboardCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmarkFilledIcon, 'ClipboardCheckmarkFilled');
const ClipboardCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmarkRegularIcon, 'ClipboardCheckmarkRegular');
const ClipboardClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 9.5a.5.5 0 0 0-1 0V11c0 .28.22.5.5.5h1.5a.5.5 0 0 0 0-1h-1v-1ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardClockFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardClockFilledIcon, 'ClipboardClockFilled');
const ClipboardClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 9.5a.5.5 0 0 0-1 0V11c0 .28.22.5.5.5h1.5a.5.5 0 0 0 0-1h-1v-1ZM10 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardClockRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardClockRegularIcon, 'ClipboardClockRegular');
const ClipboardCodeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-2.44.71l-.4 1.41h-.74a1.5 1.5 0 0 0-2.55-.48l-1.5 1.75a1.5 1.5 0 0 0 0 1.95l1.5 1.75c.29.35.7.53 1.13.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2.88 10.32a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 0 0 .7.06.5.5 0 0 0 .06-.71l-1.22-1.42 1.22-1.43Zm4.1-1.68a.5.5 0 1 0-.96-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm1.2 5.24a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardCodeFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardCodeFilledIcon, 'ClipboardCodeFilled');
const ClipboardCodeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-1-.38V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.96l.4.47c.3.35.72.53 1.14.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm6.99 8.64a.5.5 0 1 0-.97-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm-4.11 1.68a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 1 0 .76-.65l-1.22-1.42 1.22-1.43Zm5.3 3.56a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardCodeRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardCodeRegularIcon, 'ClipboardCodeRegular');
const ClipboardDataBarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 8.5v2.5a.5.5 0 0 1-1 0V12a.5.5 0 0 1 1 0Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardDataBarFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBarFilledIcon, 'ClipboardDataBarFilled');
const ClipboardDataBarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm7.5 8a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0V12Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardDataBarRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBarRegularIcon, 'ClipboardDataBarRegular');
const ClipboardDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 11h4v3H8v-3Zm-.91-8c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 7.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM7 11v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardDayFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardDayFilledIcon, 'ClipboardDayFilled');
const ClipboardDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 7.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3Zm1 0v3h4v-3H8Zm-.91-8c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardDayRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardDayRegularIcon, 'ClipboardDayRegular');
const ClipboardEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H8l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83c.53-.53 1.21-.8 1.9-.84V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardEditFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardEditFilledIcon, 'ClipboardEditFilled');
const ClipboardEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H8l.06-.35.16-.65H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v4.73c.32-.14.66-.21 1-.23V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardEditRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardEditRegularIcon, 'ClipboardEditRegular');
const ClipboardErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardErrorFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardErrorFilledIcon, 'ClipboardErrorFilled');
const ClipboardErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardErrorRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardErrorRegularIcon, 'ClipboardErrorRegular');
const ClipboardHeartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.7.03-1.4.25-2 .66a3.85 3.85 0 0 0-4.87 5.91L11.55 18H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.15 15.68a.5.5 0 0 0 .7 0l3.82-3.81a2.85 2.85 0 1 0-4.03-4.04l-.14.14-.13-.14a2.85 2.85 0 1 0-4.04 4.04l3.82 3.81Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardHeartFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardHeartFilledIcon, 'ClipboardHeartFilled');
const ClipboardHeartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.34.02-.67.07-1 .18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h5.05l1 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.33 7.83a2.85 2.85 0 0 1 4.04 0l.13.14.14-.14a2.85 2.85 0 0 1 4.03 4.04l-3.81 3.81a.5.5 0 0 1-.71 0l-3.82-3.81a2.85 2.85 0 0 1 0-4.04Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardHeartRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardHeartRegularIcon, 'ClipboardHeartRegular');
const ClipboardImageFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9h-3.5A3.5 3.5 0 0 0 9 12.5v4c0 .54.12 1.05.34 1.5H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.5 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardImageFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardImageFilledIcon, 'ClipboardImageFilled');
const ClipboardImageRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.54c.05.35.15.69.3 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.5 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardImageRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardImageRegularIcon, 'ClipboardImageRegular');
const ClipboardLetterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.59a1.5 1.5 0 0 1 .04-1.1l3.5-8a1.5 1.5 0 0 1 2.74 0l.63 1.44V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm2.95 6.3a.5.5 0 0 0-.91 0l-3.5 8a.5.5 0 1 0 .92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 0 0 .92-.4l-3.5-8Zm.97 4.7h-2.84L14 10.75 15.42 14Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardLetterFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardLetterFilledIcon, 'ClipboardLetterFilled');
const ClipboardLetterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.84l-.63-1.44a1.5 1.5 0 0 0-.37-.51V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.59a1.5 1.5 0 0 0 0 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.95 6.3a.5.5 0 0 0-.91 0l-3.5 8a.5.5 0 0 0 .92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 0 0 .92-.4l-3.5-8Zm.97 4.7h-2.85L14 10.75 15.42 14Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardLetterRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardLetterRegularIcon, 'ClipboardLetterRegular');
const ClipboardLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-3.5a4.5 4.5 0 0 0-3.74 7H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardLinkFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardLinkFilledIcon, 'ClipboardLinkFilled');
const ClipboardLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h2.76c.12.36.3.7.5 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardLinkRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardLinkRegularIcon, 'ClipboardLinkRegular');
const ClipboardMonthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardMonthFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardMonthFilledIcon, 'ClipboardMonthFilled');
const ClipboardMonthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardMonthRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardMonthRegularIcon, 'ClipboardMonthRegular');
const ClipboardMoreFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v10.48c-.43.22-.78.56-1 .99a2.25 2.25 0 0 0-4 0A2.25 2.25 0 0 0 6.98 18H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.75 14a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardMoreFilled = wrapIcon_1.default( /*#__PURE__*/ClipboardMoreFilledIcon, 'ClipboardMoreFilled');
const ClipboardMoreRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v10.48c-.43.22-.78.56-1 .99V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1.25c0 .36.08.7.23 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.75 14a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ClipboardMoreRegular = wrapIcon_1.default( /*#__PURE__*/ClipboardMoreRegularIcon, 'ClipboardMoreRegular');