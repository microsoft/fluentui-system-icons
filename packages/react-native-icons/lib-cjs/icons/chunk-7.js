"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabletFilled = exports.TableSwitchRegular = exports.TableSwitchFilled = exports.TableStackRightRegular = exports.TableStackRightFilled = exports.TableStackLeftRegular = exports.TableStackLeftFilled = exports.TableStackBelowRegular = exports.TableStackBelowFilled = exports.TableStackAboveRegular = exports.TableStackAboveFilled = exports.TableSplitRegular = exports.TableSplitFilled = exports.TableSimpleCheckmarkRegular = exports.TableSimpleCheckmarkFilled = exports.TableSimpleRegular = exports.TableSimpleFilled = exports.TableSettingsRegular = exports.TableSettingsFilled = exports.TableSearchRegular = exports.TableSearchFilled = exports.TableResizeRowRegular = exports.TableResizeRowFilled = exports.TableResizeColumnRegular = exports.TableResizeColumnFilled = exports.TableMultipleRegular = exports.TableMultipleFilled = exports.TableMoveRightRegular = exports.TableMoveRightFilled = exports.TableMoveLeftRegular = exports.TableMoveLeftFilled = exports.TableMoveBelowRegular = exports.TableMoveBelowFilled = exports.TableMoveAboveRegular = exports.TableMoveAboveFilled = exports.TableLockRegular = exports.TableLockFilled = exports.TableLinkRegular = exports.TableLinkFilled = exports.TableLightningRegular = exports.TableLightningFilled = exports.TableInsertRowRegular = exports.TableInsertRowFilled = exports.TableInsertColumnRegular = exports.TableInsertColumnFilled = exports.TableImageRegular = exports.TableImageFilled = exports.TableFreezeRowRegular = exports.TableFreezeRowFilled = exports.TableFreezeColumnAndRowRegular = void 0;
exports.TaskListSquarePersonRegular = exports.TaskListSquarePersonFilled = exports.TaskListSquareLtrRegular = exports.TaskListSquareLtrFilled = exports.TaskListSquareDatabaseRegular = exports.TaskListSquareDatabaseFilled = exports.TaskListSquareAddRegular = exports.TaskListSquareAddFilled = exports.TaskListRtlRegular = exports.TaskListRtlFilled = exports.TaskListLtrRegular = exports.TaskListLtrFilled = exports.TaskListAddRegular = exports.TaskListAddFilled = exports.TargetEditRegular = exports.TargetEditFilled = exports.TargetArrowRegular = exports.TargetArrowFilled = exports.TargetRegular = exports.TargetFilled = exports.TapSingleRegular = exports.TapSingleFilled = exports.TapDoubleRegular = exports.TapDoubleFilled = exports.TagSearchRegular = exports.TagSearchFilled = exports.TagResetRegular = exports.TagResetFilled = exports.TagQuestionMarkRegular = exports.TagQuestionMarkFilled = exports.TagOffRegular = exports.TagOffFilled = exports.TagMultipleRegular = exports.TagMultipleFilled = exports.TagLockAccentFilled = exports.TagLockRegular = exports.TagLockFilled = exports.TagErrorRegular = exports.TagErrorFilled = exports.TagDismissRegular = exports.TagDismissFilled = exports.TagCircleRegular = exports.TagCircleFilled = exports.TagRegular = exports.TagFilled = exports.TabsRegular = exports.TabsFilled = exports.TabletSpeakerRegular = exports.TabletSpeakerFilled = exports.TabletRegular = void 0;
exports.TextAlignLeftRotate90Regular = exports.TextAlignLeftRotate90Filled = exports.TextAlignLeftRotate270Regular = exports.TextAlignLeftRotate270Filled = exports.TextAlignLeftRegular = exports.TextAlignLeftFilled = exports.TextAlignJustifyRotate90Regular = exports.TextAlignJustifyRotate90Filled = exports.TextAlignJustifyRotate270Regular = exports.TextAlignJustifyRotate270Filled = exports.TextAlignJustifyLowRotate90Regular = exports.TextAlignJustifyLowRotate90Filled = exports.TextAlignJustifyLowRotate270Regular = exports.TextAlignJustifyLowRotate270Filled = exports.TextAlignJustifyLowRegular = exports.TextAlignJustifyLowFilled = exports.TextAlignJustifyRegular = exports.TextAlignJustifyFilled = exports.TextAlignDistributedVerticalRegular = exports.TextAlignDistributedVerticalFilled = exports.TextAlignDistributedEvenlyRegular = exports.TextAlignDistributedEvenlyFilled = exports.TextAlignDistributedRegular = exports.TextAlignDistributedFilled = exports.TextAlignCenterRotate90Regular = exports.TextAlignCenterRotate90Filled = exports.TextAlignCenterRotate270Regular = exports.TextAlignCenterRotate270Filled = exports.TextAlignCenterRegular = exports.TextAlignCenterFilled = exports.TextAddSpaceBeforeRegular = exports.TextAddSpaceBeforeFilled = exports.TextAddSpaceAfterRegular = exports.TextAddSpaceAfterFilled = exports.TextAddRegular = exports.TextAddFilled = exports.TetrisAppRegular = exports.TetrisAppFilled = exports.TentRegular = exports.TentFilled = exports.TemperatureRegular = exports.TemperatureFilled = exports.TeddyRegular = exports.TeddyFilled = exports.TasksAppRegular = exports.TasksAppFilled = exports.TaskListSquareSettingsRegular = exports.TaskListSquareSettingsFilled = exports.TaskListSquareRtlRegular = exports.TaskListSquareRtlFilled = void 0;
exports.TextBulletListSquareWarningRegular = exports.TextBulletListSquareWarningFilled = exports.TextBulletListSquareToolboxRegular = exports.TextBulletListSquareToolboxFilled = exports.TextBulletListSquareShieldRegular = exports.TextBulletListSquareShieldFilled = exports.TextBulletListSquareSettingsRegular = exports.TextBulletListSquareSettingsFilled = exports.TextBulletListSquareSearchRegular = exports.TextBulletListSquareSearchFilled = exports.TextBulletListSquarePersonRegular = exports.TextBulletListSquarePersonFilled = exports.TextBulletListSquareEditRegular = exports.TextBulletListSquareEditFilled = exports.TextBulletListSquareClockRegular = exports.TextBulletListSquareClockFilled = exports.TextBulletListSquareRegular = exports.TextBulletListSquareFilled = exports.TextBulletListRtlRotate90Regular = exports.TextBulletListRtlRotate90Filled = exports.TextBulletListRtlRegular = exports.TextBulletListRtlFilled = exports.TextBulletListRotate90Regular = exports.TextBulletListRotate90Filled = exports.TextBulletListRotate270Regular = exports.TextBulletListRotate270Filled = exports.TextBulletListLtrRotate90Regular = exports.TextBulletListLtrRotate90Filled = exports.TextBulletListLtrRegular = exports.TextBulletListLtrFilled = exports.TextBulletListDismissRegular = exports.TextBulletListDismissFilled = exports.TextBulletListCheckmarkRegular = exports.TextBulletListCheckmarkFilled = exports.TextBulletListAddRegular = exports.TextBulletListAddFilled = exports.TextBoxSettingsRegular = exports.TextBoxSettingsFilled = exports.TextBoldRegular = exports.TextBoldFilled = exports.TextBaselineRegular = exports.TextBaselineFilled = exports.TextAsteriskRegular = exports.TextAsteriskFilled = exports.TextAlignRightRotate90Regular = exports.TextAlignRightRotate90Filled = exports.TextAlignRightRotate270Regular = exports.TextAlignRightRotate270Filled = exports.TextAlignRightRegular = exports.TextAlignRightFilled = void 0;
exports.TextDirectionRotate90LeftFilled = exports.TextDirectionRotate270RightRegular = exports.TextDirectionRotate270RightFilled = exports.TextDirectionHorizontalRtlRegular = exports.TextDirectionHorizontalRtlFilled = exports.TextDirectionHorizontalRightRegular = exports.TextDirectionHorizontalRightFilled = exports.TextDirectionHorizontalLtrRegular = exports.TextDirectionHorizontalLtrFilled = exports.TextDirectionHorizontalLeftRegular = exports.TextDirectionHorizontalLeftFilled = exports.TextDescriptionRegular = exports.TextDescriptionFilled = exports.TextDensityRegular = exports.TextDensityFilled = exports.TextContinuousRegular = exports.TextContinuousFilled = exports.TextColumnTwoRightRegular = exports.TextColumnTwoRightFilled = exports.TextColumnTwoLeftRegular = exports.TextColumnTwoLeftFilled = exports.TextColumnTwoRegular = exports.TextColumnTwoFilled = exports.TextColumnThreeRegular = exports.TextColumnThreeFilled = exports.TextColumnOneWideLightningRegular = exports.TextColumnOneWideLightningFilled = exports.TextColumnOneWideRegular = exports.TextColumnOneWideFilled = exports.TextColumnOneNarrowRegular = exports.TextColumnOneNarrowFilled = exports.TextColumnOneRegular = exports.TextColumnOneFilled = exports.TextColorAccentFilled = exports.TextColorRegular = exports.TextColorFilled = exports.TextCollapseRegular = exports.TextCollapseFilled = exports.TextClearFormattingRegular = exports.TextClearFormattingFilled = exports.TextChangeCaseRegular = exports.TextChangeCaseFilled = exports.TextCaseUppercaseRegular = exports.TextCaseUppercaseFilled = exports.TextCaseTitleRegular = exports.TextCaseTitleFilled = exports.TextCaseLowercaseRegular = exports.TextCaseLowercaseFilled = exports.TextBulletListTreeRegular = exports.TextBulletListTreeFilled = void 0;
exports.TextIndentDecreaseLtrFilled = exports.TextHeader3Regular = exports.TextHeader3Filled = exports.TextHeader2Regular = exports.TextHeader2Filled = exports.TextHeader1Regular = exports.TextHeader1Filled = exports.TextHangingRegular = exports.TextHangingFilled = exports.TextGrammarWandRegular = exports.TextGrammarWandFilled = exports.TextGrammarSettingsRegular = exports.TextGrammarSettingsFilled = exports.TextGrammarErrorRegular = exports.TextGrammarErrorFilled = exports.TextGrammarDismissRegular = exports.TextGrammarDismissFilled = exports.TextGrammarCheckmarkRegular = exports.TextGrammarCheckmarkFilled = exports.TextGrammarArrowRightRegular = exports.TextGrammarArrowRightFilled = exports.TextGrammarArrowLeftRegular = exports.TextGrammarArrowLeftFilled = exports.TextFootnoteRegular = exports.TextFootnoteFilled = exports.TextFontSizeRegular = exports.TextFontSizeFilled = exports.TextFontInfoRegular = exports.TextFontInfoFilled = exports.TextFontRegular = exports.TextFontFilled = exports.TextFirstLineRegular = exports.TextFirstLineFilled = exports.TextFieldRegular = exports.TextFieldFilled = exports.TextExpandRegular = exports.TextExpandFilled = exports.TextEffectsRegular = exports.TextEffectsFilled = exports.TextEditStyleRegular = exports.TextEditStyleFilled = exports.TextDirectionVerticalRegular = exports.TextDirectionVerticalFilled = exports.TextDirectionRotate90RtlRegular = exports.TextDirectionRotate90RtlFilled = exports.TextDirectionRotate90RightRegular = exports.TextDirectionRotate90RightFilled = exports.TextDirectionRotate90LtrRegular = exports.TextDirectionRotate90LtrFilled = exports.TextDirectionRotate90LeftRegular = void 0;
exports.TextPositionThroughFilled = exports.TextPositionSquareRegular = exports.TextPositionSquareFilled = exports.TextPositionLineRegular = exports.TextPositionLineFilled = exports.TextPositionFrontRegular = exports.TextPositionFrontFilled = exports.TextPositionBehindRegular = exports.TextPositionBehindFilled = exports.TextPeriodAsteriskRegular = exports.TextPeriodAsteriskFilled = exports.TextParagraphDirectionRightRegular = exports.TextParagraphDirectionRightFilled = exports.TextParagraphDirectionLeftRegular = exports.TextParagraphDirectionLeftFilled = exports.TextParagraphDirectionRegular = exports.TextParagraphDirectionFilled = exports.TextParagraphRegular = exports.TextParagraphFilled = exports.TextNumberListRtlRegular = exports.TextNumberListRtlFilled = exports.TextNumberListRotate90Regular = exports.TextNumberListRotate90Filled = exports.TextNumberListRotate270Regular = exports.TextNumberListRotate270Filled = exports.TextNumberListLtrRegular = exports.TextNumberListLtrFilled = exports.TextNumberFormatRegular = exports.TextNumberFormatFilled = exports.TextMoreRegular = exports.TextMoreFilled = exports.TextLineSpacingRegular = exports.TextLineSpacingFilled = exports.TextItalicRegular = exports.TextItalicFilled = exports.TextIndentIncreaseRtlRegular = exports.TextIndentIncreaseRtlFilled = exports.TextIndentIncreaseRotate90Regular = exports.TextIndentIncreaseRotate90Filled = exports.TextIndentIncreaseRotate270Regular = exports.TextIndentIncreaseRotate270Filled = exports.TextIndentIncreaseLtrRegular = exports.TextIndentIncreaseLtrFilled = exports.TextIndentDecreaseRtlRegular = exports.TextIndentDecreaseRtlFilled = exports.TextIndentDecreaseRotate90Regular = exports.TextIndentDecreaseRotate90Filled = exports.TextIndentDecreaseRotate270Regular = exports.TextIndentDecreaseRotate270Filled = exports.TextIndentDecreaseLtrRegular = void 0;
exports.TextboxMoreFilled = exports.TextboxAlignTopRotate90Regular = exports.TextboxAlignTopRotate90Filled = exports.TextboxAlignTopRegular = exports.TextboxAlignTopFilled = exports.TextboxAlignMiddleRotate90Regular = exports.TextboxAlignMiddleRotate90Filled = exports.TextboxAlignMiddleRegular = exports.TextboxAlignMiddleFilled = exports.TextboxAlignCenterRegular = exports.TextboxAlignCenterFilled = exports.TextboxAlignBottomRotate90Regular = exports.TextboxAlignBottomRotate90Filled = exports.TextboxAlignBottomRegular = exports.TextboxAlignBottomFilled = exports.TextboxRegular = exports.TextboxFilled = exports.TextWrapOffRegular = exports.TextWrapOffFilled = exports.TextWrapRegular = exports.TextWrapFilled = exports.TextWordCountRegular = exports.TextWordCountFilled = exports.TextWholeWordRegular = exports.TextWholeWordFilled = exports.TextUnderlineDoubleRegular = exports.TextUnderlineDoubleFilled = exports.TextUnderlineRegular = exports.TextUnderlineFilled = exports.TextTRegular = exports.TextTFilled = exports.TextSuperscriptRegular = exports.TextSuperscriptFilled = exports.TextSubscriptRegular = exports.TextSubscriptFilled = exports.TextStrikethroughRegular = exports.TextStrikethroughFilled = exports.TextSortDescendingRegular = exports.TextSortDescendingFilled = exports.TextSortAscendingRegular = exports.TextSortAscendingFilled = exports.TextQuoteRegular = exports.TextQuoteFilled = exports.TextProofingToolsRegular = exports.TextProofingToolsFilled = exports.TextPositionTopBottomRegular = exports.TextPositionTopBottomFilled = exports.TextPositionTightRegular = exports.TextPositionTightFilled = exports.TextPositionThroughRegular = void 0;
exports.TreeDeciduousFilled = exports.TrayItemRemoveRegular = exports.TrayItemRemoveFilled = exports.TrayItemAddRegular = exports.TrayItemAddFilled = exports.TransmissionRegular = exports.TransmissionFilled = exports.TranslateRegular = exports.TranslateFilled = exports.TopSpeedRegular = exports.TopSpeedFilled = exports.TooltipQuoteRegular = exports.TooltipQuoteFilled = exports.ToolboxRegular = exports.ToolboxFilled = exports.ToggleRightRegular = exports.ToggleRightFilled = exports.ToggleMultipleRegular = exports.ToggleMultipleFilled = exports.ToggleLeftRegular = exports.ToggleLeftFilled = exports.TimerOffRegular = exports.TimerOffFilled = exports.Timer3Regular = exports.Timer3Filled = exports.Timer2Regular = exports.Timer2Filled = exports.TimerRegular = exports.TimerFilled = exports.Timer10Regular = exports.Timer10Filled = exports.TimelineRegular = exports.TimelineFilled = exports.TimePickerRegular = exports.TimePickerFilled = exports.TimeAndWeatherRegular = exports.TimeAndWeatherFilled = exports.TicketHorizontalRegular = exports.TicketHorizontalFilled = exports.TicketDiagonalRegular = exports.TicketDiagonalFilled = exports.ThumbLikeRegular = exports.ThumbLikeFilled = exports.ThumbDislikeRegular = exports.ThumbDislikeFilled = exports.ThinkingRegular = exports.ThinkingFilled = exports.TextboxRotate90Regular = exports.TextboxRotate90Filled = exports.TextboxMoreRegular = void 0;
exports.VehicleCarProfileRtlFilled = exports.VehicleCarProfileLtrClockRegular = exports.VehicleCarProfileLtrClockFilled = exports.VehicleCarProfileLtrRegular = exports.VehicleCarProfileLtrFilled = exports.VehicleCarParkingRegular = exports.VehicleCarParkingFilled = exports.VehicleCarCollisionRegular = exports.VehicleCarCollisionFilled = exports.VehicleCarRegular = exports.VehicleCarFilled = exports.VehicleCabRegular = exports.VehicleCabFilled = exports.VehicleBusRegular = exports.VehicleBusFilled = exports.VehicleBicycleRegular = exports.VehicleBicycleFilled = exports.VaultRegular = exports.VaultFilled = exports.UsbStickRegular = exports.UsbStickFilled = exports.UsbPlugRegular = exports.UsbPlugFilled = exports.UninstallAppRegular = exports.UninstallAppFilled = exports.UmbrellaRegular = exports.UmbrellaFilled = exports.TvUsbRegular = exports.TvUsbFilled = exports.TvArrowRightRegular = exports.TvArrowRightFilled = exports.TvRegular = exports.TvFilled = exports.TrophyOffRegular = exports.TrophyOffFilled = exports.TrophyLockRegular = exports.TrophyLockFilled = exports.TrophyRegular = exports.TrophyFilled = exports.TriangleRightRegular = exports.TriangleRightFilled = exports.TriangleLeftRegular = exports.TriangleLeftFilled = exports.TriangleDownRegular = exports.TriangleDownFilled = exports.TriangleRegular = exports.TriangleFilled = exports.TreeEvergreenRegular = exports.TreeEvergreenFilled = exports.TreeDeciduousRegular = void 0;

const tslib_1 = require("tslib");

const React = tslib_1.__importStar(require("react"));

const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));

const TableFreezeColumnAndRowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM4 8v4h3V8H4Zm0 5v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-1h4V8H8v4Zm4 4v-3H8v3h4ZM4 5.5V7h9v9h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36v.14Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRowRegular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRowRegularIcon, 'TableFreezeColumnAndRowRegular');

const TableFreezeRowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 4c.83 0 1.5.67 1.5 1.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9ZM3 14.5V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5Zm9-1.5H8v4h4v-4ZM8 8v4h4V8H8Zm5 9v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRowFilled = wrapIcon_1.default( /*#__PURE__*/TableFreezeRowFilledIcon, 'TableFreezeRowFilled');

const TableFreezeRowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9ZM4 12V8h3v4H4Zm12-5H4V5.36A1.5 1.5 0 0 1 5.5 4h9.14A1.5 1.5 0 0 1 16 5.5V7ZM8 8h4v4H8V8Zm-4 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm4-5v4h-3V8h3Zm0 5V14.64A1.5 1.5 0 0 1 14.5 16H13v-3h3Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRowRegular = wrapIcon_1.default( /*#__PURE__*/TableFreezeRowRegularIcon, 'TableFreezeRowRegular');

const TableImageFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 9c.17 0 .34.01.5.04V8h-4v1h3.5ZM9 16.5V13H8v4h1.04a3.53 3.53 0 0 1-.04-.5Zm.04-4.5A3.5 3.5 0 0 1 12 9.04V8H8v4h1.04ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.TableImageFilled = wrapIcon_1.default( /*#__PURE__*/TableImageFilledIcon, 'TableImageFilled');

const TableImageRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.54a3.53 3.53 0 0 1-.04-.5V16H8v-3h1v-.5c0-.17.01-.34.04-.5H8V8h4v1.04c.16-.03.33-.04.5-.04h.5V8h3v1h.5c.17 0 .34.01.5.04V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 4.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.TableImageRegular = wrapIcon_1.default( /*#__PURE__*/TableImageRegularIcon, 'TableImageRegular');

const TableInsertColumnFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v2h6V5a2 2 0 0 0-2-2H9Zm-2 9V8h6v4H7Zm0 1h6v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumnFilled = wrapIcon_1.default( /*#__PURE__*/TableInsertColumnFilledIcon, 'TableInsertColumnFilled');

const TableInsertColumnRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9Zm-1 9V8h4v4H8Zm4-7v2H8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-4 8h4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumnRegular = wrapIcon_1.default( /*#__PURE__*/TableInsertColumnRegularIcon, 'TableInsertColumnRegular');

const TableInsertRowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h2V7H5a2 2 0 0 0-2 2v2Zm9 2H8V7h4v6Zm1 0V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertRowFilled = wrapIcon_1.default( /*#__PURE__*/TableInsertRowFilledIcon, 'TableInsertRowFilled');

const TableInsertRowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Zm9 1H8V8h4v4ZM5 8h2v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 4V8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertRowRegular = wrapIcon_1.default( /*#__PURE__*/TableInsertRowRegularIcon, 'TableInsertRowRegular');

const TableLightningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.58 9H17V8h-4v1.12c.18-.08.38-.12.58-.12Zm-2.25 3 .67-1.6V8H8v4h3.33Zm-1.21 2.92.8-1.92H8v4h3.5a1.5 1.5 0 0 1-1.38-2.08ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5.61 13c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightningFilled = wrapIcon_1.default( /*#__PURE__*/TableLightningFilledIcon, 'TableLightningFilled');

const TableLightningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h6a1.5 1.5 0 0 1-1.41-1H8v-3h2.92l.41-1H8V8h4v2.4l.2-.48c.15-.37.45-.65.8-.8V8h3v1h1V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5.61 8c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightningRegular = wrapIcon_1.default( /*#__PURE__*/TableLightningRegularIcon, 'TableLightningRegular');

const TableLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 15.5c0 .54.12 1.05.34 1.5H8v-4h2.05A3.49 3.49 0 0 0 9 15.5ZM13 8v4h3.5c.17 0 .34.01.5.04V8h-4Zm-1 4V8H8v4h4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 12.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.TableLinkFilled = wrapIcon_1.default( /*#__PURE__*/TableLinkFilledIcon, 'TableLinkFilled');

const TableLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.84a3.48 3.48 0 0 1-.3-1H8v-3h2.05a3.49 3.49 0 0 1 2.45-1h.5V8h3v4h.5c.17 0 .34.01.5.04V5.5ZM12 8v4H8V8h4Zm-8 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 7.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.TableLinkRegular = wrapIcon_1.default( /*#__PURE__*/TableLinkRegularIcon, 'TableLinkRegular');

const TableLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 9c.55 0 1.06.15 1.5.4V8h-4v2.34A3 3 0 0 1 15.5 9ZM11 14c0-.36.1-.7.27-1H8v4h3v-3Zm1-2H8V8h4v4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm6.5 9v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLockFilled = wrapIcon_1.default( /*#__PURE__*/TableLockFilledIcon, 'TableLockFilled');

const TableLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3.27a2 2 0 0 1 1.23-.94V12c0-.61.18-1.18.5-1.66V8h3v1.04c.36.06.7.19 1 .36V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 8v4H8V8h4Zm0-1H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm6.5 4v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLockRegular = wrapIcon_1.default( /*#__PURE__*/TableLockRegularIcon, 'TableLockRegular');

const TableMoveAboveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM8 12V8.41c.16.06.33.09.5.09v1a1.5 1.5 0 0 0 3 0v-1c.17 0 .34-.03.5-.09V12H8Zm7 5h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-9 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Zm4.15-9.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveAboveFilled = wrapIcon_1.default( /*#__PURE__*/TableMoveAboveFilledIcon, 'TableMoveAboveFilled');

const TableMoveAboveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 8h3.88a1.52 1.52 0 0 0 .62.41V12h4V8.41a1.5 1.5 0 0 0 .62-.41h3.88c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5c0-.28.22-.5.5-.5Zm.5 5v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3ZM4 9v3h3V9H4Zm7.15-1.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveAboveRegular = wrapIcon_1.default( /*#__PURE__*/TableMoveAboveRegularIcon, 'TableMoveAboveRegular');

const TableMoveBelowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM12 8v3.59a1.5 1.5 0 0 0-.5-.09v-1a1.5 1.5 0 0 0-3 0v1c-.17 0-.34.03-.5.09V8h4ZM5 3h2v4H3V5c0-1.1.9-2 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm9-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Zm-4.15 9.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelowFilled = wrapIcon_1.default( /*#__PURE__*/TableMoveBelowFilledIcon, 'TableMoveBelowFilled');

const TableMoveBelowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13c.28 0 .5.22.5.5Zm-.5-4.5h-3.88a1.5 1.5 0 0 0-.62-.41V8H8v3.59a1.5 1.5 0 0 0-.62.41H3.5a.5.5 0 0 1-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm9 3V8h-3v3h3Zm-7.15 1.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelowRegular = wrapIcon_1.default( /*#__PURE__*/TableMoveBelowRegularIcon, 'TableMoveBelowRegular');

const TableMoveLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13Zm9-4.5H8.41c.06-.16.09-.33.09-.5h1a1.5 1.5 0 0 0 0-3h-1c0-.17-.03-.34-.09-.5H12v4Zm5-7v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm5 9V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeftFilled = wrapIcon_1.default( /*#__PURE__*/TableMoveLeftFilledIcon, 'TableMoveLeftFilled');

const TableMoveLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm4.5-.5v-3.88a1.55 1.55 0 0 0 .41-.62H12V8H8.41A1.5 1.5 0 0 0 8 7.38V3.5c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5a.5.5 0 0 1-.5-.5Zm5-.5h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3Zm-3 9h3v-3H9v3ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeftRegular = wrapIcon_1.default( /*#__PURE__*/TableMoveLeftRegularIcon, 'TableMoveLeftRegular');

const TableMoveRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM8 8h3.59a1.5 1.5 0 0 0-.09.5h-1a1.5 1.5 0 1 0 0 3h1c0 .17.03.34.09.5H8V8Zm-5 7v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Zm9.65 4.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveRightFilled = wrapIcon_1.default( /*#__PURE__*/TableMoveRightFilledIcon, 'TableMoveRightFilled');

const TableMoveRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-4.5.5v3.88a1.5 1.5 0 0 0-.41.62H8v4h3.59a1.5 1.5 0 0 0 .41.62v3.88a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5c.28 0 .5.22.5.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-9H8v3h3V4Zm1.65 7.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveRightRegular = wrapIcon_1.default( /*#__PURE__*/TableMoveRightRegularIcon, 'TableMoveRightRegular');

const TableMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 13.5a3.5 3.5 0 0 1-3.5 3.5H5.67c.77.63 1.76 1 2.83 1h5a4.5 4.5 0 0 0 4.5-4.5v-5c0-1.07-.37-2.06-1-2.83v7.83ZM4.5 16H6v-4H2v1.5A2.5 2.5 0 0 0 4.5 16ZM6 7v4H2V7h4Zm5 4H7V7h4v4Zm-4 1h4v4H7v-4Zm5-5v4h4V7h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H12v-4ZM2 6h4V2H4.5A2.5 2.5 0 0 0 2 4.5V6Zm5 0V2h4v4H7Zm5 0V2h1.5A2.5 2.5 0 0 1 16 4.5V6h-4Z",
    fill: primaryFill
  }));
};

exports.TableMultipleFilled = wrapIcon_1.default( /*#__PURE__*/TableMultipleFilledIcon, 'TableMultipleFilled');

const TableMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.67 17h7.84c.95 0 1.82-.39 2.45-1.01l.02-.02A3.49 3.49 0 0 0 17 13.5V5.67c.63.77 1 1.76 1 2.83v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.48 4.48 0 0 1-2.83-1Zm9.6-14.27c.47.47.73 1.1.73 1.77v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 13.5v-9A2.5 2.5 0 0 1 4.5 2h9c.66 0 1.3.26 1.77.73ZM4.5 3h-.14A1.5 1.5 0 0 0 3 4.5V6h3V3H4.5ZM11 3H7v3h4V3Zm4 1.5v-.14A1.5 1.5 0 0 0 13.5 3H12v3h3V4.5ZM7 7v4h4V7H7Zm8 0h-3v4h3V7Zm-8 5v3h4v-3H7Zm8 0h-3v3H13.64A1.5 1.5 0 0 0 15 13.5V12ZM3.5 14.61c.27.25.63.39 1 .39H6v-3H3V13.64c.04.38.22.72.5.97ZM3 7v4h3V7H3Z",
    fill: primaryFill
  }));
};

exports.TableMultipleRegular = wrapIcon_1.default( /*#__PURE__*/TableMultipleRegularIcon, 'TableMultipleRegular');

const TableResizeColumnFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v-4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 0 0-2.12l-1.5-1.5a1.6 1.6 0 0 0-.06-.06V3Zm-1 0v4a1.5 1.5 0 0 0-1.5 1.5h-3A1.5 1.5 0 0 0 7 7V3h6Zm-4.94 9.56c-.3.3-.68.44-1.06.44v4h6v-4a1.5 1.5 0 0 1-1.5-1.5h-3c0 .38-.15.77-.44 1.06ZM6 17v-4.38a1.55 1.55 0 0 1-.06-.06l-1.5-1.5a1.5 1.5 0 0 1 0-2.12l1.5-1.5.06-.06V3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm1.35-8.85c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumnFilled = wrapIcon_1.default( /*#__PURE__*/TableResizeColumnFilledIcon, 'TableResizeColumnFilled');

const TableResizeColumnRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.35 8.15c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6Zm-4-2v3c.36 0 .72.13 1 .38V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2v-3.38a1.5 1.5 0 0 1-1 .38v3H7v-3a1.5 1.5 0 0 1-1-.38V16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2v3.38A1.5 1.5 0 0 1 7 7V4h6Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumnRegular = wrapIcon_1.default( /*#__PURE__*/TableResizeColumnRegularIcon, 'TableResizeColumnRegular');

const TableResizeRowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3h4.38l.06.06 1.5 1.5a1.5 1.5 0 0 0 2.12 0l1.5-1.5.06-.06H17Zm0-1h-4a1.5 1.5 0 0 0-1.5-1.5v-3A1.5 1.5 0 0 0 13 7h4v6ZM7.44 8.06A1.5 1.5 0 0 1 7 7H3v6h4a1.5 1.5 0 0 1 1.5-1.5v-3a1.5 1.5 0 0 1-1.06-.44ZM3 6h4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 1 2.12 0l1.5 1.5.06.06H17a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm8.85 1.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

exports.TableResizeRowFilled = wrapIcon_1.default( /*#__PURE__*/TableResizeRowFilledIcon, 'TableResizeRowFilled');

const TableResizeRowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.85 7.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7ZM14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8Zm2-4h-3c0 .36-.13.72-.38 1H16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2h3.38A1.5 1.5 0 0 1 7 13H4V7h3c0-.36.13-.72.38-1H4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h-3.38c.25.28.38.64.38 1h3v6Z",
    fill: primaryFill
  }));
};

exports.TableResizeRowRegular = wrapIcon_1.default( /*#__PURE__*/TableResizeRowRegularIcon, 'TableResizeRowRegular');

const TableSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M13 12V8h4v4h-4Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M12 12H8.74A4.5 4.5 0 0 0 8 10.67V8h4v4Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M8.56 15.44 10.12 17H12v-4H8.97a4.55 4.55 0 0 1-.4 2.44Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M4.5 9c.93 0 1.78.28 2.5.76V8H3v1.26A4.5 4.5 0 0 1 4.5 9Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M12 3v4H8V3h4Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    fill: primaryFill
  }));
};

exports.TableSearchFilled = wrapIcon_1.default( /*#__PURE__*/TableSearchFilledIcon, 'TableSearchFilled');

const TableSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.76c.32-.12.66-.2 1-.23V8h3v1.76a4.51 4.51 0 0 1 1 .91V8h4v4H8.74a4.5 4.5 0 0 1 .23 1H12v3H9.12l1 1h4.38a2.5 2.5 0 0 0 2.5-2.5v-9ZM14.5 16H13v-3h3V14.64A1.5 1.5 0 0 1 14.5 16ZM13 8h3v4h-3V8Zm-1-1H8V4h4v3Zm1-3h1.65A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm-2.62 4.9a3.5 3.5 0 0 0 5.22 4.4l2.54 2.56a.5.5 0 0 0 .71-.71L7.3 15.6a3.5 3.5 0 1 0-5.92-3.7Zm5.2.21a2.5 2.5 0 1 1-4.16 2.78 2.5 2.5 0 0 1 4.16-2.78Z",
    fill: primaryFill
  }));
};

exports.TableSearchRegular = wrapIcon_1.default( /*#__PURE__*/TableSearchRegularIcon, 'TableSearchRegular');

const TableSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 9.6a5.48 5.48 0 0 0-4-.4V8h4v1.6ZM9.2 13a5.5 5.5 0 0 0 .4 4H8v-4h1.2ZM12 9.6A5.52 5.52 0 0 0 9.6 12H8V8h4v1.6ZM7 8v4H3V8h4Zm0 5H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm10-6h-4V3h1.5A2.5 2.5 0 0 1 17 5.5V7Zm-5 0V3H8v4h4ZM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7h4Zm5.06 4.44a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettingsFilled = wrapIcon_1.default( /*#__PURE__*/TableSettingsFilledIcon, 'TableSettingsFilled');

const TableSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V8h-3v1.2c-.35.1-.68.24-1 .4V8H8v4h1.6c-.16.32-.3.65-.4 1H8v3h1.2c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-6h4V4H8v3Zm6.5-3H13v3h3V5.5c0-.78-.6-1.42-1.36-1.5h-.14ZM4 5.5V7h3V4H5.5c-.78 0-1.42.6-1.5 1.36v.14ZM7 12V8H4v4h3Zm5.06-.56a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettingsRegular = wrapIcon_1.default( /*#__PURE__*/TableSettingsRegularIcon, 'TableSettingsRegular');

const TableSimpleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3h-4Zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4v-6.5Zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4v-6.5Zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5H17Z",
    fill: primaryFill
  }));
};

exports.TableSimpleFilled = wrapIcon_1.default( /*#__PURE__*/TableSimpleFilledIcon, 'TableSimpleFilled');

const TableSimpleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1 5v4c0 .83.67 1.5 1.5 1.5h4v-5.5H4Zm5.5-1V4h-4C4.67 4 4 4.67 4 5.5v4h5.5Zm1 1V16h4c.83 0 1.5-.67 1.5-1.5v-4h-5.5Zm5.5-1v-4c0-.83-.67-1.5-1.5-1.5h-4v5.5H16Z",
    fill: primaryFill
  }));
};

exports.TableSimpleRegular = wrapIcon_1.default( /*#__PURE__*/TableSimpleRegularIcon, 'TableSimpleRegular');

const TableSimpleCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3Zm3-7.5h-6.5V3H14a3 3 0 0 1 3 3v3.5Zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5h6.5Zm0 7.5v-6.5H3V14a3 3 0 0 0 3 3h3.5Zm5.85-3.9a.5.5 0 0 0-.7-.7l-1.4 1.4-.4-.4a.5.5 0 0 0-.7.7l.75.75c.2.2.5.2.7 0l1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmarkFilledIcon, 'TableSimpleCheckmarkFilled');

const TableSimpleCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h3.5v5.5H4V6Zm6.5 3.5V4H14a2 2 0 0 1 2 2v3.5h-5.5Zm-6.5 1h5.5V16H6a2 2 0 0 1-2-2v-3.5Zm10.86 1.4c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 0 1-.71 0l-.75-.75a.5.5 0 0 1 .7-.7l.4.4 1.4-1.4c.2-.2.51-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmarkRegularIcon, 'TableSimpleCheckmarkRegular');

const TableSplitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 6h4V2H8v4ZM7 2H3.5a.5.5 0 0 0-.5.5V4c0 1.1.9 2 2 2h2V2Zm6 4h2a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5H13v4Zm4 11.5a.5.5 0 0 1-.5.5H13v-4h2a2 2 0 0 1 2 2v1.5ZM12 14v4H8v-4h4Zm-8.5 4H7v-4H5a2 2 0 0 0-2 2v1.5c0 .28.22.5.5.5Zm-1-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TableSplitFilled = wrapIcon_1.default( /*#__PURE__*/TableSplitFilledIcon, 'TableSplitFilled');

const TableSplitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 2c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5c0-.28.22-.5.5-.5Zm0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5c0 .28.22.5.5.5Zm-14-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TableSplitRegular = wrapIcon_1.default( /*#__PURE__*/TableSplitRegularIcon, 'TableSplitRegular');

const TableStackAboveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 17h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-5 0V8H8v4h4Zm-4 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Z",
    fill: primaryFill
  }));
};

exports.TableStackAboveFilled = wrapIcon_1.default( /*#__PURE__*/TableStackAboveFilledIcon, 'TableStackAboveFilled');

const TableStackAboveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5ZM4 13v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3Zm-1-3H8v3h4V9ZM4 9v3h3V9H4Z",
    fill: primaryFill
  }));
};

exports.TableStackAboveRegular = wrapIcon_1.default( /*#__PURE__*/TableStackAboveRegularIcon, 'TableStackAboveRegular');

const TableStackBelowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM5 3h2v4H3V5c0-1.1.9-2 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm5 0v4h4V8H8Zm4-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Z",
    fill: primaryFill
  }));
};

exports.TableStackBelowFilled = wrapIcon_1.default( /*#__PURE__*/TableStackBelowFilledIcon, 'TableStackBelowFilled');

const TableStackBelowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13c.28 0 .5.22.5.5Zm0-5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm1 3h4V8H8v3Zm8 0V8h-3v3h3Z",
    fill: primaryFill
  }));
};

exports.TableStackBelowRegular = wrapIcon_1.default( /*#__PURE__*/TableStackBelowRegularIcon, 'TableStackBelowRegular');

const TableStackLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13ZM17 5v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm0 5H8v4h4V8Zm5 4V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4Z",
    fill: primaryFill
  }));
};

exports.TableStackLeftFilled = wrapIcon_1.default( /*#__PURE__*/TableStackLeftFilledIcon, 'TableStackLeftFilled');

const TableStackLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5Zm4.5-1h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3ZM9 8v4h3V8H9Zm0 8h3v-3H9v3Z",
    fill: primaryFill
  }));
};

exports.TableStackLeftRegular = wrapIcon_1.default( /*#__PURE__*/TableStackLeftRegularIcon, 'TableStackLeftRegular');

const TableStackRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM3 15v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8Zm0-5h4V8H8v4ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Z",
    fill: primaryFill
  }));
};

exports.TableStackRightFilled = wrapIcon_1.default( /*#__PURE__*/TableStackRightFilledIcon, 'TableStackRightFilled');

const TableStackRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-1V8H8v4h3Zm0-8H8v3h3V4Z",
    fill: primaryFill
  }));
};

exports.TableStackRightRegular = wrapIcon_1.default( /*#__PURE__*/TableStackRightRegularIcon, 'TableStackRightRegular');

const TableSwitchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm.71 5.41a1.5 1.5 0 0 1-.56.35V7h4V3h-1.09a1.5 1.5 0 0 1-.35 1.56l-2 2Zm-4 4a1.5 1.5 0 0 1-1.56.35V12h4V8h-.09c-.07.2-.19.4-.35.56l-2 2ZM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-5 0h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z",
    fill: primaryFill
  }));
};

exports.TableSwitchFilled = wrapIcon_1.default( /*#__PURE__*/TableSwitchFilledIcon, 'TableSwitchFilled');

const TableSwitchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM7 12V7h5V4h-1.09a1.5 1.5 0 0 0 0-1h3.59A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-3.59c.32.12.68.12 1 0V12h3Zm-3 2.5c0 .78.6 1.42 1.36 1.5H7v-3H4v1.5Zm8-1.5H8v3h4v-3Zm2.5 3c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8Zm1 0v4h3V8h-3Zm0-4v3h3V5.5c0-.78-.6-1.42-1.36-1.5H13Z",
    fill: primaryFill
  }));
};

exports.TableSwitchRegular = wrapIcon_1.default( /*#__PURE__*/TableSwitchRegularIcon, 'TableSwitchRegular');

const TabletFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm6.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.TabletFilled = wrapIcon_1.default( /*#__PURE__*/TabletFilledIcon, 'TabletFilled');

const TabletRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

exports.TabletRegular = wrapIcon_1.default( /*#__PURE__*/TabletRegularIcon, 'TabletRegular');

const TabletSpeakerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.7 2.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-1.7 1.08a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44Zm.4 6.42a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 8h-.38A1.5 1.5 0 0 1 9 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.5.29-1.15.27-1.65-.1ZM8.5 13h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TabletSpeakerFilled = wrapIcon_1.default( /*#__PURE__*/TabletSpeakerFilledIcon, 'TabletSpeakerFilled');

const TabletSpeakerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.1 3.07a3.67 3.67 0 0 0-.45-.87.5.5 0 0 0-.8.6l.07.1a5.9 5.9 0 0 1 .58 2.6 5.9 5.9 0 0 1-.58 2.6l-.12.18a.5.5 0 0 0 .85.52c.12-.16.29-.45.44-.87.26-.68.41-1.5.41-2.43 0-.94-.15-1.75-.4-2.43ZM14 2.5a.5.5 0 0 0-.85-.35L11.29 4h-.79a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h.8l1.85 1.85A.5.5 0 0 0 14 8.5v-6Zm1.95.78a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44ZM17 9.98V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5v-.5c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.3.17-.66.24-1 .18ZM8.5 13a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.TabletSpeakerRegular = wrapIcon_1.default( /*#__PURE__*/TabletSpeakerRegularIcon, 'TabletSpeakerRegular');

const TabsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm2 .5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5ZM9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z",
    fill: primaryFill
  }));
};

exports.TabsFilled = wrapIcon_1.default( /*#__PURE__*/TabsFilledIcon, 'TabsFilled');

const TabsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm13-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6Zm-8 9c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6ZM4 8.5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5Z",
    fill: primaryFill
  }));
};

exports.TabsRegular = wrapIcon_1.default( /*#__PURE__*/TabsRegularIcon, 'TabsRegular');

const TagFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TagFilled = wrapIcon_1.default( /*#__PURE__*/TagFilledIcon, 'TagFilled');

const TagRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm-.72 1.3a1 1 0 0 1 .71-.3l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-6.63 6.64a1 1 0 0 1-1.41 0l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67Z",
    fill: primaryFill
  }));
};

exports.TagRegular = wrapIcon_1.default( /*#__PURE__*/TagRegularIcon, 'TagRegular');

const TagCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4-1.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5C6.67 7 6 7.67 6 8.5Z",
    fill: primaryFill
  }));
};

exports.TagCircleFilled = wrapIcon_1.default( /*#__PURE__*/TagCircleFilledIcon, 'TagCircleFilled');

const TagCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 7C6.67 7 6 7.67 6 8.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5ZM7 8.5c0-.28.22-.5.5-.5h4.06c.17 0 .34.06.47.17L13.8 9.6a.5.5 0 0 1 0 .78l-1.78 1.44c-.13.11-.3.17-.47.17H7.5a.5.5 0 0 1-.5-.5v-3ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.TagCircleRegular = wrapIcon_1.default( /*#__PURE__*/TagCircleRegularIcon, 'TagCircleRegular');

const TagDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TagDismissFilled = wrapIcon_1.default( /*#__PURE__*/TagDismissFilledIcon, 'TagDismissFilled');

const TagDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TagDismissRegular = wrapIcon_1.default( /*#__PURE__*/TagDismissRegularIcon, 'TagDismissRegular');

const TagErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.12a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.TagErrorFilled = wrapIcon_1.default( /*#__PURE__*/TagErrorFilledIcon, 'TagErrorFilled');

const TagErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TagErrorRegular = wrapIcon_1.default( /*#__PURE__*/TagErrorRegularIcon, 'TagErrorRegular');

const TagLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V14a2 2 0 0 1 1.5-1.94V12a3 3 0 0 1 5.68-1.35l.25-.25A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1.5 5v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLockFilled = wrapIcon_1.default( /*#__PURE__*/TagLockFilledIcon, 'TagLockFilled');

const TagLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V16.4a1 1 0 0 1-1.32-.08l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-.14.15a3 3 0 0 1 .6.82l.25-.25A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm1.37 10v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLockRegular = wrapIcon_1.default( /*#__PURE__*/TagLockRegularIcon, 'TagLockRegular');

const TagLockAccentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.5 4.03c0-.82-.66-1.49-1.48-1.5l-4.9-.03c-.4 0-.78.16-1.06.44L3.38 9.61a1.5 1.5 0 0 0 0 2.12l4.94 4.95a1.5 1.5 0 0 0 1.68.3V14a2 2 0 0 1 1.5-1.94V12a3 3 0 0 1 5.4-1.79l.17-.16c.29-.29.44-.67.44-1.07V4.03Z",
    fill: primaryFill
  }));
};

exports.TagLockAccentFilled = wrapIcon_1.default( /*#__PURE__*/TagLockAccentFilledIcon, 'TagLockAccentFilled');

const TagMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Zm6.2-9.21A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm4.3 3.91a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagMultipleFilled = wrapIcon_1.default( /*#__PURE__*/TagMultipleFilledIcon, 'TagMultipleFilled');

const TagMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.2 2.59A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm1.42.41a1 1 0 0 0-.7.3L4.15 9.03a1 1 0 0 0 0 1.42l4.39 4.38a1 1 0 0 0 1.4 0l5.83-5.76a1 1 0 0 0 .3-.7V4a1 1 0 0 0-1-1h-4.46ZM3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Z",
    fill: primaryFill
  }));
};

exports.TagMultipleRegular = wrapIcon_1.default( /*#__PURE__*/TagMultipleRegularIcon, 'TagMultipleRegular');

const TagOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L5.79 6.5 3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l2.76-2.76 3.59 3.58a.5.5 0 0 0 .7-.7l-15-15Zm14.58 8.25-2.45 2.45L7.2 5.08l2.5-2.5A2 2 0 0 1 11.13 2l4.89.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagOffFilled = wrapIcon_1.default( /*#__PURE__*/TagOffFilledIcon, 'TagOffFilled');

const TagOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.79 6.5 2.15 2.84a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.6-3.58-2.75 2.76a2 2 0 0 1-2.83 0l-4.95-4.95a2 2 0 0 1 0-2.83L5.8 6.49Zm7.06 7.06L6.5 7.2 3.73 9.96a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l2.76-2.76Zm3.87-3.87-2.45 2.45.7.71 2.46-2.45A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2a2 2 0 0 0-1.42.58l-2.5 2.5.7.7 2.51-2.49a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagOffRegular = wrapIcon_1.default( /*#__PURE__*/TagOffRegularIcon, 'TagOffRegular');

const TagQuestionMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMarkFilled = wrapIcon_1.default( /*#__PURE__*/TagQuestionMarkFilledIcon, 'TagQuestionMarkFilled');

const TagQuestionMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMarkRegular = wrapIcon_1.default( /*#__PURE__*/TagQuestionMarkRegularIcon, 'TagQuestionMarkRegular');

const TagResetFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.02 2.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42l-.15.15A5 5 0 0 0 15 10h-1.09a1.5 1.5 0 0 0-2.47-1.56l-2 2a1.5 1.5 0 0 0 0 2.12l1.2 1.2A1.5 1.5 0 0 0 10 15a5 5 0 0 0 .54 2.25 2 2 0 0 1-2.57-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.6A2 2 0 0 1 11.13 2l4.89.04ZM13 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-.15 3.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
    fill: primaryFill
  }));
};

exports.TagResetFilled = wrapIcon_1.default( /*#__PURE__*/TagResetFilledIcon, 'TagResetFilled');

const TagResetRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.7 2.58A2 2 0 0 1 11.13 2l4.89.03a2 2 0 0 1 1.99 2v4.95a2 2 0 0 1-.58 1.42l-.15.15a5 5 0 0 0-1.03-.4l.47-.46a1 1 0 0 0 .3-.7L17 4.02a1 1 0 0 0-1-1L11.12 3a1 1 0 0 0-.71.3L3.73 9.95a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l.07-.07a5 5 0 0 0 .37 1 2 2 0 0 1-2.56-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.58Zm3.15 7.27a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
    fill: primaryFill
  }));
};

exports.TagResetRegular = wrapIcon_1.default( /*#__PURE__*/TagResetRegularIcon, 'TagResetRegular');

const TagSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.02 2.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42l-.36.36a4.5 4.5 0 1 0-6.31 6.3 2 2 0 0 1-2.8-.03l-4.94-4.95a2 2 0 0 1 0-2.83L9.7 2.6A2 2 0 0 1 11.13 2l4.89.04ZM13 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm3.3 9.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.TagSearchFilled = wrapIcon_1.default( /*#__PURE__*/TagSearchFilledIcon, 'TagSearchFilled');

const TagSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.7 2.58A2 2 0 0 1 11.13 2l4.89.03a2 2 0 0 1 1.99 2v4.95a2 2 0 0 1-.58 1.42l-.36.36c-.2-.27-.44-.51-.7-.72l.35-.35a1 1 0 0 0 .3-.7L17 4.02a1 1 0 0 0-1-1L11.12 3a1 1 0 0 0-.71.3L3.73 9.95a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.35.05c.22.26.46.5.73.7a2 2 0 0 1-2.8-.04l-4.94-4.95a2 2 0 0 1 0-2.83L9.7 2.58Zm6.6 13.02a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.TagSearchRegular = wrapIcon_1.default( /*#__PURE__*/TagSearchRegularIcon, 'TagSearchRegular');

const TapDoubleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 8.5a5.5 5.5 0 1 1 10.97.6c.34.15.65.34.93.57A6.5 6.5 0 1 0 3.64 11.3c.25-.25.53-.45.82-.61A5.48 5.48 0 0 1 4 8.5Zm10 0-.01.33-1-.17.01-.16a3.5 3.5 0 1 0-6.57 1.69 4.4 4.4 0 0 0-1.05.13A4.48 4.48 0 0 1 9.5 4 4.5 4.5 0 0 1 14 8.5Zm-6-1a1.5 1.5 0 1 1 3 0v2.08l2.94.51a2.5 2.5 0 0 1 1.91 3.33l-.98 2.67a2.5 2.5 0 0 1-1.92 1.6l-1.52.26c-1.02.18-1.95-.45-2.43-1.23A5.87 5.87 0 0 0 4.44 14a.5.5 0 0 1-.43-.62c.15-.6.43-1.04.82-1.36.39-.32.85-.47 1.3-.52.63-.06 1.29.05 1.87.25V7.5Z",
    fill: primaryFill
  }));
};

exports.TapDoubleFilled = wrapIcon_1.default( /*#__PURE__*/TapDoubleFilledIcon, 'TapDoubleFilled');

const TapDoubleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.5 3a5.5 5.5 0 0 0-5.04 7.7c-.3.16-.57.36-.82.61A6.5 6.5 0 1 1 15.9 9.67a3.7 3.7 0 0 0-.93-.57l.03-.6A5.5 5.5 0 0 0 9.5 3Zm4.49 5.83L14 8.5a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.5 3.5 0 1 1 13 8.66l1 .17ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 0 1 1.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 0 0-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 0 0 9 12.5v-5Z",
    fill: primaryFill
  }));
};

exports.TapDoubleRegular = wrapIcon_1.default( /*#__PURE__*/TapDoubleRegularIcon, 'TapDoubleRegular');

const TapSingleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 8.5a3.5 3.5 0 1 1 7 .16l.99.17.01-.33a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.48 3.48 0 0 1 6 8.5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TapSingleFilled = wrapIcon_1.default( /*#__PURE__*/TapSingleFilledIcon, 'TapSingleFilled');

const TapSingleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 8.5a3.5 3.5 0 1 1 7 .16l.99.17.01-.33a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.48 3.48 0 0 1 6 8.5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 0 1 1.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 0 0-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 0 0 9 12.5v-5Z",
    fill: primaryFill
  }));
};

exports.TapSingleRegular = wrapIcon_1.default( /*#__PURE__*/TapSingleRegularIcon, 'TapSingleRegular');

const TargetFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z",
    fill: primaryFill
  }));
};

exports.TargetFilled = wrapIcon_1.default( /*#__PURE__*/TargetFilledIcon, 'TargetFilled');

const TargetRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8 4a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
};

exports.TargetRegular = wrapIcon_1.default( /*#__PURE__*/TargetRegularIcon, 'TargetRegular');

const TargetArrowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.6 7.52a8 8 0 1 1-5.11-5.13l-1.05 1.05a1.5 1.5 0 0 0-.16.19 6.5 6.5 0 1 0 5.09 5.1l.2-.17 1.03-1.04ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.55A3.5 3.5 0 1 0 13.35 9h1.55ZM10 11.5a1.5 1.5 0 0 0 1.45-1.89l1.58-1.58a.74.74 0 0 0 .03-.03h2.44a.5.5 0 0 0 .35-.15l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.85-.35l-2 2a.5.5 0 0 0-.15.35v2.44a.76.76 0 0 0-.03.03l-1.58 1.58a1.5 1.5 0 1 0-.4 2.95Z",
    fill: primaryFill
  }));
};

exports.TargetArrowFilled = wrapIcon_1.default( /*#__PURE__*/TargetArrowFilledIcon, 'TargetArrowFilled');

const TargetArrowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.96 5.3a.5.5 0 0 1-.1.55l-2 2a.5.5 0 0 1-.36.15h-2.8l-1.35 1.35a1.5 1.5 0 1 1-.7-.7L12 7.29V4.5a.5.5 0 0 1 .15-.35l2-2a.5.5 0 0 1 .85.35V5h2.5c.2 0 .38.12.46.3ZM16.3 6H14.5a.5.5 0 0 1-.5-.5V3.7l-1 1V7h2.3l1-1Zm1.32 1.52a8 8 0 1 1-5.12-5.13l-.81.81A7.02 7.02 0 0 0 3 10a7 7 0 1 0 13.8-1.68l.8-.8ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.03A4 4 0 1 0 13.87 9h1.03Z",
    fill: primaryFill
  }));
};

exports.TargetArrowRegular = wrapIcon_1.default( /*#__PURE__*/TargetArrowRegularIcon, 'TargetArrowRegular');

const TargetEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.05l-2.42 2.4a3.5 3.5 0 1 0-.23.23l-2.08 2.09c-.1.1-.2.21-.28.33A5 5 0 0 1 5 10Zm5-6.5c3.28 0 5.99 2.43 6.43 5.59.5-.13 1.02-.12 1.52.03A8 8 0 1 0 9 17.93c0-.09.02-.18.05-.28l.3-1.19A6.5 6.5 0 0 1 10 3.5Zm.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
};

exports.TargetEditFilled = wrapIcon_1.default( /*#__PURE__*/TargetEditFilledIcon, 'TargetEditFilled');

const TargetEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.06l-1.15 1.15a4 4 0 1 0-2.76 2.76l-.82.82c-.1.1-.2.21-.29.33A5 5 0 0 1 5 10Zm5-7a7 7 0 0 1 6.93 6c.34-.02.69.02 1.02.12a8 8 0 1 0-8.94 8.82c0-.1.02-.2.05-.29l.17-.7A7 7 0 0 1 10 3Zm.98 12.38 4.83-4.83a1.87 1.87 0 0 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
};

exports.TargetEditRegular = wrapIcon_1.default( /*#__PURE__*/TargetEditRegularIcon, 'TargetEditRegular');

const TaskListAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.85 3.35a.5.5 0 1 0-.7-.7L3.5 4.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm2.9.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm1.27 6.5c.05-.52.17-1.03.35-1.5H8.75a.75.75 0 0 0 0 1.5h1.27ZM5.85 8.85a.5.5 0 1 0-.7-.7L3.5 9.79l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListAddFilled = wrapIcon_1.default( /*#__PURE__*/TaskListAddFilledIcon, 'TaskListAddFilled');

const TaskListAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.85 3.35a.5.5 0 1 0-.7-.7L3.5 4.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM8.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1.52 6c.03-.34.1-.68.19-1H8.5a.5.5 0 0 0 0 1h1.52ZM5.85 8.85a.5.5 0 1 0-.7-.7L3.5 9.79l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListAddRegular = wrapIcon_1.default( /*#__PURE__*/TaskListAddRegularIcon, 'TaskListAddRegular');

const TaskListLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.85 4.35a.5.5 0 1 0-.7-.7L3.5 5.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm2.9.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM8 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm-2.15-5.4a.5.5 0 1 0-.7-.7L3.5 10.79l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListLtrFilled = wrapIcon_1.default( /*#__PURE__*/TaskListLtrFilledIcon, 'TaskListLtrFilled');

const TaskListLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.85 4.35a.5.5 0 1 0-.7-.7L3.5 5.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM8.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM8 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM5.85 9.85a.5.5 0 1 0-.7-.7L3.5 10.79l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListLtrRegular = wrapIcon_1.default( /*#__PURE__*/TaskListLtrRegularIcon, 'TaskListLtrRegular');

const TaskListRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm-15.1.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM2 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm13.85-3.4 2-2a.5.5 0 0 0-.7-.7l-1.65 1.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0Zm2 3-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.TaskListRtlFilled = wrapIcon_1.default( /*#__PURE__*/TaskListRtlFilledIcon, 'TaskListRtlFilled');

const TaskListRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM2.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm15.85-5.65a.5.5 0 0 0-.7-.7l-1.65 1.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListRtlRegular = wrapIcon_1.default( /*#__PURE__*/TaskListRtlRegularIcon, 'TaskListRtlRegular');

const TaskListSquareAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6A5.5 5.5 0 0 0 9.6 17H6a3 3 0 0 1-3-3V6Zm6.35.4a.5.5 0 0 0-.7 0L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1a.5.5 0 0 0 0-.7Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm8 7.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4-2V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAddFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAddFilledIcon, 'TaskListSquareAddFilled');

const TaskListSquareAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6Zm3.35 4.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.15-3.9c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Zm8.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAddRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAddRegularIcon, 'TaskListSquareAddRegular');

const TaskListSquareDatabaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5v-4.04l-1.4 1.4a.5.5 0 0 1-.69 0l-.75-.68a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41a.5.5 0 0 1 .36-.15v-.75c0-1.22.88-2.11 1.83-2.64A7.68 7.68 0 0 1 14.5 7c.89 0 1.74.13 2.5.36V6a3 3 0 0 0-3-3H6Zm11 5.42A7.25 7.25 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.02 2.5 4.5 2.5c2.49 0 4.5-1.12 4.5-2.5 0-.87-.8-1.63-2-2.08ZM9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareDatabaseFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareDatabaseFilledIcon, 'TaskListSquareDatabaseFilled');

const TaskListSquareDatabaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5V16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1.13c.35.06.68.14 1 .23V6a3 3 0 0 0-3-3H6Zm11 5.42A7.81 7.81 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm-8 2.83a.5.5 0 0 0-.35.15l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9 12.45v-1.2Zm.35-4.15a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareDatabaseRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareDatabaseRegularIcon, 'TaskListSquareDatabaseRegular');

const TaskListSquareLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm6.35 1.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7ZM11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtrFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtrFilledIcon, 'TaskListSquareLtrFilled');

const TaskListSquareLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.35 7.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtrRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtrRegularIcon, 'TaskListSquareLtrRegular');

const TaskListSquarePersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.4a3 3 0 0 0-4.5 2.6H11a.5.5 0 0 0 0 1h1.67a3 3 0 0 0 .6 1.01A2.5 2.5 0 0 0 11.04 17H6a3 3 0 0 1-3-3V6Zm6.35 1.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7Zm1.15-3.9c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.5.5Zm7 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquarePersonFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquarePersonFilledIcon, 'TaskListSquarePersonFilled');

const TaskListSquarePersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.35 7.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM11 12a.5.5 0 0 0 0 1h1.67a3 3 0 0 1-.17-1H11Zm-5 4h5.05a2.51 2.51 0 0 0-.01 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.4c-.3-.17-.64-.3-1-.36V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2Zm4.5-8.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Zm7 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquarePersonRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquarePersonRegularIcon, 'TaskListSquarePersonRegular');

const TaskListSquareRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm11.35 1.1a.5.5 0 1 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7ZM6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 7.5c0 .28.22.5.5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareRtlFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareRtlFilledIcon, 'TaskListSquareRtlFilled');

const TaskListSquareRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.35 7.1a.5.5 0 1 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 7.5c0-.28.22-.5.5-.5H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareRtlRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareRtlRegularIcon, 'TaskListSquareRtlRegular');

const TaskListSquareSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3H6Zm3.35 3.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm-.7 5a.5.5 0 0 1 .7.7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41ZM11 8a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1H11Zm-.37 5.92a2 2 0 0 0 1.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 0 0 1.45 2.52l.35.08a4.6 4.6 0 0 1 .01 1.02l-.46.12a2 2 0 0 0-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 0 0-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.34-.08a4.62 4.62 0 0 1-.01-1.02l.45-.12Zm4.87.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareSettingsFilled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareSettingsFilledIcon, 'TaskListSquareSettingsFilled');

const TaskListSquareSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-1-.4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm7.63 7.92a2 2 0 0 0 1.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 0 0 1.45 2.52l.35.08a4.6 4.6 0 0 1 .01 1.02l-.46.12a2 2 0 0 0-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 0 0-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.34-.08a4.62 4.62 0 0 1-.01-1.02l.45-.12Zm4.87.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareSettingsRegular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareSettingsRegularIcon, 'TaskListSquareSettingsRegular');

const TasksAppFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v9.88l-2.5 2.52-.93-.95a1.5 1.5 0 1 0-2.14 2.1l.44.45H6a2 2 0 0 1-2-2V4Zm5 5.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 13.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm-2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10.86.35a.5.5 0 0 0-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 1 0-.72.7l1.93 1.97a.6.6 0 0 0 .86 0l3.93-3.97Z",
    fill: primaryFill
  }));
};

exports.TasksAppFilled = wrapIcon_1.default( /*#__PURE__*/TasksAppFilledIcon, 'TasksAppFilled');

const TasksAppRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v9.88l-1 1.01V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.09c.07.2.18.39.34.55l.44.45H6a2 2 0 0 1-2-2V4Zm4 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 13.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10.86.35a.5.5 0 0 0-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 1 0-.72.7l1.93 1.97a.6.6 0 0 0 .86 0l3.93-3.97Z",
    fill: primaryFill
  }));
};

exports.TasksAppRegular = wrapIcon_1.default( /*#__PURE__*/TasksAppRegularIcon, 'TasksAppRegular');

const TeddyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 3a3.5 3.5 0 0 0-2.85 5.53 7.92 7.92 0 0 1 5.5-4.32A3.5 3.5 0 0 0 5.5 3ZM18 6.5c0 .76-.24 1.46-.65 2.03a7.92 7.92 0 0 0-5.5-4.32A3.5 3.5 0 0 1 18 6.5Zm-15 5C3 7.87 6.17 5 10 5s7 2.87 7 6.5a6.2 6.2 0 0 1-1.76 4.31 5.5 5.5 0 0 0-10.48 0A6.2 6.2 0 0 1 3 11.5Zm8.33 1.7a4.5 4.5 0 0 1 3.07 3.35A7.33 7.33 0 0 1 10 18c-1.66 0-3.2-.54-4.4-1.45a4.5 4.5 0 0 1 3.07-3.35 1.5 1.5 0 0 0 2.66 0Z",
    fill: primaryFill
  }));
};

exports.TeddyFilled = wrapIcon_1.default( /*#__PURE__*/TeddyFilledIcon, 'TeddyFilled');

const TeddyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6.5a3.5 3.5 0 0 0 1.4 2.8c-.26.69-.4 1.43-.4 2.2 0 3.63 3.17 6.5 7 6.5s7-2.87 7-6.5c0-.77-.14-1.51-.4-2.2a3.5 3.5 0 1 0-5.31-4.19 7.54 7.54 0 0 0-2.58 0A3.5 3.5 0 0 0 2 6.5ZM5.5 4c.97 0 1.8.55 2.22 1.35a6.92 6.92 0 0 0-3.87 3.03A2.5 2.5 0 0 1 5.5 4Zm6.78 1.35a2.5 2.5 0 1 1 3.87 3.03 6.92 6.92 0 0 0-3.87-3.03ZM10 6c3.35 0 6 2.5 6 5.5a5.2 5.2 0 0 1-1.2 3.3 5.5 5.5 0 0 0-9.6 0A5.2 5.2 0 0 1 4 11.5C4 8.5 6.65 6 10 6Zm4.06 9.55A6.27 6.27 0 0 1 10 17c-1.57 0-3-.55-4.06-1.45a4.51 4.51 0 0 1 2.73-2.35 1.5 1.5 0 0 0 2.66 0c1.2.37 2.19 1.23 2.73 2.35Z",
    fill: primaryFill
  }));
};

exports.TeddyRegular = wrapIcon_1.default( /*#__PURE__*/TeddyRegularIcon, 'TeddyRegular');

const TemperatureFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.75 7.25a.75.75 0 0 0-1.5 0v4.9a2 2 0 1 0 1.5 0v-4.9ZM6.5 5.5a3.5 3.5 0 0 1 7 0v5.67A4.48 4.48 0 0 1 10 18.5a4.5 4.5 0 0 1-3.5-7.33V5.5Zm1.5 0v6.24l-.2.22a3 3 0 1 0 4.4 0l-.2-.22V5.5a2 2 0 0 0-4 0Z",
    fill: primaryFill
  }));
};

exports.TemperatureFilled = wrapIcon_1.default( /*#__PURE__*/TemperatureFilledIcon, 'TemperatureFilled');

const TemperatureRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 6.5c.28 0 .5.22.5.5v5.06a2 2 0 1 1-1 0V7c0-.28.22-.5.5-.5ZM10 2a3 3 0 0 0-3 3v6.35A3.99 3.99 0 0 0 10 18a4 4 0 0 0 3-6.65V5a3 3 0 0 0-3-3Zm0 1a2 2 0 0 1 2 2v6.75l.14.15a3 3 0 1 1-4.29 0l.15-.15V5c0-1.1.9-2 2-2Z",
    fill: primaryFill
  }));
};

exports.TemperatureRegular = wrapIcon_1.default( /*#__PURE__*/TemperatureRegularIcon, 'TemperatureRegular');

const TentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.4 2.82a.5.5 0 0 0-.77 0 20.89 20.89 0 0 1-4.91 3.9.5.5 0 0 0-.25.36L3.37 15H2.5a.5.5 0 0 0 0 1h3.94a.5.5 0 0 0 .1.01h6.9a.5.5 0 0 0 .1-.01h3.96a.5.5 0 0 0 0-1h-.84l-1.1-7.92a.5.5 0 0 0-.24-.36 20.89 20.89 0 0 1-4.92-3.9ZM7.51 15c.84-1.22 1.7-2.79 2.49-5.26.7 2.23 1.5 3.78 2.49 5.26H7.5Z",
    fill: primaryFill
  }));
};

exports.TentFilled = wrapIcon_1.default( /*#__PURE__*/TentFilledIcon, 'TentFilled');

const TentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.4 2.82a.5.5 0 0 0-.77 0 20.89 20.89 0 0 1-4.91 3.9.5.5 0 0 0-.25.36L3.37 15H2.5a.5.5 0 0 0 0 1h3.94a.5.5 0 0 0 .1.01h6.9a.5.5 0 0 0 .1-.01h3.96a.5.5 0 0 0 0-1h-.84l-1.1-7.92a.5.5 0 0 0-.24-.36 20.89 20.89 0 0 1-4.92-3.9ZM13.7 15a19.92 19.92 0 0 1-3.22-7.2.5.5 0 0 0-.97 0c-.98 3.84-2.14 5.75-3.22 7.2H4.4l1.03-7.54c1.3-.76 3.3-2.2 4.6-3.57a23.15 23.15 0 0 0 4.6 3.57L15.64 15h-1.96Zm-1.22 0H7.52c.84-1.22 1.7-2.78 2.48-5.25.7 2.23 1.49 3.77 2.48 5.25Z",
    fill: primaryFill
  }));
};

exports.TentRegular = wrapIcon_1.default( /*#__PURE__*/TentRegularIcon, 'TentRegular');

const TetrisAppFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.75c0-.41.34-.75.75-.75H11v4H7V2.75ZM2.75 7a.75.75 0 0 0-.75.75v2.5c0 .41.34.75.75.75H6V7H2.75ZM11 7H7v4h3.25c.41 0 .75-.34.75-.75V7Zm4.25-5H12v4h3.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 0 0-.75-.75ZM4 14.75c0-.41.34-.75.75-.75H8v4H4.75a.75.75 0 0 1-.75-.75v-2.5ZM13 18v-4H9v4h4Zm5-4v3.25c0 .41-.34.75-.75.75H14v-4h4Zm-3.25-5a.75.75 0 0 0-.75.75V13h4V9.75a.75.75 0 0 0-.75-.75h-2.5Z",
    fill: primaryFill
  }));
};

exports.TetrisAppFilled = wrapIcon_1.default( /*#__PURE__*/TetrisAppFilledIcon, 'TetrisAppFilled');

const TetrisAppRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.25 2C6.56 2 6 2.56 6 3.25v2.5c0 .14-.11.25-.25.25h-2.5C2.56 6 2 6.56 2 7.25v2.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.14.11-.25.25-.25h2.5C14.44 7 15 6.44 15 5.75v-2.5C15 2.56 14.44 2 13.75 2h-6.5Zm6.5 4H11V3h2.75c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25Zm-3.72 1c-.02.08-.03.16-.03.25v2.5c0 .14-.11.25-.25.25H7V7h3.03ZM6 7v3H3.25A.25.25 0 0 1 3 9.75v-2.5c0-.14.11-.25.25-.25H6Zm.97-1C7 5.92 7 5.84 7 5.75v-2.5c0-.14.11-.25.25-.25H10v3H6.97Zm7.28 3c-.69 0-1.25.56-1.25 1.25v2.5c0 .14-.11.25-.25.25h-6.5C5.56 13 5 13.56 5 14.25v2.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5C18 9.56 17.44 9 16.75 9h-2.5Zm-.28 4c.02-.08.03-.16.03-.25v-2.5c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25V13h-3.03Zm.03 1h3v2.75c0 .14-.11.25-.25.25H14v-3Zm-1 0v3h-3v-3h3Zm-4 0v3H6.25a.25.25 0 0 1-.25-.25v-2.5c0-.14.11-.25.25-.25H9Z",
    fill: primaryFill
  }));
};

exports.TetrisAppRegular = wrapIcon_1.default( /*#__PURE__*/TetrisAppRegularIcon, 'TetrisAppRegular');

const TextAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V4.5H9.5v7.7a5.48 5.48 0 0 0 .1 4.8H6.75a.75.75 0 0 1 0-1.5H8v-11H4.5v.75a.75.75 0 0 1-1.5 0v-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextAddFilled = wrapIcon_1.default( /*#__PURE__*/TextAddFilledIcon, 'TextAddFilled');

const TextAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0V4H9v12h.2c.1.35.24.68.4 1H6.5a.5.5 0 0 1 0-1H8V4H4v1.5a.5.5 0 0 1-1 0v-2Zm16 11a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextAddRegular = wrapIcon_1.default( /*#__PURE__*/TextAddRegularIcon, 'TextAddRegular');

const TextAddSpaceAfterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.75Zm0 4c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm9.03 6.03c.3-.3.3-.77 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.97-.97.97.97c.3.3.77.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.TextAddSpaceAfterFilled = wrapIcon_1.default( /*#__PURE__*/TextAddSpaceAfterFilledIcon, 'TextAddSpaceAfterFilled');

const TextAddSpaceAfterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm5.15 5.15a.5.5 0 0 0 .7.7L10 14.21l1.15 1.14a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TextAddSpaceAfterRegular = wrapIcon_1.default( /*#__PURE__*/TextAddSpaceAfterRegularIcon, 'TextAddSpaceAfterRegular');

const TextAddSpaceBeforeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.03 5.78a.75.75 0 0 0-1.06-1.06l-.97.97-.97-.97a.75.75 0 0 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5ZM3 10.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextAddSpaceBeforeFilled = wrapIcon_1.default( /*#__PURE__*/TextAddSpaceBeforeFilledIcon, 'TextAddSpaceBeforeFilled');

const TextAddSpaceBeforeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.15 5.85a.5.5 0 1 1 .7-.7L10 6.29l1.15-1.14a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5ZM3 10.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextAddSpaceBeforeRegular = wrapIcon_1.default( /*#__PURE__*/TextAddSpaceBeforeRegularIcon, 'TextAddSpaceBeforeRegular');

const TextAlignCenterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 4.25Zm-2 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm4.75 4.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterFilledIcon, 'TextAlignCenterFilled');

const TextAlignCenterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-2 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM6.5 14a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterRegularIcon, 'TextAlignCenterRegular');

const TextAlignCenterRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.25 16a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 1.5 0v10.5c0 .41-.34.75-.75.75Zm5 2a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm4.25-4.75a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0v6.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterRotate270FilledIcon, 'TextAlignCenterRotate270Filled');

const TextAlignCenterRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 16a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Zm5 2a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm4.5-4.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0v7Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterRotate270RegularIcon, 'TextAlignCenterRotate270Regular');

const TextAlignCenterRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.75 4c.41 0 .75.34.75.75v10.5a.75.75 0 0 1-1.5 0V4.75c0-.41.34-.75.75-.75Zm-5-2c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75ZM6.5 6.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterRotate90FilledIcon, 'TextAlignCenterRotate90Filled');

const TextAlignCenterRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm-5-2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM6 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
};

exports.TextAlignCenterRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignCenterRotate90RegularIcon, 'TextAlignCenterRotate90Regular');

const TextAlignDistributedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.78 6.28c.3-.3.3-.77 0-1.06L4.56 5h12.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5c.3.3.77.3 1.06 0ZM18 9.25c0 .41-.34.75-.75.75H2.75a.75.75 0 0 1 0-1.5h14.5c.41 0 .75.34.75.75ZM2.75 13.5h12.69l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H2.75a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedFilledIcon, 'TextAlignDistributedFilled');

const TextAlignDistributedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.35 5.65 3.71 5H17.5a.5.5 0 0 0 0-1H3.7l.65-.65a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7ZM2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5h13.8l-.65-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H2.5a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedRegularIcon, 'TextAlignDistributedRegular');

const TextAlignDistributedEvenlyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 3.5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.5Zm0 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8.5Zm2.56 6.75h10.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H4.56l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedEvenlyFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedEvenlyFilledIcon, 'TextAlignDistributedEvenlyFilled');

const TextAlignDistributedEvenlyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM3.7 15h12.6l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 14H3.71l1.14-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L3.71 15Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedEvenlyRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedEvenlyRegularIcon, 'TextAlignDistributedEvenlyRegular');

const TextAlignDistributedVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.03 14.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V2.75a.75.75 0 0 0-1.5 0v12.69l-.72-.72ZM10 18a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm8.03-12.72c-.3.3-.77.3-1.06 0l-.72-.72v12.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedVerticalFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedVerticalFilledIcon, 'TextAlignDistributedVerticalFilled');

const TextAlignDistributedVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.85 4.85a.5.5 0 0 1-.7 0L16 3.71V17.5a.5.5 0 1 1-1 0V3.7l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7Zm-15 10.3a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L5 16.29V2.5a.5.5 0 0 0-1 0v13.8l-1.15-1.15ZM10 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignDistributedVerticalRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignDistributedVerticalRegularIcon, 'TextAlignDistributedVerticalRegular');

const TextAlignJustifyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm0 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm.75 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyFilledIcon, 'TextAlignJustifyFilled');

const TextAlignJustifyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyRegularIcon, 'TextAlignJustifyRegular');

const TextAlignJustifyLowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 4.5c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 9 4.5Zm0 5c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 9 9.5Zm-6.25 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowFilledIcon, 'TextAlignJustifyLowFilled');

const TextAlignJustifyLowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 4.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5ZM2.5 14a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowRegularIcon, 'TextAlignJustifyLowRegular');

const TextAlignJustifyLowRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 11a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm4.25 6.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0v14.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowRotate270FilledIcon, 'TextAlignJustifyLowRotate270Filled');

const TextAlignJustifyLowRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm4.5 6.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowRotate270RegularIcon, 'TextAlignJustifyLowRotate270Regular');

const TextAlignJustifyLowRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 9c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm-5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75ZM6.25 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V2.75Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowRotate90FilledIcon, 'TextAlignJustifyLowRotate90Filled');

const TextAlignJustifyLowRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 9c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyLowRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyLowRotate90RegularIcon, 'TextAlignJustifyLowRotate90Regular');

const TextAlignJustifyRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.25 18a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm4.25-.75a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0v14.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyRotate270FilledIcon, 'TextAlignJustifyRotate270Filled');

const TextAlignJustifyRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm4.5-.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyRotate270RegularIcon, 'TextAlignJustifyRotate270Regular');

const TextAlignJustifyRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.75 2c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm-5 0c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm-4.25.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V2.75Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyRotate90FilledIcon, 'TextAlignJustifyRotate90Filled');

const TextAlignJustifyRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15Z",
    fill: primaryFill
  }));
};

exports.TextAlignJustifyRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignJustifyRotate90RegularIcon, 'TextAlignJustifyRotate90Regular');

const TextAlignLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm0 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftFilledIcon, 'TextAlignLeftFilled');

const TextAlignLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftRegularIcon, 'TextAlignLeftRegular');

const TextAlignLeftRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.25 18a.75.75 0 0 1-.75-.75V6.75a.75.75 0 0 1 1.5 0v10.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm4.25-.75a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v8.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftRotate270FilledIcon, 'TextAlignLeftRotate270Filled');

const TextAlignLeftRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 18a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm4.5-.5a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-1 0v9Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftRotate270RegularIcon, 'TextAlignLeftRotate270Regular');

const TextAlignLeftRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.75 2c.41 0 .75.34.75.75v10.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm-5 0c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm-4.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftRotate90FilledIcon, 'TextAlignLeftRotate90Filled');

const TextAlignLeftRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 2c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z",
    fill: primaryFill
  }));
};

exports.TextAlignLeftRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignLeftRotate90RegularIcon, 'TextAlignLeftRotate90Regular');

const TextAlignRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.25Zm-4 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm7.75 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightFilled = wrapIcon_1.default( /*#__PURE__*/TextAlignRightFilledIcon, 'TextAlignRightFilled');

const TextAlignRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM9.5 14a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightRegular = wrapIcon_1.default( /*#__PURE__*/TextAlignRightRegularIcon, 'TextAlignRightRegular');

const TextAlignRightRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.25 14a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v10.5c0 .41-.34.75-.75.75Zm5 4a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm4.25-7.75a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v7.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignRightRotate270FilledIcon, 'TextAlignRightRotate270Filled');

const TextAlignRightRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 14a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Zm5 4a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm4.5-7.5a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-1 0v8Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignRightRotate270RegularIcon, 'TextAlignRightRotate270Regular');

const TextAlignRightRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.75 6c.41 0 .75.34.75.75v10.5a.75.75 0 0 1-1.5 0V6.75c0-.41.34-.75.75-.75Zm-5-4c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75ZM6.5 9.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextAlignRightRotate90FilledIcon, 'TextAlignRightRotate90Filled');

const TextAlignRightRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 6c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm-5-4c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM6 9.5a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8Z",
    fill: primaryFill
  }));
};

exports.TextAlignRightRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextAlignRightRotate90RegularIcon, 'TextAlignRightRotate90Regular');

const TextAsteriskFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.6 2.5a.6.6 0 1 0-1.2 0v6.05L5.12 4.27a.6.6 0 1 0-.85.85L8.55 9.4H2.5a.6.6 0 1 0 0 1.2h6.05l-4.28 4.28a.6.6 0 0 0 .85.85l4.28-4.28v6.05a.6.6 0 1 0 1.2 0v-6.05l4.28 4.28a.6.6 0 0 0 .85-.85l-4.28-4.28h6.05a.6.6 0 1 0 0-1.2h-6.05l4.28-4.28a.6.6 0 0 0-.85-.85L10.6 8.55V2.5Z",
    fill: primaryFill
  }));
};

exports.TextAsteriskFilled = wrapIcon_1.default( /*#__PURE__*/TextAsteriskFilledIcon, 'TextAsteriskFilled');

const TextAsteriskRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v6.3L5.05 4.33a.5.5 0 1 0-.7.71L8.78 9.5H2.5a.5.5 0 0 0 0 1h6.3l-4.46 4.45a.5.5 0 1 0 .71.7l4.45-4.44v6.29a.5.5 0 0 0 1 0v-6.3l4.45 4.46a.5.5 0 1 0 .7-.71l-4.44-4.45h6.29a.5.5 0 0 0 0-1h-6.3l4.46-4.45a.5.5 0 1 0-.71-.7L10.5 8.78V2.5Z",
    fill: primaryFill
  }));
};

exports.TextAsteriskRegular = wrapIcon_1.default( /*#__PURE__*/TextAsteriskRegularIcon, 'TextAsteriskRegular');

const TextBaselineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.7 3.47a.75.75 0 0 0-1.4 0l-3.75 9.5a.75.75 0 0 0 1.4.56l1.2-3.03h3.7l1.2 3.03a.75.75 0 0 0 1.4-.56l-3.75-9.5ZM11.27 9H8.73L10 5.8 11.27 9Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.TextBaselineFilled = wrapIcon_1.default( /*#__PURE__*/TextBaselineFilledIcon, 'TextBaselineFilled');

const TextBaselineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.46 3.8a.5.5 0 0 0-.92 0l-4 9.5a.5.5 0 1 0 .92.4L8.02 10h3.96l1.56 3.7a.5.5 0 1 0 .92-.4l-4-9.5Zm1.1 5.2H8.44L10 5.29 11.56 9Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.TextBaselineRegular = wrapIcon_1.default( /*#__PURE__*/TextBaselineRegularIcon, 'TextBaselineRegular');

const TextBoldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 4.5C5 3.67 5.67 3 6.5 3h3.88a4.12 4.12 0 0 1 3.44 6.39 4.24 4.24 0 0 1 1.43 3.24A4.36 4.36 0 0 1 10.88 17H6.5A1.5 1.5 0 0 1 5 15.5v-11ZM8 6v2.25h2.38a1.13 1.13 0 0 0 0-2.25H8Zm0 5.25V14h2.88c.7 0 1.37-.54 1.37-1.37 0-.84-.69-1.38-1.37-1.38H8Z",
    fill: primaryFill
  }));
};

exports.TextBoldFilled = wrapIcon_1.default( /*#__PURE__*/TextBoldFilledIcon, 'TextBoldFilled');

const TextBoldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.5a4 4 0 0 1 3.17 6.44c.9.7 1.58 1.8 1.58 3.31A4.23 4.23 0 0 1 10.75 17h-4c-.69 0-1.25-.56-1.25-1.25V4.25ZM8 11v3.5h2.75c.81 0 1.75-.62 1.75-1.75S11.56 11 10.75 11H8Zm0-2.5h2.25a1.5 1.5 0 1 0 0-3H8v3Z",
    fill: primaryFill
  }));
};

exports.TextBoldRegular = wrapIcon_1.default( /*#__PURE__*/TextBoldRegularIcon, 'TextBoldRegular');

const TextBoxSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1-.5-3.5H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75h2.9c.29-.56.67-1.07 1.13-1.5H6.7c-.4 0-.71-.34-.71-.75S6.32 9 6.7 9H14.36a5.63 5.63 0 0 1 2.65.6V5.5ZM6 6.75c0-.41.32-.75.7-.75h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75Zm6.07 4.7a2 2 0 0 1-1.44 2.47l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.05a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBoxSettingsFilled = wrapIcon_1.default( /*#__PURE__*/TextBoxSettingsFilledIcon, 'TextBoxSettingsFilled');

const TextBoxSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2.7c.1-.35.24-.68.4-1H6.5Zm-1 4h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5Zm6.57-4.56a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBoxSettingsRegular = wrapIcon_1.default( /*#__PURE__*/TextBoxSettingsRegularIcon, 'TextBoxSettingsRegular');

const TextBulletListAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7 4.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h5.46a5.48 5.48 0 0 1 4.39-.09.75.75 0 0 0-.35-1.41h-9.5Zm0 5h2.46c-.14.48-.21.98-.21 1.5H7.75a.75.75 0 0 1 0-1.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM3.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListAddFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListAddFilledIcon, 'TextBulletListAddFilled');

const TextBulletListAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.02 5.5c.03-.34.1-.68.19-1H6.5a.5.5 0 0 0 0 1h3.52ZM4 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm17 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListAddRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListAddRegularIcon, 'TextBulletListAddRegular');

const TextBulletListCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7 4.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h5.46a5.48 5.48 0 0 1 4.39-.09.75.75 0 0 0-.35-1.41h-9.5Zm0 5h2.46c-.14.48-.21.98-.21 1.5H7.75a.75.75 0 0 1 0-1.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM3.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z",
    fill: primaryFill
  }));
};

exports.TextBulletListCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListCheckmarkFilledIcon, 'TextBulletListCheckmarkFilled');

const TextBulletListCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.02 5.5c.03-.34.1-.68.19-1H6.5a.5.5 0 0 0 0 1h3.52ZM4 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm17 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.5.8-.65-.65a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7l-2.65 2.64Z",
    fill: primaryFill
  }));
};

exports.TextBulletListCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListCheckmarkRegularIcon, 'TextBulletListCheckmarkRegular');

const TextBulletListDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7 4.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h5.46a5.48 5.48 0 0 1 4.39-.09.75.75 0 0 0-.35-1.41h-9.5Zm0 5h2.46c-.14.48-.21.98-.21 1.5H7.75a.75.75 0 0 1 0-1.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM3.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TextBulletListDismissFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListDismissFilledIcon, 'TextBulletListDismissFilled');

const TextBulletListDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.02 5.5c.03-.34.1-.68.19-1H6.5a.5.5 0 0 0 0 1h3.52ZM4 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm17 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TextBulletListDismissRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListDismissRegularIcon, 'TextBulletListDismissRegular');

const TextBulletListLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7 4.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Zm0 5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM3.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListLtrFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListLtrFilledIcon, 'TextBulletListLtrFilled');

const TextBulletListLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm-2.5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListLtrRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListLtrRegularIcon, 'TextBulletListLtrRegular');

const TextBulletListLtrRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 3.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM15.25 7c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75ZM11 7.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm-5 0a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm4.25-3.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM4 3.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListLtrRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextBulletListLtrRotate90FilledIcon, 'TextBulletListLtrRotate90Filled');

const TextBulletListLtrRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 3c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM6 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM5.5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListLtrRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextBulletListLtrRotate90RegularIcon, 'TextBulletListLtrRotate90Regular');

const TextBulletListRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.25 2.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V2.75ZM4.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 2c.41 0 .75.34.75.75v11.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V2.75Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextBulletListRotate270FilledIcon, 'TextBulletListRotate270Filled');

const TextBulletListRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5.5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6.5 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM5 14.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Zm5 .5a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12c0 .28.22.5.5.5Zm6-.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextBulletListRotate270RegularIcon, 'TextBulletListRotate270Regular');

const TextBulletListRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.25 5.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75ZM10 5c.41 0 .75.34.75.75v11.5a.75.75 0 0 1-1.5 0V5.75c0-.41.34-.75.75-.75Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextBulletListRotate90FilledIcon, 'TextBulletListRotate90Filled');

const TextBulletListRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 5.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm5-.5c.28 0 .5.22.5.5v12a.5.5 0 0 1-1 0v-12c0-.28.22-.5.5-.5Zm6 .5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextBulletListRotate90RegularIcon, 'TextBulletListRotate90Regular');

const TextBulletListRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.75 6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM13 4.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5c.41 0 .75-.34.75-.75ZM12.25 9a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm0 5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm3.25-4.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM16.75 16a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRtlFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListRtlFilledIcon, 'TextBulletListRtlFilled');

const TextBulletListRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm0 5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm-.5 4.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11Zm2.5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRtlRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListRtlRegularIcon, 'TextBulletListRtlRegular');

const TextBulletListRtlRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 16.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM4.75 13a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 1.5 0v9.5c0 .41-.34.75-.75.75ZM9 12.25a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0v9.5Zm5 0a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0v9.5ZM9.75 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM16 16.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRtlRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextBulletListRtlRotate90FilledIcon, 'TextBulletListRtlRotate90Filled');

const TextBulletListRtlRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1-3a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Zm4.5-.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0v11Zm.5 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListRtlRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextBulletListRtlRotate90RegularIcon, 'TextBulletListRtlRotate90Regular');

const TextBulletListSquareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareFilledIcon, 'TextBulletListSquareFilled');

const TextBulletListSquareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareRegularIcon, 'TextBulletListSquareRegular');

const TextBulletListSquareClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.6a5.48 5.48 0 0 0-5.66.4H9.5a.5.5 0 0 0 0 1h.76a5.48 5.48 0 0 0-.66 6H5a2 2 0 0 1-2-2V5Zm3.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 10.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.75-7h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1Zm1 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareClockFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareClockFilledIcon, 'TextBulletListSquareClockFilled');

const TextBulletListSquareClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 9.2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.2c.1.35.24.68.4 1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h1.84c-.4.28-.77.62-1.08 1H9.5a.5.5 0 0 1-.5-.5Zm10 4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareClockRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareClockRegularIcon, 'TextBulletListSquareClockRegular');

const TextBulletListSquareEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.22l.21-.84a3.2 3.2 0 0 1 .84-1.49l.67-.67H9.5a.5.5 0 0 1 0-1h2.44l3.16-3.16c.53-.53 1.21-.8 1.9-.84V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1.98 4.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareEditFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareEditFilledIcon, 'TextBulletListSquareEditFilled');

const TextBulletListSquareEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.22l.21-.84.04-.16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.23c.32-.14.66-.21 1-.23V5a2 2 0 0 0-2-2H5Zm4.5 11h1.44l1-1H9.5a.5.5 0 0 0 0 1Zm-2-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1.48 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareEditRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareEditRegularIcon, 'TextBulletListSquareEditRegular');

const TextBulletListSquarePersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5.2c-.24-.76-.34-1.7.1-2.4.13-.24.31-.44.52-.6H9.5a.5.5 0 0 1 0-1h2.9a2.87 2.87 0 0 1-.36-2H9.5a.5.5 0 0 1 0-1h2.88c.5-.9 1.47-1.5 2.62-1.5.5 0 1 .1 1.5.4.18.1.35.22.5.36V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM16 9.77a2 2 0 1 0-2 3.46 2 2 0 0 0 2-3.46Zm-5 5.98c0-.69.56-1.25 1.25-1.25h5.5A1.25 1.25 0 0 1 19 15.84v.21a2.03 2.03 0 0 1-.07.45c-.06.29-.2.66-.46 1.04C17.93 18.32 16.9 19 15 19c-1.61 0-2.6-.5-3.2-1.13a2.94 2.94 0 0 1-.8-1.82v-.3Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquarePersonFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquarePersonFilledIcon, 'TextBulletListSquarePersonFilled');

const TextBulletListSquarePersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 8.66V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5c.03.34.1.69.2 1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.26a2.8 2.8 0 0 0-.5-.36c-.17-.1-.33-.18-.5-.24ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h2.88a3 3 0 0 0-.34 1H9.5a.5.5 0 0 1-.5-.5Zm3.8 3a2.66 2.66 0 0 1-.4-.5H9.5a.5.5 0 0 0 0 1h1.32c.42-.32.95-.5 1.48-.5h.5ZM16 9.77a2 2 0 1 0-2 3.46 2 2 0 0 0 2-3.46Zm-5 5.98c0-.69.56-1.25 1.25-1.25h5.5A1.25 1.25 0 0 1 19 15.84v.21a2.03 2.03 0 0 1-.07.45c-.06.29-.2.66-.46 1.04C17.93 18.32 16.9 19 15 19c-1.61 0-2.6-.5-3.2-1.13a2.94 2.94 0 0 1-.8-1.82v-.3Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquarePersonRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquarePersonRegularIcon, 'TextBulletListSquarePersonRegular');

const TextBulletListSquareSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v4.76A4.5 4.5 0 0 1 9.97 13h3.53a.5.5 0 0 1 0 1H9.97c-.05.5-.2.98-.4 1.44L11.11 17H15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2-.25h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-6.62 1.4a3.5 3.5 0 0 0 5.22 4.4l2.54 2.56a.5.5 0 0 0 .71-.71L8.3 15.6a3.5 3.5 0 1 0-5.92-3.7Zm5.2.21a2.5 2.5 0 1 1-4.16 2.78 2.5 2.5 0 0 1 4.16-2.78Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareSearchFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareSearchFilledIcon, 'TextBulletListSquareSearchFilled');

const TextBulletListSquareSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.12 16H15a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4.26c-.35.12-.69.29-1 .5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3.88l-1-1ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm4.5 3.5H9.97a4.5 4.5 0 0 0 0-1h3.53a.5.5 0 0 1 0 1ZM2.38 11.9a3.5 3.5 0 0 0 5.22 4.4l2.54 2.56a.5.5 0 0 0 .71-.71L8.3 15.6a3.5 3.5 0 1 0-5.92-3.7Zm5.2.21a2.5 2.5 0 1 1-4.16 2.78 2.5 2.5 0 0 1 4.16-2.78Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareSearchRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareSearchRegularIcon, 'TextBulletListSquareSearchRegular');

const TextBulletListSquareSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.6a5.48 5.48 0 0 1 .66-6H9.5a.5.5 0 0 1 0-1h1.84A5.47 5.47 0 0 1 17 9.6V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm2.56 4.44a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareSettingsFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareSettingsFilledIcon, 'TextBulletListSquareSettingsFilled');

const TextBulletListSquareSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 10.5c0-.28.22-.5.5-.5h1.84c-.4.28-.77.62-1.08 1H9.5a.5.5 0 0 1-.5-.5ZM16 5v4.2c.35.1.68.24 1 .4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.6c-.16-.32-.3-.65-.4-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.94 6.44a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareSettingsRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareSettingsRegularIcon, 'TextBulletListSquareSettingsRegular');

const TextBulletListSquareShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5.8c-.47-.8-.8-1.8-.8-3h-.5a.5.5 0 0 1 0-1h.5v-1.5c0-.18.03-.35.08-.5H9.5a.5.5 0 0 1 0-1h1.72l.14-.03a4.71 4.71 0 0 0 2.5-1.43 1.62 1.62 0 0 1 2.29 0c.22.23.51.49.85.73V5a2 2 0 0 0-2-2H5Zm2.5 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm5.94 2.24a5.7 5.7 0 0 0 3.06 1.72c.27.04.5.26.5.54V14c0 3.47-3.18 4.73-3.87 4.96a.4.4 0 0 1-.26 0C14.18 18.73 11 17.46 11 14v-2.5c0-.28.23-.5.5-.54a5.7 5.7 0 0 0 3.06-1.72.62.62 0 0 1 .88 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareShieldFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareShieldFilledIcon, 'TextBulletListSquareShieldFilled');

const TextBulletListSquareShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 8.4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.33c.13.36.3.7.48 1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.27a6.33 6.33 0 0 1-1-.86ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h1.72a1.6 1.6 0 0 0-1.14 1H9.5a.5.5 0 0 1-.5-.5Zm.5 3.5h.5v-1h-.5a.5.5 0 0 0 0 1Zm5.94-4.76a5.7 5.7 0 0 0 3.06 1.72c.27.04.5.26.5.54V14c0 3.47-3.18 4.73-3.87 4.96a.4.4 0 0 1-.26 0C14.18 18.73 11 17.46 11 14v-2.5c0-.28.23-.5.5-.54a5.7 5.7 0 0 0 3.06-1.72.62.62 0 0 1 .88 0Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareShieldRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareShieldRegularIcon, 'TextBulletListSquareShieldRegular');

const TextBulletListSquareToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.5c-.42-.31-.94-.5-1.5-.5h-2c-.82 0-1.54.4-2 1h-2a.5.5 0 0 0 0 1h1.55v.04A2.5 2.5 0 0 0 9 13.5V17H5a2 2 0 0 1-2-2V5Zm3.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 10.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.75-7h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareToolboxFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareToolboxFilledIcon, 'TextBulletListSquareToolboxFilled');

const TextBulletListSquareToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 17h4v-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.05c.37.07.7.23 1 .45V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2Zm4.5-6h1.55c.07-.37.23-.7.45-1h-2a.5.5 0 0 0 0 1Zm-2-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareToolboxRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareToolboxRegularIcon, 'TextBulletListSquareToolboxRegular');

const TextBulletListSquareWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.87l-.98-1.7a2.32 2.32 0 0 0-3.47-.67H8.5a.5.5 0 0 0 0 1h3.28L10.34 13H8.5a.5.5 0 0 0 0 1h1.26l-1.45 2.53c-.1.15-.16.3-.21.47H5a2 2 0 0 1-2-2V5Zm4 1.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM7 10a.75.75 0 1 0-1.5 0A.75.75 0 0 0 7 10Zm-.75 4.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 6.5c0 .27.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm5.65 3.55a1.34 1.34 0 0 1 1.5.61l3.67 6.37a1.3 1.3 0 0 1-.5 1.8c-.2.1-.42.17-.65.17h-7.34A1.33 1.33 0 0 1 9 17.68c0-.23.06-.45.17-.65l3.67-6.37c.18-.31.48-.52.8-.61Zm.85 2.45a.5.5 0 1 0-1 0V15a.5.5 0 1 0 1 0v-2.5ZM14 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareWarningFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareWarningFilledIcon, 'TextBulletListSquareWarningFilled');

const TextBulletListSquareWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.87l-.98-1.7-.02-.04V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.61l-.3.53c-.1.15-.16.3-.21.47H5a2 2 0 0 1-2-2V5Zm6.76 9 .58-1H8.5a.5.5 0 0 0 0 1h1.26Zm2.02-3.5.2-.34c.15-.26.34-.48.57-.66H8.5a.5.5 0 0 0 0 1h3.28ZM7 6.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 4.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm5.15 4.05a1.34 1.34 0 0 1 1.5.61l3.67 6.37a1.3 1.3 0 0 1-.5 1.8c-.2.1-.42.17-.65.17h-7.34A1.33 1.33 0 0 1 9 17.68c0-.23.06-.45.17-.65l3.67-6.37c.18-.31.48-.52.8-.61Zm.85 2.45a.5.5 0 1 0-1 0V15a.5.5 0 1 0 1 0v-2.5ZM14 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListSquareWarningRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListSquareWarningRegularIcon, 'TextBulletListSquareWarningRegular');

const TextBulletListTreeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7 4.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Zm4 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextBulletListTreeFilled = wrapIcon_1.default( /*#__PURE__*/TextBulletListTreeFilledIcon, 'TextBulletListTreeFilled');

const TextBulletListTreeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.5 4.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-2.5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TextBulletListTreeRegular = wrapIcon_1.default( /*#__PURE__*/TextBulletListTreeRegularIcon, 'TextBulletListTreeRegular');

const TextCaseLowercaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.75 3.25c.41 0 .75.34.75.75v4.66C13 8.24 13.6 8 14.25 8c1.66 0 3 1.57 3 3.5s-1.34 3.5-3 3.5c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75Zm2.5 10.25c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2Zm-8.6-4.56a2.8 2.8 0 0 0-1.06.23.75.75 0 0 1-.68-1.34 4.26 4.26 0 0 1 1.69-.4c.63-.02 1.34.08 1.99.4C9 8.54 9 9.95 9 10.46v4.04a.75.75 0 0 1-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 0 1-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 0 1 1.1.16.97.97 0 0 0-.55-.76c-.35-.18-.8-.25-1.26-.23ZM7.5 11.5a4.5 4.5 0 0 0-1.22-.24c-.62-.03-1.2.09-1.61.36-.93.62-.65 1.8.27 2.06.75.2 1.67-.19 2.56-1V11.5Z",
    fill: primaryFill
  }));
};

exports.TextCaseLowercaseFilled = wrapIcon_1.default( /*#__PURE__*/TextCaseLowercaseFilledIcon, 'TextCaseLowercaseFilled');

const TextCaseLowercaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S15.66 15 14 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 0 1-1 0V4c0-.28.22-.5.5-.5ZM14 14c.97 0 2-.97 2-2.5S14.97 9 14 9s-2 .97-2 2.5 1.03 2.5 2 2.5ZM5.9 8.69c-.5.02-.92.13-1.18.26a.5.5 0 1 1-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C9 8.7 9 9.96 9 10.46v4.04a.5.5 0 0 1-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 0 1-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26ZM8 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46Z",
    fill: primaryFill
  }));
};

exports.TextCaseLowercaseRegular = wrapIcon_1.default( /*#__PURE__*/TextCaseLowercaseRegularIcon, 'TextCaseLowercaseRegular');

const TextCaseTitleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.5 3.25c.41 0 .75.34.75.75v4.66c.5-.42 1.1-.66 1.75-.66 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75ZM15 13.5c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2ZM6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 1 1-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 0 1-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48ZM4.62 11h3.5L6.45 6.2 4.63 11Z",
    fill: primaryFill
  }));
};

exports.TextCaseTitleFilled = wrapIcon_1.default( /*#__PURE__*/TextCaseTitleFilledIcon, 'TextCaseTitleFilled');

const TextCaseTitleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 0 1-1 0V4c0-.28.22-.5.5-.5ZM15 14c.97 0 2-.97 2-2.5S15.97 9 15 9s-2 .97-2 2.5 1.03 2.5 2 2.5ZM6.96 3.84a.5.5 0 0 0-.94-.02L3.29 11h-.02v.05l-1.24 3.27a.5.5 0 0 0 .94.36L3.98 12h4.76l.92 2.66a.5.5 0 1 0 .95-.32L6.96 3.84ZM4.36 11l2.1-5.54L8.4 11H4.36Z",
    fill: primaryFill
  }));
};

exports.TextCaseTitleRegular = wrapIcon_1.default( /*#__PURE__*/TextCaseTitleRegularIcon, 'TextCaseTitleRegular');

const TextCaseUppercaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 1 1-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 0 1-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48ZM4.62 11h3.5L6.45 6.2 4.63 11ZM12 3.5a.75.75 0 0 0-.75.75V14.5c0 .41.34.75.75.75h2.75a3.5 3.5 0 0 0 1.71-6.55 3.12 3.12 0 0 0-2.34-5.2H12Zm3.75 3.13c0 .9-.73 1.62-1.63 1.62h-1.37V5h1.38c.9 0 1.62.73 1.62 1.63Zm-1 7.12h-2v-4h2a2 2 0 1 1 0 4Z",
    fill: primaryFill
  }));
};

exports.TextCaseUppercaseFilled = wrapIcon_1.default( /*#__PURE__*/TextCaseUppercaseFilledIcon, 'TextCaseUppercaseFilled');

const TextCaseUppercaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.96 3.84a.5.5 0 0 0-.94-.02L3.29 11h-.02v.05l-1.24 3.27a.5.5 0 0 0 .94.36L3.98 12h4.76l.92 2.66a.5.5 0 1 0 .95-.32L6.96 3.84ZM4.36 11l2.1-5.54L8.4 11H4.36Zm7.14-7.25a.5.5 0 0 0-.5.5V14.5c0 .28.22.5.5.5h2.75a3.25 3.25 0 0 0 1.3-6.23 2.87 2.87 0 0 0-1.93-5.02H11.5Zm4 2.88c0 1.03-.84 1.87-1.88 1.87H12V4.75h1.63c1.03 0 1.87.84 1.87 1.88ZM14.25 14H12V9.5h2.25a2.25 2.25 0 0 1 0 4.5Z",
    fill: primaryFill
  }));
};

exports.TextCaseUppercaseRegular = wrapIcon_1.default( /*#__PURE__*/TextCaseUppercaseRegularIcon, 'TextCaseUppercaseRegular');

const TextChangeCaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 1 1-1.41.5l-.78-2.25h-4.59l-.86 2.27a.75.75 0 1 1-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48ZM11.62 11h3.5l-1.68-4.8-1.82 4.8ZM4.9 8.94a2.8 2.8 0 0 0-1.06.23.75.75 0 0 1-.68-1.34 4.26 4.26 0 0 1 1.69-.4c.63-.02 1.34.08 1.99.4 1.42.71 1.41 2.12 1.41 2.63v4.04a.75.75 0 0 1-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 0 1-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 0 1 1.1.16.97.97 0 0 0-.55-.76c-.35-.18-.8-.25-1.26-.23Zm1.85 2.56a4.51 4.51 0 0 0-1.22-.24c-.62-.03-1.2.09-1.61.36-.93.62-.65 1.8.27 2.06.75.2 1.67-.19 2.56-1V11.5Z",
    fill: primaryFill
  }));
};

exports.TextChangeCaseFilled = wrapIcon_1.default( /*#__PURE__*/TextChangeCaseFilledIcon, 'TextChangeCaseFilled');

const TextChangeCaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3.5c.2 0 .39.14.46.34l3.65 10.5a.5.5 0 0 1-.95.32L15.74 12h-4.76l-1.01 2.68a.5.5 0 0 1-.93.01l.24-1.03 1-2.6V11h.01l2.73-7.18a.5.5 0 0 1 .47-.32Zm-.04 1.96L11.36 11h4.03l-1.93-5.54ZM4.9 8.7c-.48.02-.9.13-1.17.26a.5.5 0 0 1-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C8 8.7 8 9.96 8 10.46v4.04a.5.5 0 0 1-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 0 1-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26ZM7 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46Z",
    fill: primaryFill
  }));
};

exports.TextChangeCaseRegular = wrapIcon_1.default( /*#__PURE__*/TextChangeCaseRegularIcon, 'TextChangeCaseRegular');

const TextClearFormattingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 2c.2 0 .4.13.47.32l3.5 8.95a.5.5 0 0 1-.94.37L8.01 9H4l-1.04 2.68a.5.5 0 1 1-.94-.36l3.5-9A.5.5 0 0 1 6 2Zm0 1.88L4.4 8H7.6l-1.6-4.12ZM11.5 2c.28 0 .5.22.5.5v3.52a2.48 2.48 0 0 1 2.26-1.3c.89 0 1.6.34 2.15 1 .55.66.82 1.54.82 2.64l-.01.42-.05-.05a2.49 2.49 0 0 0-1.15-.65 2.86 2.86 0 0 0-.53-1.62c-.36-.47-.86-.7-1.48-.7-.6 0-1.09.24-1.47.72-.3.37-.47.83-.54 1.37v1.03c.05.43.18.8.37 1.12L11 11.37V2.5c0-.28.22-.5.5-.5Zm4.97 7.44 2.1 2.1a1.5 1.5 0 0 1-.01 2.12l-3.6 3.6-4.21-4.22 3.6-3.6a1.5 1.5 0 0 1 2.12 0Zm-2.22 8.52-4.21-4.21-.6.6a1.5 1.5 0 0 0 0 2.12l2.1 2.1c.3.3.71.45 1.12.43h4.09a.5.5 0 1 0 0-1h-2.53l.03-.04Z",
    fill: primaryFill
  }));
};

exports.TextClearFormattingFilled = wrapIcon_1.default( /*#__PURE__*/TextClearFormattingFilledIcon, 'TextClearFormattingFilled');

const TextClearFormattingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 2c.2 0 .4.13.47.32l3.5 8.95a.5.5 0 0 1-.94.37L8.01 9H4l-1.04 2.68a.5.5 0 1 1-.94-.36l3.5-9A.5.5 0 0 1 6 2Zm0 1.88L4.4 8H7.6l-1.6-4.12ZM11.5 2c.28 0 .5.22.5.5v3.52a2.48 2.48 0 0 1 2.26-1.3c.89 0 1.6.34 2.15 1 .55.66.82 1.54.82 2.64l-.01.42-.05-.05a2.49 2.49 0 0 0-1.15-.65 2.86 2.86 0 0 0-.53-1.62c-.36-.47-.86-.7-1.48-.7-.6 0-1.09.24-1.47.72-.3.37-.47.83-.54 1.37v1.03c.05.43.18.8.37 1.12L11 11.37V2.5c0-.28.22-.5.5-.5ZM9.44 16.47a1.5 1.5 0 0 1 0-2.13l4.9-4.9a1.5 1.5 0 0 1 2.13 0l2.1 2.1a1.5 1.5 0 0 1-.01 2.12L14.22 18h2.53a.5.5 0 1 1 0 1h-4.1a1.5 1.5 0 0 1-1.12-.44l-2.1-2.1Zm5.61-6.32-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.7l-2.1-2.1a.5.5 0 0 0-.7 0Zm-1.5 7.1-2.8-2.8-.6.6a.5.5 0 0 0 0 .7l2.1 2.1c.19.2.5.2.7 0l.6-.6Z",
    fill: primaryFill
  }));
};

exports.TextClearFormattingRegular = wrapIcon_1.default( /*#__PURE__*/TextClearFormattingRegularIcon, 'TextClearFormattingRegular');

const TextCollapseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3.5c0-.41.34-.75.75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 3.5Zm0 12c0-.41.34-.75.75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 15.5Zm6.75-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM11 11.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-2-2a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-6 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.TextCollapseFilled = wrapIcon_1.default( /*#__PURE__*/TextCollapseFilledIcon, 'TextCollapseFilled');

const TextCollapseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3.5c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 12c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm6-8c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-2-2a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM3.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.TextCollapseRegular = wrapIcon_1.default( /*#__PURE__*/TextCollapseRegularIcon, 'TextCollapseRegular');

const TextColorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.46 2.31a.5.5 0 0 0-.92 0l-3 7.5a.5.5 0 1 0 .92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 1 0 .92-.38l-3-7.5ZM10 3.85l1.06 2.65H8.94L10 3.85ZM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Z",
    fill: primaryFill
  }));
};

exports.TextColorFilled = wrapIcon_1.default( /*#__PURE__*/TextColorFilledIcon, 'TextColorFilled');

const TextColorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.46 2.31a.5.5 0 0 0-.92 0l-3 7.5a.5.5 0 1 0 .92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 1 0 .92-.38l-3-7.5ZM10 3.85l1.06 2.65H8.94L10 3.85ZM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11ZM4 13.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3Z",
    fill: primaryFill
  }));
};

exports.TextColorRegular = wrapIcon_1.default( /*#__PURE__*/TextColorRegularIcon, 'TextColorRegular');

const TextColorAccentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 13.13c0-.35.24-.63.54-.63h11.92c.3 0 .54.28.54.63v3.74c0 .35-.24.63-.54.63H4.04c-.3 0-.54-.28-.54-.63v-3.75Z",
    fill: primaryFill
  }));
};

exports.TextColorAccentFilled = wrapIcon_1.default( /*#__PURE__*/TextColorAccentFilledIcon, 'TextColorAccentFilled');

const TextColumnOneFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnOneFilledIcon, 'TextColumnOneFilled');

const TextColumnOneRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnOneRegularIcon, 'TextColumnOneRegular');

const TextColumnOneNarrowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM7 11.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM7.75 14a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneNarrowFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnOneNarrowFilledIcon, 'TextColumnOneNarrowFilled');

const TextColumnOneNarrowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 11.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneNarrowRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnOneNarrowRegularIcon, 'TextColumnOneNarrowRegular');

const TextColumnOneWideFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.75 5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Zm0 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3 11.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 14a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneWideFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnOneWideFilledIcon, 'TextColumnOneWideFilled');

const TextColumnOneWideRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneWideRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnOneWideRegularIcon, 'TextColumnOneWideRegular');

const TextColumnOneWideLightningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.75 5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Zm0 3a.75.75 0 0 0 0 1.5h8.46a5.48 5.48 0 0 1 4.39-.09.75.75 0 0 0-.35-1.41H3.75Zm0 3h6.5a5.5 5.5 0 0 0-.88 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 3h5.27a5.57 5.57 0 0 0 .07 1.5H3.75a.75.75 0 0 1 0-1.5Zm15.25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 13 15h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 16 13h-.75l.28-.84a.5.5 0 0 0-.47-.66h-1.18Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneWideLightningFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnOneWideLightningFilledIcon, 'TextColumnOneWideLightningFilled');

const TextColumnOneWideLightningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM9 14.5c0-.17 0-.34.02-.5H3.5a.5.5 0 0 0 0 1h5.52a5.57 5.57 0 0 1-.02-.5Zm.6-2.5c.18-.36.4-.7.66-1H3.5a.5.5 0 0 0 0 1h6.1Zm9.4 2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 13 15h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 16 13h-.75l.28-.84a.5.5 0 0 0-.47-.66h-1.18Z",
    fill: primaryFill
  }));
};

exports.TextColumnOneWideLightningRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnOneWideLightningRegularIcon, 'TextColumnOneWideLightningRegular');

const TextColumnThreeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0A.75.75 0 0 0 6.25 5h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0A.75.75 0 0 0 6.25 8h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnThreeFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnThreeFilledIcon, 'TextColumnThreeFilled');

const TextColumnThreeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnThreeRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnThreeRegularIcon, 'TextColumnThreeRegular');

const TextColumnTwoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0A.75.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0A.75.75 0 0 0 8.25 8h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoFilledIcon, 'TextColumnTwoFilled');

const TextColumnTwoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoRegularIcon, 'TextColumnTwoRegular');

const TextColumnTwoLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 5.75Zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 5.75Zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 8.75Zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 8.75Zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoLeftFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoLeftFilledIcon, 'TextColumnTwoLeftFilled');

const TextColumnTwoLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoLeftRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoLeftRegularIcon, 'TextColumnTwoLeftRegular');

const TextColumnTwoRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75Zm6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75Zm6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75Zm6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoRightFilled = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoRightFilledIcon, 'TextColumnTwoRightFilled');

const TextColumnTwoRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-6 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5Zm6 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-6 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5Zm6 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-6 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5Zm6 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-6 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.TextColumnTwoRightRegular = wrapIcon_1.default( /*#__PURE__*/TextColumnTwoRightRegularIcon, 'TextColumnTwoRightRegular');

const TextContinuousFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 5.5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.5Zm0 9c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 14.5Zm2.78-5.03-1.5-1.5a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06ZM7 8.5c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 8.5Zm.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z",
    fill: primaryFill
  }));
};

exports.TextContinuousFilled = wrapIcon_1.default( /*#__PURE__*/TextContinuousFilledIcon, 'TextContinuousFilled');

const TextContinuousRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 5.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 9c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm1.35-6.35a.5.5 0 1 0-.7.7L3.79 10l-1.14 1.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5ZM7.5 8h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z",
    fill: primaryFill
  }));
};

exports.TextContinuousRegular = wrapIcon_1.default( /*#__PURE__*/TextContinuousRegularIcon, 'TextContinuousRegular');

const TextDensityFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM9 5H2.5a.5.5 0 0 0 0 1H9V5Zm0 3H2.5a.5.5 0 0 0 0 1H9V8Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm7.5 0H12v-3h4.5a1.5 1.5 0 0 1 0 3Zm0-5H12V6h4.5a1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.TextDensityFilled = wrapIcon_1.default( /*#__PURE__*/TextDensityFilledIcon, 'TextDensityFilled');

const TextDensityRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM9 5H2.5a.5.5 0 0 0 0 1H9V5Zm0 3H2.5a.5.5 0 0 0 0 1H9V8Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm7.5 0H12v-1h4.5a.5.5 0 0 0 0-1H12v-1h4.5a1.5 1.5 0 0 1 0 3Zm0-5H12V8h4.5a.5.5 0 0 0 0-1H12V6h4.5a1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.TextDensityRegular = wrapIcon_1.default( /*#__PURE__*/TextDensityRegularIcon, 'TextDensityRegular');

const TextDescriptionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 11.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z",
    fill: primaryFill
  }));
};

exports.TextDescriptionFilled = wrapIcon_1.default( /*#__PURE__*/TextDescriptionFilledIcon, 'TextDescriptionFilled');

const TextDescriptionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM2 11.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z",
    fill: primaryFill
  }));
};

exports.TextDescriptionRegular = wrapIcon_1.default( /*#__PURE__*/TextDescriptionRegularIcon, 'TextDescriptionRegular');

const TextDirectionHorizontalLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3c-.3 0-.58.19-.7.47l-3 7.5a.75.75 0 0 0 1.4.56L12 9.5h3l.8 2.03a.75.75 0 0 0 1.4-.56l-3-7.5a.75.75 0 0 0-.7-.47Zm0 2.77L14.4 8h-1.8l.9-2.23ZM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalLeftFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalLeftFilledIcon, 'TextDirectionHorizontalLeftFilled');

const TextDirectionHorizontalLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3a.5.5 0 0 0-.47.32l-3 8a.5.5 0 0 0 .94.36l1-2.68h3.06l1 2.68a.5.5 0 0 0 .94-.36l-3-8A.5.5 0 0 0 13.5 3Zm0 1.92L14.65 8h-2.3l1.15-3.08Zm-8.35-.77a.5.5 0 1 1 .7.7L4.71 6H9.5a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2Zm0 8a.5.5 0 0 1 .7.7L4.71 14H16.5a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalLeftRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalLeftRegularIcon, 'TextDirectionHorizontalLeftRegular');

const TextDirectionHorizontalLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 0 1-1.4.56L8 9.5H5l-.8 2.03a.75.75 0 0 1-1.4-.56l3-7.5A.75.75 0 0 1 6.5 3Zm0 2.77L5.6 8h1.8l-.9-2.23Zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalLtrFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalLtrFilledIcon, 'TextDirectionHorizontalLtrFilled');

const TextDirectionHorizontalLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3c.2 0 .4.13.47.32l3 8a.5.5 0 0 1-.94.36L8.03 9H4.97l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 6.5 3Zm0 1.92L5.35 8h2.3L6.5 4.92Zm8.35-.77a.5.5 0 1 0-.7.7L15.29 6H10.5a.5.5 0 0 0 0 1h4.8l-1.15 1.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm0 8a.5.5 0 0 0-.7.7L15.29 14H3.5a.5.5 0 0 0 0 1h11.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalLtrRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalLtrRegularIcon, 'TextDirectionHorizontalLtrRegular');

const TextDirectionHorizontalRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 0 1-1.4.56L8 9.5H5l-.8 2.03a.75.75 0 0 1-1.4-.56l3-7.5A.75.75 0 0 1 6.5 3Zm0 2.77L5.6 8h1.8l-.9-2.23Zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalRightFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalRightFilledIcon, 'TextDirectionHorizontalRightFilled');

const TextDirectionHorizontalRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3c.2 0 .4.13.47.32l3 8a.5.5 0 0 1-.94.36L8.03 9H4.97l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 6.5 3Zm0 1.92L5.35 8h2.3L6.5 4.92Zm8.35-.77a.5.5 0 1 0-.7.7L15.29 6H10.5a.5.5 0 0 0 0 1h4.8l-1.15 1.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm0 8a.5.5 0 0 0-.7.7L15.29 14H3.5a.5.5 0 0 0 0 1h11.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalRightRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalRightRegularIcon, 'TextDirectionHorizontalRightRegular');

const TextDirectionHorizontalRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3c-.3 0-.58.19-.7.47l-3 7.5a.75.75 0 0 0 1.4.56L12 9.5h3l.8 2.03a.75.75 0 0 0 1.4-.56l-3-7.5a.75.75 0 0 0-.7-.47Zm0 2.77L14.4 8h-1.8l.9-2.23ZM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalRtlFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalRtlFilledIcon, 'TextDirectionHorizontalRtlFilled');

const TextDirectionHorizontalRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 3a.5.5 0 0 0-.47.32l-3 8a.5.5 0 0 0 .94.36l1-2.68h3.06l1 2.68a.5.5 0 0 0 .94-.36l-3-8A.5.5 0 0 0 13.5 3Zm0 1.92L14.65 8h-2.3l1.15-3.08Zm-8.35-.77a.5.5 0 1 1 .7.7L4.71 6H9.5a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2Zm0 8a.5.5 0 0 1 .7.7L4.71 14H16.5a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2Z",
    fill: primaryFill
  }));
};

exports.TextDirectionHorizontalRtlRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionHorizontalRtlRegularIcon, 'TextDirectionHorizontalRtlRegular');

const TextDirectionRotate270RightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.22 5.22a.75.75 0 0 0 1.06 1.06L6 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2Zm7.5 0a.75.75 0 1 0 1.06 1.06l.72-.72v10.69a.75.75 0 1 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2ZM3 13.5c0-.3.19-.58.47-.7l7.5-3a.75.75 0 1 1 .56 1.4L9.5 12v3l2.03.8a.75.75 0 0 1-.56 1.4l-7.5-3a.75.75 0 0 1-.47-.7Zm2.77 0 2.23.9v-1.8l-2.23.9Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate270RightFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate270RightFilledIcon, 'TextDirectionRotate270RightFilled');

const TextDirectionRotate270RightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.85 5.15a.5.5 0 1 1-.7.7L7 4.71V9.5a.5.5 0 0 1-1 0V4.7L4.85 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Zm8 0a.5.5 0 1 1-.7.7L15 4.71V16.5a.5.5 0 0 1-1 0V4.7l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2ZM3 13.5c0-.2.13-.4.32-.47l8-3a.5.5 0 0 1 .36.94l-2.68 1v3.06l2.68 1a.5.5 0 0 1-.36.94l-8-3A.5.5 0 0 1 3 13.5Zm1.92 0L8 14.65v-2.3L4.92 13.5Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate270RightRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate270RightRegularIcon, 'TextDirectionRotate270RightRegular');

const TextDirectionRotate90LeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 13.5c0 .3-.19.58-.47.7l-7.5 3a.75.75 0 0 1-.56-1.4l2.03-.8v-3l-2.03-.8a.75.75 0 0 1 .56-1.4l7.5 3c.28.12.47.4.47.7Zm-2.77 0L12 12.6v1.8l2.23-.9ZM5 16.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L5 5.56v10.69Zm8-7a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v3.69Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90LeftFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90LeftFilledIcon, 'TextDirectionRotate90LeftFilled');

const TextDirectionRotate90LeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 13.5c0 .2-.13.4-.32.47l-8 3a.5.5 0 1 1-.36-.94l2.68-1v-3.06l-2.68-1a.5.5 0 1 1 .36-.94l8 3c.2.07.32.26.32.47Zm-1.92 0L12 12.35v2.3l3.08-1.15ZM5 16.5a.5.5 0 1 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 5.5 3a.5.5 0 0 0-.35.15l-2 2a.5.5 0 1 0 .7.7L5 4.71V16.5Zm8-7a.5.5 0 0 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L13 4.71V9.5Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90LeftRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90LeftRegularIcon, 'TextDirectionRotate90LeftRegular');

const TextDirectionRotate90LtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 6.5c0-.3-.19-.58-.47-.7l-7.5-3a.75.75 0 0 0-.56 1.4l2.03.8v3l-2.03.8a.75.75 0 1 0 .56 1.4l7.5-3a.75.75 0 0 0 .47-.7Zm-2.77 0L12 7.4V5.6l2.23.9ZM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V3.75Zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72v-3.69Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90LtrFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90LtrFilledIcon, 'TextDirectionRotate90LtrFilled');

const TextDirectionRotate90LtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 6.5a.5.5 0 0 0-.32-.47l-8-3a.5.5 0 1 0-.36.94l2.68 1v3.06l-2.68 1a.5.5 0 0 0 .36.94l8-3A.5.5 0 0 0 17 6.5Zm-1.92 0L12 7.65v-2.3l3.08 1.15ZM5 3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-2-2a.5.5 0 1 1 .7-.7L5 15.29V3.5Zm8 7a.5.5 0 0 1 1 0v4.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V10.5Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90LtrRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90LtrRegularIcon, 'TextDirectionRotate90LtrRegular');

const TextDirectionRotate90RightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 6.5c0-.3-.19-.58-.47-.7l-7.5-3a.75.75 0 0 0-.56 1.4l2.03.8v3l-2.03.8a.75.75 0 1 0 .56 1.4l7.5-3a.75.75 0 0 0 .47-.7Zm-2.77 0L12 7.4V5.6l2.23.9ZM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V3.75Zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72v-3.69Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90RightFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90RightFilledIcon, 'TextDirectionRotate90RightFilled');

const TextDirectionRotate90RightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 6.5a.5.5 0 0 0-.32-.47l-8-3a.5.5 0 1 0-.36.94l2.68 1v3.06l-2.68 1a.5.5 0 0 0 .36.94l8-3A.5.5 0 0 0 17 6.5Zm-1.92 0L12 7.65v-2.3l3.08 1.15ZM5 3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-2-2a.5.5 0 1 1 .7-.7L5 15.29V3.5Zm8 7a.5.5 0 0 1 1 0v4.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V10.5Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90RightRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90RightRegularIcon, 'TextDirectionRotate90RightRegular');

const TextDirectionRotate90RtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 13.5c0 .3-.19.58-.47.7l-7.5 3a.75.75 0 0 1-.56-1.4l2.03-.8v-3l-2.03-.8a.75.75 0 0 1 .56-1.4l7.5 3c.28.12.47.4.47.7Zm-2.77 0L12 12.6v1.8l2.23-.9ZM5 16.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L5 5.56v10.69Zm8-7a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v3.69Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90RtlFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90RtlFilledIcon, 'TextDirectionRotate90RtlFilled');

const TextDirectionRotate90RtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 13.5c0 .2-.13.4-.32.47l-8 3a.5.5 0 1 1-.36-.94l2.68-1v-3.06l-2.68-1a.5.5 0 1 1 .36-.94l8 3c.2.07.32.26.32.47Zm-1.92 0L12 12.35v2.3l3.08-1.15ZM5 16.5a.5.5 0 1 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 5.5 3a.5.5 0 0 0-.35.15l-2 2a.5.5 0 1 0 .7.7L5 4.71V16.5Zm8-7a.5.5 0 0 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L13 4.71V9.5Z",
    fill: primaryFill
  }));
};

exports.TextDirectionRotate90RtlRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionRotate90RtlRegularIcon, 'TextDirectionRotate90RtlRegular');

const TextDirectionVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75Zm8 9a.75.75 0 0 1 1.5 0v1.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.76.76 0 0 1 0-1.07c.3-.3.77-.28 1.06.01l.72.72v-1.69ZM13.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 0 1-1.4.56L15 9.5h-3l-.8 2.03a.75.75 0 0 1-1.4-.56l3-7.5a.75.75 0 0 1 .7-.47Zm0 2.77L12.6 8h1.8l-.9-2.23Z",
    fill: primaryFill
  }));
};

exports.TextDirectionVerticalFilled = wrapIcon_1.default( /*#__PURE__*/TextDirectionVerticalFilledIcon, 'TextDirectionVerticalFilled');

const TextDirectionVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-2-2a.5.5 0 0 1 .7-.7L5 15.29V3.5Zm8 9a.5.5 0 0 1 1 0v2.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V12.5Zm.5-9.5a.5.5 0 0 0-.47.32l-3 8a.5.5 0 0 0 .94.36l1-2.68h3.06l1 2.68a.5.5 0 0 0 .94-.36l-3-8A.5.5 0 0 0 13.5 3Zm0 1.92L14.65 8h-2.3l1.15-3.08Z",
    fill: primaryFill
  }));
};

exports.TextDirectionVerticalRegular = wrapIcon_1.default( /*#__PURE__*/TextDirectionVerticalRegularIcon, 'TextDirectionVerticalRegular');

const TextEditStyleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.09 6.7a2.26 2.26 0 0 1 3.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 0 1-.55.35l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.21.15-.4.28-.57l.1-.12 6.89-6.9ZM6.42 2.23l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 0 1-.56.3l-.1-.02a.5.5 0 0 1-.3-.56l.02-.08 3.5-9a.5.5 0 0 1 .9-.1ZM6 3.87 4.4 8H7.6l-1.6-4.13Z",
    fill: primaryFill
  }));
};

exports.TextEditStyleFilled = wrapIcon_1.default( /*#__PURE__*/TextEditStyleFilledIcon, 'TextEditStyleFilled');

const TextEditStyleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.09 6.7a2.26 2.26 0 0 1 3.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 0 1-.55.35l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.21.15-.4.28-.57l.1-.12 6.89-6.9Zm2.5.7a1.26 1.26 0 0 0-1.7-.08l-.1.09-6.88 6.9a.5.5 0 0 0-.1.15l-.03.08-.58 2.27 2.27-.56a.5.5 0 0 0 .12-.05l.05-.03.07-.06 6.87-6.9c.5-.5.5-1.3 0-1.8ZM6.41 2.24l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 0 1-.56.3l-.1-.02a.5.5 0 0 1-.3-.56l.02-.08 3.5-9a.5.5 0 0 1 .9-.1ZM6 3.87 4.4 8H7.6l-1.6-4.13Z",
    fill: primaryFill
  }));
};

exports.TextEditStyleRegular = wrapIcon_1.default( /*#__PURE__*/TextEditStyleRegularIcon, 'TextEditStyleRegular');

const TextEffectsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.09 3.9a2.25 2.25 0 0 0-4.18 0L4.9 11.37a2.2 2.2 0 0 0-.04.1l-1.2 2.95a2.25 2.25 0 0 0 4.18 1.68l.64-1.59h3.04l.64 1.6a2.25 2.25 0 1 0 4.18-1.7l-1.2-2.95a2.27 2.27 0 0 0-.04-.1L12.1 3.92Zm-1.4.57 3.04 7.48v.03l1.22 2.99a.75.75 0 0 1-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 0 1-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 0 1 1.39 0Zm1.23 7.03H8.08L10 6.75l1.92 4.75Z",
    fill: primaryFill
  }));
};

exports.TextEffectsFilled = wrapIcon_1.default( /*#__PURE__*/TextEffectsFilledIcon, 'TextEffectsFilled');

const TextEffectsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.62 4.1a1.75 1.75 0 0 0-3.24 0l-3.02 7.46-.03.07-1.2 2.96a1.75 1.75 0 0 0 3.24 1.32L8.14 14h3.72l.77 1.9a1.75 1.75 0 0 0 3.24-1.3l-1.2-2.97a1.73 1.73 0 0 0-.03-.07l-3.02-7.47Zm-1.18 6.4L10 9.41l-.44 1.09h.88Zm.26-6.03 3.03 7.48v.03l1.22 2.99a.75.75 0 0 1-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 0 1-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 0 1 1.39 0Zm1.22 7.03H8.08L10 6.75l1.92 4.75Z",
    fill: primaryFill
  }));
};

exports.TextEffectsRegular = wrapIcon_1.default( /*#__PURE__*/TextEffectsRegularIcon, 'TextEffectsRegular');

const TextExpandFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.75 3.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H4.75ZM4 16.25c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm7-4c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0-4c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM5.5 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6 8.5V10h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V11H3.5a.5.5 0 0 1 0-1H5V8.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.TextExpandFilled = wrapIcon_1.default( /*#__PURE__*/TextExpandFilledIcon, 'TextExpandFilled');

const TextExpandRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 4.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 12c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm6-4c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0-4c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5.5 14a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM6 8.5a.5.5 0 0 0-1 0V10H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H6V8.5Z",
    fill: primaryFill
  }));
};

exports.TextExpandRegular = wrapIcon_1.default( /*#__PURE__*/TextExpandRegularIcon, 'TextExpandRegular');

const TextFieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm5-.5v1a.5.5 0 0 0 1 0V7h1.5v6H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5V7H12v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.TextFieldFilled = wrapIcon_1.default( /*#__PURE__*/TextFieldFilledIcon, 'TextFieldFilled');

const TextFieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 7H12v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V7h1.5v6H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5V7ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z",
    fill: primaryFill
  }));
};

exports.TextFieldRegular = wrapIcon_1.default( /*#__PURE__*/TextFieldRegularIcon, 'TextFieldRegular');

const TextFirstLineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.72 2.22a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5ZM3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm12.5 10a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5ZM3.75 10h12.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.TextFirstLineFilled = wrapIcon_1.default( /*#__PURE__*/TextFirstLineFilledIcon, 'TextFirstLineFilled');

const TextFirstLineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.65 3.15a.5.5 0 0 1 .7.7L16.21 5l1.14 1.15a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5ZM12.5 4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10Zm5 10a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm.5-4.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.TextFirstLineRegular = wrapIcon_1.default( /*#__PURE__*/TextFirstLineRegularIcon, 'TextFirstLineRegular');

const TextFontFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 2c.3 0 .59.2.7.48l2.27 5.94.05.13.03.1-.79 2.12-.49-1.27H4.22l-.77 2.02a.75.75 0 0 1-1.4-.53l3.25-8.5A.75.75 0 0 1 6 2ZM4.8 8h2.4L6 4.85 4.8 8Zm7.9-2.51a.75.75 0 0 0-1.4 0L7.2 16.5h-.45a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5H8.8l.75-2h4.92l.75 2h-.46a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-.44L12.7 5.49Zm1.2 7.5h-3.8L12 7.9l1.9 5.1Z",
    fill: primaryFill
  }));
};

exports.TextFontFilled = wrapIcon_1.default( /*#__PURE__*/TextFontFilledIcon, 'TextFontFilled');

const TextFontRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 1 1-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 0 1 6 2ZM4.3 8.26h3.4L6 3.88 4.3 8.26Zm8.17-2.94a.5.5 0 0 0-.94 0L7.15 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56L12.47 5.32ZM14.34 13H9.72l2.29-6.09L14.34 13Z",
    fill: primaryFill
  }));
};

exports.TextFontRegular = wrapIcon_1.default( /*#__PURE__*/TextFontRegularIcon, 'TextFontRegular');

const TextFontInfoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.2 3.75a.75.75 0 0 0-1.42-.02L2.8 14.23a.75.75 0 1 0 1.4.54l.86-2.27H8.1c.1-.53.27-1.03.51-1.5H5.63l1.82-4.8 1.48 4.24c.32-.47.7-.9 1.15-1.25L8.2 3.75Zm5.3 7.13a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24Zm0 5.12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5Zm0-7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z",
    fill: primaryFill
  }));
};

exports.TextFontInfoFilled = wrapIcon_1.default( /*#__PURE__*/TextFontInfoFilledIcon, 'TextFontInfoFilled');

const TextFontInfoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.96 3.84a.5.5 0 0 0-.94-.02L4.29 11h-.02v.05l-1.24 3.27a.5.5 0 0 0 .94.36L4.98 12h3.23c.1-.35.23-.68.39-1H5.36l2.1-5.54 1.65 4.73c.23-.3.48-.58.77-.83L7.96 3.84Zm5.54 7.04a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24Zm0 5.12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5Zm0-7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z",
    fill: primaryFill
  }));
};

exports.TextFontInfoRegular = wrapIcon_1.default( /*#__PURE__*/TextFontInfoRegularIcon, 'TextFontInfoRegular');

const TextFontSizeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 3c.32 0 .6.2.7.5l4.26 12.25a.75.75 0 0 1-1.42.5l-1.3-3.75h-4.66L9.2 16.26a.75.75 0 0 1-1.4.01L6.92 14H4.26l-.8 2.25a.75.75 0 0 1-1.42-.5L4.8 8a.75.75 0 0 1 1.41-.02l2.28 5.9L12.3 3.48c.1-.3.39-.5.7-.49ZM4.8 12.5h1.55l-.8-2.1-.75 2.1Zm8.19-6.52L11.14 11h3.58l-1.74-5.02Z",
    fill: primaryFill
  }));
};

exports.TextFontSizeFilled = wrapIcon_1.default( /*#__PURE__*/TextFontSizeFilledIcon, 'TextFontSizeFilled');

const TextFontSizeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 3.5c.2 0 .4.13.47.32l3 8v.02l1.5 3.98a.5.5 0 1 1-.94.36l-1.38-3.68h-5.3l-1.38 3.68a.5.5 0 0 1-.93 0L6.96 13.5H4.04l-1.08 2.69a.5.5 0 1 1-.92-.38l1.2-2.98v-.03l1.8-4.49a.5.5 0 0 1 .92 0l1.8 4.5v.02l.73 1.79 1.04-2.78v-.03l3-7.99A.5.5 0 0 1 13 3.5Zm-2.28 8h4.56L13 5.42l-2.28 6.08Zm-4.16 1L5.5 9.85 4.44 12.5h2.12Z",
    fill: primaryFill
  }));
};

exports.TextFontSizeRegular = wrapIcon_1.default( /*#__PURE__*/TextFontSizeRegularIcon, 'TextFontSizeRegular');

const TextFootnoteFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.3 3c.4.03.7.35.7.75v5.5a.75.75 0 0 1-1.5 0V6.11l-.31.23a.75.75 0 0 1-.83-1.25 2.84 2.84 0 0 0 1.16-1.5.75.75 0 0 1 .79-.59Zm-7.1 12.07a.79.79 0 0 1-.2-.55V6.61c0-.22.07-.42.21-.58a.76.76 0 0 1 .57-.24c.22 0 .41.08.56.24.15.16.22.36.22.58v2.35a2.6 2.6 0 0 1 1.8-.71c.88 0 1.6.32 2.13.98.54.65.8 1.5.8 2.54 0 1.03-.26 1.89-.8 2.54-.54.66-1.26.98-2.14.98a2.5 2.5 0 0 1-1.84-.72.74.74 0 0 1-.77.72c-.2 0-.4-.06-.54-.22Zm1.8-1.76c.3.37.68.55 1.14.55.49 0 .86-.18 1.13-.53.28-.36.43-.88.43-1.56s-.15-1.2-.43-1.56a1.33 1.33 0 0 0-1.13-.54c-.46 0-.83.19-1.13.56-.3.38-.46.88-.46 1.54s.16 1.16.46 1.54Zm-10.25 1.2c0 .22.08.4.24.54H2c.16.14.36.2.57.2a.8.8 0 0 0 .5-.16c.14-.1.23-.25.3-.43l.74-2.02h3.27l.76 2.02a.8.8 0 0 0 .8.59c.2 0 .4-.06.56-.2a.69.69 0 0 0 .25-.53c0-.13-.03-.26-.09-.4L6.71 6.44a1.1 1.1 0 0 0-.36-.51.97.97 0 0 0-.59-.18c-.22 0-.43.06-.6.18-.18.12-.3.3-.38.51l-2.94 7.68c-.06.14-.09.27-.09.4Zm5.13-3.3H4.62l1.13-3.1 1.13 3.1Z",
    fill: primaryFill
  }));
};

exports.TextFootnoteFilled = wrapIcon_1.default( /*#__PURE__*/TextFootnoteFilledIcon, 'TextFootnoteFilled');

const TextFootnoteRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 3.5a.5.5 0 0 0-1 0c0 .47-.1.84-.3 1.17-.2.33-.52.65-.99.97a.5.5 0 1 0 .58.83c.26-.19.5-.38.71-.59V9.5a.5.5 0 0 0 1 0v-6Zm-7.5 11.54a.5.5 0 0 0 .36-.14.5.5 0 0 0 .15-.38v-.66h.02a2.3 2.3 0 0 0 2.07 1.18c.8 0 1.46-.3 1.95-.89.5-.6.74-1.39.74-2.38 0-1-.25-1.79-.74-2.38-.49-.6-1.14-.9-1.93-.9a2.23 2.23 0 0 0-2.03 1.17h-.03V6.61c0-.17-.05-.3-.15-.41a.49.49 0 0 0-.38-.16.51.51 0 0 0-.38.16c-.1.1-.15.24-.15.4v7.92c0 .16.04.28.13.38.1.1.21.14.36.14Zm3.72-1.56c-.33.42-.77.63-1.33.63-.54 0-.98-.21-1.33-.64-.34-.43-.5-1-.5-1.7s.16-1.26.5-1.7c.35-.43.8-.65 1.33-.65.56 0 1 .22 1.33.64.32.42.48.99.48 1.7 0 .73-.16 1.3-.48 1.72ZM2.16 14.87c.1.09.25.13.41.13.27 0 .46-.14.56-.42l.8-2.2h3.63l.81 2.2c.1.28.29.42.56.42a.6.6 0 0 0 .4-.13c.12-.1.17-.21.17-.35a.9.9 0 0 0-.07-.3l-2.95-7.7C6.34 6.19 6.11 6 5.76 6c-.36 0-.61.18-.75.53l-2.94 7.68a.9.9 0 0 0-.07.3c0 .15.05.26.16.36Zm5.07-3.42H4.27l1.46-4.02h.04l1.46 4.02Z",
    fill: primaryFill
  }));
};

exports.TextFootnoteRegular = wrapIcon_1.default( /*#__PURE__*/TextFootnoteRegularIcon, 'TextFootnoteRegular');

const TextGrammarArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h.46a5.48 5.48 0 0 1 4.58 0h9.46a.75.75 0 0 0 0-1.5H2.75Zm14.5 7.5h-6.34a5.53 5.53 0 0 0 .07-1.5h6.27a.75.75 0 0 1 0 1.5Zm0-3h-6.62a5.5 5.5 0 0 0-.89-1.5h7.51a.75.75 0 0 1 0 1.5Zm-7.25 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.14-.35l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextGrammarArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarArrowLeftFilledIcon, 'TextGrammarArrowLeftFilled');

const TextGrammarArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm7.24 3c.26.3.48.64.66 1h7.1a.5.5 0 0 0 0-1H9.74ZM11 14.5c0 .17 0 .34-.02.5h6.52a.5.5 0 0 0 0-1h-6.52l.02.5Zm-1 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.14-.35l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextGrammarArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarArrowLeftRegularIcon, 'TextGrammarArrowLeftRegular');

const TextGrammarArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-2.35 4.85A.5.5 0 0 1 3 14.5a.5.5 0 0 1 .15-.35l2-2a.5.5 0 0 1 .7.7L4.71 14H7.5a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2ZM2 5.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 3c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H7.79a5.48 5.48 0 0 0-4.58 0h-.46A.75.75 0 0 1 2 8.75Zm8.9 6.75h6.35a.75.75 0 0 0 0-1.5h-6.27a5.59 5.59 0 0 1-.07 1.5Zm-.27-3h6.62a.75.75 0 0 0 0-1.5h-7.5c.36.45.66.95.88 1.5Z",
    fill: primaryFill
  }));
};

exports.TextGrammarArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarArrowRightFilledIcon, 'TextGrammarArrowRightFilled');

const TextGrammarArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm7.24 3c.26.3.48.64.66 1h7.1a.5.5 0 0 0 0-1H9.74ZM11 14.5c0 .17 0 .34-.02.5h6.52a.5.5 0 0 0 0-1h-6.52l.02.5Zm-10 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.15 2.35a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0-.15.35.5.5 0 0 0 .14.35l2 2Z",
    fill: primaryFill
  }));
};

exports.TextGrammarArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarArrowRightRegularIcon, 'TextGrammarArrowRightRegular');

const TextGrammarCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46c.41 0 .75-.34.75-.75ZM9.02 14a5.57 5.57 0 0 0 .07 1.5H2.75a.75.75 0 0 1 0-1.5h6.27Zm1.24-3a5.5 5.5 0 0 0-.89 1.5H2.75a.75.75 0 0 1 0-1.5h7.5ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.5-2a.5.5 0 0 1 .75.66l-.06.06-3.51 3.65a.5.5 0 0 1-.67.02l-.07-.07-1.34-1.65a.5.5 0 0 1 .72-.7l.06.07 1 1.23 3.12-3.27Z",
    fill: primaryFill
  }));
};

exports.TextGrammarCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarCheckmarkFilledIcon, 'TextGrammarCheckmarkFilled');

const TextGrammarCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15ZM9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 0 0 0 1h6.52a5.57 5.57 0 0 1-.02-.5Zm.6-2.5c.18-.36.4-.7.66-1H2.5a.5.5 0 0 0 0 1h7.1Zm4.9-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm-1.12 5.77-1-1.23-.06-.06a.5.5 0 0 0-.72.7l1.34 1.64.07.07c.2.16.48.15.67-.02l3.5-3.65.07-.06a.5.5 0 0 0-.75-.66l-3.12 3.27Z",
    fill: primaryFill
  }));
};

exports.TextGrammarCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarCheckmarkRegularIcon, 'TextGrammarCheckmarkRegular');

const TextGrammarDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46c.41 0 .75-.34.75-.75ZM9.1 15.5H2.74a.75.75 0 0 1 0-1.5h6.27a5.57 5.57 0 0 0 .07 1.5Zm.27-3H2.75a.75.75 0 0 1 0-1.5h7.5a5.5 5.5 0 0 0-.88 1.5Zm9.63 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5.7 1.15 1.15a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14Z",
    fill: primaryFill
  }));
};

exports.TextGrammarDismissFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarDismissFilledIcon, 'TextGrammarDismissFilled');

const TextGrammarDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm-7.24 3c-.26.3-.48.64-.66 1H2.5a.5.5 0 0 1 0-1h7.76ZM9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 0 1 0-1h6.52l-.02.5Zm5.5 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.15-2.65-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14a.5.5 0 0 1 .7.7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7Z",
    fill: primaryFill
  }));
};

exports.TextGrammarDismissRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarDismissRegularIcon, 'TextGrammarDismissRegular');

const TextGrammarErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46a.75.75 0 0 0 0-1.5H2.75Zm0 3h7.5a5.5 5.5 0 0 0-.88 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 3h6.27a5.57 5.57 0 0 0 .07 1.5H2.75a.75.75 0 0 1 0-1.5Zm16.25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TextGrammarErrorFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarErrorFilledIcon, 'TextGrammarErrorFilled');

const TextGrammarErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 0 0 0 1h6.52a5.57 5.57 0 0 1-.02-.5Zm.6-2.5c.18-.36.4-.7.66-1H2.5a.5.5 0 0 0 0 1h7.1Zm9.4 2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TextGrammarErrorRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarErrorRegularIcon, 'TextGrammarErrorRegular');

const TextGrammarSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46c.41 0 .75-.34.75-.75ZM2.75 11h7.5a5.5 5.5 0 0 0-.88 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 3h6.27a5.57 5.57 0 0 0 .07 1.5H2.75a.75.75 0 0 1 0-1.5Zm9.32-2.56a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextGrammarSettingsFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarSettingsFilledIcon, 'TextGrammarSettingsFilled');

const TextGrammarSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 5.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Zm-9 6c0 .17 0 .34.02.5H2.5a.5.5 0 0 1 0-1h6.52l-.02.5Zm1.26-3.5c-.26.3-.48.64-.66 1H2.5a.5.5 0 0 1 0-1h7.76Zm1.8.44a2 2 0 0 1-1.42 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TextGrammarSettingsRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarSettingsRegularIcon, 'TextGrammarSettingsRegular');

const TextGrammarWandFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h6.63a1.5 1.5 0 0 1-.28-1.5H2.75Zm0 3h6.63L7.88 15H2.75a.75.75 0 0 1 0-1.5ZM14.5 7.44a.5.5 0 0 0-1 0l-.1.79a2.5 2.5 0 0 1-2.17 2.18l-.8.1a.5.5 0 0 0 0 .99l.8.1a2.5 2.5 0 0 1 2.18 2.17l.1.8a.5.5 0 0 0 .99 0l.1-.8a2.5 2.5 0 0 1 2.17-2.18l.8-.1a.5.5 0 0 0 0-.99l-.8-.1a2.5 2.5 0 0 1-2.18-2.17l-.1-.8Zm-2.65 5.7c.2.2.2.52 0 .71l-4 4a.5.5 0 0 1-.7-.7l4-4c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TextGrammarWandFilled = wrapIcon_1.default( /*#__PURE__*/TextGrammarWandFilledIcon, 'TextGrammarWandFilled');

const TextGrammarWandRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 3a.5.5 0 0 0 0 1h6.88a1.5 1.5 0 0 1-.37-.99V11H2.5Zm0 3h6.38l-1 1H2.5a.5.5 0 0 1 0-1ZM14 7a.5.5 0 0 1 .5.44l.1.79a2.5 2.5 0 0 0 2.17 2.18l.8.1a.5.5 0 0 1 0 .99l-.8.1a2.5 2.5 0 0 0-2.18 2.17l-.1.8a.5.5 0 0 1-.99 0l-.1-.8a2.5 2.5 0 0 0-2.17-2.18l-.8-.1a.5.5 0 0 1 0-.99l.8-.1a2.5 2.5 0 0 0 2.18-2.17l.1-.8A.5.5 0 0 1 14 7Zm0 2.6a3.5 3.5 0 0 1-1.4 1.4c.59.32 1.08.81 1.4 1.4a3.5 3.5 0 0 1 1.4-1.4A3.5 3.5 0 0 1 14 9.6Zm-2.15 3.55c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l4-4c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TextGrammarWandRegular = wrapIcon_1.default( /*#__PURE__*/TextGrammarWandRegularIcon, 'TextGrammarWandRegular');

const TextHangingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.25 3.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5Zm-5 10a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h7.5ZM12 9.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5c.41 0 .75-.34.75-.75Zm3.72 1.47a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextHangingFilled = wrapIcon_1.default( /*#__PURE__*/TextHangingFilledIcon, 'TextHangingFilled');

const TextHangingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13Zm-4 10a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9Zm.5-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm2.15 2.15 1.5-1.5a.5.5 0 0 1 .7.7L16.21 12l1.14 1.15a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextHangingRegular = wrapIcon_1.default( /*#__PURE__*/TextHangingRegularIcon, 'TextHangingRegular');

const TextHeader1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.57 3.82a.74.74 0 0 0-.8.1.75.75 0 0 0-.26.43 6.52 6.52 0 0 1-2.68 3.53.75.75 0 1 0 .84 1.24 8.77 8.77 0 0 0 1.83-1.65v8.03a.75.75 0 0 0 1.5 0V4.52a.75.75 0 0 0-.43-.7ZM3.5 4.5a.75.75 0 1 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 1 0-1.5 0V9h-5V4.5Z",
    fill: primaryFill
  }));
};

exports.TextHeader1Filled = wrapIcon_1.default( /*#__PURE__*/TextHeader1FilledIcon, 'TextHeader1Filled');

const TextHeader1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.55 4a.5.5 0 0 1 .45.5v11a.5.5 0 0 1-1 0V6.73a8.58 8.58 0 0 1-2.22 2.19.5.5 0 1 1-.56-.84 6.76 6.76 0 0 0 2.83-3.8.5.5 0 0 1 .5-.28ZM2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 1 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextHeader1Regular = wrapIcon_1.default( /*#__PURE__*/TextHeader1RegularIcon, 'TextHeader1Regular');

const TextHeader2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 4.5a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-1.5 0V9h-5V4.5Zm11.25.75A2.3 2.3 0 0 0 12.5 7.5a.75.75 0 0 1-1.5 0 3.8 3.8 0 0 1 3.75-3.75c1.4 0 2.48.8 2.97 1.91.5 1.11.41 2.5-.33 3.73a6.18 6.18 0 0 1-1.52 1.6l-.82.62-.07.04c-.3.22-.58.43-.85.65-.9.72-1.57 1.45-1.8 2.45h4.92a.75.75 0 0 1 0 1.5H11.5a.75.75 0 0 1-.75-.75c0-2.1 1.23-3.4 2.44-4.37l.9-.69.07-.04.78-.59c.53-.42.93-.8 1.17-1.2.5-.85.52-1.71.24-2.34a1.68 1.68 0 0 0-1.6-1.02Z",
    fill: primaryFill
  }));
};

exports.TextHeader2Filled = wrapIcon_1.default( /*#__PURE__*/TextHeader2FilledIcon, 'TextHeader2Filled');

const TextHeader2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm12 1A2.54 2.54 0 0 0 12 7.5a.5.5 0 0 1-1 0C11 5.75 12.45 4 14.5 4c1.24 0 2.4.57 3.05 1.54.66 1 .71 2.33-.12 3.72-.42.7-1 1.24-1.62 1.71-.3.24-.62.46-.92.67l-.14.1c-.26.18-.52.35-.77.54-1.01.75-1.78 1.51-1.95 2.72h5.47a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5c0-2 1.17-3.13 2.4-4.03.25-.19.52-.38.79-.56l.13-.09c.3-.21.6-.42.88-.64.57-.43 1.04-.89 1.37-1.44.67-1.1.56-2.02.14-2.65A2.64 2.64 0 0 0 14.5 5Z",
    fill: primaryFill
  }));
};

exports.TextHeader2Regular = wrapIcon_1.default( /*#__PURE__*/TextHeader2RegularIcon, 'TextHeader2Regular');

const TextHeader3FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 4.5a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-1.5 0V9h-5V4.5Zm8.97 1.96c.09-.3.22-.57.47-.79.24-.2.69-.42 1.56-.42.78 0 1.26.3 1.55.65.32.37.45.82.45 1.1 0 .36-.1.92-.45 1.38-.33.42-.96.87-2.3.87a.75.75 0 0 0 0 1.5c.45 0 1.2.11 1.81.42.6.3.94.71.94 1.33 0 .84-.26 1.39-.6 1.72-.33.34-.82.53-1.4.53-.68 0-1.15-.12-1.46-.3a1.17 1.17 0 0 1-.55-.85.75.75 0 1 0-1.48.3c.17.81.6 1.44 1.26 1.84.63.38 1.41.51 2.23.51.92 0 1.8-.3 2.47-.97A3.82 3.82 0 0 0 18 12.5c0-1.23-.7-2.03-1.48-2.51.28-.2.52-.44.72-.7.63-.8.76-1.74.76-2.29 0-.63-.25-1.43-.8-2.08a3.43 3.43 0 0 0-2.7-1.17 3.8 3.8 0 0 0-2.53.78 3.02 3.02 0 0 0-.94 1.51.75.75 0 0 0 1.44.42Z",
    fill: primaryFill
  }));
};

exports.TextHeader3Filled = wrapIcon_1.default( /*#__PURE__*/TextHeader3FilledIcon, 'TextHeader3Filled');

const TextHeader3RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 4.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V10h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V9H3V4.5Zm8.98 2.14c.09-.3.28-.7.66-1.04.38-.32.95-.6 1.86-.6C16.24 5 17 6.19 17 7c0 .5-.1 1.11-.5 1.6-.37.46-1.08.9-2.5.9a.5.5 0 0 0 0 1c.5 0 1.3.06 1.94.36.31.15.57.34.76.6.18.24.3.57.3 1.04 0 1-.33 1.6-.76 1.96a2.7 2.7 0 0 1-1.74.54c-.7 0-1.22-.12-1.61-.36-.38-.24-.7-.63-.92-1.3a.5.5 0 1 0-.94.32c.27.83.71 1.44 1.33 1.83.61.38 1.34.51 2.14.51.82 0 1.7-.2 2.38-.77.7-.58 1.12-1.48 1.12-2.73 0-.66-.18-1.2-.5-1.63-.3-.42-.7-.7-1.1-.9.36-.2.65-.46.88-.74.6-.74.72-1.63.72-2.23 0-1.39-1.24-3-3.5-3a3.7 3.7 0 0 0-2.51.85 3.22 3.22 0 0 0-.97 1.51.5.5 0 0 0 .96.28Z",
    fill: primaryFill
  }));
};

exports.TextHeader3Regular = wrapIcon_1.default( /*#__PURE__*/TextHeader3RegularIcon, 'TextHeader3Regular');

const TextIndentDecreaseLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75ZM6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Zm0 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-3.28-2.22a.75.75 0 0 0 1.06-1.06l-.97-.97.97-.97a.75.75 0 0 0-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseLtrFilled = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseLtrFilledIcon, 'TextIndentDecreaseLtrFilled');

const TextIndentDecreaseLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5ZM3.56 7.73a.5.5 0 0 1 .7.7L3.22 9.5l1.06 1.06a.5.5 0 1 1-.7.7l-1.42-1.4a.5.5 0 0 1 0-.71l1.41-1.42ZM6.5 9a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1h-11ZM6 14.5c0-.28.22-.5.5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseLtrRegular = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseLtrRegularIcon, 'TextIndentDecreaseLtrRegular');

const TextIndentDecreaseRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75ZM6.25 5.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-6.22 9.47a.75.75 0 0 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.97.97-.97-.97Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRotate270FilledIcon, 'TextIndentDecreaseRotate270Filled');

const TextIndentDecreaseRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c.28 0 .5.22.5.5v10a.5.5 0 0 1-1 0v-10c0-.28.22-.5.5-.5ZM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-6.15 9.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7L10 16.29l-1.15-1.14Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRotate270RegularIcon, 'TextIndentDecreaseRotate270Regular');

const TextIndentDecreaseRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.97 4.78a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.97-.97.97.97ZM6.25 7.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5ZM10 7c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRotate90FilledIcon, 'TextIndentDecreaseRotate90Filled');

const TextIndentDecreaseRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.15 4.85a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7L10 3.71l1.15 1.14ZM6 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-5.5 0a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0v-10Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRotate90RegularIcon, 'TextIndentDecreaseRotate90Regular');

const TextIndentDecreaseRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.25 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h7.5ZM14 9.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h10.5c.41 0 .75-.34.75-.75Zm0 5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5c.41 0 .75-.34.75-.75Zm1.22-7.03c.3-.3.77-.3 1.06 0l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRtlFilled = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRtlFilledIcon, 'TextIndentDecreaseRtlFilled');

const TextIndentDecreaseRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm-3 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM7 14.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm9.45-6.76a.5.5 0 1 0-.7.7L16.8 9.5l-1.06 1.06a.5.5 0 1 0 .7.71l1.42-1.41a.5.5 0 0 0 0-.7l-1.42-1.42Z",
    fill: primaryFill
  }));
};

exports.TextIndentDecreaseRtlRegular = wrapIcon_1.default( /*#__PURE__*/TextIndentDecreaseRtlRegularIcon, 'TextIndentDecreaseRtlRegular');

const TextIndentIncreaseLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75ZM6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Zm0 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM3.03 7.72a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseLtrFilled = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseLtrFilledIcon, 'TextIndentIncreaseLtrFilled');

const TextIndentIncreaseLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM2.85 7.73a.5.5 0 1 0-.7.7L3.2 9.5l-1.06 1.06a.5.5 0 1 0 .7.7l1.42-1.4a.5.5 0 0 0 0-.71L2.85 7.73Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseLtrRegular = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseLtrRegularIcon, 'TextIndentIncreaseLtrRegular');

const TextIndentIncreaseRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75ZM6.25 5.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-4.28 12.03a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.97-.97.97.97Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRotate270FilledIcon, 'TextIndentIncreaseRotate270Filled');

const TextIndentIncreaseRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c.28 0 .5.22.5.5v10a.5.5 0 0 1-1 0v-10c0-.28.22-.5.5-.5ZM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3.85 11.85a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 0 0 .7.7L10 16.21l1.15 1.14Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRotate270RegularIcon, 'TextIndentIncreaseRotate270Regular');

const TextIndentIncreaseRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.03 2.22a.75.75 0 0 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 0 0-1.06-1.06l-.97.97-.97-.97ZM6.25 7.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-6 9.5v-9.5a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRotate90FilledIcon, 'TextIndentIncreaseRotate90Filled');

const TextIndentIncreaseRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.85 2.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7L10 3.79 8.85 2.65ZM6 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-5.5 10v-10a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRotate90RegularIcon, 'TextIndentIncreaseRotate90Regular');

const TextIndentIncreaseRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5c.41 0 .75-.34.75-.75ZM13.25 9a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5Zm0 5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5Zm3.72-6.28a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRtlFilled = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRtlFilledIcon, 'TextIndentIncreaseRtlFilled');

const TextIndentIncreaseRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 4.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-3 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5ZM7.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm10.37-6.26a.5.5 0 0 0-.71 0l-1.41 1.41a.5.5 0 0 0 0 .7l1.41 1.42a.5.5 0 1 0 .7-.7L16.82 9.5l1.06-1.06a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextIndentIncreaseRtlRegular = wrapIcon_1.default( /*#__PURE__*/TextIndentIncreaseRtlRegularIcon, 'TextIndentIncreaseRtlRegular');

const TextItalicFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3.25c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-3.23L8.59 15.5h2.66a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.23L11.41 4H8.75A.75.75 0 0 1 8 3.25Z",
    fill: primaryFill
  }));
};

exports.TextItalicFilled = wrapIcon_1.default( /*#__PURE__*/TextItalicFilledIcon, 'TextItalicFilled');

const TextItalicRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 3a.5.5 0 0 1 0 1h-3.16L8.23 16h3.27a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.16l4.61-12H8.5a.5.5 0 0 1 0-1H16Z",
    fill: primaryFill
  }));
};

exports.TextItalicRegular = wrapIcon_1.default( /*#__PURE__*/TextItalicRegularIcon, 'TextItalicRegular');

const TextLineSpacingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.78 4.22a.75.75 0 0 1-1.06 1.06L16 4.56v3.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2ZM3 4.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 3 4.25ZM15.25 11c.41 0 .75.34.75.75v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.69c0-.41.34-.75.75-.75ZM3 9.25c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 9.25Zm.75 4.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z",
    fill: primaryFill
  }));
};

exports.TextLineSpacingFilled = wrapIcon_1.default( /*#__PURE__*/TextLineSpacingFilledIcon, 'TextLineSpacingFilled');

const TextLineSpacingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 3.7v4.8a.5.5 0 0 0 1 0V3.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L15 3.71ZM2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM15 16.3v-4.8a.5.5 0 0 1 1 0v4.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L15 16.29Z",
    fill: primaryFill
  }));
};

exports.TextLineSpacingRegular = wrapIcon_1.default( /*#__PURE__*/TextLineSpacingRegularIcon, 'TextLineSpacingRegular');

const TextMoreFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.25 2c.3 0 .58.18.7.47L14.04 15a2.24 2.24 0 0 0-1.69-.17l-.95-2.34H5.08l-1.64 4.03a.75.75 0 1 1-1.39-.56l5.5-13.5a.75.75 0 0 1 .7-.47ZM13 15.75c.63 0 1.15.46 1.24 1.07l.01.18A1.25 1.25 0 1 1 13 15.75ZM5.7 11h5.1L8.25 4.74 5.7 11Zm4.55 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextMoreFilled = wrapIcon_1.default( /*#__PURE__*/TextMoreFilledIcon, 'TextMoreFilled');

const TextMoreRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2c.2 0 .39.12.46.31l5.1 12.51a2.26 2.26 0 0 0-1.08 0L11.33 12H4.67l-1.7 4.19a.5.5 0 1 1-.93-.38l5.5-13.5A.5.5 0 0 1 8 2Zm5 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 1 1 0-2.5Zm0 0ZM5.08 11h5.84L8 3.83 5.08 11Zm5.17 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextMoreRegular = wrapIcon_1.default( /*#__PURE__*/TextMoreRegularIcon, 'TextMoreRegular');

const TextNumberFormatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.97 2.98c.52.25.91.74 1.17 1.46a.75.75 0 0 1-1.4.51c-.18-.47-.35-.59-.44-.63-.12-.06-.27-.07-.58-.07a.69.69 0 0 0-.5.17c-.12.1-.22.27-.3.5a2.82 2.82 0 0 0-.17.88c0 .41 0 .9.16 1.3.08.18.17.32.3.42.11.1.3.2.6.23.08 0 .28 0 .48-.07a.8.8 0 0 0 .46-.45.75.75 0 0 1 1.37.61c-.63 1.42-2.03 1.45-2.48 1.4a2.58 2.58 0 0 1-1.4-.56c-.35-.3-.58-.68-.72-1.04-.27-.68-.27-1.43-.27-1.8v-.08a3.36 3.36 0 0 1 .03-.4c.03-.26.1-.61.23-.97.14-.36.35-.77.72-1.09.37-.34.87-.55 1.49-.55h.03c.28 0 .75 0 1.22.23ZM4.7 2.75c.31 0 .59.2.7.5l1.77 5a.75.75 0 0 1-1.42.5l-.09-.25h-2.1l-.11.27a.75.75 0 1 1-1.4-.54l1.94-5c.1-.3.4-.48.7-.48Zm-.04 2.9L4.14 7h1l-.48-1.34Zm.64 5.1c.39.03.7.35.7.75v5a.75.75 0 0 1-1.5 0v-2.7l-.2.14a.75.75 0 1 1-.84-1.25c.56-.37.97-.96 1.05-1.35a.75.75 0 0 1 .79-.59Zm4.54 1.5c-.31 0-.59.29-.59.61a.75.75 0 1 1-1.5 0 2.12 2.12 0 0 1 3.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 0 1 0 1.5H8.55a.73.73 0 0 1-.05 0 .75.75 0 0 1-.75-.75c0-1.16.69-1.8 1.27-2.25L9.4 14l.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 0 0-.54-.26Zm4.88.37a.49.49 0 0 1 .14-.23c.07-.06.2-.14.49-.14.49 0 .6.3.6.39 0 .17-.04.31-.12.4-.04.06-.19.21-.7.21a.75.75 0 0 0 0 1.5c.2 0 .45.03.64.11.08.04.12.08.13.1.02.02.04.06.04.18 0 .33-.1.44-.15.49-.08.06-.22.12-.44.12-.26 0-.39-.05-.44-.08-.05-.03-.13-.1-.2-.31a.75.75 0 0 0-1.42.47 2 2 0 0 0 .81 1.1c.4.25.83.32 1.25.32.45 0 .98-.11 1.4-.48.46-.38.7-.95.7-1.63a1.77 1.77 0 0 0-.43-1.18c.36-.47.42-1 .42-1.32 0-.93-.8-1.89-2.1-1.89-.62 0-1.11.2-1.47.52-.34.3-.51.66-.6.93a.75.75 0 1 0 1.45.42ZM8 3.5v5a.75.75 0 0 0 .87.74v.01h1.63c.24 0 .73-.04 1.2-.3.52-.3.92-.87.92-1.7 0-.43-.1-.8-.28-1.12a1.7 1.7 0 0 0-.29-.35c.15-.27.24-.62.24-1.02 0-.41-.08-.77-.25-1.08a1.69 1.69 0 0 0-.66-.67c-.46-.26-.95-.26-1.12-.26H8.75A.75.75 0 0 0 8 3.5Zm2.5 4.25h-1v-1H10.44c.19 0 .38.01.51.08.05.02.08.05.1.08.03.04.07.13.07.33 0 .17-.04.26-.06.3a.3.3 0 0 1-.12.1.96.96 0 0 1-.44.11Zm-.88-2.5H9.5v-1h.75c.16 0 .3.01.4.07a.2.2 0 0 1 .08.08c.02.04.06.15.06.36 0 .18-.03.27-.06.3a.25.25 0 0 1-.1.1.76.76 0 0 1-.35.09h-.66Z",
    fill: primaryFill
  }));
};

exports.TextNumberFormatFilled = wrapIcon_1.default( /*#__PURE__*/TextNumberFormatFilledIcon, 'TextNumberFormatFilled');

const TextNumberFormatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.94 3c.21 0 .4.14.47.33l1.77 5a.5.5 0 1 1-.94.34L6 8H3.73l-.26.68a.5.5 0 0 1-.94-.36l1.94-5A.5.5 0 0 1 4.94 3Zm-.82 4h1.53l-.73-2.06L4.12 7ZM8.5 3H10c.17 0 .6 0 1.01.23.22.12.42.3.56.57.15.26.22.58.22.96 0 .45-.12.8-.32 1.08.15.1.3.24.4.42.16.27.25.6.25.98 0 .75-.35 1.23-.8 1.49-.4.24-.85.27-1.07.27H8.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5ZM10 4H9v1.5h1.02c.12 0 .33-.02.5-.12.12-.08.27-.22.27-.62 0-.25-.04-.4-.1-.48a.44.44 0 0 0-.17-.18c-.16-.09-.36-.1-.52-.1ZM9 6.5V8h1.25c.14 0 .38-.03.57-.14.15-.08.3-.23.3-.62a1.11 1.11 0 0 0-.08-.41.47.47 0 0 0-.23-.23c-.2-.1-.44-.1-.62-.1H9Zm8.4-1.97c-.24-.69-.6-1.1-1.05-1.33-.4-.2-.83-.2-1.1-.2h-.03c-.55 0-1 .19-1.33.49-.32.29-.52.65-.64.99A4.06 4.06 0 0 0 13 5.77v.06c0 .38 0 1.08.25 1.72.13.33.33.67.66.93.32.27.74.45 1.25.5.42.05 1.67.02 2.23-1.24a.5.5 0 1 0-.9-.4c-.3.64-.94.68-1.22.65a1.34 1.34 0 0 1-.73-.28 1.26 1.26 0 0 1-.36-.52A3.89 3.89 0 0 1 14 5.8V5.8a2.15 2.15 0 0 1 .02-.28c.03-.2.07-.44.16-.68.1-.25.22-.45.38-.6a.94.94 0 0 1 .66-.23c.3 0 .5 0 .7.1.15.08.36.25.55.77a.5.5 0 0 0 .94-.34Zm-3.2 7.67a.74.74 0 0 0-.22.35.5.5 0 0 1-.96-.28c.07-.23.22-.55.52-.82.3-.27.73-.45 1.3-.45 1.17 0 1.85.85 1.85 1.64a1.9 1.9 0 0 1-.52 1.33 1.53 1.53 0 0 1 .25.27c.18.24.27.55.27.9 0 .63-.21 1.12-.6 1.44-.37.32-.83.42-1.24.42-.4 0-.78-.06-1.11-.28a1.75 1.75 0 0 1-.72-.97.5.5 0 0 1 .95-.32c.05.14.1.23.15.3l.01.02a.7.7 0 0 0 .04.04l.01.02.02.01a.52.52 0 0 0 .2.12c.11.04.26.06.45.06.26 0 .46-.07.6-.18.12-.1.24-.29.24-.68a.53.53 0 0 0-.08-.32.58.58 0 0 0-.24-.18c-.23-.11-.53-.14-.75-.14a.5.5 0 1 1 0-1c.58 0 .8-.18.91-.3a.9.9 0 0 0 .16-.56c0-.22-.22-.64-.84-.64-.35 0-.54.1-.65.2Zm-5.2.66c0-.44.37-.86.84-.86.33 0 .6.16.75.37.12.19.18.5-.07.92-.13.21-.3.4-.55.58-.12.1-.24.19-.38.28l-.06.04-.36.26C8.61 14.88 8 15.46 8 16.5c0 .28.22.5.5.5h2.69a.5.5 0 1 0 0-1H9.1c.13-.28.36-.5.68-.75l.32-.23h.02l.06-.05.42-.31c.29-.23.58-.5.79-.86.41-.7.4-1.43.05-1.98A1.87 1.87 0 0 0 8 12.86a.5.5 0 1 0 1 0Zm-4.58.87c.2-.13.4-.3.58-.47v3.24a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.98-.1 2.8 2.8 0 0 1-1.16 1.5.5.5 0 1 0 .56.83Z",
    fill: primaryFill
  }));
};

exports.TextNumberFormatRegular = wrapIcon_1.default( /*#__PURE__*/TextNumberFormatRegularIcon, 'TextNumberFormatRegular');

const TextNumberListLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 1.5a.5.5 0 0 0-.39-.49.5.5 0 0 0-.56.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 1 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 0 0 1 0v-4ZM8.75 4a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 5a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM8 14.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm-5.35-7.1a.5.5 0 0 0 .7.7l.05-.04.2-.12C3.76 8.09 4 8 4.3 8c.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H3.59c.04-.1.1-.2.17-.27.17-.18.4-.31.71-.47l.13-.06c.26-.13.58-.29.83-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15A1.92 1.92 0 0 0 4.33 7h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm.01-.02-.01.02s.1-.1.01-.02Zm1.09 7.87c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.42.42 0 0 0-.1.07.5.5 0 0 1-.88-.46v-.01l.02-.02a.8.8 0 0 1 .1-.15c.07-.08.17-.17.3-.27.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 0 1-.4-.42l-.01-.01v-.01a.5.5 0 0 1 .87-.48l.1.08c.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 0 1-.5-.5Zm-.32-1.25.02-.03v.01l-.01.01v.01Z",
    fill: primaryFill
  }));
};

exports.TextNumberListLtrFilled = wrapIcon_1.default( /*#__PURE__*/TextNumberListLtrFilledIcon, 'TextNumberListLtrFilled');

const TextNumberListLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 1.5a.5.5 0 0 0-.39-.49.5.5 0 0 0-.56.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 1 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 0 0 1 0v-4ZM2.65 7.65a.5.5 0 0 0 .7.7l.05-.04.2-.12C3.76 8.09 4 8 4.3 8c.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H3.59c.04-.1.1-.2.17-.27a2.38 2.38 0 0 1 .83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15A1.92 1.92 0 0 0 4.33 7h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm.01-.02-.01.02s.1-.1.01-.02ZM4.25 15a.5.5 0 1 0 0 1c.34 0 .53.1.63.18.1.09.13.2.13.3-.01.2-.19.52-.76.52-.41 0-.63-.1-.72-.17a.42.42 0 0 1-.1-.07.5.5 0 0 0-.88.46v.01l.02.02a.8.8 0 0 0 .1.15c.07.08.17.17.3.27.28.18.7.33 1.28.33 1.03 0 1.73-.67 1.76-1.48.01-.37-.12-.74-.4-1.02.28-.28.41-.65.4-1.02-.03-.8-.73-1.48-1.76-1.48-.59 0-1 .15-1.28.33a1.4 1.4 0 0 0-.4.42l-.01.01v.01a.5.5 0 0 0 .87.48.42.42 0 0 1 .1-.08c.1-.07.3-.17.72-.17.57 0 .75.33.76.52 0 .1-.04.21-.13.3-.1.08-.29.18-.63.18Zm-.82-.75.01-.02v.02ZM8.5 4a.5.5 0 1 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 5a.5.5 0 1 0 0 1h8a.5.5 0 0 0 0-1h-8ZM8 14.5c0-.28.22-.5.5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextNumberListLtrRegular = wrapIcon_1.default( /*#__PURE__*/TextNumberListLtrRegularIcon, 'TextNumberListLtrRegular');

const TextNumberListRotate270FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.75 11a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75ZM1.01 14.38A.5.5 0 0 1 1.5 14h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.44 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.07.5.5 0 0 1-.27-.56Zm7.34 1.97a.5.5 0 0 1-.7 0h-.01v-.01a1.45 1.45 0 0 1-.11-.12A2.5 2.5 0 0 1 7 14.68c0-.38.1-.79.35-1.11A1.4 1.4 0 0 1 8.5 13c.55 0 .93.24 1.2.57.21.25.37.57.5.83l.06.13c.16.3.3.54.47.7.08.08.16.14.27.18V13.5a.5.5 0 1 1 1 0V16a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.52a3.32 3.32 0 0 1-.77-1.15 3.18 3.18 0 0 0-.35-.62.5.5 0 0 0-.44-.21c-.18 0-.28.07-.35.16a.93.93 0 0 0-.15.53 1.5 1.5 0 0 0 .35.95v.01c.2.2.2.5 0 .7Zm6.65-1.6a.5.5 0 1 0 1 0c0-.34.1-.53.18-.63.09-.1.2-.13.3-.13.2.01.52.19.52.76 0 .41-.1.63-.17.72a.42.42 0 0 1-.07.1.5.5 0 0 0 .46.88h.01l.02-.02.04-.02.1-.08c.09-.07.18-.17.28-.3.18-.28.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .59.15 1 .33 1.28a1.4 1.4 0 0 0 .42.4l.01.01h.01a.5.5 0 0 0 .48-.87.42.42 0 0 1-.08-.1c-.07-.1-.17-.3-.17-.72 0-.57.33-.75.52-.76.1 0 .21.04.3.13.08.1.18.29.18.63Zm-.75.82-.02-.01h.02Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRotate270Filled = wrapIcon_1.default( /*#__PURE__*/TextNumberListRotate270FilledIcon, 'TextNumberListRotate270Filled');

const TextNumberListRotate270RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm.5 3.75a.5.5 0 1 0 1 0c0-.34.1-.53.18-.63.09-.1.2-.13.3-.13.2.01.52.19.52.76 0 .41-.1.63-.17.72a.42.42 0 0 1-.07.1.5.5 0 0 0 .46.88h.01l.02-.02.04-.02.1-.08c.09-.07.18-.17.28-.3.18-.28.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .59.15 1 .33 1.28a1.4 1.4 0 0 0 .42.4l.01.01h.01a.5.5 0 0 0 .48-.87.42.42 0 0 1-.08-.1c-.07-.1-.17-.3-.17-.72 0-.57.33-.75.52-.76.1 0 .21.04.3.13.08.1.18.29.18.63Zm-6.65 1.6a.5.5 0 0 1-.7 0h-.01v-.01a1.45 1.45 0 0 1-.11-.12A2.5 2.5 0 0 1 7 14.68c0-.38.1-.79.35-1.11A1.4 1.4 0 0 1 8.5 13c.55 0 .93.24 1.2.57a4.2 4.2 0 0 1 .56.96c.16.3.3.54.47.7.08.08.16.14.27.18V13.5a.5.5 0 1 1 1 0V16a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.52a3.32 3.32 0 0 1-.77-1.15 3.18 3.18 0 0 0-.35-.62.5.5 0 0 0-.44-.21c-.18 0-.28.07-.35.16a.93.93 0 0 0-.15.53 1.5 1.5 0 0 0 .35.95v.01c.2.2.2.5 0 .7Zm-7.34-1.97A.5.5 0 0 1 1.5 14h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.44 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.07.5.5 0 0 1-.27-.56Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRotate270Regular = wrapIcon_1.default( /*#__PURE__*/TextNumberListRotate270RegularIcon, 'TextNumberListRotate270Regular');

const TextNumberListRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.99 4.61a.5.5 0 0 1-.49.39h-4a.5.5 0 0 1 0-1h2.58c-.2-.22-.38-.48-.53-.78a.5.5 0 1 1 .9-.44 2.96 2.96 0 0 0 1.15 1.2l.12.07c.2.1.32.34.27.56Zm-7.34-1.96c.2-.2.5-.2.7 0h.01v.01a1.3 1.3 0 0 1 .11.12A2.44 2.44 0 0 1 13 4.32c0 .38-.1.79-.35 1.11A1.4 1.4 0 0 1 11.5 6a1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.56-.96c-.16-.3-.3-.54-.47-.7A.93.93 0 0 0 9 3.58V5.5a.5.5 0 1 1-1 0V3c0-.28.22-.5.5-.5.62 0 1.08.2 1.44.52a3.32 3.32 0 0 1 .77 1.15c.13.27.23.47.35.62a.5.5 0 0 0 .44.21c.18 0 .28-.07.35-.16.09-.12.15-.3.15-.53a1.5 1.5 0 0 0-.35-.95v-.01a.5.5 0 0 1 0-.7ZM5 4.25a.5.5 0 0 0-1 0c0 .34-.1.53-.18.63-.09.1-.2.13-.3.13C3.32 5 3 4.82 3 4.25c0-.41.1-.63.17-.72a.41.41 0 0 1 .07-.1.5.5 0 0 0-.46-.88h-.01l-.02.02a.83.83 0 0 0-.15.1 1.4 1.4 0 0 0-.27.3c-.18.28-.33.7-.33 1.28 0 1.03.67 1.73 1.48 1.76.37.01.74-.12 1.02-.4.28.28.65.41 1.02.4C6.32 5.98 7 5.28 7 4.25c0-.59-.15-1-.33-1.28a1.4 1.4 0 0 0-.42-.4l-.01-.01h-.01a.5.5 0 0 0-.48.87l.08.1c.07.1.17.3.17.72 0 .57-.33.75-.52.76a.37.37 0 0 1-.3-.13C5.1 4.78 5 4.59 5 4.25Zm.75-.82.02.01h-.02ZM5.25 8c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextNumberListRotate90FilledIcon, 'TextNumberListRotate90Filled');

const TextNumberListRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.99 4.61a.5.5 0 0 1-.49.39h-4a.5.5 0 0 1 0-1h2.58c-.2-.22-.38-.48-.53-.78a.5.5 0 1 1 .9-.44 2.96 2.96 0 0 0 1.15 1.2l.12.07c.2.1.32.34.27.56Zm-7.34-1.96c.2-.2.5-.2.7 0h.01v.01a1.3 1.3 0 0 1 .11.12A2.44 2.44 0 0 1 13 4.32c0 .38-.1.79-.35 1.11A1.4 1.4 0 0 1 11.5 6a1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.56-.96c-.16-.3-.3-.54-.47-.7A.93.93 0 0 0 9 3.58V5.5a.5.5 0 1 1-1 0V3c0-.28.22-.5.5-.5.62 0 1.08.2 1.44.52a3.32 3.32 0 0 1 .77 1.15c.13.27.23.47.35.62a.5.5 0 0 0 .44.21c.18 0 .28-.07.35-.16.09-.12.15-.3.15-.53a1.5 1.5 0 0 0-.35-.95v-.01a.5.5 0 0 1 0-.7ZM4.5 3.75c.28 0 .5.22.5.5 0 .34.1.53.18.63.09.1.2.13.3.13.2-.01.52-.19.52-.76 0-.41-.1-.63-.17-.72a.41.41 0 0 0-.07-.1l.02.02h-.01l-.01-.01h-.01a.5.5 0 0 1 .47-.89h.01l.02.02a.83.83 0 0 1 .15.1c.08.07.17.17.27.3.18.28.33.7.33 1.28 0 1.03-.67 1.73-1.48 1.76-.37.01-.74-.12-1.02-.4-.28.28-.65.41-1.02.4C2.68 5.98 2 5.28 2 4.25c0-.59.15-1 .33-1.28a1.4 1.4 0 0 1 .42-.4l.01-.01h.01a.5.5 0 0 1 .48.87.41.41 0 0 0-.08.1c-.07.1-.17.3-.17.72 0 .57.33.75.52.76.1 0 .21-.04.3-.13.08-.1.18-.29.18-.63 0-.28.22-.5.5-.5ZM5.5 8c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextNumberListRotate90RegularIcon, 'TextNumberListRotate90Regular');

const TextNumberListRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 1.5a.5.5 0 0 0-.39-.49.5.5 0 0 0-.56.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 1 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 0 0 1 0v-4Zm-2.35 6.15a.5.5 0 0 0 .7.7l.05-.04.2-.12c.17-.1.41-.19.71-.19.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44 3.18 3.18 0 0 1-.76.43c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1h-1.91c.04-.1.1-.2.17-.27a2.38 2.38 0 0 1 .83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15a1.92 1.92 0 0 0-1.1-.35h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm1.1 7.85c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.42.42 0 0 0-.1.07l.02-.02v.01l-.01.01v.01a.5.5 0 0 1-.89-.47v-.01l.02-.02.02-.04.08-.1c.07-.09.17-.18.3-.28.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 0 1-.4-.42l-.01-.01v-.01a.5.5 0 0 1 .87-.48l.1.08c.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 0 1-.5-.5ZM3.75 4a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 5a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRtlFilled = wrapIcon_1.default( /*#__PURE__*/TextNumberListRtlFilledIcon, 'TextNumberListRtlFilled');

const TextNumberListRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 1.5a.5.5 0 0 0-.38-.49.5.5 0 0 0-.57.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 0 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 1 0 1 0v-4Zm-2.35 6.15a.5.5 0 0 0 .7.7l.05-.04.2-.12c.17-.1.41-.19.71-.19.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1h-1.91c.04-.1.1-.2.17-.27a2.38 2.38 0 0 1 .83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15a1.92 1.92 0 0 0-1.1-.35h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm1.1 7.85c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.41.41 0 0 0-.1.07l.02-.02v.01l-.01.01v.01a.5.5 0 0 1-.89-.47v-.01h.01v-.02a.8.8 0 0 1 .11-.15c.07-.08.17-.17.3-.27.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 0 1-.4-.42l-.01-.01v-.01a.5.5 0 0 1 .88-.48c.01.02.04.05.09.08.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 0 1-.5-.5ZM3.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 5a.5.5 0 1 0 0 1h8a.5.5 0 0 0 0-1h-8Z",
    fill: primaryFill
  }));
};

exports.TextNumberListRtlRegular = wrapIcon_1.default( /*#__PURE__*/TextNumberListRtlRegularIcon, 'TextNumberListRtlRegular');

const TextParagraphFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.25 2c.41 0 .75.34.75.75v2.5A2.75 2.75 0 0 1 15.25 8h-3.8l1.36 1.5a.75.75 0 0 1-1.12 1L9.2 7.75a.75.75 0 0 1 0-1L11.7 4a.75.75 0 0 1 1.12 1l-1.36 1.5h3.8c.69 0 1.25-.56 1.25-1.25v-2.5c0-.41.34-.75.75-.75ZM8.3 9.5a.75.75 0 1 0-1.1 1L8.55 12h-5.8a.75.75 0 0 0 0 1.5h5.8L7.2 15a.75.75 0 0 0 1.1 1l2.5-2.75a.75.75 0 0 0 0-1L8.3 9.5Z",
    fill: primaryFill
  }));
};

exports.TextParagraphFilled = wrapIcon_1.default( /*#__PURE__*/TextParagraphFilledIcon, 'TextParagraphFilled');

const TextParagraphRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.15 10.85a.5.5 0 0 0 .7-.7L10.71 8h4.79A2.5 2.5 0 0 0 18 5.5v-3s0-.5-.5-.5-.5.5-.5.5v3c0 .83-.67 1.5-1.5 1.5h-4.8l2.15-2.15a.5.5 0 0 0-.7-.7l-3 3a.5.5 0 0 0 0 .7l3 3Zm-4.3-1.7a.5.5 0 1 0-.7.7L9.29 12H2.5s-.5 0-.5.5.5.5.5.5h6.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3a.5.5 0 0 0 0-.7l-3-3Z",
    fill: primaryFill
  }));
};

exports.TextParagraphRegular = wrapIcon_1.default( /*#__PURE__*/TextParagraphRegularIcon, 'TextParagraphRegular');

const TextParagraphDirectionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM3.15 5.65c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L4.79 8 3.15 6.35a.5.5 0 0 1 0-.7Zm2.7 6a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L4.21 14l1.64-1.65a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionFilled = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionFilledIcon, 'TextParagraphDirectionFilled');

const TextParagraphDirectionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM13 4v6h-1.5a3 3 0 0 1 0-6H13ZM3.15 5.65c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L4.79 8 3.15 6.35a.5.5 0 0 1 0-.7Zm2.7 6a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L4.21 14l1.64-1.65a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionRegular = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionRegularIcon, 'TextParagraphDirectionRegular');

const TextParagraphDirectionLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM5.15 7.65a.5.5 0 1 1 .7.7L4.21 10l1.64 1.65a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionLeftFilled = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionLeftFilledIcon, 'TextParagraphDirectionLeftFilled');

const TextParagraphDirectionLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM13 4v6h-1.5a3 3 0 0 1 0-6H13ZM5.85 7.65a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L4.21 10l1.64-1.65a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionLeftRegular = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionLeftRegularIcon, 'TextParagraphDirectionLeftRegular');

const TextParagraphDirectionRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM3.85 7.65a.5.5 0 1 0-.7.7L4.79 10l-1.64 1.65a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionRightFilled = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionRightFilledIcon, 'TextParagraphDirectionRightFilled');

const TextParagraphDirectionRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM13 4v6h-1.5a3 3 0 0 1 0-6H13ZM3.15 7.65c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L4.79 10 3.15 8.35a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TextParagraphDirectionRightRegular = wrapIcon_1.default( /*#__PURE__*/TextParagraphDirectionRightRegularIcon, 'TextParagraphDirectionRightRegular');

const TextPeriodAsteriskFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.25 4.75a.75.75 0 0 0-1.5 0v1.86l-1.77-.58a.75.75 0 1 0-.46 1.43l1.77.58-1.1 1.5a.75.75 0 0 0 1.22.88l1.09-1.5 1.09 1.5a.75.75 0 1 0 1.21-.88l-1.09-1.5 1.77-.58a.75.75 0 1 0-.46-1.43l-1.77.58V4.75ZM6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
};

exports.TextPeriodAsteriskFilled = wrapIcon_1.default( /*#__PURE__*/TextPeriodAsteriskFilledIcon, 'TextPeriodAsteriskFilled');

const TextPeriodAsteriskRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a.5.5 0 0 0-1 0v2.46L8.65 6.2a.5.5 0 0 0-.3.95l2.34.76-1.45 2a.5.5 0 1 0 .8.59l1.46-2 1.45 2a.5.5 0 0 0 .8-.59l-1.44-2 2.34-.76a.5.5 0 0 0-.3-.95L12 6.96V4.5ZM6 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TextPeriodAsteriskRegular = wrapIcon_1.default( /*#__PURE__*/TextPeriodAsteriskRegularIcon, 'TextPeriodAsteriskRegular');

const TextPositionBehindFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm5 5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Zm8.75 1.75h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5Zm-13-1.5h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm5.25-6h2.5v1.5h-2.5v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextPositionBehindFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionBehindFilledIcon, 'TextPositionBehindFilled');

const TextPositionBehindRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm13 7h-2V9h2a.5.5 0 0 1 0 1Zm-13-1h2v1h-2a.5.5 0 0 1 0-1Zm5 0h3v1h-3V9ZM3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm4.5-7a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionBehindRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionBehindRegularIcon, 'TextPositionBehindRegular');

const TextPositionFrontFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75ZM10 6.25c-.98 0-1.81.63-2.12 1.5H6.33a3.75 3.75 0 0 1 7.35 0h-1.56A2.25 2.25 0 0 0 10 6.25Zm-3.75 5h1.5v2.25a.75.75 0 0 1-1.5 0v-2.25Zm7.5 0h-1.5v2.25a.75.75 0 0 0 1.5 0v-2.25ZM3.5 14.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0-6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Z",
    fill: primaryFill
  }));
};

exports.TextPositionFrontFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionFrontFilledIcon, 'TextPositionFrontFilled');

const TextPositionFrontRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm3 8h1v2.5a.5.5 0 0 1-1 0V11Zm7 0h-1v2.5a.5.5 0 0 0 1 0V11Zm3-2a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13ZM10 5a3.5 3.5 0 0 1 3.46 3h-1.01a2.5 2.5 0 0 0-4.9 0H6.54c.24-1.7 1.7-3 3.46-3ZM3.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z",
    fill: primaryFill
  }));
};

exports.TextPositionFrontRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionFrontRegularIcon, 'TextPositionFrontRegular');

const TextPositionLineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0 12a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm7.25-2.25c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm-6.5-4a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionLineFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionLineFilledIcon, 'TextPositionLineFilled');

const TextPositionLineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm7.5-2.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-7-4a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionLineRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionLineRegularIcon, 'TextPositionLineRegular');

const TextPositionSquareFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm0 12c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm.75-9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm11.25.75c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM3.5 8.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm11.25.75c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM3.5 11.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm11.25.75c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-7-4a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionSquareFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionSquareFilledIcon, 'TextPositionSquareFilled');

const TextPositionSquareRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 12c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM3.5 9a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM3.5 12a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm-7.5-4a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionSquareRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionSquareRegularIcon, 'TextPositionSquareRegular');

const TextPositionThroughFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM7.75 8.5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Zm-5 7c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm13.75-3.75h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-13 0h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm5.25-3h2.5v1.5h-2.5v-1.5Zm0 3h2.5v1.5h-2.5v-1.5Zm-3.5-3v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Zm11.25 0h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-2.63-3c.32.45.57.95.71 1.5h1.92a.75.75 0 0 0 0-1.5h-2.63Zm-7.74 0c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.63Z",
    fill: primaryFill
  }));
};

exports.TextPositionThroughFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionThroughFilledIcon, 'TextPositionThroughFilled');

const TextPositionThroughRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm13 0h-2v1h2a.5.5 0 0 0 0-1Zm-8-3v1h3V9h-3Zm8 1h-2V9h2a.5.5 0 0 1 0 1Zm-8 2v1h3v-1h-3Zm8-5h-2.26c-.12-.36-.3-.7-.5-1h2.76a.5.5 0 0 1 0 1Zm-13 8h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Zm4-6.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionThroughRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionThroughRegularIcon, 'TextPositionThroughRegular');

const TextPositionTightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0 12a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm6.5-8.5c-1.24 0-2.25 1-2.25 2.25v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0v-5c0-1.24-1-2.25-2.25-2.25Zm-6.5 5.5h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm13 1.5h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5Zm-1.75-4.5v1.5h1.75a.75.75 0 0 0 0-1.5h-1.75Zm-8.62-3c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.63Zm10.37 1.5h-1.92a4.73 4.73 0 0 0-.7-1.5h2.62a.75.75 0 0 1 0 1.5ZM5.25 8.75v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Z",
    fill: primaryFill
  }));
};

exports.TextPositionTightFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionTightFilledIcon, 'TextPositionTightFilled');

const TextPositionTightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Zm13-2h-2v-1h2a.5.5 0 0 1 0 1Zm-2-4v1h2a.5.5 0 0 0 0-1h-2Zm-.76-3c.2.3.38.64.5 1h2.26a.5.5 0 0 0 0-1h-2.76ZM7.5 8.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionTightRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionTightRegularIcon, 'TextPositionTightRegular');

const TextPositionTopBottomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm0 12c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm5-7a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionTopBottomFilled = wrapIcon_1.default( /*#__PURE__*/TextPositionTopBottomFilledIcon, 'TextPositionTopBottomFilled');

const TextPositionTopBottomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 12c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm4.5-7a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
    fill: primaryFill
  }));
};

exports.TextPositionTopBottomRegular = wrapIcon_1.default( /*#__PURE__*/TextPositionTopBottomRegularIcon, 'TextPositionTopBottomRegular');

const TextProofingToolsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.97 2.98c.52.25.91.74 1.17 1.46a.75.75 0 1 1-1.4.51c-.18-.47-.35-.59-.44-.63-.12-.06-.27-.07-.58-.07a.69.69 0 0 0-.5.17c-.12.1-.22.27-.3.5a2.81 2.81 0 0 0-.17.88c0 .41 0 .9.16 1.3.08.18.17.32.3.42.11.1.3.2.6.23.08 0 .28 0 .48-.07a.8.8 0 0 0 .46-.45.75.75 0 0 1 1.37.61c-.63 1.42-2.03 1.45-2.48 1.4a2.58 2.58 0 0 1-1.4-.56c-.35-.3-.58-.68-.72-1.04a5 5 0 0 1-.27-1.8v-.08a3.36 3.36 0 0 1 .03-.4c.03-.26.1-.61.23-.97.14-.36.35-.77.72-1.09.37-.34.87-.55 1.49-.55h.03c.28 0 .75 0 1.22.23Zm-11.58.27A.75.75 0 0 0 4 3.23l-1.94 5a.75.75 0 1 0 1.4.54l.1-.27h2.11l.1.25a.75.75 0 0 0 1.4-.5l-1.77-5ZM5.13 7h-1l.53-1.34L5.13 7ZM8 3.5v5a.75.75 0 0 0 .87.74v.01h1.63c.24 0 .73-.04 1.2-.3.52-.3.92-.87.92-1.7 0-.43-.1-.8-.28-1.12a1.7 1.7 0 0 0-.29-.35c.15-.27.24-.62.24-1.02 0-.41-.08-.77-.25-1.08a1.69 1.69 0 0 0-.66-.67c-.46-.26-.95-.26-1.12-.26H8.75A.75.75 0 0 0 8 3.5Zm2.5 4.25h-1v-1H10.44c.19 0 .38.01.51.08.05.02.08.05.1.08.03.04.07.13.07.33 0 .17-.04.26-.06.3a.3.3 0 0 1-.12.1.96.96 0 0 1-.44.11Zm-.88-2.5H9.5v-1h.75c.16 0 .3.01.4.07a.2.2 0 0 1 .08.08c.02.04.06.15.06.36 0 .18-.03.27-.06.3a.25.25 0 0 1-.1.1.76.76 0 0 1-.35.09h-.66Zm4.32 5.72a.75.75 0 0 0-1.16-.94l-3.56 4.35-1.69-1.68a.75.75 0 0 0-1.06 1.06l2.27 2.27a.75.75 0 0 0 1.11-.06l4.1-5Z",
    fill: primaryFill
  }));
};

exports.TextProofingToolsFilled = wrapIcon_1.default( /*#__PURE__*/TextProofingToolsFilledIcon, 'TextProofingToolsFilled');

const TextProofingToolsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.94 3c.21 0 .4.14.47.33l1.77 5a.5.5 0 0 1-.94.34l-.26-.73V8H3.73l-.26.68a.5.5 0 1 1-.94-.36l1.94-5A.5.5 0 0 1 4.94 3Zm-.02 1.94L4.12 7h1.53l-.73-2.06Zm12.49-.41c-.25-.69-.6-1.1-1.06-1.33-.4-.2-.83-.2-1.1-.2h-.03c-.55 0-1 .19-1.33.49-.32.29-.52.65-.64.99A4.06 4.06 0 0 0 13 5.77v.05c0 .39 0 1.09.25 1.73.13.33.33.67.66.93.32.27.74.45 1.25.5.42.05 1.67.02 2.23-1.24a.5.5 0 1 0-.9-.4c-.3.64-.94.68-1.22.65a1.34 1.34 0 0 1-.73-.28 1.26 1.26 0 0 1-.36-.52A3.89 3.89 0 0 1 14 5.8V5.8a1.78 1.78 0 0 1 .02-.28c.03-.2.07-.44.16-.68.1-.25.22-.45.38-.6a.94.94 0 0 1 .66-.23c.3 0 .5 0 .7.1.15.08.36.25.55.77a.5.5 0 1 0 .94-.34Zm-5.94 1.3c.2-.26.32-.62.32-1.07 0-.38-.07-.7-.22-.96a1.44 1.44 0 0 0-.56-.57c-.4-.23-.84-.23-1-.23H8.5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1.75c.22 0 .66-.03 1.07-.27.45-.26.8-.74.8-1.49 0-.38-.09-.7-.25-.98a1.45 1.45 0 0 0-.4-.42Zm-.95-1.73c.07.04.13.1.18.18a1 1 0 0 1 .1.48c0 .4-.16.54-.28.62-.17.1-.38.12-.5.12H9V4h1c.16 0 .36.01.52.1ZM9.36 6.5h.83c.18 0 .43 0 .62.1.1.05.16.1.2.18.06.09.1.22.1.46 0 .38-.14.54-.3.62-.18.11-.42.14-.56.14H9V6.5h.36Zm4.4 4.32a.5.5 0 1 0-.78-.64l-3.74 4.58-1.89-1.89a.5.5 0 0 0-.7.71l2.27 2.27a.5.5 0 0 0 .74-.03l4.1-5Z",
    fill: primaryFill
  }));
};

exports.TextProofingToolsRegular = wrapIcon_1.default( /*#__PURE__*/TextProofingToolsRegularIcon, 'TextProofingToolsRegular');

const TextQuoteFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 6.5a2.5 2.5 0 1 0-1.17 2.12 8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 9 6.5Zm5.83 2.12A2.5 2.5 0 1 1 16 6.5c0 2.33-.52 4.04-1.25 5.37-.72 1.3-1.64 2.23-2.38 2.97l-.02.01a.5.5 0 0 1-.7-.7c.75-.76 1.57-1.59 2.22-2.77a8.8 8.8 0 0 0 .96-2.76Z",
    fill: primaryFill
  }));
};

exports.TextQuoteFilled = wrapIcon_1.default( /*#__PURE__*/TextQuoteFilledIcon, 'TextQuoteFilled');

const TextQuoteRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.83 8.62a8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 9 6.5a2.5 2.5 0 1 0-1.17 2.12ZM8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.83 2.12a8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 16 6.5a2.5 2.5 0 1 0-1.17 2.12ZM13.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.TextQuoteRegular = wrapIcon_1.default( /*#__PURE__*/TextQuoteRegularIcon, 'TextQuoteRegular');

const TextSortAscendingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.7 2.5a.75.75 0 0 0-1.4 0L3.03 9a.75.75 0 0 0 1.42.5l.34-1h2.4l.34 1A.75.75 0 0 0 8.96 9L6.7 2.5ZM6 5.04 6.68 7H5.32L6 5.04ZM4 11a.75.75 0 0 0 0 1.5h2.53l-3.14 4.3A.75.75 0 0 0 4 18h4a.75.75 0 0 0 0-1.5H5.47l3.14-4.3A.75.75 0 0 0 8 11H4Zm10.25-9c.41 0 .75.34.75.75v12.57l1.45-1.58a.75.75 0 0 1 1.1 1.02l-2.75 3a.75.75 0 0 1-1.1 0l-2.75-3a.75.75 0 0 1 1.1-1.02l1.45 1.58V2.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextSortAscendingFilled = wrapIcon_1.default( /*#__PURE__*/TextSortAscendingFilledIcon, 'TextSortAscendingFilled');

const TextSortAscendingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.47 2.32a.5.5 0 0 0-.94 0l-2.75 7a.5.5 0 0 0 .94.36L4.38 8h3.24l.66 1.68a.5.5 0 0 0 .94-.36l-2.75-7ZM6 3.87 7.23 7H4.77L6 3.87ZM4 11a.5.5 0 0 0 0 1h3.07l-3.49 5.22A.5.5 0 0 0 4 18h4a.5.5 0 0 0 0-1H4.93l3.49-5.22A.5.5 0 0 0 8 11H4Zm10.5-9c.28 0 .5.22.5.5v13.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextSortAscendingRegular = wrapIcon_1.default( /*#__PURE__*/TextSortAscendingRegularIcon, 'TextSortAscendingRegular');

const TextSortDescendingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 2a.75.75 0 1 0 0 1.5h2.53L3.39 7.8A.75.75 0 0 0 4 9h4a.75.75 0 0 0 0-1.5H5.47l3.14-4.3A.75.75 0 0 0 8 2H4Zm2.7 8.5a.75.75 0 0 0-1.4 0L3.03 17a.75.75 0 1 0 1.42.5l.34-1h2.4l.34 1a.75.75 0 1 0 1.42-.5L6.7 10.5ZM6 13.04 6.68 15H5.32L6 13.04ZM14.25 2c.41 0 .75.34.75.75v12.57l1.45-1.58a.75.75 0 0 1 1.1 1.02l-2.75 3a.75.75 0 0 1-1.1 0l-2.75-3a.75.75 0 0 1 1.1-1.02l1.45 1.58V2.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextSortDescendingFilled = wrapIcon_1.default( /*#__PURE__*/TextSortDescendingFilledIcon, 'TextSortDescendingFilled');

const TextSortDescendingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 2a.5.5 0 0 0 0 1h3.07L3.58 8.22A.5.5 0 0 0 4 9h4a.5.5 0 1 0 0-1H4.93l3.49-5.22A.5.5 0 0 0 8 2H4Zm2.47 8.32a.5.5 0 0 0-.94 0l-2.75 7a.5.5 0 1 0 .94.36L4.38 16h3.24l.66 1.68a.5.5 0 0 0 .94-.36l-2.75-7ZM6 11.87 7.23 15H4.77L6 11.87ZM14.5 2c.28 0 .5.22.5.5v13.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextSortDescendingRegular = wrapIcon_1.default( /*#__PURE__*/TextSortDescendingRegularIcon, 'TextSortDescendingRegular');

const TextStrikethroughFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.25 3.7c1-.7 2.33-1.2 3.75-1.2a6.4 6.4 0 0 1 5.1 2.3.75.75 0 0 1-1.2.9A4.92 4.92 0 0 0 10 4c-1.08 0-2.12.38-2.88.92C6.33 5.5 6 6.1 6 6.5c0 .78.38 1.29 1.11 1.71.18.1.38.2.59.29H5.16a3.16 3.16 0 0 1-.66-2c0-1.1.8-2.11 1.75-2.8ZM16.5 10a.75.75 0 0 1 0 1.5h-1.66c.4.52.66 1.18.66 2 0 1.36-.87 2.38-1.91 3.01a7.06 7.06 0 0 1-3.59.99 7.52 7.52 0 0 1-3-.5 4.8 4.8 0 0 1-2.12-1.83.75.75 0 1 1 1.24-.84c.43.65.9 1.05 1.48 1.3.6.25 1.35.37 2.4.37.97 0 2.02-.28 2.8-.76.8-.5 1.2-1.1 1.2-1.74 0-.78-.38-1.29-1.11-1.71a5.4 5.4 0 0 0-.59-.29H3.5a.75.75 0 0 1 0-1.5h13Z",
    fill: primaryFill
  }));
};

exports.TextStrikethroughFilled = wrapIcon_1.default( /*#__PURE__*/TextStrikethroughFilledIcon, 'TextStrikethroughFilled');

const TextStrikethroughRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.53 4.03A6.15 6.15 0 0 1 10 3a6.16 6.16 0 0 1 4.9 2.2.5.5 0 0 1-.8.6A5.17 5.17 0 0 0 10 4c-1.15 0-2.18.35-2.9.85C6.36 5.35 6 5.98 6 6.5c0 .9.43 1.48 1.17 1.93.36.22.78.4 1.25.57H6.23A3.02 3.02 0 0 1 5 6.5c0-.98.64-1.86 1.53-2.47ZM16.5 10a.5.5 0 0 1 0 1h-2.73A3.02 3.02 0 0 1 15 13.5c0 1.23-.72 2.12-1.68 2.68-.94.56-2.16.82-3.32.82a7.27 7.27 0 0 1-2.9-.48 4.55 4.55 0 0 1-2.02-1.74.5.5 0 0 1 .84-.56c.45.68.96 1.11 1.58 1.38.64.28 1.44.4 2.5.4 1.03 0 2.06-.24 2.82-.68.74-.44 1.18-1.05 1.18-1.82 0-.9-.43-1.48-1.17-1.93-.36-.22-.78-.4-1.25-.57H3.5a.5.5 0 0 1 0-1h13Z",
    fill: primaryFill
  }));
};

exports.TextStrikethroughRegular = wrapIcon_1.default( /*#__PURE__*/TextStrikethroughRegularIcon, 'TextStrikethroughRegular');

const TextSubscriptFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.78 4.99A.75.75 0 0 0 12.64 4L8.5 8.85 4.35 4A.75.75 0 1 0 3.22 5L7.52 10l-4.3 5.01a.75.75 0 0 0 1.13.98l4.15-4.84 3.85 4.5c.13-.55.38-.99.66-1.34-.35-.24-.6-.6-.71-1.03L9.49 10l4.3-5.01Zm1.55 7.26c-.3 0-.58.3-.58.61a.75.75 0 0 1-1.5 0 2.12 2.12 0 0 1 3.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 0 1 0 1.5h-2.64a.73.73 0 0 1-.05 0 .75.75 0 0 1-.75-.75c0-1.16.69-1.8 1.27-2.25l.37-.26.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 0 0-.55-.26Z",
    fill: primaryFill
  }));
};

exports.TextSubscriptFilled = wrapIcon_1.default( /*#__PURE__*/TextSubscriptFilledIcon, 'TextSubscriptFilled');

const TextSubscriptRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.54 4.12c.2.18.23.5.05.7L9.16 10l4.08 4.77c-.18.29-.34.63-.42 1.04L8.5 10.77l-4.34 5.06a.5.5 0 1 1-.75-.66L7.84 10 3.41 4.83a.5.5 0 1 1 .75-.66L8.5 9.23l4.33-5.06a.5.5 0 0 1 .7-.05ZM15.58 12c-.46 0-.83.42-.83.86a.5.5 0 0 1-1 0 1.87 1.87 0 0 1 3.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 1 1 0 1H14.3a.54.54 0 0 1-.05 0 .5.5 0 0 1-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 0 0-.76-.37Z",
    fill: primaryFill
  }));
};

exports.TextSubscriptRegular = wrapIcon_1.default( /*#__PURE__*/TextSubscriptRegularIcon, 'TextSubscriptRegular');

const TextSuperscriptFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.33 3.25c-.3 0-.58.29-.58.61a.75.75 0 0 1-1.5 0 2.12 2.12 0 0 1 3.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 0 1 0 1.5h-2.64a.76.76 0 0 1-.05 0 .75.75 0 0 1-.75-.75c0-1.16.69-1.8 1.27-2.25L14.9 5l.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 0 0-.55-.26ZM9.5 10l2.85-3.33c.13-.56.39-1 .67-1.36a1.75 1.75 0 0 1-.68-.93L8.5 8.85 4.35 4A.75.75 0 1 0 3.22 5L7.52 10l-4.3 5.01a.75.75 0 1 0 1.13.98l4.15-4.84L12.64 16a.75.75 0 1 0 1.14-.98L9.48 10Z",
    fill: primaryFill
  }));
};

exports.TextSuperscriptFilled = wrapIcon_1.default( /*#__PURE__*/TextSuperscriptFilledIcon, 'TextSuperscriptFilled');

const TextSuperscriptRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.58 3c-.46 0-.83.42-.83.86a.5.5 0 0 1-1 0 1.87 1.87 0 0 1 3.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 1 1 0 1H14.24a.5.5 0 0 1-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 0 0-.76-.37ZM12.8 4.22c.09.35.3.66.58.86L9.16 10l4.43 5.17a.5.5 0 1 1-.76.66L8.5 10.77l-4.34 5.06a.5.5 0 0 1-.75-.66L7.84 10 3.41 4.83a.5.5 0 1 1 .75-.66L8.5 9.23l4.3-5Z",
    fill: primaryFill
  }));
};

exports.TextSuperscriptRegular = wrapIcon_1.default( /*#__PURE__*/TextSuperscriptRegularIcon, 'TextSuperscriptRegular');

const TextTFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V4.5h-3.5v11h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H9v-11H5.5v.75a.75.75 0 0 1-1.5 0v-1.5Z",
    fill: primaryFill
  }));
};

exports.TextTFilled = wrapIcon_1.default( /*#__PURE__*/TextTFilledIcon, 'TextTFilled');

const TextTRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0V4h-4v12h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H9V4H5v1.5a.5.5 0 0 1-1 0v-2Z",
    fill: primaryFill
  }));
};

exports.TextTRegular = wrapIcon_1.default( /*#__PURE__*/TextTRegularIcon, 'TextTRegular');

const TextUnderlineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 3.75a.75.75 0 0 0-1.5 0V9c0 1.37.34 2.74 1.16 3.78A4.67 4.67 0 0 0 10 14.5c1.7 0 3-.65 3.84-1.72A6.09 6.09 0 0 0 15 9V3.75a.75.75 0 0 0-1.5 0V9a4.6 4.6 0 0 1-.84 2.85C12.13 12.53 11.3 13 10 13c-1.3 0-2.13-.47-2.66-1.15A4.6 4.6 0 0 1 6.5 9V3.75ZM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z",
    fill: primaryFill
  }));
};

exports.TextUnderlineFilled = wrapIcon_1.default( /*#__PURE__*/TextUnderlineFilledIcon, 'TextUnderlineFilled');

const TextUnderlineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3.5a.5.5 0 0 0-1 0v6.45A5.02 5.02 0 0 0 10 15c2.77 0 5-2.26 5-5.05V3.5a.5.5 0 0 0-1 0v6.45C14 12.2 12.2 14 10 14s-4-1.8-4-4.05V3.5Zm-1 13c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextUnderlineRegular = wrapIcon_1.default( /*#__PURE__*/TextUnderlineRegularIcon, 'TextUnderlineRegular');

const TextUnderlineDoubleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.97 2.98c.52.25.91.74 1.17 1.46a.75.75 0 1 1-1.4.51c-.18-.47-.35-.59-.44-.63-.12-.06-.27-.07-.58-.07a.69.69 0 0 0-.5.17c-.12.1-.22.27-.3.5a2.81 2.81 0 0 0-.17.88c0 .41 0 .9.16 1.3.08.18.17.32.3.42.11.1.3.2.6.23.08 0 .28 0 .48-.07a.8.8 0 0 0 .46-.45.75.75 0 0 1 1.37.61c-.63 1.42-2.03 1.45-2.48 1.4a2.58 2.58 0 0 1-1.4-.56c-.35-.3-.58-.68-.72-1.04a5 5 0 0 1-.27-1.8v-.08a3.36 3.36 0 0 1 .03-.4c.03-.26.1-.61.23-.97.14-.36.35-.77.72-1.09.37-.34.87-.55 1.49-.55h.03c.28 0 .75 0 1.22.23Zm-11.58.27A.75.75 0 0 0 4 3.23l-1.94 5a.75.75 0 1 0 1.4.54l.1-.27h2.11l.1.25a.75.75 0 0 0 1.4-.5l-1.77-5ZM5.13 7h-1l.53-1.34L5.13 7ZM8 3.5v5c0 .41.34.75.75.75h1.75c.24 0 .73-.04 1.2-.3.52-.3.92-.87.92-1.7 0-.43-.1-.8-.28-1.12a1.7 1.7 0 0 0-.29-.35c.15-.27.24-.62.24-1.02 0-.41-.08-.77-.25-1.08a1.69 1.69 0 0 0-.66-.67c-.46-.26-.95-.26-1.12-.26H8.75A.75.75 0 0 0 8 3.5Zm2.5 4.25h-1v-1H10.44c.19 0 .38.01.51.08.05.02.08.05.1.08.03.04.07.13.07.33 0 .17-.04.26-.06.3a.3.3 0 0 1-.12.1.96.96 0 0 1-.44.11Zm-.88-2.5H9.5v-1h.75c.16 0 .3.01.4.07a.2.2 0 0 1 .08.08c.02.04.06.15.06.36 0 .18-.03.27-.06.3a.25.25 0 0 1-.1.1.76.76 0 0 1-.35.09h-.66Zm-8.12 7c0-.41.34-.75.75-.75h15.5a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h15.5a.75.75 0 0 0 0-1.5H2.25Z",
    fill: primaryFill
  }));
};

exports.TextUnderlineDoubleFilled = wrapIcon_1.default( /*#__PURE__*/TextUnderlineDoubleFilledIcon, 'TextUnderlineDoubleFilled');

const TextUnderlineDoubleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.94 3c.21 0 .4.14.47.33l1.77 5a.5.5 0 0 1-.94.34L6 8H3.73l-.26.68a.5.5 0 1 1-.94-.36l1.94-5A.5.5 0 0 1 4.94 3Zm-.02 1.94L4.12 7h1.53l-.73-2.06Zm12.49-.41c-.25-.69-.6-1.1-1.06-1.33-.4-.2-.83-.2-1.1-.2h-.03c-.55 0-1 .19-1.33.49-.32.29-.52.65-.64.99A4.06 4.06 0 0 0 13 5.77v.05c0 .39 0 1.09.25 1.73.13.33.33.67.66.93.32.27.74.45 1.25.5.42.05 1.67.02 2.23-1.24a.5.5 0 1 0-.9-.4c-.3.64-.94.68-1.22.65a1.34 1.34 0 0 1-.73-.28 1.26 1.26 0 0 1-.36-.52A3.89 3.89 0 0 1 14 5.8V5.8a1.78 1.78 0 0 1 .02-.28c.03-.2.07-.44.16-.68.1-.25.22-.45.38-.6a.94.94 0 0 1 .66-.23c.3 0 .5 0 .7.1.15.08.36.25.55.77a.5.5 0 1 0 .94-.34Zm-5.94 1.3c.2-.26.32-.62.32-1.07 0-.38-.07-.7-.22-.96a1.44 1.44 0 0 0-.56-.57c-.4-.23-.84-.23-1-.23H8.5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1.75c.22 0 .66-.03 1.07-.27.45-.26.8-.74.8-1.49 0-.38-.09-.7-.25-.98a1.45 1.45 0 0 0-.4-.42Zm-.95-1.73c.07.04.13.1.18.18a1 1 0 0 1 .1.48c0 .4-.16.54-.28.62-.17.1-.38.12-.5.12H9V4h1c.16 0 .36.01.52.1ZM9.36 6.5h.83c.18 0 .43 0 .62.1.1.05.16.1.2.18.06.09.1.22.1.46 0 .38-.14.54-.3.62-.18.11-.42.14-.56.14H9V6.5h.36ZM2 12.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.TextUnderlineDoubleRegular = wrapIcon_1.default( /*#__PURE__*/TextUnderlineDoubleRegularIcon, 'TextUnderlineDoubleRegular');

const TextWholeWordFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 15.75v.5A1.75 1.75 0 0 1 17.25 18H2.75A1.75 1.75 0 0 1 1 16.25v-.5a.75.75 0 1 1 1.5 0v.5a.25.25 0 0 0 .25.25h14.5a.25.25 0 0 0 .25-.25v-.5a.75.75 0 1 1 1.5 0ZM3.83 10.38a4.17 4.17 0 0 1 2.53-.61c.37.02.74.07 1.1.16a.97.97 0 0 0-.55-.76c-.4-.18-.83-.26-1.26-.23-.37 0-.73.08-1.07.23a.75.75 0 1 1-.67-1.34c.53-.25 1.1-.38 1.69-.4.69-.03 1.37.1 1.99.4A2.69 2.69 0 0 1 9 10.46v4.04a.75.75 0 1 1-1.5.06 3.73 3.73 0 0 1-2.95.56 2.61 2.61 0 0 1-.72-4.74Zm1.11 3.3a2.92 2.92 0 0 0 2.56-1V11.5a4.5 4.5 0 0 0-1.22-.23 2.68 2.68 0 0 0-1.62.36 1.11 1.11 0 0 0 .28 2.05Zm6.06.82V4a.75.75 0 1 1 1.5 0v4.66A2.7 2.7 0 0 1 14.25 8a3.28 3.28 0 0 1 3 3.5 3.28 3.28 0 0 1-3 3.5c-.64 0-1.26-.24-1.75-.66v.16a.75.75 0 1 1-1.5 0Zm1.75-3a1.8 1.8 0 0 0 1.5 2 1.8 1.8 0 0 0 1.5-2 1.8 1.8 0 0 0-1.5-2 1.8 1.8 0 0 0-1.5 2Z",
    fill: primaryFill
  }));
};

exports.TextWholeWordFilled = wrapIcon_1.default( /*#__PURE__*/TextWholeWordFilledIcon, 'TextWholeWordFilled');

const TextWholeWordRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 15a.5.5 0 0 0 .5-.5v-.4a2.76 2.76 0 0 0 2 .9 3.28 3.28 0 0 0 3-3.5A3.28 3.28 0 0 0 14 8a2.77 2.77 0 0 0-2 .9V4a.5.5 0 0 0-1 0v10.5a.5.5 0 0 0 .5.5ZM14 9a2.29 2.29 0 0 1 2 2.5 2.29 2.29 0 0 1-2 2.5 2.29 2.29 0 0 1-2-2.5A2.29 2.29 0 0 1 14 9Zm-9.13 5.88a3.72 3.72 0 0 0 3.13-.8v.42a.5.5 0 0 0 1 0v-4.04a2.45 2.45 0 0 0-1.28-2.4 3.88 3.88 0 0 0-1.86-.37c-.55.01-1.09.14-1.58.36a.5.5 0 0 0 .44.9c.37-.17.77-.25 1.17-.26.48-.03.95.06 1.39.26A1.35 1.35 0 0 1 8 10.27a5.73 5.73 0 0 0-1.4-.25 3.92 3.92 0 0 0-2.38.56 2.36 2.36 0 0 0 .65 4.3Zm-.1-3.46a2.93 2.93 0 0 1 1.78-.4c.5.02.98.13 1.45.3v1.47a3.23 3.23 0 0 1-2.87 1.13 1.36 1.36 0 0 1-.35-2.5ZM19 16v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 16.5V16a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V16a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.TextWholeWordRegular = wrapIcon_1.default( /*#__PURE__*/TextWholeWordRegularIcon, 'TextWholeWordRegular');

const TextWordCountFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.98 14.54c-.26.27-.55.51-.86.7a.5.5 0 1 1-.54-.83 3.33 3.33 0 0 0 1.4-1.79.5.5 0 0 1 1 .11v5.77a.5.5 0 0 1-1 0v-3.96Zm4.6-1.3c-.62 0-1.09.53-1.09 1.06a.5.5 0 0 1-1 0 2.1 2.1 0 0 1 2.1-2.07c.72 0 1.42.33 1.8.91.42.61.44 1.41-.05 2.21-.24.4-.58.71-.92.97l-.5.35-.07.05-.4.28c-.43.32-.74.6-.88 1h2.59a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5c0-1.17.7-1.82 1.36-2.3l.43-.3.07-.05.46-.33c.29-.22.51-.44.67-.69.3-.51.24-.89.08-1.13a1.18 1.18 0 0 0-.98-.47Zm4.48.25a.92.92 0 0 0-.28.43.5.5 0 1 1-.96-.28c.08-.27.25-.62.6-.9.34-.3.83-.5 1.49-.5 1.32 0 2.1.93 2.1 1.8 0 .35-.07.87-.43 1.32a1.8 1.8 0 0 1-.22.22 1.65 1.65 0 0 1 .65 1.34 2 2 0 0 1-.68 1.62c-.42.35-.95.46-1.42.46-.45 0-.9-.07-1.27-.3-.39-.24-.65-.6-.81-1.09a.5.5 0 0 1 .94-.32c.1.3.25.46.4.55.15.1.38.16.74.16.33 0 .6-.08.78-.23.17-.14.32-.38.32-.84 0-.2-.05-.32-.11-.41a.78.78 0 0 0-.32-.24c-.3-.13-.68-.16-.94-.16a.5.5 0 0 1 0-1c.71 0 1.02-.22 1.16-.4.16-.19.21-.45.21-.68 0-.28-.29-.8-1.1-.8-.44 0-.7.12-.85.25ZM2 9.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm0-5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm14 10c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextWordCountFilled = wrapIcon_1.default( /*#__PURE__*/TextWordCountFilledIcon, 'TextWordCountFilled');

const TextWordCountRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM7.6 13c-.62 0-1.1.55-1.1 1.14a.5.5 0 0 1-1 0 2.14 2.14 0 0 1 3.91-1.2c.4.63.43 1.45-.05 2.27-.25.41-.58.73-.92 1l-.5.37-.07.05-.4.3c-.44.32-.76.64-.9 1.07h2.6a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5c0-1.2.7-1.87 1.36-2.38l.43-.3.07-.06c.16-.11.32-.22.46-.34.3-.23.52-.45.67-.72.32-.54.25-.95.08-1.21A1.16 1.16 0 0 0 7.6 13Zm4.48.27a.99.99 0 0 0-.29.46.5.5 0 1 1-.96-.28c.08-.26.25-.63.59-.93.34-.3.84-.52 1.5-.52 1.34 0 2.1.98 2.1 1.86 0 .36-.06.9-.43 1.36-.07.09-.15.17-.24.25a1.66 1.66 0 0 1 .67 1.4c0 .72-.24 1.28-.67 1.65-.42.36-.95.48-1.43.48-.46 0-.9-.08-1.28-.32a2 2 0 0 1-.8-1.12.5.5 0 1 1 .95-.3c.1.32.24.49.4.58.15.1.38.16.73.16.32 0 .6-.08.78-.24.17-.14.32-.4.32-.9a.73.73 0 0 0-.12-.44.79.79 0 0 0-.31-.25c-.3-.14-.68-.17-.94-.17a.5.5 0 1 1 0-1c.7 0 1.01-.22 1.16-.4.16-.21.21-.49.21-.74 0-.32-.3-.86-1.1-.86-.43 0-.69.13-.84.27Zm-9.06 1.1a4.8 4.8 0 0 1-.85.73.5.5 0 1 1-.56-.83 3.46 3.46 0 0 0 1.42-1.88s.11-.39.46-.39c.5 0 .53.5.53.5v6a.5.5 0 0 1-1 0v-4.14Zm13 .13c0-.28.21-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextWordCountRegular = wrapIcon_1.default( /*#__PURE__*/TextWordCountRegularIcon, 'TextWordCountRegular');

const TextWrapFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm0 5c0-.41.34-.75.75-.75h13a3.25 3.25 0 0 1 0 6.5h-3.4l.23.27a.75.75 0 0 1-1.16.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 1.16.96l-.23.27h3.4a1.75 1.75 0 1 0 0-3.5h-13A.75.75 0 0 1 2 9.25Zm0 5c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }));
};

exports.TextWrapFilled = wrapIcon_1.default( /*#__PURE__*/TextWrapFilledIcon, 'TextWrapFilled');

const TextWrapRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5H16a3 3 0 1 1 0 6h-4.3l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65H16a2 2 0 1 0 0-4H2.5a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextWrapRegular = wrapIcon_1.default( /*#__PURE__*/TextWrapRegularIcon, 'TextWrapRegular');

const TextWrapOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.15 2.15c.2-.2.5-.2.7 0l15 15a.5.5 0 0 1-.7.7L14.29 15h-1.94l.23.27a.75.75 0 0 1-1.16.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 .07-.07L9.3 10H2.75a.75.75 0 0 1 0-1.5h5.04L4.3 5H2.75a.75.75 0 0 1 0-1.5h.04l-.64-.65a.5.5 0 0 1 0-.7Zm8.47 6.35h5.13a3.25 3.25 0 0 1 1.16 6.29l-1.29-1.29h.13a1.75 1.75 0 1 0 0-3.5h-3.63l-1.5-1.5ZM7.12 5l-1.5-1.5h11.63a.75.75 0 0 1 0 1.5H7.12Zm-4.37 8.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
    fill: primaryFill
  }));
};

exports.TextWrapOffFilled = wrapIcon_1.default( /*#__PURE__*/TextWrapOffFilledIcon, 'TextWrapOffFilled');

const TextWrapOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.29 4H2.5a.5.5 0 0 0 0 1h1.8l4 4H2.5a.5.5 0 0 0 0 1h6.8l2.52 2.53a.5.5 0 0 0-.17.12l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.58l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14h-1.58l.64-.65a.5.5 0 0 0 .12-.17l.82.82Zm-2.17-5 1 1H16a2 2 0 0 1 .12 4l.84.84A3 3 0 0 0 16 9h-4.88Zm-5-5 1 1H17.5a.5.5 0 0 0 0-1H6.12ZM2 14.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextWrapOffRegular = wrapIcon_1.default( /*#__PURE__*/TextWrapOffRegularIcon, 'TextWrapOffRegular');

const TextboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6 6.75c0-.41.32-.75.7-.75h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75Zm0 3c0-.41.32-.75.7-.75h3.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75ZM6.7 12h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75Z",
    fill: primaryFill
  }));
};

exports.TextboxFilled = wrapIcon_1.default( /*#__PURE__*/TextboxFilledIcon, 'TextboxFilled');

const TextboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4Z",
    fill: primaryFill
  }));
};

exports.TextboxRegular = wrapIcon_1.default( /*#__PURE__*/TextboxRegularIcon, 'TextboxRegular');

const TextboxAlignBottomFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM6.7 14h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75Zm0-3h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignBottomFilled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignBottomFilledIcon, 'TextboxAlignBottomFilled');

const TextboxAlignBottomRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 10a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7Zm0 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm3.5 1.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM5.5 16h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignBottomRegular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignBottomRegularIcon, 'TextboxAlignBottomRegular');

const TextboxAlignBottomRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm6.5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5ZM7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignBottomRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignBottomRotate90FilledIcon, 'TextboxAlignBottomRotate90Filled');

const TextboxAlignBottomRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.5 5c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5ZM7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignBottomRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignBottomRotate90RegularIcon, 'TextboxAlignBottomRotate90Regular');

const TextboxAlignCenterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-10.3 2h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75Zm1 3h4.6c.38 0 .7.34.7.75s-.32.75-.7.75H7.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignCenterFilled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignCenterFilledIcon, 'TextboxAlignCenterFilled');

const TextboxAlignCenterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5ZM6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm1 3c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignCenterRegular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignCenterRegularIcon, 'TextboxAlignCenterRegular');

const TextboxAlignMiddleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM6 8.25c0 .41.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75Zm.7 2.25c-.38 0-.7.34-.7.75s.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignMiddleFilled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignMiddleFilledIcon, 'TextboxAlignMiddleFilled');

const TextboxAlignMiddleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm8-8A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignMiddleRegular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignMiddleRegularIcon, 'TextboxAlignMiddleRegular');

const TextboxAlignMiddleRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm8.5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5ZM9 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignMiddleRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignMiddleRotate90FilledIcon, 'TextboxAlignMiddleRotate90Filled');

const TextboxAlignMiddleRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 5c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5ZM9 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignMiddleRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignMiddleRotate90RegularIcon, 'TextboxAlignMiddleRotate90Regular');

const TextboxAlignTopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6.7 6h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75S6.32 6 6.7 6Zm0 3h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75S6.32 9 6.7 9Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignTopFilled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignTopFilledIcon, 'TextboxAlignTopFilled');

const TextboxAlignTopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 6.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm8-6A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignTopRegular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignTopRegularIcon, 'TextboxAlignTopRegular');

const TextboxAlignTopRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5.5 2c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignTopRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextboxAlignTopRotate90FilledIcon, 'TextboxAlignTopRotate90Filled');

const TextboxAlignTopRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 5c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5Zm-2.5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
    fill: primaryFill
  }));
};

exports.TextboxAlignTopRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextboxAlignTopRotate90RegularIcon, 'TextboxAlignTopRotate90Regular');

const TextboxMoreFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h1.25A2.25 2.25 0 0 1 11 15.97a2.25 2.25 0 0 1 4 0 2.25 2.25 0 0 1 1.99-1.22l.01-.25v-9ZM6 6.75c0-.41.32-.75.7-.75h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75Zm0 3c0-.41.32-.75.7-.75h3.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75ZM6.7 12h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75Zm3.55 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextboxMoreFilled = wrapIcon_1.default( /*#__PURE__*/TextboxMoreFilledIcon, 'TextboxMoreFilled');

const TextboxMoreRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 6.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM6 12.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM14.5 3A2.5 2.5 0 0 1 17 5.5v9l-.01.25c-.4 0-.77.1-1.09.29.07-.17.1-.35.1-.54v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h1.48c-.15.3-.23.64-.23 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-4.25 14a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.TextboxMoreRegular = wrapIcon_1.default( /*#__PURE__*/TextboxMoreRegularIcon, 'TextboxMoreRegular');

const TextboxRotate90FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM7.5 6.7v6.6c0 .38-.34.7-.75.7S6 13.68 6 13.3V6.7c0-.38.34-.7.75-.7s.75.32.75.7ZM9.75 6c.41 0 .75.32.75.7v3.6c0 .38-.34.7-.75.7S9 10.68 9 10.3V6.7c0-.38.34-.7.75-.7Zm3 0c.41 0 .75.32.75.7v6.6c0 .38-.34.7-.75.7s-.75-.32-.75-.7V6.7c0-.38.34-.7.75-.7Z",
    fill: primaryFill
  }));
};

exports.TextboxRotate90Filled = wrapIcon_1.default( /*#__PURE__*/TextboxRotate90FilledIcon, 'TextboxRotate90Filled');

const TextboxRotate90RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3 0a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4Zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm10 8a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TextboxRotate90Regular = wrapIcon_1.default( /*#__PURE__*/TextboxRotate90RegularIcon, 'TextboxRotate90Regular');

const ThinkingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.7 2.64A4 4 0 0 1 10 2a3.56 3.56 0 0 1 3.52 2.1c.33.7.43 1.44.46 1.92.65.05 1.31.2 1.86.56C16.56 7.06 17 7.85 17 9c0 1.17-.44 1.97-1.16 2.44-.69.45-1.56.56-2.34.56h-7c-.79 0-1.66-.13-2.34-.58C3.44 10.94 3 10.15 3 9s.44-1.94 1.16-2.42c.55-.36 1.2-.51 1.86-.56.03-.48.13-1.21.46-1.92.25-.53.63-1.06 1.21-1.46ZM10 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.ThinkingFilled = wrapIcon_1.default( /*#__PURE__*/ThinkingFilledIcon, 'ThinkingFilled');

const ThinkingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a3.55 3.55 0 0 0-3.52 2.1c-.33.7-.43 1.44-.46 1.92-.65.05-1.31.2-1.86.56C3.44 7.06 3 7.85 3 9s.44 1.94 1.16 2.42c.68.45 1.55.58 2.34.58h7c.78 0 1.65-.11 2.34-.56C16.56 10.97 17 10.17 17 9c0-1.15-.44-1.94-1.16-2.42a3.84 3.84 0 0 0-1.86-.56 5.53 5.53 0 0 0-.46-1.92A3.56 3.56 0 0 0 10 2ZM7 6.5c0-.24 0-1.15.4-1.98.18-.4.46-.78.86-1.05A3 3 0 0 1 10 3a3 3 0 0 1 1.74.47c.4.27.68.65.87 1.05.39.83.39 1.74.39 1.98 0 .28.22.5.5.5.71 0 1.34.12 1.79.42.4.27.71.73.71 1.58 0 .89-.31 1.34-.71 1.6-.44.3-1.07.4-1.79.4h-7c-.71 0-1.34-.12-1.79-.42C4.31 10.31 4 9.85 4 9c0-.85.3-1.31.71-1.58C5.16 7.12 5.8 7 6.5 7a.5.5 0 0 0 .5-.5ZM8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4.5 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
};

exports.ThinkingRegular = wrapIcon_1.default( /*#__PURE__*/ThinkingRegularIcon, 'ThinkingRegular');

const ThumbDislikeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.48 18.3c-.8.83-2.09.38-2.43-.6-.28-.8-.64-1.77-1-2.48C8 13.1 7.38 11.9 5.67 10.37c-.23-.2-.52-.36-.84-.49-1.13-.44-2.2-1.61-1.91-3l.35-1.77a2.5 2.5 0 0 1 1.8-1.92l5.6-1.53a4.5 4.5 0 0 1 5.6 3.54l.69 3.76A3 3 0 0 1 14 12.5h-.89l.01.05c.08.41.18.97.24 1.58.07.62.1 1.29.05 1.92a3.68 3.68 0 0 1-.5 1.73c-.11.16-.27.35-.44.52Z",
    fill: primaryFill
  }));
};

exports.ThumbDislikeFilled = wrapIcon_1.default( /*#__PURE__*/ThumbDislikeFilledIcon, 'ThumbDislikeFilled');

const ThumbDislikeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.05 17.7c.34.98 1.63 1.43 2.43.6.17-.17.33-.36.44-.52.32-.48.45-1.12.5-1.73.05-.63.02-1.3-.05-1.92-.06-.6-.16-1.17-.24-1.58v-.05H14a3 3 0 0 0 2.95-3.54l-.69-3.76a4.5 4.5 0 0 0-5.6-3.54L5.06 3.2c-.92.25-1.62 1-1.8 1.92l-.35 1.77c-.28 1.39.78 2.56 1.9 3 .33.13.62.3.85.5 1.7 1.5 2.32 2.72 3.38 4.84.36.71.72 1.68 1 2.49Zm1.97-5.58v.04a14.2 14.2 0 0 1 .36 2.08c.06.58.09 1.18.04 1.73-.04.55-.15.98-.33 1.25-.06.1-.18.22-.33.39-.2.2-.63.16-.76-.23-.29-.82-.67-1.83-1.05-2.6-1.07-2.14-1.76-3.5-3.62-5.15-.34-.3-.74-.52-1.13-.68-.88-.34-1.45-1.14-1.3-1.87l.35-1.77c.11-.56.53-1 1.08-1.15l5.6-1.53a3.5 3.5 0 0 1 4.36 2.75l.68 3.76a2 2 0 0 1-1.96 2.36h-1.5a.5.5 0 0 0-.5.62Z",
    fill: primaryFill
  }));
};

exports.ThumbDislikeRegular = wrapIcon_1.default( /*#__PURE__*/ThumbDislikeRegularIcon, 'ThumbDislikeRegular');

const ThumbLikeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.48 1.7c-.8-.83-2.09-.38-2.43.6-.28.8-.64 1.77-1 2.48C8 6.9 7.38 8.1 5.67 9.63c-.23.2-.52.36-.84.49-1.13.44-2.2 1.61-1.91 3l.35 1.77a2.5 2.5 0 0 0 1.8 1.92l5.6 1.52a4.5 4.5 0 0 0 5.6-3.53l.69-3.76A3 3 0 0 0 14 7.5h-.89l.01-.05c.08-.41.18-.97.24-1.59.07-.6.1-1.28.05-1.9a3.68 3.68 0 0 0-.5-1.74 4.16 4.16 0 0 0-.44-.52Z",
    fill: primaryFill
  }));
};

exports.ThumbLikeFilled = wrapIcon_1.default( /*#__PURE__*/ThumbLikeFilledIcon, 'ThumbLikeFilled');

const ThumbLikeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.05 2.3c.34-.98 1.63-1.43 2.43-.6.17.17.33.36.44.52.32.48.45 1.12.5 1.73.05.63.02 1.3-.05 1.91-.06.62-.16 1.18-.24 1.59v.05H14a3 3 0 0 1 2.95 3.54l-.69 3.76a4.5 4.5 0 0 1-5.6 3.53l-5.6-1.52a2.5 2.5 0 0 1-1.8-1.92l-.35-1.77c-.28-1.39.78-2.56 1.9-3 .33-.13.62-.3.85-.5 1.7-1.5 2.32-2.72 3.38-4.84.36-.71.72-1.68 1-2.49Zm1.97 5.58v-.04a13.7 13.7 0 0 0 .13-.58c.08-.4.17-.93.23-1.5.06-.58.09-1.18.04-1.73a2.73 2.73 0 0 0-.33-1.25 3.26 3.26 0 0 0-.33-.39c-.2-.2-.63-.16-.76.23-.29.82-.67 1.83-1.05 2.6-1.07 2.14-1.76 3.5-3.62 5.15-.34.3-.74.52-1.13.68-.88.34-1.45 1.14-1.3 1.87l.35 1.77c.11.56.53 1 1.08 1.15l5.6 1.53c1.98.54 4-.73 4.36-2.75l.68-3.76a2 2 0 0 0-1.96-2.36h-1.5a.5.5 0 0 1-.5-.62Z",
    fill: primaryFill
  }));
};

exports.ThumbLikeRegular = wrapIcon_1.default( /*#__PURE__*/ThumbLikeRegularIcon, 'ThumbLikeRegular');

const TicketDiagonalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.74 2.53a1.75 1.75 0 0 0-2.48 0l-7.73 7.73c-.68.69-.68 1.8 0 2.48l.78.77c.4.4.98.34 1.34.14a1.25 1.25 0 0 1 1.7 1.7c-.2.36-.27.94.14 1.34l.77.78c.69.68 1.8.68 2.48 0l7.73-7.73c.68-.69.68-1.8 0-2.48l-.78-.77c-.4-.4-.98-.34-1.34-.14a1.25 1.25 0 0 1-1.7-1.7c.2-.36.27-.94-.14-1.34l-.77-.78Z",
    fill: primaryFill
  }));
};

exports.TicketDiagonalFilled = wrapIcon_1.default( /*#__PURE__*/TicketDiagonalFilledIcon, 'TicketDiagonalFilled');

const TicketDiagonalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.03 3.24a.75.75 0 0 0-1.06 0l-7.73 7.73c-.3.3-.3.77 0 1.06l.77.77.03.01c.03 0 .08 0 .13-.04a2.25 2.25 0 0 1 3.05 3.05.27.27 0 0 0-.03.14v.03l.78.77c.3.3.77.3 1.06 0l7.73-7.73c.3-.3.3-.77 0-1.06L16 7.19h-.03c-.03 0-.08 0-.13.03a2.24 2.24 0 0 1-3.33-1.97c0-.39.1-.76.28-1.08l.03-.13a.08.08 0 0 0 0-.03l-.78-.77Zm-1.77-.71c.69-.68 1.8-.68 2.48 0l.77.78c.4.4.34.98.14 1.34a1.25 1.25 0 0 0 1.7 1.7c.36-.2.94-.27 1.34.14l.78.77c.68.69.68 1.8 0 2.48l-7.73 7.73c-.69.68-1.8.68-2.48 0l-.77-.78c-.4-.4-.34-.98-.14-1.34a1.25 1.25 0 0 0-1.7-1.7c-.36.2-.94.27-1.34-.14l-.78-.77a1.75 1.75 0 0 1 0-2.48l7.73-7.73Z",
    fill: primaryFill
  }));
};

exports.TicketDiagonalRegular = wrapIcon_1.default( /*#__PURE__*/TicketDiagonalRegularIcon, 'TicketDiagonalRegular');

const TicketHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18 6v1.5a.5.5 0 0 1-.5.5 2 2 0 1 0 0 4c.28 0 .5.22.5.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.5c0-.28.22-.5.5-.5a2 2 0 1 0 0-4 .5.5 0 0 1-.5-.5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z",
    fill: primaryFill
  }));
};

exports.TicketHorizontalFilled = wrapIcon_1.default( /*#__PURE__*/TicketHorizontalFilledIcon, 'TicketHorizontalFilled');

const TicketHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 5c.83 0 1.5.67 1.5 1.5V8a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3c.28 0 .5.22.5.5v1.5c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5V12c0-.28.22-.5.5-.5a1.5 1.5 0 0 0 0-3A.5.5 0 0 1 2 8V6.5C2 5.67 2.67 5 3.5 5h13Zm.5 1.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1-.16-4.86l.16-.04V6.5Z",
    fill: primaryFill
  }));
};

exports.TicketHorizontalRegular = wrapIcon_1.default( /*#__PURE__*/TicketHorizontalRegularIcon, 'TicketHorizontalRegular');

const TimeAndWeatherFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM10 8.5a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V8.5Zm0 7.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 10c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.15 15.15a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0-.7-.7l-1 1Zm10-10 1-1a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7Zm-9.3-1a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm10 10 1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 .7-.7Z",
    fill: primaryFill
  }));
};

exports.TimeAndWeatherFilled = wrapIcon_1.default( /*#__PURE__*/TimeAndWeatherFilledIcon, 'TimeAndWeatherFilled');

const TimeAndWeatherRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-.5 6a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V8.5Zm0-3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5 6c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 10c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.15 15.15a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0-.7-.7l-1 1Zm10-10 1-1a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7Zm-9.3-1a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm10 10 1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 .7-.7Z",
    fill: primaryFill
  }));
};

exports.TimeAndWeatherRegular = wrapIcon_1.default( /*#__PURE__*/TimeAndWeatherRegularIcon, 'TimeAndWeatherRegular');

const TimePickerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.47 2.17a.75.75 0 0 0-.94 0L6.78 4.42a.75.75 0 0 0 .94 1.16L10 3.72l2.28 1.86a.75.75 0 1 0 .94-1.16l-2.75-2.25Zm2.75 13.41-2.75 2.25a.75.75 0 0 1-.94 0l-2.75-2.25a.75.75 0 0 1 .94-1.16L10 16.28l2.28-1.86a.75.75 0 1 1 .94 1.16Zm-2.47-6.83a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C5.67 8 5 8.67 5 9.5v1a1.5 1.5 0 0 0 3 0v-1C8 8.67 7.33 8 6.5 8ZM6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C1.67 8 1 8.67 1 9.5v1a1.5 1.5 0 0 0 3 0v-1C4 8.67 3.33 8 2.5 8ZM2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z",
    fill: primaryFill
  }));
};

exports.TimePickerFilled = wrapIcon_1.default( /*#__PURE__*/TimePickerFilledIcon, 'TimePickerFilled');

const TimePickerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.32 2.12a.5.5 0 0 0-.64 0l-3 2.5a.5.5 0 1 0 .64.76L10 3.15l2.68 2.23a.5.5 0 0 0 .64-.76l-3-2.5Zm3 13.26-3 2.5a.5.5 0 0 1-.64 0l-3-2.5a.5.5 0 1 1 .64-.76L10 16.85l2.68-2.23a.5.5 0 0 1 .64.76Zm-2.57-6.63a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C5.67 8 5 8.67 5 9.5v1a1.5 1.5 0 0 0 3 0v-1C8 8.67 7.33 8 6.5 8ZM6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C1.67 8 1 8.67 1 9.5v1a1.5 1.5 0 0 0 3 0v-1C4 8.67 3.33 8 2.5 8ZM2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z",
    fill: primaryFill
  }));
};

exports.TimePickerRegular = wrapIcon_1.default( /*#__PURE__*/TimePickerRegularIcon, 'TimePickerRegular');

const TimelineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9Zm0 8c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM17 12.44a2 2 0 0 1-1-3.88 2 2 0 0 1 1 3.88ZM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 0 0-1 0V3.5c0-.28.22-.5.5-.5Zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 0 0 1 0v-4.04c-.16.03-.33.04-.5.04Z",
    fill: primaryFill
  }));
};

exports.TimelineFilled = wrapIcon_1.default( /*#__PURE__*/TimelineFilledIcon, 'TimelineFilled');

const TimelineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM3 4.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4Zm.5 6.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM3 12.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4Zm14-.06a2 2 0 0 1-1-3.88 2 2 0 0 1 1 3.88ZM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 0 0-1 0V3.5c0-.28.22-.5.5-.5Zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 0 0 1 0v-4.04c-.16.03-.33.04-.5.04Z",
    fill: primaryFill
  }));
};

exports.TimelineRegular = wrapIcon_1.default( /*#__PURE__*/TimelineRegularIcon, 'TimelineRegular');

const Timer10FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42ZM16.43 10c-.98.02-1.86.44-2.48 1.1a1.5 1.5 0 0 0-1.92-1.02l-1.5.5A1.5 1.5 0 0 0 11 13.5v4.34A7.03 7.03 0 0 1 2.5 11a7 7 0 0 1 13.93-1ZM9 10.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4Zm5 3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.66-.47l-1.5.5a.5.5 0 1 0 .32.94l.84-.28v6.31a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
};

exports.Timer10Filled = wrapIcon_1.default( /*#__PURE__*/Timer10FilledIcon, 'Timer10Filled');

const Timer10RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71ZM9 6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4ZM9.5 18c.51 0 1.02-.06 1.5-.16V16.8a6.01 6.01 0 1 1 4.44-6.65c.31-.1.65-.15.99-.16a7 7 0 1 0-6.93 8Zm4.5-4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.66-.47l-1.5.5a.5.5 0 1 0 .32.94l.84-.28v6.31a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
};

exports.Timer10Regular = wrapIcon_1.default( /*#__PURE__*/Timer10RegularIcon, 'Timer10Regular');

const TimerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71ZM16.5 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM9 6.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0Z",
    fill: primaryFill
  }));
};

exports.TimerFilled = wrapIcon_1.default( /*#__PURE__*/TimerFilledIcon, 'TimerFilled');

const TimerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm0 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z",
    fill: primaryFill
  }));
};

exports.TimerRegular = wrapIcon_1.default( /*#__PURE__*/TimerRegularIcon, 'TimerRegular');

const Timer2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Zm1.29 6.2A3.5 3.5 0 0 0 12 13.5c0 .7.47 1.27 1.1 1.45A3.49 3.49 0 0 0 12 17.5v.04A6.98 6.98 0 0 1 2.5 11a7 7 0 0 1 13.95-.87ZM9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v5Zm6.5-.5a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5 2.5 2.5 0 0 0-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 0 0 0-5Z",
    fill: primaryFill
  }));
};

exports.Timer2Filled = wrapIcon_1.default( /*#__PURE__*/Timer2FilledIcon, 'Timer2Filled');

const Timer2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71ZM9 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3 11.04A6.98 6.98 0 0 1 2.5 11a7 7 0 0 1 13.95-.87 3.5 3.5 0 0 0-1.03-.13 6 6 0 1 0-3.23 6.37A3.5 3.5 0 0 0 12 17.5v.04ZM15.5 11a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5 2.5 2.5 0 0 0-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 0 0 0-5Z",
    fill: primaryFill
  }));
};

exports.Timer2Regular = wrapIcon_1.default( /*#__PURE__*/Timer2RegularIcon, 'Timer2Regular');

const Timer3FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Zm1.29 6.2a3.7 3.7 0 0 0-.95-.13 4.47 4.47 0 0 0-2.74.97l-.25.2v.01a1.5 1.5 0 0 0 1.63 2.48 2.49 2.49 0 0 0-.04 2.62l-.04.03a1.5 1.5 0 0 0-2.05 1.23 7 7 0 1 1 4.44-7.41ZM9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v5Zm4.84 1.21.03-.02a2.57 2.57 0 0 1 .47-.33c.32-.2.73-.36 1.16-.36.9 0 1.5.62 1.5 1.25 0 .28-.17.58-.51.84-.34.25-.8.41-1.24.41a.5.5 0 0 0 0 1c.44 0 .9.16 1.24.41.34.26.51.56.51.84 0 .63-.6 1.25-1.5 1.25-.43 0-.84-.17-1.16-.36a3.37 3.37 0 0 1-.47-.33l-.02-.02a.5.5 0 0 0-.7.72h.01l.01.02.04.03a3.68 3.68 0 0 0 .62.45c.4.23 1 .49 1.67.49 1.32 0 2.5-.95 2.5-2.25 0-.7-.4-1.26-.91-1.64l-.16-.11.16-.11c.5-.38.91-.95.91-1.64 0-1.3-1.18-2.25-2.5-2.25-.68 0-1.27.26-1.67.5a4.35 4.35 0 0 0-.62.44l-.04.03v.01h-.01a.5.5 0 0 0 .68.73Z",
    fill: primaryFill
  }));
};

exports.Timer3Filled = wrapIcon_1.default( /*#__PURE__*/Timer3FilledIcon, 'Timer3Filled');

const Timer3RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm0 12c.88 0 1.73-.16 2.5-.46l.01-.07a1.5 1.5 0 0 1 .45-1.25A6 6 0 1 1 15.42 10a3.8 3.8 0 0 1 1.03.12A7 7 0 1 0 9.5 18Zm4.34-5.29.03-.02a2.57 2.57 0 0 1 .47-.33c.32-.2.73-.36 1.16-.36.9 0 1.5.62 1.5 1.25 0 .28-.17.58-.51.84-.34.25-.8.41-1.24.41a.5.5 0 0 0 0 1c.44 0 .9.16 1.24.41.34.26.51.56.51.84 0 .63-.6 1.25-1.5 1.25-.43 0-.84-.17-1.16-.36a3.37 3.37 0 0 1-.47-.33l-.02-.02a.5.5 0 0 0-.7.72h.01l.01.02.04.03a3.68 3.68 0 0 0 .62.45c.4.23 1 .49 1.67.49 1.32 0 2.5-.95 2.5-2.25 0-.7-.4-1.26-.91-1.64l-.16-.11.16-.11c.5-.38.91-.95.91-1.64 0-1.3-1.18-2.25-2.5-2.25-.68 0-1.27.26-1.67.5a4.35 4.35 0 0 0-.62.44l-.04.03v.01h-.01a.5.5 0 0 0 .68.73Z",
    fill: primaryFill
  }));
};

exports.Timer3Regular = wrapIcon_1.default( /*#__PURE__*/Timer3RegularIcon, 'Timer3Regular');

const TimerOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.96 5.67 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.32-2.31A6.98 6.98 0 0 1 2.5 11c0-2.13.96-4.05 2.46-5.33ZM10 10.71l-1-1v1.79a.5.5 0 0 0 1 0v-.8Zm0-4.21v1.38l5.92 5.92A7 7 0 0 0 6.7 4.58L9 6.88V6.5a.5.5 0 0 1 1 0Zm-3-4c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71Z",
    fill: primaryFill
  }));
};

exports.TimerOffFilled = wrapIcon_1.default( /*#__PURE__*/TimerOffFilledIcon, 'TimerOffFilled');

const TimerOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.96 5.67 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.32-2.31A6.98 6.98 0 0 1 2.5 11c0-2.13.96-4.05 2.46-5.33Zm9.16 9.16L10 10.7v.79a.5.5 0 0 1-1 0V9.7L5.67 6.39A5.99 5.99 0 0 0 9.5 17c1.86 0 3.52-.85 4.62-2.17ZM9 6.5v.38l1 1V6.5a.5.5 0 0 0-1 0Zm6.5 4.5a6 6 0 0 1-.35 2.03l.77.77A7 7 0 0 0 6.7 4.58l.77.77A5.99 5.99 0 0 1 15.5 11Zm-8-9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Z",
    fill: primaryFill
  }));
};

exports.TimerOffRegular = wrapIcon_1.default( /*#__PURE__*/TimerOffRegularIcon, 'TimerOffRegular');

const ToggleLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 6a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8h8Zm-8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: primaryFill
  }));
};

exports.ToggleLeftFilled = wrapIcon_1.default( /*#__PURE__*/ToggleLeftFilledIcon, 'ToggleLeftFilled');

const ToggleLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12-2a4 4 0 0 0-4-4H6a4 4 0 1 0 0 8h8a4 4 0 0 0 4-4Zm-4-3a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6h8Z",
    fill: primaryFill
  }));
};

exports.ToggleLeftRegular = wrapIcon_1.default( /*#__PURE__*/ToggleLeftRegularIcon, 'ToggleLeftRegular');

const ToggleMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 5.5A3.5 3.5 0 0 1 6.5 2h7a3.5 3.5 0 1 1 0 7h-7A3.5 3.5 0 0 1 3 5.5Zm5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6.5 11a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7Zm7 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.ToggleMultipleFilled = wrapIcon_1.default( /*#__PURE__*/ToggleMultipleFilledIcon, 'ToggleMultipleFilled');

const ToggleMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-5 0A3.5 3.5 0 0 0 6.5 9h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 5.5ZM6.5 3h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Zm7 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 14.5A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 14.5ZM6.5 12h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Z",
    fill: primaryFill
  }));
};

exports.ToggleMultipleRegular = wrapIcon_1.default( /*#__PURE__*/ToggleMultipleRegularIcon, 'ToggleMultipleRegular');

const ToggleRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 6a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8H6Zm8 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
    fill: primaryFill
  }));
};

exports.ToggleRightFilled = wrapIcon_1.default( /*#__PURE__*/ToggleRightFilledIcon, 'ToggleRightFilled');

const ToggleRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 10a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4Zm4-3a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6H6Z",
    fill: primaryFill
  }));
};

exports.ToggleRightRegular = wrapIcon_1.default( /*#__PURE__*/ToggleRightRegularIcon, 'ToggleRightRegular');

const ToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.5V6H4a2 2 0 0 0-2 2v2h4v-.5a.5.5 0 0 1 1 0v.5h6v-.5a.5.5 0 0 1 1 0v.5h4V8a2 2 0 0 0-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5ZM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5ZM18 11h-4v.5a.5.5 0 1 1-1 0V11H7v.5a.5.5 0 0 1-1 0V11H2v4c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-4Z",
    fill: primaryFill
  }));
};

exports.ToolboxFilled = wrapIcon_1.default( /*#__PURE__*/ToolboxFilledIcon, 'ToolboxFilled');

const ToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 4.5V6H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5ZM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5ZM4 7h12a1 1 0 0 1 1 1v2h-3v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5H3V8a1 1 0 0 1 1-1Zm9 4v.5a.5.5 0 0 0 1 0V11h3v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h3v.5a.5.5 0 0 0 1 0V11h6Z",
    fill: primaryFill
  }));
};

exports.ToolboxRegular = wrapIcon_1.default( /*#__PURE__*/ToolboxRegularIcon, 'ToolboxRegular');

const TooltipQuoteFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.74a.5.5 0 0 1-.88 0L5.56 12H4a2 2 0 0 1-2-2V4Zm3.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 10 5.5a.5.5 0 0 0-.5-.5h-1Zm-2.98 9H2.5a.5.5 0 0 0 0 1h3.56l-.54-1Zm3.41 1h8.57a.5.5 0 0 0 0-1H9.48l-.55 1ZM2 17.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TooltipQuoteFilled = wrapIcon_1.default( /*#__PURE__*/TooltipQuoteFilledIcon, 'TooltipQuoteFilled');

const TooltipQuoteRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 10 5.5a.5.5 0 0 0-.5-.5h-1ZM2 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.74a.5.5 0 0 1-.88 0L5.56 12H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.86c.18 0 .35.1.44.26l1.2 2.2 1.18-2.2a.5.5 0 0 1 .44-.26H11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM2.5 14h3.02l.54 1H2.5a.5.5 0 0 1 0-1Zm15 1H8.93l.55-1h8.02a.5.5 0 0 1 0 1Zm-15 2a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z",
    fill: primaryFill
  }));
};

exports.TooltipQuoteRegular = wrapIcon_1.default( /*#__PURE__*/TooltipQuoteRegularIcon, 'TooltipQuoteRegular');

const TopSpeedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.25 3.54a6.5 6.5 0 0 0-3.3 1.36l.83.82a.75.75 0 0 1-1.06 1.06l-.83-.82A6.39 6.39 0 0 0 3.57 9h1.68a.75.75 0 0 1 0 1.5H3.53a6.65 6.65 0 0 0 2.06 4.2.75.75 0 0 1-1.03 1.1A8.11 8.11 0 0 1 2 9.94C2 5.55 5.59 2 10 2a7.97 7.97 0 0 1 5.47 13.8.75.75 0 0 1-1.02-1.1 6.58 6.58 0 0 0 2.03-4.2h-1.73a.75.75 0 0 1 0-1.5h1.68a6.48 6.48 0 0 0-5.68-5.46v1.21a.75.75 0 0 1-1.5 0v-1.2Zm4.2 2.27a.5.5 0 0 1 .75.63l-.12.2a343.95 343.95 0 0 1-2.2 3.82 30.11 30.11 0 0 1-.65 1.01 1.5 1.5 0 0 1-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 0 1 3.42-2.77l.18-.14Z",
    fill: primaryFill
  }));
};

exports.TopSpeedFilled = wrapIcon_1.default( /*#__PURE__*/TopSpeedFilledIcon, 'TopSpeedFilled');

const TopSpeedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.42 4.7A6.97 6.97 0 0 1 9.5 3.03V4.5a.5.5 0 0 0 1 0V3.02A7 7 0 0 1 16.93 9H15a.5.5 0 0 0 0 1h2c0 2-.86 3.9-2.21 5.17a.5.5 0 0 0 .69.73A8.17 8.17 0 0 0 18 10a8 8 0 1 0-13.44 5.9.5.5 0 0 0 .69-.73A7.2 7.2 0 0 1 3 10h2a.5.5 0 1 0 0-1H3.07c.2-1.36.78-2.6 1.64-3.58l1.44 1.43a.5.5 0 0 0 .7-.7L5.42 4.7Zm8.03 1.1a.5.5 0 0 1 .75.64l-.12.2a343.95 343.95 0 0 1-2.2 3.82 30.11 30.11 0 0 1-.65 1.01 1.5 1.5 0 0 1-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 0 1 3.42-2.77l.18-.14Z",
    fill: primaryFill
  }));
};

exports.TopSpeedRegular = wrapIcon_1.default( /*#__PURE__*/TopSpeedRegularIcon, 'TopSpeedRegular');

const TranslateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.42 4.02a.75.75 0 1 0-1.4-.54c-.14.37-.29.83-.4 1.24-.61.04-1.22.04-1.82 0a.75.75 0 0 0-.1 1.5c.51.03 1.03.04 1.53.02-.12.56-.21 1.08-.27 1.55a5.27 5.27 0 0 0-2.62 2.52c-.51 1.12-.48 2.45.32 3.26.54.55 1.32.6 2 .46.43-.09.9-.28 1.34-.55l.03.06a.75.75 0 1 0 1.38-.58l-.22-.45a7.06 7.06 0 0 0 1.82-3.5c.66.28 1.11.75 1.33 1.24.22.5.23 1.09-.06 1.65-.28.57-.9 1.19-2.01 1.66a.75.75 0 0 0 .58 1.38 5.26 5.26 0 0 0 2.77-2.37 3.4 3.4 0 0 0 .09-2.93 4.04 4.04 0 0 0-2.54-2.18v-.03a.75.75 0 0 0-1.48-.2c-.36-.02-.74 0-1.14.06l.25-1.18c.75-.09 1.49-.22 2.2-.38a.75.75 0 1 0-.31-1.46c-.48.1-.97.2-1.45.27l.18-.52Zm-3.71 6.9c.2-.43.56-.9 1.12-1.32.01.55.07 1.02.16 1.44a6 6 0 0 0 .34 1.09c-.36.23-.7.38-1 .44-.41.09-.57-.02-.6-.05-.21-.22-.38-.8-.02-1.6Zm3.83-2.2a5.64 5.64 0 0 1-1.02 2.27 6.7 6.7 0 0 1-.17-2.13c.43-.1.82-.14 1.19-.14ZM5.98 5.2a4.92 4.92 0 0 0-3.93.5l-.02.02h-.01a.75.75 0 0 0 .85 1.24l.03-.02.14-.07a3.42 3.42 0 0 1 2.52-.22c.57.16.8.46.92.75.08.2.11.41.13.63-.44-.1-.94-.2-1.47-.22a4.5 4.5 0 0 0-3.18 1.01 2.8 2.8 0 0 0-.84 2.96c.3 1 1.1 1.9 2.3 2.15a4.4 4.4 0 0 0 2.64-.4l.56-.29v.01a.75.75 0 1 0 1.5 0V8.5c0-.37 0-1.02-.25-1.66A2.76 2.76 0 0 0 5.99 5.2Zm-.9 4.11c.55.03 1.08.15 1.54.28v1.88c-.3.22-.71.48-1.17.68-.64.29-1.24.41-1.72.31a1.55 1.55 0 0 1-1.17-1.1c-.15-.53-.02-1.06.37-1.39.63-.54 1.38-.69 2.14-.66Z",
    fill: primaryFill
  }));
};

exports.TranslateFilled = wrapIcon_1.default( /*#__PURE__*/TranslateFilledIcon, 'TranslateFilled');

const TranslateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.17 4.03c.26.1.4.38.3.64-.12.34-.25.8-.35 1.2.57-.1 1.15-.21 1.77-.36a.5.5 0 1 1 .22.98c-.77.18-1.5.32-2.24.41-.1.46-.17.87-.22 1.25.47-.1.92-.14 1.35-.13V8a.5.5 0 0 1 1 0v.17a3.37 3.37 0 0 1 2.34 2.06c.62 1.66-.21 3.65-2.64 4.73a.5.5 0 1 1-.4-.92c2.07-.92 2.5-2.43 2.1-3.47a2.37 2.37 0 0 0-1.49-1.38 6.7 6.7 0 0 1-1.68 3.6c.08.18.17.35.23.53a.5.5 0 1 1-.93.37 5.08 5.08 0 0 0-.08-.21c-.42.3-.86.5-1.28.6-.58.14-1.2.07-1.64-.39-.64-.68-.69-1.83-.24-2.85a4.71 4.71 0 0 1 2.3-2.3c.05-.47.13-.98.24-1.55-.44.02-.89.01-1.36-.02a.5.5 0 1 1 .06-1c.53.04 1.03.04 1.53 0 .1-.42.3-1.14.47-1.64a.5.5 0 0 1 .64-.3ZM12.5 9.74c-.66.44-1.07.98-1.3 1.5-.35.8-.21 1.48.06 1.77.1.1.3.19.69.1.3-.07.68-.25 1.06-.55a5.85 5.85 0 0 1-.38-1.2c-.09-.46-.14-.99-.13-1.62Zm1.28 2.04c.54-.68.98-1.61 1.15-2.76a4.6 4.6 0 0 0-1.4.2 7.2 7.2 0 0 0 .08 1.94c.05.23.1.43.17.62ZM6.92 5.22a5.04 5.04 0 0 0-3.98.5h-.02v.01l.03.05c.29.42.22.33-.04-.05a.5.5 0 0 0 .57.83 1.44 1.44 0 0 1 .21-.12 4.04 4.04 0 0 1 2.95-.26c.71.2 1.03.59 1.19.98.15.38.17.8.18 1.17a8.73 8.73 0 0 0-1.93-.32 4.57 4.57 0 0 0-3.2 1 2.66 2.66 0 0 0-.81 2.84 2.97 2.97 0 0 0 2.25 2.08c.9.2 1.86-.07 2.64-.4.38-.18.74-.37 1.05-.56v.53a.5.5 0 1 0 1 0V8.45c0-.4 0-1.04-.26-1.67a2.66 2.66 0 0 0-1.83-1.56ZM6.04 9c.72.03 1.4.2 1.97.36v2.39c-.35.26-.87.59-1.45.85-.7.3-1.43.47-2.04.35a1.97 1.97 0 0 1-1.5-1.39c-.19-.66-.03-1.35.5-1.79.76-.63 1.65-.8 2.52-.77Z",
    fill: primaryFill
  }));
};

exports.TranslateRegular = wrapIcon_1.default( /*#__PURE__*/TranslateRegularIcon, 'TranslateRegular');

const TransmissionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a2 2 0 0 0-.5 3.94V9.5a.5.5 0 0 0 1 0V5.94A2 2 0 0 0 10 2ZM3 5a1 1 0 0 1 2 0v4c0 .28.22.5.5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5c.83 0 1.5-.67 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0V5Z",
    fill: primaryFill
  }));
};

exports.TransmissionFilled = wrapIcon_1.default( /*#__PURE__*/TransmissionFilledIcon, 'TransmissionFilled');

const TransmissionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a2 2 0 0 0-.5 3.94.5.5 0 0 0 0 .06v3.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0 0-.06A2 2 0 0 0 10 2ZM9 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4 4a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4a1 1 0 1 0 2 0v-3.5c0-.28.22-.5.5-.5h5a.5.5 0 0 0 .5-.5V5a1 1 0 1 0-2 0v4a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h2V5a2 2 0 1 1 4 0v6.5c0 .83-.67 1.5-1.5 1.5H12v3a2 2 0 1 1-4 0v-3.5H6V16a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v3.5h2a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 9V5a1 1 0 0 0-1-1Z",
    fill: primaryFill
  }));
};

exports.TransmissionRegular = wrapIcon_1.default( /*#__PURE__*/TransmissionRegularIcon, 'TransmissionRegular');

const TrayItemAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3Zm2 5.5a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L14 13.29V7.5ZM5 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm-2 2.5a.5.5 0 0 0-1 0V15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.5Z",
    fill: primaryFill
  }));
};

exports.TrayItemAddFilled = wrapIcon_1.default( /*#__PURE__*/TrayItemAddFilledIcon, 'TrayItemAddFilled');

const TrayItemAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3Zm4 0h-3v2h3V3Zm-1.5 4c.28 0 .5.22.5.5v5.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 13.29V7.5c0-.28.22-.5.5-.5ZM4 12a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Zm4 0H5v2h3v-2Zm-5.5 1c.28 0 .5.22.5.5V15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TrayItemAddRegular = wrapIcon_1.default( /*#__PURE__*/TrayItemAddRegularIcon, 'TrayItemAddRegular');

const TrayItemRemoveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3Zm1.85 5.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L13 8.71v5.79a.5.5 0 0 0 1 0V8.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2ZM5 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm-2 2.5a.5.5 0 0 0-1 0V15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.5Z",
    fill: primaryFill
  }));
};

exports.TrayItemRemoveFilled = wrapIcon_1.default( /*#__PURE__*/TrayItemRemoveFilledIcon, 'TrayItemRemoveFilled');

const TrayItemRemoveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3Zm4 0h-3v2h3V3Zm-1.85 4.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L14 8.71v5.79a.5.5 0 0 1-1 0V8.7l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2ZM4 12a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Zm4 0H5v2h3v-2Zm-5.5 1c.28 0 .5.22.5.5V15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TrayItemRemoveRegular = wrapIcon_1.default( /*#__PURE__*/TrayItemRemoveRegularIcon, 'TrayItemRemoveRegular');

const TreeDeciduousFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a3.5 3.5 0 0 0-3.39 2.61A3.5 3.5 0 0 0 4.05 8.6 3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.4 3.52 3.52 0 0 0-2.56-3.99A3.5 3.5 0 0 0 10 2ZM9 15h2v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15Z",
    fill: primaryFill
  }));
};

exports.TreeDeciduousFilled = wrapIcon_1.default( /*#__PURE__*/TreeDeciduousFilledIcon, 'TreeDeciduousFilled');

const TreeDeciduousRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a3.5 3.5 0 0 0-3.39 2.61A3.5 3.5 0 0 0 4.05 8.6 3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.4 3.52 3.52 0 0 0-2.56-3.99A3.5 3.5 0 0 0 10 2Zm1 13v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15h2ZM7.53 5.11a2.5 2.5 0 0 1 4.94 0c.03.22.2.39.42.42A2.5 2.5 0 0 1 14.9 8.7a.5.5 0 0 0 .25.58A2.5 2.5 0 0 1 14 14H6a2.5 2.5 0 0 1-1.15-4.72.5.5 0 0 0 .25-.58A2.5 2.5 0 0 1 7.1 5.53a.5.5 0 0 0 .42-.42Z",
    fill: primaryFill
  }));
};

exports.TreeDeciduousRegular = wrapIcon_1.default( /*#__PURE__*/TreeDeciduousRegularIcon, 'TreeDeciduousRegular');

const TreeEvergreenFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.62 2.21a1 1 0 0 0-1.24 0l-3.3 2.61a1.5 1.5 0 0 0-.06 2.32l-1.47 1.2a1.5 1.5 0 0 0 .51 2.6l-1.58 1.48A1.49 1.49 0 0 0 4.49 15H8v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.36 0 2-1.65 1.02-2.58l-1.58-1.48a1.5 1.5 0 0 0 .5-2.6L14 7.14a1.5 1.5 0 0 0-.06-2.32l-3.31-2.6ZM9 15h2v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15Z",
    fill: primaryFill
  }));
};

exports.TreeEvergreenFilled = wrapIcon_1.default( /*#__PURE__*/TreeEvergreenFilledIcon, 'TreeEvergreenFilled');

const TreeEvergreenRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.62 2.21a1 1 0 0 0-1.24 0l-3.3 2.61a1.5 1.5 0 0 0-.06 2.32l-1.47 1.2a1.5 1.5 0 0 0 .51 2.6l-1.58 1.48A1.49 1.49 0 0 0 4.49 15H8v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.36 0 2-1.65 1.02-2.58l-1.58-1.48a1.5 1.5 0 0 0 .5-2.6L14 7.14a1.5 1.5 0 0 0-.06-2.32l-3.31-2.6ZM11 15v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15h2ZM10 3l3.3 2.6a.5.5 0 0 1-.28.9.5.5 0 0 0-.3.89l2.1 1.72a.5.5 0 0 1-.33.89h-.75a.5.5 0 0 0-.35.87l2.45 2.28c.32.3.1.85-.34.85h-11a.49.49 0 0 1-.34-.85l2.44-2.29a.5.5 0 0 0-.34-.86h-.75a.5.5 0 0 1-.32-.89l2.1-1.72a.5.5 0 0 0-.3-.89.5.5 0 0 1-.3-.9L10 3Z",
    fill: primaryFill
  }));
};

exports.TreeEvergreenRegular = wrapIcon_1.default( /*#__PURE__*/TreeEvergreenRegularIcon, 'TreeEvergreenRegular');

const TriangleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M1.18 15.8c-.53 1 .2 2.2 1.32 2.2h15a1.5 1.5 0 0 0 1.32-2.22l-7.6-14a1.5 1.5 0 0 0-2.65.02l-7.4 14Z",
    fill: primaryFill
  }));
};

exports.TriangleFilled = wrapIcon_1.default( /*#__PURE__*/TriangleFilledIcon, 'TriangleFilled');

const TriangleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 18a1.5 1.5 0 0 1-1.32-2.2l7.4-14a1.5 1.5 0 0 1 2.64-.02l7.6 14A1.5 1.5 0 0 1 17.5 18h-15Zm-.44-1.73a.5.5 0 0 0 .44.73h15a.5.5 0 0 0 .44-.74l-7.6-14a.5.5 0 0 0-.89 0l-7.39 14Z",
    fill: primaryFill
  }));
};

exports.TriangleRegular = wrapIcon_1.default( /*#__PURE__*/TriangleRegularIcon, 'TriangleRegular');

const TriangleDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.76 4.93A2 2 0 0 0 17 2H3a2 2 0 0 0-1.76 2.93l7 13.02a2 2 0 0 0 3.52 0l7-13.02Z",
    fill: primaryFill
  }));
};

exports.TriangleDownFilled = wrapIcon_1.default( /*#__PURE__*/TriangleDownFilledIcon, 'TriangleDownFilled');

const TriangleDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.88 4.46A1 1 0 0 0 17 3H3a1 1 0 0 0-.88 1.46l7 13.02a1 1 0 0 0 1.76 0l7-13.02ZM17 2a2 2 0 0 1 1.76 2.93l-7 13.02a2 2 0 0 1-3.52 0l-7-13.02A2 2 0 0 1 3 2h14Z",
    fill: primaryFill
  }));
};

exports.TriangleDownRegular = wrapIcon_1.default( /*#__PURE__*/TriangleDownRegularIcon, 'TriangleDownRegular');

const TriangleLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.07 18.76A2 2 0 0 0 18 17V3a2 2 0 0 0-2.93-1.76l-13.02 7a2 2 0 0 0 0 3.52l13.02 7Z",
    fill: primaryFill
  }));
};

exports.TriangleLeftFilled = wrapIcon_1.default( /*#__PURE__*/TriangleLeftFilledIcon, 'TriangleLeftFilled');

const TriangleLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.54 17.88A1 1 0 0 0 17 17V3a1 1 0 0 0-1.46-.88l-13.02 7a1 1 0 0 0 0 1.76l13.02 7ZM18 17a2 2 0 0 1-2.93 1.76l-13.02-7a2 2 0 0 1 0-3.52l13.02-7A2 2 0 0 1 18 3.01V17Z",
    fill: primaryFill
  }));
};

exports.TriangleLeftRegular = wrapIcon_1.default( /*#__PURE__*/TriangleLeftRegularIcon, 'TriangleLeftRegular');

const TriangleRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.93 1.24A2 2 0 0 0 2 3v14a2 2 0 0 0 2.93 1.76l13.02-7a2 2 0 0 0 0-3.52l-13.02-7Z",
    fill: primaryFill
  }));
};

exports.TriangleRightFilled = wrapIcon_1.default( /*#__PURE__*/TriangleRightFilledIcon, 'TriangleRightFilled');

const TriangleRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.46 2.12A1 1 0 0 0 3 3v14a1 1 0 0 0 1.46.88l13.02-7a1 1 0 0 0 0-1.76l-13.02-7ZM2 3a2 2 0 0 1 2.93-1.76l13.02 7a2 2 0 0 1 0 3.52l-13.02 7A2 2 0 0 1 2 16.99V3Z",
    fill: primaryFill
  }));
};

exports.TriangleRightRegular = wrapIcon_1.default( /*#__PURE__*/TriangleRightRegularIcon, 'TriangleRightRegular');

const TrophyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 0 1-2.6 2.97 4.5 4.5 0 0 1-3.9 3.5v1.5h2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-.5c0-1.1.9-2 2-2h2v-1.5a4.5 4.5 0 0 1-3.9-3.5A3 3 0 0 1 3 7V5.5C3 4.67 3.67 4 4.5 4h1Zm9 4.94A2 2 0 0 0 16 7V5.5a.5.5 0 0 0-.5-.5h-1v3.94ZM5.5 5h-1a.5.5 0 0 0-.5.5V7a2 2 0 0 0 1.5 1.93V5Z",
    fill: primaryFill
  }));
};

exports.TrophyFilled = wrapIcon_1.default( /*#__PURE__*/TrophyFilledIcon, 'TrophyFilled');

const TrophyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 7a3 3 0 0 0 2.6 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.23.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5a4.5 4.5 0 0 0 3.9-3.5A3 3 0 0 0 17 7V5.5c0-.83-.68-1.5-1.5-1.5h-1a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2h-1C3.67 4 3 4.67 3 5.5V7Zm1.5-2h1v3.93A2 2 0 0 1 4 7V5.5c0-.28.22-.5.5-.5Zm10 0h1c.27 0 .5.22.5.5V7a2 2 0 0 1-1.5 1.94V5Zm-1-1v5a3.5 3.5 0 0 1-7 .16V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Zm-7 12.97a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h-7Z",
    fill: primaryFill
  }));
};

exports.TrophyRegular = wrapIcon_1.default( /*#__PURE__*/TrophyRegularIcon, 'TrophyRegular');

const TrophyLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7c0 .45-.1.88-.28 1.26-.3-.14-.64-.23-1-.25.18-.3.28-.64.28-1V5.5a.5.5 0 0 0-.5-.5h-1v3.17a3 3 0 0 0-2 2.83v.06A2 2 0 0 0 11 13v.39c-.16.04-.33.06-.5.08v1.5h.5V17c0 .35.1.68.25.97H6a.5.5 0 0 1-.5-.5v-.5c0-1.1.9-2 2-2h2v-1.5a4.5 4.5 0 0 1-3.9-3.5A3 3 0 0 1 3 7V5.5C3 4.67 3.67 4 4.5 4h1Zm0 1h-1a.5.5 0 0 0-.5.5V7a2 2 0 0 0 1.5 1.93V5Zm8 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TrophyLockFilled = wrapIcon_1.default( /*#__PURE__*/TrophyLockFilledIcon, 'TrophyLockFilled');

const TrophyLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 7a3 3 0 0 0 2.6 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.23.5.5.5h5.25A2 2 0 0 1 11 17v-.03H6.5a1 1 0 0 1 1-1H11v-1h-.5v-1.5c.17-.02.34-.04.5-.08V13a2 2 0 0 1 .12-.68A3.5 3.5 0 0 1 6.5 9.16V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.76a3 3 0 0 1 1-.59V5h1c.27 0 .5.22.5.5V7c0 .37-.1.71-.27 1 .35.03.68.12 1 .26.17-.38.27-.8.27-1.26V5.5c0-.83-.68-1.5-1.5-1.5h-1a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2h-1C3.67 4 3 4.67 3 5.5V7Zm1.5-2h1v3.93A2 2 0 0 1 4 7V5.5c0-.28.22-.5.5-.5Zm9 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TrophyLockRegular = wrapIcon_1.default( /*#__PURE__*/TrophyLockRegularIcon, 'TrophyLockRegular');

const TrophyOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 0 0 2.62 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 0 0 .7-.7l-15-15ZM5.5 6.2v2.72A2 2 0 0 1 4 7V5.5c0-.22.13-.4.32-.47L5.5 6.21Zm8.9 3.76a4.48 4.48 0 0 1-.7 1.6L5.57 3.46A2 2 0 0 1 7.5 2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 0 1-2.6 2.97Zm.1-1.03A2 2 0 0 0 16 7V5.5a.5.5 0 0 0-.5-.5h-1v3.94Z",
    fill: primaryFill
  }));
};

exports.TrophyOffFilled = wrapIcon_1.default( /*#__PURE__*/TrophyOffFilledIcon, 'TrophyOffFilled');

const TrophyOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 0 0 2.62 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 0 0 .7-.7l-15-15Zm8.62 10.03A3.5 3.5 0 0 1 6.5 9.16V7.2l4.97 4.97ZM5.5 6.2v2.72A2 2 0 0 1 4 7V5.5c0-.22.13-.4.32-.47L5.5 6.21Zm8 2.79c0 .68-.2 1.31-.53 1.85l.72.72c.33-.47.58-1.01.7-1.6A3 3 0 0 0 17 7V5.5c0-.83-.67-1.5-1.5-1.5h-.99a2 2 0 0 0-2-2h-5a2 2 0 0 0-1.92 1.46l.92.92V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5Zm1-4h1c.27 0 .5.22.5.5V7a2 2 0 0 1-1.5 1.94V5Zm-8 11.97a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h-7Z",
    fill: primaryFill
  }));
};

exports.TrophyOffRegular = wrapIcon_1.default( /*#__PURE__*/TrophyOffRegularIcon, 'TrophyOffRegular');

const TvFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm3.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z",
    fill: primaryFill
  }));
};

exports.TvFilled = wrapIcon_1.default( /*#__PURE__*/TvFilledIcon, 'TvFilled');

const TvRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Zm1 11.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TvRegular = wrapIcon_1.default( /*#__PURE__*/TvRegularIcon, 'TvRegular');

const TvArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35A.5.5 0 0 0 17 5.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 5H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2ZM14.5 11c1.33 0 2.55-.47 3.5-1.26V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5.2a5.5 5.5 0 0 0 5.3 7Zm-9 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z",
    fill: primaryFill
  }));
};

exports.TvArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/TvArrowRightFilledIcon, 'TvArrowRightFilled');

const TvArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35A.5.5 0 0 0 17 5.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 5H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2ZM17 13v-2.6c.36-.18.7-.4 1-.66V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5.2c-.08.32-.15.66-.18 1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1ZM5 16.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TvArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/TvArrowRightRegularIcon, 'TvArrowRightRegular');

const TvUsbFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v1.27A2 2 0 0 0 17 7h-2a2 2 0 0 0-2 2v1.27A2 2 0 0 0 12 12v2.18a2 2 0 0 0 .18.82H4a2 2 0 0 1-2-2V6Zm15 2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.2a1 1 0 0 1-.2.6l-1.3 1.8V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.4l-1.31-1.84a1 1 0 0 1-.19-.58V12a1 1 0 0 1 1-1V9a1 1 0 0 1 1-1h2Zm0 3V9h-2v2h2Zm-3.5 5.91-.66-.91H5.5a.5.5 0 0 0 0 1h8v-.09Zm-.31-2.15-.34.24Z",
    fill: primaryFill
  }));
};

exports.TvUsbFilled = wrapIcon_1.default( /*#__PURE__*/TvUsbFilledIcon, 'TvUsbFilled');

const TvUsbRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v1.27A2 2 0 0 0 17 7V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8v.18a2 2 0 0 0 .18.82H4a2 2 0 0 1-2-2V6Zm11.5 10.91-.66-.91H5.5a.5.5 0 0 0 0 1h8v-.09ZM14 9v2a1 1 0 0 0-1 1v2.18c0 .2.07.41.19.58l1.31 1.83V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.4l1.3-1.8a1 1 0 0 0 .2-.6V12a1 1 0 0 0-1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Zm3 2h-2V9h2v2Z",
    fill: primaryFill
  }));
};

exports.TvUsbRegular = wrapIcon_1.default( /*#__PURE__*/TvUsbRegularIcon, 'TvUsbRegular');

const UmbrellaFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.51 9.13c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.18 3.18 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05A.5.5 0 0 0 18 9.5C18 5.72 14.78 2 10 2 5.22 2 2 5.72 2 9.5a.5.5 0 0 0 .92.28l.03-.05a3.2 3.2 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.2 3.2 0 0 1 .56-.6ZM10 9.5c-.15 0-.32.05-.5.15v6.1a1.25 1.25 0 1 1-2.5 0v-.25a.5.5 0 0 0-1 0v.25a2.25 2.25 0 0 0 4.5 0v-6.1c-.18-.1-.35-.15-.5-.15Z",
    fill: primaryFill
  }));
};

exports.UmbrellaFilled = wrapIcon_1.default( /*#__PURE__*/UmbrellaFilledIcon, 'UmbrellaFilled');

const UmbrellaRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.51 9.13c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.18 3.18 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05A.5.5 0 0 0 18 9.5C18 5.72 14.78 2 10 2 5.22 2 2 5.72 2 9.5a.5.5 0 0 0 .92.28l.03-.05a3.2 3.2 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.2 3.2 0 0 1 .56-.6Zm-5.35-1A6.87 6.87 0 0 1 10 3a6.87 6.87 0 0 1 6.84 5.13A3.17 3.17 0 0 0 15 7.5c-.92 0-1.66.46-2.14.87-.14.12-.26.24-.36.35-.1-.11-.22-.23-.36-.35A3.33 3.33 0 0 0 10 7.5c-.92 0-1.66.46-2.14.87-.14.12-.26.24-.36.35-.1-.11-.22-.23-.36-.35A3.33 3.33 0 0 0 5 7.5c-.74 0-1.37.3-1.84.63ZM10 9.5c-.15 0-.32.05-.5.15v6.1a1.25 1.25 0 1 1-2.5 0v-.25a.5.5 0 0 0-1 0v.25a2.25 2.25 0 0 0 4.5 0v-6.1c-.18-.1-.35-.15-.5-.15Z",
    fill: primaryFill
  }));
};

exports.UmbrellaRegular = wrapIcon_1.default( /*#__PURE__*/UmbrellaRegularIcon, 'UmbrellaRegular');

const UninstallAppFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3h4.75c.83 0 1.5.67 1.5 1.5v4.75h4.75c.83 0 1.5.67 1.5 1.5v4.75c0 .83-.67 1.5-1.5 1.5h-11Zm11-6.25h-4.75v4.75h4.75v-4.75Zm-6.25 0H4.5v4.75h4.75v-4.75Zm0-1.5V4.5H4.5v4.75h4.75Zm5.03-2.47a.75.75 0 1 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.22 1.22 1.22-1.22a.75.75 0 1 1 1.06 1.06L16.56 4.5l1.22 1.22a.75.75 0 0 1-1.06 1.06L15.5 5.56l-1.22 1.22Z",
    fill: primaryFill
  }));
};

exports.UninstallAppFilled = wrapIcon_1.default( /*#__PURE__*/UninstallAppFilledIcon, 'UninstallAppFilled');

const UninstallAppRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11Zm11-6.5h-5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5Zm-6 0H4v5c0 .28.22.5.5.5h5v-5.5Zm0-1v-5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5Zm4.35-2.65a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64a.5.5 0 0 1 .7.7L16.21 4.5l1.64 1.65a.5.5 0 0 1-.7.7L15.5 5.21l-1.65 1.64Z",
    fill: primaryFill
  }));
};

exports.UninstallAppRegular = wrapIcon_1.default( /*#__PURE__*/UninstallAppRegularIcon, 'UninstallAppRegular');

const UsbPlugFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.92A1.92 1.92 0 0 1 5 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5ZM8 6h4V3H8v3Z",
    fill: primaryFill
  }));
};

exports.UsbPlugFilled = wrapIcon_1.default( /*#__PURE__*/UsbPlugFilledIcon, 'UsbPlugFilled');

const UsbPlugRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.92A1.92 1.92 0 0 1 5 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5c0-.28.22-.5.5-.5Zm5.58 12c.51 0 .92-.41.92-.91V7.9c0-.5-.4-.91-.92-.91H6.92a.92.92 0 0 0-.92.91v5.18c0 .5.4.91.92.91h6.16ZM12 6V3H8v3h4Z",
    fill: primaryFill
  }));
};

exports.UsbPlugRegular = wrapIcon_1.default( /*#__PURE__*/UsbPlugRegularIcon, 'UsbPlugRegular');

const UsbStickFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2V2.5ZM8 6h4V3H8v3Z",
    fill: primaryFill
  }));
};

exports.UsbStickFilled = wrapIcon_1.default( /*#__PURE__*/UsbStickFilledIcon, 'UsbStickFilled');

const UsbStickRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 2h5c.28 0 .5.22.5.5V6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2V2.5c0-.28.22-.5.5-.5ZM12 6V3H8v3h4ZM7 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7Z",
    fill: primaryFill
  }));
};

exports.UsbStickRegular = wrapIcon_1.default( /*#__PURE__*/UsbStickRegularIcon, 'UsbStickRegular');

const VaultFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm8.85.65a.5.5 0 0 0-.7 0l-.63.63a2 2 0 0 0-2.04 0l-.63-.63a.5.5 0 0 0-.7.7l.63.63a2 2 0 0 0 0 2.04l-.63.63a.5.5 0 0 0 .7.7l.63-.63a2 2 0 0 0 2.04 0l.63.63a.5.5 0 0 0 .7-.7l-.63-.63a2 2 0 0 0 0-2.04l.63-.63a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.VaultFilled = wrapIcon_1.default( /*#__PURE__*/VaultFilledIcon, 'VaultFilled');

const VaultRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.72 11.02a2 2 0 0 0 0-2.04l.63-.63a.5.5 0 0 0-.7-.7l-.63.63a2 2 0 0 0-2.04 0l-.63-.63a.5.5 0 0 0-.7.7l.63.63a2 2 0 0 0 0 2.04l-.63.63a.5.5 0 0 0 .7.7l.63-.63a2 2 0 0 0 2.04 0l.63.63a.5.5 0 0 0 .7-.7l-.63-.63ZM12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z",
    fill: primaryFill
  }));
};

exports.VaultRegular = wrapIcon_1.default( /*#__PURE__*/VaultRegularIcon, 'VaultRegular');

const VehicleBicycleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.75 2a.75.75 0 0 0 0 1.5h1.13l.36 2H7.25v-.75A.75.75 0 0 0 6.5 4h-2a.75.75 0 0 0 0 1.5h1.25v.7L5.4 9.02a3.75 3.75 0 1 0 4.06 3.2l3.23-4.3.24 1.32A3.75 3.75 0 1 0 14.41 9l-1.17-6.39A.75.75 0 0 0 12.5 2h-1.75Zm-3.6 5.13A.75.75 0 0 0 7.2 7h4.29l-2.69 3.58a3.76 3.76 0 0 0-1.92-1.4l.26-2.05ZM3.5 12.75c0-1.05.73-1.94 1.7-2.18L5 12.16a.75.75 0 0 0 .75.84h2.24a2.25 2.25 0 0 1-4.49-.25Zm3.1-1.25.1-.8c.37.18.7.46.92.8H6.6Zm6.61-.75.3 1.64A.75.75 0 0 0 15 12.1l-.3-1.57a2.25 2.25 0 1 1-1.48.21Z",
    fill: primaryFill
  }));
};

exports.VehicleBicycleFilled = wrapIcon_1.default( /*#__PURE__*/VehicleBicycleFilledIcon, 'VehicleBicycleFilled');

const VehicleBicycleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 2a.5.5 0 0 0 0 1h1.59l.6 3H7V4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H6v1.46L5.58 9H5.5A3.5 3.5 0 1 0 9 12.67l3.97-5.3.36 1.83a3.5 3.5 0 1 0 .98-.2L13 2.4a.5.5 0 0 0-.49-.4h-2ZM3 12.5A2.5 2.5 0 0 1 5.41 10l-.4 2.42a.5.5 0 0 0 .49.58h2.45A2.5 2.5 0 0 1 3 12.5Zm3.09-.5.3-1.83c.8.3 1.39.99 1.56 1.83H6.09Zm.47-2.84L6.92 7H12l-3.22 4.29a3.5 3.5 0 0 0-2.22-2.13Zm6.97 1.04.48 2.4a.5.5 0 0 0 .98-.2l-.48-2.4a2.5 2.5 0 1 1-.98.2Z",
    fill: primaryFill
  }));
};

exports.VehicleBicycleRegular = wrapIcon_1.default( /*#__PURE__*/VehicleBicycleRegularIcon, 'VehicleBicycleRegular');

const VehicleBusFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1V5.5Zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12V5.5ZM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2ZM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H4Zm4-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.VehicleBusFilled = wrapIcon_1.default( /*#__PURE__*/VehicleBusFilledIcon, 'VehicleBusFilled');

const VehicleBusRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Zm-1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1V5.5Zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12V5.5ZM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2ZM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H4Zm0-1h12v-4H4v4Z",
    fill: primaryFill
  }));
};

exports.VehicleBusRegular = wrapIcon_1.default( /*#__PURE__*/VehicleBusRegularIcon, 'VehicleBusRegular');

const VehicleCabFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.75 1a.75.75 0 0 0-.75.75V3h-.86a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4a1.5 1.5 0 0 0-1.08-1.44l-.11-.56h.54a.75.75 0 0 0 .65-.75v-.1a.75.75 0 0 0-.75-.65h-.74l-.2-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75h-4.5ZM6.14 4h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4ZM5 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM6 17v-1H4v1a1 1 0 1 0 2 0Zm10-1v1a1 1 0 1 1-2 0v-1h2Z",
    fill: primaryFill
  }));
};

exports.VehicleCabFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCabFilledIcon, 'VehicleCabFilled');

const VehicleCabRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM7 3h-.86a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v5c0 .83.67 1.5 1.5 1.5H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 1 0 2 0v-1h.5c.83 0 1.5-.67 1.5-1.5v-5a1.5 1.5 0 0 0-1.08-1.44l-.11-.56h.54a.75.75 0 0 0 .65-.75v-.1a.75.75 0 0 0-.75-.65h-.74l-.2-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V3Zm1 0V2h4v1H8ZM3.5 9h13c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5Zm2.64-5h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4Z",
    fill: primaryFill
  }));
};

exports.VehicleCabRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCabRegularIcon, 'VehicleCabRegular');

const VehicleCarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 16v1a1 1 0 1 1-2 0v-1h2Zm10 0v1a1 1 0 1 1-2 0v-1h2ZM13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0 1 18 9.5v4c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-4c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 0 1 0-1.5h.74l.2-.99A2.5 2.5 0 0 1 6.14 3h7.72ZM6 10.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13.86 4H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0 0 13.86 4Z",
    fill: primaryFill
  }));
};

exports.VehicleCarFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarFilledIcon, 'VehicleCarFilled');

const VehicleCarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0 1 18 9.5v5c0 .83-.67 1.5-1.5 1.5H16v1a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1h-.5A1.5 1.5 0 0 1 2 14.5v-5c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 0 1 0-1.5h.74l.2-.99A2.5 2.5 0 0 1 6.14 3h7.72Zm2.64 6h-13a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5ZM6 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-.14-7H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0 0 13.86 4Z",
    fill: primaryFill
  }));
};

exports.VehicleCarRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarRegularIcon, 'VehicleCarRegular');

const VehicleCarCollisionFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.36 2.02a.5.5 0 0 1 .56.2l1.72 2.59 2.58-1.73a.5.5 0 0 1 .77.54L14.14 7h3.36a.5.5 0 0 1 .35.85l-2.57 2.57 2.5 1.66a.5.5 0 0 1-.28.92h-3a.5.5 0 1 1 0-1h1.35l-1.63-1.08a.5.5 0 0 1-.07-.77L16.29 8H13.5a.5.5 0 0 1-.49-.62l.7-2.75-1.93 1.29a.5.5 0 0 1-.7-.14L10 4.15V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .36-.48ZM2.5 10a.5.5 0 1 0 0 1H3c-.6.46-1 1.18-1 2v4a1 1 0 0 0 2 0v-.5h7v.5a1 1 0 0 0 2 0v-4c0-.82-.4-1.54-1-2h.5a.5.5 0 0 0 0-1h-.66l-.14-.83A2 2 0 0 0 9.73 7.5H5.27A2 2 0 0 0 3.3 9.17l-.14.83H2.5Zm1.58.53.2-1.2a1 1 0 0 1 1-.83h4.45a1 1 0 0 1 .99.84l.2 1.2a2.52 2.52 0 0 0-.42-.04h-6l-.42.03Zm1.42 3.22a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.75.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

exports.VehicleCarCollisionFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarCollisionFilledIcon, 'VehicleCarCollisionFilled');

const VehicleCarCollisionRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.36 2.02a.5.5 0 0 1 .56.2l1.72 2.59 2.58-1.73a.5.5 0 0 1 .77.54L14.14 7h3.36a.5.5 0 0 1 .35.85l-2.57 2.57 2.5 1.66a.5.5 0 0 1-.28.92h-3a.5.5 0 1 1 0-1h1.35l-1.63-1.08a.5.5 0 0 1-.07-.77L16.29 8H13.5a.5.5 0 0 1-.49-.62l.7-2.75-1.93 1.29a.5.5 0 0 1-.7-.14L10 4.15V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .36-.48ZM4.75 14.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 11c.6.46 1 1.18 1 2v4a1 1 0 1 1-2 0v-.5H4v.5a1 1 0 1 1-2 0v-4c0-.82.4-1.54 1-2h-.5a.5.5 0 1 1 0-1h.66l.14-.83A2 2 0 0 1 5.27 7.5h4.46a2 2 0 0 1 1.97 1.67l.14.83h.66a.5.5 0 0 1 0 1H12ZM5.27 8.5a1 1 0 0 0-.99.84l-.2 1.2c.14-.03.28-.04.42-.04h6l.42.03-.2-1.2a1 1 0 0 0-1-.83H5.28ZM3 13v2.5h9V13c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.VehicleCarCollisionRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarCollisionRegularIcon, 'VehicleCarCollisionRegular');

const VehicleCarParkingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5v-5ZM13 3H6.14a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v4c0 .83.67 1.5 1.5 1.5H15V8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4H13V3Zm2 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6.5a1 1 0 0 1-1-1v-1h1v2Zm-9-1v-1H4v1a1 1 0 1 0 2 0Zm-1-5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

exports.VehicleCarParkingFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarParkingFilledIcon, 'VehicleCarParkingFilled');

const VehicleCarParkingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5v-5ZM13 3H6.14a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v5c0 .83.67 1.5 1.5 1.5H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 0 0 1 1v-3H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H15V8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4H13V3Zm2 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.VehicleCarParkingRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarParkingRegularIcon, 'VehicleCarParkingRegular');

const VehicleCarProfileLtrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.98 13.84c.6-.27 1.02-.88 1.02-1.59v-1.21a2.5 2.5 0 0 0-1.86-2.42l-2.09-.56-1.54-2.77A2.5 2.5 0 0 0 10.32 4H6.94a2.5 2.5 0 0 0-2.37 1.7l-.82 2.48A2.5 2.5 0 0 0 2 10.56v1.69c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 0 0 4.93.15h4.1a2.5 2.5 0 0 0 4.93-.16ZM6.94 5H8v3H4.86l.66-1.97A1.5 1.5 0 0 1 6.94 5Zm4.7.77L12.86 8H9V5h1.32c.55 0 1.05.3 1.31.77ZM4 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm9 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
};

exports.VehicleCarProfileLtrFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileLtrFilledIcon, 'VehicleCarProfileLtrFilled');

const VehicleCarProfileLtrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.52 6.03 4.86 8H8V5H6.94a1.5 1.5 0 0 0-1.42 1.03ZM4.52 9l-.26.08-.12.03A1.5 1.5 0 0 0 3 10.56v1.69c0 .16.05.31.14.43a2.5 2.5 0 0 1 4.81.32h4.1a2.5 2.5 0 0 1 4.81-.32.75.75 0 0 0 .14-.43v-1.21a1.5 1.5 0 0 0-1.11-1.45L13.69 9H4.52Zm8.35-1-1.24-2.23a1.5 1.5 0 0 0-1.3-.77H9v3h3.87ZM18 12.25c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 2 12.25v-1.69c0-1.1.71-2.06 1.75-2.38l.82-2.47A2.5 2.5 0 0 1 6.94 4h3.38c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 18 11.04v1.21ZM5.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.VehicleCarProfileLtrRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileLtrRegularIcon, 'VehicleCarProfileLtrRegular');

const VehicleCarProfileLtrClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM3 12.56c0-.71.3-1.37.8-1.83A5.5 5.5 0 0 0 10 8.66V10h3.87l-1.24-2.23a1.5 1.5 0 0 0-1.3-.77h-.54c.1-.32.16-.66.19-1h.34c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 19 13.04v1.21c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 3 14.25v-1.69Zm2 2.94a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
};

exports.VehicleCarProfileLtrClockFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileLtrClockFilledIcon, 'VehicleCarProfileLtrClockFilled');

const VehicleCarProfileLtrClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM3 12.56c0-.71.3-1.37.8-1.83A5.5 5.5 0 0 0 10 8.66V10h3.87l-1.24-2.23a1.5 1.5 0 0 0-1.3-.77h-.54c.1-.32.16-.66.19-1h.34c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 19 13.04v1.21c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 3 14.25v-1.69ZM5.53 11v.01l-.4.1A1.5 1.5 0 0 0 4 12.56v1.7c0 .15.05.3.14.42a2.5 2.5 0 0 1 4.81.32h4.1a2.5 2.5 0 0 1 4.81-.32.75.75 0 0 0 .14-.43v-1.21a1.5 1.5 0 0 0-1.11-1.45l-2.2-.59H5.52Zm.97 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.VehicleCarProfileLtrClockRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileLtrClockRegularIcon, 'VehicleCarProfileLtrClockRegular');

const VehicleCarProfileRtlFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.02 13.84A1.75 1.75 0 0 1 2 12.25v-1.21a2.5 2.5 0 0 1 1.86-2.42l2.09-.56L7.49 5.3A2.5 2.5 0 0 1 9.68 4h3.38a2.5 2.5 0 0 1 2.37 1.7l.82 2.48A2.5 2.5 0 0 1 18 10.56v1.69c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16ZM13.06 5H12v3h3.14l-.66-1.97A1.5 1.5 0 0 0 13.06 5Zm-4.7.77L7.14 8H11V5H9.68c-.55 0-1.05.3-1.31.77ZM16 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-9 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z",
    fill: primaryFill
  }));
};

exports.VehicleCarProfileRtlFilled = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileRtlFilledIcon, 'VehicleCarProfileRtlFilled');