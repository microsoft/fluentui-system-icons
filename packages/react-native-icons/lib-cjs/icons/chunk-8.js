"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoProhibitedFilled = exports.VideoPlayPauseRegular = exports.VideoPlayPauseFilled = exports.VideoPersonStarOffRegular = exports.VideoPersonStarOffFilled = exports.VideoPersonStarRegular = exports.VideoPersonStarFilled = exports.VideoPersonSparkleRegular = exports.VideoPersonSparkleFilled = exports.VideoPersonOffRegular = exports.VideoPersonOffFilled = exports.VideoPersonClockRegular = exports.VideoPersonClockFilled = exports.VideoPersonCallRegular = exports.VideoPersonCallFilled = exports.VideoPersonRegular = exports.VideoPersonFilled = exports.VideoOffRegular = exports.VideoOffFilled = exports.VideoClipOffRegular = exports.VideoClipOffFilled = exports.VideoClipMultipleRegular = exports.VideoClipMultipleFilled = exports.VideoClipRegular = exports.VideoClipFilled = exports.VideoChatRegular = exports.VideoChatFilled = exports.VideoBackgroundEffectRegular = exports.VideoBackgroundEffectFilled = exports.VideoAddRegular = exports.VideoAddFilled = exports.Video360OffRegular = exports.Video360OffFilled = exports.Video360Regular = exports.Video360Filled = exports.VideoRegular = exports.VideoFilled = exports.VehicleTruckProfileRegular = exports.VehicleTruckProfileFilled = exports.VehicleTruckCubeRegular = exports.VehicleTruckCubeFilled = exports.VehicleTruckBagRegular = exports.VehicleTruckBagFilled = exports.VehicleTruckRegular = exports.VehicleTruckFilled = exports.VehicleSubwayRegular = exports.VehicleSubwayFilled = exports.VehicleShipRegular = exports.VehicleShipFilled = exports.VehicleCarProfileRtlRegular = void 0;
exports.WeatherDrizzleFilled = exports.WeatherCloudyRegular = exports.WeatherCloudyFilled = exports.WeatherBlowingSnowRegular = exports.WeatherBlowingSnowFilled = exports.WaterRegular = exports.WaterFilled = exports.WasherRegular = exports.WasherFilled = exports.WarningShieldRegular = exports.WarningShieldFilled = exports.WarningRegular = exports.WarningFilled = exports.WandRegular = exports.WandFilled = exports.WallpaperRegular = exports.WallpaperFilled = exports.WalletCreditCardRegular = exports.WalletCreditCardFilled = exports.WalletRegular = exports.WalletFilled = exports.WalkieTalkieRegular = exports.WalkieTalkieFilled = exports.VoteRegular = exports.VoteFilled = exports.VoicemailArrowSubtractRegular = exports.VoicemailArrowSubtractFilled = exports.VoicemailArrowForwardRegular = exports.VoicemailArrowForwardFilled = exports.VoicemailArrowBackRegular = exports.VoicemailArrowBackFilled = exports.VoicemailRegular = exports.VoicemailFilled = exports.VirtualNetworkToolboxRegular = exports.VirtualNetworkToolboxFilled = exports.VirtualNetworkRegular = exports.VirtualNetworkFilled = exports.ViewDesktopMobileRegular = exports.ViewDesktopMobileFilled = exports.ViewDesktopRegular = exports.ViewDesktopFilled = exports.VideoSyncRegular = exports.VideoSyncFilled = exports.VideoSwitchRegular = exports.VideoSwitchFilled = exports.VideoSecurityRegular = exports.VideoSecurityFilled = exports.VideoRecordingRegular = exports.VideoRecordingFilled = exports.VideoProhibitedRegular = void 0;
exports.Wifi1Filled = exports.WhiteboardRegular = exports.WhiteboardFilled = exports.WebAssetRegular = exports.WebAssetFilled = exports.WeatherThunderstormRegular = exports.WeatherThunderstormFilled = exports.WeatherSunnyLowRegular = exports.WeatherSunnyLowFilled = exports.WeatherSunnyHighRegular = exports.WeatherSunnyHighFilled = exports.WeatherSunnyRegular = exports.WeatherSunnyFilled = exports.WeatherSquallsRegular = exports.WeatherSquallsFilled = exports.WeatherSnowflakeRegular = exports.WeatherSnowflakeFilled = exports.WeatherSnowShowerNightRegular = exports.WeatherSnowShowerNightFilled = exports.WeatherSnowShowerDayRegular = exports.WeatherSnowShowerDayFilled = exports.WeatherSnowRegular = exports.WeatherSnowFilled = exports.WeatherRainSnowRegular = exports.WeatherRainSnowFilled = exports.WeatherRainShowersNightRegular = exports.WeatherRainShowersNightFilled = exports.WeatherRainShowersDayRegular = exports.WeatherRainShowersDayFilled = exports.WeatherRainRegular = exports.WeatherRainFilled = exports.WeatherPartlyCloudyNightRegular = exports.WeatherPartlyCloudyNightFilled = exports.WeatherPartlyCloudyDayRegular = exports.WeatherPartlyCloudyDayFilled = exports.WeatherMoonOffRegular = exports.WeatherMoonOffFilled = exports.WeatherMoonRegular = exports.WeatherMoonFilled = exports.WeatherHazeRegular = exports.WeatherHazeFilled = exports.WeatherHailNightRegular = exports.WeatherHailNightFilled = exports.WeatherHailDayRegular = exports.WeatherHailDayFilled = exports.WeatherFogRegular = exports.WeatherFogFilled = exports.WeatherDuststormRegular = exports.WeatherDuststormFilled = exports.WeatherDrizzleRegular = void 0;
exports.WindowInprivateAccountFilled = exports.WindowInprivateRegular = exports.WindowInprivateFilled = exports.WindowHeaderVerticalRegular = exports.WindowHeaderVerticalFilled = exports.WindowHeaderHorizontalOffRegular = exports.WindowHeaderHorizontalOffFilled = exports.WindowHeaderHorizontalRegular = exports.WindowHeaderHorizontalFilled = exports.WindowEditRegular = exports.WindowEditFilled = exports.WindowDevToolsRegular = exports.WindowDevToolsFilled = exports.WindowDevEditRegular = exports.WindowDevEditFilled = exports.WindowDatabaseRegular = exports.WindowDatabaseFilled = exports.WindowConsoleRegular = exports.WindowConsoleFilled = exports.WindowBulletListAddRegular = exports.WindowBulletListAddFilled = exports.WindowBulletListRegular = exports.WindowBulletListFilled = exports.WindowArrowUpRegular = exports.WindowArrowUpFilled = exports.WindowAppsRegular = exports.WindowAppsFilled = exports.WindowAdPersonRegular = exports.WindowAdPersonFilled = exports.WindowAdOffRegular = exports.WindowAdOffFilled = exports.WindowAdRegular = exports.WindowAdFilled = exports.WindowRegular = exports.WindowFilled = exports.WifiWarningRegular = exports.WifiWarningFilled = exports.WifiSettingsRegular = exports.WifiSettingsFilled = exports.WifiOffRegular = exports.WifiOffFilled = exports.WifiLockRegular = exports.WifiLockFilled = exports.Wifi4Regular = exports.Wifi4Filled = exports.Wifi3Regular = exports.Wifi3Filled = exports.Wifi2Regular = exports.Wifi2Filled = exports.Wifi1Regular = void 0;
exports.ZoomOutRegular = exports.ZoomOutFilled = exports.ZoomInRegular = exports.ZoomInFilled = exports.ZoomFitRegular = exports.ZoomFitFilled = exports.XrayRegular = exports.XrayFilled = exports.XboxControllerErrorRegular = exports.XboxControllerErrorFilled = exports.XboxControllerRegular = exports.XboxControllerFilled = exports.XboxConsoleRegular = exports.XboxConsoleFilled = exports.WrenchScrewdriverRegular = exports.WrenchScrewdriverFilled = exports.WrenchRegular = exports.WrenchFilled = exports.WindowWrenchRegular = exports.WindowWrenchFilled = exports.WindowTextRegular = exports.WindowTextFilled = exports.WindowShieldRegular = exports.WindowShieldFilled = exports.WindowSettingsRegular = exports.WindowSettingsFilled = exports.WindowPlayRegular = exports.WindowPlayFilled = exports.WindowNewRegular = exports.WindowNewFilled = exports.WindowMultipleSwapRegular = exports.WindowMultipleSwapFilled = exports.WindowMultipleRegular = exports.WindowMultipleFilled = exports.WindowLocationTargetRegular = exports.WindowLocationTargetFilled = exports.WindowInprivateAccountRegular = void 0;
const tslib_1 = require("tslib");
const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));
const React = tslib_1.__importStar(require("react"));
const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));
const VehicleCarProfileRtlRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.48 6.03 15.14 8H12V5h1.06c.64 0 1.22.41 1.42 1.03Zm1 2.97.26.08.12.03A1.5 1.5 0 0 1 17 10.56v1.69c0 .16-.05.31-.14.43a2.5 2.5 0 0 0-4.81.32h-4.1a2.5 2.5 0 0 0-4.81-.32.75.75 0 0 1-.14-.43v-1.21c0-.68.46-1.28 1.11-1.45L6.31 9h9.16ZM7.12 8l1.24-2.23A1.5 1.5 0 0 1 9.67 5H11v3H7.13ZM2 12.25c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 0 0 4.93.15h4.1a2.5 2.5 0 0 0 4.93-.16c.6-.27 1.02-.88 1.02-1.59v-1.69a2.5 2.5 0 0 0-1.75-2.38l-.82-2.47A2.5 2.5 0 0 0 13.06 4H9.68c-.91 0-1.75.5-2.19 1.29L5.95 8.06l-2.1.56A2.5 2.5 0 0 0 2 11.04v1.21ZM14.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleCarProfileRtlRegular = wrapIcon_1.default( /*#__PURE__*/VehicleCarProfileRtlRegularIcon, 'VehicleCarProfileRtlRegular');
const VehicleShipFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2.54c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V5h2.5c.28 0 .5.22.5.5v4.06l1.63.46a.5.5 0 0 1 .32.7l-1.82 3.79a1.5 1.5 0 0 0-2.53.45V15a2.28 2.28 0 0 1-.35.57c-.26.32-.5.44-.74.44s-.48-.13-.75-.45a2.68 2.68 0 0 1-.36-.6 1.5 1.5 0 0 0-2.81.03 2.27 2.27 0 0 1-.35.57c-.26.33-.5.45-.74.45s-.48-.12-.74-.44a2.61 2.61 0 0 1-.36-.6 1.5 1.5 0 0 0-2.55-.42l-1.8-3.83a.5.5 0 0 1 .32-.7L4 9.57V5.5c0-.28.22-.5.5-.5H7V2.54Zm5 .5H8V5h4V3.04Zm3 6.25V6H5v3.28l4.2-1.16a3 3 0 0 1 1.6 0L15 9.29Zm-3.6 5.66Zm0 0Zm4.09.44v-.01a.5.5 0 0 0-.96-.06v.02a1.62 1.62 0 0 1-.12.24c-.08.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.38-1.52-.82a3.64 3.64 0 0 1-.51-.85.5.5 0 0 0-.94 0 1.75 1.75 0 0 1-.12.25c-.09.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.37-1.52-.81a3.62 3.62 0 0 1-.5-.85l-.01-.02a.5.5 0 0 0-.96.06 1.5 1.5 0 0 1-.08.24c-.07.16-.17.37-.33.58-.3.41-.8.8-1.6.8a.5.5 0 0 0 0 1 2.9 2.9 0 0 0 2.54-1.4l.17.22C5.66 17.38 6.4 18 7.5 18s1.84-.62 2.3-1.18l.2-.28.2.28A2.96 2.96 0 0 0 12.5 18a2.95 2.95 0 0 0 2.46-1.4l.14.2c.44.6 1.2 1.21 2.4 1.2a.5.5 0 1 0 0-1c-.8.01-1.3-.38-1.6-.79a2.72 2.72 0 0 1-.4-.77l-.01-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleShipFilled = wrapIcon_1.default( /*#__PURE__*/VehicleShipFilledIcon, 'VehicleShipFilled');
const VehicleShipRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 2.04a.5.5 0 0 0-.5.5V5H4.5a.5.5 0 0 0-.5.5v4.06l-1.63.46a.5.5 0 0 0-.32.7l1.8 3.82c.22-.26.52-.44.86-.51l-1.5-3.2 6.25-1.75a2 2 0 0 1 1.07 0l6.26 1.74-1.54 3.2c.34.06.65.23.88.49l1.82-3.8a.5.5 0 0 0-.32-.7L16 9.57V5.5a.5.5 0 0 0-.5-.5H13V2.54a.5.5 0 0 0-.5-.5h-5ZM12 5H8V3.04h4V5Zm3 1V9.3l-4.2-1.17a3 3 0 0 0-1.6 0L5 9.28V6h10Zm.49 9.39v-.01a.5.5 0 0 0-.96-.06v.02a1.62 1.62 0 0 1-.12.24c-.08.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.38-1.52-.82a3.64 3.64 0 0 1-.51-.85.5.5 0 0 0-.94 0 1.75 1.75 0 0 1-.12.25c-.09.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.37-1.52-.81a3.62 3.62 0 0 1-.5-.85l-.01-.02a.5.5 0 0 0-.96.06 1.5 1.5 0 0 1-.08.24c-.07.16-.17.37-.33.58-.3.41-.8.8-1.6.8a.5.5 0 0 0 0 1 2.9 2.9 0 0 0 2.54-1.4l.17.22C5.66 17.38 6.4 18 7.5 18s1.84-.62 2.3-1.18l.2-.28.2.28A2.96 2.96 0 0 0 12.5 18a2.95 2.95 0 0 0 2.46-1.4l.14.2c.44.6 1.2 1.21 2.4 1.2a.5.5 0 1 0 0-1c-.8.01-1.3-.38-1.6-.79a2.72 2.72 0 0 1-.4-.77l-.01-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleShipRegular = wrapIcon_1.default( /*#__PURE__*/VehicleShipRegularIcon, 'VehicleShipRegular');
const VehicleSubwayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.68 2.98l2.38 1.06a.5.5 0 1 1-.4.92L11.9 17H8.1l-4.4 1.96a.5.5 0 1 1-.4-.92l2.38-1.06A3 3 0 0 1 3 14V6Zm1 0v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm4 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleSubwayFilled = wrapIcon_1.default( /*#__PURE__*/VehicleSubwayFilledIcon, 'VehicleSubwayFilled');
const VehicleSubwayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.68 2.98l2.38 1.06a.5.5 0 1 1-.4.92L11.9 17H8.1l-4.4 1.96a.5.5 0 1 1-.4-.92l2.38-1.06A3 3 0 0 1 3 14V6Zm9.01 10H14a2 2 0 0 0 2-2v-2H4v2c0 1.1.9 2 2 2h6.01ZM4 6v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleSubwayRegular = wrapIcon_1.default( /*#__PURE__*/VehicleSubwayRegularIcon, 'VehicleSubwayRegular');
const VehicleTruckFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1V9.8c0-.25.04-.5.1-.72L4.16 5.6A2.25 2.25 0 0 1 6.3 4h7.4c1 0 1.87.65 2.15 1.6l1.04 3.48c.07.23.11.47.11.71V16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H4Zm12 7.8v6.7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H8v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 4 16.5V9.8c0-.15.02-.3.06-.44L5.1 5.9c.16-.53.65-.89 1.2-.89h7.4c.55 0 1.04.36 1.2.9l1.04 3.46c.04.14.06.29.06.43ZM5 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H5v.5ZM14.86 9l-.66-2.62a.5.5 0 0 0-.48-.38H6.28a.5.5 0 0 0-.48.38L5.14 9h9.72ZM13 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2v.5ZM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5.5 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckFilled = wrapIcon_1.default( /*#__PURE__*/VehicleTruckFilledIcon, 'VehicleTruckFilled');
const VehicleTruckRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 .5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 2a2 2 0 0 0-2 2v10.5c0 .83.67 1.5 1.5 1.5H4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h.5c.83 0 1.5-.67 1.5-1.5V4a2 2 0 0 0-2-2H4Zm9 14.5V16h2v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5ZM7 16v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V16h2ZM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10.5a.5.5 0 0 1-.5.5H16V9.75c0-.2-.03-.41-.07-.61l-.76-3A1.5 1.5 0 0 0 13.72 5H6.28a1.5 1.5 0 0 0-1.45 1.14l-.76 3c-.04.2-.07.4-.07.6V15h-.5a.5.5 0 0 1-.5-.5V4Zm2 11v-5h10v5H5Zm.14-6 .66-2.62A.5.5 0 0 1 6.28 6h7.44a.5.5 0 0 1 .48.38L14.86 9H5.14Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckRegular = wrapIcon_1.default( /*#__PURE__*/VehicleTruckRegularIcon, 'VehicleTruckRegular');
const VehicleTruckBagFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 1a2 2 0 0 1 1 .27A2 2 0 0 1 8 3v1h.5c.28 0 .5.22.5.5V9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4.5c0-.28.22-.5.5-.5H2V3c0-1.1.9-2 2-2ZM3 4h2V3a1 1 0 0 0-2 0v1Zm3-1v1h1V3a1 1 0 0 0-1.25-.97A2 2 0 0 1 6 3Zm3 .09V3h3.25c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-2.4c.3.1.63.15.96.15h4a3 3 0 0 0 3-3V4.5c0-.65-.42-1.2-1-1.41ZM14 7v3h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14Zm-7.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckBagFilled = wrapIcon_1.default( /*#__PURE__*/VehicleTruckBagFilledIcon, 'VehicleTruckBagFilled');
const VehicleTruckBagRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 1a2 2 0 0 1 1 .27A2 2 0 0 1 8 3v1h.5c.28 0 .5.22.5.5V9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4.5c0-.28.22-.5.5-.5H2V3c0-1.1.9-2 2-2ZM3 4h2V3a1 1 0 0 0-2 0v1Zm3-1v1h1V3a1 1 0 0 0-1.25-.97A2 2 0 0 1 6 3Zm3 .09V3h3.25c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-2.4c.3.1.63.15.96.15h.04v2.25c0 .41.34.75.75.75h.26a2.5 2.5 0 0 1 4.9 0h1.1A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H9.91A1.5 1.5 0 0 0 9 3.09Zm5 10.41c.48.36.83.89.95 1.5h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5Zm0-3.5h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14v3Zm-7.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckBagRegular = wrapIcon_1.default( /*#__PURE__*/VehicleTruckBagRegularIcon, 'VehicleTruckBagRegular');
const VehicleTruckCubeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.04 9.89v4.36c0 .97.79 1.75 1.75 1.75h.26a2.5 2.5 0 0 0 4.9 0h1.1a2.5 2.5 0 0 0 4.9 0h1.55c.83 0 1.5-.67 1.5-1.5v-3.76c0-.24-.05-.47-.16-.67l-1.62-3.24A1.5 1.5 0 0 0 14.88 6H14V4.75C14 3.78 13.22 3 12.25 3h-2.1a2 2 0 0 1 .35 1.12v3.76a2 2 0 0 1-1.1 1.8l-3 1.5a2 2 0 0 1-1.8 0l-2.56-1.3ZM14 7h.88c.2 0 .36.1.45.28L16.69 10H14V7Zm-7.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM1.5 4.12v3.76a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9V4.12a1 1 0 0 0-.55-.9l-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9Zm1.7-.08 2.3.97 2.3-.97a.5.5 0 0 1 .4.92L6 5.9V8.5a.5.5 0 1 1-1 0V5.89l-2.2-.93a.5.5 0 1 1 .4-.92Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckCubeFilled = wrapIcon_1.default( /*#__PURE__*/VehicleTruckCubeFilledIcon, 'VehicleTruckCubeFilled');
const VehicleTruckCubeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1.5 7.88V4.12a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 .9 0l3 1.5a1 1 0 0 1 .55.9v3.76a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.57a.5.5 0 0 0 .27.65L5 5.9V8.5a.5.5 0 1 0 1 0V5.89l2.2-.93a.5.5 0 0 0-.4-.92l-2.3.97-2.3-.97a.5.5 0 0 0-.66.27Zm-.5 9.94V9.89l1 .5v3.86c0 .41.34.75.75.75h.26a2.5 2.5 0 0 1 4.9 0h1.1A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H10.5a2 2 0 0 0-.34-1h2.1c.96 0 1.74.78 1.74 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75Zm12.91.75h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5c.48.36.83.89.95 1.5Zm1.74-5-1.36-2.72a.5.5 0 0 0-.45-.28H14v3h2.7ZM5 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckCubeRegular = wrapIcon_1.default( /*#__PURE__*/VehicleTruckCubeRegularIcon, 'VehicleTruckCubeRegular');
const VehicleTruckProfileFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5ZM14 7v3h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14Zm-7.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckProfileFilled = wrapIcon_1.default( /*#__PURE__*/VehicleTruckProfileFilledIcon, 'VehicleTruckProfileFilled');
const VehicleTruckProfileRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5ZM10.05 15A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H3.79a.75.75 0 0 0-.75.75v9.5c0 .41.34.75.75.75h.26a2.5 2.5 0 0 1 4.9 0h1.1ZM14 13.5c.48.36.83.89.95 1.5h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5Zm0-3.5h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14v3Zm-7.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.VehicleTruckProfileRegular = wrapIcon_1.default( /*#__PURE__*/VehicleTruckProfileRegularIcon, 'VehicleTruckProfileRegular');
const VideoFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 6.5A2.5 2.5 0 0 0 10.5 4h-6A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6a2.5 2.5 0 0 0 2.5-2.5v-7Zm1 1.43v4.15l2.76 2.35a.75.75 0 0 0 1.24-.57V6.2a.75.75 0 0 0-1.23-.57L14 7.93Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoFilled = wrapIcon_1.default( /*#__PURE__*/VideoFilledIcon, 'VideoFilled');
const VideoRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM13 6.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoRegular = wrapIcon_1.default( /*#__PURE__*/VideoRegularIcon, 'VideoRegular');
const Video360FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.97 4.02A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68 37.94 37.94 0 0 1 12.25.02A1.7 1.7 0 0 0 18 14.3V5.7a1.7 1.7 0 0 0-1.97-1.68c-4 .64-8.07.64-12.06 0ZM16 14.96c-1-.15-2-.27-3-.35V12h2a1 1 0 0 1 1 1v1.96Zm-4-.41a38.84 38.84 0 0 0-4 0V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.55Zm-5 .06c-1 .08-2 .2-3 .35V13a1 1 0 0 1 1-1h2v2.61ZM10 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
  ;
};
exports.Video360Filled = wrapIcon_1.default( /*#__PURE__*/Video360FilledIcon, 'Video360Filled');
const Video360RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.97 4.02A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68c4-.65 8.07-.65 12.06 0A1.7 1.7 0 0 0 18 14.3V5.7a1.7 1.7 0 0 0-1.97-1.68c-4 .64-8.07.64-12.06 0ZM3 5.7a.7.7 0 0 1 .81-.7c4.1.67 8.28.67 12.38 0a.7.7 0 0 1 .81.7v8.6a.7.7 0 0 1-.81.7 31.2 31.2 0 0 0-.19-.04V13a1 1 0 0 0-1-1h-2v2.61l-1-.06V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.55l-1 .06V12H5a1 1 0 0 0-1 1v1.96l-.19.03A.7.7 0 0 1 3 14.3V5.7Z",
    fill: primaryFill
  }));
  ;
};
exports.Video360Regular = wrapIcon_1.default( /*#__PURE__*/Video360RegularIcon, 'Video360Regular');
const Video360OffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.18 1.19A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68 37.94 37.94 0 0 1 11.17-.13l2 2a.5.5 0 0 0 .71-.7l-15-15ZM14 14.7l-.99-.09v-.9l1 1Zm-1.99-2v1.85a38.84 38.84 0 0 0-4 0V12a1 1 0 0 1 1-1h1.3l1.7 1.7Zm-8 2.26V13a1 1 0 0 1 1-1h2v2.61c-1 .08-2 .2-3 .35ZM5.5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8.62 1L6.46 4.34c3.19.3 6.4.2 9.57-.32A1.7 1.7 0 0 1 18 5.7v8.6c0 .44-.17.84-.44 1.14L16 13.88V13a1 1 0 0 0-1-1h-.88Zm.38-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Video360OffFilled = wrapIcon_1.default( /*#__PURE__*/Video360OffFilledIcon, 'Video360OffFilled');
const Video360OffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.85 2.15a.5.5 0 1 0-.7.7l1.18 1.19A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68c3.7-.6 7.46-.64 11.17-.13l2 2a.5.5 0 0 0 .71-.7l-1.18-1.19-6.12-6.12-1.39-1.39L6.01 5.3 4.86 4.15l-2-2ZM13 13.7v.9l-1-.06V12.7l1 1ZM10.3 11H9a1 1 0 0 0-1 1v2.55l-1 .06V12H5a1 1 0 0 0-1 1v1.96l-.19.03A.7.7 0 0 1 3 14.3V5.7a.7.7 0 0 1 .81-.7l.58.1 5.9 5.9Zm3.82 1L16 13.88V13a1 1 0 0 0-1-1h-.88Zm2.73 2.73.71.71c.27-.3.44-.7.44-1.14V5.7a1.7 1.7 0 0 0-1.97-1.68c-3.17.51-6.38.62-9.57.32l1.09 1.09c2.88.18 5.78.04 8.64-.42a.7.7 0 0 1 .81.69v8.6a.7.7 0 0 1-.15.43ZM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.Video360OffRegular = wrapIcon_1.default( /*#__PURE__*/Video360OffRegularIcon, 'Video360OffRegular');
const VideoAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 5.5A2.5 2.5 0 0 0 11.5 3h-6A2.5 2.5 0 0 0 3 5.5v3.1a5.5 5.5 0 0 1 7.8 6.4h.7a2.5 2.5 0 0 0 2.5-2.5v-7Zm1 1.43v4.15l2.76 2.35a.75.75 0 0 0 1.24-.57V5.2a.75.75 0 0 0-1.23-.57L15 6.93Zm-5 6.57a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoAddFilled = wrapIcon_1.default( /*#__PURE__*/VideoAddFilledIcon, 'VideoAddFilled');
const VideoAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v3.1c.32-.16.65-.3 1-.4V5.5C4 4.67 4.67 4 5.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1.52c-.03.34-.1.68-.19 1h1.71a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L15 6.5v-1A2.5 2.5 0 0 0 12.5 3h-7ZM15 7.75l3-2.25v7l-3-2.25v-2.5Zm-5 5.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoAddRegular = wrapIcon_1.default( /*#__PURE__*/VideoAddRegularIcon, 'VideoAddRegular');
const VideoBackgroundEffectFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 4 2 8.2V6.8L4.8 4h1.4Zm7 0-1.46 1.46a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42Zm-1.08 3.17a2.51 2.51 0 0 0-2.34-1.16 2.5 2.5 0 1 0 2.34 1.16Zm.72-.72c.2.29.37.6.48.94L16.69 4 16.5 4h-1.2l-2.46 2.45ZM7.5 12c-.08 0-.15 0-.22.02A1.5 1.5 0 0 0 6 13.5V16h8v-2.5a1.5 1.5 0 0 0-1.5-1.5h-5Zm5-1c.22 0 .43.03.63.08L18 6.2V5.5c0-.2-.04-.4-.12-.59l-4.5 4.5a3.5 3.5 0 0 1-.93 1.59h.05Zm1.9.88c.23.27.4.58.5.93L18 9.7V8.29l-3.6 3.6ZM15 16v-1.2l3-3v1.4L15.2 16H15Zm-10-.3v-1.4l-1.7 1.69.2.01h1.2l.3-.3Zm1.57-6.48c.08.36.21.7.4 1.02L2.11 15.1A1.5 1.5 0 0 1 2 14.5v-.7l4.57-4.58ZM9.71 4 2 11.7v-1.4L8.3 4h1.4Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoBackgroundEffectFilled = wrapIcon_1.default( /*#__PURE__*/VideoBackgroundEffectFilledIcon, 'VideoBackgroundEffectFilled');
const VideoBackgroundEffectRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.2 4 2 8.2V6.8L4.8 4h1.4ZM3.5 16H5v-1.7l-1.7 1.69.2.01Zm11.7 0H15v-1.2l3-3v1.4L15.2 16ZM18 9.7l-3.1 3.1a2.5 2.5 0 0 0-.5-.92L18 8.3v1.42ZM12.5 12a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5c0-.08 0-.15.02-.22A1.5 1.5 0 0 1 7.5 12h5Zm-2.78-1.02a2.49 2.49 0 0 1-2.21-2.7 2.5 2.5 0 1 1 2.21 2.7ZM10 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7.88 5.09 4.84-4.85a3.48 3.48 0 0 1-.39-1.02L2 13.79v.71c0 .2.04.4.12.59Zm9.62-9.63a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42l-1.47 1.46Zm1.58 1.93a3.49 3.49 0 0 0-.48-.94L15.29 4h1.21l.2.01-3.38 3.38ZM12.45 11c.44-.43.76-.98.93-1.59l4.5-4.5c.08.18.12.38.12.59v.7l-4.87 4.88a2.5 2.5 0 0 0-.63-.08h-.05ZM2 11.7 9.7 4H8.3L2 10.3v1.4Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoBackgroundEffectRegular = wrapIcon_1.default( /*#__PURE__*/VideoBackgroundEffectRegularIcon, 'VideoBackgroundEffectRegular');
const VideoChatFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 5.5A2.5 2.5 0 0 0 11.5 3h-6A2.5 2.5 0 0 0 3 5.5v3.1a5.5 5.5 0 0 1 7.8 6.4h.7a2.5 2.5 0 0 0 2.5-2.5v-7Zm1 1.43v4.15l2.76 2.35a.75.75 0 0 0 1.24-.57V5.2a.75.75 0 0 0-1.23-.57L15 6.93ZM5.5 18a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoChatFilled = wrapIcon_1.default( /*#__PURE__*/VideoChatFilledIcon, 'VideoChatFilled');
const VideoChatRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v3.1c.32-.16.65-.3 1-.4V5.5C4 4.67 4.67 4 5.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1.52c-.03.34-.1.68-.19 1h1.71a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L15 6.5v-1A2.5 2.5 0 0 0 12.5 3h-7ZM15 7.75l3-2.25v7l-3-2.25v-2.5ZM5.5 18a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoChatRegular = wrapIcon_1.default( /*#__PURE__*/VideoChatRegularIcon, 'VideoChatRegular');
const VideoClipFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3h-11Zm4.27 4.08 4 2.5a.5.5 0 0 1 0 .84l-4 2.65a.5.5 0 0 1-.77-.42V7.5a.5.5 0 0 1 .77-.42Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipFilled = wrapIcon_1.default( /*#__PURE__*/VideoClipFilledIcon, 'VideoClipFilled');
const VideoClipRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.77 7.08A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .78.42l4-2.65a.5.5 0 0 0-.01-.84l-4-2.5ZM4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3h-11ZM3 5.5C3 4.67 3.67 4 4.5 4h11c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-9Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipRegular = wrapIcon_1.default( /*#__PURE__*/VideoClipRegularIcon, 'VideoClipRegular');
const VideoClipMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3h-9ZM7 6.76c0-.6.67-.96 1.17-.62l3.61 2.45c.3.2.3.63 0 .82l-3.6 2.46A.75.75 0 0 1 7 11.25v-4.5ZM6.5 17a2.5 2.5 0 0 1-2-1H14a3 3 0 0 0 3-3V5.5c.6.46 1 1.18 1 2V13a4 4 0 0 1-4 4H6.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipMultipleFilled = wrapIcon_1.default( /*#__PURE__*/VideoClipMultipleFilledIcon, 'VideoClipMultipleFilled');
const VideoClipMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 11.25v-4.5c0-.6.67-.95 1.17-.61l3.61 2.45c.3.2.3.63 0 .82l-3.6 2.46A.75.75 0 0 1 7 11.25ZM2 5.5A2.5 2.5 0 0 1 4.5 3h9A2.5 2.5 0 0 1 16 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-7ZM4.5 4C3.67 4 3 4.67 3 5.5v7c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-9Zm0 12c.46.6 1.18 1 2 1H14a4 4 0 0 0 4-4V7.5c0-.82-.4-1.54-1-2V13a3 3 0 0 1-3 3H4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipMultipleRegular = wrapIcon_1.default( /*#__PURE__*/VideoClipMultipleRegularIcon, 'VideoClipMultipleRegular');
const VideoClipOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15Zm8.08 9.49-2.15 1.43a.5.5 0 0 1-.78-.42V8.71l2.93 2.93Zm1.85-1.22-.15.1 5.1 5.1c.18-.34.27-.72.27-1.12v-9A2.5 2.5 0 0 0 15.5 3H5.12l4.8 4.8 2.85 1.78a.5.5 0 0 1 0 .84Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipOffFilled = wrapIcon_1.default( /*#__PURE__*/VideoClipOffFilledIcon, 'VideoClipOffFilled');
const VideoClipOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l.73.74A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15ZM15.3 16H4.5A1.5 1.5 0 0 1 3 14.5v-9c0-.49.23-.92.6-1.2L8 8.7v3.95a.5.5 0 0 0 .78.42l2.15-1.43L15.3 16ZM9.92 7.8l2.71 2.71.15-.1a.5.5 0 0 0-.01-.83L9.92 7.8ZM17 14.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-9A2.5 2.5 0 0 0 15.5 3H5.12l1 1h9.38c.83 0 1.5.67 1.5 1.5v9Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoClipOffRegular = wrapIcon_1.default( /*#__PURE__*/VideoClipOffRegularIcon, 'VideoClipOffRegular');
const VideoOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6a2.5 2.5 0 0 0 2.5-2.3l4.15 4.15a.5.5 0 0 0 .7-.7l-15-15Zm13.91 12.28-1.4-1.2L14 11.88V7.93l2.77-2.31a.75.75 0 0 1 1.23.57v7.67c0 .64-.75.99-1.24.57ZM13 10.88 6.12 4h4.38A2.5 2.5 0 0 1 13 6.5v4.38Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoOffFilled = wrapIcon_1.default( /*#__PURE__*/VideoOffFilledIcon, 'VideoOffFilled');
const VideoOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.3-1.5l3.35 3.35a.5.5 0 0 0 .7-.7l-15-15ZM13 13.69A1.5 1.5 0 0 1 11.5 15h-7A1.5 1.5 0 0 1 3 13.5v-7c0-.76.57-1.4 1.3-1.49L13 13.7Zm.01-2.81 3.47 3.47A1 1 0 0 0 18 13.5v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4H6.12l1 1h4.38c.83 0 1.5.67 1.5 1.5v4.38Zm1-2.13 3-2.25v7l-3-2.25v-2.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoOffRegular = wrapIcon_1.default( /*#__PURE__*/VideoOffRegularIcon, 'VideoOffRegular');
const VideoPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM14 15h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5V15Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonFilledIcon, 'VideoPersonFilled');
const VideoPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM7 15h6v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15Zm7 0h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5V15Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonRegularIcon, 'VideoPersonRegular');
const VideoPersonCallFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v3.4c-.14-.06-.53-.2-1-.18V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1.07c-1.04.04-1.53.8-1.83 1.24l-.13.19H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm10.5 3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm3.33 2.76.4-.94a.96.96 0 0 1 1.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 0 1-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 0 1 .98-.4l.1.02 1.05.35a4.03 4.03 0 0 0 1.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonCallFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonCallFilledIcon, 'VideoPersonCallFilled');
const VideoPersonCallRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v3.4c-.14-.06-.53-.2-1-.18V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1.07c-.41.02-.74.14-1 .32V13.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15h5.85a3.4 3.4 0 0 0-.68.81l-.13.19H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm8 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5.83 1.26.4-.94a.96.96 0 0 1 1.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 0 1-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 0 1 .98-.4l.1.02 1.05.35a4.03 4.03 0 0 0 1.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonCallRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonCallRegularIcon, 'VideoPersonCallRegular');
const VideoPersonClockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.76a5.48 5.48 0 0 0-1.24 4H3.5A1.5 1.5 0 0 1 2 13.5v-9Zm17 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonClockFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonClockFilledIcon, 'VideoPersonClockFilled');
const VideoPersonClockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.76c-.26.3-.48.64-.66 1H7.5a.5.5 0 0 0-.5.5V14h2.02a5.57 5.57 0 0 0 0 1H3.5A1.5 1.5 0 0 1 2 13.5v-9Zm17 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonClockRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonClockRegularIcon, 'VideoPersonClockRegular');
const VideoPersonOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h11.8l1.85 1.85a.5.5 0 0 0 .7-.7l-15-15ZM11.3 12H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.78 2.48L11.29 12ZM8.57 6.45l3.48 3.48a2.5 2.5 0 0 0-3.48-3.48ZM17 14.5c0 .1-.03.2-.1.29l.72.7c.24-.26.38-.6.38-.99v-9c0-.83-.67-1.5-1.5-1.5H6.12l1 1h9.38c.28 0 .5.22.5.5v9Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonOffFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonOffFilledIcon, 'VideoPersonOffFilled');
const VideoPersonOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h11.8l1.85 1.85a.5.5 0 0 0 .7-.7l-15-15ZM12.3 13l.71.7V15H7v-1.5c0-.28.22-.5.5-.5h4.8Zm-1-1H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.78 2.48L11.29 12ZM8.57 6.45l.73.72a1.5 1.5 0 0 1 2.03 2.03l.72.73a2.5 2.5 0 0 0-3.48-3.48ZM17 14.5c0 .1-.03.2-.1.29l.72.7c.24-.26.38-.6.38-.99v-9c0-.83-.67-1.5-1.5-1.5H6.12l1 1h9.38c.28 0 .5.22.5.5v9Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonOffRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonOffRegularIcon, 'VideoPersonOffRegular');
const VideoPersonSparkleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.76 4h12.73A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5H3.51a1.5 1.5 0 0 1-1.5-1.5V9.89c.16.07.33.1.5.11.17 0 .34-.04.5-.1v4.6a.5.5 0 0 0 .5.5h2.5v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V15h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H4.3a.57.57 0 0 1-.2-.12.57.57 0 0 1-.14-.23L3.76 4Zm8 2.73a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54Zm-7.64 2.6a.18.18 0 0 0-.12.16c0 .04.01.08.03.1.02.04.05.06.09.08l.46.14a.96.96 0 0 1 .6.6l.15.46a.18.18 0 0 0 .16.13.18.18 0 0 0 .17-.13l.15-.45a.94.94 0 0 1 .6-.6l.46-.15a.17.17 0 0 0 .08-.07.18.18 0 0 0-.08-.27h-.01l-.46-.15a.95.95 0 0 1-.6-.6l-.15-.46a.19.19 0 0 0-.04-.06.18.18 0 0 0-.13-.06.19.19 0 0 0-.1.04.18.18 0 0 0-.07.08l-.15.46a.99.99 0 0 1-.22.37c-.1.1-.23.18-.37.23l-.45.15ZM2.5 9a.3.3 0 0 1-.28-.2l-.25-.76a1.57 1.57 0 0 0-1-1L.2 6.78A.3.3 0 0 1 0 6.5a.3.3 0 0 1 .2-.28l.77-.25a1.57 1.57 0 0 0 .98-.98v-.02l.25-.77A.3.3 0 0 1 2.5 4a.3.3 0 0 1 .28.2l.25.77.1.22c.07.14.16.28.28.4.17.17.38.3.62.38l.76.25h.02a.3.3 0 0 1 .2.29.3.3 0 0 1-.2.28l-.77.25a1.57 1.57 0 0 0-1 1l-.25.76v.02a.32.32 0 0 1-.1.13.3.3 0 0 1-.18.05Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonSparkleFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonSparkleFilledIcon, 'VideoPersonSparkleFilled');
const VideoPersonSparkleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.76 4h12.73A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5H3.51a1.5 1.5 0 0 1-1.5-1.5V9.89c.16.07.33.1.5.11.17 0 .34-.04.5-.1v4.6a.5.5 0 0 0 .5.5h2.5v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V15h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H4.3a.57.57 0 0 1-.2-.12.57.57 0 0 1-.14-.23L3.76 4ZM7 15h6v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15Zm4.76-8.27a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54Zm-2.83.7a1.5 1.5 0 1 0 2.13 2.13 1.5 1.5 0 0 0-2.13-2.12Zm-4.81 1.9a.18.18 0 0 0-.12.16c0 .04.01.08.03.1.02.04.05.06.09.08l.46.14a.96.96 0 0 1 .6.6l.15.46a.18.18 0 0 0 .16.13.18.18 0 0 0 .17-.13l.15-.45a.94.94 0 0 1 .6-.6l.46-.15a.17.17 0 0 0 .08-.07.18.18 0 0 0-.08-.27h-.01l-.46-.15a.95.95 0 0 1-.6-.6l-.15-.46a.19.19 0 0 0-.04-.06.18.18 0 0 0-.13-.06.19.19 0 0 0-.1.04.18.18 0 0 0-.07.08l-.15.46a.99.99 0 0 1-.22.37c-.1.1-.23.18-.37.23l-.45.15ZM2.5 9a.3.3 0 0 1-.28-.2l-.25-.76a1.57 1.57 0 0 0-1-1L.2 6.78A.3.3 0 0 1 0 6.5a.3.3 0 0 1 .2-.28l.77-.25a1.57 1.57 0 0 0 .98-.98v-.02l.25-.77A.3.3 0 0 1 2.5 4a.3.3 0 0 1 .28.2l.25.77.1.22c.07.14.16.28.28.4.17.17.38.3.62.38l.76.25h.02a.3.3 0 0 1 .2.29.3.3 0 0 1-.2.28l-.77.25a1.57 1.57 0 0 0-1 1l-.25.76v.02a.32.32 0 0 1-.1.13.3.3 0 0 1-.18.05Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonSparkleRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonSparkleRegularIcon, 'VideoPersonSparkleRegular');
const VideoPersonStarFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v4.76a5.5 5.5 0 0 0-1-.66V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.1a5.48 5.48 0 0 0-.4 4H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm10.5 3c0 .34-.07.66-.19.95-.8.35-1.5.88-2.04 1.54L10 11a2.5 2.5 0 1 1 2.5-2.5Zm6.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonStarFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonStarFilledIcon, 'VideoPersonStarFilled');
const VideoPersonStarRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v4.76a5.5 5.5 0 0 0-1-.66V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.1c-.16.32-.3.65-.4 1H7.5a.5.5 0 0 0-.5.5V15h2.02c.03.34.1.68.19 1H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm10.5 3c0 .34-.07.66-.19.95-.8.35-1.5.88-2.04 1.54L10 11a2.5 2.5 0 1 1 2.5-2.5ZM10 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonStarRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonStarRegularIcon, 'VideoPersonStarRegular');
const VideoPersonStarOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h5.7a5.5 5.5 0 0 1 .4-4H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.77 2.49v-.01l.71.71a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.83l-15-15ZM16.5 17.2c-.13.27-.47.4-.75.2l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h.68l3.8 3.81ZM8.57 6.45l3.25 3.25c.16-.1.32-.17.5-.25A2.5 2.5 0 0 0 10 6c-.53 0-1.02.17-1.43.45Zm3.99 3.99 1.45 1.45.01-.03a.5.5 0 0 1 .96 0l.45 1.45.08.08H17c.48 0 .68.65.3.95l-.48.36 1.74 1.74a4.5 4.5 0 0 0-6-6ZM6.12 4l1 1h9.38c.28 0 .5.22.5.5v4.1c.36.18.7.4 1 .66V5.5c0-.83-.67-1.5-1.5-1.5H6.12Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonStarOffFilled = wrapIcon_1.default( /*#__PURE__*/VideoPersonStarOffFilledIcon, 'VideoPersonStarOffFilled');
const VideoPersonStarOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h5.7c-.08-.32-.15-.66-.18-1H7v-1.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.77 2.49v-.01l.71.71a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.83l-15-15ZM16.5 17.2c-.13.27-.47.4-.75.2l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h.68l3.8 3.81ZM8.57 6.45l.73.73a1.5 1.5 0 0 1 2.03 2.03l.49.49c.16-.1.32-.17.5-.25A2.5 2.5 0 0 0 10 6c-.53 0-1.02.17-1.43.45Zm3.99 3.99 1.45 1.45.01-.03a.5.5 0 0 1 .96 0l.45 1.45.08.08H17c.48 0 .68.65.3.95l-.48.36 1.74 1.74a4.5 4.5 0 0 0-6-6ZM6.12 4l1 1h9.38c.28 0 .5.22.5.5v4.1c.36.18.7.4 1 .66V5.5c0-.83-.67-1.5-1.5-1.5H6.12Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPersonStarOffRegular = wrapIcon_1.default( /*#__PURE__*/VideoPersonStarOffRegularIcon, 'VideoPersonStarOffRegular');
const VideoPlayPauseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-1Zm5 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-1Zm-12.57.45A1.25 1.25 0 0 0 2 6.5v7c0 .98 1.08 1.58 1.92 1.06l5.5-3.46c.77-.5.77-1.62 0-2.11l-5.5-3.54Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPlayPauseFilled = wrapIcon_1.default( /*#__PURE__*/VideoPlayPauseFilledIcon, 'VideoPlayPauseFilled');
const VideoPlayPauseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1Zm3.5.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1ZM3 6.5c0-.2.22-.32.39-.2l5.5 3.53c.15.1.14.32-.01.42l-5.5 3.46A.25.25 0 0 1 3 13.5v-7Zm.93-1.05A1.25 1.25 0 0 0 2 6.5v7c0 .98 1.08 1.58 1.92 1.06l5.5-3.46c.77-.5.77-1.62 0-2.11l-5.5-3.54Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoPlayPauseRegular = wrapIcon_1.default( /*#__PURE__*/VideoPlayPauseRegularIcon, 'VideoPlayPauseRegular');
const VideoProhibitedFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 6.5A2.5 2.5 0 0 0 10.5 4h-6A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.7A5.5 5.5 0 0 1 13 9.2V6.5Zm5-.3v4.06a5.48 5.48 0 0 0-4-1.24V7.93l2.77-2.31a.75.75 0 0 1 1.23.57Zm-8 8.3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoProhibitedFilled = wrapIcon_1.default( /*#__PURE__*/VideoProhibitedFilledIcon, 'VideoProhibitedFilled');
const VideoProhibitedRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6.5A2.5 2.5 0 0 1 4.5 4h7A2.5 2.5 0 0 1 14 6.5v1l2.4-1.8a1 1 0 0 1 1.6.8v3.76a5.5 5.5 0 0 0-1-.66V6.5l-3 2.25v.27c-.34.03-.68.1-1 .19V6.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h4.52c.03.34.1.68.19 1H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm8 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoProhibitedRegular = wrapIcon_1.default( /*#__PURE__*/VideoProhibitedRegularIcon, 'VideoProhibitedRegular');
const VideoRecordingFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 4A2.5 2.5 0 0 1 13 6.5v7a2.5 2.5 0 0 1-2 2.45V12.5A3.5 3.5 0 0 0 7.5 9h-4c-.54 0-1.05.12-1.5.34V6.5A2.5 2.5 0 0 1 4.5 4h6Zm3.5 8.08V7.93l2.77-2.31a.75.75 0 0 1 1.23.57v7.67c0 .64-.75.99-1.24.57L14 12.08ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4Zm4.02.03a.45.45 0 0 0-.45-.03.5.5 0 0 0-.15.1.5.5 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoRecordingFilled = wrapIcon_1.default( /*#__PURE__*/VideoRecordingFilledIcon, 'VideoRecordingFilled');
const VideoRecordingRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v2.84c.31-.15.65-.25 1-.3V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H11v1h.5a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4Zm4.02.03a.45.45 0 0 0-.45-.03.5.5 0 0 0-.15.1.5.5 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoRecordingRegular = wrapIcon_1.default( /*#__PURE__*/VideoRecordingRegularIcon, 'VideoRecordingRegular');
const VideoSecurityFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm13 5.66V5.33l2.25-1.27a.5.5 0 0 1 .75.44v7a.5.5 0 0 1-.75.44L15 10.66Zm-8 3.09h3v.5A3.75 3.75 0 0 1 6.25 18H3.5a.5.5 0 0 1-.5-.5v-1.75c0-.28.22-.5.5-.5h2.75c.41 0 .75-.34.75-.75v-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSecurityFilled = wrapIcon_1.default( /*#__PURE__*/VideoSecurityFilledIcon, 'VideoSecurityFilled');
const VideoSecurityRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v.9l3.25-1.84a.5.5 0 0 1 .75.44v7a.5.5 0 0 1-.75.44L14 10.1v.9a2 2 0 0 1-2 2h-2v1a4 4 0 0 1-4 4H3.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h2c.83 0 1.5-.67 1.5-1.5V13H4a2 2 0 0 1-2-2V5Zm6 8v.5A2.5 2.5 0 0 1 5.5 16H4v1h2a3 3 0 0 0 3-3v-1H8Zm-4-1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm10-4.96v1.91l3 1.7v-5.3l-3 1.69Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSecurityRegular = wrapIcon_1.default( /*#__PURE__*/VideoSecurityRegularIcon, 'VideoSecurityRegular');
const VideoSwitchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2A2.5 2.5 0 0 0 4 4.5v5A2.5 2.5 0 0 0 6.5 12h4A2.5 2.5 0 0 0 13 9.5v-5A2.5 2.5 0 0 0 10.5 2h-4Zm9.4 7.92L14 8.89V5.1l1.9-1.03a.75.75 0 0 1 1.1.66v4.52c0 .57-.6.93-1.1.66ZM3.66 11.89c-.32.12-.6.26-.85.4-.41.27-.82.66-.82 1.21 0 .55.4.94.82 1.2.44.28 1.05.51 1.75.7a22.04 22.04 0 0 0 5.72.6l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L10.29 15H10c-2.04 0-3.87-.22-5.17-.57a5.55 5.55 0 0 1-1.47-.57C3 13.64 3 13.5 3 13.5c0 0 .01-.14.36-.36.27-.17.68-.34 1.21-.5a3.01 3.01 0 0 1-.9-.75Zm9.4.29c.27-.26.5-.57.65-.92.63.1 1.2.2 1.71.34.7.19 1.3.42 1.75.7.41.26.82.65.82 1.2 0 .55-.4.94-.82 1.2a6.5 6.5 0 0 1-1.75.7l-.85.2a.49.49 0 0 1-.58-.5c0-.24.18-.44.42-.5.26-.05.52-.1.75-.17a5.55 5.55 0 0 0 1.47-.57c.35-.22.36-.35.36-.36 0 0-.01-.14-.36-.36-.32-.2-.81-.4-1.47-.57-.6-.16-1.31-.3-2.1-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSwitchFilled = wrapIcon_1.default( /*#__PURE__*/VideoSwitchFilledIcon, 'VideoSwitchFilled');
const VideoSwitchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v.61l1.9-1.03a.75.75 0 0 1 1.1.66v4.52c0 .57-.6.93-1.1.66L14 8.89v.61a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 9.5v-5Zm10 3.25 2 1.09V5.16l-2 1.1v1.49ZM6.5 3C5.67 3 5 3.67 5 4.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Zm-2.83 8.89c-.32.12-.6.26-.85.4-.41.27-.82.66-.82 1.21 0 .55.4.94.82 1.2.44.28 1.05.51 1.75.7a22.04 22.04 0 0 0 5.72.6l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L10.29 15H10c-2.04 0-3.87-.22-5.17-.57a5.55 5.55 0 0 1-1.47-.57C3 13.64 3 13.5 3 13.5c0 0 .01-.14.36-.36.27-.17.68-.34 1.21-.5a3.01 3.01 0 0 1-.9-.75Zm10.25.41c.3-.24.54-.54.72-.88l.8.18c.7.19 1.3.42 1.74.7.41.26.82.65.82 1.2 0 .55-.4.94-.82 1.2a6.5 6.5 0 0 1-1.75.7l-.85.2a.49.49 0 0 1-.58-.5c0-.24.18-.44.42-.5.26-.05.52-.1.75-.17a5.55 5.55 0 0 0 1.47-.57c.35-.22.36-.35.36-.36 0 0-.01-.14-.36-.36-.32-.2-.81-.4-1.47-.57-.37-.1-.8-.2-1.25-.27Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSwitchRegular = wrapIcon_1.default( /*#__PURE__*/VideoSwitchRegularIcon, 'VideoSwitchRegular');
const VideoSyncFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 6.5A2.5 2.5 0 0 0 10.5 4h-6A2.5 2.5 0 0 0 2 6.5v3.76a5.5 5.5 0 0 1 8.8 5.73A2.5 2.5 0 0 0 13 13.5v-7Zm1 1.43v4.15l2.76 2.35a.75.75 0 0 0 1.24-.57V6.2a.75.75 0 0 0-1.23-.57L14 7.93ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSyncFilled = wrapIcon_1.default( /*#__PURE__*/VideoSyncFilledIcon, 'VideoSyncFilled');
const VideoSyncRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v3.76c.3-.26.64-.48 1-.66V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-.52c-.03.34-.1.68-.19 1h.71a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
  ;
};
exports.VideoSyncRegular = wrapIcon_1.default( /*#__PURE__*/VideoSyncRegularIcon, 'VideoSyncRegular');
const ViewDesktopFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1.96 4.5c0-.83.67-1.5 1.5-1.5H16.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H12v2.01h1.5a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1H8V14H3.46a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.01h2V14H9ZM4 5.5v6c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v6c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ViewDesktopFilled = wrapIcon_1.default( /*#__PURE__*/ViewDesktopFilledIcon, 'ViewDesktopFilled');
const ViewDesktopRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 5.5c0-.28.22-.5.5-.5h1c.27 0 .5.22.5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6ZM7.5 5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8Zm-5.54-.5c0-.83.67-1.5 1.5-1.5H16.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H12v2.01h1.5a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1H8V14H3.46a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.01h2V14H9ZM3.46 4a.5.5 0 0 0-.5.5v8c0 .28.23.5.5.5H16.4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H3.46Z",
    fill: primaryFill
  }));
  ;
};
exports.ViewDesktopRegular = wrapIcon_1.default( /*#__PURE__*/ViewDesktopRegularIcon, 'ViewDesktopRegular');
const ViewDesktopMobileFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm2.5 0a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5Zm0 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5ZM9 15.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.ViewDesktopMobileFilled = wrapIcon_1.default( /*#__PURE__*/ViewDesktopMobileFilledIcon, 'ViewDesktopMobileFilled');
const ViewDesktopMobileRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 4a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5ZM7 8.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5ZM9.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z",
    fill: primaryFill
  }));
  ;
};
exports.ViewDesktopMobileRegular = wrapIcon_1.default( /*#__PURE__*/ViewDesktopMobileRegularIcon, 'ViewDesktopMobileRegular');
const VirtualNetworkFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.7 6.16c.34.25.4.72.14 1.05L2.7 10l2.14 2.8a.75.75 0 1 1-1.18.9l-2.5-3.24a.75.75 0 0 1 0-.92l2.5-3.25a.75.75 0 0 1 1.05-.13Zm10.46 6.63a.75.75 0 1 0 1.18.92l2.5-3.25c.21-.27.21-.65 0-.92l-2.5-3.25a.75.75 0 1 0-1.18.92L17.3 10l-2.14 2.8ZM6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.VirtualNetworkFilled = wrapIcon_1.default( /*#__PURE__*/VirtualNetworkFilledIcon, 'VirtualNetworkFilled');
const VirtualNetworkRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.83 6.12c.2.18.23.5.05.7L2.16 10l2.72 3.17a.5.5 0 1 1-.76.66l-3-3.5a.5.5 0 0 1 0-.66l3-3.5a.5.5 0 0 1 .7-.05Zm10.29 7.05a.5.5 0 0 0 .76.66l3-3.5a.5.5 0 0 0 0-.66l-3-3.5a.5.5 0 1 0-.76.66L17.84 10l-2.72 3.17ZM6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.VirtualNetworkRegular = wrapIcon_1.default( /*#__PURE__*/VirtualNetworkRegularIcon, 'VirtualNetworkRegular');
const VirtualNetworkToolboxFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.84 7.2a.75.75 0 0 0-1.18-.9l-2.5 3.24c-.21.27-.21.65 0 .92l2.5 3.25a.75.75 0 1 0 1.18-.92L2.7 10l2.14-2.8Zm13.12 3.84a2.5 2.5 0 0 0-1.13-1.66l-1.67-2.17a.75.75 0 1 1 1.18-.92l2.5 3.25c.21.27.21.65 0 .92l-.52.68a2.49 2.49 0 0 0-.36-.1ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.VirtualNetworkToolboxFilled = wrapIcon_1.default( /*#__PURE__*/VirtualNetworkToolboxFilledIcon, 'VirtualNetworkToolboxFilled');
const VirtualNetworkToolboxRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.88 6.83a.5.5 0 1 0-.76-.66l-3 3.5a.5.5 0 0 0 0 .66l3 3.5a.5.5 0 1 0 .76-.66L2.16 10l2.72-3.17Zm13.08 4.21c-.06-.3-.16-.57-.31-.82l.2-.22-2.73-3.17a.5.5 0 0 1 .76-.66l3 3.5a.5.5 0 0 1 0 .66l-.67.77a2.48 2.48 0 0 0-.25-.06ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
  ;
};
exports.VirtualNetworkToolboxRegular = wrapIcon_1.default( /*#__PURE__*/VirtualNetworkToolboxRegularIcon, 'VirtualNetworkToolboxRegular');
const VoicemailFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm7 4a2 2 0 0 0-.27-1h2.54A2 2 0 1 0 13 8H7a2 2 0 1 0 2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailFilled = wrapIcon_1.default( /*#__PURE__*/VoicemailFilledIcon, 'VoicemailFilled');
const VoicemailRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 9A2 2 0 1 1 7 8h6a2 2 0 1 1-1.73 1H8.73ZM6 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailRegular = wrapIcon_1.default( /*#__PURE__*/VoicemailRegularIcon, 'VoicemailRegular');
const VoicemailArrowBackFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-2a2 2 0 0 1 1.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 0 1 1.81-5.76A2.02 2.02 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm1.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowBackFilled = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowBackFilledIcon, 'VoicemailArrowBackFilled');
const VoicemailArrowBackRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 9A2 2 0 1 1 7 8h6a2 2 0 0 1 1.74 1 5.6 5.6 0 0 0-1.3.1 1 1 0 0 0-1.33.45c-.4.19-.76.42-1.1.7A2.02 2.02 0 0 1 11.27 9H8.73ZM6 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm11-4v3.6c.36.18.7.4 1 .66V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-2.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowBackRegular = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowBackRegularIcon, 'VoicemailArrowBackRegular');
const VoicemailArrowForwardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-2a2 2 0 0 1 1.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 0 1 1.81-5.76A2.02 2.02 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm-3 6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowForwardFilled = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowForwardFilledIcon, 'VoicemailArrowForwardFilled');
const VoicemailArrowForwardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.73 9A2 2 0 1 1 7 8h6a2 2 0 0 1 1.74 1 5.6 5.6 0 0 0-1.3.1 1 1 0 0 0-1.33.45c-.4.19-.76.42-1.1.7A2.02 2.02 0 0 1 11.27 9H8.73ZM6 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm11-4v3.6c.36.18.7.4 1 .66V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-7 8.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowForwardRegular = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowForwardRegularIcon, 'VoicemailArrowForwardRegular');
const VoicemailArrowSubtractFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 8a2 2 0 0 1 1.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 0 1 1.81-5.76A2.02 2.02 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm-7 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm13 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowSubtractFilled = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowSubtractFilledIcon, 'VoicemailArrowSubtractFilled');
const VoicemailArrowSubtractRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 9.6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.02c.03.34.1.68.19 1H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4.26a5.5 5.5 0 0 0-1-.66ZM9 10a2 2 0 0 0-.27-1h2.54a2 2 0 0 0-.26 1.24c.34-.27.7-.5 1.1-.7a1 1 0 0 1 1.33-.44 5.53 5.53 0 0 1 1.3-.1A2 2 0 0 0 13 8H7a2 2 0 1 0 2 2Zm-2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.VoicemailArrowSubtractRegular = wrapIcon_1.default( /*#__PURE__*/VoicemailArrowSubtractRegularIcon, 'VoicemailArrowSubtractRegular');
const VoteFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 9h-1.27l1.73-3a1 1 0 0 0-.36-1.37L11 3.13a1 1 0 0 0-1.37.37l-2.5 4.33A1 1 0 0 0 7.26 9H6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm-3-5 2.6 1.5L11.08 9H9.16L8 8.33 10.5 4Zm4.04 3-.58 1h.54l2.25 3H3.25L5.5 8h.4a1 1 0 0 1 .08-.17L6.46 7H5.5a1 1 0 0 0-.8.4l-2.5 3.33a1 1 0 0 0-.2.6V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.67a1 1 0 0 0-.2-.6L15.3 7.4a1 1 0 0 0-.76-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.VoteFilled = wrapIcon_1.default( /*#__PURE__*/VoteFilledIcon, 'VoteFilled');
const VoteRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.23 9h1.27a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h.76a1 1 0 0 1-.13-1.17l2.5-4.33A1 1 0 0 1 11 3.13l2.6 1.5A1 1 0 0 1 13.96 6l-1.73 3Zm.87-3.5L10.5 4 8 8.33 9.16 9h1.92l2.02-3.5Zm.86 2.5.58-1a1 1 0 0 1 .76.4l2.5 3.33a1 1 0 0 1 .2.6V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.67a1 1 0 0 1 .2-.6L4.7 7.4a1 1 0 0 1 .8-.4h.96l-.48.83a1 1 0 0 0-.07.17H5.5l-2.25 3h13.5L14.5 8h-.54ZM3 16h14v-4H3v4Z",
    fill: primaryFill
  }));
  ;
};
exports.VoteRegular = wrapIcon_1.default( /*#__PURE__*/VoteRegularIcon, 'VoteRegular');
const WalkieTalkieFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 7v2h4V7H8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 1c.28 0 .5.22.5.5V3h6.5c.83 0 1.5.67 1.5 1.5v7c0 .1-.03.2-.08.28L14 14.65v1.85c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-1.85l-1.92-2.87A.5.5 0 0 1 4 11.5v-7C4 3.67 4.67 3 5.5 3H7V1.5c0-.28.22-.5.5-.5ZM7 6.5v3c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Zm1 6c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WalkieTalkieFilled = wrapIcon_1.default( /*#__PURE__*/WalkieTalkieFilledIcon, 'WalkieTalkieFilled');
const WalkieTalkieRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 6a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5ZM8 9V7h4v2H8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1.5a.5.5 0 0 0-1 0V3H5.5C4.67 3 4 3.67 4 4.5v7c0 .1.03.2.08.28L6 14.65v1.85c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-1.85l1.92-2.87a.5.5 0 0 0 .08-.28v-7c0-.83-.67-1.5-1.5-1.5H8V1.5ZM5.5 4h9c.28 0 .5.22.5.5v6.85l-1.92 2.87a.5.5 0 0 0-.08.28v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.08-.28L5 11.35V4.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WalkieTalkieRegular = wrapIcon_1.default( /*#__PURE__*/WalkieTalkieRegularIcon, 'WalkieTalkieRegular');
const WalletFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3C3.67 3 3 3.67 3 4.5v10A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V7a2 2 0 0 0-1-1.73V5a2 2 0 0 0-2-2H4.5ZM15 5H4.5a.5.5 0 0 1 0-1H14a1 1 0 0 1 1 1Zm-1.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WalletFilled = wrapIcon_1.default( /*#__PURE__*/WalletFilledIcon, 'WalletFilled');
const WalletRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM3 4.5C3 3.67 3.67 3 4.5 3H14a2 2 0 0 1 2 2v.27c.6.34 1 .99 1 1.73v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-10ZM14 4H4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0-1-1ZM4.5 6a1.5 1.5 0 0 1-.5-.09v8.59c0 .83.67 1.5 1.5 1.5H15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WalletRegular = wrapIcon_1.default( /*#__PURE__*/WalletRegularIcon, 'WalletRegular');
const WalletCreditCardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.18 1.34a1.5 1.5 0 0 0-2.18.3L6.96 6h1.22l2.64-3.79a.5.5 0 0 1 .73-.1l.8.66L10.12 6h1.22l1.8-2.6 1.68 1.37c.2.16.24.46.1.67l-.4.56h1.22a1.5 1.5 0 0 0-.3-2.01l-3.26-2.65ZM4.5 5C3.67 5 3 5.67 3 6.5v8A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4.5a.5.5 0 0 1 0-1h1.47l.7-1H4.5Zm9 7h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WalletCreditCardFilled = wrapIcon_1.default( /*#__PURE__*/WalletCreditCardFilledIcon, 'WalletCreditCardFilled');
const WalletCreditCardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 1.64a1.5 1.5 0 0 1 2.18-.3l3.27 2.65c.6.5.73 1.37.3 2h-1.23l.4-.55a.5.5 0 0 0-.1-.67L13.13 3.4 11.33 6h-1.2l2.22-3.23-.8-.66a.5.5 0 0 0-.73.1L8.18 6H6.96L10 1.64ZM13.5 12a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-9-7h2.17l-.7 1H4.5a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-8C3 5.67 3.67 5 4.5 5ZM4 14.5c0 .83.67 1.5 1.5 1.5H15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4.5a1.5 1.5 0 0 1-.5-.09v6.59Z",
    fill: primaryFill
  }));
  ;
};
exports.WalletCreditCardRegular = wrapIcon_1.default( /*#__PURE__*/WalletCreditCardRegularIcon, 'WalletCreditCardRegular');
const WallpaperFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 0 1.5H6c-.83 0-1.5.67-1.5 1.5v2.25a.75.75 0 0 1-1.5 0V6Zm8-2.25c0-.41.34-.75.75-.75H14a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V6c0-.83-.67-1.5-1.5-1.5h-2.25a.75.75 0 0 1-.75-.75ZM3.75 11c.41 0 .75.34.75.75V14c0 .13.02.26.05.39l3.68-3.68a2.5 2.5 0 0 1 3.54 0l3.68 3.68c.03-.13.05-.26.05-.39v-2.25a.75.75 0 0 1 1.5 0V14a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H14c.13 0 .26-.02.39-.05l-3.68-3.68a1 1 0 0 0-1.42 0l-3.68 3.68c.13.03.26.05.39.05h2.25a.75.75 0 0 1 0 1.5H6a3 3 0 0 1-3-3v-2.25c0-.41.34-.75.75-.75ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WallpaperFilled = wrapIcon_1.default( /*#__PURE__*/WallpaperFilledIcon, 'WallpaperFilled');
const WallpaperRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6Zm8-2.5c0-.28.22-.5.5-.5H14a3 3 0 0 1 3 3v2.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1-.5-.5ZM3.5 11c.28 0 .5.22.5.5V14c0 .37.1.72.28 1.02l4.48-4.49c.69-.68 1.8-.68 2.48 0l4.48 4.49A2 2 0 0 0 16 14v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 1.02-.28l-4.49-4.48a.75.75 0 0 0-1.06 0l-4.49 4.48A2 2 0 0 0 6 16h2.5a.5.5 0 0 1 0 1H6a3 3 0 0 1-3-3v-2.5c0-.28.22-.5.5-.5Zm9-4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-1.5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WallpaperRegular = wrapIcon_1.default( /*#__PURE__*/WallpaperRegularIcon, 'WallpaperRegular');
const WandFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 2.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1H17v-.5Zm-10 3a.5.5 0 0 1-.5.5H6v.5a.5.5 0 0 1-1 0V6h-.5a.5.5 0 0 1 0-1H5v-.5a.5.5 0 0 1 1 0V5h.5c.28 0 .5.22.5.5Zm9 9a.5.5 0 0 1-.5.5H15v.5a.5.5 0 0 1-1 0V15h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0v.5h.5c.28 0 .5.22.5.5Zm-2.57-7.93a1.91 1.91 0 0 0-2.7 0l-.48.47 2.7 2.71.48-.48c.75-.74.75-1.96 0-2.7Zm-1.18 3.89-2.7-2.71-6.99 6.98a1.91 1.91 0 1 0 2.7 2.7l6.99-6.97Z",
    fill: primaryFill
  }));
  ;
};
exports.WandFilled = wrapIcon_1.default( /*#__PURE__*/WandFilledIcon, 'WandFilled');
const WandRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 2c.28 0 .5.22.5.5V3h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V4h-.5a.5.5 0 1 1 0-1h.5v-.5c0-.28.22-.5.5-.5Zm-10 4a.5.5 0 0 0 0-1H6v-.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V6h.5Zm9 9a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1h.5v.5a.5.5 0 1 0 1 0V15h.5Zm-2.07-8.43a1.91 1.91 0 0 0-2.7 0l-8.17 8.16a1.91 1.91 0 1 0 2.7 2.7l8.17-8.16c.75-.74.75-1.96 0-2.7Zm-2 .7a.91.91 0 0 1 1.3 1.3l-.48.47-1.3-1.29.48-.48Zm-1.18 1.19 1.3 1.29-6.99 6.98a.91.91 0 0 1-1.3-1.29l6.99-6.98Z",
    fill: primaryFill
  }));
  ;
};
exports.WandRegular = wrapIcon_1.default( /*#__PURE__*/WandRegularIcon, 'WandRegular');
const WarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.68 2.79a1.5 1.5 0 0 1 2.64 0l6.5 12A1.5 1.5 0 0 1 16.5 17h-13a1.5 1.5 0 0 1-1.32-2.21l6.5-12ZM10.5 7.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Zm.25 6.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WarningFilled = wrapIcon_1.default( /*#__PURE__*/WarningFilledIcon, 'WarningFilled');
const WarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.56 3.26a.5.5 0 0 1 .88 0l6.5 12a.5.5 0 0 1-.44.74h-13a.5.5 0 0 1-.44-.74l6.5-12Zm1.76-.47a1.5 1.5 0 0 0-2.64 0l-6.5 12A1.5 1.5 0 0 0 3.5 17h13a1.5 1.5 0 0 0 1.32-2.21l-6.5-12ZM10.5 7.5a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4Zm.25 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WarningRegular = wrapIcon_1.default( /*#__PURE__*/WarningRegularIcon, 'WarningRegular');
const WarningShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.69 1.85 1.13 13.78A1.5 1.5 0 0 0 2.44 16h7.94a7.27 7.27 0 0 1-.38-2.12v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.73-.35 2.56-1.2L10.3 1.85a1.5 1.5 0 0 0-2.62 0ZM9 5.75c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm.75 7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 10.35a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 13 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 0 0-.4-.33 4.22 4.22 0 0 1-1.6-.32Z",
    fill: primaryFill
  }));
  ;
};
exports.WarningShieldFilled = wrapIcon_1.default( /*#__PURE__*/WarningShieldFilledIcon, 'WarningShieldFilled');
const WarningShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.31 1.85a1.5 1.5 0 0 0-2.62 0L1.13 13.78A1.5 1.5 0 0 0 2.44 16h7.94a6.7 6.7 0 0 1-.26-1H2.44a.5.5 0 0 1-.44-.74L8.56 2.33a.5.5 0 0 1 .88 0l3.73 6.8c.27-.18.53-.4.79-.66L10.3 1.85Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 6c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 13.5A.75.75 0 1 0 9 12a.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 9.76a4.63 4.63 0 0 0 2 .86c.2.03.4.05.6.05.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 0 1-.26 0A6.66 6.66 0 0 1 13 18a4.96 4.96 0 0 1-1.56-2 6.05 6.05 0 0 1-.44-2.15v-2.77a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0c.24.25.48.46.72.64Z",
    fill: primaryFill
  }));
  ;
};
exports.WarningShieldRegular = wrapIcon_1.default( /*#__PURE__*/WarningShieldRegularIcon, 'WarningShieldRegular');
const WasherFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.48 10.67c-.17.08-.33.17-.48.26a3 3 0 0 1 5.85-.88c-.4.4-1.27.83-2.73.46a3.96 3.96 0 0 0-2.64.16ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4 4a4 4 0 0 1 3.92 3.21l.03.01-.02.04A4.01 4.01 0 0 1 10 15a4 4 0 0 1 0-8ZM7.5 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WasherFilled = wrapIcon_1.default( /*#__PURE__*/WasherFilledIcon, 'WasherFilled');
const WasherRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 7a4 4 0 0 1 3.92 3.21l.03.01-.02.04A4.01 4.01 0 0 1 10 15a4 4 0 0 1 0-8Zm-2.52 3.67c.67-.3 1.54-.43 2.64-.16 1.46.37 2.33-.06 2.73-.46a3 3 0 0 0-5.85.88c.15-.1.3-.18.48-.26ZM7.5 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
  ;
};
exports.WasherRegular = wrapIcon_1.default( /*#__PURE__*/WasherRegularIcon, 'WasherRegular');
const WaterFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3.5c.31 0 .6.2.7.49.43 1.13 1.2 1.51 1.55 1.51a.75.75 0 0 1 0 1.5A3 3 0 0 1 15 5.76 3.22 3.22 0 0 1 12.5 7c-.95 0-1.85-.44-2.5-1.25A3.22 3.22 0 0 1 7.5 7C6.55 7 5.66 6.56 5 5.76A3 3 0 0 1 2.75 7a.75.75 0 1 1 0-1.5c.34 0 1.12-.37 1.55-1.51a.75.75 0 0 1 1.4 0C6.11 5.08 6.87 5.5 7.5 5.5c.63 0 1.39-.42 1.8-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51.1-.3.39-.49.7-.49Zm0 5c.31 0 .6.2.7.49.43 1.13 1.2 1.51 1.55 1.51a.75.75 0 0 1 0 1.5A3 3 0 0 1 15 10.76 3.22 3.22 0 0 1 12.5 12c-.95 0-1.85-.44-2.5-1.25A3.22 3.22 0 0 1 7.5 12c-.95 0-1.84-.44-2.5-1.24A3 3 0 0 1 2.75 12a.75.75 0 0 1 0-1.5c.34 0 1.12-.37 1.55-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51.1-.3.39-.49.7-.49Zm.7 5.49a.75.75 0 0 0-1.4 0c-.41 1.09-1.17 1.51-1.8 1.51-.63 0-1.39-.42-1.8-1.51a.75.75 0 0 0-1.4 0c-.41 1.09-1.17 1.51-1.8 1.51-.63 0-1.39-.42-1.8-1.51a.75.75 0 0 0-1.4 0c-.43 1.14-1.2 1.51-1.55 1.51a.75.75 0 1 0 0 1.5A3 3 0 0 0 5 15.76c.66.8 1.55 1.24 2.5 1.24s1.85-.44 2.5-1.25c.65.8 1.55 1.25 2.5 1.25s1.84-.44 2.5-1.24A3 3 0 0 0 17.25 17a.75.75 0 0 0 0-1.5c-.34 0-1.12-.38-1.55-1.51Z",
    fill: primaryFill
  }));
  ;
};
exports.WaterFilled = wrapIcon_1.default( /*#__PURE__*/WaterFilledIcon, 'WaterFilled');
const WaterRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 4c.2 0 .4.13.47.32C15.9 5.5 16.74 6 17.5 6a.5.5 0 0 1 0 1c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 12.5 7c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 7.5 7C6.54 7 5.62 6.5 5 5.59A3.03 3.03 0 0 1 2.5 7a.5.5 0 1 1 0-1c.76 0 1.6-.5 2.03-1.67a.5.5 0 0 1 .94 0C5.9 5.5 6.74 6 7.5 6c.76 0 1.6-.5 2.03-1.68a.5.5 0 0 1 .94 0C10.9 5.5 11.74 6 12.5 6c.76 0 1.6-.5 2.03-1.68A.5.5 0 0 1 15 4Zm0 5c.2 0 .4.13.47.32C15.9 10.5 16.74 11 17.5 11a.5.5 0 0 1 0 1c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 12.5 12c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 7.5 12c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 2.5 12a.5.5 0 0 1 0-1c.76 0 1.6-.5 2.03-1.67a.5.5 0 0 1 .94 0C5.9 10.5 6.74 11 7.5 11c.76 0 1.6-.5 2.03-1.68a.5.5 0 0 1 .94 0C10.9 10.5 11.74 11 12.5 11c.76 0 1.6-.5 2.03-1.68A.5.5 0 0 1 15 9Zm.47 5.32a.5.5 0 0 0-.94 0C14.1 15.5 13.26 16 12.5 16c-.76 0-1.6-.5-2.03-1.68a.5.5 0 0 0-.94 0C9.1 15.5 8.26 16 7.5 16c-.76 0-1.6-.5-2.03-1.68a.5.5 0 0 0-.94 0C4.1 15.5 3.26 16 2.5 16a.5.5 0 1 0 0 1c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 7.5 17c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 12.5 17c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 17.5 17a.5.5 0 0 0 0-1c-.76 0-1.6-.5-2.03-1.68Z",
    fill: primaryFill
  }));
  ;
};
exports.WaterRegular = wrapIcon_1.default( /*#__PURE__*/WaterRegularIcon, 'WaterRegular');
const WeatherBlowingSnowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3a3.5 3.5 0 0 0-3.43 2.81l-.06.3a.75.75 0 0 0 1.48.29l.05-.3A2 2 0 1 1 9.5 8.5H2.75a.75.75 0 1 0 0 1.5H9.5a3.5 3.5 0 0 0 0-7Zm6.05 5c-.93 0-1.78.52-2.19 1.35l-.03.06a.75.75 0 1 0 1.34.68l.03-.07a.95.95 0 0 1 1.8.43v.05a1 1 0 0 1-1 1H2.75a.75.75 0 0 0 0 1.5H12.38a.88.88 0 1 1 0 1.75.88.88 0 0 1-.74-.39l-.02-.02a.75.75 0 0 0-1.24.83l.01.02A2.38 2.38 0 0 0 14.6 13h.91a2.5 2.5 0 0 0 2.5-2.5v-.05C18 9.1 16.9 8 15.55 8ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherBlowingSnowFilled = wrapIcon_1.default( /*#__PURE__*/WeatherBlowingSnowFilledIcon, 'WeatherBlowingSnowFilled');
const WeatherBlowingSnowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.75 3.5a3.25 3.25 0 0 0-3.18 2.61l-.06.3a.5.5 0 1 0 .98.19l.06-.3A2.25 2.25 0 1 1 9.75 9H2.5a.5.5 0 1 0 0 1h7.25a3.25 3.25 0 0 0 0-6.5ZM15.5 8a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5h-13a.5.5 0 1 0 0 1h9.75a1.25 1.25 0 1 1 0 2.5c-.62 0-1.15-.45-1.25-1.05v-.03a.5.5 0 1 0-1 .16l.01.03a2.26 2.26 0 0 0 4.49-.36c0-.46-.14-.9-.38-1.25h1.38a2.5 2.5 0 0 0 0-5Zm-7.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherBlowingSnowRegular = wrapIcon_1.default( /*#__PURE__*/WeatherBlowingSnowRegularIcon, 'WeatherBlowingSnowRegular');
const WeatherCloudyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7ZM8.4 4c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0 0 11 6C8.6 6 6.87 7.3 6.25 9.29l-.07.21-.04.19-.17.03a3.73 3.73 0 0 0-2.71 2.26 2.62 2.62 0 0 1 1.2-4.86h.22A3.77 3.77 0 0 1 8.39 4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherCloudyFilled = wrapIcon_1.default( /*#__PURE__*/WeatherCloudyFilledIcon, 'WeatherCloudyFilled');
const WeatherCloudyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 8ZM8.4 4c1.45 0 2.72.83 3.34 2.04a6.05 6.05 0 0 0-1.28-.02 2.65 2.65 0 0 0-4.7 1.2l-.04.22a1 1 0 0 1-.99.82h-.26c-.81 0-1.47.67-1.47 1.5 0 .57.31 1.06.78 1.31-.22.28-.4.58-.52.9a2.62 2.62 0 0 1 1.2-4.85h.22A3.77 3.77 0 0 1 8.39 4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherCloudyRegular = wrapIcon_1.default( /*#__PURE__*/WeatherCloudyRegularIcon, 'WeatherCloudyRegular');
const WeatherDrizzleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12h-.73l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H10.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H7.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26h-.39A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3ZM7.75 14.32a.5.5 0 0 1 .18.68l-1 1.75a.5.5 0 0 1-.86-.5l1-1.75a.5.5 0 0 1 .68-.18Zm3.18.68a.5.5 0 0 0-.86-.5l-1 1.75a.5.5 0 0 0 .86.5l1-1.75Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherDrizzleFilled = wrapIcon_1.default( /*#__PURE__*/WeatherDrizzleFilledIcon, 'WeatherDrizzleFilled');
const WeatherDrizzleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12h-.73l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H10.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H7.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26h-.39A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3Zm-2.89 8h7.07c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 4a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 11 5.82 11H7.1Zm.64 3.32a.5.5 0 0 1 .18.68l-1 1.75a.5.5 0 0 1-.86-.5l1-1.75a.5.5 0 0 1 .68-.18Zm3.18.68a.5.5 0 0 0-.86-.5l-1 1.75a.5.5 0 0 0 .86.5l1-1.75Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherDrizzleRegular = wrapIcon_1.default( /*#__PURE__*/WeatherDrizzleRegularIcon, 'WeatherDrizzleRegular');
const WeatherDuststormFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.25 3.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.25 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-.5a3.5 3.5 0 0 0-3.43 2.81l-.06.3a.75.75 0 0 0 1.48.29l.05-.3A2 2 0 1 1 9.5 8.5H2.75a.75.75 0 1 0 0 1.5H9.5a3.5 3.5 0 0 0 0-7Zm6.05 5c-.93 0-1.78.52-2.19 1.35l-.03.06a.75.75 0 1 0 1.34.68l.03-.07a.95.95 0 0 1 1.8.43v.05a1 1 0 0 1-1 1H2.75a.75.75 0 0 0 0 1.5H12.38a.88.88 0 1 1 0 1.75.88.88 0 0 1-.74-.39l-.02-.02a.75.75 0 0 0-1.24.83l.01.02A2.38 2.38 0 0 0 14.6 13h.91a2.5 2.5 0 0 0 2.5-2.5v-.05C18 9.1 16.9 8 15.55 8ZM7.5 17.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 1.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9.75-14a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.25 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherDuststormFilled = wrapIcon_1.default( /*#__PURE__*/WeatherDuststormFilledIcon, 'WeatherDuststormFilled');
const WeatherDuststormRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.75-1a3.25 3.25 0 0 0-3.18 2.61l-.06.3a.5.5 0 1 0 .98.19l.06-.3A2.25 2.25 0 1 1 9.75 9H2.5a.5.5 0 1 0 0 1h7.25a3.25 3.25 0 0 0 0-6.5ZM15.5 8a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5h-13a.5.5 0 1 0 0 1h9.75a1.25 1.25 0 1 1 0 2.5c-.62 0-1.15-.45-1.25-1.05v-.03a.5.5 0 1 0-1 .16l.01.03a2.26 2.26 0 0 0 4.49-.36c0-.46-.14-.9-.38-1.25h1.38a2.5 2.5 0 0 0 0-5Zm-9 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherDuststormRegular = wrapIcon_1.default( /*#__PURE__*/WeatherDuststormRegularIcon, 'WeatherDuststormRegular');
const WeatherFogFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 15h7a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h.09Zm-2-2h11c.27 0 .5.22.5.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .41-.5h.1ZM10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12H5.87A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherFogFilled = wrapIcon_1.default( /*#__PURE__*/WeatherFogFilledIcon, 'WeatherFogFilled');
const WeatherFogRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 15.02h7a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-.99h.09Zm-2-2h11c.27 0 .5.23.5.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .41-.49h.1Zm5.5-10c2.46 0 3.86 1.58 4.07 3.48h.06A2.82 2.82 0 0 1 17 9.26a2.82 2.82 0 0 1-2.87 2.76H5.87A2.82 2.82 0 0 1 3 9.26C3 7.8 4.2 6.6 5.7 6.5h.23c.2-1.91 1.6-3.48 4.07-3.48Zm0 1a3.04 3.04 0 0 0-3.09 3.03c0 .28-.25.5-.54.5h-.55c-1 0-1.82.77-1.82 1.73 0 .97.81 1.74 1.82 1.74h8.36c1 0 1.82-.77 1.82-1.74 0-.96-.81-1.73-1.82-1.73h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 4.02Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherFogRegular = wrapIcon_1.default( /*#__PURE__*/WeatherFogRegularIcon, 'WeatherFogRegular');
const WeatherHailDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 16.67A.67.67 0 1 1 11 18a.67.67 0 0 1 0-1.33ZM8.67 16a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33Zm4.66 0a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 0 0-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76A.5.5 0 0 1 10 2.3Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHailDayFilled = wrapIcon_1.default( /*#__PURE__*/WeatherHailDayFilledIcon, 'WeatherHailDayFilled');
const WeatherHailDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 16.67A.67.67 0 1 1 11 18a.67.67 0 0 1 0-1.33ZM8.67 16a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33Zm4.66 0a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 0 0-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76A.5.5 0 0 1 10 2.3Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHailDayRegular = wrapIcon_1.default( /*#__PURE__*/WeatherHailDayRegularIcon, 'WeatherHailDayRegular');
const WeatherHailNightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 16.67A.67.67 0 1 1 11 18a.67.67 0 0 1 0-1.33ZM8.67 16a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33Zm4.66 0a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14 4.56 4.56 0 0 0-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHailNightFilled = wrapIcon_1.default( /*#__PURE__*/WeatherHailNightFilledIcon, 'WeatherHailNightFilled');
const WeatherHailNightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 16.67A.67.67 0 1 1 11 18a.67.67 0 0 1 0-1.33ZM8.67 16a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33Zm4.66 0a.67.67 0 1 1 0 1.33.67.67 0 0 1 0-1.33ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 0 0 7 3.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 0 1-.62 3.44 5 5 0 0 1-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHailNightRegular = wrapIcon_1.default( /*#__PURE__*/WeatherHailNightRegularIcon, 'WeatherHailNightRegular');
const WeatherHazeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.52 10.02A4.48 4.48 0 0 0 5.6 9.3c.46-.04.92-.03 1.38.03 1.35.17 2.6.73 3.77 1.4.7.42 1.6.54 2.55.4.4-.05.78-.14 1.12-.27.06-.27.09-.56.09-.85ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1Zm-6.78 9.5a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm3 1.4a4.81 4.81 0 0 0-3 .6.5.5 0 0 1-.48-.87 5.8 5.8 0 0 1 3.6-.73c1.16.15 2.28.63 3.4 1.28.95.56 2.09.68 3.18.53 1.1-.15 2.11-.58 2.77-1.05a.5.5 0 0 1 .58.82 7.47 7.47 0 0 1-3.2 1.22 5.96 5.96 0 0 1-3.84-.66 8.08 8.08 0 0 0-3.01-1.14Zm-3 2.6a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHazeFilled = wrapIcon_1.default( /*#__PURE__*/WeatherHazeFilledIcon, 'WeatherHazeFilled');
const WeatherHazeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.52 10.02A4.48 4.48 0 0 0 5.6 9.3c.34-.03.68-.03 1.02 0a3.48 3.48 0 1 1 6.7 1.83c.39-.05.76-.15 1.1-.27.06-.27.09-.56.09-.85ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1Zm-6.78 9.5a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm0 2a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm3 1.4a4.81 4.81 0 0 0-3 .6.5.5 0 0 1-.48-.87 5.8 5.8 0 0 1 3.6-.73c1.16.15 2.28.63 3.4 1.28.95.56 2.09.68 3.18.53 1.1-.15 2.11-.58 2.77-1.05a.5.5 0 0 1 .58.82 7.47 7.47 0 0 1-3.2 1.22 5.96 5.96 0 0 1-3.84-.66 8.08 8.08 0 0 0-3.01-1.14Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherHazeRegular = wrapIcon_1.default( /*#__PURE__*/WeatherHazeRegularIcon, 'WeatherHazeRegular');
const WeatherMoonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.36 14a7.98 7.98 0 0 1-13.48.54.6.6 0 0 1 .29-.9c3-1.08 4.61-2.33 5.55-4.11.98-1.88 1.24-3.94.55-6.76a.6.6 0 0 1 .61-.73A7.98 7.98 0 0 1 16.36 14Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherMoonFilled = wrapIcon_1.default( /*#__PURE__*/WeatherMoonFilledIcon, 'WeatherMoonFilled');
const WeatherMoonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 13.5A6.98 6.98 0 0 1 4 14.39c2.83-1.09 4.56-2.42 5.6-4.4 1.04-2 1.33-4.16.75-6.9A6.98 6.98 0 0 1 15.5 13.5ZM5.45 16.92A7.98 7.98 0 1 0 9.88 2.04a.6.6 0 0 0-.61.73c.69 2.82.43 4.88-.55 6.76-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 0 0-.3.9 7.95 7.95 0 0 0 2.59 2.39Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherMoonRegular = wrapIcon_1.default( /*#__PURE__*/WeatherMoonRegularIcon, 'WeatherMoonRegular');
const WeatherMoonOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l6.6 6.61-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 0 0-.3.9 7.98 7.98 0 0 0 12.14 1.19l2.14 2.13a.5.5 0 0 0 .7-.7l-2.16-2.17-6.5-6.5-6.34-6.33ZM16.35 14l-.08.15-6.78-6.78c.27-1.32.21-2.8-.22-4.6a.6.6 0 0 1 .61-.73A7.98 7.98 0 0 1 16.36 14Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherMoonOffFilled = wrapIcon_1.default( /*#__PURE__*/WeatherMoonOffFilledIcon, 'WeatherMoonOffFilled');
const WeatherMoonOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l6.6 6.61a9.1 9.1 0 0 1-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 0 0-.3.9 7.98 7.98 0 0 0 12.14 1.19l2.14 2.13a.5.5 0 0 0 .7-.7l-2.16-2.17-.71-.71-5.03-5.02-.77-.77-6.33-6.33Zm11.46 12.87a6.98 6.98 0 0 1-10.3-.63c2.73-1.05 4.44-2.33 5.48-4.2l4.82 4.83ZM12.94 3.96a6.98 6.98 0 0 1 2.6 9.46l.73.73.09-.15A7.98 7.98 0 0 0 9.88 2.04a.6.6 0 0 0-.61.73c.43 1.8.5 3.28.22 4.6l.83.83c.43-1.51.45-3.17.04-5.12.9.12 1.77.42 2.58.88Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherMoonOffRegular = wrapIcon_1.default( /*#__PURE__*/WeatherMoonOffRegularIcon, 'WeatherMoonOffRegular');
const WeatherPartlyCloudyDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7ZM3.8 9.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 0 0-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 5.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 3.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherPartlyCloudyDayFilled = wrapIcon_1.default( /*#__PURE__*/WeatherPartlyCloudyDayFilledIcon, 'WeatherPartlyCloudyDayFilled');
const WeatherPartlyCloudyDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 8ZM3.8 9.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 0 0-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 5.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 3.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherPartlyCloudyDayRegular = wrapIcon_1.default( /*#__PURE__*/WeatherPartlyCloudyDayRegularIcon, 'WeatherPartlyCloudyDayRegular');
const WeatherPartlyCloudyNightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 8.55 8.53 7 11 7ZM5.84 3a4.24 4.24 0 0 1 3.88 3.14 4.56 4.56 0 0 0-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 0 1 2.1 9.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherPartlyCloudyNightFilled = wrapIcon_1.default( /*#__PURE__*/WeatherPartlyCloudyNightFilledIcon, 'WeatherPartlyCloudyNightFilled');
const WeatherPartlyCloudyNightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 8.55 8.53 7 11 7Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 8ZM5.84 3a4.24 4.24 0 0 1 3.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 0 0 7 4.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 0 1-.62 3.44 5 5 0 0 1-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 0 1 2.1 9.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherPartlyCloudyNightRegular = wrapIcon_1.default( /*#__PURE__*/WeatherPartlyCloudyNightRegularIcon, 'WeatherPartlyCloudyNightRegular');
const WeatherRainFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.02 4.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 0 1 2.88 2.76 2.82 2.82 0 0 1-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.04-.08 1.23-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 0 1-.9-.39l.03-.08 1.23-2.25H7.43l-1.48 2.73a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 0 1-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainFilled = wrapIcon_1.default( /*#__PURE__*/WeatherRainFilledIcon, 'WeatherRainFilled');
const WeatherRainRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-.7l-.02.03-1.48 2.7a.5.5 0 0 1-.91-.39l.03-.08L12.3 13h-1.85l-.02.03-1.48 2.7a.5.5 0 0 1-.91-.39l.03-.08L9.3 13H7.43l-1.49 2.74a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.23-.6l.03-.08L6.3 13h-.42A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainRegular = wrapIcon_1.default( /*#__PURE__*/WeatherRainRegularIcon, 'WeatherRainRegular');
const WeatherRainShowersDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-.7l-.01.04-1.49 2.7a.5.5 0 0 1-.91-.4l.03-.07L13.3 15h-1.85l-.02.04-1.49 2.7a.5.5 0 0 1-.91-.4l.03-.07L10.31 15H8.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L7.3 15h-.43A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 0 0-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainShowersDayFilled = wrapIcon_1.default( /*#__PURE__*/WeatherRainShowersDayFilledIcon, 'WeatherRainShowersDayFilled');
const WeatherRainShowersDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-.7l-.01.04-1.49 2.7a.5.5 0 0 1-.91-.4l.03-.07L13.3 15h-1.85l-.02.04-1.49 2.7a.5.5 0 0 1-.91-.4l.04-.07L10.3 15H8.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L7.3 15h-.43A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 0 0-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainShowersDayRegular = wrapIcon_1.default( /*#__PURE__*/WeatherRainShowersDayRegularIcon, 'WeatherRainShowersDayRegular');
const WeatherRainShowersNightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.02 6.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 0 1 2.88 2.76 2.82 2.82 0 0 1-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08 1.24-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08 1.24-2.25H8.43l-1.48 2.73a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 0 1-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48Zm-5.16-4a4.24 4.24 0 0 1 3.87 3.14A4.56 4.56 0 0 0 6.26 8.3l-.06.22-.05.18-.16.03c-.9.19-1.67.68-2.2 1.37l-.29-.15a4.24 4.24 0 0 1-1.37-1.27.63.63 0 0 1 .3-.95c1.38-.5 2.12-1.05 2.54-1.85.47-.89.55-1.83.24-3.08-.1-.41.23-.8.65-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainShowersNightFilled = wrapIcon_1.default( /*#__PURE__*/WeatherRainShowersNightFilledIcon, 'WeatherRainShowersNightFilled');
const WeatherRainShowersNightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6c2.47 0 3.87 1.58 4.07 3.48h.06A2.82 2.82 0 0 1 18 12.25 2.82 2.82 0 0 1 15.13 15h-.7l-.01.03-1.5 2.7a.5.5 0 0 1-.9-.39l.03-.08L13.3 15h-1.85l-.01.03-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08L10.31 15H8.44l-1.5 2.74a.5.5 0 0 1-.6.23l-.07-.03a.5.5 0 0 1-.24-.6l.04-.08L7.3 15h-.42A2.82 2.82 0 0 1 4 12.25c0-1.47 1.2-2.68 2.7-2.76h.24C7.14 7.56 8.54 6 11 6Zm0 1a3.04 3.04 0 0 0-3.08 3.03c0 .28-.26.5-.55.5h-.55c-1 0-1.82.78-1.82 1.74S5.82 14 6.82 14h8.37c1 0 1.81-.78 1.81-1.74s-.8-1.74-1.81-1.74h-.55c-.3 0-.55-.22-.55-.5A3.02 3.02 0 0 0 11 7.01ZM5.85 2.02a4.24 4.24 0 0 1 3.87 3.14c-.38.08-.74.2-1.07.36A3.05 3.05 0 0 0 7 3.38c-.18-.1-.34-.17-.53-.24a5.87 5.87 0 0 1-.63 3.44 5 5 0 0 1-2.55 1.9 4.58 4.58 0 0 0 1.37.8c-.34.22-.64.5-.88.8l-.29-.14a4.24 4.24 0 0 1-1.37-1.27.63.63 0 0 1 .3-.95c1.38-.5 2.12-1.04 2.54-1.85.47-.89.55-1.82.24-3.08-.1-.41.23-.8.65-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainShowersNightRegular = wrapIcon_1.default( /*#__PURE__*/WeatherRainShowersNightRegularIcon, 'WeatherRainShowersNightRegular');
const WeatherRainSnowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-1.5a.5.5 0 1 1-.95 0H7.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 0 1 3 10.24a2.82 2.82 0 0 1 2.87-2.77h.06C6.13 5.57 7.53 4 10 4Zm1.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 0 1-.68.2.49.49 0 0 1-.23-.59l.03-.08.56-1.01a.5.5 0 0 1 .68-.2Zm4.2-.06a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainSnowFilled = wrapIcon_1.default( /*#__PURE__*/WeatherRainSnowFilledIcon, 'WeatherRainSnowFilled');
const WeatherRainSnowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-1.5a.5.5 0 1 1-.95 0H7.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 0 1 3 10.24a2.82 2.82 0 0 1 2.87-2.77h.06C6.13 5.57 7.53 4 10 4Zm1.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 0 1-.68.2.49.49 0 0 1-.23-.59l.03-.08.56-1.01a.5.5 0 0 1 .68-.2Zm4.2-.06a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 5a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherRainSnowRegular = wrapIcon_1.default( /*#__PURE__*/WeatherRainSnowRegularIcon, 'WeatherRainSnowRegular');
const WeatherSnowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13H5.87A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSnowFilledIcon, 'WeatherSnowFilled');
const WeatherSnowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13H5.87A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSnowRegularIcon, 'WeatherSnowRegular');
const WeatherSnowShowerDayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 0 0-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowShowerDayFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSnowShowerDayFilledIcon, 'WeatherSnowShowerDayFilled');
const WeatherSnowShowerDayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM3.8 8.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 0 0-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 4.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowShowerDayRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSnowShowerDayRegularIcon, 'WeatherSnowShowerDayRegular');
const WeatherSnowShowerNightFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14 4.56 4.56 0 0 0-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowShowerNightFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSnowShowerNightFilledIcon, 'WeatherSnowShowerNightFilled');
const WeatherSnowShowerNightRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 0 0 7 3.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 0 1-.62 3.44 5 5 0 0 1-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowShowerNightRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSnowShowerNightRegularIcon, 'WeatherSnowShowerNightRegular');
const WeatherSnowflakeFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.41 0 .75.34.75.75v2.19l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2.53 2.53v2.19h2.19l2.53-2.53a.75.75 0 1 1 1.06 1.06l-1.47 1.47h2.19a.75.75 0 0 1 0 1.5h-2.19l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2.53-2.53h-2.19v2.19l2.53 2.53a.75.75 0 1 1-1.06 1.06l-1.47-1.47v2.19a.75.75 0 0 1-1.5 0v-2.19l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.53-2.53v-2.19H7.06l-2.53 2.53a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75a.75.75 0 0 1 0-1.5h2.19L3.47 7.78a.75.75 0 0 1 1.06-1.06l2.53 2.53h2.19V7.06L6.72 4.53a.75.75 0 0 1 1.06-1.06l1.47 1.47V2.75c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowflakeFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSnowflakeFilledIcon, 'WeatherSnowflakeFilled');
const WeatherSnowflakeRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5v3.04l1.9-1.9a.5.5 0 0 1 .7.71l-2.6 2.6V9.5h2.54l2.6-2.6a.5.5 0 0 1 .71.7l-1.9 1.9h3.05a.5.5 0 0 1 0 1h-3.04l1.9 1.9a.5.5 0 0 1-.71.7l-2.6-2.6H10.5v2.54l2.6 2.6a.5.5 0 0 1-.7.71l-1.9-1.9v3.05a.5.5 0 0 1-1 0v-3.04l-1.9 1.9a.5.5 0 0 1-.7-.71l2.6-2.6V10.5H6.96l-2.6 2.6a.5.5 0 0 1-.71-.7l1.9-1.9H2.5a.5.5 0 0 1 0-1h3.04l-1.9-1.9a.5.5 0 1 1 .71-.7l2.6 2.6H9.5V6.96l-2.6-2.6a.5.5 0 1 1 .7-.71l1.9 1.9V2.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSnowflakeRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSnowflakeRegularIcon, 'WeatherSnowflakeRegular');
const WeatherSquallsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.07 5.81A3.5 3.5 0 1 1 9.5 10H2.75a.75.75 0 1 1 0-1.5H9.5a2 2 0 1 0-1.96-2.4l-.05.3A.75.75 0 0 1 6 6.1l.06-.29Zm7.29 3.54a2.45 2.45 0 0 1 4.64 1.1v.05a2.5 2.5 0 0 1-2.5 2.5h-.92a2.37 2.37 0 0 1-2.2 3.25c-.8 0-1.55-.4-1.99-1.06l-.01-.02a.75.75 0 1 1 1.24-.83l.02.02a.88.88 0 0 0 1.61-.48c0-.49-.4-.88-.88-.88H2.75a.75.75 0 0 1 0-1.5H15.5a1 1 0 0 0 1-1v-.05a.95.95 0 0 0-1.8-.43l-.03.07a.75.75 0 1 1-1.34-.68l.03-.06Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSquallsFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSquallsFilledIcon, 'WeatherSquallsFilled');
const WeatherSquallsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.57 6.11A3.25 3.25 0 1 1 9.75 10H2.5a.5.5 0 1 1 0-1h7.25a2.25 2.25 0 1 0-2.2-2.7l-.06.3a.5.5 0 1 1-.98-.2l.06-.29ZM13 10.5a2.5 2.5 0 1 1 2.5 2.5h-1.38a2.25 2.25 0 1 1-4.1 1.61l-.01-.03a.5.5 0 1 1 .98-.16v.03c.1.6.64 1.05 1.25 1.05a1.25 1.25 0 1 0 0-2.5H2.51a.5.5 0 0 1 0-1h13a1.5 1.5 0 1 0-1.5-1.5.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSquallsRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSquallsRegularIcon, 'WeatherSquallsRegular');
const WeatherSunnyFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3.5.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 16c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-6.5-5.5a.5.5 0 0 0 0-1H2.46a.5.5 0 0 0 0 1H3.5Zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 1 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm.7 11.7a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm11-11.7a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm-.7 11.7a.5.5 0 0 0 .7-.7l-1-1a.5.5 0 0 0-.7.7l1 1Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyFilledIcon, 'WeatherSunnyFilled');
const WeatherSunnyRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 2c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 16c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-6.5-5.5a.5.5 0 0 0 0-1H2.46a.5.5 0 0 0 0 1H3.5Zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 1 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm.7 11.7a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm11-11.7a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm-.7 11.7a.5.5 0 0 0 .7-.7l-1-1a.5.5 0 0 0-.7.7l1 1Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyRegularIcon, 'WeatherSunnyRegular');
const WeatherSunnyHighFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0ZM7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm2.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM4.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm11 1h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1ZM6.15 5.85a.5.5 0 1 0 .7-.7l-1-1a.5.5 0 1 0-.7.7l1 1Zm.7 5.3a.5.5 0 0 0-.7 0l-1 1a.5.5 0 1 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm7-5.3a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm-.7 5.3c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm-7.02 5.3C7.18 16.2 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 0 1 3.02 1.33l.03.03a.5.5 0 0 0 .63-.78l-.02-.02-.04-.03a4.8 4.8 0 0 0-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0 0 10 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 0 0-3.45 1.44 4.84 4.84 0 0 0-.23.16l-.01.01h-.01v.01a.5.5 0 0 0 .62.78 1.6 1.6 0 0 1 .19-.13 11.45 11.45 0 0 1 3.14-1.3Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyHighFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyHighFilledIcon, 'WeatherSunnyHighFilled');
const WeatherSunnyHighRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 2.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM10 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-1.87 8.46C7.18 16.19 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 0 1 3.02 1.33l.03.03a.5.5 0 0 0 .63-.78l-.02-.02-.04-.03a4.8 4.8 0 0 0-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0 0 10 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 0 0-3.45 1.44 4.84 4.84 0 0 0-.23.16l-.01.01h-.01v.01a.5.5 0 0 0 .62.78 1.6 1.6 0 0 1 .19-.13 11.45 11.45 0 0 1 3.14-1.3ZM9.5 13.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0ZM4 8.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm10.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1ZM6.85 5.85a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l1 1c.2.2.2.5 0 .7Zm-.7 5.3a.5.5 0 1 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Zm7-5.3c.2.2.5.2.7 0l1-1a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7Zm.7 5.3a.5.5 0 0 0-.7.7l1 1a.5.5 0 0 0 .7-.7l-1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyHighRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyHighRegularIcon, 'WeatherSunnyHighRegular');
const WeatherSunnyLowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.66 11a4.5 4.5 0 0 1 4.38-5.47A4.48 4.48 0 0 1 14.4 11h3.09a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h3.16Zm4.47 7a.5.5 0 0 1-.21 0h.21ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyLowFilled = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyLowFilledIcon, 'WeatherSunnyLowFilled');
const WeatherSunnyLowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.55 10.02c0 .33.04.66.11.98H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.1a4.5 4.5 0 0 0-4.36-5.47c-2.48 0-4.49 2.01-4.49 4.49Zm7.83.98H6.7a3.48 3.48 0 1 1 6.68 0Zm-3.35 7.01a.5.5 0 0 0 .1-.01h-.21a.5.5 0 0 0 .1.01ZM5 4.32l.07.06.85.86A.5.5 0 0 1 5.3 6l-.07-.05-.86-.86A.5.5 0 0 1 5 4.32Zm10.67.06c.17.18.2.44.06.64l-.06.07-.86.86a.5.5 0 0 1-.76-.64l.06-.07.85-.86c.2-.2.52-.2.71 0Zm-5.65-2.36a.5.5 0 0 1 .49.41v1.3a.5.5 0 0 1-.98.1l-.01-.1v-1.2c0-.28.22-.5.5-.5ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherSunnyLowRegular = wrapIcon_1.default( /*#__PURE__*/WeatherSunnyLowRegularIcon, 'WeatherSunnyLowRegular');
const WeatherThunderstormFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.61 12.13c.2.18.22.5.04.7L10.62 14h1.88a.5.5 0 0 1 .4.81l-2.46 3a.5.5 0 0 1-.78-.62l1.8-2.19H9.5a.5.5 0 0 1-.37-.83l1.78-2a.5.5 0 0 1 .7-.04ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-1.21a1.5 1.5 0 0 0-1.15-1.97l-.13-.02a1.5 1.5 0 0 0-2.56-1.4l-1.7 1.89c-.4.45-.47 1.02-.3 1.5h-1.2A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM8.4 3c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0 0 11 5C8.6 5 6.87 6.3 6.25 8.29l-.07.21-.04.19-.17.03a3.73 3.73 0 0 0-2.71 2.26 2.62 2.62 0 0 1 1.2-4.86h.22A3.77 3.77 0 0 1 8.39 3Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherThunderstormFilled = wrapIcon_1.default( /*#__PURE__*/WeatherThunderstormFilledIcon, 'WeatherThunderstormFilled');
const WeatherThunderstormRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m9.13 14.17 1.77-2a.5.5 0 0 1 .8.6l-.06.07L10.62 14h1.88c.4 0 .62.42.44.75l-.05.06-2.44 3a.5.5 0 0 1-.84-.54l.05-.08 1.8-2.19H9.5a.5.5 0 0 1-.42-.76l.05-.07 1.77-2-1.77 2ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-1.26a1.07 1.07 0 0 0 .01-1h1.3c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h1.3a1.07 1.07 0 0 0 0 1H6.88A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM8.4 3c1.45 0 2.72.83 3.34 2.04a6.05 6.05 0 0 0-1.28-.02 2.65 2.65 0 0 0-4.7 1.2l-.04.22a1 1 0 0 1-.99.82h-.26c-.81 0-1.47.67-1.47 1.5 0 .57.31 1.06.78 1.31-.22.28-.4.58-.52.9a2.62 2.62 0 0 1 1.2-4.85h.22A3.77 3.77 0 0 1 8.39 3Z",
    fill: primaryFill
  }));
  ;
};
exports.WeatherThunderstormRegular = wrapIcon_1.default( /*#__PURE__*/WeatherThunderstormRegularIcon, 'WeatherThunderstormRegular');
const WebAssetFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3.5 0a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
  ;
};
exports.WebAssetFilled = wrapIcon_1.default( /*#__PURE__*/WebAssetFilledIcon, 'WebAssetFilled');
const WebAssetRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
  ;
};
exports.WebAssetRegular = wrapIcon_1.default( /*#__PURE__*/WebAssetRegularIcon, 'WebAssetRegular');
const WhiteboardFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.33 3.46.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 0 1-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 0 1 2.6-.1ZM12.9 4H4.5A2.5 2.5 0 0 0 2 6.5v2.26c.52-.48 1.12-.98 1.72-1.4A6.55 6.55 0 0 1 5.7 6.32c.32-.09.66-.12.99-.05.34.08.63.28.84.59.47.67.13 1.4-.2 1.92-.16.27-.37.56-.57.83l-.02.04c-.21.29-.42.58-.61.88-.16.28-.2.62-.13.86.03.12.1.2.17.27.07.06.19.12.37.13.33.03.76-.08 1.3-.27a.5.5 0 1 1 .33.94 4.2 4.2 0 0 1-1.71.33 1.52 1.52 0 0 1-1.41-1.12 2.19 2.19 0 0 1 .21-1.65h.01v-.01c.22-.34.45-.66.66-.95l.01-.02c.21-.29.4-.54.55-.78.32-.53.3-.73.22-.84a.4.4 0 0 0-.25-.17 1.08 1.08 0 0 0-.5.03c-.47.12-1.04.44-1.66.88-.85.6-1.7 1.38-2.3 1.98v3.35A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5V7.13l-3.45 3.47a2.9 2.9 0 0 1-1.22.73l-1.96.6A1.84 1.84 0 0 1 9.1 9.58l.62-1.94c.14-.44.38-.84.7-1.17L12.9 4Z",
    fill: primaryFill
  }));
  ;
};
exports.WhiteboardFilled = wrapIcon_1.default( /*#__PURE__*/WhiteboardFilledIcon, 'WhiteboardFilled');
const WhiteboardRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m17.33 3.46.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 0 1-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 0 1 2.6-.1Zm-1.88.8L11.84 7.9a.9.9 0 0 0-.23.37l-.53 1.66 1.67-.5a.9.9 0 0 0 .38-.23l3.6-3.62a.93.93 0 0 0 .06-1.24l-.06-.06-.06-.06a.9.9 0 0 0-1.22.06ZM12.89 4H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.13l-1 1V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.23c.57-.49 1.34-1.11 2.07-1.54.41-.23.78-.38 1.07-.43.28-.05.42 0 .5.1.08.07.1.13.11.18.01.06 0 .15-.04.27-.1.28-.3.6-.6 1.02l-.1.13c-.25.35-.53.74-.73 1.14-.22.45-.4 1-.2 1.56.17.5.5.84.92 1 .4.17.85.15 1.24.08a6.5 6.5 0 0 0 2.02-.81.5.5 0 0 0-.52-.86c-.4.24-1.07.58-1.68.69-.3.05-.53.04-.7-.02-.13-.06-.26-.16-.34-.4-.06-.19-.03-.43.15-.8.16-.31.4-.64.66-1l.1-.13c.27-.39.58-.83.73-1.27.08-.23.12-.5.08-.76a1.32 1.32 0 0 0-.39-.73c-.4-.4-.91-.46-1.38-.38-.46.08-.95.3-1.4.56-.54.31-1.1.72-1.57 1.1V7c0-1.1.9-2 2-2h6.9l1-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WhiteboardRegular = wrapIcon_1.default( /*#__PURE__*/WhiteboardRegularIcon, 'WhiteboardRegular');
const Wifi1FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85 7.97 7.97 0 0 0-13.14 0 .75.75 0 1 1-1.23-.86 9.47 9.47 0 0 1 14.5-1.34Zm-2.14 1.9c.47.46.88 1.04 1.2 1.64a.75.75 0 1 1-1.34.69 4.94 4.94 0 0 0-8.82-.02.75.75 0 0 1-1.34-.67 6.44 6.44 0 0 1 10.3-1.64Zm-1.64 2.38c.37.36.67.8.87 1.28a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.04a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi1Filled = wrapIcon_1.default( /*#__PURE__*/Wifi1FilledIcon, 'Wifi1Filled');
const Wifi1RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 0 1-.83.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 0 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 0 1-.89.46 5.45 5.45 0 0 0-9.73-.01.5.5 0 1 1-.89-.46A6.45 6.45 0 0 1 14.6 9.35Zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 0 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 1 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.93a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi1Regular = wrapIcon_1.default( /*#__PURE__*/Wifi1RegularIcon, 'Wifi1Regular');
const Wifi2FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.59 9.45c.47.47.88 1.05 1.2 1.65a.75.75 0 0 1-1.34.69 4.94 4.94 0 0 0-8.82-.02.75.75 0 1 1-1.34-.67 6.44 6.44 0 0 1 10.3-1.64Zm-1.64 2.4c.37.35.67.8.87 1.27a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.03a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi2Filled = wrapIcon_1.default( /*#__PURE__*/Wifi2FilledIcon, 'Wifi2Filled');
const Wifi2RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.6 9.36c.47.47.88 1.04 1.2 1.65a.5.5 0 1 1-.9.46 5.45 5.45 0 0 0-9.73-.01.5.5 0 0 1-.89-.46A6.45 6.45 0 0 1 14.6 9.35Zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 1 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 1 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.93a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi2Regular = wrapIcon_1.default( /*#__PURE__*/Wifi2RegularIcon, 'Wifi2Regular');
const Wifi3FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.95 11.84c.37.36.67.8.87 1.28a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.04a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi3Filled = wrapIcon_1.default( /*#__PURE__*/Wifi3FilledIcon, 'Wifi3Filled');
const Wifi3RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.89 11.85c.35.36.64.8.85 1.26a.5.5 0 1 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 0 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.94a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi3Regular = wrapIcon_1.default( /*#__PURE__*/Wifi3RegularIcon, 'Wifi3Regular');
const Wifi4FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.92 13.88a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi4Filled = wrapIcon_1.default( /*#__PURE__*/Wifi4FilledIcon, 'Wifi4Filled');
const Wifi4RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.96 13.79a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    fill: primaryFill
  }));
  ;
};
exports.Wifi4Regular = wrapIcon_1.default( /*#__PURE__*/Wifi4RegularIcon, 'Wifi4Regular');
const WifiLockFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85A7.97 7.97 0 0 0 5.06 8.03a3 3 0 0 0-2.4 2.02.75.75 0 0 1-.42-1.15 9.47 9.47 0 0 1 14.5-1.34Zm-5.8 8.08c-.26.25-.6.37-.93.36v-2.48a1.24 1.24 0 0 1 .92 2.12Zm.96-2.74a2.63 2.63 0 0 0-2.08-.76 2 2 0 0 0-1.31-1.08v-.13a4.13 4.13 0 0 1 5.32 2.2.75.75 0 0 1-1.37.6c-.13-.31-.33-.6-.56-.83Zm1.64-2.39a4.94 4.94 0 0 0-5.45-1.04 3.01 3.01 0 0 0-1.15-1.1 6.45 6.45 0 0 1 8.85 2.73.75.75 0 1 1-1.33.69 5.13 5.13 0 0 0-.92-1.28ZM3.5 11v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiLockFilled = wrapIcon_1.default( /*#__PURE__*/WifiLockFilledIcon, 'WifiLockFilled');
const WifiLockRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.83 7.38c.41.41.8.88 1.13 1.37a.5.5 0 0 1-.82.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 0 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 0 1-.9.46 5.45 5.45 0 0 0-7.18-2.49c-.24-.27-.54-.5-.87-.67a6.45 6.45 0 0 1 7.76 1.05Zm-6.1 1.7a2 2 0 0 1 1.03.65 3.03 3.03 0 0 1 3.29 1.8.5.5 0 1 0 .92-.4 4.03 4.03 0 0 0-5.24-2.13v.08Zm1.5 2.35V16a1.3 1.3 0 1 0 0-2.6ZM3.5 11v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiLockRegular = wrapIcon_1.default( /*#__PURE__*/WifiLockRegularIcon, 'WifiLockRegular');
const WifiOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l2.89 2.89A9.5 9.5 0 0 0 2.24 8.9a.75.75 0 1 0 1.23.86A7.97 7.97 0 0 1 6.2 7.27l.96.96A6.44 6.44 0 0 0 4.3 11.1a.75.75 0 0 0 1.34.67 4.9 4.9 0 0 1 2.68-2.4l1.28 1.28a4.11 4.11 0 0 0-3.34 2.46.75.75 0 1 0 1.38.6 2.63 2.63 0 0 1 3.92-1.1l5.17 5.17a.75.75 0 1 0 1.06-1.06L3.28 2.22Zm8.09 7.03a4.92 4.92 0 0 1 3.08 2.54.75.75 0 1 0 1.33-.69A6.43 6.43 0 0 0 9.7 7.57l1.68 1.68ZM8.55 6.43a7.96 7.96 0 0 1 8.06 3.33.75.75 0 1 0 1.23-.85A9.47 9.47 0 0 0 7.31 5.19l1.24 1.24Zm2.37 9.2a1.24 1.24 0 1 0-1.76-1.75 1.24 1.24 0 0 0 1.76 1.76Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiOffFilled = wrapIcon_1.default( /*#__PURE__*/WifiOffFilledIcon, 'WifiOffFilled');
const WifiOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3.03 3.03a9.63 9.63 0 0 0-3.06 2.86.5.5 0 0 0 .82.57 8.61 8.61 0 0 1 2.97-2.7l1.44 1.44A6.44 6.44 0 0 0 4.28 11a.5.5 0 1 0 .9.45A5.41 5.41 0 0 1 8.1 8.82l1.86 1.85a4.02 4.02 0 0 0-3.63 2.43.5.5 0 0 0 .92.4 3.03 3.03 0 0 1 3.93-1.6l1.65 1.65a.5.5 0 0 0 .2.2l4.1 4.1a.5.5 0 0 0 .71-.7l-15-15ZM9.6 7.48l1.02 1.02a5.43 5.43 0 0 1 4.28 2.97.5.5 0 0 0 .9-.46A6.43 6.43 0 0 0 9.6 7.48ZM7.14 5.01l.8.81a8.6 8.6 0 0 1 9.2 3.5.5.5 0 0 0 .83-.57A9.61 9.61 0 0 0 7.14 5.02Zm3.82 8.78a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiOffRegular = wrapIcon_1.default( /*#__PURE__*/WifiOffRegularIcon, 'WifiOffRegular');
const WifiSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.84 8.12a9.47 9.47 0 0 0-15.6 0 .75.75 0 1 0 1.23.85 7.97 7.97 0 0 1 13.14 0 .75.75 0 1 0 1.23-.85ZM7.11 11.05a4.13 4.13 0 0 1 4.18-1.02c-.5.36-.94.8-1.3 1.31a2.62 2.62 0 0 0-2.36 1.58.75.75 0 1 1-1.38-.6c.21-.47.5-.9.86-1.27Zm7.48-2.39.33.36a5.58 5.58 0 0 0-1.97.2 4.94 4.94 0 0 0-7.32 1.76.75.75 0 1 1-1.34-.68 6.44 6.44 0 0 1 10.3-1.64Zm-2.52 2.78a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiSettingsFilled = wrapIcon_1.default( /*#__PURE__*/WifiSettingsFilledIcon, 'WifiSettingsFilled');
const WifiSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.96 8.18a9.61 9.61 0 0 0-15.85 0 .5.5 0 0 0 .83.56 8.61 8.61 0 0 1 14.2 0 .5.5 0 1 0 .82-.56Zm-10.78 3.1a4.03 4.03 0 0 1 3.85-1.05c-.32.26-.6.55-.86.88a3.02 3.02 0 0 0-2.91 1.82.5.5 0 1 1-.92-.4c.2-.47.49-.9.84-1.24Zm7.42-2.5.2.23a5.59 5.59 0 0 0-1.35.09 5.45 5.45 0 0 0-8.28 1.79.5.5 0 0 1-.89-.46A6.45 6.45 0 0 1 14.6 8.78Zm-2.53 2.66a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiSettingsRegular = wrapIcon_1.default( /*#__PURE__*/WifiSettingsRegularIcon, 'WifiSettingsRegular');
const WifiWarningFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85 7.97 7.97 0 0 0-13.14 0 .75.75 0 1 1-1.23-.86 9.47 9.47 0 0 1 14.5-1.34ZM5.48 9.46a6.44 6.44 0 0 1 8.65-.43c-.52.1-1 .4-1.31.9a4.94 4.94 0 0 0-7.2 1.84.75.75 0 0 1-1.33-.67c.3-.61.7-1.16 1.19-1.65Zm4.3 6.51 1.08-2.15a1.24 1.24 0 1 0-1.08 2.15Zm1.7-3.4.68-1.35a4.13 4.13 0 0 0-5.9 1.9.75.75 0 0 0 1.37.6c.13-.32.32-.6.54-.82.9-.9 2.3-1.01 3.31-.33Zm2.12-2.02-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiWarningFilled = wrapIcon_1.default( /*#__PURE__*/WifiWarningFilledIcon, 'WifiWarningFilled');
const WifiWarningRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 1 1-.83.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 1 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM5.48 9.36a6.45 6.45 0 0 1 8.75-.34c-.37.05-.73.2-1.03.46a5.45 5.45 0 0 0-8.03 1.97.5.5 0 1 1-.89-.45c.3-.6.7-1.15 1.2-1.64Zm4.3 6.62 1.12-2.25a1.3 1.3 0 1 0-1.12 2.25Zm1.9-3.82.46-.9a4.03 4.03 0 0 0-5.8 1.84.5.5 0 0 0 .92.4 3.03 3.03 0 0 1 4.43-1.34Zm1.92-1.6-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    fill: primaryFill
  }));
  ;
};
exports.WifiWarningRegular = wrapIcon_1.default( /*#__PURE__*/WifiWarningRegularIcon, 'WifiWarningRegular');
const WindowFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 1v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowFilled = wrapIcon_1.default( /*#__PURE__*/WindowFilledIcon, 'WindowFilled');
const WindowRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm0 1h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowRegular = wrapIcon_1.default( /*#__PURE__*/WindowRegularIcon, 'WindowRegular');
const WindowAdFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 8a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4ZM10 9v3H7V9h3ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM4.5 7v7.25c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V7h-11Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdFilled = wrapIcon_1.default( /*#__PURE__*/WindowAdFilledIcon, 'WindowAdFilled');
const WindowAdRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5V6h12ZM4 7v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H4Zm1.5 1a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4ZM9 9v3H6V9h3Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdRegular = wrapIcon_1.default( /*#__PURE__*/WindowAdRegularIcon, 'WindowAdRegular');
const WindowAdOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.27-1.26c-.4.26-.87.41-1.38.41h-9A2.5 2.5 0 0 1 3 14.5v-9c0-.51.15-.98.41-1.38L2.15 2.85a.5.5 0 1 1 .7-.7ZM14.71 15.4 11 11.71v.79a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h.8l-1-1H4.5v7.25c0 .69.56 1.25 1.25 1.25h8.5c.16 0 .32-.03.46-.09ZM8.29 9H7v3h3v-1.3L8.3 9Zm7.21 4.38V7H9.12L5.15 3.02 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9c0 .12 0 .24-.02.35l-1.48-1.47Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdOffFilled = wrapIcon_1.default( /*#__PURE__*/WindowAdOffFilledIcon, 'WindowAdOffFilled');
const WindowAdOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.27-1.27c-.4.27-.87.42-1.38.42h-9A2.5 2.5 0 0 1 3 14.5v-9c0-.51.15-.98.41-1.38L2.15 2.85a.5.5 0 1 1 .7-.7Zm12.3 13.7L10 10.71v1.79a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.8l-1-1H4v7.5c0 .83.67 1.5 1.5 1.5h9c.23 0 .45-.05.65-.15ZM5.29 6 4.14 4.85c-.09.2-.14.42-.14.65V6h1.3Zm3 3H6v3h3V9.7L8.3 9ZM16 6H8.13l1 1H16v6.88l.97.97c.02-.11.03-.23.03-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02l.97.98h8.38c.83 0 1.5.67 1.5 1.5V6Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdOffRegular = wrapIcon_1.default( /*#__PURE__*/WindowAdOffRegularIcon, 'WindowAdOffRegular');
const WindowAdPersonFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.04a3.3 3.3 0 0 1 .01-1H6a2 2 0 0 1-2-2V7h12v2.04c.36.06.7.19 1 .36V6a3 3 0 0 0-3-3H6Zm0 6h3v3H6V9Zm-.5-1a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdPersonFilled = wrapIcon_1.default( /*#__PURE__*/WindowAdPersonFilledIcon, 'WindowAdPersonFilled');
const WindowAdPersonRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.4c-.3-.17-.64-.3-1-.36V7H4v7c0 1.1.9 2 2 2h5.05a2.51 2.51 0 0 0-.01 1H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm9.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5ZM6 12h3V9H6v3ZM5 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAdPersonRegular = wrapIcon_1.default( /*#__PURE__*/WindowAdPersonRegularIcon, 'WindowAdPersonRegular');
const WindowAppsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7c0 1.1.9 2 2 2h1v1H6a3 3 0 0 1-3-3V6Zm11.75 2C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75C19 8.78 18.22 8 17.25 8h-2.5ZM18 16.5c0 .83-.67 1.5-1.5 1.5H14v-4h4v2.5Zm-4-6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4V9.75ZM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAppsFilled = wrapIcon_1.default( /*#__PURE__*/WindowAppsFilledIcon, 'WindowAppsFilled');
const WindowAppsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v-1H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm10.75 2C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75C19 8.78 18.22 8 17.25 8h-2.5ZM18 16.5c0 .83-.67 1.5-1.5 1.5H14v-4h4v2.5Zm-4-6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4V9.75ZM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowAppsRegular = wrapIcon_1.default( /*#__PURE__*/WindowAppsRegularIcon, 'WindowAppsRegular');
const WindowArrowUpFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H9.6a5.46 5.46 0 0 1-.5-1.5H5.74c-.69 0-1.25-.56-1.25-1.25V7h11v2.1c.53.09 1.04.26 1.5.5V5.75A2.75 2.75 0 0 0 14.25 3h-8.5Zm8.75 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.35-4.85a.5.5 0 1 1-.7.7L15 13.71v2.79a.5.5 0 0 1-1 0v-2.8l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.14l2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowArrowUpFilled = wrapIcon_1.default( /*#__PURE__*/WindowArrowUpFilledIcon, 'WindowArrowUpFilled');
const WindowArrowUpRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM14.5 4h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.35-4.85a.5.5 0 1 1-.7.7L15 13.71v2.79a.5.5 0 0 1-1 0v-2.8l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.14l2 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowArrowUpRegular = wrapIcon_1.default( /*#__PURE__*/WindowArrowUpRegularIcon, 'WindowArrowUpRegular');
const WindowBulletListFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.58 9.11a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31Zm0 4a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1.01 1.01 0 0 0 .29-.7 1 1 0 0 0-.3-.71c-.1-.09-.2-.16-.32-.21a.94.94 0 0 0-.38-.08.84.84 0 0 0-.4.08 1.01 1.01 0 0 0-.53.53ZM9.55 10a.56.56 0 0 1-.39-.15.46.46 0 0 1 0-.7c.1-.1.25-.15.39-.15h4.4a.56.56 0 0 1 .5.31.46.46 0 0 1-.11.54c-.1.1-.25.15-.4.15h-4.4Zm-.39 3.85c.1.1.25.15.39.15h4.4a.56.56 0 0 0 .5-.3.46.46 0 0 0-.11-.55.56.56 0 0 0-.4-.15h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .12.55ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14V7h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowBulletListFilled = wrapIcon_1.default( /*#__PURE__*/WindowBulletListFilledIcon, 'WindowBulletListFilled');
const WindowBulletListRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.58 9.11a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31Zm0 4a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1.01 1.01 0 0 0 .29-.7 1 1 0 0 0-.3-.71c-.1-.09-.2-.16-.32-.21a.94.94 0 0 0-.38-.08.84.84 0 0 0-.4.08 1.01 1.01 0 0 0-.53.53ZM9.55 10a.56.56 0 0 1-.39-.15.46.46 0 0 1 0-.7c.1-.1.25-.15.39-.15h4.4a.56.56 0 0 1 .5.31.46.46 0 0 1-.11.54c-.1.1-.25.15-.4.15h-4.4Zm-.39 3.85c.1.1.25.15.39.15h4.4a.56.56 0 0 0 .5-.3.46.46 0 0 0-.11-.55.56.56 0 0 0-.4-.15h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .12.55ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10 3H4v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowBulletListRegular = wrapIcon_1.default( /*#__PURE__*/WindowBulletListRegularIcon, 'WindowBulletListRegular');
const WindowBulletListAddFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6c-.32-.16-.65-.3-1-.4V7H4v7c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm8.34 4c.79-.56 1.73-.9 2.74-.98a.56.56 0 0 0-.13-.02h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .11.55c.1.1.25.15.39.15h1.79Zm-5.76-.89a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31ZM5.5 13.5a.97.97 0 0 1 .29-.7c.1-.1.2-.17.32-.22a.84.84 0 0 1 .39-.08c.13 0 .26.03.38.08s.23.12.32.2a1 1 0 0 1-.7 1.71.97.97 0 0 1-.4-.07 1.1 1.1 0 0 1-.31-.2.84.84 0 0 1-.21-.32 1.2 1.2 0 0 1-.08-.4ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowBulletListAddFilled = wrapIcon_1.default( /*#__PURE__*/WindowBulletListAddFilledIcon, 'WindowBulletListAddFilled');
const WindowBulletListAddRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V7h12v2.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm10.08 3.02a.56.56 0 0 0-.13-.02h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .11.55c.1.1.25.15.39.15h1.79c.79-.56 1.73-.9 2.74-.98Zm-8.5.09a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31ZM5.5 13.5a.97.97 0 0 1 .29-.7c.1-.1.2-.17.32-.22a.84.84 0 0 1 .39-.08c.13 0 .26.03.38.08s.23.12.32.2a1 1 0 0 1-.7 1.71.97.97 0 0 1-.4-.07 1.1 1.1 0 0 1-.31-.2.84.84 0 0 1-.21-.32 1.2 1.2 0 0 1-.08-.4ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowBulletListAddRegular = wrapIcon_1.default( /*#__PURE__*/WindowBulletListAddRegularIcon, 'WindowBulletListAddRegular');
const WindowConsoleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.65 9.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 0-.7ZM14 13H9.5a.5.5 0 0 0 0 1H14a.5.5 0 0 0 0-1ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM4.5 7v7.25c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V7h-11Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowConsoleFilled = wrapIcon_1.default( /*#__PURE__*/WindowConsoleFilledIcon, 'WindowConsoleFilled');
const WindowConsoleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.65 9.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 0-.7ZM14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.68-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5V6h12ZM4 7v7.5c0 .83.67 1.5 1.5 1.5h9c.82 0 1.5-.67 1.5-1.5V7H4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowConsoleRegular = wrapIcon_1.default( /*#__PURE__*/WindowConsoleRegularIcon, 'WindowConsoleRegular');
const WindowDatabaseFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5V16H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3H6Zm11 5.42A7.81 7.81 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDatabaseFilled = wrapIcon_1.default( /*#__PURE__*/WindowDatabaseFilledIcon, 'WindowDatabaseFilled');
const WindowDatabaseRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7c0 1.1.9 2 2 2h3v.5c0 .17.02.34.05.5H6a3 3 0 0 1-3-3V6Zm13 2.14c-.47-.09-.97-.14-1.5-.14-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08-.3-.11-.64-.2-1-.28ZM6 4a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm8.5 10c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDatabaseRegular = wrapIcon_1.default( /*#__PURE__*/WindowDatabaseRegularIcon, 'WindowDatabaseRegular');
const WindowDevEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h8.5A2.75 2.75 0 0 1 16 4.75v4.48c-.33.14-.63.35-.9.61l-.6.6V6h-11v7.25c0 .69.56 1.25 1.25 1.25h5.7l-.18.17a3.2 3.2 0 0 0-.8 1.33H4.76A2.75 2.75 0 0 1 2 13.25v-8.5Zm6.35 3.1a.5.5 0 1 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.21 10l2.14-2.15Zm1.8 5a.5.5 0 0 1 0-.7L12.29 10l-2.14-2.15a.5.5 0 0 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7 0Zm5.66-2.3-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDevEditFilled = wrapIcon_1.default( /*#__PURE__*/WindowDevEditFilledIcon, 'WindowDevEditFilled');
const WindowDevEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h4.97c.11-.36.29-.7.52-1H4.5A1.5 1.5 0 0 1 3 13.5V6h12v3.94l.1-.1c.27-.27.57-.47.9-.6V4.5A2.5 2.5 0 0 0 13.5 2h-9ZM3 4.5C3 3.67 3.67 3 4.5 3h9c.83 0 1.5.67 1.5 1.5V5H3v-.5Zm5.35 2.65c.2.19.2.5 0 .7L6.21 10l2.14 2.15a.5.5 0 0 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5c.19-.2.5-.2.7 0Zm1.8 5a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L12.29 10l-2.14 2.15Zm5.66-1.6-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDevEditRegular = wrapIcon_1.default( /*#__PURE__*/WindowDevEditRegularIcon, 'WindowDevEditRegular');
const WindowDevToolsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.75 2A2.75 2.75 0 0 0 2 4.75v8.5A2.75 2.75 0 0 0 4.75 16h5.88l.12-.24.73-1.26H4.75c-.7 0-1.25-.56-1.25-1.25V6h11v1.15c.46-.25.97-.4 1.5-.44V4.75A2.75 2.75 0 0 0 13.25 2h-8.5Zm9.27 10.1a2.78 2.78 0 0 1 2.77-4.35l-1.31 2.27a.93.93 0 0 0 1.6.92l1.32-2.27a2.78 2.78 0 0 1-2.37 4.58l-2.4 4.17a1.16 1.16 0 0 1-2.01-1.16l2.4-4.16Zm-1.46-.95c-.12-.69-.06-1.4.22-2.08l-1.93-1.92a.5.5 0 0 0-.7.7L12.29 10l-2.14 2.15a.5.5 0 0 0 .7.7l1.71-1.7Zm-4.2-4c.19.2.19.5 0 .7L6.2 10l2.14 2.15a.5.5 0 0 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDevToolsFilled = wrapIcon_1.default( /*#__PURE__*/WindowDevToolsFilledIcon, 'WindowDevToolsFilled');
const WindowDevToolsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h9A2.5 2.5 0 0 1 16 4.5v2.21c-.34.03-.68.1-1 .22V6H3v7.5c0 .83.67 1.5 1.5 1.5h6.7l-.45.76-.12.24H4.5A2.5 2.5 0 0 1 2 13.5v-9ZM4.5 3C3.67 3 3 3.67 3 4.5V5h12v-.5c0-.83-.67-1.5-1.5-1.5h-9Zm9.37 6.1c-.56.97-.46 2.14.15 3l-2.4 4.16a1.16 1.16 0 0 0 2 1.16l2.41-4.17a2.78 2.78 0 0 0 2.36-4.58l-1.3 2.27a.93.93 0 0 1-1.61-.92l1.3-2.27c-1.12-.21-2.3.3-2.9 1.34Zm-1.3 2.05c-.13-.69-.07-1.4.2-2.08l-1.92-1.92a.5.5 0 1 0-.7.7L12.29 10l-2.14 2.15a.5.5 0 1 0 .7.7l1.71-1.7Zm-4.22-3.3a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.21 10l2.14-2.15Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowDevToolsRegular = wrapIcon_1.default( /*#__PURE__*/WindowDevToolsRegularIcon, 'WindowDevToolsRegular');
const WindowEditFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.34.02-.68.1-1 .23V7H4v7c0 1.1.9 2 2 2h3.47l-.04.16-.21.84H6a3 3 0 0 1-3-3V6Zm7.98 9.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowEditFilled = wrapIcon_1.default( /*#__PURE__*/WindowEditFilledIcon, 'WindowEditFilled');
const WindowEditRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.22l.21-.84.04-.16H6a2 2 0 0 1-2-2V7h12v2.23c.32-.14.66-.21 1-.23V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm6.98 9.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowEditRegular = wrapIcon_1.default( /*#__PURE__*/WindowEditRegularIcon, 'WindowEditRegular');
const WindowHeaderHorizontalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7h-11Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderHorizontalFilled = wrapIcon_1.default( /*#__PURE__*/WindowHeaderHorizontalFilledIcon, 'WindowHeaderHorizontalFilled');
const WindowHeaderHorizontalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM4 14.5V7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderHorizontalRegular = wrapIcon_1.default( /*#__PURE__*/WindowHeaderHorizontalRegularIcon, 'WindowHeaderHorizontalRegular');
const WindowHeaderHorizontalOffFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 0 0 .7-.7l-15-15Zm11.9 13.32a1 1 0 0 1-.25.03h-9a1 1 0 0 1-1-1V7h1.8l8.46 8.47ZM15.5 7v6.38l1.48 1.47.02-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02L9.12 7h6.38Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderHorizontalOffFilled = wrapIcon_1.default( /*#__PURE__*/WindowHeaderHorizontalOffFilledIcon, 'WindowHeaderHorizontalOffFilled');
const WindowHeaderHorizontalOffRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 0 0 .7-.7l-15-15Zm12.3 13.7c-.2.1-.42.15-.65.15h-9A1.5 1.5 0 0 1 4 14.5V7h2.3l8.85 8.85ZM16 7v6.88l.98.97.02-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02L9.12 7H16Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderHorizontalOffRegular = wrapIcon_1.default( /*#__PURE__*/WindowHeaderHorizontalOffRegularIcon, 'WindowHeaderHorizontalOffRegular');
const WindowHeaderVerticalFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm4 10h7.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H7v11Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderVerticalFilled = wrapIcon_1.default( /*#__PURE__*/WindowHeaderVerticalFilledIcon, 'WindowHeaderVerticalFilled');
const WindowHeaderVerticalRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM7 4h7.5c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H7V4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowHeaderVerticalRegular = wrapIcon_1.default( /*#__PURE__*/WindowHeaderVerticalRegularIcon, 'WindowHeaderVerticalRegular');
const WindowInprivateFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm10 3v.5h-1.3l1.15-1.15c.1.2.15.42.15.65Zm-.85-1.35L12.79 6.5H9.97l2-2H14c.23 0 .45.05.65.15Zm-4.1-.15-2 2H5.72l2-2h2.83Zm-4.24 0L4.5 6.31V6c0-.83.67-1.5 1.5-1.5h.31ZM7.05 8 4.5 10.55V8h2.55ZM4.5 11.97 8.47 8h2.82l-6.64 6.65A1.5 1.5 0 0 1 4.5 14v-2.03ZM12.7 8h2.8v.04L8.04 15.5H6a1.5 1.5 0 0 1-.65-.15L12.71 8Zm2.8 1.45v2.83l-3.22 3.22H9.45l6.05-6.05Zm0 4.24V14c0 .83-.67 1.5-1.5 1.5h-.3l1.8-1.8Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowInprivateFilled = wrapIcon_1.default( /*#__PURE__*/WindowInprivateFilledIcon, 'WindowInprivateFilled');
const WindowInprivateRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM16 5.5V6h-1.3l1.15-1.14c.1.2.15.41.15.64Zm-.85-1.35L13.29 6h-2.82l2-2h2.03c.23 0 .45.05.65.15ZM11.05 4l-2 2H6.22l2-2h2.83ZM6.81 4l-2 2H4v-.5C4 4.67 4.67 4 5.5 4h1.3ZM4 8.23 5.22 7h2.83L4 11.05V8.23ZM9.47 7h2.82l-8.15 8.15A1.5 1.5 0 0 1 4 14.5v-2.03L9.47 7Zm4.24 0H16v.54L7.54 16H5.5a1.5 1.5 0 0 1-.65-.14L13.71 7ZM16 8.95v2.83L11.78 16H8.95L16 8.95Zm0 4.25v1.3c0 .83-.67 1.5-1.5 1.5h-1.3l2.8-2.8Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowInprivateRegular = wrapIcon_1.default( /*#__PURE__*/WindowInprivateRegularIcon, 'WindowInprivateRegular');
const WindowInprivateAccountFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H3v1h12a3.5 3.5 0 0 0-2.45 6 2.5 2.5 0 0 0-1.86.86c-.4.45-.69 1.08-.69 1.76v.32c0 .37.06.73.16 1.06H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM15 13a2.5 2.5 0 1 1 2-4h-2v1h2.45a2.51 2.51 0 0 1 0 1H15v1h2c-.46.6-1.18 1-2 1Zm-2.45 1c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15v-1h3.76c.15-.32.23-.65.24-1h-4v-1h3.87a1.78 1.78 0 0 0-.3-.47 1.5 1.5 0 0 0-1.12-.53h-4.9Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowInprivateAccountFilled = wrapIcon_1.default( /*#__PURE__*/WindowInprivateAccountFilledIcon, 'WindowInprivateAccountFilled');
const WindowInprivateAccountRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.66c-.1-.32-.15-.65-.16-1H5.5A1.5 1.5 0 0 1 4 14.5V7h13V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM16 5.5V6H4v-.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5ZM15 12a1.5 1.5 0 0 1 0-3h2a2.5 2.5 0 1 0 0 3h-2Zm-2.45 3c-.11 0-.25.06-.37.2a.68.68 0 0 0-.18.42v.32c0 .89.97 2.06 3 2.06h2.99c-.71.6-1.75 1-2.99 1-2.37 0-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1.27-.28.66-.52 1.12-.52h4.9c.46 0 .86.24 1.12.53.12.14.22.3.3.47h-6.32Zm4.95-4.5c0 .17-.02.34-.05.5H15v-1h2.45c.03.16.05.33.05.5ZM15 17h3.76c.15-.32.23-.65.24-1h-4v1Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowInprivateAccountRegular = wrapIcon_1.default( /*#__PURE__*/WindowInprivateAccountRegularIcon, 'WindowInprivateAccountRegular');
const WindowLocationTargetFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4.76c-.3-.2-.64-.38-1-.5V7H4v7c0 1.1.9 2 2 2h4.26c.12.36.3.7.5 1H6a3 3 0 0 1-3-3V6Zm12.06 9.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowLocationTargetFilled = wrapIcon_1.default( /*#__PURE__*/WindowLocationTargetFilledIcon, 'WindowLocationTargetFilled');
const WindowLocationTargetRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3h8a3 3 0 0 1 3 3v4.76c-.3-.2-.64-.38-1-.5V7H4v7c0 1.1.9 2 2 2h4.26c.12.36.3.7.5 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3ZM4 6h12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm11.06 9.33a1 1 0 1 1-1.12-1.66 1 1 0 0 1 1.12 1.66ZM17.95 14h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 15 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 11.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 14 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 17.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowLocationTargetRegular = wrapIcon_1.default( /*#__PURE__*/WindowLocationTargetRegularIcon, 'WindowLocationTargetRegular');
const WindowMultipleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM3 12.5V6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowMultipleFilled = wrapIcon_1.default( /*#__PURE__*/WindowMultipleFilledIcon, 'WindowMultipleFilled');
const WindowMultipleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM3 12.5V6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5ZM3 5v-.5C3 3.67 3.67 3 4.5 3h8c.83 0 1.5.67 1.5 1.5V5H3Zm4.5 13a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowMultipleRegular = wrapIcon_1.default( /*#__PURE__*/WindowMultipleRegularIcon, 'WindowMultipleRegular');
const WindowMultipleSwapFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h8A2.5 2.5 0 0 1 15 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-1.59a1.5 1.5 0 0 0 0-1h1.59c.83 0 1.5-.67 1.5-1.5V6H3v5.09c-.2.07-.4.19-.56.35l-.44.44V4.5ZM14 18H7.5c.38 0 .77-.15 1.06-.44l.56-.56H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4Zm-4.15-3.15-2 2a.5.5 0 0 1-.7-.7L8.29 15H2.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L2.71 14H8.3l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7ZM3.25 14h1.32",
    fill: primaryFill
  }));
  ;
};
exports.WindowMultipleSwapFilled = wrapIcon_1.default( /*#__PURE__*/WindowMultipleSwapFilledIcon, 'WindowMultipleSwapFilled');
const WindowMultipleSwapRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h8A2.5 2.5 0 0 1 15 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-1.59a1.5 1.5 0 0 0 0-1h1.59c.83 0 1.5-.67 1.5-1.5V6H3v5.09c-.2.07-.4.19-.56.35l-.44.44V4.5Zm1 0V5h11v-.5c0-.83-.67-1.5-1.5-1.5h-8C3.67 3 3 3.67 3 4.5ZM14 18H7.5c.38 0 .77-.15 1.06-.44l.56-.56H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4Zm-4.15-3.15-2 2a.5.5 0 0 1-.7-.7L8.29 15H2.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L2.71 14H8.3l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7ZM3.25 14h1.32",
    fill: primaryFill
  }));
  ;
};
exports.WindowMultipleSwapRegular = wrapIcon_1.default( /*#__PURE__*/WindowMultipleSwapRegularIcon, 'WindowMultipleSwapRegular');
const WindowNewFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.77 17a2.5 2.5 0 0 0 2.45-2.01A2 2 0 0 0 17 13V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 1.81 2.5 2.5 0 0 0-2 2.46v6.23A3.5 3.5 0 0 0 6.5 17h6.27ZM4 7.27c0-.66.42-1.21 1-1.42V13c0 1.1.9 2 2 2h7.18c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 0 1 4 13.5V7.27ZM9.52 6h3.98c.28 0 .5.22.5.5v3.98a.5.5 0 0 1-1 0V7.71l-4.15 4.14a.5.5 0 0 1-.7-.7L12.29 7H9.52a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowNewFilled = wrapIcon_1.default( /*#__PURE__*/WindowNewFilledIcon, 'WindowNewFilled');
const WindowNewRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.52 6a.5.5 0 0 0 0 1h2.77l-4.14 4.15a.5.5 0 0 0 .7.7L13 7.71v2.77a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-.5-.5H9.52Zm3.25 11a2.5 2.5 0 0 0 2.47-2.11A2.5 2.5 0 0 0 17 12.5v-7A2.5 2.5 0 0 0 14.5 3h-7a2.5 2.5 0 0 0-2.4 1.8A2.5 2.5 0 0 0 3 7.27v6.23A3.5 3.5 0 0 0 6.5 17h6.27ZM4 7.27c0-.66.42-1.21 1-1.42v6.65A2.5 2.5 0 0 0 7.5 15h6.68c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 0 1 4 13.5V7.27ZM7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 6 12.5v-7C6 4.67 6.67 4 7.5 4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowNewRegular = wrapIcon_1.default( /*#__PURE__*/WindowNewRegularIcon, 'WindowNewRegular');
const WindowPlayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6Zm2 4.9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowPlayFilled = wrapIcon_1.default( /*#__PURE__*/WindowPlayFilledIcon, 'WindowPlayFilled');
const WindowPlayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowPlayRegular = wrapIcon_1.default( /*#__PURE__*/WindowPlayRegularIcon, 'WindowPlayRegular');
const WindowSettingsFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6c-.32-.16-.65-.3-1-.4V7H4v7c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm9.06 5.44a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowSettingsFilled = wrapIcon_1.default( /*#__PURE__*/WindowSettingsFilledIcon, 'WindowSettingsFilled');
const WindowSettingsRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V7h12v2.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm8.06 5.44a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowSettingsRegular = wrapIcon_1.default( /*#__PURE__*/WindowSettingsRegularIcon, 'WindowSettingsRegular');
const WindowShieldFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v2.86a3.39 3.39 0 0 1-1.5-.72V7h-11v7.25c0 .7.56 1.25 1.25 1.25h3.82a5.8 5.8 0 0 0 .97 1.5H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM15.5 9.1a4.13 4.13 0 0 0 2.1.57c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 0 1-.26 0A6.67 6.67 0 0 1 12 17a4.87 4.87 0 0 1-1.31-1.5 5.75 5.75 0 0 1-.69-2.65v-2.77a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0c.4.4.8.73 1.22.98Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowShieldFilled = wrapIcon_1.default( /*#__PURE__*/WindowShieldFilledIcon, 'WindowShieldFilled');
const WindowShieldRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h5.03a5.81 5.81 0 0 1-.7-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v1.23c.33.2.66.32 1 .38V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 1h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM17 9.62a4.06 4.06 0 0 1-1-.27 5.16 5.16 0 0 1-1.72-1.23.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77A5.5 5.5 0 0 0 11.01 16c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V10a.4.4 0 0 0-.4-.33c-.2 0-.4-.02-.6-.05Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowShieldRegular = wrapIcon_1.default( /*#__PURE__*/WindowShieldRegularIcon, 'WindowShieldRegular');
const WindowTextFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 9.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-3 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-4 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14V7h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowTextFilled = wrapIcon_1.default( /*#__PURE__*/WindowTextFilledIcon, 'WindowTextFilled');
const WindowTextRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 9.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-3 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-4 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10 3H4v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowTextRegular = wrapIcon_1.default( /*#__PURE__*/WindowTextRegularIcon, 'WindowTextRegular');
const WindowWrenchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.05c.07-.35.22-.7.44-1H6a2 2 0 0 1-2-2V7h12v1.03c.44.05.79.28 1 .6V6a3 3 0 0 0-3-3H6Zm6.17 10.7A3.52 3.52 0 0 1 16 9.05c.14.05.22.17.24.31v.15a.49.49 0 0 1-.14.26l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowWrenchFilled = wrapIcon_1.default( /*#__PURE__*/WindowWrenchFilledIcon, 'WindowWrenchFilled');
const WindowWrenchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.62a1.38 1.38 0 0 0-1-.59V7H4v7c0 1.1.9 2 2 2h2.5c-.23.3-.38.65-.45 1H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10.24 5.36a.39.39 0 0 0-.35-.34 3.51 3.51 0 0 0-3.72 4.68l-2.73 2.73a1.5 1.5 0 0 0 0 2.13 1.5 1.5 0 0 0 2.13 0l2.73-2.73a3.52 3.52 0 0 0 4.68-3.72c-.05-.37-.48-.47-.75-.21l-.97.97a1.52 1.52 0 0 1-1.26.43 1.5 1.5 0 0 1-.87-2.56l.97-.97a.49.49 0 0 0 .14-.4Z",
    fill: primaryFill
  }));
  ;
};
exports.WindowWrenchRegular = wrapIcon_1.default( /*#__PURE__*/WindowWrenchRegularIcon, 'WindowWrenchRegular');
const WrenchFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 2a4.5 4.5 0 0 0-4.42 5.36l-6.42 6.66a2.36 2.36 0 0 0 3.37 3.3l6.37-6.46a4.51 4.51 0 0 0 5.49-5.37.5.5 0 0 0-.84-.24L14.5 7.79 12.2 5.5l2.55-2.55a.5.5 0 0 0-.24-.84A4.51 4.51 0 0 0 13.5 2Z",
    fill: primaryFill
  }));
  ;
};
exports.WrenchFilled = wrapIcon_1.default( /*#__PURE__*/WrenchFilledIcon, 'WrenchFilled');
const WrenchRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 6.5a4.5 4.5 0 0 1 6.35-4.1.5.5 0 0 1 .15.8l-2.3 2.3 1.3 1.3 2.3-2.3a.5.5 0 0 1 .8.15A4.49 4.49 0 0 1 13.5 11c-.38 0-.75-.05-1.1-.14l-6.37 6.45a2.36 2.36 0 0 1-3.37-3.3l6.42-6.65A4.52 4.52 0 0 1 9 6.5ZM13.5 3a3.5 3.5 0 0 0-3.39 4.39.5.5 0 0 1-.12.47L3.38 14.7a1.36 1.36 0 0 0 1.94 1.9l6.57-6.66a.5.5 0 0 1 .51-.12 3.5 3.5 0 0 0 4.53-4.05l-2.08 2.07a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2.07-2.08A3.52 3.52 0 0 0 13.5 3Z",
    fill: primaryFill
  }));
  ;
};
exports.WrenchRegular = wrapIcon_1.default( /*#__PURE__*/WrenchRegularIcon, 'WrenchRegular');
const WrenchScrewdriverFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 12v-1.5c0-.11-.03-.2-.07-.27a.37.37 0 0 0-.17-.15.87.87 0 0 0-.24-.06 2.08 2.08 0 0 0-.25-.02H16V5.12l.13-.24.17-.32.14-.32c.04-.1.06-.18.06-.24s-.03-.17-.07-.32a7.43 7.43 0 0 0-.34-1c-.05-.15-.1-.26-.11-.34a.57.57 0 0 0-.2-.25.47.47 0 0 0-.28-.09h-2c-.1 0-.2.04-.3.1a.46.46 0 0 0-.18.24 13.58 13.58 0 0 1-.3.86 43.7 43.7 0 0 0-.22.8c0 .07.02.16.06.25a7.72 7.72 0 0 0 .44.87V10h-.27c-.09 0-.18 0-.26.02a.72.72 0 0 0-.24.07.44.44 0 0 0-.17.14.48.48 0 0 0-.06.27V12h5Zm0 1h-5v2.55c0 .34.07.66.2.96a2.58 2.58 0 0 0 1.35 1.3 2.47 2.47 0 0 0 1.9 0c.3-.14.57-.31.8-.53.23-.22.41-.48.55-.77.13-.3.2-.62.2-.96V13ZM5.78 2.13c.14.09.22.24.22.41V6a1 1 0 0 0 2 0V2.54a.5.5 0 0 1 .69-.46 4.5 4.5 0 0 1 .31 8.2V16a2 2 0 1 1-4 0v-5.72a4.5 4.5 0 0 1 .31-8.2.5.5 0 0 1 .47.05Z",
    fill: primaryFill
  }));
  ;
};
exports.WrenchScrewdriverFilled = wrapIcon_1.default( /*#__PURE__*/WrenchScrewdriverFilledIcon, 'WrenchScrewdriverFilled');
const WrenchScrewdriverRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 15.55V10.5c0-.11-.03-.2-.07-.27a.37.37 0 0 0-.17-.15.87.87 0 0 0-.24-.06 2.08 2.08 0 0 0-.25-.02H16V5.12l.13-.24.17-.32.14-.32c.04-.1.06-.18.06-.24s-.03-.17-.07-.32a7.43 7.43 0 0 0-.34-1c-.05-.15-.1-.26-.11-.34a.57.57 0 0 0-.2-.25.47.47 0 0 0-.28-.09h-2c-.1 0-.2.04-.3.1a.46.46 0 0 0-.18.24 13.58 13.58 0 0 1-.3.86 43.7 43.7 0 0 0-.22.8c0 .07.02.16.06.25a7.72 7.72 0 0 0 .44.87V10h-.27c-.09 0-.18 0-.26.02a.72.72 0 0 0-.24.07.44.44 0 0 0-.17.14.48.48 0 0 0-.06.27v5.05c0 .34.07.66.2.96a2.58 2.58 0 0 0 1.35 1.3 2.47 2.47 0 0 0 1.9 0c.3-.14.57-.31.8-.53.23-.22.41-.48.55-.77.13-.3.2-.62.2-.96ZM15 10h-1V5a.5.5 0 0 0-.05-.23l-.41-.8.32-.97h1.28l.32.96-.4.81A.5.5 0 0 0 15 5v5Zm-2 2v-1h3v1h-3Zm3 1v2.5c0 .2-.03.4-.12.58a1.5 1.5 0 0 1-1.96.8A1.5 1.5 0 0 1 13 15.5V13h3ZM6 2.54a.5.5 0 0 0-.69-.46 4.5 4.5 0 0 0-.31 8.2V16a2 2 0 0 0 4 0v-5.72a4.5 4.5 0 0 0-.31-8.2.5.5 0 0 0-.69.46V6a1 1 0 1 1-2 0V2.54ZM3.5 6.25c0-1.19.6-2.24 1.5-2.87V6a2 2 0 1 0 4 0V3.38a3.5 3.5 0 0 1-.69 6.12.5.5 0 0 0-.31.46V16a1 1 0 1 1-2 0V9.96a.5.5 0 0 0-.31-.46A3.5 3.5 0 0 1 3.5 6.25Z",
    fill: primaryFill
  }));
  ;
};
exports.WrenchScrewdriverRegular = wrapIcon_1.default( /*#__PURE__*/WrenchScrewdriverRegularIcon, 'WrenchScrewdriverRegular');
const XboxConsoleFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2a.5.5 0 0 0-.5.5v15c0 .28.22.5.5.5H7V9.5a.5.5 0 0 1 1 0V18h7.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-11Zm3 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxConsoleFilled = wrapIcon_1.default( /*#__PURE__*/XboxConsoleFilledIcon, 'XboxConsoleFilled');
const XboxConsoleRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 2.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15Zm4 7V17h7V3H5v14h2V9.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxConsoleRegular = wrapIcon_1.default( /*#__PURE__*/XboxConsoleRegularIcon, 'XboxConsoleRegular');
const XboxControllerFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.33 4.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 13.7A2 2 0 0 1 8.4 13h3.2a2 2 0 0 1 1.51.7l1.51 1.73c.6.67 1.75.84 2.4.02a4.51 4.51 0 0 0 .82-4.06c-.32-1.5-1.16-3.27-2.27-5.43a2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 8.5A.75.75 0 1 1 10 7a.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxControllerFilled = wrapIcon_1.default( /*#__PURE__*/XboxControllerFilledIcon, 'XboxControllerFilled');
const XboxControllerRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.33 4.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02l1.51-1.73A2 2 0 0 1 8.4 13h3.19a2 2 0 0 1 1.52.7c.51.6 1.04 1.2 1.51 1.73.6.67 1.75.84 2.4.02a4.51 4.51 0 0 0 .82-4.06c-.33-1.5-1.16-3.27-2.27-5.43A2.37 2.37 0 0 0 13.9 4.7l-.89-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03Zm-1.16.81c.26-.05.51-.02.71.08l.06.03c.44.23.94.37 1.47.37h1.18c.52 0 1.02-.14 1.47-.37l.05-.03c.2-.1.45-.13.71-.08l.9.17c.41.08.77.35.96.72 1.12 2.18 1.89 3.84 2.18 5.2.29 1.31.12 2.3-.62 3.22-.18.22-.59.26-.87-.06-.46-.53-1-1.13-1.5-1.73A3 3 0 0 0 11.59 12H8.4a3 3 0 0 0-2.27 1.04l-1.5 1.73c-.3.32-.7.28-.88.06-.73-.92-.9-1.9-.62-3.22.3-1.36 1.06-3.02 2.18-5.2.2-.37.55-.64.96-.72l.9-.17ZM10 8.5A.75.75 0 1 0 10 7a.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxControllerRegular = wrapIcon_1.default( /*#__PURE__*/XboxControllerRegularIcon, 'XboxControllerRegular');
const XboxControllerErrorFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.33 3.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 12.7A2 2 0 0 1 8.4 12h.8a5.5 5.5 0 0 1 8.16-3.2 38.92 38.92 0 0 0-1.79-3.84 2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 7.5A.75.75 0 1 1 10 6a.75.75 0 0 1 0 1.5Zm9 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxControllerErrorFilled = wrapIcon_1.default( /*#__PURE__*/XboxControllerErrorFilledIcon, 'XboxControllerErrorFilled');
const XboxControllerErrorRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.33 3.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 12.7A2 2 0 0 1 8.4 12h.8c.1-.35.24-.68.4-1H8.4a3 3 0 0 0-2.27 1.04l-1.5 1.73c-.29.32-.7.28-.88.06-.73-.92-.9-1.9-.62-3.22.3-1.36 1.07-3.02 2.18-5.2.2-.37.55-.64.97-.72l.89-.17c.26-.05.51-.02.72.08l.05.03c.44.23.94.37 1.47.37h1.18c.52 0 1.02-.14 1.47-.37l.05-.03c.2-.1.45-.13.72-.08l.89.17c.41.08.77.35.96.72.54 1.05 1 1.98 1.36 2.8.47.14.9.34 1.32.59a38.92 38.92 0 0 0-1.79-3.84 2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 7.5A.75.75 0 1 0 10 6a.75.75 0 0 0 0 1.5Zm9 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
  ;
};
exports.XboxControllerErrorRegular = wrapIcon_1.default( /*#__PURE__*/XboxControllerErrorRegularIcon, 'XboxControllerErrorRegular');
const XrayFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 13.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM7.5 13a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM3 4.5A2.5 2.5 0 0 1 5.5 2h8A2.5 2.5 0 0 1 16 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 15.5v-11Zm7 1a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H7.5a1.5 1.5 0 1 0 1.41 1h1.18a1.5 1.5 0 1 0 1.41-1H10v-1h2.5a.5.5 0 0 0 0-1H10V9h2.5a.5.5 0 0 0 0-1H10V7h1.5a.5.5 0 0 0 0-1H10v-.5Z",
    fill: primaryFill
  }));
  ;
};
exports.XrayFilled = wrapIcon_1.default( /*#__PURE__*/XrayFilledIcon, 'XrayFilled');
const XrayRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 5.5a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H7.5a1.5 1.5 0 1 0 1.41 1h1.18a1.5 1.5 0 1 0 1.41-1H10v-1h2.5a.5.5 0 0 0 0-1H10V9h2.5a.5.5 0 0 0 0-1H10V7h1.5a.5.5 0 0 0 0-1H10v-.5Zm1.5 7.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-4.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM5.5 2A2.5 2.5 0 0 0 3 4.5v11A2.5 2.5 0 0 0 5.5 18h8a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2h-8ZM4 4.5C4 3.67 4.67 3 5.5 3h8c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 4 15.5v-11Z",
    fill: primaryFill
  }));
  ;
};
exports.XrayRegular = wrapIcon_1.default( /*#__PURE__*/XrayRegularIcon, 'XrayRegular');
const ZoomFitFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.86 7.85a.5.5 0 1 0-.72-.7L1.4 8.95a1.5 1.5 0 0 0 0 2.09l1.74 1.8a.5.5 0 1 0 .72-.69l-1.74-1.8a.5.5 0 0 1 0-.7l1.74-1.8Zm3.3-4.71a.5.5 0 1 0 .69.72l1.8-1.74a.5.5 0 0 1 .7 0l1.8 1.74a.5.5 0 0 0 .7-.72l-1.8-1.74a1.5 1.5 0 0 0-2.1 0l-1.8 1.74Zm9.7 4.01a.5.5 0 0 0-.72.7l1.75 1.8c.18.2.18.5 0 .7l-1.75 1.8a.5.5 0 1 0 .72.7l1.74-1.8a1.5 1.5 0 0 0 0-2.09l-1.74-1.8Zm-9.01 8.99a.5.5 0 0 0-.7.72l1.81 1.75c.59.56 1.5.55 2.09 0l1.8-1.75a.5.5 0 0 0-.7-.72l-1.8 1.74a.5.5 0 0 1-.7 0l-1.8-1.74ZM6 8c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomFitFilled = wrapIcon_1.default( /*#__PURE__*/ZoomFitFilledIcon, 'ZoomFitFilled');
const ZoomFitRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.86 7.85a.5.5 0 0 0-.72-.7L1.4 8.95a1.5 1.5 0 0 0 0 2.1l1.74 1.8a.5.5 0 1 0 .72-.7l-1.74-1.8a.5.5 0 0 1 0-.7l1.74-1.8Zm3.3-4.7a.5.5 0 0 0 .69.71l1.8-1.74a.5.5 0 0 1 .7 0l1.8 1.74a.5.5 0 0 0 .7-.72L11.04 1.4a1.5 1.5 0 0 0-2.08 0l-1.8 1.74Zm9.7 4a.5.5 0 1 0-.72.7l1.75 1.8c.18.2.18.51 0 .7l-1.75 1.8a.5.5 0 0 0 .72.7l1.74-1.8a1.5 1.5 0 0 0 0-2.09l-1.74-1.8Zm-9.01 9a.5.5 0 1 0-.7.71l1.81 1.75c.59.56 1.5.56 2.09 0l1.8-1.75a.5.5 0 0 0-.7-.72l-1.8 1.75a.5.5 0 0 1-.7 0l-1.8-1.75ZM8 6a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8ZM7 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomFitRegular = wrapIcon_1.default( /*#__PURE__*/ZoomFitRegularIcon, 'ZoomFitRegular');
const ZoomInFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 8.5c0 1.25-.42 2.4-1.12 3.32l4.15 4.15a.75.75 0 0 1-.98 1.13l-.08-.07-4.15-4.15A5.5 5.5 0 1 1 14 8.5ZM8.5 5.25a.75.75 0 0 0-.75.75v1.75H6a.75.75 0 0 0 0 1.5h1.75V11a.75.75 0 0 0 1.5 0V9.25H11a.75.75 0 0 0 0-1.5H9.25V6a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomInFilled = wrapIcon_1.default( /*#__PURE__*/ZoomInFilledIcon, 'ZoomInFilled');
const ZoomInRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 8.5A.5.5 0 0 0 11 8H9V6a.5.5 0 0 0-1 0v2H6a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V9h2a.5.5 0 0 0 .5-.5ZM8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomInRegular = wrapIcon_1.default( /*#__PURE__*/ZoomInRegularIcon, 'ZoomInRegular');
const ZoomOutFilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 8.5a5.5 5.5 0 1 0-2.18 4.38l4.15 4.15.08.07a.75.75 0 0 0 .98-1.13l-4.15-4.15A5.48 5.48 0 0 0 14 8.5Zm-3-.75a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h5Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomOutFilled = wrapIcon_1.default( /*#__PURE__*/ZoomOutFilledIcon, 'ZoomOutFilled');
const ZoomOutRegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h5Zm3 .5a5.5 5.5 0 1 0-1.98 4.23l4.13 4.12.07.06a.5.5 0 0 0 .63-.76l-4.12-4.13A5.48 5.48 0 0 0 14 8.5Zm-10 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z",
    fill: primaryFill
  }));
  ;
};
exports.ZoomOutRegular = wrapIcon_1.default( /*#__PURE__*/ZoomOutRegularIcon, 'ZoomOutRegular');