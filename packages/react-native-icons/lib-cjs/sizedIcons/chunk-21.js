"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabInPrivate20Filled = exports.TabInPrivate16Regular = exports.TabInPrivate16Filled = exports.TabDesktopNewPage20Regular = exports.TabDesktopNewPage20Filled = exports.TabDesktopMultipleBottom24Regular = exports.TabDesktopMultipleBottom24Filled = exports.TabDesktopMultipleBottom20Regular = exports.TabDesktopMultipleBottom20Filled = exports.TabDesktopMultiple20Regular = exports.TabDesktopMultiple20Filled = exports.TabDesktopImage24Regular = exports.TabDesktopImage24Filled = exports.TabDesktopImage20Regular = exports.TabDesktopImage20Filled = exports.TabDesktopImage16Regular = exports.TabDesktopImage16Filled = exports.TabDesktopCopy20Regular = exports.TabDesktopCopy20Filled = exports.TabDesktopClock20Regular = exports.TabDesktopClock20Filled = exports.TabDesktopBottom24Regular = exports.TabDesktopBottom24Filled = exports.TabDesktopBottom20Regular = exports.TabDesktopBottom20Filled = exports.TabDesktopArrowLeft20Regular = exports.TabDesktopArrowLeft20Filled = exports.TabDesktopArrowClockwise24Regular = exports.TabDesktopArrowClockwise24Filled = exports.TabDesktopArrowClockwise20Regular = exports.TabDesktopArrowClockwise20Filled = exports.TabDesktopArrowClockwise16Regular = exports.TabDesktopArrowClockwise16Filled = exports.TabDesktop24Regular = exports.TabDesktop24Filled = exports.TabDesktop20Regular = exports.TabDesktop20Filled = exports.TabDesktop16Regular = exports.TabDesktop16Filled = exports.TabArrowLeft24Regular = exports.TabArrowLeft24Filled = exports.TabArrowLeft20Regular = exports.TabArrowLeft20Filled = exports.TabAdd24Regular = exports.TabAdd24Filled = exports.TabAdd20Regular = exports.TabAdd20Filled = exports.Tab28Regular = exports.Tab28Filled = exports.Tab24Regular = void 0;
exports.TableCalculator16Filled = exports.TableBottomRow48Regular = exports.TableBottomRow48Filled = exports.TableBottomRow32Regular = exports.TableBottomRow32Filled = exports.TableBottomRow28Regular = exports.TableBottomRow28Filled = exports.TableBottomRow24Regular = exports.TableBottomRow24Filled = exports.TableBottomRow20Regular = exports.TableBottomRow20Filled = exports.TableBottomRow16Regular = exports.TableBottomRow16Filled = exports.TableAdd28Regular = exports.TableAdd28Filled = exports.TableAdd24Regular = exports.TableAdd24Filled = exports.TableAdd20Regular = exports.TableAdd20Filled = exports.TableAdd16Regular = exports.TableAdd16Filled = exports.Table48Regular = exports.Table48Filled = exports.Table32Regular = exports.Table32Filled = exports.Table28Regular = exports.Table28Filled = exports.Table24Regular = exports.Table24Filled = exports.Table20Regular = exports.Table20Filled = exports.Table16Regular = exports.Table16Filled = exports.TabShieldDismiss24Regular = exports.TabShieldDismiss24Filled = exports.TabShieldDismiss20Regular = exports.TabShieldDismiss20Filled = exports.TabProhibited24Regular = exports.TabProhibited24Filled = exports.TabProhibited20Regular = exports.TabProhibited20Filled = exports.TabInprivateAccount24Regular = exports.TabInprivateAccount24Filled = exports.TabInprivateAccount20Regular = exports.TabInprivateAccount20Filled = exports.TabInPrivate28Regular = exports.TabInPrivate28Filled = exports.TabInPrivate24Regular = exports.TabInPrivate24Filled = exports.TabInPrivate20Regular = void 0;
exports.TableDismiss20Filled = exports.TableDismiss16Regular = exports.TableDismiss16Filled = exports.TableDeleteRow28Regular = exports.TableDeleteRow28Filled = exports.TableDeleteRow24Regular = exports.TableDeleteRow24Filled = exports.TableDeleteRow20Regular = exports.TableDeleteRow20Filled = exports.TableDeleteRow16Regular = exports.TableDeleteRow16Filled = exports.TableDeleteColumn28Regular = exports.TableDeleteColumn28Filled = exports.TableDeleteColumn24Regular = exports.TableDeleteColumn24Filled = exports.TableDeleteColumn20Regular = exports.TableDeleteColumn20Filled = exports.TableDeleteColumn16Regular = exports.TableDeleteColumn16Filled = exports.TableCopy20Regular = exports.TableCopy20Filled = exports.TableChecker20Regular = exports.TableChecker20Filled = exports.TableCellsSplit28Regular = exports.TableCellsSplit28Filled = exports.TableCellsSplit24Regular = exports.TableCellsSplit24Filled = exports.TableCellsSplit20Regular = exports.TableCellsSplit20Filled = exports.TableCellsSplit16Regular = exports.TableCellsSplit16Filled = exports.TableCellsMerge28Regular = exports.TableCellsMerge28Filled = exports.TableCellsMerge24Regular = exports.TableCellsMerge24Filled = exports.TableCellsMerge20Regular = exports.TableCellsMerge20Filled = exports.TableCellsMerge16Regular = exports.TableCellsMerge16Filled = exports.TableCellEdit28Regular = exports.TableCellEdit28Filled = exports.TableCellEdit24Regular = exports.TableCellEdit24Filled = exports.TableCellEdit20Regular = exports.TableCellEdit20Filled = exports.TableCellEdit16Regular = exports.TableCellEdit16Filled = exports.TableCalculator20Regular = exports.TableCalculator20Filled = exports.TableCalculator16Regular = void 0;
exports.TableInsertRow20Filled = exports.TableInsertRow16Regular = exports.TableInsertRow16Filled = exports.TableInsertColumn28Regular = exports.TableInsertColumn28Filled = exports.TableInsertColumn24Regular = exports.TableInsertColumn24Filled = exports.TableInsertColumn20Regular = exports.TableInsertColumn20Filled = exports.TableInsertColumn16Regular = exports.TableInsertColumn16Filled = exports.TableImage20Regular = exports.TableImage20Filled = exports.TableFreezeRow28Regular = exports.TableFreezeRow28Filled = exports.TableFreezeRow24Regular = exports.TableFreezeRow24Filled = exports.TableFreezeRow20Regular = exports.TableFreezeRow20Filled = exports.TableFreezeRow16Regular = exports.TableFreezeRow16Filled = exports.TableFreezeColumnAndRow28Regular = exports.TableFreezeColumnAndRow28Filled = exports.TableFreezeColumnAndRow24Regular = exports.TableFreezeColumnAndRow24Filled = exports.TableFreezeColumnAndRow20Regular = exports.TableFreezeColumnAndRow20Filled = exports.TableFreezeColumnAndRow16Regular = exports.TableFreezeColumnAndRow16Filled = exports.TableFreezeColumn28Regular = exports.TableFreezeColumn28Filled = exports.TableFreezeColumn24Regular = exports.TableFreezeColumn24Filled = exports.TableFreezeColumn20Regular = exports.TableFreezeColumn20Filled = exports.TableFreezeColumn16Regular = exports.TableFreezeColumn16Filled = exports.TableEdit28Regular = exports.TableEdit28Filled = exports.TableEdit24Regular = exports.TableEdit24Filled = exports.TableEdit20Regular = exports.TableEdit20Filled = exports.TableEdit16Regular = exports.TableEdit16Filled = exports.TableDismiss28Regular = exports.TableDismiss28Filled = exports.TableDismiss24Regular = exports.TableDismiss24Filled = exports.TableDismiss20Regular = void 0;
exports.TableMoveLeft16Filled = exports.TableMoveBelow28Regular = exports.TableMoveBelow28Filled = exports.TableMoveBelow24Regular = exports.TableMoveBelow24Filled = exports.TableMoveBelow20Regular = exports.TableMoveBelow20Filled = exports.TableMoveBelow16Regular = exports.TableMoveBelow16Filled = exports.TableMoveAbove28Regular = exports.TableMoveAbove28Filled = exports.TableMoveAbove24Regular = exports.TableMoveAbove24Filled = exports.TableMoveAbove20Regular = exports.TableMoveAbove20Filled = exports.TableMoveAbove16Regular = exports.TableMoveAbove16Filled = exports.TableLock48Regular = exports.TableLock48Filled = exports.TableLock32Regular = exports.TableLock32Filled = exports.TableLock28Regular = exports.TableLock28Filled = exports.TableLock24Regular = exports.TableLock24Filled = exports.TableLock20Regular = exports.TableLock20Filled = exports.TableLock16Regular = exports.TableLock16Filled = exports.TableLink28Regular = exports.TableLink28Filled = exports.TableLink24Regular = exports.TableLink24Filled = exports.TableLink20Regular = exports.TableLink20Filled = exports.TableLink16Regular = exports.TableLink16Filled = exports.TableLightning28Regular = exports.TableLightning28Filled = exports.TableLightning24Regular = exports.TableLightning24Filled = exports.TableLightning20Regular = exports.TableLightning20Filled = exports.TableLightning16Regular = exports.TableLightning16Filled = exports.TableInsertRow28Regular = exports.TableInsertRow28Filled = exports.TableInsertRow24Regular = exports.TableInsertRow24Filled = exports.TableInsertRow20Regular = void 0;
exports.TableSimple28Filled = exports.TableSimple24Regular = exports.TableSimple24Filled = exports.TableSimple20Regular = exports.TableSimple20Filled = exports.TableSimple16Regular = exports.TableSimple16Filled = exports.TableSettings28Regular = exports.TableSettings28Filled = exports.TableSettings24Regular = exports.TableSettings24Filled = exports.TableSettings20Regular = exports.TableSettings20Filled = exports.TableSettings16Regular = exports.TableSettings16Filled = exports.TableSearch20Regular = exports.TableSearch20Filled = exports.TableResizeRow28Regular = exports.TableResizeRow28Filled = exports.TableResizeRow24Regular = exports.TableResizeRow24Filled = exports.TableResizeRow20Regular = exports.TableResizeRow20Filled = exports.TableResizeRow16Regular = exports.TableResizeRow16Filled = exports.TableResizeColumn28Regular = exports.TableResizeColumn28Filled = exports.TableResizeColumn24Regular = exports.TableResizeColumn24Filled = exports.TableResizeColumn20Regular = exports.TableResizeColumn20Filled = exports.TableResizeColumn16Regular = exports.TableResizeColumn16Filled = exports.TableMultiple20Regular = exports.TableMultiple20Filled = exports.TableMoveRight28Regular = exports.TableMoveRight28Filled = exports.TableMoveRight24Regular = exports.TableMoveRight24Filled = exports.TableMoveRight20Regular = exports.TableMoveRight20Filled = exports.TableMoveRight16Regular = exports.TableMoveRight16Filled = exports.TableMoveLeft28Regular = exports.TableMoveLeft28Filled = exports.TableMoveLeft24Regular = exports.TableMoveLeft24Filled = exports.TableMoveLeft20Regular = exports.TableMoveLeft20Filled = exports.TableMoveLeft16Regular = void 0;
exports.TableSwitch16Filled = exports.TableStackRight28Regular = exports.TableStackRight28Filled = exports.TableStackRight24Regular = exports.TableStackRight24Filled = exports.TableStackRight20Regular = exports.TableStackRight20Filled = exports.TableStackRight16Regular = exports.TableStackRight16Filled = exports.TableStackLeft28Regular = exports.TableStackLeft28Filled = exports.TableStackLeft24Regular = exports.TableStackLeft24Filled = exports.TableStackLeft20Regular = exports.TableStackLeft20Filled = exports.TableStackLeft16Regular = exports.TableStackLeft16Filled = exports.TableStackBelow28Regular = exports.TableStackBelow28Filled = exports.TableStackBelow24Regular = exports.TableStackBelow24Filled = exports.TableStackBelow20Regular = exports.TableStackBelow20Filled = exports.TableStackBelow16Regular = exports.TableStackBelow16Filled = exports.TableStackAbove28Regular = exports.TableStackAbove28Filled = exports.TableStackAbove24Regular = exports.TableStackAbove24Filled = exports.TableStackAbove20Regular = exports.TableStackAbove20Filled = exports.TableStackAbove16Regular = exports.TableStackAbove16Filled = exports.TableSplit20Regular = exports.TableSplit20Filled = exports.TableSimpleCheckmark48Regular = exports.TableSimpleCheckmark48Filled = exports.TableSimpleCheckmark32Regular = exports.TableSimpleCheckmark32Filled = exports.TableSimpleCheckmark28Regular = exports.TableSimpleCheckmark28Filled = exports.TableSimpleCheckmark24Regular = exports.TableSimpleCheckmark24Filled = exports.TableSimpleCheckmark20Regular = exports.TableSimpleCheckmark20Filled = exports.TableSimpleCheckmark16Regular = exports.TableSimpleCheckmark16Filled = exports.TableSimple48Regular = exports.TableSimple48Filled = exports.TableSimple28Regular = void 0;
exports.TagError20Filled = exports.TagError16Regular = exports.TagError16Filled = exports.TagDismiss24Regular = exports.TagDismiss24Filled = exports.TagDismiss20Regular = exports.TagDismiss20Filled = exports.TagDismiss16Regular = exports.TagDismiss16Filled = exports.TagCircle20Regular = exports.TagCircle20Filled = exports.Tag32Regular = exports.Tag32Filled = exports.Tag28Regular = exports.Tag28Filled = exports.Tag24Regular = exports.Tag24Filled = exports.Tag20Regular = exports.Tag20Filled = exports.Tag16Regular = exports.Tag16Filled = exports.Tabs24Regular = exports.Tabs24Filled = exports.Tabs20Regular = exports.Tabs20Filled = exports.Tabs16Regular = exports.Tabs16Filled = exports.TabletSpeaker24Regular = exports.TabletSpeaker24Filled = exports.TabletSpeaker20Regular = exports.TabletSpeaker20Filled = exports.Tablet48Regular = exports.Tablet48Filled = exports.Tablet32Regular = exports.Tablet32Filled = exports.Tablet24Regular = exports.Tablet24Filled = exports.Tablet20Regular = exports.Tablet20Filled = exports.Tablet16Regular = exports.Tablet16Filled = exports.Tablet12Regular = exports.Tablet12Filled = exports.TableSwitch28Regular = exports.TableSwitch28Filled = exports.TableSwitch24Regular = exports.TableSwitch24Filled = exports.TableSwitch20Regular = exports.TableSwitch20Filled = exports.TableSwitch16Regular = void 0;
exports.TapSingle20Filled = exports.TapDouble48Regular = exports.TapDouble48Filled = exports.TapDouble32Regular = exports.TapDouble32Filled = exports.TapDouble24Regular = exports.TapDouble24Filled = exports.TapDouble20Regular = exports.TapDouble20Filled = exports.TagSearch24Regular = exports.TagSearch24Filled = exports.TagSearch20Regular = exports.TagSearch20Filled = exports.TagReset24Regular = exports.TagReset24Filled = exports.TagReset20Regular = exports.TagReset20Filled = exports.TagQuestionMark32Regular = exports.TagQuestionMark32Filled = exports.TagQuestionMark24Regular = exports.TagQuestionMark24Filled = exports.TagQuestionMark20Regular = exports.TagQuestionMark20Filled = exports.TagQuestionMark16Regular = exports.TagQuestionMark16Filled = exports.TagOff24Regular = exports.TagOff24Filled = exports.TagOff20Regular = exports.TagOff20Filled = exports.TagMultiple24Regular = exports.TagMultiple24Filled = exports.TagMultiple20Regular = exports.TagMultiple20Filled = exports.TagMultiple16Regular = exports.TagMultiple16Filled = exports.TagLockAccent32Filled = exports.TagLockAccent24Filled = exports.TagLockAccent20Filled = exports.TagLockAccent16Filled = exports.TagLock32Regular = exports.TagLock32Filled = exports.TagLock24Regular = exports.TagLock24Filled = exports.TagLock20Regular = exports.TagLock20Filled = exports.TagLock16Regular = exports.TagLock16Filled = exports.TagError24Regular = exports.TagError24Filled = exports.TagError20Regular = void 0;
exports.TaskListSquareLtr24Filled = exports.TaskListSquareLtr20Regular = exports.TaskListSquareLtr20Filled = exports.TaskListSquareLtr16Regular = exports.TaskListSquareLtr16Filled = exports.TaskListSquareDatabase20Regular = exports.TaskListSquareDatabase20Filled = exports.TaskListSquareAdd24Regular = exports.TaskListSquareAdd24Filled = exports.TaskListSquareAdd20Regular = exports.TaskListSquareAdd20Filled = exports.TaskListRtl24Regular = exports.TaskListRtl24Filled = exports.TaskListRtl20Regular = exports.TaskListRtl20Filled = exports.TaskListLtr24Regular = exports.TaskListLtr24Filled = exports.TaskListLtr20Regular = exports.TaskListLtr20Filled = exports.TaskListAdd24Regular = exports.TaskListAdd24Filled = exports.TaskListAdd20Regular = exports.TaskListAdd20Filled = exports.TargetEdit24Regular = exports.TargetEdit24Filled = exports.TargetEdit20Regular = exports.TargetEdit20Filled = exports.TargetEdit16Regular = exports.TargetEdit16Filled = exports.TargetArrow24Regular = exports.TargetArrow24Filled = exports.TargetArrow20Regular = exports.TargetArrow20Filled = exports.TargetArrow16Regular = exports.TargetArrow16Filled = exports.Target32Regular = exports.Target32Filled = exports.Target24Regular = exports.Target24Filled = exports.Target20Regular = exports.Target20Filled = exports.Target16Regular = exports.Target16Filled = exports.TapSingle48Regular = exports.TapSingle48Filled = exports.TapSingle32Regular = exports.TapSingle32Filled = exports.TapSingle24Regular = exports.TapSingle24Filled = exports.TapSingle20Regular = void 0;

const tslib_1 = require("tslib");

const react_native_svg_1 = tslib_1.__importStar(require("react-native-svg"));

const React = tslib_1.__importStar(require("react"));

const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));

const Tab24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM5.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75Z",
    fill: primaryFill
  }));
};

exports.Tab24Regular = wrapIcon_1.default( /*#__PURE__*/Tab24RegularIcon, 'Tab24Regular');

const Tab28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 21.75V6.25ZM6.25 5C5.56 5 5 5.56 5 6.25v15.5c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25V6.25C23 5.56 22.44 5 21.75 5H6.25Z",
    fill: primaryFill
  }));
};

exports.Tab28Filled = wrapIcon_1.default( /*#__PURE__*/Tab28FilledIcon, 'Tab28Filled');

const Tab28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 21.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25Z",
    fill: primaryFill
  }));
};

exports.Tab28Regular = wrapIcon_1.default( /*#__PURE__*/Tab28RegularIcon, 'Tab28Regular');

const TabAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.46 5.46 0 0 0-1.5-.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.6c.09.53.26 1.03.5 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm16 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TabAdd20Filled = wrapIcon_1.default( /*#__PURE__*/TabAdd20FilledIcon, 'TabAdd20Filled');

const TabAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm16 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TabAdd20Regular = wrapIcon_1.default( /*#__PURE__*/TabAdd20RegularIcon, 'TabAdd20Regular');

const TabAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27a6.46 6.46 0 0 0-2-.85V5.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h5.42c.17.72.46 1.4.85 2H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TabAdd24Filled = wrapIcon_1.default( /*#__PURE__*/TabAdd24FilledIcon, 'TabAdd24Filled');

const TabAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27c-.46-.3-.97-.53-1.5-.7V5.74c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.56c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TabAdd24Regular = wrapIcon_1.default( /*#__PURE__*/TabAdd24RegularIcon, 'TabAdd24Regular');

const TabArrowLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.46 5.46 0 0 0-1.5-.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.6c.09.53.26 1.03.5 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.TabArrowLeft20Filled = wrapIcon_1.default( /*#__PURE__*/TabArrowLeft20FilledIcon, 'TabArrowLeft20Filled');

const TabArrowLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.TabArrowLeft20Regular = wrapIcon_1.default( /*#__PURE__*/TabArrowLeft20RegularIcon, 'TabArrowLeft20Regular');

const TabArrowLeft24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27a6.46 6.46 0 0 0-2-.85V5.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h5.42c.17.72.46 1.4.85 2H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM17.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm3-5a.5.5 0 0 0 0-1h-4.8l1.65-1.65a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L15.71 18h4.79Z",
    fill: primaryFill
  }));
};

exports.TabArrowLeft24Filled = wrapIcon_1.default( /*#__PURE__*/TabArrowLeft24FilledIcon, 'TabArrowLeft24Filled');

const TabArrowLeft24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27c-.46-.3-.97-.53-1.5-.7V5.74c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.56c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM17.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm3-5a.5.5 0 0 0 0-1h-4.8l1.65-1.65a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L15.71 18h4.79Z",
    fill: primaryFill
  }));
};

exports.TabArrowLeft24Regular = wrapIcon_1.default( /*#__PURE__*/TabArrowLeft24RegularIcon, 'TabArrowLeft24Regular');

const TabDesktop16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5H8.5A1.5 1.5 0 0 1 7 3.5V2Zm7 2a2 2 0 0 0-2-2H8v1.5c0 .28.22.5.5.5H14Z",
    fill: primaryFill
  }));
};

exports.TabDesktop16Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktop16FilledIcon, 'TabDesktop16Filled');

const TabDesktop16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm3 1v.5C7 4.33 7.67 5 8.5 5H13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3Zm6 1H8.5a.5.5 0 0 1-.5-.5V3h4a1 1 0 0 1 1 1Z",
    fill: primaryFill
  }));
};

exports.TabDesktop16Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktop16RegularIcon, 'TabDesktop16Regular');

const TabDesktop20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Z",
    fill: primaryFill
  }));
};

exports.TabDesktop20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktop20FilledIcon, 'TabDesktop20Filled');

const TabDesktop20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM8 4H5.5C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4Z",
    fill: primaryFill
  }));
};

exports.TabDesktop20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktop20RegularIcon, 'TabDesktop20Regular');

const TabDesktop24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8h-7.75C12.01 8 11 7 11 5.75V3Zm10 3.5V6a3 3 0 0 0-3-3h-5.5v2.75c0 .41.34.75.75.75H21Z",
    fill: primaryFill
  }));
};

exports.TabDesktop24Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktop24FilledIcon, 'TabDesktop24Filled');

const TabDesktop24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75ZM11 4.5v1.25C11 6.99 12 8 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25H11Zm8.5 2h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75Z",
    fill: primaryFill
  }));
};

exports.TabDesktop24Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktop24RegularIcon, 'TabDesktop24Regular');

const TabDesktopArrowClockwise16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4c0-1.1.9-2 2-2h3v1.75C7 4.44 7.56 5 8.25 5H14v7a2 2 0 0 1-2 2H9a4.98 4.98 0 0 0 .25-5.64V7.25a1.5 1.5 0 0 0-2.63-.98A5 5 0 0 0 2 7V4Zm6-2v1.75c0 .14.11.25.25.25H14a2 2 0 0 0-2-2H8Zm.25 5.2a.5.5 0 0 0-1 .05v.44A4 4 0 1 0 9 11a.5.5 0 0 0-1 .01 3 3 0 1 1-1.34-2.5H6a.5.5 0 0 0 0 1h1.75a.5.5 0 0 0 .5-.5V7.25a.5.5 0 0 0 0-.05Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise16Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise16FilledIcon, 'TabDesktopArrowClockwise16Filled');

const TabDesktopArrowClockwise16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v3a5 5 0 0 1 1-.58V4a1 1 0 0 1 1-1h3v.75C7 4.44 7.56 5 8.25 5H13v7a1 1 0 0 1-1 1H9.58A5 5 0 0 1 9 14h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm9 2H8.25A.25.25 0 0 1 8 3.75V3h4a1 1 0 0 1 1 1ZM7.75 6.75c.28 0 .5.22.5.5V9a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.66A3 3 0 1 0 8 11a.5.5 0 0 1 1 0 4 4 0 1 1-1.75-3.3v-.45c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise16Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise16RegularIcon, 'TabDesktopArrowClockwise16Regular');

const TabDesktopArrowClockwise20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v3.76a5.48 5.48 0 0 1 5.2-1A1.5 1.5 0 0 1 11 9v1.34a5.48 5.48 0 0 1-.26 6.66h3.76a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Zm1 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V9a.5.5 0 0 1 .5-.5c.28 0 .5.22.5.5v2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise20FilledIcon, 'TabDesktopArrowClockwise20Filled');

const TabDesktopArrowClockwise20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-3.76c.26-.3.48-.64.66-1h3.1c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.1c-.36.18-.7.4-1 .66V5.5ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM9.5 8.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V9c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise20RegularIcon, 'TabDesktopArrowClockwise20Regular');

const TabDesktopArrowClockwise24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v5.35a6.98 6.98 0 0 1 7.77-1.53 1.75 1.75 0 0 1 3.23.93v1.9a6.97 6.97 0 0 1-1.1 8.6h5.35A2.75 2.75 0 0 0 21 18.25V8h-7.75C12.01 8 11 7 11 5.75V3H5.75Zm6.75 0v2.75c0 .41.34.75.75.75H21v-.75A2.75 2.75 0 0 0 18.25 3H12.5Zm.5 10.25c0 .41-.34.75-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.02-.01A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0 6 6 0 1 1-2.5-4.87v-.63a.75.75 0 0 1 .75-.75c.41 0 .75.34.75.75v2.75Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise24Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise24FilledIcon, 'TabDesktopArrowClockwise24Filled');

const TabDesktopArrowClockwise24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v5.35c.44-.45.95-.84 1.5-1.16V5.75c0-.69.56-1.25 1.25-1.25H11v1.25C11 6.99 12 8 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.19A7.03 7.03 0 0 1 12.9 21h5.35A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75ZM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75Zm-7.25 3.25c.41 0 .75.34.75.75v2.75c0 .41-.34.75-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.02-.01A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0 6 6 0 1 1-2.5-4.87v-.63c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowClockwise24Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowClockwise24RegularIcon, 'TabDesktopArrowClockwise24Regular');

const TabDesktopArrowLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v4.1a5.5 5.5 0 0 1 7.4 7.4h4.1a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Zm1 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowLeft20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowLeft20FilledIcon, 'TabDesktopArrowLeft20Filled');

const TabDesktopArrowLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-4.1c.16-.32.3-.65.4-1h3.7c.82 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.7c-.35.1-.69.24-1 .4V5.5ZM16 6v-.5c0-.83-.68-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16Zm-6 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopArrowLeft20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopArrowLeft20RegularIcon, 'TabDesktopArrowLeft20Regular');

const TabDesktopBottom20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V13h7.5c.83 0 1.5.67 1.5 1.5V17h2.5ZM11 17v-2.5a.5.5 0 0 0-.5-.5H3v.5A2.5 2.5 0 0 0 5.5 17H11Z",
    fill: primaryFill
  }));
};

exports.TabDesktopBottom20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopBottom20FilledIcon, 'TabDesktopBottom20Filled');

const TabDesktopBottom20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM4 14v.5c0 .83.67 1.5 1.5 1.5H11v-1.5a.5.5 0 0 0-.5-.5H4Zm8 2h2.5c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5V13h6.5c.83 0 1.5.67 1.5 1.5V16Z",
    fill: primaryFill
  }));
};

exports.TabDesktopBottom20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopBottom20RegularIcon, 'TabDesktopBottom20Regular');

const TabDesktopBottom24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H14.5v-3.25c0-1.24-1-2.25-2.25-2.25H3V6.25ZM3 17v.75C3 19.55 4.46 21 6.25 21H13v-3.25a.75.75 0 0 0-.75-.75H3Z",
    fill: primaryFill
  }));
};

exports.TabDesktopBottom24Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopBottom24FilledIcon, 'TabDesktopBottom24Filled');

const TabDesktopBottom24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H14.5v-1.75c0-1.24-1-2.25-2.25-2.25H4.5V6.25ZM4.5 17h7.75c.41 0 .75.34.75.75v1.75H6.25c-.97 0-1.75-.78-1.75-1.75V17Z",
    fill: primaryFill
  }));
};

exports.TabDesktopBottom24Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopBottom24RegularIcon, 'TabDesktopBottom24Regular');

const TabDesktopClock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v4.1a5.5 5.5 0 0 1 7.4 7.4h4.1a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9ZM5.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopClock20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopClock20FilledIcon, 'TabDesktopClock20Filled');

const TabDesktopClock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-4.1c.16-.32.3-.65.4-1h3.7c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.7c-.35.1-.68.24-1 .4V5.5ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16Zm-6 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopClock20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopClock20RegularIcon, 'TabDesktopClock20Regular');

const TabDesktopCopy20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 4.5A2.5 2.5 0 0 1 7.5 2H9v2.5c0 .83.67 1.5 1.5 1.5H18v6.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 5 12.5v-8Zm5 0V2h5.5A2.5 2.5 0 0 1 18 4.5V5h-7.5a.5.5 0 0 1-.5-.5ZM12.5 18a2.5 2.5 0 0 0 2.45-2H7.5A3.5 3.5 0 0 1 4 12.5V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4h6.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopCopy20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopCopy20FilledIcon, 'TabDesktopCopy20Filled');

const TabDesktopCopy20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 2A2.5 2.5 0 0 0 5 4.5v8A2.5 2.5 0 0 0 7.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 2h-8ZM17 4.5V5h-6.5a.5.5 0 0 1-.5-.5V3h5.5c.83 0 1.5.67 1.5 1.5Zm-8 0c0 .83.67 1.5 1.5 1.5H17v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 6 12.5v-8C6 3.67 6.67 3 7.5 3H9v1.5ZM12.5 18a2.5 2.5 0 0 0 2.45-2h-1.04c-.2.58-.76 1-1.41 1H6a3 3 0 0 1-3-3V7.5c0-.65.42-1.2 1-1.41V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4h6.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopCopy20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopCopy20RegularIcon, 'TabDesktopCopy20Regular');

const TabDesktopImage16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 2H4a2 2 0 0 0-2 2v1.34c.45-.22.96-.34 1.5-.34h4A3.5 3.5 0 0 1 11 8.5v4c0 .54-.12 1.05-.34 1.5H12a2 2 0 0 0 2-2V5H8.5A1.5 1.5 0 0 1 7 3.5V2Zm7 2a2 2 0 0 0-2-2H8v1.5c0 .28.22.5.5.5H14ZM1 8.5A2.5 2.5 0 0 1 3.5 6h4A2.5 2.5 0 0 1 10 8.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L1.4 13.88C1.15 13.48 1 13 1 12.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L2.12 14.6Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage16Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage16FilledIcon, 'TabDesktopImage16Filled');

const TabDesktopImage16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v1.34c.31-.15.65-.25 1-.3V4a1 1 0 0 1 1-1h3v.5C7 4.33 7.67 5 8.5 5H13v7a1 1 0 0 1-1 1h-1.04c-.05.35-.15.69-.3 1H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm9 2H8.5a.5.5 0 0 1-.5-.5V3h4a1 1 0 0 1 1 1ZM1 8.5A2.5 2.5 0 0 1 3.5 6h4A2.5 2.5 0 0 1 10 8.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L1.4 13.88C1.15 13.48 1 13 1 12.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L2.12 14.6Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage16Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage16RegularIcon, 'TabDesktopImage16Regular');

const TabDesktopImage20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v2.84c.45-.22.96-.34 1.5-.34h4a3.5 3.5 0 0 1 3.5 3.5v4c0 .54-.12 1.05-.34 1.5h2.84a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Zm-7 8.5A2.5 2.5 0 0 1 4.5 9h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L2.4 16.88C2.15 16.48 2 16 2 15.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L3.12 17.6Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage20FilledIcon, 'TabDesktopImage20Filled');

const TabDesktopImage20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.84c.15-.31.25-.65.3-1h2.54c.82 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v2.54c-.36.05-.7.15-1 .3V5.5ZM16 6v-.5c0-.83-.68-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM2 11.5A2.5 2.5 0 0 1 4.5 9h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L2.4 16.88C2.15 16.48 2 16 2 15.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L3.12 17.6Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage20RegularIcon, 'TabDesktopImage20Regular');

const TabDesktopImage24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 3H6a3 3 0 0 0-3 3v4.54A3.98 3.98 0 0 1 5 10h5a4 4 0 0 1 4 4v5c0 .73-.2 1.41-.54 2H18a3 3 0 0 0 3-3V8h-7.75C12.01 8 11 7 11 5.75V3Zm10 3.5V6a3 3 0 0 0-3-3h-5.5v2.75c0 .41.34.75.75.75H21ZM5 11a3 3 0 0 0-3 3v5c0 .56.15 1.08.42 1.52l3.49-3.49c.88-.88 2.3-.88 3.18 0l3.5 3.5c.26-.45.41-.97.41-1.53v-5a3 3 0 0 0-3-3H5Zm0 11c-.56 0-1.08-.15-1.52-.42l3.49-3.49c.3-.3.77-.3 1.06 0l3.5 3.5c-.45.26-.97.41-1.53.41H5Zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage24Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage24FilledIcon, 'TabDesktopImage24Filled');

const TabDesktopImage24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v4.79c.45-.27.96-.44 1.5-.5V5.74c0-.69.56-1.25 1.25-1.25H11v1.25C11 6.99 12 8 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.28a3.98 3.98 0 0 1-.5 1.5h4.78A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75ZM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75ZM5 11a3 3 0 0 0-3 3v5c0 .56.15 1.08.42 1.52l3.49-3.49c.88-.88 2.3-.88 3.18 0l3.5 3.5c.26-.45.41-.97.41-1.53v-5a3 3 0 0 0-3-3H5Zm0 11c-.56 0-1.08-.15-1.52-.42l3.49-3.49c.3-.3.77-.3 1.06 0l3.5 3.5c-.45.26-.97.41-1.53.41H5Zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopImage24Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopImage24RegularIcon, 'TabDesktopImage24Regular');

const TabDesktopMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2H6v2.5C6 5.33 6.67 6 7.5 6H15v6.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 12.5v-8Zm5 0V2h5.5A2.5 2.5 0 0 1 15 4.5V5H7.5a.5.5 0 0 1-.5-.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h7.45a3.5 3.5 0 0 0 3.5-3.5V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultiple20FilledIcon, 'TabDesktopMultiple20Filled');

const TabDesktopMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM14 4.5V5H7.5a.5.5 0 0 1-.5-.5V3h5.5c.83 0 1.5.67 1.5 1.5Zm-8 0C6 5.33 6.67 6 7.5 6H14v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5v-8C3 3.67 3.67 3 4.5 3H6v1.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultiple20RegularIcon, 'TabDesktopMultiple20Regular');

const TabDesktopMultipleBottom20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.05 4h7.45A3.5 3.5 0 0 1 16 7.5v7.45a2.5 2.5 0 0 0 2-2.45V6a4 4 0 0 0-4-4H7.5a2.5 2.5 0 0 0-2.45 2ZM2 7.5A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5H11v-2.5c0-.83-.67-1.5-1.5-1.5H2V7.5Zm8 8V18H4.5A2.5 2.5 0 0 1 2 15.5V15h7.5c.28 0 .5.22.5.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultipleBottom20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultipleBottom20FilledIcon, 'TabDesktopMultipleBottom20Filled');

const TabDesktopMultipleBottom20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.09 4H5.05A2.5 2.5 0 0 1 7.5 2H14a4 4 0 0 1 4 4v6.5a2.5 2.5 0 0 1-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 0 0-3-3H7.5c-.65 0-1.2.42-1.41 1ZM9.5 15H3v.5c0 .83.67 1.5 1.5 1.5H10v-1.5a.5.5 0 0 0-.5-.5ZM3 14h6.5c.83 0 1.5.67 1.5 1.5V17h1.5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-8C3.67 6 3 6.67 3 7.5V14Zm1.5 4A2.5 2.5 0 0 1 2 15.5v-8A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5h-8Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultipleBottom20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultipleBottom20RegularIcon, 'TabDesktopMultipleBottom20Regular');

const TabDesktopMultipleBottom24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5h1.52c.12-.85.85-1.5 1.73-1.5h8c1.8 0 3.25 1.46 3.25 3.25v8c0 .88-.65 1.61-1.5 1.73V18c1.68-.13 3-1.53 3-3.24v-8A4.75 4.75 0 0 0 17.25 2h-8a3.25 3.25 0 0 0-3.24 3ZM2 9.25C2 7.45 3.46 6 5.25 6h9.5C16.55 6 18 7.46 18 9.25v9.5c0 1.8-1.45 3.25-3.25 3.25H11.5v-3.25c0-1.24-1-2.25-2.25-2.25H2V9.25ZM2 18v.75C2 20.55 3.46 22 5.25 22H10v-3.25a.75.75 0 0 0-.75-.75H2Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultipleBottom24Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultipleBottom24FilledIcon, 'TabDesktopMultipleBottom24Filled');

const TabDesktopMultipleBottom24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5h1.52c.12-.85.85-1.5 1.73-1.5h8c1.8 0 3.25 1.46 3.25 3.25v8c0 .88-.65 1.61-1.5 1.73V18c1.68-.13 3-1.53 3-3.24v-8A4.75 4.75 0 0 0 17.25 2h-8a3.25 3.25 0 0 0-3.24 3ZM2 9.25C2 7.45 3.46 6 5.25 6h9.5C16.55 6 18 7.46 18 9.25v9.5c0 1.8-1.45 3.25-3.25 3.25h-9.5A3.25 3.25 0 0 1 2 18.75v-9.5ZM5.25 7.5c-.97 0-1.75.78-1.75 1.75v7.25h5.75c1.24 0 2.25 1 2.25 2.25v1.75h3.25c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75h-9.5Zm4.75 13v-1.75a.75.75 0 0 0-.75-.75H3.5v.75c0 .97.78 1.75 1.75 1.75H10Z",
    fill: primaryFill
  }));
};

exports.TabDesktopMultipleBottom24Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopMultipleBottom24RegularIcon, 'TabDesktopMultipleBottom24Regular');

const TabDesktopNewPage20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3H8v2.5C8 6.33 8.67 7 9.5 7H17v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM8 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3-5v-.5A2.5 2.5 0 0 0 14.5 3H9v2.5c0 .28.22.5.5.5H17Z",
    fill: primaryFill
  }));
};

exports.TabDesktopNewPage20Filled = wrapIcon_1.default( /*#__PURE__*/TabDesktopNewPage20FilledIcon, 'TabDesktopNewPage20Filled');

const TabDesktopNewPage20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5ZM16 5.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16v-.5Z",
    fill: primaryFill
  }));
};

exports.TabDesktopNewPage20Regular = wrapIcon_1.default( /*#__PURE__*/TabDesktopNewPage20RegularIcon, 'TabDesktopNewPage20Regular');

const TabInPrivate16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm-.5 2c0-.28.22-.5.5-.5h1.8L3.5 5.8V4Zm0 3.2 3.7-3.7h2.6L3.5 9.8V7.2Zm7.7-3.7h.8c.28 0 .5.22.5.5v.8l-7.7 7.7H4a.5.5 0 0 1-.5-.5v-.8l7.7-7.7Zm1.3 2.7v2.6l-3.7 3.7H6.2l6.3-6.3Zm0 4V12a.5.5 0 0 1-.5.5h-1.8l2.3-2.3Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate16Filled = wrapIcon_1.default( /*#__PURE__*/TabInPrivate16FilledIcon, 'TabInPrivate16Filled');

const TabInPrivate16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM3 4a1 1 0 0 1 1-1h2.3L3 6.3V4Zm0 3.7L7.7 3h2.6L3 10.3V7.7ZM11.7 3h.3a1 1 0 0 1 1 1v.3L4.3 13H4a1 1 0 0 1-1-1v-.3L11.7 3ZM13 5.7v2.6L8.3 13H5.7L13 5.7Zm0 4V12a1 1 0 0 1-1 1H9.7L13 9.7Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate16Regular = wrapIcon_1.default( /*#__PURE__*/TabInPrivate16RegularIcon, 'TabInPrivate16Regular');

const TabInPrivate20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3Zm-1 2.5v1.3l2.3-2.3H5.5a1 1 0 0 0-1 1Zm0 2.7v2.6l6.3-6.3H8.2L4.5 8.2Zm7.7-3.7-7.7 7.7v2.3a1 1 0 0 0 .03.26L14.76 4.53a1 1 0 0 0-.26-.03h-2.3Zm3.27.74L5.24 15.47a1 1 0 0 0 .26.03h2.3l7.7-7.7V5.5a1 1 0 0 0-.03-.26Zm.03 3.97L9.2 15.5h2.6l3.7-3.7V9.2Zm0 4-2.3 2.29h1.3a1 1 0 0 0 1-1v-1.3Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate20Filled = wrapIcon_1.default( /*#__PURE__*/TabInPrivate20FilledIcon, 'TabInPrivate20Filled');

const TabInPrivate20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5v1.8L7.3 4H5.5C4.67 4 4 4.67 4 5.5Zm0 3.2v2.6L11.3 4H8.7L4 8.7ZM12.7 4 4 12.7v1.8c0 .23.05.45.15.65l11-11A1.5 1.5 0 0 0 14.5 4h-1.8Zm3.15.85-11 11c.2.1.42.15.65.15h1.8L16 7.3V5.5c0-.23-.05-.45-.15-.65ZM16 8.71 8.7 16h2.6l4.7-4.7V8.7Zm0 4L12.7 16h1.8c.83 0 1.5-.67 1.5-1.5v-1.8Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate20Regular = wrapIcon_1.default( /*#__PURE__*/TabInPrivate20RegularIcon, 'TabInPrivate20Regular');

const TabInPrivate24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3ZM5 5.75v.54L6.3 5h-.55a.75.75 0 0 0-.75.75Zm0 1.96v2.58L10.3 5H7.7L5 7.7ZM11.7 5 5 11.7v2.6L14.3 5h-2.6Zm4 0L5 15.7v2.59L18.3 5H15.7Zm3.3.7L5.7 19H8.3L19 8.3V5.7Zm0 4L9.7 19h2.6l6.7-6.7V9.7Zm0 4L13.7 19h2.6l2.7-2.7v-2.6Zm0 4L17.7 19h.55c.41 0 .75-.34.75-.75v-.54Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate24Filled = wrapIcon_1.default( /*#__PURE__*/TabInPrivate24FilledIcon, 'TabInPrivate24Filled');

const TabInPrivate24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3ZM4.5 5.75v1.04L6.8 4.5H5.74c-.69 0-1.25.56-1.25 1.25Zm0 2.46v2.58l6.3-6.29H8.2L4.5 8.2Zm7.7-3.71-7.7 7.7v2.6L14.8 4.5h-2.6Zm4 0L4.5 16.2v2.05c0 .16.03.32.09.46L18.7 4.59c-.14-.06-.3-.09-.46-.09h-2.04Zm3.21.8L5.3 19.4c.14.06.3.09.46.09h2.04L19.5 7.8V5.74c0-.16-.03-.32-.09-.46Zm.09 3.9L9.2 19.5h2.6l7.7-7.7V9.2Zm0 4-6.3 6.3h2.6l3.7-3.7v-2.6Zm0 4-2.3 2.3h1.05c.69 0 1.25-.56 1.25-1.25v-1.04Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate24Regular = wrapIcon_1.default( /*#__PURE__*/TabInPrivate24RegularIcon, 'TabInPrivate24Regular');

const TabInPrivate28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 21.75V6.25C3 4.45 4.46 3 6.25 3ZM5 6.25v.69L6.94 5h-.69C5.56 5 5 5.56 5 6.25Zm0 2.81v2.88L11.94 5H9.06L5 9.06ZM14.06 5 5 14.06v2.88L16.94 5h-2.88Zm5 0L5 19.06v2.69l.01.18L21.93 5 21.75 5h-2.69Zm3.93 1.07L6.07 23l.18.01h2.69L23 8.94V6.25l-.01-.18Zm.01 4.99L11.06 23h2.88L23 13.94v-2.88Zm0 5L16.06 23h2.88L23 18.94v-2.88Zm0 5L21.06 23h.69c.69 0 1.25-.56 1.25-1.25v-.69Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate28Filled = wrapIcon_1.default( /*#__PURE__*/TabInPrivate28FilledIcon, 'TabInPrivate28Filled');

const TabInPrivate28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 21.75V6.25C3 4.45 4.46 3 6.25 3ZM4.5 6.25v1.19L7.44 4.5H6.25c-.97 0-1.75.78-1.75 1.75Zm0 3.31v2.88l7.94-7.94H9.56L4.5 9.56ZM14.56 4.5 4.5 14.56v2.88L17.44 4.5h-2.88Zm5 0L4.5 19.56v2.19c0 .2.04.4.1.59L22.34 4.6c-.19-.06-.38-.1-.59-.1h-2.19Zm3.84 1.16L5.66 23.4c.19.06.38.1.59.1h2.19L23.5 8.44V6.25c0-.2-.04-.4-.1-.59Zm.1 4.9L10.56 23.5h2.88L23.5 13.44v-2.88Zm0 5-7.94 7.94h2.88l5.06-5.06v-2.88Zm0 5-2.94 2.94h1.19c.97 0 1.75-.78 1.75-1.75v-1.19Z",
    fill: primaryFill
  }));
};

exports.TabInPrivate28Regular = wrapIcon_1.default( /*#__PURE__*/TabInPrivate28RegularIcon, 'TabInPrivate28Regular');

const TabInprivateAccount20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.13c-.44-.3-.95-.52-1.5-.6V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H10v.44c0 .37.06.73.16 1.06H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm15.57 9.03a1.5 1.5 0 0 0-1.12-.53h-4.9c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15v-1h3.76c.15-.32.23-.65.24-1h-4v-1h3.87a1.78 1.78 0 0 0-.3-.47ZM15 13a2.5 2.5 0 1 1 2-4h-2v1h2.45a2.51 2.51 0 0 1 0 1H15v1h2c-.46.6-1.18 1-2 1Z",
    fill: primaryFill
  }));
};

exports.TabInprivateAccount20Filled = wrapIcon_1.default( /*#__PURE__*/TabInprivateAccount20FilledIcon, 'TabInprivateAccount20Filled');

const TabInprivateAccount20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.66c-.1-.32-.15-.65-.16-1H5.5A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v1.64c.36.11.7.28 1 .49V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm8 7.5c0 .83.67 1.5 1.5 1.5h2a2.5 2.5 0 1 1 0-3h-2c-.83 0-1.5.67-1.5 1.5Zm-1.32 4.7c.12-.14.26-.2.37-.2h6.32a1.78 1.78 0 0 0-.3-.47 1.5 1.5 0 0 0-1.12-.53h-4.9c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15c-2.03 0-3-1.17-3-2.06v-.32c0-.13.06-.3.18-.43Zm5.32-4.7c0 .17-.02.34-.05.5H15v-1h2.45c.03.16.05.33.05.5Zm1.26 6.5H15v-1h4c0 .35-.1.68-.24 1Z",
    fill: primaryFill
  }));
};

exports.TabInprivateAccount20Regular = wrapIcon_1.default( /*#__PURE__*/TabInprivateAccount20RegularIcon, 'TabInprivateAccount20Regular');

const TabInprivateAccount24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.62a3.9 3.9 0 0 1-.37-1.67V19H5.75a.75.75 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v3.38a4 4 0 0 1 2 1.22v-4.6A2.75 2.75 0 0 0 18.25 3H5.75ZM15 13a3 3 0 0 1 3-3v1h2.24a3 3 0 0 1 .59 1H18v1h3a3 3 0 0 1-.17 1H18v1h2.24A3 3 0 0 1 15 13Zm-.06 4c-.58 0-1.07.28-1.4.63-.32.35-.54.83-.54 1.31v.39c0 1.96 2.04 3.67 5 3.67v-1h3.47c.41-.29.75-.63 1-1H18v-1h4.92c.05-.22.08-.44.08-.67V19h-5v-1h4.73a2.13 2.13 0 0 0-.27-.37 1.91 1.91 0 0 0-1.4-.63h-6.12Z",
    fill: primaryFill
  }));
};

exports.TabInprivateAccount24Filled = wrapIcon_1.default( /*#__PURE__*/TabInprivateAccount24FilledIcon, 'TabInprivateAccount24Filled');

const TabInprivateAccount24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.6a4 4 0 0 0-1.5-1.06V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H12c.03.54.15 1.04.37 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm15 8.75a1.5 1.5 0 0 1 0-3v.5h2.83a3 3 0 0 0-.6-1H18v-1a3 3 0 1 0 2.24 5H18v-.5ZM14.94 17c-.58 0-1.07.28-1.4.63-.32.35-.54.83-.54 1.31v.39c0 1.96 2.04 3.67 5 3.67v-1h3.47c.41-.29.75-.63 1-1H18v.5c-2.53 0-3.5-1.39-3.5-2.17v-.39a.5.5 0 0 1 .14-.29c.11-.11.22-.15.3-.15H18V18h4.73a2.13 2.13 0 0 0-.27-.37 1.91 1.91 0 0 0-1.4-.63h-6.12ZM18 14v-1h3a3 3 0 0 1-.17 1H18Zm4.92 6H18v-1h5v.33c0 .23-.03.45-.08.67Z",
    fill: primaryFill
  }));
};

exports.TabInprivateAccount24Regular = wrapIcon_1.default( /*#__PURE__*/TabInprivateAccount24RegularIcon, 'TabInprivateAccount24Regular');

const TabProhibited20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.46 5.46 0 0 0-1.5-.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.6c.09.53.26 1.03.5 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm7 9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    fill: primaryFill
  }));
};

exports.TabProhibited20Filled = wrapIcon_1.default( /*#__PURE__*/TabProhibited20FilledIcon, 'TabProhibited20Filled');

const TabProhibited20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm7 9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    fill: primaryFill
  }));
};

exports.TabProhibited20Regular = wrapIcon_1.default( /*#__PURE__*/TabProhibited20RegularIcon, 'TabProhibited20Regular');

const TabProhibited24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27a6.46 6.46 0 0 0-2-.85V5.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h5.42c.17.72.46 1.4.85 2H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 0 0-6.25 3.3Zm4 4a4 4 0 0 0 3.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69Z",
    fill: primaryFill
  }));
};

exports.TabProhibited24Filled = wrapIcon_1.default( /*#__PURE__*/TabProhibited24FilledIcon, 'TabProhibited24Filled');

const TabProhibited24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.27c-.46-.3-.97-.53-1.5-.7V5.74c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.56c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 0 0-6.25 3.3Zm4 4a4 4 0 0 0 3.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69Z",
    fill: primaryFill
  }));
};

exports.TabProhibited24Regular = wrapIcon_1.default( /*#__PURE__*/TabProhibited24RegularIcon, 'TabProhibited24Regular');

const TabShieldDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.73c-.34-.2-.67-.46-1-.8a1.4 1.4 0 0 0-.5-.34V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5.07a5.8 5.8 0 0 0 .96 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm12.28 2.62c1 1.04 2.1 1.55 3.32 1.55.2 0 .36.14.4.34v2.57c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 0 1-.26 0c-2.48-.86-3.79-2.6-3.87-5.15v-2.75a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0ZM15 12.47l-1.36-1.36a.38.38 0 0 0-.53.53L14.47 13l-1.36 1.35a.38.38 0 0 0 .54.54L15 13.53l1.35 1.36a.38.38 0 0 0 .54-.54L15.53 13l1.36-1.36a.38.38 0 0 0-.54-.53L15 12.47Z",
    fill: primaryFill
  }));
};

exports.TabShieldDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/TabShieldDismiss20FilledIcon, 'TabShieldDismiss20Filled');

const TabShieldDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.73c-.34-.2-.67-.46-1-.8V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h5.32a5.75 5.75 0 0 0 .71 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm15.6 4.17c-1.22 0-2.32-.51-3.32-1.55a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.75c.08 2.55 1.4 4.29 3.87 5.15.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4v-2.57a.4.4 0 0 0-.4-.34Zm-4.96 1.44L15 12.47l1.35-1.36a.38.38 0 0 1 .54.54L15.53 13l1.36 1.35a.38.38 0 0 1-.54.54L15 13.53l-1.35 1.36a.38.38 0 0 1-.54-.54L14.47 13l-1.36-1.36a.38.38 0 0 1 .53-.53Z",
    fill: primaryFill
  }));
};

exports.TabShieldDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/TabShieldDismiss20RegularIcon, 'TabShieldDismiss20Regular');

const TabShieldDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.99a5.36 5.36 0 0 1-2-1.36V5.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h6.98a6.7 6.7 0 0 0 1.45 2H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm15.35 4.4A5.71 5.71 0 0 0 22.5 12a.5.5 0 0 1 .5.41v3.09c0 3.22-1.64 5.4-4.84 6.47a.5.5 0 0 1-.32 0c-3.1-1.03-4.74-3.12-4.84-6.18V12.5c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85.2-.2.51-.2.7 0Zm-2.38 3.69-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 1.4 1.4-1.4 1.4-.06.07a.5.5 0 0 0 0 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 1.4-1.4 1.4 1.4.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 0 0 0-.56l-.06-.07-1.4-1.4 1.4-1.4.06-.07a.5.5 0 0 0 0-.56l-.06-.07-.07-.06a.5.5 0 0 0-.56 0l-.07.06-1.4 1.4-1.4-1.4-.07-.06a.5.5 0 0 0-.49-.04l-.07.04Z",
    fill: primaryFill
  }));
};

exports.TabShieldDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/TabShieldDismiss24FilledIcon, 'TabShieldDismiss24Filled');

const TabShieldDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.99a5 5 0 0 1-1.5-.9V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h7.24a6.67 6.67 0 0 0 1.2 1.5H5.74A2.75 2.75 0 0 1 3 18.25V5.75Zm15.35 4.4A5.71 5.71 0 0 0 22.5 12a.5.5 0 0 1 .5.41v3.09c0 3.22-1.64 5.4-4.84 6.47a.5.5 0 0 1-.32 0c-3.1-1.03-4.74-3.12-4.84-6.18V12.5c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85.2-.2.51-.2.7 0Zm-2.38 3.69-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 1.4 1.4-1.4 1.4-.06.07a.5.5 0 0 0 0 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 1.4-1.4 1.4 1.4.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 0 0 0-.56l-.06-.07-1.4-1.4 1.4-1.4.06-.07a.5.5 0 0 0 0-.56l-.06-.07-.07-.06a.5.5 0 0 0-.56 0l-.07.06-1.4 1.4-1.4-1.4-.07-.06a.5.5 0 0 0-.49-.04l-.07.04Z",
    fill: primaryFill
  }));
};

exports.TabShieldDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/TabShieldDismiss24RegularIcon, 'TabShieldDismiss24Regular');

const Table16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 4V6h4v4H6Zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm1 3h4v-3H6v3Zm5 0v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5H11Zm3-8v4h-3V6h3Zm0-1v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Z",
    fill: primaryFill
  }));
};

exports.Table16Filled = wrapIcon_1.default( /*#__PURE__*/Table16FilledIcon, 'Table16Filled');

const Table16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM6 13h4v-2H6v2Zm-1-2H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm1-1h4V6H6v4ZM5 6H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 3h-2v4h2V6Zm0 5h-2v2h.5c.83 0 1.5-.67 1.5-1.5V11Zm0-6v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2Z",
    fill: primaryFill
  }));
};

exports.Table16Regular = wrapIcon_1.default( /*#__PURE__*/Table16RegularIcon, 'Table16Regular');

const Table20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-1-1V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z",
    fill: primaryFill
  }));
};

exports.Table20Filled = wrapIcon_1.default( /*#__PURE__*/Table20FilledIcon, 'Table20Filled');

const Table20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm2.5 3H13v-3h3V14.64A1.5 1.5 0 0 1 14.5 16ZM12 8v4H8V8h4Zm1 0h3v4h-3V8Zm-1-4v3H8V4h4Zm1 0H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.36A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Z",
    fill: primaryFill
  }));
};

exports.Table20Regular = wrapIcon_1.default( /*#__PURE__*/Table20RegularIcon, 'Table20Regular');

const Table24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h5v-5h-5v5Zm6.5 0h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5Zm5-6.5v-5h-5v5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm11.5-6.5v5h-5v-5h5Z",
    fill: primaryFill
  }));
};

exports.Table24Filled = wrapIcon_1.default( /*#__PURE__*/Table24FilledIcon, 'Table24Filled');

const Table24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm5.5 0v4h4v-4h-4Zm5.5 0v4h4v-4h-4ZM14 15.5h-4v4h4v-4Zm1.5 4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4v4Zm0-11h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Z",
    fill: primaryFill
  }));
};

exports.Table24Regular = wrapIcon_1.default( /*#__PURE__*/Table24RegularIcon, 'Table24Regular');

const Table28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h6v-6.5h-6V25Zm7.5 0h2.75A3.75 3.75 0 0 0 25 21.25V18.5h-6.5V25Zm6.5-8v-6h-6.5v6H25Zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Z",
    fill: primaryFill
  }));
};

exports.Table28Filled = wrapIcon_1.default( /*#__PURE__*/Table28FilledIcon, 'Table28Filled');

const Table28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm1.5 1.5v5h6v-5h-6Zm6-1.5v-6h-6v6h6Zm1.5 1.5v5h2.75c1.24 0 2.25-1 2.25-2.25V18.5h-5Zm5-1.5v-6h-5v6h5Zm0-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Z",
    fill: primaryFill
  }));
};

exports.Table28Regular = wrapIcon_1.default( /*#__PURE__*/Table28RegularIcon, 'Table28Regular');

const Table32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 4h-8v6h8V4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 12h-8v8h8v-8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 20v-8h6v8h-6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 22h-8v6h8v-6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 28v-6h6v1a5 5 0 0 1-5 5h-1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 10V4h1a5 5 0 0 1 5 5v1h-6Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4h1v6H4V9a5 5 0 0 1 5-5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 12h6v8H4v-8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 22h6v6H9a5 5 0 0 1-5-5v-1Z",
    fill: primaryFill
  }));
};

exports.Table32Filled = wrapIcon_1.default( /*#__PURE__*/Table32FilledIcon, 'Table32Filled');

const Table32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm5-3a3 3 0 0 0-3 3v2h5V6H9Zm4 0v5h6V6h-6Zm0 7v6h6v-6h-6Zm-2 6v-6H6v6h5Zm-5 2v2a3 3 0 0 0 3 3h2v-5H6Zm7 0v5h6v-5h-6Zm8 0v5h2a3 3 0 0 0 3-3v-2h-5Zm5-2v-6h-5v6h5ZM21 6v5h5V9a3 3 0 0 0-3-3h-2Z",
    fill: primaryFill
  }));
};

exports.Table32Regular = wrapIcon_1.default( /*#__PURE__*/Table32RegularIcon, 'Table32Regular');

const Table48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6h-4.25ZM19 6v10.5h10V6H19Zm-2.5 13H6v10h10.5V19ZM19 29V19h10v10H19Zm-2.5 2.5H6v4.25C6 39.2 8.8 42 12.25 42h4.25V31.5ZM19 42h10V31.5H19V42Zm12.5 0V31.5H42v4.25C42 39.2 39.2 42 35.75 42H31.5ZM42 19v10H31.5V19H42Zm0-2.5v-4.25C42 8.8 39.2 6 35.75 6H31.5v10.5H42Z",
    fill: primaryFill
  }));
};

exports.Table48Filled = wrapIcon_1.default( /*#__PURE__*/Table48FilledIcon, 'Table48Filled');

const Table48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M35.75 6C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5C6 8.8 8.8 6 12.25 6h23.5ZM8.5 19.5v9H17v-9H8.5Zm0 11.5v4.75a3.75 3.75 0 0 0 3.75 3.75H17V31H8.5Zm11 8.5h9V31h-9v8.5Zm11.5 0h4.75a3.75 3.75 0 0 0 3.75-3.75V31H31v8.5Zm8.5-11v-9H31v9h8.5Zm0-11.5v-4.75a3.75 3.75 0 0 0-3.75-3.75H31V17h8.5Zm-11-8.5h-9V17h9V8.5ZM17 8.5h-4.75a3.75 3.75 0 0 0-3.75 3.75V17H17V8.5Zm11.5 20v-9h-9v9h9Z",
    fill: primaryFill
  }));
};

exports.Table48Regular = wrapIcon_1.default( /*#__PURE__*/Table48RegularIcon, 'Table48Regular');

const TableAdd16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2h4v3H6V2ZM5 6H2v4h3V6Zm1 1.34c.37-.52.82-.97 1.34-1.34H6v1.34ZM5 11H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm1 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd16Filled = wrapIcon_1.default( /*#__PURE__*/TableAdd16FilledIcon, 'TableAdd16Filled');

const TableAdd16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h1.76A5.48 5.48 0 0 1 6 7.34V6h1.34a5.47 5.47 0 0 1 6.66.26V4.5A2.5 2.5 0 0 0 11.5 2h-7ZM3 11h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Zm0-5h2v4H3V6Zm7-1H6V3h4v2ZM4.5 3H5v2H3v-.5C3 3.67 3.67 3 4.5 3ZM13 4.5V5h-2V3h.5c.83 0 1.5.67 1.5 1.5ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V11H8.5a.5.5 0 0 1 0-1H10V8.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd16Regular = wrapIcon_1.default( /*#__PURE__*/TableAdd16RegularIcon, 'TableAdd16Regular');

const TableAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm2.6 0A5.52 5.52 0 0 1 12 9.6V8H8v4h1.6Zm4.9-3c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2ZM9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5ZM7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm12 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd20Filled = wrapIcon_1.default( /*#__PURE__*/TableAdd20FilledIcon, 'TableAdd20Filled');

const TableAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H8v-3h1.2c.1-.35.24-.68.4-1H8V8h4v1.6c.32-.16.65-.3 1-.4V8h3v1.2c.35.1.68.24 1 .4V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 4v3H8V4h4Zm1 0H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.36A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Zm12 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd20Regular = wrapIcon_1.default( /*#__PURE__*/TableAdd20RegularIcon, 'TableAdd20Regular');

const TableAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h2.52a6.47 6.47 0 0 1-.85-5H9.5v5ZM21 9.5v2.52a6.47 6.47 0 0 0-5-.85V9.5h5Zm-6.5 0v2.23a6.53 6.53 0 0 0-2.77 2.77H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm20 1.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 1 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TableAdd24Filled = wrapIcon_1.default( /*#__PURE__*/TableAdd24FilledIcon, 'TableAdd24Filled');

const TableAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm18.5 2a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 1 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TableAdd24Regular = wrapIcon_1.default( /*#__PURE__*/TableAdd24RegularIcon, 'TableAdd24Regular');

const TableAdd28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h3.5a7.47 7.47 0 0 1-1.23-6.5H11V25Zm14-14v3.5a7.47 7.47 0 0 0-6.5-1.23V11H25Zm-8 0v2.87A7.53 7.53 0 0 0 13.87 17H11v-6h6Zm8-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm10 17.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd28Filled = wrapIcon_1.default( /*#__PURE__*/TableAdd28FilledIcon, 'TableAdd28Filled');

const TableAdd28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v7.75a7.49 7.49 0 0 0-1.5-.88V11h-5v2.27c-.53.14-1.03.35-1.5.6V11h-6v6h2.87c-.25.47-.46.97-.6 1.5H11v5h2.62c.24.54.53 1.04.88 1.5H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm14-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm17.5 16a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z",
    fill: primaryFill
  }));
};

exports.TableAdd28Regular = wrapIcon_1.default( /*#__PURE__*/TableAdd28RegularIcon, 'TableAdd28Regular');

const TableBottomRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V10h1V4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V10h1V4.5A2.5 2.5 0 0 0 11.5 2h-7ZM3 13.5a2.5 2.5 0 0 1-1-2V11h3v3h-.5c-.56 0-1.08-.19-1.5-.5ZM13.95 12c.03-.16.05-.33.05-.5V11h-3v3h.5a2.49 2.49 0 0 0 2.45-2ZM6 14h4v-3H6v3Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow16FilledIcon, 'TableBottomRow16Filled');

const TableBottomRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7Zm5.5 9v2H6v-2h4Zm-7 0h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Zm0-1V4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V10H3Zm8 3v-2h2v.5c0 .83-.67 1.5-1.5 1.5H11Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow16RegularIcon, 'TableBottomRow16Regular');

const TableBottomRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5V12h-1V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12H3V5.5A2.5 2.5 0 0 1 5.5 3h9ZM17 14.5a2.5 2.5 0 0 1-2.5 2.5H13v-4h4v1.5Zm-13 2c.42.31.94.5 1.5.5H7v-4H3v1.5c0 .82.4 1.54 1 2ZM8 13h4v4H8v-4Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow20FilledIcon, 'TableBottomRow20Filled');

const TableBottomRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4 3h4v-3H8v3Zm5 0h1.5c.78 0 1.42-.6 1.5-1.36V13h-3v3Zm3-4V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12h12Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow20RegularIcon, 'TableBottomRow20Regular');

const TableBottomRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v8.25h1.5V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v8.25H21V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 20.49A3.25 3.25 0 0 1 3 17.75V16h5v5H6.25c-.64 0-1.24-.19-1.75-.51Zm16.41-1.99c.06-.24.09-.5.09-.75V16h-5v5h1.75a3.23 3.23 0 0 0 3.16-2.5ZM14.5 21v-5h-5v5h5Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow24FilledIcon, 'TableBottomRow24Filled');

const TableBottomRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75V14h-15V6.25ZM10 15.5h4v4h-4v-4Zm7.75 4H15.5v-4h4v2.25c0 .97-.78 1.75-1.75 1.75ZM4.5 17.75V15.5h4v4H6.25c-.97 0-1.75-.78-1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow24RegularIcon, 'TableBottomRow24Regular');

const TableBottomRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75V17h1.5V6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25V17H25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM3 21.25A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3v2.75ZM17 25h-6v-6.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow28FilledIcon, 'TableBottomRow28Filled');

const TableBottomRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM4.5 21.25V18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25ZM11 23.5v-5h6v5h-6ZM4.5 17V6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25V17h-19Zm14 6.5v-5h5v2.75c0 1.24-1 2.25-2.25 2.25H18.5Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow28RegularIcon, 'TableBottomRow28Regular');

const TableBottomRow32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4a5 5 0 0 0-5 5v11h2V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11h2V9a5 5 0 0 0-5-5H9Zm11 18v6h-8v-6h8Zm3 6h-1v-6h6v1a5 5 0 0 1-5 5Zm-13-6v6H9a5 5 0 0 1-5-5v-1h6Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow32Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow32FilledIcon, 'TableBottomRow32Filled');

const TableBottomRow32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9ZM6 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10H6V9Zm0 14v-2h5v5H9a3 3 0 0 1-3-3Zm7 3v-5h6v5h-6Zm8 0v-5h5v2a3 3 0 0 1-3 3h-2Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow32Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow32RegularIcon, 'TableBottomRow32Regular');

const TableBottomRow48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M42 12.25C42 8.8 39.2 6 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25V29h2.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V29H42V12.25ZM8.5 40.75a6.24 6.24 0 0 1-2.5-5V31.5h10.5V42h-4.25c-1.4 0-2.7-.46-3.75-1.25ZM42 31.5H31.5V42h4.25A6.22 6.22 0 0 0 42 35.75V31.5ZM29 42H19V31.5h10V42Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow48Filled = wrapIcon_1.default( /*#__PURE__*/TableBottomRow48FilledIcon, 'TableBottomRow48Filled');

const TableBottomRow48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M42 12.25C42 8.8 39.2 6 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5ZM8.5 28.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V28.5h-31Zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 0 1-3.75-3.75Zm20 3.75h-9V31h9v8.5Zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 0 1-3.75 3.75Z",
    fill: primaryFill
  }));
};

exports.TableBottomRow48Regular = wrapIcon_1.default( /*#__PURE__*/TableBottomRow48RegularIcon, 'TableBottomRow48Regular');

const TableCalculator16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2H5v3H2v-.5ZM6 5V2h4v3H6ZM5 6H2v4h3V6Zm1 0v4h2V7.5c0-.56.19-1.08.5-1.5H6Zm2 8v-3H6v3h2Zm-6-3h3v3h-.5A2.5 2.5 0 0 1 2 11.5V11Zm12-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm-3.5 1C9.67 6 9 6.67 9 7.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4Zm-.5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 12.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 14.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 7.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1Z",
    fill: primaryFill
  }));
};

exports.TableCalculator16Filled = wrapIcon_1.default( /*#__PURE__*/TableCalculator16FilledIcon, 'TableCalculator16Filled');

const TableCalculator16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V5h-3.5c-.82 0-1.54.4-2 1H6v4h2v1H6v2h2v1H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 11H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm0-5H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2Zm-2.5 1C9.67 6 9 6.67 9 7.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4Zm-.5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 12.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 14.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM10 7.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1Z",
    fill: primaryFill
  }));
};

exports.TableCalculator16Regular = wrapIcon_1.default( /*#__PURE__*/TableCalculator16RegularIcon, 'TableCalculator16Regular');

const TableCalculator20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm5-3.5V8H8v4h3v-1.5c0-.82.4-1.54 1-2ZM11 13H8v4h3v-4Zm-4 0H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 7.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-7Zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM13.5 10a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4Z",
    fill: primaryFill
  }));
};

exports.TableCalculator20Filled = wrapIcon_1.default( /*#__PURE__*/TableCalculator20FilledIcon, 'TableCalculator20Filled');

const TableCalculator20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3v-1H8V8h4v.5c.3-.22.63-.38 1-.45V8h4V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5 2.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-7Zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM13.5 10a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4Z",
    fill: primaryFill
  }));
};

exports.TableCalculator20Regular = wrapIcon_1.default( /*#__PURE__*/TableCalculator20RegularIcon, 'TableCalculator20Regular');

const TableCellEdit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 5v4.98l.27-.31L10 5.94V5H6Zm-2.5 6A1.5 1.5 0 0 1 2 9.5v-3C2 5.67 2.67 5 3.5 5H5v6H3.5Zm3.48-.62 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit16Filled = wrapIcon_1.default( /*#__PURE__*/TableCellEdit16FilledIcon, 'TableCellEdit16Filled');

const TableCellEdit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m10.94 5-1 1H6v3.98c-.23.3-.41.65-.52 1.02H3.5A1.5 1.5 0 0 1 2 9.5v-3C2 5.67 2.67 5 3.5 5h7.44ZM3 9.5c0 .28.22.5.5.5H5V6H3.5a.5.5 0 0 0-.5.5v3Zm3.98.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit16Regular = wrapIcon_1.default( /*#__PURE__*/TableCellEdit16RegularIcon, 'TableCellEdit16Regular');

const TableCellEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 13h1.98c.1-.12.19-.23.3-.33L12 10.94V7H8v6Zm7.1-5.16c.26-.26.55-.45.86-.6A2 2 0 0 0 15 7h-2v2.94l2.1-2.1ZM5 13a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2v6H5Zm10.8-4.45-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit20Filled = wrapIcon_1.default( /*#__PURE__*/TableCellEdit20FilledIcon, 'TableCellEdit20Filled');

const TableCellEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.98 13c.1-.12.19-.23.3-.33l.66-.67H8V8h4v2.94l1-1V8h1.94l.16-.16c.26-.26.55-.45.86-.6A2 2 0 0 0 15 7H5a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4.98ZM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm8.8.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit20Regular = wrapIcon_1.default( /*#__PURE__*/TableCellEdit20RegularIcon, 'TableCellEdit20Regular');

const TableCellEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.25 6.5C4.01 6.5 3 7.5 3 8.75v4.5c0 1.24 1 2.25 2.25 2.25H8v-9H5.25Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.49 14.86c-.2.2-.37.41-.51.64H9.5v-9h5v6.35l-2.01 2.01Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.72 8h.15a2.25 2.25 0 0 0-2.12-1.5H16v4.85l2.4-2.39A3.28 3.28 0 0 1 20.7 8Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.72 9c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0 0 20.72 9Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit24Filled = wrapIcon_1.default( /*#__PURE__*/TableCellEdit24FilledIcon, 'TableCellEdit24Filled');

const TableCellEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 8.75C3 7.51 4 6.5 5.25 6.5h13.5c.98 0 1.82.63 2.12 1.5h-.15c-.47 0-.94.1-1.37.3a.75.75 0 0 0-.6-.3H15.5v3.85l-1.5 1.5V8h-4v6h3.35l-.86.86c-.2.2-.37.41-.51.64H5.25c-1.24 0-2.25-1-2.25-2.25v-4.5ZM5.25 8a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75H8.5V8H5.25Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.72 9c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0 0 20.72 9Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit24Regular = wrapIcon_1.default( /*#__PURE__*/TableCellEdit24RegularIcon, 'TableCellEdit24Regular');

const TableCellEdit28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 19A2.75 2.75 0 0 1 3 16.25v-4.5A2.75 2.75 0 0 1 5.75 9H9.5v10H5.75ZM11 19h3.36l.13-.14 2.51-2.5V9h-6v10ZM22.25 9c.86 0 1.63.4 2.14 1.02-.73.07-1.44.39-2 .94l-3.89 3.9V9h3.75Zm.85 2.67-7.9 7.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l7.9-7.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit28Filled = wrapIcon_1.default( /*#__PURE__*/TableCellEdit28FilledIcon, 'TableCellEdit28Filled');

const TableCellEdit28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.75 19A2.75 2.75 0 0 1 3 16.25v-4.5A2.75 2.75 0 0 1 5.75 9h16.5c.86 0 1.63.4 2.14 1.02-.57.05-1.12.26-1.6.6a1.24 1.24 0 0 0-.54-.12H18v4.86l-1.5 1.5V10.5h-5v7h4.36l-1.37 1.36-.13.14H5.75ZM4.5 16.25c0 .69.56 1.25 1.25 1.25H10v-7H5.75c-.69 0-1.25.56-1.25 1.25v4.5Zm18.6-4.58-7.9 7.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l7.9-7.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TableCellEdit28Regular = wrapIcon_1.default( /*#__PURE__*/TableCellEdit28RegularIcon, 'TableCellEdit28Regular');

const TableCellsMerge16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2a2.5 2.5 0 0 0-2.45 2h11.9a2.5 2.5 0 0 0-2.45-2h-7ZM2 11V5h12v6H2Zm4.35-4.85a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h4.58l-.64.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H5.71l.64-.65a.5.5 0 0 0 0-.7Zm7.6 5.85a2.5 2.5 0 0 1-2.45 2h-7a2.5 2.5 0 0 1-2.45-2h11.9Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge16Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge16FilledIcon, 'TableCellsMerge16Filled');

const TableCellsMerge16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.35 6.15c.2.2.2.5 0 .7l-.64.65h4.58l-.64-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H5.71l.64.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7Zm8.41 2H3.1c.2-.58.76-1 1.41-1h7c.65 0 1.2.42 1.41 1ZM3 5h10v6H3V5Zm.09 7h9.82c-.2.58-.76 1-1.41 1h-7a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge16Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge16RegularIcon, 'TableCellsMerge16Regular');

const TableCellsMerge20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3H3Zm0 1v6h14V7H3Zm4.35 1.85-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM3 14h14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge20Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge20FilledIcon, 'TableCellsMerge20Filled');

const TableCellsMerge20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h6.58l-.64.65a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H6.71l.64-.65ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 7h12v6H4V7Zm10 9H6a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2Zm2-10H4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge20Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge20RegularIcon, 'TableCellsMerge20Regular');

const TableCellsMerge24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v.25H3v-.25ZM3 8v8h18V8H3Zm12.58 3.25-.89-1a.75.75 0 0 1 1.12-1l2 2.25a.75.75 0 0 1 .01.99l-2 2.26a.75.75 0 1 1-1.13-1l.89-1H8.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 1 1 1.12 1l-.89 1h7.16ZM3 17.75v-.25h18v.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge24Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge24FilledIcon, 'TableCellsMerge24Filled');

const TableCellsMerge24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.58 11.25H8.42l.9-1a.75.75 0 0 0-1.13-1l-2 2.25a.75.75 0 0 0 0 1l2 2.25a.75.75 0 1 0 1.12-1l-.89-1h7.16l-.89 1a.75.75 0 0 0 1.12 1l2-2.25.01-.01a.75.75 0 0 0-.01-1l-2-2.24a.75.75 0 0 0-1.12 1l.89 1ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v.25h-15v-.25ZM4.5 8h15v8h-15V8Zm15 9.5v.25c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75v-.25h15Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge24Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge24RegularIcon, 'TableCellsMerge24Regular');

const TableCellsMerge28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v.75h22v-.75A3.75 3.75 0 0 0 21.25 3H6.75ZM25 9H3v10h22V9Zm-6.42 4.25-.89-1a.75.75 0 0 1 1.12-1l2 2.25a.75.75 0 0 1 .01.99l-2 2.26a.75.75 0 1 1-1.13-1l.89-1H9.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.12 1l-.89 1h9.16ZM25 20.5H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25v-.75Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge28Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge28FilledIcon, 'TableCellsMerge28Filled');

const TableCellsMerge28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75Zm14.5 1.5c1.24 0 2.25 1 2.25 2.25v.75h-19v-.75c0-1.24 1-2.25 2.25-2.25h14.5ZM4.5 9h19v10h-19V9Zm0 12.25v-.75h19v.75c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25Zm14.08-8H9.42l.9-1a.75.75 0 0 0-1.13-1l-2 2.25a.75.75 0 0 0 0 1l2 2.25a.75.75 0 1 0 1.12-1l-.89-1h9.16l-.89 1a.75.75 0 0 0 1.12 1l2-2.25.01-.01a.75.75 0 0 0-.01-1l-2-2.24a.75.75 0 0 0-1.12 1l.89 1Z",
    fill: primaryFill
  }));
};

exports.TableCellsMerge28Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsMerge28RegularIcon, 'TableCellsMerge28Regular');

const TableCellsSplit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 4h5.95a2.5 2.5 0 0 0-2.45-2H8v2ZM7 2H4.5a2.5 2.5 0 0 0-2.45 2H7V2Zm1 12h3.5a2.5 2.5 0 0 0 2.45-2H8v2Zm-1-2H2.05a2.5 2.5 0 0 0 2.45 2H7v-2Zm-5-1V5h12v6H2Zm5-5v4h1V6H7Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit16Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit16FilledIcon, 'TableCellsSplit16Filled');

const TableCellsSplit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM3.09 4H7V3H4.5c-.65 0-1.2.42-1.41 1ZM8 3v1h4.91c-.2-.58-.76-1-1.41-1H8Zm5 2H3v6h10V5Zm-.09 7H8v1h3.5c.65 0 1.2-.42 1.41-1ZM7 13v-1H3.09c.2.58.76 1 1.41 1H7Zm0-3V6h1v4H7Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit16Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit16RegularIcon, 'TableCellsSplit16Regular');

const TableCellsSplit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 6h7v-.5A2.5 2.5 0 0 0 14.5 3H10v3Zm7 7V7H3v6h14Zm-7-5v4H9V8h1Zm0 9h4.5a2.5 2.5 0 0 0 2.5-2.5V14h-7v3Zm-1-3H3v.5A2.5 2.5 0 0 0 5.5 17H9v-3Zm0-8V3H5.5A2.5 2.5 0 0 0 3 5.5V6h6Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit20Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit20FilledIcon, 'TableCellsSplit20Filled');

const TableCellsSplit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 8v4H9V8h1Zm7-2.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V14h5v2H5.36A1.5 1.5 0 0 1 4 14.5ZM9 4v2H4v-.64A1.5 1.5 0 0 1 5.5 4H9Zm1 2V4h4.64A1.5 1.5 0 0 1 16 5.5V6h-6Zm6 7H4V7h12v6Zm0 1.5v.14A1.5 1.5 0 0 1 14.5 16H10v-2h6v.5Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit20Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit20RegularIcon, 'TableCellsSplit20Regular');

const TableCellsSplit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3H11v4H3v-.75C3 4.45 4.46 3 6.25 3ZM21 7v-.75C21 4.45 19.54 3 17.75 3H12.5v4H21Zm-8.5 14h5.25c1.8 0 3.25-1.46 3.25-3.25V17h-8.5v4ZM3 8.5v7h18v-7H3Zm9.5 1.5v4H11v-4h1.5ZM3 17.75V17h8v4H6.25A3.25 3.25 0 0 1 3 17.75Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit24Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit24FilledIcon, 'TableCellsSplit24Filled');

const TableCellsSplit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 10H11v4h1.5v-4ZM3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V7.5H11v-3H6.25Zm13.25 12h-7v3h5.25c.97 0 1.75-.78 1.75-1.75V16.5Zm0-10.25c0-.97-.78-1.75-1.75-1.75H12.5v3h7V6.25ZM4.5 16.5v1.25c0 .97.78 1.75 1.75 1.75H11v-3H4.5Zm0-1.5h15V9h-15v6Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit24Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit24RegularIcon, 'TableCellsSplit24Regular');

const TableCellsSplit28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 7.5H25v-.75A3.75 3.75 0 0 0 21.25 3H14.5v4.5ZM13 3H6.75A3.75 3.75 0 0 0 3 6.75v.75h10V3Zm1.5 22h6.75A3.75 3.75 0 0 0 25 21.25v-.75H14.5V25ZM13 20.5H3v.75A3.75 3.75 0 0 0 6.75 25H13v-4.5ZM3 9h22v10H3V9Zm10 1v8h1.5v-8H13Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit28Filled = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit28FilledIcon, 'TableCellsSplit28Filled');

const TableCellsSplit28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 10v8h1.5v-8H13ZM3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75Zm20.5 0c0-1.24-1-2.25-2.25-2.25H14.5v3h9v-.75ZM13 7.5v-3H6.75c-1.24 0-2.25 1-2.25 2.25v.75H13ZM4.5 19h19V9h-19v10Zm0 1.5v.75c0 1.24 1 2.25 2.25 2.25H13v-3H4.5Zm10 0v3h6.75c1.24 0 2.25-1 2.25-2.25v-.75h-9Z",
    fill: primaryFill
  }));
};

exports.TableCellsSplit28Regular = wrapIcon_1.default( /*#__PURE__*/TableCellsSplit28RegularIcon, 'TableCellsSplit28Regular');

const TableChecker20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 5H8v4h4V8Zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM8 4h6.5c.83 0 1.5.67 1.5 1.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8v1ZM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5c0 .83.67 1.5 1.5 1.5Z",
    fill: primaryFill
  }));
};

exports.TableChecker20Filled = wrapIcon_1.default( /*#__PURE__*/TableChecker20FilledIcon, 'TableChecker20Filled');

const TableChecker20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5c.83 0 1.5.67 1.5 1.5ZM3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9H3Zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3Zm9 13c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8ZM4 7h3V4H5.5c-.78 0-1.42.6-1.5 1.36V7Z",
    fill: primaryFill
  }));
};

exports.TableChecker20Regular = wrapIcon_1.default( /*#__PURE__*/TableChecker20RegularIcon, 'TableChecker20Regular');

const TableCopy20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 13.5A3.5 3.5 0 0 0 6.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.07.37-2.06 1-2.83v7.83ZM15.5 16H14v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5ZM14 7v4h4V7h-4Zm-5 4h4V7H9v4Zm4 1H9v4h4v-4ZM8 7v4H4V7h4Zm0 5H4v1.5A2.5 2.5 0 0 0 6.5 16H8v-4Zm10-6h-4V2h1.5A2.5 2.5 0 0 1 18 4.5V6Zm-5 0V2H9v4h4ZM8 6V2H6.5A2.5 2.5 0 0 0 4 4.5V6h4Z",
    fill: primaryFill
  }));
};

exports.TableCopy20Filled = wrapIcon_1.default( /*#__PURE__*/TableCopy20FilledIcon, 'TableCopy20Filled');

const TableCopy20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 13.5A3.5 3.5 0 0 0 6.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.07.37-2.06 1-2.83v7.83Zm1.73 1.77A2.5 2.5 0 0 1 4 13.5v-9A2.5 2.5 0 0 1 6.5 2h9A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-1.77-.73ZM17 6V4.5A1.5 1.5 0 0 0 15.64 3H14v3h3Zm-4-3H9v3h4V3ZM8 3H6.5A1.5 1.5 0 0 0 5 4.36V6h3V3Zm1 4v4h4V7H9Zm-4 4h3V7H5v4Zm4 1v3h4v-3H9Zm-2.5 3H8v-3H5v1.5A1.5 1.5 0 0 0 6.36 15h.14Zm7.5-3v3h1.5a1.5 1.5 0 0 0 1.5-1.36V12h-3Zm0-5v4h3V7h-3Z",
    fill: primaryFill
  }));
};

exports.TableCopy20Regular = wrapIcon_1.default( /*#__PURE__*/TableCopy20RegularIcon, 'TableCopy20Regular');

const TableDeleteColumn16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1.5c.28 0 .5.22.5.5v3.38a1.5 1.5 0 0 0-.07.07L8 5.88l-.44-.44a1.5 1.5 0 0 0-.06-.06V2c0-.28.22-.5.5-.5Zm.43 9.05.07.07V14a.5.5 0 0 1-1 0v-3.38l.06-.06.44-.44.43.43ZM2.5 14a.5.5 0 0 1-.5-.5V11h3v.5A2.5 2.5 0 0 1 2.5 14ZM5 6v4H2V6h3Zm0-1v-.5A2.5 2.5 0 0 0 2.5 2a.5.5 0 0 0-.5.5V5h3Zm8.5-3A2.5 2.5 0 0 0 11 4.5V5h3V2.5a.5.5 0 0 0-.5-.5ZM11 6h3v4h-3V6Zm3 5h-3v.5a2.5 2.5 0 0 0 2.5 2.5.5.5 0 0 0 .5-.5V11ZM6.15 6.15c.2-.2.5-.2.7 0L8 7.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 8l1.14 1.15a.5.5 0 0 1-.7.7L8 8.71 6.85 9.85a.5.5 0 0 1-.7-.7L7.29 8 6.15 6.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn16Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn16FilledIcon, 'TableDeleteColumn16Filled');

const TableDeleteColumn16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 1.5c.28 0 .5.22.5.5v3.38a1.5 1.5 0 0 0-.07.07L8 5.88l-.44-.44a1.5 1.5 0 0 0-.06-.06V2c0-.28.22-.5.5-.5Zm.43 9.05.07.07V14a.5.5 0 0 1-1 0v-3.38l.06-.06.44-.44.43.43ZM2.5 3C3.33 3 4 3.67 4 4.5V5H2.5a.5.5 0 0 0 0 1H4v4H2.5a.5.5 0 0 0 0 1H4v.5c0 .83-.67 1.5-1.5 1.5a.5.5 0 0 0 0 1A2.5 2.5 0 0 0 5 11.5v-7A2.5 2.5 0 0 0 2.5 2a.5.5 0 0 0 0 1Zm11-1A2.5 2.5 0 0 0 11 4.5v7a2.5 2.5 0 0 0 2.5 2.5.5.5 0 0 0 0-1 1.5 1.5 0 0 1-1.5-1.5V11h1.5a.5.5 0 0 0 0-1H12V6h1.5a.5.5 0 0 0 0-1H12v-.5c0-.83.67-1.5 1.5-1.5a.5.5 0 0 0 0-1ZM6.15 6.15c.2-.2.5-.2.7 0L8 7.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 8l1.14 1.15a.5.5 0 0 1-.7.7L8 8.71 6.85 9.85a.5.5 0 0 1-.7-.7L7.29 8 6.15 6.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn16Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn16RegularIcon, 'TableDeleteColumn16Regular');

const TableDeleteColumn20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5Zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 0 1-1 0ZM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v2H2V3.5Zm0 13V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.5-.5ZM6 8v4H2V8h4Zm12-4.5a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v2h4V3.5ZM14 13v2c0 1.1.9 2 2 2h1.5a.5.5 0 0 0 .5-.5V13h-4Zm-2.15-4.85a.5.5 0 0 0-.7 0L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15a.5.5 0 0 0 0-.7ZM18 12V8h-4v4h4Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn20Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn20FilledIcon, 'TableDeleteColumn20Filled');

const TableDeleteColumn20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 2.5a.5.5 0 0 0-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5Zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 0 1-1 0ZM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1v-2H2.5a.5.5 0 0 1 0-1H5V8H2.5a.5.5 0 0 1 0-1H5V5a1 1 0 0 0-1-1H2.5a.5.5 0 0 1-.5-.5Zm16 0a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.5a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1v-2h2.5a.5.5 0 0 0 0-1H15V8h2.5a.5.5 0 0 0 0-1H15V5a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 .5-.5Zm-6.15 4.65a.5.5 0 0 0-.7 0L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn20Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn20RegularIcon, 'TableDeleteColumn20Regular');

const TableDeleteColumn24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 3.75V8h-5V6.25C17 4.45 18.46 3 20.25 3h1c.41 0 .75.34.75.75Zm0 5.75v5h-5v-5h5ZM21.25 21c.41 0 .75-.34.75-.75V16h-5v1.75c0 1.8 1.46 3.25 3.25 3.25h1ZM2 20.25c0 .41.34.75.75.75h1C5.55 21 7 19.54 7 17.75V16H2v4.25ZM2 9.5v5h5v-5H2Zm0-5.75V8h5V6.25C7 4.45 5.54 3 3.75 3h-1a.75.75 0 0 0-.75.75Zm9.25 11.77v5.73a.75.75 0 0 0 1.5 0v-5.73a1.83 1.83 0 0 1-.08-.07l-.67-.67-.67.67-.08.07Zm0-6.8.08.08.67.67.67-.67.08-.07V2.75a.75.75 0 0 0-1.5 0v5.98Zm-1.78 5.81a.75.75 0 0 1 0-1.06L10.94 12l-1.47-1.47a.75.75 0 1 1 1.06-1.06L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47c-.3.3-.77.3-1.06 0Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn24Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn24FilledIcon, 'TableDeleteColumn24Filled');

const TableDeleteColumn24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 3.75a.75.75 0 0 0-.75-.75h-1A3.25 3.25 0 0 0 17 6.25v11.5c0 1.8 1.46 3.25 3.25 3.25h1a.75.75 0 0 0 0-1.5h-1c-.97 0-1.75-.78-1.75-1.75V15.5h2.75a.75.75 0 0 0 0-1.5H18.5v-4h2.75a.75.75 0 0 0 0-1.5H18.5V6.25c0-.97.78-1.75 1.75-1.75h1c.41 0 .75-.34.75-.75Zm-20 0c0-.41.34-.75.75-.75h1C5.55 3 7 4.46 7 6.25v11.5C7 19.55 5.54 21 3.75 21h-1a.75.75 0 0 1 0-1.5h1c.97 0 1.75-.78 1.75-1.75V15.5H2.75a.75.75 0 0 1 0-1.5H5.5v-4H2.75a.75.75 0 0 1 0-1.5H5.5V6.25c0-.97-.78-1.75-1.75-1.75h-1A.75.75 0 0 1 2 3.75ZM10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L10.94 12Zm.31-3.27.08.07.67.67.67-.67.08-.07V2.75a.75.75 0 0 0-1.5 0v5.98Zm0 6.8v5.72a.75.75 0 0 0 1.5 0v-5.73a1.83 1.83 0 0 1-.08-.07l-.67-.67-.67.67-.08.07Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn24Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn24RegularIcon, 'TableDeleteColumn24Regular');

const TableDeleteColumn28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.25 25.25v-7.73l.08-.07.67-.67.67.67.08.07v7.73a.75.75 0 0 1-1.5 0Zm.08-14.45a1.83 1.83 0 0 0-.08-.07V2.75a.75.75 0 0 1 1.5 0v7.98l-.08.07-.67.67-.67-.67Zm-1.86 4.67a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47ZM4 25a1 1 0 0 1-1-1v-5.5h6v2.75A3.75 3.75 0 0 1 5.25 25H4Zm5-14v6H3v-6h6Zm0-4.25V9.5H3V4a1 1 0 0 1 1-1h1.25A3.75 3.75 0 0 1 9 6.75ZM22.75 3A3.75 3.75 0 0 0 19 6.75V9.5h6V4a1 1 0 0 0-1-1h-1.25ZM25 11h-6v6h6v-6Zm-6 10.25V18.5h6V24a1 1 0 0 1-1 1h-1.25A3.75 3.75 0 0 1 19 21.25Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn28Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn28FilledIcon, 'TableDeleteColumn28Filled');

const TableDeleteColumn28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.25 25.25v-7.73l.08-.07.67-.67.67.67.08.07v7.73a.75.75 0 0 1-1.5 0Zm.08-14.45a1.83 1.83 0 0 0-.08-.07V2.75a.75.75 0 0 1 1.5 0v7.98l-.08.07-.67.67-.67-.67Zm-1.86 4.67a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47ZM3.75 3a.75.75 0 0 0 0 1.5h1.5c1.24 0 2.25 1 2.25 2.25V9.5H3.75a.75.75 0 0 0 0 1.5H7.5v6H3.75a.75.75 0 0 0 0 1.5H7.5v2.75c0 1.24-1 2.25-2.25 2.25h-1.5a.75.75 0 0 0 0 1.5h1.5A3.75 3.75 0 0 0 9 21.25V6.75A3.75 3.75 0 0 0 5.25 3h-1.5Zm19 0A3.75 3.75 0 0 0 19 6.75v14.5A3.75 3.75 0 0 0 22.75 25h2.5a.75.75 0 0 0 0-1.5h-2.5c-1.24 0-2.25-1-2.25-2.25V18.5h4.75a.75.75 0 0 0 0-1.5H20.5v-6h4.75a.75.75 0 0 0 0-1.5H20.5V6.75c0-1.24 1-2.25 2.25-2.25h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
    fill: primaryFill
  }));
};

exports.TableDeleteColumn28Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteColumn28RegularIcon, 'TableDeleteColumn28Regular');

const TableDeleteRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 2h3v3h-.5A2.5 2.5 0 0 1 2 2.5V2Zm8 3H6V2h4v3Zm1 0h.5A2.5 2.5 0 0 0 14 2.5V2h-3v3Zm3 8.5a2.5 2.5 0 0 0-2.5-2.5H11v3h3v-.5ZM10 11v3H6v-3h4Zm-5 3v-3h-.5A2.5 2.5 0 0 0 2 13.5v.5h3Zm4.85-7.85c.2.2.2.5 0 .7L8.71 8l1.14 1.15a.5.5 0 0 1-.7.7L8 8.71 6.85 9.85a.5.5 0 0 1-.7-.7L7.29 8 6.15 6.85a.5.5 0 1 1 .7-.7L8 7.29l1.15-1.14c.2-.2.5-.2.7 0ZM14.5 8a.5.5 0 0 1-.5.5h-3.38a1.48 1.48 0 0 0-.07-.07L10.12 8l.44-.44.06-.06H14c.28 0 .5.22.5.5Zm-9.05.43-.07.07H2a.5.5 0 0 1 0-1h3.38l.06.06.44.44-.43.43Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow16FilledIcon, 'TableDeleteRow16Filled');

const TableDeleteRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 2.5c0 .83-.67 1.5-1.5 1.5H11V2.5a.5.5 0 0 0-1 0V4H6V2.5a.5.5 0 0 0-1 0V4h-.5A1.5 1.5 0 0 1 3 2.5a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 4.5 5h7A2.5 2.5 0 0 0 14 2.5a.5.5 0 0 0-1 0Zm1 11a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 2 13.5a.5.5 0 0 0 1 0c0-.83.67-1.5 1.5-1.5H5v1.5a.5.5 0 0 0 1 0V12h4v1.5a.5.5 0 0 0 1 0V12h.5c.83 0 1.5.67 1.5 1.5a.5.5 0 0 0 1 0ZM9.85 6.15c.2.2.2.5 0 .7L8.71 8l1.14 1.15a.5.5 0 0 1-.7.7L8 8.71 6.85 9.85a.5.5 0 0 1-.7-.7L7.29 8 6.15 6.85a.5.5 0 1 1 .7-.7L8 7.29l1.15-1.14c.2-.2.5-.2.7 0ZM14.5 8a.5.5 0 0 1-.5.5h-3.38a1.48 1.48 0 0 0-.07-.07L10.12 8l.44-.44.06-.06H14c.28 0 .5.22.5.5Zm-9.05.43-.07.07H2a.5.5 0 0 1 0-1h3.38l.06.06.44.44-.43.43Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow16RegularIcon, 'TableDeleteRow16Regular');

const TableDeleteRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 6H8V2h4v4ZM3.5 2H7v4H5a2 2 0 0 1-2-2V2.5c0-.28.22-.5.5-.5ZM15 6h-2V2h3.5c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2Zm1.5 12a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2h-2v4h3.5ZM12 18v-4H8v4h4Zm-5 0H3.5a.5.5 0 0 1-.5-.5V16c0-1.1.9-2 2-2h2v4Zm10.5-7.5a.5.5 0 0 0 0-1h-4.89a5 5 0 0 1-.48.5l.14.13c.12.12.25.24.35.37h4.88Zm-15-1h4.89a5 5 0 0 0 .34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 0 1 0-1Zm9.35 2.35a.5.5 0 0 0 0-.7L10.71 10l1.14-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow20FilledIcon, 'TableDeleteRow20Filled');

const TableDeleteRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 2c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5c0-.28.22-.5.5-.5Zm0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5c0 .28.22.5.5.5Zm1-7.5a.5.5 0 0 0 0-1h-4.89a5 5 0 0 1-.48.5l.14.13c.12.12.25.24.35.37h4.88Zm-15-1h4.89a5 5 0 0 0 .34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 0 1 0-1Zm9.35 2.35a.5.5 0 0 0 0-.7L10.71 10l1.14-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow20RegularIcon, 'TableDeleteRow20Regular');

const TableDeleteRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2H8v5H6.25A3.25 3.25 0 0 1 3 3.75v-1c0-.41.34-.75.75-.75ZM9.5 2h5v5h-5V2Zm11.5.75a.75.75 0 0 0-.75-.75H16v5h1.75C19.55 7 21 5.54 21 3.75v-1ZM20.25 22c.41 0 .75-.34.75-.75v-1c0-1.8-1.46-3.25-3.25-3.25H16v5h4.25ZM9.5 22h5v-5h-5v5Zm-5.75 0H8v-5H6.25A3.25 3.25 0 0 0 3 20.25v1c0 .41.34.75.75.75Zm11.77-9.25h5.73a.75.75 0 0 0 0-1.5h-5.73l-.07.08-.67.67.67.67.07.08Zm-6.8 0 .08-.08.67-.67-.67-.67a1.85 1.85 0 0 1-.07-.08H2.75a.75.75 0 0 0 0 1.5h5.98Zm5.81 1.78c-.3.3-.77.3-1.06 0L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 1 1 1.06-1.06L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47c.3.3.3.77 0 1.06Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow24FilledIcon, 'TableDeleteRow24Filled');

const TableDeleteRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 2a.75.75 0 0 0-.75.75v1C3 5.55 4.46 7 6.25 7h11.5C19.55 7 21 5.54 21 3.75v-1a.75.75 0 0 0-1.5 0v1c0 .97-.78 1.75-1.75 1.75H15.5V2.75a.75.75 0 0 0-1.5 0V5.5h-4V2.75a.75.75 0 0 0-1.5 0V5.5H6.25c-.97 0-1.75-.78-1.75-1.75v-1A.75.75 0 0 0 3.75 2Zm0 20a.75.75 0 0 1-.75-.75v-1C3 18.45 4.46 17 6.25 17h11.5c1.8 0 3.25 1.46 3.25 3.25v1a.75.75 0 0 1-1.5 0v-1c0-.97-.78-1.75-1.75-1.75H15.5v2.75a.75.75 0 0 1-1.5 0V18.5h-4v2.75a.75.75 0 0 1-1.5 0V18.5H6.25c-.97 0-1.75.78-1.75 1.75v1c0 .41-.34.75-.75.75ZM12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 13.06Zm-3.27-.31.07-.08.67-.67-.67-.67a1.85 1.85 0 0 1-.07-.08H2.75a.75.75 0 0 0 0 1.5h5.98Zm6.8 0h5.72a.75.75 0 0 0 0-1.5h-5.73l-.07.08-.67.67.67.67.07.08Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow24RegularIcon, 'TableDeleteRow24Regular');

const TableDeleteRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 4a1 1 0 0 1 1-1h5.5v6H6.75A3.75 3.75 0 0 1 3 5.25V4Zm14 5h-6V3h6v6Zm4.25 0H18.5V3H24a1 1 0 0 1 1 1v1.25A3.75 3.75 0 0 1 21.25 9ZM25 22.75A3.75 3.75 0 0 0 21.25 19H18.5v6H24a1 1 0 0 0 1-1v-1.25ZM17 19h-6v6h6v-6ZM6.75 19H9.5v6H4a1 1 0 0 1-1-1v-1.25A3.75 3.75 0 0 1 6.75 19Zm-4-5.75h7.73l.07.08.67.67-.67.67-.07.08H2.75a.75.75 0 0 1 0-1.5Zm14.45.08.07-.08h7.98a.75.75 0 0 1 0 1.5h-7.98a1.83 1.83 0 0 0-.07-.08l-.67-.67.67-.67Zm-4.67-1.86a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow28FilledIcon, 'TableDeleteRow28Filled');

const TableDeleteRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.75 13.25h7.73l.07.08.67.67-.67.67-.07.08H2.75a.75.75 0 0 1 0-1.5Zm14.45.08.07-.08h7.98a.75.75 0 0 1 0 1.5h-7.98a1.83 1.83 0 0 0-.07-.08l-.67-.67.67-.67Zm-4.67-1.86a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47ZM25 3.75a.75.75 0 0 0-1.5 0v1.5c0 1.24-1 2.25-2.25 2.25H18.5V3.75a.75.75 0 0 0-1.5 0V7.5h-6V3.75a.75.75 0 0 0-1.5 0V7.5H6.75c-1.24 0-2.25-1-2.25-2.25v-1.5a.75.75 0 0 0-1.5 0v1.5A3.75 3.75 0 0 0 6.75 9h14.5A3.75 3.75 0 0 0 25 5.25v-1.5Zm0 19A3.75 3.75 0 0 0 21.25 19H6.75A3.75 3.75 0 0 0 3 22.75v2.5a.75.75 0 0 0 1.5 0v-2.5c0-1.24 1-2.25 2.25-2.25H9.5v4.75a.75.75 0 0 0 1.5 0V20.5h6v4.75a.75.75 0 0 0 1.5 0V20.5h2.75c1.24 0 2.25 1 2.25 2.25v2.5a.75.75 0 0 0 1.5 0v-2.5Z",
    fill: primaryFill
  }));
};

exports.TableDeleteRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableDeleteRow28RegularIcon, 'TableDeleteRow28Regular');

const TableDismiss16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 1.34c.37-.52.82-.97 1.34-1.34H6v1.34ZM5 11H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm1 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TableDismiss16Filled = wrapIcon_1.default( /*#__PURE__*/TableDismiss16FilledIcon, 'TableDismiss16Filled');

const TableDismiss16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v1.76A5.48 5.48 0 0 0 7.34 6H6v1.34A5.47 5.47 0 0 0 6.26 14H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 11H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm0-5H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2Zm2 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TableDismiss16Regular = wrapIcon_1.default( /*#__PURE__*/TableDismiss16RegularIcon, 'TableDismiss16Regular');

const TableDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm2.6 0A5.52 5.52 0 0 1 12 9.6V8H8v4h1.6Zm4.9-3c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2ZM9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5ZM7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm12 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TableDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/TableDismiss20FilledIcon, 'TableDismiss20Filled');

const TableDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H8v-3h1.2c.1-.35.24-.68.4-1H8V8h4v1.6c.32-.16.65-.3 1-.4V8h3v1.2c.35.1.68.24 1 .4V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 4v3H8V4h4Zm1 0H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.36A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Zm12 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TableDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/TableDismiss20RegularIcon, 'TableDismiss20Regular');

const TableDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h2.52a6.47 6.47 0 0 1-.85-5H9.5v5ZM21 9.5v2.52a6.47 6.47 0 0 0-5-.85V9.5h5Zm-6.5 0v2.23a6.53 6.53 0 0 0-2.77 2.77H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm20 1.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z",
    fill: primaryFill
  }));
};

exports.TableDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/TableDismiss24FilledIcon, 'TableDismiss24Filled');

const TableDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm18.5 2a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-5.5-.7-1.65-1.65a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64Z",
    fill: primaryFill
  }));
};

exports.TableDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/TableDismiss24RegularIcon, 'TableDismiss24Regular');

const TableDismiss28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h3.5a7.47 7.47 0 0 1-1.23-6.5H11V25Zm14-14v3.5a7.47 7.47 0 0 0-6.5-1.23V11H25Zm-8 0v2.87A7.53 7.53 0 0 0 13.87 17H11v-6h6Zm8-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm10 17.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z",
    fill: primaryFill
  }));
};

exports.TableDismiss28Filled = wrapIcon_1.default( /*#__PURE__*/TableDismiss28FilledIcon, 'TableDismiss28Filled');

const TableDismiss28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v7.75a7.49 7.49 0 0 0-1.5-.88V11h-5v2.27c-.53.14-1.03.35-1.5.6V11h-6v6h2.87c-.25.47-.46.97-.6 1.5H11v5h2.62c.24.54.53 1.04.88 1.5H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm14-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm17.5 16a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z",
    fill: primaryFill
  }));
};

exports.TableDismiss28Regular = wrapIcon_1.default( /*#__PURE__*/TableDismiss28RegularIcon, 'TableDismiss28Regular');

const TableEdit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 4V6h4v.94L6.94 10H6Zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm-7.02 6.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TableEdit16Filled = wrapIcon_1.default( /*#__PURE__*/TableEdit16FilledIcon, 'TableEdit16Filled');

const TableEdit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v.63a2.87 2.87 0 0 0-2.9.71L10 6.94V6H6v4h.94l-.67.67c-.4.41-.7.92-.84 1.49l-.37 1.5c-.03.11-.05.23-.06.34h-.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 11H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm0-5H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2Zm-6.02 6.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.TableEdit16Regular = wrapIcon_1.default( /*#__PURE__*/TableEdit16RegularIcon, 'TableEdit16Regular');

const TableEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.45 13.2a1.87 1.87 0 0 0-2.64-2.65l-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83ZM15.1 9.83c.53-.53 1.21-.8 1.9-.84V8h-4v3.94l2.1-2.1Zm-4.83 4.83L11.94 13H8v4h1.22l.21-.85a3.2 3.2 0 0 1 .84-1.48ZM12 12H8V8h4v4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z",
    fill: primaryFill
  }));
};

exports.TableEdit20Filled = wrapIcon_1.default( /*#__PURE__*/TableEdit20FilledIcon, 'TableEdit20Filled');

const TableEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.72l.21-.85.05-.15H8v-3h3.94L13 11.94V8h3v1.23c.32-.14.66-.21 1-.23V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 8v4H8V8h4Zm0-1H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm8.8 2.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64ZM14.66 17 17 14.65Z",
    fill: primaryFill
  }));
};

exports.TableEdit20Regular = wrapIcon_1.default( /*#__PURE__*/TableEdit20RegularIcon, 'TableEdit20Regular');

const TableEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.49 19.82c.12-.47.36-.9.7-1.25l5.9-5.9a2.27 2.27 0 0 1 3.24 0c.9.9.9 2.34 0 3.23l-5.9 5.9c-.35.35-.78.6-1.25.7l-1.83.47c-.8.2-1.52-.53-1.32-1.32l.46-1.83Zm-3 1.18h1.67l.36-1.42c.16-.65.5-1.24.97-1.72L14.35 16H9.5v5ZM16 9.5v4.85l2.4-2.39a3.28 3.28 0 0 1 2.6-.95V9.5h-5ZM21 8V6.25C21 4.45 19.55 3 17.76 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.45 21 6.25 21H8v-5H3Zm11.5-6.5v5h-5v-5h5Z",
    fill: primaryFill
  }));
};

exports.TableEdit24Filled = wrapIcon_1.default( /*#__PURE__*/TableEdit24FilledIcon, 'TableEdit24Filled');

const TableEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.45 3 6.25 3h11.5C19.55 3 21 4.45 21 6.25v4.76a3.3 3.3 0 0 0-1.5.22V10h-4v4h.85L14 16.35v-.85h-4v4h1.54l-.02.08-.36 1.42H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm5.5 0v4h4v-4h-4Zm5.5-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm15.26-3.3a2.27 2.27 0 0 0-.66.47l-5.9 5.9a2.68 2.68 0 0 0-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-2.57-3.7Z",
    fill: primaryFill
  }));
};

exports.TableEdit24Regular = wrapIcon_1.default( /*#__PURE__*/TableEdit24RegularIcon, 'TableEdit24Regular');

const TableEdit28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h2.17l.35-1.42c.16-.65.5-1.24.97-1.72l2.51-2.5v-.86h-6V25Zm14-14v2.01c-.93-.08-1.9.24-2.6.95L19.35 17h-.86v-6H25Zm0-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Zm6.1 3.67-7.9 7.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l7.9-7.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TableEdit28Filled = wrapIcon_1.default( /*#__PURE__*/TableEdit28FilledIcon, 'TableEdit28Filled');

const TableEdit28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v6.26a3.3 3.3 0 0 0-1.5.22V11h-5v6h.86L17 19.36v-.86h-6v5h2.54l-.02.08-.35 1.42H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm7.5 0v-6h-6v6h6Zm6.5-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm13.6 10.17-7.9 7.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l7.9-7.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TableEdit28Regular = wrapIcon_1.default( /*#__PURE__*/TableEdit28RegularIcon, 'TableEdit28Regular');

const TableFreezeColumn16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 11.5c0 .83-.67 1.5-1.5 1.5H10v-2H6v3h5.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H6v3h4V3h1.5c.83 0 1.5.67 1.5 1.5v7ZM10 10V6H6v4h4ZM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5h3ZM2 6v4h3V6H2Zm0 5.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn16Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn16FilledIcon, 'TableFreezeColumn16Filled');

const TableFreezeColumn16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 14a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7ZM6 3h4v2H6V3Zm0 3h4v4H6V6Zm0 5h4v2H6v-2Zm-1-1H3V6h2v4Zm0-5H3v-.5C3 3.67 3.67 3 4.5 3H5v2Zm-2 6.5V11h2v2h-.5A1.5 1.5 0 0 1 3 11.5ZM11.5 3c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H11V3h.5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn16Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn16RegularIcon, 'TableFreezeColumn16Regular');

const TableFreezeColumn20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 14.5c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3H8v4h4V4h2.5c.83 0 1.5.67 1.5 1.5v9ZM5.5 3H7v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM7 12V8H3v4h4Zm5-4H8v4h4V8Zm-9 5h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn20Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn20FilledIcon, 'TableFreezeColumn20Filled');

const TableFreezeColumn20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 17A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM12 4H8v3h4V4ZM7 4H5.5c-.78 0-1.42.6-1.5 1.36V7h3V4Zm1 4v4h4V8H8Zm-4 4h3V8H4v4Zm4 1v3h4v-3H8Zm-2.5 3H7v-3H4v1.5c0 .78.6 1.42 1.36 1.5h.14Zm9-12H13v12h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5h-.14Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn20Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn20RegularIcon, 'TableFreezeColumn20Regular');

const TableFreezeColumn24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3Zm0 6.5H3v5h5v-5Zm1.5 5v-5h5v5h-5Zm0 1.5h5v3.5h3.25c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H14.5V8h-5V3h8.25C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H9.5v-5ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn24Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn24FilledIcon, 'TableFreezeColumn24Filled');

const TableFreezeColumn24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5Zm-3.25 1.75c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H15.5v15h2.25ZM10 4.5v4h4v-4h-4Zm-1.5 0H6.25c-.97 0-1.75.78-1.75 1.75V8.5h4v-4Zm0 5.5h-4v4h4v-4Zm1.5 4h4v-4h-4v4Zm0 1.5v4h4v-4h-4Zm-1.5 0h-4v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn24Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn24RegularIcon, 'TableFreezeColumn24Regular');

const TableFreezeColumn28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23.5 21.25c0 1.24-1 2.25-2.25 2.25H17v-5h-6V25h10.25A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H11v6.5h6v-5h4.25c1.24 0 2.25 1 2.25 2.25v14.5ZM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3ZM3 17v-6h6.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM11 11v6h6v-6h-6Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn28Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn28FilledIcon, 'TableFreezeColumn28Filled');

const TableFreezeColumn28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.25 25A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5ZM17 4.5v5h-6v-5h6ZM11 17v-6h6v6h-6ZM9.5 4.5v5h-5V6.75c0-1.24 1-2.25 2.25-2.25H9.5ZM4.5 17v-6h5v6h-5Zm2.25 6.5c-1.24 0-2.25-1-2.25-2.25V18.5h5v5H6.75Zm10.25 0h-6v-5h6v5Zm4.25-19c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H18.5v-19h2.75Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumn28Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumn28RegularIcon, 'TableFreezeColumn28Regular');

const TableFreezeColumnAndRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V10h3V6H3V4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H10v-2H6v3h5.5a2.5 2.5 0 0 0 2.5-2.5v-7ZM10 6H6v4h4V6Zm-5 5H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow16FilledIcon, 'TableFreezeColumnAndRow16Filled');

const TableFreezeColumnAndRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7ZM3 6v4h2V6H3Zm3 0v4h4V6H6Zm4 7v-2H6v2h4Zm-5 0v-2H3v.5c0 .83.67 1.5 1.5 1.5H5ZM3 4.5V5h8v8h.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow16RegularIcon, 'TableFreezeColumnAndRow16Regular');

const TableFreezeColumnAndRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9Zm-14 9V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5ZM8 8v4h4V8H8Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow20FilledIcon, 'TableFreezeColumnAndRow20Filled');

const TableFreezeColumnAndRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM4 8v4h3V8H4Zm0 5v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-1h4V8H8v4Zm4 4v-3H8v3h4ZM4 5.5V7h9v9h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36v.14Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow20RegularIcon, 'TableFreezeColumnAndRow20Regular');

const TableFreezeColumnAndRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v8.25h5v-5H4.5V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H14.5V16h-5v5h8.25c1.8 0 3.25-1.46 3.25-3.25V6.25ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Zm1.5-1.5h5v-5h-5v5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow24FilledIcon, 'TableFreezeColumnAndRow24Filled');

const TableFreezeColumnAndRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25ZM15.5 19.5V9.25a.75.75 0 0 0-.75-.75H4.5V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H15.5ZM14 14h-4v-4h4v4Zm-4 1.5h4v4h-4v-4ZM8.5 14h-4v-4h4v4Zm-4 1.5h4v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow24RegularIcon, 'TableFreezeColumnAndRow24Regular');

const TableFreezeColumnAndRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M25 6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75V17h6.5v-6h-5V6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H17v-5h-6V25h10.25A3.75 3.75 0 0 0 25 21.25V6.75ZM3 21.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM11 17h6v-6h-6v6Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow28FilledIcon, 'TableFreezeColumnAndRow28Filled');

const TableFreezeColumnAndRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.25 3A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h14.5ZM4.5 6.75V9.5h14v14h2.75c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H6.75c-1.24 0-2.25 1-2.25 2.25ZM11 17h6v-6h-6v6Zm6 6.5v-5h-6v5h6ZM9.5 11h-5v6h5v-6Zm-5 7.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeColumnAndRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeColumnAndRow28RegularIcon, 'TableFreezeColumnAndRow28Regular');

const TableFreezeRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 3c.83 0 1.5.67 1.5 1.5V6h-2v4h3V4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V10h3V6H3V4.5C3 3.67 3.67 3 4.5 3h7ZM10 6H6v4h4V6Zm-5 5H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm1 3h4v-3H6v3Zm5.5 0H11v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow16FilledIcon, 'TableFreezeRow16Filled');

const TableFreezeRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7ZM3 6v4h2V6H3Zm10-1v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h10ZM6 6v4h4V6H6Zm5 0v4h2V6h-2Zm-1 7v-2H6v2h4Zm-5 0v-2H3v.5c0 .83.67 1.5 1.5 1.5H5Zm6 0h.5c.83 0 1.5-.67 1.5-1.5V11h-2v2Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow16RegularIcon, 'TableFreezeRow16Regular');

const TableFreezeRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 4c.83 0 1.5.67 1.5 1.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9ZM3 14.5V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5Zm9-1.5H8v4h4v-4ZM8 8v4h4V8H8Zm5 9v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow20FilledIcon, 'TableFreezeRow20Filled');

const TableFreezeRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9ZM4 12V8h3v4H4Zm12-5H4V5.36A1.5 1.5 0 0 1 5.5 4h9.14A1.5 1.5 0 0 1 16 5.5V7ZM8 8h4v4H8V8Zm-4 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm4-5v4h-3V8h3Zm0 5V14.64A1.5 1.5 0 0 1 14.5 16H13v-3h3Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow20RegularIcon, 'TableFreezeRow20Regular');

const TableFreezeRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v8.25h5v-5H4.5V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75V9.5H16v5h5V6.25C21 4.45 19.54 3 17.75 3H6.25ZM21 16h-5v5h1.75c1.8 0 3.25-1.46 3.25-3.25V16Zm-6.5-1.5v-5h-5v5h5Zm-5 1.5h5v5h-5v-5ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow24FilledIcon, 'TableFreezeRow24Filled');

const TableFreezeRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75V8.5h-15V6.25ZM10 10h4v4h-4v-4Zm-1.5 0v4h-4v-4h4Zm0 5.5v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4Zm1.5 4v-4h4v4h-4Zm5.5-5.5v-4h4v4h-4Zm0 1.5h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5v-4Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow24RegularIcon, 'TableFreezeRow24Regular');

const TableFreezeRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.25 4.5c1.24 0 2.25 1 2.25 2.25V11h-5v6H25V6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75V17h6.5v-6h-5V6.75c0-1.24 1-2.25 2.25-2.25h14.5ZM3 21.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM17 25h-6v-6.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25ZM11 17h6v-6h-6v6Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow28FilledIcon, 'TableFreezeRow28Filled');

const TableFreezeRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M25 6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75ZM4.5 11h5v6h-5v-6ZM17 17h-6v-6h6v6ZM4.5 18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25V18.5Zm12.5 5h-6v-5h6v5Zm6.5-2.25c0 1.24-1 2.25-2.25 2.25H18.5v-5h5v2.75Zm0-10.25v6h-5v-6h5Zm-19-4.25c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25V9.5h-19V6.75Z",
    fill: primaryFill
  }));
};

exports.TableFreezeRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableFreezeRow28RegularIcon, 'TableFreezeRow28Regular');

const TableImage20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 9c.17 0 .34.01.5.04V8h-4v1h3.5ZM9 16.5V13H8v4h1.04a3.53 3.53 0 0 1-.04-.5Zm.04-4.5A3.5 3.5 0 0 1 12 9.04V8H8v4h1.04ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.TableImage20Filled = wrapIcon_1.default( /*#__PURE__*/TableImage20FilledIcon, 'TableImage20Filled');

const TableImage20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.54a3.53 3.53 0 0 1-.04-.5V16H8v-3h1v-.5c0-.17.01-.34.04-.5H8V8h4v1.04c.16-.03.33-.04.5-.04h.5V8h3v1h.5c.17 0 .34.01.5.04V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 4.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.TableImage20Regular = wrapIcon_1.default( /*#__PURE__*/TableImage20RegularIcon, 'TableImage20Regular');

const TableInsertColumn16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Zm11 0a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM6.5 2C5.67 2 5 2.67 5 3.5V5h6V3.5c0-.83-.67-1.5-1.5-1.5h-3ZM5 10V6h6v4H5Zm0 1h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 5 12.5V11Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn16Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn16FilledIcon, 'TableInsertColumn16Filled');

const TableInsertColumn16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Zm11 0a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM6.5 2C5.67 2 5 2.67 5 3.5v9c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-3ZM6 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V5H6V3.5ZM6 6h4v4H6V6Zm0 5h4v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V11Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn16Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn16RegularIcon, 'TableInsertColumn16Regular');

const TableInsertColumn20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v2h6V5a2 2 0 0 0-2-2H9Zm-2 9V8h6v4H7Zm0 1h6v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn20Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn20FilledIcon, 'TableInsertColumn20Filled');

const TableInsertColumn20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9Zm-1 9V8h4v4H8Zm4-7v2H8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-4 8h4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn20Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn20RegularIcon, 'TableInsertColumn20Regular');

const TableInsertColumn24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0ZM16 5.25C16 4.01 15.1 3 14 3h-4C8.9 3 8 4 8 5.25V8h8V5.25ZM8 14.5v-5h8v5H8ZM8 16v2.75c0 1.24.9 2.25 2 2.25h4c1.1 0 2-1 2-2.25V16H8Zm13 4.25V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn24Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn24FilledIcon, 'TableInsertColumn24Filled');

const TableInsertColumn24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0ZM14.25 3c1.24 0 2.25 1 2.25 2.25v13.5c0 1.24-1 2.25-2.25 2.25h-4.5c-1.24 0-2.25-1-2.25-2.25V5.25C7.5 4.01 8.5 3 9.75 3h4.5ZM15 5.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V8.5h6V5.25ZM9 14h6v-4H9v4Zm0 1.5v3.25c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V15.5H9Zm12 4.75V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn24Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn24RegularIcon, 'TableInsertColumn24Regular');

const TableInsertColumn28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75Zm20.5 0a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM11.75 3A2.75 2.75 0 0 0 9 5.75V9.5h10V5.75A2.75 2.75 0 0 0 16.25 3h-4.5ZM9 17v-6h10v6H9Zm0 1.5h10v3.75A2.75 2.75 0 0 1 16.25 25h-4.5A2.75 2.75 0 0 1 9 22.25V18.5Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn28Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn28FilledIcon, 'TableInsertColumn28Filled');

const TableInsertColumn28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75Zm20.5 0a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM11.75 3A2.75 2.75 0 0 0 9 5.75v16.5A2.75 2.75 0 0 0 11.75 25h4.5A2.75 2.75 0 0 0 19 22.25V5.75A2.75 2.75 0 0 0 16.25 3h-4.5ZM10.5 5.75c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25V10h-7V5.75Zm0 5.75h7v5h-7v-5Zm0 6.5h7v4.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25V18Z",
    fill: primaryFill
  }));
};

exports.TableInsertColumn28Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertColumn28RegularIcon, 'TableInsertColumn28Regular');

const TableInsertRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm0-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM2 9.5c0 .83.67 1.5 1.5 1.5H5V5H3.5C2.67 5 2 5.67 2 6.5v3Zm8 1.5H6V5h4v6Zm1 0V5h1.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H11Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertRow16FilledIcon, 'TableInsertRow16Filled');

const TableInsertRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm0-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM2 9.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-9C2.67 5 2 5.67 2 6.5v3Zm1.5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5H5v4H3.5ZM6 10V6h4v4H6Zm5 0V6h1.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H11Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertRow16RegularIcon, 'TableInsertRow16Regular');

const TableInsertRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h2V7H5a2 2 0 0 0-2 2v2Zm9 2H8V7h4v6Zm1 0V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertRow20FilledIcon, 'TableInsertRow20Filled');

const TableInsertRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Zm9 1H8V8h4v4ZM5 8h2v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 4V8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertRow20RegularIcon, 'TableInsertRow20Regular');

const TableInsertRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 4.5H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM8 8H5.25C4.01 8 3 8.9 3 10v4c0 1.1 1 2 2.25 2H8V8Zm1.5 8h5V8h-5v8Zm9.25 0H16V8h2.75c1.24 0 2.25.9 2.25 2v4c0 1.1-1 2-2.25 2Zm-15 5h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertRow24FilledIcon, 'TableInsertRow24Filled');

const TableInsertRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 3H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5ZM3 9.75C3 8.51 4 7.5 5.25 7.5h13.5c1.24 0 2.25 1 2.25 2.25v4.5c0 1.24-1 2.25-2.25 2.25H5.25c-1.24 0-2.25-1-2.25-2.25v-4.5ZM5.25 9a.75.75 0 0 0-.75.75v4.5c0 .41.34.75.75.75H8.5V9H5.25ZM14 15V9h-4v6h4Zm1.5 0h3.25c.41 0 .75-.34.75-.75v-4.5a.75.75 0 0 0-.75-.75H15.5v6ZM3.75 19.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertRow24RegularIcon, 'TableInsertRow24Regular');

const TableInsertRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75Zm0-20.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75ZM3 16.25A2.75 2.75 0 0 0 5.75 19H9.5V9H5.75A2.75 2.75 0 0 0 3 11.75v4.5ZM17 19h-6V9h6v10Zm1.5 0V9h3.75A2.75 2.75 0 0 1 25 11.75v4.5A2.75 2.75 0 0 1 22.25 19H18.5Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableInsertRow28FilledIcon, 'TableInsertRow28Filled');

const TableInsertRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75Zm0-20.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75ZM3 16.25A2.75 2.75 0 0 0 5.75 19h16.5A2.75 2.75 0 0 0 25 16.25v-4.5A2.75 2.75 0 0 0 22.25 9H5.75A2.75 2.75 0 0 0 3 11.75v4.5Zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25H10v7H5.75Zm5.75 0v-7h5v7h-5Zm6.5 0v-7h4.25c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25H18Z",
    fill: primaryFill
  }));
};

exports.TableInsertRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableInsertRow28RegularIcon, 'TableInsertRow28Regular');

const TableLightning16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6Zm0 4h2.17L6.5 10H6V6Zm0 8v-2.5c0 .8.64 1.5 1.5 1.5h.47l-.25 1H6ZM5 6H2v4h3V6Zm0 5H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm-5.39 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66H9.58a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightning16Filled = wrapIcon_1.default( /*#__PURE__*/TableLightning16FilledIcon, 'TableLightning16Filled');

const TableLightning16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h3.22l.25-1H6v-2h.09c0-.03.02-.05.03-.08L6.5 10H6V6h2.17l.03-.08A1.5 1.5 0 0 1 9.58 5h3.48c.36 0 .69.13.94.33V4.5A2.5 2.5 0 0 0 11.5 2h-7Zm5.08 3H6V3h4v2h-.42ZM3 11h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Zm0-5h2v4H3V6Zm1.5-3H5v2H3v-.5C3 3.67 3.67 3 4.5 3ZM13 4.5V5h-2V3h.5c.83 0 1.5.67 1.5 1.5ZM8.61 12c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66H9.58a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightning16Regular = wrapIcon_1.default( /*#__PURE__*/TableLightning16RegularIcon, 'TableLightning16Regular');

const TableLightning20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.58 9H17V8h-4v1.12c.18-.08.38-.12.58-.12Zm-2.25 3 .67-1.6V8H8v4h3.33Zm-1.21 2.92.8-1.92H8v4h3.5a1.5 1.5 0 0 1-1.38-2.08ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5.61 13c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightning20Filled = wrapIcon_1.default( /*#__PURE__*/TableLightning20FilledIcon, 'TableLightning20Filled');

const TableLightning20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h6a1.5 1.5 0 0 1-1.41-1H8v-3h2.92l.41-1H8V8h4v2.4l.2-.48c.15-.37.45-.65.8-.8V8h3v1h1V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5.61 8c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
    fill: primaryFill
  }));
};

exports.TableLightning20Regular = wrapIcon_1.default( /*#__PURE__*/TableLightning20RegularIcon, 'TableLightning20Regular');

const TableLightning24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h5v-1h-1a1.5 1.5 0 0 1-1.36-2.14l.88-1.86H9.5v5ZM21 9.5V11h-4.68c-.11 0-.22.01-.32.03V9.5h5Zm-6.5 0v3.34l-.78 1.66H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm13.32-4h4.82a.5.5 0 0 1 .44.75L19.75 16h1.5c.64 0 .98.76.56 1.24l-4.82 5.51c-.5.58-1.45.09-1.26-.66L16.5 19h-3a.5.5 0 0 1-.46-.71l2.82-6a.5.5 0 0 1 .46-.29Z",
    fill: primaryFill
  }));
};

exports.TableLightning24Filled = wrapIcon_1.default( /*#__PURE__*/TableLightning24FilledIcon, 'TableLightning24Filled');

const TableLightning24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25V11h-1.5v-1h-4v1.24a1.5 1.5 0 0 0-.54.62L14 13.91V10h-4v4h3.96l-.71 1.5H10v4h2.38c.27.3.66.5 1.12.5h1.72l-.25 1H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4ZM16.32 12h4.82a.5.5 0 0 1 .44.75L19.75 16h1.5c.64 0 .98.76.56 1.24l-4.82 5.51c-.5.58-1.45.09-1.26-.66L16.5 19h-3a.5.5 0 0 1-.46-.71l2.82-6a.5.5 0 0 1 .46-.29Z",
    fill: primaryFill
  }));
};

exports.TableLightning24Regular = wrapIcon_1.default( /*#__PURE__*/TableLightning24RegularIcon, 'TableLightning24Regular');

const TableLightning28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75V9.5h6.5V3H6.75ZM3 17v-6h6.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM17 25h-6v-6.5h4.26l-1.11 2.36A1.5 1.5 0 0 0 15.5 23H17v2Zm8-12v-2h-6.5v2.03c.1-.02.21-.03.32-.03H25Zm-8 1.83V11h-6v6h4.97L17 14.83Zm8-8.08V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75ZM11 3h6v6.5h-6V3Zm7.82 11h6.33a.5.5 0 0 1 .43.75L23.75 18h1.52c.64 0 .98.75.56 1.24l-6.41 7.45c-.52.6-1.5.05-1.25-.7L19.5 22h-4a.5.5 0 0 1-.45-.71l3.31-7a.5.5 0 0 1 .46-.29Z",
    fill: primaryFill
  }));
};

exports.TableLightning28Filled = wrapIcon_1.default( /*#__PURE__*/TableLightning28FilledIcon, 'TableLightning28Filled');

const TableLightning28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h10.7l.66-2H17v.5h-6v-5h4.26l.71-1.5H11v-6h6v3.83l.46-.97c.2-.43.6-.73 1.04-.83V11h5v2H25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM4.5 21.25V18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25ZM9.5 11v6h-5v-6h5Zm11.75-6.5c1.24 0 2.25 1 2.25 2.25V9.5h-5v-5h2.75ZM11 4.5h6v5h-6v-5Zm-4.25 0H9.5v5h-5V6.75c0-1.24 1-2.25 2.25-2.25ZM18.82 14h6.33a.5.5 0 0 1 .43.75L23.75 18h1.52c.64 0 .98.75.56 1.24l-6.41 7.45c-.52.6-1.5.05-1.25-.7L19.5 22h-4a.5.5 0 0 1-.45-.71l3.31-7a.5.5 0 0 1 .46-.29Z",
    fill: primaryFill
  }));
};

exports.TableLightning28Regular = wrapIcon_1.default( /*#__PURE__*/TableLightning28RegularIcon, 'TableLightning28Regular');

const TableLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 4V6h4v3H8.5c-.95 0-1.82.38-2.45 1H6Zm6.5-1c.54 0 1.05.12 1.5.34V6h-3v3h1.5ZM5 11v3h-.5A2.5 2.5 0 0 1 2 11.5V11h3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Zm-5.5 5a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TableLink16Filled = wrapIcon_1.default( /*#__PURE__*/TableLink16FilledIcon, 'TableLink16Filled');

const TableLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v4.84a3.48 3.48 0 0 0-1-.3V6h-2v3h-1V6H6v4h.05A3.49 3.49 0 0 0 5 12.5V11H3v.5c0 .83.67 1.5 1.5 1.5H5v-.5c0 .54.12 1.05.34 1.5H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 6H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2Zm-4.5 5a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.TableLink16Regular = wrapIcon_1.default( /*#__PURE__*/TableLink16RegularIcon, 'TableLink16Regular');

const TableLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 15.5c0 .54.12 1.05.34 1.5H8v-4h2.05A3.49 3.49 0 0 0 9 15.5ZM13 8v4h3.5c.17 0 .34.01.5.04V8h-4Zm-1 4V8H8v4h4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 12.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.TableLink20Filled = wrapIcon_1.default( /*#__PURE__*/TableLink20FilledIcon, 'TableLink20Filled');

const TableLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.84a3.48 3.48 0 0 1-.3-1H8v-3h2.05a3.49 3.49 0 0 1 2.45-1h.5V8h3v4h.5c.17 0 .34.01.5.04V5.5ZM12 8v4H8V8h4Zm-8 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 7.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.TableLink20Regular = wrapIcon_1.default( /*#__PURE__*/TableLink20RegularIcon, 'TableLink20Regular');

const TableLink24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h2.07a4.73 4.73 0 0 1 .3-5H9.5v5ZM21 9.5v4.83a4.74 4.74 0 0 0-1.75-.33H16V9.5h5Zm-6.5 0v4.67c-.3.08-.6.2-.87.33H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm16.25-1a3.75 3.75 0 0 1 .2 7.5h-.2a.75.75 0 0 1-.1-1.49h.1V21a2.25 2.25 0 0 0 .15-4.5h-.15a.75.75 0 0 1-.1-1.5h.1Zm-3.5 0a.75.75 0 0 1 .1 1.5h-.1a2.25 2.25 0 0 0-.15 4.5h.15a.75.75 0 0 1 .1 1.5h-.1a3.75 3.75 0 0 1-.2-7.5h.2Zm3.5 3a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h3.6Z",
    fill: primaryFill
  }));
};

exports.TableLink24Filled = wrapIcon_1.default( /*#__PURE__*/TableLink24FilledIcon, 'TableLink24Filled');

const TableLink24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v8.08c-.47-.18-.97-.3-1.5-.32V10h-4v4a4.74 4.74 0 0 0-3.21 1.5H10v4h1.06c.08.54.26 1.04.5 1.5H6.26A3.25 3.25 0 0 1 3 17.75V6.25ZM14 10h-4v4h4v-4ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm14.75-.5a3.75 3.75 0 0 1 .2 7.5h-.2a.75.75 0 0 1-.1-1.49h.1V21a2.25 2.25 0 0 0 .15-4.5h-.15a.75.75 0 0 1-.1-1.5h.1Zm-3.5 0a.75.75 0 0 1 .1 1.5h-.1a2.25 2.25 0 0 0-.15 4.5h.15a.75.75 0 0 1 .1 1.5h-.1a3.75 3.75 0 0 1-.2-7.5h.2Zm3.5 3a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h3.6Z",
    fill: primaryFill
  }));
};

exports.TableLink24Regular = wrapIcon_1.default( /*#__PURE__*/TableLink24RegularIcon, 'TableLink24Regular');

const TableLink28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h2.57a4.73 4.73 0 0 1 2.06-6.5H11V25Zm14-8v-6h-6.5v6H25Zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Zm.75 9.5a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 22.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM23.25 25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z",
    fill: primaryFill
  }));
};

exports.TableLink28Filled = wrapIcon_1.default( /*#__PURE__*/TableLink28FilledIcon, 'TableLink28Filled');

const TableLink28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v11.58a4.74 4.74 0 0 0-1.75-.33h-5.5c-.76 0-1.48.18-2.12.5H11v5h2.06c.08.54.26 1.04.5 1.5H6.76A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm7.5 0v-6h-6v6h6Zm6.5 0v-6h-5v6h5Zm0-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm8.25 16a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 22.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM23.25 25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z",
    fill: primaryFill
  }));
};

exports.TableLink28Regular = wrapIcon_1.default( /*#__PURE__*/TableLink28RegularIcon, 'TableLink28Regular');

const TableLock16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2H5v3H2v-.5ZM6 5V2h4v3H6ZM2 6h3v4H2V6Zm4 0v4h1a2 2 0 0 1 1.5-1.94V8c0-.77.29-1.47.76-2H6Zm1 5v3H6v-3h1Zm-5 0h3v3h-.5A2.5 2.5 0 0 1 2 11.5V11Zm12-6.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5ZM9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0Zm1 1V8a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLock16Filled = wrapIcon_1.default( /*#__PURE__*/TableLock16FilledIcon, 'TableLock16Filled');

const TableLock16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v1.84A3 3 0 0 0 9.26 6H6v4h1v1H6v2h1v1H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 11H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm0-5H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2ZM9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0Zm1 1V8a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLock16Regular = wrapIcon_1.default( /*#__PURE__*/TableLock16RegularIcon, 'TableLock16Regular');

const TableLock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 9c.55 0 1.06.15 1.5.4V8h-4v2.34A3 3 0 0 1 15.5 9ZM11 14c0-.36.1-.7.27-1H8v4h3v-3Zm1-2H8V8h4v4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm6.5 9v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLock20Filled = wrapIcon_1.default( /*#__PURE__*/TableLock20FilledIcon, 'TableLock20Filled');

const TableLock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3.27a2 2 0 0 1 1.23-.94V12c0-.61.18-1.18.5-1.66V8h3v1.04c.36.06.7.19 1 .36V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 8v4H8V8h4Zm0-1H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm6.5 4v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TableLock20Regular = wrapIcon_1.default( /*#__PURE__*/TableLock20RegularIcon, 'TableLock20Regular');

const TableLock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21H13v-4.5c0-.17.02-.34.05-.5H9.5v5ZM21 9.5v2.05a3.49 3.49 0 0 0-5 0V9.5h5Zm-6.5 0v4.7a2.5 2.5 0 0 0-.5.3H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm12.5-1c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1a2.5 2.5 0 0 0-5 0v1h-.5Zm2-1a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.TableLock24Filled = wrapIcon_1.default( /*#__PURE__*/TableLock24FilledIcon, 'TableLock24Filled');

const TableLock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.3a3.5 3.5 0 0 0-1.5-.9V10h-4v2.2c-.32.52-.5 1.14-.5 1.8v.05a2.5 2.5 0 0 0-1.8 1.45H10v4h3V21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm5.5 0v4h4v-4h-4Zm5.5-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4ZM16 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.TableLock24Regular = wrapIcon_1.default( /*#__PURE__*/TableLock24RegularIcon, 'TableLock24Regular');

const TableLock28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h4v-5c0-.55.15-1.06.4-1.5H11V25Zm14-14v4.06a4 4 0 0 0-6.5-.7V11H25Zm0-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Zm1.5 7H18a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-.5v-1a3 3 0 1 0-6 0v1Zm1.5-1a1.5 1.5 0 0 1 3 0v1h-3v-1Zm3 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.TableLock28Filled = wrapIcon_1.default( /*#__PURE__*/TableLock28FilledIcon, 'TableLock28Filled');

const TableLock28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v8.31a4.02 4.02 0 0 0-1.5-1.52V11h-5v3.35c-.62.7-1 1.64-1 2.65v.04a3 3 0 0 0-2.1 1.46H11v5h4V25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm7.5 0v-6h-6v6h6Zm6.5-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm9 13.5H18a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-.5v-1a3 3 0 1 0-6 0v1Zm1.5-1a1.5 1.5 0 0 1 3 0v1h-3v-1Zm3 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    fill: primaryFill
  }));
};

exports.TableLock28Regular = wrapIcon_1.default( /*#__PURE__*/TableLock28RegularIcon, 'TableLock28Regular');

const TableLock32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 4h1v6H4V9a5 5 0 0 1 5-5Zm3 0h8v6h-8V4Zm0 8h8v4c-.46.6-.78 1.33-.92 2.1a4 4 0 0 0-2.54 1.9H12v-8Zm12 2a5 5 0 0 1 4 2v-4h-6v2.42a4.98 4.98 0 0 1 2-.42Zm-12 8h4v6h-4v-6ZM22 4v6h6V9a5 5 0 0 0-5-5h-1Zm-12 8H4v8h6v-8ZM4 22h6v6H9a5 5 0 0 1-5-5v-1Zm16.5-2.5H20a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0v.5Zm2-.5a1.5 1.5 0 0 1 3 0v.5h-3V19Zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
};

exports.TableLock32Filled = wrapIcon_1.default( /*#__PURE__*/TableLock32FilledIcon, 'TableLock32Filled');

const TableLock32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v7a5.02 5.02 0 0 0-2-1.58V13h-5v2a5 5 0 0 0-1.92 3.1l-.08.03V13h-6v6h4.35a4 4 0 0 0-1.22 2H13v5h3v2H9a5 5 0 0 1-5-5V9Zm5-3a3 3 0 0 0-3 3v2h5V6H9Zm4 0v5h6V6h-6Zm-2 13v-6H6v6h5Zm-5 2v2a3 3 0 0 0 3 3h2v-5H6ZM21 6v5h5V9a3 3 0 0 0-3-3h-2Zm-.5 13.5H20a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0v.5Zm2-.5a1.5 1.5 0 0 1 3 0v.5h-3V19Zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
};

exports.TableLock32Regular = wrapIcon_1.default( /*#__PURE__*/TableLock32RegularIcon, 'TableLock32Regular');

const TableLock48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6h-4.25ZM19 6v10.5h10V6H19Zm-2.5 13H6v10h10.5V19ZM19 29V19h10v9.42a5 5 0 0 0-1 .58h-9Zm18-7c1.96 0 3.73.8 5 2.1V19H31.5v5.67A6.99 6.99 0 0 1 37 22ZM26 33a5 5 0 0 1 .23-1.5H19V42h7v-9Zm-9.5-1.5H6v4.25C6 39.2 8.8 42 12.25 42h4.25V31.5Zm25.5-15v-4.25C42 8.8 39.2 6 35.75 6H31.5v10.5H42ZM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0v1Zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5v-1Zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
};

exports.TableLock48Filled = wrapIcon_1.default( /*#__PURE__*/TableLock48FilledIcon, 'TableLock48Filled');

const TableLock48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M35.75 6C39.2 6 42 8.8 42 12.25V24.1a7 7 0 0 0-2.5-1.64V19.5H31v5.9c-.49.8-.81 1.71-.94 2.69A5 5 0 0 0 26.42 31H19.5v8.5H26V42H12.25A6.25 6.25 0 0 1 6 35.75v-23.5C6 8.8 8.8 6 12.25 6h23.5ZM8.5 19.5v9H17v-9H8.5Zm0 11.5v4.75a3.75 3.75 0 0 0 3.75 3.75H17V31H8.5Zm31-14v-4.75a3.75 3.75 0 0 0-3.75-3.75H31V17h8.5Zm-11-8.5h-9V17h9V8.5ZM17 8.5h-4.75a3.75 3.75 0 0 0-3.75 3.75V17H17V8.5Zm11.5 20v-9h-9v9h9ZM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0v1Zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5v-1Zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
};

exports.TableLock48Regular = wrapIcon_1.default( /*#__PURE__*/TableLock48RegularIcon, 'TableLock48Regular');

const TableMoveAbove16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM11 6h2.5c.28 0 .5.22.5.5V10h-3V6Zm-9 .5c0-.28.22-.5.5-.5H5v4H2V6.5ZM6 10V7.41c.16.06.33.09.5.09a1.5 1.5 0 1 0 3 0c.17 0 .34-.03.5-.09V10H6Zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm5 3v-3H6v3h4Zm1.5 0H11v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5ZM9.85 6.35a.5.5 0 0 1-.7 0l-.65-.64V7.5a.5.5 0 0 1-1 0V5.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove16Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove16FilledIcon, 'TableMoveAbove16Filled');

const TableMoveAbove16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm9 12a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-.5-.5H11a1.5 1.5 0 0 1-1 1.41V10H6V7.41A1.5 1.5 0 0 1 5 6H2.5a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 4.5 14h7ZM3 10V7h2v3H3Zm8-3h2v3h-2V7Zm-1 6H6v-2h4v2Zm-5 0h-.5A1.5 1.5 0 0 1 3 11.5V11h2v2Zm6 0v-2h2v.5c0 .83-.67 1.5-1.5 1.5H11ZM9.85 6.35a.5.5 0 0 1-.7 0l-.65-.64V7.5a.5.5 0 0 1-1 0V5.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove16Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove16RegularIcon, 'TableMoveAbove16Regular');

const TableMoveAbove20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM8 12V8.41c.16.06.33.09.5.09v1a1.5 1.5 0 0 0 3 0v-1c.17 0 .34-.03.5-.09V12H8Zm7 5h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-9 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Zm4.15-9.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove20Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove20FilledIcon, 'TableMoveAbove20Filled');

const TableMoveAbove20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 8h3.88a1.52 1.52 0 0 0 .62.41V12h4V8.41a1.5 1.5 0 0 0 .62-.41h3.88c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5c0-.28.22-.5.5-.5Zm.5 5v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3ZM4 9v3h3V9H4Zm7.15-1.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove20Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove20RegularIcon, 'TableMoveAbove20Regular');

const TableMoveAbove24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5Zm.53 5.22c.14.14.22.33.22.53v4.25h-5v-5h4.25c.2 0 .39.08.53.22ZM14.5 14.5v-4.02c-.25.04-.5.02-.75-.05v.82a1.75 1.75 0 1 1-3.5 0v-.82c-.24.07-.5.09-.75.05v4.02h5Zm-5 1.5h5v5h-5v-5ZM8 14.5v-5H3.75a.75.75 0 0 0-.75.75v4.25h5ZM3 16h5v5H6.25A3.25 3.25 0 0 1 3 17.75V16Zm13 0h5v1.75c0 1.8-1.46 3.25-3.25 3.25H16v-5Zm-1.19-6.75a.75.75 0 0 1-1.06.06l-1-.89v2.83a.75.75 0 0 1-1.5 0V8.42l-1 .9a.75.75 0 0 1-1-1.13l2.25-2a.75.75 0 0 1 1 0l2.25 2c.3.27.34.75.06 1.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove24Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove24FilledIcon, 'TableMoveAbove24Filled');

const TableMoveAbove24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5Zm0 4c.41 0 .75.34.75.75v8.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75v-8.5c0-.41.34-.75.75-.75h4.27A1.75 1.75 0 0 0 10 10.48V14h4v-3.52a1.75 1.75 0 0 0 1.98-1.98h4.27ZM8.5 10h-4v4h4v-4Zm0 5.5h-4v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4Zm5.5 4v-4h-4v4h4Zm1.5 0h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4v4Zm0-9.5v4h4v-4h-4Zm-.69-.75a.75.75 0 0 1-1.06.06l-1-.89v2.83a.75.75 0 0 1-1.5 0V8.42l-1 .9a.75.75 0 0 1-1-1.13l2.25-2a.75.75 0 0 1 1 0l2.25 2c.3.27.34.75.06 1.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove24Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove24RegularIcon, 'TableMoveAbove24Regular');

const TableMoveAbove28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h20.5ZM3 17v-5a1 1 0 0 1 1-1h5.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM17 25h-6v-6.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25ZM24 11a1 1 0 0 1 1 1v5h-6.5v-6H24Zm-13 6h6v-6h-1.25v1a1.75 1.75 0 1 1-3.5 0v-1H11v6Zm4.75-7.69-1-.89V12a.75.75 0 0 1-1.5 0V8.42l-1 .9a.75.75 0 0 1-1-1.13l2.25-2a.75.75 0 0 1 1 0l2.25 2a.75.75 0 0 1-1 1.12Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove28Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove28FilledIcon, 'TableMoveAbove28Filled');

const TableMoveAbove28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.75c0-.41.34-.75.75-.75h20.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75Zm7.44 6.16c.16.18.35.32.56.42V17h6v-6.67a1.75 1.75 0 0 0 .83-.83H24a1 1 0 0 1 1 1v10.75A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V10.5a1 1 0 0 1 1-1h6.17c.07.15.16.29.27.41ZM9.5 11h-5v6h5v-6Zm0 7.5h-5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5Zm1.5 5h6v-5h-6v5Zm10.25 0c1.24 0 2.25-1 2.25-2.25V18.5h-5v5h2.75ZM23.5 17v-6h-5v6h5Zm-7.75-7.69-1-.89V12a.75.75 0 1 1-1.5 0V8.42l-1 .89a.75.75 0 0 1-1-1.12l2.25-2a.75.75 0 0 1 1 0l2.25 2a.75.75 0 0 1-1 1.12Z",
    fill: primaryFill
  }));
};

exports.TableMoveAbove28Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveAbove28RegularIcon, 'TableMoveAbove28Regular');

const TableMoveBelow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11ZM5 10H2.5a.5.5 0 0 1-.5-.5V6h3v4Zm9-.5a.5.5 0 0 1-.5.5H11V6h3v3.5ZM10 6v2.59a1.5 1.5 0 0 0-.5-.09 1.5 1.5 0 1 0-3 0c-.17 0-.34.03-.5.09V6h4Zm1-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11v3ZM6 2v3h4V2H6ZM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2Zm1.65 7.65c.2-.2.5-.2.7 0l.65.64V8.5a.5.5 0 0 1 1 0v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow16Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow16FilledIcon, 'TableMoveBelow16Filled');

const TableMoveBelow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11Zm-9-12A2.5 2.5 0 0 0 2 4.5v5c0 .28.22.5.5.5H5a1.5 1.5 0 0 1 1-1.41V6h4v2.59A1.5 1.5 0 0 1 11 10h2.5a.5.5 0 0 0 .5-.5v-5A2.5 2.5 0 0 0 11.5 2h-7ZM13 6v3h-2V6h2ZM5 9H3V6h2v3Zm1-6h4v2H6V3Zm5 0h.5c.83 0 1.5.67 1.5 1.5V5h-2V3ZM5 3v2H3v-.5C3 3.67 3.67 3 4.5 3H5Zm1.15 6.65c.2-.2.5-.2.7 0l.65.64V8.5a.5.5 0 0 1 1 0v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow16Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow16RegularIcon, 'TableMoveBelow16Regular');

const TableMoveBelow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM12 8v3.59a1.5 1.5 0 0 0-.5-.09v-1a1.5 1.5 0 0 0-3 0v1c-.17 0-.34.03-.5.09V8h4ZM5 3h2v4H3V5c0-1.1.9-2 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm9-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Zm-4.15 9.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow20Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow20FilledIcon, 'TableMoveBelow20Filled');

const TableMoveBelow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13c.28 0 .5.22.5.5Zm-.5-4.5h-3.88a1.5 1.5 0 0 0-.62-.41V8H8v3.59a1.5 1.5 0 0 0-.62.41H3.5a.5.5 0 0 1-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm9 3V8h-3v3h3Zm-7.15 1.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow20Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow20RegularIcon, 'TableMoveBelow20Regular');

const TableMoveBelow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 9.5v4.02c.25-.04.5-.02.75.05v-.82a1.75 1.75 0 1 1 3.5 0v.82c.24-.07.5-.09.75-.05V9.5h-5ZM8 9.5v5H3.75a.75.75 0 0 1-.75-.75V9.5h5ZM9.5 8h5V3h-5v5ZM16 9.5v5h4.25c.41 0 .75-.34.75-.75V9.5h-5ZM21 8h-5V3h1.75C19.55 3 21 4.46 21 6.25V8ZM8 8H3V6.25C3 4.45 4.46 3 6.25 3H8v5ZM3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Zm5.44-4.75a.75.75 0 0 1 1.06-.06l1 .89v-2.83a.75.75 0 0 1 1.5 0v2.83l1-.9a.75.75 0 0 1 1 1.13l-2.25 2a.75.75 0 0 1-1 0l-2.25-2a.75.75 0 0 1-.06-1.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow24Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow24FilledIcon, 'TableMoveBelow24Filled');

const TableMoveBelow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 15.5a.75.75 0 0 1-.75-.75v-8.5C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v8.5c0 .41-.34.75-.75.75h-4.27A1.75 1.75 0 0 0 14 13.52V10h-4v3.52a1.75 1.75 0 0 0-1.98 1.98H3.75Zm6.25-7h4v-4h-4v4Zm9.5 5.5v-4h-4v4h4Zm-4-5.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-7-4H6.25c-.97 0-1.75.78-1.75 1.75V8.5h4v-4Zm-4 9.5h4v-4h-4v4Zm-.75 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Zm5.44-4.75a.75.75 0 0 1 1.06-.06l1 .89v-2.83a.75.75 0 0 1 1.5 0v2.83l1-.9a.75.75 0 0 1 1 1.13l-2.25 2a.75.75 0 0 1-1 0l-2.25-2a.75.75 0 0 1-.06-1.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow24Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow24RegularIcon, 'TableMoveBelow24Regular');

const TableMoveBelow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75ZM25 11v5a1 1 0 0 1-1 1h-5.5v-6H25Zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75ZM11 3h6v6.5h-6V3ZM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3ZM4 17a1 1 0 0 1-1-1v-5h6.5v6H4Zm13-6h-6v6h1.25v-1a1.75 1.75 0 1 1 3.5 0v1H17v-6Zm-4.75 7.69 1 .89V16a.75.75 0 0 1 1.5 0v3.58l1-.9a.75.75 0 0 1 1 1.13l-2.25 2a.75.75 0 0 1-1 0l-2.25-2a.75.75 0 0 1 1-1.12Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow28Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow28FilledIcon, 'TableMoveBelow28Filled');

const TableMoveBelow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M25 24.25c0 .41-.34.75-.75.75H3.75a.75.75 0 0 1 0-1.5h20.5c.41 0 .75.34.75.75Zm-7.44-6.16a1.75 1.75 0 0 0-.56-.42V11h-6v6.67a1.75 1.75 0 0 0-.83.83H4a1 1 0 0 1-1-1V6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75V17.5a1 1 0 0 1-1 1h-6.17a1.75 1.75 0 0 0-.27-.41ZM18.5 17h5v-6h-5v6Zm0-7.5h5V6.75c0-1.24-1-2.25-2.25-2.25H18.5v5Zm-1.5-5h-6v5h6v-5Zm-10.25 0c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5H6.75ZM4.5 11v6h5v-6h-5Zm7.75 7.69 1 .89V16a.75.75 0 0 1 1.5 0v3.58l1-.9a.75.75 0 0 1 1 1.13l-2.25 2a.75.75 0 0 1-1 0l-2.25-2a.75.75 0 1 1 1-1.12Z",
    fill: primaryFill
  }));
};

exports.TableMoveBelow28Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveBelow28RegularIcon, 'TableMoveBelow28Regular');

const TableMoveLeft16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0v11ZM6 5V2.5c0-.28.22-.5.5-.5H10v3H6Zm.5 9a.5.5 0 0 1-.5-.5V11h4v3H6.5Zm3.5-4H7.41c.06-.16.09-.33.09-.5a1.5 1.5 0 1 0 0-3c0-.17-.03-.34-.09-.5H10v4Zm1 1v3h.5a2.5 2.5 0 0 0 2.5-2.5V11h-3Zm3-5h-3v4h3V6Zm0-1.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5ZM6.35 6.15c.2.2.2.5 0 .7l-.64.65H7.5a.5.5 0 0 1 0 1H5.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft16Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft16FilledIcon, 'TableMoveLeft16Filled');

const TableMoveLeft16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0v11Zm12-9A2.5 2.5 0 0 0 11.5 2h-5a.5.5 0 0 0-.5.5V5a1.5 1.5 0 0 1 1.41 1H10v4H7.41A1.5 1.5 0 0 1 6 11v2.5c0 .28.22.5.5.5h5a2.5 2.5 0 0 0 2.5-2.5v-7ZM10 13H7v-2h3v2ZM7 5V3h3v2H7Zm6 1v4h-2V6h2Zm0 5v.5c0 .83-.67 1.5-1.5 1.5H11v-2h2Zm0-6h-2V3h.5c.83 0 1.5.67 1.5 1.5V5ZM6.35 6.15c.2.2.2.5 0 .7l-.64.65H7.5a.5.5 0 0 1 0 1H5.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft16Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft16RegularIcon, 'TableMoveLeft16Regular');

const TableMoveLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13Zm9-4.5H8.41c.06-.16.09-.33.09-.5h1a1.5 1.5 0 0 0 0-3h-1c0-.17-.03-.34-.09-.5H12v4Zm5-7v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm5 9V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft20Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft20FilledIcon, 'TableMoveLeft20Filled');

const TableMoveLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm4.5-.5v-3.88a1.55 1.55 0 0 0 .41-.62H12V8H8.41A1.5 1.5 0 0 0 8 7.38V3.5c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5a.5.5 0 0 1-.5-.5Zm5-.5h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3Zm-3 9h3v-3H9v3ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft20Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft20RegularIcon, 'TableMoveLeft20Regular');

const TableMoveLeft24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 21h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5Zm0-6.5h5v-5h-5v5Zm-5.52-5h4.02v5h-4.02c.04-.25.02-.5-.05-.75h.82a1.75 1.75 0 1 0 0-3.5h-.82c.07-.24.09-.5.05-.75ZM16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5Zm-1.5-5v5h-5V3.75a.75.75 0 0 1 .75-.75h4.25Zm0 13v5h-4.25a.75.75 0 0 1-.75-.75V16h5ZM4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Zm4.75 5.44c.3.27.34.75.06 1.06l-.89 1h2.83a.75.75 0 0 1 0 1.5H8.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.06-.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft24Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft24FilledIcon, 'TableMoveLeft24Filled');

const TableMoveLeft24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Zm4 0c0-.41.34-.75.75-.75h8.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-8.5a.75.75 0 0 1-.75-.75v-4.27A1.75 1.75 0 0 0 10.48 14H14v-4h-3.52A1.75 1.75 0 0 0 8.5 8.02V3.75ZM10 19.5h4v-4h-4v4Zm5.5-4v4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4Zm4-5.5h-4v4h4v-4Zm0-1.5V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4h4Zm-9.5-4v4h4v-4h-4Zm-.75 4.69c.3.27.34.75.06 1.06l-.89 1h2.83a.75.75 0 0 1 0 1.5H8.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.06-.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft24Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft24RegularIcon, 'TableMoveLeft24Regular');

const TableMoveLeft28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM17 25h-5a1 1 0 0 1-1-1v-5.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25ZM25 11v6h-6.5v-6H25Zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75ZM11 4a1 1 0 0 1 1-1h5v6.5h-6V4Zm6 13v-6h-6v1.25h1a1.75 1.75 0 1 1 0 3.5h-1V17h6Zm-7.69-4.75-.89 1H12a.75.75 0 0 1 0 1.5H8.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.12 1Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft28Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft28FilledIcon, 'TableMoveLeft28Filled');

const TableMoveLeft28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 25a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 1.5 0v20.5c0 .41-.34.75-.75.75Zm6.16-7.44c.18-.16.32-.35.42-.56H17v-6h-6.67a1.74 1.74 0 0 0-.83-.83V4a1 1 0 0 1 1-1h10.75A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H10.5a1 1 0 0 1-1-1v-6.17c.15-.07.29-.16.41-.27Zm1.09.94v5h6v-5h-6Zm7.5 0v5h2.75c1.24 0 2.25-1 2.25-2.25V18.5h-5Zm0-1.5h5v-6h-5v6Zm5-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.69 7.75-.89 1H12a.75.75 0 0 1 0 1.5H8.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 1 1 1.12 1Z",
    fill: primaryFill
  }));
};

exports.TableMoveLeft28Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveLeft28RegularIcon, 'TableMoveLeft28Regular');

const TableMoveRight16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM10 11v2.5a.5.5 0 0 1-.5.5H6v-3h4Zm-.5-9c.28 0 .5.22.5.5V5H6V2h3.5ZM6 6h2.59a1.5 1.5 0 0 0-.09.5 1.5 1.5 0 1 0 0 3c0 .17.03.34.09.5H6V6ZM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5h3Zm-3 5h3V6H2v4Zm0 1.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5Zm7.65-1.65a.5.5 0 0 1 0-.7l.64-.65H8.5a.5.5 0 0 1 0-1h1.8l-.65-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7 0Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight16Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveRight16FilledIcon, 'TableMoveRight16Filled');

const TableMoveRight16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Zm-12 9A2.5 2.5 0 0 0 4.5 14h5a.5.5 0 0 0 .5-.5V11a1.5 1.5 0 0 1-1.41-1H6V6h2.59A1.5 1.5 0 0 1 10 5V2.5a.5.5 0 0 0-.5-.5h-5A2.5 2.5 0 0 0 2 4.5v7ZM6 3h3v2H6V3Zm3 8v2H6v-2h3Zm-6-1V6h2v4H3Zm0-5v-.5C3 3.67 3.67 3 4.5 3H5v2H3Zm0 6h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Zm6.65-1.15a.5.5 0 0 1 0-.7l.64-.65H8.5a.5.5 0 0 1 0-1h1.8l-.65-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7 0Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight16Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveRight16RegularIcon, 'TableMoveRight16Regular');

const TableMoveRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM8 8h3.59a1.5 1.5 0 0 0-.09.5h-1a1.5 1.5 0 1 0 0 3h1c0 .17.03.34.09.5H8V8Zm-5 7v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Zm9.65 4.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight20Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveRight20FilledIcon, 'TableMoveRight20Filled');

const TableMoveRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-4.5.5v3.88a1.5 1.5 0 0 0-.41.62H8v4h3.59a1.5 1.5 0 0 0 .41.62v3.88a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5c.28 0 .5.22.5.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-9H8v3h3V4Zm1.65 7.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight20Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveRight20RegularIcon, 'TableMoveRight20Regular');

const TableMoveRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3Zm0 6.5H3v5h5v-5Zm1.5 5v-5h4.02c-.04.25-.02.5.05.75h-.82a1.75 1.75 0 1 0 0 3.5h.82c-.07.24-.09.5-.05.75H9.5ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Zm1.5 5v-5h5v4.25a.75.75 0 0 1-.75.75H9.5Zm0-13V3h4.25c.41 0 .75.34.75.75V8h-5Zm10 12.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v16.5Zm-4.75-5.44a.75.75 0 0 1-.06-1.06l.89-1h-2.83a.75.75 0 0 1 0-1.5h2.83l-.89-1a.75.75 0 1 1 1.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.06.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight24Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveRight24FilledIcon, 'TableMoveRight24Filled');

const TableMoveRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 3.75a.75.75 0 0 0-.75-.75h-8.5A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h8.5c.41 0 .75-.34.75-.75v-4.27A1.75 1.75 0 0 1 13.52 14H10v-4h3.52a1.75 1.75 0 0 1 1.98-1.98V3.75ZM4.5 14v-4h4v4h-4ZM14 8.5h-4v-4h4v4Zm-5.5 0h-4V6.25c0-.97.78-1.75 1.75-1.75H8.5v4Zm0 11H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4v4Zm1.5-4h4v4h-4v-4Zm9.5-11.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0V3.75Zm-4.75 5.44a.75.75 0 0 0-.06 1.06l.89 1h-2.83a.75.75 0 0 0 0 1.5h2.83l-.89 1a.75.75 0 1 0 1.12 1l2-2.25a.75.75 0 0 0 0-1l-2-2.25a.75.75 0 0 0-1.06-.06Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight24Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveRight24RegularIcon, 'TableMoveRight24Regular');

const TableMoveRight28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23.5 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v20.5ZM11 3h5.5c.28 0 .5.22.5.5v6h-6V3ZM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3ZM3 17v-6h6.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25Zm14 3.25a.5.5 0 0 1-.5.5H11v-6.5h6v6ZM11 11v6h6v-1.25h-1a1.75 1.75 0 1 1 0-3.5h1V11h-6Zm7.69 4.75.89-1H16a.75.75 0 0 1 0-1.5h3.58l-.9-1a.75.75 0 0 1 1.13-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.12-1Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight28Filled = wrapIcon_1.default( /*#__PURE__*/TableMoveRight28FilledIcon, 'TableMoveRight28Filled');

const TableMoveRight28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24.25 3c.41 0 .75.34.75.75v20.5a.75.75 0 0 1-1.5 0V3.75c0-.41.34-.75.75-.75Zm-6.16 7.44c-.18.16-.32.35-.42.56H11v6h6.67a1.74 1.74 0 0 0 .83.83V24a1 1 0 0 1-1 1H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3H17.5a1 1 0 0 1 1 1v6.17c-.15.07-.29.16-.41.27ZM17 9.5v-5h-6v5h6Zm-7.5 0v-5H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5Zm0 1.5h-5v6h5v-6Zm-5 10.25c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5v2.75ZM11 23.5h6v-5h-6v5Zm7.69-7.75.89-1H16a.75.75 0 0 1 0-1.5h3.58l-.9-1a.75.75 0 0 1 1.13-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.12-1Z",
    fill: primaryFill
  }));
};

exports.TableMoveRight28Regular = wrapIcon_1.default( /*#__PURE__*/TableMoveRight28RegularIcon, 'TableMoveRight28Regular');

const TableMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 13.5a3.5 3.5 0 0 1-3.5 3.5H5.67c.77.63 1.76 1 2.83 1h5a4.5 4.5 0 0 0 4.5-4.5v-5c0-1.07-.37-2.06-1-2.83v7.83ZM4.5 16H6v-4H2v1.5A2.5 2.5 0 0 0 4.5 16ZM6 7v4H2V7h4Zm5 4H7V7h4v4Zm-4 1h4v4H7v-4Zm5-5v4h4V7h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H12v-4ZM2 6h4V2H4.5A2.5 2.5 0 0 0 2 4.5V6Zm5 0V2h4v4H7Zm5 0V2h1.5A2.5 2.5 0 0 1 16 4.5V6h-4Z",
    fill: primaryFill
  }));
};

exports.TableMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/TableMultiple20FilledIcon, 'TableMultiple20Filled');

const TableMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.67 17h7.84c.95 0 1.82-.39 2.45-1.01l.02-.02A3.49 3.49 0 0 0 17 13.5V5.67c.63.77 1 1.76 1 2.83v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.48 4.48 0 0 1-2.83-1Zm9.6-14.27c.47.47.73 1.1.73 1.77v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 13.5v-9A2.5 2.5 0 0 1 4.5 2h9c.66 0 1.3.26 1.77.73ZM4.5 3h-.14A1.5 1.5 0 0 0 3 4.5V6h3V3H4.5ZM11 3H7v3h4V3Zm4 1.5v-.14A1.5 1.5 0 0 0 13.5 3H12v3h3V4.5ZM7 7v4h4V7H7Zm8 0h-3v4h3V7Zm-8 5v3h4v-3H7Zm8 0h-3v3H13.64A1.5 1.5 0 0 0 15 13.5V12ZM3.5 14.61c.27.25.63.39 1 .39H6v-3H3V13.64c.04.38.22.72.5.97ZM3 7v4h3V7H3Z",
    fill: primaryFill
  }));
};

exports.TableMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/TableMultiple20RegularIcon, 'TableMultiple20Regular');

const TableResizeColumn16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2.05a2.5 2.5 0 0 1 2 2.45v7a2.5 2.5 0 0 1-2 2.45V9.62l.56-.56a1.5 1.5 0 0 0 0-2.12L12 6.38V2.05ZM11 2v3.38A1.5 1.5 0 0 0 8.5 6.5h-1A1.5 1.5 0 0 0 5 5.38V2h6ZM4 13.95V9.62l-.56-.56a1.5 1.5 0 0 1 0-2.12L4 6.38V2.05A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45Zm3.06-3.39a1.5 1.5 0 0 1-2.06.06V14h6v-3.38A1.5 1.5 0 0 1 8.5 9.5h-1c0 .38-.15.77-.44 1.06Zm-.7-4.41c.19.2.19.5 0 .7l-.65.65h4.58l-.64-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H5.71l.64.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn16Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn16FilledIcon, 'TableResizeColumn16Filled');

const TableResizeColumn16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.35 6.15c.2.2.2.5 0 .7l-.64.65h4.58l-.64-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H5.71l.64.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7Zm.5 1.09v3.29l-.94-.94a1.6 1.6 0 0 0-.06-.06V3H5v2.38l-.06.06-.94.94v-3.3c-.58.21-1 .77-1 1.42v7c0 .65.42 1.2 1 1.41V9.62l.94.94.06.06V13h6v-2.38l.06-.06.94-.94v3.3c.58-.21 1-.77 1-1.42v-7c0-.65-.42-1.2-1-1.41Zm-.94 7.47L11 10.5Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn16Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn16RegularIcon, 'TableResizeColumn16Regular');

const TableResizeColumn20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v-4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 0 0-2.12l-1.5-1.5a1.6 1.6 0 0 0-.06-.06V3Zm-1 0v4a1.5 1.5 0 0 0-1.5 1.5h-3A1.5 1.5 0 0 0 7 7V3h6Zm-4.94 9.56c-.3.3-.68.44-1.06.44v4h6v-4a1.5 1.5 0 0 1-1.5-1.5h-3c0 .38-.15.77-.44 1.06ZM6 17v-4.38a1.55 1.55 0 0 1-.06-.06l-1.5-1.5a1.5 1.5 0 0 1 0-2.12l1.5-1.5.06-.06V3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm1.35-8.85c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn20Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn20FilledIcon, 'TableResizeColumn20Filled');

const TableResizeColumn20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.35 8.15c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6Zm-4-2v3c.36 0 .72.13 1 .38V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2v-3.38a1.5 1.5 0 0 1-1 .38v3H7v-3a1.5 1.5 0 0 1-1-.38V16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2v3.38A1.5 1.5 0 0 1 7 7V4h6Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn20Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn20RegularIcon, 'TableResizeColumn20Regular');

const TableResizeColumn24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-.25v-6.65l1.06-1.19c.59-.66.59-1.66 0-2.32l-1.06-1.2V3h.25Zm-3.66 12.56a1.75 1.75 0 0 1-.52-1.81h-3.14A1.75 1.75 0 0 1 8 15.83V21h8v-5.17c-.62.3-1.37.2-1.91-.27Zm0-7.12c.54-.48 1.3-.56 1.91-.27V3H8v5.17a1.75 1.75 0 0 1 2.43 2.08h3.14a1.75 1.75 0 0 1 .52-1.8ZM6.5 9.64V3h-.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h.25v-6.65l-1.06-1.19a1.75 1.75 0 0 1 0-2.32l1.06-1.2Zm9.08 1.61H8.42l.9-1a.75.75 0 0 0-1.13-1l-2 2.25a.75.75 0 0 0 0 1l2 2.25a.75.75 0 1 0 1.12-1l-.89-1h7.16l-.89 1a.75.75 0 1 0 1.12 1l2-2.25.01-.01a.75.75 0 0 0-.01-1l-2-2.24a.75.75 0 0 0-1.12 1l.89 1Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn24Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn24FilledIcon, 'TableResizeColumn24Filled');

const TableResizeColumn24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.58 11.25H8.42l.9-1a.75.75 0 0 0-1.13-1l-2 2.25a.75.75 0 0 0 0 1l2 2.25a.75.75 0 1 0 1.12-1l-.89-1h7.16l-.89 1a.75.75 0 1 0 1.12 1l2-2.25.01-.01a.75.75 0 0 0-.01-1l-2-2.24a.75.75 0 0 0-1.12 1l.89 1ZM17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5Zm1.75 3.25c0-.97-.78-1.75-1.75-1.75h-.25v5.15l-.94-1.06a1.74 1.74 0 0 0-.56-.42V4.5H8v3.67c-.2.1-.4.24-.56.42L6.5 9.65V4.5h-.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h.25v-5.15l.94 1.06c.16.18.35.32.56.42v3.67h8v-3.67c.2-.1.4-.24.56-.42l.94-1.06v5.15h.25c.97 0 1.75-.78 1.75-1.75V6.25Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn24Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn24RegularIcon, 'TableResizeColumn24Regular');

const TableResizeColumn28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 25A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h.75v8.65l-1.06 1.19a1.75 1.75 0 0 0 0 2.32l1.06 1.2V25h-.75ZM9 25v-7.17a1.75 1.75 0 0 0 2.43-2.08h5.14A1.75 1.75 0 0 0 19 17.83V25H9Zm8.09-14.56c.54-.48 1.3-.56 1.91-.27V3H9v7.17a1.75 1.75 0 0 1 2.43 2.08h5.14a1.75 1.75 0 0 1 .52-1.8Zm4.47 4.72-1.06 1.2V25h.75A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3h-.75v8.65l1.05 1.18a1.75 1.75 0 0 1 .03 2.3v.01l-.02.02ZM9.42 13.25h9.16l-.89-1a.75.75 0 0 1 1.12-1l2 2.25a.75.75 0 0 1 .01.99l-2 2.26a.75.75 0 1 1-1.13-1l.89-1H9.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.12 1l-.89 1Zm12.58.68v.14Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn28Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn28FilledIcon, 'TableResizeColumn28Filled');

const TableResizeColumn28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.42 13.25h9.16l-.89-1a.75.75 0 0 1 1.12-1l2 2.25a.75.75 0 0 1 .01.99l-2 2.26a.75.75 0 1 1-1.13-1l.89-1H9.42l.9 1a.75.75 0 0 1-1.13 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.12 1l-.89 1Zm-6.42 8A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5Zm1.5-14.5c0-1.24 1-2.25 2.25-2.25h.75v7.15l.94-1.06c.16-.18.35-.32.56-.42V4.5h10v5.67c.2.1.4.24.56.42l.94 1.06V4.5h.75c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-.75v-7.15l-.94 1.06c-.16.18-.35.32-.56.42v5.67H9v-5.67c-.2-.1-.4-.24-.56-.42l-.94-1.06v7.15h-.75c-1.24 0-2.25-1-2.25-2.25V6.75Z",
    fill: primaryFill
  }));
};

exports.TableResizeColumn28Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeColumn28RegularIcon, 'TableResizeColumn28Regular');

const TableResizeRow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.95 12a2.5 2.5 0 0 1-2.45 2h-7a2.5 2.5 0 0 1-2.45-2h4.33l.56.56a1.5 1.5 0 0 0 2.12 0l.56-.56h4.33Zm.05-1h-3.38A1.5 1.5 0 0 0 9.5 8.5v-1A1.5 1.5 0 0 0 10.62 5H14v6ZM2.05 4h4.33l.56-.56a1.5 1.5 0 0 1 2.12 0l.56.56h4.33a2.5 2.5 0 0 0-2.45-2h-7a2.5 2.5 0 0 0-2.45 2Zm3.39 3.06A1.5 1.5 0 0 1 5.38 5H2v6h3.38A1.5 1.5 0 0 1 6.5 8.5v-1a1.5 1.5 0 0 1-1.06-.44Zm4.41-.7a.5.5 0 0 1-.7 0L8.5 5.7v4.58l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V5.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow16Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeRow16FilledIcon, 'TableResizeRow16Filled');

const TableResizeRow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.85 6.35a.5.5 0 0 1-.7 0l-.65-.64v4.58l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V5.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7ZM14 11.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7Zm-1.09.5H9.62l.94-.94.06-.06H13V5h-2.38a1.55 1.55 0 0 0-.06-.06L9.62 4h3.3c-.21-.58-.77-1-1.42-1h-7c-.65 0-1.2.42-1.41 1h3.29l-.94.94-.06.06H3v6h2.38l.06.06.94.94h-3.3c.21.58.77 1 1.42 1h7c.65 0 1.2-.42 1.41-1Zm-7.47-.94L5.5 11Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow16Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeRow16RegularIcon, 'TableResizeRow16Regular');

const TableResizeRow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3h4.38l.06.06 1.5 1.5a1.5 1.5 0 0 0 2.12 0l1.5-1.5.06-.06H17Zm0-1h-4a1.5 1.5 0 0 0-1.5-1.5v-3A1.5 1.5 0 0 0 13 7h4v6ZM7.44 8.06A1.5 1.5 0 0 1 7 7H3v6h4a1.5 1.5 0 0 1 1.5-1.5v-3a1.5 1.5 0 0 1-1.06-.44ZM3 6h4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 1 2.12 0l1.5 1.5.06.06H17a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm8.85 1.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow20Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeRow20FilledIcon, 'TableResizeRow20Filled');

const TableResizeRow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.85 7.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7ZM14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8Zm2-4h-3c0 .36-.13.72-.38 1H16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2h3.38A1.5 1.5 0 0 1 7 13H4V7h3c0-.36.13-.72.38-1H4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h-3.38c.25.28.38.64.38 1h3v6Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow20Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeRow20RegularIcon, 'TableResizeRow20Regular');

const TableResizeRow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75v-.25h6.65l1.19 1.06c.66.59 1.66.59 2.32 0l1.2-1.06H21v.25ZM8.44 14.09c.47-.53 1.18-.7 1.81-.52v-3.14A1.75 1.75 0 0 1 8.17 8H3v8h5.17c-.3-.62-.2-1.37.27-1.91Zm5.31-3.66v3.14A1.75 1.75 0 0 1 15.83 16H21V8h-5.17a1.75 1.75 0 0 1-2.08 2.43Zm.6-3.93H21v-.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v.25h6.65l1.19-1.06a1.75 1.75 0 0 1 2.32 0l1.2 1.06Zm-1.6 9.08V8.42l1 .9a.75.75 0 0 0 1-1.13l-2.25-2a.75.75 0 0 0-1 0l-2.25 2a.75.75 0 1 0 1 1.12l1-.89v7.16l-1-.89a.75.75 0 1 0-1 1.12l2.25 2 .01.01a.75.75 0 0 0 1-.01l2.24-2a.75.75 0 0 0-1-1.12l-1 .89Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow24Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeRow24FilledIcon, 'TableResizeRow24Filled');

const TableResizeRow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.75 15.58V8.42l1 .9a.75.75 0 0 0 1-1.13l-2.25-2a.75.75 0 0 0-1 0l-2.25 2a.75.75 0 1 0 1 1.12l1-.89v7.16l-1-.89a.75.75 0 1 0-1 1.12l2.25 2 .01.01a.75.75 0 0 0 1-.01l2.24-2a.75.75 0 0 0-1-1.12l-1 .89Zm5 5.42c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5Zm1.75-3.25c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75v-.25h5.15l-1.06-.94a1.75 1.75 0 0 1-.42-.56H4.5V8h3.67c.1-.2.24-.4.42-.56l1.06-.94H4.5v-.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v.25h-5.15l1.06.94c.18.16.32.35.42.56h3.67v8h-3.67c-.1.2-.24.4-.42.56l-1.06.94h5.15v.25Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow24Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeRow24RegularIcon, 'TableResizeRow24Regular');

const TableResizeRow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v.75h-8.65l-1.19-1.06a1.75 1.75 0 0 0-2.32 0l-1.2 1.06H3v-.75ZM3 9h7.17a1.75 1.75 0 0 0 2.08 2.43v5.14A1.75 1.75 0 0 0 10.17 19H3V9Zm14.56 8.09c.48.54.56 1.3.27 1.91H25V9h-7.17a1.75 1.75 0 0 1-2.08 2.43v5.14a1.75 1.75 0 0 1 1.8.52Zm-4.72 4.47-1.2-1.06H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25v-.75h-8.65l-1.18 1.05a1.75 1.75 0 0 1-2.3.03h-.01l-.02-.02Zm1.91-12.14v9.16l1-.89a.75.75 0 0 1 1 1.12l-2.25 2a.75.75 0 0 1-.99.01l-2.26-2a.75.75 0 1 1 1-1.13l1 .89V9.42l-1 .9a.75.75 0 0 1-1-1.13l2.25-2a.75.75 0 0 1 1 0l2.25 2a.75.75 0 0 1-1 1.12l-1-.89ZM14.07 22h-.14Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow28Filled = wrapIcon_1.default( /*#__PURE__*/TableResizeRow28FilledIcon, 'TableResizeRow28Filled');

const TableResizeRow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.75 9.42v9.16l1-.89a.75.75 0 0 1 1 1.12l-2.25 2a.75.75 0 0 1-.99.01l-2.26-2a.75.75 0 1 1 1-1.13l1 .89V9.42l-1 .9a.75.75 0 0 1-1-1.13l2.25-2a.75.75 0 0 1 1 0l2.25 2a.75.75 0 0 1-1 1.12l-1-.89ZM6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75Zm14.5 1.5c1.24 0 2.25 1 2.25 2.25v.75h-7.15l1.06.94c.18.16.32.35.42.56h5.67v10h-5.67c-.1.2-.24.4-.42.56l-1.06.94h7.15v.75c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25v-.75h7.15l-1.06-.94a1.75 1.75 0 0 1-.42-.56H4.5V9h5.67c.1-.2.24-.4.42-.56l1.06-.94H4.5v-.75c0-1.24 1-2.25 2.25-2.25h14.5Z",
    fill: primaryFill
  }));
};

exports.TableResizeRow28Regular = wrapIcon_1.default( /*#__PURE__*/TableResizeRow28RegularIcon, 'TableResizeRow28Regular');

const TableSearch20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 12V8h4v4h-4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 12H8.74A4.5 4.5 0 0 0 8 10.67V8h4v4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.56 15.44 10.12 17H12v-4H8.97a4.55 4.55 0 0 1-.4 2.44Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 9c.93 0 1.78.28 2.5.76V8H3v1.26A4.5 4.5 0 0 1 4.5 9Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 3v4H8V3h4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    fill: primaryFill
  }));
};

exports.TableSearch20Filled = wrapIcon_1.default( /*#__PURE__*/TableSearch20FilledIcon, 'TableSearch20Filled');

const TableSearch20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.76c.32-.12.66-.2 1-.23V8h3v1.76a4.51 4.51 0 0 1 1 .91V8h4v4H8.74a4.5 4.5 0 0 1 .23 1H12v3H9.12l1 1h4.38a2.5 2.5 0 0 0 2.5-2.5v-9ZM14.5 16H13v-3h3V14.64A1.5 1.5 0 0 1 14.5 16ZM13 8h3v4h-3V8Zm-1-1H8V4h4v3Zm1-3h1.65A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm-2.62 4.9a3.5 3.5 0 0 0 5.22 4.4l2.54 2.56a.5.5 0 0 0 .71-.71L7.3 15.6a3.5 3.5 0 1 0-5.92-3.7Zm5.2.21a2.5 2.5 0 1 1-4.16 2.78 2.5 2.5 0 0 1 4.16-2.78Z",
    fill: primaryFill
  }));
};

exports.TableSearch20Regular = wrapIcon_1.default( /*#__PURE__*/TableSearch20RegularIcon, 'TableSearch20Regular');

const TableSettings16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2h-.5ZM6 2v3h4V2H6ZM5 6H2v4h3V6Zm1 1.34c.37-.52.82-.97 1.34-1.34H6v1.34ZM5 11H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3ZM8.06 7.44a2 2 0 0 1-1.43 2.48l-.46.12a4.71 4.71 0 0 0 .01 1.01l.35.09A2 2 0 0 1 8 13.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 13 7.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettings16Filled = wrapIcon_1.default( /*#__PURE__*/TableSettings16FilledIcon, 'TableSettings16Filled');

const TableSettings16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v1.76A5.48 5.48 0 0 0 7.34 6H6v1.34A5.47 5.47 0 0 0 6.26 14H4.5A2.5 2.5 0 0 1 2 11.5v-7ZM5 11H3v.5c0 .83.67 1.5 1.5 1.5H5v-2Zm0-5H3v4h2V6Zm1-1h4V3H6v2ZM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3Zm8 2v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2ZM8.06 7.44a2 2 0 0 1-1.43 2.48l-.46.12a4.71 4.71 0 0 0 .01 1.01l.35.09A2 2 0 0 1 8 13.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 13 7.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettings16Regular = wrapIcon_1.default( /*#__PURE__*/TableSettings16RegularIcon, 'TableSettings16Regular');

const TableSettings20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 9.6a5.48 5.48 0 0 0-4-.4V8h4v1.6ZM9.2 13a5.5 5.5 0 0 0 .4 4H8v-4h1.2ZM12 9.6A5.52 5.52 0 0 0 9.6 12H8V8h4v1.6ZM7 8v4H3V8h4Zm0 5H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm10-6h-4V3h1.5A2.5 2.5 0 0 1 17 5.5V7Zm-5 0V3H8v4h4ZM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7h4Zm5.06 4.44a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettings20Filled = wrapIcon_1.default( /*#__PURE__*/TableSettings20FilledIcon, 'TableSettings20Filled');

const TableSettings20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V8h-3v1.2c-.35.1-.68.24-1 .4V8H8v4h1.6c-.16.32-.3.65-.4 1H8v3h1.2c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-6h4V4H8v3Zm6.5-3H13v3h3V5.5c0-.78-.6-1.42-1.36-1.5h-.14ZM4 5.5V7h3V4H5.5c-.78 0-1.42.6-1.5 1.36v.14ZM7 12V8H4v4h3Zm5.06-.56a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.TableSettings20Regular = wrapIcon_1.default( /*#__PURE__*/TableSettings20RegularIcon, 'TableSettings20Regular');

const TableSettings24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 21h2.52a6.47 6.47 0 0 1-.85-5H9.5v5ZM21 9.5v2.52a6.47 6.47 0 0 0-5-.85V9.5h5Zm-6.5 0v2.23a6.53 6.53 0 0 0-2.77 2.77H9.5v-5h5ZM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3Zm11.28-2.02a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.72 5.72 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.TableSettings24Filled = wrapIcon_1.default( /*#__PURE__*/TableSettings24FilledIcon, 'TableSettings24Filled');

const TableSettings24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm9.78-1.52a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.72 5.72 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.TableSettings24Regular = wrapIcon_1.default( /*#__PURE__*/TableSettings24RegularIcon, 'TableSettings24Regular');

const TableSettings28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3Zm8 6.5h3.5a7.47 7.47 0 0 1-1.23-6.5H11V25Zm14-14v3.5a7.47 7.47 0 0 0-6.5-1.23V11H25Zm-8 0v2.87A7.53 7.53 0 0 0 13.87 17H11v-6h6Zm8-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm-.2 13.7a2 2 0 0 1-1.45 2.5l-1.02.25a6.8 6.8 0 0 0 0 2.15l.98.23a2 2 0 0 1 1.45 2.52l-.32 1.1c.52.45 1.11.83 1.75 1.1l.85-.9a2 2 0 0 1 2.9 0l.85.9a6.2 6.2 0 0 0 1.75-1.09l-.34-1.16a2 2 0 0 1 1.44-2.5l1.03-.25a6.8 6.8 0 0 0 0-2.15l-.99-.23a2 2 0 0 1-1.45-2.51l.33-1.1a6.2 6.2 0 0 0-1.75-1.1l-.85.88a2 2 0 0 1-2.9 0l-.85-.9a6.2 6.2 0 0 0-1.75 1.1l.34 1.16Zm3.7 5.3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.TableSettings28Filled = wrapIcon_1.default( /*#__PURE__*/TableSettings28FilledIcon, 'TableSettings28Filled');

const TableSettings28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v7.75a7.49 7.49 0 0 0-1.5-.88V11h-5v2.27c-.53.14-1.03.35-1.5.6V11h-6v6h2.87c-.25.47-.46.97-.6 1.5H11v5h2.62c.24.54.53 1.04.88 1.5H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm14-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5Zm7.3 12.2a2 2 0 0 1-1.45 2.5l-1.02.25a6.8 6.8 0 0 0 0 2.15l.98.23a2 2 0 0 1 1.45 2.52l-.32 1.1c.52.45 1.11.83 1.75 1.1l.85-.9a2 2 0 0 1 2.9 0l.85.9a6.2 6.2 0 0 0 1.75-1.09l-.34-1.16a2 2 0 0 1 1.44-2.5l1.03-.25a6.8 6.8 0 0 0 0-2.15l-.99-.23a2 2 0 0 1-1.45-2.51l.33-1.1a6.2 6.2 0 0 0-1.75-1.1l-.85.88a2 2 0 0 1-2.9 0l-.85-.9a6.2 6.2 0 0 0-1.75 1.1l.34 1.16Zm3.7 5.3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: primaryFill
  }));
};

exports.TableSettings28Regular = wrapIcon_1.default( /*#__PURE__*/TableSettings28RegularIcon, 'TableSettings28Regular');

const TableSimple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v3h5.5V2h-3Zm3 6.5H2v3A2.5 2.5 0 0 0 4.5 14h3V8.5Zm1 0H14v3a2.5 2.5 0 0 1-2.5 2.5h-3V8.5Zm5.5-1v-3A2.5 2.5 0 0 0 11.5 2h-3v5.5H14Z",
    fill: primaryFill
  }));
};

exports.TableSimple16Filled = wrapIcon_1.default( /*#__PURE__*/TableSimple16FilledIcon, 'TableSimple16Filled');

const TableSimple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5Zm1 4h4.5V13h-3A1.5 1.5 0 0 1 3 11.5v-3Zm4.5-1H3v-3C3 3.67 3.67 3 4.5 3h3v4.5Zm1 1H13v3c0 .83-.67 1.5-1.5 1.5h-3V8.5Zm4.5-1H8.5V3h3c.83 0 1.5.67 1.5 1.5v3Z",
    fill: primaryFill
  }));
};

exports.TableSimple16Regular = wrapIcon_1.default( /*#__PURE__*/TableSimple16RegularIcon, 'TableSimple16Regular');

const TableSimple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3h-4Zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4v-6.5Zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4v-6.5Zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5H17Z",
    fill: primaryFill
  }));
};

exports.TableSimple20Filled = wrapIcon_1.default( /*#__PURE__*/TableSimple20FilledIcon, 'TableSimple20Filled');

const TableSimple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1 5v4c0 .83.67 1.5 1.5 1.5h4v-5.5H4Zm5.5-1V4h-4C4.67 4 4 4.67 4 5.5v4h5.5Zm1 1V16h4c.83 0 1.5-.67 1.5-1.5v-4h-5.5Zm5.5-1v-4c0-.83-.67-1.5-1.5-1.5h-4v5.5H16Z",
    fill: primaryFill
  }));
};

exports.TableSimple20Regular = wrapIcon_1.default( /*#__PURE__*/TableSimple20RegularIcon, 'TableSimple20Regular');

const TableSimple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.75 21h-5v-8.25H21v5c0 1.8-1.46 3.25-3.25 3.25ZM21 11.25h-8.25V3h5C19.55 3 21 4.46 21 6.25v5Zm-9.75 0V3h-5A3.25 3.25 0 0 0 3 6.25v5h8.25ZM3 12.75v5C3 19.55 4.46 21 6.25 21h5v-8.25H3Z",
    fill: primaryFill
  }));
};

exports.TableSimple24Filled = wrapIcon_1.default( /*#__PURE__*/TableSimple24FilledIcon, 'TableSimple24Filled');

const TableSimple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v5h6.75V4.5h-5Zm5 8.25H4.5v5c0 .97.78 1.75 1.75 1.75h5v-6.75Zm1.5 0v6.75h5c.97 0 1.75-.78 1.75-1.75v-5h-6.75Zm6.75-1.5v-5c0-.97-.78-1.75-1.75-1.75h-5v6.75h6.75Z",
    fill: primaryFill
  }));
};

exports.TableSimple24Regular = wrapIcon_1.default( /*#__PURE__*/TableSimple24RegularIcon, 'TableSimple24Regular');

const TableSimple28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h6.5v10.25H3v-6.5Zm0 8v6.5A3.75 3.75 0 0 0 6.75 25h6.5V14.75H3ZM14.75 25h6.5A3.75 3.75 0 0 0 25 21.25v-6.5H14.75V25ZM25 13.25v-6.5A3.75 3.75 0 0 0 21.25 3h-6.5v10.25H25Z",
    fill: primaryFill
  }));
};

exports.TableSimple28Filled = wrapIcon_1.default( /*#__PURE__*/TableSimple28FilledIcon, 'TableSimple28Filled');

const TableSimple28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3Zm6.5 1.5h-6.5c-1.24 0-2.25 1-2.25 2.25v6.5h8.75V4.5ZM4.5 14.75v6.5c0 1.24 1 2.25 2.25 2.25h6.5v-8.75H4.5Zm10.25 8.75h6.5c1.24 0 2.25-1 2.25-2.25v-6.5h-8.75v8.75Zm8.75-10.25v-6.5c0-1.24-1-2.25-2.25-2.25h-6.5v8.75h8.75Z",
    fill: primaryFill
  }));
};

exports.TableSimple28Regular = wrapIcon_1.default( /*#__PURE__*/TableSimple28RegularIcon, 'TableSimple28Regular');

const TableSimple48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 10.75A4.75 4.75 0 0 1 10.75 6h12v16.75H6v-12Zm0 14.5v12A4.75 4.75 0 0 0 10.75 42h12V25.25H6ZM25.25 42h12A4.75 4.75 0 0 0 42 37.25v-12H25.25V42ZM42 22.75v-12A4.75 4.75 0 0 0 37.25 6h-12v16.75H42Z",
    fill: primaryFill
  }));
};

exports.TableSimple48Filled = wrapIcon_1.default( /*#__PURE__*/TableSimple48FilledIcon, 'TableSimple48Filled');

const TableSimple48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 0 1 6 36.75v-25.5C6 8.35 8.35 6 11.25 6ZM23 8.5H11.25a2.75 2.75 0 0 0-2.75 2.75v11.5H23V8.5ZM8.5 25.25v11.5a2.75 2.75 0 0 0 2.75 2.75H23V25.25H8.5Zm17 14.25h11.25a2.75 2.75 0 0 0 2.75-2.75v-11.5h-14V39.5Zm14-16.75v-11.5a2.75 2.75 0 0 0-2.75-2.75H25.5v14.25h14Z",
    fill: primaryFill
  }));
};

exports.TableSimple48Regular = wrapIcon_1.default( /*#__PURE__*/TableSimple48RegularIcon, 'TableSimple48Regular');

const TableSimpleCheckmark16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 14h3a2.5 2.5 0 0 0 2.5-2.5v-3H8.5V14Zm0-6.5H14v-3A2.5 2.5 0 0 0 11.5 2h-3v5.5ZM7.5 2v5.5H2v-3A2.5 2.5 0 0 1 4.5 2h3ZM2 11.5v-3h5.5V14h-3A2.5 2.5 0 0 1 2 11.5Zm10.85-.65-1.5 1.5a.5.5 0 0 1-.7 0l-.75-.75a.5.5 0 0 1 .7-.7l.4.4 1.15-1.15a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark16Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark16FilledIcon, 'TableSimpleCheckmark16Filled');

const TableSimpleCheckmark16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h3v4.5H3v-3Zm0 4h4.5V13h-3A1.5 1.5 0 0 1 3 11.5v-3Zm5.5-1V3h3c.83 0 1.5.67 1.5 1.5v3H8.5Zm3.6 2.15c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7 0l-.75-.75a.5.5 0 0 1 .7-.7l.4.4 1.15-1.15c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark16Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark16RegularIcon, 'TableSimpleCheckmark16Regular');

const TableSimpleCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3Zm3-7.5h-6.5V3H14a3 3 0 0 1 3 3v3.5Zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5h6.5Zm0 7.5v-6.5H3V14a3 3 0 0 0 3 3h3.5Zm5.85-3.9a.5.5 0 0 0-.7-.7l-1.4 1.4-.4-.4a.5.5 0 0 0-.7.7l.75.75c.2.2.5.2.7 0l1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark20FilledIcon, 'TableSimpleCheckmark20Filled');

const TableSimpleCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h3.5v5.5H4V6Zm6.5 3.5V4H14a2 2 0 0 1 2 2v3.5h-5.5Zm-6.5 1h5.5V16H6a2 2 0 0 1-2-2v-3.5Zm10.86 1.4c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 0 1-.71 0l-.75-.75a.5.5 0 0 1 .7-.7l.4.4 1.4-1.4c.2-.2.51-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark20RegularIcon, 'TableSimpleCheckmark20Regular');

const TableSimpleCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.25 12.75V21h-5A3.25 3.25 0 0 1 3 17.75v-5h8.25Zm1.5 8.25v-8.25H21v5c0 1.8-1.46 3.25-3.25 3.25h-5Zm0-18v8.25H21v-5C21 4.45 19.54 3 17.75 3h-5Zm-1.5 0v8.25H3v-5C3 4.45 4.46 3 6.25 3h5Zm7.53 13.28a.75.75 0 1 0-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark24FilledIcon, 'TableSimpleCheckmark24Filled');

const TableSimpleCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h5v6.75H4.5v-5Zm8.25 5V4.5h5c.97 0 1.75.78 1.75 1.75v5h-6.75Zm-8.25 1.5h6.75v6.75h-5c-.97 0-1.75-.78-1.75-1.75v-5Zm13.78 1.97c.3.29.3.76 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark24RegularIcon, 'TableSimpleCheckmark24Regular');

const TableSimpleCheckmark28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3h6.5v10.25H3v-6.5A3.75 3.75 0 0 1 6.75 3ZM3 14.75h10.25V25h-6.5A3.75 3.75 0 0 1 3 21.25v-6.5Zm11.75 0V25h6.5A3.75 3.75 0 0 0 25 21.25v-6.5H14.75Zm0-11.75v10.25H25v-6.5A3.75 3.75 0 0 0 21.25 3h-6.5Zm8.03 15.78-3 3c-.3.3-.77.3-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.97.97 2.47-2.47a.75.75 0 0 1 1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark28Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark28FilledIcon, 'TableSimpleCheckmark28Filled');

const TableSimpleCheckmark28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM4.5 6.75c0-1.24 1-2.25 2.25-2.25h6.5v8.75H4.5v-6.5Zm10.25 6.5V4.5h6.5c1.24 0 2.25 1 2.25 2.25v6.5h-8.75ZM4.5 14.75h8.75v8.75h-6.5c-1.24 0-2.25-1-2.25-2.25v-6.5Zm17.28 2.47c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.97.97 2.47-2.47c.29-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark28Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark28RegularIcon, 'TableSimpleCheckmark28Regular');

const TableSimpleCheckmark32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 3H7.5A4.5 4.5 0 0 0 3 7.5V15h12V3ZM3 24.5V17h12v12H7.5A4.5 4.5 0 0 1 3 24.5ZM17 29V17h12v7.5a4.5 4.5 0 0 1-4.5 4.5H17ZM29 7.5V15H17V3h7.5A4.5 4.5 0 0 1 29 7.5Zm-2.54 14.46a1 1 0 0 0-1.42-1.42L22 23.6l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l3.76-3.75Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark32Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark32FilledIcon, 'TableSimpleCheckmark32Filled');

const TableSimpleCheckmark32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17ZM5 24.5V17h10v10H7.5A2.5 2.5 0 0 1 5 24.5ZM5 15V7.5A2.5 2.5 0 0 1 7.5 5H15v10H5Zm12 0V5h7.5A2.5 2.5 0 0 1 27 7.5V15H17Zm8.7 4.54a1 1 0 0 1 0 1.42l-3.74 3.75a1 1 0 0 1-1.42 0l-2-2a1 1 0 0 1 1.42-1.42l1.29 1.3 3.04-3.05a1 1 0 0 1 1.42 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark32Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark32RegularIcon, 'TableSimpleCheckmark32Regular');

const TableSimpleCheckmark48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 6h10.75v16.75H6V12a6 6 0 0 1 6-6ZM6 25.25h16.75V42H12a6 6 0 0 1-6-6V25.25Zm19.25 0V42H36a6 6 0 0 0 6-6V25.25H25.25Zm0-19.25v16.75H42V12a6 6 0 0 0-6-6H25.25Zm13.13 25.63-5.5 5.5c-.49.5-1.28.5-1.77 0l-2.74-2.74a1.25 1.25 0 0 1 1.76-1.77L32 34.48l4.61-4.61a1.25 1.25 0 0 1 1.77 1.76Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark48Filled = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark48FilledIcon, 'TableSimpleCheckmark48Filled');

const TableSimpleCheckmark48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6h-23.5ZM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h10.5v14.25H8.5v-10.5Zm16.75 10.5V8.5h10.5a3.75 3.75 0 0 1 3.75 3.75v10.5H25.25ZM8.5 25.25h14.25V39.5h-10.5a3.75 3.75 0 0 1-3.75-3.75v-10.5Zm28.88 3.62c.49.48.49 1.28 0 1.76l-5.5 5.5c-.49.5-1.28.5-1.77 0l-2.74-2.74a1.25 1.25 0 0 1 1.76-1.77L31 33.48l4.61-4.61a1.25 1.25 0 0 1 1.77 0Z",
    fill: primaryFill
  }));
};

exports.TableSimpleCheckmark48Regular = wrapIcon_1.default( /*#__PURE__*/TableSimpleCheckmark48RegularIcon, 'TableSimpleCheckmark48Regular');

const TableSplit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 6h4V2H8v4ZM7 2H3.5a.5.5 0 0 0-.5.5V4c0 1.1.9 2 2 2h2V2Zm6 4h2a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5H13v4Zm4 11.5a.5.5 0 0 1-.5.5H13v-4h2a2 2 0 0 1 2 2v1.5ZM12 14v4H8v-4h4Zm-8.5 4H7v-4H5a2 2 0 0 0-2 2v1.5c0 .28.22.5.5.5Zm-1-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TableSplit20Filled = wrapIcon_1.default( /*#__PURE__*/TableSplit20FilledIcon, 'TableSplit20Filled');

const TableSplit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 2c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5c0-.28.22-.5.5-.5Zm0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5c0 .28.22.5.5.5Zm-14-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TableSplit20Regular = wrapIcon_1.default( /*#__PURE__*/TableSplit20RegularIcon, 'TableSplit20Regular');

const TableStackAbove16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM11 6h2.5c.28 0 .5.22.5.5V10h-3V6Zm-1 0H6v4h4V6Zm-8 4V6.5c0-.28.22-.5.5-.5H5v4H2Zm3 1H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm1 3h4v-3H6v3Zm5.5 0H11v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove16Filled = wrapIcon_1.default( /*#__PURE__*/TableStackAbove16FilledIcon, 'TableStackAbove16Filled');

const TableStackAbove16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm9 12a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 4.5 14h7ZM3 7h2v3H3V7Zm3 0h4v3H6V7Zm5 0h2v3h-2V7Zm-1 6H6v-2h4v2Zm-5 0h-.5A1.5 1.5 0 0 1 3 11.5V11h2v2Zm6 0v-2h2v.5c0 .83-.67 1.5-1.5 1.5H11Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove16Regular = wrapIcon_1.default( /*#__PURE__*/TableStackAbove16RegularIcon, 'TableStackAbove16Regular');

const TableStackAbove20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 17h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-5 0V8H8v4h4Zm-4 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove20Filled = wrapIcon_1.default( /*#__PURE__*/TableStackAbove20FilledIcon, 'TableStackAbove20Filled');

const TableStackAbove20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5ZM4 13v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3Zm-1-3H8v3h4V9ZM4 9v3h3V9H4Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove20Regular = wrapIcon_1.default( /*#__PURE__*/TableStackAbove20RegularIcon, 'TableStackAbove20Regular');

const TableStackAbove24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5Zm-5.75 5v5h-5v-5h5Zm-5 6.5h5v5h-5v-5ZM8 9.5v5H3v-4.25c0-.41.34-.75.75-.75H8ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Zm13 0h-5v5h1.75c1.8 0 3.25-1.46 3.25-3.25V16Zm-5-1.5h5v-4.25a.75.75 0 0 0-.75-.75H16v5Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove24Filled = wrapIcon_1.default( /*#__PURE__*/TableStackAbove24FilledIcon, 'TableStackAbove24Filled');

const TableStackAbove24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5Zm0 4c.41 0 .75.34.75.75v8.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75v-8.5c0-.41.34-.75.75-.75h16.5ZM14 10h-4v4h4v-4Zm-5.5 0h-4v4h4v-4Zm0 5.5h-4v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4Zm5.5 0h-4v4h4v-4Zm1.5 4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4v4Zm4-9.5h-4v4h4v-4Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove24Regular = wrapIcon_1.default( /*#__PURE__*/TableStackAbove24RegularIcon, 'TableStackAbove24Regular');

const TableStackAbove28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h20.5ZM3 17v-5a1 1 0 0 1 1-1h5.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM17 25h-6v-6.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25ZM24 11a1 1 0 0 1 1 1v5h-6.5v-6H24Zm-13 6h6v-6h-6v6Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove28Filled = wrapIcon_1.default( /*#__PURE__*/TableStackAbove28FilledIcon, 'TableStackAbove28Filled');

const TableStackAbove28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 3a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75Zm17.5 22A3.75 3.75 0 0 0 25 21.25V10.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.75A3.75 3.75 0 0 0 6.75 25h14.5ZM9.5 11v6h-5v-6h5Zm1.5 6v-6h6v6h-6Zm-1.5 1.5v5H6.75c-1.24 0-2.25-1-2.25-2.25V18.5h5Zm1.5 5v-5h6v5h-6Zm10.25 0H18.5v-5h5v2.75c0 1.24-1 2.25-2.25 2.25ZM23.5 17h-5v-6h5v6Z",
    fill: primaryFill
  }));
};

exports.TableStackAbove28Regular = wrapIcon_1.default( /*#__PURE__*/TableStackAbove28RegularIcon, 'TableStackAbove28Regular');

const TableStackBelow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11ZM5 10H2.5a.5.5 0 0 1-.5-.5V6h3v4Zm1 0h4V6H6v4Zm8-4v3.5a.5.5 0 0 1-.5.5H11V6h3Zm-3-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11v3Zm-1-3H6v3h4V2ZM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow16Filled = wrapIcon_1.default( /*#__PURE__*/TableStackBelow16FilledIcon, 'TableStackBelow16Filled');

const TableStackBelow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11Zm-9-12A2.5 2.5 0 0 0 2 4.5v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5A2.5 2.5 0 0 0 11.5 2h-7ZM13 9h-2V6h2v3Zm-3 0H6V6h4v3ZM5 9H3V6h2v3Zm1-6h4v2H6V3Zm5 0h.5c.83 0 1.5.67 1.5 1.5V5h-2V3ZM5 3v2H3v-.5C3 3.67 3.67 3 4.5 3H5Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow16Regular = wrapIcon_1.default( /*#__PURE__*/TableStackBelow16RegularIcon, 'TableStackBelow16Regular');

const TableStackBelow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM5 3h2v4H3V5c0-1.1.9-2 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm5 0v4h4V8H8Zm4-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow20Filled = wrapIcon_1.default( /*#__PURE__*/TableStackBelow20FilledIcon, 'TableStackBelow20Filled');

const TableStackBelow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13c.28 0 .5.22.5.5Zm0-5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm1 3h4V8H8v3Zm8 0V8h-3v3h3Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow20Regular = wrapIcon_1.default( /*#__PURE__*/TableStackBelow20RegularIcon, 'TableStackBelow20Regular');

const TableStackBelow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 9.5v5h5v-5h-5ZM8 9.5v5H3.75a.75.75 0 0 1-.75-.75V9.5h5ZM9.5 8h5V3h-5v5ZM16 9.5v5h4.25c.41 0 .75-.34.75-.75V9.5h-5ZM21 8h-5V3h1.75C19.55 3 21 4.46 21 6.25V8ZM8 8H3V6.25C3 4.45 4.46 3 6.25 3H8v5ZM3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow24Filled = wrapIcon_1.default( /*#__PURE__*/TableStackBelow24FilledIcon, 'TableStackBelow24Filled');

const TableStackBelow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 15.5a.75.75 0 0 1-.75-.75v-8.5C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v8.5c0 .41-.34.75-.75.75H3.75ZM10 14h4v-4h-4v4Zm0-5.5h4v-4h-4v4Zm5.5 5.5h4v-4h-4v4Zm0-5.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-7-4H6.25c-.97 0-1.75.78-1.75 1.75V8.5h4v-4Zm-4 9.5h4v-4h-4v4Zm-.75 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow24Regular = wrapIcon_1.default( /*#__PURE__*/TableStackBelow24RegularIcon, 'TableStackBelow24Regular');

const TableStackBelow28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5H3.75ZM25 11v5a1 1 0 0 1-1 1h-5.5v-6H25Zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75ZM11 3h6v6.5h-6V3ZM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3ZM4 17a1 1 0 0 1-1-1v-5h6.5v6H4Zm13-6h-6v6h6v-6Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow28Filled = wrapIcon_1.default( /*#__PURE__*/TableStackBelow28FilledIcon, 'TableStackBelow28Filled');

const TableStackBelow28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M24.25 25a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h20.5ZM6.75 3A3.75 3.75 0 0 0 3 6.75V17.5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM18.5 17v-6h5v6h-5ZM17 11v6h-6v-6h6Zm1.5-1.5v-5h2.75c1.24 0 2.25 1 2.25 2.25V9.5h-5Zm-1.5-5v5h-6v-5h6Zm-10.25 0H9.5v5h-5V6.75c0-1.24 1-2.25 2.25-2.25ZM4.5 11h5v6h-5v-6Z",
    fill: primaryFill
  }));
};

exports.TableStackBelow28Regular = wrapIcon_1.default( /*#__PURE__*/TableStackBelow28RegularIcon, 'TableStackBelow28Regular');

const TableStackLeft16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0v11ZM6 5V2.5c0-.28.22-.5.5-.5H10v3H6Zm0 1v4h4V6H6Zm4 8H6.5a.5.5 0 0 1-.5-.5V11h4v3Zm1-3v3h.5a2.5 2.5 0 0 0 2.5-2.5V11h-3Zm3-1V6h-3v4h3Zm0-5.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft16Filled = wrapIcon_1.default( /*#__PURE__*/TableStackLeft16FilledIcon, 'TableStackLeft16Filled');

const TableStackLeft16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0v11Zm12-9A2.5 2.5 0 0 0 11.5 2h-5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h5a2.5 2.5 0 0 0 2.5-2.5v-7ZM7 13v-2h3v2H7Zm0-3V6h3v4H7Zm0-5V3h3v2H7Zm6 1v4h-2V6h2Zm0 5v.5c0 .83-.67 1.5-1.5 1.5H11v-2h2Zm0-6h-2V3h.5c.83 0 1.5.67 1.5 1.5V5Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft16Regular = wrapIcon_1.default( /*#__PURE__*/TableStackLeft16RegularIcon, 'TableStackLeft16Regular');

const TableStackLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13ZM17 5v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm0 5H8v4h4V8Zm5 4V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft20Filled = wrapIcon_1.default( /*#__PURE__*/TableStackLeft20FilledIcon, 'TableStackLeft20Filled');

const TableStackLeft20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5Zm4.5-1h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3ZM9 8v4h3V8H9Zm0 8h3v-3H9v3Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft20Regular = wrapIcon_1.default( /*#__PURE__*/TableStackLeft20RegularIcon, 'TableStackLeft20Regular');

const TableStackLeft24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 21h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5Zm0-6.5h5v-5h-5v5Zm-1.5-5v5h-5v-5h5ZM16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5Zm-1.5-5v5h-5V3.75a.75.75 0 0 1 .75-.75h4.25Zm0 13v5h-4.25a.75.75 0 0 1-.75-.75V16h5ZM4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft24Filled = wrapIcon_1.default( /*#__PURE__*/TableStackLeft24FilledIcon, 'TableStackLeft24Filled');

const TableStackLeft24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Zm4 0c0-.41.34-.75.75-.75h8.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-8.5a.75.75 0 0 1-.75-.75V3.75ZM10 10v4h4v-4h-4Zm0 5.5v4h4v-4h-4Zm5.5 0v4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4Zm0-5.5v4h4v-4h-4Zm4-1.5V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4h4Zm-9.5-4v4h4v-4h-4Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft24Regular = wrapIcon_1.default( /*#__PURE__*/TableStackLeft24RegularIcon, 'TableStackLeft24Regular');

const TableStackLeft28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75ZM17 25h-5a1 1 0 0 1-1-1v-5.5h6V25Zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25ZM25 11v6h-6.5v-6H25Zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75ZM11 4a1 1 0 0 1 1-1h5v6.5h-6V4Zm6 13v-6h-6v6h6Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft28Filled = wrapIcon_1.default( /*#__PURE__*/TableStackLeft28FilledIcon, 'TableStackLeft28Filled');

const TableStackLeft28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v20.5Zm22-17.5A3.75 3.75 0 0 0 21.25 3H10.5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10.75A3.75 3.75 0 0 0 25 21.25V6.75ZM11 18.5h6v5h-6v-5Zm6-1.5h-6v-6h6v6Zm1.5 1.5h5v2.75c0 1.24-1 2.25-2.25 2.25H18.5v-5Zm5-1.5h-5v-6h5v6Zm0-10.25V9.5h-5v-5h2.75c1.24 0 2.25 1 2.25 2.25ZM17 4.5v5h-6v-5h6Z",
    fill: primaryFill
  }));
};

exports.TableStackLeft28Regular = wrapIcon_1.default( /*#__PURE__*/TableStackLeft28RegularIcon, 'TableStackLeft28Regular');

const TableStackRight16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM10 11v2.5a.5.5 0 0 1-.5.5H6v-3h4Zm0-1V6H6v4h4ZM6 2h3.5c.28 0 .5.22.5.5V5H6V2ZM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5h3ZM2 6v4h3V6H2Zm0 5.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5Z",
    fill: primaryFill
  }));
};

exports.TableStackRight16Filled = wrapIcon_1.default( /*#__PURE__*/TableStackRight16FilledIcon, 'TableStackRight16Filled');

const TableStackRight16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Zm-12 9A2.5 2.5 0 0 0 4.5 14h5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-5A2.5 2.5 0 0 0 2 4.5v7ZM9 3v2H6V3h3Zm0 3v4H6V6h3Zm0 5v2H6v-2h3Zm-6-1V6h2v4H3Zm0-5v-.5C3 3.67 3.67 3 4.5 3H5v2H3Zm0 6h2v2h-.5A1.5 1.5 0 0 1 3 11.5V11Z",
    fill: primaryFill
  }));
};

exports.TableStackRight16Regular = wrapIcon_1.default( /*#__PURE__*/TableStackRight16RegularIcon, 'TableStackRight16Regular');

const TableStackRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM3 15v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8Zm0-5h4V8H8v4ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Z",
    fill: primaryFill
  }));
};

exports.TableStackRight20Filled = wrapIcon_1.default( /*#__PURE__*/TableStackRight20FilledIcon, 'TableStackRight20Filled');

const TableStackRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-1V8H8v4h3Zm0-8H8v3h3V4Z",
    fill: primaryFill
  }));
};

exports.TableStackRight20Regular = wrapIcon_1.default( /*#__PURE__*/TableStackRight20RegularIcon, 'TableStackRight20Regular');

const TableStackRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3Zm0 6.5H3v5h5v-5Zm1.5 5v-5h5v5h-5ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Zm1.5 5v-5h5v4.25a.75.75 0 0 1-.75.75H9.5Zm0-13V3h4.25c.41 0 .75.34.75.75V8h-5Zm10 12.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v16.5Z",
    fill: primaryFill
  }));
};

exports.TableStackRight24Filled = wrapIcon_1.default( /*#__PURE__*/TableStackRight24FilledIcon, 'TableStackRight24Filled');

const TableStackRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.5 3.75a.75.75 0 0 0-.75-.75h-8.5A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h8.5c.41 0 .75-.34.75-.75V3.75ZM14 10v4h-4v-4h4Zm-9.5 4v-4h4v4h-4ZM14 8.5h-4v-4h4v4Zm-5.5 0h-4V6.25c0-.97.78-1.75 1.75-1.75H8.5v4Zm0 11H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4v4Zm1.5-4h4v4h-4v-4Zm9.5-11.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0V3.75Z",
    fill: primaryFill
  }));
};

exports.TableStackRight24Regular = wrapIcon_1.default( /*#__PURE__*/TableStackRight24RegularIcon, 'TableStackRight24Regular');

const TableStackRight28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23.5 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v20.5ZM11 3h5a1 1 0 0 1 1 1v5.5h-6V3ZM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3ZM3 17v-6h6.5v6H3Zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25ZM17 24a1 1 0 0 1-1 1h-5v-6.5h6V24Zm-6-13v6h6v-6h-6Z",
    fill: primaryFill
  }));
};

exports.TableStackRight28Filled = wrapIcon_1.default( /*#__PURE__*/TableStackRight28FilledIcon, 'TableStackRight28Filled');

const TableStackRight28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 21.25A3.75 3.75 0 0 0 6.75 25H17.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6.75A3.75 3.75 0 0 0 3 6.75v14.5ZM17 9.5h-6v-5h6v5ZM11 11h6v6h-6v-6ZM9.5 9.5h-5V6.75c0-1.24 1-2.25 2.25-2.25H9.5v5Zm-5 1.5h5v6h-5v-6Zm0 10.25V18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25ZM11 23.5v-5h6v5h-6ZM25 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V3.75Z",
    fill: primaryFill
  }));
};

exports.TableStackRight28Regular = wrapIcon_1.default( /*#__PURE__*/TableStackRight28RegularIcon, 'TableStackRight28Regular');

const TableSwitch16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.85.15a.5.5 0 1 0-.7.7L7.29 2H5a3 3 0 0 0-3 3v2.3L.85 6.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L3 7.29V5c0-1.1.9-2 2-2h2.3L6.14 4.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM5 10H2.5c.38 0 .77-.15 1.06-.44L5 8.12V10Zm1 0V6h4v4H6Zm4-5H8.12l1.44-1.44c.3-.3.44-.68.44-1.06V5Zm-5 6H2v.5A2.5 2.5 0 0 0 4.5 14H5v-3Zm1 3h4v-3H6v3Zm5 0v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5H11Zm3-8v4h-3V6h3Zm0-1v-.5A2.5 2.5 0 0 0 11.5 2H11v3h3Z",
    fill: primaryFill
  }));
};

exports.TableSwitch16Filled = wrapIcon_1.default( /*#__PURE__*/TableSwitch16FilledIcon, 'TableSwitch16Filled');

const TableSwitch16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.85.15a.5.5 0 1 0-.7.7L7.29 2H5a3 3 0 0 0-3 3v2.3L.85 6.14a.5.5 0 1 0-.7.7l2 2a.5.5 0 0 0 .7 0l2-2a.5.5 0 1 0-.7-.7L3 7.29V5c0-1.1.9-2 2-2h2.3L6.14 4.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM2 10v1.5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H10v3H8.12l-.56.56c-.3.3-.68.44-1.06.44H10v4H6V6.5c0 .38-.15.77-.44 1.06L5 8.12V10H2Zm4 3v-2h4v2H6Zm-1-2v2h-.5A1.5 1.5 0 0 1 3 11.5V11h2Zm8-5v4h-2V6h2Zm0 5v.5c0 .83-.67 1.5-1.5 1.5H11v-2h2Zm0-6h-2V3h.5c.83 0 1.5.67 1.5 1.5V5Z",
    fill: primaryFill
  }));
};

exports.TableSwitch16Regular = wrapIcon_1.default( /*#__PURE__*/TableSwitch16RegularIcon, 'TableSwitch16Regular');

const TableSwitch20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm.71 5.41a1.5 1.5 0 0 1-.56.35V7h4V3h-1.09a1.5 1.5 0 0 1-.35 1.56l-2 2Zm-4 4a1.5 1.5 0 0 1-1.56.35V12h4V8h-.09c-.07.2-.19.4-.35.56l-2 2ZM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-5 0h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z",
    fill: primaryFill
  }));
};

exports.TableSwitch20Filled = wrapIcon_1.default( /*#__PURE__*/TableSwitch20FilledIcon, 'TableSwitch20Filled');

const TableSwitch20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM7 12V7h5V4h-1.09a1.5 1.5 0 0 0 0-1h3.59A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-3.59c.32.12.68.12 1 0V12h3Zm-3 2.5c0 .78.6 1.42 1.36 1.5H7v-3H4v1.5Zm8-1.5H8v3h4v-3Zm2.5 3c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8Zm1 0v4h3V8h-3Zm0-4v3h3V5.5c0-.78-.6-1.42-1.36-1.5H13Z",
    fill: primaryFill
  }));
};

exports.TableSwitch20Regular = wrapIcon_1.default( /*#__PURE__*/TableSwitch20RegularIcon, 'TableSwitch20Regular');

const TableSwitch24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.78 1.22a.75.75 0 0 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v2.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2ZM14.5 8h-5V6.97L11.5 5c.54-.54.65-1.34.34-1.99h2.67v5ZM3 11.83v2.67h5v-5H6.97L5 11.49c-.54.54-1.34.65-1.99.34Zm11.5 2.67v-5h-5v5h5Zm1.5 0v-5h5v5h-5ZM16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5Zm-1.5 13v-5h-5v5h5ZM8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5Zm8 0h5v1.75c0 1.8-1.46 3.25-3.25 3.25H16v-5Z",
    fill: primaryFill
  }));
};

exports.TableSwitch24Filled = wrapIcon_1.default( /*#__PURE__*/TableSwitch24FilledIcon, 'TableSwitch24Filled');

const TableSwitch24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.78 1.22a.75.75 0 0 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v2.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 0 0 .78 1.24c.1-.04.2-.1.28-.18l2-2c.3-.3.3-.77 0-1.06l-2-2ZM11.83 3c.23.47.23 1.03 0 1.5H14v4h-4V6.47L9.49 7c-.28.28-.63.44-.99.5V8.5H7.48c-.05.36-.21.7-.5.99l-.5.51H8.5v4h-4v-2.17c-.47.23-1.03.23-1.5 0v5.92C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3h-5.92ZM10 14v-4h4v4h-4Zm5.5 0v-4h4v4h-4ZM14 15.5v4h-4v-4h4Zm1.5 4v-4h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5Zm0-11v-4h2.25c.97 0 1.75.78 1.75 1.75V8.5h-4Zm-11 7h4v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5Z",
    fill: primaryFill
  }));
};

exports.TableSwitch24Regular = wrapIcon_1.default( /*#__PURE__*/TableSwitch24RegularIcon, 'TableSwitch24Regular');

const TableSwitch28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.78 1.22a.75.75 0 1 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2ZM3 17v-3.17c.65.31 1.45.2 1.99-.34l2-2c.14-.15.26-.31.34-.49H9.5v6H3Zm6.5-7.5H7.33a1.75 1.75 0 0 0-1.83-.98V6.25c0-.41.34-.75.75-.75h2.27a1.75 1.75 0 0 0 .98 1.83V9.5Zm1.5 0V7.33c.18-.08.34-.2.49-.34l2-2c.54-.54.65-1.34.34-1.99H17v6.5h-6Zm-8 9v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3ZM17 25v-6.5h-6V25h6Zm1.5 0h2.75A3.75 3.75 0 0 0 25 21.25V18.5h-6.5V25Zm6.5-8v-6h-6.5v6H25Zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 11v6h-6v-6h6Z",
    fill: primaryFill
  }));
};

exports.TableSwitch28Filled = wrapIcon_1.default( /*#__PURE__*/TableSwitch28FilledIcon, 'TableSwitch28Filled');

const TableSwitch28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.78 1.22a.75.75 0 1 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2ZM3 21.25v-7.42c.47.23 1.03.23 1.5 0V17h5v-6H7.33c.23-.47.23-1.03 0-1.5H9.5V7.33c.47.23 1.03.23 1.5 0V9.5h6v-5h-3.17c.23-.47.23-1.03 0-1.5h7.42A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25Zm1.5-2.75v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5Zm6.5 0v5h6v-5h-6Zm6-1.5v-6h-6v6h6Zm1.5 1.5v5h2.75c1.24 0 2.25-1 2.25-2.25V18.5h-5Zm5-1.5v-6h-5v6h5Zm0-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75Z",
    fill: primaryFill
  }));
};

exports.TableSwitch28Regular = wrapIcon_1.default( /*#__PURE__*/TableSwitch28RegularIcon, 'TableSwitch28Regular');

const Tablet12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 3.5C1 2.67 1.67 2 2.5 2h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 1 8.5v-5ZM5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5Z",
    fill: primaryFill
  }));
};

exports.Tablet12Filled = wrapIcon_1.default( /*#__PURE__*/Tablet12FilledIcon, 'Tablet12Filled');

const Tablet12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5ZM2.5 2C1.67 2 1 2.67 1 3.5v5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-7ZM2 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5Z",
    fill: primaryFill
  }));
};

exports.Tablet12Regular = wrapIcon_1.default( /*#__PURE__*/Tablet12RegularIcon, 'Tablet12Regular');

const Tablet16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5ZM6.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.Tablet16Filled = wrapIcon_1.default( /*#__PURE__*/Tablet16FilledIcon, 'Tablet16Filled');

const Tablet16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2.75 3C1.78 3 1 3.78 1 4.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C15 3.78 14.22 3 13.25 3H2.75ZM2 4.75c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v6.5c0 .41-.34.75-.75.75H2.75a.75.75 0 0 1-.75-.75v-6.5Z",
    fill: primaryFill
  }));
};

exports.Tablet16Regular = wrapIcon_1.default( /*#__PURE__*/Tablet16RegularIcon, 'Tablet16Regular');

const Tablet20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm6.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.Tablet20Filled = wrapIcon_1.default( /*#__PURE__*/Tablet20FilledIcon, 'Tablet20Filled');

const Tablet20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z",
    fill: primaryFill
  }));
};

exports.Tablet20Regular = wrapIcon_1.default( /*#__PURE__*/Tablet20RegularIcon, 'Tablet20Regular');

const Tablet24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm-6 11.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5Z",
    fill: primaryFill
  }));
};

exports.Tablet24Filled = wrapIcon_1.default( /*#__PURE__*/Tablet24FilledIcon, 'Tablet24Filled');

const Tablet24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75V6.25a.75.75 0 0 0-.75-.75Zm-9.5 10h3.5a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h3.6-3.5Z",
    fill: primaryFill
  }));
};

exports.Tablet24Regular = wrapIcon_1.default( /*#__PURE__*/Tablet24RegularIcon, 'Tablet24Regular');

const Tablet32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8.25C2 6.45 3.46 5 5.25 5h21.5C28.55 5 30 6.46 30 8.25v15.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 23.75V8.25ZM13 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z",
    fill: primaryFill
  }));
};

exports.Tablet32Filled = wrapIcon_1.default( /*#__PURE__*/Tablet32FilledIcon, 'Tablet32Filled');

const Tablet32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6ZM5.25 5A3.25 3.25 0 0 0 2 8.25v15.5C2 25.55 3.46 27 5.25 27h21.5c1.8 0 3.25-1.46 3.25-3.25V8.25C30 6.45 28.54 5 26.75 5H5.25ZM4 8.25C4 7.56 4.56 7 5.25 7h21.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 25 4 24.44 4 23.75V8.25Z",
    fill: primaryFill
  }));
};

exports.Tablet32Regular = wrapIcon_1.default( /*#__PURE__*/Tablet32RegularIcon, 'Tablet32Regular');

const Tablet48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 12.25C4 9.9 5.9 8 8.25 8h31.5C42.1 8 44 9.9 44 12.25v23.5C44 38.1 42.1 40 39.75 40H8.25A4.25 4.25 0 0 1 4 35.75v-23.5ZM20 31a1.25 1.25 0 1 0 0 2.5h8a1.25 1.25 0 1 0 0-2.5h-8Z",
    fill: primaryFill
  }));
};

exports.Tablet48Filled = wrapIcon_1.default( /*#__PURE__*/Tablet48FilledIcon, 'Tablet48Filled');

const Tablet48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M20 31a1.25 1.25 0 1 0 0 2.5h8a1.25 1.25 0 1 0 0-2.5h-8ZM8.25 8A4.25 4.25 0 0 0 4 12.25v23.5C4 38.1 5.9 40 8.25 40h31.5C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H8.25ZM6.5 12.25c0-.97.78-1.75 1.75-1.75h31.5c.97 0 1.75.78 1.75 1.75v23.5c0 .97-.78 1.75-1.75 1.75H8.25c-.97 0-1.75-.78-1.75-1.75v-23.5Z",
    fill: primaryFill
  }));
};

exports.Tablet48Regular = wrapIcon_1.default( /*#__PURE__*/Tablet48RegularIcon, 'Tablet48Regular');

const TabletSpeaker20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.7 2.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-1.7 1.08a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44Zm.4 6.42a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 8h-.38A1.5 1.5 0 0 1 9 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.5.29-1.15.27-1.65-.1ZM8.5 13h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.TabletSpeaker20Filled = wrapIcon_1.default( /*#__PURE__*/TabletSpeaker20FilledIcon, 'TabletSpeaker20Filled');

const TabletSpeaker20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.1 3.07a3.67 3.67 0 0 0-.45-.87.5.5 0 0 0-.8.6l.07.1a5.9 5.9 0 0 1 .58 2.6 5.9 5.9 0 0 1-.58 2.6l-.12.18a.5.5 0 0 0 .85.52c.12-.16.29-.45.44-.87.26-.68.41-1.5.41-2.43 0-.94-.15-1.75-.4-2.43ZM14 2.5a.5.5 0 0 0-.85-.35L11.29 4h-.79a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h.8l1.85 1.85A.5.5 0 0 0 14 8.5v-6Zm1.95.78a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44ZM17 9.98V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5v-.5c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.3.17-.66.24-1 .18ZM8.5 13a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }));
};

exports.TabletSpeaker20Regular = wrapIcon_1.default( /*#__PURE__*/TabletSpeaker20RegularIcon, 'TabletSpeaker20Regular');

const TabletSpeaker24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.14 3.3a4.53 4.53 0 0 0-.91-1.13.75.75 0 0 0-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 0 0 .96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.87 4.4c-.23-.36-.48-.6-.67-.75a.75.75 0 0 0-.9 1.2A2.24 2.24 0 0 1 19 6.5a2.24 2.24 0 0 1-.7 1.65l-.08.07a.75.75 0 0 0 .98 1.13 3.73 3.73 0 0 0 1.3-2.85c0-.81-.23-1.52-.63-2.1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.75a.75.75 0 0 0-1.31-.5L14.16 5h-1.41a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74A.75.75 0 0 0 17 9.25v-5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 4h1.53-9.28C3.01 4 2 5 2 6.25v11.5C2 19 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25v-6.27l-.13.11a1.75 1.75 0 0 1-2.86-1.11c-.42.07-.87-.03-1.23-.27a1.76 1.76 0 0 1-2.8.33L13.52 9H12a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm-1.75 11.5h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TabletSpeaker24Filled = wrapIcon_1.default( /*#__PURE__*/TabletSpeaker24FilledIcon, 'TabletSpeaker24Filled');

const TabletSpeaker24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.14 3.3a4.53 4.53 0 0 0-.91-1.13.75.75 0 0 0-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 0 0 .96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.87 4.4c-.23-.36-.48-.6-.67-.75a.75.75 0 0 0-.9 1.2A2.24 2.24 0 0 1 19 6.5a2.24 2.24 0 0 1-.7 1.65l-.08.07a.75.75 0 0 0 .98 1.13 3.73 3.73 0 0 0 1.3-2.85c0-.81-.23-1.52-.63-2.1Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17 3.75a.75.75 0 0 0-1.31-.5L14.16 5h-1.41a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74A.75.75 0 0 0 17 9.25v-5.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4.25 4H12a1 1 0 0 0-1 1v.5H4.25a.75.75 0 0 0-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75v-5.77a1.75 1.75 0 0 0 1.5-.5v6.27C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.75 15.5a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h3.6Z",
    fill: primaryFill
  }));
};

exports.TabletSpeaker24Regular = wrapIcon_1.default( /*#__PURE__*/TabletSpeaker24RegularIcon, 'TabletSpeaker24Regular');

const Tabs16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2A4.5 4.5 0 0 0 2 6.5v5a2.5 2.5 0 0 1-1-2v-3A5.5 5.5 0 0 1 6.5 1h3c.82 0 1.54.4 2 1h-5ZM4.06 6.4A3 3 0 0 1 7 4h6.5a2.5 2.5 0 0 0-2-1H7a4 4 0 0 0-4 4v4.5c0 .82.4 1.54 1 2V7c0-.2.02-.4.06-.6ZM7.5 5A2.5 2.5 0 0 0 5 7.5v5A2.5 2.5 0 0 0 7.5 15h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 5h-5Z",
    fill: primaryFill
  }));
};

exports.Tabs16Filled = wrapIcon_1.default( /*#__PURE__*/Tabs16FilledIcon, 'Tabs16Filled');

const Tabs16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.5 2A4.5 4.5 0 0 0 2 6.5v5a2.5 2.5 0 0 1-1-2v-3A5.5 5.5 0 0 1 6.5 1h3c.82 0 1.54.4 2 1h-5ZM4.06 6.4A3 3 0 0 1 7 4h6.5a2.5 2.5 0 0 0-2-1H7a4 4 0 0 0-4 4v4.5c0 .82.4 1.54 1 2V7c0-.2.02-.4.06-.6ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5ZM7.5 6C6.67 6 6 6.67 6 7.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Z",
    fill: primaryFill
  }));
};

exports.Tabs16Regular = wrapIcon_1.default( /*#__PURE__*/Tabs16RegularIcon, 'Tabs16Regular');

const Tabs20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm2 .5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5ZM9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z",
    fill: primaryFill
  }));
};

exports.Tabs20Filled = wrapIcon_1.default( /*#__PURE__*/Tabs20FilledIcon, 'Tabs20Filled');

const Tabs20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm13-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6Zm-8 9c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6ZM4 8.5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5Z",
    fill: primaryFill
  }));
};

exports.Tabs20Regular = wrapIcon_1.default( /*#__PURE__*/Tabs20RegularIcon, 'Tabs20Regular');

const Tabs24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9.25C2 5.25 5.25 2 9.25 2h3.5c1.35 0 2.51.83 3 2h-5.5A6.25 6.25 0 0 0 4 10.25v5.5a3.25 3.25 0 0 1-2-3v-3.5Zm3 1C5 7.35 7.35 5 10.25 5h5.5c1.35 0 2.51.83 3 2h-7.5A4.25 4.25 0 0 0 7 11.25v7.5a3.25 3.25 0 0 1-2-3v-5.5ZM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5C8 20.55 9.46 22 11.25 22h7.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 9.45 20.54 8 18.75 8h-7.5Z",
    fill: primaryFill
  }));
};

exports.Tabs24Filled = wrapIcon_1.default( /*#__PURE__*/Tabs24FilledIcon, 'Tabs24Filled');

const Tabs24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 9.25C2 5.25 5.25 2 9.25 2h3.5c1.35 0 2.51.83 3 2h-1.78c-.31-.3-.74-.5-1.22-.5h-3.5A5.75 5.75 0 0 0 3.5 9.25v3.5c0 .48.2.9.5 1.22v1.78a3.25 3.25 0 0 1-2-3v-3.5Zm3 1C5 7.35 7.35 5 10.25 5h5.5c1.35 0 2.51.83 3 2h-1.78c-.31-.3-.74-.5-1.22-.5h-5.5a3.75 3.75 0 0 0-3.75 3.75v5.5c0 .48.2.9.5 1.22v1.78a3.25 3.25 0 0 1-2-3v-5.5ZM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5C8 20.55 9.46 22 11.25 22h7.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 9.45 20.54 8 18.75 8h-7.5ZM9.5 11.25c0-.97.78-1.75 1.75-1.75h7.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75h-7.5c-.97 0-1.75-.78-1.75-1.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.Tabs24Regular = wrapIcon_1.default( /*#__PURE__*/Tabs24RegularIcon, 'Tabs24Regular');

const Tag16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.59 7.31a1.99 1.99 0 0 0 0 2.83l3.3 3.28c.78.77 2.05.77 2.83 0l4.67-4.65c.37-.37.58-.87.59-1.4L14 4.01A2 2 0 0 0 11.99 2l-3.25.01c-.53 0-1.04.22-1.41.59L2.59 7.3ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.Tag16Filled = wrapIcon_1.default( /*#__PURE__*/Tag16FilledIcon, 'Tag16Filled');

const Tag16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8.41 4.14a1.99 1.99 0 0 1 0-2.83L7.33 2.6c.37-.37.88-.58 1.4-.59L12 2A2 2 0 0 1 14 4l-.02 3.37c0 .53-.22 1.03-.6 1.4l-4.66 4.65c-.78.77-2.05.77-2.84 0l-3.3-3.28Zm.7-2.12a1 1 0 0 0 0 1.41l3.3 3.28a1 1 0 0 0 1.42 0l4.67-4.65a1 1 0 0 0 .3-.7L13 4a1 1 0 0 0-1-1L8.73 3a1 1 0 0 0-.7.3L3.3 8.01Z",
    fill: primaryFill
  }));
};

exports.Tag16Regular = wrapIcon_1.default( /*#__PURE__*/Tag16RegularIcon, 'Tag16Regular');

const Tag20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.Tag20Filled = wrapIcon_1.default( /*#__PURE__*/Tag20FilledIcon, 'Tag20Filled');

const Tag20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm-.72 1.3a1 1 0 0 1 .71-.3l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-6.63 6.64a1 1 0 0 1-1.41 0l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67Z",
    fill: primaryFill
  }));
};

exports.Tag20Regular = wrapIcon_1.default( /*#__PURE__*/Tag20RegularIcon, 'Tag20Regular');

const Tag24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-8.5 8.5a3.25 3.25 0 0 1-4.6 0L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.Tag24Filled = wrapIcon_1.default( /*#__PURE__*/Tag24FilledIcon, 'Tag24Filled');

const Tag24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-8.5 8.5a3.25 3.25 0 0 1-4.6 0L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46Zm0 1.5h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.68.68 1.8.68 2.48 0l8.5-8.5c.33-.33.51-.77.51-1.24V4.25a.75.75 0 0 0-.75-.75ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
};

exports.Tag24Regular = wrapIcon_1.default( /*#__PURE__*/Tag24RegularIcon, 'Tag24Regular');

const Tag28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.99 3.95c.6-.6 1.43-.95 2.3-.95h6.96A2.75 2.75 0 0 1 25 5.75v6.96c0 .87-.34 1.7-.95 2.3l-9.25 9.25a3.25 3.25 0 0 1-4.6 0L3.74 17.8a3.25 3.25 0 0 1 0-4.6l9.25-9.25ZM19.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
};

exports.Tag28Filled = wrapIcon_1.default( /*#__PURE__*/Tag28FilledIcon, 'Tag28Filled');

const Tag28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.29 3c-.87 0-1.7.34-2.3.95L3.74 13.2a3.25 3.25 0 0 0 0 4.6l6.46 6.46a3.25 3.25 0 0 0 4.6 0l9.25-9.25c.6-.6.95-1.43.95-2.3V5.75A2.75 2.75 0 0 0 22.25 3h-6.96Zm-1.24 2.01c.33-.33.77-.51 1.24-.51h6.96c.69 0 1.25.56 1.25 1.25v6.96c0 .47-.18.91-.51 1.24l-9.25 9.25c-.69.69-1.8.69-2.48 0L4.8 16.74a1.75 1.75 0 0 1 0-2.48l9.25-9.25Z",
    fill: primaryFill
  }));
};

exports.Tag28Regular = wrapIcon_1.default( /*#__PURE__*/Tag28RegularIcon, 'Tag28Regular');

const Tag32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.95 4.08A4 4 0 0 1 18.68 3h6.82A3.5 3.5 0 0 1 29 6.5v6.76a4 4 0 0 1-1.17 2.83L16 27.9a4.25 4.25 0 0 1-6.02 0l-6.32-6.33a4.25 4.25 0 0 1 .1-6.1l12.18-11.4ZM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    fill: primaryFill
  }));
};

exports.Tag32Filled = wrapIcon_1.default( /*#__PURE__*/Tag32FilledIcon, 'Tag32Filled');

const Tag32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3.82-9a4 4 0 0 0-2.73 1.08L3.77 15.48a4.25 4.25 0 0 0-.1 6.1l6.32 6.33a4.25 4.25 0 0 0 6.01 0l11.83-11.82A4 4 0 0 0 29 13.26V6.5A3.5 3.5 0 0 0 25.5 3h-6.82Zm-1.36 2.54A2 2 0 0 1 18.68 5h6.82c.83 0 1.5.67 1.5 1.5v6.76a2 2 0 0 1-.59 1.41L14.6 26.5c-.88.88-2.3.88-3.18 0l-6.33-6.32c-.9-.9-.87-2.37.06-3.24l12.18-11.4Z",
    fill: primaryFill
  }));
};

exports.Tag32Regular = wrapIcon_1.default( /*#__PURE__*/Tag32RegularIcon, 'Tag32Regular');

const TagCircle20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4-1.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5C6.67 7 6 7.67 6 8.5Z",
    fill: primaryFill
  }));
};

exports.TagCircle20Filled = wrapIcon_1.default( /*#__PURE__*/TagCircle20FilledIcon, 'TagCircle20Filled');

const TagCircle20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.5 7C6.67 7 6 7.67 6 8.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5ZM7 8.5c0-.28.22-.5.5-.5h4.06c.17 0 .34.06.47.17L13.8 9.6a.5.5 0 0 1 0 .78l-1.78 1.44c-.13.11-.3.17-.47.17H7.5a.5.5 0 0 1-.5-.5v-3ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.TagCircle20Regular = wrapIcon_1.default( /*#__PURE__*/TagCircle20RegularIcon, 'TagCircle20Regular');

const TagDismiss16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.3 1.6 1.52 6.33a2 2 0 0 0 0 2.83l3.31 3.28c.21.2.45.36.7.46a5.5 5.5 0 0 1 7.43-7.31L13 3A2 2 0 0 0 10.97 1l-3.26.01c-.53 0-1.04.22-1.42.59Zm4.05 3.06c-.3.3-.79.3-1.09 0a.76.76 0 0 1 0-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 1 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TagDismiss16Filled = wrapIcon_1.default( /*#__PURE__*/TagDismiss16FilledIcon, 'TagDismiss16Filled');

const TagDismiss16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 1 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Zm-2-3.99c-.3.3-.78.3-1.08 0a.76.76 0 0 1 0-1.08c.3-.3.78-.3 1.09 0 .3.3.3.78 0 1.08Zm-8.82 4.5a2 2 0 0 1 0-2.83L6.3 1.6c.38-.37.89-.58 1.42-.59L10.97 1A2 2 0 0 1 13 3.02l-.02 2.57c-.32-.16-.66-.3-1-.4V3.02a1 1 0 0 0-1-1.01l-3.27.01c-.26 0-.52.11-.7.3L2.25 7.04a1 1 0 0 0 0 1.41l2.8 2.79c.08.59.25 1.15.5 1.66a2 2 0 0 1-.7-.45l-3.32-3.3Z",
    fill: primaryFill
  }));
};

exports.TagDismiss16Regular = wrapIcon_1.default( /*#__PURE__*/TagDismiss16RegularIcon, 'TagDismiss16Regular');

const TagDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TagDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/TagDismiss20FilledIcon, 'TagDismiss20Filled');

const TagDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.TagDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/TagDismiss20RegularIcon, 'TagDismiss20Regular');

const TagDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03A6.5 6.5 0 0 0 12 20.96c-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z",
    fill: primaryFill
  }));
};

exports.TagDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/TagDismiss24FilledIcon, 'TagDismiss24Filled');

const TagDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03a6.47 6.47 0 0 0-1.43-.7l.4-.4c.33-.32.51-.76.51-1.23V4.25a.75.75 0 0 0-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.64.64 1.64.68 2.33.13.17.49.39.95.65 1.38-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm.5 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-2.35-7.85c.2-.2.5-.2.7 0l1.65 1.64 1.65-1.64a.5.5 0 0 1 .7.7l-1.64 1.65 1.64 1.65a.5.5 0 0 1-.7.7l-1.65-1.64-1.65 1.64a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.TagDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/TagDismiss24RegularIcon, 'TagDismiss24Regular');

const TagError16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1.54 6.33 6.29 1.6c.38-.37.89-.58 1.42-.59L10.97 1A2 2 0 0 1 13 3.01l-.02 2.58a5.5 5.5 0 0 0-7.43 7.31 2 2 0 0 1-.7-.46L1.54 9.16a2 2 0 0 1 0-2.83Zm7.72-1.67c.3.3.8.3 1.1 0 .3-.3.3-.78 0-1.08a.77.77 0 0 0-1.1 0c-.3.3-.3.78 0 1.08ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TagError16Filled = wrapIcon_1.default( /*#__PURE__*/TagError16FilledIcon, 'TagError16Filled');

const TagError16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.27 4.66c.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08a.77.77 0 0 0-1.1 0c-.3.3-.3.78 0 1.08ZM1.54 6.33a2 2 0 0 0 0 2.83l3.3 3.29c.21.2.45.36.71.45a5.46 5.46 0 0 1-.5-1.66l-2.8-2.79a1 1 0 0 1 0-1.41L7 2.3c.18-.19.44-.3.7-.3L10.98 2a1 1 0 0 1 1.01 1l-.02 2.2c.35.1.69.23 1 .39L13 3.02A2 2 0 0 0 10.97 1l-3.26.01c-.53 0-1.04.22-1.41.59L1.54 6.33ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TagError16Regular = wrapIcon_1.default( /*#__PURE__*/TagError16RegularIcon, 'TagError16Regular');

const TagError20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.12a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.TagError20Filled = wrapIcon_1.default( /*#__PURE__*/TagError20FilledIcon, 'TagError20Filled');

const TagError20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.TagError20Regular = wrapIcon_1.default( /*#__PURE__*/TagError20RegularIcon, 'TagError20Regular');

const TagError24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03A6.5 6.5 0 0 0 12 20.96c-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.TagError24Filled = wrapIcon_1.default( /*#__PURE__*/TagError24FilledIcon, 'TagError24Filled');

const TagError24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03a6.47 6.47 0 0 0-1.43-.7l.4-.4c.33-.32.51-.76.51-1.23V4.25a.75.75 0 0 0-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.64.64 1.64.68 2.33.13.17.49.39.95.65 1.38-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.TagError24Regular = wrapIcon_1.default( /*#__PURE__*/TagError24RegularIcon, 'TagError24Regular');

const TagLock16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M1.54 6.33 6.3 1.6c.37-.37.88-.58 1.41-.59L10.97 1A2 2 0 0 1 13 3.01l-.02 2.38A3 3 0 0 0 8.5 8v.06A2 2 0 0 0 7 10v2.9c-.72.27-1.57.12-2.15-.46L1.54 9.16a2 2 0 0 1 0-2.83Zm7.72-1.67c.3.3.8.3 1.1 0 .3-.3.3-.78 0-1.08a.77.77 0 0 0-1.1 0c-.3.3-.3.78 0 1.08ZM9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0Zm1 1V8a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLock16Filled = wrapIcon_1.default( /*#__PURE__*/TagLock16FilledIcon, 'TagLock16Filled');

const TagLock16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.27 4.66c.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08a.77.77 0 0 0-1.1 0c-.3.3-.3.78 0 1.08ZM1.54 6.33a2 2 0 0 0 0 2.83l3.3 3.29c.59.58 1.44.73 2.16.45v-1.18l-.02.02c-.4.4-1.03.4-1.42 0L2.25 8.45a1 1 0 0 1 0-1.41L7 2.3c.18-.19.44-.3.7-.3L10.98 2a1 1 0 0 1 1.01 1l-.02 2.04c.37.05.7.18 1 .35L13 3.02A2 2 0 0 0 10.97 1l-3.26.01c-.53 0-1.04.22-1.41.59L1.54 6.33ZM9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0Zm1 1V8a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLock16Regular = wrapIcon_1.default( /*#__PURE__*/TagLock16RegularIcon, 'TagLock16Regular');

const TagLock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V14a2 2 0 0 1 1.5-1.94V12a3 3 0 0 1 5.68-1.35l.25-.25A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1.5 5v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLock20Filled = wrapIcon_1.default( /*#__PURE__*/TagLock20FilledIcon, 'TagLock20Filled');

const TagLock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V16.4a1 1 0 0 1-1.32-.08l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-.14.15a3 3 0 0 1 .6.82l.25-.25A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm1.37 10v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.TagLock20Regular = wrapIcon_1.default( /*#__PURE__*/TagLock20RegularIcon, 'TagLock20Regular');

const TagLock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.42.42A3.5 3.5 0 0 0 14 14v.05a2.5 2.5 0 0 0-2 2.45v4.45c-1.26.8-2.95.66-4.05-.44L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.TagLock24Filled = wrapIcon_1.default( /*#__PURE__*/TagLock24FilledIcon, 'TagLock24Filled');

const TagLock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.42.42a3.51 3.51 0 0 0-.95-1.17l.3-.31c.34-.33.52-.77.52-1.24V4.25a.75.75 0 0 0-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.68.68 1.8.68 2.48 0l.51-.51v2.01c-1.26.8-2.95.66-4.05-.44L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.TagLock24Regular = wrapIcon_1.default( /*#__PURE__*/TagLock24RegularIcon, 'TagLock24Regular');

const TagLock32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.95 4.08A4 4 0 0 1 18.68 3h6.82A3.5 3.5 0 0 1 29 6.5v6.76a4 4 0 0 1-1.17 2.83l-.47.46a5 5 0 0 0-9.28 1.56A4 4 0 0 0 15 22v6c0 .21.02.42.05.63a4.25 4.25 0 0 1-5.06-.72l-6.32-6.33a4.25 4.25 0 0 1 .1-6.1l12.18-11.4ZM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3 7.5H19a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0v.5Zm2-.5a1.5 1.5 0 0 1 3 0v.5h-3V19Zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
};

exports.TagLock32Filled = wrapIcon_1.default( /*#__PURE__*/TagLock32FilledIcon, 'TagLock32Filled');

const TagLock32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.32 5.54A2 2 0 0 1 18.68 5h6.82c.83 0 1.5.67 1.5 1.5v6.76a2 2 0 0 1-.59 1.41l-.36.37c.53.4.98.92 1.31 1.51l.47-.46A4 4 0 0 0 29 13.26V6.5A3.5 3.5 0 0 0 25.5 3h-6.82a4 4 0 0 0-2.73 1.08L3.77 15.48a4.25 4.25 0 0 0-.1 6.1l6.32 6.33a4.25 4.25 0 0 0 5.06.72c-.03-.2-.05-.42-.05-.63v-1.91l-.4.4c-.89.88-2.31.88-3.2 0l-6.32-6.32c-.9-.9-.87-2.37.06-3.24l12.18-11.4ZM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3 7.5H19a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0v.5Zm2-.5a1.5 1.5 0 1 1 3 0v.5h-3V19Zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    fill: primaryFill
  }));
};

exports.TagLock32Regular = wrapIcon_1.default( /*#__PURE__*/TagLock32RegularIcon, 'TagLock32Regular');

const TagLockAccent16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.65 1.95 1.89 6.68a1.5 1.5 0 0 0 0 2.12l3.3 3.29c.5.48 1.23.57 1.81.25V10a2 2 0 0 1 1.5-1.94V8a3 3 0 0 1 3.98-2.84l.02-2.15a1.5 1.5 0 0 0-1.52-1.51l-3.27.01c-.4 0-.78.16-1.06.44Z",
    fill: primaryFill
  }));
};

exports.TagLockAccent16Filled = wrapIcon_1.default( /*#__PURE__*/TagLockAccent16FilledIcon, 'TagLockAccent16Filled');

const TagLockAccent20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 4.03c0-.82-.66-1.49-1.48-1.5l-4.9-.03c-.4 0-.78.16-1.06.44L3.38 9.61a1.5 1.5 0 0 0 0 2.12l4.94 4.95a1.5 1.5 0 0 0 1.68.3V14a2 2 0 0 1 1.5-1.94V12a3 3 0 0 1 5.4-1.79l.17-.16c.29-.29.44-.67.44-1.07V4.03Z",
    fill: primaryFill
  }));
};

exports.TagLockAccent20Filled = wrapIcon_1.default( /*#__PURE__*/TagLockAccent20FilledIcon, 'TagLockAccent20Filled');

const TagLockAccent24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2.5a1.75 1.75 0 0 1 1.75 1.75v5.46a2.73 2.73 0 0 1-.8 1.95l-.33.33A3.5 3.5 0 0 0 14 14v.05a2.5 2.5 0 0 0-2 2.45v3.84a2.75 2.75 0 0 1-3.69-.18L3.84 15.7a2.75 2.75 0 0 1 0-3.88l8.5-8.51a2.73 2.73 0 0 1 1.95-.81h5.46Z",
    fill: primaryFill
  }));
};

exports.TagLockAccent24Filled = wrapIcon_1.default( /*#__PURE__*/TagLockAccent24FilledIcon, 'TagLockAccent24Filled');

const TagLockAccent32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18.68 4a3 3 0 0 0-2.05.8L4.45 16.2a3.25 3.25 0 0 0-.07 4.68l6.32 6.32a3.25 3.25 0 0 0 4.3.27V22a4 4 0 0 1 3.08-3.9 5 5 0 0 1 8.7-2.38l.34-.34a3 3 0 0 0 .88-2.12V6.5A2.5 2.5 0 0 0 25.5 4h-6.82Z",
    fill: primaryFill
  }));
};

exports.TagLockAccent32Filled = wrapIcon_1.default( /*#__PURE__*/TagLockAccent32FilledIcon, 'TagLockAccent32Filled');

const TagMultiple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M7.3 1.6 2.53 6.33a2 2 0 0 0 0 2.83l3.3 3.28c.8.78 2.07.78 2.85 0l4.7-4.65a2 2 0 0 0 .58-1.4L14 3A2 2 0 0 0 11.97 1l-3.26.01c-.53 0-1.04.22-1.42.59Zm4.05 3.06c-.3.3-.79.3-1.09 0a.76.76 0 0 1 0-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08ZM2 9.75a2 2 0 0 0 .46 2.11l1.96 1.97a4 4 0 0 0 5.66 0l3.48-3.48c.28-.28.44-.67.44-1.06V8.5l-3.92 3.92-.21.2-.5.5a3 3 0 0 1-4.24 0l-.5-.5a4.08 4.08 0 0 1-.2-.2l-1.97-1.97A2 2 0 0 1 2 9.75Z",
    fill: primaryFill
  }));
};

exports.TagMultiple16Filled = wrapIcon_1.default( /*#__PURE__*/TagMultiple16FilledIcon, 'TagMultiple16Filled');

const TagMultiple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.36 4.66c-.3.3-.8.3-1.1 0a.76.76 0 0 1 0-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08Zm-8.82 4.5a2 2 0 0 1 0-2.83L7.3 1.6c.37-.37.88-.58 1.41-.59L11.97 1A2 2 0 0 1 14 3.02l-.03 3.37a2 2 0 0 1-.59 1.4L8.7 12.45c-.78.78-2.06.78-2.84 0l-3.31-3.3Zm.7-2.12a1 1 0 0 0 0 1.41l3.32 3.3c.4.38 1.03.38 1.42 0l4.69-4.67a1 1 0 0 0 .3-.7l.02-3.37A1 1 0 0 0 11.98 2l-3.27.01c-.26 0-.52.11-.7.3L3.25 7.04ZM2 9.75a2 2 0 0 0 .46 2.11l1.96 1.97a4 4 0 0 0 5.66 0l3.48-3.48c.28-.28.44-.67.44-1.06V8.5l-3.92 3.92-.21.2-.5.5a3 3 0 0 1-4.24 0l-.5-.5a4.08 4.08 0 0 1-.2-.2l-1.97-1.97A2 2 0 0 1 2 9.75Z",
    fill: primaryFill
  }));
};

exports.TagMultiple16Regular = wrapIcon_1.default( /*#__PURE__*/TagMultiple16RegularIcon, 'TagMultiple16Regular');

const TagMultiple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Zm6.2-9.21A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm4.3 3.91a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagMultiple20Filled = wrapIcon_1.default( /*#__PURE__*/TagMultiple20FilledIcon, 'TagMultiple20Filled');

const TagMultiple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M13.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.2 2.59A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm1.42.41a1 1 0 0 0-.7.3L4.15 9.03a1 1 0 0 0 0 1.42l4.39 4.38a1 1 0 0 0 1.4 0l5.83-5.76a1 1 0 0 0 .3-.7V4a1 1 0 0 0-1-1h-4.46ZM3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Z",
    fill: primaryFill
  }));
};

exports.TagMultiple20Regular = wrapIcon_1.default( /*#__PURE__*/TagMultiple20RegularIcon, 'TagMultiple20Regular');

const TagMultiple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.75 2c-.83 0-1.64.32-2.24.9L3.7 9.4a2.25 2.25 0 0 0-.04 3.22l6.26 6.22c.87.87 2.28.88 3.16.01l6.95-6.83c.62-.61.97-1.45.97-2.32V4.75A2.75 2.75 0 0 0 18.25 2h-5.5Zm3.5 5.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm3 6.43 1.48-1.45.13-.13c.31.95.08 2.05-.69 2.8l-5.33 5.24a4.75 4.75 0 0 1-6.67-.02l-4.35-4.3c-.77-.77-1-1.86-.69-2.82l1.63 1.62.11.13 2.41 2.38 1.93 1.92a3.25 3.25 0 0 0 4.58.02l5.33-5.23.14-.16Z",
    fill: primaryFill
  }));
};

exports.TagMultiple24Filled = wrapIcon_1.default( /*#__PURE__*/TagMultiple24FilledIcon, 'TagMultiple24Filled');

const TagMultiple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.5 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-7-3.6c.61-.58 1.42-.9 2.25-.9h5.5A2.75 2.75 0 0 1 21 4.75V9.7c0 .87-.35 1.7-.97 2.32l-6.95 6.83c-.88.87-2.29.86-3.16 0l-6.26-6.23c-.9-.9-.88-2.35.04-3.23l6.8-6.5Zm2.25.6c-.45 0-.88.17-1.2.48l-6.82 6.5c-.3.3-.3.78-.01 1.07l6.26 6.23c.29.3.76.3 1.05 0l6.95-6.83c.33-.33.52-.78.52-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-5.5Zm7.98 9.23-1.47 1.45-.14.16-5.33 5.23a3.25 3.25 0 0 1-4.58-.02l-1.93-1.92-2.4-2.38a1.26 1.26 0 0 1-.12-.13L3.13 13.5c-.3.96-.08 2.05.69 2.81l4.35 4.31a4.75 4.75 0 0 0 6.67.02l5.33-5.23c.77-.76 1-1.86.7-2.81l-.14.13Z",
    fill: primaryFill
  }));
};

exports.TagMultiple24Regular = wrapIcon_1.default( /*#__PURE__*/TagMultiple24RegularIcon, 'TagMultiple24Regular');

const TagOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7L5.79 6.5 3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l2.76-2.76 3.59 3.58a.5.5 0 0 0 .7-.7l-15-15Zm14.58 8.25-2.45 2.45L7.2 5.08l2.5-2.5A2 2 0 0 1 11.13 2l4.89.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagOff20Filled = wrapIcon_1.default( /*#__PURE__*/TagOff20FilledIcon, 'TagOff20Filled');

const TagOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.79 6.5 2.15 2.84a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.6-3.58-2.75 2.76a2 2 0 0 1-2.83 0l-4.95-4.95a2 2 0 0 1 0-2.83L5.8 6.49Zm7.06 7.06L6.5 7.2 3.73 9.96a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l2.76-2.76Zm3.87-3.87-2.45 2.45.7.71 2.46-2.45A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2a2 2 0 0 0-1.42.58l-2.5 2.5.7.7 2.51-2.49a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: primaryFill
  }));
};

exports.TagOff20Regular = wrapIcon_1.default( /*#__PURE__*/TagOff20RegularIcon, 'TagOff20Regular');

const TagOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "m16 17.06 4.72 4.72a.75.75 0 1 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06L6.94 8 3.5 11.46a3.25 3.25 0 0 0 0 4.6l4.46 4.45a3.25 3.25 0 0 0 4.6 0L16 17.06Zm5.05-5.05L18.06 15 9 5.94 12 2.95a3.25 3.25 0 0 1 2.3-.95h5.46C21 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3ZM17 5.51a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    fill: primaryFill
  }));
};

exports.TagOff24Filled = wrapIcon_1.default( /*#__PURE__*/TagOff24FilledIcon, 'TagOff24Filled');

const TagOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.94 8 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 1 1-1.06 1.06L16 17.06l-3.45 3.45a3.25 3.25 0 0 1-4.6 0L3.5 16.06a3.25 3.25 0 0 1 0-4.6L6.94 8Zm8 8L8 9.06l-3.46 3.48c-.68.68-.67 1.78.01 2.46l4.46 4.45c.69.68 1.8.68 2.48 0L14.94 16Zm5.05-5.05L17 13.94 18.06 15 21.05 12c.6-.61.95-1.44.95-2.3V4.25C22 3.01 21 2 19.75 2H14.3c-.87 0-1.7.34-2.3.95L9 5.95 10.06 7l2.99-2.99c.33-.33.77-.51 1.24-.51h5.46c.41 0 .75.34.75.75v5.46c0 .47-.18.91-.51 1.24ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    fill: primaryFill
  }));
};

exports.TagOff24Regular = wrapIcon_1.default( /*#__PURE__*/TagOff24RegularIcon, 'TagOff24Regular');

const TagQuestionMark16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.59 7.31a1.99 1.99 0 0 0 0 2.83l3.17 3.16a5.5 5.5 0 0 1 8.22-7.05L14 4A2 2 0 0 0 11.99 2l-3.25.01c-.53 0-1.04.22-1.41.59L2.59 7.3ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.62-2a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0ZM8.65 9.46c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark16Filled = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark16FilledIcon, 'TagQuestionMark16Filled');

const TagQuestionMark16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2.59 7.31a1.99 1.99 0 0 0 0 2.83l3.17 3.16a5.46 5.46 0 0 1-.72-2.13L3.3 9.43a1 1 0 0 1 0-1.41L8.04 3.3a1 1 0 0 1 .7-.29L11.99 3a1 1 0 0 1 1 1v1.6c.35.17.69.4 1 .64L14 4.01A2 2 0 0 0 11.99 2l-3.25.01c-.53 0-1.04.22-1.41.59L2.59 7.3ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.62-2a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0ZM8.65 9.46c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark16Regular = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark16RegularIcon, 'TagQuestionMark16Regular');

const TagQuestionMark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark20Filled = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark20FilledIcon, 'TagQuestionMark20Filled');

const TagQuestionMark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark20Regular = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark20RegularIcon, 'TagQuestionMark20Regular');

const TagQuestionMark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03A6.5 6.5 0 0 0 12 20.96c-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 12a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-6.12 3a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm-1.23-4.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .57-.18.92-.66 1.45l-.27.3-.1.1c-.24.3-.32.47-.32.7a.5.5 0 0 1-1 0c0-.57.19-.93.67-1.47l.27-.29.1-.11c.24-.29.31-.45.31-.68 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark24Filled = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark24FilledIcon, 'TagQuestionMark24Filled');

const TagQuestionMark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03a6.47 6.47 0 0 0-1.43-.7l.4-.4c.33-.32.51-.76.51-1.23V4.25a.75.75 0 0 0-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.64.64 1.64.68 2.33.13.16.49.39.95.65 1.38-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 12a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-6.12 3a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm-1.23-4.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .57-.18.92-.66 1.45l-.27.3-.1.1c-.24.3-.32.47-.32.7a.5.5 0 0 1-1 0c0-.57.19-.93.67-1.47l.27-.29.1-.11c.24-.29.31-.45.31-.68 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark24Regular = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark24RegularIcon, 'TagQuestionMark24Regular');

const TagQuestionMark32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15.95 4.08A4 4 0 0 1 18.68 3h6.82A3.5 3.5 0 0 1 29 6.5v6.76a4 4 0 0 1-.89 2.51 9 9 0 0 0-12.34 12.35 4.25 4.25 0 0 1-5.78-.21l-6.32-6.33a4.25 4.25 0 0 1 .1-6.1l12.18-11.4ZM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16 23.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm6.48 4.43a1.02 1.02 0 1 0 2.04 0 1.02 1.02 0 0 0-2.04 0Zm-1.7-6.48a.68.68 0 1 0 1.36 0 1.36 1.36 0 1 1 2.72 0c0 .51-.1.8-.5 1.23l-.15.17-.36.37c-.74.77-1.03 1.33-1.03 2.33a.68.68 0 1 0 1.36 0c0-.51.11-.8.5-1.23l.16-.17.36-.37c.74-.77 1.03-1.33 1.03-2.33a2.73 2.73 0 0 0-5.46 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark32Filled = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark32FilledIcon, 'TagQuestionMark32Filled');

const TagQuestionMark32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3.82-9a4 4 0 0 0-2.73 1.08L3.77 15.48a4.25 4.25 0 0 0-.1 6.1l6.32 6.33a4.25 4.25 0 0 0 5.79.21 8.96 8.96 0 0 1-.87-1.94l-.32.31c-.88.88-2.3.88-3.18 0l-6.33-6.32c-.9-.9-.87-2.37.06-3.24l12.18-11.4A2 2 0 0 1 18.68 5h6.82c.83 0 1.5.67 1.5 1.5v6.76a2 2 0 0 1-.59 1.41l-.23.24c.68.2 1.33.5 1.93.86a4 4 0 0 0 .89-2.51V6.5A3.5 3.5 0 0 0 25.5 3h-6.82ZM16 23.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Zm6.48 4.43a1.02 1.02 0 1 1 2.04 0 1.02 1.02 0 0 1-2.04 0Zm-1.7-6.48a2.73 2.73 0 0 1 5.45 0c0 1-.3 1.56-1.03 2.33l-.36.37-.16.17c-.39.44-.5.72-.5 1.23a.68.68 0 1 1-1.36 0c0-1 .29-1.56 1.03-2.33l.36-.37.15-.17c.4-.44.5-.72.5-1.23a1.36 1.36 0 1 0-2.72 0 .68.68 0 0 1-1.37 0Z",
    fill: primaryFill
  }));
};

exports.TagQuestionMark32Regular = wrapIcon_1.default( /*#__PURE__*/TagQuestionMark32RegularIcon, 'TagQuestionMark32Regular');

const TagReset20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.02 2.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42l-.15.15A5 5 0 0 0 15 10h-1.09a1.5 1.5 0 0 0-2.47-1.56l-2 2a1.5 1.5 0 0 0 0 2.12l1.2 1.2A1.5 1.5 0 0 0 10 15a5 5 0 0 0 .54 2.25 2 2 0 0 1-2.57-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.6A2 2 0 0 1 11.13 2l4.89.04ZM13 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-.15 3.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
    fill: primaryFill
  }));
};

exports.TagReset20Filled = wrapIcon_1.default( /*#__PURE__*/TagReset20FilledIcon, 'TagReset20Filled');

const TagReset20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.7 2.58A2 2 0 0 1 11.13 2l4.89.03a2 2 0 0 1 1.99 2v4.95a2 2 0 0 1-.58 1.42l-.15.15a5 5 0 0 0-1.03-.4l.47-.46a1 1 0 0 0 .3-.7L17 4.02a1 1 0 0 0-1-1L11.12 3a1 1 0 0 0-.71.3L3.73 9.95a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l.07-.07a5 5 0 0 0 .37 1 2 2 0 0 1-2.56-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.58Zm3.15 7.27a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
    fill: primaryFill
  }));
};

exports.TagReset20Regular = wrapIcon_1.default( /*#__PURE__*/TagReset20RegularIcon, 'TagReset20Regular');

const TagReset24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 4.25C22 3.01 21 2 19.75 2h-5.47c-.86 0-1.69.34-2.3.95l-8.5 8.51a3.25 3.25 0 0 0 0 4.6l4.47 4.45a3.25 3.25 0 0 0 4.6 0A6 6 0 0 1 12 18c0-.55.26-1.05.66-1.37L11 15a1.75 1.75 0 0 1 0-2.48l2-2A1.75 1.75 0 0 1 15.98 12H18a6 6 0 0 1 2.5.55l.55-.54c.6-.61.95-1.44.95-2.3V4.25ZM15.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-.72 5.28a.75.75 0 1 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H18a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94l.72-.72Z",
    fill: primaryFill
  }));
};

exports.TagReset24Filled = wrapIcon_1.default( /*#__PURE__*/TagReset24FilledIcon, 'TagReset24Filled');

const TagReset24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 4.25C22 3.01 21 2 19.75 2h-5.47c-.86 0-1.69.34-2.3.95l-8.5 8.51a3.25 3.25 0 0 0 0 4.6l4.47 4.45a3.25 3.25 0 0 0 4.6 0 6 6 0 0 1-.49-1.64l-.57.58c-.69.68-1.8.68-2.48 0L4.55 15a1.75 1.75 0 0 1-.02-2.46L13.05 4c.32-.33.77-.51 1.23-.51h5.47c.41 0 .75.34.75.75v5.46c0 .47-.18.91-.51 1.24l-1.12 1.11a6 6 0 0 1 1.64.49l.54-.54c.6-.61.95-1.44.95-2.3V4.25ZM18.5 7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-3.72 5.28a.75.75 0 1 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H18a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94l.72-.72Z",
    fill: primaryFill
  }));
};

exports.TagReset24Regular = wrapIcon_1.default( /*#__PURE__*/TagReset24RegularIcon, 'TagReset24Regular');

const TagSearch20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16.02 2.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42l-.36.36a4.5 4.5 0 1 0-6.31 6.3 2 2 0 0 1-2.8-.03l-4.94-4.95a2 2 0 0 1 0-2.83L9.7 2.6A2 2 0 0 1 11.13 2l4.89.04ZM13 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm3.3 9.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.TagSearch20Filled = wrapIcon_1.default( /*#__PURE__*/TagSearch20FilledIcon, 'TagSearch20Filled');

const TagSearch20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.7 2.58A2 2 0 0 1 11.13 2l4.89.03a2 2 0 0 1 1.99 2v4.95a2 2 0 0 1-.58 1.42l-.36.36c-.2-.27-.44-.51-.7-.72l.35-.35a1 1 0 0 0 .3-.7L17 4.02a1 1 0 0 0-1-1L11.12 3a1 1 0 0 0-.71.3L3.73 9.95a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.35.05c.22.26.46.5.73.7a2 2 0 0 1-2.8-.04l-4.94-4.95a2 2 0 0 1 0-2.83L9.7 2.58Zm6.6 13.02a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    fill: primaryFill
  }));
};

exports.TagSearch20Regular = wrapIcon_1.default( /*#__PURE__*/TagSearch20RegularIcon, 'TagSearch20Regular');

const TagSearch24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 4.25C22 3.01 21 2 19.75 2h-5.47c-.86 0-1.69.34-2.3.95l-8.5 8.51a3.25 3.25 0 0 0 0 4.6l4.47 4.45a3.25 3.25 0 0 0 4.6 0l.1-.1A5.48 5.48 0 0 1 16.5 11c1.53 0 2.92.63 3.92 1.64l.63-.63c.6-.61.95-1.44.95-2.3V4.25ZM15.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.67 12.1a4.5 4.5 0 1 0-1.06 1.06l2.61 2.62a.75.75 0 1 0 1.06-1.06l-2.61-2.61Zm-.67-2.6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
};

exports.TagSearch24Filled = wrapIcon_1.default( /*#__PURE__*/TagSearch24FilledIcon, 'TagSearch24Filled');

const TagSearch24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M22 4.25C22 3.01 21 2 19.75 2h-5.47c-.86 0-1.69.34-2.3.95l-8.5 8.51a3.25 3.25 0 0 0 0 4.6l4.47 4.45a3.25 3.25 0 0 0 4.6 0l.1-.1a5.52 5.52 0 0 1-.93-1.19l-.23.23c-.69.68-1.8.68-2.48 0L4.55 15a1.75 1.75 0 0 1-.02-2.46L13.05 4c.32-.33.77-.51 1.23-.51h5.47c.41 0 .75.34.75.75v5.46c0 .47-.18.91-.51 1.24l-.77.77c.44.25.84.56 1.2.92l.63-.63c.6-.61.95-1.44.95-2.3V4.25ZM18.5 7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm1.67 12.1a4.5 4.5 0 1 0-1.06 1.06l2.61 2.62a.75.75 0 1 0 1.06-1.06l-2.61-2.61Zm-.67-2.6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: primaryFill
  }));
};

exports.TagSearch24Regular = wrapIcon_1.default( /*#__PURE__*/TagSearch24RegularIcon, 'TagSearch24Regular');

const TapDouble20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M4 8.5a5.5 5.5 0 1 1 10.97.6c.34.15.65.34.93.57A6.5 6.5 0 1 0 3.64 11.3c.25-.25.53-.45.82-.61A5.48 5.48 0 0 1 4 8.5Zm10 0-.01.33-1-.17.01-.16a3.5 3.5 0 1 0-6.57 1.69 4.4 4.4 0 0 0-1.05.13A4.48 4.48 0 0 1 9.5 4 4.5 4.5 0 0 1 14 8.5Zm-6-1a1.5 1.5 0 1 1 3 0v2.08l2.94.51a2.5 2.5 0 0 1 1.91 3.33l-.98 2.67a2.5 2.5 0 0 1-1.92 1.6l-1.52.26c-1.02.18-1.95-.45-2.43-1.23A5.87 5.87 0 0 0 4.44 14a.5.5 0 0 1-.43-.62c.15-.6.43-1.04.82-1.36.39-.32.85-.47 1.3-.52.63-.06 1.29.05 1.87.25V7.5Z",
    fill: primaryFill
  }));
};

exports.TapDouble20Filled = wrapIcon_1.default( /*#__PURE__*/TapDouble20FilledIcon, 'TapDouble20Filled');

const TapDouble20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.5 3a5.5 5.5 0 0 0-5.04 7.7c-.3.16-.57.36-.82.61A6.5 6.5 0 1 1 15.9 9.67a3.7 3.7 0 0 0-.93-.57l.03-.6A5.5 5.5 0 0 0 9.5 3Zm4.49 5.83L14 8.5a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.5 3.5 0 1 1 13 8.66l1 .17ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 0 1 1.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 0 0-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 0 0 9 12.5v-5Z",
    fill: primaryFill
  }));
};

exports.TapDouble20Regular = wrapIcon_1.default( /*#__PURE__*/TapDouble20RegularIcon, 'TapDouble20Regular');

const TapDouble24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 7c1.36 0 1.95.9 2 2.33V12l2.87.41.34.07c1.4.4 2.25 1.8 1.96 3.22l-.05.17-1.22 4.44c-.17.62-.67 1.1-1.3 1.24l-.14.03-3.06.43c-.76.11-1.5-.29-1.83-.97l-.06-.14-.21-.57a4.13 4.13 0 0 0-1.18-1.67l-.2-.17-1.6-1.2a1.75 1.75 0 0 0-.27-.16l-.14-.07-2.2-.86a.75.75 0 0 1-.47-.66c-.03-.73.5-1.25 1.42-1.72.72-.36 1.73-.33 3.07.05l.27.08V9.5c0-1.54.58-2.51 2-2.51Zm0-5a7.25 7.25 0 0 1 6.67 10.1 3.74 3.74 0 0 0-1.2-.57l-.17-.04a5.75 5.75 0 1 0-9.92 1.19 3.22 3.22 0 0 0-1.51.44A7.25 7.25 0 0 1 11.75 2Zm0 2.5a4.75 4.75 0 0 1 4.27 6.82l-1.27-.18v-.65a3.24 3.24 0 0 0-.83-3.66l-.15-.12A2.85 2.85 0 0 0 11.75 6c-.89 0-1.56.26-2.04.72a3.24 3.24 0 0 0-.96 3.79v1.85a.3.3 0 0 1-.3.3 4.75 4.75 0 0 1 3.3-8.16Z",
    fill: primaryFill
  }));
};

exports.TapDouble24Filled = wrapIcon_1.default( /*#__PURE__*/TapDouble24FilledIcon, 'TapDouble24Filled');

const TapDouble24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 7c1.35 0 2.18.97 2.25 2.33v2.29l2.22.4a3.25 3.25 0 0 1 2.6 3.86l-.04.18L17.73 20a2.25 2.25 0 0 1-1.69 1.61l-.16.03-2.42.35a2.25 2.25 0 0 1-2.28-1.12l-.08-.16-.03-.06c-.24-.5-.59-.95-1.03-1.28l-.2-.14-1.87-1.26-.1-.06-.1-.05-2.36-1.17a.75.75 0 0 1-.41-.66 2.5 2.5 0 0 1 1.41-2.44c.7-.35 1.64-.33 2.83.02l.26.08V9.5c0-1.45.84-2.51 2.25-2.51Zm0 1.5c-.46 0-.71.27-.75.87v5.38c0 .54-.54.9-1.04.7-1.46-.6-2.44-.75-2.87-.53a.97.97 0 0 0-.51.52l-.04.12 1.9.95.18.1.18.1 1.88 1.26a4.97 4.97 0 0 1 1.63 1.8l.12.24.03.06c.12.27.39.43.68.43h.1l2.42-.35c.26-.04.48-.2.58-.45l.04-.1 1.05-3.92c.25-.94-.3-1.9-1.24-2.15l-.07-.01-2.9-.53a.75.75 0 0 1-.61-.63l-.01-.11V9.51c0-.7-.25-1.01-.75-1.01Zm0-6.5a7.25 7.25 0 0 1 6.7 10.03 4.2 4.2 0 0 0-1.3-.78 5.75 5.75 0 1 0-10.22 1.13 3.32 3.32 0 0 0-1.42.57A7.25 7.25 0 0 1 11.75 2Zm0 2.5a4.75 4.75 0 0 1 4.41 6.5L15 10.8V9.25c0-.68-.21-1.31-.57-1.83l-.09-.14A3.07 3.07 0 0 0 11.75 6c-1.18 0-2.08.53-2.64 1.35a3.24 3.24 0 0 0-.61 1.9V12.4l-.26-.04a1 1 0 0 1-.62-.32C7.21 11.58 7 10.65 7 9.25a4.75 4.75 0 0 1 4.75-4.75Z",
    fill: primaryFill
  }));
};

exports.TapDouble24Regular = wrapIcon_1.default( /*#__PURE__*/TapDouble24RegularIcon, 'TapDouble24Regular');

const TapDouble32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 12a8 8 0 1 1 15.58 2.56c.67.2 1.27.52 1.8.92A10 10 0 1 0 7.3 16.93c.5-.46 1.07-.81 1.7-1.06A7.96 7.96 0 0 1 8 12Zm14.5 0c0 .79-.14 1.55-.4 2.25l-1.6-.31V12a4.5 4.5 0 1 0-9 .18v3.33a5.45 5.45 0 0 0-.97 0A6.5 6.5 0 1 1 22.5 12ZM16 9a3 3 0 0 0-3 3v5.5l-.45-.2a4 4 0 0 0-5.4 2.65l-.1.33a1.5 1.5 0 0 0 .97 1.82c4.74 1.65 6.22 3.92 6.8 5.5.3.82 1.11 1.48 2.11 1.4l4.76-.39a3 3 0 0 0 2.65-2.2l1.52-5.52a4 4 0 0 0-3.1-4.99L19 15.18V12a3 3 0 0 0-3-3Z",
    fill: primaryFill
  }));
};

exports.TapDouble32Filled = wrapIcon_1.default( /*#__PURE__*/TapDouble32FilledIcon, 'TapDouble32Filled');

const TapDouble32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 12a8 8 0 1 1 15.58 2.56c.67.2 1.27.52 1.8.92A10 10 0 1 0 7.3 16.93c.5-.46 1.07-.81 1.7-1.06A7.96 7.96 0 0 1 8 12Zm14.5 0c0 .79-.14 1.55-.4 2.25l-1.6-.31V12a4.5 4.5 0 1 0-9 .18v3.33a5.45 5.45 0 0 0-.97 0A6.5 6.5 0 1 1 22.5 12ZM15 12a1 1 0 1 1 2 0v4c0 .48.34.9.81.98l4.57.89a2 2 0 0 1 1.55 2.49l-1.52 5.53a1 1 0 0 1-.88.73l-4.76.38h-.02a.17.17 0 0 1-.05-.08c-.78-2.15-2.68-4.74-7.6-6.56a2 2 0 0 1 2.68-1.21l1.83.77a1 1 0 0 0 1.4-.92v-7Zm1-3a3 3 0 0 0-3 3v5.5l-.45-.2a4 4 0 0 0-5.4 2.65l-.1.33a1.5 1.5 0 0 0 .97 1.82c4.74 1.65 6.22 3.92 6.8 5.5.3.82 1.11 1.48 2.11 1.4l4.76-.39a3 3 0 0 0 2.65-2.2l1.52-5.52a4 4 0 0 0-3.1-4.99L19 15.18V12a3 3 0 0 0-3-3Z",
    fill: primaryFill
  }));
};

exports.TapDouble32Regular = wrapIcon_1.default( /*#__PURE__*/TapDouble32RegularIcon, 'TapDouble32Regular');

const TapDouble48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 17.5a11 11 0 1 1 21.18 4.16l.2.05c.77.16 1.5.44 2.16.8a13.5 13.5 0 1 0-23.96 2.17 7.34 7.34 0 0 1 2.53-.7 10.95 10.95 0 0 1-2.11-6.48Zm20 0c0 1.33-.29 2.6-.81 3.74L30 20.87V17.5a6.5 6.5 0 1 0-13 .09v6.14a9 9 0 1 1 15.5-6.23Zm-9-4.5a4.5 4.5 0 0 0-4.5 4.5v9.47l-1.87-.69a5.34 5.34 0 0 0-7.1 4.13c-.15.88.32 1.73 1.11 2.08 7.3 3.29 10.4 6.38 11.48 8.7a3.02 3.02 0 0 0 3.03 1.79l6.24-.73a4.25 4.25 0 0 0 3.6-3.1l2.3-8.34a5.75 5.75 0 0 0-4.33-7.15L28 22.5V17.5a4.5 4.5 0 0 0-4.5-4.5Z",
    fill: primaryFill
  }));
};

exports.TapDouble48Filled = wrapIcon_1.default( /*#__PURE__*/TapDouble48FilledIcon, 'TapDouble48Filled');

const TapDouble48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12.5 17.5a11 11 0 1 1 21.18 4.16l.2.05c.77.16 1.5.44 2.16.8a13.5 13.5 0 1 0-23.96 2.17 7.34 7.34 0 0 1 2.53-.7 10.95 10.95 0 0 1-2.11-6.48Zm20 0c0 1.33-.29 2.6-.81 3.74L30 20.87V17.5a6.5 6.5 0 1 0-13 .09v6.14a9 9 0 1 1 15.5-6.23Zm-11 0a2 2 0 1 1 4 0v6c0 .59.41 1.1.99 1.22l6.44 1.39a3.25 3.25 0 0 1 2.45 4.03l-2.3 8.35c-.18.69-.77 1.2-1.48 1.27l-6.24.74c-.05 0-.12 0-.21-.07a.75.75 0 0 1-.27-.3c-1.43-3.08-5.1-6.42-12.29-9.73a2.84 2.84 0 0 1 3.68-1.77l3.55 1.3a1.25 1.25 0 0 0 1.68-1.17V17.5Zm2-4.5a4.5 4.5 0 0 0-4.5 4.5v9.47l-1.87-.69a5.34 5.34 0 0 0-7.1 4.13c-.15.88.32 1.73 1.11 2.08 7.3 3.29 10.4 6.38 11.48 8.7a3.02 3.02 0 0 0 3.03 1.79l6.24-.73a4.25 4.25 0 0 0 3.6-3.1l2.3-8.34a5.75 5.75 0 0 0-4.33-7.15L28 22.5V17.5a4.5 4.5 0 0 0-4.5-4.5Z",
    fill: primaryFill
  }));
};

exports.TapDouble48Regular = wrapIcon_1.default( /*#__PURE__*/TapDouble48RegularIcon, 'TapDouble48Regular');

const TapSingle20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 8.5a3.5 3.5 0 1 1 7 .16l.99.17.01-.33a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.48 3.48 0 0 1 6 8.5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TapSingle20Filled = wrapIcon_1.default( /*#__PURE__*/TapSingle20FilledIcon, 'TapSingle20Filled');

const TapSingle20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 8.5a3.5 3.5 0 1 1 7 .16l.99.17.01-.33a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.48 3.48 0 0 1 6 8.5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 0 1 1.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 0 0-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 0 0 9 12.5v-5Z",
    fill: primaryFill
  }));
};

exports.TapSingle20Regular = wrapIcon_1.default( /*#__PURE__*/TapSingle20RegularIcon, 'TapSingle20Regular');

const TapSingle24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 6c1.36 0 1.95.9 2 2.33V11l2.87.41a2.75 2.75 0 0 1 2.3 3.29l-.05.17-1.22 4.44c-.17.62-.67 1.1-1.3 1.24l-.14.03-3.06.43c-.76.11-1.5-.29-1.83-.97l-.06-.14-.21-.57a4.13 4.13 0 0 0-1.18-1.67l-.2-.17-1.6-1.2a1.75 1.75 0 0 0-.27-.16l-.14-.07-2.2-.86a.75.75 0 0 1-.47-.66c-.03-.73.5-1.25 1.42-1.72.72-.36 1.73-.33 3.07.05l.27.08V8.5c0-1.54.58-2.51 2-2.51Zm0-3.5a5.75 5.75 0 0 1 5.3 7.99l.17.04-.45-.1-1.27-.18a4.25 4.25 0 1 0-6.75 1.02v.41a5.6 5.6 0 0 0-1.67-.07 5.75 5.75 0 0 1 4.67-9.1Z",
    fill: primaryFill
  }));
};

exports.TapSingle24Filled = wrapIcon_1.default( /*#__PURE__*/TapSingle24FilledIcon, 'TapSingle24Filled');

const TapSingle24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.75 6c1.35 0 2.18.97 2.25 2.33v2.29l2.22.4a3.25 3.25 0 0 1 2.6 3.86l-.04.18L17.73 19a2.25 2.25 0 0 1-1.69 1.61l-.16.03-2.42.35a2.25 2.25 0 0 1-2.28-1.12l-.08-.16-.03-.06c-.24-.5-.59-.95-1.03-1.28l-.2-.14-1.87-1.26-.1-.06-.1-.05-2.36-1.17a.75.75 0 0 1-.41-.66 2.5 2.5 0 0 1 1.41-2.44c.7-.35 1.64-.33 2.83.02l.26.08V8.5c0-1.46.84-2.51 2.25-2.51Zm0 1.5c-.46 0-.71.27-.75.87v5.38c0 .54-.54.9-1.04.7-1.46-.6-2.44-.75-2.87-.53a.97.97 0 0 0-.51.52l-.04.12 1.9.95.18.1.18.1 1.88 1.26a4.97 4.97 0 0 1 1.63 1.8l.12.24.03.06c.12.27.39.43.68.43h.1l2.42-.35c.26-.04.48-.2.58-.45l.04-.1 1.05-3.92c.25-.94-.3-1.9-1.24-2.15l-.07-.01-2.9-.53a.75.75 0 0 1-.61-.63l-.01-.11V8.51c0-.7-.25-1.01-.75-1.01Zm0-5a5.75 5.75 0 0 1 5.4 7.75L17 10.2a5.6 5.6 0 0 0-1.34-.3A4.24 4.24 0 0 0 11.75 4a4.25 4.25 0 0 0-3.25 7c-.32.02-.6.06-.82.11-.36.09-.6.17-.76.27a5.75 5.75 0 0 1 4.83-8.88Z",
    fill: primaryFill
  }));
};

exports.TapSingle24Regular = wrapIcon_1.default( /*#__PURE__*/TapSingle24RegularIcon, 'TapSingle24Regular');

const TapSingle32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 5a6 6 0 0 0-4.88 9.5 5.5 5.5 0 0 0-2.12.37 8 8 0 1 1 14.58-1.31c-.17-.05-.35-.1-.53-.13l-1.45-.28A5.99 5.99 0 0 0 16 5Zm0 3a3 3 0 0 0-3 3v5.5l-.45-.2a4 4 0 0 0-5.4 2.65l-.1.33a1.5 1.5 0 0 0 .97 1.82c4.74 1.65 6.22 3.92 6.8 5.5.3.82 1.11 1.48 2.11 1.4l4.76-.39a3 3 0 0 0 2.65-2.2l1.52-5.52a4 4 0 0 0-3.1-4.99L19 14.18V11a3 3 0 0 0-3-3Z",
    fill: primaryFill
  }));
};

exports.TapSingle32Filled = wrapIcon_1.default( /*#__PURE__*/TapSingle32FilledIcon, 'TapSingle32Filled');

const TapSingle32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 5a6 6 0 0 0-4.88 9.5 5.5 5.5 0 0 0-2.12.37 8 8 0 1 1 14.58-1.31c-.17-.05-.35-.1-.53-.13l-1.45-.28A5.99 5.99 0 0 0 16 5Zm-1 6a1 1 0 1 1 2 0v4c0 .48.34.9.81.98l4.57.89a2 2 0 0 1 1.55 2.49l-1.52 5.53a1 1 0 0 1-.88.73l-4.76.38h-.02a.17.17 0 0 1-.05-.08c-.78-2.15-2.68-4.74-7.6-6.56a2 2 0 0 1 2.68-1.21l1.83.77a1 1 0 0 0 1.4-.92v-7Zm1-3a3 3 0 0 0-3 3v5.5l-.45-.2a4 4 0 0 0-5.4 2.65l-.1.33a1.5 1.5 0 0 0 .97 1.82c4.74 1.65 6.22 3.92 6.8 5.5.3.82 1.11 1.48 2.11 1.4l4.76-.39a3 3 0 0 0 2.65-2.2l1.52-5.52a4 4 0 0 0-3.1-4.99L19 14.18V11a3 3 0 0 0-3-3Z",
    fill: primaryFill
  }));
};

exports.TapSingle32Regular = wrapIcon_1.default( /*#__PURE__*/TapSingle32RegularIcon, 'TapSingle32Regular');

const TapSingle48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23.5 7.5A9 9 0 0 0 17 22.73v.42c-1-.24-2-.26-2.95-.1a11.5 11.5 0 1 1 20.13-2.28l-.3-.06-2.19-.47A9 9 0 0 0 23.5 7.5Zm0 4.5a4.5 4.5 0 0 0-4.5 4.5v9.47l-1.87-.69a5.34 5.34 0 0 0-7.1 4.13c-.15.88.32 1.73 1.11 2.08 7.3 3.29 10.4 6.38 11.48 8.7a3.02 3.02 0 0 0 3.03 1.79l6.24-.73a4.25 4.25 0 0 0 3.6-3.1l2.3-8.34a5.75 5.75 0 0 0-4.33-7.15L28 21.5V16.5a4.5 4.5 0 0 0-4.5-4.5Z",
    fill: primaryFill
  }));
};

exports.TapSingle48Filled = wrapIcon_1.default( /*#__PURE__*/TapSingle48FilledIcon, 'TapSingle48Filled');

const TapSingle48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M23.5 7.5A9 9 0 0 0 17 22.73v.42c-1-.24-2-.26-2.95-.1a11.5 11.5 0 1 1 20.13-2.28l-.3-.06-2.19-.47A9 9 0 0 0 23.5 7.5Zm-2 9a2 2 0 1 1 4 0v6c0 .59.41 1.1.99 1.22l6.44 1.39a3.25 3.25 0 0 1 2.45 4.03l-2.3 8.35c-.18.69-.77 1.2-1.48 1.27l-6.24.74c-.05 0-.12 0-.21-.07a.75.75 0 0 1-.27-.3c-1.43-3.08-5.1-6.42-12.29-9.73a2.84 2.84 0 0 1 3.68-1.77l3.55 1.3a1.25 1.25 0 0 0 1.68-1.17V16.5Zm2-4.5a4.5 4.5 0 0 0-4.5 4.5v9.47l-1.87-.69a5.34 5.34 0 0 0-7.1 4.13c-.15.88.32 1.73 1.11 2.08 7.3 3.29 10.4 6.38 11.48 8.7a3.02 3.02 0 0 0 3.03 1.79l6.24-.73a4.25 4.25 0 0 0 3.6-3.1l2.3-8.34a5.75 5.75 0 0 0-4.33-7.15L28 21.5V16.5a4.5 4.5 0 0 0-4.5-4.5Z",
    fill: primaryFill
  }));
};

exports.TapSingle48Regular = wrapIcon_1.default( /*#__PURE__*/TapSingle48RegularIcon, 'TapSingle48Regular');

const Target16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
    fill: primaryFill
  }));
};

exports.Target16Filled = wrapIcon_1.default( /*#__PURE__*/Target16FilledIcon, 'Target16Filled');

const Target16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm6-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z",
    fill: primaryFill
  }));
};

exports.Target16Regular = wrapIcon_1.default( /*#__PURE__*/Target16RegularIcon, 'Target16Regular');

const Target20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z",
    fill: primaryFill
  }));
};

exports.Target20Filled = wrapIcon_1.default( /*#__PURE__*/Target20FilledIcon, 'Target20Filled');

const Target20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8 4a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    fill: primaryFill
  }));
};

exports.Target20Regular = wrapIcon_1.default( /*#__PURE__*/Target20RegularIcon, 'Target20Regular');

const Target24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-2a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    fill: primaryFill
  }));
};

exports.Target24Filled = wrapIcon_1.default( /*#__PURE__*/Target24FilledIcon, 'Target24Filled');

const Target24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-2a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z",
    fill: primaryFill
  }));
};

exports.Target24Regular = wrapIcon_1.default( /*#__PURE__*/Target24RegularIcon, 'Target24Regular');

const Target32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 13.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 8.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM11.25 16a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z",
    fill: primaryFill
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5ZM6.25 16a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Z",
    fill: primaryFill
  }));
};

exports.Target32Filled = wrapIcon_1.default( /*#__PURE__*/Target32FilledIcon, 'Target32Filled');

const Target32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-2a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM4 16a12 12 0 1 1 24 0 12 12 0 0 1-24 0ZM16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z",
    fill: primaryFill
  }));
};

exports.Target32Regular = wrapIcon_1.default( /*#__PURE__*/Target32RegularIcon, 'Target32Regular');

const TargetArrow16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 1.5a.5.5 0 0 0-.85-.35l-2 2A.5.5 0 0 0 9 3.5v2.8l-.74.73A1 1 0 0 0 7 8a1 1 0 1 0 1.97-.26L9.7 7h2.79a.5.5 0 0 0 .35-.15l2-2A.5.5 0 0 0 14.5 4H12V1.5Zm1.94 5.68a6 6 0 1 1-5.12-5.12l-.38.38A1.5 1.5 0 0 0 8 3.5 4.5 4.5 0 1 0 12.5 8c.4 0 .78-.16 1.06-.44l.38-.38ZM8 4.5A3.5 3.5 0 1 0 11.5 8h-1.38l-.12.13A2 2 0 1 1 7.87 6L8 5.88V4.5Z",
    fill: primaryFill
  }));
};

exports.TargetArrow16Filled = wrapIcon_1.default( /*#__PURE__*/TargetArrow16FilledIcon, 'TargetArrow16Filled');

const TargetArrow16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M11.7 1.04c.18.08.3.26.3.46V4h2.5a.5.5 0 0 1 .35.85l-2 2a.5.5 0 0 1-.35.15H9.7l-.73.74A1 1 0 1 1 7 8v-.05a1 1 0 0 1 1.26-.92L9 6.3V3.5a.5.5 0 0 1 .15-.35l2-2a.5.5 0 0 1 .54-.11ZM12.3 6l1-1h-1.8a.5.5 0 0 1-.5-.5V2.7l-1 1V6h2.3Zm1.65 1.18a6 6 0 1 1-5.12-5.12l-.39.38a1.5 1.5 0 0 0-.35.56H8a5 5 0 1 0 5 4.91c.2-.07.4-.19.56-.35l.39-.38ZM8 4.5A3.5 3.5 0 1 0 11.5 8h-1A2.5 2.5 0 1 1 8 5.5v-1Z",
    fill: primaryFill
  }));
};

exports.TargetArrow16Regular = wrapIcon_1.default( /*#__PURE__*/TargetArrow16RegularIcon, 'TargetArrow16Regular');

const TargetArrow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.6 7.52a8 8 0 1 1-5.11-5.13l-1.05 1.05a1.5 1.5 0 0 0-.16.19 6.5 6.5 0 1 0 5.09 5.1l.2-.17 1.03-1.04ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.55A3.5 3.5 0 1 0 13.35 9h1.55ZM10 11.5a1.5 1.5 0 0 0 1.45-1.89l1.58-1.58a.74.74 0 0 0 .03-.03h2.44a.5.5 0 0 0 .35-.15l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.85-.35l-2 2a.5.5 0 0 0-.15.35v2.44a.76.76 0 0 0-.03.03l-1.58 1.58a1.5 1.5 0 1 0-.4 2.95Z",
    fill: primaryFill
  }));
};

exports.TargetArrow20Filled = wrapIcon_1.default( /*#__PURE__*/TargetArrow20FilledIcon, 'TargetArrow20Filled');

const TargetArrow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.96 5.3a.5.5 0 0 1-.1.55l-2 2a.5.5 0 0 1-.36.15h-2.8l-1.35 1.35a1.5 1.5 0 1 1-.7-.7L12 7.29V4.5a.5.5 0 0 1 .15-.35l2-2a.5.5 0 0 1 .85.35V5h2.5c.2 0 .38.12.46.3ZM16.3 6H14.5a.5.5 0 0 1-.5-.5V3.7l-1 1V7h2.3l1-1Zm1.32 1.52a8 8 0 1 1-5.12-5.13l-.81.81A7.02 7.02 0 0 0 3 10a7 7 0 1 0 13.8-1.68l.8-.8ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.03A4 4 0 1 0 13.87 9h1.03Z",
    fill: primaryFill
  }));
};

exports.TargetArrow20Regular = wrapIcon_1.default( /*#__PURE__*/TargetArrow20RegularIcon, 'TargetArrow20Regular');

const TargetArrow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.78 6.78a.75.75 0 0 0-.53-1.28H18.5V2.75a.75.75 0 0 0-1.28-.53l-2.5 2.5a.75.75 0 0 0-.22.53v2.84l-1.98 1.98a2 2 0 1 0 1.41 1.41l1.98-1.98h2.84c.2 0 .39-.08.53-.22l2.5-2.5ZM12 2c1.2 0 2.36.21 3.42.6l-1.4 1.41-.18.2A8.02 8.02 0 0 0 4 12a8 8 0 1 0 15.79-1.84l.2-.17 1.4-1.41A10 10 0 1 1 12 2Zm0 4c.52 0 1.02.07 1.5.19v1.48l-.41.42-.05.05a4 4 0 1 0 2.82 2.82l.05-.05.42-.41h1.48A6.01 6.01 0 1 1 12 6Z",
    fill: primaryFill
  }));
};

exports.TargetArrow24Filled = wrapIcon_1.default( /*#__PURE__*/TargetArrow24FilledIcon, 'TargetArrow24Filled');

const TargetArrow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 2c1.2 0 2.36.21 3.42.6l-1.19 1.2a8.51 8.51 0 1 0 5.97 5.97l1.2-1.2A10 10 0 1 1 12 2Zm0 4c.52 0 1.02.07 1.5.19v1.57a4.5 4.5 0 1 0 2.74 2.74h1.57A6.01 6.01 0 1 1 12 6Zm2 6a2 2 0 1 1-1.22-1.84l1.72-1.72V5.25c0-.2.08-.39.22-.53l2.5-2.5a.75.75 0 0 1 1.28.53V5.5h2.75a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-.53.22h-3.19l-1.72 1.72c.1.24.16.5.16.78Zm4.44-4 1-1h-1.69a.75.75 0 0 1-.75-.75V4.56l-1 1v2.38a.7.7 0 0 1 .06.06h2.38Z",
    fill: primaryFill
  }));
};

exports.TargetArrow24Regular = wrapIcon_1.default( /*#__PURE__*/TargetArrow24RegularIcon, 'TargetArrow24Regular');

const TargetEdit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4.5 8a3.5 3.5 0 0 1 6.86-.98l-1.4 1.4A2 2 0 0 0 8 6a2 2 0 1 0 .42 3.95l-1.08 1.08-.3.34A3.5 3.5 0 0 1 4.5 8ZM8 3.5a4.5 4.5 0 0 1 4.18 2.83c.45-.26.97-.37 1.48-.32a6 6 0 1 0-7.54 7.69l.23-.91c.04-.19.1-.36.18-.54A4.5 4.5 0 0 1 8 3.5Zm3.49 4.8L8.3 11.48l-.26.26a2.77 2.77 0 0 0-.73 1.29l-.23.9-.07.31a.6.6 0 0 0 .73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 0 0-2.09-2.31l-.11.1-.85.85Z",
    fill: primaryFill
  }));
};

exports.TargetEdit16Filled = wrapIcon_1.default( /*#__PURE__*/TargetEdit16FilledIcon, 'TargetEdit16Filled');

const TargetEdit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 4.5a3.5 3.5 0 0 0-.95 6.87c.09-.12.19-.23.3-.34l.53-.53a2.5 2.5 0 1 1 2.62-2.62l.86-.86A3.5 3.5 0 0 0 8 4.5Zm4.64 1.63a5 5 0 1 0-6.28 6.6l-.01.06-.23.9a6 6 0 1 1 7.54-7.68c-.34-.03-.7 0-1.02.12ZM8.3 11.48l3.18-3.18.85-.85a1.56 1.56 0 0 1 2.2 2.2l-4.28 4.3c-.36.35-.8.6-1.3.73l-1.2.3a.6.6 0 0 1-.74-.74l.07-.3.23-.9.02-.08c.13-.46.37-.88.7-1.22l.27-.26Z",
    fill: primaryFill
  }));
};

exports.TargetEdit16Regular = wrapIcon_1.default( /*#__PURE__*/TargetEdit16RegularIcon, 'TargetEdit16Regular');

const TargetEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.05l-2.42 2.4a3.5 3.5 0 1 0-.23.23l-2.08 2.09c-.1.1-.2.21-.28.33A5 5 0 0 1 5 10Zm5-6.5c3.28 0 5.99 2.43 6.43 5.59.5-.13 1.02-.12 1.52.03A8 8 0 1 0 9 17.93c0-.09.02-.18.05-.28l.3-1.19A6.5 6.5 0 0 1 10 3.5Zm.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
};

exports.TargetEdit20Filled = wrapIcon_1.default( /*#__PURE__*/TargetEdit20FilledIcon, 'TargetEdit20Filled');

const TargetEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.06l-1.15 1.15a4 4 0 1 0-2.76 2.76l-.82.82c-.1.1-.2.21-.29.33A5 5 0 0 1 5 10Zm5-7a7 7 0 0 1 6.93 6c.34-.02.69.02 1.02.12a8 8 0 1 0-8.94 8.82c0-.1.02-.2.05-.29l.17-.7A7 7 0 0 1 10 3Zm.98 12.38 4.83-4.83a1.87 1.87 0 0 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    fill: primaryFill
  }));
};

exports.TargetEdit20Regular = wrapIcon_1.default( /*#__PURE__*/TargetEdit20RegularIcon, 'TargetEdit20Regular');

const TargetEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-2a6 6 0 1 1 11.99.37l-5.5 5.5-.12.12H12a6 6 0 0 1-6-6Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a8 8 0 0 1 7.95 7.09 3.3 3.3 0 0 1 2.02.16A10 10 0 1 0 11 21.95c0-.18.02-.36.06-.54l.36-1.43A8 8 0 0 1 12 4Zm7.1 8.67-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TargetEdit24Filled = wrapIcon_1.default( /*#__PURE__*/TargetEdit24FilledIcon, 'TargetEdit24Filled');

const TargetEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-2a6 6 0 1 1 11.99.37l-2.66 2.66A4.48 4.48 0 0 0 12 7.5a4.5 4.5 0 1 0 3.03 7.83l-2.54 2.53-.12.13H12A6 6 0 0 1 6 12Zm6-8.5a8.5 8.5 0 0 1 8.44 7.51 3.3 3.3 0 0 1 1.53.24A10 10 0 1 0 11 21.95c0-.18.02-.36.06-.54l.24-.94A8.5 8.5 0 0 1 12 3.5Zm7.1 9.17-5.9 5.9c-.35.34-.59.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.TargetEdit24Regular = wrapIcon_1.default( /*#__PURE__*/TargetEdit24RegularIcon, 'TargetEdit24Regular');

const TaskListAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 3.35a.5.5 0 1 0-.7-.7L3.5 4.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm2.9.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm1.27 6.5c.05-.52.17-1.03.35-1.5H8.75a.75.75 0 0 0 0 1.5h1.27ZM5.85 8.85a.5.5 0 1 0-.7-.7L3.5 9.79l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListAdd20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListAdd20FilledIcon, 'TaskListAdd20Filled');

const TaskListAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 3.35a.5.5 0 1 0-.7-.7L3.5 4.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM8.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1.52 6c.03-.34.1-.68.19-1H8.5a.5.5 0 0 0 0 1h1.52ZM5.85 8.85a.5.5 0 1 0-.7-.7L3.5 9.79l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListAdd20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListAdd20RegularIcon, 'TaskListAdd20Regular');

const TaskListAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.7 2.3a1 1 0 0 0-1.4 0L4 3.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM11 17.5c0 .17 0 .33.02.5H10a1 1 0 0 1-.12-2H11.18c-.12.48-.18.98-.18 1.5Zm6.5-6.5c1.27 0 2.46.37 3.47 1h.15a1 1 0 0 0-.12-2H9.88a1 1 0 0 0 .12 2h4.03c1-.63 2.2-1 3.47-1ZM21 4H9.88A1 1 0 0 0 10 6h11.12A1 1 0 0 0 21 4ZM6.7 15.3a1 1 0 0 0-1.4 0L4 16.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM5.3 8.8a1 1 0 0 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0l-1-1a1 1 0 0 1 1.4-1.4l.3.29 1.3-1.3ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TaskListAdd24Filled = wrapIcon_1.default( /*#__PURE__*/TaskListAdd24FilledIcon, 'TaskListAdd24Filled');

const TaskListAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.78 3.78a.75.75 0 0 0-1.06-1.06L3.75 4.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5ZM11 17.5c0 .34.03.68.08 1H9.75a.75.75 0 0 1-.1-1.49h1.37a6.6 6.6 0 0 0-.02.49Zm6.5-6.5c1.27 0 2.46.37 3.47 1h.38a.75.75 0 0 0-.1-1.5H9.65a.75.75 0 0 0 .1 1.5h4.28c1-.63 2.2-1 3.47-1Zm3.75-7H9.65a.75.75 0 0 0 .1 1.5h11.6a.75.75 0 0 0-.1-1.5ZM6.78 16.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm0-7.56c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TaskListAdd24Regular = wrapIcon_1.default( /*#__PURE__*/TaskListAdd24RegularIcon, 'TaskListAdd24Regular');

const TaskListLtr20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 4.35a.5.5 0 1 0-.7-.7L3.5 5.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm2.9.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM8 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm-2.15-5.4a.5.5 0 1 0-.7-.7L3.5 10.79l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListLtr20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListLtr20FilledIcon, 'TaskListLtr20Filled');

const TaskListLtr20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M5.85 4.35a.5.5 0 1 0-.7-.7L3.5 5.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM8.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM8 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM5.85 9.85a.5.5 0 1 0-.7-.7L3.5 10.79l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListLtr20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListLtr20RegularIcon, 'TaskListLtr20Regular');

const TaskListLtr24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.7 3.3a1 1 0 0 0-1.4 0L4 4.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM21 17H9.88a1 1 0 0 0 .12 2h11l.12-.01a1 1 0 0 0-.12-2Zm0-6H9.88a1 1 0 0 0 .12 2h11.12a1 1 0 0 0-.12-2Zm0-6H9.88A1 1 0 0 0 10 7h11.12A1 1 0 0 0 21 5ZM6.7 16.3a1 1 0 0 0-1.4 0L4 17.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM5.3 9.8a1 1 0 0 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0l-1-1a1 1 0 1 1 1.4-1.4l.3.29 1.3-1.3Z",
    fill: primaryFill
  }));
};

exports.TaskListLtr24Filled = wrapIcon_1.default( /*#__PURE__*/TaskListLtr24FilledIcon, 'TaskListLtr24Filled');

const TaskListLtr24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.78 4.78a.75.75 0 0 0-1.06-1.06L3.75 5.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm14.47 13.23H9.65a.75.75 0 0 0 .1 1.5h11.5l.1-.01a.75.75 0 0 0-.1-1.5Zm0-6.51H9.65a.75.75 0 0 0 .1 1.5h11.6a.75.75 0 0 0-.1-1.5Zm0-6.5H9.65a.75.75 0 0 0 .1 1.5h11.6a.75.75 0 0 0-.1-1.5ZM6.78 17.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm0-7.56c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.TaskListLtr24Regular = wrapIcon_1.default( /*#__PURE__*/TaskListLtr24RegularIcon, 'TaskListLtr24Regular');

const TaskListRtl20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm-15.1.15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM2 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm13.85-3.4 2-2a.5.5 0 0 0-.7-.7l-1.65 1.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0Zm2 3-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.TaskListRtl20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListRtl20FilledIcon, 'TaskListRtl20Filled');

const TaskListRtl20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM2.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm15.85-5.65a.5.5 0 0 0-.7-.7l-1.65 1.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z",
    fill: primaryFill
  }));
};

exports.TaskListRtl20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListRtl20RegularIcon, 'TaskListRtl20Regular');

const TaskListRtl24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.7 3.3a1 1 0 0 0-1.4 0L19 4.58l-.3-.3a1 1 0 1 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM14 17H2.88A1 1 0 0 0 3 19h11.12a1 1 0 0 0-.12-2Zm0-6H2.88A1 1 0 0 0 3 13h11.12a1 1 0 0 0-.12-2Zm0-6H2.88A1 1 0 0 0 3 7h11.12A1 1 0 0 0 14 5Zm7.7 11.3a1 1 0 0 0-1.4 0L19 17.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42Zm-1.4-6.5a1 1 0 1 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0l-1-1a1 1 0 0 1 1.4-1.4l.3.29 1.3-1.3Z",
    fill: primaryFill
  }));
};

exports.TaskListRtl24Filled = wrapIcon_1.default( /*#__PURE__*/TaskListRtl24FilledIcon, 'TaskListRtl24Filled');

const TaskListRtl24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm-7.53 13.23H2.65a.75.75 0 0 0 .1 1.5h11.5l.1-.01a.75.75 0 0 0-.1-1.5Zm0-6.51H2.65a.75.75 0 0 0 .1 1.5h11.6a.75.75 0 0 0-.1-1.5Zm0-6.5H2.65a.75.75 0 0 0 .1 1.5h11.6a.75.75 0 0 0-.1-1.5Zm7.53 12.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm0-7.56c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.TaskListRtl24Regular = wrapIcon_1.default( /*#__PURE__*/TaskListRtl24RegularIcon, 'TaskListRtl24Regular');

const TaskListSquareAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6A5.5 5.5 0 0 0 9.6 17H6a3 3 0 0 1-3-3V6Zm6.35.4a.5.5 0 0 0-.7 0L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1a.5.5 0 0 0 0-.7Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm8 7.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4-2V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAdd20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAdd20FilledIcon, 'TaskListSquareAdd20Filled');

const TaskListSquareAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6Zm3.35 4.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.15-3.9c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Zm8.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAdd20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAdd20RegularIcon, 'TaskListSquareAdd20Regular');

const TaskListSquareAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77A6.5 6.5 0 0 0 12.02 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25Zm9.5 3c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75Zm-1.72-.47a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Zm0 4.44a.75.75 0 0 0-1.06 0l-1.47 1.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2c.3-.3.3-.77 0-1.06ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAdd24Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAdd24FilledIcon, 'TaskListSquareAdd24Filled');

const TaskListSquareAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h5.77c-.3-.46-.53-.97-.7-1.5H6.24c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v5.06c.53.18 1.04.42 1.5.71V6.25C21 4.45 19.54 3 17.75 3H6.25Zm6.25 6.25c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-1.72-.47a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Zm0 4.44c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareAdd24Regular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareAdd24RegularIcon, 'TaskListSquareAdd24Regular');

const TaskListSquareDatabase20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5v-4.04l-1.4 1.4a.5.5 0 0 1-.69 0l-.75-.68a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41a.5.5 0 0 1 .36-.15v-.75c0-1.22.88-2.11 1.83-2.64A7.68 7.68 0 0 1 14.5 7c.89 0 1.74.13 2.5.36V6a3 3 0 0 0-3-3H6Zm11 5.42A7.25 7.25 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.02 2.5 4.5 2.5c2.49 0 4.5-1.12 4.5-2.5 0-.87-.8-1.63-2-2.08ZM9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareDatabase20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareDatabase20FilledIcon, 'TaskListSquareDatabase20Filled');

const TaskListSquareDatabase20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5V16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1.13c.35.06.68.14 1 .23V6a3 3 0 0 0-3-3H6Zm11 5.42A7.81 7.81 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm-8 2.83a.5.5 0 0 0-.35.15l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9 12.45v-1.2Zm.35-4.15a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareDatabase20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareDatabase20RegularIcon, 'TaskListSquareDatabase20Regular');

const TaskListSquareLtr16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7Zm6.5 6c0 .28.22.5.5.5h2.25a.5.5 0 0 0 0-1H9a.5.5 0 0 0-.5.5ZM9 6a.5.5 0 0 0 0 1h2.25a.5.5 0 0 0 0-1H9ZM7.35 9.15a.5.5 0 0 0-.7 0L5.5 10.29l-.4-.4a.5.5 0 0 0-.7.72l.75.74c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0 0-.7Zm0-3.3a.5.5 0 1 0-.7-.7L5.5 6.29l-.4-.4a.5.5 0 0 0-.7.72l.75.74c.2.2.5.2.7 0l1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtr16Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtr16FilledIcon, 'TaskListSquareLtr16Filled');

const TaskListSquareLtr16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7Zm4 7.5c0-.28.22-.5.5-.5h2.25a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5ZM9 6a.5.5 0 0 0 0 1h2.25a.5.5 0 0 0 0-1H9ZM7.35 9.15c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7 0l-.75-.74a.5.5 0 1 1 .7-.71l.4.4 1.15-1.15c.2-.2.5-.2.7 0Zm0-3.3a.5.5 0 1 0-.7-.7L5.5 6.29l-.4-.4a.5.5 0 0 0-.7.72l.75.74c.2.2.5.2.7 0l1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtr16Regular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtr16RegularIcon, 'TaskListSquareLtr16Regular');

const TaskListSquareLtr20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm6.35 1.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7ZM11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtr20Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtr20FilledIcon, 'TaskListSquareLtr20Filled');

const TaskListSquareLtr20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M9.35 7.1a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1Zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtr20Regular = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtr20RegularIcon, 'TaskListSquareLtr20Regular');

const TaskListSquareLtr24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor'
  } = props;
  return /*#__PURE__*/React.createElement(react_native_svg_1.default, _extends({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement(react_native_svg_1.Path, {
    d: "M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25Zm9.5 3c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75Zm.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5Zm-2.47-5.22a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Zm0 4.44a.75.75 0 0 0-1.06 0l-1.47 1.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2c.3-.3.3-.77 0-1.06Z",
    fill: primaryFill
  }));
};

exports.TaskListSquareLtr24Filled = wrapIcon_1.default( /*#__PURE__*/TaskListSquareLtr24FilledIcon, 'TaskListSquareLtr24Filled');