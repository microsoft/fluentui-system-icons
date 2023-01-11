"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentToolboxFilled = exports.DocumentTextToolboxRegular = exports.DocumentTextToolboxFilled = exports.DocumentTextLinkRegular = exports.DocumentTextLinkFilled = exports.DocumentTextExtractRegular = exports.DocumentTextExtractFilled = exports.DocumentTextClockRegular = exports.DocumentTextClockFilled = exports.DocumentTextRegular = exports.DocumentTextFilled = exports.DocumentTableTruckRegular = exports.DocumentTableTruckFilled = exports.DocumentTableSearchRegular = exports.DocumentTableSearchFilled = exports.DocumentTableCubeRegular = exports.DocumentTableCubeFilled = exports.DocumentTableCheckmarkRegular = exports.DocumentTableCheckmarkFilled = exports.DocumentTableArrowRightRegular = exports.DocumentTableArrowRightFilled = exports.DocumentTableRegular = exports.DocumentTableFilled = exports.DocumentSyncRegular = exports.DocumentSyncFilled = exports.DocumentSplitHintOffRegular = exports.DocumentSplitHintOffFilled = exports.DocumentSplitHintRegular = exports.DocumentSplitHintFilled = exports.DocumentSettingsRegular = exports.DocumentSettingsFilled = exports.DocumentSearchRegular = exports.DocumentSearchFilled = exports.DocumentSaveRegular = exports.DocumentSaveFilled = exports.DocumentRibbonRegular = exports.DocumentRibbonFilled = exports.DocumentQueueMultipleRegular = exports.DocumentQueueMultipleFilled = exports.DocumentQueueAddRegular = exports.DocumentQueueAddFilled = exports.DocumentQueueRegular = exports.DocumentQueueFilled = exports.DocumentQuestionMarkRegular = exports.DocumentQuestionMarkFilled = exports.DocumentProhibitedRegular = exports.DocumentProhibitedFilled = exports.DocumentPillRegular = exports.DocumentPillFilled = exports.DocumentPersonRegular = void 0;
exports.DrinkToGoFilled = exports.DrinkMargaritaRegular = exports.DrinkMargaritaFilled = exports.DrinkCoffeeRegular = exports.DrinkCoffeeFilled = exports.DrinkBottleOffRegular = exports.DrinkBottleOffFilled = exports.DrinkBottleRegular = exports.DrinkBottleFilled = exports.DrinkBeerRegular = exports.DrinkBeerFilled = exports.DrawerSubtractRegular = exports.DrawerSubtractFilled = exports.DrawerPlayRegular = exports.DrawerPlayFilled = exports.DrawerDismissRegular = exports.DrawerDismissFilled = exports.DrawerArrowDownloadRegular = exports.DrawerArrowDownloadFilled = exports.DrawerAddRegular = exports.DrawerAddFilled = exports.DrawTextRegular = exports.DrawTextFilled = exports.DrawShapeRegular = exports.DrawShapeFilled = exports.DrawImageRegular = exports.DrawImageFilled = exports.DragRegular = exports.DragFilled = exports.DraftsRegular = exports.DraftsFilled = exports.DoubleTapSwipeUpRegular = exports.DoubleTapSwipeUpFilled = exports.DoubleTapSwipeDownRegular = exports.DoubleTapSwipeDownFilled = exports.DoubleSwipeUpRegular = exports.DoubleSwipeUpFilled = exports.DoubleSwipeDownRegular = exports.DoubleSwipeDownFilled = exports.DoorTagRegular = exports.DoorTagFilled = exports.DoorArrowRightRegular = exports.DoorArrowRightFilled = exports.DoorArrowLeftRegular = exports.DoorArrowLeftFilled = exports.DoorRegular = exports.DoorFilled = exports.DocumentWidthRegular = exports.DocumentWidthFilled = exports.DocumentToolboxRegular = void 0;
exports.DumbbellFilled = exports.DualScreenVibrateRegular = exports.DualScreenVibrateFilled = exports.DualScreenVerticalScrollRegular = exports.DualScreenVerticalScrollFilled = exports.DualScreenUpdateRegular = exports.DualScreenUpdateFilled = exports.DualScreenTabletRegular = exports.DualScreenTabletFilled = exports.DualScreenStatusBarRegular = exports.DualScreenStatusBarFilled = exports.DualScreenSpeakerRegular = exports.DualScreenSpeakerFilled = exports.DualScreenSpanRegular = exports.DualScreenSpanFilled = exports.DualScreenSettingsRegular = exports.DualScreenSettingsFilled = exports.DualScreenPaginationRegular = exports.DualScreenPaginationFilled = exports.DualScreenMirrorRegular = exports.DualScreenMirrorFilled = exports.DualScreenLockRegular = exports.DualScreenLockFilled = exports.DualScreenHeaderRegular = exports.DualScreenHeaderFilled = exports.DualScreenGroupRegular = exports.DualScreenGroupFilled = exports.DualScreenDismissRegular = exports.DualScreenDismissFilled = exports.DualScreenDesktopRegular = exports.DualScreenDesktopFilled = exports.DualScreenClosedAlertRegular = exports.DualScreenClosedAlertFilled = exports.DualScreenClockRegular = exports.DualScreenClockFilled = exports.DualScreenArrowUpRegular = exports.DualScreenArrowUpFilled = exports.DualScreenArrowRightRegular = exports.DualScreenArrowRightFilled = exports.DualScreenAddRegular = exports.DualScreenAddFilled = exports.DualScreenRegular = exports.DualScreenFilled = exports.DropRegular = exports.DropFilled = exports.DriveTrainRegular = exports.DriveTrainFilled = exports.DrinkWineRegular = exports.DrinkWineFilled = exports.DrinkToGoRegular = void 0;
exports.EraserFilled = exports.EqualOffRegular = exports.EqualOffFilled = exports.EqualCircleRegular = exports.EqualCircleFilled = exports.EngineRegular = exports.EngineFilled = exports.EmojiSurpriseRegular = exports.EmojiSurpriseFilled = exports.EmojiSparkleRegular = exports.EmojiSparkleFilled = exports.EmojiSmileSlightRegular = exports.EmojiSmileSlightFilled = exports.EmojiSadSlightRegular = exports.EmojiSadSlightFilled = exports.EmojiSadRegular = exports.EmojiSadFilled = exports.EmojiMultipleRegular = exports.EmojiMultipleFilled = exports.EmojiMehRegular = exports.EmojiMehFilled = exports.EmojiLaughRegular = exports.EmojiLaughFilled = exports.EmojiHandRegular = exports.EmojiHandFilled = exports.EmojiEditRegular = exports.EmojiEditFilled = exports.EmojiAngryRegular = exports.EmojiAngryFilled = exports.EmojiAddRegular = exports.EmojiAddFilled = exports.EmojiRegular = exports.EmojiFilled = exports.ElevatorRegular = exports.ElevatorFilled = exports.EditSettingsRegular = exports.EditSettingsFilled = exports.EditProhibitedRegular = exports.EditProhibitedFilled = exports.EditOffRegular = exports.EditOffFilled = exports.EditArrowBackRegular = exports.EditArrowBackFilled = exports.EditRegular = exports.EditFilled = exports.EarthLeafRegular = exports.EarthLeafFilled = exports.EarthRegular = exports.EarthFilled = exports.DumbbellRegular = void 0;
exports.FilterDismissFilled = exports.FilterAddRegular = exports.FilterAddFilled = exports.FilterRegular = exports.FilterFilled = exports.FilmstripRegular = exports.FilmstripFilled = exports.FeedRegular = exports.FeedFilled = exports.FaxRegular = exports.FaxFilled = exports.FastForwardRegular = exports.FastForwardFilled = exports.FastAccelerationRegular = exports.FastAccelerationFilled = exports.FStopRegular = exports.FStopFilled = exports.EyedropperOffRegular = exports.EyedropperOffFilled = exports.EyedropperRegular = exports.EyedropperFilled = exports.EyeTrackingOffRegular = exports.EyeTrackingOffFilled = exports.EyeTrackingRegular = exports.EyeTrackingFilled = exports.EyeOffRegular = exports.EyeOffFilled = exports.EyeLinesRegular = exports.EyeLinesFilled = exports.EyeRegular = exports.EyeFilled = exports.ExtendedDockRegular = exports.ExtendedDockFilled = exports.ExpandUpRightRegular = exports.ExpandUpRightFilled = exports.ExpandUpLeftRegular = exports.ExpandUpLeftFilled = exports.ErrorCircleSettingsRegular = exports.ErrorCircleSettingsFilled = exports.ErrorCircleRegular = exports.ErrorCircleFilled = exports.EraserToolRegular = exports.EraserToolFilled = exports.EraserSmallRegular = exports.EraserSmallFilled = exports.EraserSegmentRegular = exports.EraserSegmentFilled = exports.EraserMediumRegular = exports.EraserMediumFilled = exports.EraserRegular = void 0;
exports.FluentRegular = exports.FluentFilled = exports.FlowchartCircleRegular = exports.FlowchartCircleFilled = exports.FlowchartRegular = exports.FlowchartFilled = exports.FlowRegular = exports.FlowFilled = exports.FlipVerticalRegular = exports.FlipVerticalFilled = exports.FlipHorizontalRegular = exports.FlipHorizontalFilled = exports.FlashlightOffRegular = exports.FlashlightOffFilled = exports.FlashlightRegular = exports.FlashlightFilled = exports.FlashSettingsRegular = exports.FlashSettingsFilled = exports.FlashPlayRegular = exports.FlashPlayFilled = exports.FlashOffRegular = exports.FlashOffFilled = exports.FlashFlowRegular = exports.FlashFlowFilled = exports.FlashCheckmarkRegular = exports.FlashCheckmarkFilled = exports.FlashAutoRegular = exports.FlashAutoFilled = exports.FlashAddRegular = exports.FlashAddFilled = exports.FlashRegular = exports.FlashFilled = exports.FlagPrideFilled = exports.FlagOffRegular = exports.FlagOffFilled = exports.FlagCheckeredRegular = exports.FlagCheckeredFilled = exports.FlagRegular = exports.FlagFilled = exports.FixedWidthRegular = exports.FixedWidthFilled = exports.FireplaceRegular = exports.FireplaceFilled = exports.FireRegular = exports.FireFilled = exports.FingerprintRegular = exports.FingerprintFilled = exports.FilterSyncRegular = exports.FilterSyncFilled = exports.FilterDismissRegular = void 0;
exports.FoodCakeRegular = exports.FoodCakeFilled = exports.FoodAppleRegular = exports.FoodAppleFilled = exports.FoodRegular = exports.FoodFilled = exports.FontSpaceTrackingOutRegular = exports.FontSpaceTrackingOutFilled = exports.FontSpaceTrackingInRegular = exports.FontSpaceTrackingInFilled = exports.FontIncreaseRegular = exports.FontIncreaseFilled = exports.FontDecreaseRegular = exports.FontDecreaseFilled = exports.FolderZipRegular = exports.FolderZipFilled = exports.FolderSyncRegular = exports.FolderSyncFilled = exports.FolderSwapRegular = exports.FolderSwapFilled = exports.FolderProhibitedRegular = exports.FolderProhibitedFilled = exports.FolderPersonRegular = exports.FolderPersonFilled = exports.FolderPeopleRegular = exports.FolderPeopleFilled = exports.FolderOpenVerticalRegular = exports.FolderOpenVerticalFilled = exports.FolderOpenRegular = exports.FolderOpenFilled = exports.FolderMailRegular = exports.FolderMailFilled = exports.FolderLinkRegular = exports.FolderLinkFilled = exports.FolderGlobeRegular = exports.FolderGlobeFilled = exports.FolderBriefcaseRegular = exports.FolderBriefcaseFilled = exports.FolderArrowUpRegular = exports.FolderArrowUpFilled = exports.FolderArrowRightRegular = exports.FolderArrowRightFilled = exports.FolderArrowLeftRegular = exports.FolderArrowLeftFilled = exports.FolderAddRegular = exports.FolderAddFilled = exports.FolderRegular = exports.FolderFilled = exports.FluidRegular = exports.FluidFilled = void 0;
exports.GaugeAddRegular = exports.GaugeAddFilled = exports.GaugeRegular = exports.GaugeFilled = exports.GatherRegular = exports.GatherFilled = exports.GasPumpRegular = exports.GasPumpFilled = exports.GasRegular = exports.GasFilled = exports.GanttChartRegular = exports.GanttChartFilled = exports.GamesRegular = exports.GamesFilled = exports.FullScreenMinimizeRegular = exports.FullScreenMinimizeFilled = exports.FullScreenMaximizeRegular = exports.FullScreenMaximizeFilled = exports.Fps960Regular = exports.Fps960Filled = exports.Fps60Regular = exports.Fps60Filled = exports.Fps30Regular = exports.Fps30Filled = exports.Fps240Regular = exports.Fps240Filled = exports.Fps124Regular = exports.Fps124Filled = exports.Fps120Regular = exports.Fps120Filled = exports.FormNewRegular = exports.FormNewFilled = exports.FormMultipleRegular = exports.FormMultipleFilled = exports.FormRegular = exports.FormFilled = exports.FoodToastRegular = exports.FoodToastFilled = exports.FoodPizzaRegular = exports.FoodPizzaFilled = exports.FoodGrainsRegular = exports.FoodGrainsFilled = exports.FoodFishRegular = exports.FoodFishFilled = exports.FoodEggRegular = exports.FoodEggFilled = exports.FoodChickenLegRegular = exports.FoodChickenLegFilled = exports.FoodCarrotRegular = exports.FoodCarrotFilled = void 0;
exports.GlobeVideoRegular = exports.GlobeVideoFilled = exports.GlobeSurfaceRegular = exports.GlobeSurfaceFilled = exports.GlobeStarRegular = exports.GlobeStarFilled = exports.GlobeShieldRegular = exports.GlobeShieldFilled = exports.GlobeSearchRegular = exports.GlobeSearchFilled = exports.GlobeProhibitedRegular = exports.GlobeProhibitedFilled = exports.GlobePersonRegular = exports.GlobePersonFilled = exports.GlobeLocationRegular = exports.GlobeLocationFilled = exports.GlobeDesktopRegular = exports.GlobeDesktopFilled = exports.GlobeClockRegular = exports.GlobeClockFilled = exports.GlobeAddRegular = exports.GlobeAddFilled = exports.GlobeRegular = exports.GlobeFilled = exports.GlassesOffRegular = exports.GlassesOffFilled = exports.GlassesRegular = exports.GlassesFilled = exports.GlanceHorizontalRegular = exports.GlanceHorizontalFilled = exports.GlanceRegular = exports.GlanceFilled = exports.GiftCardMultipleRegular = exports.GiftCardMultipleFilled = exports.GiftCardMoneyRegular = exports.GiftCardMoneyFilled = exports.GiftCardArrowRightRegular = exports.GiftCardArrowRightFilled = exports.GiftCardAddRegular = exports.GiftCardAddFilled = exports.GiftCardRegular = exports.GiftCardFilled = exports.GiftRegular = exports.GiftFilled = exports.GifRegular = exports.GifFilled = exports.GestureRegular = exports.GestureFilled = exports.GavelRegular = exports.GavelFilled = void 0;
exports.HeadphonesRegular = exports.HeadphonesFilled = exports.HdrOffRegular = exports.HdrOffFilled = exports.HdrRegular = exports.HdrFilled = exports.HdRegular = exports.HdFilled = exports.HatGraduationRegular = exports.HatGraduationFilled = exports.HardDriveRegular = exports.HardDriveFilled = exports.HandshakeRegular = exports.HandshakeFilled = exports.HandWaveRegular = exports.HandWaveFilled = exports.HandRightOffRegular = exports.HandRightOffFilled = exports.HandRightRegular = exports.HandRightFilled = exports.HandOpenHeartRegular = exports.HandOpenHeartFilled = exports.HandLeftChatRegular = exports.HandLeftChatFilled = exports.HandLeftRegular = exports.HandLeftFilled = exports.HandDrawRegular = exports.HandDrawFilled = exports.GuitarRegular = exports.GuitarFilled = exports.GuestAddRegular = exports.GuestAddFilled = exports.GuestRegular = exports.GuestFilled = exports.GuardianRegular = exports.GuardianFilled = exports.GroupReturnRegular = exports.GroupReturnFilled = exports.GroupListRegular = exports.GroupListFilled = exports.GroupDismissRegular = exports.GroupDismissFilled = exports.GroupRegular = exports.GroupFilled = exports.GridKanbanRegular = exports.GridKanbanFilled = exports.GridDotsRegular = exports.GridDotsFilled = exports.GridRegular = exports.GridFilled = void 0;

const tslib_1 = require("tslib");

const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));

const React = tslib_1.__importStar(require("react-native"));

const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));

const DocumentPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5.04a3.02 3.02 0 0 1 1 0V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H8.96c-.05.34-.16.68-.33 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm-8.3 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 16.5C8 17.75 7 19 4.5 19S1 17.75 1 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.DocumentPersonRegular = wrapIcon_1.default( /*#__PURE__*/DocumentPersonRegularIcon, 'DocumentPersonRegular');

const DocumentPillFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v.91a3.6 3.6 0 0 0-2.06 1.03l-4 4A3.62 3.62 0 0 0 9.2 18H5.5A1.5 1.5 0 0 1 4 16.5v-13C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm7.35 8.4a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.DocumentPillFilled = wrapIcon_1.default( /*#__PURE__*/DocumentPillFilledIcon, 'DocumentPillFilled');

const DocumentPillRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3.2a3.61 3.61 0 0 1-.29-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.2c.32-.14.66-.24 1-.29v-1.5c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm3.55 3.65a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-2.2 4.3a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Z",
    fill: primaryFill
  }));
};

exports.DocumentPillRegular = wrapIcon_1.default( /*#__PURE__*/DocumentPillRegularIcon, 'DocumentPillRegular');

const DocumentProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 0 0 4 9.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm-8.68 9.07a4.5 4.5 0 1 0 6.36 6.36 4.5 4.5 0 0 0-6.36-6.36Zm5.65 5.65a3.5 3.5 0 0 1-4.57.33l4.9-4.9a3.5 3.5 0 0 1-.33 4.57ZM7.6 11.7l-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z",
    fill: primaryFill
  }));
};

exports.DocumentProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/DocumentProhibitedFilledIcon, 'DocumentProhibitedFilled');

const DocumentProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.02c-.34.03-.68.1-1 .19V4Zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2ZM8.68 17.69a4.5 4.5 0 1 1-6.36-6.36 4.5 4.5 0 0 1 6.36 6.36ZM3.4 17.3a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Zm-.7-.7 4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Z",
    fill: primaryFill
  }));
};

exports.DocumentProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/DocumentProhibitedRegularIcon, 'DocumentProhibitedRegular');

const DocumentQuestionMarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 0 0 4 9.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM10 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.DocumentQuestionMarkFilled = wrapIcon_1.default( /*#__PURE__*/DocumentQuestionMarkFilledIcon, 'DocumentQuestionMarkFilled');

const DocumentQuestionMarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM10 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.DocumentQuestionMarkRegular = wrapIcon_1.default( /*#__PURE__*/DocumentQuestionMarkRegularIcon, 'DocumentQuestionMarkRegular');

const DocumentQueueFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v6.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-11C4 2.67 4.67 2 5.5 2H10ZM6.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 7.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueFilled = wrapIcon_1.default( /*#__PURE__*/DocumentQueueFilledIcon, 'DocumentQueueFilled');

const DocumentQueueRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm3.98-7h.04c.45.01.88.2 1.2.51l3.77 3.77A1.75 1.75 0 0 1 16 7.5v6.75c0 .97-.78 1.75-1.75 1.75h-8.5C4.78 16 4 15.22 4 14.25V3.75C4 2.78 4.78 2 5.75 2h4.73ZM5 3.75v10.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.75a.75.75 0 0 0-.75.75Zm6 2.75c0 .28.22.5.5.5h3.3l-.02-.01-3.77-3.77-.01-.01V6.5Zm-8 7a.5.5 0 0 0-1 0v1A3.5 3.5 0 0 0 5.5 18h9a3.5 3.5 0 0 0 3.5-3.5v-1a.5.5 0 0 0-1 0v1a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-1Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueRegular = wrapIcon_1.default( /*#__PURE__*/DocumentQueueRegularIcon, 'DocumentQueueRegular');

const DocumentQueueAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5h3.7A5.5 5.5 0 0 1 16 9.2V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4-1c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM6 9.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 17h4.1c.18.36.4.7.66 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm8 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueAddFilled = wrapIcon_1.default( /*#__PURE__*/DocumentQueueAddFilledIcon, 'DocumentQueueAddFilled');

const DocumentQueueAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2H5.74C4.78 2 4 2.78 4 3.75v10.5c0 .97.78 1.75 1.75 1.75h3.46c-.1-.32-.16-.66-.19-1H5.75a.75.75 0 0 1-.75-.75V3.75c0-.41.34-.75.75-.75H10v3.5c0 .83.67 1.5 1.5 1.5H15v1.02c.34.03.68.1 1 .19V7.48c-.01-.45-.2-.88-.51-1.2l-3.77-3.77A1.75 1.75 0 0 0 10.5 2Zm.5 1.2.01.02 3.77 3.77.01.01H11.5a.5.5 0 0 1-.5-.5V3.2ZM5.5 17h4.1c.18.36.4.7.66 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM6 5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueAddRegular = wrapIcon_1.default( /*#__PURE__*/DocumentQueueAddRegularIcon, 'DocumentQueueAddRegular');

const DocumentQueueMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.38 3.75 1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0 0 10.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5ZM10 4v4.5c0 .83.67 1.5 1.5 1.5H16v4.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4H10ZM6 7.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm5-7.25V8.5c0 .28.22.5.5.5h4.25L11 4.25Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueMultipleFilled = wrapIcon_1.default( /*#__PURE__*/DocumentQueueMultipleFilledIcon, 'DocumentQueueMultipleFilled');

const DocumentQueueMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m12.38 3.75 1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0 0 10.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5ZM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm10-2v-.02c-.01-.45-.2-.88-.51-1.2l-3.77-3.77A1.75 1.75 0 0 0 10.5 4H5.74C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V9.51ZM5 5.76c0-.41.34-.75.75-.75H10v3.5c0 .83.67 1.5 1.5 1.5H15v4.25c0 .41-.34.75-.75.75h-8.5a.75.75 0 0 1-.75-.75v-8.5Zm6-.54.01.01 3.77 3.77.01.01H11.5a.5.5 0 0 1-.5-.5V5.2Z",
    fill: primaryFill
  }));
};

exports.DocumentQueueMultipleRegular = wrapIcon_1.default( /*#__PURE__*/DocumentQueueMultipleRegularIcon, 'DocumentQueueMultipleRegular');

const DocumentRibbonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8v-2.35a4 4 0 0 0-4-6.52V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM8 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.21L5 18l1.62.96c.17.1.38-.02.38-.21v-2.29Z",
    fill: primaryFill
  }));
};

exports.DocumentRibbonFilled = wrapIcon_1.default( /*#__PURE__*/DocumentRibbonFilledIcon, 'DocumentRibbonFilled');

const DocumentRibbonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5.13A4 4 0 0 1 5 9V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H8v1h6a2 2 0 0 0 2-2V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM8 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.21L5 18l1.62.96c.17.1.38-.02.38-.21v-2.29Z",
    fill: primaryFill
  }));
};

exports.DocumentRibbonRegular = wrapIcon_1.default( /*#__PURE__*/DocumentRibbonRegularIcon, 'DocumentRibbonRegular');

const DocumentSaveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H11v-5.59a2 2 0 0 0-.59-1.41L9 9.59A2 2 0 0 0 7.59 9H4V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM2 10h1v2.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-2.41c.1.05.2.12.3.2l1.4 1.42a1 1 0 0 1 .3.7V18a1 1 0 0 1-1 1v-4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm6 5v4H3v-4h5Zm-4-5h3v2H4v-2Z",
    fill: primaryFill
  }));
};

exports.DocumentSaveFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSaveFilledIcon, 'DocumentSaveFilled');

const DocumentSaveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5h1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3v1h3a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM4 10h3v2H4v-2Zm-2 0h1v2.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-2.41c.1.05.2.12.3.2l1.4 1.42a1 1 0 0 1 .3.7V18a1 1 0 0 1-1 1v-4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm6 5v4H3v-4h5Z",
    fill: primaryFill
  }));
};

exports.DocumentSaveRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSaveRegularIcon, 'DocumentSaveRegular');

const DocumentSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2h5v4.5c0 .83.67 1.5 1.5 1.5H16v9a1 1 0 0 1-1 1h-1.09a1.5 1.5 0 0 0-.35-.56l-3.13-3.13A4.98 4.98 0 0 0 6 7c-.71 0-1.39.15-2 .42V3a1 1 0 0 1 1-1Zm6 0 5 5h-4.5a.5.5 0 0 1-.5-.5V2Zm-1 10c0 .92-.31 1.78-.84 2.45l3.7 3.7a.5.5 0 1 1-.72.7l-3.69-3.69A4 4 0 1 1 10 12Zm-4 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: primaryFill
  }));
};

exports.DocumentSearchFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSearchFilledIcon, 'DocumentSearchFilled');

const DocumentSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 12c0 .92-.31 1.78-.84 2.45l3.7 3.7a.5.5 0 1 1-.72.7l-3.69-3.69A4 4 0 1 1 10 12Zm-4 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 3a.5.5 0 0 0-.5.5v3.6c-.35.07-.68.18-1 .32V3.5C4 2.67 4.67 2 5.5 2h5.09c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v9.09c0 .83-.67 1.5-1.5 1.5h-.59a1.5 1.5 0 0 0-.35-.56l-.44-.44h1.38a.5.5 0 0 0 .5-.5V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.5Zm5.5.2v3.3c0 .28.22.5.5.5h3.3L11 3.2Z",
    fill: primaryFill
  }));
};

exports.DocumentSearchRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSearchRegularIcon, 'DocumentSearchRegular');

const DocumentSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8.66A5.5 5.5 0 0 0 4 8.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm-7.94 8.2a2 2 0 0 1-1.43 2.47l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 16.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 10.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM5.5 14.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.DocumentSettingsFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSettingsFilledIcon, 'DocumentSettingsFilled');

const DocumentSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v4.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H9.74c-.31.38-.67.72-1.08 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM3.05 10.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 16.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 10.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM5.5 14.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.DocumentSettingsRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSettingsRegularIcon, 'DocumentSettingsRegular');

const DocumentSplitHintFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM5 15.5a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1v-.5Zm11 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5ZM9 17a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Z",
    fill: primaryFill
  }));
};

exports.DocumentSplitHintFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSplitHintFilledIcon, 'DocumentSplitHintFilled');

const DocumentSplitHintRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V9.5a.5.5 0 0 1-1 0V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.5a.5.5 0 0 1-1 0V4Zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2Zm-6.5 8.3c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm11 0c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM4.5 15c.28 0 .5.22.5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2v-.5c0-.28.22-.5.5-.5Zm11 0c.28 0 .5.22.5.5v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5c0-.28.22-.5.5-.5Zm-7 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentSplitHintRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSplitHintRegularIcon, 'DocumentSplitHintRegular');

const DocumentSplitHintOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7v4.8c0 .28.22.5.5.5h4.8l5.7 5.7v.3a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.9-1.39l1.25 1.24a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71Zm11 8.18.6.6A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0v.88ZM4.5 2.38 12.12 10h3.38a.5.5 0 0 0 .5-.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5c-.38 0-.73.14-1 .38Zm6.5-.13V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3.5a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1v-.5Zm6 1.5H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
};

exports.DocumentSplitHintOffFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSplitHintOffFilledIcon, 'DocumentSplitHintOffFilled');

const DocumentSplitHintOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.7v4.8a.5.5 0 0 0 1 0V5.7l10 10v.3a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.9-1.39l1.25 1.24a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71Zm11 8.18.6.6A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0v.88ZM4.65 2.53l.7.7A1 1 0 0 1 6 3h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.5a.5.5 0 0 0 1 0V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-1.35.53ZM11 3.2 14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2ZM4.5 11.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 3.5c.28 0 .5.22.5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2v-.5c0-.28.22-.5.5-.5ZM9 18a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H9Z",
    fill: primaryFill
  }));
};

exports.DocumentSplitHintOffRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSplitHintOffRegularIcon, 'DocumentSplitHintOffRegular');

const DocumentSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 0 0 4 9.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.DocumentSyncFilled = wrapIcon_1.default( /*#__PURE__*/DocumentSyncFilledIcon, 'DocumentSyncFilled');

const DocumentSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.DocumentSyncRegular = wrapIcon_1.default( /*#__PURE__*/DocumentSyncRegularIcon, 'DocumentSyncRegular');

const DocumentTableFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 15v-2h4v1.5a.5.5 0 0 1-.5.5H9Zm4-4.5V12H9v-2h3.5c.28 0 .5.22.5.5ZM7 13h1v2h-.5a.5.5 0 0 1-.5-.5V13Zm1-1v-2h-.5a.5.5 0 0 0-.5.5V12h1Zm2-5.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4C6 9.67 6.67 9 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 14.5v-4Zm5-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentTableFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableFilledIcon, 'DocumentTableFilled');

const DocumentTableRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10.5C6 9.67 6.67 9 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 14.5v-4ZM8 15v-2H7v1.5c0 .28.22.5.5.5H8Zm1-3h4v-1.5a.5.5 0 0 0-.5-.5H9v2Zm0 3h3.5a.5.5 0 0 0 .5-.5V13H9v2Zm-1.5-5a.5.5 0 0 0-.5.5V12h1v-2h-.5ZM6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6ZM5 4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm9.8 3h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Z",
    fill: primaryFill
  }));
};

exports.DocumentTableRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableRegularIcon, 'DocumentTableRegular');

const DocumentTableArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 10.26A5.52 5.52 0 0 1 10.4 12H13v-1.5a.5.5 0 0 0-.5-.5H9v.26ZM13 13h-2.2a5.5 5.5 0 0 1 .18 2h1.52a.5.5 0 0 0 .5-.5V13ZM5.5 9c.46 0 .9.06 1.32.16.2-.1.44-.16.68-.16h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-1.7a5.49 5.49 0 0 1-1.06 2h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7c.48-.13.98-.2 1.5-.2ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-1 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.DocumentTableArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableArrowRightFilledIcon, 'DocumentTableArrowRightFilled');

const DocumentTableArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9c-.24 0-.47.06-.68.16.82.2 1.56.58 2.18 1.1V10h3.5c.28 0 .5.22.5.5V12h-2.6c.16.32.3.65.4 1H13v1.5a.5.5 0 0 1-.5.5h-1.52c-.03.34-.1.68-.19 1h1.71c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5ZM4 9.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v5.2ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.DocumentTableArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableArrowRightRegularIcon, 'DocumentTableArrowRightRegular');

const DocumentTableCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 10.26A5.52 5.52 0 0 1 10.4 12H13v-1.5a.5.5 0 0 0-.5-.5H9v.26ZM13 13h-2.2a5.5 5.5 0 0 1 .18 2h1.52a.5.5 0 0 0 .5-.5V13ZM5.5 9c.46 0 .9.06 1.32.16.2-.1.44-.16.68-.16h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-1.7a5.49 5.49 0 0 1-1.06 2h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7c.48-.13.98-.2 1.5-.2ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-1 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.DocumentTableCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableCheckmarkFilledIcon, 'DocumentTableCheckmarkFilled');

const DocumentTableCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9c-.24 0-.47.06-.68.16.82.2 1.56.58 2.18 1.1V10h3.5c.28 0 .5.22.5.5V12h-2.6c.16.32.3.65.4 1H13v1.5a.5.5 0 0 1-.5.5h-1.52c-.03.34-.1.68-.19 1h1.71c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5ZM4 9.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v5.2ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.DocumentTableCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableCheckmarkRegularIcon, 'DocumentTableCheckmarkRegular');

const DocumentTableCubeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.86 12A2 2 0 0 0 9 11v-1h3.5c.28 0 .5.22.5.5V12H9.86ZM13 13v1.5a.5.5 0 0 1-.5.5H10v-2h3ZM6.27 9.64l-.38-.2a2 2 0 0 0-1.78 0L4 9.5v-6C4 2.67 4.67 2 5.5 2H10v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.32a2 2 0 0 0 .68-1.5V16h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5c-.5 0-.96.25-1.23.64ZM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM1.03 16.51v-3.77a1 1 0 0 1 .56-.9l3-1.5a1 1 0 0 1 .89 0l3 1.5a1 1 0 0 1 .55.9v3.77a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.58a.5.5 0 0 0 .27.66l2.2.92v2.62a.5.5 0 1 0 1 0V14.5l2.19-.92a.5.5 0 1 0-.4-.93l-2.3.98-2.3-.98a.5.5 0 0 0-.66.27Z",
    fill: primaryFill
  }));
};

exports.DocumentTableCubeFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableCubeFilledIcon, 'DocumentTableCubeFilled');

const DocumentTableCubeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9c-.5 0-.96.25-1.23.64l.93.46a.5.5 0 0 1 .3-.1H8v.5l.9.45.1.05v-1h3.5c.28 0 .5.22.5.5V12H9.86a2 2 0 0 1 .14.74V13h3v1.5a.5.5 0 0 1-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5Zm-3.4.45a2 2 0 0 1 .9-.21V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H9.94a2 2 0 0 1-.62 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v5.5l.1-.05ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM1.02 16.5v-3.76a1 1 0 0 1 .56-.9l3-1.5a1 1 0 0 1 .89 0l3 1.5a1 1 0 0 1 .55.9v3.77a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.57a.5.5 0 0 0 .27.66l2.2.92v2.62a.5.5 0 1 0 1 0V14.5l2.19-.92a.5.5 0 1 0-.4-.93l-2.3.98-2.3-.98a.5.5 0 0 0-.66.27Z",
    fill: primaryFill
  }));
};

exports.DocumentTableCubeRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableCubeRegularIcon, 'DocumentTableCubeRegular');

const DocumentTableSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 15h3.5a.5.5 0 0 0 .5-.5V13H9v2Zm.12 1 1.44 1.44c.16.16.28.36.35.56h3.59c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.53a4.55 4.55 0 0 1 2.44.4A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12ZM13 12v-1.5a.5.5 0 0 0-.5-.5H9v2h4Zm-2-9.75V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM7.3 15.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6ZM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.DocumentTableSearchFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableSearchFilledIcon, 'DocumentTableSearchFilled');

const DocumentTableSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.44 9.44A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12l-.56-.56c.28-.59.44-1.25.44-1.94V15h3.5a.5.5 0 0 0 .5-.5V13H9v.5c0-1.07-.37-2.06-1-2.83V10h-.5a.5.5 0 0 0-.15.02 4.5 4.5 0 0 0-.91-.58ZM13 10.5a.5.5 0 0 0-.5-.5H9v2h4v-1.5ZM5 9.03a4.55 4.55 0 0 0-1 0V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.09a1.5 1.5 0 0 0-.35-.56l-.44-.44H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.03ZM11.5 7h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-4.2 8.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6ZM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.DocumentTableSearchRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableSearchRegularIcon, 'DocumentTableSearchRegular');

const DocumentTableTruckFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m7.87 11.43.13.05V10h-.5a.5.5 0 0 0-.48.35c.39.26.7.64.85 1.08ZM13 13H9.32l.47.93a2 2 0 0 1 .21.9V15h2.5a.5.5 0 0 0 .5-.5V13Zm-7.17-3 .25.01A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H10v1a2 2 0 0 1-.27 1h4.77c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V10h1.83Zm7.17.5V12H9v-2h3.5c.28 0 .5.22.5.5Zm-2-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM2.17 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 0 0 2.6.1h.75a1.33 1.33 0 0 0 2.58 0H8a1 1 0 0 0 1-1v-2.18a1 1 0 0 0-.1-.44l-.75-1.5a1 1 0 0 0-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17ZM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7Zm-4.67 3.34a.67.67 0 1 1 1.34 0 .67.67 0 0 1-1.34 0Zm4 .66a.67.67 0 1 1 0-1.33.67.67 0 0 1 0 1.33Z",
    fill: primaryFill
  }));
};

exports.DocumentTableTruckFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTableTruckFilledIcon, 'DocumentTableTruckFilled');

const DocumentTableTruckRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9a1.5 1.5 0 0 0-1.42 1.01c.35.04.67.16.94.34A.5.5 0 0 1 7.5 10H8v1.48a2 2 0 0 1 1.04.96l.28.56H13v1.5a.5.5 0 0 1-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5Zm5.5 3H9v-2h3.5c.28 0 .5.22.5.5V12Zm-9-2h1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-4a2 2 0 0 1-.27 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v6Zm10.8-3h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM2.16 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 0 0 2.6.1h.75a1.33 1.33 0 0 0 2.58 0H8a1 1 0 0 0 1-1v-2.18a1 1 0 0 0-.1-.44l-.75-1.5a1 1 0 0 0-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17ZM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7Zm-4.67 3.34a.67.67 0 1 1 1.34 0 .67.67 0 0 1-1.34 0Zm4 .66a.67.67 0 1 1 0-1.33.67.67 0 0 1 0 1.33Z",
    fill: primaryFill
  }));
};

exports.DocumentTableTruckRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTableTruckRegularIcon, 'DocumentTableTruckRegular');

const DocumentTextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM6.5 10h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentTextFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTextFilledIcon, 'DocumentTextFilled');

const DocumentTextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6Zm5.5 4h3.3L11 3.2v3.3c0 .28.22.5.5.5Z",
    fill: primaryFill
  }));
};

exports.DocumentTextRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTextRegularIcon, 'DocumentTextRegular');

const DocumentTextClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7a5.5 5.5 0 0 1 4.66.8h4.84a.5.5 0 0 1 0 1H9.74c.26.3.48.64.66 1h3.1a.5.5 0 0 1 0 1h-2.7c.08.32.15.66.18 1h2.52a.5.5 0 0 1 0 1h-2.52a5.48 5.48 0 0 1-1.24 3h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM5.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
};

exports.DocumentTextClockFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTextClockFilledIcon, 'DocumentTextClockFilled');

const DocumentTextClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.74 11a5.53 5.53 0 0 0-1.08-1h4.84a.5.5 0 0 1 0 1H9.74Zm.66 1c.16.32.3.65.4 1h2.7a.5.5 0 0 0 0-1h-3.1Zm.6 2.5c0 .17 0 .34-.02.5h2.52a.5.5 0 0 0 0-1h-2.52l.02.5ZM5 4v5.02c-.34.03-.68.1-1 .19V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm6.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-6 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2Z",
    fill: primaryFill
  }));
};

exports.DocumentTextClockRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTextClockRegularIcon, 'DocumentTextClockRegular');

const DocumentTextExtractFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V11h5.5a1.5 1.5 0 0 1 0 3H4v2.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 3c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm5-9V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM2.5 12a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
};

exports.DocumentTextExtractFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTextExtractFilledIcon, 'DocumentTextExtractFilled');

const DocumentTextExtractRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v7h1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2H4v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm-8.3 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-4 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm4 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
};

exports.DocumentTextExtractRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTextExtractRegularIcon, 'DocumentTextExtractRegular');

const DocumentTextLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V13h2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-6c.95 0 1.82.38 2.45 1h3.55a.5.5 0 0 1 0 1h-2.84a3.49 3.49 0 0 1 0 3h3.84c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM6.5 10h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3.5 14a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1h-.5ZM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H7Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentTextLinkFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTextLinkFilledIcon, 'DocumentTextLinkFilled');

const DocumentTextLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.34c.15-.31.25-.65.3-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v9H4V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm2 8h-2.84a3.51 3.51 0 0 0-.71-1h3.55a.5.5 0 0 1 0 1Zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Zm-7-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3 4a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1h-.5ZM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H7Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DocumentTextLinkRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTextLinkRegularIcon, 'DocumentTextLinkRegular');

const DocumentTextToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.55c.16-.03.33-.05.5-.05h2c.82 0 1.54.4 2 1h5a.5.5 0 0 1 0 1H8.95v.04a2.5 2.5 0 0 1 1.55.96h3a.5.5 0 0 1 0 1h-2.55c.03.16.05.33.05.5v.5h2.5a.5.5 0 0 1 0 1H11v2.5c0 .17-.02.34-.05.5h3.55c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm4-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5h3v-.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DocumentTextToolboxFilled = wrapIcon_1.default( /*#__PURE__*/DocumentTextToolboxFilledIcon, 'DocumentTextToolboxFilled');

const DocumentTextToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.95 11c-.07-.37-.23-.7-.45-1h5a.5.5 0 0 1 0 1H8.95Zm1.55 1c.22.3.38.63.45 1h2.55a.5.5 0 0 0 0-1h-3Zm3 2H11v1h2.5a.5.5 0 0 0 0-1ZM5 4v5h-.5c-.17 0-.34.02-.5.05V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.05c.03-.16.05-.33.05-.5V17h3a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm6.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DocumentTextToolboxRegular = wrapIcon_1.default( /*#__PURE__*/DocumentTextToolboxRegularIcon, 'DocumentTextToolboxRegular');

const DocumentToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H13v-5a2 2 0 0 0-2-2h-1v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-1 .27V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DocumentToolboxFilled = wrapIcon_1.default( /*#__PURE__*/DocumentToolboxFilledIcon, 'DocumentToolboxFilled');

const DocumentToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v4.27A2 2 0 0 1 5 8V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.DocumentToolboxRegular = wrapIcon_1.default( /*#__PURE__*/DocumentToolboxRegularIcon, 'DocumentToolboxRegular');

const DocumentWidthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2h8a2 2 0 0 1 2 2v2.34A1.5 1.5 0 0 0 15.02 8h-.52a1.5 1.5 0 0 0 0 3h.52a1.5 1.5 0 0 0 .98 1.66V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.34A1.5 1.5 0 0 0 4.98 11h.52a1.5 1.5 0 0 0 0-3h-.52A1.5 1.5 0 0 0 4 6.34V4c0-1.1.9-2 2-2ZM3.88 7.42a.5.5 0 0 1-.05.7l-1 .88H5.5a.5.5 0 1 1 0 1H2.83l1 .87a.5.5 0 0 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .7.05ZM17.17 10l-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 0 0-.66.76l1 .87H14.5a.5.5 0 0 0 0 1h2.67Z",
    fill: primaryFill
  }));
};

exports.DocumentWidthFilled = wrapIcon_1.default( /*#__PURE__*/DocumentWidthFilledIcon, 'DocumentWidthFilled');

const DocumentWidthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.88 7.42a.5.5 0 0 1-.05.7l-1 .88H5.5a.5.5 0 0 1 0 1H2.83l1 .88a.5.5 0 1 1-.66.75l-2-1.75a.5.5 0 0 1 0-.75l2-1.75a.5.5 0 0 1 .7.04ZM17.17 10l-1 .88a.5.5 0 0 0 .66.75l2-1.75a.5.5 0 0 0 0-.75l-2-1.75a.5.5 0 0 0-.66.75l1 .87H14.5a.5.5 0 0 0 0 1h2.67ZM5 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5h.02A1.5 1.5 0 0 1 16 6.34V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.34a1.5 1.5 0 0 1 .98 1.16H5V4Zm-.37 8.24c.19-.22.3-.48.35-.74H5V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4.5h.02a1.5 1.5 0 0 0 .98 1.16V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.34c.24-.08.45-.22.63-.42Z",
    fill: primaryFill
  }));
};

exports.DocumentWidthRegular = wrapIcon_1.default( /*#__PURE__*/DocumentWidthRegularIcon, 'DocumentWidthRegular');

const DoorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4c0-.83.67-1.5 1.5-1.5h8.15A1.5 1.5 0 0 1 15.5 4v12c0 .83-.67 1.5-1.5 1.5H6A1.5 1.5 0 0 1 4.5 16V4ZM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.DoorFilled = wrapIcon_1.default( /*#__PURE__*/DoorFilledIcon, 'DoorFilled');

const DoorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2 13h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z",
    fill: primaryFill
  }));
};

exports.DoorRegular = wrapIcon_1.default( /*#__PURE__*/DoorRegularIcon, 'DoorRegular');

const DoorArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.5c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5h3.89a5.5 5.5 0 0 1 5.61-8.4V4c0-.83-.67-1.5-1.5-1.5H6ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.DoorArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/DoorArrowLeftFilledIcon, 'DoorArrowLeftFilled');

const DoorArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H6Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.DoorArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/DoorArrowLeftRegularIcon, 'DoorArrowLeftRegular');

const DoorArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2.5c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5h3.89a5.5 5.5 0 0 1 5.61-8.4V4c0-.83-.67-1.5-1.5-1.5H6ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.35-2.15a.5.5 0 0 1-.7-.7L15.29 15H12.5a.5.5 0 0 1 0-1h2.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35l-2 2Z",
    fill: primaryFill
  }));
};

exports.DoorArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/DoorArrowRightFilledIcon, 'DoorArrowRightFilled');

const DoorArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H6Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.35-2.15a.5.5 0 0 1-.7-.7L15.29 15H12.5a.5.5 0 0 1 0-1h2.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35l-2 2Z",
    fill: primaryFill
  }));
};

exports.DoorArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/DoorArrowRightRegularIcon, 'DoorArrowRightRegular');

const DoorTagFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.3 6.3A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7.05a4.98 4.98 0 0 0-8.54-3.59A2 2 0 1 0 9.3 6.3ZM8 14h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.DoorTagFilled = wrapIcon_1.default( /*#__PURE__*/DoorTagFilledIcon, 'DoorTagFilled');

const DoorTagRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.3 6.3A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7.05a4.98 4.98 0 0 0-8.54-3.59A2 2 0 1 0 9.3 6.3ZM11.4 8.4A2 2 0 1 0 8.6 5.6a1 1 0 0 1-1.42-1.42A4 4 0 0 1 14 7V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3a2 2 0 0 0 1.41-.59ZM8 14a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8Z",
    fill: primaryFill
  }));
};

exports.DoorTagRegular = wrapIcon_1.default( /*#__PURE__*/DoorTagRegularIcon, 'DoorTagRegular');

const DoubleSwipeDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.28 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L5 15.44V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5ZM2 5.75c0 1.44.81 2.69 2 3.32v-1.9a2.25 2.25 0 1 1 3.5 0v1.9A3.75 3.75 0 1 0 2 5.75Zm10.5 3.32a3.75 3.75 0 1 1 3.5 0v-1.9a2.25 2.25 0 1 0-3.5 0v1.9Zm2.28 8.71c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5Z",
    fill: primaryFill
  }));
};

exports.DoubleSwipeDownFilled = wrapIcon_1.default( /*#__PURE__*/DoubleSwipeDownFilledIcon, 'DoubleSwipeDownFilled');

const DoubleSwipeDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 17.85a.5.5 0 0 1-.7 0l-3-3a.5.5 0 1 1 .7-.7L5 16.29V5.5a.5.5 0 1 1 1 0v10.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3Zm9 0a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V5.5a.5.5 0 0 1 1 0v10.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3ZM11 5.5c0 1.4.82 2.6 2 3.16V7.5a2.5 2.5 0 1 1 3 0v1.16a3.5 3.5 0 1 0-5-3.16ZM4 8.66a3.5 3.5 0 1 1 3 0V7.5a2.5 2.5 0 1 0-3 0v1.16Z",
    fill: primaryFill
  }));
};

exports.DoubleSwipeDownRegular = wrapIcon_1.default( /*#__PURE__*/DoubleSwipeDownRegularIcon, 'DoubleSwipeDownRegular');

const DoubleSwipeUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.28 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L5 4.56v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 0 0 1.06-1.06l-2.5-2.5ZM2 14.25c0-1.44.81-2.69 2-3.32v1.9a2.25 2.25 0 1 0 3.5 0v-1.9A3.75 3.75 0 1 1 2 14.25Zm10.5-3.32a3.75 3.75 0 1 0 3.5 0v1.9a2.25 2.25 0 1 1-3.5 0v-1.9Zm2.28-8.71a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z",
    fill: primaryFill
  }));
};

exports.DoubleSwipeUpFilled = wrapIcon_1.default( /*#__PURE__*/DoubleSwipeUpFilledIcon, 'DoubleSwipeUpFilled');

const DoubleSwipeUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 2.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L5 3.71V14.5a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 1 0 .7-.7l-3-3Zm9 0a.5.5 0 0 0-.7 0l-3 3a.5.5 0 0 0 .7.7L14 3.71V14.5a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3ZM11 14.5c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 1 0 3 0v-1.16a3.5 3.5 0 1 1-5 3.16Zm-7-3.16a3.5 3.5 0 1 0 3 0v1.16a2.5 2.5 0 1 1-3 0v-1.16Z",
    fill: primaryFill
  }));
};

exports.DoubleSwipeUpRegular = wrapIcon_1.default( /*#__PURE__*/DoubleSwipeUpRegularIcon, 'DoubleSwipeUpRegular');

const DoubleTapSwipeDownFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.53 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V7.75a.75.75 0 1 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5ZM4.25 7.5a5.75 5.75 0 0 0 4 5.48v-1.6a4.25 4.25 0 1 1 3.5 0v1.6a5.75 5.75 0 1 0-7.5-5.48Zm2.5 0c0 1.15.6 2.16 1.5 2.74V7.5a1.75 1.75 0 1 1 3.5.12v2.62a3.25 3.25 0 1 0-5-2.74Z",
    fill: primaryFill
  }));
};

exports.DoubleTapSwipeDownFilled = wrapIcon_1.default( /*#__PURE__*/DoubleTapSwipeDownFilledIcon, 'DoubleTapSwipeDownFilled');

const DoubleTapSwipeDownRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.35 17.85a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7l2.15 2.14V7.5a.5.5 0 0 1 1 0v8.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3ZM4.5 7.5a5.5 5.5 0 0 0 4 5.3v-1.06a4.5 4.5 0 1 1 3 0v1.05a5.5 5.5 0 1 0-7-5.29Zm2 0c0 1.4.82 2.6 2 3.16V9.5a2.5 2.5 0 1 1 3 0v1.16a3.5 3.5 0 1 0-5-3.16Z",
    fill: primaryFill
  }));
};

exports.DoubleTapSwipeDownRegular = wrapIcon_1.default( /*#__PURE__*/DoubleTapSwipeDownRegularIcon, 'DoubleTapSwipeDownRegular');

const DoubleTapSwipeUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.53 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v7.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5ZM4.25 12.5a5.75 5.75 0 0 1 4-5.48v1.6a4.25 4.25 0 1 0 3.5 0v-1.6a5.75 5.75 0 1 1-7.5 5.48Zm2.5 0c0-1.15.6-2.16 1.5-2.74v2.74a1.75 1.75 0 1 0 3.5 0V9.76a3.25 3.25 0 1 1-5 2.74Z",
    fill: primaryFill
  }));
};

exports.DoubleTapSwipeUpFilled = wrapIcon_1.default( /*#__PURE__*/DoubleTapSwipeUpFilledIcon, 'DoubleTapSwipeUpFilled');

const DoubleTapSwipeUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.35 2.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L9.5 3.71v8.79a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3ZM4.5 12.5a5.5 5.5 0 0 1 4-5.3v1.06a4.5 4.5 0 1 0 3 0V7.2a5.5 5.5 0 1 1-7 5.29Zm2 0c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 1 0 3 0V9.34a3.5 3.5 0 1 1-5 3.16Z",
    fill: primaryFill
  }));
};

exports.DoubleTapSwipeUpRegular = wrapIcon_1.default( /*#__PURE__*/DoubleTapSwipeUpRegularIcon, 'DoubleTapSwipeUpRegular');

const DraftsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m15.61 8.32-3.93-3.94-8.04 8.04-.12.13a2 2 0 0 0-.4.76l-1.1 4.06-.02.08a.5.5 0 0 0 .63.53l4.06-1.1.16-.06a2 2 0 0 0 .73-.46l8.03-8.04Zm1.57-5.5a2.78 2.78 0 0 0-3.93 0l-.87.86 3.94 3.93.86-.86.13-.14c.96-1.09.91-2.75-.13-3.8ZM11.65 3H2.5a.5.5 0 0 0 0 1h8.15l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.15l1-1Zm-3 3-1 1H2.5a.5.5 0 1 1 0-1h3.15Z",
    fill: primaryFill
  }));
};

exports.DraftsFilled = wrapIcon_1.default( /*#__PURE__*/DraftsFilledIcon, 'DraftsFilled');

const DraftsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m13.25 2.82-9.61 9.6-.12.13a2 2 0 0 0-.4.76l-1.1 4.06-.02.08a.5.5 0 0 0 .63.53l4.06-1.1.16-.06a2 2 0 0 0 .73-.46l9.6-9.6.13-.15a2.78 2.78 0 0 0-4.06-3.8Zm-8.9 10.31 8.04-8.04 2.52 2.52-8.04 8.04-.1.09-.1.07a1 1 0 0 1-.25.1l-3.2.87.87-3.2.04-.13a1 1 0 0 1 .22-.32Zm12.12-9.6.11.11c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.53.86-.86.12-.1c.7-.59 1.75-.55 2.4.1ZM11.65 3H2.5a.5.5 0 0 0 0 1h8.15l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.15l1-1Zm-4 4 1-1H2.5a.5.5 0 0 0 0 1h2.15Z",
    fill: primaryFill
  }));
};

exports.DraftsRegular = wrapIcon_1.default( /*#__PURE__*/DraftsRegularIcon, 'DraftsRegular');

const DragFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.2 0 .39.08.53.22l1.5 1.5a.75.75 0 0 1-1.06 1.06l-.22-.22v1.69a.75.75 0 0 1-1.5 0V4.56l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5A.75.75 0 0 1 10 2Zm2 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9.78-.53a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.22-.22h1.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5ZM10 18c.2 0 .39-.08.53-.22l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22v-1.69a.75.75 0 0 0-1.5 0v1.69l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5c.14.14.33.22.53.22Zm7.78-8.53a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22h-1.69a.75.75 0 0 1 0-1.5h1.69l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.DragFilled = wrapIcon_1.default( /*#__PURE__*/DragFilledIcon, 'DragFilled');

const DragRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.65 2.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L10.5 3.71V6.5a.5.5 0 0 1-1 0V3.7L8.35 4.86a.5.5 0 1 1-.7-.7l2-2ZM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.85 1.35 2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7l1.14 1.15H13.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7Zm-5.5 5.5 2-2a.5.5 0 0 0-.7-.7l-1.15 1.14V13.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0Zm-8.2-7.5a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L3.71 9.5H6.5a.5.5 0 0 1 0 1H3.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.DragRegular = wrapIcon_1.default( /*#__PURE__*/DragRegularIcon, 'DragRegular');

const DrawImageFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v9.08c0 .45.55.68.87.36L5.2 14.1l3.74-3.68a1.5 1.5 0 0 1 2.1 0l1.74 1.72 2.31-2.3c.53-.54 1.21-.82 1.9-.85V6a3 3 0 0 0-3-3H6Zm8 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2.73 7.17 1.82-1.81-1.74-1.71a.5.5 0 0 0-.7 0L5.43 15.3c-.23.23-.01.58.3.47l.32-.11c.7-.26 1.76-.55 2.75-.16.28.12.5.28.68.48.15-.5.42-.95.8-1.32Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.DrawImageFilled = wrapIcon_1.default( /*#__PURE__*/DrawImageFilledIcon, 'DrawImageFilled');

const DrawImageRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.34.02-.68.1-1 .23V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8.83c0 .17.21.26.34.14l.8-.8 1.05-1.03.2-.2 2.56-2.5a1.5 1.5 0 0 1 2.1 0l1.75 1.7-.71.71-1.74-1.7a.5.5 0 0 0-.7 0l-2.76 2.7-1.85 1.83A1.2 1.2 0 0 1 3 14.83V6Zm.4 11.04c.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28Z",
    fill: primaryFill
  }));
};

exports.DrawImageRegular = wrapIcon_1.default( /*#__PURE__*/DrawImageRegularIcon, 'DrawImageRegular');

const DrawShapeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.69.03-1.37.31-1.9.84l-4.83 4.83a3.2 3.2 0 0 0-.8 1.31c-.16-.19-.39-.35-.67-.47-.99-.4-2.05-.1-2.75.16a12 12 0 0 0-.41.15c-.38.19-.72.31-1.01.4A1.2 1.2 0 0 1 3.47 16c-.3-.26-.47-.64-.47-1.05V6Zm7.98 9.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.DrawShapeFilled = wrapIcon_1.default( /*#__PURE__*/DrawShapeFilledIcon, 'DrawShapeFilled');

const DrawShapeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.34.02-.68.1-1 .23V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9.5a.5.5 0 0 1-1 0V6Zm.4 11.04c.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28Z",
    fill: primaryFill
  }));
};

exports.DrawShapeRegular = wrapIcon_1.default( /*#__PURE__*/DrawShapeRegularIcon, 'DrawShapeRegular');

const DrawTextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.14 10.5H6.86L8.5 5.82l1.64 4.68Zm.53 1.5.33.94 1.18-1.17-2.88-8.2a.85.85 0 0 0-1.6 0L4.04 14a.75.75 0 0 0 1.42.5l.87-2.5h4.34Zm5.14-2.45-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.92.92 0 0 0-.03.14 4.6 4.6 0 0 1-1.1-.1c-.08 0-.1-.1-.07-.17.18-.35.23-1.07-.4-1.33-.87-.35-1.99.13-2.87.5-.37.15-.7.29-.94.34-.4.09-.85-.06-1.22-.24-.21-.11-.48.08-.36.28.22.37.61.74 1.33.83.82.1 1.39-.16 1.97-.41.4-.18.8-.36 1.3-.43.09-.01.15.09.11.17-.15.35-.13.9.32 1.24.52.4 2.19.51 3.31.19l1.22-.31c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.DrawTextFilled = wrapIcon_1.default( /*#__PURE__*/DrawTextFilledIcon, 'DrawTextFilled');

const DrawTextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.72 11H6.28L8.5 4.79 10.72 11Zm.36 1 .22.64.79-.78-3.03-8.47a.6.6 0 0 0-1.13 0l-3.9 10.95a.5.5 0 1 0 .94.33L5.92 12h5.16Zm4.73-2.45-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.92.92 0 0 0-.03.14 4.6 4.6 0 0 1-1.1-.1c-.08 0-.1-.1-.07-.17.18-.35.23-1.07-.4-1.33-.87-.35-1.99.13-2.87.5-.37.15-.7.29-.94.34-.4.09-.85-.06-1.22-.24-.21-.11-.48.08-.36.28.22.37.61.74 1.33.83.82.1 1.39-.16 1.97-.41.4-.18.8-.36 1.3-.43.09-.01.15.09.11.17-.15.35-.13.9.32 1.24.52.4 2.19.51 3.31.19l1.22-.31c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.DrawTextRegular = wrapIcon_1.default( /*#__PURE__*/DrawTextRegularIcon, 'DrawTextRegular');

const DrawerAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H13v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H14V3.5ZM6 4h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z",
    fill: primaryFill
  }));
};

exports.DrawerAddFilled = wrapIcon_1.default( /*#__PURE__*/DrawerAddFilledIcon, 'DrawerAddFilled');

const DrawerAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V5h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V6h-1.5a.5.5 0 0 1 0-1H13V3.5c0-.28.22-.5.5-.5ZM17 9.74V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66ZM14 17a2 2 0 0 0 2-2v-3h-3.04a3 3 0 0 1-5.92 0H4v3c0 1.1.9 2 2 2h8Z",
    fill: primaryFill
  }));
};

exports.DrawerAddRegular = wrapIcon_1.default( /*#__PURE__*/DrawerAddRegularIcon, 'DrawerAddRegular');

const DrawerArrowDownloadFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.5a4.5 4.5 0 0 1 4-4.47v3.76l-.65-.64a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V1.03A4.5 4.5 0 1 1 9 5.5Zm2 2c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM6 4h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z",
    fill: primaryFill
  }));
};

exports.DrawerArrowDownloadFilled = wrapIcon_1.default( /*#__PURE__*/DrawerArrowDownloadFilledIcon, 'DrawerArrowDownloadFilled');

const DrawerArrowDownloadRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 5.5a4.5 4.5 0 0 1 4-4.47v3.76l-.65-.64a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V1.03A4.5 4.5 0 1 1 9 5.5Zm2 2c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm6 2.24c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.04a3 3 0 0 0 5.92 0H16v3Z",
    fill: primaryFill
  }));
};

exports.DrawerArrowDownloadRegular = wrapIcon_1.default( /*#__PURE__*/DrawerArrowDownloadRegularIcon, 'DrawerArrowDownloadRegular');

const DrawerDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7L14.21 5.5l1.14 1.15a.5.5 0 0 1-.7.7L13.5 6.21l-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0ZM8.21 4H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1Z",
    fill: primaryFill
  }));
};

exports.DrawerDismissFilled = wrapIcon_1.default( /*#__PURE__*/DrawerDismissFilledIcon, 'DrawerDismissFilled');

const DrawerDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L13.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L14.21 5.5l1.14-1.15ZM17 9.75c-.3.25-.64.47-1 .65v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.04a3 3 0 0 0 5.92 0H16v3Z",
    fill: primaryFill
  }));
};

exports.DrawerDismissRegular = wrapIcon_1.default( /*#__PURE__*/DrawerDismissRegularIcon, 'DrawerDismissRegular');

const DrawerPlayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.2 4H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1Zm5.3 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.76-6.59 2.97 1.65a.5.5 0 0 1 0 .88l-2.97 1.65a.5.5 0 0 1-.74-.44v-3.3a.5.5 0 0 1 .74-.44Z",
    fill: primaryFill
  }));
};

exports.DrawerPlayFilled = wrapIcon_1.default( /*#__PURE__*/DrawerPlayFilledIcon, 'DrawerPlayFilled');

const DrawerPlayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 9.74V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66ZM14 17a2 2 0 0 0 2-2v-3h-3.04a3 3 0 0 1-5.92 0H4v3c0 1.1.9 2 2 2h8Zm-.5-7a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.76-6.59 2.97 1.65a.5.5 0 0 1 0 .88l-2.97 1.65a.5.5 0 0 1-.74-.44v-3.3a.5.5 0 0 1 .74-.44Z",
    fill: primaryFill
  }));
};

exports.DrawerPlayRegular = wrapIcon_1.default( /*#__PURE__*/DrawerPlayRegularIcon, 'DrawerPlayRegular');

const DrawerSubtractFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5ZM6 4h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z",
    fill: primaryFill
  }));
};

exports.DrawerSubtractFilled = wrapIcon_1.default( /*#__PURE__*/DrawerSubtractFilledIcon, 'DrawerSubtractFilled');

const DrawerSubtractRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5Zm1 4.24c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.04a3 3 0 0 0 5.92 0H16v3Z",
    fill: primaryFill
  }));
};

exports.DrawerSubtractRegular = wrapIcon_1.default( /*#__PURE__*/DrawerSubtractRegularIcon, 'DrawerSubtractRegular');

const DrinkBeerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2A2.5 2.5 0 0 0 4 4.5v11.75c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V15h.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 5H15v-.5A2.5 2.5 0 0 0 12.5 2h-6ZM15 6h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H15V6ZM5 4.5C5 3.67 5.67 3 6.5 3h6c.83 0 1.5.67 1.5 1.5V5H5v-.5ZM12.5 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0Zm-3-.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5Zm-2 .5v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.DrinkBeerFilled = wrapIcon_1.default( /*#__PURE__*/DrinkBeerFilledIcon, 'DrinkBeerFilled');

const DrinkBeerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm-3-.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5Zm-2 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm-1-6A2.5 2.5 0 0 0 4 4.5v11.75c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V15h.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 5H15v-.5A2.5 2.5 0 0 0 12.5 2h-6ZM15 6h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H15V6ZM5 4.5C5 3.67 5.67 3 6.5 3h6c.83 0 1.5.67 1.5 1.5V5H5v-.5ZM5 6h9v10.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 0 1-.75-.75V6Z",
    fill: primaryFill
  }));
};

exports.DrinkBeerRegular = wrapIcon_1.default( /*#__PURE__*/DrinkBeerRegularIcon, 'DrinkBeerRegular');

const DrinkBottleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3.5c0 .64.4 1.18.96 1.4-.12.5-.47.88-1 1.43l-.33.34a4.3 4.3 0 0 0-1.62 3.61L5 10.5v5a2.5 2.5 0 0 0 3.75 2.17 2.49 2.49 0 0 0 2.5 0A2.5 2.5 0 0 0 15 15.5v-5l-.01-.22a4.07 4.07 0 0 0-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0 0 11.5 2h-3C7.67 2 7 2.67 7 3.5Zm-1 12V15h8v.5a1.5 1.5 0 0 1-2.44 1.17.5.5 0 0 0-.62 0 1.5 1.5 0 0 1-1.88 0 .5.5 0 0 0-.62 0A1.5 1.5 0 0 1 6 15.5ZM8.96 5h2.09c.16.86.74 1.43 1.27 1.96l.05.04H7.7l.02-.01C8.24 6.45 8.8 5.87 8.96 5Zm2.54-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
};

exports.DrinkBottleFilled = wrapIcon_1.default( /*#__PURE__*/DrinkBottleFilledIcon, 'DrinkBottleFilled');

const DrinkBottleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 2h3a1.5 1.5 0 0 1 .55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 0 1 .65 2.51l.01.22v5a2.5 2.5 0 0 1-3.75 2.17 2.49 2.49 0 0 1-2.5 0A2.5 2.5 0 0 1 5 15.5v-5l.01-.22L5 10a4.3 4.3 0 0 1 1.63-3.33l.33-.34c.53-.55.88-.92 1-1.43A1.5 1.5 0 0 1 8.5 2ZM14 14v-3.66a3.09 3.09 0 0 0-.53-2.1 5.2 5.2 0 0 0-.18-.24H6.72A3.2 3.2 0 0 0 6 10.34L6 10.5V14h8Zm-8 1v.5a1.5 1.5 0 0 0 2.44 1.17.5.5 0 0 1 .62 0 1.5 1.5 0 0 0 1.88 0 .5.5 0 0 1 .62 0A1.5 1.5 0 0 0 14 15.5V15H6Zm5.05-10h-2.1c-.15.87-.7 1.45-1.23 1.99L7.7 7h4.67l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.DrinkBottleRegular = wrapIcon_1.default( /*#__PURE__*/DrinkBottleRegularIcon, 'DrinkBottleRegular');

const DrinkBottleOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m15 15.7 2.15 2.15a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L6.28 7a4.24 4.24 0 0 0-1.27 3.29L5 10.5v5a2.5 2.5 0 0 0 3.75 2.17 2.49 2.49 0 0 0 2.5 0 2.49 2.49 0 0 0 3.74-1.97ZM6 15h8v.5a1.5 1.5 0 0 1-2.44 1.17.5.5 0 0 0-.62 0 1.5 1.5 0 0 1-1.88 0 .5.5 0 0 0-.62 0A1.5 1.5 0 0 1 6 15.5V15Zm9-4.5v2.38L9.12 7h3.25l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96h-2.1c-.08.5-.3.9-.58 1.25l-.71-.71c.14-.2.24-.41.3-.64A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 .55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 0 1 .65 2.51l.01.22ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.DrinkBottleOffFilled = wrapIcon_1.default( /*#__PURE__*/DrinkBottleOffFilledIcon, 'DrinkBottleOffFilled');

const DrinkBottleOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.28 6.99 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.16-2.15a2.5 2.5 0 0 1-3.74 1.97 2.49 2.49 0 0 1-2.5 0A2.5 2.5 0 0 1 5 15.5v-5l.01-.22a4.11 4.11 0 0 1 1.27-3.29ZM13.3 14l-6-6h-.57A3.2 3.2 0 0 0 6 10.34L6 10.5V14h7.3ZM6 15v.5a1.5 1.5 0 0 0 2.44 1.17.5.5 0 0 1 .62 0 1.5 1.5 0 0 0 1.88 0 .5.5 0 0 1 .62 0A1.5 1.5 0 0 0 14 15.5V15H6Zm8-4.5v1.38l1 1V10.5l-.01-.22a4.07 4.07 0 0 0-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0 0 11.5 2h-3a1.5 1.5 0 0 0-.54 2.9c-.06.23-.16.43-.3.64l.71.71c.28-.35.5-.75.59-1.25h2.09c.16.86.74 1.43 1.27 1.96l.05.04H9.12l1 1h3.17a5.2 5.2 0 0 1 .19.27 3.15 3.15 0 0 1 .51 2.07l.01.16ZM8.5 4a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Z",
    fill: primaryFill
  }));
};

exports.DrinkBottleOffRegular = wrapIcon_1.default( /*#__PURE__*/DrinkBottleOffRegularIcon, 'DrinkBottleOffRegular');

const DrinkCoffeeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87L5.8 3.6c-.53-.4-.8-.63-.8-1.1ZM3.93 7a.93.93 0 0 0-.93.93V12a6 6 0 0 0 11.2 3H16a3 3 0 1 0 0-6h-1V7.93a.93.93 0 0 0-.93-.93H3.93ZM16 14h-1.34c.22-.63.34-1.3.34-2v-2h1a2 2 0 1 1 0 4ZM7.5 2c.28 0 .5.22.5.5 0 .47.27.7.8 1.1l.04.03C9.31 3.98 10 4.5 10 5.5a.5.5 0 0 1-1 0c0-.47-.27-.7-.8-1.1l-.04-.03C7.69 4.02 7 3.5 7 2.5c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87l-.04-.03c-.53-.4-.8-.63-.8-1.1Z",
    fill: primaryFill
  }));
};

exports.DrinkCoffeeFilled = wrapIcon_1.default( /*#__PURE__*/DrinkCoffeeFilledIcon, 'DrinkCoffeeFilled');

const DrinkCoffeeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87L5.8 3.6c-.53-.4-.8-.63-.8-1.1Zm10 5.43V9h1a3 3 0 1 1 0 6h-1.8A6 6 0 0 1 3 12V7.93c0-.51.42-.93.93-.93h10.14c.51 0 .93.42.93.93ZM4 8v4a5 5 0 0 0 10 0V8H4Zm11 4c0 .7-.12 1.37-.34 2H16a2 2 0 1 0 0-4h-1v2ZM7.5 2c.28 0 .5.22.5.5 0 .47.27.7.8 1.1l.04.03C9.31 3.98 10 4.5 10 5.5a.5.5 0 0 1-1 0c0-.47-.27-.7-.8-1.1l-.04-.03C7.69 4.02 7 3.5 7 2.5c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87l-.04-.03c-.53-.4-.8-.63-.8-1.1Z",
    fill: primaryFill
  }));
};

exports.DrinkCoffeeRegular = wrapIcon_1.default( /*#__PURE__*/DrinkCoffeeRegularIcon, 'DrinkCoffeeRegular');

const DrinkMargaritaFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.1 2.99a.5.5 0 0 0-.2-.98l-4.5 1a.5.5 0 0 0-.38.37l-.29 1.12H4.5A.5.5 0 0 0 4 5v3.5A2.5 2.5 0 0 0 6.5 11H7v.5a3 3 0 0 0 2.5 2.96V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.54A3 3 0 0 0 13 11.5V11h.5A2.5 2.5 0 0 0 16 8.5V5a.5.5 0 0 0-.5-.5h-3.73l.14-.58 4.2-.93ZM10.49 5.5 10.11 7H5V5.5h5.48ZM15 7h-3.86l.38-1.5H15V7Z",
    fill: primaryFill
  }));
};

exports.DrinkMargaritaFilled = wrapIcon_1.default( /*#__PURE__*/DrinkMargaritaFilledIcon, 'DrinkMargaritaFilled');

const DrinkMargaritaRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.1 2.99a.5.5 0 0 0-.2-.98l-4.5 1a.5.5 0 0 0-.38.37l-.29 1.12H4.5A.5.5 0 0 0 4 5v3.5A2.5 2.5 0 0 0 6.5 11H7v.5a3 3 0 0 0 2.5 2.96V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.54A3 3 0 0 0 13 11.5V11h.5A2.5 2.5 0 0 0 16 8.5V5a.5.5 0 0 0-.5-.5h-3.73l.14-.58 4.2-.93ZM10.49 5.5 10.11 7H5V5.5h5.48ZM5 8h4.86l-.84 3.38a.5.5 0 0 0 .97.24l.9-3.62H15v.5c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 0-.5.5v1a2 2 0 1 1-4 0v-1a.5.5 0 0 0-.5-.5h-1A1.5 1.5 0 0 1 5 8.5V8Zm10-1h-3.86l.38-1.5H15V7Z",
    fill: primaryFill
  }));
};

exports.DrinkMargaritaRegular = wrapIcon_1.default( /*#__PURE__*/DrinkMargaritaRegularIcon, 'DrinkMargaritaRegular');

const DrinkToGoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.85 2.15c.2.2.2.5 0 .7L12.71 4h1.62c.32 0 .6.2.7.5l.92 2.5c.18.48-.18 1-.7 1h-.34l-1.43 8.34A2 2 0 0 1 11.51 18H8.5a2 2 0 0 1-1.97-1.66L5.09 8h-.34a.75.75 0 0 1-.7-1.01l.92-2.5c.11-.3.39-.49.7-.49h5.65a.5.5 0 0 1 .08-.1l1.75-1.75c.2-.2.5-.2.7 0ZM5.11 7h9.78l-.73-2H5.85L5.1 7Z",
    fill: primaryFill
  }));
};

exports.DrinkToGoFilled = wrapIcon_1.default( /*#__PURE__*/DrinkToGoFilledIcon, 'DrinkToGoFilled');

const DrinkToGoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.85 2.15c.2.2.2.5 0 .7L12.71 4h1.62c.32 0 .6.2.7.5l.92 2.5c.18.48-.18 1-.7 1h-.34l-1.43 8.34A2 2 0 0 1 11.51 18H8.5a2 2 0 0 1-1.97-1.66L5.09 8h-.34a.75.75 0 0 1-.7-1.01l.92-2.5c.11-.3.39-.49.7-.49h5.65a.5.5 0 0 1 .08-.1l1.75-1.75c.2-.2.5-.2.7 0ZM6.11 8l1.4 8.17a1 1 0 0 0 .98.83h3.02a1 1 0 0 0 .99-.83L13.9 8H6.1Zm-1-1h9.78l-.73-2H5.85L5.1 7Z",
    fill: primaryFill
  }));
};

exports.DrinkToGoRegular = wrapIcon_1.default( /*#__PURE__*/DrinkToGoRegularIcon, 'DrinkToGoRegular');

const DrinkWineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 5v4h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.02A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5h-9ZM6 5.5V3h8v2.5H6Zm7.45 2.58a3.5 3.5 0 0 1-2.87 2.87.5.5 0 1 1-.16-.99 2.5 2.5 0 0 0 2.05-2.05.5.5 0 0 1 .98.17Z",
    fill: primaryFill
  }));
};

exports.DrinkWineFilled = wrapIcon_1.default( /*#__PURE__*/DrinkWineFilledIcon, 'DrinkWineFilled');

const DrinkWineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.45 8.08a.5.5 0 0 0-.98-.17 2.5 2.5 0 0 1-2.05 2.05.5.5 0 0 0 .16 1 3.5 3.5 0 0 0 2.87-2.88ZM5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 5v4h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.02A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5h-9ZM6 5.5V3h8v2.5H6Zm0 1h8V8a4 4 0 0 1-8 0V6.5Z",
    fill: primaryFill
  }));
};

exports.DrinkWineRegular = wrapIcon_1.default( /*#__PURE__*/DrinkWineRegularIcon, 'DrinkWineRegular');

const DriveTrainFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 2a2 2 0 0 0-2 2v1h-1.59A1.5 1.5 0 0 0 8.6 5H7V4a2 2 0 1 0-4 0v3a2 2 0 1 0 4 0V6h1.59c.15.43.48.76.91.91v6.18a1.5 1.5 0 0 0-.91.91H7v-1a2 2 0 1 0-4 0v3a2 2 0 1 0 4 0v-1h1.59a1.5 1.5 0 0 0 2.82 0H13v1a2 2 0 1 0 4 0v-3a2 2 0 1 0-4 0v1h-1.59a1.5 1.5 0 0 0-.91-.91V6.9c.43-.15.76-.48.91-.91H13v1a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2Z",
    fill: primaryFill
  }));
};

exports.DriveTrainFilled = wrapIcon_1.default( /*#__PURE__*/DriveTrainFilledIcon, 'DriveTrainFilled');

const DriveTrainRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4a2 2 0 1 1 4 0v1h1.59a1.5 1.5 0 0 1 2.82 0H13V4a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0V6h-1.59a1.5 1.5 0 0 1-.91.91v6.18c.43.15.76.48.91.91H13v-1a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-1h-1.59a1.5 1.5 0 0 1-2.82 0H7v1a2 2 0 1 1-4 0v-3a2 2 0 1 1 4 0v1h1.59c.15-.43.48-.76.91-.91V6.9A1.5 1.5 0 0 1 8.59 6H7v1a2 2 0 1 1-4 0V4Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm10 0a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1ZM5 12a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm9 1v3a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0Z",
    fill: primaryFill
  }));
};

exports.DriveTrainRegular = wrapIcon_1.default( /*#__PURE__*/DriveTrainRegularIcon, 'DriveTrainRegular');

const DropFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.65 2.15c.2-.2.5-.2.7 0 .54.53 1.8 2.06 2.95 3.9 1.13 1.82 2.2 4.05 2.2 5.95 0 1.84-.53 3.35-1.5 4.4a5.3 5.3 0 0 1-4 1.6c-1.61 0-3-.54-4-1.6A6.29 6.29 0 0 1 4.5 12c0-1.9 1.07-4.13 2.2-5.95a25.3 25.3 0 0 1 2.95-3.9Z",
    fill: primaryFill
  }));
};

exports.DropFilled = wrapIcon_1.default( /*#__PURE__*/DropFilledIcon, 'DropFilled');

const DropRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.65 2.15c.2-.2.5-.2.7 0 .54.53 1.8 2.06 2.95 3.9 1.13 1.82 2.2 4.05 2.2 5.95 0 1.84-.53 3.35-1.5 4.4a5.3 5.3 0 0 1-4 1.6c-1.61 0-3-.54-4-1.6A6.29 6.29 0 0 1 4.5 12c0-1.9 1.07-4.13 2.2-5.95a25.3 25.3 0 0 1 2.95-3.9Zm-2.1 4.43C6.43 8.38 5.5 10.4 5.5 12c0 1.66.47 2.9 1.24 3.72A4.3 4.3 0 0 0 10 17a4.3 4.3 0 0 0 3.26-1.28A5.3 5.3 0 0 0 14.5 12c0-1.6-.93-3.62-2.05-5.42A26.85 26.85 0 0 0 10 3.24c-.59.67-1.56 1.9-2.45 3.34Z",
    fill: primaryFill
  }));
};

exports.DropRegular = wrapIcon_1.default( /*#__PURE__*/DropRegularIcon, 'DropRegular');

const DualScreenFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4H4Zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10.5 4v12H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5Zm2 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenFilledIcon, 'DualScreenFilled');

const DualScreenRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 13.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm5.5 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5Zm1 10H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10Z",
    fill: primaryFill
  }));
};

exports.DualScreenRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenRegularIcon, 'DualScreenRegular');

const DualScreenAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenAddFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenAddFilledIcon, 'DualScreenAddFilled');

const DualScreenAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenAddRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenAddRegularIcon, 'DualScreenAddRegular');

const DualScreenArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85A.5.5 0 0 0 17 5.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 5H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2ZM14.5 11c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenArrowRightFilledIcon, 'DualScreenArrowRightFilled');

const DualScreenArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85A.5.5 0 0 0 17 5.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 5H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenArrowRightRegularIcon, 'DualScreenArrowRightRegular');

const DualScreenArrowUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L14 4.71V7.5a.5.5 0 0 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 14.5 3a.5.5 0 0 0-.35.14ZM14.5 11c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenArrowUpFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenArrowUpFilledIcon, 'DualScreenArrowUpFilled');

const DualScreenArrowUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L14 4.71V7.5a.5.5 0 0 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 14.5 3a.5.5 0 0 0-.35.14ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm7.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenArrowUpRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenArrowUpRegularIcon, 'DualScreenArrowUpRegular');

const DualScreenClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1V3.5a.5.5 0 0 0-.5-.5Zm0 8c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenClockFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenClockFilledIcon, 'DualScreenClockFilled');

const DualScreenClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1V3.5a.5.5 0 0 0-.5-.5ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenClockRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenClockRegularIcon, 'DualScreenClockRegular');

const DualScreenClosedAlertFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Zm-4-4.46-.97.82A1.5 1.5 0 0 0 9.5 10h1.52l.12.33A2.5 2.5 0 0 0 14 11.95V15a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.5v1.54Z",
    fill: primaryFill
  }));
};

exports.DualScreenClosedAlertFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenClosedAlertFilledIcon, 'DualScreenClosedAlertFilled');

const DualScreenClosedAlertRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1ZM6 6h3.5V5H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-3.05a2.52 2.52 0 0 1-1 0V15a1 1 0 0 1-1 1H6V6Z",
    fill: primaryFill
  }));
};

exports.DualScreenClosedAlertRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenClosedAlertRegularIcon, 'DualScreenClosedAlertRegular');

const DualScreenDesktopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-6a3 3 0 0 0-3-3H4V4Zm6 14H7.5V8H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM4 8h2.5v10H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2Zm5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1h-.5Zm-6 .5c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenDesktopFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenDesktopFilledIcon, 'DualScreenDesktopFilled');

const DualScreenDesktopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-4h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4V4Zm-2 6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V9H4Zm6 8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.5v8H10Zm-1-2h.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenDesktopRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenDesktopRegularIcon, 'DualScreenDesktopRegular');

const DualScreenDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM14.5 11c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenDismissFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenDismissFilledIcon, 'DualScreenDismissFilled');

const DualScreenDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenDismissRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenDismissRegularIcon, 'DualScreenDismissRegular');

const DualScreenGroupFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4Z",
    fill: primaryFill
  }));
};

exports.DualScreenGroupFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenGroupFilledIcon, 'DualScreenGroupFilled');

const DualScreenGroupRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenGroupRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenGroupRegularIcon, 'DualScreenGroupRegular');

const DualScreenHeaderFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 16h-5.5V8H18v6a2 2 0 0 1-2 2Zm2-9V6a2 2 0 0 0-2-2h-5.5v3H18ZM9.5 7V4H4a2 2 0 0 0-2 2v1h7.5ZM2 8v6c0 1.1.9 2 2 2h5.5V8H2Z",
    fill: primaryFill
  }));
};

exports.DualScreenHeaderFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenHeaderFilledIcon, 'DualScreenHeaderFilled');

const DualScreenHeaderRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm7.5 9V7H3v7a1 1 0 0 0 1 1h5.5Zm1-8v8H16a1 1 0 0 0 1-1V7h-6.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenHeaderRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenHeaderRegularIcon, 'DualScreenHeaderRegular');

const DualScreenLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3v1H14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5V3a2 2 0 1 0-4 0Zm1 1V3a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 9V6h-1.5v12H16a2 2 0 0 0 2-2v-5h-4a2 2 0 0 1-2-2ZM4 6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V6H4Zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6 0c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenLockFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenLockFilledIcon, 'DualScreenLockFilled');

const DualScreenLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3v1H14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5V3a2 2 0 1 0-4 0Zm1 1V3a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM4 6h8v1h-1.5v10H16a1 1 0 0 0 1-1v-5h1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2Zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-3-8H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7Z",
    fill: primaryFill
  }));
};

exports.DualScreenLockRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenLockRegularIcon, 'DualScreenLockRegular');

const DualScreenMirrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4ZM5.75 8c.18 0 .34.1.43.25l1.75 3a.5.5 0 0 1-.43.75H4a.5.5 0 0 1-.43-.75l1.75-3A.5.5 0 0 1 5.75 8Zm8.93.25 1.75 3A.5.5 0 0 1 16 12h-3.5a.5.5 0 0 1-.43-.75l1.75-3a.5.5 0 0 1 .86 0Z",
    fill: primaryFill
  }));
};

exports.DualScreenMirrorFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenMirrorFilledIcon, 'DualScreenMirrorFilled');

const DualScreenMirrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5ZM6.25 8c.18 0 .34.1.43.25l1.75 3A.5.5 0 0 1 8 12H4.5a.5.5 0 0 1-.43-.75l1.75-3A.5.5 0 0 1 6.25 8Zm.88 3-.88-1.5-.88 1.5h1.76Zm7.05-2.75 1.75 3a.5.5 0 0 1-.43.75H12a.5.5 0 0 1-.43-.75l1.75-3a.5.5 0 0 1 .86 0Zm.45 2.75-.88-1.5-.88 1.5h1.76Z",
    fill: primaryFill
  }));
};

exports.DualScreenMirrorRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenMirrorRegularIcon, 'DualScreenMirrorRegular');

const DualScreenPaginationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm8.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.DualScreenPaginationFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenPaginationFilledIcon, 'DualScreenPaginationFilled');

const DualScreenPaginationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5H4Zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10H16Zm-4.5-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.DualScreenPaginationRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenPaginationRegularIcon, 'DualScreenPaginationRegular');

const DualScreenSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.07 2.44a2 2 0 0 1-1.44 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 8.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 2.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM14.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4.5c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenSettingsFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenSettingsFilledIcon, 'DualScreenSettingsFilled');

const DualScreenSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.07 2.44a2 2 0 0 1-1.44 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 8.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 2.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM14.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenSettingsRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenSettingsRegularIcon, 'DualScreenSettingsRegular');

const DualScreenSpanFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 16h-5.5v-5.5h3.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7l1.14 1.15H10.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM9.5 9.5V4H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5v-5.5H5.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L5.71 9.5H9.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenSpanFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenSpanFilledIcon, 'DualScreenSpanFilled');

const DualScreenSpanRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5v-3.5h1V15H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v3.5h-1V5H4Zm2.85 3.35a.5.5 0 1 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L5.71 10.5h8.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7l1.14 1.15H5.71l1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.DualScreenSpanRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenSpanRegularIcon, 'DualScreenSpanRegular');

const DualScreenSpeakerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.65 2.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Zm.13 5.73a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 8h-.38v8H16a2 2 0 0 0 2-2V9.8c-.5.29-1.15.27-1.65-.1ZM9.5 16V7.62A1.5 1.5 0 0 1 9 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5ZM6 13.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenSpeakerFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenSpeakerFilledIcon, 'DualScreenSpeakerFilled');

const DualScreenSpeakerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.65 2.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53ZM17 14V9.98c.34.06.7 0 1-.18V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5.09a1.5 1.5 0 0 0-.09.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.62c.27.24.62.38 1 .38v7H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    fill: primaryFill
  }));
};

exports.DualScreenSpeakerRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenSpeakerRegularIcon, 'DualScreenSpeakerRegular');

const DualScreenStatusBarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm8.5 2a.5.5 0 0 0 0 1H16a.5.5 0 0 0 0-1h-3.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenStatusBarFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenStatusBarFilledIcon, 'DualScreenStatusBarFilled');

const DualScreenStatusBarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5H4Zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10H16Zm-4-9a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1H12Z",
    fill: primaryFill
  }));
};

exports.DualScreenStatusBarRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenStatusBarRegularIcon, 'DualScreenStatusBarRegular');

const DualScreenTabletFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-2h.5a.5.5 0 0 0 0-1H13V9a3 3 0 0 0-3-3H4V5Zm6 12H7.5V7H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM4 7h2.5v10H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Zm5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1h-.5Zm-6 .5c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenTabletFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenTabletFilledIcon, 'DualScreenTabletFilled');

const DualScreenTabletRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4V5Zm9 6h.5a.5.5 0 0 0 0-1H13v1ZM2 9c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V8H4Zm6 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7.5v8H10Zm-1-2a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1H9Zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.DualScreenTabletRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenTabletRegularIcon, 'DualScreenTabletRegular');

const DualScreenUpdateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm12.85 7.85a.5.5 0 0 0-.7-.7L15 12.29V6.5a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2Z",
    fill: primaryFill
  }));
};

exports.DualScreenUpdateFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenUpdateFilledIcon, 'DualScreenUpdateFilled');

const DualScreenUpdateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5H4Zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10H16Zm-.15-3.15a.5.5 0 0 0-.7-.7L14 12.29V6.5a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2Z",
    fill: primaryFill
  }));
};

exports.DualScreenUpdateRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenUpdateRegularIcon, 'DualScreenUpdateRegular');

const DualScreenVerticalScrollFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4Zm7.35 7.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0Zm0-3a.5.5 0 0 1-.7.7L14.5 7.21l-1.65 1.64a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Z",
    fill: primaryFill
  }));
};

exports.DualScreenVerticalScrollFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenVerticalScrollFilledIcon, 'DualScreenVerticalScrollFilled');

const DualScreenVerticalScrollRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5Zm5.35-3.85c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0Zm0-3a.5.5 0 0 1-.7.7L13.5 7.21l-1.65 1.64a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Z",
    fill: primaryFill
  }));
};

exports.DualScreenVerticalScrollRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenVerticalScrollRegularIcon, 'DualScreenVerticalScrollRegular');

const DualScreenVibrateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 15H13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.5v10Zm-1-10H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2.5V5Zm2.5 7.5c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5ZM7 12h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1ZM1.88 6.51a.5.5 0 0 1 .6.37l.41 1.64c.1.35.05.71-.1 1.03l-.62 1.23a.5.5 0 0 0 0 .44l.78 1.56a.5.5 0 1 1-.9.44l-.77-1.55a1.5 1.5 0 0 1 0-1.34l.6-1.22a.5.5 0 0 0 .04-.35l-.4-1.64a.5.5 0 0 1 .36-.6Zm16.6.37a.5.5 0 0 0-.97.24l.41 1.64a.5.5 0 0 1-.03.35l-.61 1.22a1.5 1.5 0 0 0 0 1.34l.77 1.55a.5.5 0 1 0 .9-.44l-.78-1.56a.5.5 0 0 1 0-.44l.61-1.23c.16-.32.2-.68.11-1.03l-.4-1.64Z",
    fill: primaryFill
  }));
};

exports.DualScreenVibrateFilled = wrapIcon_1.default( /*#__PURE__*/DualScreenVibrateFilledIcon, 'DualScreenVibrateFilled');

const DualScreenVibrateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7ZM6 7a1 1 0 0 1 1-1h2.5v8H7a1 1 0 0 1-1-1V7Zm4.5 7V6H13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5Zm1-1.5c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5Zm-4-.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1h-.5ZM1.88 6.51a.5.5 0 0 1 .6.37l.41 1.64c.1.35.05.71-.1 1.03l-.62 1.23a.5.5 0 0 0 0 .44l.78 1.56a.5.5 0 1 1-.9.44l-.77-1.55a1.5 1.5 0 0 1 0-1.34l.6-1.22a.5.5 0 0 0 .04-.35l-.4-1.64a.5.5 0 0 1 .36-.6Zm16.6.37a.5.5 0 0 0-.97.24l.41 1.64a.5.5 0 0 1-.03.35l-.61 1.22a1.5 1.5 0 0 0 0 1.34l.77 1.55a.5.5 0 1 0 .9-.44l-.78-1.56a.5.5 0 0 1 0-.44l.61-1.23c.16-.32.2-.68.11-1.03l-.4-1.64Z",
    fill: primaryFill
  }));
};

exports.DualScreenVibrateRegular = wrapIcon_1.default( /*#__PURE__*/DualScreenVibrateRegularIcon, 'DualScreenVibrateRegular');

const DumbbellFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.33 3.13a1.98 1.98 0 0 0-3 .22A2.4 2.4 0 0 0 9.2 7.43l1.01 1-1.06 1.08 1.36 1.36 1.07-1.07 1.01 1.02a2.4 2.4 0 0 0 4.08-2.13 1.98 1.98 0 0 0 .23-3l-.6-.6.52-.52a.97.97 0 1 0-1.37-1.37l-.52.52-.6-.6Zm.27 3.54a.5.5 0 1 1-.7.71l-1.28-1.27a.5.5 0 1 1 .7-.71l1.28 1.27ZM4.02 9.2a2.4 2.4 0 0 1 3.4 0l3.4 3.4a2.4 2.4 0 0 1-2.13 4.07 1.98 1.98 0 0 1-3 .23l-.6-.6-.54.53a.97.97 0 1 1-1.37-1.36l.54-.54-.6-.6a1.98 1.98 0 0 1 .23-3 2.4 2.4 0 0 1 .67-2.13Zm2.94 5.82a.5.5 0 0 0 0-.71L5.7 13.04a.5.5 0 0 0-.7.7l1.27 1.28c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

exports.DumbbellFilled = wrapIcon_1.default( /*#__PURE__*/DumbbellFilledIcon, 'DumbbellFilled');

const DumbbellRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.6 7.38a.5.5 0 0 0 0-.7L13.33 5.4a.5.5 0 1 0-.71.7l1.27 1.28c.2.2.51.2.71 0Zm-6.79 6.08a.5.5 0 1 1-.7.7L5.82 12.9a.5.5 0 1 1 .7-.71l1.28 1.27Zm9.36-10.61a1.47 1.47 0 0 0-2.07 0l-.62.62-.25-.25a1.85 1.85 0 0 0-2.84.28 2.27 2.27 0 0 0-2.1 3.83l.67.66-1.97 1.97-.66-.66a2.27 2.27 0 0 0-3.83 2.09 1.85 1.85 0 0 0-.28 2.84l.25.25-.64.64a1.47 1.47 0 0 0 2.07 2.07l.64-.64.24.25a1.85 1.85 0 0 0 2.85-.28 2.27 2.27 0 0 0 2.09-3.83l-.66-.66 1.97-1.97.66.66a2.27 2.27 0 0 0 3.83-2.1 1.85 1.85 0 0 0 .28-2.83l-.25-.25.62-.62c.57-.57.57-1.5 0-2.07Zm-1.33 1.98-.66-.66.62-.62a.47.47 0 0 1 .66.66l-.62.62Zm-4.52 4.52-1.97 1.97-.65-.66 1.96-1.96.66.65Zm-6.49 6.5-.63.63a.47.47 0 0 1-.66-.66l.63-.64.66.66Zm7.5-11.92a.85.85 0 0 1 1.2 0l2.56 2.56a.85.85 0 0 1-.34 1.4.5.5 0 0 0-.3.7A1.27 1.27 0 0 1 13.4 10l-3.38-3.39a1.27 1.27 0 0 1 1.43-2.05.5.5 0 0 0 .68-.3c.04-.13.1-.24.2-.34Zm-7.5 6.08c.49-.5 1.3-.5 1.8 0L10 13.39a1.27 1.27 0 0 1-1.43 2.06.5.5 0 0 0-.68.3.85.85 0 0 1-1.4.34l-2.57-2.56a.85.85 0 0 1 .34-1.41.5.5 0 0 0 .3-.68A1.27 1.27 0 0 1 4.82 10Z",
    fill: primaryFill
  }));
};

exports.DumbbellRegular = wrapIcon_1.default( /*#__PURE__*/DumbbellRegularIcon, 'DumbbellRegular');

const EarthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 0 0 8.86 1.25 3.56 3.56 0 0 1-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 0 1 .7-.7c.15-.14.28-.25.39-.37a.9.9 0 0 0 .2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 0 1-.54-.18.73.73 0 0 1-.18-.37 2.58 2.58 0 0 1-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .03-.55c.07-.19.2-.33.35-.44a18.6 18.6 0 0 0 1.74-1.66c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0 0 10 3Z",
    fill: primaryFill
  }));
};

exports.EarthFilled = wrapIcon_1.default( /*#__PURE__*/EarthFilledIcon, 'EarthFilled');

const EarthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 0 0 8.86 1.25 3.56 3.56 0 0 1-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 0 1 .7-.7c.15-.14.28-.25.39-.37a.9.9 0 0 0 .2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 0 1-.54-.18.74.74 0 0 1-.18-.37 2.57 2.57 0 0 1-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0 0 10 3Zm4.64 1.76a42.1 42.1 0 0 1-2.71 2.66c.03.07.1.18.24.36l.12.16c.32.4.78.97.96 1.68.1.4.15.73.17.98v.01c.6-.33 1.21-.3 1.66.06.46.35.66.97.47 1.57-.08.27-.27.5-.43.66l-.44.43-.11.1c-.2.17-.36.33-.48.48a.83.83 0 0 0-.19.34c-.04.23.07.5.29.78.1.12.2.23.3.3 0 .01 0 .02.02.03a6.99 6.99 0 0 0 .13-10.6ZM8.8 3.36l-.13-.23a7 7 0 0 0-4.72 10.39l.02-.2c.06-.46.2-1.06.6-1.49.46-.5 1.02-.59 1.4-.65l.1-.02c.21-.03.34-.07.45-.13.1-.05.2-.13.28-.3.03-.06.05-.15.02-.34a4.4 4.4 0 0 0-.15-.54l-.05-.15c-.15-.5-.37-1.26.09-1.96.4-.6 1.04-.76 1.48-.87l.13-.03c.47-.12.77-.24.98-.68.26-.56.14-1.3-.12-1.98a6.33 6.33 0 0 0-.38-.83Z",
    fill: primaryFill
  }));
};

exports.EarthRegular = wrapIcon_1.default( /*#__PURE__*/EarthRegularIcon, 'EarthRegular');

const EarthLeafFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 .34l-.64-.16a9.52 9.52 0 0 0-3.3-.17c-.6.08-1.16.21-1.67.4a5 5 0 0 0-.1-.54c-.13-.49-.45-.89-.77-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65l.78-.82A6.97 6.97 0 0 0 9.74 3c.12.23.26.5.38.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a7 7 0 0 0 3.87 2.17c-.18.3-.35.6-.51.91A8 8 0 0 1 2 10Zm16.93 1.74a.5.5 0 0 0-.43-.24h-.03l-.1-.02a6.16 6.16 0 0 1-.3-.08l-.09-.03c-.23-.06-.51-.14-.84-.21a8.52 8.52 0 0 0-2.95-.16c-1.2.15-2.12.56-2.75 1.15a2.85 2.85 0 0 0-.9 2.62 13.17 13.17 0 0 1 3.77-2.23.5.5 0 1 1 .38.92c-.8.32-1.54.7-2.2 1.1a8.47 8.47 0 0 0-3.44 3.72.5.5 0 0 0 .9.44c.38-.76.84-1.45 1.44-2.06a3.71 3.71 0 0 0 .59.8 3.07 3.07 0 0 0 3.9.58c.45-.28.77-.67 1-1.08.37-.63.58-1.38.74-1.94l.1-.37a7.5 7.5 0 0 1 1-2.03v-.02c.1-.14.18-.27.23-.38a.5.5 0 0 0-.02-.48Z",
    fill: primaryFill
  }));
};

exports.EarthLeafFilled = wrapIcon_1.default( /*#__PURE__*/EarthLeafFilledIcon, 'EarthLeafFilled');

const EarthLeafRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 .34 13.76 13.76 0 0 0-1-.23V10c0-2.1-.91-3.97-2.36-5.25l-.07.07-.79.84c-.6.62-1.35 1.37-1.85 1.75.03.07.1.18.24.36l.12.16a4.67 4.67 0 0 1 1.07 2.2c-.34.06-.66.16-.97.28a5 5 0 0 0-.1-.55c-.13-.49-.45-.89-.77-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65l.78-.82A6.97 6.97 0 0 0 9.74 3c.12.23.26.5.38.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a7 7 0 0 0 3.87 2.17c-.18.3-.35.6-.51.91A8 8 0 0 1 2 10Zm6.8-6.65a5.8 5.8 0 0 0-.13-.22 7 7 0 0 0-4.72 10.39l.02-.2c.06-.46.2-1.06.6-1.49.46-.5 1.02-.59 1.4-.65l.1-.02c.21-.03.34-.07.45-.13.1-.05.2-.13.28-.3.03-.06.05-.15.02-.34a4.4 4.4 0 0 0-.15-.54l-.04-.15c-.16-.5-.38-1.26.08-1.96.4-.6 1.04-.76 1.48-.87l.13-.03c.47-.12.77-.24.98-.68.26-.56.14-1.3-.12-1.98a6.33 6.33 0 0 0-.38-.83Zm10.13 8.39a.5.5 0 0 0-.43-.24h-.03l-.1-.02a6.16 6.16 0 0 1-.3-.08l-.09-.03c-.23-.06-.51-.14-.84-.21a8.52 8.52 0 0 0-2.95-.16c-1.2.15-2.12.56-2.75 1.15a2.85 2.85 0 0 0-.9 2.62 13.17 13.17 0 0 1 3.77-2.23.5.5 0 1 1 .38.92c-.8.32-1.54.7-2.2 1.1a8.47 8.47 0 0 0-3.44 3.72.5.5 0 0 0 .9.44c.38-.76.84-1.45 1.44-2.06a3.71 3.71 0 0 0 .59.8 3.07 3.07 0 0 0 3.9.58c.45-.28.77-.67 1-1.08.37-.63.58-1.38.74-1.94l.1-.37a7.5 7.5 0 0 1 1-2.03v-.02c.1-.14.18-.27.23-.38a.5.5 0 0 0-.02-.48Z",
    fill: primaryFill
  }));
};

exports.EarthLeafRegular = wrapIcon_1.default( /*#__PURE__*/EarthLeafRegularIcon, 'EarthLeafRegular');

const EditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l7.98-7.98-4.2-4.21Z",
    fill: primaryFill
  }));
};

exports.EditFilled = wrapIcon_1.default( /*#__PURE__*/EditFilledIcon, 'EditFilled');

const EditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.93-.88c.46-.1.9-.33 1.23-.67l9.36-9.36a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.8 2.8l-.68.66-2.8-2.79.68-.67Zm-1.38 1.38 2.8 2.8-7.99 7.97c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l8-8Z",
    fill: primaryFill
  }));
};

exports.EditRegular = wrapIcon_1.default( /*#__PURE__*/EditRegularIcon, 'EditRegular');

const EditArrowBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0 1 15 9.2l.75-.74-4.2-4.21ZM13.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 16 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.EditArrowBackFilled = wrapIcon_1.default( /*#__PURE__*/EditArrowBackFilledIcon, 'EditArrowBackFilled');

const EditArrowBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l7.99-8 2.8 2.8L13.78 9c.41.02.82.09 1.21.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-.67.66-2.8-2.79.68-.67ZM13.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 16 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.EditArrowBackRegular = wrapIcon_1.default( /*#__PURE__*/EditArrowBackRegularIcon, 'EditArrowBackRegular');

const EditOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm12.9 6.3-2.59 2.6-4.2-4.21 2.58-2.6 4.21 4.22Zm-2.83-5.58a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Z",
    fill: primaryFill
  }));
};

exports.EditOffFilled = wrapIcon_1.default( /*#__PURE__*/EditOffFilledIcon, 'EditOffFilled');

const EditOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm8.2 9.6-3.99 3.98c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l3.99-4 2.8 2.79Zm4-4-2.6 2.59.71.7 3.97-3.96a2.97 2.97 0 0 0-4.21-4.2L8.96 6.83l.7.7 2.59-2.58 2.8 2.8Zm-1.42-4.17a1.97 1.97 0 0 1 2.79 2.8l-.67.66-2.8-2.79.68-.67Z",
    fill: primaryFill
  }));
};

exports.EditOffRegular = wrapIcon_1.default( /*#__PURE__*/EditOffRegularIcon, 'EditOffRegular');

const EditProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0 1 15 9.2l.75-.74-4.2-4.21ZM9 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    fill: primaryFill
  }));
};

exports.EditProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/EditProhibitedFilledIcon, 'EditProhibitedFilled');

const EditProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l7.99-8 2.8 2.8L13.78 9c.41.02.82.09 1.21.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-.67.66-2.8-2.79.68-.67ZM9 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    fill: primaryFill
  }));
};

exports.EditProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/EditProhibitedRegularIcon, 'EditProhibitedRegular');

const EditSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0 1 15 9.2l.75-.74-4.2-4.21Zm-.47 7.2a2 2 0 0 1-1.43 2.47l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 11 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 16 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.05a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.EditSettingsFilled = wrapIcon_1.default( /*#__PURE__*/EditSettingsFilledIcon, 'EditSettingsFilled');

const EditSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l7.99-8 2.8 2.8L13.78 9c.41.02.82.09 1.21.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-.67.66-2.8-2.79.68-.67Zm-2.56 7.86a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 11 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 16 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.EditSettingsRegular = wrapIcon_1.default( /*#__PURE__*/EditSettingsRegularIcon, 'EditSettingsRegular');

const ElevatorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.5V3ZM5.65 7.15c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 1 1-.7.7l-.65-.64v2.79a.5.5 0 0 1-1 0V8.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5ZM10.5 16H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4.5v13Zm3.85-4.15a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V7.5a.5.5 0 0 1 1 0v2.8l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.ElevatorFilled = wrapIcon_1.default( /*#__PURE__*/ElevatorFilledIcon, 'ElevatorFilled');

const ElevatorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.65 7.15c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 1 1-.7.7l-.65-.64v2.79a.5.5 0 0 1-1 0V8.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5Zm10.2 3.2-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V7.5a.5.5 0 0 1 1 0v2.8l.65-.65a.5.5 0 0 1 .7.7ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm4.5 1v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4.5Zm1 11V4H15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4.5Z",
    fill: primaryFill
  }));
};

exports.ElevatorRegular = wrapIcon_1.default( /*#__PURE__*/ElevatorRegularIcon, 'ElevatorRegular');

const EmojiFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM7.15 12.43a.5.5 0 1 0-.7.7 5.01 5.01 0 0 0 6.9.2l.2-.2.06-.07a.5.5 0 0 0-.7-.7l-.06.07-.18.17a4.01 4.01 0 0 1-5.52-.17ZM12.5 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    fill: primaryFill
  }));
};

exports.EmojiFilled = wrapIcon_1.default( /*#__PURE__*/EmojiFilledIcon, 'EmojiFilled');

const EmojiRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-2.85 9.43a4.01 4.01 0 0 0 5.52.17l.18-.17a.5.5 0 0 1 .76.63l-.06.07-.02.02a5.01 5.01 0 0 1-7.08-.02.5.5 0 0 1 .7-.7ZM12.5 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

exports.EmojiRegular = wrapIcon_1.default( /*#__PURE__*/EmojiRegularIcon, 'EmojiRegular');

const EmojiAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 1a8 8 0 0 1 7.98 8.59 5.48 5.48 0 0 0-7.64 3 4 4 0 0 1-3.19-1.16.5.5 0 1 0-.7.7 5 5 0 0 0 3.62 1.48 5.54 5.54 0 0 0 .52 3.37L9 17A8 8 0 1 1 9 1Zm2.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.EmojiAddFilled = wrapIcon_1.default( /*#__PURE__*/EmojiAddFilledIcon, 'EmojiAddFilled');

const EmojiAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 1a8 8 0 0 1 7.98 8.59A5.46 5.46 0 0 0 16 9.2V9a7 7 0 1 0-6.8 7c.1.34.23.67.39.98L9 17A8 8 0 1 1 9 1ZM6.15 11.43a4 4 0 0 0 3.19 1.17l-.03.06c-.1.3-.19.62-.24.95a5 5 0 0 1-3.62-1.48.5.5 0 0 1 .7-.7ZM11.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.EmojiAddRegular = wrapIcon_1.default( /*#__PURE__*/EmojiAddRegularIcon, 'EmojiAddRegular');

const EmojiAngryFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.5-1.5a.5.5 0 0 0 .26-.93l-2.5-1.5a.5.5 0 0 0-.52.86l1.22.73a1 1 0 1 0 1.54.84Zm5 0a1 1 0 0 0-.46-.84l1.22-.73a.5.5 0 0 0-.52-.86l-2.5 1.5a.5.5 0 0 0 .26.93 1 1 0 1 0 2 0Zm.06 4.89c.34-.3.07-.72.06-.73a2.05 2.05 0 0 0-.23-.23 4.06 4.06 0 0 0-.67-.49 5.3 5.3 0 0 0-2.72-.69 5.3 5.3 0 0 0-2.72.7 4.08 4.08 0 0 0-.9.7c-.18.23-.17.55.06.74a.5.5 0 0 0 .7-.07l.02-.03c.03-.03.06-.07.12-.11.1-.1.27-.24.5-.37a4.31 4.31 0 0 1 2.22-.56 4.3 4.3 0 0 1 2.22.56 3.07 3.07 0 0 1 .64.5c.18.22.5.27.7.08Z",
    fill: primaryFill
  }));
};

exports.EmojiAngryFilled = wrapIcon_1.default( /*#__PURE__*/EmojiAngryFilledIcon, 'EmojiAngryFilled');

const EmojiAngryRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 8.5a1 1 0 1 1-1.54-.84l-1.22-.73a.5.5 0 0 1 .52-.86l2.5 1.5a.5.5 0 0 1-.26.93Zm5 0a1 1 0 1 1-2 0 .5.5 0 0 1-.26-.93l2.5-1.5a.5.5 0 0 1 .52.86l-1.22.73a1 1 0 0 1 .46.84Zm.06 4.89a.5.5 0 0 1-.7-.07A4.3 4.3 0 0 0 10 12.25c-1.02-.01-1.75.27-2.21.55a3.09 3.09 0 0 0-.65.5.5.5 0 0 1-.78-.62l.39.31-.39-.31v-.01l.02-.02a1.78 1.78 0 0 1 .23-.23c.15-.13.37-.31.67-.49.6-.35 1.5-.69 2.72-.69a5.3 5.3 0 0 1 2.72.7 4.06 4.06 0 0 1 .9.71l.01.02h.01l-.39.32.39-.31a.5.5 0 0 1-.08.7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.EmojiAngryRegular = wrapIcon_1.default( /*#__PURE__*/EmojiAngryRegularIcon, 'EmojiAngryRegular');

const EmojiEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 7.95 7.12 2.87 2.87 0 0 0-2.85.72l-3.38 3.39c-1.5.7-3.33.44-4.57-.8a.5.5 0 1 0-.7.7 5 5 0 0 0 3.9 1.47l-.08.07c-.4.41-.7.92-.84 1.49l-.37 1.5c-.03.09-.04.18-.05.28A8 8 0 0 1 10 2Zm2.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.48 7.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.EmojiEditFilled = wrapIcon_1.default( /*#__PURE__*/EmojiEditFilledIcon, 'EmojiEditFilled');

const EmojiEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 0 1 7.95 7.12c-.33-.1-.68-.14-1.02-.11a7 7 0 1 0-7.7 7.95l-.17.7c-.03.09-.04.18-.05.28A8 8 0 0 1 10 2ZM7.15 12.43a4.01 4.01 0 0 0 4.57.8l-1.38 1.37a5 5 0 0 1-3.9-1.47.5.5 0 0 1 .71-.7ZM12.5 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3.48 7.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.EmojiEditRegular = wrapIcon_1.default( /*#__PURE__*/EmojiEditRegularIcon, 'EmojiEditRegular');

const EmojiHandFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 1c.28 0 .5.22.5.5v5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 1 0v4.25l.31-.06c.32-.04.7-.02 1.07.14.38.16.74.44 1.04.9a.5.5 0 0 1-.22.73 5.26 5.26 0 0 0-2.71 2.37C6.94 11.86 5.89 13 4.5 13h-.26A2.5 2.5 0 0 1 2 11.62l-.63-1.26A3.5 3.5 0 0 1 1 8.79V2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5c0-.28.22-.5.5-.5Zm2.87 10.3c-.28.54-.74 1.18-1.35 1.7a5.5 5.5 0 1 0 4.21-5.85l.02.02a1.5 1.5 0 0 1-.66 2.2 4.27 4.27 0 0 0-2.22 1.92Zm2.38 1.2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm4.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.05 2.53c.08.17.55.72 1.55.72s1.47-.55 1.55-.72a.5.5 0 1 1 .9.44c-.25.5-1.05 1.28-2.45 1.28-1.4 0-2.2-.78-2.45-1.28a.5.5 0 1 1 .9-.44Z",
    fill: primaryFill
  }));
};

exports.EmojiHandFilled = wrapIcon_1.default( /*#__PURE__*/EmojiHandFilledIcon, 'EmojiHandFilled');

const EmojiHandRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 1c-.65 0-1.2.42-1.41 1H3a2 2 0 0 0-2 2v4.8c0 .54.13 1.07.37 1.56L2 11.62A2.5 2.5 0 0 0 4.24 13h1.82a3.1 3.1 0 0 0 2.52-1.5 8.04 8.04 0 0 1 3.62-3.04.5.5 0 0 0 .29-.58 2.17 2.17 0 0 0-.8-1.28 1.9 1.9 0 0 0-1.13-.35c-.2 0-.4.03-.56.06V4a2 2 0 0 0-2-2h-.09c-.2-.58-.76-1-1.41-1h-2Zm0 1H5v4.5a.5.5 0 0 0 1 0V2h.5c.28 0 .5.22.5.5v4a.5.5 0 1 0 1 0V3a1 1 0 0 1 1 1v3a.5.5 0 0 0 .72.45h.01a1.51 1.51 0 0 1 .24-.1 2 2 0 0 1 .6-.1c.2 0 .39.05.53.15.1.07.19.17.28.34-1.87.9-3 2.22-3.64 3.21-.4.63-1.04 1.05-1.68 1.05H4.24a1.5 1.5 0 0 1-1.35-.83l-.63-1.26A2.5 2.5 0 0 1 2 8.79V4a1 1 0 0 1 1-1v3.5a.5.5 0 1 0 1 0v-4c0-.28.22-.5.5-.5Zm8.76 5.05a5.5 5.5 0 1 1-6.1 6.78c.33-.11.64-.27.93-.45a4.5 4.5 0 1 0 5.4-5.27c.02-.16 0-.32-.03-.47-.06-.2-.12-.4-.2-.59Zm-2.51 5.45a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.05 2.53a.5.5 0 1 0-.9.44c.25.5 1.05 1.28 2.45 1.28 1.4 0 2.2-.78 2.45-1.28a.5.5 0 1 0-.9-.44c-.08.17-.55.72-1.55.72s-1.47-.55-1.55-.72Zm-9.58-3.92.45-.23Z",
    fill: primaryFill
  }));
};

exports.EmojiHandRegular = wrapIcon_1.default( /*#__PURE__*/EmojiHandRegularIcon, 'EmojiHandRegular');

const EmojiLaughFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM6.5 8.08a.5.5 0 1 1-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 1 1-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58Zm5.5 0a.5.5 0 0 1-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 0 1-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58ZM5.5 10.5h9c-.22 2.2-1.93 4-4.5 4a4.36 4.36 0 0 1-4.5-4Z",
    fill: primaryFill
  }));
};

exports.EmojiLaughFilled = wrapIcon_1.default( /*#__PURE__*/EmojiLaughFilledIcon, 'EmojiLaughFilled');

const EmojiLaughRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 8.08c.04-.3.33-.58.75-.58.41 0 .7.28.75.58A.5.5 0 1 0 9 7.92 1.73 1.73 0 0 0 7.25 6.5c-.86 0-1.62.59-1.74 1.42a.5.5 0 1 0 .98.16Zm6.25-.58c-.42 0-.71.28-.76.58a.5.5 0 0 1-.98-.16c.12-.83.88-1.42 1.74-1.42.85 0 1.61.59 1.74 1.42a.5.5 0 0 1-.99.16c-.04-.3-.34-.58-.75-.58ZM5.5 10a.5.5 0 0 0-.5.55A4.86 4.86 0 0 0 10 15c2.84 0 4.75-2 5-4.45a.5.5 0 0 0-.5-.55h-9Zm4.5 4a3.85 3.85 0 0 1-3.92-3h7.83c-.4 1.7-1.83 3-3.91 3Zm0-12a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.EmojiLaughRegular = wrapIcon_1.default( /*#__PURE__*/EmojiLaughRegularIcon, 'EmojiLaughRegular');

const EmojiMehFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6.5 3c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.EmojiMehFilled = wrapIcon_1.default( /*#__PURE__*/EmojiMehFilledIcon, 'EmojiMehFilled');

const EmojiMehRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7 3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
};

exports.EmojiMehRegular = wrapIcon_1.default( /*#__PURE__*/EmojiMehRegularIcon, 'EmojiMehRegular');

const EmojiMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 7a5 5 0 0 0 4.03 4.9 6.48 6.48 0 0 1 1.66-3.78 2 2 0 0 0-2.21.58.5.5 0 1 1-.76-.65 3 3 0 0 1 3.76-.66 6.47 6.47 0 0 1 3.43-1.36A5 5 0 0 0 2 7Zm4.25-1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.75 7a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.75-1a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm3.86 2.57a.5.5 0 0 0-.71.05 2.5 2.5 0 0 1-3.8 0 .5.5 0 1 0-.76.66 3.5 3.5 0 0 0 5.32 0 .5.5 0 0 0-.05-.71Zm-.61-1.82a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.EmojiMultipleFilled = wrapIcon_1.default( /*#__PURE__*/EmojiMultipleFilledIcon, 'EmojiMultipleFilled');

const EmojiMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2a5 5 0 0 1 4.9 4.03c-.33.03-.66.08-.98.16a4 4 0 1 0-4.73 4.73c-.08.32-.13.65-.16.99A5 5 0 0 1 7 2Zm.7 6.12c.24-.26.5-.5.78-.73a3 3 0 0 0-3.76.66.5.5 0 1 0 .76.65 2 2 0 0 1 2.21-.58ZM6.24 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.6 1.82c.21.18.24.5.06.7a3.5 3.5 0 0 1-5.32.01.5.5 0 1 1 .76-.65 2.5 2.5 0 0 0 3.8 0 .5.5 0 0 1 .7-.06Zm-.6-1.82a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2 5.75a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-1a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z",
    fill: primaryFill
  }));
};

exports.EmojiMultipleRegular = wrapIcon_1.default( /*#__PURE__*/EmojiMultipleRegularIcon, 'EmojiMultipleRegular');

const EmojiSadFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm.06 4.89c.38-.35.07-.72.06-.73a2.02 2.02 0 0 0-.23-.23 4.06 4.06 0 0 0-.67-.49 5.3 5.3 0 0 0-2.72-.69 5.3 5.3 0 0 0-2.72.7 4.08 4.08 0 0 0-.9.7l-.01.03h-.01l.39.32-.39-.31a.5.5 0 0 0 .78.63l.02-.03c.03-.03.06-.07.12-.11.1-.1.27-.24.5-.37a4.31 4.31 0 0 1 2.22-.56 4.3 4.3 0 0 1 2.22.56 3.07 3.07 0 0 1 .64.5.5.5 0 0 0 .7.08Z",
    fill: primaryFill
  }));
};

exports.EmojiSadFilled = wrapIcon_1.default( /*#__PURE__*/EmojiSadFilledIcon, 'EmojiSadFilled');

const EmojiSadRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.06 4.89a.5.5 0 0 1-.7-.07A4.3 4.3 0 0 0 10 12.25c-1.02-.01-1.75.27-2.21.55a3.09 3.09 0 0 0-.65.5.5.5 0 0 1-.78-.62l.39.31-.39-.31v-.01l.02-.02a2.07 2.07 0 0 1 .23-.23c.15-.13.37-.31.67-.49.6-.35 1.5-.69 2.72-.69a5.3 5.3 0 0 1 2.72.7 4.06 4.06 0 0 1 .9.71l.01.02h.01l-.39.32.39-.31a.5.5 0 0 1-.08.7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.EmojiSadRegular = wrapIcon_1.default( /*#__PURE__*/EmojiSadRegularIcon, 'EmojiSadRegular');

const EmojiSadSlightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.3 4.5h.8a.5.5 0 0 1 0 1h-.8c-1.07 0-2.13.32-3.02.92a.5.5 0 1 1-.56-.84A6.45 6.45 0 0 1 12.8 12Z",
    fill: primaryFill
  }));
};

exports.EmojiSadSlightFilled = wrapIcon_1.default( /*#__PURE__*/EmojiSadSlightFilledIcon, 'EmojiSadSlightFilled');

const EmojiSadSlightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.3 2.5c-1.27 0-2.52.38-3.58 1.08a.5.5 0 0 0 .56.84c.9-.6 1.95-.92 3.02-.92h.8a.5.5 0 0 0 0-1h-.8ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
};

exports.EmojiSadSlightRegular = wrapIcon_1.default( /*#__PURE__*/EmojiSadSlightRegularIcon, 'EmojiSadSlightRegular');

const EmojiSmileSlightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4.03 5.55c.42.21.97.32 1.53.32a3.5 3.5 0 0 0 1.53-.32.5.5 0 1 1 .44.9c-.58.29-1.28.43-1.97.43s-1.39-.14-1.97-.43a.5.5 0 1 1 .44-.9Z",
    fill: primaryFill
  }));
};

exports.EmojiSmileSlightFilled = wrapIcon_1.default( /*#__PURE__*/EmojiSmileSlightFilledIcon, 'EmojiSmileSlightFilled');

const EmojiSmileSlightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.03 4.55a.5.5 0 1 0-.44.9c.58.29 1.28.43 1.97.43s1.39-.14 1.97-.43a.5.5 0 1 0-.44-.9c-.42.21-.97.32-1.53.32a3.5 3.5 0 0 1-1.53-.32ZM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.EmojiSmileSlightRegular = wrapIcon_1.default( /*#__PURE__*/EmojiSmileSlightRegularIcon, 'EmojiSmileSlightRegular');

const EmojiSparkleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.01.04-.01.01-.23.7-.1.32a.42.42 0 0 1-.16.2.42.42 0 0 1-.64-.2l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-.64-.22-.43-.13a.42.42 0 0 1-.28-.4.42.42 0 0 1 .28-.4l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0-.15.11.3.3 0 0 0 .15.46l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM10 18a8 8 0 0 0 7.75-6.02 1.3 1.3 0 0 1-1.48-.87l-.25-.76a.57.57 0 0 0-.36-.36l-.79-.26a1.3 1.3 0 0 1-.75-1.78 1.4 1.4 0 0 1-.44-.21l-.04-.03-.03-.02c-.21-.17-.37-.4-.46-.66l-.34-1.07a1.2 1.2 0 0 0-.76-.76l-1.1-.36a1.42 1.42 0 0 1 .02-2.7l.2-.06A8 8 0 1 0 10 18Zm-3.55-5.57c.2-.2.51-.2.7 0a4.01 4.01 0 0 0 5.52.17l.18-.17.06-.06a.5.5 0 0 1 .7.7l-.06.06-.2.2a5.01 5.01 0 0 1-6.9-.2.5.5 0 0 1 0-.7ZM11.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: primaryFill
  }));
};

exports.EmojiSparkleFilled = wrapIcon_1.default( /*#__PURE__*/EmojiSparkleFilledIcon, 'EmojiSparkleFilled');

const EmojiSparkleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.03.1.21.67a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM17.3 12a1.3 1.3 0 0 1-.53-.21A7 7 0 1 1 10.1 3a1.42 1.42 0 0 1 .88-.85l.2-.07a8 8 0 1 0 6.59 9.9c-.15.03-.3.03-.46 0Zm-4.63.6a4.01 4.01 0 0 1-5.52-.16.5.5 0 1 0-.7.7 5.01 5.01 0 0 0 7.08.02l.02-.02.06-.07a.5.5 0 0 0-.76-.63l-.18.17Zm.83-4.09a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.EmojiSparkleRegular = wrapIcon_1.default( /*#__PURE__*/EmojiSparkleRegularIcon, 'EmojiSparkleRegular');

const EmojiSurpriseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.25 3a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm.75-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.EmojiSurpriseFilled = wrapIcon_1.default( /*#__PURE__*/EmojiSurpriseFilledIcon, 'EmojiSurpriseFilled');

const EmojiSurpriseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.25 3a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm.75-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.EmojiSurpriseRegular = wrapIcon_1.default( /*#__PURE__*/EmojiSurpriseRegularIcon, 'EmojiSurpriseRegular');

const EngineFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 2.5c.28 0 .5.22.5.5v1h2V3a.5.5 0 0 1 1 0v1h2.2a1 1 0 0 1 .89.55L14.8 6H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.2l-.71 1.45a1 1 0 0 1-.9.55H7.71a1 1 0 0 1-.71-.3l-2.41-2.4A2 2 0 0 1 4 12.87V10H3v2.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0V9h1V6c0-1.1.9-2 2-2h1V3c0-.28.22-.5.5-.5Zm0 4.5a.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 0-1H11V7.5a.5.5 0 0 0-1 0V11H9a1 1 0 0 1-1-1V7.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.EngineFilled = wrapIcon_1.default( /*#__PURE__*/EngineFilledIcon, 'EngineFilled');

const EngineRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3a.5.5 0 0 0-1 0v1H6a2 2 0 0 0-2 2v3H3V6.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V10h1v2.88a2 2 0 0 0 .59 1.41L7 16.71a1 1 0 0 0 .7.29h5.5a1 1 0 0 0 .89-.55L14.8 15H16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.2l-.71-1.45a1 1 0 0 0-.9-.55H11V3a.5.5 0 0 0-1 0v1H8V3ZM6 5h7.2l.71 1.45a1 1 0 0 0 .9.55H16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.2a1 1 0 0 0-.89.55L13.2 16H7.71l-2.42-2.41a1 1 0 0 1-.29-.71V6a1 1 0 0 1 1-1Zm1.5 2c.28 0 .5.22.5.5V10a1 1 0 0 0 1 1h1V7.5a.5.5 0 0 1 1 0V11h3.5a.5.5 0 0 1 0 1H9a2 2 0 0 1-2-2V7.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.EngineRegular = wrapIcon_1.default( /*#__PURE__*/EngineRegularIcon, 'EngineRegular');

const EqualCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm3.5 7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Z",
    fill: primaryFill
  }));
};

exports.EqualCircleFilled = wrapIcon_1.default( /*#__PURE__*/EqualCircleFilledIcon, 'EqualCircleFilled');

const EqualCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 9a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Zm4.5-2a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-7a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z",
    fill: primaryFill
  }));
};

exports.EqualCircleRegular = wrapIcon_1.default( /*#__PURE__*/EqualCircleRegularIcon, 'EqualCircleRegular');

const EqualOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L5.79 6.5H3.75a.75.75 0 0 0 0 1.5h3.54l3.5 3.5H3.75a.75.75 0 0 0 0 1.5h8.54l4.86 4.85a.5.5 0 0 0 .7-.7l-15-15Zm10.77 9.35 1.5 1.5h1.13a.75.75 0 0 0 0-1.5h-2.63Zm-5-5 1.5 1.5h6.13a.75.75 0 0 0 0-1.5H8.62Z",
    fill: primaryFill
  }));
};

exports.EqualOffFilled = wrapIcon_1.default( /*#__PURE__*/EqualOffFilledIcon, 'EqualOffFilled');

const EqualOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L6.29 7H3.5a.5.5 0 0 0 0 1h3.8l4 4H3.5a.5.5 0 0 0 0 1h8.8l4.85 4.85a.5.5 0 0 0 .7-.7l-15-15ZM14.12 12l1 1h1.38a.5.5 0 0 0 0-1h-2.38Zm-5-5 1 1h6.38a.5.5 0 0 0 0-1H9.12Z",
    fill: primaryFill
  }));
};

exports.EqualOffRegular = wrapIcon_1.default( /*#__PURE__*/EqualOffRegularIcon, 'EqualOffRegular');

const EraserFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.2 2.44a1.5 1.5 0 0 1 2.12 0l4.24 4.24a1.5 1.5 0 0 1 0 2.12L9.36 17h5.14a.5.5 0 0 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.44l-4.24-4.24a1.5 1.5 0 0 1 0-2.12l8.76-8.76ZM9.78 15.17l-4.95-4.95-1.69 1.69a.5.5 0 0 0 0 .7l4.25 4.25c.2.2.5.2.7 0l1.7-1.7Z",
    fill: primaryFill
  }));
};

exports.EraserFilled = wrapIcon_1.default( /*#__PURE__*/EraserFilledIcon, 'EraserFilled');

const EraserRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.2 2.44a1.5 1.5 0 0 1 2.12 0l4.24 4.24a1.5 1.5 0 0 1 0 2.12L9.36 17h5.14a.5.5 0 0 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.44l-4.24-4.24a1.5 1.5 0 0 1 0-2.12l8.76-8.76Zm1.41.7a.5.5 0 0 0-.7 0L5.53 9.52l4.95 4.95 6.36-6.36a.5.5 0 0 0 0-.71l-4.24-4.24ZM9.78 15.18l-4.95-4.95-1.69 1.69a.5.5 0 0 0 0 .7l4.25 4.25c.2.2.5.2.7 0l1.7-1.7Z",
    fill: primaryFill
  }));
};

exports.EraserRegular = wrapIcon_1.default( /*#__PURE__*/EraserRegularIcon, 'EraserRegular');

const EraserMediumFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l.72-.72a5.46 5.46 0 0 1-.37-1.04L8.1 16.86a.5.5 0 0 1-.71 0L3.15 12.6a.5.5 0 0 1 0-.7l1.69-1.7L9 14.39a5.5 5.5 0 0 1 7.84-4.86l.72-.72a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
    fill: primaryFill
  }));
};

exports.EraserMediumFilled = wrapIcon_1.default( /*#__PURE__*/EraserMediumFilledIcon, 'EraserMediumFilled');

const EraserMediumRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l.72-.72a5.46 5.46 0 0 1-.37-1.04L8.1 16.86a.5.5 0 0 1-.71 0L3.15 12.6a.5.5 0 0 1 0-.7l1.69-1.7L9 14.39c.01-.43.07-.84.17-1.24L5.54 9.5l6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7L15.8 9.16c.36.1.71.22 1.04.37l.72-.72a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
    fill: primaryFill
  }));
};

exports.EraserMediumRegular = wrapIcon_1.default( /*#__PURE__*/EraserMediumRegularIcon, 'EraserMediumRegular');

const EraserSegmentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.32 2.44a1.5 1.5 0 0 0-2.12 0L2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24c.31.32.73.46 1.14.44h6.27a1.5 1.5 0 1 0 0-1H9.36l8.2-8.2a1.5 1.5 0 0 0 0-2.12l-4.24-4.24Zm-8.49 7.78 4.95 4.95-1.69 1.69a.5.5 0 0 1-.7 0L3.14 12.6a.5.5 0 0 1 0-.7l1.7-1.7Z",
    fill: primaryFill
  }));
};

exports.EraserSegmentFilled = wrapIcon_1.default( /*#__PURE__*/EraserSegmentFilledIcon, 'EraserSegmentFilled');

const EraserSegmentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.32 2.44a1.5 1.5 0 0 0-2.12 0L2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24c.31.32.73.46 1.14.44h6.27a1.5 1.5 0 1 0 0-1H9.36l8.2-8.2a1.5 1.5 0 0 0 0-2.12l-4.24-4.24Zm-1.42.7c.2-.19.52-.19.71 0l4.24 4.25c.2.2.2.51 0 .7l-6.36 6.37-4.95-4.95 6.36-6.36Zm-7.07 7.08 4.95 4.95-1.69 1.69a.5.5 0 0 1-.7 0L3.14 12.6a.5.5 0 0 1 0-.7l1.7-1.7Z",
    fill: primaryFill
  }));
};

exports.EraserSegmentRegular = wrapIcon_1.default( /*#__PURE__*/EraserSegmentRegularIcon, 'EraserSegmentRegular');

const EraserSmallFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l2.22-2.2a4 4 0 0 1 4.34-4.34l2.2-2.22a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2Zm.7 1.41a.5.5 0 0 1 0-.7l1.7-1.7 4.95 4.96-1.7 1.69a.5.5 0 0 1-.7 0L3.15 12.6ZM15 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: primaryFill
  }));
};

exports.EraserSmallFilled = wrapIcon_1.default( /*#__PURE__*/EraserSmallFilledIcon, 'EraserSmallFilled');

const EraserSmallRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l2.22-2.2a4.06 4.06 0 0 1 .18-1.6l-.7.7-4.96-4.95 6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7l-3.1 3.1a4 4 0 0 1 1.6-.17l2.2-2.22a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2Zm.7 1.41a.5.5 0 0 1 0-.7l1.7-1.7 4.95 4.96-1.7 1.69a.5.5 0 0 1-.7 0L3.15 12.6ZM15 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: primaryFill
  }));
};

exports.EraserSmallRegular = wrapIcon_1.default( /*#__PURE__*/EraserSmallRegularIcon, 'EraserSmallRegular');

const EraserToolFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2.5a.5.5 0 0 0-1 0v12A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 0 0 3.5-3.5v-12a.5.5 0 0 0-1 0V6H4V2.5ZM4 10V7h12v3H4Z",
    fill: primaryFill
  }));
};

exports.EraserToolFilled = wrapIcon_1.default( /*#__PURE__*/EraserToolFilledIcon, 'EraserToolFilled');

const EraserToolRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 2c.28 0 .5.22.5.5V6h12V2.5a.5.5 0 0 1 1 0v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 14.5v-12c0-.28.22-.5.5-.5Zm.5 9v3.5A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5V11H4Zm12-1V7H4v3h12Z",
    fill: primaryFill
  }));
};

exports.EraserToolRegular = wrapIcon_1.default( /*#__PURE__*/EraserToolRegularIcon, 'EraserToolRegular');

const ErrorCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 10.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM10 6a.5.5 0 0 0-.5.41v4.68a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Z",
    fill: primaryFill
  }));
};

exports.ErrorCircleFilled = wrapIcon_1.default( /*#__PURE__*/ErrorCircleFilledIcon, 'ErrorCircleFilled');

const ErrorCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 9.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10 6a.5.5 0 0 1 .5.41V11a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ErrorCircleRegular = wrapIcon_1.default( /*#__PURE__*/ErrorCircleRegularIcon, 'ErrorCircleRegular');

const ErrorCircleSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-7.41 7.98 5.48 5.48 0 0 1-.37-4.01.75.75 0 1 1 .44-1.08 5.5 5.5 0 0 1 7.32-2.3L18 10ZM9.5 6.41a.5.5 0 0 1 1 0v4.68a.5.5 0 0 1-1 0V6.41Zm2.14 8.51a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.ErrorCircleSettingsFilled = wrapIcon_1.default( /*#__PURE__*/ErrorCircleSettingsFilledIcon, 'ErrorCircleSettingsFilled');

const ErrorCircleSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 10a8 8 0 1 0-7.41 7.98 5.46 5.46 0 0 1-.38-.98H10a7 7 0 1 1 7-6.8c.34.1.67.23.98.39L18 10Zm-7.34 2.89a.75.75 0 1 0-.44 1.08c.1-.38.25-.74.44-1.08Zm-.17-6.48a.5.5 0 0 0-.99.09v4.59a.5.5 0 0 0 1-.09V6.41Zm1.15 8.51a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.ErrorCircleSettingsRegular = wrapIcon_1.default( /*#__PURE__*/ErrorCircleSettingsRegularIcon, 'ErrorCircleSettingsRegular');

const ExpandUpLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 4a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2v-2.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.5a.5.5 0 0 0 0 1H14Zm-5-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.7l4.15 4.15a.5.5 0 1 0 .7-.7L4.71 4H8.5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.ExpandUpLeftFilled = wrapIcon_1.default( /*#__PURE__*/ExpandUpLeftFilledIcon, 'ExpandUpLeftFilled');

const ExpandUpLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.5a.5.5 0 0 1 1 0V14c0 1.1.9 2 2 2h4v-4c0-1.1.9-2 2-2h4V6Zm-4 5a1 1 0 0 0-1 1v4h3a2 2 0 0 0 2-2v-3h-4ZM9 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.7l4.15 4.15a.5.5 0 1 0 .7-.7L4.71 4H8.5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.ExpandUpLeftRegular = wrapIcon_1.default( /*#__PURE__*/ExpandUpLeftRegularIcon, 'ExpandUpLeftRegular');

const ExpandUpRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 4a2 2 0 0 0-2 2v4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ExpandUpRightFilled = wrapIcon_1.default( /*#__PURE__*/ExpandUpRightFilledIcon, 'ExpandUpRightFilled');

const ExpandUpRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6c0-1.1.9-2 2-2h2.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-4v-4a2 2 0 0 0-2-2H4V6Zm0 5h4a1 1 0 0 1 1 1v4H6a2 2 0 0 1-2-2v-3Zm7-7.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ExpandUpRightRegular = wrapIcon_1.default( /*#__PURE__*/ExpandUpRightRegularIcon, 'ExpandUpRightRegular');

const ExtendedDockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.35 4.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L10 5.21l2.65 2.64a.5.5 0 0 0 .7-.7l-3-3ZM3 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3Zm6 0c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9Zm4.5 1.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2Z",
    fill: primaryFill
  }));
};

exports.ExtendedDockFilled = wrapIcon_1.default( /*#__PURE__*/ExtendedDockFilledIcon, 'ExtendedDockFilled');

const ExtendedDockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.35 4.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L10 5.21l2.65 2.64a.5.5 0 0 0 .7-.7l-3-3ZM3 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-2ZM9 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-2Zm5 0c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2ZM15 11a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Z",
    fill: primaryFill
  }));
};

exports.ExtendedDockRegular = wrapIcon_1.default( /*#__PURE__*/ExtendedDockRegularIcon, 'ExtendedDockRegular');

const EyeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.26 11.6A6.97 6.97 0 0 1 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 0 0 .98-.2A7.97 7.97 0 0 0 10 5a7.97 7.97 0 0 0-7.72 6.4.5.5 0 0 0 .98.2ZM9.99 8a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z",
    fill: primaryFill
  }));
};

exports.EyeFilled = wrapIcon_1.default( /*#__PURE__*/EyeFilledIcon, 'EyeFilled');

const EyeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.26 11.6A6.97 6.97 0 0 1 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 0 0 .98-.2A7.97 7.97 0 0 0 10 5a7.97 7.97 0 0 0-7.72 6.4.5.5 0 0 0 .98.2ZM10 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z",
    fill: primaryFill
  }));
};

exports.EyeRegular = wrapIcon_1.default( /*#__PURE__*/EyeRegularIcon, 'EyeRegular');

const EyeLinesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6H3.92c.27-.34.57-.68.92-1H10V4H6.18C7.21 3.4 8.47 3 10 3a7.5 7.5 0 0 1 6.08 3 9.73 9.73 0 0 1 1.56 2.96c.06.2.11.4.11.54s-.05.35-.1.54A9.74 9.74 0 0 1 16.08 13 7.5 7.5 0 0 1 10 16c-1.53 0-2.8-.4-3.82-1H10v-1H4.84a8.59 8.59 0 0 1-.92-1H10v-.5a3 3 0 1 0 0-6V6ZM8.34 7h-5.1c-.21.35-.38.7-.52 1H7.4c.23-.4.56-.74.94-1Zm-1.3 2h-4.7c-.05.18-.09.37-.09.5s.04.32.1.5h4.7a3.02 3.02 0 0 1 0-1Zm.36 2H2.72c.14.3.3.65.52 1h5.1c-.38-.26-.7-.6-.94-1Z",
    fill: primaryFill
  }));
};

exports.EyeLinesFilled = wrapIcon_1.default( /*#__PURE__*/EyeLinesFilledIcon, 'EyeLinesFilled');

const EyeLinesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3c-1.53 0-2.8.4-3.82 1H10a6.5 6.5 0 0 1 5.3 2.62 8.73 8.73 0 0 1 1.38 2.62c.05.14.06.22.07.25v.01a6.5 6.5 0 0 1-.32.94c-.24.57-.6 1.26-1.14 1.94A6.5 6.5 0 0 1 10 15H6.18c1.03.6 2.29 1 3.82 1a7.44 7.44 0 0 0 6.08-3 9.74 9.74 0 0 0 1.56-2.96c.06-.2.11-.4.11-.54s-.05-.35-.1-.54A9.73 9.73 0 0 0 16.08 6 7.44 7.44 0 0 0 10 3Zm0 3H3.92c.27-.34.57-.68.92-1H10v1Zm0 7a3.5 3.5 0 1 0 0-7v1H3.24c-.21.35-.38.7-.52 1H8a2.5 2.5 0 1 1 0 3H2.72c.14.3.3.65.52 1H10v1Zm0 0H3.92c.27.34.57.68.92 1H10v-1ZM7.55 9h-5.2c-.06.18-.1.37-.1.5s.04.32.1.5h5.2a2.51 2.51 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.EyeLinesRegular = wrapIcon_1.default( /*#__PURE__*/EyeLinesRegularIcon, 'EyeLinesRegular');

const EyeOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3.5 3.5a8.1 8.1 0 0 0-3.37 5.05.5.5 0 1 0 .98.2 7.09 7.09 0 0 1 3.1-4.53l1.59 1.59a3.5 3.5 0 1 0 4.88 4.88l4.32 4.31a.5.5 0 0 0 .7-.7l-15-15ZM10.12 8l3.37 3.37A3.5 3.5 0 0 0 10.12 8ZM7.53 5.41l.8.8C8.87 6.07 9.43 6 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 1 0 .98-.2A7.97 7.97 0 0 0 10 5c-.86 0-1.69.14-2.47.41Z",
    fill: primaryFill
  }));
};

exports.EyeOffFilled = wrapIcon_1.default( /*#__PURE__*/EyeOffFilledIcon, 'EyeOffFilled');

const EyeOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3.5 3.5a8.1 8.1 0 0 0-3.37 5.05.5.5 0 1 0 .98.2 7.09 7.09 0 0 1 3.1-4.53l1.6 1.59a3.5 3.5 0 1 0 4.88 4.89l4.3 4.3a.5.5 0 0 0 .71-.7l-15-15Zm9.27 10.68a2.5 2.5 0 1 1-3.45-3.45l3.45 3.45Zm-2-4.83 3.38 3.38A3.5 3.5 0 0 0 10.12 8ZM10 6c-.57 0-1.13.07-1.67.21l-.8-.8A7.65 7.65 0 0 1 10 5c3.7 0 6.94 2.67 7.72 6.4a.5.5 0 0 1-.98.2A6.97 6.97 0 0 0 10 6Z",
    fill: primaryFill
  }));
};

exports.EyeOffRegular = wrapIcon_1.default( /*#__PURE__*/EyeOffRegularIcon, 'EyeOffRegular');

const EyeTrackingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3C3.67 3 3 3.67 3 4.5v3a.5.5 0 0 1-1 0v-3A2.5 2.5 0 0 1 4.5 2h3a.5.5 0 0 1 0 1h-3Zm0 14A1.5 1.5 0 0 1 3 15.5v-3a.5.5 0 0 0-1 0v3A2.5 2.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-3a.5.5 0 0 1 0-1h3A2.5 2.5 0 0 1 18 4.5v3a.5.5 0 0 1-1 0v-3ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-3a.5.5 0 0 1 1 0v3a2.5 2.5 0 0 1-2.5 2.5h-3a.5.5 0 0 1 0-1h3ZM7 11.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4.95 9.72a.5.5 0 0 1-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 0 1 .08-.14l.25-.38A6.85 6.85 0 0 1 10 6a6.85 6.85 0 0 1 5.62 2.74 5.13 5.13 0 0 1 .33.52v.01l-.44.23.45-.22a.5.5 0 0 1-.9.45V9.7a2.5 2.5 0 0 0-.25-.39A5.86 5.86 0 0 0 10 7a5.86 5.86 0 0 0-4.8 2.32 4.14 4.14 0 0 0-.24.39l-.01.01Z",
    fill: primaryFill
  }));
};

exports.EyeTrackingFilled = wrapIcon_1.default( /*#__PURE__*/EyeTrackingFilledIcon, 'EyeTrackingFilled');

const EyeTrackingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4.5C3 3.67 3.67 3 4.5 3h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 4.5v3a.5.5 0 0 0 1 0v-3Zm0 11c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 2 15.5v-3a.5.5 0 0 1 1 0v3ZM15.5 3c.83 0 1.5.67 1.5 1.5v3a.5.5 0 0 0 1 0v-3A2.5 2.5 0 0 0 15.5 2h-3a.5.5 0 0 0 0 1h3ZM17 15.5c0 .83-.67 1.5-1.5 1.5h-3a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 0 2.5-2.5v-3a.5.5 0 0 0-1 0v3Zm-10-4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-5.05.22a.5.5 0 0 1-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 0 1 .08-.14l.25-.38A6.85 6.85 0 0 1 10 6a6.85 6.85 0 0 1 5.62 2.74 5.13 5.13 0 0 1 .33.52v.01l-.44.23.45-.22a.5.5 0 0 1-.9.45V9.7a2.5 2.5 0 0 0-.25-.39A5.86 5.86 0 0 0 10 7a5.86 5.86 0 0 0-4.8 2.32 4.14 4.14 0 0 0-.24.39l-.01.01Z",
    fill: primaryFill
  }));
};

exports.EyeTrackingRegular = wrapIcon_1.default( /*#__PURE__*/EyeTrackingRegularIcon, 'EyeTrackingRegular');

const EyeTrackingOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.41 3.12C2.15 3.52 2 4 2 4.5v3a.5.5 0 0 0 1 0v-3c0-.23.05-.45.15-.65L6.29 7a6.6 6.6 0 0 0-2.23 2.27v.01l.44.23-.45-.22a.5.5 0 0 0 .9.44v-.01a2.39 2.39 0 0 1 .25-.39 5.49 5.49 0 0 1 1.82-1.6l1.3 1.3a3 3 0 1 0 4.16 4.17l3.67 3.66c-.2.1-.42.15-.65.15h-3a.5.5 0 0 0 0 1h3c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-.26-.27-.74-.73-3.93-3.94-3.63-3.63L8.01 7.3l-.78-.78-3.38-3.37-.73-.74-.27-.26a.5.5 0 1 0-.7.7l.26.27Zm15.57 12.73.02-.35v-3a.5.5 0 0 0-1 0v2.38l.98.97Zm-8.81-8.8A7 7 0 0 1 10 7a5.86 5.86 0 0 1 4.8 2.32 4.13 4.13 0 0 1 .24.39l.01.01a.5.5 0 0 0 .9-.44v-.01l-.01-.01a1.7 1.7 0 0 0-.08-.14l-.25-.38A6.85 6.85 0 0 0 10 6c-.63 0-1.2.07-1.7.18l.86.87Zm6.78 2.23-.06.03-.39.19.45-.22ZM5.12 3H7.5a.5.5 0 0 0 0-1h-3c-.12 0-.24 0-.35.02l.97.98ZM3 15.5c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 2 15.5v-3a.5.5 0 0 1 1 0v3Zm14-11c0-.83-.67-1.5-1.5-1.5h-3a.5.5 0 0 1 0-1h3A2.5 2.5 0 0 1 18 4.5v3a.5.5 0 0 1-1 0v-3Z",
    fill: primaryFill
  }));
};

exports.EyeTrackingOffFilled = wrapIcon_1.default( /*#__PURE__*/EyeTrackingOffFilledIcon, 'EyeTrackingOffFilled');

const EyeTrackingOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.41 3.12C2.15 3.52 2 4 2 4.5v3a.5.5 0 0 0 1 0v-3c0-.23.05-.45.15-.65L6.29 7a6.6 6.6 0 0 0-2.23 2.27v.01l.44.23-.45-.22a.5.5 0 0 0 .9.44v-.01a2.39 2.39 0 0 1 .25-.39 5.49 5.49 0 0 1 1.82-1.6l1.3 1.3a3 3 0 1 0 4.16 4.17l3.67 3.66c-.2.1-.42.15-.65.15h-3a.5.5 0 0 0 0 1h3c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-.26-.27-.74-.73-3.93-3.94-3.63-3.63L8.01 7.3l-.78-.78-3.38-3.37-.73-.74-.27-.26a.5.5 0 1 0-.7.7l.26.27Zm9.34 9.34a2 2 0 1 1-2.71-2.71l2.71 2.71Zm6.23 3.4.02-.36v-3a.5.5 0 0 0-1 0v2.38l.98.97ZM9.17 7.04A7 7 0 0 1 10 7a5.86 5.86 0 0 1 4.8 2.32 4.13 4.13 0 0 1 .24.39l.01.01a.5.5 0 0 0 .9-.44v-.01l-.01-.01a1.7 1.7 0 0 0-.08-.14l-.25-.38A6.85 6.85 0 0 0 10 6c-.63 0-1.2.07-1.7.18l.86.87Zm6.78 2.23-.06.03-.39.19.45-.22ZM5.12 3H7.5a.5.5 0 0 0 0-1h-3c-.12 0-.24 0-.35.02l.97.98ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-3a.5.5 0 0 0-1 0v3A2.5 2.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3Zm11-14c.83 0 1.5.67 1.5 1.5v3a.5.5 0 0 0 1 0v-3A2.5 2.5 0 0 0 15.5 2h-3a.5.5 0 0 0 0 1h3Z",
    fill: primaryFill
  }));
};

exports.EyeTrackingOffRegular = wrapIcon_1.default( /*#__PURE__*/EyeTrackingOffRegularIcon, 'EyeTrackingOffRegular');

const EyedropperFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.25 2.75a2.62 2.62 0 0 0-3.71 0L12.5 3.8l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-6.35 6.35A1.5 1.5 0 0 0 3 13.91v.5l-.96 2.26a1 1 0 0 0 1.32 1.31L5.6 17h.49c.4 0 .78-.16 1.06-.44l6.35-6.35.35.35a1.5 1.5 0 0 0 2.12 0l.59-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 0 0 0-3.7ZM10.5 7.21l2.3 2.3-6.36 6.34a.5.5 0 0 1-.35.15H5.5a.5.5 0 0 0-.2.04l-2.34 1.03 1-2.36a.5.5 0 0 0 .04-.2v-.6a.5.5 0 0 1 .15-.35l6.35-6.35Z",
    fill: primaryFill
  }));
};

exports.EyedropperFilled = wrapIcon_1.default( /*#__PURE__*/EyedropperFilledIcon, 'EyedropperFilled');

const EyedropperRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.25 2.75a2.62 2.62 0 0 0-3.71 0L12.5 3.8l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-6.35 6.35A1.5 1.5 0 0 0 3 13.91v.5l-.96 2.26a1 1 0 0 0 1.32 1.31L5.6 17h.49c.4 0 .78-.16 1.06-.44l6.35-6.35.35.35a1.5 1.5 0 0 0 2.12 0l.59-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 0 0 0-3.7Zm-3 .71a1.62 1.62 0 0 1 2.29 2.3l-1.4 1.39a.5.5 0 0 0 0 .7l.71.71c.2.2.2.51 0 .7l-.58.6a.5.5 0 0 1-.71 0l-4.41-4.42a.5.5 0 0 1 0-.7l.58-.59c.2-.2.52-.2.71 0l.7.7a.5.5 0 0 0 .71 0l1.4-1.39ZM12.79 9.5l-6.35 6.35a.5.5 0 0 1-.35.15H5.5a.5.5 0 0 0-.2.04l-2.34 1.03 1-2.36a.5.5 0 0 0 .04-.2v-.6a.5.5 0 0 1 .15-.35l6.35-6.35 2.3 2.3Z",
    fill: primaryFill
  }));
};

exports.EyedropperRegular = wrapIcon_1.default( /*#__PURE__*/EyedropperRegularIcon, 'EyedropperRegular');

const EyedropperOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.8 8.5 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.65-5.64-4.35 4.35a1.5 1.5 0 0 1-1.06.44H5.6l-2.25.98a1 1 0 0 1-1.32-1.3L3 14.41v-.5c0-.4.16-.79.44-1.07L7.79 8.5Zm3 3L8.5 9.2l-4.35 4.36a.5.5 0 0 0-.15.35v.6a.5.5 0 0 1-.04.2l-1 2.36 2.34-1.03a.5.5 0 0 1 .2-.04h.59a.5.5 0 0 0 .35-.15l4.35-4.35Zm2-2-.6.59.72.7.58-.58.35.35a1.5 1.5 0 0 0 2.13 0l.58-.59a1.5 1.5 0 0 0 0-2.12l-.35-.35 1.04-1.04a2.62 2.62 0 1 0-3.71-3.7L12.5 3.78l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-.58.59.7.7.6-.58 2.28 2.29Zm1.45-6.04a1.62 1.62 0 1 1 2.29 2.3l-1.4 1.39a.5.5 0 0 0 0 .7l.71.71c.2.2.2.51 0 .7l-.58.6a.5.5 0 0 1-.7 0l-4.42-4.42a.5.5 0 0 1 0-.7l.59-.6c.2-.19.5-.19.7 0l.7.71a.5.5 0 0 0 .71 0l1.4-1.39Z",
    fill: primaryFill
  }));
};

exports.EyedropperOffFilled = wrapIcon_1.default( /*#__PURE__*/EyedropperOffFilledIcon, 'EyedropperOffFilled');

const EyedropperOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.8 8.5 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.65-5.64-4.35 4.35a1.5 1.5 0 0 1-1.06.44H5.6l-2.25.98a1 1 0 0 1-1.32-1.3L3 14.41v-.5c0-.4.16-.79.44-1.07L7.79 8.5Zm3 3L8.5 9.2l-4.35 4.36a.5.5 0 0 0-.15.35v.6a.5.5 0 0 1-.04.2l-1 2.36 2.34-1.03a.5.5 0 0 1 .2-.04h.59a.5.5 0 0 0 .35-.15l4.35-4.35Zm2-2-.6.59.72.7.58-.58.35.35a1.5 1.5 0 0 0 2.13 0l.58-.59a1.5 1.5 0 0 0 0-2.12l-.35-.35 1.04-1.04a2.62 2.62 0 1 0-3.71-3.7L12.5 3.78l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-.58.59.7.7.6-.58 2.28 2.29Z",
    fill: primaryFill
  }));
};

exports.EyedropperOffRegular = wrapIcon_1.default( /*#__PURE__*/EyedropperOffRegularIcon, 'EyedropperOffRegular');

const FStopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.08 5.68c.28-1.63 2-2.58 3.53-1.95l.36.14a.75.75 0 1 0 .56-1.38l-.36-.15A4.08 4.08 0 0 0 9.6 5.43L9 9H5.74a.75.75 0 0 0 0 1.5h2.98l-.5 2.96a2.58 2.58 0 0 1-3.92 1.75l-.16-.1a.75.75 0 0 0-.8 1.27l.16.1c2.46 1.55 5.7.1 6.2-2.77l.55-3.21h2.99a.75.75 0 1 0 0-1.5h-2.74l.57-3.32Z",
    fill: primaryFill
  }));
};

exports.FStopFilled = wrapIcon_1.default( /*#__PURE__*/FStopFilledIcon, 'FStopFilled');

const FStopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.88 5.35a2.83 2.83 0 0 1 3.68-2.22l.78.26a.5.5 0 1 0 .32-.95l-.8-.26a3.83 3.83 0 0 0-4.96 3L9.24 9H5.5a.5.5 0 1 0 0 1h3.57l-.62 3.63a2.83 2.83 0 0 1-4.24 1.96l-.45-.27a.5.5 0 1 0-.52.86l.46.27a3.83 3.83 0 0 0 5.74-2.65l.65-3.8h3.41a.5.5 0 0 0 0-1h-3.24l.62-3.65Z",
    fill: primaryFill
  }));
};

exports.FStopRegular = wrapIcon_1.default( /*#__PURE__*/FStopRegularIcon, 'FStopRegular');

const FastAccelerationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.9 7.2a3.48 3.48 0 0 1 4.2 0l-1.08 1.08a2 2 0 0 0-2.04 0L8.9 7.2ZM13 10a2 2 0 0 0-.28-1.02L13.8 7.9a3.48 3.48 0 0 1 0 4.2l-1.08-1.08A2 2 0 0 0 13 10Zm-2 2a2 2 0 0 0 1.02-.28l1.08 1.08a3.48 3.48 0 0 1-4.2 0l1.08-1.08A2 2 0 0 0 11 12Zm-2-2c0 .37.1.72.28 1.02L8.2 12.1a3.48 3.48 0 0 1 0-4.2l1.08 1.08A2 2 0 0 0 9 10ZM6.1 5a6.98 6.98 0 0 0-1.43 8H3.5a.5.5 0 0 0 0 1h1.75c.26.36.54.7.85 1H1.5a.5.5 0 0 0 0 1h5.9a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.6ZM11 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    fill: primaryFill
  }));
};

exports.FastAccelerationFilled = wrapIcon_1.default( /*#__PURE__*/FastAccelerationFilledIcon, 'FastAccelerationFilled');

const FastAccelerationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 4a6 6 0 1 1-3.3 11.01V15h-.02A6 6 0 0 1 11 4ZM5.25 14c.26.36.54.7.85 1H1.5a.5.5 0 0 0 0 1h5.9a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.6a6.98 6.98 0 0 0-1.43 8H3.5a.5.5 0 0 0 0 1h1.75ZM8.2 7.9a3.48 3.48 0 0 0 0 4.2l1.08-1.08a2 2 0 0 1 0-2.04L8.2 7.9Zm.7-.7 1.08 1.08a2 2 0 0 1 2.04 0L13.1 7.2a3.48 3.48 0 0 0-4.2 0Zm4.9.7-1.08 1.08a2 2 0 0 1 0 2.04l1.08 1.08a3.48 3.48 0 0 0 0-4.2Zm-.7 4.9-1.08-1.08a2 2 0 0 1-2.04 0L8.9 12.8a3.48 3.48 0 0 0 4.2 0ZM6.5 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm3.5 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    fill: primaryFill
  }));
};

exports.FastAccelerationRegular = wrapIcon_1.default( /*#__PURE__*/FastAccelerationRegularIcon, 'FastAccelerationRegular');

const FastForwardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.02 5.49a1 1 0 0 1 1.59-.81l5.88 4.31c.68.5.68 1.52 0 2.02l-5.88 4.3a1 1 0 0 1-1.6-.8v-3.16l-5.4 3.97a1 1 0 0 1-1.6-.8V5.48a1 1 0 0 1 1.6-.81l5.4 3.97V5.49Z",
    fill: primaryFill
  }));
};

exports.FastForwardFilled = wrapIcon_1.default( /*#__PURE__*/FastForwardFilledIcon, 'FastForwardFilled');

const FastForwardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.02 5.49a1 1 0 0 1 1.59-.81l5.88 4.31c.68.5.68 1.52 0 2.02l-5.88 4.3a1 1 0 0 1-1.6-.8v-3.16l-5.4 3.97a1 1 0 0 1-1.6-.8V5.48a1 1 0 0 1 1.6-.81l5.4 3.97V5.49Zm6.88 4.3-5.88-4.3v9.02l5.88-4.3c.13-.1.13-.31 0-.41Zm-7 0L4.02 5.5v9.02l5.88-4.3c.13-.1.13-.31 0-.41Z",
    fill: primaryFill
  }));
};

exports.FastForwardRegular = wrapIcon_1.default( /*#__PURE__*/FastForwardRegularIcon, 'FastForwardRegular');

const FaxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5c-.31.42-.5.94-.5 1.5v6c0 .56.19 1.08.5 1.5h-7A1.5 1.5 0 0 1 3 15.5V10c0-1.1.9-2 2-2V4.5Zm1.25 6.13a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm0 2.24a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm1.63-.5a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.24Zm.62-1.74a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm5-2.63c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-2Z",
    fill: primaryFill
  }));
};

exports.FaxFilled = wrapIcon_1.default( /*#__PURE__*/FaxFilledIcon, 'FaxFilled');

const FaxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5c-.22.3-.38.63-.45 1H5a1 1 0 0 0-1 1v5.5c0 .28.22.5.5.5h6.55c.07.37.23.7.45 1h-7A1.5 1.5 0 0 1 3 15.5V10c0-1.1.9-2 2-2V4.5Zm7 5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-6Zm1.5-.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-2Zm-7.88 1a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0 2.25a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25ZM8.5 13a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm-.63-3a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Z",
    fill: primaryFill
  }));
};

exports.FaxRegular = wrapIcon_1.default( /*#__PURE__*/FaxRegularIcon, 'FaxRegular');

const FeedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.47 17H4a2 2 0 0 1-2-2V4.5C2 3.67 2.67 3 3.5 3h7c.83 0 1.5.67 1.5 1.5V6h4.48c.77.02 1.52.6 1.52 1.58v4.92c0 .83-.67 1.5-1.5 1.5h-2.1l-.43 1.82c-.19.82-.85 1.2-1.5 1.18ZM15 7H12v8.48c0 .6.86.7 1 .12l1.94-8.37.07-.23ZM5.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 10c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.FeedFilled = wrapIcon_1.default( /*#__PURE__*/FeedFilledIcon, 'FeedFilled');

const FeedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 10c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 5 10Zm.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 17h8.47c.65.02 1.31-.36 1.5-1.18L14.4 14h2.11c.83 0 1.5-.67 1.5-1.5V7.58c0-.98-.75-1.56-1.52-1.58H12V4.5c0-.83-.67-1.5-1.5-1.5h-7C2.67 3 2 3.67 2 4.5V15c0 1.1.9 2 2 2ZM3 4.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v10.98c0 .2.03.36.08.52H4a1 1 0 0 1-1-1V4.5ZM16.5 13h-1.87l1.28-5.54c.15-.64 1.09-.53 1.09.12v4.92a.5.5 0 0 1-.5.5ZM12 7h3.01a1.8 1.8 0 0 0-.07.23L13 15.6c-.14.58-1 .48-1-.12V7Z",
    fill: primaryFill
  }));
};

exports.FeedRegular = wrapIcon_1.default( /*#__PURE__*/FeedRegularIcon, 'FeedRegular');

const FilmstripFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h1v2H3V6Zm0 7h2v2H4a1 1 0 0 1-1-1v-1Zm2-1H3v-1.5h2V12Zm0-2.5H3V8h2v1.5ZM16 15h-1v-2h2v1a1 1 0 0 1-1 1Zm1-4.5V12h-2v-1.5h2ZM17 8v1.5h-2V8h2Zm0-2v1h-2V5h1a1 1 0 0 1 1 1Z",
    fill: primaryFill
  }));
};

exports.FilmstripFilled = wrapIcon_1.default( /*#__PURE__*/FilmstripFilledIcon, 'FilmstripFilled');

const FilmstripRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v1h2V5H4Zm-1 9a1 1 0 0 0 1 1h1v-2H3v1Zm2-3.5H3V12h2v-1.5ZM5 8H3v1.5h2V8Zm9 7V5H6v10h8Zm1-2v2h1a1 1 0 0 0 1-1v-1h-2Zm2-1v-1.5h-2V12h2Zm0-2.5V8h-2v1.5h2ZM17 7V6a1 1 0 0 0-1-1h-1v2h2Z",
    fill: primaryFill
  }));
};

exports.FilmstripRegular = wrapIcon_1.default( /*#__PURE__*/FilmstripRegularIcon, 'FilmstripRegular');

const FilterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.25 13.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Zm2-4.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Zm2-4.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5Z",
    fill: primaryFill
  }));
};

exports.FilterFilled = wrapIcon_1.default( /*#__PURE__*/FilterFilledIcon, 'FilterFilled');

const FilterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 13h5a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1h5.09-5Zm-2-4h9a.5.5 0 0 1 .09 1H5.5a.5.5 0 0 1-.09-1h9.09-9Zm-2-4h13a.5.5 0 0 1 .09 1H3.5a.5.5 0 0 1-.09-1H16.5h-13Z",
    fill: primaryFill
  }));
};

exports.FilterRegular = wrapIcon_1.default( /*#__PURE__*/FilterRegularIcon, 'FilterRegular');

const FilterAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5a5.57 5.57 0 0 0 .07 1.5H3.75a.75.75 0 0 1 0-1.5h5.27Zm1.46 4.25a5.5 5.5 0 0 0 2.38 1.5H5.75a.75.75 0 0 1 0-1.5h4.73Zm1.77 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z",
    fill: primaryFill
  }));
};

exports.FilterAddFilled = wrapIcon_1.default( /*#__PURE__*/FilterAddFilledIcon, 'FilterAddFilled');

const FilterAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5H3.41a.5.5 0 0 0 .09 1h5.52a5.57 5.57 0 0 1 0-1Zm1.24 4H5.4a.5.5 0 0 0 .09 1h5.84c-.4-.28-.77-.62-1.08-1ZM7.4 13h5.09a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1Z",
    fill: primaryFill
  }));
};

exports.FilterAddRegular = wrapIcon_1.default( /*#__PURE__*/FilterAddRegularIcon, 'FilterAddRegular');

const FilterDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.73 10.25A5.46 5.46 0 0 0 14 11c0 .41-.34.75-.75.75h-8.5a.75.75 0 0 1 0-1.5h6.98ZM9.03 6c.04.52.16 1.03.34 1.5H2.75a.75.75 0 0 1 0-1.5h6.27ZM12 15.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75ZM14.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7L15.21 5.5l1.14 1.15a.5.5 0 0 1-.7.7L14.5 6.21l-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.FilterDismissFilled = wrapIcon_1.default( /*#__PURE__*/FilterDismissFilledIcon, 'FilterDismissFilled');

const FilterDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.2 7H2.42a.5.5 0 0 0 .09 1h7.1c-.16-.32-.3-.65-.4-1Zm2.8 8.5a.5.5 0 0 0-.5-.5H6.41a.5.5 0 0 0 .09 1h5.09a.5.5 0 0 0 .41-.5Zm1.5-4.5H4.41a.5.5 0 0 0 .09 1h9.09a.5.5 0 0 0-.09-1Zm1-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7L15.21 5.5l1.14 1.15a.5.5 0 0 1-.7.7L14.5 6.21l-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.FilterDismissRegular = wrapIcon_1.default( /*#__PURE__*/FilterDismissRegularIcon, 'FilterDismissRegular');

const FilterSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM14 10.98a5.46 5.46 0 0 1-2.27-.73H4.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.77ZM9.37 7.5c-.18-.47-.3-.98-.35-1.5H2.75a.75.75 0 0 0 0 1.5h6.62Zm1.88 7a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z",
    fill: primaryFill
  }));
};

exports.FilterSyncFilled = wrapIcon_1.default( /*#__PURE__*/FilterSyncFilledIcon, 'FilterSyncFilled');

const FilterSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM2.5 7h6.7c.1.35.24.68.4 1H2.5a.5.5 0 0 1-.09-1h.09Zm9 8a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h5.09Zm-7-4h9a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1h.09Z",
    fill: primaryFill
  }));
};

exports.FilterSyncRegular = wrapIcon_1.default( /*#__PURE__*/FilterSyncRegularIcon, 'FilterSyncRegular');

const FingerprintFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.83 4.18c1.47-.72 4.65-1.4 8.26.95a.75.75 0 0 0 .82-1.26C11.79 1.2 8.03 1.93 6.17 2.82a.75.75 0 1 0 .66 1.36Zm-1.71.27c.23.35.13.82-.22 1.04a5.1 5.1 0 0 0-1.25 1.39.75.75 0 1 1-1.3-.76c.28-.48.99-1.4 1.73-1.88a.75.75 0 0 1 1.04.21Zm5.38-.16a.75.75 0 0 0 0 1.5c1.55 0 5.3 1.3 6.26 6.35a.75.75 0 1 0 1.48-.28C17.1 6 12.67 4.29 10.5 4.29Zm-1.51.78a.75.75 0 0 1-.45.96C4.6 7.46 3.61 11.23 4 13.89a.75.75 0 1 1-1.48.22c-.44-3.1.69-7.74 5.52-9.5.39-.13.82.07.96.46Zm-.87 3.92c-1.6 1.24-2.58 3.92-.95 7.17a.75.75 0 0 1-1.34.68c-1.92-3.82-.87-7.3 1.37-9.04a5.07 5.07 0 0 1 3.92-1.05 5.72 5.72 0 0 1 3.81 2.67.75.75 0 0 1-1.25.83 4.23 4.23 0 0 0-2.8-2.02A3.57 3.57 0 0 0 8.12 9Zm7.63 2.97a.75.75 0 1 0-1.5.08c.1 1.91 1.29 2.94 2.02 3.17a.75.75 0 1 0 .45-1.43 1.72 1.72 0 0 1-.5-.43 2.46 2.46 0 0 1-.47-1.4Zm-4.5.54a.75.75 0 0 0-1.5 0c0 1.07.13 1.9.45 2.73.32.8.8 1.55 1.44 2.45a.75.75 0 1 0 1.22-.86 10.4 10.4 0 0 1-1.26-2.14 5.69 5.69 0 0 1-.35-2.18Zm-1.13 4.64C8.05 13.4 8.78 11.58 9.5 11a1.43 1.43 0 0 1 2.3.72c.06.2.12.44.18.77l.04.17c.08.38.18.84.33 1.3.3.95.84 1.99 1.93 2.79a.75.75 0 0 0 .89-1.21 3.93 3.93 0 0 1-1.4-2.04c-.12-.39-.2-.77-.28-1.15l-.04-.16c-.06-.3-.13-.64-.21-.91a2.93 2.93 0 0 0-4.68-1.45c-1.62 1.31-1.92 4.12.25 8.03a.75.75 0 0 0 1.31-.72Z",
    fill: primaryFill
  }));
};

exports.FingerprintFilled = wrapIcon_1.default( /*#__PURE__*/FingerprintFilledIcon, 'FingerprintFilled');

const FingerprintRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.72 3.95c1.53-.74 4.81-1.44 8.5.97a.5.5 0 1 0 .55-.84c-4.03-2.63-7.7-1.9-9.49-1.03a.5.5 0 1 0 .44.9Zm-1.81.64a.5.5 0 0 1-.14.7 5.33 5.33 0 0 0-1.34 1.46.5.5 0 1 1-.86-.5c.27-.46.95-1.34 1.65-1.8a.5.5 0 0 1 .69.14Zm5.59-.05a.5.5 0 1 0 0 1c1.66 0 5.51 1.38 6.5 6.55a.5.5 0 1 0 1-.18c-1.1-5.72-5.43-7.37-7.5-7.37ZM9.34 10.8c-.87.7-1.52 2.69.56 6.46a.5.5 0 1 1-.87.48c-2.15-3.88-1.78-6.52-.32-7.71A2.68 2.68 0 0 1 13 11.35c.08.26.14.58.2.9l.04.15c.08.38.17.78.3 1.18.26.79.67 1.57 1.48 2.16a.5.5 0 0 1-.6.8 5.17 5.17 0 0 1-1.83-2.65c-.15-.46-.25-.9-.33-1.29l-.03-.16a9 9 0 0 0-.19-.8 1.68 1.68 0 0 0-2.7-.84Zm6.16 1.17a.5.5 0 1 0-1 .06c.1 1.8 1.22 2.74 1.85 2.95a.5.5 0 0 0 .3-.96c-.22-.07-1.07-.64-1.15-2.05Zm-4.5.53a.5.5 0 1 0-1 0c0 1.05.13 1.85.44 2.64.3.77.77 1.5 1.4 2.4a.5.5 0 1 0 .82-.58 10.63 10.63 0 0 1-1.3-2.19A5.94 5.94 0 0 1 11 12.5ZM7.97 8.79c-1.72 1.33-2.7 4.14-1.02 7.49a.5.5 0 0 1-.9.44C4.18 13 5.22 9.65 7.35 8a4.82 4.82 0 0 1 3.73-1 5.47 5.47 0 0 1 3.65 2.56.5.5 0 1 1-.84.55 4.48 4.48 0 0 0-2.97-2.12 3.82 3.82 0 0 0-2.95.8Zm.49-3a.5.5 0 1 0-.35-.94c-4.68 1.7-5.79 6.19-5.35 9.22a.5.5 0 1 0 .99-.14c-.4-2.74.62-6.65 4.7-8.14Z",
    fill: primaryFill
  }));
};

exports.FingerprintRegular = wrapIcon_1.default( /*#__PURE__*/FingerprintRegularIcon, 'FingerprintRegular');

const FireFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 11.75c0-.54.06-1.07.19-1.59a5.81 5.81 0 0 1 .86-1.93.65.65 0 0 1 .18-.17.5.5 0 0 1 .48 0c.08.04.14.1.18.17l1.04 1.7c.05.08.1.14.19.18.08.04.16.06.26.07.18 0 .32-.07.42-.2a.76.76 0 0 0 .06-.82c-.21-.46-.39-.91-.52-1.36a4.92 4.92 0 0 1 .12-3.17c.22-.5.52-.92.92-1.27.39-.35.84-.64 1.36-.86A8.09 8.09 0 0 1 11.5 2c.12 0 .23.04.32.12.12.1.18.23.18.38 0 .78.13 1.53.4 2.23.26.71.63 1.38 1.1 2l.87 1.13c.29.38.56.78.8 1.19.25.4.44.84.6 1.28.15.44.22.91.23 1.42a6.5 6.5 0 0 1-.8 3.1 6.57 6.57 0 0 1-2.12 2.27 5.74 5.74 0 0 1-4.71.65 5.6 5.6 0 0 1-1.44-.64 6.5 6.5 0 0 1-2.13-2.27 6.2 6.2 0 0 1-.8-3.1Z",
    fill: primaryFill
  }));
};

exports.FireFilled = wrapIcon_1.default( /*#__PURE__*/FireFilledIcon, 'FireFilled');

const FireRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 11.75c0-.54.06-1.07.19-1.59a5.81 5.81 0 0 1 .86-1.93.65.65 0 0 1 .18-.17.5.5 0 0 1 .48 0c.08.04.14.1.18.17l1.04 1.7c.05.08.1.14.19.18.08.04.16.06.26.07.18 0 .32-.07.42-.2a.76.76 0 0 0 .06-.82c-.21-.46-.39-.91-.52-1.36a4.92 4.92 0 0 1 .12-3.17c.22-.5.52-.92.92-1.27.39-.35.84-.64 1.36-.86A8.09 8.09 0 0 1 11.5 2c.12 0 .23.04.32.12.12.1.18.23.18.38 0 .78.13 1.53.4 2.23.26.71.63 1.38 1.1 2l.87 1.13c.29.38.56.78.8 1.19.25.4.44.84.6 1.28.15.44.22.91.23 1.42a6.5 6.5 0 0 1-.8 3.1 6.57 6.57 0 0 1-2.12 2.27 5.74 5.74 0 0 1-4.71.65 5.6 5.6 0 0 1-1.44-.64 6.5 6.5 0 0 1-2.13-2.27 6.2 6.2 0 0 1-.8-3.1Zm11-.05c0-.4-.08-.8-.23-1.2-.15-.38-.34-.77-.57-1.14a11.4 11.4 0 0 0-.75-1.06c-.27-.34-.52-.66-.75-.98a8.76 8.76 0 0 1-1.14-1.98 7.79 7.79 0 0 1-.54-2.23c-.42.1-.8.25-1.15.43-.35.18-.66.4-.92.67s-.46.58-.6.94c-.14.36-.21.77-.22 1.22 0 .42.06.82.17 1.2.1.38.25.76.44 1.13.07.13.12.27.15.4l.06.45c0 .22-.04.42-.11.62a1.54 1.54 0 0 1-2.76.28 17.2 17.2 0 0 1-.6-.96 5.45 5.45 0 0 0 1.95 6.77 4.84 4.84 0 0 0 7.2-2.55c.23-.64.36-1.31.37-2.01Z",
    fill: primaryFill
  }));
};

exports.FireRegular = wrapIcon_1.default( /*#__PURE__*/FireRegularIcon, 'FireRegular');

const FireplaceFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2a7 7 0 0 0-7 7v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a7 7 0 0 0-7-7ZM4 9a6 6 0 1 1 12 0v5h-3.5c.62-.62 1-1.48 1-2.5 0-1.13-.63-1.97-1.17-2.7l-.13-.16c-.6-.8-1.1-1.57-1.1-2.71a.5.5 0 0 0-.76-.43c-1.4.85-1.45 2.17-1.39 3l-.42-.37a.5.5 0 0 0-.66 0h-.01l-.02.02a2.23 2.23 0 0 0-.2.22A4.85 4.85 0 0 0 6.5 11.5c-.01 1.02.37 1.88 1 2.5H4V9Zm-1.5 7a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.FireplaceFilled = wrapIcon_1.default( /*#__PURE__*/FireplaceFilledIcon, 'FireplaceFilled');

const FireplaceRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 9a7 7 0 0 1 14 0v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Zm7-6a6 6 0 0 0-6 6v5h3.5c-.62-.62-1-1.48-1-2.5a4.85 4.85 0 0 1 1.34-3.35l.02-.01v-.01a.5.5 0 0 1 .65-.02c.02-.28.08-.58.2-.9.25-.63.75-1.24 1.65-1.72a.5.5 0 0 1 .74.44c0 1.14.5 1.9 1.1 2.7l.13.18c.54.72 1.17 1.56 1.17 2.69 0 1.02-.38 1.88-1 2.5H16V9a6 6 0 0 0-6-6ZM8.22 9.25a3.85 3.85 0 0 0-.72 2.25c0 1.49 1.1 2.5 2.5 2.5s2.5-1.01 2.5-2.5c0-.79-.43-1.37-1.02-2.16l-.08-.1c-.48-.65-1-1.4-1.21-2.42a2.03 2.03 0 0 0-.66 1.88c0 .09.02.16.03.23v.05l.03.15c0 .05.02.15 0 .25 0 .05-.02.17-.12.28-.12.15-.3.2-.44.2a.59.59 0 0 1-.25-.09 2.72 2.72 0 0 1-.32-.27l-.24-.25ZM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    fill: primaryFill
  }));
};

exports.FireplaceRegular = wrapIcon_1.default( /*#__PURE__*/FireplaceRegularIcon, 'FireplaceRegular');

const FixedWidthFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3c.28 0 .5.22.5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm6 6H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4.5V9Zm1 8H15a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4.5v8Z",
    fill: primaryFill
  }));
};

exports.FixedWidthFilled = wrapIcon_1.default( /*#__PURE__*/FixedWidthFilledIcon, 'FixedWidthFilled');

const FixedWidthRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3c.28 0 .5.22.5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5ZM3 11c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm7.5 5H15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5v6Zm-1-6H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5v-6Z",
    fill: primaryFill
  }));
};

exports.FixedWidthRegular = wrapIcon_1.default( /*#__PURE__*/FixedWidthRegularIcon, 'FixedWidthRegular');

const FlagFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 13h11a.5.5 0 0 0 .42-.78L13.1 8l2.82-4.22A.5.5 0 0 0 15.5 3H4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Z",
    fill: primaryFill
  }));
};

exports.FlagFilled = wrapIcon_1.default( /*#__PURE__*/FlagFilledIcon, 'FlagFilled');

const FlagRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 13h11a.5.5 0 0 0 .42-.78L13.1 8l2.82-4.22A.5.5 0 0 0 15.5 3H4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Zm0-1V4h10.07l-2.49 3.72a.5.5 0 0 0 0 .56L14.57 12H4.5Z",
    fill: primaryFill
  }));
};

exports.FlagRegular = wrapIcon_1.default( /*#__PURE__*/FlagRegularIcon, 'FlagRegular');

const FlagCheckeredFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.25c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75H6v2.75a.75.75 0 0 1-1.5 0v-14ZM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6v3Z",
    fill: primaryFill
  }));
};

exports.FlagCheckeredFilled = wrapIcon_1.default( /*#__PURE__*/FlagCheckeredFilledIcon, 'FlagCheckeredFilled');

const FlagCheckeredRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5H6v3.5a.5.5 0 0 1-1 0v-14ZM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6v3Z",
    fill: primaryFill
  }));
};

exports.FlagCheckeredRegular = wrapIcon_1.default( /*#__PURE__*/FlagCheckeredRegularIcon, 'FlagCheckeredRegular');

const FlagOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21V17.5a.5.5 0 0 0 1 0V13h7.8l4.85 4.85a.5.5 0 0 0 .7-.7L3.77 3.05l-.92-.9ZM15.5 13h-.38l-10-10H15.5c.4 0 .64.45.42.78L13.1 8l2.82 4.22a.5.5 0 0 1-.42.78Z",
    fill: primaryFill
  }));
};

exports.FlagOffFilled = wrapIcon_1.default( /*#__PURE__*/FlagOffFilledIcon, 'FlagOffFilled');

const FlagOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21V17.5a.5.5 0 0 0 1 0V13h7.8l4.85 4.85a.5.5 0 0 0 .7-.7L3.77 3.05l-.92-.9ZM11.3 12H4.5V5.2l6.8 6.8Zm3.28 0h-.45l1 1h.38a.5.5 0 0 0 .42-.78L13.1 8l2.82-4.22A.5.5 0 0 0 15.5 3H5.12l1 1h8.45l-2.49 3.72a.5.5 0 0 0 0 .56L14.57 12Z",
    fill: primaryFill
  }));
};

exports.FlagOffRegular = wrapIcon_1.default( /*#__PURE__*/FlagOffRegularIcon, 'FlagOffRegular');

const FlagPrideFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#745125",
    d: "M4 4h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#E62C46",
    d: "M4 5h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#F36D38",
    d: "M4 6h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#FFD23E",
    d: "M4 7h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#61BC51",
    d: "M4 8h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#1793E8",
    d: "M4 9h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    fill: "#B73FBB",
    d: "M4 10h12v1H4z"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3h13c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5H4v5.5a.5.5 0 0 1-1 0v-14c0-.28.22-.5.5-.5ZM4 4v7h12V4H4Z",
    fill: primaryFill
  }));
};

exports.FlagPrideFilled = wrapIcon_1.default( /*#__PURE__*/FlagPrideFilledIcon, 'FlagPrideFilled');

const FlashFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l8.67-8.86c.65-.68.19-1.82-.76-1.82H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2Z",
    fill: primaryFill
  }));
};

exports.FlashFilled = wrapIcon_1.default( /*#__PURE__*/FlashFilledIcon, 'FlashFilled');

const FlashRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.95 0 1.4 1.14.77 1.81l-8.68 8.86c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77ZM7.2 3a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 0 1 .49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 8.68-8.86a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21Z",
    fill: primaryFill
  }));
};

exports.FlashRegular = wrapIcon_1.default( /*#__PURE__*/FlashRegularIcon, 'FlashRegular');

const FlashAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 0 1 6.22-6.35l.24-.24c.65-.68.19-1.82-.76-1.82h-2.56l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.FlashAddFilled = wrapIcon_1.default( /*#__PURE__*/FlashAddFilledIcon, 'FlashAddFilled');

const FlashAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81l-.24.25a5.54 5.54 0 0 0-1.38-.03l.9-.91a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 0 1 .49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 2.88-2.94a5.58 5.58 0 0 0 .05 1.37l-2.21 2.26c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.FlashAddRegular = wrapIcon_1.default( /*#__PURE__*/FlashAddRegularIcon, 'FlashAddRegular');

const FlashAutoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.82-4.93 1.42-3.78a1.5 1.5 0 0 1 2.6-.37c.38-.68-.08-1.6-.93-1.6H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2Zm7.29 7c.2 0 .4.13.47.32l3 8a.5.5 0 1 1-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 14.5 9Zm1.15 5-1.15-3.08L13.35 14h2.3Z",
    fill: primaryFill
  }));
};

exports.FlashAutoFilled = wrapIcon_1.default( /*#__PURE__*/FlashAutoFilledIcon, 'FlashAutoFilled');

const FlashAutoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.85 0 1.3.92.93 1.6a1.5 1.5 0 0 0-.88-.57.07.07 0 0 0-.02-.02L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 0 1 .49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 6.4-6.55-.86 2.32-4.82 4.92c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77ZM14.5 9c.2 0 .4.13.47.32l3 8a.5.5 0 1 1-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 14.5 9Zm1.15 5-1.15-3.08L13.35 14h2.3Z",
    fill: primaryFill
  }));
};

exports.FlashAutoRegular = wrapIcon_1.default( /*#__PURE__*/FlashAutoRegularIcon, 'FlashAutoRegular');

const FlashCheckmarkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 0 1 6.22-6.35l.24-.24c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.FlashCheckmarkFilled = wrapIcon_1.default( /*#__PURE__*/FlashCheckmarkFilledIcon, 'FlashCheckmarkFilled');

const FlashCheckmarkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.19 2.77c.13-.46.55-.77 1.02-.77h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81l-.24.25a5.55 5.55 0 0 0-1.37-.03l.9-.91a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.49-4.25a.06.06 0 0 0-.06-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 0 1 .5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 2.89-2.95a5.57 5.57 0 0 0 .05 1.38l-2.22 2.26c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l2.25-7.87ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.FlashCheckmarkRegular = wrapIcon_1.default( /*#__PURE__*/FlashCheckmarkRegularIcon, 'FlashCheckmarkRegular');

const FlashFlowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.81-4.92-.25-.76h-.18a3 3 0 1 1 .59-3A2.5 2.5 0 0 1 14 10.37l1.52-1.55c.65-.68.19-1.82-.76-1.82h-2.56l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2Zm10.72 13.77A2.01 2.01 0 0 0 19 14a2 2 0 0 0-3.73-1h-1.05a.5.5 0 0 1-.47-.34l-.55-1.63A1.5 1.5 0 0 0 11.78 10H11a2 2 0 1 0-.27 1h1.05c.21 0 .4.14.47.34l.55 1.63V13a1.5 1.5 0 0 0 1.42 1H15a2 2 0 0 0 2.93 1.77Zm-.44-.9a1 1 0 0 1-1.49-.86V14a1 1 0 0 1 2-.01V14a1 1 0 0 1-.51.87ZM10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.FlashFlowFilled = wrapIcon_1.default( /*#__PURE__*/FlashFlowFilledIcon, 'FlashFlowFilled');

const FlashFlowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81L14 10.38a2.5 2.5 0 0 0-.63-.79l1.44-1.46a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.21a3 3 0 0 0 1 1.38l-1.14 4.54v.04l.03.03.04.01h.01l.03-.02 4.2-4.3c.34-.17.65-.4.9-.68h.18l.25.76-4.81 4.91c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77Zm12.52 12.25A2.01 2.01 0 0 1 17 16a2 2 0 0 1-2-2h-.78a1.5 1.5 0 0 1-1.41-1l-.01-.03-.55-1.63a.5.5 0 0 0-.47-.34h-1.05a2 2 0 1 1 .27-1h.78c.64 0 1.22.41 1.42 1.03l.55 1.63c.06.2.26.34.47.34h1.05a2 2 0 1 1 3.45 2.02ZM17 15a1 1 0 0 0 1-1v-.05a1 1 0 0 0-2 .05v.02a1 1 0 0 0 1 .98Zm-8-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.FlashFlowRegular = wrapIcon_1.default( /*#__PURE__*/FlashFlowRegularIcon, 'FlashFlowRegular');

const FlashOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m11.86 12.56 5.29 5.3a.5.5 0 0 0 .7-.71l-15-15a.5.5 0 1 0-.7.7l3.12 3.13-1.33 4.66c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l5-5.12Zm3.67-3.74-2.27 2.32L5.9 3.78l.29-1C6.32 2.3 6.74 2 7.21 2h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81Z",
    fill: primaryFill
  }));
};

exports.FlashOffFilled = wrapIcon_1.default( /*#__PURE__*/FlashOffFilledIcon, 'FlashOffFilled');

const FlashOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.27 5.98 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.3-5.29-5 5.11c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l1.33-4.66Zm5.88 5.88L6.08 6.79 4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 0 1 .5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 5.02-5.12Zm3.66-3.74-2.26 2.3.7.72 2.28-2.32c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21c-.47 0-.89.31-1.02.77L5.9 3.78l.81.8.44-1.53c0-.03.03-.05.06-.05h5.25c.04 0 .07.04.06.08l-1.5 4.25a.5.5 0 0 0 .48.67h3.3l.02.04.01.05-.02.03Z",
    fill: primaryFill
  }));
};

exports.FlashOffRegular = wrapIcon_1.default( /*#__PURE__*/FlashOffRegularIcon, 'FlashOffRegular');

const FlashPlayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 0 1 6.22-6.35l.24-.24c.65-.68.19-1.82-.76-1.82h-2.56l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
};

exports.FlashPlayFilled = wrapIcon_1.default( /*#__PURE__*/FlashPlayFilledIcon, 'FlashPlayFilled');

const FlashPlayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81l-.24.25a5.54 5.54 0 0 0-1.38-.03l.9-.91a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 0 1 .49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 2.88-2.94a5.58 5.58 0 0 0 .05 1.37l-2.21 2.26c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
};

exports.FlashPlayRegular = wrapIcon_1.default( /*#__PURE__*/FlashPlayRegularIcon, 'FlashPlayRegular');

const FlashSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 0 1 6.22-6.35l.24-.24c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21Zm4.86 9.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.FlashSettingsFilled = wrapIcon_1.default( /*#__PURE__*/FlashSettingsFilledIcon, 'FlashSettingsFilled');

const FlashSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.19 2.77c.13-.46.55-.77 1.02-.77h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81l-.24.25a5.55 5.55 0 0 0-1.37-.03l.9-.91a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.49-4.25a.06.06 0 0 0-.06-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 0 1 .5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 2.89-2.95a5.57 5.57 0 0 0 .05 1.38l-2.22 2.26c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l2.25-7.87Zm5.88 8.67a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.FlashSettingsRegular = wrapIcon_1.default( /*#__PURE__*/FlashSettingsRegularIcon, 'FlashSettingsRegular');

const FlashlightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.96 1.17c.27 0 .5.22.5.5v.83a.5.5 0 1 1-1 0v-.83c0-.28.22-.5.5-.5Zm3.9.98c.19.2.19.5 0 .7l-1.5 1.5a.5.5 0 1 1-.71-.7l1.5-1.5c.2-.2.5-.2.7 0ZM7 5.2v2.58l5.2 5.2h2.6L7 5.22Zm8.7 7.29 1.1-1.09a2 2 0 0 0 0-2.82L11.4 3.2a2 2 0 0 0-2.82 0L7.5 4.29l8.2 8.2Zm-4.7.7L6.8 9l-4.1 4.09a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0L11 13.21Zm-3.15-.35-1 1a.5.5 0 0 1-.7-.7l1-1a.5.5 0 1 1 .7.7ZM17 6.05c0-.29.22-.5.5-.5h.83a.5.5 0 1 1 0 1h-.83a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.FlashlightFilled = wrapIcon_1.default( /*#__PURE__*/FlashlightFilledIcon, 'FlashlightFilled');

const FlashlightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.46 1.67a.5.5 0 0 0-1 0v.83a.5.5 0 1 0 1 0v-.83Zm3.4 1.18a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 .7.7l1.5-1.5Zm-10 10a.5.5 0 0 0-.71-.7l-1 1a.5.5 0 1 0 .7.7l1-1ZM7 5v3.8l-4.3 4.29a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0l4.3-4.3H15a.5.5 0 0 0 .35-.14l1.44-1.44a2 2 0 0 0 0-2.82L11.41 3.2a2 2 0 0 0-2.82 0L7.15 4.65A.5.5 0 0 0 7 5ZM9.3 3.9a1 1 0 0 1 1.4 0L16.1 9.3a1 1 0 0 1 0 1.42L15 11.79 8.2 5l1.1-1.08ZM8 6.21 13.8 12h-2.6L8 8.8V6.2Zm-.5 3.5 2.8 2.79-4.1 4.09a1 1 0 0 1-1.4 0L3.4 15.2a1 1 0 0 1 0-1.42L7.5 9.71Zm10-4.17a.5.5 0 0 0 0 1h.83a.5.5 0 0 0 0-1h-.83Z",
    fill: primaryFill
  }));
};

exports.FlashlightRegular = wrapIcon_1.default( /*#__PURE__*/FlashlightRegularIcon, 'FlashlightRegular');

const FlashlightOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l15 15a.5.5 0 0 0 .7-.7l-15-15ZM16.8 11.4l-1.08 1.09L7.5 4.3l1.09-1.1a2 2 0 0 1 2.82 0L16.8 8.6a2 2 0 0 1 0 2.82ZM6.8 9 11 13.2l-4.09 4.1a2 2 0 0 1-2.82 0L2.7 15.9a2 2 0 0 1 0-2.82L6.79 9Zm.06 4.85 1-1a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 1 0 .7.7Z",
    fill: primaryFill
  }));
};

exports.FlashlightOffFilled = wrapIcon_1.default( /*#__PURE__*/FlashlightOffFilledIcon, 'FlashlightOffFilled');

const FlashlightOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v1.08l-4.3 4.3a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0l4.3-4.29h1.08l4.86 4.85a.5.5 0 0 0 .7-.7l-15-15Zm12.67 9.13-1.06 1.06.65.65a.5.5 0 0 0 .24-.14l1.44-1.44a2 2 0 0 0 0-2.82L11.41 3.2a2 2 0 0 0-2.82 0L7.15 4.65a.5.5 0 0 0-.14.24l.65.65L9.3 3.91a1 1 0 0 1 1.42 0l5.38 5.38a1 1 0 0 1 0 1.42l-.57.57Zm-7.67 1.57a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 1 0 .7.7l1-1ZM7.5 9.71l2.8 2.79-4.1 4.09a1 1 0 0 1-1.4 0L3.4 15.2a1 1 0 0 1 0-1.42L7.5 9.71Z",
    fill: primaryFill
  }));
};

exports.FlashlightOffRegular = wrapIcon_1.default( /*#__PURE__*/FlashlightOffRegularIcon, 'FlashlightOffRegular');

const FlipHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.88 15.66a.75.75 0 0 1-.63.34h-5.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.44-.3l5.5 12.5c.1.23.08.5-.06.71ZM12.5 6.32v8.18h3.6l-3.6-8.18ZM2.5 16a.5.5 0 0 1-.45-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5h-6Z",
    fill: primaryFill
  }));
};

exports.FlipHorizontalFilled = wrapIcon_1.default( /*#__PURE__*/FlipHorizontalFilledIcon, 'FlipHorizontalFilled');

const FlipHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.92 15.77a.5.5 0 0 1-.42.23h-6a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .95-.2l6 13a.5.5 0 0 1-.03.47ZM12 4.77V15h4.72L12 4.78ZM2.5 16a.5.5 0 0 1-.45-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5h-6Z",
    fill: primaryFill
  }));
};

exports.FlipHorizontalRegular = wrapIcon_1.default( /*#__PURE__*/FlipHorizontalRegularIcon, 'FlipHorizontalRegular');

const FlipVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.66 2.12c.21.14.34.38.34.63v5.5c0 .41-.34.75-.75.75H2.75a.75.75 0 0 1-.3-1.44l12.5-5.5c.23-.1.5-.08.71.06ZM6.32 7.5h8.18V3.9L6.32 7.5Zm9.68 10a.5.5 0 0 1-.71.45l-13-6A.5.5 0 0 1 2.5 11h13c.28 0 .5.22.5.5v6Z",
    fill: primaryFill
  }));
};

exports.FlipVerticalFilled = wrapIcon_1.default( /*#__PURE__*/FlipVerticalFilledIcon, 'FlipVerticalFilled');

const FlipVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.77 2.08c.14.1.23.25.23.42v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.2-.95l13-6a.5.5 0 0 1 .47.03ZM4.77 8H15V3.28L4.78 8ZM16 17.5a.5.5 0 0 1-.71.45l-13-6A.5.5 0 0 1 2.5 11h13c.28 0 .5.22.5.5v6Z",
    fill: primaryFill
  }));
};

exports.FlipVerticalRegular = wrapIcon_1.default( /*#__PURE__*/FlipVerticalRegularIcon, 'FlipVerticalRegular');

const FlowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 4a3 3 0 0 0-2.96 2.5A2.5 2.5 0 0 0 9.73 8.6l-.44 2.66a1.5 1.5 0 0 1-1.33 1.24 3 3 0 1 0 0 1 2.5 2.5 0 0 0 2.31-2.08l.44-2.66a1.5 1.5 0 0 1 1.33-1.24A3 3 0 1 0 15 4Z",
    fill: primaryFill
  }));
};

exports.FlowFilled = wrapIcon_1.default( /*#__PURE__*/FlowFilledIcon, 'FlowFilled');

const FlowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2.96 1.5a3 3 0 1 1 0 1 1.5 1.5 0 0 0-1.33 1.25l-.44 2.66a2.5 2.5 0 0 1-2.31 2.09 3 3 0 1 1 0-1 1.5 1.5 0 0 0 1.33-1.25l.44-2.66a2.5 2.5 0 0 1 2.31-2.09ZM5 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    fill: primaryFill
  }));
};

exports.FlowRegular = wrapIcon_1.default( /*#__PURE__*/FlowRegularIcon, 'FlowRegular');

const FlowchartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4.5C3 3.67 3.67 3 4.5 3h2C7.33 3 8 3.67 8 4.5v2C8 7.33 7.33 8 6.5 8H6v3.84a1 1 0 0 1 .2.16L8 13.8a1 1 0 0 1 .16.2H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V15H8.16a1 1 0 0 1-.16.2L6.2 17a1 1 0 0 1-1.4 0L3 15.2a1 1 0 0 1 0-1.4L4.8 12a1 1 0 0 1 .2-.16V8h-.5A1.5 1.5 0 0 1 3 6.5v-2Z",
    fill: primaryFill
  }));
};

exports.FlowchartFilled = wrapIcon_1.default( /*#__PURE__*/FlowchartFilledIcon, 'FlowchartFilled');

const FlowchartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3C3.67 3 3 3.67 3 4.5v2C3 7.33 3.67 8 4.5 8H5v3.84a1 1 0 0 0-.2.16L3 13.8a1 1 0 0 0 0 1.4L4.8 17a1 1 0 0 0 1.4 0L8 15.2a1 1 0 0 0 .16-.2H12v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v.5H8.16a1 1 0 0 0-.16-.2L6.2 12a1 1 0 0 0-.2-.16V8h.5C7.33 8 8 7.33 8 6.5v-2C8 3.67 7.33 3 6.5 3h-2ZM4 4.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Zm-.3 10 1.8-1.8 1.8 1.8-1.8 1.8-1.8-1.8Zm9.8-1.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.FlowchartRegular = wrapIcon_1.default( /*#__PURE__*/FlowchartRegularIcon, 'FlowchartRegular');

const FlowchartCircleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4-3.5v2c0 .28.22.5.5.5H7v1.8l-1.35 1.35a.5.5 0 0 0 0 .7l1.5 1.5c.2.2.5.2.7 0L9.21 13H11v.5c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5H9.2L8 10.8V9h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.FlowchartCircleFilled = wrapIcon_1.default( /*#__PURE__*/FlowchartCircleFilledIcon, 'FlowchartCircleFilled');

const FlowchartCircleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H8v1.8L9.2 12H11v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V13H9.2l-1.35 1.35a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 0-.7L7 10.79V9h-.5a.5.5 0 0 1-.5-.5v-2ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
};

exports.FlowchartCircleRegular = wrapIcon_1.default( /*#__PURE__*/FlowchartCircleRegularIcon, 'FlowchartCircleRegular');

const FluentFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.28 2.05a.5.5 0 0 1 .44 0l5 2.5a.5.5 0 0 1 0 .9l-4.1 2.05 4.1 2.05a.5.5 0 0 1 0 .9L11 12.8v4.69a.5.5 0 0 1-.76.43l-5-3A.5.5 0 0 1 5 14.5V5c0-.19.1-.36.28-.45l5-2.5Z",
    fill: primaryFill
  }));
};

exports.FluentFilled = wrapIcon_1.default( /*#__PURE__*/FluentFilledIcon, 'FluentFilled');

const FluentRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.28 2.05a.5.5 0 0 1 .44 0l5 2.5a.5.5 0 0 1 0 .9l-4.1 2.05 4.1 2.05a.5.5 0 0 1 0 .9L11 12.8v4.69a.5.5 0 0 1-.76.43l-5-3A.5.5 0 0 1 5 14.5V5c0-.19.1-.36.28-.45l5-2.5ZM11 11.7 14.38 10 11 8.3v3.4Zm-1-3.38L6.62 10 10 11.7V8.3Zm0-1.62V3.31L6.62 5 10 6.7Zm-4-.88v3.38L9.38 7.5 6 5.8Zm0 5v3.4l4 2.4v-3.8l-4-2Zm5-7.5v3.38L14.38 5 11 3.3Z",
    fill: primaryFill
  }));
};

exports.FluentRegular = wrapIcon_1.default( /*#__PURE__*/FluentRegularIcon, 'FluentRegular');

const FluidFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v2.04c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 5.54V3.5ZM8 4h5.5c.83 0 1.5.67 1.5 1.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8V4ZM5 8v5.5c0 .28.22.5.5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8h1Zm6.5 2c-.82 0-1.5.67-1.5 1.5v5c0 .83.68 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Z",
    fill: primaryFill
  }));
};

exports.FluidFilled = wrapIcon_1.default( /*#__PURE__*/FluidFilledIcon, 'FluidFilled');

const FluidRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 4h5.5c.83 0 1.5.67 1.5 1.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8V4ZM5 8v5.5c0 .28.22.5.5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8h1ZM2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v2.04c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 5.54V3.5ZM3.5 3a.5.5 0 0 0-.5.5v2.04c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-2Zm6.5 8.5c0-.83.68-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5Zm1.5-.5a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
    fill: primaryFill
  }));
};

exports.FluidRegular = wrapIcon_1.default( /*#__PURE__*/FluidRegularIcon, 'FluidRegular');

const FolderFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.56 4.5h4.94a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 0 1-2.34 2.5H4.5A2.5 2.5 0 0 1 2 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54ZM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 0 1-.22.1H2v-1A2.5 2.5 0 0 1 4.34 3h2.83Z",
    fill: primaryFill
  }));
};

exports.FolderFilled = wrapIcon_1.default( /*#__PURE__*/FolderFilledIcon, 'FolderFilled');

const FolderRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 0 1-2.34 2.5H4.5A2.5 2.5 0 0 1 2 14.66V5.5A2.5 2.5 0 0 1 4.34 3h2.83Zm.99 4.03a1.5 1.5 0 0 1-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5H15.5c.78 0 1.42-.6 1.5-1.36V7c0-.78-.6-1.42-1.36-1.5H9.62L8.16 7.03ZM7.16 4H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 0 0 .3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 0 0-.22-.1h-.08Z",
    fill: primaryFill
  }));
};

exports.FolderRegular = wrapIcon_1.default( /*#__PURE__*/FolderRegularIcon, 'FolderRegular');

const FolderAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94Zm8.44 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.FolderAddFilled = wrapIcon_1.default( /*#__PURE__*/FolderAddFilledIcon, 'FolderAddFilled');

const FolderAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v2.6c.36.18.7.4 1 .66V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1Zm16 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.FolderAddRegular = wrapIcon_1.default( /*#__PURE__*/FolderAddRegularIcon, 'FolderAddRegular');

const FolderArrowLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.07 3.3 1.32.99-1.96 2.05a.5.5 0 0 1-.36.16H2v-1A2.5 2.5 0 0 1 4.5 3h2.67c.32 0 .64.1.9.3Zm.09 3.73c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94l-2.4 2.53ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowLeftFilled = wrapIcon_1.default( /*#__PURE__*/FolderArrowLeftFilledIcon, 'FolderArrowLeftFilled');

const FolderArrowLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.67c.32 0 .64.1.9.3l1.6 1.2h5.83A2.5 2.5 0 0 1 18 7v3.26a5.5 5.5 0 0 0-1-.66V7c0-.83-.67-1.5-1.5-1.5H9.62L8.16 7.03c-.29.3-.68.47-1.09.47H3v7c0 .83.67 1.5 1.5 1.5h4.7c.1.35.24.68.4 1H4.5A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4C3.67 4 3 4.67 3 5.5v1h4.07a.5.5 0 0 0 .36-.16L8.7 5.02 7.47 4.1a.5.5 0 0 0-.3-.1H4.5Zm10 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowLeftRegular = wrapIcon_1.default( /*#__PURE__*/FolderArrowLeftRegularIcon, 'FolderArrowLeftRegular');

const FolderArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/FolderArrowRightFilledIcon, 'FolderArrowRightFilled');

const FolderArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v2.6c.36.18.7.4 1 .66V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/FolderArrowRightRegularIcon, 'FolderArrowRightRegular');

const FolderArrowUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.07 3.3 1.32.99-1.96 2.05a.5.5 0 0 1-.36.16H2v-1A2.5 2.5 0 0 1 4.5 3h2.67c.32 0 .64.1.9.3Zm.09 3.73 2.4-2.53h4.94A2.5 2.5 0 0 1 18 6.84v3.42A5.5 5.5 0 0 0 9.6 17H4.5A2.5 2.5 0 0 1 2 14.5v-7h5.07c.41 0 .8-.17 1.09-.47ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 1 0 1 0v-2.8l1.15 1.15a.5.5 0 1 0 .7-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowUpFilled = wrapIcon_1.default( /*#__PURE__*/FolderArrowUpFilledIcon, 'FolderArrowUpFilled');

const FolderArrowUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3h2.67c.32 0 .64.1.9.3l1.6 1.2h5.83A2.5 2.5 0 0 1 18 7v3.26a5.5 5.5 0 0 0-1-.66V7c0-.83-.67-1.5-1.5-1.5H9.62L8.16 7.03c-.29.3-.68.47-1.09.47H3v7c0 .83.67 1.5 1.5 1.5h4.7c.1.35.24.68.4 1H4.5A2.5 2.5 0 0 1 2 14.5v-9A2.5 2.5 0 0 1 4.5 3ZM3 5.5v1h4.07a.5.5 0 0 0 .36-.16L8.7 5.02 7.47 4.1a.5.5 0 0 0-.3-.1H4.5C3.67 4 3 4.67 3 5.5Zm16 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 1 0 1 0v-2.8l1.15 1.15a.5.5 0 1 0 .7-.7l-2-2Z",
    fill: primaryFill
  }));
};

exports.FolderArrowUpRegular = wrapIcon_1.default( /*#__PURE__*/FolderArrowUpRegularIcon, 'FolderArrowUpRegular');

const FolderBriefcaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m8.07 3.3 1.32.99-1.96 2.05a.5.5 0 0 1-.36.16H2v-1A2.5 2.5 0 0 1 4.5 3h2.67c.32 0 .64.1.9.3Zm.09 3.73 2.4-2.53h4.94A2.5 2.5 0 0 1 18 6.84v4.33a3 3 0 0 0-1-.17v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a3 3 0 0 0-3 3v3H4.5A2.5 2.5 0 0 1 2 14.5v-7h5.07c.41 0 .8-.17 1.09-.47ZM11 12a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v-1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12h-1Zm2 0v-1h2v1h-2Z",
    fill: primaryFill
  }));
};

exports.FolderBriefcaseFilled = wrapIcon_1.default( /*#__PURE__*/FolderBriefcaseFilledIcon, 'FolderBriefcaseFilled');

const FolderBriefcaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17H8v-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v4a3 3 0 0 1 1 .17V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1Zm9 5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2h1v-1.5Zm3 .5h-2v1h2v-1Z",
    fill: primaryFill
  }));
};

exports.FolderBriefcaseRegular = wrapIcon_1.default( /*#__PURE__*/FolderBriefcaseRegularIcon, 'FolderBriefcaseRegular');

const FolderGlobeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94Zm2.45 9.5a8.9 8.9 0 0 1 .54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98Zm-.39-3.22.2-.46a4.5 4.5 0 0 0-2.8 3.68h1.99c.05-1.23.27-2.36.61-3.22Zm3.76 0a5.29 5.29 0 0 0-.21-.46c1.51.6 2.62 2 2.8 3.68H17a9.92 9.92 0 0 0-.61-3.22Zm.61 4.22h1.98a4.5 4.5 0 0 1-2.8 3.68 9.92 9.92 0 0 0 .82-3.68Zm-2.07 3.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 0 1-.54-2.85h2.98a8.9 8.9 0 0 1-.54 2.85c-.17.42-.35.72-.53.91ZM10.02 15a4.5 4.5 0 0 0 2.8 3.68l-.2-.46a9.92 9.92 0 0 1-.61-3.22h-1.98Z",
    fill: primaryFill
  }));
};

exports.FolderGlobeFilled = wrapIcon_1.default( /*#__PURE__*/FolderGlobeFilledIcon, 'FolderGlobeFilled');

const FolderGlobeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v2.6c.36.18.7.4 1 .66V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1ZM13.01 14a8.9 8.9 0 0 1 .54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98Zm-.39-3.22.2-.46a4.5 4.5 0 0 0-2.8 3.68h1.99c.05-1.23.27-2.36.61-3.22Zm3.76 0a5.29 5.29 0 0 0-.21-.46c1.51.6 2.62 2 2.8 3.68H17a9.92 9.92 0 0 0-.61-3.22Zm.61 4.22h1.98a4.5 4.5 0 0 1-2.8 3.68 9.92 9.92 0 0 0 .82-3.68Zm-2.07 3.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 0 1-.54-2.85h2.98a8.9 8.9 0 0 1-.54 2.85c-.17.42-.35.72-.53.91ZM10.02 15a4.5 4.5 0 0 0 2.8 3.68l-.2-.46a9.92 9.92 0 0 1-.61-3.22h-1.98Z",
    fill: primaryFill
  }));
};

exports.FolderGlobeRegular = wrapIcon_1.default( /*#__PURE__*/FolderGlobeRegularIcon, 'FolderGlobeRegular');

const FolderLinkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h2.26a4.5 4.5 0 0 1 3.74-7h5c.93 0 1.79.28 2.5.76V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94ZM8 14.5a2.5 2.5 0 0 1 2.5-2.5h1a.5.5 0 0 0 0-1h-1a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 8 14.5Zm10 0a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 1 1 0 7h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0 2.5-2.5Zm-8 0c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.FolderLinkFilled = wrapIcon_1.default( /*#__PURE__*/FolderLinkFilledIcon, 'FolderLinkFilled');

const FolderLinkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h2.26c-.2-.3-.38-.64-.5-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v3.26c.36.12.7.3 1 .5V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1Zm5 9a2.5 2.5 0 0 1 2.5-2.5h1a.5.5 0 0 0 0-1h-1a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 8 14.5Zm10 0a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 1 1 0 7h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0 2.5-2.5Zm-8 0c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.FolderLinkRegular = wrapIcon_1.default( /*#__PURE__*/FolderLinkRegularIcon, 'FolderLinkRegular');

const FolderMailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 4.5h-4.94l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 0 0 4.5 17H9v-3.5a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05V6.84l-.02-.17A2.5 2.5 0 0 0 15.5 4.5ZM7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v1h5.15a.5.5 0 0 0 .22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09Zm6.58 12.72-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z",
    fill: primaryFill
  }));
};

exports.FolderMailFilled = wrapIcon_1.default( /*#__PURE__*/FolderMailFilledIcon, 'FolderMailFilled');

const FolderMailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v9.16A2.5 2.5 0 0 0 4.5 17H9v-1H4.36A1.5 1.5 0 0 1 3 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0 1 17 7v4h.5c.17 0 .34.02.5.05V6.84l-.02-.17A2.5 2.5 0 0 0 15.5 4.5H9.67l-1.6-1.2-.14-.09ZM4.5 4h2.75a.5.5 0 0 1 .22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 0 1-.3.1H3V5.36A1.5 1.5 0 0 1 4.5 4Zm10.01 11.93-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z",
    fill: primaryFill
  }));
};

exports.FolderMailRegular = wrapIcon_1.default( /*#__PURE__*/FolderMailRegularIcon, 'FolderMailRegular');

const FolderOpenFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.66c.33 0 .64.1.9.3l1.6 1.2h4.84A2.5 2.5 0 0 1 17 7H5.82c-.71 0-1.33.51-1.47 1.22L2.77 16.3A2.5 2.5 0 0 1 2 14.5v-9Zm1.77 10.9c-.06.32.18.6.5.6h10.91c.72 0 1.34-.5 1.47-1.21l1.4-7.2a.5.5 0 0 0-.5-.59H5.83a.5.5 0 0 0-.49.4l-1.56 8Z",
    fill: primaryFill
  }));
};

exports.FolderOpenFilled = wrapIcon_1.default( /*#__PURE__*/FolderOpenFilledIcon, 'FolderOpenFilled');

const FolderOpenRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 7.07V7a2.5 2.5 0 0 0-2.5-2.5H9.66l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.46 17h10.72c.72 0 1.34-.5 1.47-1.21l1.36-7A1.5 1.5 0 0 0 17 7.07ZM4.5 4h2.66c.11 0 .22.04.3.1L9.2 5.4c.08.06.19.1.3.1h5c.82 0 1.5.67 1.5 1.5H5.82c-.71 0-1.33.51-1.47 1.22l-1.3 6.67a1.5 1.5 0 0 1-.05-.4V5.5C3 4.67 3.67 4 4.5 4Zm.83 4.4a.5.5 0 0 1 .5-.4h10.7a.5.5 0 0 1 .5.6l-1.36 7a.5.5 0 0 1-.49.4H4.46a.5.5 0 0 1-.49-.6l1.36-7Z",
    fill: primaryFill
  }));
};

exports.FolderOpenRegular = wrapIcon_1.default( /*#__PURE__*/FolderOpenRegularIcon, 'FolderOpenRegular');

const FolderOpenVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.14 2.87c-.1.2-.14.4-.14.63v10.63a2.5 2.5 0 0 0 1.6 2.33l4.36 1.68c.35.14.72.13 1.04.02V6.56a1.5 1.5 0 0 0-.96-1.39l-5.9-2.3Zm.8-.76 5.47 2.13A2.5 2.5 0 0 1 12 6.57V16h1.5c.83 0 1.5-.67 1.5-1.5v-2.94l.96-3.82c.02-.12.04-.24.04-.36V3.5c0-.83-.67-1.5-1.5-1.5h-9c-.2 0-.4.04-.57.11Z",
    fill: primaryFill
  }));
};

exports.FolderOpenVerticalFilled = wrapIcon_1.default( /*#__PURE__*/FolderOpenVerticalFilledIcon, 'FolderOpenVerticalFilled');

const FolderOpenVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v3.88c0 .12-.02.24-.04.36L15 11.56v2.94c0 .83-.67 1.5-1.5 1.5H12v.74a1.5 1.5 0 0 1-2.04 1.4L5.6 16.46A2.5 2.5 0 0 1 4 14.13V3.5ZM7.19 3l3.21 1.24A2.5 2.5 0 0 1 12 6.57V15h1.5a.5.5 0 0 0 .5-.5v-3l.01-.12L15 7.5a.5.5 0 0 0 .01-.12V3.5a.5.5 0 0 0-.5-.5H7.19ZM5 3.96v10.17c0 .62.38 1.17.96 1.4l4.36 1.68a.5.5 0 0 0 .68-.47V6.57a1.5 1.5 0 0 0-.96-1.4L5.68 3.5a.5.5 0 0 0-.68.47Z",
    fill: primaryFill
  }));
};

exports.FolderOpenVerticalRegular = wrapIcon_1.default( /*#__PURE__*/FolderOpenVerticalRegularIcon, 'FolderOpenVerticalRegular');

const FolderPeopleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.56 4.5h4.94a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v4.38a2.24 2.24 0 0 0-2.76.2 2.75 2.75 0 1 0-4.54 3A2.31 2.31 0 0 0 9 17H4.5A2.5 2.5 0 0 1 2 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54ZM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 0 1-.22.1H2v-1A2.5 2.5 0 0 1 4.34 3h2.83Zm7.72 11.5Zm-2.13 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM13 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 0 0-1.29-1.31H11.3A1.3 1.3 0 0 0 10 16.81c0 1.1.86 2.19 3 2.19Zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87Zm.25-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.FolderPeopleFilled = wrapIcon_1.default( /*#__PURE__*/FolderPeopleFilledIcon, 'FolderPeopleFilled');

const FolderPeopleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v4.38c-.3-.2-.63-.33-1-.37V7c0-.78-.6-1.42-1.36-1.5H9.62L8.16 7.03a1.5 1.5 0 0 1-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5h4.79A2.33 2.33 0 0 0 9 17H4.5A2.5 2.5 0 0 1 2 14.66V5.5A2.5 2.5 0 0 1 4.34 3h2.83Zm0 1H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 0 0 .3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 0 0-.22-.1h-.08Zm5.58 10.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM13 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 0 0-1.29-1.31H11.3A1.3 1.3 0 0 0 10 16.81c0 1.1.86 2.19 3 2.19Zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87Zm.25-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.FolderPeopleRegular = wrapIcon_1.default( /*#__PURE__*/FolderPeopleRegularIcon, 'FolderPeopleRegular');

const FolderPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 4.5h-4.94l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 0 0 4.5 17h6.54a2.5 2.5 0 0 1 2.23-2.99A2.99 2.99 0 0 1 15.5 9a3 3 0 0 1 2.5 1.34v-3.5l-.02-.17A2.5 2.5 0 0 0 15.5 4.5ZM7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v1h5.15a.5.5 0 0 0 .22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.FolderPersonFilled = wrapIcon_1.default( /*#__PURE__*/FolderPersonFilledIcon, 'FolderPersonFilled');

const FolderPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v9.16A2.5 2.5 0 0 0 4.5 17h6.54a3.3 3.3 0 0 1 .01-1H4.36A1.5 1.5 0 0 1 3 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0 1 17 7v2.4c.4.23.74.56 1 .94v-3.5l-.02-.17A2.5 2.5 0 0 0 15.5 4.5H9.67l-1.6-1.2-.14-.09ZM4.5 4h2.75a.5.5 0 0 1 .22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 0 1-.3.1H3V5.36A1.5 1.5 0 0 1 4.5 4Zm13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.FolderPersonRegular = wrapIcon_1.default( /*#__PURE__*/FolderPersonRegularIcon, 'FolderPersonRegular');

const FolderProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94Zm-.56 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.5-3.5a3.5 3.5 0 0 0-2.8 5.6l4.9-4.9a3.48 3.48 0 0 0-2.1-.7Zm0 7a3.5 3.5 0 0 0 2.8-5.6l-4.9 4.9c.59.44 1.31.7 2.1.7Z",
    fill: primaryFill
  }));
};

exports.FolderProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/FolderProhibitedFilledIcon, 'FolderProhibitedFilled');

const FolderProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.67c.32 0 .64.1.9.3l1.6 1.2h5.83A2.5 2.5 0 0 1 18 7v3.26a5.5 5.5 0 0 0-1-.66V7c0-.83-.67-1.5-1.5-1.5H9.62L8.16 7.03c-.29.3-.68.47-1.09.47H3v7c0 .83.67 1.5 1.5 1.5h4.7c.1.35.24.68.4 1H4.5A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4C3.67 4 3 4.67 3 5.5v1h4.07a.5.5 0 0 0 .36-.16L8.7 5.02 7.47 4.1a.5.5 0 0 0-.3-.1H4.5ZM10 14.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.5-3.5a3.5 3.5 0 0 0-2.8 5.6l4.9-4.9a3.48 3.48 0 0 0-2.1-.7Zm2.8 1.4-4.9 4.9a3.5 3.5 0 0 0 4.9-4.9Z",
    fill: primaryFill
  }));
};

exports.FolderProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/FolderProhibitedRegularIcon, 'FolderProhibitedRegular');

const FolderSwapFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.56 4.5h4.94a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v6.88l-1.44-1.44A1.5 1.5 0 0 0 14.08 14h-1.16a1.5 1.5 0 0 0-2.48-1.56l-2 2a1.5 1.5 0 0 0 0 2.13l.44.43H4.5A2.5 2.5 0 0 1 2 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54ZM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 0 1-.22.1H2v-1A2.5 2.5 0 0 1 4.34 3h2.83Zm4.7 10.86a.5.5 0 0 0-.71-.7l-2 1.99a.5.5 0 0 0 0 .7l2 2a.5.5 0 1 0 .7-.7L10.72 16h5.58l-1.14 1.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 1 0-.7.7L16.29 15h-5.58l1.15-1.14Z",
    fill: primaryFill
  }));
};

exports.FolderSwapFilled = wrapIcon_1.default( /*#__PURE__*/FolderSwapFilledIcon, 'FolderSwapFilled');

const FolderSwapRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v9.16A2.5 2.5 0 0 0 4.5 17h4.38l-.44-.43a1.5 1.5 0 0 1-.36-.57H4.36A1.5 1.5 0 0 1 3 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0 1 17 7v5.88l1 1V6.84l-.02-.17A2.5 2.5 0 0 0 15.5 4.5H9.67l-1.6-1.2-.14-.09ZM4.5 4h2.75a.5.5 0 0 1 .22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 0 1-.3.1H3V5.36A1.5 1.5 0 0 1 4.5 4Zm7.36 9.86a.5.5 0 0 0-.71-.7l-2 1.99a.5.5 0 0 0 0 .7l2 2a.5.5 0 1 0 .7-.7L10.72 16h5.58l-1.14 1.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 1 0-.7.7L16.29 15h-5.58l1.15-1.14Z",
    fill: primaryFill
  }));
};

exports.FolderSwapRegular = wrapIcon_1.default( /*#__PURE__*/FolderSwapRegularIcon, 'FolderSwapRegular');

const FolderSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.39 4.29 8.07 3.3a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .36-.16L9.4 4.3Zm1.17.21-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V6.84a2.5 2.5 0 0 0-2.5-2.34h-4.94ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.5-7v.15a3.01 3.01 0 0 0-3.62.48.5.5 0 0 0 .7.7 2 2 0 0 1 2.39-.33H15a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-1 0Zm-1.55 5.25a3 3 0 0 0 2.17-.88.5.5 0 0 0-.7-.7 2 2 0 0 1-2.39.33H14a.5.5 0 0 0 0-1h-1.5a.5.5 0 0 0-.5.5V17a.5.5 0 0 0 1 0v-.15a3.01 3.01 0 0 0 1.45.4Z",
    fill: primaryFill
  }));
};

exports.FolderSyncFilled = wrapIcon_1.default( /*#__PURE__*/FolderSyncFilledIcon, 'FolderSyncFilled');

const FolderSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v2.6c.36.18.7.4 1 .66V7a2.5 2.5 0 0 0-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 0 1-.36.16H3v-1ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.5-7v.15a3.01 3.01 0 0 0-3.62.48.5.5 0 0 0 .7.7 2 2 0 0 1 2.39-.33H15a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-1 0Zm-1.55 5.25a3 3 0 0 0 2.17-.88.5.5 0 0 0-.7-.7 2 2 0 0 1-2.39.33H14a.5.5 0 0 0 0-1h-1.5a.5.5 0 0 0-.5.5V17a.5.5 0 0 0 1 0v-.15a3.01 3.01 0 0 0 1.45.4Z",
    fill: primaryFill
  }));
};

exports.FolderSyncRegular = wrapIcon_1.default( /*#__PURE__*/FolderSyncRegularIcon, 'FolderSyncRegular');

const FolderZipFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4.5h-1.44l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 0 0 4.5 17H13v-1.94a.52.52 0 0 1 0-.12V14h-.5a.5.5 0 0 1 0-1h.5v-2h-.5a.5.5 0 0 1 0-1h.5V9h-.5a.5.5 0 0 1-.5-.5v-4Zm2 0h-1V8h1V4.5Zm1 0h.5a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 0 1-2.34 2.5H14v-1.5h.5a.5.5 0 0 0 0-1H14v-.96a.48.48 0 0 0 0-.09v-.95h.5a.5.5 0 1 0 0-1H14V9h.5a.5.5 0 0 0 .5-.5v-4ZM7.93 3.21A1.5 1.5 0 0 0 7.17 3H4.34A2.5 2.5 0 0 0 2 5.5v1h5.15a.5.5 0 0 0 .22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09Z",
    fill: primaryFill
  }));
};

exports.FolderZipFilled = wrapIcon_1.default( /*#__PURE__*/FolderZipFilledIcon, 'FolderZipFilled');

const FolderZipRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 0 1 2.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 0 1-2.34 2.5H4.5A2.5 2.5 0 0 1 2 14.66V5.5A2.5 2.5 0 0 1 4.34 3h2.83ZM14 5.5h-1V8h1V5.5Zm-2 0H9.62L8.16 7.03a1.5 1.5 0 0 1-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5H13v-.94a.51.51 0 0 1 0-.12V14h-.5a.5.5 0 1 1 0-1h.5v-2h-.5a.5.5 0 0 1 0-1h.5V9h-.5a.5.5 0 0 1-.5-.5v-3Zm2 9h.5a.5.5 0 0 1 0 1H14v.5h1.5c.78 0 1.42-.6 1.5-1.36V7c0-.78-.6-1.42-1.36-1.5H15v3a.5.5 0 0 1-.5.5H14v2.5h.5a.5.5 0 0 1 0 1H14v.96a.48.48 0 0 1 0 .08v.96ZM7.17 4H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 0 0 .3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 0 0-.22-.1h-.08Z",
    fill: primaryFill
  }));
};

exports.FolderZipRegular = wrapIcon_1.default( /*#__PURE__*/FolderZipRegularIcon, 'FolderZipRegular');

const FontDecreaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.24 2.18a.75.75 0 0 0-.98 1.14l1.75 1.5c.28.24.7.24.98 0l1.75-1.5a.75.75 0 1 0-.98-1.14L15.5 3.26l-1.26-1.08ZM10 4c-.3 0-.58.19-.7.47l-4.25 10.5a.75.75 0 1 0 1.4.56L7.87 12h4.26l1.42 3.53a.75.75 0 1 0 1.4-.56L10.7 4.47A.75.75 0 0 0 10 4Zm0 2.75 1.52 3.75H8.48L10 6.75Z",
    fill: primaryFill
  }));
};

exports.FontDecreaseFilled = wrapIcon_1.default( /*#__PURE__*/FontDecreaseFilledIcon, 'FontDecreaseFilled');

const FontDecreaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.15 2.15c.2-.2.5-.2.7 0l1.65 1.64 1.65-1.64a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7ZM10 4c.2 0 .39.12.46.31l4.5 11a.5.5 0 1 1-.92.38l-1.54-3.76V12h-5v-.07L5.96 15.7a.5.5 0 1 1-.92-.38l4.5-11A.5.5 0 0 1 10 4Zm-2.12 7h4.24L10 5.82 7.88 11Z",
    fill: primaryFill
  }));
};

exports.FontDecreaseRegular = wrapIcon_1.default( /*#__PURE__*/FontDecreaseRegularIcon, 'FontDecreaseRegular');

const FontIncreaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.24 4.82a.75.75 0 0 1-.98-1.14l1.75-1.5c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 1 1-.98 1.14L15.5 3.74l-1.26 1.08ZM10 3.75c-.3 0-.58.18-.7.47l-4.5 11a.75.75 0 0 0 1.4.56l1.44-3.53h4.72l1.45 3.53a.75.75 0 1 0 1.38-.56l-4.5-11a.75.75 0 0 0-.69-.47Zm0 2.73 1.75 4.27h-3.5L10 6.48Z",
    fill: primaryFill
  }));
};

exports.FontIncreaseFilled = wrapIcon_1.default( /*#__PURE__*/FontIncreaseFilledIcon, 'FontIncreaseFilled');

const FontIncreaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.85 4.85a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15.5 3.21l-1.65 1.64ZM10 4a.5.5 0 0 0-.46.31l-4.5 11a.5.5 0 1 0 .92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 1 0 .92-.38l-4.5-11A.5.5 0 0 0 10 4Zm0 1.82L12.12 11H7.88L10 5.82Z",
    fill: primaryFill
  }));
};

exports.FontIncreaseRegular = wrapIcon_1.default( /*#__PURE__*/FontIncreaseRegularIcon, 'FontIncreaseRegular');

const FontSpaceTrackingInFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.7 2.48a.75.75 0 0 0-1.4 0l-3.25 8.5a.75.75 0 0 0 1.4.53l.77-2.01h3.56l.77 2.01a.75.75 0 0 0 1.4-.53L7.7 2.48ZM8.2 8H5.8L7 4.85 8.2 8Zm-1.46 5.19a.75.75 0 1 0-.99 1.12l.5.44h-2.5a.75.75 0 0 0 0 1.5h2.5l-.5.44a.75.75 0 1 0 1 1.12l2-1.75a.75.75 0 0 0 0-1.13l-2-1.74ZM13 12c.31 0 .59-.2.7-.48l3.25-8.5a.75.75 0 1 0-1.4-.53L13 9.15 10.45 2.5a.75.75 0 0 0-1.4.53l3.25 8.5c.11.29.39.48.7.48Zm1.31 5.74a.75.75 0 0 1-1.05.07l-2-1.74a.75.75 0 0 1 0-1.13l2-1.75a.75.75 0 1 1 .98 1.12l-.5.44h2.51a.75.75 0 0 1 0 1.5h-2.5l.5.44c.3.27.34.74.06 1.05Z",
    fill: primaryFill
  }));
};

exports.FontSpaceTrackingInFilled = wrapIcon_1.default( /*#__PURE__*/FontSpaceTrackingInFilledIcon, 'FontSpaceTrackingInFilled');

const FontSpaceTrackingInRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 12c.2 0 .38-.12.46-.32l3.5-9.02a.5.5 0 1 0-.93-.36L13 10.12 9.95 2.3a.5.5 0 0 0-.93.36l3.5 9.02c.08.2.27.32.47.32ZM7.46 2.3a.5.5 0 0 0-.93 0l-2.34 6v.03l-1.17 3a.5.5 0 1 0 .93.35L5.01 9h4l1.04 2.68a.5.5 0 1 0 .93-.36L9.83 8.37a.5.5 0 0 0-.04-.11L7.47 2.3ZM8.61 8H5.4L7 3.86 8.61 8ZM6.5 13.12a.5.5 0 1 0-.65.76L7.14 15H3.5a.5.5 0 0 0 0 1h3.65l-1.3 1.12a.5.5 0 1 0 .64.76l2.33-2a.5.5 0 0 0 0-.76l-2.33-2Zm7.72 4.7a.5.5 0 0 1-.7.06l-2.34-2a.5.5 0 0 1 0-.76l2.33-2a.5.5 0 1 1 .65.76L12.85 15h3.65a.5.5 0 0 1 0 1h-3.65l1.3 1.12c.21.18.24.5.06.7Z",
    fill: primaryFill
  }));
};

exports.FontSpaceTrackingInRegular = wrapIcon_1.default( /*#__PURE__*/FontSpaceTrackingInRegularIcon, 'FontSpaceTrackingInRegular');

const FontSpaceTrackingOutFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 2c.31 0 .59.2.7.48l3.25 8.5a.75.75 0 0 1-1.4.53L7.78 9.5H4.22l-.77 2.01a.75.75 0 0 1-1.4-.53l3.25-8.5A.75.75 0 0 1 6 2ZM4.8 8h2.4L6 4.85 4.8 8Zm9.88 5.26a.75.75 0 0 1 1.06-.07l2 1.74a.75.75 0 0 1 0 1.13l-2 1.75a.75.75 0 1 1-.99-1.12l.5-.44H4.75l.5.44a.75.75 0 1 1-1 1.12l-2-1.74a.75.75 0 0 1 0-1.13l2-1.75a.75.75 0 0 1 1 1.12l-.5.44h10.5l-.5-.44a.75.75 0 0 1-.07-1.05Zm.02-1.74a.75.75 0 0 1-1.4 0l-3.25-8.5a.75.75 0 0 1 1.4-.53L14 9.15l2.55-6.66a.75.75 0 0 1 1.4.53l-3.25 8.5Z",
    fill: primaryFill
  }));
};

exports.FontSpaceTrackingOutFilled = wrapIcon_1.default( /*#__PURE__*/FontSpaceTrackingOutFilledIcon, 'FontSpaceTrackingOutFilled');

const FontSpaceTrackingOutRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.46 11.68a.5.5 0 0 1-.93 0l-3.51-9.02a.5.5 0 1 1 .93-.36l3.04 7.82 3.04-7.82a.5.5 0 0 1 .94.36l-3.51 9.02ZM6 1.98c.21 0 .4.13.47.32l2.32 5.96a.5.5 0 0 1 .04.11l1.15 2.95a.5.5 0 1 1-.93.36L8 9H4l-1.04 2.68a.5.5 0 0 1-.93-.36l1.16-3 .01-.02 2.34-6A.5.5 0 0 1 6 1.98ZM4.4 8H7.6l-1.6-4.14L4.4 8Zm10.39 5.18a.5.5 0 0 1 .7-.06l2.33 2a.5.5 0 0 1 0 .76l-2.33 2a.5.5 0 0 1-.65-.76l1.3-1.12H3.85l1.31 1.12a.5.5 0 1 1-.65.76l-2.33-2a.5.5 0 0 1 0-.76l2.33-2a.5.5 0 1 1 .65.76L3.85 15h12.3l-1.3-1.12a.5.5 0 0 1-.06-.7Z",
    fill: primaryFill
  }));
};

exports.FontSpaceTrackingOutRegular = wrapIcon_1.default( /*#__PURE__*/FontSpaceTrackingOutRegularIcon, 'FontSpaceTrackingOutRegular');

const FoodFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3a.5.5 0 0 1 .5.41V6.5a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 .09V8.95a2.5 2.5 0 0 1-2-2.28V3.5a.5.5 0 0 1 1-.09V6.5c0 .65.42 1.2 1 1.41V3.5a.5.5 0 0 1 1-.09v4.5a1.5 1.5 0 0 0 1-1.26V3.5c0-.28.22-.5.5-.5Zm5 0a.5.5 0 0 1 .5.41V16.5a.5.5 0 0 1-1 .09V11h-1.5a.5.5 0 0 1-.5-.41V5.5A2.5 2.5 0 0 1 14.5 3Z",
    fill: primaryFill
  }));
};

exports.FoodFilled = wrapIcon_1.default( /*#__PURE__*/FoodFilledIcon, 'FoodFilled');

const FoodRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3a.5.5 0 0 1 .5.41V6.5a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 .09V8.95a2.5 2.5 0 0 1-2-2.28V3.5a.5.5 0 0 1 1-.09V6.5c0 .65.42 1.2 1 1.41V3.5a.5.5 0 0 1 1-.09v4.5a1.5 1.5 0 0 0 1-1.26V3.5c0-.28.22-.5.5-.5Zm5 0a.5.5 0 0 1 .5.41V16.5a.5.5 0 0 1-1 .09V11h-1.5a.5.5 0 0 1-.5-.41V5.5A2.5 2.5 0 0 1 14.5 3Zm-.5 7V4.09a1.5 1.5 0 0 0-1 1.26V10h1V4.09 10Z",
    fill: primaryFill
  }));
};

exports.FoodRegular = wrapIcon_1.default( /*#__PURE__*/FoodRegularIcon, 'FoodRegular');

const FoodAppleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.16 2.97a.5.5 0 0 0-.32-.94 3.18 3.18 0 0 0-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 0 0 6.2 2.14c-.58.01-1.05.48-1.06 1.06A3.99 3.99 0 0 0 6.3 6.14l.03.03A4 4 0 0 0 3.2 9.76v.07a8.5 8.5 0 0 0 1 4.75l.36.66a.5.5 0 0 0 .03.05l1 1.4a2.69 2.69 0 0 0 4.09.34.46.46 0 0 1 .64 0 2.69 2.69 0 0 0 4.09-.34l1-1.4a.51.51 0 0 0 .03-.05l.36-.66a8.5 8.5 0 0 0 1-4.75v-.07a4 4 0 0 0-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34Zm-5.25 6c-.28.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 0 1-.99.12c-.13-1.06 0-1.86.31-2.45.32-.6.8-.93 1.28-1.08a.5.5 0 0 1 .32.94Z",
    fill: primaryFill
  }));
};

exports.FoodAppleFilled = wrapIcon_1.default( /*#__PURE__*/FoodAppleFilledIcon, 'FoodAppleFilled');

const FoodAppleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.22 8.34a.5.5 0 0 1-.31.63c-.28.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 0 1-.99.12c-.13-1.06 0-1.86.3-2.45.33-.6.82-.93 1.3-1.08a.5.5 0 0 1 .62.31Zm4.94-5.37a.5.5 0 0 0-.32-.94 3.18 3.18 0 0 0-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 0 0 6.2 2.14c-.58.01-1.05.48-1.06 1.06a3.99 3.99 0 0 0 1.2 2.97A4 4 0 0 0 3.2 9.76v.07a8.5 8.5 0 0 0 1 4.75l.36.66a.5.5 0 0 0 .03.05l1 1.4a2.69 2.69 0 0 0 4.09.34.46.46 0 0 1 .64 0 2.69 2.69 0 0 0 4.09-.34l1-1.4a.51.51 0 0 0 .03-.05l.36-.66a8.5 8.5 0 0 0 1-4.75v-.07a4 4 0 0 0-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34ZM8.72 6.28l-.16-.03a2.98 2.98 0 0 1-2.42-3.02c0-.05.04-.09.09-.1a2.99 2.99 0 0 1 3.08 3.1c0 .04-.04.08-.09.08-.17 0-.34 0-.5-.03Zm-.33.96.17.03.78.13a4 4 0 0 0 1.32 0l1.66-.28a3 3 0 0 1 3.49 2.72v.07a7.5 7.5 0 0 1-.9 4.2l-.33.62-.99 1.38c-.6.85-1.82.95-2.56.21a1.46 1.46 0 0 0-2.06 0c-.74.74-1.96.64-2.56-.21l-.99-1.38-.34-.63a7.5 7.5 0 0 1-.9-4.19l.01-.07a3 3 0 0 1 3.49-2.72l.71.12Z",
    fill: primaryFill
  }));
};

exports.FoodAppleRegular = wrapIcon_1.default( /*#__PURE__*/FoodAppleRegularIcon, 'FoodAppleRegular');

const FoodCakeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 0 0-.47-1.43C11.28 2.55 10.77 2 10 2ZM3 9.78l3.2 2.94a1 1 0 0 0 1.43-.07l.86-.98a2 2 0 0 1 3 0l.86.98a1 1 0 0 0 1.43.07l3.2-2.94A2 2 0 0 0 15 8H5a2 2 0 0 0-1.99 1.79ZM17 11.14l-2.54 2.33a2 2 0 0 1-2.85-.15l-.86-.97a1 1 0 0 0-1.5 0l-.86.97a2 2 0 0 1-2.85.15L3 11.14V16h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-4.86Z",
    fill: primaryFill
  }));
};

exports.FoodCakeFilled = wrapIcon_1.default( /*#__PURE__*/FoodCakeFilledIcon, 'FoodCakeFilled');

const FoodCakeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 0 0-.47-1.43C11.28 2.55 10.77 2 10 2ZM8.96 4.51c0-.2.11-.63.33-.99.22-.37.46-.54.7-.54.25 0 .5.17.72.55.21.37.32.8.33.98.04.6-.07.96-.23 1.16-.14.18-.38.31-.81.31-.45 0-.69-.12-.82-.3-.15-.18-.26-.54-.22-1.17ZM5 8a2 2 0 0 0-2 2v6h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-6a2 2 0 0 0-2-2H5Zm11 8H4v-3.88l1.54 1.38a2 2 0 0 0 2.83-.16l.88-1a1 1 0 0 1 1.5 0l.88 1a2 2 0 0 0 2.83.16L16 12.12V16Zm0-5.22-2.21 1.97a1 1 0 0 1-1.42-.08l-.87-.99a2 2 0 0 0-3 0l-.87 1a1 1 0 0 1-1.42.07L4 10.78V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.78Z",
    fill: primaryFill
  }));
};

exports.FoodCakeRegular = wrapIcon_1.default( /*#__PURE__*/FoodCakeRegularIcon, 'FoodCakeRegular');

const FoodCarrotFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.85a.5.5 0 0 0-.7-.7L14 5.29V2.5a.5.5 0 1 0-1 0v2.88a3.66 3.66 0 0 0-4.64 1.2l-6.09 8.95c-.42.63-.34 1.47.2 2 .55.55 1.42.62 2.05.18l8.93-6.18A3.57 3.57 0 0 0 14.63 7h2.87a.5.5 0 1 0 0-1h-2.8l3.15-3.15Z",
    fill: primaryFill
  }));
};

exports.FoodCarrotFilled = wrapIcon_1.default( /*#__PURE__*/FoodCarrotFilledIcon, 'FoodCarrotFilled');

const FoodCarrotRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 2.85a.5.5 0 0 0-.7-.7L14 5.29V2.5a.5.5 0 0 0-1 0v2.88a3.66 3.66 0 0 0-4.64 1.2l-6.09 8.95c-.42.63-.34 1.47.2 2 .55.55 1.41.62 2.05.18l8.93-6.18A3.57 3.57 0 0 0 14.63 7h2.87a.5.5 0 0 0 0-1h-2.8l3.15-3.15ZM9.2 7.14a2.64 2.64 0 0 1 4.04-.39 2.58 2.58 0 0 1-.35 3.96L3.95 16.9a.6.6 0 0 1-.77-.07.59.59 0 0 1-.07-.75l6.08-8.94Z",
    fill: primaryFill
  }));
};

exports.FoodCarrotRegular = wrapIcon_1.default( /*#__PURE__*/FoodCarrotRegularIcon, 'FoodCarrotRegular');

const FoodChickenLegFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 7a5 5 0 0 0-9.93-.87c-.42 1.5-.83 2.29-1.04 2.63l-1.88 1.89a.5.5 0 0 0 .35.85h.39l-2 2a2 2 0 0 0-1.15 3.55c.08.06.15.13.2.21A2 2 0 0 0 6.5 16.1l2-2v.4a.5.5 0 0 0 .85.35l1.88-1.87c.34-.21 1.15-.63 2.7-1.07A4.97 4.97 0 0 0 18 7ZM7.3 11.5h1.2v1.19l-2.78 2.78a.75.75 0 0 0-.22.53 1 1 0 0 1-1.78.63c-.1-.13-.22-.25-.35-.35A1 1 0 0 1 4 14.5c.18 0 .37-.06.51-.21l2.8-2.79Z",
    fill: primaryFill
  }));
};

exports.FoodChickenLegFilled = wrapIcon_1.default( /*#__PURE__*/FoodChickenLegFilledIcon, 'FoodChickenLegFilled');

const FoodChickenLegRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 7a5 5 0 0 0-9.93-.87c-.42 1.5-.83 2.29-1.04 2.63l-1.88 1.89a.5.5 0 0 0 .35.85h.39l-2 2a2 2 0 0 0-1.15 3.55c.08.06.15.13.2.21A2 2 0 0 0 6.5 16.1l2-2v.4a.5.5 0 0 0 .85.35l1.88-1.87c.34-.21 1.15-.63 2.7-1.07A4.97 4.97 0 0 0 18 7Zm-9.5 5.69-2.78 2.78a.75.75 0 0 0-.22.53 1 1 0 0 1-1.78.63c-.1-.13-.22-.25-.35-.35A1 1 0 0 1 4 14.5c.18 0 .37-.06.51-.21l2.8-2.79H8.5v1.19ZM13 3a4 4 0 0 1 1.37 7.76 11.6 11.6 0 0 0-3.8 1.47L9.49 13.3v-2.23a.5.5 0 0 0-.15-.35l-.06-.06a.5.5 0 0 0-.35-.15H6.71l1.07-1.07a11.53 11.53 0 0 0 1.28-3.1 3.97 3.97 0 0 1 .23-.82A4 4 0 0 1 13 3Z",
    fill: primaryFill
  }));
};

exports.FoodChickenLegRegular = wrapIcon_1.default( /*#__PURE__*/FoodChickenLegRegularIcon, 'FoodChickenLegRegular');

const FoodEggFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.47 9.6a.5.5 0 0 0 .14-.98 2.14 2.14 0 0 0-2.35 2.16.5.5 0 0 0 1 0c0-.8.7-1.24 1.2-1.17ZM3.99 7.14c-2.41 1.91-2.48 5.15-1.34 7.32a4.89 4.89 0 0 0 4.42 2.77c.54 0 .94-.01 1.24-.03.94-.03 1.11-.04 2.42.48a5.6 5.6 0 0 0 5.12-.47c1.39-.87 2.19-2.88 2.05-4.52-.08-.98 0-1.36.09-1.86.06-.33.13-.7.17-1.34a7.1 7.1 0 0 0-1.05-3.81 7.63 7.63 0 0 0-2.72-2.85 6.18 6.18 0 0 0-5.86-.15 7.15 7.15 0 0 0-3.07 3 5.1 5.1 0 0 1-1.47 1.46Zm10.91 3.33a4.5 4.5 0 1 1-8.99 0 4.5 4.5 0 0 1 8.99 0Z",
    fill: primaryFill
  }));
};

exports.FoodEggFilled = wrapIcon_1.default( /*#__PURE__*/FoodEggFilledIcon, 'FoodEggFilled');

const FoodEggRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.06 9.58a.5.5 0 1 0 .14-1c-.94-.12-1.78.6-1.78 1.64a.5.5 0 0 0 1 0c0-.46.32-.68.64-.64Zm.35 5.38a4.5 4.5 0 1 0 0-8.99 4.5 4.5 0 0 0 0 9Zm0-1a3.5 3.5 0 1 1 0-6.99 3.5 3.5 0 0 1 0 7Zm1.22-11.89c1.04.07 2.02.38 2.72.83a7.6 7.6 0 0 1 2.7 2.83 7.1 7.1 0 0 1 1.05 3.82 9.84 9.84 0 0 1-.21 1.53c-.06.32-.1.66-.04 1.38.07.85-.1 1.78-.46 2.6a4.54 4.54 0 0 1-1.68 2.07 5.71 5.71 0 0 1-5.22.48c-.8-.33-1.08-.4-1.38-.42a6.7 6.7 0 0 0-.65 0c-.3.02-.67.03-1.18.03a5.05 5.05 0 0 1-4.56-2.84C1.59 12.2 1.62 8.9 4.1 6.94c.75-.6.98-.8 1.24-1.22.42-.7.82-1.25 1.3-1.73A7.7 7.7 0 0 1 8.4 2.74a5.9 5.9 0 0 1 3.23-.67Zm-.07 1c-.9-.06-1.85.1-2.68.55a6.7 6.7 0 0 0-1.53 1.09c-.4.39-.75.86-1.14 1.52-.37.6-.73.9-1.49 1.5-2 1.59-2.1 4.31-1.11 6.19a4.05 4.05 0 0 0 3.67 2.3l1.14-.02h.02c.27-.01.5-.02.73 0 .48.02.89.16 1.7.48 1.46.58 3 .41 4.31-.4.54-.34 1-.92 1.3-1.61.3-.7.43-1.46.38-2.13a5.82 5.82 0 0 1 .08-1.87c.06-.3.12-.63.16-1.19a6.12 6.12 0 0 0-.91-3.26 6.6 6.6 0 0 0-2.37-2.48 4.99 4.99 0 0 0-2.26-.67Z",
    fill: primaryFill
  }));
};

exports.FoodEggRegular = wrapIcon_1.default( /*#__PURE__*/FoodEggRegularIcon, 'FoodEggRegular');

const FoodFishFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.63 3.7c-1.5 1.5-1.76 3.87-1.72 5.67a.4.4 0 0 1-.37.41c-1.52.1-3.39.41-4.92 1.23-.52.27-.7.8-.58 1.27.12.45.5.83 1.02.92.7.14 1.5.3 2.18.52.35.1.65.21.9.33.26.12.42.22.5.3.09.09.2.25.31.5.12.26.23.57.33.91.21.69.38 1.48.51 2.18.1.52.47.9.93 1.02.47.13 1-.06 1.27-.57.82-1.54 1.12-3.4 1.23-4.93a.4.4 0 0 1 .4-.37c1.8.05 4.19-.22 5.69-1.72.89-.9 1.33-2.08 1.54-3.25.2-1.17.17-2.37.08-3.32a3 3 0 0 0-2.73-2.73 12.7 12.7 0 0 0-3.32.08c-1.17.2-2.35.65-3.25 1.54Zm4.62.8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.FoodFishFilled = wrapIcon_1.default( /*#__PURE__*/FoodFishFilledIcon, 'FoodFishFilled');

const FoodFishRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.91 9.35c-.04-1.76.24-3.76 1.43-4.95.7-.7 1.66-1.08 2.71-1.26a11.7 11.7 0 0 1 3.06-.07c.98.09 1.73.84 1.82 1.82.09.9.11 2-.07 3.06a4.97 4.97 0 0 1-1.26 2.71c-1.19 1.2-3.19 1.47-4.95 1.43a1.4 1.4 0 0 0-1.43 1.3c-.1 1.47-.4 3.17-1.11 4.52-.04.07-.07.08-.08.09a.1.1 0 0 1-.06 0c-.07-.02-.16-.1-.2-.25-.13-.7-.3-1.54-.53-2.28a8.35 8.35 0 0 0-.38-1.03c-.13-.3-.3-.58-.5-.8-.21-.2-.5-.36-.8-.5-.3-.14-.66-.27-1.03-.38-.74-.22-1.57-.4-2.28-.54-.16-.03-.23-.13-.25-.2a.1.1 0 0 1 0-.06c.01 0 .03-.04.09-.07a11.53 11.53 0 0 1 4.52-1.11 1.4 1.4 0 0 0 1.3-1.43Zm.72-5.66c-1.5 1.5-1.76 3.88-1.72 5.68a.4.4 0 0 1-.37.41c-1.52.1-3.39.41-4.92 1.23-.52.27-.7.8-.58 1.27.12.45.5.83 1.02.92.7.14 1.5.3 2.18.52.35.1.65.21.9.33.26.12.42.22.5.3.09.09.2.25.31.5.12.26.23.57.33.9.21.7.38 1.5.51 2.19.1.52.47.9.93 1.02.47.13 1-.06 1.27-.57.82-1.54 1.12-3.4 1.23-4.93a.4.4 0 0 1 .4-.37c1.8.05 4.19-.22 5.69-1.72.89-.9 1.33-2.08 1.54-3.25.2-1.17.17-2.37.08-3.32a3 3 0 0 0-2.73-2.73 12.7 12.7 0 0 0-3.32.08c-1.17.2-2.35.65-3.25 1.54Zm4.62.8a.75.75 0 1 1 0 1.51.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.FoodFishRegular = wrapIcon_1.default( /*#__PURE__*/FoodFishRegularIcon, 'FoodFishRegular');

const FoodGrainsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.43 2.21a.65.65 0 0 0-.86 0 5.72 5.72 0 0 0-1.92 4.35c0 .18.1.34.24.43A7.4 7.4 0 0 1 9.63 8.4a.5.5 0 0 0 .74 0 7.4 7.4 0 0 1 1.74-1.42.5.5 0 0 0 .24-.43c.02-1.59-.62-3.2-1.92-4.35Zm-7.41 10a.66.66 0 0 1 .6-.72A6.36 6.36 0 0 1 10 15.33a6.36 6.36 0 0 1 6.38-3.84c.36.03.64.35.6.72A6.37 6.37 0 0 1 10.64 18h-.46c-.06 0-.12 0-.18-.02a.66.66 0 0 1-.18.02h-.46a6.37 6.37 0 0 1-6.34-5.8ZM10 10.83a6.36 6.36 0 0 0-6.38-3.84.66.66 0 0 0-.6.72c.08.9.35 1.75.76 2.5a.5.5 0 0 0 .44.26c2.1.01 4.02.92 5.36 2.39.11.12.27.18.42.16a.5.5 0 0 0 .42-.16 7.36 7.36 0 0 1 5.36-2.4.5.5 0 0 0 .44-.25c.41-.75.68-1.6.76-2.5a.66.66 0 0 0-.6-.72A6.36 6.36 0 0 0 10 10.83Z",
    fill: primaryFill
  }));
};

exports.FoodGrainsFilled = wrapIcon_1.default( /*#__PURE__*/FoodGrainsFilledIcon, 'FoodGrainsFilled');

const FoodGrainsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.43 2.21a.65.65 0 0 0-.86 0 5.73 5.73 0 0 0-1.74 5.74 7.11 7.11 0 0 0-4.2-.96.66.66 0 0 0-.61.72 6.99 6.99 0 0 0 1.65 3.77c-.35-.02-.7-.02-1.05 0a.66.66 0 0 0-.6.73A6.37 6.37 0 0 0 9.36 18h1.28c3.3 0 6.04-2.51 6.34-5.8a.66.66 0 0 0-.6-.71c-.35-.03-.7-.03-1.05-.01a6.99 6.99 0 0 0 1.65-3.77.66.66 0 0 0-.6-.72 7.1 7.1 0 0 0-4.21.96c.52-2-.06-4.24-1.74-5.74ZM10 14.43a7.15 7.15 0 0 0-3.47-2.6 6.17 6.17 0 0 1-2.47-3.86c1.54-.05 3 .5 4.12 1.45.76.64.97 1.23 1.15 1.76l.22.54a.5.5 0 0 0 .9 0l.22-.54c.18-.53.4-1.12 1.15-1.76a6.12 6.12 0 0 1 4.12-1.45 6.17 6.17 0 0 1-2.5 3.9A7.15 7.15 0 0 0 10 14.42ZM9.36 17a5.37 5.37 0 0 1-5.3-4.53 6.13 6.13 0 0 1 5.5 3.13.5.5 0 0 0 .88 0 6.13 6.13 0 0 1 5.5-3.13 5.37 5.37 0 0 1-5.3 4.53H9.36ZM10 9.82a4.74 4.74 0 0 1 0-6.64 4.74 4.74 0 0 1 0 6.64Z",
    fill: primaryFill
  }));
};

exports.FoodGrainsRegular = wrapIcon_1.default( /*#__PURE__*/FoodGrainsRegularIcon, 'FoodGrainsRegular');

const FoodPizzaFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.96c0-1.1.9-2.03 2.03-1.96 4.45.28 8.35 1.77 11.4 4.7.87.82.7 2.17-.2 2.86l-.25.19-.4-.44V9.3A16.37 16.37 0 0 0 4.88 4.5H4v-.55ZM4 5.5V16.5a1.5 1.5 0 0 0 2.4 1.2L8 16.5a1 1 0 0 0 2 0v-2a.5.5 0 0 1 1-.06V15a1 1 0 0 0 2 0v-2.24c.82-.6 2.09-1.56 3.19-2.4l-.33-.37A15.37 15.37 0 0 0 4.87 5.5H4Zm4.25 2.74a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.97 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.96 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
};

exports.FoodPizzaFilled = wrapIcon_1.default( /*#__PURE__*/FoodPizzaFilledIcon, 'FoodPizzaFilled');

const FoodPizzaRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 21"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 9a.75.75 0 1 0 0-1.49.75.75 0 0 0 0 1.5Zm3.72 1.26a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 3.96c0-1.1.9-2.02 2.03-1.95 4.45.27 8.35 1.77 11.4 4.68.87.83.7 2.18-.2 2.87-1.24.96-3.12 2.4-4.23 3.2v1.75c0 .71-.55 1.5-1.5 1.5-.18 0-.34-.03-.5-.08V16c0 .71-.55 1.49-1.5 1.49-.75 0-1.25-.5-1.42-1.05L6.4 17.7A1.5 1.5 0 0 1 4 16.5V3.96Zm7 10.55c0 .25.2.5.5.5s.5-.25.5-.5v-2a.5.5 0 0 1 .21-.4c.78-.57 2.1-1.58 3.28-2.48A15.43 15.43 0 0 0 5 5.52V16.5c0 .41.47.65.8.4l2.4-1.8a.5.5 0 0 1 .8.4v.5c0 .26.2.5.5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0Zm5.62-5.74c.46-.36.5-1 .12-1.35C13.88 4.69 10.22 3.27 5.97 3a.93.93 0 0 0-.97.96v.56c4.33.03 8.4 1.69 11.3 4.5l.32-.25Z",
    fill: primaryFill
  }));
};

exports.FoodPizzaRegular = wrapIcon_1.default( /*#__PURE__*/FoodPizzaRegularIcon, 'FoodPizzaRegular');

const FoodToastFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.78 7.45a.5.5 0 0 0-.5.5v4.1c0 .27.22.5.5.5h4.34a.5.5 0 0 0 .5-.5v-4.1a.5.5 0 0 0-.5-.5H6.78Zm.5 1h3.34v3.1H7.28v-3.1ZM5.45 2.5c-1.63 0-3 1.1-3.6 2.48-.6 1.33-.49 3 .81 4.22v5.98c0 .3-.01.87.28 1.36.36.6 1.08.96 2.26.96h10.18c.41 0 .78-.02 1.1-.07.3-.06.6-.17.85-.39.5-.43.59-1.13.59-1.95 0-.88-.04-1.92-.07-2.93a66.88 66.88 0 0 1-.07-2.97 4.68 4.68 0 0 0 1.28-3 3.73 3.73 0 0 0-3.68-3.69H5.45Zm7.38 1c.63 0 1.39.3 2 .82.6.51.99 1.18 1 1.85-.05.75-.21 1.24-.41 1.58-.16.27-.35.48-.56.69l-.16.15a13.81 13.81 0 0 0-.31.3l-.14.13v.2c-.04 1-.03 2.44-.02 3.84v.01l.01 2.02c0 .4-.02.7-.06.9-.04.2-.1.28-.14.32-.04.04-.12.1-.32.13a9.84 9.84 0 0 1-.89.06H5.2c-1 0-1.29-.29-1.4-.47-.14-.23-.14-.51-.14-.84V8.99a.5.5 0 0 0-.18-.39 2.65 2.65 0 0 1-.72-3.22 3.05 3.05 0 0 1 2.7-1.88h7.37Z",
    fill: primaryFill
  }));
};

exports.FoodToastFilled = wrapIcon_1.default( /*#__PURE__*/FoodToastFilledIcon, 'FoodToastFilled');

const FoodToastRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.23 7.95c0-.27.22-.5.5-.5h4.34c.28 0 .5.23.5.5v4.1a.5.5 0 0 1-.5.5H6.73a.5.5 0 0 1-.5-.5v-4.1Zm1 3.6h3.34v-3.1H7.23v3.1ZM1.79 4.98A4.05 4.05 0 0 1 5.4 2.5h9.93A3.73 3.73 0 0 1 19 6.18c0 1.33-.76 2.46-1.28 3.01 0 .7.02 1.66.06 2.67v.3c.04 1 .08 2.05.08 2.93 0 .82-.1 1.52-.59 1.95-.24.22-.54.33-.86.39-.31.05-.68.07-1.1.07H5.16c-1.18 0-1.9-.35-2.26-.96a2.53 2.53 0 0 1-.28-1.45V9.2a3.64 3.64 0 0 1-.82-4.22ZM5.4 3.5c-1.16 0-2.21.8-2.7 1.88a2.65 2.65 0 0 0 .73 3.22c.12.1.18.24.18.38v6.21c0 .33 0 .6.14.84.1.18.4.47 1.4.47h7.63c.4 0 .68-.02.89-.06.2-.03.28-.09.32-.13.05-.04.1-.12.14-.32.04-.2.06-.5.06-.9v-2c-.02-1.42-.03-2.87 0-3.87a.5.5 0 0 1 .15-.34l.3-.3c.24-.21.44-.4.63-.68.25-.35.46-.86.5-1.73 0-.67-.39-1.34-1-1.85a3.28 3.28 0 0 0-1.99-.82H5.4Zm9.71 12.69-.08.31h.3c.4 0 .69-.02.9-.06.23-.04.33-.1.4-.15.12-.1.24-.36.24-1.2 0-.86-.04-1.89-.07-2.9l-.01-.3c-.04-1.1-.07-2.16-.05-2.92a.5.5 0 0 1 .15-.35 3.73 3.73 0 0 0 1.12-2.44 2.73 2.73 0 0 0-2.65-2.68l.06.06a3.52 3.52 0 0 1 1.35 2.62v.03a4.24 4.24 0 0 1-.67 2.26c-.26.38-.58.67-.84.91l-.07.07c-.02.97-.02 2.3 0 3.6v2.04c0 .42-.02.8-.08 1.1Z",
    fill: primaryFill
  }));
};

exports.FoodToastRegular = wrapIcon_1.default( /*#__PURE__*/FoodToastRegularIcon, 'FoodToastRegular');

const FormFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm2.5-1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm1-4c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm.5 3.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
};

exports.FormFilled = wrapIcon_1.default( /*#__PURE__*/FormFilledIcon, 'FormFilled');

const FormRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2-4c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
};

exports.FormRegular = wrapIcon_1.default( /*#__PURE__*/FormRegularIcon, 'FormRegular');

const FormMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3h6a3 3 0 0 1 3 3v6a2.99 2.99 0 0 1-3 3H6a2.99 2.99 0 0 1-3-3V6a3 3 0 0 1 3-3Zm-.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm1 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.76 16A3 3 0 0 0 8 17h4.5a4.5 4.5 0 0 0 4.5-4.5V8a3 3 0 0 0-1-2.24v6.74c0 .12 0 .24-.02.36A3.5 3.5 0 0 1 12.5 16H5.76Z",
    fill: primaryFill
  }));
};

exports.FormMultipleFilled = wrapIcon_1.default( /*#__PURE__*/FormMultipleFilledIcon, 'FormMultipleFilled');

const FormMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 17a3 3 0 0 1-2.24-1h6.74a3.5 3.5 0 0 0 3.5-3.5V5.76A3 3 0 0 1 17 8v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z",
    fill: primaryFill
  }));
};

exports.FormMultipleRegular = wrapIcon_1.default( /*#__PURE__*/FormMultipleRegularIcon, 'FormMultipleRegular');

const FormNewFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6c-.75-.38-1.6-.6-2.5-.6h-5a.5.5 0 0 0 0 1h1.84a5.5 5.5 0 0 0-1.74 7H6a3 3 0 0 1-3-3V6Zm2.5-1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm11 1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.FormNewFilled = wrapIcon_1.default( /*#__PURE__*/FormNewFilledIcon, 'FormNewFilled');

const FormNewRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6Zm3.5 7h1.84c.9-.63 1.98-1 3.16-1h-5a.5.5 0 0 0 0 1Zm-4-5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.FormNewRegular = wrapIcon_1.default( /*#__PURE__*/FormNewRegularIcon, 'FormNewRegular');

const Fps120FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 2.75a.75.75 0 0 0-1.4-.39 1.71 1.71 0 0 1-.1.16l-.33.41c-.3.33-.72.68-1.2.87a.75.75 0 0 0 .56 1.4c.36-.15.69-.34.97-.55v4.6a.75.75 0 0 0 1.5 0v-6.5Zm8 1.75a2.5 2.5 0 1 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm3.5 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3ZM3 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 0 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 0 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 1 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM7.99 4.37v.01a.75.75 0 0 1-1.48-.25c-.07.41 0 0 0 0a1.71 1.71 0 0 1 .1-.37A2.7 2.7 0 0 1 9.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.7 6.7 0 0 1-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 0 0-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 0 0-.2.43Z",
    fill: primaryFill
  }));
};

exports.Fps120Filled = wrapIcon_1.default( /*#__PURE__*/Fps120FilledIcon, 'Fps120Filled');

const Fps120RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 10a.5.5 0 0 1-.5-.5V3.93c-.33.34-.75.7-1.24 1a.5.5 0 1 1-.52-.86 5.58 5.58 0 0 0 1.83-1.82.5.5 0 0 1 .93.26V9.5a.5.5 0 0 1-.5.5ZM12 4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm4 0a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0v-3Zm-13 8c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 1 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 1 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 0 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM6.99 4.08a.5.5 0 0 1-.57.41C5.94 4.41 6 3.92 6 3.92v-.04a1.66 1.66 0 0 1 .09-.28c.06-.18.17-.41.34-.65A2.44 2.44 0 0 1 8.5 2c.86 0 1.59.3 2.05.88.46.58.59 1.36.44 2.2a2.12 2.12 0 0 1-1 1.49c-.34.21-.75.38-1.1.52l-.33.14c-.46.2-.84.4-1.1.72-.2.24-.36.56-.43 1.05h3.47a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5c0-.97.25-1.67.69-2.19.42-.5.98-.79 1.47-1l.43-.18c.33-.13.6-.25.85-.4.3-.2.5-.43.57-.81.11-.66-.01-1.13-.24-1.42-.23-.3-.63-.5-1.27-.5-.7 0-1.06.29-1.26.55a1.5 1.5 0 0 0-.25.53Z",
    fill: primaryFill
  }));
};

exports.Fps120Regular = wrapIcon_1.default( /*#__PURE__*/Fps120RegularIcon, 'Fps120Regular');

const Fps124FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.26 3.03a1 1 0 0 1 .76.97v8a1 1 0 0 1-2 0V6.5l-.47.33a1 1 0 0 1-1.1-1.66 6.55 6.55 0 0 0 1.69-1.63v-.01a1 1 0 0 1 1.12-.5ZM18 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0V6ZM4 15.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H5.5V18h1.75a.75.75 0 0 1 0 1.5H5.5v1.73a.75.75 0 0 1-1.5 0v-5.48Zm6.25-.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V19.5h.75a2.25 2.25 0 1 0 0-4.5h-1.5Zm1.5 3H11v-1.5h.75a.75.75 0 0 1 0 1.5Zm3.5-.88c0-1.17.95-2.12 2.13-2.12H18a2 2 0 0 1 2 2 .75.75 0 0 1-1.5 0 .5.5 0 0 0-.5-.5h-.63a.62.62 0 1 0 0 1.25h.5a2.13 2.13 0 0 1 0 4.25h-.62a2 2 0 0 1-2-2 .75.75 0 0 1 1.5 0c0 .28.22.5.5.5h.63a.62.62 0 1 0 0-1.25h-.5a2.13 2.13 0 0 1-2.13-2.13ZM8.13 6.19a1 1 0 0 0 1.29-.54l.03-.05c.04-.06.1-.14.2-.22.16-.16.49-.37 1.1-.37.42 0 .75.13.94.3.19.15.31.37.31.7 0 .55-.17.86-.42 1.12-.3.32-.73.56-1.33.9a6.9 6.9 0 0 0-1.8 1.33A3.82 3.82 0 0 0 7.5 12a1 1 0 0 0 1 1H13a1 1 0 1 0 0-2H9.72c.07-.12.15-.22.23-.32.3-.33.72-.6 1.3-.92l.1-.06c.51-.3 1.16-.66 1.67-1.19C13.6 7.9 14 7.1 14 6c0-.91-.38-1.7-1.01-2.23A3.44 3.44 0 0 0 10.75 3c-1.14 0-1.94.42-2.45.89a3.11 3.11 0 0 0-.73.99s-.2.52 0 0a1 1 0 0 0 .56 1.3Z",
    fill: primaryFill
  }));
};

exports.Fps124Filled = wrapIcon_1.default( /*#__PURE__*/Fps124FilledIcon, 'Fps124Filled');

const Fps124RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3.75a.75.75 0 0 0-1.36-.44l-.02.02a6.36 6.36 0 0 1-.18.25c-.13.16-.31.4-.54.64a7.3 7.3 0 0 1-1.54 1.39.75.75 0 0 0 .78 1.28c.48-.29.95-.7 1.36-1.1v6.46a.75.75 0 0 0 1.5 0v-8.5Zm3.49 1.64A.75.75 0 0 1 8 5.13V5.1A1.36 1.36 0 0 1 8.04 5l.08-.26c.08-.2.21-.46.43-.72A3.04 3.04 0 0 1 11 3a3 3 0 0 1 3 3c0 1.02-.36 1.78-.9 2.36-.47.52-1.09.9-1.6 1.23l-.1.06c-.58.36-1.04.67-1.37 1.06-.19.22-.34.47-.43.79h3.65a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75c0-1.07.35-1.88.88-2.5.5-.6 1.17-1.03 1.72-1.37l.03-.02c.58-.36 1.03-.65 1.36-1 .3-.34.51-.74.51-1.36 0-.83-.67-1.5-1.5-1.5-.78 0-1.13.28-1.3.48a1.12 1.12 0 0 0-.21.4ZM17.99 3A3 3 0 0 0 15 6v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM16.5 6a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 1 1-3 0V6ZM4 15.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H5.5V18h1.75a.75.75 0 0 1 0 1.5H5.5v1.73a.75.75 0 0 1-1.5 0v-5.48Zm6.25-.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V19.5h.75a2.25 2.25 0 1 0 0-4.5h-1.5Zm1.5 3H11v-1.5h.75a.75.75 0 0 1 0 1.5Zm3.5-.88c0-1.17.95-2.12 2.13-2.12H18a2 2 0 0 1 2 2 .75.75 0 0 1-1.5 0 .5.5 0 0 0-.5-.5h-.63a.62.62 0 1 0 0 1.25h.5a2.13 2.13 0 0 1 0 4.25h-.62a2 2 0 0 1-2-2 .75.75 0 0 1 1.5 0c0 .28.22.5.5.5h.63a.62.62 0 1 0 0-1.25h-.5a2.13 2.13 0 0 1-2.13-2.13Z",
    fill: primaryFill
  }));
};

exports.Fps124Regular = wrapIcon_1.default( /*#__PURE__*/Fps124RegularIcon, 'Fps124Regular');

const Fps240FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.99 4.38a.75.75 0 0 1-1.48-.25v-.05a1.92 1.92 0 0 1 .1-.32A2.7 2.7 0 0 1 4.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.71 6.71 0 0 1-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 0 0-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 0 0-.2.43Zm0 0Zm0 0ZM16.5 2A2.5 2.5 0 0 0 14 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 16.5 2Zm1 5.5a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3ZM3.5 12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm.5 3v-2h1a1 1 0 1 1 0 2H9Zm4-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM8.75 2c.41 0 .75.34.75.75V5.5H11V2.75a.75.75 0 0 1 1.5 0V9.5a.75.75 0 0 1-1.5 0V7H8.75A.75.75 0 0 1 8 6.25v-3.5c0-.41.34-.75.75-.75ZM2.99 4.38Z",
    fill: primaryFill
  }));
};

exports.Fps240Filled = wrapIcon_1.default( /*#__PURE__*/Fps240FilledIcon, 'Fps240Filled');

const Fps240RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4.09v-.03l.04-.12c.04-.11.1-.25.2-.39.2-.26.55-.55 1.26-.55.64 0 1.04.2 1.27.5.23.3.35.76.24 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1A3.27 3.27 0 0 0 2 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3.03c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.49-.31.89-.76 1.01-1.49.15-.84.02-1.62-.44-2.2C6.1 2.29 5.36 2 4.5 2a2.44 2.44 0 0 0-2.49 1.88v.03S2 4 2 3.92a.5.5 0 0 0 .98.18Zm10 .41a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm4 3v-3a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0Zm-14 5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 1 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 1 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 0 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM9 2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5H11v2.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0V6H9V2.5Z",
    fill: primaryFill
  }));
};

exports.Fps240Regular = wrapIcon_1.default( /*#__PURE__*/Fps240RegularIcon, 'Fps240Regular');

const Fps30FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 6.5a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm-9 3.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Zm-6.5-8.5c.63 0 1-.46 1-.88 0-.4-.37-.87-1-.87-.26 0-.48.08-.64.2-.2.15-.41.3-.65.3-.62 0-1.09-.58-.7-1.06A2.54 2.54 0 0 1 6.5 2C7.88 2 9 3.06 9 4.38a2.3 2.3 0 0 1-.66 1.6A2.37 2.37 0 0 1 6.62 10h-.25c-.78 0-1.47-.38-1.9-.96-.36-.48.1-1.04.7-1.04.25 0 .47.16.67.32.15.11.33.18.53.18h.25a.87.87 0 1 0 0-1.75H6.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.Fps30Filled = wrapIcon_1.default( /*#__PURE__*/Fps30FilledIcon, 'Fps30Filled');

const Fps30RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 7A1.5 1.5 0 0 1 11 7.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Zm-9 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM6.75 3h-.5c-.49 0-.91.28-1.12.69-.08.17-.24.31-.44.31-.36 0-.65-.32-.5-.65A2.25 2.25 0 0 1 6.25 2h.5a2.25 2.25 0 0 1 1.41 4 2.25 2.25 0 0 1-1.41 4h-.5c-.92 0-1.71-.55-2.06-1.35-.15-.33.14-.65.5-.65.2 0 .36.14.44.31.2.41.63.69 1.12.69h.5a1.25 1.25 0 0 0 0-2.5H6.5a.5.5 0 0 1 0-1h.25a1.25 1.25 0 0 0 0-2.5Z",
    fill: primaryFill
  }));
};

exports.Fps30Regular = wrapIcon_1.default( /*#__PURE__*/Fps30RegularIcon, 'Fps30Regular');

const Fps60FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2A2.5 2.5 0 0 0 4 4.5v3A2.5 2.5 0 1 0 6.5 5h-.1c-.32 0-.62.06-.9.17V4.5a1 1 0 0 1 1-1h.25c.41 0 .75.34.75.75a.75.75 0 0 0 1.5 0C9 3.01 8 2 6.75 2H6.5Zm-1 5.5v-.1c0-.5.4-.9.9-.9h.1a1 1 0 1 1-1 1Zm6-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm1-2.5A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm-9 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.Fps60Filled = wrapIcon_1.default( /*#__PURE__*/Fps60FilledIcon, 'Fps60Filled');

const Fps60RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 7A1.5 1.5 0 0 1 11 7.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Zm-9 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM4 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0 .5.5 0 0 0 1 0 2.5 2.5 0 0 0-5 0ZM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.Fps60Regular = wrapIcon_1.default( /*#__PURE__*/Fps60RegularIcon, 'Fps60Regular');

const Fps960FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 10A2.5 2.5 0 0 0 7 7.5v-3A2.5 2.5 0 1 0 4.5 7h.1c.32 0 .62-.06.9-.17v.67a1 1 0 0 1-1 1h-.25a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0C2 8.99 3 10 4.25 10h.25Zm1-5.5v.1c0 .5-.4.9-.9.9h-.1a1 1 0 1 1 1-1Zm5-2.5A2.5 2.5 0 0 0 8 4.5v3A2.5 2.5 0 1 0 10.5 5h-.1c-.32 0-.62.06-.9.17V4.5a1 1 0 0 1 1-1h.25c.41 0 .75.34.75.75a.75.75 0 0 0 1.5 0C13 3.01 12 2 10.75 2h-.25Zm-1 5.5v-.1c0-.5.4-.9.9-.9h.1a1 1 0 1 1-1 1Zm6-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm1-2.5A2.5 2.5 0 0 0 14 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 16.5 2Zm-13 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm2.5 2a1 1 0 0 1-1 1H9v-2h1a1 1 0 0 1 1 1Zm2-.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.Fps960Filled = wrapIcon_1.default( /*#__PURE__*/Fps960FilledIcon, 'Fps960Filled');

const Fps960RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 7.5a2.5 2.5 0 0 1-5 0 .5.5 0 0 1 1 0 1.5 1.5 0 1 0 3 0v-1a2.5 2.5 0 1 1 1-2v3Zm-1-3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM10.5 2A2.5 2.5 0 0 0 8 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0 .5.5 0 0 0 1 0A2.5 2.5 0 0 0 10.5 2Zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6-6c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5ZM14 4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3ZM3.5 12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.Fps960Regular = wrapIcon_1.default( /*#__PURE__*/Fps960RegularIcon, 'Fps960Regular');

const FullScreenMaximizeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.25C3 4.01 4 3 5.25 3h1.87a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 0-.75.75v1.87a.75.75 0 1 1-1.5 0V5.25Zm9.13-1.5c0-.41.34-.75.75-.75h1.87C15.99 3 17 4 17 5.25v1.87a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 0-.75-.75h-1.87a.75.75 0 0 1-.75-.75Zm-8.38 8.38c.41 0 .75.34.75.75v1.87c0 .41.34.75.75.75h1.87a.75.75 0 0 1 0 1.5H5.25C4.01 17 3 16 3 14.75v-1.87c0-.41.34-.75.75-.75Zm12.5 0c.41 0 .75.34.75.75v1.87c0 1.24-1 2.25-2.25 2.25h-1.87a.75.75 0 0 1 0-1.5h1.87c.41 0 .75-.34.75-.75v-1.87c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.FullScreenMaximizeFilled = wrapIcon_1.default( /*#__PURE__*/FullScreenMaximizeFilledIcon, 'FullScreenMaximizeFilled');

const FullScreenMaximizeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5c0-1.1.9-2 2-2h2a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v2a.5.5 0 0 1-1 0V5Zm9.5-1.5c0-.28.22-.5.5-.5h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-2a.5.5 0 0 1-.5-.5Zm-9 9c.28 0 .5.22.5.5v2a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2v-2c0-.28.22-.5.5-.5Zm13 0c.28 0 .5.22.5.5v2a2 2 0 0 1-2 2h-2a.5.5 0 0 1 0-1h2a1 1 0 0 0 1-1v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.FullScreenMaximizeRegular = wrapIcon_1.default( /*#__PURE__*/FullScreenMaximizeRegularIcon, 'FullScreenMaximizeRegular');

const FullScreenMinimizeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 5.5a.5.5 0 0 1-.5-.5V2.75a.75.75 0 0 0-1.5 0V5c0 1.1.9 2 2 2h2.25a.75.75 0 0 0 0-1.5H15ZM5.5 15a.5.5 0 0 0-.5-.5H2.75a.75.75 0 0 1 0-1.5H5a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V15Zm9 0c0-.28.22-.5.5-.5h2.25a.75.75 0 0 0 0-1.5H15a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V15Zm-9-10a.5.5 0 0 1-.5.5H2.75a.75.75 0 0 0 0 1.5H5a2 2 0 0 0 2-2V2.75a.75.75 0 0 0-1.5 0V5Z",
    fill: primaryFill
  }));
};

exports.FullScreenMinimizeFilled = wrapIcon_1.default( /*#__PURE__*/FullScreenMinimizeFilledIcon, 'FullScreenMinimizeFilled');

const FullScreenMinimizeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 5a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1h-2a2 2 0 0 1-2-2V3a.5.5 0 0 1 1 0v2ZM6 15a1 1 0 0 0-1-1H3a.5.5 0 0 1 0-1h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0v-2Zm8 0a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1h-2a2 2 0 0 0-2 2v2a.5.5 0 0 0 1 0v-2ZM5 6a1 1 0 0 0 1-1V3a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H3a.5.5 0 0 1 0-1h2Z",
    fill: primaryFill
  }));
};

exports.FullScreenMinimizeRegular = wrapIcon_1.default( /*#__PURE__*/FullScreenMinimizeRegularIcon, 'FullScreenMinimizeRegular');

const GamesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 4a5.5 5.5 0 1 0 0 11h5a5.5 5.5 0 1 0 0-11h-5ZM6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.GamesFilled = wrapIcon_1.default( /*#__PURE__*/GamesFilledIcon, 'GamesFilled');

const GamesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 9.5A5.5 5.5 0 0 1 7.5 4h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 2 9.5ZM7.5 5a4.5 4.5 0 0 0 0 9h5a4.5 4.5 0 1 0 0-9h-5Z",
    fill: primaryFill
  }));
};

exports.GamesRegular = wrapIcon_1.default( /*#__PURE__*/GamesRegularIcon, 'GamesRegular');

const GanttChartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.5A2.5 2.5 0 0 1 4.5 4H7v2H4.5a1.5 1.5 0 1 0 0 3H7v7H4.5A2.5 2.5 0 0 1 2 13.5v-7ZM8 16V9.5c0 .83.67 1.5 1.5 1.5H11v.5c0 .65.42 1.2 1 1.41V16H8Zm2-8h2V4H8v2h.5c.83 0 1.5.67 1.5 1.5V8Zm5.5 5H13v3h2.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H13v4h.5c.83 0 1.5.67 1.5 1.5v.5h.5a1.5 1.5 0 0 1 0 3Zm-11-6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.GanttChartFilled = wrapIcon_1.default( /*#__PURE__*/GanttChartFilledIcon, 'GanttChartFilled');

const GanttChartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-8-7A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5C3 5.67 3.67 5 4.5 5H7v1h1V5h4v3h1V5h2.5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H13v-2h-1v2H8V9H7v6H4.5A1.5 1.5 0 0 1 3 13.5v-7Z",
    fill: primaryFill
  }));
};

exports.GanttChartRegular = wrapIcon_1.default( /*#__PURE__*/GanttChartRegularIcon, 'GanttChartRegular');

const GasFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.08 2.22A.5.5 0 0 1 11.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 0 1 0-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78ZM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3Zm-1.15 5.15a.5.5 0 0 0-.7 0L10 10.29 7.85 8.15a.5.5 0 1 0-.7.7L9.29 11l-2.14 2.15a.5.5 0 0 0 .7.7L10 11.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 11l2.14-2.15a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.GasFilled = wrapIcon_1.default( /*#__PURE__*/GasFilledIcon, 'GasFilled');

const GasRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.08 2.22A.5.5 0 0 1 11.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 0 1 0-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78ZM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3ZM6.5 6C5.67 6 5 6.67 5 7.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7Zm6.35 2.15c.2.2.2.5 0 .7L10.71 11l2.14 2.15a.5.5 0 0 1-.7.7L10 11.71l-2.15 2.14a.5.5 0 0 1-.7-.7L9.29 11 7.15 8.85a.5.5 0 1 1 .7-.7L10 10.29l2.15-2.14c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.GasRegular = wrapIcon_1.default( /*#__PURE__*/GasRegularIcon, 'GasRegular');

const GasPumpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 17V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.17c0-.33-.1-.64-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.47c.32.43.5.96.5 1.5v4.33a2.5 2.5 0 0 1-4 2V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4ZM6.5 4a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5Z",
    fill: primaryFill
  }));
};

exports.GasPumpFilled = wrapIcon_1.default( /*#__PURE__*/GasPumpFilledIcon, 'GasPumpFilled');

const GasPumpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5V17h8V4.5c0-.83-.67-1.5-1.5-1.5h-5C5.67 3 5 3.67 5 4.5Zm9 11V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.17c0-.33-.1-.64-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.47c.32.43.5.96.5 1.5v4.33a2.5 2.5 0 0 1-4 2Zm-8-11v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM7 5h4v3H7V5Z",
    fill: primaryFill
  }));
};

exports.GasPumpRegular = wrapIcon_1.default( /*#__PURE__*/GasPumpRegularIcon, 'GasPumpRegular');

const GatherFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 8v4H2V8h4Zm-3.85 8.85A.5.5 0 0 1 2 16.5V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.35-.15ZM2.5 3H4a2 2 0 0 1 2 2v2H2V3.5a.5.5 0 0 1 .5-.5ZM18 6.5V10h-4V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5Zm0 8V11h-4v2a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5Zm-7.85-3.35a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H8a.5.5 0 1 0 0 1h2.8l-.65.65Z",
    fill: primaryFill
  }));
};

exports.GatherFilled = wrapIcon_1.default( /*#__PURE__*/GatherFilledIcon, 'GatherFilled');

const GatherRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 15V5a2 2 0 0 0-2-2H2.5a.5.5 0 1 0 0 1H4a1 1 0 0 1 1 1v2H2.5a.5.5 0 1 0 0 1H5v4H2.5a.5.5 0 0 0 0 1H5v2a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2-2Zm11.85-4.15a.5.5 0 0 1-.35.15H15v2a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H16a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1v2h2.5a.5.5 0 0 1 .35.85ZM10 11.5a.5.5 0 0 1 .15-.35l.64-.65H8a.5.5 0 0 1 0-1h2.8l-.65-.65a.5.5 0 1 1 .7-.7l1.5 1.5a.5.5 0 0 1 0 .7l-1.5 1.5a.5.5 0 0 1-.85-.35Z",
    fill: primaryFill
  }));
};

exports.GatherRegular = wrapIcon_1.default( /*#__PURE__*/GatherRegularIcon, 'GatherRegular');

const GaugeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1.82-12.66a5 5 0 0 0-5.36 8.2.5.5 0 0 1-.7.7 6 6 0 0 1 6.42-9.83.5.5 0 0 1-.36.93Zm3.77 2.48a6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .93-.36Zm-1.5-2a.5.5 0 0 1 .1.62l-.1.2a323.59 323.59 0 0 1-.69 1.2l-.23.4-.3.53a184.46 184.46 0 0 1-1.48 2.48 4.28 4.28 0 0 1-.16.23 1.5 1.5 0 1 1-2.28-1.95c.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 0 1 2.96-2.4l.27-.22.37-.3a.5.5 0 0 1 .64.02Z",
    fill: primaryFill
  }));
};

exports.GaugeFilled = wrapIcon_1.default( /*#__PURE__*/GaugeFilledIcon, 'GaugeFilled');

const GaugeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.47 5.06a.5.5 0 0 1-.65.28 5 5 0 0 0-5.36 8.2.5.5 0 1 1-.7.7 6 6 0 0 1 6.42-9.83c.26.1.39.39.29.65Zm2.47 2.47a.5.5 0 0 1 .65.29 6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .28-.65Zm-.85-1.71a.5.5 0 0 0-.64-.01l-.18.14A335.17 335.17 0 0 0 9.3 9.2c-.14.12-.27.24-.34.33a1.5 1.5 0 1 0 2.28 1.95l.27-.4.38-.62a123.47 123.47 0 0 0 2.2-3.82l.12-.2a.5.5 0 0 0-.11-.62ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
    fill: primaryFill
  }));
};

exports.GaugeRegular = wrapIcon_1.default( /*#__PURE__*/GaugeRegularIcon, 'GaugeRegular');

const GaugeAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 1 0-8-7.75c.6-.48 1.3-.85 2.05-1.06a6 6 0 0 1 8.13-4.78.5.5 0 0 1-.36.93A5 5 0 0 0 5.1 9.01a5.58 5.58 0 0 1 3.57 1c.06-.17.15-.34.28-.48.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 0 1 2.96-2.4l.27-.22.37-.3a.5.5 0 0 1 .75.64l-.11.2a323.59 323.59 0 0 1-.69 1.2l-.23.4-.3.53a184.46 184.46 0 0 1-1.48 2.48 4.28 4.28 0 0 1-.16.23 1.5 1.5 0 0 1-.84.5A5.48 5.48 0 0 1 9.75 18H10Zm5.6-10.18a6 6 0 0 1-1.36 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .93-.36ZM8 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.GaugeAddFilled = wrapIcon_1.default( /*#__PURE__*/GaugeAddFilledIcon, 'GaugeAddFilled');

const GaugeAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.4 16.99a7 7 0 1 0-7.39-7.4c-.36.19-.7.4-1 .66L2 10a8 8 0 1 1 7.75 8c.25-.31.47-.65.66-1.01Zm2.07-11.93a.5.5 0 0 1-.65.28A5 5 0 0 0 5.1 9.01c-.36.03-.71.1-1.05.18a6 6 0 0 1 8.13-4.78c.26.1.39.39.29.65ZM8.67 10c.72.5 1.3 1.18 1.72 1.96.31-.06.61-.23.84-.5.07-.08.17-.23.27-.38l.38-.63a123.47 123.47 0 0 0 2.2-3.82l.12-.2a.5.5 0 0 0-.75-.63l-.18.14A335.17 335.17 0 0 0 9.3 9.2c-.14.12-.27.24-.34.33-.13.14-.22.3-.28.48Zm6.27-2.48a.5.5 0 0 1 .65.29 6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .28-.65ZM8 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
};

exports.GaugeAddRegular = wrapIcon_1.default( /*#__PURE__*/GaugeAddRegularIcon, 'GaugeAddRegular');

const GavelFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.67 7.59a1.5 1.5 0 0 1-.23-2.3l2.84-2.85a1.5 1.5 0 0 1 2.28.19l.47.65L7.3 8.01l-.63-.42Zm1.48 1 4.47-4.49 1.33 1.84a.5.5 0 0 0 .1.11l1.85 1.33-4.48 4.47-1.26-1.87a.5.5 0 0 0-.14-.14L8.15 8.58Zm3.84 4.11 4.73-4.73.65.47c.75.54.84 1.63.19 2.28l-2.84 2.84a1.5 1.5 0 0 1-2.31-.22l-.42-.64Zm-3.8-2.89L2.4 15.6a1.41 1.41 0 1 0 2 2l5.78-5.78-.8-1.2-1.2-.8ZM12 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.GavelFilled = wrapIcon_1.default( /*#__PURE__*/GavelFilledIcon, 'GavelFilled');

const GavelRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.44 5.28a1.5 1.5 0 0 0 .23 2.31l1.76 1.18-5.85 5.86a1.98 1.98 0 1 0 2.8 2.8l5.85-5.86 1.18 1.77c.53.78 1.64.89 2.3.22l2.85-2.84a1.5 1.5 0 0 0-.19-2.28l-3.31-2.39a.5.5 0 0 1-.11-.1l-2.4-3.32a1.5 1.5 0 0 0-2.27-.19L6.44 5.28Zm4.22 5.44-6 6a.98.98 0 0 1-1.37-1.39l5.99-5.99.74.5c.06.04.1.08.14.14l.5.74ZM7.22 6.76a.5.5 0 0 1-.07-.77l2.84-2.84a.5.5 0 0 1 .76.06l.57.79-3.3 3.3-.8-.54Zm1.65 1.1 3.04-3.04 1.22 1.7c.1.14.21.25.34.35l1.71 1.22-3.04 3.04-1.15-1.71a1.5 1.5 0 0 0-.41-.41L8.87 7.86ZM16 8.7l.79.56a.5.5 0 0 1 .06.76l-2.84 2.84a.5.5 0 0 1-.77-.07l-.53-.8 3.3-3.3Zm-4 7.81c0-.28.22-.5.5-.5h3a.5.5 0 1 1 0 1h2a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1h2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.GavelRegular = wrapIcon_1.default( /*#__PURE__*/GavelRegularIcon, 'GavelRegular');

const GestureFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.75 4a.75.75 0 0 0-.3 1.43l9.06 4.1-9.6 4.8a.75.75 0 1 0 .68 1.34l11-5.5a.75.75 0 0 0-.03-1.35L9.23 5.5h5.52a.75.75 0 0 0 0-1.5h-9Z",
    fill: primaryFill
  }));
};

exports.GestureFilled = wrapIcon_1.default( /*#__PURE__*/GestureFilledIcon, 'GestureFilled');

const GestureRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.01 4.4A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.8l8.9 4.04a.5.5 0 0 1 .04.9l-11 5.92a.5.5 0 1 1-.48-.88l10.12-5.44L5.29 4.96a.5.5 0 0 1-.28-.57ZM17 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.GestureRegular = wrapIcon_1.default( /*#__PURE__*/GestureRegularIcon, 'GestureRegular');

const GifFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4ZM6.85 7C5.18 7 4 8.32 4 10c0 1.64 1.26 3 2.85 3 1.2 0 2.07-.8 2.14-1.63l.01-.12V9.9a.52.52 0 0 0-.44-.4h-.1l-.92-.01h-.1A.51.51 0 0 0 7 10c0 .25.2.45.44.5h.48v.83c-.07.32-.47.67-1.07.67-.96 0-1.77-.88-1.77-2 0-1.17.74-2 1.77-2 .46 0 .83.07 1.1.2.26.12.59.02.72-.23.14-.24.03-.55-.24-.67C8 7.1 7.47 7 6.85 7ZM11 7a.5.5 0 0 0-.5.41v5.18a.5.5 0 0 0 1 0V7.41A.5.5 0 0 0 11 7Zm4.5 0h-2a.5.5 0 0 0-.5.41v5.18a.5.5 0 0 0 1 0V11h1.59a.5.5 0 0 0 0-1H14V8h1.59a.5.5 0 0 0 0-1h-.09Z",
    fill: primaryFill
  }));
};

exports.GifFilled = wrapIcon_1.default( /*#__PURE__*/GifFilledIcon, 'GifFilled');

const GifRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4Zm-.15 1H4.75C3.82 4 3.07 4.8 3 5.8V14.07c0 1.02.72 1.86 1.63 1.93h10.62c.93 0 1.68-.8 1.75-1.8V5.93c0-1.02-.72-1.86-1.63-1.93h-.12Zm-8.4 3c.62 0 1.15.1 1.58.3.27.12.38.43.24.67a.56.56 0 0 1-.72.22C7.68 8.07 7.3 8 6.85 8c-1.03 0-1.77.83-1.77 2 0 1.12.81 2 1.77 2 .6 0 1-.35 1.06-.67v-.83h-.37c-.3 0-.54-.22-.54-.5 0-.25.2-.45.44-.5h1.02c.26 0 .49.18.53.41l.01.1v1.24C9 12.12 8.11 13 6.85 13A2.92 2.92 0 0 1 4 10c0-1.68 1.18-3 2.85-3ZM11 7a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-1 .09V7.5c0-.28.22-.5.5-.5Zm4.5 0a.5.5 0 0 1 .09 1H14v2h1.5a.5.5 0 0 1 .09 1H14v1.5a.5.5 0 0 1-1 .09V7.5c0-.28.22-.5.5-.5h2Z",
    fill: primaryFill
  }));
};

exports.GifRegular = wrapIcon_1.default( /*#__PURE__*/GifRegularIcon, 'GifRegular');

const GiftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 11v7h-3A2.5 2.5 0 0 1 4 15.66V11h5.5Zm6.5 0v4.5a2.5 2.5 0 0 1-2.34 2.5H10.5v-7H16Zm-4-9a2.5 2.5 0 0 1 2 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.5V6h-1v4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a2.5 2.5 0 1 1 4-3c.46-.6 1.18-1 2-1Zm0 1c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 0 0 0-3ZM8 3a1.5 1.5 0 0 0-.14 3H9.5V4.36A1.5 1.5 0 0 0 8 3Z",
    fill: primaryFill
  }));
};

exports.GiftFilled = wrapIcon_1.default( /*#__PURE__*/GiftFilledIcon, 'GiftFilled');

const GiftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2a2.5 2.5 0 0 1 2 4h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5V11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a2.5 2.5 0 1 1 4-3c.46-.6 1.18-1 2-1Zm-2.5 9H5v4.5c0 .83.67 1.5 1.5 1.5h3v-6Zm5.5 0h-4.5v6h3c.83 0 1.5-.67 1.5-1.5V11ZM9.5 7H4v3h5.5V7ZM16 7h-5.5v3H16V7Zm-4-4c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 0 0 0-3ZM8 3a1.5 1.5 0 0 0-.14 3H9.5V4.36A1.5 1.5 0 0 0 8 3Z",
    fill: primaryFill
  }));
};

exports.GiftRegular = wrapIcon_1.default( /*#__PURE__*/GiftRegularIcon, 'GiftRegular');

const GiftCardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4H4.75A2.75 2.75 0 0 0 2 6.75V9h2.27A2 2 0 0 1 7 6.27V4Zm1 4v1h1a1 1 0 1 0-1-1Zm2.73 1A2 2 0 0 0 8 6.27V4h7.25A2.75 2.75 0 0 1 18 6.75V9h-7.27Zm-2.02 1 1.64 1.65a.5.5 0 0 1-.7.7L8 10.71V16h7.25A2.75 2.75 0 0 0 18 13.25V10H8.7ZM7 16v-5.3l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 10H2v3.25A2.75 2.75 0 0 0 4.75 16H7Zm0-8a1 1 0 1 0-1 1h1V8Z",
    fill: primaryFill
  }));
};

exports.GiftCardFilled = wrapIcon_1.default( /*#__PURE__*/GiftCardFilledIcon, 'GiftCardFilled');

const GiftCardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM3 10v3.25c0 .97.78 1.75 1.75 1.75H7v-4.3l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 10H3Zm1.27-1A2 2 0 0 1 7 6.27V5H4.75C3.78 5 3 5.78 3 6.75V9h1.27ZM6 9h1V8a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.73 1H17V6.75C17 5.78 16.22 5 15.25 5H8v1.27A2 2 0 0 1 10.73 9Zm-2.02 1 1.64 1.65a.5.5 0 0 1-.7.7L8 10.71V15h7.25c.97 0 1.75-.78 1.75-1.75V10H8.7Z",
    fill: primaryFill
  }));
};

exports.GiftCardRegular = wrapIcon_1.default( /*#__PURE__*/GiftCardRegularIcon, 'GiftCardRegular');

const GiftCardAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2Zm7.02 6H8V8.7l1.65 1.65a.5.5 0 0 0 .7-.7L8.71 8H18v2.26A5.5 5.5 0 0 0 9.02 14ZM18 7h-7.27A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 6v1h1a1 1 0 1 0-1-1ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GiftCardAddFilled = wrapIcon_1.default( /*#__PURE__*/GiftCardAddFilledIcon, 'GiftCardAddFilled');

const GiftCardAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.5a5.5 5.5 0 0 0-1-.65V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.2c-.08.32-.15.66-.18 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3C3.78 3 3 3.78 3 4.75V7h1.27A2 2 0 0 1 7 4.27V3H4.75ZM8 3v1.27A2 2 0 0 1 10.73 7H17V4.75C17 3.78 16.22 3 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1Zm-3 6.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3v3.25Zm16 3.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GiftCardAddRegular = wrapIcon_1.default( /*#__PURE__*/GiftCardAddRegularIcon, 'GiftCardAddRegular');

const GiftCardArrowRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2Zm6 6h1.02A5.5 5.5 0 0 1 18 10.26V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V14Zm10-7h-7.27A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 7V6a1 1 0 1 1 1 1H8ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.GiftCardArrowRightFilled = wrapIcon_1.default( /*#__PURE__*/GiftCardArrowRightFilledIcon, 'GiftCardArrowRightFilled');

const GiftCardArrowRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.5a5.5 5.5 0 0 0-1-.65V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.2c-.08.32-.15.66-.18 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3C3.78 3 3 3.78 3 4.75V7h1.27A2 2 0 0 1 7 4.27V3H4.75ZM8 3v1.27A2 2 0 0 1 10.73 7H17V4.75C17 3.78 16.22 3 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1ZM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3Zm16 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.GiftCardArrowRightRegular = wrapIcon_1.default( /*#__PURE__*/GiftCardArrowRightRegularIcon, 'GiftCardArrowRightRegular');

const GiftCardMoneyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2Zm1 4v1h1a1 1 0 1 0-1-1Zm2.73 1A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7h-7.27ZM8.71 8l1.64 1.65a.5.5 0 0 1-.7.7L8 8.71V14h1v-.5a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05V8H8.7ZM7 14V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2v3.25A2.75 2.75 0 0 0 4.75 14H7Zm0-8a1 1 0 1 0-1 1h1V6Zm12 7.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.GiftCardMoneyFilled = wrapIcon_1.default( /*#__PURE__*/GiftCardMoneyFilledIcon, 'GiftCardMoneyFilled');

const GiftCardMoneyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75V11h-1V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.12a2 2 0 0 0-.12.69V14H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3Zm1.27-1A2 2 0 0 1 7 4.27V3H4.75C3.78 3 3 3.78 3 4.75V7h1.27ZM6 7h1V6a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.73 1H17V4.75C17 3.78 16.22 3 15.25 3H8v1.27A2 2 0 0 1 10.73 7ZM19 13.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.GiftCardMoneyRegular = wrapIcon_1.default( /*#__PURE__*/GiftCardMoneyRegularIcon, 'GiftCardMoneyRegular');

const GiftCardMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4H7v2.27A2 2 0 0 0 4.27 9H2V6.75A2.75 2.75 0 0 1 4.75 4ZM2 12.25V10h4.3l-1.65 1.65a.5.5 0 0 0 .7.7L7 10.71V15H4.75A2.75 2.75 0 0 1 2 12.25ZM8 15h5.25A2.75 2.75 0 0 0 16 12.25V10H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 10.71V15Zm2.73-6H16V6.75A2.75 2.75 0 0 0 13.25 4H8v2.27A2 2 0 0 1 10.73 9ZM8 9V8a1 1 0 1 1 1 1H8ZM6 9h1V8a1 1 0 1 0-1 1Zm.75 8c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0 0 17 12.25V6.63c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z",
    fill: primaryFill
  }));
};

exports.GiftCardMultipleFilled = wrapIcon_1.default( /*#__PURE__*/GiftCardMultipleFilledIcon, 'GiftCardMultipleFilled');

const GiftCardMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h8.5A2.75 2.75 0 0 0 16 12.25v-5.5A2.75 2.75 0 0 0 13.25 4h-8.5ZM3 12.25V10h3.3l-1.65 1.65a.5.5 0 0 0 .7.7L7 10.71V14H4.75C3.78 14 3 13.22 3 12.25ZM3 9V6.75C3 5.78 3.78 5 4.75 5H7v1.27A2 2 0 0 0 4.27 9H3Zm4 0H6a1 1 0 1 1 1-1v1Zm1 0V8a1 1 0 1 1 1 1H8Zm3-1a2 2 0 0 0-3-1.73V5h5.25c.97 0 1.75.78 1.75 1.75V9h-4.27A2 2 0 0 0 11 8Zm-.65 3.65L8.71 10H15v2.25c0 .97-.78 1.75-1.75 1.75H8v-3.3l1.65 1.65a.5.5 0 0 0 .7-.7ZM6.75 17c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0 0 17 12.25V6.63c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z",
    fill: primaryFill
  }));
};

exports.GiftCardMultipleRegular = wrapIcon_1.default( /*#__PURE__*/GiftCardMultipleRegularIcon, 'GiftCardMultipleRegular');

const GlanceFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 14.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5Zm0-10v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3C3.67 3 3 3.67 3 4.5Zm8 0v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5ZM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3Z",
    fill: primaryFill
  }));
};

exports.GlanceFilled = wrapIcon_1.default( /*#__PURE__*/GlanceFilledIcon, 'GlanceFilled');

const GlanceRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3C3.67 3 3 3.67 3 4.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3ZM4 4.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5ZM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3Zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5Zm-1-6c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 11 5.5v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3Zm-8 9c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3ZM4 14.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1Z",
    fill: primaryFill
  }));
};

exports.GlanceRegular = wrapIcon_1.default( /*#__PURE__*/GlanceRegularIcon, 'GlanceRegular');

const GlanceHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 13 7.5v-3c0-.83.67-1.5 1.5-1.5Zm-10 0h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 7.5v-3C3 3.67 3.67 3 4.5 3Zm0 8h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 15.5v-3c0-.83.67-1.5 1.5-1.5ZM9 12.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3Z",
    fill: primaryFill
  }));
};

exports.GlanceHorizontalFilled = wrapIcon_1.default( /*#__PURE__*/GlanceHorizontalFilledIcon, 'GlanceHorizontalFilled');

const GlanceHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 15.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5ZM11 7.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 7.5v-3C3 3.67 3.67 3 4.5 3h5c.83 0 1.5.67 1.5 1.5v3ZM9.5 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5Zm6 1c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h1Zm.5-1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3Zm-9 8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 15.5v-3c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h1Z",
    fill: primaryFill
  }));
};

exports.GlanceHorizontalRegular = wrapIcon_1.default( /*#__PURE__*/GlanceHorizontalRegularIcon, 'GlanceHorizontalRegular');

const GlassesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.19 4a2 2 0 0 0-1.52.7L2.37 8.5A1.5 1.5 0 0 0 2 9.5v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0 0 12.8 4H12a.5.5 0 1 0 0 1h.81a1 1 0 0 1 .76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 0 1 7.19 5H8a.5.5 0 0 0 0-1h-.81Z",
    fill: primaryFill
  }));
};

exports.GlassesFilled = wrapIcon_1.default( /*#__PURE__*/GlassesFilledIcon, 'GlassesFilled');

const GlassesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.19 4a2 2 0 0 0-1.52.7l-3.3 3.82c-.23.27-.37.6-.37.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0 0 12.8 4H12a.5.5 0 1 0 0 1h.81a1 1 0 0 1 .76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 0 1 7.19 5H8a.5.5 0 1 0 0-1h-.81ZM8 9.5v3c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 12.5v-3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5Zm4 3v-3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 .32.11l.05.07c.08.08.13.2.13.32v3c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.GlassesRegular = wrapIcon_1.default( /*#__PURE__*/GlassesRegularIcon, 'GlassesRegular');

const GlassesOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L4.89 5.6 2.36 8.52c-.22.27-.36.6-.36.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h1.3l.7.7v.8a2.5 2.5 0 0 0 2.5 2.5h.8l2.85 2.85a.5.5 0 0 0 .7-.7l-15-15ZM7.3 8H4.14L5.6 6.3 7.3 8Zm9.48 6.65L11.1 8.97A1.5 1.5 0 0 1 12.5 8h3.36l-2.29-2.65a1 1 0 0 0-.76-.35H12a.5.5 0 0 1 0-1h.81a2 2 0 0 1 1.52.7l3.2 3.71c.29.28.47.66.47 1.09v3c0 .92-.5 1.72-1.23 2.15ZM6.32 4.2l.8.8a1 1 0 0 1 .07 0H8a.5.5 0 0 0 0-1h-.81a2 2 0 0 0-.87.2Z",
    fill: primaryFill
  }));
};

exports.GlassesOffFilled = wrapIcon_1.default( /*#__PURE__*/GlassesOffFilledIcon, 'GlassesOffFilled');

const GlassesOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L4.89 5.6 2.36 8.52c-.22.27-.36.6-.36.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h1.3l.7.7v.8a2.5 2.5 0 0 0 2.5 2.5h.8l2.85 2.85a.5.5 0 0 0 .7-.7l-15-15ZM7.3 8H4.14L5.6 6.3 7.3 8ZM8 9.5v3c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 12.5v-3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5Zm4 .38-.9-.9A1.5 1.5 0 0 1 12.5 8h3.36l-2.29-2.65a1 1 0 0 0-.76-.35H12a.5.5 0 0 1 0-1h.81a2 2 0 0 1 1.52.7l3.2 3.71c.29.28.47.66.47 1.09v3c0 .92-.5 1.72-1.23 2.15l-.74-.75c.57-.2.97-.76.97-1.4v-3a.5.5 0 0 0-.12-.33l-.06-.06A.5.5 0 0 0 16.5 9h-4a.5.5 0 0 0-.5.5v.38ZM7.12 5l-.8-.8a2 2 0 0 1 .87-.2H8a.5.5 0 0 1 0 1h-.81a1 1 0 0 0-.07 0Z",
    fill: primaryFill
  }));
};

exports.GlassesOffRegular = wrapIcon_1.default( /*#__PURE__*/GlassesOffRegularIcon, 'GlassesOffRegular');

const GlobeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76a20.52 20.52 0 0 1 0 5h3.75a8 8 0 0 0 0-5Zm-.41 6h-3.5c-.18 1-.44 1.92-.76 2.7-.24.58-.52 1.1-.83 1.52a8.02 8.02 0 0 0 5.09-4.22ZM10 18c.3 0 .65-.15 1-.52.36-.37.71-.93 1.01-1.66.28-.66.5-1.45.67-2.32H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52Zm-2.1-.28a8.02 8.02 0 0 1-5.1-4.22h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.75a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5ZM7 10c0-.87.06-1.71.16-2.5h5.68a19.44 19.44 0 0 1 0 5H7.16C7.06 11.71 7 10.87 7 10Z",
    fill: primaryFill
  }));
};

exports.GlobeFilled = wrapIcon_1.default( /*#__PURE__*/GlobeFilledIcon, 'GlobeFilled');

const GlobeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm1.03 0h5.16a9.25 9.25 0 0 1-.56 1.6C11.41 16.4 10.66 17 10 17c-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6Zm5.37-1H7.21a14.87 14.87 0 0 1 0-5h5.58a14.86 14.86 0 0 1 0 5Zm.82 1h2.45a7.02 7.02 0 0 1-3.77 3.12c.24-.33.45-.7.64-1.1.27-.6.5-1.28.68-2.02Zm2.93-1h-2.73a15.97 15.97 0 0 0 0-5h2.73a6.98 6.98 0 0 1 0 5Zm-4.25-9.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1Z",
    fill: primaryFill
  }));
};

exports.GlobeRegular = wrapIcon_1.default( /*#__PURE__*/GlobeRegularIcon, 'GlobeRegular');

const GlobeAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.06.5.1 1 .13 1.52A5.57 5.57 0 0 1 18 10.25a7.93 7.93 0 0 0-.4-2.75Zm-4.77 0a19 19 0 0 1 .14 1.71 5.51 5.51 0 0 0-3.6 3.29H7.15a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6h1.77a5.53 5.53 0 0 0 1.14 4.47.99.99 0 0 1-.23.03c-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm16.61 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GlobeAddFilled = wrapIcon_1.default( /*#__PURE__*/GlobeAddFilledIcon, 'GlobeAddFilled');

const GlobeAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18h.25a5.5 5.5 0 0 1-.7-1.09c-.53-.2-1.1-.79-1.57-1.82-.22-.46-.4-1-.56-1.59h1.67c.06-.35.16-.68.28-1H7.21a14.87 14.87 0 0 1 0-5h5.58c.1.54.16 1.11.19 1.71.32-.09.65-.15 1-.18-.04-.53-.1-1.04-.17-1.53h2.73c.25.66.4 1.36.45 2.1.36.18.7.4 1 .65L18 10a8 8 0 1 0-8 8Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GlobeAddRegular = wrapIcon_1.default( /*#__PURE__*/GlobeAddRegularIcon, 'GlobeAddRegular');

const GlobeClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.06.5.1 1 .13 1.52A5.57 5.57 0 0 1 18 10.25a7.93 7.93 0 0 0-.4-2.75Zm-4.77 0a19 19 0 0 1 .14 1.71 5.51 5.51 0 0 0-3.6 3.29H7.15a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6h1.77a5.53 5.53 0 0 0 1.14 4.47.99.99 0 0 1-.23.03c-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm16.61 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.GlobeClockFilled = wrapIcon_1.default( /*#__PURE__*/GlobeClockFilledIcon, 'GlobeClockFilled');

const GlobeClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18h.25a5.5 5.5 0 0 1-.7-1.09c-.53-.2-1.1-.79-1.57-1.82-.22-.46-.4-1-.56-1.59h1.67c.06-.35.16-.68.28-1H7.21a14.87 14.87 0 0 1 0-5h5.58c.1.54.16 1.11.19 1.71.32-.09.65-.15 1-.18-.04-.53-.1-1.04-.17-1.53h2.73c.25.66.4 1.36.45 2.1.36.18.7.4 1 .65L18 10a8 8 0 1 0-8 8Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.GlobeClockRegular = wrapIcon_1.default( /*#__PURE__*/GlobeClockRegularIcon, 'GlobeClockRegular');

const GlobeDesktopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.1.8.15 1.63.15 2.5h4a8 8 0 0 0-.4-2.5Zm-4.77 0c.1.79.16 1.63.16 2.5h-2a2 2 0 0 0-2 2v.5H7.16a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6H9V16a2 2 0 0 0 1.41 1.91c-.14.06-.28.09-.41.09-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5ZM10 12a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z",
    fill: primaryFill
  }));
};

exports.GlobeDesktopFilled = wrapIcon_1.default( /*#__PURE__*/GlobeDesktopFilledIcon, 'GlobeDesktopFilled');

const GlobeDesktopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18c.22 0 .45 0 .67-.03a2 2 0 0 1-1.56-1.32 4.2 4.2 0 0 1-1.13-1.56c-.22-.46-.4-1-.56-1.59H9v-1H7.2a14.87 14.87 0 0 1 0-5h5.6c.13.77.2 1.62.2 2.5h1c0-.87-.07-1.71-.2-2.5h2.74c.3.78.46 1.62.46 2.5h1a8 8 0 1 0-8 8Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM10 12a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z",
    fill: primaryFill
  }));
};

exports.GlobeDesktopRegular = wrapIcon_1.default( /*#__PURE__*/GlobeDesktopRegularIcon, 'GlobeDesktopRegular');

const GlobeLocationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32Zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 0 0 2.8 6.5h3.5c.18-1 .44-1.92.76-2.7Zm5.88 0a7.19 7.19 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm.91 3.7h3.75c.24.71.37 1.47.4 2.25a4.52 4.52 0 0 0-4-.5c-.03-.6-.08-1.18-.15-1.75ZM13 9.76c-.01-.79-.07-1.55-.16-2.26H7.16a19.44 19.44 0 0 0 0 5h3.98c.27-1.13.93-2.1 1.86-2.74Zm-2 3.74H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.3 0 .65-.15 1-.52.26-.26.5-.61.74-1.06A5.94 5.94 0 0 1 11 13.5Zm-8.2 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 0 1-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8Zm3.35-1H2.4a8 8 0 0 1 0-5h3.75a20.52 20.52 0 0 0 0 5ZM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24Zm-2-.18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.GlobeLocationFilled = wrapIcon_1.default( /*#__PURE__*/GlobeLocationFilledIcon, 'GlobeLocationFilled');

const GlobeLocationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18a8 8 0 0 0 2.5-.4 8.14 8.14 0 0 1-.98-1.63c-.5.7-1.03 1.03-1.52 1.03-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H11c.02-.34.06-.68.14-1H7.21a14.87 14.87 0 0 1 0-5h5.58c.12.7.2 1.46.2 2.26.3-.2.64-.38 1-.5-.03-.61-.1-1.2-.18-1.76h2.73c.21.55.35 1.13.42 1.74.37.12.72.3 1.04.51A8 8 0 1 0 10 18Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24Zm-2-.18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.GlobeLocationRegular = wrapIcon_1.default( /*#__PURE__*/GlobeLocationRegularIcon, 'GlobeLocationRegular');

const GlobePersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.08.61.12 1.25.14 1.9a2.99 2.99 0 0 1 4 .93 8.26 8.26 0 0 0-.39-2.83ZM13 10v.35a2.99 2.99 0 0 0-.46 2.15H7.16a19.44 19.44 0 0 1 0-5h5.68c.1.79.16 1.63.16 2.5Zm-.32 3.5c-.04.24-.1.47-.15.7A2.5 2.5 0 0 0 11 16.5c0 .29.04.58.12.86l-.12.12c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32h5.36ZM7.9 17.72A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.GlobePersonFilled = wrapIcon_1.default( /*#__PURE__*/GlobePersonFilledIcon, 'GlobePersonFilled');

const GlobePersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.31 17.9A8 8 0 1 1 18 10.33a3.02 3.02 0 0 0-1.02-.95c-.05-.66-.2-1.3-.43-1.89h-2.73c.1.6.16 1.25.18 1.9-.4.24-.74.56-1 .95a15.93 15.93 0 0 0-.2-2.85H7.21a14.87 14.87 0 0 0 0 5h5.33c.06.36.19.7.36 1H7.42c.15.59.34 1.13.56 1.6C8.59 16.4 9.34 17 10 17c.32 0 .66-.14 1-.44 0 .46.11.91.31 1.33Zm.71-13C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 0 0 3.77 3.12c-.24-.33-.45-.7-.64-1.1Zm9-9.01a7.02 7.02 0 0 0-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.GlobePersonRegular = wrapIcon_1.default( /*#__PURE__*/GlobePersonRegularIcon, 'GlobePersonRegular');

const GlobeProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32Zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 0 0 2.8 6.5h3.5c.18-1 .44-1.92.76-2.7Zm5.88 0a7.19 7.19 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm.91 3.7h3.75a8 8 0 0 1 .4 2.75 5.48 5.48 0 0 0-4.02-1.23c-.03-.52-.07-1.03-.13-1.52Zm-.87 1.71a19 19 0 0 0-.14-1.71H7.16a19.44 19.44 0 0 0 0 5h2.21a5.51 5.51 0 0 1 3.61-3.29ZM9.1 13.5H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.08 0 .15 0 .23-.03A5.48 5.48 0 0 1 9.1 13.5Zm-6.29 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 0 1-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8Zm3.35-1H2.4a8 8 0 0 1 0-5h3.75a20.52 20.52 0 0 0 0 5Zm3.85 2a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z",
    fill: primaryFill
  }));
};

exports.GlobeProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/GlobeProhibitedFilledIcon, 'GlobeProhibitedFilled');

const GlobeProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 18H10a8 8 0 1 1 8-7.75 5.5 5.5 0 0 0-1.01-.66 6.97 6.97 0 0 0-.45-2.09h-2.73c.08.49.13 1 .16 1.53-.34.03-.67.1-.99.18-.03-.6-.1-1.17-.19-1.71H7.21a14.87 14.87 0 0 0 0 5h2.16c-.12.32-.22.65-.28 1H7.42c.15.59.34 1.13.56 1.6.48 1.02 1.04 1.6 1.58 1.81.19.4.42.76.7 1.09Zm1.77-13.1C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 0 0 3.77 3.12c-.24-.33-.45-.7-.64-1.1Zm9-9.01a7.02 7.02 0 0 0-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45Zm-6.07 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z",
    fill: primaryFill
  }));
};

exports.GlobeProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/GlobeProhibitedRegularIcon, 'GlobeProhibitedRegular');

const GlobeSearchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm5.05 1.52a7.18 7.18 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm4.66 3.7h-3.75a20.54 20.54 0 0 1 0 5h3.75a7.99 7.99 0 0 0 0-5Zm-3.9 6h3.5a8.02 8.02 0 0 1-5.09 4.22c.31-.43.59-.94.83-1.52.32-.78.58-1.7.76-2.7Zm-4.14.44c.07-.14.13-.29.18-.44h2.94a12.22 12.22 0 0 1-.87 2.77 1.5 1.5 0 0 0-.25-.33l-2-2Zm.41-1.44h2.87a19.44 19.44 0 0 0 0-5H7.16l-.04.3a4.5 4.5 0 0 1 2.85 4.7Zm-3.82-5v.05a4.54 4.54 0 0 0-.65-.05h.65Zm-3.75 0h3.1c-1.39 0-2.63.63-3.45 1.61.06-.55.18-1.1.35-1.61Zm3.1 8c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 14.1a3.5 3.5 0 1 0-2.8 1.4Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    fill: primaryFill
  }));
};

exports.GlobeSearchFilled = wrapIcon_1.default( /*#__PURE__*/GlobeSearchFilledIcon, 'GlobeSearchFilled');

const GlobeSearchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.05 9.11a8 8 0 1 1 9.72 8.7 1.5 1.5 0 0 0-.2-1.87l-.02-.01c.16-.24.32-.52.47-.84.22-.46.4-1 .56-1.59H9.74c.12-.32.2-.65.23-1h2.82a14.86 14.86 0 0 0 0-5H7.21l-.05.31c-.31-.12-.64-.2-.98-.26l.01-.05H3.46l-.2.6c-.46.26-.87.6-1.21 1.01Zm9.97-4.2C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45Zm9.67 7h-2.45c-.17.74-.4 1.42-.68 2.01-.19.4-.4.78-.64 1.1a7.02 7.02 0 0 0 3.77-3.11Zm-2.25-1h2.73a6.98 6.98 0 0 0 0-5h-2.73a15.97 15.97 0 0 1 0 5Zm2.25-6a7.02 7.02 0 0 0-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM8.3 14.1a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.1ZM8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.GlobeSearchRegular = wrapIcon_1.default( /*#__PURE__*/GlobeSearchRegularIcon, 'GlobeSearchRegular');

const GlobeShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76l.1.95a1.63 1.63 0 0 1 2.2.09c.42.43 1.08.98 1.85 1.27a7.98 7.98 0 0 0-.4-2.31Zm-4.77 0c.08.57.13 1.16.15 1.78-.47.33-1.03.61-1.63.7-.68.09-1.36.66-1.36 1.52v1H7.16a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6H10v.5c0 1.42.45 2.55 1.07 3.4l-.07.08c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm16.11-1.54a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z",
    fill: primaryFill
  }));
};

exports.GlobeShieldFilled = wrapIcon_1.default( /*#__PURE__*/GlobeShieldFilledIcon, 'GlobeShieldFilled');

const GlobeShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 18c.5 0 .97-.04 1.44-.13a5.85 5.85 0 0 1-.75-1.08c-.24.14-.47.21-.69.21-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H10v-1H7.2a14.87 14.87 0 0 1 0-5h5.6c.09.56.15 1.16.18 1.78a6.32 6.32 0 0 0 .95-.82c-.03-.32-.07-.65-.12-.96h2.73c.21.55.35 1.13.42 1.74.3.22.66.43 1.04.57A8 8 0 1 0 10 18Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1Zm6.21 7.58a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z",
    fill: primaryFill
  }));
};

exports.GlobeShieldRegular = wrapIcon_1.default( /*#__PURE__*/GlobeShieldRegularIcon, 'GlobeShieldRegular');

const GlobeStarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32Zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 0 0 2.8 6.5h3.5c.18-1 .44-1.92.76-2.7Zm5.88 0a7.19 7.19 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm.91 3.7h3.75a8 8 0 0 1 .4 2.75 5.48 5.48 0 0 0-4.02-1.23c-.03-.52-.07-1.03-.13-1.52Zm-.87 1.71a19 19 0 0 0-.14-1.71H7.16a19.44 19.44 0 0 0 0 5h2.21a5.51 5.51 0 0 1 3.61-3.29ZM9.1 13.5H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.08 0 .15 0 .23-.03A5.48 5.48 0 0 1 9.1 13.5Zm-6.29 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 0 1-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8Zm3.35-1H2.4a8 8 0 0 1 0-5h3.75a20.52 20.52 0 0 0 0 5ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.95-5.6H17c.48 0 .68.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 0 1 .96 0l.47 1.53Z",
    fill: primaryFill
  }));
};

exports.GlobeStarFilled = wrapIcon_1.default( /*#__PURE__*/GlobeStarFilledIcon, 'GlobeStarFilled');

const GlobeStarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.25 18H10a8 8 0 1 1 8-7.75 5.5 5.5 0 0 0-1.01-.66 6.97 6.97 0 0 0-.45-2.09h-2.73c.08.49.13 1 .16 1.53-.34.03-.67.1-.99.18-.03-.6-.1-1.17-.19-1.71H7.21a14.87 14.87 0 0 0 0 5h2.16c-.12.32-.22.65-.28 1H7.42c.15.59.34 1.13.56 1.6.48 1.02 1.04 1.6 1.58 1.81.19.4.42.76.7 1.09Zm1.77-13.1C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 0 0 3.77 3.12c-.24-.33-.45-.7-.64-1.1Zm9-9.01a7.02 7.02 0 0 0-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.95-5.6H17c.48 0 .68.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 0 1 .96 0l.47 1.53Z",
    fill: primaryFill
  }));
};

exports.GlobeStarRegular = wrapIcon_1.default( /*#__PURE__*/GlobeStarRegularIcon, 'GlobeStarRegular');

const GlobeSurfaceFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.12 7c.12-.93.32-1.76.58-2.42.21-.55.45-.97.7-1.23.24-.27.44-.35.6-.35.16 0 .36.08.6.35.25.26.49.68.7 1.23.26.66.46 1.49.58 2.42H8.12Zm-.35-2.78c.13-.34.28-.67.45-.95A6.02 6.02 0 0 0 4.34 7h2.78c.12-1.05.35-2 .65-2.78Zm4.46 0a6.18 6.18 0 0 0-.45-.95A6.02 6.02 0 0 1 15.66 7h-2.78c-.12-1.05-.35-2-.65-2.78ZM12.97 8h2.95a6.04 6.04 0 0 1 0 2h-2.95a17.34 17.34 0 0 0 0-2Zm-.09 3h2.78a6.02 6.02 0 0 1-3.88 3.73c.17-.28.32-.6.45-.95.3-.78.53-1.73.65-2.78Zm-2.28 3.65c-.24.27-.44.35-.6.35-.16 0-.36-.08-.6-.35a3.99 3.99 0 0 1-.7-1.23c-.26-.66-.46-1.49-.58-2.42h3.76c-.12.93-.32 1.76-.58 2.42-.21.55-.45.97-.7 1.23ZM4.34 11a6.02 6.02 0 0 0 3.88 3.73c-.17-.28-.32-.6-.45-.95-.3-.78-.53-1.73-.65-2.78H4.34Zm2.69-1H4.08a6.04 6.04 0 0 1 0-2h2.95a17.4 17.4 0 0 0 0 2Zm1-2a16.36 16.36 0 0 0 0 2h3.94a16.37 16.37 0 0 0 0-2H8.03ZM3.5 13h.75c.25.36.53.69.84 1A.5.5 0 0 1 5 14H3.89l-.75 3h13.72l-.75-3H15a.5.5 0 0 1-.1 0c.32-.31.6-.64.85-1h.75a.5.5 0 0 1 .49.38l1 4a.5.5 0 0 1-.49.62h-15a.5.5 0 0 1-.49-.62l1-4A.5.5 0 0 1 3.5 13Z",
    fill: primaryFill
  }));
};

exports.GlobeSurfaceFilled = wrapIcon_1.default( /*#__PURE__*/GlobeSurfaceFilledIcon, 'GlobeSurfaceFilled');

const GlobeSurfaceRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 11c.25 0 .74-.23 1.23-1.2.24-.5.45-1.1.58-1.8H8.2c.13.7.34 1.3.58 1.8.5.97.98 1.2 1.23 1.2Zm-1.95-4h3.9a10.93 10.93 0 0 0 0-2h-3.9a10.94 10.94 0 0 0 0 2Zm3.86 3.62A5.02 5.02 0 0 0 14.58 11h-1.75a7.76 7.76 0 0 1-.92 2.62ZM12.96 10h1.94a5.02 5.02 0 0 0 0-2h-1.94a11.96 11.96 0 0 1 0 2ZM11.9 4.38c.42.68.74 1.59.92 2.62h1.75a5.02 5.02 0 0 0-2.67-2.62Zm-.68.82C10.73 4.23 10.25 4 10 4s-.74.23-1.23 1.2c-.24.5-.45 1.1-.58 1.8h3.62c-.13-.7-.34-1.3-.58-1.8Zm-3.14-.82A5.02 5.02 0 0 0 5.42 7h1.75c.18-1.03.5-1.94.92-2.62ZM5 9c0 .34.03.68.1 1h1.94a11.97 11.97 0 0 1 0-2H5.1c-.07.32-.1.66-.1 1Zm.42 2a5.02 5.02 0 0 0 2.67 2.62A7.76 7.76 0 0 1 7.17 11H5.42ZM3.5 13h.75c.26.36.54.7.85 1H3.9l-.75 3h13.72l-.75-3H14.9c.31-.3.6-.64.85-1h.75a.5.5 0 0 1 .49.38l1 4a.5.5 0 0 1-.49.62h-15a.5.5 0 0 1-.49-.62l1-4A.5.5 0 0 1 3.5 13Z",
    fill: primaryFill
  }));
};

exports.GlobeSurfaceRegular = wrapIcon_1.default( /*#__PURE__*/GlobeSurfaceRegularIcon, 'GlobeSurfaceRegular');

const GlobeVideoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.06.48.1.99.13 1.5h.52c.96 0 1.79.54 2.2 1.33l.97-.64c.1-.07.2-.13.32-.17a7.97 7.97 0 0 0-.39-2.02Zm-4.77 0c.06.48.11.98.14 1.5H9.5a2.5 2.5 0 0 0-2.47 2.11 20.2 20.2 0 0 1 .13-3.61h5.68Zm-6.54 6c.17.94.4 1.8.7 2.54v1.38a8.03 8.03 0 0 1-4.2-3.92h3.5Zm-3.9-1h3.75a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm5.6-1c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 0 1 .78.41v7.14a.5.5 0 0 1-.78.41L16 17v.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 17.5v-6Z",
    fill: primaryFill
  }));
};

exports.GlobeVideoFilled = wrapIcon_1.default( /*#__PURE__*/GlobeVideoFilledIcon, 'GlobeVideoFilled');

const GlobeVideoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 17.42a8 8 0 1 1 10.99-7.9c-.11.04-.22.1-.32.17l-.67.44a7.28 7.28 0 0 0-.46-2.63h-2.73c.07.48.13.98.16 1.5h-1c-.04-.52-.1-1.02-.18-1.5H7.21a14.87 14.87 0 0 0-.17 3.57c-.03.14-.04.28-.04.43v3.86c-.24-.56-.45-1.18-.61-1.86H3.94A7.03 7.03 0 0 0 7 16.33v1.09ZM12.02 4.9C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm10.06-3.5a7.02 7.02 0 0 0-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM9.5 10c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V17l2.22 1.48a.5.5 0 0 0 .78-.41v-7.14a.5.5 0 0 0-.78-.41L16 12v-.5c0-.83-.67-1.5-1.5-1.5h-5Z",
    fill: primaryFill
  }));
};

exports.GlobeVideoRegular = wrapIcon_1.default( /*#__PURE__*/GlobeVideoRegularIcon, 'GlobeVideoRegular');

const GridFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-4c0-.83.67-1.5 1.5-1.5h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4Zm-9-9C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4C2 2.67 2.67 2 3.5 2h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 11 7.5v-4c0-.83.67-1.5 1.5-1.5h4Z",
    fill: primaryFill
  }));
};

exports.GridFilled = wrapIcon_1.default( /*#__PURE__*/GridFilledIcon, 'GridFilled');

const GridRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-4c0-.83.67-1.5 1.5-1.5h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm-9-10C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4C2 2.67 2.67 2 3.5 2h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 11 7.5v-4c0-.83.67-1.5 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.GridRegular = wrapIcon_1.default( /*#__PURE__*/GridRegularIcon, 'GridRegular');

const GridDotsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 6a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM4 17.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM11.75 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM10 11.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM11.75 16a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM16 5.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM17.75 10a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM16 17.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z",
    fill: primaryFill
  }));
};

exports.GridDotsFilled = wrapIcon_1.default( /*#__PURE__*/GridDotsFilledIcon, 'GridDotsFilled');

const GridDotsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm12 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM17.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM4 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.GridDotsRegular = wrapIcon_1.default( /*#__PURE__*/GridDotsRegularIcon, 'GridDotsRegular');

const GridKanbanFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3Zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm9-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-5Zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Z",
    fill: primaryFill
  }));
};

exports.GridKanbanFilled = wrapIcon_1.default( /*#__PURE__*/GridKanbanFilledIcon, 'GridKanbanFilled');

const GridKanbanRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm6 0H3v2h5V3ZM2 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm6 0H3v2h5V9Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm0 1h5v2H3v-2Zm8-12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V3Zm6 0h-5v2h5V3Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Zm0 1h5v2h-5V9Z",
    fill: primaryFill
  }));
};

exports.GridKanbanRegular = wrapIcon_1.default( /*#__PURE__*/GridKanbanRegularIcon, 'GridKanbanRegular');

const GroupFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.8a2.5 2.5 0 0 1-1.5.15V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 0 1 .16-1.5H10a.5.5 0 0 1-.5-.5v-2h.5a2 2 0 0 0 2-2v-.5h2c.28 0 .5.22.5.5v3.2a2.5 2.5 0 0 1 1.5-.15V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm3.5 5v.5a.5.5 0 0 1-.5.5h-.5V10c0-.28.22-.5.5-.5h.5ZM6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.GroupFilled = wrapIcon_1.default( /*#__PURE__*/GroupFilledIcon, 'GroupFilled');

const GroupRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.51 2.51 0 0 1-1 0V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.51 2.51 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5ZM11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1h1ZM6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.GroupRegular = wrapIcon_1.default( /*#__PURE__*/GroupRegularIcon, 'GroupRegular');

const GroupDismissFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.8a2.5 2.5 0 0 1-1.5.15V10c0 1.1.9 2 2 2h2v2a2 2 0 0 0 1.16 1.81 5.51 5.51 0 0 1 .34-3.6V10c0-.28.22-.5.5-.5h2.2a5.48 5.48 0 0 1 3.61-.34A2 2 0 0 0 14 8h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm13-1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.GroupDismissFilled = wrapIcon_1.default( /*#__PURE__*/GroupDismissFilledIcon, 'GroupDismissFilled');

const GroupDismissRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.51 2.51 0 0 1-1 0V10c0 1.1.9 2 2 2h2v2a2 2 0 0 0 1.16 1.81A5.51 5.51 0 0 1 9 14v-4a1 1 0 0 1 1-1h4a5.58 5.58 0 0 1 1.81.16A2 2 0 0 0 14 8h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm13-1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.GroupDismissRegular = wrapIcon_1.default( /*#__PURE__*/GroupDismissRegularIcon, 'GroupDismissRegular');

const GroupListFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 2a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V3.5h1.75a.75.75 0 0 0 0-1.5h-2.5Zm0 8.5a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V12h1.75a.75.75 0 0 0 0-1.5h-2.5Zm5 1.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM7 15.75c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75Zm0-11.5c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.25Zm.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z",
    fill: primaryFill
  }));
};

exports.GroupListFilled = wrapIcon_1.default( /*#__PURE__*/GroupListFilledIcon, 'GroupListFilled');

const GroupListRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 3a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H3V4h1.5a.5.5 0 0 0 0-1h-2Zm0 8a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H3v-4h1.5a.5.5 0 0 0 0-1h-2ZM6 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM6 7.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 7.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z",
    fill: primaryFill
  }));
};

exports.GroupListRegular = wrapIcon_1.default( /*#__PURE__*/GroupListRegularIcon, 'GroupListRegular');

const GroupReturnFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.8a2.5 2.5 0 0 1-1.5.15V10c0 1.1.9 2 2 2h2v2a2 2 0 0 0 1.16 1.81 5.51 5.51 0 0 1 .34-3.6V10c0-.28.22-.5.5-.5h2.2a5.48 5.48 0 0 1 3.61-.34A2 2 0 0 0 14 8h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm8.5 3.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.GroupReturnFilled = wrapIcon_1.default( /*#__PURE__*/GroupReturnFilledIcon, 'GroupReturnFilled');

const GroupReturnRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.51 2.51 0 0 1-1 0V10c0 1.1.9 2 2 2h2v2a2 2 0 0 0 1.16 1.81A5.51 5.51 0 0 1 9 14v-4a1 1 0 0 1 1-1h4a5.58 5.58 0 0 1 1.81.16A2 2 0 0 0 14 8h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm8.5 3.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.GroupReturnRegular = wrapIcon_1.default( /*#__PURE__*/GroupReturnRegularIcon, 'GroupReturnRegular');

const GuardianFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.73 9A2 2 0 0 0 9 8H4a2 2 0 0 0-2 2v2.5a1 1 0 1 0 2 0v4.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0 2.5 0V12.5a1 1 0 1 0 2 0V10a2 2 0 0 0-.27-1ZM14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3 6.23a2 2 0 0 0 1-1.73V10a3 3 0 0 0-.17-1H16a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0v3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 1 1-2.5 0v-2.52Z",
    fill: primaryFill
  }));
};

exports.GuardianFilled = wrapIcon_1.default( /*#__PURE__*/GuardianFilledIcon, 'GuardianFilled');

const GuardianRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 11.62A1.5 1.5 0 0 1 4 16.5v-3.05a1.5 1.5 0 0 1-2-1.42V10.5A2.5 2.5 0 0 1 4.5 8h4c.82 0 1.54.4 2 1h5a2.5 2.5 0 0 1 2.5 2.5v1a1.5 1.5 0 0 1-2 1.41v2.59a1.5 1.5 0 0 1-2.5 1.12A1.5 1.5 0 0 1 11 16.5v-4.46a1.5 1.5 0 0 1-2 1.4v3.06a1.5 1.5 0 0 1-2.5 1.12ZM3 10.5v1.53a.5.5 0 0 0 1 0V10.5a.5.5 0 0 1 1 0v6a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 1 0v-6a.5.5 0 0 1 1 0v1.53a.5.5 0 0 0 1 0V10.5C10 9.67 9.33 9 8.5 9h-4C3.67 9 3 9.67 3 10.5Zm7.95-.5c.03.16.05.33.05.5v.5h1v5.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-4.55ZM16 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.GuardianRegular = wrapIcon_1.default( /*#__PURE__*/GuardianRegularIcon, 'GuardianRegular');

const GuestFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Zm5.82-1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1ZM8 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2.25 5c-.66 0-1.3.55-1.22 1.3.06.56.24 1.26.79 1.8.55.57 1.41.9 2.68.9 1.27 0 2.13-.33 2.68-.9.55-.54.73-1.24.79-1.8.08-.75-.56-1.3-1.22-1.3h-4.5Z",
    fill: primaryFill
  }));
};

exports.GuestFilled = wrapIcon_1.default( /*#__PURE__*/GuestFilledIcon, 'GuestFilled');

const GuestRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Zm5.82-1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1ZM8 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM9 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2.47 6.2c0-.05 0-.09.04-.13.04-.04.1-.07.18-.07h4.5c.07 0 .14.03.18.07.03.04.05.08.04.13-.04.45-.18.88-.5 1.2-.3.32-.88.6-1.97.6-1.1 0-1.66-.28-1.98-.6a1.94 1.94 0 0 1-.5-1.2Zm.22-1.2c-.66 0-1.3.55-1.22 1.3.06.56.24 1.26.79 1.8.55.57 1.41.9 2.68.9 1.27 0 2.13-.33 2.68-.9.55-.54.73-1.24.79-1.8.08-.75-.56-1.3-1.22-1.3h-4.5Z",
    fill: primaryFill
  }));
};

exports.GuestRegular = wrapIcon_1.default( /*#__PURE__*/GuestRegularIcon, 'GuestRegular');

const GuestAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1ZM9 14.5c0-1.33.47-2.55 1.26-3.5H7.75c-.66 0-1.3.55-1.22 1.3.06.56.24 1.26.79 1.8.4.4.95.7 1.7.82A5.58 5.58 0 0 1 9 14.5Zm-1-11c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GuestAddFilled = wrapIcon_1.default( /*#__PURE__*/GuestAddFilledIcon, 'GuestAddFilled');

const GuestAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Zm.66 7h2.5c-.25.3-.47.64-.65 1H7.75a.25.25 0 0 0-.18.07.15.15 0 0 0-.04.13c.04.45.18.88.5 1.2.2.2.5.4 1 .5a5.56 5.56 0 0 0-.01 1.02 3.06 3.06 0 0 1-1.7-.81 2.93 2.93 0 0 1-.79-1.8C6.45 11.54 7.1 11 7.75 11ZM8 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM9 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.GuestAddRegular = wrapIcon_1.default( /*#__PURE__*/GuestAddRegularIcon, 'GuestAddRegular');

const GuitarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 3.78 1.11-1.12c.23-.23.6-.23.83 0l.9.9c.22.23.22.6 0 .83L16.22 5.5l-1.73-1.73Zm-.72.71-2.53 2.53-.13-.13a2.13 2.13 0 0 0-3.4.55l-.34.68a.6.6 0 0 1-.66.32h-.06a3.72 3.72 0 0 0-3.7 1.4 4.8 4.8 0 0 0 .44 6.27l.49.49a4.8 4.8 0 0 0 6.26.44 3.72 3.72 0 0 0 1.42-3.7l-.01-.06a.6.6 0 0 1 .32-.66l.68-.34a2.13 2.13 0 0 0 .55-3.4l-.13-.13 2.53-2.53-1.73-1.73Zm-5.41 7.14a1.25 1.25 0 1 1 1.76-1.76 1.25 1.25 0 0 1-1.76 1.76Z",
    fill: primaryFill
  }));
};

exports.GuitarFilled = wrapIcon_1.default( /*#__PURE__*/GuitarFilledIcon, 'GuitarFilled');

const GuitarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.7 11.7a1 1 0 1 1-1.4-1.4 1 1 0 0 1 1.4 1.4Zm5.56-9.39a1.09 1.09 0 0 1 1.53 0l.9.9c.42.42.42 1.1 0 1.53l-4.37 4.38a2.13 2.13 0 0 1-.76 3.16l-.68.34a.6.6 0 0 0-.32.66v.06a3.72 3.72 0 0 1-1.4 3.7 4.8 4.8 0 0 1-6.27-.44l-.49-.5a4.8 4.8 0 0 1-.44-6.25 3.72 3.72 0 0 1 3.7-1.42l.06.01a.6.6 0 0 0 .66-.32l.34-.68a2.13 2.13 0 0 1 3.16-.76l4.38-4.37Zm.83.7a.09.09 0 0 0-.13 0L14.8 4.19l1.02 1.02 1.16-1.16a.09.09 0 0 0 0-.13l-.9-.9Zm-.98 2.9-1.02-1.02-2.84 2.84a.5.5 0 0 1-.7 0l-.13-.13a1.13 1.13 0 0 0-1.8.3l-.35.67a1.6 1.6 0 0 1-1.75.85h-.05c-1.03-.21-2.08.19-2.71 1.03a3.8 3.8 0 0 0 .35 4.95l.49.49a3.8 3.8 0 0 0 4.95.35 2.72 2.72 0 0 0 1.04-2.7l-.02-.07c-.14-.7.21-1.42.86-1.75l.68-.33c.69-.35.83-1.26.3-1.8l-.14-.14a.5.5 0 0 1 0-.7l2.84-2.84Z",
    fill: primaryFill
  }));
};

exports.GuitarRegular = wrapIcon_1.default( /*#__PURE__*/GuitarRegularIcon, 'GuitarRegular');

const HandDrawFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3c0-.61-.37-1.04-.84-1.3a5.15 5.15 0 0 0-1.74-.5A37.9 37.9 0 0 0 9.53 1H9.5a.5.5 0 0 0 0 1c1.8 0 3.52 0 4.77.18.64.1 1.1.22 1.4.39.27.15.33.3.33.43 0 .15-.06.29-.31.44-.28.16-.7.29-1.3.38C13.22 4 11.64 4 10 4h-.03c-1.6 0-3.26 0-4.51.2-.63.09-1.22.24-1.66.5-.46.28-.8.7-.8 1.3 0 .8.65 1.27 1.32 1.52.7.27 1.65.4 2.68.4v-1c-.97 0-1.78-.12-2.32-.33C4.1 6.37 4 6.14 4 6c0-.15.06-.29.31-.44.28-.16.7-.29 1.3-.38C6.78 5 8.36 5 10 5h.03c1.6 0 3.26 0 4.51-.2.63-.09 1.22-.24 1.66-.5.46-.28.8-.7.8-1.3ZM9.5 6C8.67 6 8 6.67 8 7.5v4.24l-1.35-.58a1.94 1.94 0 0 0-2.61 1.2c-.12.39.04.8.38 1l3.97 2.36h.02c.52.29.82.69 1 1.07.17.35.44.68.78.9.34.23.77.37 1.23.28l2-.38a1.5 1.5 0 0 0 1.17-1.11l.83-3.33a2.5 2.5 0 0 0-1.93-3.05L11 9.6V7.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.HandDrawFilled = wrapIcon_1.default( /*#__PURE__*/HandDrawFilledIcon, 'HandDrawFilled');

const HandDrawRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3c0-.61-.37-1.04-.84-1.3a5.15 5.15 0 0 0-1.74-.5A37.9 37.9 0 0 0 9.53 1H9.5a.5.5 0 0 0 0 1c1.8 0 3.52 0 4.77.18.64.1 1.1.22 1.4.39.27.15.33.3.33.43 0 .15-.06.29-.31.44-.28.16-.7.29-1.3.38C13.22 4 11.64 4 10 4h-.03c-1.6 0-3.26 0-4.51.2-.63.09-1.22.24-1.66.5-.46.28-.8.7-.8 1.3 0 .8.65 1.27 1.32 1.52.7.27 1.65.4 2.68.4v-1c-.97 0-1.78-.12-2.32-.33C4.1 6.37 4 6.14 4 6c0-.15.06-.29.31-.44.28-.16.7-.29 1.3-.38C6.78 5 8.36 5 10 5h.03c1.6 0 3.26 0 4.51-.2.63-.09 1.22-.24 1.66-.5.46-.28.8-.7.8-1.3ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.44.4.49l2.9.59c.83.16 1.36 1 1.15 1.83l-.83 3.33a.5.5 0 0 1-.39.37l-2 .38c-.14.03-.3 0-.48-.12a1.3 1.3 0 0 1-.43-.51 3.3 3.3 0 0 0-1.43-1.51l-3.86-2.29a.94.94 0 0 1 1.23-.48l2.04.88a.5.5 0 0 0 .7-.46v-5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.24l-1.34-.58a1.94 1.94 0 0 0-2.62 1.2c-.12.39.04.8.38 1l3.97 2.36h.02c.52.29.83.69 1 1.07.17.35.44.68.78.9.34.23.77.37 1.23.28l2-.38a1.5 1.5 0 0 0 1.17-1.11l.83-3.33a2.5 2.5 0 0 0-1.93-3.05L11 9.6V7.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.HandDrawRegular = wrapIcon_1.default( /*#__PURE__*/HandDrawRegularIcon, 'HandDrawRegular');

const HandLeftFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 8.5V2.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0v6.5a4.06 4.06 0 0 0-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 0 0-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.36.68.59 1.02 1.68 1.02h3.05c.95 0 1.31-.53 1.95-2 .64-1.47 1-2.94 1-3.5V5.25a.75.75 0 0 0-1.5 0V9a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.HandLeftFilled = wrapIcon_1.default( /*#__PURE__*/HandLeftFilledIcon, 'HandLeftFilled');

const HandLeftRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 12.02c0 1.06-.2 2.1-.6 3.08l-.6 1.42a2.55 2.55 0 0 1-1.17 1.29c-.27.14-.56.21-.86.21h-2.55c-.77 0-1.49-.41-1.87-1.08-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 0 1-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 0 1 7 9.47V4.5a1.5 1.5 0 0 1 2.05-1.4 1.5 1.5 0 0 1 2.9 0A1.5 1.5 0 0 1 14 4.5v.09A1.5 1.5 0 0 1 16 6v6.02ZM12 4.5v4a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.21.36.6.58 1.01.58h2.55c.13 0 .27-.03.4-.1.32-.17.57-.44.71-.78l.59-1.42c.35-.86.53-1.78.53-2.7V6a.5.5 0 0 0-1 0v3.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0Z",
    fill: primaryFill
  }));
};

exports.HandLeftRegular = wrapIcon_1.default( /*#__PURE__*/HandLeftRegularIcon, 'HandLeftRegular');

const HandLeftChatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 8.5V2.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0v6.5a4.06 4.06 0 0 0-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 0 0-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.24.45.42.75.83.9l.34-1.1a5.48 5.48 0 0 1 4.02-7.7.5.5 0 0 1-.01-.08V3.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0Zm5-3.25v3.96A5.5 5.5 0 0 0 14.5 9V5.25a.75.75 0 0 1 1.5 0Zm3 9.25a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.HandLeftChatFilled = wrapIcon_1.default( /*#__PURE__*/HandLeftChatFilledIcon, 'HandLeftChatFilled');

const HandLeftChatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 6v3.2c-.32-.08-.66-.15-1-.18V6a.5.5 0 0 0-1 0v3.02c-.34.03-.68.1-1 .19V4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.07.12.17.23.27.32l.01.01-.3.99a2.16 2.16 0 0 1-.84-.82c-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 0 1-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 0 1 7 9.47V4.5a1.5 1.5 0 0 1 2.05-1.4 1.5 1.5 0 0 1 2.9 0A1.5 1.5 0 0 1 14 4.5v.09A1.5 1.5 0 0 1 16 6Zm3 8.5a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.HandLeftChatRegular = wrapIcon_1.default( /*#__PURE__*/HandLeftChatRegularIcon, 'HandLeftChatRegular');

const HandOpenHeartFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m13.4 10.52-3.36-3.67a.6.6 0 0 1-.87.01L5.28 2.97a.75.75 0 1 0-1.06 1.06l3.86 3.86a.58.58 0 1 1-.81.82L3.28 4.72a.75.75 0 0 0-1.06 1.06l4.05 4.05a.49.49 0 0 1-.69.7l-2.3-2.31a.75.75 0 0 0-1.06 1.06l3.82 3.82-.5.12c-.78.21-1.78.65-2.38 1.6A1 1 0 0 0 3.22 16c.23.3.6.48 1 .47 2.15-.01 4.77.39 6.85 1.24 1.2.5 2.69.43 3.71-.52l1.25-1.15a3 3 0 0 0 .77-3.3l-.97-2.46-.22.25a1.5 1.5 0 0 1-2.22 0Zm-3.68 3.43a.5.5 0 0 1-.44-.9c.6-.3 1.46-.43 2.3-.3.86.15 1.74.58 2.34 1.47a.5.5 0 0 1-.84.56 2.42 2.42 0 0 0-1.66-1.04c-.66-.1-1.3 0-1.7.2ZM9.34 2.92a3.4 3.4 0 0 0-.3 2.04L7.23 3.03a.75.75 0 1 1 1.06-1.06c.29.29.65.6 1.06.95ZM14.5 3l-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Z",
    fill: primaryFill
  }));
};

exports.HandOpenHeartFilled = wrapIcon_1.default( /*#__PURE__*/HandOpenHeartFilledIcon, 'HandOpenHeartFilled');

const HandOpenHeartRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m14.5 3-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Zm1.38 10.09-.82-2.2c.2-.07.39-.2.55-.37l.25-.28.94 2.49A3 3 0 0 1 16 16l-1.22 1.1c-.61.54-1.4.83-2.22.82a4 4 0 0 1-1.5-.3 18.4 18.4 0 0 0-6.85-1.24 1.21 1.21 0 0 1-1.08-.6 1 1 0 0 1 0-1 4.2 4.2 0 0 1 2.75-1.7L2.42 9.63a1.56 1.56 0 0 1 .47-2.53 1.56 1.56 0 0 1 1.66-2.54 1.55 1.55 0 0 1 2.58-.63c.08-.18.19-.34.32-.48a1.58 1.58 0 0 1 1.78-.3c-.12.33-.2.67-.22 1.02L9 4.16a.6.6 0 0 0-.84.84l.7.65 1.32 1.36 1.25 1.36a.48.48 0 0 1-.13.48.48.48 0 0 1-.7 0L8.1 6.36l-.7-.7-1-1.06a.58.58 0 0 0-.8 0 .57.57 0 0 0 0 .8l2.75 2.75a.5.5 0 0 1-.7.7L5.79 7l-1.4-1.4a.56.56 0 0 0-.95.4c0 .15.05.3.16.4l1.07 1.06 2.18 2.19a.5.5 0 0 1-.7.7L5 9.21 3.96 8.17a.56.56 0 0 0-.79 0 .52.52 0 0 0-.17.39.56.56 0 0 0 .17.44l4.19 4.15A.5.5 0 0 1 7 14s-2.15 0-2.99 1.35c0 .04.08.11.2.11h.14c2.43 0 4.83.44 7.1 1.31a2.51 2.51 0 0 0 2.66-.33l1.25-1.15a2 2 0 0 0 .52-2.2Zm-6.16.86c.4-.2 1.04-.32 1.7-.2.64.1 1.26.42 1.66 1.03a.5.5 0 0 0 .84-.56 3.42 3.42 0 0 0-2.34-1.46c-.84-.14-1.7 0-2.3.3a.5.5 0 0 0 .44.89Z",
    fill: primaryFill
  }));
};

exports.HandOpenHeartRegular = wrapIcon_1.default( /*#__PURE__*/HandOpenHeartRegularIcon, 'HandOpenHeartRegular');

const HandRightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 8.5V2.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0v6.5c.66-.43 1.4-.75 2-.75.97 0 1.79.32 1.98 1.12.02.04.02.1.02.14 0 .15-.07.3-.2.38l-1.3.99c-1.07.8-2.07 1.86-2.76 2.99-.38.6-.72 1.23-1.06 1.86-.36.68-.59 1.02-1.68 1.02H6.95C6 18 5.64 17.47 5 16a11.7 11.7 0 0 1-1-3.5V5.25a.75.75 0 0 1 1.5 0V9a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
};

exports.HandRightFilled = wrapIcon_1.default( /*#__PURE__*/HandRightFilledIcon, 'HandRightFilled');

const HandRightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 12.02c0 1.06.2 2.1.6 3.08l.6 1.42c.22.55.64 1.01 1.17 1.29.27.14.56.21.86.21h2.55c.77 0 1.49-.41 1.87-1.08.5-.87 1.02-1.7 1.72-2.43l1.32-1.39c.44-.46.97-.84 1.49-1.23l.59-.45a.6.6 0 0 0 .23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 0 0-2.78.29V4.5a1.5 1.5 0 0 0-2.05-1.4 1.5 1.5 0 0 0-2.9 0A1.5 1.5 0 0 0 6 4.5v.09A1.5 1.5 0 0 0 4 6v6.02ZM8 4.5v4a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 1 0v6a.5.5 0 0 0 .85.37h.01c.22-.22.44-.44.72-.58.7-.35 2.22-.57 2.4.5l-.53.4c-.52.4-1.04.78-1.48 1.24l-1.33 1.38c-.75.79-1.31 1.7-1.85 2.63-.21.36-.6.58-1.01.58H7.23a.87.87 0 0 1-.4-.1 1.55 1.55 0 0 1-.71-.78l-.59-1.42a7.09 7.09 0 0 1-.53-2.7V6a.5.5 0 0 1 1 0v3.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.HandRightRegular = wrapIcon_1.default( /*#__PURE__*/HandRightRegularIcon, 'HandRightRegular');

const HandRightOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5.25c0-.15.05-.3.13-.42L2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.72-3.71c-.25.31-.49.64-.7.98-.37.6-.71 1.23-1.05 1.86-.36.68-.59 1.02-1.68 1.02H6.95C6 18 5.64 17.47 5 16a11.7 11.7 0 0 1-1-3.5V5.25Zm2.5 1.96-1-1V9a.5.5 0 0 0 1 0V7.2ZM8 3.75v2.13l-1.5-1.5v-.63a.75.75 0 0 1 1.5 0Zm3.1 5.24 3.71 3.7c.22-.2.45-.39.69-.56l1.3-.99c.13-.09.2-.23.2-.38 0-.05 0-.1-.02-.14-.2-.8-1-1.12-1.98-1.12-.6 0-1.34.32-2 .75v-6.5a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-.4.49ZM9 6.88l1.5 1.5V2.75a.75.75 0 0 0-1.5 0v4.13Z",
    fill: primaryFill
  }));
};

exports.HandRightOffFilled = wrapIcon_1.default( /*#__PURE__*/HandRightOffFilledIcon, 'HandRightOffFilled');

const HandRightOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 6c0-.36.13-.7.34-.95l-2.2-2.2a.5.5 0 1 1 .71-.7l15 15a.5.5 0 0 1-.7.7l-3.57-3.56-.21.22c-.7.72-1.22 1.56-1.72 2.43a2.16 2.16 0 0 1-1.87 1.08H7.23c-.3 0-.6-.07-.86-.21a2.55 2.55 0 0 1-1.18-1.3l-.58-1.41c-.4-.98-.61-2.02-.61-3.08V6Zm8.87 7.58L7 7.7V9.5a.5.5 0 0 1-1 0V6.7l-.94-.93A.5.5 0 0 0 5 6v6.02c0 .93.18 1.84.53 2.7l.59 1.42c.14.34.4.61.71.78.13.07.27.1.4.1h2.55c.42 0 .8-.22 1-.58.55-.94 1.11-1.84 1.86-2.63l.23-.23ZM10 3.5v4.38l.9.9a.5.5 0 0 0 .1-.28v-4a.5.5 0 0 1 1 0v5.38l.92.92c.2-.2.4-.38.66-.51.7-.35 2.22-.57 2.4.5l-.53.4c-.4.3-.81.61-1.18.95l.7.71c.38-.34.8-.65 1.2-.96l.6-.45a.6.6 0 0 0 .23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 0 0-2.78.29V4.5a1.5 1.5 0 0 0-2.05-1.4 1.5 1.5 0 0 0-2.9 0 1.5 1.5 0 0 0-1.96.87l.91.9V4.5a.5.5 0 0 1 1 0v1.38l1 1V3.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.HandRightOffRegular = wrapIcon_1.default( /*#__PURE__*/HandRightOffRegularIcon, 'HandRightOffRegular');

const HandWaveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 21"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.85 1.15a.5.5 0 0 0-.7 0 .5.5 0 0 0 0 .71 6.57 6.57 0 0 1 1.86 5.57.5.5 0 0 0 .42.57.5.5 0 0 0 .56-.42 7.6 7.6 0 0 0-2.14-6.43Zm-10.4.35a.75.75 0 1 0-1.4.5l2.1 5.93a.53.53 0 1 1-1 .36L3.45 3.5a.75.75 0 0 0-1.41.5l2.55 7.18c-2.12-.57-2.85.58-3.07 1.1-.06.12.02.25.15.3.82.24 3.67 1.26 6.85 4.3.6.59 1.49.79 2.26.47l2.16-.9a2 2 0 0 0 1.21-1.58l.27-2.01a8 8 0 0 0-.34-3.63L13 6h-.01l-1.15-3.49a.75.75 0 0 0-1.42.49l.96 2.93a.63.63 0 0 1-1.2.42L8.68 2a.75.75 0 0 0-1.42.5l1.5 4.34a.66.66 0 0 1-1.24.45L5.45 1.5Zm8.79 1.57a.5.5 0 0 1 .69.18l.3.5c.49.83.76 1.78.77 2.75a.5.5 0 1 1-1 0c-.01-.79-.23-1.56-.64-2.24l-.3-.5a.5.5 0 0 1 .18-.69Z",
    fill: primaryFill
  }));
};

exports.HandWaveFilled = wrapIcon_1.default( /*#__PURE__*/HandWaveFilledIcon, 'HandWaveFilled');

const HandWaveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.85 1.14a.5.5 0 0 0-.7 0 .5.5 0 0 0 0 .72 6.57 6.57 0 0 1 1.86 5.56.5.5 0 0 0 .42.58.5.5 0 0 0 .56-.42 7.6 7.6 0 0 0-2.14-6.44ZM4.63 3.04a1.6 1.6 0 0 1 3.04-.63 1.6 1.6 0 0 1 2.59.7l.08.27a1.6 1.6 0 0 1 2.55.73l1.07 3.23.58 1.7a8.5 8.5 0 0 1 .38 3.9l-.27 2a2.5 2.5 0 0 1-1.51 1.96l-2.16.9c-.97.41-2.07.15-2.8-.55-3.12-2.98-5.88-3.97-6.65-4.2-.35-.11-.66-.52-.47-.97.15-.36.51-.98 1.28-1.33.6-.26 1.36-.33 2.35-.06L2.77 5.1a1.61 1.61 0 0 1 1.02-2.03c.28-.09.57-.1.84-.04Zm2.15 3.64.55 1.68a.5.5 0 1 1-.95.31l-.57-1.72-.95-2.52a.6.6 0 0 0-.76-.4.61.61 0 0 0-.38.76l2.25 6.55a.5.5 0 0 1-.67.62c-1.33-.57-2.11-.49-2.55-.3-.3.14-.5.34-.62.53a18.9 18.9 0 0 1 6.74 4.33c.47.46 1.15.6 1.72.36l2.16-.9c.5-.2.84-.65.9-1.18l.28-1.99a7.5 7.5 0 0 0-.34-3.44l-.58-1.7v-.01l-1.07-3.24a.6.6 0 0 0-1.16.3l.85 2.62a.5.5 0 0 1-.95.32L9.85 5.1a1.62 1.62 0 0 1-.04-.13l-.5-1.55a.6.6 0 0 0-1.15.37l.6 1.85a.5.5 0 0 1 .03.11l.53 1.6a.5.5 0 0 1-.95.31L6.79 2.91a.6.6 0 0 0-1.13.38l1.1 3.33.02.06Zm7.46-3.6a.5.5 0 0 1 .69.16l.3.5c.5.83.76 1.78.77 2.76a.5.5 0 0 1-1 0c0-.79-.22-1.57-.63-2.25l-.3-.5a.5.5 0 0 1 .17-.68Z",
    fill: primaryFill
  }));
};

exports.HandWaveRegular = wrapIcon_1.default( /*#__PURE__*/HandWaveRegularIcon, 'HandWaveRegular');

const HandshakeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.63 3.01a.5.5 0 0 0 .06 0H12a2.5 2.5 0 0 1 2 .31 3.7 3.7 0 0 1 1.71 5.1L12.5 5.18a.5.5 0 0 0-.36-.15H10.8a.5.5 0 0 0-.3.1L8.35 6.76a1.12 1.12 0 0 1-1.67-.4A1.1 1.1 0 0 1 7 5l2.63-1.99Zm-4 8.85-.01.02-.77.76v.01a.6.6 0 0 1-.84-.01.6.6 0 0 1 0-.84l.76-.76a.6.6 0 0 1 .85 0c.23.22.23.6.01.82Zm-.08 1.5a.6.6 0 0 0 .01.82.6.6 0 0 0 .85 0l.76-.76a.6.6 0 0 0-.09-.91.6.6 0 0 0-.74.06l-.01.01-.77.76v.02ZM3.75 9.8a.6.6 0 0 1 0 .84l-.77.76a.6.6 0 0 1-.84 0 .6.6 0 0 1 0-.84l.76-.76a.6.6 0 0 1 .85 0Zm4.98 4.33a.6.6 0 0 1 0 .84l-.76.76a.6.6 0 0 1-.85 0 .6.6 0 0 1-.09-.73.6.6 0 0 1 .09-.11l.76-.76a.6.6 0 0 1 .85 0ZM3.53 4.4a4.76 4.76 0 0 1 4.3-1.29L6.4 4.21A2.1 2.1 0 0 0 6 7.14c.7.92 2.03 1.1 2.95.4l2.02-1.53h.9l1.95 1.93 1.6 1.62.03.03.87.86a1.02 1.02 0 0 1-1.37 1.51l-.07-.07a.5.5 0 0 0-.06-.05l-.85-.85a.5.5 0 1 0-.7.71l.9.9.1.1.03.03a.7.7 0 0 1-.98.98l-.13-.14a.5.5 0 0 0-.85.37c0 .13.05.26.15.36l.17.17a.63.63 0 1 1-.9.9l-.08-.1a1.63 1.63 0 0 0-.1-.1l-.16-.16a.5.5 0 0 0-.7.7l.11.13a.5.5 0 0 0 .06.06l.04.05a.65.65 0 0 1-.96.86L9.11 16l.33-.32a1.58 1.58 0 0 0-1.09-2.72c0-.4-.16-.78-.47-1.08-.3-.3-.69-.46-1.08-.47A1.6 1.6 0 0 0 4.9 9.9 1.61 1.61 0 0 0 2.31 9 4.7 4.7 0 0 1 3.52 4.4Z",
    fill: primaryFill
  }));
};

exports.HandshakeFilled = wrapIcon_1.default( /*#__PURE__*/HandshakeFilledIcon, 'HandshakeFilled');

const HandshakeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.24 3.01a.5.5 0 0 0-.39.19l-.08.06A5.13 5.13 0 0 0 4.7 4.44a4.7 4.7 0 0 0-1.37 4.31l-.05.05-.78.75c-.64.61-.64 1.6 0 2.22.4.38.95.53 1.46.43.06.29.21.56.44.79.31.3.71.45 1.11.46.01.39.17.77.48 1.07.3.3.7.44 1.1.45.02.4.18.78.49 1.07.6.58 1.56.61 2.2.1l.43.42c.64.61 1.68.61 2.32 0 .3-.3.47-.68.48-1.07.4 0 .8-.16 1.1-.46.3-.3.47-.67.48-1.06.4-.01.78-.17 1.09-.46.24-.23.39-.52.45-.82.5.08 1.05-.06 1.44-.44.63-.61.63-1.6 0-2.22l-.72-.7.14-.54c.3-1.13.15-2.32-.42-3.34a4.8 4.8 0 0 0-4.2-2.43h-2.13Zm2.46 3.72 2.4 2.31 1.75 1.68c.24.23.24.6 0 .84a.63.63 0 0 1-.87 0l-1.32-1.27a.52.52 0 0 0-.72 0h-.01c-.2.2-.2.51 0 .7l1.03 1c.24.22.24.6 0 .83a.63.63 0 0 1-.8.05.52.52 0 0 0-.67.05.48.48 0 0 0-.04.64c.18.24.16.57-.06.78a.63.63 0 0 1-.8.05.52.52 0 0 0-.68.04.48.48 0 0 0-.05.64c.2.24.18.58-.05.8a.64.64 0 0 1-.87 0l-.44-.42.16-.16c.64-.61.64-1.6 0-2.22-.3-.3-.7-.45-1.1-.46a1.54 1.54 0 0 0-.49-1.07c-.3-.3-.7-.44-1.1-.45a1.54 1.54 0 0 0-.48-1.07c-.4-.39-.95-.53-1.46-.43a1.55 1.55 0 0 0-.45-.8c-.35-.33-.83-.48-1.29-.45a3.74 3.74 0 0 1 1.13-3.2 4.06 4.06 0 0 1 3.29-1.1L7.25 5.11a1.7 1.7 0 0 0-.33 2.44c.6.76 1.7.9 2.48.33l1.58-1.15h1.72Zm-4.86-.81 2.6-1.9h.53a2.26 2.26 0 0 1 .15 0h1.24c1.4 0 2.69.74 3.34 1.92.44.8.56 1.72.33 2.6l-2.77-2.67a.5.5 0 0 0-.35-.14h-2.1a.5.5 0 0 0-.3.1l-1.7 1.25a.8.8 0 0 1-1.1-.15.7.7 0 0 1 .13-1.01Zm.45 8.6.78-.75.01-.01a.63.63 0 0 1 .86 0c.24.24.24.6 0 .84l-.78.75a.63.63 0 0 1-.86 0 .57.57 0 0 1-.01-.83Zm.07-1.46v.01l-.78.75-.01.01a.63.63 0 0 1-.86 0 .57.57 0 0 1 0-.84l.78-.75a.63.63 0 0 1 .86 0c.24.23.24.6.01.82Zm-1.6-1.52L6 12.3v.01a.63.63 0 0 1-.86 0 .57.57 0 0 1 0-.84l.77-.75a.63.63 0 0 1 .87 0c.24.23.24.6 0 .83Zm-1.9-1.21-.78.74a.63.63 0 0 1-.86 0 .57.57 0 0 1 0-.83L4 9.5a.63.63 0 0 1 .86 0c.24.23.24.6 0 .84Z",
    fill: primaryFill
  }));
};

exports.HandshakeRegular = wrapIcon_1.default( /*#__PURE__*/HandshakeRegularIcon, 'HandshakeRegular');

const HardDriveFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 10c-.59 0-1.14.17-1.6.46l2.25-5.25A2 2 0 0 1 6.5 4h7.1c.75 0 1.43.41 1.77 1.09.54 1.1 1.53 3.2 2.33 5.43A2.99 2.99 0 0 0 16 10H4Zm12 1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3.99A2 2 0 0 1 2 14v-1c0-1.1.9-2 2-2h12Zm-.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.HardDriveFilled = wrapIcon_1.default( /*#__PURE__*/HardDriveFilledIcon, 'HardDriveFilled');

const HardDriveRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 12c0-.4.08-.8.24-1.16l2.41-5.63A2 2 0 0 1 6.5 4h7.1c.75 0 1.43.41 1.77 1.09a54.93 54.93 0 0 1 2.45 5.77c.13.37.19.76.19 1.14v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2Zm11.6-7H6.48a1 1 0 0 0-.92.6l-1.9 4.43L4 10h12c.15 0 .3.02.45.05a57.18 57.18 0 0 0-2-4.52.96.96 0 0 0-.86-.53ZM16 15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12Zm-1.25-1.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.HardDriveRegular = wrapIcon_1.default( /*#__PURE__*/HardDriveRegularIcon, 'HardDriveRegular');

const HatGraduationFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 14.5v-3.33l4 2.3a4 4 0 0 0 4 0l4-2.3v3.33a.5.5 0 0 1-.15.35v.01l-.03.03a3.66 3.66 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.6 3.6 0 0 1-.08-.07l-.02-.03A.51.51 0 0 1 4 14.5Zm14.75-6.07-7.26 4.17a3 3 0 0 1-2.98 0L2 8.86v4.64a.5.5 0 0 1-1 0V8c0-.19.1-.36.26-.44L8.51 3.4a3 3 0 0 1 2.98 0l7.26 4.17a.5.5 0 0 1 0 .86Z",
    fill: primaryFill
  }));
};

exports.HatGraduationFilled = wrapIcon_1.default( /*#__PURE__*/HatGraduationFilledIcon, 'HatGraduationFilled');

const HatGraduationRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 3.4a3 3 0 0 1 3 0l7.25 4.17a.5.5 0 0 1 0 .86L16 10.01v4.49a.5.5 0 0 1-.15.35v.01l-.03.03a3.88 3.88 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.81 3.81 0 0 1-.08-.07.53.53 0 0 1-.18-.39v-4.49L2 8.86v4.64a.5.5 0 1 1-1 0V8c0-.19.1-.35.26-.44L8.51 3.4Zm3 9.2a3 3 0 0 1-3 0L5 10.59v3.69l.17.14A8.1 8.1 0 0 0 10 16a8.1 8.1 0 0 0 5-1.72v-3.7l-3.5 2.02ZM11 4.27a2 2 0 0 0-2 0L2.5 8 9 11.73a2 2 0 0 0 2 0L17.5 8 11 4.27Z",
    fill: primaryFill
  }));
};

exports.HatGraduationRegular = wrapIcon_1.default( /*#__PURE__*/HatGraduationRegularIcon, 'HatGraduationRegular');

const HdFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.42 12h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-.5 4c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM11 7h1.42A2.58 2.58 0 0 1 15 9.58v.84A2.58 2.58 0 0 1 12.42 13H11a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.HdFilled = wrapIcon_1.default( /*#__PURE__*/HdFilledIcon, 'HdFilled');

const HdRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 7c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM11 7a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1.42A2.58 2.58 0 0 0 15 10.42v-.84A2.58 2.58 0 0 0 12.42 7H11Zm1.42 5h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    fill: primaryFill
  }));
};

exports.HdRegular = wrapIcon_1.default( /*#__PURE__*/HdRegularIcon, 'HdRegular');

const HdrFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM4.5 7.5c.28 0 .5.22.5.5v1.5h2V8a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM9 8c0-.28.22-.5.5-.5h.25c1.24 0 2.25 1 2.25 2.25v.5c0 1.24-1 2.25-2.25 2.25H9.5A.5.5 0 0 1 9 12V8Zm1 3.47c.57-.11 1-.62 1-1.22v-.5c0-.6-.43-1.1-1-1.22v2.95ZM13 8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14V12a.5.5 0 0 1-1 0V8Zm1 1.5h.5a.5.5 0 0 0 0-1H14v1Z",
    fill: primaryFill
  }));
};

exports.HdrFilled = wrapIcon_1.default( /*#__PURE__*/HdrFilledIcon, 'HdrFilled');

const HdrRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5Zm1.5.75c.28 0 .5.22.5.5v1.5h2V8a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM9 8c0-.28.22-.5.5-.5h.25c1.24 0 2.25 1 2.25 2.25v.5c0 1.24-1 2.25-2.25 2.25H9.5A.5.5 0 0 1 9 12V8Zm1 3.47c.57-.11 1-.62 1-1.22v-.5c0-.6-.43-1.1-1-1.22v2.95ZM13 8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14V12a.5.5 0 0 1-1 0V8Zm1 1.5h.5a.5.5 0 0 0 0-1H14v1Z",
    fill: primaryFill
  }));
};

exports.HdrRegular = wrapIcon_1.default( /*#__PURE__*/HdrRegularIcon, 'HdrRegular');

const HdrOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.41 1.42A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.54l1.86 1.85a.5.5 0 0 0 .7-.7l-15-15Zm8.38 9.8c-.4.34-.91.55-1.48.55H9.5A.5.5 0 0 1 9 12V9.7l1 1v.78c.2-.04.37-.13.52-.25l.71.71ZM8 8.7V12a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0v1.5h2V8a.5.5 0 0 1 .06-.23L8 8.7Zm4 1.04v.13l1 1V8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14v1.38l3.25 3.25c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0 0 15.25 4H6.12l3.5 3.5h.13c1.24 0 2.25 1 2.25 2.25Zm2-.25h.5a.5.5 0 0 0 0-1H14v1Z",
    fill: primaryFill
  }));
};

exports.HdrOffFilled = wrapIcon_1.default( /*#__PURE__*/HdrOffFilledIcon, 'HdrOffFilled');

const HdrOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.41 1.42A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.54l1.86 1.85a.5.5 0 0 0 .7-.7l-15-15ZM14.3 15H4.75C3.78 15 3 14.22 3 13.25v-6.5c0-.83.57-1.52 1.34-1.7l2.72 2.72A.5.5 0 0 0 7 8v1.5H5V8a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-1.5h2V12a.5.5 0 0 0 1 0V8.7l1 1V12c0 .28.22.5.5.5h.25c.57 0 1.09-.21 1.48-.56L14.3 15ZM10 10.7l.52.53c-.15.12-.32.2-.52.24v-.76Zm-.38-3.2L12 9.88v-.13c0-1.24-1-2.25-2.25-2.25h-.13ZM13 10.88l1 1V10.5h.4l.63 1.68a.5.5 0 0 0 .94-.36l-.6-1.6a1.5 1.5 0 0 0-.87-2.72h-1a.5.5 0 0 0-.5.5v2.88Zm4 2.37c0 .45-.17.86-.45 1.18l.7.7c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0 0 15.25 4H6.12l1 1h8.13c.97 0 1.75.78 1.75 1.75v6.5ZM14 9.5h.5a.5.5 0 0 0 0-1H14v1Z",
    fill: primaryFill
  }));
};

exports.HdrOffRegular = wrapIcon_1.default( /*#__PURE__*/HdrOffRegularIcon, 'HdrOffRegular');

const HeadphonesFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3v-1Z",
    fill: primaryFill
  }));
};

exports.HeadphonesFilled = wrapIcon_1.default( /*#__PURE__*/HeadphonesFilledIcon, 'HeadphonesFilled');

const HeadphonesRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3v-1Zm0 2h3v5H4a1 1 0 0 1-1-1v-4Zm14 0v4a1 1 0 0 1-1 1h-2v-5h3Z",
    fill: primaryFill
  }));
};

exports.HeadphonesRegular = wrapIcon_1.default( /*#__PURE__*/HeadphonesRegularIcon, 'HeadphonesRegular');