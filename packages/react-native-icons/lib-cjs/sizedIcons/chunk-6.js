"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClipboardError20Regular = exports.ClipboardError20Filled = exports.ClipboardError16Regular = exports.ClipboardError16Filled = exports.ClipboardEdit20Regular = exports.ClipboardEdit20Filled = exports.ClipboardDay24Regular = exports.ClipboardDay24Filled = exports.ClipboardDay20Regular = exports.ClipboardDay20Filled = exports.ClipboardDay16Regular = exports.ClipboardDay16Filled = exports.ClipboardDataBar32Regular = exports.ClipboardDataBar32Filled = exports.ClipboardDataBar24Regular = exports.ClipboardDataBar24Filled = exports.ClipboardDataBar20Regular = exports.ClipboardDataBar20Filled = exports.ClipboardCode24Regular = exports.ClipboardCode24Filled = exports.ClipboardCode20Regular = exports.ClipboardCode20Filled = exports.ClipboardCode16Regular = exports.ClipboardCode16Filled = exports.ClipboardClock24Regular = exports.ClipboardClock24Filled = exports.ClipboardClock20Regular = exports.ClipboardClock20Filled = exports.ClipboardCheckmark24Regular = exports.ClipboardCheckmark24Filled = exports.ClipboardCheckmark20Regular = exports.ClipboardCheckmark20Filled = exports.ClipboardBulletListRtl20Regular = exports.ClipboardBulletListRtl20Filled = exports.ClipboardBulletListRtl16Regular = exports.ClipboardBulletListRtl16Filled = exports.ClipboardBulletListLtr20Regular = exports.ClipboardBulletListLtr20Filled = exports.ClipboardBulletListLtr16Regular = exports.ClipboardBulletListLtr16Filled = exports.ClipboardArrowRight24Regular = exports.ClipboardArrowRight24Filled = exports.ClipboardArrowRight20Regular = exports.ClipboardArrowRight20Filled = exports.ClipboardArrowRight16Regular = exports.ClipboardArrowRight16Filled = exports.Clipboard3Day24Regular = exports.Clipboard3Day24Filled = exports.Clipboard3Day20Regular = exports.Clipboard3Day20Filled = void 0;
exports.ClipboardSearch20Regular = exports.ClipboardSearch20Filled = exports.ClipboardPulse24Regular = exports.ClipboardPulse24Filled = exports.ClipboardPulse20Regular = exports.ClipboardPulse20Filled = exports.ClipboardPaste24Regular = exports.ClipboardPaste24Filled = exports.ClipboardPaste20Regular = exports.ClipboardPaste20Filled = exports.ClipboardPaste16Regular = exports.ClipboardPaste16Filled = exports.ClipboardNote20Regular = exports.ClipboardNote20Filled = exports.ClipboardNote16Regular = exports.ClipboardNote16Filled = exports.ClipboardMultiple16Regular = exports.ClipboardMultiple16Filled = exports.ClipboardMore24Regular = exports.ClipboardMore24Filled = exports.ClipboardMore20Regular = exports.ClipboardMore20Filled = exports.ClipboardMonth24Regular = exports.ClipboardMonth24Filled = exports.ClipboardMonth20Regular = exports.ClipboardMonth20Filled = exports.ClipboardMonth16Regular = exports.ClipboardMonth16Filled = exports.ClipboardLink24Regular = exports.ClipboardLink24Filled = exports.ClipboardLink20Regular = exports.ClipboardLink20Filled = exports.ClipboardLink16Regular = exports.ClipboardLink16Filled = exports.ClipboardLetter24Regular = exports.ClipboardLetter24Filled = exports.ClipboardLetter20Regular = exports.ClipboardLetter20Filled = exports.ClipboardLetter16Regular = exports.ClipboardLetter16Filled = exports.ClipboardImage24Regular = exports.ClipboardImage24Filled = exports.ClipboardImage20Regular = exports.ClipboardImage20Filled = exports.ClipboardHeart24Regular = exports.ClipboardHeart24Filled = exports.ClipboardHeart20Regular = exports.ClipboardHeart20Filled = exports.ClipboardError24Regular = exports.ClipboardError24Filled = void 0;
exports.Clock16Regular = exports.Clock16Filled = exports.Clock12Regular = exports.Clock12Filled = exports.ClipboardTextRtl24Regular = exports.ClipboardTextRtl24Filled = exports.ClipboardTextRtl20Regular = exports.ClipboardTextRtl20Filled = exports.ClipboardTextRtl16Regular = exports.ClipboardTextRtl16Filled = exports.ClipboardTextLtr32Regular = exports.ClipboardTextLtr32Filled = exports.ClipboardTextLtr24Regular = exports.ClipboardTextLtr24Filled = exports.ClipboardTextLtr20Regular = exports.ClipboardTextLtr20Filled = exports.ClipboardTextLtr16Regular = exports.ClipboardTextLtr16Filled = exports.ClipboardTextEdit32Regular = exports.ClipboardTextEdit32Filled = exports.ClipboardTextEdit24Regular = exports.ClipboardTextEdit24Filled = exports.ClipboardTextEdit20Regular = exports.ClipboardTextEdit20Filled = exports.ClipboardText32Regular = exports.ClipboardText32Filled = exports.ClipboardTaskListRtl24Regular = exports.ClipboardTaskListRtl24Filled = exports.ClipboardTaskListRtl20Regular = exports.ClipboardTaskListRtl20Filled = exports.ClipboardTaskListLtr24Regular = exports.ClipboardTaskListLtr24Filled = exports.ClipboardTaskListLtr20Regular = exports.ClipboardTaskListLtr20Filled = exports.ClipboardTaskAdd24Regular = exports.ClipboardTaskAdd24Filled = exports.ClipboardTaskAdd20Regular = exports.ClipboardTaskAdd20Filled = exports.ClipboardTask24Regular = exports.ClipboardTask24Filled = exports.ClipboardTask20Regular = exports.ClipboardTask20Filled = exports.ClipboardTask16Regular = exports.ClipboardTask16Filled = exports.ClipboardSettings24Regular = exports.ClipboardSettings24Filled = exports.ClipboardSettings20Regular = exports.ClipboardSettings20Filled = exports.ClipboardSearch24Regular = exports.ClipboardSearch24Filled = void 0;
exports.ClosedCaptionOff20Regular = exports.ClosedCaptionOff20Filled = exports.ClosedCaptionOff16Regular = exports.ClosedCaptionOff16Filled = exports.ClosedCaption48Regular = exports.ClosedCaption48Filled = exports.ClosedCaption32Regular = exports.ClosedCaption32Filled = exports.ClosedCaption28Regular = exports.ClosedCaption28Filled = exports.ClosedCaption24Regular = exports.ClosedCaption24Filled = exports.ClosedCaption20Regular = exports.ClosedCaption20Filled = exports.ClosedCaption16Regular = exports.ClosedCaption16Filled = exports.ClockToolbox24Regular = exports.ClockToolbox24Filled = exports.ClockToolbox20Regular = exports.ClockToolbox20Filled = exports.ClockPause24Regular = exports.ClockPause24Filled = exports.ClockPause20Regular = exports.ClockPause20Filled = exports.ClockDismiss24Regular = exports.ClockDismiss24Filled = exports.ClockDismiss20Regular = exports.ClockDismiss20Filled = exports.ClockArrowDownload24Regular = exports.ClockArrowDownload24Filled = exports.ClockArrowDownload20Regular = exports.ClockArrowDownload20Filled = exports.ClockAlarm32Regular = exports.ClockAlarm32Filled = exports.ClockAlarm24Regular = exports.ClockAlarm24Filled = exports.ClockAlarm20Regular = exports.ClockAlarm20Filled = exports.ClockAlarm16Regular = exports.ClockAlarm16Filled = exports.Clock48Regular = exports.Clock48Filled = exports.Clock32Regular = exports.Clock32Filled = exports.Clock28Regular = exports.Clock28Filled = exports.Clock24Regular = exports.Clock24Filled = exports.Clock20Regular = exports.Clock20Filled = void 0;
exports.CloudArrowUp16Regular = exports.CloudArrowUp16Filled = exports.CloudArrowDown48Regular = exports.CloudArrowDown48Filled = exports.CloudArrowDown32Regular = exports.CloudArrowDown32Filled = exports.CloudArrowDown28Regular = exports.CloudArrowDown28Filled = exports.CloudArrowDown24Regular = exports.CloudArrowDown24Filled = exports.CloudArrowDown20Regular = exports.CloudArrowDown20Filled = exports.CloudArrowDown16Regular = exports.CloudArrowDown16Filled = exports.CloudArchive48Regular = exports.CloudArchive48Filled = exports.CloudArchive32Regular = exports.CloudArchive32Filled = exports.CloudArchive28Regular = exports.CloudArchive28Filled = exports.CloudArchive24Regular = exports.CloudArchive24Filled = exports.CloudArchive20Regular = exports.CloudArchive20Filled = exports.CloudArchive16Regular = exports.CloudArchive16Filled = exports.CloudAdd24Regular = exports.CloudAdd24Filled = exports.CloudAdd20Regular = exports.CloudAdd20Filled = exports.CloudAdd16Regular = exports.CloudAdd16Filled = exports.Cloud48Regular = exports.Cloud48Filled = exports.Cloud32Regular = exports.Cloud32Filled = exports.Cloud28Regular = exports.Cloud28Filled = exports.Cloud24Regular = exports.Cloud24Filled = exports.Cloud20Regular = exports.Cloud20Filled = exports.Cloud16Regular = exports.Cloud16Filled = exports.ClosedCaptionOff48Regular = exports.ClosedCaptionOff48Filled = exports.ClosedCaptionOff28Regular = exports.ClosedCaptionOff28Filled = exports.ClosedCaptionOff24Regular = exports.ClosedCaptionOff24Filled = void 0;
exports.CloudError32Regular = exports.CloudError32Filled = exports.CloudError28Regular = exports.CloudError28Filled = exports.CloudError24Regular = exports.CloudError24Filled = exports.CloudError20Regular = exports.CloudError20Filled = exports.CloudError16Regular = exports.CloudError16Filled = exports.CloudEdit24Regular = exports.CloudEdit24Filled = exports.CloudEdit20Regular = exports.CloudEdit20Filled = exports.CloudEdit16Regular = exports.CloudEdit16Filled = exports.CloudDismiss48Regular = exports.CloudDismiss48Filled = exports.CloudDismiss32Regular = exports.CloudDismiss32Filled = exports.CloudDismiss28Regular = exports.CloudDismiss28Filled = exports.CloudDismiss24Regular = exports.CloudDismiss24Filled = exports.CloudDismiss20Regular = exports.CloudDismiss20Filled = exports.CloudDismiss16Regular = exports.CloudDismiss16Filled = exports.CloudCheckmark48Regular = exports.CloudCheckmark48Filled = exports.CloudCheckmark32Regular = exports.CloudCheckmark32Filled = exports.CloudCheckmark28Regular = exports.CloudCheckmark28Filled = exports.CloudCheckmark24Regular = exports.CloudCheckmark24Filled = exports.CloudCheckmark20Regular = exports.CloudCheckmark20Filled = exports.CloudCheckmark16Regular = exports.CloudCheckmark16Filled = exports.CloudArrowUp48Regular = exports.CloudArrowUp48Filled = exports.CloudArrowUp32Regular = exports.CloudArrowUp32Filled = exports.CloudArrowUp28Regular = exports.CloudArrowUp28Filled = exports.CloudArrowUp24Regular = exports.CloudArrowUp24Filled = exports.CloudArrowUp20Regular = exports.CloudArrowUp20Filled = void 0;
exports.CloudWords32Regular = exports.CloudWords32Filled = exports.CloudWords28Regular = exports.CloudWords28Filled = exports.CloudWords24Regular = exports.CloudWords24Filled = exports.CloudWords20Regular = exports.CloudWords20Filled = exports.CloudWords16Regular = exports.CloudWords16Filled = exports.CloudSync48Regular = exports.CloudSync48Filled = exports.CloudSync32Regular = exports.CloudSync32Filled = exports.CloudSync28Regular = exports.CloudSync28Filled = exports.CloudSync24Regular = exports.CloudSync24Filled = exports.CloudSync20Regular = exports.CloudSync20Filled = exports.CloudSync16Regular = exports.CloudSync16Filled = exports.CloudSwap24Regular = exports.CloudSwap24Filled = exports.CloudSwap20Regular = exports.CloudSwap20Filled = exports.CloudOff48Regular = exports.CloudOff48Filled = exports.CloudOff32Regular = exports.CloudOff32Filled = exports.CloudOff28Regular = exports.CloudOff28Filled = exports.CloudOff24Regular = exports.CloudOff24Filled = exports.CloudOff20Regular = exports.CloudOff20Filled = exports.CloudOff16Regular = exports.CloudOff16Filled = exports.CloudLink24Regular = exports.CloudLink24Filled = exports.CloudLink20Regular = exports.CloudLink20Filled = exports.CloudLink16Regular = exports.CloudLink16Filled = exports.CloudFlow24Regular = exports.CloudFlow24Filled = exports.CloudFlow20Regular = exports.CloudFlow20Filled = exports.CloudError48Regular = exports.CloudError48Filled = void 0;
exports.CodeTextOff16Regular = exports.CodeTextOff16Filled = exports.CodeTextEdit20Regular = exports.CodeTextEdit20Filled = exports.CodeText20Regular = exports.CodeText20Filled = exports.CodeText16Regular = exports.CodeText16Filled = exports.CodeRbRectangle16Regular = exports.CodeRbRectangle16Filled = exports.CodeRb16Regular = exports.CodeRb16Filled = exports.CodePyRectangle16Regular = exports.CodePyRectangle16Filled = exports.CodePy16Regular = exports.CodePy16Filled = exports.CodeJsRectangle16Regular = exports.CodeJsRectangle16Filled = exports.CodeJs16Regular = exports.CodeJs16Filled = exports.CodeFsRectangle16Regular = exports.CodeFsRectangle16Filled = exports.CodeFs16Regular = exports.CodeFs16Filled = exports.CodeCsRectangle16Regular = exports.CodeCsRectangle16Filled = exports.CodeCs16Regular = exports.CodeCs16Filled = exports.CodeCircle20Regular = exports.CodeCircle20Filled = exports.CodeBlock48Regular = exports.CodeBlock48Filled = exports.CodeBlock32Regular = exports.CodeBlock32Filled = exports.CodeBlock28Regular = exports.CodeBlock28Filled = exports.CodeBlock24Regular = exports.CodeBlock24Filled = exports.CodeBlock20Regular = exports.CodeBlock20Filled = exports.CodeBlock16Regular = exports.CodeBlock16Filled = exports.Code24Regular = exports.Code24Filled = exports.Code20Regular = exports.Code20Filled = exports.Code16Regular = exports.Code16Filled = exports.CloudWords48Regular = exports.CloudWords48Filled = void 0;
exports.Column20Filled = exports.ColorLineAccent24Regular = exports.ColorLineAccent20Regular = exports.ColorLineAccent16Regular = exports.ColorLine24Regular = exports.ColorLine24Filled = exports.ColorLine20Regular = exports.ColorLine20Filled = exports.ColorLine16Regular = exports.ColorLine16Filled = exports.ColorFillAccent28Regular = exports.ColorFillAccent24Regular = exports.ColorFillAccent20Regular = exports.ColorFillAccent16Regular = exports.ColorFill28Regular = exports.ColorFill28Filled = exports.ColorFill24Regular = exports.ColorFill24Filled = exports.ColorFill20Regular = exports.ColorFill20Filled = exports.ColorFill16Regular = exports.ColorFill16Filled = exports.ColorBackgroundAccent24Regular = exports.ColorBackgroundAccent20Regular = exports.ColorBackground24Regular = exports.ColorBackground24Filled = exports.ColorBackground20Regular = exports.ColorBackground20Filled = exports.Color24Regular = exports.Color24Filled = exports.Color20Regular = exports.Color20Filled = exports.Color16Regular = exports.Color16Filled = exports.CollectionsAdd24Regular = exports.CollectionsAdd24Filled = exports.CollectionsAdd20Regular = exports.CollectionsAdd20Filled = exports.Collections24Regular = exports.Collections24Filled = exports.Collections20Regular = exports.Collections20Filled = exports.CodeVbRectangle16Regular = exports.CodeVbRectangle16Filled = exports.CodeVb16Regular = exports.CodeVb16Filled = exports.CodeTsRectangle16Regular = exports.CodeTsRectangle16Filled = exports.CodeTs16Regular = exports.CodeTs16Filled = void 0;
exports.CommentArrowLeft20Filled = exports.CommentArrowLeft16Regular = exports.CommentArrowLeft16Filled = exports.CommentArrowLeft12Regular = exports.CommentArrowLeft12Filled = exports.CommentAdd48Regular = exports.CommentAdd48Filled = exports.CommentAdd28Regular = exports.CommentAdd28Filled = exports.CommentAdd24Regular = exports.CommentAdd24Filled = exports.CommentAdd20Regular = exports.CommentAdd20Filled = exports.CommentAdd16Regular = exports.CommentAdd16Filled = exports.CommentAdd12Regular = exports.CommentAdd12Filled = exports.Comment48Regular = exports.Comment48Filled = exports.Comment28Regular = exports.Comment28Filled = exports.Comment24Regular = exports.Comment24Filled = exports.Comment20Regular = exports.Comment20Filled = exports.Comment16Regular = exports.Comment16Filled = exports.Comment12Regular = exports.Comment12Filled = exports.Comma24Regular = exports.Comma24Filled = exports.Comma20Regular = exports.Comma20Filled = exports.ColumnTripleEdit24Regular = exports.ColumnTripleEdit24Filled = exports.ColumnTripleEdit20Regular = exports.ColumnTripleEdit20Filled = exports.ColumnTriple24Regular = exports.ColumnTriple24Filled = exports.ColumnTriple20Regular = exports.ColumnTriple20Filled = exports.ColumnEdit24Regular = exports.ColumnEdit24Filled = exports.ColumnEdit20Regular = exports.ColumnEdit20Filled = exports.ColumnDoubleCompare20Regular = exports.ColumnDoubleCompare20Filled = exports.ColumnArrowRight20Regular = exports.ColumnArrowRight20Filled = exports.Column20Regular = void 0;

const tslib_1 = require("tslib");

const React = tslib_1.__importStar(require("react"));

const wrapIcon_1 = tslib_1.__importDefault(require("../utils/wrapIcon"));

const Clipboard3Day20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-1 11v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0Zm5.5.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5Zm-3-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0Z",
    fill: primaryFill
  }));
};

exports.Clipboard3Day20Filled = wrapIcon_1.default( /*#__PURE__*/Clipboard3Day20FilledIcon, 'Clipboard3Day20Filled');

const Clipboard3Day20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 14.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-1 0v6Zm5.5.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5Zm-3-.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-1 0v6ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clipboard3Day20Regular = wrapIcon_1.default( /*#__PURE__*/Clipboard3Day20RegularIcon, 'Clipboard3Day20Regular');

const Clipboard3Day24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM8 17.25v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0Zm7.25.75a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm-4-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0Z",
    fill: primaryFill
  }));
};

exports.Clipboard3Day24Filled = wrapIcon_1.default( /*#__PURE__*/Clipboard3Day24FilledIcon, 'Clipboard3Day24Filled');

const Clipboard3Day24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 17.25a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v7.5Zm7.25.75a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm-4-.75a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v7.5ZM15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.Clipboard3Day24Regular = wrapIcon_1.default( /*#__PURE__*/Clipboard3Day24RegularIcon, 'Clipboard3Day24Regular');

const ClipboardArrowRight16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v2.1A5.5 5.5 0 0 0 7.34 15H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm8.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L11.29 10H8.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight16FilledIcon, 'ClipboardArrowRight16Filled');

const ClipboardArrowRight16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v2.1c-.32-.16-.65-.3-1-.4V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h1.76c.31.38.67.72 1.08 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm8.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L11.29 10H8.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight16RegularIcon, 'ClipboardArrowRight16Regular');

const ClipboardArrowRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight20FilledIcon, 'ClipboardArrowRight20Filled');

const ClipboardArrowRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight20RegularIcon, 'ClipboardArrowRight20Regular');

const ClipboardArrowRight24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25A6.5 6.5 0 0 0 12.81 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight24FilledIcon, 'ClipboardArrowRight24Filled');

const ClipboardArrowRight24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25c-.47-.2-.98-.34-1.5-.42V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardArrowRight24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardArrowRight24RegularIcon, 'ClipboardArrowRight24Regular');

const ClipboardBulletListLtr16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 7.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM5.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListLtr16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtr16FilledIcon, 'ClipboardBulletListLtr16Filled');

const ClipboardBulletListLtr16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 7.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-.41-9c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.09 3H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListLtr16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtr16RegularIcon, 'ClipboardBulletListLtr16Regular');

const ClipboardBulletListLtr20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1ZM8.5 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1-6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListLtr20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtr20FilledIcon, 'ClipboardBulletListLtr20Filled');

const ClipboardBulletListLtr20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1-6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListLtr20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListLtr20RegularIcon, 'ClipboardBulletListLtr20Regular');

const ClipboardBulletListRtl16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 7.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM10.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListRtl16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtl16FilledIcon, 'ClipboardBulletListRtl16Filled');

const ClipboardBulletListRtl16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 7.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM10.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.09 3H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListRtl16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtl16RegularIcon, 'ClipboardBulletListRtl16Regular');

const ClipboardBulletListRtl20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1ZM8 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm4.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 14.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListRtl20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtl20FilledIcon, 'ClipboardBulletListRtl20Filled');

const ClipboardBulletListRtl20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.75 9.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 14.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardBulletListRtl20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardBulletListRtl20RegularIcon, 'ClipboardBulletListRtl20Regular');

const ClipboardCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmark20FilledIcon, 'ClipboardCheckmark20Filled');

const ClipboardCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmark20RegularIcon, 'ClipboardCheckmark20Regular');

const ClipboardCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25A6.5 6.5 0 0 0 12.81 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmark24FilledIcon, 'ClipboardCheckmark24Filled');

const ClipboardCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25c-.47-.2-.98-.34-1.5-.42V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardCheckmark24RegularIcon, 'ClipboardCheckmark24Regular');

const ClipboardClock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 9.5a.5.5 0 0 0-1 0V11c0 .28.22.5.5.5h1.5a.5.5 0 0 0 0-1h-1v-1ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
    fill: primaryFill
  }));
};

exports.ClipboardClock20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardClock20FilledIcon, 'ClipboardClock20Filled');

const ClipboardClock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 9.5a.5.5 0 0 0-1 0V11c0 .28.22.5.5.5h1.5a.5.5 0 0 0 0-1h-1v-1ZM10 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardClock20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardClock20RegularIcon, 'ClipboardClock20Regular');

const ClipboardClock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.38 13.62c0 .34.27.63.62.63h1.38a.63.63 0 0 0 0-1.25h-.76v-1.63a.63.63 0 0 0-1.24 0v2.25ZM13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM12 8.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardClock24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardClock24FilledIcon, 'ClipboardClock24Filled');

const ClipboardClock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.63 13v-1.63a.62.62 0 1 0-1.26 0v2.25a.62.62 0 0 0 .7.62h1.31a.62.62 0 1 0 0-1.24h-.76Zm-5.38 0a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4-5.42A2.25 2.25 0 0 0 13.74 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08Zm0 .02v.15-.15Zm-5.75 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardClock24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardClock24RegularIcon, 'ClipboardClock24Regular');

const ClipboardCode16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v4c-.17 0-.34.02-.5.08a1.5 1.5 0 0 0-2.94-.5l-.33 1.17H8.3a1.5 1.5 0 0 0-2.44-.23l-1.5 1.75a1.5 1.5 0 0 0 0 1.95l1.5 1.75a1.5 1.5 0 0 0 1.77.39l-.07.23c-.09.31-.07.63.03.91H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-.34 8.75 1.22 1.42a.5.5 0 0 1-.76.65l-1.5-1.75a.5.5 0 0 1 0-.65l1.5-1.75a.5.5 0 0 1 .76.65l-1.22 1.43Zm5.33-3.11v-.05a.5.5 0 0 0-.97-.23l-2 7a.5.5 0 0 0 .97.28l2-7Zm1.18 5.24a.5.5 0 0 1-.05-.71l1.22-1.42-1.22-1.43a.5.5 0 1 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardCode16FilledIcon, 'ClipboardCode16Filled');

const ClipboardCode16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v4c-.17 0-.34.02-.5.08a1.5 1.5 0 0 0-.5-1.2V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h3.09l-.03.09c-.09.31-.07.63.03.91H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2.87 12.84a.5.5 0 0 1-.82-.13.5.5 0 0 1-.03-.35l2-7a.5.5 0 1 1 .97.28l-2 7a.5.5 0 0 1-.12.2ZM7.38 9.32a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 1 0 .76-.65l-1.22-1.42 1.22-1.43Zm5.3 3.56a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 1 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardCode16RegularIcon, 'ClipboardCode16Regular');

const ClipboardCode20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-2.44.71l-.4 1.41h-.74a1.5 1.5 0 0 0-2.55-.48l-1.5 1.75a1.5 1.5 0 0 0 0 1.95l1.5 1.75c.29.35.7.53 1.13.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2.88 10.32a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 0 0 .7.06.5.5 0 0 0 .06-.71l-1.22-1.42 1.22-1.43Zm4.1-1.68a.5.5 0 1 0-.96-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm1.2 5.24a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardCode20FilledIcon, 'ClipboardCode20Filled');

const ClipboardCode20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-1-.38V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.96l.4.47c.3.35.72.53 1.14.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm6.99 8.64a.5.5 0 1 0-.97-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm-4.11 1.68a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 1 0 .76-.65l-1.22-1.42 1.22-1.43Zm5.3 3.56a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardCode20RegularIcon, 'ClipboardCode20Regular');

const ClipboardCode24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v7.46a1.75 1.75 0 0 0-3.43-.45L16.06 15h-.73a1.75 1.75 0 0 0-2.89-.41l-2 2.25a1.75 1.75 0 0 0 0 2.32l2 2.25c.35.39.82.59 1.3.59H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm-2.56 15 2 2.25a.75.75 0 1 0 1.12-1L12.75 18l1.56-1.75a.75.75 0 0 0-1.12-1l-2 2.25a.75.75 0 0 0 0 1Zm6.34-4.96a.75.75 0 0 1 1.44.42l-2.5 8.5a.75.75 0 1 1-1.44-.42l2.5-8.5Zm2.22 7.27a.75.75 0 0 1-.06-1.06L21.25 18l-1.56-1.75a.75.75 0 0 1 1.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.06.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardCode24FilledIcon, 'ClipboardCode24Filled');

const ClipboardCode24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v7.46a1.75 1.75 0 0 0-1.5-1.7V6.26a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.38l.81.91c.35.39.82.59 1.3.59H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM19 13.75l-.03.21-2.5 8.5a.75.75 0 1 1-1.44-.42l2.5-8.5a.75.75 0 0 1 1.47.21Zm-7.81 4.75a.75.75 0 0 1 0-1l2-2.25a.75.75 0 0 1 1.12 1L12.75 18l1.56 1.75a.75.75 0 0 1-1.12 1l-2-2.25Zm8.56 2.31a.75.75 0 0 1-.06-1.06L21.25 18l-1.56-1.75a.75.75 0 0 1 1.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.06.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardCode24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardCode24RegularIcon, 'ClipboardCode24Regular');

const ClipboardDataBar20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 8.5v2.5a.5.5 0 0 1-1 0V12a.5.5 0 0 1 1 0Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar20FilledIcon, 'ClipboardDataBar20Filled');

const ClipboardDataBar20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm7.5 8a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0V12Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar20RegularIcon, 'ClipboardDataBar20Regular');

const ClipboardDataBar24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm3.5-1.5h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm2.75 11.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 1.5 0ZM12 11c.41 0 .75.34.75.75v5.5a.75.75 0 0 1-1.5 0v-5.5c0-.41.34-.75.75-.75ZM9 9.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar24FilledIcon, 'ClipboardDataBar24Filled');

const ClipboardDataBar24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm6.25 10.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM12 11c.41 0 .75.34.75.75v5.5a.75.75 0 0 1-1.5 0v-5.5c0-.41.34-.75.75-.75ZM9 9.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar24RegularIcon, 'ClipboardDataBar24Regular');

const ClipboardDataBar32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M23.5 4h-1.67A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 23.5 4ZM13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Zm-2.5 8c.83 0 1.5.67 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9c0-.83.67-1.5 1.5-1.5Zm4 3.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0v-7Zm7 2.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar32Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar32FilledIcon, 'ClipboardDataBar32Filled');

const ClipboardDataBar32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 12c-.83 0-1.5.67-1.5 1.5v9a1.5 1.5 0 0 0 3 0v-9c0-.83-.67-1.5-1.5-1.5Zm4 3.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0v-7Zm7 2.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5ZM19 2a3 3 0 0 1 2.83 2h1.67A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6Zm-6 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6ZM8.5 6C7.67 6 7 6.67 7 7.5v19c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5h-1.67A3 3 0 0 1 19 8h-6a3 3 0 0 1-2.83-2H8.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardDataBar32Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDataBar32RegularIcon, 'ClipboardDataBar32Regular');

const ClipboardDay16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 9h4v2H6V9Zm-.91-7H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1ZM6.5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM5 6.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM5 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDay16FilledIcon, 'ClipboardDay16Filled');

const ClipboardDay16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 6.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM5 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Zm1 0v2h4V9H6Zm-.91-7c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.09 3H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDay16RegularIcon, 'ClipboardDay16Regular');

const ClipboardDay20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 11h4v3H8v-3Zm-.91-8c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 7.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM7 11v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDay20FilledIcon, 'ClipboardDay20Filled');

const ClipboardDay20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 7.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3Zm1 0v3h4v-3H8Zm-.91-8c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDay20RegularIcon, 'ClipboardDay20Regular');

const ClipboardDay24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.5 13.75c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-2.5ZM10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM8 9.75c0 .41.34.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75ZM9.75 12C8.78 12 8 12.78 8 13.75v2.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-4.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardDay24FilledIcon, 'ClipboardDay24Filled');

const ClipboardDay24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 9.75c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.75ZM9.75 12C8.78 12 8 12.78 8 13.75v2.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-4.5Zm-.25 1.75c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-2.5ZM13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24 2.4h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1Zm0-3h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardDay24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardDay24RegularIcon, 'ClipboardDay24Regular');

const ClipboardEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H8l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83c.53-.53 1.21-.8 1.9-.84V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ClipboardEdit20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardEdit20FilledIcon, 'ClipboardEdit20Filled');

const ClipboardEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H8l.06-.35.16-.65H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v4.73c.32-.14.66-.21 1-.23V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ClipboardEdit20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardEdit20RegularIcon, 'ClipboardEdit20Regular');

const ClipboardError16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v2.1A5.5 5.5 0 0 0 7.34 15H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm8.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardError16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardError16FilledIcon, 'ClipboardError16Filled');

const ClipboardError16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v2.1c-.32-.16-.65-.3-1-.4V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h1.76c.31.38.67.72 1.08 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm8.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardError16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardError16RegularIcon, 'ClipboardError16Regular');

const ClipboardError20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardError20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardError20FilledIcon, 'ClipboardError20Filled');

const ClipboardError20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardError20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardError20RegularIcon, 'ClipboardError20Regular');

const ClipboardError24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25A6.5 6.5 0 0 0 12.81 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.ClipboardError24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardError24FilledIcon, 'ClipboardError24Filled');

const ClipboardError24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25c-.47-.2-.98-.34-1.5-.42V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm9.25 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.ClipboardError24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardError24RegularIcon, 'ClipboardError24Regular');

const ClipboardHeart20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.7.03-1.4.25-2 .66a3.85 3.85 0 0 0-4.87 5.91L11.55 18H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.15 15.68a.5.5 0 0 0 .7 0l3.82-3.81a2.85 2.85 0 1 0-4.03-4.04l-.14.14-.13-.14a2.85 2.85 0 1 0-4.04 4.04l3.82 3.81Z",
    fill: primaryFill
  }));
};

exports.ClipboardHeart20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardHeart20FilledIcon, 'ClipboardHeart20Filled');

const ClipboardHeart20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.34.02-.67.07-1 .18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h5.05l1 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.33 7.83a2.85 2.85 0 0 1 4.04 0l.13.14.14-.14a2.85 2.85 0 0 1 4.03 4.04l-3.81 3.81a.5.5 0 0 1-.71 0l-3.82-3.81a2.85 2.85 0 0 1 0-4.04Z",
    fill: primaryFill
  }));
};

exports.ClipboardHeart20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardHeart20RegularIcon, 'ClipboardHeart20Regular');

const ClipboardHeart24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v4.98a4.46 4.46 0 0 0-2.99.73 4.47 4.47 0 0 0-5.64 6.87L14.54 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm3.26 19.25a.75.75 0 0 1-.53-.22l-4.4-4.4a3.47 3.47 0 1 1 4.9-4.91l.03.04.04-.04a3.47 3.47 0 1 1 4.9 4.9l-4.4 4.41a.75.75 0 0 1-.54.22Z",
    fill: primaryFill
  }));
};

exports.ClipboardHeart24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardHeart24FilledIcon, 'ClipboardHeart24Filled');

const ClipboardHeart24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M20 6.25v4.98c-.5-.05-1-.03-1.5.09V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h6.79l1.5 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25ZM16 4.1v.15-.15Zm-5.75-.6a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm6.23 19.03a.75.75 0 0 0 1.06 0l4.41-4.4a3.47 3.47 0 1 0-4.9-4.91l-.04.04-.03-.04a3.47 3.47 0 1 0-4.9 4.9l4.4 4.41Z",
    fill: primaryFill
  }));
};

exports.ClipboardHeart24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardHeart24RegularIcon, 'ClipboardHeart24Regular');

const ClipboardImage20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9h-3.5A3.5 3.5 0 0 0 9 12.5v4c0 .54.12 1.05.34 1.5H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.5 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.ClipboardImage20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardImage20FilledIcon, 'ClipboardImage20Filled');

const ClipboardImage20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.54c.05.35.15.69.3 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.5 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    fill: primaryFill
  }));
};

exports.ClipboardImage20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardImage20RegularIcon, 'ClipboardImage20Regular');

const ClipboardImage24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V11h-5a4 4 0 0 0-4 4v5c0 .73.2 1.41.54 2H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2ZM15 12a3 3 0 0 0-3 3v5c0 .56.15 1.08.42 1.52l3.49-3.49c.88-.88 2.3-.88 3.18 0l3.5 3.5c.26-.45.41-.97.41-1.53v-5a3 3 0 0 0-3-3h-5Zm0 11c-.56 0-1.08-.15-1.52-.42l3.49-3.49c.3-.3.77-.3 1.06 0l3.5 3.5c-.45.26-.97.41-1.53.41h-5Zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ClipboardImage24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardImage24FilledIcon, 'ClipboardImage24Filled');

const ClipboardImage24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h4.78c.07.54.24 1.05.5 1.5H6.26C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .56.15 1.08.42 1.52l3.49-3.49c.88-.88 2.3-.88 3.18 0l3.5 3.5c.26-.45.41-.97.41-1.53v-5a3 3 0 0 0-3-3h-5Zm0 11c-.56 0-1.08-.15-1.52-.42l3.49-3.49c.3-.3.77-.3 1.06 0l3.5 3.5c-.45.26-.97.41-1.53.41h-5Zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ClipboardImage24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardImage24RegularIcon, 'ClipboardImage24Regular');

const ClipboardLetter16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v3.72l-.13-.3a1.5 1.5 0 0 0-2.76 0l-2.1 4.9a1.5 1.5 0 0 0-.08.18l-.81 1.91A1.5 1.5 0 0 0 7.08 15H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M11.49 7a.5.5 0 0 0-.46.3l-2.11 4.95a.5.5 0 0 0-.05.1l-.83 1.96a.5.5 0 1 0 .92.4L9.68 13h3.63l.73 1.7a.5.5 0 0 0 .91-.4l-.83-1.94a.5.5 0 0 0-.05-.1L11.95 7.3a.5.5 0 0 0-.46-.3m0 1.76L12.88 12H10.1l1.38-3.23Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter16FilledIcon, 'ClipboardLetter16Filled');

const ClipboardLetter16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v3.72l-.13-.3a1.5 1.5 0 0 0-.87-.83V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h2.58a1.5 1.5 0 0 0 0 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.45 5.3a.5.5 0 0 0-.92 0l-2.11 4.95a.5.5 0 0 0-.05.1l-.83 1.96a.5.5 0 1 0 .92.4L9.68 13h3.63l.73 1.7a.5.5 0 0 0 .91-.4l-.83-1.94a.5.5 0 0 0-.05-.1L11.95 7.3Zm.93 4.7H10.1l1.38-3.23L12.88 12Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter16RegularIcon, 'ClipboardLetter16Regular');

const ClipboardLetter20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.59a1.5 1.5 0 0 1 .04-1.1l3.5-8a1.5 1.5 0 0 1 2.74 0l.63 1.44V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm2.95 6.3a.5.5 0 0 0-.91 0l-3.5 8a.5.5 0 1 0 .92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 0 0 .92-.4l-3.5-8Zm.97 4.7h-2.84L14 10.75 15.42 14Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter20FilledIcon, 'ClipboardLetter20Filled');

const ClipboardLetter20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.84l-.63-1.44a1.5 1.5 0 0 0-.37-.51V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.59a1.5 1.5 0 0 0 0 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.95 6.3a.5.5 0 0 0-.91 0l-3.5 8a.5.5 0 0 0 .92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 0 0 .92-.4l-3.5-8Zm.97 4.7h-2.85L14 10.75 15.42 14Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter20RegularIcon, 'ClipboardLetter20Regular');

const ClipboardLetter24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h4.83a1.5 1.5 0 0 1 .05-1.12l1.79-3.98.01-.03.84-1.86V15l1.85-4.12a1.5 1.5 0 0 1 2.74 0L20 14.52V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM12.51 22a.51.51 0 0 1-.22-.04.5.5 0 0 1-.25-.66l1.8-4v-.01l2.7-6a.5.5 0 0 1 .9 0l2.7 6 .02.02 1.8 3.98a.5.5 0 1 1-.92.42L19.37 18h-4.75l-1.67 3.7a.5.5 0 0 1-.44.3Zm4.48-9.28L15.07 17h3.85L17 12.72Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter24FilledIcon, 'ClipboardLetter24Filled');

const ClipboardLetter24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v8.27l-1.5-3.33V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.05l-.17.38a1.5 1.5 0 0 0-.05 1.12H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm3.7 7.8a.5.5 0 0 0-.91 0l-2.7 5.99v.02l-1.8 3.98a.5.5 0 1 0 .91.42L14.62 18h4.75l1.67 3.7a.5.5 0 0 0 .92-.4l-1.8-4-.01-.02-2.7-5.99Zm1.47 5.7h-3.85l1.92-4.28L18.92 17Z",
    fill: primaryFill
  }));
};

exports.ClipboardLetter24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLetter24RegularIcon, 'ClipboardLetter24Regular');

const ClipboardLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5V7H8.5a4.5 4.5 0 0 0-2.83 8H3.5A1.5 1.5 0 0 1 2 13.5v-10C2 2.67 2.67 2 3.5 2h.59ZM5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm9.5 9.5A3.5 3.5 0 0 0 11.5 8h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V15h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09A.5.5 0 0 0 9 8.5Zm2.5 2.5H8.41a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLink16FilledIcon, 'ClipboardLink16Filled');

const ClipboardLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5V7h-1V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H3.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h1.26c.25.38.56.71.91 1H3.5A1.5 1.5 0 0 1 2 13.5v-10C2 2.67 2.67 2 3.5 2h.59ZM5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm9.5 9.5A3.5 3.5 0 0 0 11.5 8h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V15h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09A.5.5 0 0 0 9 8.5Zm2.5 2.5H8.41a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLink16RegularIcon, 'ClipboardLink16Regular');

const ClipboardLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-3.5a4.5 4.5 0 0 0-3.74 7H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLink20FilledIcon, 'ClipboardLink20Filled');

const ClipboardLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h2.76c.12.36.3.7.5 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLink20RegularIcon, 'ClipboardLink20Regular');

const ClipboardLink24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V14h-5a5 5 0 0 0-4 8H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM23 19a4 4 0 0 0-4-4h-.1a.75.75 0 0 0 .1 1.5h.16a2.5 2.5 0 0 1-.16 5h-.1A.75.75 0 0 0 19 23h.2a4 4 0 0 0 3.8-4Zm-7.25-3.25A.75.75 0 0 0 15 15h-.2a4 4 0 0 0 .2 8h.1a.75.75 0 0 0-.1-1.5h-.16a2.5 2.5 0 0 1 .16-5h.1a.75.75 0 0 0 .65-.75Zm3 2.5h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0-.1-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardLink24FilledIcon, 'ClipboardLink24Filled');

const ClipboardLink24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H11c-.34-.45-.6-.95-.77-1.5H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.46-.4 1.87-1h2.13c.41 0 .75.34.75.75V14H20V6.25C20 5.01 19 4 17.75 4h-1.76Zm-5.74-.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM19 15a4 4 0 0 1 .2 8H19a.75.75 0 0 1-.1-1.5h.1a2.5 2.5 0 0 0 .16-5H19a.75.75 0 0 1-.1-1.5h.1Zm-4 0a.75.75 0 0 1 .1 1.5H15a2.5 2.5 0 0 0-.16 5H15a.75.75 0 0 1 .1 1.5H15a4 4 0 0 1-.2-8h.2Zm.25 3.25h3.5a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h.1Z",
    fill: primaryFill
  }));
};

exports.ClipboardLink24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardLink24RegularIcon, 'ClipboardLink24Regular');

const ClipboardMonth16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.75 8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.25 8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-1.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 10.5A.75.75 0 1 1 8 9a.75.75 0 0 1 0 1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth16FilledIcon, 'ClipboardMonth16Filled');

const ClipboardMonth16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.25 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-1.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 10.5A.75.75 0 1 0 8 9a.75.75 0 0 0 0 1.5ZM6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 3h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth16RegularIcon, 'ClipboardMonth16Regular');

const ClipboardMonth20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth20FilledIcon, 'ClipboardMonth20Filled');

const ClipboardMonth20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth20RegularIcon, 'ClipboardMonth20Regular');

const ClipboardMonth24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm-2 9a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9.25-5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-5.25 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm1.25 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth24FilledIcon, 'ClipboardMonth24Filled');

const ClipboardMonth24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.25 12.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm9.25-5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-5.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm1.25 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16 4.08A2.25 2.25 0 0 0 13.74 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08Zm0 .02v.15-.15Zm-5.75 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMonth24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMonth24RegularIcon, 'ClipboardMonth24Regular');

const ClipboardMore20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v10.48c-.43.22-.78.56-1 .99a2.25 2.25 0 0 0-4 0A2.25 2.25 0 0 0 6.98 18H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.75 14a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMore20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMore20FilledIcon, 'ClipboardMore20Filled');

const ClipboardMore20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v10.48c-.43.22-.78.56-1 .99V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1.25c0 .36.08.7.23 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.75 14a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMore20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMore20RegularIcon, 'ClipboardMore20Regular');

const ClipboardMore24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm3.5-1.5h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H8.5a2.5 2.5 0 1 1 4.5-1.5 2.5 2.5 0 0 1 5 0c0-1.2.86-2.22 2-2.45V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2ZM12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
};

exports.ClipboardMore24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMore24FilledIcon, 'ClipboardMore24Filled');

const ClipboardMore24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H8.5c-.31-.42-.5-.94-.5-1.5H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75V19a2.5 2.5 0 0 1 1.5-.95V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74-.6h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm1.75 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    fill: primaryFill
  }));
};

exports.ClipboardMore24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMore24RegularIcon, 'ClipboardMore24Regular');

const ClipboardMultiple16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.42 1H4.5C3.67 2 3 2.67 3 3.5v8c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-2ZM6 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm7 9V3.27A2 2 0 0 1 14 5v6.5a3.5 3.5 0 0 1-3.5 3.5H6a2 2 0 0 1-1.73-1h6.23a2.5 2.5 0 0 0 2.5-2.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMultiple16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardMultiple16FilledIcon, 'ClipboardMultiple16Filled');

const ClipboardMultiple16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.42 1H4.5C3.67 2 3 2.67 3 3.5v8c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-2ZM6 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM4.5 3h.58c.21.58.77 1 1.42 1h2c.65 0 1.2-.42 1.41-1h.59c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-8c0-.28.22-.5.5-.5Zm8.5 8.5V3.27A2 2 0 0 1 14 5v6.5a3.5 3.5 0 0 1-3.5 3.5H6a2 2 0 0 1-1.73-1h6.23a2.5 2.5 0 0 0 2.5-2.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardMultiple16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardMultiple16RegularIcon, 'ClipboardMultiple16Regular');

const ClipboardNote16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5V6H8a3 3 0 0 0-3 3v4c0 .77.29 1.47.76 2H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM8 7a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8Zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM8 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardNote16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardNote16FilledIcon, 'ClipboardNote16Filled');

const ClipboardNote16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5V6h-1V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H4.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h.67a3 3 0 0 0 .6 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2h.59ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM8 7a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8Zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM8 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardNote16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardNote16RegularIcon, 'ClipboardNote16Regular');

const ClipboardNote20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 .17 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm3.5 8a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-5Zm0 5.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0-3c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardNote20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardNote20FilledIcon, 'ClipboardNote20Filled');

const ClipboardNote20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.84a3.48 3.48 0 0 1-.3-1H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5V10h1V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4 7.5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-5Zm0 5.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0-3c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardNote20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardNote20RegularIcon, 'ClipboardNote20Regular');

const ClipboardPaste16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2h.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59A1.5 1.5 0 0 1 12 3.5V5h-1V3.5a.5.5 0 0 0-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H3.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.61v1H3.5A1.5 1.5 0 0 1 2 13.5v-10A1.5 1.5 0 0 1 3.5 2Zm2 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm3 4C7.67 6 7 6.67 7 7.5v6c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-4Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste16FilledIcon, 'ClipboardPaste16Filled');

const ClipboardPaste16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.09 2H3.5A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15h2.61v-1H3.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59a.5.5 0 0 1 .5.5V5h1V3.5A1.5 1.5 0 0 0 10.5 2h-.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1Zm.91.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 6C7.67 6 7 6.67 7 7.5v6c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-4ZM8 7.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-6Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste16RegularIcon, 'ClipboardPaste16Regular');

const ClipboardPaste20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1H4.5C3.67 3 3 3.67 3 4.5v12c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm3 0a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 3C9.67 7 9 7.67 9 8.5v8c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-5Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste20FilledIcon, 'ClipboardPaste20Filled');

const ClipboardPaste20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1H4.5C3.67 3 3 3.67 3 4.5v12c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm3 0a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 3C9.67 7 9 7.67 9 8.5v8c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-5ZM10 8.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-8Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste20RegularIcon, 'ClipboardPaste20Regular');

const ClipboardPaste24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.75 2c1.16 0 2.11.88 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15c0 .38-.28.7-.65.74h-.1a.75.75 0 0 1-.74-.64l-.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H5.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h3.1c.38 0 .7.29.74.65l.01.1c0 .42-.34.75-.75.75h-3c-1.2 0-2.17-.92-2.24-2.1L3 19.76V6.25c0-1.2.93-2.17 2.1-2.24L5.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5Zm6 6c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.2-.93 2.17-2.1 2.24l-.15.01h-6.5c-1.2 0-2.17-.93-2.24-2.1l-.01-.15v-9.5c0-1.2.93-2.17 2.1-2.24l.15-.01h6.5Zm-6-4.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste24FilledIcon, 'ClipboardPaste24Filled');

const ClipboardPaste24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.75 2c1.16 0 2.11.88 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15c0 .38-.28.7-.65.74h-.1a.75.75 0 0 1-.74-.64l-.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H5.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h3.1c.38 0 .7.29.74.65l.01.1c0 .42-.34.75-.75.75h-3c-1.2 0-2.17-.92-2.24-2.1L3 19.76V6.25c0-1.2.93-2.17 2.1-2.24L5.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5Zm6 6c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.2-.93 2.17-2.1 2.24l-.15.01h-6.5c-1.2 0-2.17-.93-2.24-2.1l-.01-.15v-9.5c0-1.2.93-2.17 2.1-2.24l.15-.01h6.5Zm0 1.5h-6.5c-.38 0-.7.28-.74.65l-.01.1v9.5c0 .38.28.7.65.74l.1.01h6.5c.38 0 .7-.28.74-.65l.01-.1v-9.5c0-.38-.28-.7-.65-.74l-.1-.01Zm-6-6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardPaste24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardPaste24RegularIcon, 'ClipboardPaste24Regular');

const ClipboardPulse20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1.57l-.59-1.17a1.5 1.5 0 0 0-2.68 0l-.33.65-.9-2.92a1.5 1.5 0 0 0-2.8-.17L5.53 10H4V4.5C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5 10H16v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h2.5c.6 0 1.13-.35 1.37-.9l.37-.83.83 2.67a1.5 1.5 0 0 0 2.77.23l.74-1.48c.26.2.58.31.92.31ZM8.98 6.85a.5.5 0 0 0-.94-.05L6.18 11H2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .46-.3L8.4 8.42l1.61 5.23a.5.5 0 0 0 .93.07l1.55-3.1.55 1.1a.5.5 0 0 0 .45.28h4a.5.5 0 0 0 0-1h-3.7l-.85-1.72a.5.5 0 0 0-.9 0l-1.44 2.88-1.63-5.3Z",
    fill: primaryFill
  }));
};

exports.ClipboardPulse20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardPulse20FilledIcon, 'ClipboardPulse20Filled');

const ClipboardPulse20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5V10H4V4.5C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM15 13h1v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h1v3.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V13ZM8.98 6.85a.5.5 0 0 0-.94-.05L6.18 11H2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .46-.3L8.4 8.42l1.61 5.23a.5.5 0 0 0 .93.07l1.55-3.1.55 1.1a.5.5 0 0 0 .45.28h4a.5.5 0 0 0 0-1h-3.7l-.85-1.72a.5.5 0 0 0-.9 0l-1.44 2.88-1.63-5.3Z",
    fill: primaryFill
  }));
};

exports.ClipboardPulse20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardPulse20RegularIcon, 'ClipboardPulse20Regular');

const ClipboardPulse24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V13h-2.26l-.99-1.65a1.75 1.75 0 0 0-3.07.12l-.5 1.02-1.25-4.23a1.75 1.75 0 0 0-3.25-.3L6.17 13H4V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm3 13H20v3.25c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V16.5h3.25c.66 0 1.27-.37 1.57-.97l1-2.02 1.25 4.23a1.75 1.75 0 0 0 3.25.3l1.08-2.18c.33.4.82.64 1.35.64Zm-5.78-7.96a.75.75 0 0 0-1.4-.13L6.8 14H2.75a.75.75 0 0 0 0 1.5h4.5c.28 0 .54-.16.67-.41l2.15-4.3 1.96 6.67a.75.75 0 0 0 1.4.13l1.88-3.78.8 1.33c.13.22.38.36.64.36h4.5a.75.75 0 0 0 0-1.5h-4.08l-1.28-2.14a.75.75 0 0 0-1.31.05l-1.65 3.3-1.96-6.67Z",
    fill: primaryFill
  }));
};

exports.ClipboardPulse24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardPulse24FilledIcon, 'ClipboardPulse24Filled');

const ClipboardPulse24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25V13h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75V13H4V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.1.01.15V4.1Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm4.75 13H20v3.25c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V16.5h1.5v3.25c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V16.5Zm-7.53-7.96a.75.75 0 0 0-1.4-.13L6.8 14H2.75a.75.75 0 0 0 0 1.5h4.5c.28 0 .54-.16.67-.41l2.15-4.3 1.96 6.67a.75.75 0 0 0 1.4.13l1.88-3.78.8 1.33c.13.22.38.36.64.36h4.5a.75.75 0 0 0 0-1.5h-4.08l-1.28-2.14a.75.75 0 0 0-1.31.05l-1.65 3.3-1.96-6.67Z",
    fill: primaryFill
  }));
};

exports.ClipboardPulse24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardPulse24RegularIcon, 'ClipboardPulse24Regular');

const ClipboardSearch20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76a4.5 4.5 0 0 1 5.56 6.18l2 2c.42.42.54 1.03.35 1.56h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3ZM8.3 14.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    fill: primaryFill
  }));
};

exports.ClipboardSearch20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardSearch20FilledIcon, 'ClipboardSearch20Filled');

const ClipboardSearch20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76c.32-.12.65-.2 1-.23V4.5c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-2.59c.12.32.12.68 0 1h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3ZM8.3 14.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    fill: primaryFill
  }));
};

exports.ClipboardSearch20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardSearch20RegularIcon, 'ClipboardSearch20Regular');

const ClipboardSearch24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v3.85a5.5 5.5 0 0 1 7.25 7.67l2.24 2.24c.53.54.65 1.34.34 1.99h3.92c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm-.3 14.39a4.5 4.5 0 1 0-1.15.98l2.92 2.91a.75.75 0 1 0 1.06-1.06l-2.83-2.83ZM6.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
    fill: primaryFill
  }));
};

exports.ClipboardSearch24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardSearch24FilledIcon, 'ClipboardSearch24Filled');

const ClipboardSearch24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v3.85c.47-.24.97-.41 1.5-.5V6.24c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75h-3.92c.23.47.23 1.03 0 1.5h3.92c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74-.6h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm-.3 14.39a4.5 4.5 0 1 0-1.15.98l2.92 2.91a.75.75 0 1 0 1.06-1.06l-2.83-2.83ZM6.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
    fill: primaryFill
  }));
};

exports.ClipboardSearch24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardSearch24RegularIcon, 'ClipboardSearch24Regular');

const ClipboardSettings20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7a5.5 5.5 0 0 0-5.74 8.8H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm3.57 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ClipboardSettings20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardSettings20FilledIcon, 'ClipboardSettings20Filled');

const ClipboardSettings20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm3.57 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    fill: primaryFill
  }));
};

exports.ClipboardSettings20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardSettings20RegularIcon, 'ClipboardSettings20Regular');

const ClipboardSettings24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25A6.5 6.5 0 0 0 12.81 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm.53 10.48a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.64c.44.38.94.7 1.49.92l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.ClipboardSettings24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardSettings24FilledIcon, 'ClipboardSettings24Filled');

const ClipboardSettings24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25c-.47-.2-.98-.34-1.5-.42V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5Zm2.24 2.03V4v.03Zm0 .07.01.15v-.17.02Zm-2.24-.6h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm.53 10.48a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.64c.44.38.94.7 1.49.92l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z",
    fill: primaryFill
  }));
};

exports.ClipboardSettings24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardSettings24RegularIcon, 'ClipboardSettings24Regular');

const ClipboardTask16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.85 5.35-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L7.5 9.79l2.65-2.64a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTask16FilledIcon, 'ClipboardTask16Filled');

const ClipboardTask16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 3h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10c0-.28.22-.5.5-.5Zm6.35 4.85a.5.5 0 0 0-.7-.7L7.5 9.79 6.35 8.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTask16RegularIcon, 'ClipboardTask16Regular');

const ClipboardTask20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.85 6.35-3.5 3.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7L9 12.29l3.15-3.14a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTask20FilledIcon, 'ClipboardTask20Filled');

const ClipboardTask20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.85 9.85a.5.5 0 0 0-.7-.7L9 12.29l-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.5ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTask20RegularIcon, 'ClipboardTask20Regular');

const ClipboardTask24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm6.78 7.53-5.5 5.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L11 14.94l4.97-4.97a.75.75 0 1 1 1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTask24FilledIcon, 'ClipboardTask24Filled');

const ClipboardTask24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.5-5.5Zm-1.04-6.95A2.25 2.25 0 0 0 13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08Zm0 .02.01.15V4.1Zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTask24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTask24RegularIcon, 'ClipboardTask24Regular');

const ClipboardTaskAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 2c-.65 0-1.2.42-1.41 1H3.5C2.67 3 2 3.67 2 4.5v12c0 .83.67 1.5 1.5 1.5h6.76A5.5 5.5 0 0 1 14 9.02V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM6 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.85 6.35-3.5 3.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7L7 12.29l3.15-3.14a.5.5 0 0 1 .7.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskAdd20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskAdd20FilledIcon, 'ClipboardTaskAdd20Filled');

const ClipboardTaskAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 2c-.65 0-1.2.42-1.41 1H3.5C2.67 3 2 3.67 2 4.5v12c0 .83.67 1.5 1.5 1.5h6.76a5.5 5.5 0 0 1-.66-1H3.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v4.7c.32-.08.66-.15 1-.18V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM6 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.85 6.35a.5.5 0 0 0-.7-.7L7 12.29l-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskAdd20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskAdd20RegularIcon, 'ClipboardTaskAdd20Regular');

const ClipboardTaskAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.75 2h-3.5c-1.16 0-2.11.87-2.24 2H4.25C3.01 4 2 5 2 6.25v13.5C2 20.99 3 22 4.25 22h8.56a6.48 6.48 0 0 1-.85-7.9l-2.43 2.43c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L9 14.94l4.97-4.97a.75.75 0 1 1 1.06 1.06l-.93.93a6.47 6.47 0 0 1 3.9-.94V6.25C18 5.01 17 4 15.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskAdd24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskAdd24FilledIcon, 'ClipboardTaskAdd24Filled');

const ClipboardTaskAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H4.25C3.01 4 2 5 2 6.25v13.5C2 20.99 3 22 4.25 22h8.56a6.52 6.52 0 0 1-1.08-1.5H4.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v4.83a6.55 6.55 0 0 1 1.5-.06V6.25C18 5.01 17 4 15.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74-.6h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm3.7 10.6a6.54 6.54 0 0 1 2.15-2.14l.93-.93a.75.75 0 1 0-1.06-1.06L9 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l2.43-2.43ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskAdd24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskAdd24RegularIcon, 'ClipboardTaskAdd24Regular');

const ClipboardTaskListLtr20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.35 4.35L7.6 9.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41a.5.5 0 1 1 .71.7Zm0 4.3c.2.2.2.5 0 .7L7.6 14.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.65.6h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListLtr20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListLtr20FilledIcon, 'ClipboardTaskListLtr20Filled');

const ClipboardTaskListLtr20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.35 7.85a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3c.2.2.2.5 0 .7L7.6 14.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.65.6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListLtr20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListLtr20RegularIcon, 'ClipboardTaskListLtr20Regular');

const ClipboardTaskListLtr24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm2.25 6.75c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 4.75h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 1 1 0-1.5Zm-2.47-5.22-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 1 1 1.06 1.06Zm0 4.44c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListLtr24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListLtr24FilledIcon, 'ClipboardTaskListLtr24Filled');

const ClipboardTaskListLtr24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.5 10.25c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5Zm-2.47-5.22a.75.75 0 1 0-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Zm0 4.44c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Zm5.21-10.14A2.25 2.25 0 0 0 13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08Zm0 .02.01.15V4.1Zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListLtr24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListLtr24RegularIcon, 'ClipboardTaskListLtr24Regular');

const ClipboardTaskListRtl20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.35 4.15a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM6.5 8a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 13.5c0 .28.22.5.5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListRtl20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListRtl20FilledIcon, 'ClipboardTaskListRtl20Filled');

const ClipboardTaskListRtl20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.85 7.15c.2.2.2.5 0 .7L12.1 9.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM6.5 8a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 13.5c0-.28.22-.5.5-.5H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5ZM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListRtl20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListRtl20RegularIcon, 'ClipboardTaskListRtl20Regular');

const ClipboardTaskListRtl24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm7.03 5.22c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Zm0 6.56-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 1 1 1.06 1.06ZM7 10.25c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM7.75 15h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListRtl24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListRtl24FilledIcon, 'ClipboardTaskListRtl24Filled');

const ClipboardTaskListRtl24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M17.28 8.72c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Zm0 6.56a.75.75 0 1 0-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2ZM7 10.25c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM7.75 15a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm8.24-11a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76Zm-5.74 2.5h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTaskListRtl24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTaskListRtl24RegularIcon, 'ClipboardTaskListRtl24Regular');

const ClipboardText32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M21.83 4h1.67A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6a3 3 0 0 1 2.83 2ZM19 4h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Zm-8 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Zm-1 6a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
    fill: primaryFill
  }));
};

exports.ClipboardText32Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardText32FilledIcon, 'ClipboardText32Filled');

const ClipboardText32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM21.83 4A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 23.5 4h-1.67ZM12 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM7 7.5C7 6.67 7.67 6 8.5 6h1.67A3 3 0 0 0 13 8h6a3 3 0 0 0 2.83-2h1.67c.83 0 1.5.67 1.5 1.5v19c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 7 26.5v-19Z",
    fill: primaryFill
  }));
};

exports.ClipboardText32Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardText32RegularIcon, 'ClipboardText32Regular');

const ClipboardTextEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.73c-.33.14-.63.34-.9.61L10.94 14H6.5a.5.5 0 0 0 0 1h3.49a3.2 3.2 0 0 0-.56 1.16l-.37 1.5c-.03.11-.05.23-.06.34H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59Zm4.91.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5ZM13.5 8h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1ZM10 11.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm.98 3.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit20FilledIcon, 'ClipboardTextEdit20Filled');

const ClipboardTextEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 14.5c0-.28.22-.5.5-.5h4.44l-.67.67c-.1.1-.2.21-.28.33H6.5a.5.5 0 0 1-.5-.5ZM9.22 17H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v5.44l.1-.1c.27-.27.57-.47.9-.6V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H9l.06-.35.16-.65ZM12 3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3c.28 0 .5.22.5.5Zm-1.02 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit20RegularIcon, 'ClipboardTextEdit20Regular');

const ClipboardTextEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.98 3.94A2.25 2.25 0 0 0 13.75 2h-3.5c-1.14 0-2.08.85-2.23 1.94l-.01.14V4H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H11c0-.2.01-.4.06-.6l.46-1.82c.1-.39.25-.75.46-1.08H8A.75.75 0 0 1 8 17h5.36l5.03-5.04a3.27 3.27 0 0 1 1.61-.88V6.25C20 5.01 19 4 17.75 4h-1.76v.08l-.01-.14Zm-5.73-.44h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM8 13h4a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 13Zm0-4h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 9Zm11.1 3.67-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit24FilledIcon, 'ClipboardTextEdit24Filled');

const ClipboardTextEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H11c0-.2.01-.4.06-.6l.23-.9H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v5.61c.44-.4.96-.66 1.5-.78V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74-.6h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm3.1 13.5H8a.75.75 0 0 0 0 1.5h3.98c.15-.23.32-.44.51-.64l.87-.86ZM12 14.5H8A.75.75 0 0 1 8 13h4a.75.75 0 0 1 0 1.5Zm4-4H8A.75.75 0 0 1 8 9h8a.75.75 0 0 1 0 1.5Zm3.1 2.17-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit24RegularIcon, 'ClipboardTextEdit24Regular');

const ClipboardTextEdit32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M23.5 4h-1.67A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h5.55a2.5 2.5 0 0 1 .03-1.13l.79-3.05c.18-.68.52-1.3 1-1.82H11a1 1 0 1 1 0-2h6.86l6.65-6.7c.7-.71 1.58-1.13 2.49-1.26V7.5A3.5 3.5 0 0 0 23.5 4ZM13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Zm-3 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm1 4h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Zm18.65 3.42-8.61 8.55c-.35.35-.8.6-1.27.72l-3.02.78a1 1 0 0 1-1.22-1.22l.8-3.05c.11-.46.35-.88.68-1.21l8.57-8.64a2.88 2.88 0 1 1 4.07 4.07Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit32Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit32FilledIcon, 'ClipboardTextEdit32Filled');

const ClipboardTextEdit32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 2a3 3 0 0 1 2.83 2h1.67A3.5 3.5 0 0 1 27 7.5v6.54c-.7.1-1.4.38-2 .83V7.5c0-.83-.67-1.5-1.5-1.5h-1.67A3 3 0 0 1 19 8h-6a3 3 0 0 1-2.83-2H8.5C7.67 6 7 6.67 7 7.5v19c0 .83.67 1.5 1.5 1.5h5.8l-.22.87c-.1.4-.1.77-.03 1.13H8.5A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6Zm-6 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm4.86 18-1.92 1.93a4 4 0 0 0-.06.07H11a1 1 0 1 1 0-2h6.86ZM10 13a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm18.65 3.42-8.61 8.55c-.35.35-.8.6-1.27.72l-3.02.78a1 1 0 0 1-1.22-1.22l.8-3.05c.11-.46.35-.88.68-1.21l8.57-8.64a2.88 2.88 0 1 1 4.07 4.07Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextEdit32Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextEdit32RegularIcon, 'ClipboardTextEdit32Regular');

const ClipboardTextLtr16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 6h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM5 9c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 5 9Zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr16FilledIcon, 'ClipboardTextLtr16Filled');

const ClipboardTextLtr16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 3h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10c0-.28.22-.5.5-.5Zm1 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5 9c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 5 9Zm.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr16RegularIcon, 'ClipboardTextLtr16Regular');

const ClipboardTextLtr20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm-5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM6 14.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr20FilledIcon, 'ClipboardTextLtr20Filled');

const ClipboardTextLtr20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 11.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm2-12c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm-6 1h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr20RegularIcon, 'ClipboardTextLtr20Regular');

const ClipboardTextLtr24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm0-1.5c1.14 0 2.08.85 2.23 1.94l.01.14V4h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76v.08l.01-.14A2.25 2.25 0 0 1 10.25 2h3.5ZM14 17H8a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5Zm-2-4H8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5Zm4-4H8a.75.75 0 0 0 0 1.5h8A.75.75 0 0 0 16 9Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr24FilledIcon, 'ClipboardTextLtr24Filled');

const ClipboardTextLtr24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.75 2c1.2 0 2.17.93 2.24 2.1l.01.15-.01-.25h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76v.18L8 4.25C8 3.01 9 2 10.25 2h3.5Zm0 4.5h-3.5c-.8 0-1.5-.41-1.9-1.03l.03.03H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 0 0-.75-.75h-2.13l.02-.03c-.4.62-1.1 1.03-1.89 1.03Zm0-3h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM8 14.5h4a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5Zm0-4h8A.75.75 0 0 0 16 9H8a.75.75 0 0 0 0 1.5Zm0 8h6a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr24RegularIcon, 'ClipboardTextLtr24Regular');

const ClipboardTextLtr32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M21.83 4h1.67A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6a3 3 0 0 1 2.83 2ZM19 4h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Zm-8 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Zm-1 6a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr32Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr32FilledIcon, 'ClipboardTextLtr32Filled');

const ClipboardTextLtr32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM21.83 4A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 23.5 4h-1.67ZM12 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM7 7.5C7 6.67 7.67 6 8.5 6h1.67A3 3 0 0 0 13 8h6a3 3 0 0 0 2.83-2h1.67c.83 0 1.5.67 1.5 1.5v19c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 7 26.5v-19Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextLtr32Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextLtr32RegularIcon, 'ClipboardTextLtr32Regular');

const ClipboardTextRtl16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 6h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM8 9c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 8 9Zm-1.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl16Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl16FilledIcon, 'ClipboardTextRtl16Filled');

const ClipboardTextRtl16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3ZM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 3h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10c0-.28.22-.5.5-.5Zm1 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM8 9c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 8 9Zm-1.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl16Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl16RegularIcon, 'ClipboardTextRtl16Regular');

const ClipboardTextRtl20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59Zm4.91.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5ZM10.5 11a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 8.5c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM8.5 14a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl20Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl20FilledIcon, 'ClipboardTextRtl20Filled');

const ClipboardTextRtl20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M10.5 11a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M8.5 14a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59Zm4.91.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl20Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl20RegularIcon, 'ClipboardTextRtl20Regular');

const ClipboardTextRtl24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.98 3.94A2.25 2.25 0 0 0 13.75 2h-3.5c-1.14 0-2.08.85-2.23 1.94l-.01.14V4H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08l-.01-.14Zm-5.73-.44h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM8 9h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 9Zm3.25 4.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM10 17h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl24Filled = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl24FilledIcon, 'ClipboardTextRtl24Filled');

const ClipboardTextRtl24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 9a.75.75 0 0 0 0 1.5h8A.75.75 0 0 0 16 9H8Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M11.25 13.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M10 17a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z",
    fill: primaryFill
  }), React.createElement("path", {
    d: "M15.99 4a2.25 2.25 0 0 0-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76Zm0 .1.01.15V4.1Zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.ClipboardTextRtl24Regular = wrapIcon_1.default( /*#__PURE__*/ClipboardTextRtl24RegularIcon, 'ClipboardTextRtl24Regular');

const Clock12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1Zm-.5 2.5A.5.5 0 0 0 5 4v2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H6V4a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clock12Filled = wrapIcon_1.default( /*#__PURE__*/Clock12FilledIcon, 'Clock12Filled');

const Clock12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1Zm0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-.5 1.5a.5.5 0 0 1 .5.41V6h1.5a.5.5 0 0 1 .09 1H5.5a.5.5 0 0 1-.5-.41V4c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clock12Regular = wrapIcon_1.default( /*#__PURE__*/Clock12RegularIcon, 'Clock12Regular');

const Clock16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm-.5 3a.5.5 0 0 0-.5.5v3c0 .28.23.5.5.5h2a.5.5 0 0 0 0-1H8V5.5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clock16Filled = wrapIcon_1.default( /*#__PURE__*/Clock16FilledIcon, 'Clock16Filled');

const Clock16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm-.5 2a.5.5 0 0 1 .5.41V8h1.5a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.49-.41V5.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clock16Regular = wrapIcon_1.default( /*#__PURE__*/Clock16RegularIcon, 'Clock16Regular');

const Clock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-.5 3a.5.5 0 0 0-.5.5v5.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H10V5.41A.5.5 0 0 0 9.5 5Z",
    fill: primaryFill
  }));
};

exports.Clock20Filled = wrapIcon_1.default( /*#__PURE__*/Clock20FilledIcon, 'Clock20Filled');

const Clock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-.5 2a.5.5 0 0 1 .5.41V10h2.5a.5.5 0 0 1 .09 1H9.5a.5.5 0 0 1-.5-.41V5.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.Clock20Regular = wrapIcon_1.default( /*#__PURE__*/Clock20RegularIcon, 'Clock20Regular');

const Clock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z",
    fill: primaryFill
  }));
};

exports.Clock24Filled = wrapIcon_1.default( /*#__PURE__*/Clock24FilledIcon, 'Clock24Filled');

const Clock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.67a8.34 8.34 0 0 0 0 16.66 8.34 8.34 0 0 0 0-16.66ZM11.25 6c.38 0 .7.28.74.65l.01.1V12h3.25a.75.75 0 0 1 .1 1.5h-4.1a.75.75 0 0 1-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.Clock24Regular = wrapIcon_1.default( /*#__PURE__*/Clock24RegularIcon, 'Clock24Regular');

const Clock28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.25 15.5h-5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0V14h4.25a.75.75 0 0 1 0 1.5ZM14 2a12 12 0 1 0 0 24 12 12 0 0 0 0-24Z",
    fill: primaryFill
  }));
};

exports.Clock28Filled = wrapIcon_1.default( /*#__PURE__*/Clock28FilledIcon, 'Clock28Filled');

const Clock28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.67a10.34 10.34 0 0 0 0 20.66 10.34 10.34 0 0 0 0-20.66ZM13.25 7c.38 0 .7.28.74.65l.01.1V14h4.25a.75.75 0 0 1 .1 1.5h-5.1a.75.75 0 0 1-.74-.65l-.01-.1v-7c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.Clock28Regular = wrapIcon_1.default( /*#__PURE__*/Clock28RegularIcon, 'Clock28Regular');

const Clock32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 30a14 14 0 1 0 0-28 14 14 0 0 0 0 28ZM14 9a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V9Z",
    fill: primaryFill
  }));
};

exports.Clock32Filled = wrapIcon_1.default( /*#__PURE__*/Clock32FilledIcon, 'Clock32Filled');

const Clock32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 9a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V9Zm2 21a14 14 0 1 0 0-28 14 14 0 0 0 0 28Zm0-2a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z",
    fill: primaryFill
  }));
};

exports.Clock32Regular = wrapIcon_1.default( /*#__PURE__*/Clock32RegularIcon, 'Clock32Regular');

const Clock48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 5a19 19 0 1 1 0 38 19 19 0 0 1 0-38Zm-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25Z",
    fill: primaryFill
  }));
};

exports.Clock48Filled = wrapIcon_1.default( /*#__PURE__*/Clock48FilledIcon, 'Clock48Filled');

const Clock48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 5a19 19 0 1 1 0 38 19 19 0 0 1 0-38Zm0 2.5a16.5 16.5 0 1 0 0 33 16.5 16.5 0 0 0 0-33ZM22.75 12c.65 0 1.18.5 1.24 1.12l.01.13V24h6.75a1.25 1.25 0 0 1 .13 2.5h-8.13c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-12c0-.69.56-1.25 1.25-1.25Z",
    fill: primaryFill
  }));
};

exports.Clock48Regular = wrapIcon_1.default( /*#__PURE__*/Clock48RegularIcon, 'Clock48Regular');

const ClockAlarm16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4.5a2.5 2.5 0 0 1 4.62-1.33 5.51 5.51 0 0 1 2.76 0 2.5 2.5 0 1 1 3.72 3.25 5.48 5.48 0 0 1-.87 5.6l1.12 1.13a.5.5 0 0 1-.7.7l-1.13-1.12a5.48 5.48 0 0 1-7.04 0l-1.13 1.12a.5.5 0 1 1-.7-.7l1.12-1.13a5.48 5.48 0 0 1-.87-5.6A2.5 2.5 0 0 1 2 4.5Zm3.64-.97A1.5 1.5 0 1 0 3.4 5.5a5.52 5.52 0 0 1 2.25-1.97Zm6.97 1.97a1.5 1.5 0 1 0-2.26-1.98c.93.45 1.71 1.13 2.26 1.98Zm-5.11 0A.5.5 0 0 0 7 6v3c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H8V6a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm16Filled = wrapIcon_1.default( /*#__PURE__*/ClockAlarm16FilledIcon, 'ClockAlarm16Filled');

const ClockAlarm16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 6a.5.5 0 1 0-1 0v3c0 .28.22.5.5.5h2a.5.5 0 1 0 0-1H8V6ZM2 4.5a2.5 2.5 0 0 1 4.62-1.33 5.51 5.51 0 0 1 2.76 0 2.5 2.5 0 1 1 3.72 3.25 5.48 5.48 0 0 1-.87 5.6l1.12 1.13a.5.5 0 0 1-.7.7l-1.13-1.12a5.48 5.48 0 0 1-7.04 0l-1.13 1.12a.5.5 0 1 1-.7-.7l1.12-1.13a5.48 5.48 0 0 1-.87-5.6A2.5 2.5 0 0 1 2 4.5ZM4.5 3a1.5 1.5 0 0 0-1.11 2.5 5.52 5.52 0 0 1 2.25-1.97A1.5 1.5 0 0 0 4.5 3Zm5.86.53c.92.44 1.7 1.12 2.25 1.97a1.5 1.5 0 1 0-2.26-1.98ZM8 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm16Regular = wrapIcon_1.default( /*#__PURE__*/ClockAlarm16RegularIcon, 'ClockAlarm16Regular');

const ClockAlarm20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.76 3.37A3.16 3.16 0 0 0 2 5.19c0 1.08.53 2.03 1.35 2.61a7 7 0 0 0 1.36 6.78l-1.56 1.57a.5.5 0 0 0 .7.7l1.57-1.56a6.97 6.97 0 0 0 9.16 0l1.57 1.56a.5.5 0 0 0 .7-.7l-1.56-1.57a6.97 6.97 0 0 0 1.35-6.8 3.17 3.17 0 1 0-4.41-4.42 7 7 0 0 0-4.47 0ZM5.16 3c.66 0 1.25.3 1.65.77a7.03 7.03 0 0 0-3.06 3.07A2.2 2.2 0 0 1 5.17 3Zm8.02.76A2.16 2.16 0 0 1 17 5.18c0 .66-.3 1.25-.76 1.65a7.03 7.03 0 0 0-3.06-3.07ZM9.5 6c.28 0 .5.22.5.5V10h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm20Filled = wrapIcon_1.default( /*#__PURE__*/ClockAlarm20FilledIcon, 'ClockAlarm20Filled');

const ClockAlarm20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 6.5a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5h3a.5.5 0 1 0 0-1H10V6.5ZM3.35 7.8A3.19 3.19 0 0 1 5.17 2c1.07 0 2.02.54 2.6 1.37a7 7 0 0 1 4.46 0A3.16 3.16 0 0 1 18 5.16c0 1.08-.54 2.04-1.36 2.61a7 7 0 0 1-1.35 6.8l1.56 1.57a.5.5 0 0 1-.7.7l-1.57-1.56a6.97 6.97 0 0 1-9.16 0l-1.57 1.56a.5.5 0 1 1-.7-.7l1.56-1.57A6.97 6.97 0 0 1 3.35 7.8ZM3 5.19c0 .66.3 1.25.75 1.65a7.03 7.03 0 0 1 3.06-3.07C6.41 3.3 5.82 3 5.17 3 3.97 3 3 3.98 3 5.19Zm13.24 1.64a2.17 2.17 0 1 0-3.06-3.07 7.03 7.03 0 0 1 3.06 3.07ZM4 10a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm20Regular = wrapIcon_1.default( /*#__PURE__*/ClockAlarm20RegularIcon, 'ClockAlarm20Regular');

const ClockAlarm24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.1 3.48A4 4 0 1 0 3.48 9.1a8.99 8.99 0 0 0 1.65 8.71l-1.91 1.91a.75.75 0 1 0 1.06 1.06l1.9-1.9a8.96 8.96 0 0 0 11.63 0l1.91 1.9a.75.75 0 1 0 1.06-1.06l-1.9-1.9a8.96 8.96 0 0 0 1.64-8.72 4 4 0 1 0-5.62-5.62 8.99 8.99 0 0 0-5.8 0ZM6 3.5c.63 0 1.2.23 1.65.62a9.04 9.04 0 0 0-3.53 3.53A2.5 2.5 0 0 1 6 3.5Zm10.35.62a2.5 2.5 0 0 1 3.53 3.53 9.04 9.04 0 0 0-3.53-3.53ZM11.25 7c.41 0 .75.34.75.75V12h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm24Filled = wrapIcon_1.default( /*#__PURE__*/ClockAlarm24FilledIcon, 'ClockAlarm24Filled');

const ClockAlarm24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 7.75a.75.75 0 0 0-1.5 0v5c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5H12V7.75ZM3.48 9.1A4 4 0 1 1 9.1 3.48a8.99 8.99 0 0 1 5.8 0 4 4 0 1 1 5.62 5.62 8.99 8.99 0 0 1-1.65 8.71l1.91 1.91a.75.75 0 1 1-1.06 1.06l-1.9-1.9a8.96 8.96 0 0 1-11.63 0l-1.91 1.9a.75.75 0 0 1-1.06-1.06l1.9-1.9A8.96 8.96 0 0 1 3.49 9.1ZM3.5 6c0 .63.23 1.2.62 1.65a9.04 9.04 0 0 1 3.53-3.53A2.5 2.5 0 0 0 3.5 6Zm16.38 1.65a2.5 2.5 0 0 0-3.53-3.53 9.04 9.04 0 0 1 3.53 3.53ZM4.5 12a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm24Regular = wrapIcon_1.default( /*#__PURE__*/ClockAlarm24RegularIcon, 'ClockAlarm24Regular');

const ClockAlarm32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3c1.52 0 2.89.68 3.8 1.75a11.97 11.97 0 0 1 8.4 0 4.99 4.99 0 1 1 7.05 7.05 11.98 11.98 0 0 1-2.09 11.95l2.55 2.54a1 1 0 0 1-1.42 1.42l-2.54-2.55a11.95 11.95 0 0 1-15.5 0l-2.54 2.55a1 1 0 0 1-1.42-1.42l2.55-2.54A11.95 11.95 0 0 1 4.75 11.8 4.99 4.99 0 0 1 8 3ZM5.67 9.89a12.06 12.06 0 0 1 4.22-4.22 3 3 0 0 0-4.22 4.22Zm16.44-4.22a12.06 12.06 0 0 1 4.22 4.22 3 3 0 0 0-4.22-4.22ZM16 10a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4v-6Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm32Filled = wrapIcon_1.default( /*#__PURE__*/ClockAlarm32FilledIcon, 'ClockAlarm32Filled');

const ClockAlarm32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 10v6h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0ZM3 8c0 1.52.68 2.89 1.75 3.8a11.97 11.97 0 0 0 2.09 11.95l-2.55 2.54a1 1 0 1 0 1.42 1.42l2.54-2.55a11.95 11.95 0 0 0 15.5 0l2.54 2.55a1 1 0 0 0 1.42-1.42l-2.55-2.54a11.95 11.95 0 0 0 2.09-11.95 4.99 4.99 0 1 0-7.05-7.05 11.97 11.97 0 0 0-8.4 0A4.99 4.99 0 0 0 3 8Zm2 0a3 3 0 0 1 4.89-2.33 12.06 12.06 0 0 0-4.22 4.22A2.99 2.99 0 0 1 5 8Zm22 0c0 .72-.25 1.37-.67 1.89a12.06 12.06 0 0 0-4.22-4.22A3 3 0 0 1 27 8ZM16 6a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z",
    fill: primaryFill
  }));
};

exports.ClockAlarm32Regular = wrapIcon_1.default( /*#__PURE__*/ClockAlarm32RegularIcon, 'ClockAlarm32Regular');

const ClockArrowDownload20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 17A7.5 7.5 0 1 0 3 9.6a5.5 5.5 0 0 1 7.4 7.4h.1ZM11 5.5V9h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0Zm-10 9a4.5 4.5 0 0 1 4-4.47v3.76l-.65-.64a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64v-3.76a4.5 4.5 0 1 1-5 4.47Zm2 2c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.ClockArrowDownload20Filled = wrapIcon_1.default( /*#__PURE__*/ClockArrowDownload20FilledIcon, 'ClockArrowDownload20Filled');

const ClockArrowDownload20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 9.5a7.5 7.5 0 1 1 7.4 7.5c.16-.32.3-.66.4-1A6.5 6.5 0 1 0 4 9.2c-.34.1-.68.24-1 .4v-.1ZM10.5 5c.28 0 .5.22.5.5V9h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5ZM5 10.03a4.5 4.5 0 1 0 1 0v3.76l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64v-3.76ZM3.5 16h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.ClockArrowDownload20Regular = wrapIcon_1.default( /*#__PURE__*/ClockArrowDownload20RegularIcon, 'ClockArrowDownload20Regular');

const ClockArrowDownload24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M22 12a10 10 0 1 0-19.97.78 6.48 6.48 0 0 1 8.97.03V6.75a.75.75 0 0 1 1.5-.1V12h3.25a.75.75 0 0 1 .1 1.5h-4.1l-.14-.01a6.47 6.47 0 0 1-.4 8.48L12 22a10 10 0 0 0 10-10ZM1 17.5a5.5 5.5 0 0 1 5-5.48v5.77l-1.65-1.64a.5.5 0 0 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7L7 17.79v-5.77a5.5 5.5 0 1 1-6 5.48Zm2.5 3c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z",
    fill: primaryFill
  }));
};

exports.ClockArrowDownload24Filled = wrapIcon_1.default( /*#__PURE__*/ClockArrowDownload24FilledIcon, 'ClockArrowDownload24Filled');

const ClockArrowDownload24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M22 12a10 10 0 1 0-19.97.78 6.52 6.52 0 0 1 1.64-1.14 8.34 8.34 0 0 1 16.66.36 8.34 8.34 0 0 1-7.97 8.33c-.3.6-.68 1.16-1.14 1.64L12 22a10 10 0 0 0 10-10Zm-16 .02a5.5 5.5 0 1 0 1 0v5.77l1.65-1.64a.5.5 0 0 1 .7.7l-2.5 2.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.7L6 17.79v-5.77ZM4 20h5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1Zm8.5-13.35a.75.75 0 0 0-1.5.1v6.1c.06.37.37.65.75.65h4.1a.75.75 0 0 0-.1-1.5H12.5V6.65Z",
    fill: primaryFill
  }));
};

exports.ClockArrowDownload24Regular = wrapIcon_1.default( /*#__PURE__*/ClockArrowDownload24RegularIcon, 'ClockArrowDownload24Regular');

const ClockDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 1a8 8 0 1 1-.59 15.98 5.5 5.5 0 0 0-7.39-7.39L3 9a8 8 0 0 1 8-8Zm-.5 3a.5.5 0 0 0-.5.5v5.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H11V4.41a.5.5 0 0 0-.5-.41ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L5.5 13.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L6.21 14.5l1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.ClockDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/ClockDismiss20FilledIcon, 'ClockDismiss20Filled');

const ClockDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 1a8 8 0 1 1-.59 15.98c.16-.31.29-.64.38-.98H11a7 7 0 1 0-7-6.8c-.34.1-.67.23-.98.39L3 9a8 8 0 0 1 8-8Zm-.5 3a.5.5 0 0 1 .5.41V9h2.5a.5.5 0 0 1 .09 1H10.5a.5.5 0 0 1-.5-.41V4.5c0-.28.22-.5.5-.5ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L5.5 13.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L6.21 14.5l1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.ClockDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/ClockDismiss20RegularIcon, 'ClockDismiss20Regular');

const ClockDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13 1a10 10 0 1 1-1 19.95A6.5 6.5 0 0 0 3.05 12 10 10 0 0 1 13 1ZM3.72 14.59l-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 0 0 0 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 0 0 0-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 0 0 0-.56l-.06-.07-.07-.06a.5.5 0 0 0-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 0 0-.49-.04l-.07.04ZM12.25 5a.75.75 0 0 0-.75.75v5.5c0 .42.33.75.75.75h4a.75.75 0 0 0 0-1.5H13V5.75a.75.75 0 0 0-.75-.75Z",
    fill: primaryFill
  }));
};

exports.ClockDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/ClockDismiss24FilledIcon, 'ClockDismiss24Filled');

const ClockDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13 1a10 10 0 1 1-1 19.95c.32-.5.57-1.04.74-1.62H13a8.34 8.34 0 0 0 0-16.66A8.34 8.34 0 0 0 4.67 11v.26c-.58.17-1.12.42-1.62.73A10 10 0 0 1 13 1ZM3.72 14.59l-.07.06-.06.07a.5.5 0 0 0 0 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 0 0 0 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 0 0 0-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 0 0 0-.56l-.06-.07-.07-.06a.5.5 0 0 0-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 0 0-.49-.04l-.07.04ZM12.25 5c.38 0 .7.28.74.65l.01.1V11h3.25a.75.75 0 0 1 .1 1.5h-4.1a.75.75 0 0 1-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.ClockDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/ClockDismiss24RegularIcon, 'ClockDismiss24Regular');

const ClockPause20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 17A7.5 7.5 0 1 0 3 9.6a5.5 5.5 0 0 1 7.4 7.4h.1ZM11 5.41V9h2.5a.5.5 0 0 1 .09 1H10.5a.5.5 0 0 1-.5-.41V5.5a.5.5 0 0 1 1-.09Zm-1 9.09a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM4 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 4 12Zm3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 7 12Z",
    fill: primaryFill
  }));
};

exports.ClockPause20Filled = wrapIcon_1.default( /*#__PURE__*/ClockPause20FilledIcon, 'ClockPause20Filled');

const ClockPause20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.8 16A6.5 6.5 0 1 0 4 9.2c-.34.1-.68.24-1 .4v-.1a7.5 7.5 0 1 1 7.4 7.5c.16-.32.3-.66.4-1Zm-5.3 3a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1-6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Zm3 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Zm3-7.5a.5.5 0 0 1 .5.41V9h2.5a.5.5 0 0 1 .09 1H10.5a.5.5 0 0 1-.5-.41V5.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClockPause20Regular = wrapIcon_1.default( /*#__PURE__*/ClockPause20RegularIcon, 'ClockPause20Regular');

const ClockPause24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.75 13.5h-4l-.14-.01a6.47 6.47 0 0 1-.4 8.48L12 22a10 10 0 1 0-9.97-9.22 6.48 6.48 0 0 1 8.97.03.8.8 0 0 1 0-.06v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5Zm-3.75 4a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.5-3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm4 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z",
    fill: primaryFill
  }));
};

exports.ClockPause24Filled = wrapIcon_1.default( /*#__PURE__*/ClockPause24FilledIcon, 'ClockPause24Filled');

const ClockPause24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M22 12a10 10 0 1 0-19.97.78 6.52 6.52 0 0 1 1.64-1.14 8.34 8.34 0 0 1 16.66.36 8.34 8.34 0 0 1-7.97 8.33c-.3.6-.68 1.16-1.14 1.64L12 22a10 10 0 0 0 10-10ZM6.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM5 15v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0Zm4 0v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0Zm2.75-9c.38 0 .7.28.74.65l.01.1V12h3.25a.75.75 0 0 1 .1 1.5h-4.1a.75.75 0 0 1-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75Z",
    fill: primaryFill
  }));
};

exports.ClockPause24Regular = wrapIcon_1.default( /*#__PURE__*/ClockPause24RegularIcon, 'ClockPause24Regular');

const ClockToolbox20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 9c-.56 0-1.08.19-1.5.5a7.5 7.5 0 1 1 8 7.48V13.5a2.5 2.5 0 0 0-2.04-2.46A2.5 2.5 0 0 0 6.5 9h-2Zm6-4a.5.5 0 0 0-.5.5v4.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H11V5.41a.5.5 0 0 0-.5-.41ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.ClockToolbox20Filled = wrapIcon_1.default( /*#__PURE__*/ClockToolbox20FilledIcon, 'ClockToolbox20Filled');

const ClockToolbox20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 15.98a6.5 6.5 0 1 0-6.98-6.93c-.38.07-.73.23-1.02.45a7.5 7.5 0 1 1 8 7.48v-1Zm0-10.57a.5.5 0 0 0-1 .09v4.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H11V5.41ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    fill: primaryFill
  }));
};

exports.ClockToolbox20Regular = wrapIcon_1.default( /*#__PURE__*/ClockToolbox20RegularIcon, 'ClockToolbox20Regular');

const ClockToolbox24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 2a10 10 0 0 0-9.91 11.32 2.75 2.75 0 0 1 2.66-2.07h3.5A2.75 2.75 0 0 1 11 14v.05a2.5 2.5 0 0 1 2 2.45v5c0 .16-.01.3-.04.45A10 10 0 0 0 12 2Zm3.75 11.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5ZM3 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H12v-1.5c0-.83-.67-1.5-1.5-1.5H10v-1c0-.97-.78-1.75-1.75-1.75h-3.5C3.78 12.25 3 13.03 3 14v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM1 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H12v2c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5Z",
    fill: primaryFill
  }));
};

exports.ClockToolbox24Filled = wrapIcon_1.default( /*#__PURE__*/ClockToolbox24FilledIcon, 'ClockToolbox24Filled');

const ClockToolbox24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M22 12a10 10 0 1 0-19.91 1.32c.21-.84.81-1.53 1.6-1.86a8.34 8.34 0 0 1 16.64.54c0 4.26-3.2 7.78-7.33 8.27v1.23c0 .16-.01.3-.04.45A10 10 0 0 0 22 12Zm-9.5-5.35a.75.75 0 0 0-1.5.1v6.1c.06.37.37.65.75.65h4.1a.75.75 0 0 0-.1-1.5H12.5V6.65ZM3 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H12v-1.5c0-.83-.67-1.5-1.5-1.5H10v-1c0-.97-.78-1.75-1.75-1.75h-3.5C3.78 12.25 3 13.03 3 14v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM1 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H12v2c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5Z",
    fill: primaryFill
  }));
};

exports.ClockToolbox24Regular = wrapIcon_1.default( /*#__PURE__*/ClockToolbox24RegularIcon, 'ClockToolbox24Regular');

const ClosedCaption16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 3h-9Zm5.68 2.7a1.8 1.8 0 0 1 2.07.35.5.5 0 0 1-.7.7.8.8 0 0 0-.93-.15C9.34 6.74 9 7.14 9 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 0 1 .7.7 1.8 1.8 0 0 1-2.07.35C8.46 9.94 8 9.14 8 8s.46-1.94 1.18-2.3Zm-1.93.35a.5.5 0 0 1-.7.7.8.8 0 0 0-.93-.15C5.34 6.74 5 7.14 5 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 1 1 .7.7 1.8 1.8 0 0 1-2.07.35C4.46 9.94 4 9.14 4 8s.46-1.94 1.18-2.3a1.8 1.8 0 0 1 2.07.35Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption16Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption16FilledIcon, 'ClosedCaption16Filled');

const ClosedCaption16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.18 5.7a1.8 1.8 0 0 1 2.07.35.5.5 0 0 1-.7.7.8.8 0 0 0-.93-.15C9.34 6.74 9 7.14 9 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 0 1 .7.7 1.8 1.8 0 0 1-2.07.35C8.46 9.94 8 9.14 8 8s.46-1.94 1.18-2.3Zm-1.93.35a1.8 1.8 0 0 0-2.07-.35C4.46 6.06 4 6.86 4 8s.46 1.94 1.18 2.3c.7.35 1.52.2 2.07-.35a.5.5 0 1 0-.7-.7.8.8 0 0 1-.93.15C5.34 9.26 5 8.86 5 8c0-.86.34-1.26.62-1.4a.8.8 0 0 1 .93.15.5.5 0 0 0 .7-.7ZM1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5ZM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption16Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption16RegularIcon, 'ClosedCaption16Regular');

const ClosedCaption20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm1.4 3.24c.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 1 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76Zm7.95.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22c-.41.21-.85.76-.85 1.87s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 0 1 .7.7c-.65.65-1.63.82-2.45.41-.84-.42-1.4-1.37-1.4-2.76 0-1.39.56-2.34 1.4-2.76.82-.41 1.8-.24 2.45.4Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption20Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption20FilledIcon, 'ClosedCaption20Filled');

const ClosedCaption20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.4 7.24c.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 0 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76Zm7.95.4a2.12 2.12 0 0 0-2.45-.4c-.84.42-1.4 1.37-1.4 2.76 0 1.39.56 2.34 1.4 2.76.82.41 1.8.24 2.45-.4a.5.5 0 0 0-.7-.71c-.35.35-.87.43-1.3.22-.41-.21-.85-.76-.85-1.87s.44-1.66.85-1.87c.43-.21.95-.13 1.3.22a.5.5 0 0 0 .7-.7ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption20Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption20RegularIcon, 'ClosedCaption20Regular');

const ClosedCaption24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5a3.25 3.25 0 0 1 3.07-3.24L5.25 4h13.5Zm-8.13 4.6C8.22 7.22 5.5 8.85 5.5 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 0 0-.74-1.3C8.48 14.9 7 14 7 12s1.48-2.9 2.88-2.1a.75.75 0 0 0 .74-1.3Zm7.5 0C15.72 7.22 13 8.85 13 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 0 0-.74-1.3c-1.4.8-2.88-.1-2.88-2.1s1.48-2.9 2.88-2.1a.75.75 0 0 0 .74-1.3Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption24Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption24FilledIcon, 'ClosedCaption24Filled');

const ClosedCaption24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5a3.25 3.25 0 0 1 3.07-3.24L5.25 4h13.5Zm0 1.5H5.11c-.9.08-1.61.83-1.61 1.75v9.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75ZM5.5 12c0-3.15 2.71-4.78 5.12-3.4a.75.75 0 0 1-.74 1.3C8.48 9.1 7 10 7 12s1.48 2.9 2.88 2.1a.75.75 0 0 1 .74 1.3c-2.4 1.37-5.12-.26-5.12-3.4Zm7.5 0c0-3.15 2.71-4.78 5.12-3.4a.75.75 0 0 1-.74 1.3c-1.4-.8-2.88.1-2.88 2.1s1.48 2.9 2.88 2.1a.75.75 0 0 1 .74 1.3C15.72 16.78 13 15.15 13 12Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption24Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption24RegularIcon, 'ClosedCaption24Regular');

const ClosedCaption28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.25 4A4.25 4.25 0 0 0 2 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5C24.1 24 26 22.1 26 19.75V8.25C26 5.9 24.1 4 21.75 4H6.25Zm4.8 5.74c.62.1 1.23.32 1.67.67a.75.75 0 1 1-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 0 0-1.3.1c-.42.15-.78.4-1.05.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 0 1 .94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 0 1-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 0 1 1.8-1.36 4.32 4.32 0 0 1 2.02-.18Zm10.17.67a.75.75 0 1 1-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 0 0-1.3.1c-.42.15-.78.4-1.05.8s-.48.99-.48 1.87c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 0 1 .94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 0 1-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 0 1 1.8-1.36 4.32 4.32 0 0 1 2.02-.18c.62.1 1.23.32 1.67.67Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption28Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption28FilledIcon, 'ClosedCaption28Filled');

const ClosedCaption28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.05 9.74c.62.1 1.23.32 1.67.67a.75.75 0 1 1-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 0 0-1.3.1c-.42.15-.78.4-1.05.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 0 1 .94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 0 1-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 0 1 1.8-1.36 4.32 4.32 0 0 1 2.02-.18Zm10.17.67a3.53 3.53 0 0 0-1.67-.67 4.32 4.32 0 0 0-2.01.18c-.68.23-1.33.67-1.8 1.36-.48.7-.74 1.6-.74 2.72s.26 2.02.73 2.72c.48.7 1.13 1.13 1.8 1.36.68.24 1.4.27 2.02.18.62-.1 1.23-.32 1.67-.67a.75.75 0 1 0-.94-1.18c-.18.15-.52.3-.95.36-.42.07-.89.04-1.3-.1-.42-.15-.78-.4-1.05-.8s-.48-.99-.48-1.87c0-.88.2-1.48.48-1.88.27-.4.63-.64 1.04-.79.42-.14.89-.17 1.31-.1.43.06.77.2.95.36a.75.75 0 0 0 .94-1.18ZM2 8.25C2 5.9 3.9 4 6.25 4h15.5C24.1 4 26 5.9 26 8.25v11.5C26 22.1 24.1 24 21.75 24H6.25A4.25 4.25 0 0 1 2 19.75V8.25ZM6.25 5.5A2.75 2.75 0 0 0 3.5 8.25v11.5a2.75 2.75 0 0 0 2.75 2.75h15.5a2.75 2.75 0 0 0 2.75-2.75V8.25a2.75 2.75 0 0 0-2.75-2.75H6.25Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption28Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption28RegularIcon, 'ClosedCaption28Regular');

const ClosedCaption32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-19ZM9 16c0 1.79 1.24 3 2.5 3 .46 0 .9-.15 1.27-.42a1 1 0 1 1 1.17 1.63c-.7.5-1.53.79-2.44.79C8.9 21 7 18.63 7 16s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 1 1-1.21 1.6c-.4-.3-.85-.47-1.33-.47-1.26 0-2.5 1.21-2.5 3Zm12.5-3c-1.26 0-2.5 1.21-2.5 3s1.24 3 2.5 3c.46 0 .9-.15 1.27-.42a1 1 0 1 1 1.17 1.63c-.7.5-1.53.79-2.44.79-2.6 0-4.5-2.37-4.5-5s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 1 1-1.21 1.6c-.4-.3-.85-.47-1.33-.47Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption32Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption32FilledIcon, 'ClosedCaption32Filled');

const ClosedCaption32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.5 13C10.24 13 9 14.21 9 16s1.24 3 2.5 3c.46 0 .9-.15 1.27-.42a1 1 0 1 1 1.17 1.63c-.7.5-1.53.79-2.44.79C8.9 21 7 18.63 7 16s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 1 1-1.21 1.6c-.4-.3-.85-.47-1.33-.47Zm7.5 3c0-1.79 1.24-3 2.5-3 .48 0 .93.16 1.33.46a1 1 0 0 0 1.2-1.6A4.18 4.18 0 0 0 21.5 11c-2.6 0-4.5 2.37-4.5 5s1.9 5 4.5 5c.9 0 1.74-.3 2.44-.8a1 1 0 1 0-1.17-1.62c-.38.27-.81.42-1.27.42-1.26 0-2.5-1.21-2.5-3ZM2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15ZM6.5 6A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6h-19Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption32Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption32RegularIcon, 'ClosedCaption32Regular');

const ClosedCaption48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.5 8A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27a6.5 6.5 0 0 0 6.5-6.5v-19A6.5 6.5 0 0 0 37.5 8h-27Zm3.52 8.98c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 0 1-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 0 1 2.04 1.46 5.1 5.1 0 0 1-3.68 2 6.23 6.23 0 0 1-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02Zm22.79 1.36a1.25 1.25 0 0 1-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 0 1 2.04 1.46 5.1 5.1 0 0 1-3.68 2 6.23 6.23 0 0 1-4.03-.94C27.38 29.94 26 27.84 26 24c0-3.88 1.49-5.92 3.02-7.02 2.31-1.65 6.1-1.36 7.79 1.36Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption48Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaption48FilledIcon, 'ClosedCaption48Filled');

const ClosedCaption48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.02 16.98c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 0 1-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 0 1 2.04 1.46 5.1 5.1 0 0 1-3.68 2 6.23 6.23 0 0 1-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02Zm22.79 1.36c-1.7-2.72-5.48-3-7.79-1.36C27.5 18.08 26 20.12 26 24c0 3.84 1.38 5.93 3.06 7.04a6.23 6.23 0 0 0 4.03.93 5.1 5.1 0 0 0 3.68-2 1.25 1.25 0 0 0-2.04-1.45c-.36.51-1.03.87-1.9.97-.87.09-1.76-.11-2.39-.53-.86-.57-1.94-1.8-1.94-4.96 0-3.12 1.14-4.38 1.98-4.98 1.34-.96 3.4-.64 4.21.64a1.25 1.25 0 0 0 2.12-1.32ZM4 14.5A6.5 6.5 0 0 1 10.5 8h27a6.5 6.5 0 0 1 6.5 6.5v19a6.5 6.5 0 0 1-6.5 6.5h-27A6.5 6.5 0 0 1 4 33.5v-19Zm6.5-4a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h27a4 4 0 0 0 4-4v-19a4 4 0 0 0-4-4h-27Z",
    fill: primaryFill
  }));
};

exports.ClosedCaption48Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaption48RegularIcon, 'ClosedCaption48Regular');

const ClosedCaptionOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m12.3 13 1.85 1.85a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L2.5 3.21A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h8.8ZM5.81 6.53a.79.79 0 0 0-.2.07C5.34 6.74 5 7.14 5 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 1 1 .7.7 1.8 1.8 0 0 1-2.07.35C4.46 9.94 4 9.14 4 8c0-1.07.41-1.85 1.06-2.23l.76.76Zm3.8.07a1 1 0 0 0-.43.46l5.14 5.15A2.5 2.5 0 0 0 15 10.5v-5A2.5 2.5 0 0 0 12.5 3H5.12l3.34 3.34a1.8 1.8 0 0 1 2.8-.29.5.5 0 0 1-.71.7.8.8 0 0 0-.93-.15Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff16Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff16FilledIcon, 'ClosedCaptionOff16Filled');

const ClosedCaptionOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m12.3 13 1.85 1.85a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L2.5 3.21A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h8.8Zm-1-1H3.5A1.5 1.5 0 0 1 2 10.5v-5c0-.76.57-1.4 1.3-1.49l1.76 1.76C4.4 6.15 4 6.93 4 8c0 1.14.46 1.94 1.18 2.3.7.34 1.52.2 2.07-.35a.5.5 0 1 0-.7-.7.8.8 0 0 1-.93.15C5.34 9.26 5 8.86 5 8c0-.86.34-1.26.62-1.4a.79.79 0 0 1 .2-.07L11.3 12ZM8.45 6.34l.73.72a1 1 0 0 1 .43-.46.8.8 0 0 1 .93.15.5.5 0 0 0 .7-.7 1.8 1.8 0 0 0-2.07-.35c-.29.14-.53.36-.72.64ZM14 10.5c0 .38-.14.73-.38 1l.7.7a2.5 2.5 0 0 0 .68-1.7v-5A2.5 2.5 0 0 0 12.5 3H5.12l1 1h6.38c.83 0 1.5.67 1.5 1.5v5Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff16Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff16RegularIcon, 'ClosedCaptionOff16Regular');

const ClosedCaptionOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10l.28-.01 1.87 1.86a.5.5 0 0 0 .7-.7l-1.48-1.48-3.7-3.7-1.05-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15Zm4.46 5.87c-.16 0-.31.04-.46.11C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 1 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76l.1-.04.81.82Zm3.42.59L6.13 4H15a3 3 0 0 1 3 3v6c0 .8-.31 1.52-.82 2.06l-5.64-5.64c.13-.73.48-1.12.8-1.29.44-.21.96-.13 1.3.22a.5.5 0 0 0 .71-.7 2.12 2.12 0 0 0-2.45-.41c-.52.26-.93.72-1.17 1.37Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff20Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff20FilledIcon, 'ClosedCaptionOff20Filled');

const ClosedCaptionOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10l.28-.01 1.87 1.86a.5.5 0 0 0 .7-.7l-1.48-1.48-.76-.77-2.93-2.93-1.06-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15ZM14.3 15H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.39-1.9l2.1 2.1-.09.04C5.56 7.66 5 8.61 5 10c0 1.39.56 2.34 1.4 2.76.82.41 1.8.24 2.45-.4a.5.5 0 1 0-.7-.71c-.35.35-.87.43-1.3.22C6.44 11.66 6 11.1 6 10s.44-1.66.85-1.87c.15-.07.3-.1.46-.11L14.3 15Zm2.9.06-.72-.7A2 2 0 0 0 17 13V7a2 2 0 0 0-2-2H7.12l-1-1H15a3 3 0 0 1 3 3v6c0 .8-.31 1.52-.82 2.06Zm-5.65-5.64-.81-.81c.24-.65.65-1.11 1.17-1.37.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22c-.33.17-.68.56-.8 1.3Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff20Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff20RegularIcon, 'ClosedCaptionOff20Regular');

const ClosedCaptionOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.25 1.25A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.69l1.78 1.78a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm5.3 7.41C7.68 9.78 7 10.63 7 12c0 2 1.48 2.9 2.88 2.1a.75.75 0 0 1 .74 1.3c-2.4 1.37-5.12-.26-5.12-3.4 0-1.7.8-2.96 1.9-3.54l1.17 1.17Zm8.8.27c-1.24-.7-2.55-.08-2.83 1.47l7.01 7.01c.28-.48.44-1.03.44-1.63v-9.5C22 5.45 20.54 4 18.75 4H7.18l6.18 6.17a3.26 3.26 0 0 1 4.76-1.57.75.75 0 0 1-.74 1.3Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff24Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff24FilledIcon, 'ClosedCaptionOff24Filled');

const ClosedCaptionOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.25 1.25A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.69l1.78 1.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM17.44 18.5H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.73.44-1.35 1.07-1.61L7.4 8.46C6.3 9.04 5.5 10.3 5.5 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 0 0-.74-1.3C8.48 14.9 7 14 7 12c0-1.37.69-2.22 1.57-2.37l8.87 8.87Zm2.99-1.25c.05-.16.07-.32.07-.5v-9.5c0-.97-.78-1.75-1.75-1.75H8.68L7.18 4h11.57C20.55 4 22 5.46 22 7.25v9.5c0 .6-.16 1.15-.44 1.63l-1.13-1.13Zm-5.88-5.88-1.2-1.2a3.26 3.26 0 0 1 4.77-1.57.75.75 0 0 1-.74 1.3c-1.24-.7-2.55-.08-2.83 1.47Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff24Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff24RegularIcon, 'ClosedCaptionOff24Regular');

const ClosedCaptionOff28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.53 1.53A4.24 4.24 0 0 0 2 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5c.36 0 .72-.05 1.06-.13l1.9 1.91a.75.75 0 0 0 1.07-1.06L3.28 2.22Zm6.86 8.99c-.2.01-.42.06-.62.12-.4.15-.77.4-1.04.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 1 1 .94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 0 1-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72A3.52 3.52 0 0 1 8.9 9.96l1.24 1.25ZM7.18 4l8.13 8.12a3.53 3.53 0 0 1 2.23-2.2 4.32 4.32 0 0 1 2.01-.18c.62.1 1.23.32 1.67.67a.75.75 0 1 1-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 0 0-1.3.1c-.42.15-.78.4-1.05.8-.2.29-.37.69-.44 1.23l3.3 3.29c.18-.07.34-.15.44-.24a.75.75 0 1 1 .94 1.18l-.27.18 4.34 4.34c.45-.68.71-1.49.71-2.36V8.25C26 5.9 24.1 4 21.75 4H7.18Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff28Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff28FilledIcon, 'ClosedCaptionOff28Filled');

const ClosedCaptionOff28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.53 1.53A4.24 4.24 0 0 0 2 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5c.36 0 .72-.05 1.06-.13l1.9 1.91a.75.75 0 0 0 1.07-1.06L3.28 2.22ZM21.44 22.5H6.25a2.75 2.75 0 0 1-2.75-2.75V8.25c0-1 .53-1.88 1.33-2.36L8.9 9.96c-.63.25-1.22.67-1.67 1.32-.47.7-.73 1.6-.73 2.72s.26 2.02.73 2.72c.48.7 1.13 1.13 1.8 1.36.68.24 1.4.27 2.02.18.62-.1 1.23-.32 1.67-.67a.75.75 0 1 0-.94-1.18c-.18.15-.52.3-.95.36-.42.07-.89.04-1.3-.1-.42-.15-.78-.4-1.05-.8S8 14.89 8 14c0-.88.2-1.48.48-1.88.27-.4.63-.64 1.04-.79.2-.06.41-.1.62-.12L16 17.05c.11.13.23.24.35.35l5.1 5.1ZM7.18 4l1.5 1.5h13.07a2.75 2.75 0 0 1 2.75 2.75v11.5c0 .45-.11.88-.3 1.26l1.09 1.1c.45-.68.71-1.49.71-2.36V8.25C26 5.9 24.1 4 21.75 4H7.18Zm14.04 13.59-.27.18-1.12-1.12c.2-.07.35-.15.45-.24a.75.75 0 1 1 .94 1.18Zm-5.91-5.47 1.23 1.24c.07-.54.24-.94.44-1.24.27-.4.63-.64 1.04-.79.42-.14.89-.17 1.31-.1.43.06.77.2.95.36a.75.75 0 1 0 .94-1.18 3.53 3.53 0 0 0-1.67-.67 4.32 4.32 0 0 0-2.01.18 3.53 3.53 0 0 0-2.23 2.2Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff28Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff28RegularIcon, 'ClosedCaptionOff28Regular');

const ClosedCaptionOff48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m38.2 39.96 3.67 3.67a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l2.79 2.8A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27c.23 0 .47-.01.7-.04ZM16.74 18.5c-.45.08-.89.25-1.26.52-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 0 1 2.04 1.46 5.1 5.1 0 0 1-3.68 2 6.23 6.23 0 0 1-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02.24-.17.49-.31.75-.44l1.97 1.96Zm13.74.52c-.77.54-1.78 1.64-1.95 4.2l5.75 5.75c.18-.13.33-.28.45-.45a1.25 1.25 0 0 1 2.04 1.46c-.21.29-.45.55-.71.77l6.64 6.65a6.47 6.47 0 0 0 1.3-3.9v-19A6.5 6.5 0 0 0 37.5 8H13.3l13.05 13.04a6.94 6.94 0 0 1 2.67-4.06c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 0 1-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff48Filled = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff48FilledIcon, 'ClosedCaptionOff48Filled');

const ClosedCaptionOff48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m38.2 39.96 3.67 3.67a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l2.79 2.8A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27c.23 0 .47-.01.7-.04Zm-2.47-2.46H10.5a4 4 0 0 1-4-4v-19a4 4 0 0 1 2.52-3.72l5.75 5.76c-.26.13-.51.27-.75.44C12.5 18.08 11 20.12 11 24c0 3.84 1.38 5.93 3.06 7.04a6.23 6.23 0 0 0 4.03.93 5.1 5.1 0 0 0 3.68-2 1.25 1.25 0 0 0-2.04-1.45c-.36.51-1.03.87-1.9.97-.87.09-1.76-.11-2.39-.53-.86-.57-1.94-1.8-1.94-4.96 0-3.12 1.14-4.38 1.98-4.98.37-.27.8-.44 1.26-.52l19 19Zm5.77-4c0 .77-.22 1.49-.6 2.1l1.8 1.8a6.47 6.47 0 0 0 1.3-3.9v-19A6.5 6.5 0 0 0 37.5 8H13.3l2.5 2.5h21.7a4 4 0 0 1 4 4v19Zm-7.22-4.53 1.78 1.78c.26-.22.5-.48.7-.77a1.25 1.25 0 0 0-2.03-1.46c-.12.17-.27.32-.45.45Zm-7.93-7.93 2.18 2.18c.17-2.56 1.18-3.66 1.95-4.2 1.34-.96 3.4-.64 4.21.64a1.25 1.25 0 0 0 2.12-1.32c-1.7-2.72-5.48-3-7.79-1.36a6.94 6.94 0 0 0-2.67 4.06Z",
    fill: primaryFill
  }));
};

exports.ClosedCaptionOff48Regular = wrapIcon_1.default( /*#__PURE__*/ClosedCaptionOff48RegularIcon, 'ClosedCaptionOff48Regular');

const Cloud16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.93 4.37A3.82 3.82 0 0 1 8 3c.85 0 1.84.28 2.63.93a3.73 3.73 0 0 1 1.35 2.6c.69.08 1.35.34 1.89.75A2.77 2.77 0 0 1 15 9.5c0 .88-.3 1.65-.92 2.2-.62.54-1.5.8-2.58.8h-7c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 0 1 1 9.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15Z",
    fill: primaryFill
  }));
};

exports.Cloud16Filled = wrapIcon_1.default( /*#__PURE__*/Cloud16FilledIcon, 'Cloud16Filled');

const Cloud16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.7 5c-.48.6-.7 1.35-.7 2a.5.5 0 0 1-.5.5C2.69 7.5 2 8.76 2 9.5c0 .43.1.92.44 1.3.32.36.91.7 2.06.7h7c.93 0 1.54-.23 1.92-.56.37-.32.58-.8.58-1.44 0-.58-.28-1.07-.74-1.43a2.92 2.92 0 0 0-1.76-.57.5.5 0 0 1-.5-.5c0-1.1-.43-1.83-1-2.3A3.23 3.23 0 0 0 8 4c-1.1 0-1.83.43-2.3 1Zm-.77-.63A3.82 3.82 0 0 1 8 3c.85 0 1.84.28 2.63.93a3.73 3.73 0 0 1 1.35 2.6c.69.08 1.35.34 1.89.75A2.77 2.77 0 0 1 15 9.5c0 .88-.3 1.65-.92 2.2-.62.54-1.5.8-2.58.8h-7c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 0 1 1 9.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15Z",
    fill: primaryFill
  }));
};

exports.Cloud16Regular = wrapIcon_1.default( /*#__PURE__*/Cloud16RegularIcon, 'Cloud16Regular');

const Cloud20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62 3.33 3.33 0 0 1 14.72 15H5.28A3.33 3.33 0 0 1 2 11.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 5.9 7.18 4 10 4Z",
    fill: primaryFill
  }));
};

exports.Cloud20Filled = wrapIcon_1.default( /*#__PURE__*/Cloud20FilledIcon, 'Cloud20Filled');

const Cloud20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62 3.33 3.33 0 0 1 14.72 15H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 1C7.89 5 6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14h9.44A2.33 2.33 0 0 0 17 11.62a2.33 2.33 0 0 0-2.28-2.37h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5Z",
    fill: primaryFill
  }));
};

exports.Cloud20Regular = wrapIcon_1.default( /*#__PURE__*/Cloud20RegularIcon, 'Cloud20Regular');

const Cloud24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.09 9.75a5.75 5.75 0 0 1 11.32 0h.09a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8h.09Z",
    fill: primaryFill
  }));
};

exports.Cloud24Filled = wrapIcon_1.default( /*#__PURE__*/Cloud24FilledIcon, 'Cloud24Filled');

const Cloud24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.09 9.75a5.75 5.75 0 0 1 11.32 0h.09a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8h.09Zm5.66-3.25a4.25 4.25 0 0 0-4.24 4.04.75.75 0 0 1-.75.71H6a2.5 2.5 0 0 0 0 5h11.5a2.5 2.5 0 0 0 0-5h-.76a.75.75 0 0 1-.75-.71 4.25 4.25 0 0 0-4.24-4.04Z",
    fill: primaryFill
  }));
};

exports.Cloud24Regular = wrapIcon_1.default( /*#__PURE__*/Cloud24RegularIcon, 'Cloud24Regular');

const Cloud28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 6a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5h13.5a4.75 4.75 0 1 0 0-9.5h-.27A6.5 6.5 0 0 0 14 6Z",
    fill: primaryFill
  }));
};

exports.Cloud28Filled = wrapIcon_1.default( /*#__PURE__*/Cloud28FilledIcon, 'Cloud28Filled');

const Cloud28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 12a6.5 6.5 0 0 1 12.96 0h.27a4.75 4.75 0 1 1 0 9.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM14 7.5a5 5 0 0 0-5 5v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h13.5a3.25 3.25 0 0 0 0-6.5h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-5-5Z",
    fill: primaryFill
  }));
};

exports.Cloud28Regular = wrapIcon_1.default( /*#__PURE__*/Cloud28RegularIcon, 'Cloud28Regular');

const Cloud32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 8.74A7.64 7.64 0 0 1 16 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3Z",
    fill: primaryFill
  }));
};

exports.Cloud32Filled = wrapIcon_1.default( /*#__PURE__*/Cloud32FilledIcon, 'Cloud32Filled');

const Cloud32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 10a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 22.31 6.7 23 9 23h14c1.85 0 3.08-.45 3.84-1.11.74-.64 1.16-1.6 1.16-2.89 0-1.16-.56-2.14-1.49-2.85A5.85 5.85 0 0 0 23 15a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 8c-2.2 0-3.67.87-4.6 2ZM9.85 8.75A7.64 7.64 0 0 1 16 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3Z",
    fill: primaryFill
  }));
};

exports.Cloud32Regular = wrapIcon_1.default( /*#__PURE__*/Cloud32RegularIcon, 'Cloud32Regular');

const Cloud48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 10a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h22.5a7.75 7.75 0 0 0 0-15.5h-.3A11 11 0 0 0 24 10Z",
    fill: primaryFill
  }));
};

exports.Cloud48Filled = wrapIcon_1.default( /*#__PURE__*/Cloud48FilledIcon, 'Cloud48Filled');

const Cloud48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 20a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 0 15.5h-22.5a7.75 7.75 0 0 1 0-15.5h.3ZM24 12.5a8.5 8.5 0 0 0-8.5 8.5v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h22.5a5.25 5.25 0 1 0 0-10.5h-1.5c-.69 0-1.25-.56-1.25-1.25V21c0-4.7-3.8-8.5-8.5-8.5Z",
    fill: primaryFill
  }));
};

exports.Cloud48Regular = wrapIcon_1.default( /*#__PURE__*/Cloud48RegularIcon, 'Cloud48Regular');

const CloudAdd16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5Z",
    fill: primaryFill
  }));
};

exports.CloudAdd16Filled = wrapIcon_1.default( /*#__PURE__*/CloudAdd16FilledIcon, 'CloudAdd16Filled');

const CloudAdd16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5Z",
    fill: primaryFill
  }));
};

exports.CloudAdd16Regular = wrapIcon_1.default( /*#__PURE__*/CloudAdd16RegularIcon, 'CloudAdd16Regular');

const CloudAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm3.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14h-1.5a.5.5 0 0 1 0-1H13v-1.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudAdd20Filled = wrapIcon_1.default( /*#__PURE__*/CloudAdd20FilledIcon, 'CloudAdd20Filled');

const CloudAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm3.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14h-1.5a.5.5 0 0 1 0-1H13v-1.5c0-.28.22-.5.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudAdd20Regular = wrapIcon_1.default( /*#__PURE__*/CloudAdd20RegularIcon, 'CloudAdd20Regular');

const CloudAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V17h-2.5a.5.5 0 0 1 0-1H16v-2.5a.5.5 0 1 1 1 0V16h2.5a.5.5 0 0 1 0 1H17Z",
    fill: primaryFill
  }));
};

exports.CloudAdd24Filled = wrapIcon_1.default( /*#__PURE__*/CloudAdd24FilledIcon, 'CloudAdd24Filled');

const CloudAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V17h-2.5a.5.5 0 0 1 0-1H16v-2.5a.5.5 0 1 1 1 0V16h2.5a.5.5 0 0 1 0 1H17Z",
    fill: primaryFill
  }));
};

exports.CloudAdd24Regular = wrapIcon_1.default( /*#__PURE__*/CloudAdd24RegularIcon, 'CloudAdd24Regular');

const CloudArchive16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.94 0c1.06.08 1.98.66 2.52 1.5H8a2 2 0 0 0-1 3.73V12H4.25a3.25 3.25 0 0 1-.22-6.5ZM8 8a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2H8Zm7 3H8v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3Zm-5 1.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudArchive16Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive16FilledIcon, 'CloudArchive16Filled');

const CloudArchive16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5H7v1H4.25a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.94 0c1.06.08 1.98.66 2.52 1.5h-1.33c-.38-.31-.87-.5-1.41-.5h-.25A.5.5 0 0 1 11 6a3 3 0 0 0-3-3Zm0 5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2H8Zm5 8a2 2 0 0 0 2-2v-3H8v3c0 1.1.9 2 2 2h3Zm-3-3.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudArchive16Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive16RegularIcon, 'CloudArchive16Regular');

const CloudArchive20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07c1.24 0 2.32.7 2.88 1.75H11a2 2 0 0 0-1 3.73V15H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm8 2h-7v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3Zm-4.5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive20Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive20FilledIcon, 'CloudArchive20Filled');

const CloudArchive20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07c1.24 0 2.32.7 2.88 1.75h-1.21a2.24 2.24 0 0 0-1.67-.75h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14H10v1H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm8 2h-7v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3Zm-4.5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive20Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive20RegularIcon, 'CloudArchive20Regular');

const CloudArchive24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 9.02a6 6 0 0 1 11.84 0A4.5 4.5 0 0 1 21.74 12H13a2 2 0 0 0-2 2v1a2 2 0 0 0 1 1.73V18H6.5a4.5 4.5 0 0 1-.42-8.98ZM13 13a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-9Zm9 4h-9v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4Zm-6.5 1.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudArchive24Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive24FilledIcon, 'CloudArchive24Filled');

const CloudArchive24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h5.18c.1.09.2.17.32.23V18H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0A4.5 4.5 0 0 1 21.74 12H20.1a3 3 0 0 0-2.6-1.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm1 7.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-9Zm7 10a2 2 0 0 0 2-2v-4h-9v4c0 1.1.9 2 2 2h5Zm-4.5-4.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudArchive24Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive24RegularIcon, 'CloudArchive24Regular');

const CloudArchive28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27a4.75 4.75 0 0 1 4.7 4H15a2 2 0 0 0-2 2v1a2 2 0 0 0 1 1.73v.77H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM14 16a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-1Zm12 3H15v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5Zm-7.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive28Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive28FilledIcon, 'CloudArchive28Filled');

const CloudArchive28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27a4.75 4.75 0 0 1 4.7 4H23.9a3.25 3.25 0 0 0-3.16-2.5h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h6.02a2 2 0 0 0 .73.73v.77H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM14 16a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-1Zm12 3H15v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5Zm-7.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive28Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive28RegularIcon, 'CloudArchive28Regular');

const CloudArchive32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 7.74A7.64 7.64 0 0 1 16 5c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.85 5.85 0 0 1 29.62 16H17a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.73V24H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 18c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM16 18a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-2Zm13.85 4H17v5.85a3 3 0 0 0 3 3h6.85a3 3 0 0 0 3-3V22Zm-8.35 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive32Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive32FilledIcon, 'CloudArchive32Filled');

const CloudArchive32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 9a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 21.31 6.7 22 9 22h7v2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 18c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 5c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.85 5.85 0 0 1 29.62 16h-2.27c-.23-.31-.5-.6-.84-.85A5.85 5.85 0 0 0 23 14a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 7c-2.2 0-3.67.87-4.6 2Zm4.6 9a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-2Zm13.85 4H17v5.85a3 3 0 0 0 3 3h6.85a3 3 0 0 0 3-3V22Zm-8.35 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudArchive32Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive32RegularIcon, 'CloudArchive32Regular');

const CloudArchive48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 19a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 6.78 4H23a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2v2.5H12.75a7.75 7.75 0 0 1 0-15.5h.3ZM23 26a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H24a1 1 0 0 1-1-1v-3Zm20 6H25v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-9Zm-12 3h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Z",
    fill: primaryFill
  }));
};

exports.CloudArchive48Filled = wrapIcon_1.default( /*#__PURE__*/CloudArchive48FilledIcon, 'CloudArchive48Filled');

const CloudArchive48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 19a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 6.78 4h-3.1a5.23 5.23 0 0 0-3.68-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V20a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5H23v2.5H12.75a7.75 7.75 0 0 1 0-15.5h.3ZM23 26a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H24a1 1 0 0 1-1-1v-3Zm20 6H25v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-9Zm-12 3h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Z",
    fill: primaryFill
  }));
};

exports.CloudArchive48Regular = wrapIcon_1.default( /*#__PURE__*/CloudArchive48RegularIcon, 'CloudArchive48Regular');

const CloudArrowDown16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L11 11.29V8.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown16Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown16FilledIcon, 'CloudArrowDown16Filled');

const CloudArrowDown16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L11 11.29V8.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown16Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown16RegularIcon, 'CloudArrowDown16Regular');

const CloudArrowDown20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm3.5 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.6-4.9L14 14.2v-2.7a.5.5 0 0 0-1 0v2.7l-1.1-1.1a.56.56 0 1 0-.8.8l2 2c.22.22.58.22.8 0l2-2a.56.56 0 1 0-.8-.8Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown20Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown20FilledIcon, 'CloudArrowDown20Filled');

const CloudArrowDown20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm3.5 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.6-4.9L14 14.2v-2.7a.5.5 0 0 0-1 0v2.7l-1.1-1.1a.56.56 0 1 0-.8.8l2 2c.22.22.58.22.8 0l2-2a.56.56 0 1 0-.8-.8Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown20Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown20RegularIcon, 'CloudArrowDown20Regular');

const CloudArrowDown24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-5-3a.5.5 0 0 0-1 0v4.8l-1.65-1.65a.5.5 0 0 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7L17 18.29V13.5Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown24Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown24FilledIcon, 'CloudArrowDown24Filled');

const CloudArrowDown24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-5-3a.5.5 0 0 0-1 0v4.8l-1.65-1.65a.5.5 0 0 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7L17 18.29V13.5Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown24Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown24RegularIcon, 'CloudArrowDown24Regular');

const CloudArrowDown28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13a7.5 7.5 0 0 1 12.41-5.67A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm13 15.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-7-4a.5.5 0 0 1 1 0v6.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-3-3a.5.5 0 0 1 .7-.7L20 22.29V15.5Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown28Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown28FilledIcon, 'CloudArrowDown28Filled');

const CloudArrowDown28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 0 0-2.37-1.4 3.24 3.24 0 0 0-2.29-.93h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM27 19.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-7-4a.5.5 0 0 1 1 0v6.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-3-3a.5.5 0 0 1 .7-.7L20 22.29V15.5Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown28Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown28RegularIcon, 'CloudArrowDown28Regular');

const CloudArrowDown32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 5.74A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0 0 13.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM30 22.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-11.78 1.28 4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72v-7.69a.75.75 0 0 0-1.5 0v7.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown32Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown32FilledIcon, 'CloudArrowDown32Filled');

const CloudArrowDown32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 7a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 0 0-1.95-2.01 3.66 3.66 0 0 0-1.42-2.18A5.85 5.85 0 0 0 23 12a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 5c-2.2 0-3.67.87-4.6 2ZM30 22.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-11.78 1.28 4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72v-7.69a.75.75 0 0 0-1.5 0v7.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown32Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown32RegularIcon, 'CloudArrowDown32Regular');

const CloudArrowDown48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34a13 13 0 0 1 22.86-6.87 7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm20 27a11 11 0 1 0-22 0 11 11 0 0 0 22 0Zm-11 8a1 1 0 0 1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4l3.3 3.29V26a1 1 0 1 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown48Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown48FilledIcon, 'CloudArrowDown48Filled');

const CloudArrowDown48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13.08 13.08 0 0 0-2.68-2.4 5.25 5.25 0 0 0-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM44 33a11 11 0 1 0-22 0 11 11 0 0 0 22 0Zm-11 8a1 1 0 0 1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4l3.3 3.29V26a1 1 0 1 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z",
    fill: primaryFill
  }));
};

exports.CloudArrowDown48Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowDown48RegularIcon, 'CloudArrowDown48Regular');

const CloudArrowUp16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L10 9.71v2.79a.5.5 0 0 0 1 0V9.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 10.5 8a.5.5 0 0 0-.35.14Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp16Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp16FilledIcon, 'CloudArrowUp16Filled');

const CloudArrowUp16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L10 9.71v2.79a.5.5 0 0 0 1 0V9.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 10.5 8a.5.5 0 0 0-.35.14Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp16Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp16RegularIcon, 'CloudArrowUp16Regular');

const CloudArrowUp20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm3.5 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm1.6 4.9a.56.56 0 1 0 .8-.8l-2-2a.56.56 0 0 0-.8 0l-2 2a.56.56 0 1 0 .8.8l1.1-1.1v2.7a.5.5 0 0 0 1 0v-2.7l1.1 1.1Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp20Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp20FilledIcon, 'CloudArrowUp20Filled');

const CloudArrowUp20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm3.5 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm1.6 4.9a.56.56 0 1 0 .8-.8l-2-2a.56.56 0 0 0-.8 0l-2 2a.56.56 0 1 0 .8.8l1.1-1.1v2.7a.5.5 0 0 0 1 0v-2.7l1.1 1.1Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp20Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp20RegularIcon, 'CloudArrowUp20Regular');

const CloudArrowUp24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6 3a.5.5 0 0 0 1 0v-4.8l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0 .7.7L16 14.71v4.79Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp24Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp24FilledIcon, 'CloudArrowUp24Filled');

const CloudArrowUp24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6 3a.5.5 0 0 0 1 0v-4.8l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0 .7.7L16 14.71v4.79Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp24Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp24RegularIcon, 'CloudArrowUp24Regular');

const CloudArrowUp28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13a7.5 7.5 0 0 1 12.41-5.67A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm13 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-7-2.8v6.8a.5.5 0 0 0 1 0v-6.8l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-3 3a.5.5 0 0 0 .7.7L20 16.71Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp28Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp28FilledIcon, 'CloudArrowUp28Filled');

const CloudArrowUp28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 0 0-2.37-1.4 3.24 3.24 0 0 0-2.29-.93h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM27 19.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-7-2.8v6.8a.5.5 0 0 0 1 0v-6.8l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-3 3a.5.5 0 0 0 .7.7L20 16.71Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp28Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp28RegularIcon, 'CloudArrowUp28Regular');

const CloudArrowUp32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 5.74A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0 0 13.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM30 22.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-7.78-5.28c.3-.3.77-.3 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp32Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp32FilledIcon, 'CloudArrowUp32Filled');

const CloudArrowUp32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 7a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 0 0-1.95-2.01 3.66 3.66 0 0 0-1.42-2.18A5.85 5.85 0 0 0 23 12a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 5c-2.2 0-3.67.87-4.6 2ZM30 22.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-7.78-5.28c.3-.3.77-.3 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp32Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp32RegularIcon, 'CloudArrowUp32Regular');

const CloudArrowUp48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34a13 13 0 0 1 22.86-6.87 7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm20 27a11 11 0 1 0-22 0 11 11 0 0 0 22 0Zm-11-8a1 1 0 0 1 .7.3l5 5a1 1 0 0 1-1.4 1.4L34 28.42V40a1 1 0 1 1-2 0V28.41l-3.3 3.3a1 1 0 0 1-1.4-1.42l5-5A1 1 0 0 1 33 25Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp48Filled = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp48FilledIcon, 'CloudArrowUp48Filled');

const CloudArrowUp48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13.08 13.08 0 0 0-2.68-2.4 5.25 5.25 0 0 0-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM44 33a11 11 0 1 0-22 0 11 11 0 0 0 22 0Zm-11-8a1 1 0 0 1 .7.3l5 5a1 1 0 0 1-1.4 1.4L34 28.42V40a1 1 0 1 1-2 0V28.41l-3.3 3.3a1 1 0 0 1-1.4-1.42l5-5A1 1 0 0 1 33 25Z",
    fill: primaryFill
  }));
};

exports.CloudArrowUp48Regular = wrapIcon_1.default( /*#__PURE__*/CloudArrowUp48RegularIcon, 'CloudArrowUp48Regular');

const CloudCheckmark16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L9.5 11.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark16Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark16FilledIcon, 'CloudCheckmark16Filled');

const CloudCheckmark16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L9.5 11.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark16Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark16RegularIcon, 'CloudCheckmark16Regular');

const CloudCheckmark20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm8 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark20Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark20FilledIcon, 'CloudCheckmark20Filled');

const CloudCheckmark20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm8 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark20Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark20RegularIcon, 'CloudCheckmark20Regular');

const CloudCheckmark24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark24Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark24FilledIcon, 'CloudCheckmark24Filled');

const CloudCheckmark24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark24Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark24RegularIcon, 'CloudCheckmark24Regular');

const CloudCheckmark28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13a7.5 7.5 0 0 1 12.41-5.67A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm13 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L19 21.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark28Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark28FilledIcon, 'CloudCheckmark28Filled');

const CloudCheckmark28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 0 0-2.37-1.4 3.24 3.24 0 0 0-2.29-.93h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM27 19.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L19 21.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark28Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark28RegularIcon, 'CloudCheckmark28Regular');

const CloudCheckmark32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 5.74A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0 0 13.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM30 22.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.7-2.77a.75.75 0 0 0-1.07-.02l-4.74 4.52-2.24-2.04a.75.75 0 0 0-1 1.11L21 25.8c.29.27.73.26 1.02 0l5.25-5c.3-.3.3-.77.02-1.07Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark32Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark32FilledIcon, 'CloudCheckmark32Filled');

const CloudCheckmark32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 7a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 0 0-1.95-2.01 3.66 3.66 0 0 0-1.42-2.18A5.85 5.85 0 0 0 23 12a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 5c-2.2 0-3.67.87-4.6 2ZM30 22.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.7-2.77a.75.75 0 0 0-1.07-.02l-4.74 4.52-2.24-2.04a.75.75 0 0 0-1 1.11L21 25.8c.29.27.73.26 1.02 0l5.25-5c.3-.3.3-.77.02-1.07Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark32Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark32RegularIcon, 'CloudCheckmark32Regular');

const CloudCheckmark48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34a13 13 0 0 1 22.86-6.87 7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm20 27a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.3-4.7a1 1 0 0 0-1.4 0L31 35.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.42Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark48Filled = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark48FilledIcon, 'CloudCheckmark48Filled');

const CloudCheckmark48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13.08 13.08 0 0 0-2.68-2.4 5.25 5.25 0 0 0-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM44 33a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.7-4.7L31 35.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0-1.4-1.42Z",
    fill: primaryFill
  }));
};

exports.CloudCheckmark48Regular = wrapIcon_1.default( /*#__PURE__*/CloudCheckmark48RegularIcon, 'CloudCheckmark48Regular');

const CloudDismiss16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss16Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss16FilledIcon, 'CloudDismiss16Filled');

const CloudDismiss16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss16Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss16RegularIcon, 'CloudDismiss16Regular');

const CloudDismiss20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm8 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss20Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss20FilledIcon, 'CloudDismiss20Filled');

const CloudDismiss20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm8 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss20Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss20RegularIcon, 'CloudDismiss20Regular');

const CloudDismiss24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss24Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss24FilledIcon, 'CloudDismiss24Filled');

const CloudDismiss24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss24Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss24RegularIcon, 'CloudDismiss24Regular');

const CloudDismiss28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13a7.5 7.5 0 0 1 12.41-5.67A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm13 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss28Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss28FilledIcon, 'CloudDismiss28Filled');

const CloudDismiss28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 0 0-2.37-1.4 3.24 3.24 0 0 0-2.29-.93h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM27 19.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss28Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss28RegularIcon, 'CloudDismiss28Regular');

const CloudDismiss32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 5.74A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0 0 13.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM22.5 15a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm-2.72 11.28 2.72-2.72 2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 1 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 1 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss32Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss32FilledIcon, 'CloudDismiss32Filled');

const CloudDismiss32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 7a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 0 0-1.95-2.01 3.66 3.66 0 0 0-1.42-2.18A5.85 5.85 0 0 0 23 12a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 5c-2.2 0-3.67.87-4.6 2Zm11.1 8a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm-2.72 11.28 2.72-2.72 2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 1 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 1 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss32Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss32RegularIcon, 'CloudDismiss32Regular');

const CloudDismiss48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34a13 13 0 0 1 22.86-6.87 7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm20 27a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L33 31.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L31.58 33l-4.3 4.3a1 1 0 0 0 1.42 1.4L33 34.42l4.3 4.3a1 1 0 0 0 1.4-1.42L34.42 33l4.3-4.3Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss48Filled = wrapIcon_1.default( /*#__PURE__*/CloudDismiss48FilledIcon, 'CloudDismiss48Filled');

const CloudDismiss48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13.08 13.08 0 0 0-2.68-2.4 5.25 5.25 0 0 0-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM44 33a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L33 31.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L31.58 33l-4.3 4.3a1 1 0 0 0 1.42 1.4L33 34.42l4.3 4.3a1 1 0 0 0 1.4-1.42L34.42 33l4.3-4.3Z",
    fill: primaryFill
  }));
};

exports.CloudDismiss48Regular = wrapIcon_1.default( /*#__PURE__*/CloudDismiss48RegularIcon, 'CloudDismiss48Regular');

const CloudEdit16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2a4 4 0 0 0-3.97 3.5 3.25 3.25 0 0 0 .22 6.5h1.22c.16-.5.43-.96.8-1.33l4.83-4.83c.25-.25.53-.44.83-.58A4 4 0 0 0 8 2Zm-1.02 9.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.CloudEdit16Filled = wrapIcon_1.default( /*#__PURE__*/CloudEdit16FilledIcon, 'CloudEdit16Filled');

const CloudEdit16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 6a3 3 0 0 1 6-.06l.1-.1c.25-.25.53-.44.83-.58a4 4 0 0 0-7.9.25A3.25 3.25 0 0 0 4.25 12h1.22c.11-.36.29-.7.52-1H4.25a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 6Zm1.98 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.CloudEdit16Regular = wrapIcon_1.default( /*#__PURE__*/CloudEdit16RegularIcon, 'CloudEdit16Regular');

const CloudEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.2c.15-.5.42-.96.8-1.33l4.82-4.83c.25-.25.54-.45.85-.59H14.65Zm.16 1.3-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.CloudEdit20Filled = wrapIcon_1.default( /*#__PURE__*/CloudEdit20FilledIcon, 'CloudEdit20Filled');

const CloudEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.2c.1-.36.28-.7.5-1h-3.7A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 .32.63l.13-.14c.25-.25.54-.45.85-.59H14.65Zm.16 1.3-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    fill: primaryFill
  }));
};

exports.CloudEdit20Regular = wrapIcon_1.default( /*#__PURE__*/CloudEdit20RegularIcon, 'CloudEdit20Regular');

const CloudEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 9.02a6 6 0 0 1 11.84 0c.92.08 1.76.45 2.43 1-.71.08-1.4.4-1.96.94l-5.9 5.9c-.33.33-.59.72-.77 1.14H6.5a4.5 4.5 0 0 1-.42-8.98Zm13.02 2.65-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.CloudEdit24Filled = wrapIcon_1.default( /*#__PURE__*/CloudEdit24FilledIcon, 'CloudEdit24Filled');

const CloudEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h6.36l-.37.36c-.33.33-.59.72-.77 1.14H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0c.92.08 1.76.45 2.43 1-.6.07-1.2.3-1.7.7a3 3 0 0 0-1.15-.22h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm7.1 6.17-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.CloudEdit24Regular = wrapIcon_1.default( /*#__PURE__*/CloudEdit24RegularIcon, 'CloudEdit24Regular');

const CloudError16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5Zm10.97 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.CloudError16Filled = wrapIcon_1.default( /*#__PURE__*/CloudError16FilledIcon, 'CloudError16Filled');

const CloudError16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm7 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.CloudError16Regular = wrapIcon_1.default( /*#__PURE__*/CloudError16RegularIcon, 'CloudError16Regular');

const CloudError20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 6.25C14.4 3.92 12.82 2 10 2 7.18 2 5.59 3.9 5.35 6.25h-.07A3.33 3.33 0 0 0 2 9.62 3.33 3.33 0 0 0 5.28 13h2.5a5.75 5.75 0 0 1 10.2-3.1c.02-.09.02-.18.02-.28a3.33 3.33 0 0 0-3.28-3.37h-.07ZM18 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.CloudError20Filled = wrapIcon_1.default( /*#__PURE__*/CloudError20FilledIcon, 'CloudError20Filled');

const CloudError20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 6.25C14.4 3.92 12.82 2 10 2 7.18 2 5.59 3.9 5.35 6.25H5.1A3.34 3.34 0 0 0 2 9.62 3.33 3.33 0 0 0 5.28 13h2.5c.02-.34.08-.68.17-1H5.28A2.33 2.33 0 0 1 3 9.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 4.32 7.89 3 10 3c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07c1 0 1.84.66 2.15 1.6.42.3.8.65 1.12 1.06l.01-.29a3.33 3.33 0 0 0-3.28-3.37h-.07ZM18 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    fill: primaryFill
  }));
};

exports.CloudError20Regular = wrapIcon_1.default( /*#__PURE__*/CloudError20RegularIcon, 'CloudError20Regular');

const CloudError24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM16.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.CloudError24Filled = wrapIcon_1.default( /*#__PURE__*/CloudError24FilledIcon, 'CloudError24Filled');

const CloudError24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5Zm10 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM16.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.CloudError24Regular = wrapIcon_1.default( /*#__PURE__*/CloudError24RegularIcon, 'CloudError24Regular');

const CloudError28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83A7.5 7.5 0 0 0 13 19.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM27 19.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM20.5 16a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.CloudError28Filled = wrapIcon_1.default( /*#__PURE__*/CloudError28FilledIcon, 'CloudError28Filled');

const CloudError28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13c0-.51.05-1.02.15-1.5h-5.9a3.25 3.25 0 0 1 0-6.5h1c.41 0 .75-.34.75-.75v-.25a5 5 0 0 1 10 0v.25c0 .41.34.75.75.75h1c.9 0 1.7.36 2.29.94.88.32 1.68.8 2.37 1.4A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm13 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM20.5 16a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z",
    fill: primaryFill
  }));
};

exports.CloudError28Regular = wrapIcon_1.default( /*#__PURE__*/CloudError28RegularIcon, 'CloudError28Regular');

const CloudError32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 3a7.64 7.64 0 0 0-6.15 2.74 8.4 8.4 0 0 0-1.8 4.3C3.94 10.48 2 13.65 2 16a5.9 5.9 0 0 0 1.37 3.9C4.48 21.19 6.3 22 9 22h4.51a9 9 0 0 1 16.37-4.66c.08-.43.12-.88.12-1.34 0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 0 0-3.78-1.5 7.46 7.46 0 0 0-2.7-5.2A8.46 8.46 0 0 0 16 3Zm14 19.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-6.75-4.25v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0Zm.25 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.CloudError32Filled = wrapIcon_1.default( /*#__PURE__*/CloudError32FilledIcon, 'CloudError32Filled');

const CloudError32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 11c0-1.3.44-2.82 1.4-4 .93-1.13 2.4-2 4.6-2 1.3 0 2.82.44 4 1.4 1.13.93 2 2.4 2 4.6a1 1 0 0 0 1 1c1.3 0 2.58.42 3.51 1.15.74.57 1.25 1.3 1.42 2.18.75.56 1.4 1.24 1.95 2.01.08-.43.12-.88.12-1.34 0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 0 0-3.78-1.5 7.46 7.46 0 0 0-2.7-5.2A8.46 8.46 0 0 0 16 3a7.64 7.64 0 0 0-6.15 2.74 8.4 8.4 0 0 0-1.8 4.3C3.94 10.48 2 13.65 2 16a5.9 5.9 0 0 0 1.37 3.9C4.48 21.19 6.3 22 9 22h4.51c.04-.69.16-1.36.34-2H9c-2.3 0-3.48-.68-4.12-1.4A3.91 3.91 0 0 1 4 16c0-1.47 1.38-4 5-4a1 1 0 0 0 1-1Zm20 11.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-6.75-4.25v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0Zm.25 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.CloudError32Regular = wrapIcon_1.default( /*#__PURE__*/CloudError32RegularIcon, 'CloudError32Regular');

const CloudError48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13 13 0 0 0-22.86 6.87h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM44 33a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm-1 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.CloudError48Filled = wrapIcon_1.default( /*#__PURE__*/CloudError48FilledIcon, 'CloudError48Filled');

const CloudError48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34c.1-.86.28-1.7.54-2.5h-7.88a5.25 5.25 0 1 1 0-10.5h1.5c.69 0 1.25-.56 1.25-1.25V17a8.5 8.5 0 0 1 17 0v.25c0 .69.56 1.25 1.25 1.25h1.5a5.25 5.25 0 0 1 5.02 3.72c1 .68 1.9 1.5 2.68 2.41a7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm20 27a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm-1 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: primaryFill
  }));
};

exports.CloudError48Regular = wrapIcon_1.default( /*#__PURE__*/CloudError48RegularIcon, 'CloudError48Regular');

const CloudFlow20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.76 2.99 2.99 0 0 0 13.17 11a2.5 2.5 0 0 0-2.32 1.7l-.1.3H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm6 12a2 2 0 1 0-2-2h-.78a1.5 1.5 0 0 0-1.42 1.03l-.55 1.63a.5.5 0 0 1-.47.34H9.73a2 2 0 1 0 .27 1h.78a1.5 1.5 0 0 0 1.42-1.03l.55-1.63a.5.5 0 0 1 .47-.34h1.05c.34.6.99 1 1.73 1Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    fill: primaryFill
  }));
};

exports.CloudFlow20Filled = wrapIcon_1.default( /*#__PURE__*/CloudFlow20FilledIcon, 'CloudFlow20Filled');

const CloudFlow20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.76a3 3 0 0 0-1.04-.6 2.3 2.3 0 0 0-2.24-1.91h-.07a1 1 0 0 1-1-.9C13.45 4.32 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h5.94a2.5 2.5 0 0 0-.37.7l-.1.3H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm6.93 8.23A2.01 2.01 0 0 1 18 12a2 2 0 0 1-3.73 1h-1.05a.5.5 0 0 0-.47.34l-.55 1.63A1.5 1.5 0 0 1 10.78 16H10a2 2 0 1 1-.27-1h1.05a.5.5 0 0 0 .47-.34l.55-1.63a1.94 1.94 0 0 1 .1-.22c.25-.5.76-.81 1.32-.81H14a2 2 0 0 1 2.93-1.77Zm-.44.9a1 1 0 0 0-1.49.86V12a1 1 0 0 0 2 .01V12a1 1 0 0 0-.51-.87ZM9 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.CloudFlow20Regular = wrapIcon_1.default( /*#__PURE__*/CloudFlow20RegularIcon, 'CloudFlow20Regular');

const CloudFlow24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 2a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 16h6.68l.13-.5a3 3 0 0 1 2.49-2.22 3.75 3.75 0 0 1 6.15-1.13 4.5 4.5 0 0 0-4.03-5.13A6 6 0 0 0 12 2Zm7.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-3.03 2.25h.47a2.75 2.75 0 1 0-.14-1.5h-.33a2 2 0 0 0-1.94 1.5l-1.01 3.88a.5.5 0 0 1-.49.37h-.8a2.75 2.75 0 1 0-.28 1.5h1.08a2 2 0 0 0 1.94-1.5l1.01-3.88a.5.5 0 0 1 .49-.37ZM8 20.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z",
    fill: primaryFill
  }));
};

exports.CloudFlow24Filled = wrapIcon_1.default( /*#__PURE__*/CloudFlow24FilledIcon, 'CloudFlow24Filled');

const CloudFlow24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 7.79a4.5 4.5 0 0 1 9 0c.01.4.34.71.74.71h.26a3 3 0 0 1 2.99 2.7c.56.2 1.06.53 1.46.95a4.5 4.5 0 0 0-4.03-5.13 6 6 0 0 0-11.84 0A4.5 4.5 0 0 0 6.5 16h6.68l.13-.5a3 3 0 0 1 .47-1H6.5a3 3 0 1 1 0-6h.26c.4 0 .73-.31.75-.71Zm11.75 5.71a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-3.03 2.25h.47a2.75 2.75 0 1 0-.14-1.5h-.33a2 2 0 0 0-1.94 1.5l-1.01 3.88a.5.5 0 0 1-.49.37h-.8a2.75 2.75 0 1 0-.28 1.5h1.08a2 2 0 0 0 1.94-1.5l1.01-3.88a.5.5 0 0 1 .49-.37ZM8 20.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z",
    fill: primaryFill
  }));
};

exports.CloudFlow24Regular = wrapIcon_1.default( /*#__PURE__*/CloudFlow24RegularIcon, 'CloudFlow24Regular');

const CloudLink16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.94 0c1.42.1 2.6 1.11 2.93 2.45A3.49 3.49 0 0 0 12.5 7h-4a3.5 3.5 0 0 0-3.16 5H4.25a3.25 3.25 0 0 1-.22-6.5ZM8.5 8a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5ZM12 8a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudLink16Filled = wrapIcon_1.default( /*#__PURE__*/CloudLink16FilledIcon, 'CloudLink16Filled');

const CloudLink16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.79c.05.35.15.69.3 1H4.25a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.94 0c1.42.1 2.6 1.11 2.93 2.45a3.5 3.5 0 0 0-1.64-.87c-.4-.36-.93-.58-1.51-.58h-.25A.5.5 0 0 1 11 6a3 3 0 0 0-3-3Zm.5 5a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5ZM12 8a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    fill: primaryFill
  }));
};

exports.CloudLink16Regular = wrapIcon_1.default( /*#__PURE__*/CloudLink16RegularIcon, 'CloudLink16Regular');

const CloudLink20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.76a3.5 3.5 0 0 1 3.46-4h4c.53 0 1.04.12 1.49.33a3.32 3.32 0 0 0-3.27-3.08h-.07ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.CloudLink20Filled = wrapIcon_1.default( /*#__PURE__*/CloudLink20FilledIcon, 'CloudLink20Filled');

const CloudLink20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h4.06a3.48 3.48 0 0 1-.3-1H5.28A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07c.65 0 1.25.29 1.67.75h.11c.42 0 .83.07 1.2.21a3.28 3.28 0 0 0-2.98-1.96h-.07ZM12.5 11a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    fill: primaryFill
  }));
};

exports.CloudLink20Regular = wrapIcon_1.default( /*#__PURE__*/CloudLink20RegularIcon, 'CloudLink20Regular');

const CloudLink24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 9.02a6 6 0 0 1 11.84 0c2.23.2 4 2.04 4.08 4.31a4.74 4.74 0 0 0-3.75-1.83h-3.5a4.75 4.75 0 0 0-4.42 6.5H6.5a4.5 4.5 0 0 1-.42-8.98ZM22 16.25a3.75 3.75 0 0 0-3.75-3.75h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5V20h.2A3.75 3.75 0 0 0 22 16.24Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z",
    fill: primaryFill
  }));
};

exports.CloudLink24Filled = wrapIcon_1.default( /*#__PURE__*/CloudLink24FilledIcon, 'CloudLink24Filled');

const CloudLink24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6H10c.03.53.15 1.03.33 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0c2.23.2 4 2.04 4.08 4.31a4.76 4.76 0 0 0-2-1.5 3 3 0 0 0-2.5-1.33h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm10 10.75a3.75 3.75 0 0 0-3.75-3.75h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5V20h.2A3.75 3.75 0 0 0 22 16.24Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z",
    fill: primaryFill
  }));
};

exports.CloudLink24Regular = wrapIcon_1.default( /*#__PURE__*/CloudLink24RegularIcon, 'CloudLink24Regular');

const CloudOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m12.25 12.96 1.9 1.9a.5.5 0 0 0 .7-.71l-13-13a.5.5 0 1 0-.7.7l3.3 3.3c-.22.42-.36.88-.42 1.36A3.25 3.25 0 0 0 4.25 13h7.5c.17 0 .34-.01.5-.04ZM15 9.75c0 .87-.34 1.65-.9 2.24L5.8 3.67a4 4 0 0 1 6.18 2.84A3.25 3.25 0 0 1 15 9.75Z",
    fill: primaryFill
  }));
};

exports.CloudOff16Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff16FilledIcon, 'CloudOff16Filled');

const CloudOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m12.25 12.96 1.9 1.9a.5.5 0 0 0 .7-.71l-13-13a.5.5 0 1 0-.7.7l3.3 3.3c-.22.42-.36.88-.42 1.36A3.25 3.25 0 0 0 4.25 13h7.5c.17 0 .34-.01.5-.04ZM11.3 12H4.25a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 7a3 3 0 0 1 .2-1.09L11.3 12ZM14 9.75c0 .6-.23 1.13-.6 1.53l.7.7a3.24 3.24 0 0 0-2.13-5.47 4 4 0 0 0-6.18-2.84l.72.72A3 3 0 0 1 11 7c0 .29.22.51.5.51h.25c1.24 0 2.25 1 2.25 2.25Z",
    fill: primaryFill
  }));
};

exports.CloudOff16Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff16RegularIcon, 'CloudOff16Regular');

const CloudOff20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.01l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM18 11.62a3.4 3.4 0 0 1-1.45 2.8l-9.5-9.48A4.66 4.66 0 0 1 10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62Z",
    fill: primaryFill
  }));
};

exports.CloudOff20Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff20FilledIcon, 'CloudOff20Filled');

const CloudOff20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.85 2.15a.5.5 0 1 0-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.01l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14h-8A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9c.04-.38.11-.74.23-1.06L13.29 14ZM17 11.62c0 .9-.48 1.68-1.18 2.08l.73.73a3.4 3.4 0 0 0 1.45-2.8 3.33 3.33 0 0 0-3.28-3.38h-.07C14.4 5.92 12.82 4 10 4c-1.2 0-2.2.35-2.94.94l.71.71A3.76 3.76 0 0 1 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07A2.33 2.33 0 0 1 17 11.62Z",
    fill: primaryFill
  }));
};

exports.CloudOff20Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff20RegularIcon, 'CloudOff20Regular');

const CloudOff24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.63 4.63a5.96 5.96 0 0 0-.77 2.1A4.5 4.5 0 0 0 6.5 19h11c.14 0 .28 0 .42-.02l2.8 2.8a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM22 14.5c0 1.2-.47 2.28-1.23 3.09L9 5.81a6 6 0 0 1 8.93 4.21A4.5 4.5 0 0 1 22 14.5Z",
    fill: primaryFill
  }));
};

exports.CloudOff24Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff24FilledIcon, 'CloudOff24Filled');

const CloudOff24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.63 4.63a5.96 5.96 0 0 0-.77 2.1A4.5 4.5 0 0 0 6.5 19h11c.14 0 .28 0 .42-.02l2.8 2.8a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM16.44 17.5H6.5a3 3 0 1 1 0-6h.26c.4 0 .73-.31.75-.71.02-.64.18-1.23.45-1.77l8.48 8.48Zm4.06-3c0 .78-.3 1.5-.79 2.03l1.06 1.06a4.48 4.48 0 0 0-2.85-7.57A6 6 0 0 0 8.99 5.8l1.11 1.1a4.5 4.5 0 0 1 6.4 3.87c.01.4.34.72.74.72h.26a3 3 0 0 1 3 3Z",
    fill: primaryFill
  }));
};

exports.CloudOff24Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff24RegularIcon, 'CloudOff24Regular');

const CloudOff28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06L8.3 9.37c-.43.79-.7 1.68-.78 2.63h-.27a4.75 4.75 0 1 0 0 9.5h13.19l4.28 4.28a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm7.04 4.92 13.35 13.35A4.74 4.74 0 0 0 20.75 12h-.27a6.5 6.5 0 0 0-10.16-4.86Z",
    fill: primaryFill
  }));
};

exports.CloudOff28Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff28FilledIcon, 'CloudOff28Filled');

const CloudOff28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06L8.3 9.37c-.43.79-.7 1.68-.78 2.63h-.27a4.75 4.75 0 1 0 0 9.5h13.19l4.28 4.28a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM18.94 20H7.25a3.25 3.25 0 0 1 0-6.5h1c.41 0 .75-.34.75-.75v-.25c0-.72.15-1.4.42-2.02L18.94 20ZM10.32 7.14l1.09 1.08A5 5 0 0 1 19 12.5v.25c-.01.41.33.75.74.75h1a3.25 3.25 0 0 1 1.85 5.92l1.07 1.07A4.74 4.74 0 0 0 20.75 12h-.27a6.5 6.5 0 0 0-10.16-4.86Z",
    fill: primaryFill
  }));
};

exports.CloudOff28Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff28RegularIcon, 'CloudOff28Regular');

const CloudOff32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m23.57 24.99 4.72 4.72a1 1 0 0 0 1.42-1.42l-26-26a1 1 0 0 0-1.42 1.42l6.58 6.57c-.44.9-.7 1.86-.81 2.77C3.93 13.47 2 16.65 2 19a5.9 5.9 0 0 0 1.37 3.9C4.5 24.19 6.3 25 9 25h14l.57-.01Zm4.59-1.6a5.5 5.5 0 0 1-.7.53L11.07 7.55A7.93 7.93 0 0 1 16 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 19c0 1.75-.58 3.3-1.84 4.4Z",
    fill: primaryFill
  }));
};

exports.CloudOff32Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff32FilledIcon, 'CloudOff32Filled');

const CloudOff32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m23.57 24.99 4.72 4.72a1 1 0 0 0 1.42-1.42l-26-26a1 1 0 0 0-1.42 1.42l6.58 6.57c-.44.9-.7 1.86-.81 2.77C3.93 13.47 2 16.65 2 19a5.9 5.9 0 0 0 1.37 3.9C4.5 24.19 6.3 25 9 25h14l.57-.01ZM21.6 23H9c-2.3 0-3.48-.68-4.12-1.4A3.91 3.91 0 0 1 4 19c0-1.47 1.38-4 5-4a1 1 0 0 0 1-1c0-.7.13-1.46.4-2.2L21.58 23Zm5.25-1.11c-.24.2-.52.4-.86.55l1.47 1.48A5.61 5.61 0 0 0 30 19c0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 0 0-3.78-1.5 7.46 7.46 0 0 0-2.7-5.2A8.46 8.46 0 0 0 16 6c-2.04 0-3.67.6-4.92 1.55l1.44 1.43C13.39 8.38 14.53 8 16 8c1.3 0 2.82.44 4 1.4 1.13.93 2 2.4 2 4.6a1 1 0 0 0 1 1c1.3 0 2.58.42 3.51 1.15A3.55 3.55 0 0 1 28 19c0 1.3-.42 2.25-1.16 2.89Z",
    fill: primaryFill
  }));
};

exports.CloudOff32Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff32RegularIcon, 'CloudOff32Regular');

const CloudOff48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m33.73 35.5 8.14 8.13a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l9.84 9.85A10.93 10.93 0 0 0 13.04 20h-.29a7.75 7.75 0 0 0 0 15.5h20.98ZM43 27.75c0 2.7-1.38 5.08-3.48 6.47L17.46 12.16A11 11 0 0 1 34.96 20h.29A7.75 7.75 0 0 1 43 27.75Z",
    fill: primaryFill
  }));
};

exports.CloudOff48Filled = wrapIcon_1.default( /*#__PURE__*/CloudOff48FilledIcon, 'CloudOff48Filled');

const CloudOff48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m33.73 35.5 8.14 8.13a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76l9.84 9.85A10.93 10.93 0 0 0 13.04 20h-.29a7.75 7.75 0 0 0 0 15.5h20.98Zm-2.5-2.5H12.75a5.25 5.25 0 1 1 0-10.5h1.5c.69 0 1.25-.56 1.25-1.25V21c0-1.1.21-2.17.6-3.14L31.23 33Zm9.27-5.25a5.25 5.25 0 0 1-2.8 4.65l1.82 1.82A7.74 7.74 0 0 0 35.25 20h-.3a11 11 0 0 0-17.5-7.84l1.8 1.79A8.5 8.5 0 0 1 32.5 21v.25c0 .69.56 1.25 1.25 1.25h1.5c2.9 0 5.25 2.35 5.25 5.25Z",
    fill: primaryFill
  }));
};

exports.CloudOff48Regular = wrapIcon_1.default( /*#__PURE__*/CloudOff48RegularIcon, 'CloudOff48Regular');

const CloudSwap20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h2.8a1.5 1.5 0 0 1 .36-1.56l2-2A1.5 1.5 0 0 1 12.9 13h1.18a1.5 1.5 0 0 1 2.47-1.56l1.27 1.27c.1-.34.17-.7.17-1.09a3.33 3.33 0 0 0-3.28-3.37h-.07Zm-2.8 4.6a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 14h-5.58l1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudSwap20Filled = wrapIcon_1.default( /*#__PURE__*/CloudSwap20FilledIcon, 'CloudSwap20Filled');

const CloudSwap20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62c0 .38-.06.75-.17 1.09l-.84-.84.01-.25a2.33 2.33 0 0 0-2.28-2.37h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14h2.8a1.5 1.5 0 0 0 0 1h-2.8A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm1.85 8.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 14h-5.58l1.14-1.15Z",
    fill: primaryFill
  }));
};

exports.CloudSwap20Regular = wrapIcon_1.default( /*#__PURE__*/CloudSwap20RegularIcon, 'CloudSwap20Regular');

const CloudSwap24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 9.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 3.75 6.18l-1.68-1.69a1.75 1.75 0 0 0-2.82 1.99h-2.34a1.75 1.75 0 0 0-2.82-1.99l-2.5 2.5A1.75 1.75 0 0 0 9.17 18H6.5a4.5 4.5 0 0 1-.42-8.98Zm7.7 6.26a.75.75 0 1 0-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 18h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88l1.22-1.22Z",
    fill: primaryFill
  }));
};

exports.CloudSwap24Filled = wrapIcon_1.default( /*#__PURE__*/CloudSwap24FilledIcon, 'CloudSwap24Filled');

const CloudSwap24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h2.67a1.75 1.75 0 0 0 0 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 3.75 6.18l-1.2-1.21a3 3 0 0 0-2.96-3.49h-.27a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 5.5Zm1.78 9.78a.75.75 0 1 0-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 18h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88l1.22-1.22Z",
    fill: primaryFill
  }));
};

exports.CloudSwap24Regular = wrapIcon_1.default( /*#__PURE__*/CloudSwap24RegularIcon, 'CloudSwap24Regular');

const CloudSync16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.03 5.5a4 4 0 0 1 7.89-.32A5.5 5.5 0 0 0 5.2 12h-.96a3.25 3.25 0 0 1-.22-6.5ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 8v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.47a2 2 0 0 0-2.57.55.5.5 0 0 1-.8-.6 3 3 0 0 1 3.9-.8V8a.5.5 0 0 1 1 0Zm-4.5 5.5A.5.5 0 0 1 8 13v-1.24a.47.47 0 0 1 0-.02v-.24c0-.28.22-.5.5-.5H10a.5.5 0 0 1 0 1h-.47a2 2 0 0 0 2.57-.55.5.5 0 1 1 .8.6 3 3 0 0 1-3.9.8V13a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }));
};

exports.CloudSync16Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync16FilledIcon, 'CloudSync16Filled');

const CloudSync16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a3 3 0 0 0-3 3 .5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.77c.03.34.1.68.19 1h-.96a3.25 3.25 0 0 1-.22-6.5 4 4 0 0 1 7.89-.32c-.35-.09-.71-.15-1.09-.17A3 3 0 0 0 8 3Zm2.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 8v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.47a2 2 0 0 0-2.57.55.5.5 0 0 1-.8-.6 3 3 0 0 1 3.9-.8V8a.5.5 0 0 1 1 0Zm-4.5 5.5A.5.5 0 0 1 8 13v-1.24a.47.47 0 0 1 0-.02v-.24c0-.28.22-.5.5-.5H10a.5.5 0 0 1 0 1h-.47a2 2 0 0 0 2.57-.55.5.5 0 1 1 .8.6 3 3 0 0 1-3.9.8V13a.5.5 0 0 1-.5.5Z",
    fill: primaryFill
  }));
};

exports.CloudSync16Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync16RegularIcon, 'CloudSync16Regular');

const CloudSync20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2ZM9 13.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V11c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V16a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.CloudSync20Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync20FilledIcon, 'CloudSync20Filled');

const CloudSync20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2ZM9 13.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V11c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V16a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H13a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z",
    fill: primaryFill
  }));
};

exports.CloudSync20Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync20RegularIcon, 'CloudSync20Regular');

const CloudSync24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.08 8.02a6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97A6.5 6.5 0 0 0 10.02 17H6.5a4.5 4.5 0 0 1-.42-8.98ZM16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm2-7a2.5 2.5 0 0 0-3.86-.17.5.5 0 0 1-.75-.66 3.5 3.5 0 0 1 5.11-.12v-.55a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1ZM13 17.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 3.86.17.5.5 0 0 1 .75.66 3.5 3.5 0 0 1-5.11.12v.55a.5.5 0 0 1-1 0v-2Z",
    fill: primaryFill
  }));
};

exports.CloudSync24Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync24FilledIcon, 'CloudSync24Filled');

const CloudSync24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5ZM16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm2-7a2.5 2.5 0 0 0-3.86-.17.5.5 0 0 1-.75-.66 3.5 3.5 0 0 1 5.11-.12v-.55a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1ZM13 17.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 3.86.17.5.5 0 0 1 .75.66 3.5 3.5 0 0 1-5.11.12v.55a.5.5 0 0 1-1 0v-2Z",
    fill: primaryFill
  }));
};

exports.CloudSync24Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync24RegularIcon, 'CloudSync24Regular');

const CloudSync28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14 4a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5H13a7.5 7.5 0 0 1 12.41-5.67A4.75 4.75 0 0 0 20.75 10h-.27A6.5 6.5 0 0 0 14 4Zm0 15.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm5.35-4.08a4 4 0 0 1 4.65 1.9v-.82a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.73a3 3 0 0 0-4.85-.87.5.5 0 0 1-.7-.7 4 4 0 0 1 1.67-1.01Zm2.3 8.16a4 4 0 0 1-4.65-1.9v.82a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.73a3 3 0 0 0 4.85.87.5.5 0 0 1 .7.7 4 4 0 0 1-1.67 1.01Z",
    fill: primaryFill
  }));
};

exports.CloudSync28Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync28FilledIcon, 'CloudSync28Filled');

const CloudSync28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 10a6.5 6.5 0 0 1 12.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 0 0-2.37-1.4 3.24 3.24 0 0 0-2.29-.93h-1a.75.75 0 0 1-.75-.75v-.25a5 5 0 0 0-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 0 0 0 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 1 1 0-9.5h.27ZM14 19.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm5.35-4.08a4 4 0 0 1 4.65 1.9v-.82a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.73a3 3 0 0 0-4.85-.87.5.5 0 0 1-.7-.7 4 4 0 0 1 1.67-1.01Zm2.3 8.16a4 4 0 0 1-4.65-1.9v.82a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.73a3 3 0 0 0 4.85.87.5.5 0 0 1 .7.7 4 4 0 0 1-1.67 1.01Z",
    fill: primaryFill
  }));
};

exports.CloudSync28Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync28RegularIcon, 'CloudSync28Regular');

const CloudSync32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.85 5.74A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0 0 13.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3ZM30 22.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-3.75-4.75c.41 0 .75.34.75.75V21c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h.73a2.99 2.99 0 0 0-4.37.43.77.77 0 0 1-.6.32c-.6 0-1.03-.61-.67-1.11a4.5 4.5 0 0 1 6.66-.74v-.65c0-.41.34-.75.75-.75Zm-6.75 8.1v.4a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-.99a3 3 0 0 0 4.62-.18.77.77 0 0 1 .6-.32c.62 0 1.04.61.68 1.11a4.5 4.5 0 0 1-6.66.74Z",
    fill: primaryFill
  }));
};

exports.CloudSync32Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync32FilledIcon, 'CloudSync32Filled');

const CloudSync32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.4 7a6.46 6.46 0 0 0-1.4 4 1 1 0 0 1-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 0 0-1.95-2.01 3.66 3.66 0 0 0-1.42-2.18A5.85 5.85 0 0 0 23 12a1 1 0 0 1-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0 0 16 5c-2.2 0-3.67.87-4.6 2ZM30 22.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Zm-3.75-4.75c.41 0 .75.34.75.75V21c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h.73a2.99 2.99 0 0 0-4.37.43.77.77 0 0 1-.6.32c-.6 0-1.03-.61-.67-1.11a4.5 4.5 0 0 1 6.66-.74v-.65c0-.41.34-.75.75-.75Zm-6.75 8.1v.4a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-.99a3 3 0 0 0 4.62-.18.77.77 0 0 1 .6-.32c.62 0 1.04.61.68 1.11a4.5 4.5 0 0 1-6.66.74Z",
    fill: primaryFill
  }));
};

exports.CloudSync32Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync32RegularIcon, 'CloudSync32Regular');

const CloudSync48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M24 6a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h7.34a13 13 0 0 1 22.86-6.87 7.75 7.75 0 0 0-7.7-8.63h-.3A11 11 0 0 0 24 6Zm-2 27a11 11 0 1 0 22 0 11 11 0 0 0-22 0Zm8.65-7.1A7 7 0 0 1 38 27.6V27a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.1-.04 1 1 0 0 1-1.42-1.41 7 7 0 0 1 2.6-1.64Zm4.7 14.2A7 7 0 0 1 28 38.4v.6a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 7.1.04 1 1 0 0 1 1.42 1.41 7 7 0 0 1-2.6 1.64Z",
    fill: primaryFill
  }));
};

exports.CloudSync48Filled = wrapIcon_1.default( /*#__PURE__*/CloudSync48FilledIcon, 'CloudSync48Filled');

const CloudSync48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 16a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 7.7 8.63 13.08 13.08 0 0 0-2.68-2.4 5.25 5.25 0 0 0-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 0 0-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 1 0 0 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 0 1 0-15.5h.3ZM22 33a11 11 0 1 0 22 0 11 11 0 0 0-22 0Zm8.65-7.1A7 7 0 0 1 38 27.6V27a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.1-.04 1 1 0 0 1-1.42-1.41 7 7 0 0 1 2.6-1.64Zm4.7 14.2A7 7 0 0 1 28 38.4v.6a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 7.1.04 1 1 0 0 1 1.42 1.41 7 7 0 0 1-2.6 1.64Z",
    fill: primaryFill
  }));
};

exports.CloudSync48Regular = wrapIcon_1.default( /*#__PURE__*/CloudSync48RegularIcon, 'CloudSync48Regular');

const CloudWords16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 3a4 4 0 0 0-3.97 3.5 3.25 3.25 0 0 0 .22 6.5h7.5a3.25 3.25 0 0 0 .22-6.5A4 4 0 0 0 8 3ZM7 6h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1ZM4 9.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM9.5 9h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudWords16Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords16FilledIcon, 'CloudWords16Filled');

const CloudWords16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5 7a3 3 0 0 1 6 0c0 .28.22.5.5.5h.25a2.25 2.25 0 0 1 0 4.5h-7.5a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 7Zm3-4a4 4 0 0 0-3.97 3.5 3.25 3.25 0 0 0 .22 6.5h7.5a3.25 3.25 0 0 0 .22-6.5A4 4 0 0 0 8 3ZM7 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H7ZM4 9.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM9.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
    fill: primaryFill
  }));
};

exports.CloudWords16Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords16RegularIcon, 'CloudWords16Regular');

const CloudWords20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.44A3.33 3.33 0 0 0 18 11.62a3.33 3.33 0 0 0-3.28-3.37h-.07ZM8.5 7h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z",
    fill: primaryFill
  }));
};

exports.CloudWords20Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords20FilledIcon, 'CloudWords20Filled');

const CloudWords20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.5-.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm3.15-2.75C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.44A3.33 3.33 0 0 0 18 11.62a3.33 3.33 0 0 0-3.28-3.37h-.07Zm-8.3.1C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07A2.33 2.33 0 0 1 17 11.62 2.33 2.33 0 0 1 14.72 14H5.28A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9Z",
    fill: primaryFill
  }));
};

exports.CloudWords20Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords20RegularIcon, 'CloudWords20Regular');

const CloudWords24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 5a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 19h11a4.5 4.5 0 0 0 .42-8.98A6 6 0 0 0 12 5Zm-2 4.5h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Zm-4.5 4.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8.25-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.CloudWords24Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords24FilledIcon, 'CloudWords24Filled');

const CloudWords24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 10.79a4.5 4.5 0 0 1 9 0c.01.4.34.71.74.71h.26a3 3 0 1 1 0 6h-11a3 3 0 1 1 0-6h.26c.4 0 .73-.31.75-.71ZM12 5a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 19h11a4.5 4.5 0 0 0 .42-8.98A6 6 0 0 0 12 5Zm-2 4.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Zm-4.5 4.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8.25-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",
    fill: primaryFill
  }));
};

exports.CloudWords24Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords24RegularIcon, 'CloudWords24Regular');

const CloudWords28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.52 12a6.5 6.5 0 0 1 12.96 0h.27a4.75 4.75 0 1 1 0 9.5H7.25a4.75 4.75 0 1 1 0-9.5h.27Zm4.23-1a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM6 16.75c0 .41.34.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75Zm9.75-.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z",
    fill: primaryFill
  }));
};

exports.CloudWords28Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords28FilledIcon, 'CloudWords28Filled');

const CloudWords28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.75 11a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM6 16.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm9.75-.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM14 6a6.5 6.5 0 0 0-6.48 6h-.27a4.75 4.75 0 1 0 0 9.5h13.5a4.75 4.75 0 1 0 0-9.5h-.27A6.5 6.5 0 0 0 14 6Zm-5 6.5a5 5 0 0 1 10 0v.25c0 .41.34.75.75.75h1a3.25 3.25 0 0 1 0 6.5H7.25a3.25 3.25 0 0 1 0-6.5h1c.41 0 .75-.34.75-.75v-.25Z",
    fill: primaryFill
  }));
};

exports.CloudWords28Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords28RegularIcon, 'CloudWords28Regular');

const CloudWords32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 0 1 2.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0 1 30 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 0 1 2 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 0 1 1.8-4.3A7.64 7.64 0 0 1 16 6Zm-3 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-7 7a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Zm13-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z",
    fill: primaryFill
  }));
};

exports.CloudWords32Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords32FilledIcon, 'CloudWords32Filled');

const CloudWords32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 12a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-7 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm13-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6ZM16 6a7.64 7.64 0 0 0-6.15 2.74 8.4 8.4 0 0 0-1.8 4.3C3.94 13.48 2 16.65 2 19a5.9 5.9 0 0 0 1.37 3.9C4.48 24.19 6.3 25 9 25h14c2.15 0 3.92-.52 5.16-1.6A5.61 5.61 0 0 0 30 19c0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 0 0-3.78-1.5 7.46 7.46 0 0 0-2.7-5.2A8.46 8.46 0 0 0 16 6Zm-6 8c0-1.3.44-2.82 1.4-4 .93-1.13 2.4-2 4.6-2 1.3 0 2.82.44 4 1.4 1.13.93 2 2.4 2 4.6a1 1 0 0 0 1 1c1.3 0 2.58.42 3.51 1.15A3.55 3.55 0 0 1 28 19c0 1.3-.42 2.25-1.16 2.89-.76.66-1.99 1.11-3.84 1.11H9c-2.3 0-3.48-.68-4.12-1.4A3.91 3.91 0 0 1 4 19c0-1.47 1.38-4 5-4a1 1 0 0 0 1-1Z",
    fill: primaryFill
  }));
};

exports.CloudWords32Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords32RegularIcon, 'CloudWords32Regular');

const CloudWords48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.04 20a11 11 0 0 1 21.92 0h.29a7.75 7.75 0 0 1 0 15.5h-22.5a7.75 7.75 0 0 1 0-15.5h.3Zm7.21-2a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5h-7.5ZM11 27.25c0 .69.56 1.25 1.25 1.25h8.5a1.25 1.25 0 1 0 0-2.5h-8.5c-.69 0-1.25.56-1.25 1.25ZM27.25 26a1.25 1.25 0 1 0 0 2.5h8.5a1.25 1.25 0 1 0 0-2.5h-8.5Z",
    fill: primaryFill
  }));
};

exports.CloudWords48Filled = wrapIcon_1.default( /*#__PURE__*/CloudWords48FilledIcon, 'CloudWords48Filled');

const CloudWords48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M20.25 18a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5h-7.5ZM11 27.25c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 1 1 0 2.5h-8.5c-.69 0-1.25-.56-1.25-1.25ZM27.25 26a1.25 1.25 0 1 0 0 2.5h8.5a1.25 1.25 0 1 0 0-2.5h-8.5ZM24 10a11 11 0 0 0-10.96 10h-.29a7.75 7.75 0 0 0 0 15.5h22.5a7.75 7.75 0 0 0 0-15.5h-.3A11 11 0 0 0 24 10Zm-8.5 11a8.5 8.5 0 0 1 17 0v.25c0 .69.56 1.25 1.25 1.25h1.5a5.25 5.25 0 1 1 0 10.5h-22.5a5.25 5.25 0 1 1 0-10.5h1.5c.69 0 1.25-.56 1.25-1.25V21Z",
    fill: primaryFill
  }));
};

exports.CloudWords48Regular = wrapIcon_1.default( /*#__PURE__*/CloudWords48RegularIcon, 'CloudWords48Regular');

const Code16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.9 2.81c.38.17.55.62.39 1l-4 9a.75.75 0 1 1-1.38-.61l4-9a.75.75 0 0 1 1-.39ZM4.5 5.2c.3.27.34.75.06 1.06L3 8l1.56 1.75a.75.75 0 1 1-1.12 1l-2-2.25a.75.75 0 0 1 0-1l2-2.25A.75.75 0 0 1 4.5 5.2Zm7 0a.75.75 0 0 1 1.06.06l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 0 1-1.12-1L13 8l-1.56-1.75a.75.75 0 0 1 .06-1.06Z",
    fill: primaryFill
  }));
};

exports.Code16Filled = wrapIcon_1.default( /*#__PURE__*/Code16FilledIcon, 'Code16Filled');

const Code16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.8 3.04c.26.12.37.41.26.66l-4 9a.5.5 0 0 1-.92-.4l4-9a.5.5 0 0 1 .66-.26ZM4.33 5.38c.2.18.23.5.04.7L2.67 8l1.7 1.92a.5.5 0 1 1-.74.66l-2-2.25a.5.5 0 0 1 0-.66l2-2.25a.5.5 0 0 1 .7-.04Zm7.34 0a.5.5 0 0 1 .7.04l2 2.25a.5.5 0 0 1 0 .66l-2 2.25a.5.5 0 1 1-.74-.66L13.33 8l-1.7-1.92a.5.5 0 0 1 .04-.7Z",
    fill: primaryFill
  }));
};

exports.Code16Regular = wrapIcon_1.default( /*#__PURE__*/Code16RegularIcon, 'Code16Regular');

const Code20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.94 4.05a.75.75 0 0 0-1.38-.6l-5.5 12.5a.75.75 0 1 0 1.38.6l5.5-12.5Zm1.35 9.8a.75.75 0 0 1-.13-1.06L16.3 10l-2.14-2.8a.75.75 0 0 1 1.18-.9l2.5 3.24c.21.27.21.65 0 .92l-2.5 3.25a.75.75 0 0 1-1.05.13Zm-8.58-7.7c.33.26.39.73.13 1.06L3.7 10l2.14 2.8a.75.75 0 1 1-1.18.9l-2.5-3.24a.75.75 0 0 1 0-.92l2.5-3.25a.75.75 0 0 1 1.05-.13Z",
    fill: primaryFill
  }));
};

exports.Code20Filled = wrapIcon_1.default( /*#__PURE__*/Code20FilledIcon, 'Code20Filled');

const Code20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.97 3.68a.5.5 0 0 0-.94-.36l-5 13a.5.5 0 1 0 .94.36l5-13ZM5.83 6.12c.2.18.23.5.05.7L3.16 10l2.72 3.17a.5.5 0 0 1-.76.66l-3-3.5a.5.5 0 0 1 0-.66l3-3.5a.5.5 0 0 1 .7-.05Zm8.34 8.26a.5.5 0 0 1-.05-.7l2.72-3.18-2.72-3.17a.5.5 0 1 1 .76-.66l3 3.5a.5.5 0 0 1 0 .66l-3 3.5a.5.5 0 0 1-.7.05Z",
    fill: primaryFill
  }));
};

exports.Code20Regular = wrapIcon_1.default( /*#__PURE__*/Code20RegularIcon, 'Code20Regular');

const Code24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m8.09 18.61 6-14a1 1 0 0 1 1.87.67l-.04.11-6 14a1 1 0 0 1-1.87-.67l.04-.1 6-14.01-6 14Zm-5.8-7.32 4-4a1 1 0 0 1 1.5 1.32l-.08.1L4.4 12l3.3 3.3a1 1 0 0 1-1.32 1.5l-.1-.1-4-4a1 1 0 0 1-.08-1.31l.08-.1 4-4-4 4Zm14-4a1 1 0 0 1 1.32-.08l.1.08 4 4a1 1 0 0 1 .08 1.32l-.08.1-4 4a1 1 0 0 1-1.5-1.33l.08-.1L19.6 12l-3.3-3.3a1 1 0 0 1 0-1.4Z",
    fill: primaryFill
  }));
};

exports.Code24Filled = wrapIcon_1.default( /*#__PURE__*/Code24FilledIcon, 'Code24Filled');

const Code24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m8.07 18.94 6.5-14.5a.75.75 0 0 1 1.4.52l-.04.1-6.5 14.5a.75.75 0 0 1-1.4-.52l.04-.1 6.5-14.5-6.5 14.5Zm-5.85-7.47 4.25-4.25a.75.75 0 0 1 1.13.98l-.07.08L3.81 12l3.72 3.72a.75.75 0 0 1-.98 1.13l-.08-.07-4.25-4.25a.75.75 0 0 1-.07-.98l.07-.08 4.25-4.25-4.25 4.25Zm14.25-4.25a.75.75 0 0 1 .98-.07l.08.07 4.25 4.25c.27.27.3.68.07.98l-.07.08-4.25 4.25a.75.75 0 0 1-1.13-.98l.07-.08L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

exports.Code24Regular = wrapIcon_1.default( /*#__PURE__*/Code24RegularIcon, 'Code24Regular');

const CodeBlock16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7Zm5.35 3.65 2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L10.79 8 9.15 6.35a.5.5 0 1 1 .7-.7Zm-3 .7L5.21 8l1.64 1.65a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7Z",
    fill: primaryFill
  }));
};

exports.CodeBlock16Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock16FilledIcon, 'CodeBlock16Filled');

const CodeBlock16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Zm6.85 1.15a.5.5 0 1 0-.7.7L10.79 8 9.15 9.65a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm-3 .7a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L5.21 8l1.64-1.65Z",
    fill: primaryFill
  }));
};

exports.CodeBlock16Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock16RegularIcon, 'CodeBlock16Regular');

const CodeBlock20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm2.85 4.85L6.71 10l2.14 2.15a.5.5 0 0 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5a.5.5 0 1 1 .7.7Zm3-.7 2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L13.29 10l-2.14-2.15a.5.5 0 0 1 .7-.7Z",
    fill: primaryFill
  }));
};

exports.CodeBlock20Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock20FilledIcon, 'CodeBlock20Filled');

const CodeBlock20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4.85 1.85a.5.5 0 1 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.71 10l2.14-2.15Zm3-.7a.5.5 0 0 0-.7.7L13.29 10l-2.14 2.15a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5Z",
    fill: primaryFill
  }));
};

exports.CodeBlock20Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock20RegularIcon, 'CodeBlock20Regular');

const CodeBlock24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25Zm4.28 6.28L7.81 12l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 1 1 1.06 1.06Zm4-1.06 3.25 3.25c.3.3.3.77 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06L16.19 12l-2.72-2.72a.75.75 0 0 1 1.06-1.06Z",
    fill: primaryFill
  }));
};

exports.CodeBlock24Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock24FilledIcon, 'CodeBlock24Filled');

const CodeBlock24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25ZM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25Zm6.03 3.03a.75.75 0 1 0-1.06-1.06l-3.25 3.25c-.3.3-.3.77 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06L7.81 12l2.72-2.72Zm4-1.06a.75.75 0 1 0-1.06 1.06L16.19 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.25-3.25c.3-.3.3-.77 0-1.06l-3.25-3.25Z",
    fill: primaryFill
  }));
};

exports.CodeBlock24Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock24RegularIcon, 'CodeBlock24Regular');

const CodeBlock28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75Zm9.03 2.47a.75.75 0 0 0-1.06 0l-4.25 4.25c-.3.3-.3.77 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L8.31 14l3.72-3.72c.3-.3.3-.77 0-1.06Zm5 0a.75.75 0 1 0-1.06 1.06L19.69 14l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25c.3-.3.3-.77 0-1.06l-4.25-4.25Z",
    fill: primaryFill
  }));
};

exports.CodeBlock28Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock28FilledIcon, 'CodeBlock28Filled');

const CodeBlock28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM6.75 4.5c-1.24 0-2.25 1-2.25 2.25v14.5c0 1.24 1 2.25 2.25 2.25h14.5c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H6.75Zm5.28 4.72c.3.3.3.77 0 1.06L8.31 14l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25c.3-.3.77-.3 1.06 0Zm5 0a.75.75 0 1 0-1.06 1.06L19.69 14l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25c.3-.3.3-.77 0-1.06l-4.25-4.25Z",
    fill: primaryFill
  }));
};

exports.CodeBlock28Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock28RegularIcon, 'CodeBlock28Regular');

const CodeBlock32FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17Zm10.7 2.8a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L9.42 16l4.3-4.3a1 1 0 0 0 0-1.4Zm4.6 1.4 4.29 4.3-4.3 4.3a1 1 0 0 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.42 1.4Z",
    fill: primaryFill
  }));
};

exports.CodeBlock32Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock32FilledIcon, 'CodeBlock32Filled');

const CodeBlock32RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17ZM7.5 5A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5h-17Zm6.2 5.3a1 1 0 0 1 0 1.4L9.42 16l4.3 4.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.42 0Zm4.6 1.4a1 1 0 0 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.29-4.3-4.3-4.3Z",
    fill: primaryFill
  }));
};

exports.CodeBlock32Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock32RegularIcon, 'CodeBlock32Regular');

const CodeBlock48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6H12Zm8.88 9.37c.5.48.5 1.28 0 1.76L14.02 24l6.86 6.87a1.25 1.25 0 0 1-1.76 1.76l-7.75-7.75a1.25 1.25 0 0 1 0-1.76l7.75-7.75a1.25 1.25 0 0 1 1.76 0Zm8 0 7.75 7.75c.5.48.5 1.28 0 1.76l-7.75 7.75a1.25 1.25 0 0 1-1.76-1.76L33.98 24l-6.86-6.87a1.25 1.25 0 0 1 1.76-1.76Z",
    fill: primaryFill
  }));
};

exports.CodeBlock48Filled = wrapIcon_1.default( /*#__PURE__*/CodeBlock48FilledIcon, 'CodeBlock48Filled');

const CodeBlock48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 12.25C6 8.8 8.8 6 12.25 6h23.5C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-23.5a3.75 3.75 0 0 0-3.75-3.75h-23.5Zm8.63 6.87c.5.48.5 1.28 0 1.76L14.02 24l6.86 6.87a1.25 1.25 0 0 1-1.76 1.76l-7.75-7.75a1.25 1.25 0 0 1 0-1.76l7.75-7.75a1.25 1.25 0 0 1 1.76 0Zm8 0a1.25 1.25 0 0 0-1.76 1.76L33.98 24l-6.86 6.87a1.25 1.25 0 0 0 1.76 1.76l7.75-7.75c.5-.48.5-1.28 0-1.76l-7.75-7.75Z",
    fill: primaryFill
  }));
};

exports.CodeBlock48Regular = wrapIcon_1.default( /*#__PURE__*/CodeBlock48RegularIcon, 'CodeBlock48Regular');

const CodeCircle20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9.96-3.8a.5.5 0 1 0-.92-.4l-3.5 8a.5.5 0 1 0 .92.4l3.5-8Zm-5.1 1.45a.5.5 0 0 0-.71 0l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L5.21 10l1.64-1.65a.5.5 0 0 0 0-.7Zm6.29.7L14.79 10l-1.64 1.65a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7Z",
    fill: primaryFill
  }));
};

exports.CodeCircle20Filled = wrapIcon_1.default( /*#__PURE__*/CodeCircle20FilledIcon, 'CodeCircle20Filled');

const CodeCircle20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.96 6.2a.5.5 0 1 0-.92-.4l-3.5 8a.5.5 0 1 0 .92.4l3.5-8Zm-5.1 1.45c.19.2.19.5 0 .7L5.2 10l1.64 1.65a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2c.2-.2.5-.2.7 0Zm6.29.7a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L14.79 10l-1.64-1.65ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    fill: primaryFill
  }));
};

exports.CodeCircle20Regular = wrapIcon_1.default( /*#__PURE__*/CodeCircle20RegularIcon, 'CodeCircle20Regular');

const CodeCs16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 5.25A1.25 1.25 0 0 0 2.25 6.5v3a1.25 1.25 0 1 0 2.5 0 .75.75 0 0 1 1.5 0 2.75 2.75 0 0 1-5.5 0v-3a2.75 2.75 0 1 1 5.5 0 .75.75 0 0 1-1.5 0A1.25 1.25 0 0 0 3.5 5.25Zm6-1c.41 0 .75.34.75.75v.75h1.5V5a.75.75 0 0 1 1.5 0v.75h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1V11a.75.75 0 0 1-1.5 0v-.75h-1.5V11a.75.75 0 0 1-1.5 0v-.75H8a.75.75 0 0 1 0-1.5h.75v-1.5H8a.75.75 0 0 1 0-1.5h.75V5c0-.41.34-.75.75-.75Zm.75 3v1.5h1.5v-1.5h-1.5Z",
    fill: primaryFill
  }));
};

exports.CodeCs16Filled = wrapIcon_1.default( /*#__PURE__*/CodeCs16FilledIcon, 'CodeCs16Filled');

const CodeCs16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 5A1.5 1.5 0 0 0 2 6.5v3a1.5 1.5 0 0 0 3 0 .5.5 0 0 1 1 0 2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 1 1 5 0 .5.5 0 0 1-1 0A1.5 1.5 0 0 0 3.5 5Zm6-.5c.28 0 .5.22.5.5v1h2V5a.5.5 0 0 1 1 0v1h1.25a.5.5 0 0 1 0 1H13v2h1.25a.5.5 0 0 1 0 1H13v1a.5.5 0 0 1-1 0v-1h-2v1a.5.5 0 0 1-1 0v-1H8a.5.5 0 0 1 0-1h1V7H8a.5.5 0 0 1 0-1h1V5c0-.28.22-.5.5-.5ZM10 7v2h2V7h-2Z",
    fill: primaryFill
  }));
};

exports.CodeCs16Regular = wrapIcon_1.default( /*#__PURE__*/CodeCs16RegularIcon, 'CodeCs16Regular');

const CodeCsRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 9h1V8H9v1Zm3.25-6h-9.5C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3Zm-8.1 6.85A.5.5 0 0 0 5 9.5a.5.5 0 1 1 1 0 1.5 1.5 0 0 1-3 0v-2a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 1 0-1 0v2c0 .13.05.26.15.35ZM11.5 9a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5H11v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V10H9v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8V8h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8v-.5a.5.5 0 1 1 1 0V7h1v-.5a.5.5 0 1 1 1 0V7h.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5H11v1h.5Z",
    fill: primaryFill
  }));
};

exports.CodeCsRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeCsRectangle16FilledIcon, 'CodeCsRectangle16Filled');

const CodeCsRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 9.5v-2a.5.5 0 1 1 1 0 .5.5 0 1 0 1 0 1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 3 0 .5.5 0 1 0-1 0 .5.5 0 1 1-1 0Zm7.85.35A.5.5 0 0 0 11.5 9H11V8h.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0V7H9v-.5a.5.5 0 1 0-1 0V7h-.5a.5.5 0 1 0 0 1H8v1h-.5a.5.5 0 1 0 0 1H8v.5a.5.5 0 0 0 1 0V10h1v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 .35-.15ZM9 8h1v1H9V8ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodeCsRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeCsRectangle16RegularIcon, 'CodeCsRectangle16Regular');

const CodeFs16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 3.75H6a.75.75 0 0 1 0 1.5H3.25v2H5.5a.75.75 0 0 1 0 1.5H3.25v2.75a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Zm10.75 5h1a.75.75 0 0 1 0 1.5h-1V11a.75.75 0 0 1-1.5 0v-.75h-1.5V11c0 .2-.08.39-.22.53a.77.77 0 0 1-1.06 0 .74.74 0 0 1-.22-.53v-.75H8a.75.75 0 0 1 0-1.5h.75v-1.5H8a.75.75 0 0 1 0-1.5h.75V5c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53v.75h1.5V5c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53v.75h1a.75.75 0 0 1 0 1.5h-1v1.5Zm-1.5 0v-1.5h-1.5v1.5h1.5Z",
    fill: primaryFill
  }));
};

exports.CodeFs16Filled = wrapIcon_1.default( /*#__PURE__*/CodeFs16FilledIcon, 'CodeFs16Filled');

const CodeFs16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.25 9H13V7h1.25a.5.5 0 1 0 0-1H13V5a.5.5 0 0 0-1 0v1h-2V5a.5.5 0 0 0-1 0v1H8a.5.5 0 0 0 0 1h1v2H8a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-1h1.25a.5.5 0 1 0 0-1ZM10 9V7h2v2h-2ZM6.5 4.5A.5.5 0 0 1 6 5H3v2.5h2.5a.5.5 0 0 1 0 1H3v3a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .5.5Z",
    fill: primaryFill
  }));
};

exports.CodeFs16Regular = wrapIcon_1.default( /*#__PURE__*/CodeFs16RegularIcon, 'CodeFs16Regular');

const CodeFsRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 9h1V8H9v1Zm3.25-6h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3ZM5.96 6.7a.5.5 0 0 1-.46.3H4v1h1a.5.5 0 1 1 0 1H4v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .35.15.5.5 0 0 1 .11.54ZM11.5 9a.5.5 0 1 1 0 1H11v.5a.5.5 0 1 1-1 0V10H9v.5a.5.5 0 1 1-1 0V10h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8V8h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8v-.5a.5.5 0 1 1 1 0V7h1v-.5a.5.5 0 1 1 1 0V7h.5a.5.5 0 1 1 0 1H11v1h.5Z",
    fill: primaryFill
  }));
};

exports.CodeFsRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeFsRectangle16FilledIcon, 'CodeFsRectangle16Filled');

const CodeFsRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6 6.4a.5.5 0 0 0-.5-.4h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h1a.5.5 0 1 0 0-1H4V7h1.5a.5.5 0 0 0 .5-.6Zm5.85 3.45A.5.5 0 0 0 11.5 9H11V8h.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0V7H9v-.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 1 0 0 1H8v1h-.5a.5.5 0 1 0 0 1H8v.5a.5.5 0 0 0 1 0V10h1v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 .35-.15ZM9 8h1v1H9V8ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodeFsRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeFsRectangle16RegularIcon, 'CodeFsRectangle16Regular');

const CodeJs16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.77 7.3c1.05.4 2.48.93 2.48 2.45a2.5 2.5 0 0 1-.84 1.86 2.51 2.51 0 0 1-1.93.64l-.22.01a2.5 2.5 0 0 1-2.28-1.49 2.5 2.5 0 0 1-.23-1.02c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53 0 .95 1.04 1 1.25 1 .21 0 1.25-.05 1.25-1 0-.41-.44-.65-1.51-1.05-1.05-.4-2.49-.93-2.49-2.45a2.5 2.5 0 0 1 .84-1.86c.26-.24.57-.41.9-.52.61-.2 1.42-.2 2.02 0a2.5 2.5 0 0 1 1.52 1.36c.14.32.22.66.22 1.02 0 .2-.08.39-.22.53a.77.77 0 0 1-1.06 0 .74.74 0 0 1-.22-.53c0-.95-1.04-1-1.25-1-.2 0-1.25.05-1.25 1 0 .41.45.65 1.52 1.05ZM5.75 4.5c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53v5a2.71 2.71 0 0 1-.8 1.94 2.75 2.75 0 0 1-4.7-1.94V9c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53v.5c0 .33.13.65.37.88.46.47 1.3.47 1.76 0 .24-.23.37-.55.37-.88v-5Z",
    fill: primaryFill
  }));
};

exports.CodeJs16Filled = wrapIcon_1.default( /*#__PURE__*/CodeJs16FilledIcon, 'CodeJs16Filled');

const CodeJs16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 4.5v5a2.5 2.5 0 1 1-5 0V9a.5.5 0 0 1 1 0v.5a1.5 1.5 0 1 0 3 0v-5a.5.5 0 0 1 1 0Zm3.68 3.03C9.63 7.14 9 6.86 9 6.25 9 5.33 9.8 5 10.5 5s1.5.33 1.5 1.25a.5.5 0 0 0 1 0 2.28 2.28 0 0 0-1.57-2.15 3.22 3.22 0 0 0-1.86 0A2.28 2.28 0 0 0 8 6.25c0 1.35 1.29 1.83 2.32 2.22 1.04.39 1.68.67 1.68 1.28 0 .92-.8 1.25-1.5 1.25S9 10.67 9 9.75a.5.5 0 0 0-1 0A2.28 2.28 0 0 0 10.5 12 2.28 2.28 0 0 0 13 9.75c0-1.35-1.29-1.83-2.32-2.22Z",
    fill: primaryFill
  }));
};

exports.CodeJs16Regular = wrapIcon_1.default( /*#__PURE__*/CodeJs16RegularIcon, 'CodeJs16Regular');

const CodeJsRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.25 3h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3ZM7 9.5A1.5 1.5 0 0 1 5.5 11 1.5 1.5 0 0 1 4 9.5V9a.5.5 0 0 1 .15-.35.52.52 0 0 1 .35-.15.5.5 0 0 1 .35.15A.52.52 0 0 1 5 9v.5a.5.5 0 0 0 .15.35.52.52 0 0 0 .35.15.5.5 0 0 0 .35-.15A.52.52 0 0 0 6 9.5v-3a.5.5 0 0 1 .15-.35A.52.52 0 0 1 6.5 6a.5.5 0 0 1 .35.15.52.52 0 0 1 .15.35v3Zm2.88-2.37a.43.43 0 0 0-.3-.13h-.15a.42.42 0 0 0-.3.13.42.42 0 0 0 .11.68l.97.49a1.43 1.43 0 0 1 .75 1.6A1.43 1.43 0 0 1 9.59 11h-.15a1.43 1.43 0 0 1-1.32-.88A1.43 1.43 0 0 1 8 9.57a.54.54 0 0 1 .5-.53.46.46 0 0 1 .35.12.47.47 0 0 1 .15.34.45.45 0 0 0 .43.5h.14a.43.43 0 0 0 .2-.8l-.98-.5a1.42 1.42 0 0 1-.25-2.39 1.6 1.6 0 0 1 2.04.1c.27.28.42.64.42 1.02 0 .13-.05.27-.14.37-.1.1-.22.16-.36.16a.46.46 0 0 1-.35-.12.46.46 0 0 1-.15-.34v-.07a.43.43 0 0 0-.13-.3Z",
    fill: primaryFill
  }));
};

exports.CodeJsRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeJsRectangle16FilledIcon, 'CodeJsRectangle16Filled');

const CodeJsRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.25 3h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3Zm.75 9.25c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5ZM6.96 6.31A.5.5 0 0 1 7 6.5v3A1.5 1.5 0 0 1 5.5 11 1.5 1.5 0 0 1 4 9.5V9a.5.5 0 0 1 .15-.35.52.52 0 0 1 .35-.15.5.5 0 0 1 .35.15A.52.52 0 0 1 5 9v.5a.5.5 0 0 0 .15.35.52.52 0 0 0 .35.15.5.5 0 0 0 .35-.15A.52.52 0 0 0 6 9.5v-3a.5.5 0 0 1 .15-.35A.52.52 0 0 1 6.5 6a.5.5 0 0 1 .35.15c.05.04.09.1.11.16ZM10 7.5v-.07A.43.43 0 0 0 9.57 7h-.14a.42.42 0 0 0-.3.13.42.42 0 0 0 .11.68l.97.49a1.43 1.43 0 0 1 .75 1.6A1.43 1.43 0 0 1 9.59 11h-.15a1.43 1.43 0 0 1-1.32-.88A1.43 1.43 0 0 1 8 9.57c0-.13.05-.27.14-.37.1-.1.22-.16.36-.16a.46.46 0 0 1 .35.12.47.47 0 0 1 .15.34.47.47 0 0 0 .1.34.45.45 0 0 0 .33.16h.14a.43.43 0 0 0 .2-.8l-.98-.5a1.42 1.42 0 0 1-.25-2.39 1.6 1.6 0 0 1 2.04.1c.27.28.42.64.42 1.02 0 .13-.05.27-.14.37-.1.1-.22.16-.36.16a.46.46 0 0 1-.35-.12.46.46 0 0 1-.15-.34Z",
    fill: primaryFill
  }));
};

exports.CodeJsRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeJsRectangle16RegularIcon, 'CodeJsRectangle16Regular');

const CodePy16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.44 3.9c.08.05.15.12.2.2.05.1.08.19.1.28v.3a.76.76 0 0 1-.13.26l-2.36 3.3v3.26a.76.76 0 0 1-.75.75.74.74 0 0 1-.75-.75V8.24l-2.36-3.3a.73.73 0 0 1-.13-.56.76.76 0 0 1 .87-.62c.1.02.19.05.27.1.08.06.16.13.21.2l1.89 2.65 1.89-2.64a.75.75 0 0 1 1.05-.17ZM3.5 3.74h2.25a2.49 2.49 0 0 1 2.5 2.5 2.48 2.48 0 0 1-2.5 2.5h-1.5v2.75a.76.76 0 0 1-.75.75.74.74 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75Zm.75 3.5h1.5a1 1 0 0 0 0-2h-1.5v2Z",
    fill: primaryFill
  }));
};

exports.CodePy16Filled = wrapIcon_1.default( /*#__PURE__*/CodePy16FilledIcon, 'CodePy16Filled');

const CodePy16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0v-3h1.75a2.25 2.25 0 0 0 0-4.5Zm0 3.5H4V5h1.75a1.25 1.25 0 0 1 0 2.5Zm8.66-2.7L12 8.15v3.34a.5.5 0 1 1-1 0V8.16L8.6 4.79A.5.5 0 0 1 9.07 4a.5.5 0 0 1 .33.2l2.09 2.94 2.1-2.93a.5.5 0 1 1 .8.58Z",
    fill: primaryFill
  }));
};

exports.CodePy16Regular = wrapIcon_1.default( /*#__PURE__*/CodePy16RegularIcon, 'CodePy16Regular');

const CodePyRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 7H5v1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5Zm6.75-4h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3ZM6.56 8.56A1.5 1.5 0 0 1 5.5 9H5v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.06 2.56ZM11.4 6.8 10 8.67v1.83a.5.5 0 1 1-1 0V8.67L7.6 6.8a.5.5 0 0 1 .47-.8.5.5 0 0 1 .33.2l1.1 1.47 1.1-1.47a.5.5 0 0 1 .7-.1.5.5 0 0 1 .1.7Z",
    fill: primaryFill
  }));
};

exports.CodePyRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodePyRectangle16FilledIcon, 'CodePyRectangle16Filled');

const CodePyRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.5 6h1a1.5 1.5 0 0 1 0 3H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5ZM5 8h.5a.5.5 0 0 0 0-1H5v1Zm5 .67 1.4-1.87a.5.5 0 1 0-.8-.6L9.5 7.67 8.4 6.2a.5.5 0 1 0-.8.6L9 8.67v1.83a.5.5 0 0 0 1 0V8.67ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodePyRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodePyRectangle16RegularIcon, 'CodePyRectangle16Regular');

const CodeRb16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m8.06 10.45.14.45a.76.76 0 0 1 .3.6.75.75 0 0 1-.75.75c-.72 0-.93-.7-1.13-1.38C6.2 9.5 5.82 8.75 5 8.75h-.75v2.75c0 .2-.08.39-.22.53a.77.77 0 0 1-1.06 0 .74.74 0 0 1-.22-.53v-7a.75.75 0 0 1 .75-.75h2.25a2.48 2.48 0 0 1 2.5 2.5 2.48 2.48 0 0 1-1.16 2.1c.46.63.78 1.33.97 2.1Zm-1.6-3.5a1 1 0 0 0 0-1.4 1 1 0 0 0-.71-.3h-1.5v2h1.5a1 1 0 0 0 .7-.3Zm7.2.92A2.5 2.5 0 0 1 12 12.25H9.5a.75.75 0 0 1-.76-.75v-7a.75.75 0 0 1 .75-.75h2.25a2.48 2.48 0 0 1 2.5 2.5 2.49 2.49 0 0 1-.6 1.62Zm-3.41-2.62v2h1.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1.5Zm2.46 5.2a1 1 0 0 0 0-1.4 1 1 0 0 0-.71-.3h-1.75v2H12a1 1 0 0 0 .7-.3Z",
    fill: primaryFill
  }));
};

exports.CodeRb16Filled = wrapIcon_1.default( /*#__PURE__*/CodeRb16FilledIcon, 'CodeRb16Filled');

const CodeRb16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.28 7.9A2.24 2.24 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.25 2.25 0 0 0 1.28-4.1ZM13 6.25a1.25 1.25 0 0 1-1.25 1.25H10V5h1.75A1.25 1.25 0 0 1 13 6.25ZM12 11h-2V8.5h2a1.25 1.25 0 0 1 0 2.5Zm-4 .06a6.5 6.5 0 0 1-.18-.55 5.83 5.83 0 0 0-1.1-2.24A2.25 2.25 0 0 0 5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1c1.07 0 1.49 1.09 1.85 2.3.2.67.37 1.2.9 1.2a.5.5 0 0 0 .25-.94ZM4 5h1.75a1.25 1.25 0 0 1 0 2.5H4V5Z",
    fill: primaryFill
  }));
};

exports.CodeRb16Regular = wrapIcon_1.default( /*#__PURE__*/CodeRb16RegularIcon, 'CodeRb16Regular');

const CodeRbRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.5 7H5v1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5Zm4.25 2H9v1h.75a.5.5 0 1 0 0-1Zm.1-1.15A.5.5 0 0 0 9.5 7H9v1h.5a.5.5 0 0 0 .35-.15ZM12.25 3h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3Zm-5.03 7.69a.5.5 0 0 1-.47.31c-.47 0-.59-.46-.7-.9C5.96 9.74 5.78 9 5.5 9H5v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.02 2.59c.24.4.4.82.5 1.27l.07.28a.5.5 0 0 1 .12.54Zm3.94-.67a1.5 1.5 0 0 1-1.41.98H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.23 2.36 1.5 1.5 0 0 1 .43 1.66Z",
    fill: primaryFill
  }));
};

exports.CodeRbRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeRbRectangle16FilledIcon, 'CodeRbRectangle16Filled');

const CodeRbRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11 7.6a1.5 1.5 0 0 1-.27.76A1.5 1.5 0 0 1 9.75 11H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1A1.5 1.5 0 0 1 11 7.6ZM9.5 7H9v1h.5a.5.5 0 1 0 0-1ZM9 10h.75a.5.5 0 0 0 0-1H9v1ZM6.52 8.59c.24.4.4.82.5 1.27l.02.08.05.2a.5.5 0 0 1-.34.86c-.47 0-.59-.46-.7-.9v-.01C5.95 9.73 5.77 9 5.5 9H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.02 2.59ZM5.5 7H5v1h.5a.5.5 0 1 0 0-1ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodeRbRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeRbRectangle16RegularIcon, 'CodeRbRectangle16Regular');

const CodeText16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M1.75 2.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM3 9.25c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 9.25ZM1.75 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm8.75-5.25c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM9.75 2.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
    fill: primaryFill
  }));
};

exports.CodeText16Filled = wrapIcon_1.default( /*#__PURE__*/CodeText16FilledIcon, 'CodeText16Filled');

const CodeText16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M1.5 3a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1H1.5Zm3 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 9.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5ZM1.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H1.5Zm9-5.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM9.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
    fill: primaryFill
  }));
};

exports.CodeText16Regular = wrapIcon_1.default( /*#__PURE__*/CodeText16RegularIcon, 'CodeText16Regular');

const CodeText20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 11.25c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75ZM2.75 13.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Zm9.75-5.25c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z",
    fill: primaryFill
  }));
};

exports.CodeText20Filled = wrapIcon_1.default( /*#__PURE__*/CodeText20FilledIcon, 'CodeText20Filled');

const CodeText20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1H2.5Zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 11.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5ZM2.5 14a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1H2.5Zm10-5.5c0-.28.22-.5.5-.5h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5Zm-2-3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    fill: primaryFill
  }));
};

exports.CodeText20Regular = wrapIcon_1.default( /*#__PURE__*/CodeText20RegularIcon, 'CodeText20Regular');

const CodeTextEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 11.25c0-.41.34-.75.75-.75h9.5c.06 0 .12 0 .17.02L12.94 12H4.75a.75.75 0 0 1-.75-.75Zm6.27 3.42.98-.98a.75.75 0 0 0-.5-.19h-8a.75.75 0 0 0 0 1.5h7.24c.08-.12.18-.23.28-.33Zm2.23-6.42c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm.23 10.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.CodeTextEdit20Filled = wrapIcon_1.default( /*#__PURE__*/CodeTextEdit20FilledIcon, 'CodeTextEdit20Filled');

const CodeTextEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1H2.5Zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 11.5c0-.28.22-.5.5-.5h9.44l-1 1H4.5a.5.5 0 0 1-.5-.5Zm6.27 3.17.67-.67H2.5a.5.5 0 0 0 0 1h7.49c.08-.12.18-.23.28-.33ZM12.5 8.5c0-.28.22-.5.5-.5h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5Zm-2-3.5a.5.5 0 0 0 0 1H17a.5.5 0 0 0 0-1h-6.5Zm.48 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.CodeTextEdit20Regular = wrapIcon_1.default( /*#__PURE__*/CodeTextEdit20RegularIcon, 'CodeTextEdit20Regular');

const CodeTextOff16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.25 7h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5Zm-3.5-3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5Zm-1 7.5h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5Zm-2-7.5a.75.75 0 0 0 0-1.5H4.62L6.12 4h.63Zm8.1 10.15-13-13a.5.5 0 0 0-.7.7l.64.65h-.04a.75.75 0 0 0 0 1.5h1.54l1.5 1.5h-.04a.75.75 0 0 0 0 1.5h1.54l1.5 1.5H3.75a.75.75 0 0 0 0 1.5h5.54l4.86 4.85a.5.5 0 0 0 .7 0 .5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CodeTextOff16Filled = wrapIcon_1.default( /*#__PURE__*/CodeTextOff16FilledIcon, 'CodeTextOff16Filled');

const CodeTextOff16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m6.12 4-1-1H7a.5.5 0 0 1 0 1h-.88ZM9.5 4h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm.5 2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1H10Zm-1 6H1.5a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1Zm5.85 2.15-13-13a.5.5 0 0 0-.7.7L2.29 3H1.5a.5.5 0 0 0 0 1h1.8l2 2h-.8a.5.5 0 0 0 0 1h1.8l2 2H3.5a.5.5 0 0 0 0 1h5.8l4.85 4.85a.5.5 0 0 0 .7 0 .5.5 0 0 0 0-.7Z",
    fill: primaryFill
  }));
};

exports.CodeTextOff16Regular = wrapIcon_1.default( /*#__PURE__*/CodeTextOff16RegularIcon, 'CodeTextOff16Regular');

const CodeTs16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.25 6.51c0 .41.45.65 1.51 1.05s2.49.93 2.49 2.45a2.5 2.5 0 0 1-.84 1.86 2.51 2.51 0 0 1-1.93.64l-.22.01a2.5 2.5 0 0 1-2.29-1.49 2.5 2.5 0 0 1-.22-1.02c0-.2.08-.39.22-.53a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53 0 .95 1.04 1 1.25 1 .21 0 1.25-.05 1.25-1 0-.41-.45-.65-1.51-1.05-1.05-.4-2.49-.93-2.49-2.45a2.5 2.5 0 0 1 .84-1.86A2.48 2.48 0 0 1 10.53 4a2.44 2.44 0 0 1 1.88.64 2.54 2.54 0 0 1 .84 1.86c0 .2-.08.39-.22.53a.77.77 0 0 1-1.06 0 .74.74 0 0 1-.22-.53c0-.95-1.04-1-1.25-1-.2 0-1.25.05-1.25 1Zm-7-2.5h4.5a.75.75 0 0 1 0 1.5h-1.5v6.25a.75.75 0 0 1-1.5 0V5.51h-1.5a.75.75 0 0 1 0-1.5Z",
    fill: primaryFill
  }));
};

exports.CodeTs16Filled = wrapIcon_1.default( /*#__PURE__*/CodeTs16FilledIcon, 'CodeTs16Filled');

const CodeTs16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13 9.75A2.28 2.28 0 0 1 10.5 12 2.28 2.28 0 0 1 8 9.75a.5.5 0 0 1 1 0c0 .92.8 1.25 1.5 1.25s1.5-.33 1.5-1.25c0-.6-.63-.9-1.68-1.28C9.28 8.07 8 7.6 8 6.25A2.28 2.28 0 0 1 10.5 4 2.28 2.28 0 0 1 13 6.25a.5.5 0 0 1-1 0C12 5.33 11.2 5 10.5 5S9 5.33 9 6.25c0 .6.63.9 1.68 1.28 1.04.4 2.32.87 2.32 2.22ZM6.75 4h-4.5a.5.5 0 1 0 0 1H4v6.5a.5.5 0 1 0 1 0V5h1.75a.5.5 0 1 0 0-1Z",
    fill: primaryFill
  }));
};

exports.CodeTs16Regular = wrapIcon_1.default( /*#__PURE__*/CodeTs16RegularIcon, 'CodeTs16Regular');

const CodeTsRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.25 3h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3Zm-4.9 3.85A.5.5 0 0 1 7 7H6v3.5a.5.5 0 1 1-1 0V7H4a.5.5 0 0 1-.5-.5A.5.5 0 0 1 4 6h3a.5.5 0 0 1 .35.85Zm2.53.28a.43.43 0 0 0-.3-.13h-.15a.43.43 0 0 0-.36.65c.04.07.1.12.17.16l.97.49a1.43 1.43 0 0 1 .75 1.6A1.43 1.43 0 0 1 9.59 11h-.15A1.43 1.43 0 0 1 8 9.57a.54.54 0 0 1 .5-.53.46.46 0 0 1 .35.12.47.47 0 0 1 .15.34.45.45 0 0 0 .43.5h.14a.43.43 0 0 0 .37-.65.41.41 0 0 0-.18-.16L8.8 8.7A1.42 1.42 0 0 1 9.43 6h.14A1.43 1.43 0 0 1 11 7.43c0 .13-.05.27-.14.37-.1.1-.22.16-.36.16a.46.46 0 0 1-.35-.12.46.46 0 0 1-.15-.34v-.07a.43.43 0 0 0-.13-.3Z",
    fill: primaryFill
  }));
};

exports.CodeTsRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeTsRectangle16FilledIcon, 'CodeTsRectangle16Filled');

const CodeTsRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.87 8.97A1.43 1.43 0 0 1 9.57 11h-.15A1.43 1.43 0 0 1 8 9.57a.53.53 0 0 1 .5-.53.46.46 0 0 1 .35.12.47.47 0 0 1 .15.34.45.45 0 0 0 .43.5h.14a.43.43 0 0 0 .37-.65.41.41 0 0 0-.18-.16L8.8 8.7a1.42 1.42 0 0 1-.25-2.39c.25-.2.57-.3.89-.31h.14A1.43 1.43 0 0 1 11 7.43a.54.54 0 0 1-.5.53.46.46 0 0 1-.46-.28.47.47 0 0 1-.04-.18v-.07A.43.43 0 0 0 9.57 7h-.14a.43.43 0 0 0-.36.65c.04.07.1.12.17.16l.97.49c.3.14.52.38.65.67ZM4 6a.5.5 0 1 0 0 1h1v3.5a.5.5 0 0 0 1 0V7h1a.5.5 0 1 0 0-1H4ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodeTsRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeTsRectangle16RegularIcon, 'CodeTsRectangle16Regular');

const CodeVb16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.18 3.82a.75.75 0 0 1 1.03.93l-2.5 7a.74.74 0 0 1-.71.5.75.75 0 0 1-.7-.5l-2.5-7a.76.76 0 0 1 .2-.8.75.75 0 0 1 1.2.3L5 9.27l1.8-5.02c.06-.19.2-.34.38-.43Zm6.47 4.05A2.5 2.5 0 0 1 12 12.25H9.5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.26a2.49 2.49 0 0 1 2.43 3.06c-.1.4-.28.76-.54 1.06Zm-3.4-2.62v2h1.5c.26 0 .52-.1.7-.3a1 1 0 0 0-.7-1.7h-1.5Zm0 5.5H12a1 1 0 0 0 0-2h-1.75v2Z",
    fill: primaryFill
  }));
};

exports.CodeVb16Filled = wrapIcon_1.default( /*#__PURE__*/CodeVb16FilledIcon, 'CodeVb16Filled');

const CodeVb16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.28 7.9A2.25 2.25 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.25 2.25 0 0 0 1.28-4.1ZM13 6.25a1.25 1.25 0 0 1-1.25 1.25H10V5h1.75A1.25 1.25 0 0 1 13 6.25ZM12 11h-2V8.5h2a1.25 1.25 0 0 1 0 2.5ZM7.97 4.67l-2.5 7a.5.5 0 0 1-.94 0l-2.5-7a.5.5 0 1 1 .94-.34L5 10.01l2.03-5.68a.5.5 0 0 1 .94.34Z",
    fill: primaryFill
  }));
};

exports.CodeVb16Regular = wrapIcon_1.default( /*#__PURE__*/CodeVb16RegularIcon, 'CodeVb16Regular');

const CodeVbRectangle16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12.25 3h-9.5C1.78 3 1 3.79 1 4.75v7.5c0 .96.78 1.75 1.75 1.75h9.5c.96 0 1.75-.79 1.75-1.75v-7.5C14 3.79 13.21 3 12.25 3ZM7.47 6.68l-1.5 4a.5.5 0 0 1-.47.32.5.5 0 0 1-.47-.32l-1.5-4a.5.5 0 0 1 .01-.39.5.5 0 0 1 .93.03L5.5 9.08l1.03-2.76a.5.5 0 0 1 .65-.29.5.5 0 0 1 .29.65Zm3.69 3.34a1.5 1.5 0 0 1-1.41.98H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.23 2.36 1.5 1.5 0 0 1 .42 1.66ZM9.75 9H9v1h.75a.5.5 0 1 0 0-1Zm.1-1.15A.5.5 0 0 0 9.5 7H9v1h.5a.5.5 0 0 0 .35-.15Z",
    fill: primaryFill
  }));
};

exports.CodeVbRectangle16Filled = wrapIcon_1.default( /*#__PURE__*/CodeVbRectangle16FilledIcon, 'CodeVbRectangle16Filled');

const CodeVbRectangle16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.73 8.36A1.5 1.5 0 0 0 9.5 6h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.25a1.5 1.5 0 0 0 .98-2.64ZM9 7h.5a.5.5 0 1 1 0 1H9V7Zm.75 3H9V9h.75a.5.5 0 0 1 0 1ZM7.47 6.68l-1.5 4a.5.5 0 0 1-.94 0l-1.5-4a.5.5 0 0 1 .94-.36L5.5 9.08l1.03-2.76a.5.5 0 0 1 .94.36ZM2.75 3C1.78 3 1 3.78 1 4.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5C14 3.78 13.22 3 12.25 3h-9.5ZM2 4.75c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z",
    fill: primaryFill
  }));
};

exports.CodeVbRectangle16Regular = wrapIcon_1.default( /*#__PURE__*/CodeVbRectangle16RegularIcon, 'CodeVbRectangle16Regular');

const Collections20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 7A2.5 2.5 0 0 1 18 9.33v6.17a2.5 2.5 0 0 1-2.33 2.5H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm-3 2a.5.5 0 0 0-.5.4V12H9.41a.5.5 0 0 0 0 1H12v2.59a.5.5 0 0 0 1 0v-2.6h2.6a.5.5 0 0 0 0-.98l-.1-.01H13V9.4a.5.5 0 0 0-.5-.4Zm.16-5.3.05.15L13.3 6H9a3 3 0 0 0-3 2.82V14.35a2.5 2.5 0 0 1-2.3-1.69l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15Z",
    fill: primaryFill
  }));
};

exports.Collections20Filled = wrapIcon_1.default( /*#__PURE__*/Collections20FilledIcon, 'Collections20Filled');

const Collections20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 7A2.5 2.5 0 0 1 18 9.33v6.17a2.5 2.5 0 0 1-2.33 2.5H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm0 1h-6c-.78 0-1.42.6-1.5 1.35v6.15c0 .78.6 1.42 1.36 1.5h6.14c.78 0 1.42-.6 1.5-1.36V9.5c0-.78-.6-1.42-1.35-1.5h-.15Zm-3 1a.5.5 0 0 1 .5.4V12h2.5a.5.5 0 0 1 .1 1H13v2.5a.5.5 0 0 1-1 .09v-2.6H9.5a.5.5 0 0 1-.09-.98l.1-.01H12V9.5c0-.28.22-.5.5-.5Zm.16-5.3.05.15L13.3 6h-1.04l-.5-1.89a1.5 1.5 0 0 0-1.7-1.1l-.14.04L4.1 4.6a1.5 1.5 0 0 0-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 0 0 1.4 1.1v1a2.5 2.5 0 0 1-2.3-1.68l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15Z",
    fill: primaryFill
  }));
};

exports.Collections20Regular = wrapIcon_1.default( /*#__PURE__*/Collections20RegularIcon, 'Collections20Regular');

const Collections24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.11 8.8c.34-.3.75-.53 1.2-.66l.24-.07.16-.03.18-.02.18-.02h7.68a3.25 3.25 0 0 1 3.24 3.06l.01.19v7.5a3.25 3.25 0 0 1-3.07 3.24h-7.68a3.25 3.25 0 0 1-3.24-3.06L8 18.75V11.1l.02-.19.02-.2.04-.18.06-.22.08-.24.08-.2.09-.16.1-.16.14-.22.1-.12.13-.16.1-.11.15-.14ZM15 11c-.38 0-.7.28-.74.65l-.01.1v2.5h-2.5c-.38 0-.7.28-.74.65L11 15c0 .38.28.7.65.74h2.6v2.51c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1v-2.5h2.5c.38 0 .7-.28.74-.65L19 15c0-.38-.28-.7-.65-.74l-.1-.01h-2.5v-2.5c0-.38-.28-.7-.65-.74L15 11Zm.58-6.77.05.18.7 2.59h-5.08A4.25 4.25 0 0 0 7 11.25v6.43a3.25 3.25 0 0 1-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12Z",
    fill: primaryFill
  }));
};

exports.Collections24Filled = wrapIcon_1.default( /*#__PURE__*/Collections24FilledIcon, 'Collections24Filled');

const Collections24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.07 8h7.68a3.25 3.25 0 0 1 3.24 3.06l.01.19v7.5a3.25 3.25 0 0 1-3.07 3.24h-7.68a3.25 3.25 0 0 1-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0 1 11.07 8Zm7.68 1.5h-7.5c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5c0 .92.7 1.67 1.6 1.74h7.65c.92 0 1.67-.7 1.74-1.6l.01-.14v-7.5c0-.97-.78-1.75-1.75-1.75ZM15 11c.41 0 .75.34.75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 1 1 0-1.5h2.5v-2.5c0-.41.34-.75.75-.75Zm.58-6.77.05.18.7 2.59h-1.56l-.58-2.2a1.75 1.75 0 0 0-2.15-1.24L4.8 5.5a1.75 1.75 0 0 0-1.27 2l.03.14L5.5 14.9c.2.72.8 1.21 1.5 1.29v1.5a3.25 3.25 0 0 1-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12Z",
    fill: primaryFill
  }));
};

exports.Collections24Regular = wrapIcon_1.default( /*#__PURE__*/Collections24RegularIcon, 'Collections24Regular');

const CollectionsAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 7A2.5 2.5 0 0 1 18 9.33v.93A5.5 5.5 0 0 0 10.26 18H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.33 7h6.17Zm-2.84-3.3.05.15.57 2.15H9a3 3 0 0 0-3 2.82V14.35a2.5 2.5 0 0 1-2.31-1.69l-.05-.17-1.56-5.8a2.5 2.5 0 0 1 1.61-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.95 1.46l.06.15ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.CollectionsAdd20Filled = wrapIcon_1.default( /*#__PURE__*/CollectionsAdd20FilledIcon, 'CollectionsAdd20Filled');

const CollectionsAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.5 7A2.5 2.5 0 0 1 18 9.33v.93c-.3-.26-.64-.48-1-.66v-.1c0-.78-.6-1.42-1.36-1.5H9.5c-.78 0-1.42.6-1.5 1.35v6.15c0 .78.6 1.42 1.35 1.5h.25c.18.36.4.7.66 1H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.33 7h6.17Zm-2.84-3.3.05.15.57 2.15h-1.03l-.5-1.89a1.5 1.5 0 0 0-1.7-1.1l-.14.04L4.1 4.6a1.5 1.5 0 0 0-1.1 1.7l.04.14 1.55 5.8a1.5 1.5 0 0 0 1.4 1.1v1a2.5 2.5 0 0 1-2.31-1.68l-.05-.17-1.56-5.8a2.5 2.5 0 0 1 1.61-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.95 1.46l.06.15ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z",
    fill: primaryFill
  }));
};

exports.CollectionsAdd20Regular = wrapIcon_1.default( /*#__PURE__*/CollectionsAdd20RegularIcon, 'CollectionsAdd20Regular');

const CollectionsAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.78 2.45c.82.44 1.47 1.2 1.78 2.14l.52 1.91h-6.04a3.75 3.75 0 0 0-3.54 3.75v7.71c.02.25.06.5.12.73a3.74 3.74 0 0 1-3.5-2.6l-2-7.43A3.74 3.74 0 0 1 4.6 4.13l7.43-2a3.74 3.74 0 0 1 2.76.32ZM11.26 7.5h-.17a2.75 2.75 0 0 0-2.59 2.75v7.66a2.75 2.75 0 0 0 2.75 2.59h.48a6.5 6.5 0 0 1 9.77-8.12v-2.29a2.75 2.75 0 0 0-2.75-2.59h-7.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM17.41 14h.18c.2.04.36.2.4.4l.01.1V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 0 1-.4.4l-.1.01H18v2.6a.5.5 0 0 1-.4.4h-.19a.5.5 0 0 1-.4-.4V18H14.4a.5.5 0 0 1-.4-.41v-.18a.5.5 0 0 1 .4-.4l.1-.01H17v-2.6a.5.5 0 0 1 .41-.4Z",
    fill: primaryFill
  }));
};

exports.CollectionsAdd24Filled = wrapIcon_1.default( /*#__PURE__*/CollectionsAdd24FilledIcon, 'CollectionsAdd24Filled');

const CollectionsAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.07 8h7.68a3.25 3.25 0 0 1 3.24 3.06l.01.19v1.56a6.52 6.52 0 0 0-1.5-1.08v-.48c0-.97-.78-1.75-1.75-1.75h-7.5c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5c0 .92.7 1.67 1.6 1.74h.63c.29.56.65 1.06 1.08 1.5h-1.56a3.25 3.25 0 0 1-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0 1 11.07 8Zm4.51-3.77.05.18.7 2.59h-1.56l-.58-2.2a1.75 1.75 0 0 0-2.15-1.24L4.8 5.5a1.75 1.75 0 0 0-1.27 2l.03.14L5.5 14.9c.2.72.8 1.21 1.5 1.29v1.5a3.25 3.25 0 0 1-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM17.41 14h.18c.2.04.36.2.4.4l.01.1V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 0 1-.4.4l-.1.01H18v2.6a.5.5 0 0 1-.4.4h-.19a.5.5 0 0 1-.4-.4V18H14.4a.5.5 0 0 1-.4-.41v-.18a.5.5 0 0 1 .4-.4l.1-.01H17v-2.6a.5.5 0 0 1 .41-.4Z",
    fill: primaryFill
  }));
};

exports.CollectionsAdd24Regular = wrapIcon_1.default( /*#__PURE__*/CollectionsAdd24RegularIcon, 'CollectionsAdd24Regular');

const Color16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 8a6 6 0 1 1 12 0c0 1.58-.33 3.05-.98 4.15C12.35 13.25 11.33 14 10 14a3 3 0 0 1-3-3v-1a1 1 0 0 0-1-1c-.28 0-.4.1-.65.35l-.01.02c-.25.25-.63.63-1.34.63a2 2 0 0 1-2-2Zm5.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM11.5 7a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM11 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z",
    fill: primaryFill
  }));
};

exports.Color16Filled = wrapIcon_1.default( /*#__PURE__*/Color16FilledIcon, 'Color16Filled');

const Color16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7.5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 2a6 6 0 0 0-6 6c0 1.1.9 2 2 2 .7 0 1.09-.38 1.34-.63l.01-.02C5.6 9.11 5.72 9 6 9a1 1 0 0 1 1 1v1a3 3 0 0 0 3 3c1.33 0 2.35-.75 3.02-1.85.65-1.1.98-2.57.98-4.15a6 6 0 0 0-6-6ZM3 8a5 5 0 0 1 10 0c0 1.46-.3 2.74-.84 3.63C11.63 12.52 10.9 13 10 13a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2c-.7 0-1.09.38-1.34.63l-.01.02C4.4 8.89 4.28 9 4 9a1 1 0 0 1-1-1Z",
    fill: primaryFill
  }));
};

exports.Color16Regular = wrapIcon_1.default( /*#__PURE__*/Color16RegularIcon, 'Color16Regular');

const Color20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.77 3.17a7.82 7.82 0 0 1 7.93-.18c3.97 2.04 5.5 6.16 4.18 10.44a7.46 7.46 0 0 1-2.37 3.59 4.32 4.32 0 0 1-4.2.8 3.84 3.84 0 0 1-2.2-1.68c-.41-.7-.53-1.47-.58-2.14l-.04-.58-.02-.37c-.02-.3-.05-.55-.1-.76a1.16 1.16 0 0 0-.2-.47.75.75 0 0 0-.4-.24 1.86 1.86 0 0 0-1.15-.04c-.25.08-.45.2-.69.35l-.2.12c-.31.18-.72.4-1.23.37a2.91 2.91 0 0 1-1.66-.77 2.63 2.63 0 0 1-.94-2.12c0-.79.25-1.63.62-2.43a9.6 9.6 0 0 1 3.25-3.9Zm3.98 3.58a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    fill: primaryFill
  }));
};

exports.Color20Filled = wrapIcon_1.default( /*#__PURE__*/Color20FilledIcon, 'Color20Filled');

const Color20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.5 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.25 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm.45-11a7.82 7.82 0 0 0-7.93.17 9.6 9.6 0 0 0-3.25 3.89 5.9 5.9 0 0 0-.62 2.43c0 .8.27 1.57.94 2.12.61.5 1.14.74 1.66.77.51.02.92-.19 1.23-.37l.2-.12c.24-.15.44-.27.69-.35.28-.09.64-.12 1.16.04.19.06.3.14.38.24.09.1.16.26.2.47.06.21.09.46.1.76.02.1.02.24.03.37l.04.58c.05.67.17 1.44.57 2.14.42.7 1.1 1.3 2.2 1.68 1.6.54 3.07.1 4.21-.8a7.46 7.46 0 0 0 2.37-3.6C19.2 9.16 17.68 5.04 13.7 3ZM6.3 4.01a6.82 6.82 0 0 1 6.94-.14c3.5 1.8 4.87 5.4 3.69 9.25a6.46 6.46 0 0 1-2.04 3.1 3.33 3.33 0 0 1-3.26.64c-.9-.3-1.38-.76-1.66-1.24a4 4 0 0 1-.44-1.7l-.04-.54-.02-.41c-.03-.31-.06-.63-.13-.93-.07-.3-.2-.6-.4-.86-.22-.26-.5-.46-.87-.57a2.85 2.85 0 0 0-1.75-.03c-.38.12-.7.32-.95.47l-.14.09c-.29.16-.48.24-.68.23-.22-.01-.55-.12-1.08-.55-.38-.31-.57-.76-.57-1.34 0-.6.19-1.29.52-2.01A8.63 8.63 0 0 1 6.3 4.02Z",
    fill: primaryFill
  }));
};

exports.Color20Regular = wrapIcon_1.default( /*#__PURE__*/Color20RegularIcon, 'Color20Regular');

const Color24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.84 5.86C6.78 1.94 12.87.8 17.2 3.5c4.28 2.66 5.86 7.77 4.1 12.57-1.65 4.54-6.01 6.33-9.16 4.05-1.17-.85-1.63-1.92-1.85-3.66l-.1-.99-.05-.4c-.12-.93-.31-1.35-.7-1.57-.54-.3-.9-.3-1.6-.03l-.35.14-.18.08c-1.01.44-1.69.6-2.54.42l-.2-.05-.17-.04c-2.78-.87-3.2-4.65-.56-8.16Zm12.93 4.72a1.25 1.25 0 1 0 2.41-.65 1.25 1.25 0 0 0-2.41.65Zm.5 3.49a1.25 1.25 0 1 0 2.4-.65 1.25 1.25 0 0 0-2.4.65Zm-2.48-6.5a1.25 1.25 0 1 0 2.41-.64 1.25 1.25 0 0 0-2.41.65Zm-.03 9a1.25 1.25 0 1 0 2.41-.64 1.25 1.25 0 0 0-2.41.65Zm-3.5-9.96a1.25 1.25 0 1 0 2.42-.65 1.25 1.25 0 0 0-2.42.65Z",
    fill: primaryFill
  }));
};

exports.Color24Filled = wrapIcon_1.default( /*#__PURE__*/Color24FilledIcon, 'Color24Filled');

const Color24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.84 5.86C6.78 1.94 12.87.8 17.2 3.5c4.28 2.66 5.86 7.77 4.1 12.57-1.65 4.54-6.01 6.33-9.16 4.05-1.17-.85-1.63-1.92-1.85-3.66l-.1-.99-.05-.4c-.12-.93-.31-1.35-.7-1.57-.54-.3-.9-.3-1.6-.03l-.35.14-.18.08c-1.01.44-1.69.6-2.54.42l-.2-.05-.17-.04c-2.78-.87-3.2-4.65-.56-8.16Zm.98 6.71.13.04.13.03c.44.09.81.02 1.44-.24l.6-.26c1.2-.5 1.98-.54 3.04.05.92.51 1.28 1.3 1.46 2.66l.06.46.05.53.05.43c.17 1.36.48 2.09 1.24 2.64 2.28 1.65 5.54.3 6.87-3.35 1.52-4.15.18-8.51-3.48-10.79-3.67-2.28-8.9-1.3-11.37 1.99-2.08 2.76-1.82 5.28-.22 5.81Zm11.23-1.99a1.25 1.25 0 1 1 2.41-.65 1.25 1.25 0 0 1-2.41.65Zm.5 3.49a1.25 1.25 0 1 1 2.4-.65 1.25 1.25 0 0 1-2.4.65Zm-2.48-6.5a1.25 1.25 0 1 1 2.41-.64 1.25 1.25 0 0 1-2.41.65Zm-.03 9a1.25 1.25 0 1 1 2.42-.64 1.25 1.25 0 0 1-2.42.65Zm-3.5-9.96a1.25 1.25 0 1 1 2.42-.65 1.25 1.25 0 0 1-2.42.65Z",
    fill: primaryFill
  }));
};

exports.Color24Regular = wrapIcon_1.default( /*#__PURE__*/Color24RegularIcon, 'Color24Regular');

const ColorBackground20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m2 10.66 1.08 1.08a3 3 0 0 0 4.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72l-.01-.02-.22-.26-.02-.03a1.5 1.5 0 0 0-.85-.48 3 3 0 0 0-.87-2.35L9.48 4h6.02A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-2.84ZM5 1.5a.5.5 0 0 1 1 0v1.17a2 2 0 0 1 1.32.59l2.12 2.12a2 2 0 0 1 0 2.83l-2.83 2.83a2 2 0 0 1-2.82 0L1.66 8.9a2 2 0 0 1 0-2.82L4.5 3.26A2 2 0 0 1 5 2.89V1.5Zm0 4V4.16L2.66 6.5h6.32a1 1 0 0 0-.25-.41L6.61 3.96A1 1 0 0 0 6 3.68V5.5a.5.5 0 0 1-1 0Zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 0 0 1.42 0L8.73 7.5H2.08Zm8.3.67-.22.26c-.12.15-.29.38-.46.64C9.4 9.57 9 10.3 9 11c0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.22-.26a.5.5 0 0 0-.74 0Zm.17 1.44c.06-.11.13-.21.2-.3l.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 10 11c0-.4.24-.92.55-1.4Z",
    fill: primaryFill
  }));
};

exports.ColorBackground20Filled = wrapIcon_1.default( /*#__PURE__*/ColorBackground20FilledIcon, 'ColorBackground20Filled');

const ColorBackground20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 10.66v2.84A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H9.48l.67.67c.1.1.2.22.28.33h5.07c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-1.84l-1-1ZM5 1.5a.5.5 0 0 1 1 0v1.17a2 2 0 0 1 1.32.59l2.12 2.12a2 2 0 0 1 0 2.83l-2.83 2.83a2 2 0 0 1-2.82 0L1.66 8.9a2 2 0 0 1 0-2.82L4.5 3.26A2 2 0 0 1 5 2.89V1.5Zm0 4V4.16L2.66 6.5h6.32a1 1 0 0 0-.25-.41L6.61 3.96A1 1 0 0 0 6 3.68V5.5a.5.5 0 0 1-1 0Zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 0 0 1.42 0L8.73 7.5H2.08Zm8.08.93.22-.26a.5.5 0 0 1 .74 0l.22.26c.12.15.29.38.46.64.31.5.7 1.23.7 1.93 0 1-.67 2-1.75 2S9 12 9 11c0-.7.39-1.44.7-1.93.17-.26.34-.49.46-.64Zm.59.88c-.07.09-.14.19-.2.3-.31.47-.55 1-.55 1.39 0 .3.1.57.25.75.13.17.3.25.5.25s.37-.08.5-.25c.15-.18.25-.46.25-.75 0-.4-.24-.92-.55-1.4l-.2-.3Z",
    fill: primaryFill
  }));
};

exports.ColorBackground20Regular = wrapIcon_1.default( /*#__PURE__*/ColorBackground20RegularIcon, 'ColorBackground20Regular');

const ColorBackground24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 12.41v5.09A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-8.94l2.42 2.42a3 3 0 0 1 .72 3.1c.38.03.75.2 1.04.5h.01l.02.03a7.46 7.46 0 0 1 .31.34 7.98 7.98 0 0 1 1.48 2.2c.23.46.44 1.1.44 1.78 0 1.86-1.4 3.63-3.5 3.63S10 16.23 10 14.37c0-.29.04-.56.1-.82L8.74 14.9a3 3 0 0 1-4.25 0L2 12.4Zm9.34.58c-.19.41-.34.9-.34 1.38 0 1.4 1.03 2.63 2.5 2.63s2.5-1.23 2.5-2.63c0-.49-.15-.97-.34-1.38-.2-.41-.44-.8-.68-1.13-.23-.33-.47-.61-.64-.81l-.31-.33a.75.75 0 0 0-1.06 0l-.3.33A6.98 6.98 0 0 0 11.34 13Zm2.16-.6a8.42 8.42 0 0 1 .8 1.23c.14.3.2.56.2.76 0 .69-.48 1.12-1 1.12s-1-.43-1-1.13c0-.19.06-.44.2-.75a5.5 5.5 0 0 1 .8-1.24ZM6.75 1a.75.75 0 0 0-.75.75v1.76l-.1.08-4.24 4.25a2 2 0 0 0 0 2.82L5.2 14.2a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83L8.73 3.59a2 2 0 0 0-1.23-.57V1.75A.75.75 0 0 0 6.75 1ZM6 5.62v.63a.75.75 0 1 0 1.5 0V4.54a.5.5 0 0 1 .17.11l3.54 3.54c.09.09.14.2.15.32H3.1L6 5.62Zm.26 7.52L3.13 10h6.97l-3.13 3.13a.5.5 0 0 1-.71 0Z",
    fill: primaryFill
  }));
};

exports.ColorBackground24Filled = wrapIcon_1.default( /*#__PURE__*/ColorBackground24FilledIcon, 'ColorBackground24Filled');

const ColorBackground24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.34 13c-.19.4-.34.88-.34 1.38 0 .73.29 1.42.77 1.9a2.4 2.4 0 0 0 1.73.72c1.47 0 2.5-1.23 2.5-2.62 0-.5-.15-.98-.34-1.39-.2-.41-.44-.8-.68-1.13-.23-.33-.47-.61-.64-.81l-.31-.33a.75.75 0 0 0-1.06 0l-.3.33A6.98 6.98 0 0 0 11.34 13Zm2.43-.27c.2.29.39.59.52.89.15.3.21.56.21.76 0 .69-.48 1.12-1 1.12-.25 0-.5-.1-.68-.28-.2-.2-.32-.49-.32-.84 0-.2.06-.45.2-.76a5.5 5.5 0 0 1 .8-1.24l.27.35ZM6.75 1a.75.75 0 0 0-.75.75v1.76l-.1.08-4.24 4.25a2 2 0 0 0 0 2.82L5.2 14.2a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83L8.73 3.59a2 2 0 0 0-1.23-.57V1.75A.75.75 0 0 0 6.75 1ZM6 5.62v.63a.75.75 0 1 0 1.5 0V4.54a.5.5 0 0 1 .17.11l3.54 3.54c.09.09.13.2.14.31H3.12L6 5.62Zm.26 7.52L3.13 10h6.97l-3.13 3.13a.5.5 0 0 1-.71 0ZM2 17.5v-5.09l1.5 1.5v3.59a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-7.44L10.56 4h8.94A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5Z",
    fill: primaryFill
  }));
};

exports.ColorBackground24Regular = wrapIcon_1.default( /*#__PURE__*/ColorBackground24RegularIcon, 'ColorBackground24Regular');

const ColorBackgroundAccent20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m2.75 11.41.33.33a3 3 0 0 0 4.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72V7.8l-.24-.29h-.01a1.5 1.5 0 0 0-.85-.49 3 3 0 0 0-.8-2.27h5.28c.97 0 1.75.78 1.75 1.75v7c0 .97-.78 1.75-1.75 1.75h-11c-.97 0-1.75-.78-1.75-1.75v-2.09Z",
    fill: primaryFill
  }));
};

exports.ColorBackgroundAccent20Regular = wrapIcon_1.default( /*#__PURE__*/ColorBackgroundAccent20RegularIcon, 'ColorBackgroundAccent20Regular');

const ColorBackgroundAccent24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 17.5v-4.09l1.49 1.49a3 3 0 0 0 4.24 0l1.37-1.37c-.06.27-.1.55-.1.85 0 1.85 1.4 3.62 3.5 3.62s3.5-1.77 3.5-3.63c0-.69-.21-1.32-.43-1.8-.23-.49-.51-.93-.77-1.3-.27-.36-.52-.67-.72-.88v-.01l-.33-.35-.01-.02c-.3-.3-.67-.46-1.05-.5a3 3 0 0 0-.72-3.1L11.56 5h7.94c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z",
    fill: primaryFill
  }));
};

exports.ColorBackgroundAccent24Regular = wrapIcon_1.default( /*#__PURE__*/ColorBackgroundAccent24RegularIcon, 'ColorBackgroundAccent24Regular');

const ColorFill16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2.5a.5.5 0 0 0-1 0v1c-.2.07-.4.19-.56.35L3.85 6.44a1.5 1.5 0 0 0 0 2.12l2.09 2.09a1.5 1.5 0 0 0 2.12 0l2.59-2.59a1.5 1.5 0 0 0 0-2.12L8.56 3.85A1.5 1.5 0 0 0 8 3.5v-1ZM7 4.7v.8a.5.5 0 1 0 1 0v-.8l1.94 1.95c.1.1.15.23.15.36A.5.5 0 0 0 10 7H4.7L7 4.7ZM4.7 8h4.6L7.34 9.94a.5.5 0 0 1-.7 0L4.7 8Zm4.07 3.35a2.5 2.5 0 0 1-3.54 0L3.15 9.27a2.54 2.54 0 0 1-.05-.05A2 2 0 0 0 2 11v1c0 1.1.9 2 2 2h8a2 2 0 0 0 1.98-1.7A2.5 2.5 0 0 1 10 10.11l-1.24 1.24ZM12.5 8a.5.5 0 0 0-.39.19l-.01.01-.04.05a10.07 10.07 0 0 0-.85 1.3c-.1.2-.21.48-.21.74a1.5 1.5 0 0 0 3 0c0-.26-.1-.53-.2-.73a5.75 5.75 0 0 0-.74-1.16l-.12-.15-.04-.05V8.2h-.01A.5.5 0 0 0 12.5 8Zm0 1.34a8.17 8.17 0 0 1 .4.65l.08.21.02.09a.5.5 0 1 1-1 0l.02-.09.09-.2a4.82 4.82 0 0 1 .39-.66Z",
    fill: primaryFill
  }));
};

exports.ColorFill16Filled = wrapIcon_1.default( /*#__PURE__*/ColorFill16FilledIcon, 'ColorFill16Filled');

const ColorFill16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8 2.5a.5.5 0 0 0-1 0v1c-.2.07-.4.19-.56.35L3.85 6.44a1.5 1.5 0 0 0 0 2.12l2.09 2.09a1.5 1.5 0 0 0 2.12 0l2.59-2.59a1.5 1.5 0 0 0 0-2.12L8.56 3.85A1.5 1.5 0 0 0 8 3.5v-1ZM7 4.7v.8a.5.5 0 1 0 1 0v-.8l1.94 1.95c.1.1.15.23.15.36A.5.5 0 0 0 10 7H4.7L7 4.7ZM4.7 8h4.6L7.34 9.94a.5.5 0 0 1-.7 0L4.7 8Zm7.92 4.78A1 1 0 0 1 12 13H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 .89-1l-.74-.73a2.56 2.56 0 0 1-.05-.05A2 2 0 0 0 2 11v1c0 1.1.9 2 2 2h8a2 2 0 0 0 1.98-1.7c-.39.28-.85.46-1.36.48ZM12.5 8a.5.5 0 0 0-.39.19l-.01.01-.04.05a10.07 10.07 0 0 0-.85 1.3c-.1.2-.21.48-.21.74a1.5 1.5 0 0 0 3 0c0-.26-.1-.53-.2-.73a5.75 5.75 0 0 0-.74-1.16l-.12-.15-.04-.05V8.2h-.01A.5.5 0 0 0 12.5 8Zm0 1.34a8.17 8.17 0 0 1 .4.65l.08.21.02.09a.5.5 0 1 1-1 0l.02-.09.09-.2a4.82 4.82 0 0 1 .39-.66Z",
    fill: primaryFill
  }));
};

exports.ColorFill16Regular = wrapIcon_1.default( /*#__PURE__*/ColorFill16RegularIcon, 'ColorFill16Regular');

const ColorFill20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 12c0 1.35.93 3 2.75 3 1.55 0 2.46-1.2 2.69-2.39A2 2 0 0 1 18 14v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h.34l1.45 1.45a3 3 0 0 0 4.24 0L11.48 12H12Zm2.38-2.83-.22.26c-.12.15-.29.38-.46.64-.31.5-.7 1.23-.7 1.93 0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.21-.25-.02-.02a.47.47 0 0 0-.36-.16.5.5 0 0 0-.37.17Zm.37 1.14.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 14 12c0-.4.24-.92.55-1.4l.2-.3ZM8.5 1a.5.5 0 0 0-.5.5v1.56a2 2 0 0 0-.8.49L3.66 7.09a2 2 0 0 0 0 2.82l2.83 2.83a2 2 0 0 0 2.83 0l3.54-3.53a2 2 0 0 0 0-2.83l-2.83-2.83A2 2 0 0 0 9 3V1.5a.5.5 0 0 0-.5-.5ZM8 4.17V5.5a.5.5 0 0 0 1 0V4.04a1 1 0 0 1 .32.22l2.83 2.83a1 1 0 0 1 .25.41H4.66l3.25-3.24.09-.08ZM4.37 9.21a1 1 0 0 1-.3-.71h8.08l-3.54 3.54a1 1 0 0 1-1.41 0L4.37 9.2Zm10-.04Z",
    fill: primaryFill
  }));
};

exports.ColorFill20Filled = wrapIcon_1.default( /*#__PURE__*/ColorFill20FilledIcon, 'ColorFill20Filled');

const ColorFill20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.34 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-.56-1.39c-.08.4-.23.8-.47 1.16A1 1 0 0 1 17 14v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1.34l-1-1Zm10.04-2.83-.22.26c-.12.15-.29.38-.46.64-.31.5-.7 1.23-.7 1.93 0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.21-.25-.02-.02a.47.47 0 0 0-.36-.16.5.5 0 0 0-.37.17Zm.37 1.14.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 14 12c0-.4.24-.92.55-1.4l.2-.3ZM8.5 1a.5.5 0 0 0-.5.5v1.56a2 2 0 0 0-.8.49L3.66 7.09a2 2 0 0 0 0 2.82l2.83 2.83a2 2 0 0 0 2.83 0l3.54-3.53a2 2 0 0 0 0-2.83l-2.83-2.83A2 2 0 0 0 9 3V1.5a.5.5 0 0 0-.5-.5ZM8 4.17V5.5a.5.5 0 0 0 1 0V4.04a1 1 0 0 1 .32.22l2.83 2.83a1 1 0 0 1 .25.41H4.66l3.25-3.24.09-.08ZM4.37 9.21a1 1 0 0 1-.3-.71h8.08l-3.54 3.54a1 1 0 0 1-1.41 0L4.37 9.2Zm10-.04Z",
    fill: primaryFill
  }));
};

exports.ColorFill20Regular = wrapIcon_1.default( /*#__PURE__*/ColorFill20RegularIcon, 'ColorFill20Regular');

const ColorFill24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m13.02 14-.02.37c0 1.86 1.4 3.63 3.5 3.63a3.54 3.54 0 0 0 3.48-3.95A2.5 2.5 0 0 1 22 16.5v3a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-3A2.5 2.5 0 0 1 4.5 14h2.09l.9.9a3 3 0 0 0 4.25 0l.9-.9h.38Zm1.32-1c-.19.4-.34.88-.34 1.38 0 1.39 1.03 2.62 2.5 2.62s2.5-1.23 2.5-2.63c0-.49-.15-.97-.34-1.38-.2-.41-.44-.8-.68-1.13-.23-.33-.47-.61-.64-.81l-.31-.33a.75.75 0 0 0-1.06 0l-.3.33A6.98 6.98 0 0 0 14.34 13Zm2.16-.62a8.42 8.42 0 0 1 .8 1.24c.14.3.2.56.2.76 0 .69-.48 1.12-1 1.12s-1-.43-1-1.13c0-.19.06-.44.2-.75a5.5 5.5 0 0 1 .8-1.24ZM9.75 1a.75.75 0 0 0-.75.75v1.76l-.1.08-4.24 4.25a2 2 0 0 0 0 2.82L8.2 14.2a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83l-3.53-3.54a2 2 0 0 0-1.24-.57V1.75A.75.75 0 0 0 9.75 1ZM9 5.62v.63a.75.75 0 0 0 1.5 0V4.54a.5.5 0 0 1 .17.11l3.54 3.54c.09.09.14.2.15.32H6.1L9 5.62Zm.26 7.52L6.13 10h6.97l-3.13 3.13a.5.5 0 0 1-.71 0Z",
    fill: primaryFill
  }));
};

exports.ColorFill24Filled = wrapIcon_1.default( /*#__PURE__*/ColorFill24FilledIcon, 'ColorFill24Filled');

const ColorFill24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M9 1.75a.75.75 0 0 1 1.5 0v1.27a2 2 0 0 1 1.24.57l3.53 3.54a2 2 0 0 1 0 2.83l-4.24 4.24a2 2 0 0 1-2.83 0l-3.54-3.54a2 2 0 0 1 0-2.82l4.25-4.25.09-.08V1.75Zm0 4.5v-.63l-2.89 2.9h8.25a.5.5 0 0 0-.15-.33l-3.54-3.54a.5.5 0 0 0-.17-.11v1.71a.75.75 0 1 1-1.5 0Zm-2.87 3.76 3.13 3.13c.2.2.51.2.7 0L13.1 10H6.13ZM6.6 14H4.5A2.5 2.5 0 0 0 2 16.5v3A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.02-2.45 3.5 3.5 0 0 1-.17 1.5c.4.13.69.5.69.95v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3.83a3 3 0 0 1-.84-.6l-.9-.9Zm7.41.38c0-.5.15-.98.34-1.39.2-.41.44-.8.68-1.13.23-.33.47-.61.64-.81l.3-.32.01-.01c.3-.3.77-.3 1.06 0l.3.33A6.98 6.98 0 0 1 18.66 13c.2.4.35.88.35 1.38 0 1.39-1.03 2.62-2.5 2.62S14 15.77 14 14.37Zm2.77-1.65a8.42 8.42 0 0 0-.27-.35 8.42 8.42 0 0 0-.8 1.24c-.14.3-.2.56-.2.76 0 .69.48 1.12 1 1.12s1-.43 1-1.13c0-.19-.06-.44-.2-.75a5.5 5.5 0 0 0-.53-.89Z",
    fill: primaryFill
  }));
};

exports.ColorFill24Regular = wrapIcon_1.default( /*#__PURE__*/ColorFill24RegularIcon, 'ColorFill24Regular');

const ColorFill28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.75 3c.42 0 .75.34.75.75V5.1c.54.1 1.05.35 1.47.76l3.69 3.7a2.75 2.75 0 0 1 0 3.88l-4.7 4.7a2.75 2.75 0 0 1-3.89 0l-3.7-3.69a2.75 2.75 0 0 1 0-3.89l4.7-4.7c.28-.27.6-.47.93-.6V3.74c0-.41.34-.75.75-.75ZM11 8.25V7.06l-4.56 4.56c-.11.12-.2.24-.26.38h10.68c.2-.46.11-1.01-.26-1.38l-3.7-3.7a1.25 1.25 0 0 0-.4-.27v1.6a.75.75 0 0 1-1.5 0Zm4.48 5.25H6.55l3.58 3.58c.49.5 1.28.5 1.77 0l3.58-3.58ZM16.5 18c0-.35.08-.7.17-1h-1.15l-1.85 1.85a3.75 3.75 0 0 1-5.3 0L6.5 17h-.26A3.25 3.25 0 0 0 3 20.25v1.5C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25v-1.5c0-1.17-.62-2.2-1.55-2.77a3.5 3.5 0 1 1-6.95.52Zm4.1-3.7a.75.75 0 0 0-1.2 0l-.02.02a16.1 16.1 0 0 0-1.54 2.45A3.1 3.1 0 0 0 17.5 18a2.5 2.5 0 0 0 5 0c0-.42-.17-.87-.34-1.23-.19-.4-.42-.8-.65-1.16a19.98 19.98 0 0 0-.9-1.29v-.02h-.01Zm-.6 1.74a16.38 16.38 0 0 1 .8 1.36c.16.34.2.54.2.6a1 1 0 1 1-2 0c0-.06.04-.26.2-.6a9.4 9.4 0 0 1 .8-1.36Z",
    fill: primaryFill
  }));
};

exports.ColorFill28Filled = wrapIcon_1.default( /*#__PURE__*/ColorFill28FilledIcon, 'ColorFill28Filled');

const ColorFill28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.75 3c.42 0 .75.34.75.75V5.1c.54.1 1.05.35 1.47.76l3.69 3.7a2.75 2.75 0 0 1 0 3.88l-4.7 4.7a2.75 2.75 0 0 1-3.89 0l-3.7-3.69a2.75 2.75 0 0 1 0-3.89l4.7-4.7c.28-.27.6-.47.93-.6V3.74c0-.41.34-.75.75-.75ZM11 8.25V7.06l-4.56 4.56c-.11.12-.2.24-.26.38h10.68c.2-.46.11-1.01-.26-1.38l-3.7-3.7a1.25 1.25 0 0 0-.4-.27v1.6a.75.75 0 0 1-1.5 0Zm4.48 5.25H6.55l3.58 3.58c.49.5 1.28.5 1.77 0l3.58-3.58ZM6.25 17h.26l1.5 1.5H6.25c-.97 0-1.75.78-1.75 1.75v1.5c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75v-1.5c0-.34-.1-.65-.26-.92a3.49 3.49 0 0 0 .2-1.85c.94.57 1.56 1.6 1.56 2.77v1.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 21.75v-1.5C3 18.45 4.46 17 6.25 17Zm14.35-2.7a.75.75 0 0 0-1.2 0l-.02.02a16.1 16.1 0 0 0-1.54 2.45A3.1 3.1 0 0 0 17.5 18a2.5 2.5 0 0 0 5 0c0-.42-.17-.87-.34-1.23-.19-.4-.42-.8-.65-1.16a19.98 19.98 0 0 0-.9-1.29v-.02h-.01Zm-.6 1.74a16.38 16.38 0 0 1 .8 1.36c.16.34.2.54.2.6a1 1 0 1 1-2 0c0-.06.04-.26.2-.6a9.4 9.4 0 0 1 .8-1.36Z",
    fill: primaryFill
  }));
};

exports.ColorFill28Regular = wrapIcon_1.default( /*#__PURE__*/ColorFill28RegularIcon, 'ColorFill28Regular');

const ColorFillAccent16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M8.77 11.35a2.5 2.5 0 0 1-3.54 0L3.47 9.6A1.5 1.5 0 0 0 2.5 11v1c0 .83.67 1.5 1.5 1.5h8c.6 0 1.12-.35 1.36-.87a2.5 2.5 0 0 1-3.35-2.52l-1.24 1.24Z",
    fill: primaryFill
  }));
};

exports.ColorFillAccent16Regular = wrapIcon_1.default( /*#__PURE__*/ColorFillAccent16RegularIcon, 'ColorFillAccent16Regular');

const ColorFillAccent20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.84 12.5H4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v-2c0-.3-.09-.57-.23-.8a2.67 2.67 0 0 1-2.52 1.8c-1.6 0-2.51-1.27-2.7-2.5h-1.07l-.95.95a3 3 0 0 1-4.24 0l-.95-.95Z",
    fill: primaryFill
  }));
};

exports.ColorFillAccent20Regular = wrapIcon_1.default( /*#__PURE__*/ColorFillAccent20RegularIcon, 'ColorFillAccent20Regular');

const ColorFillAccent24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.05 15a3.5 3.5 0 0 0 3.45 3 3.5 3.5 0 0 0 3.44-2.94A1.5 1.5 0 0 1 21 16.5v3c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-3c0-.83.67-1.5 1.5-1.5h3.09a3 3 0 0 0 4.05 0h1.41Z",
    fill: primaryFill
  }));
};

exports.ColorFillAccent24Regular = wrapIcon_1.default( /*#__PURE__*/ColorFillAccent24RegularIcon, 'ColorFillAccent24Regular');

const ColorFillAccent28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "m16.51 17.75-.01.25a3.5 3.5 0 0 0 6.97.44c.48.45.78 1.1.78 1.81v1.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5v-1.5a2.5 2.5 0 0 1 2.5-2.5h1.01l1.1 1.1a3.75 3.75 0 0 0 5.3 0l1.1-1.1h1.75Z",
    fill: primaryFill
  }));
};

exports.ColorFillAccent28Regular = wrapIcon_1.default( /*#__PURE__*/ColorFillAccent28RegularIcon, 'ColorFillAccent28Regular');

const ColorLine16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2.73 12.07a1.75 1.75 0 0 0 1.23.12l2.4-.66a3.16 3.16 0 0 0 1.4-.81l.72-.72h5.02c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-2c0-.57.32-1.06.78-1.32a1.75 1.75 0 0 0 .95 1.89ZM11.08 1a1.91 1.91 0 0 0-1.35.56L4.17 7.12c-.24.24-.4.53-.5.85l-.65 2.4a.5.5 0 0 0 .61.61l2.4-.65c.32-.1.62-.26.85-.5l5.56-5.56A1.92 1.92 0 0 0 11.08 1Z",
    fill: primaryFill
  }));
};

exports.ColorLine16Filled = wrapIcon_1.default( /*#__PURE__*/ColorLine16FilledIcon, 'ColorLine16Filled');

const ColorLine16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 11.41a1.75 1.75 0 0 1-.22-1.23A1.5 1.5 0 0 0 1 11.5v2c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H8.48l-.72.72c-.1.1-.2.2-.32.28h6.06c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 0-.09ZM11.09 2a.92.92 0 0 1 .65 1.57L6.17 9.12a.93.93 0 0 1-.4.24L4.2 9.8l.43-1.56c.04-.15.12-.29.24-.4l5.55-5.56a.91.91 0 0 1 .65-.27Zm0-1a1.91 1.91 0 0 0-1.35.56L4.17 7.12c-.24.24-.4.53-.5.85l-.65 2.4a.5.5 0 0 0 .61.61l2.4-.65c.32-.1.62-.26.85-.5l5.56-5.56A1.92 1.92 0 0 0 11.08 1Z",
    fill: primaryFill
  }));
};

exports.ColorLine16Regular = wrapIcon_1.default( /*#__PURE__*/ColorLine16RegularIcon, 'ColorLine16Regular');

const ColorLine20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15.24 2.54a2.26 2.26 0 0 0-3.07.13L6.21 8.66l-.11.12a1.5 1.5 0 0 0-.28.56l-.8 3.08-.01.08a.5.5 0 0 0 .62.53l3.08-.76.16-.05c.2-.08.4-.2.55-.35l5.96-6 .12-.12c.72-.85.72-2.1 0-2.95l-.13-.14-.13-.12ZM4.1 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.3l-.57.57a2.5 2.5 0 0 1-.92.59H9.2l-.21.07-3.11.77A1.5 1.5 0 0 1 4 12.4v-.04l.04-.16.05-.21Z",
    fill: primaryFill
  }));
};

exports.ColorLine20Filled = wrapIcon_1.default( /*#__PURE__*/ColorLine20FilledIcon, 'ColorLine20Filled');

const ColorLine20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.1 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.3l-.57.57a2.5 2.5 0 0 1-.57.43H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.08A1.48 1.48 0 0 1 4 12.4v-.04l.04-.17.05-.2Zm8.07-9.38a2.26 2.26 0 0 1 3.07-.13l.13.12.13.14c.72.85.72 2.1 0 2.95l-.12.13-5.96 6a1.5 1.5 0 0 1-.55.34l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.2.15-.4.28-.57l.1-.11 5.97-6Zm2.5.7a1.26 1.26 0 0 0-1.69-.09l-.1.1-5.97 6a.5.5 0 0 0-.1.14l-.03.08-.58 2.26 2.27-.56a.5.5 0 0 0 .12-.04l.05-.03.07-.06 5.96-6c.5-.49.5-1.3 0-1.8Z",
    fill: primaryFill
  }));
};

exports.ColorLine20Regular = wrapIcon_1.default( /*#__PURE__*/ColorLine20RegularIcon, 'ColorLine20Regular');

const ColorLine24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.38 14H4a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6.45l-1.32 1.31c-.38.38-.85.66-1.36.82l-4.3 1.29a2 2 0 0 1-2.47-2.53l.28-.89ZM18.65 2.94a3.22 3.22 0 0 1 0 4.56l-7.13 7.1c-.26.27-.58.46-.94.57l-4.3 1.29a1 1 0 0 1-1.23-1.27l1.36-4.22c.1-.35.3-.65.55-.9l7.13-7.13a3.22 3.22 0 0 1 4.56 0Z",
    fill: primaryFill
  }));
};

exports.ColorLine24Filled = wrapIcon_1.default( /*#__PURE__*/ColorLine24FilledIcon, 'ColorLine24Filled');

const ColorLine24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.38 14A2.5 2.5 0 0 0 2 16.5v3A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-5.95l-1.32 1.31-.2.19h7.47a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3c0-.37.2-.7.5-.87a2 2 0 0 1 .1-.74l.28-.89ZM18.65 2.94a3.22 3.22 0 0 1 0 4.56l-7.13 7.1c-.26.27-.58.46-.94.57l-4.3 1.29a1 1 0 0 1-1.23-1.27l1.36-4.22c.1-.35.3-.65.55-.9l7.13-7.13a3.22 3.22 0 0 1 4.56 0ZM15.15 4l-7.13 7.12a.75.75 0 0 0-.18.3l-1.07 3.33 3.38-1.02c.12-.03.23-.1.31-.19l7.13-7.1A1.72 1.72 0 1 0 15.15 4Z",
    fill: primaryFill
  }));
};

exports.ColorLine24Regular = wrapIcon_1.default( /*#__PURE__*/ColorLine24RegularIcon, 'ColorLine24Regular');

const ColorLineAccent16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 11.41a1.75 1.75 0 0 0 1.97.78l2.4-.66c.38-.1.75-.29 1.07-.53h6.06c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 0-.09Z",
    fill: primaryFill
  }));
};

exports.ColorLineAccent16Regular = wrapIcon_1.default( /*#__PURE__*/ColorLineAccent16RegularIcon, 'ColorLineAccent16Regular');

const ColorLineAccent20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4.1 13a1.5 1.5 0 0 0 1.77.95l3.1-.76.22-.07h.02l.26-.12H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.1Z",
    fill: primaryFill
  }));
};

exports.ColorLineAccent20Regular = wrapIcon_1.default( /*#__PURE__*/ColorLineAccent20RegularIcon, 'ColorLineAccent20Regular');

const ColorLineAccent24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 15.63a2 2 0 0 0 2.57 1.79l4.3-1.3c.42-.12.82-.33 1.16-.62h7.47a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3c0-.37.2-.7.5-.87Z",
    fill: primaryFill
  }));
};

exports.ColorLineAccent24Regular = wrapIcon_1.default( /*#__PURE__*/ColorLineAccent24RegularIcon, 'ColorLineAccent24Regular');

const Column20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 17a.5.5 0 1 0 0-1H16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.5ZM7 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5ZM4 17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 1 1 1v10.1a1 1 0 0 1-1 .9h-.5a.5.5 0 1 0 0 1H4Z",
    fill: primaryFill
  }));
};

exports.Column20Filled = wrapIcon_1.default( /*#__PURE__*/Column20FilledIcon, 'Column20Filled');

const Column20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M16.5 17a.5.5 0 1 0 0-1H16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.5ZM7 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5Zm5 10V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Zm-8 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 1 1 1v10.1a1 1 0 0 1-1 .9h-.5a.5.5 0 1 0 0 1H4Z",
    fill: primaryFill
  }));
};

exports.Column20Regular = wrapIcon_1.default( /*#__PURE__*/Column20RegularIcon, 'Column20Regular');

const ColumnArrowRight20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M2 4c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v3.75H5.75a1.75 1.75 0 1 0 0 3.5H7V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm13-2a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1ZM8.97 6.97c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5.5a.75.75 0 0 1 0-1.5h4.19l-.72-.72a.75.75 0 0 1 0-1.06Z",
    fill: primaryFill
  }));
};

exports.ColumnArrowRight20Filled = wrapIcon_1.default( /*#__PURE__*/ColumnArrowRight20FilledIcon, 'ColumnArrowRight20Filled');

const ColumnArrowRight20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3h1a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-4H6v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm11-1a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1Zm1 1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1ZM9.15 7.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L10.29 10H5.5a.5.5 0 0 1 0-1h4.8L9.14 7.85a.5.5 0 0 1 0-.7Z",
    fill: primaryFill
  }));
};

exports.ColumnArrowRight20Regular = wrapIcon_1.default( /*#__PURE__*/ColumnArrowRight20RegularIcon, 'ColumnArrowRight20Regular');

const ColumnDoubleCompare20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm1 4H2v-.96h6V7Zm9-4h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm1 10h-6v-3h6v3Z",
    fill: primaryFill
  }));
};

exports.ColumnDoubleCompare20Filled = wrapIcon_1.default( /*#__PURE__*/ColumnDoubleCompare20FilledIcon, 'ColumnDoubleCompare20Filled');

const ColumnDoubleCompare20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M7 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM3 4h4a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1Zm4 12H3a1 1 0 0 1-1-1V7h6v8a1 1 0 0 1-1 1ZM17 3h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-4 1h4a1 1 0 0 1 1 1v5h-6V5a1 1 0 0 1 1-1Zm4 12h-4a1 1 0 0 1-1-1v-2h6v2a1 1 0 0 1-1 1Z",
    fill: primaryFill
  }));
};

exports.ColumnDoubleCompare20Regular = wrapIcon_1.default( /*#__PURE__*/ColumnDoubleCompare20RegularIcon, 'ColumnDoubleCompare20Regular');

const ColumnEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.22l.21-.84a3.2 3.2 0 0 1 .84-1.49L13 11.94V5a2 2 0 0 0-2-2H9Zm6 2v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ColumnEdit20Filled = wrapIcon_1.default( /*#__PURE__*/ColumnEdit20FilledIcon, 'ColumnEdit20Filled');

const ColumnEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.47l-.04.16-.21.84H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v6.94l-1 1V5a1 1 0 0 0-1-1H9Zm6 1v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ColumnEdit20Regular = wrapIcon_1.default( /*#__PURE__*/ColumnEdit20RegularIcon, 'ColumnEdit20Regular');

const ColumnEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.25 5.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1 0-1.5H4a2.75 2.75 0 0 1 2.75 2.75v12.5A2.75 2.75 0 0 1 4 21h-.75a.75.75 0 0 1 0-1.5H4c.69 0 1.25-.56 1.25-1.25V5.75ZM10.75 3A2.75 2.75 0 0 0 8 5.75v12.5A2.75 2.75 0 0 0 10.75 21h.42l.35-1.42c.16-.65.5-1.24.97-1.72l3.51-3.5V5.75A2.75 2.75 0 0 0 13.25 3h-2.5ZM19 5.75v5.73c-.22.14-.42.3-.6.48l-.9.9V5.75A2.75 2.75 0 0 1 20.25 3H21a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25Zm.1 6.92-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ColumnEdit24Filled = wrapIcon_1.default( /*#__PURE__*/ColumnEdit24FilledIcon, 'ColumnEdit24Filled');

const ColumnEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.25 5.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1 0-1.5H4a2.75 2.75 0 0 1 2.75 2.75v12.5A2.75 2.75 0 0 1 4 21h-.75a.75.75 0 0 1 0-1.5H4c.69 0 1.25-.56 1.25-1.25V5.75Zm5.5-1.25c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.8l-.03.08-.35 1.42h-.42A2.75 2.75 0 0 1 8 18.25V5.75A2.75 2.75 0 0 1 10.75 3h2.5A2.75 2.75 0 0 1 16 5.75v8.6l-1.5 1.5V5.76c0-.69-.56-1.25-1.25-1.25h-2.5ZM19 5.75v5.73c-.22.14-.42.3-.6.48l-.9.9V5.75A2.75 2.75 0 0 1 20.25 3H21a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25Zm.1 6.92-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ColumnEdit24Regular = wrapIcon_1.default( /*#__PURE__*/ColumnEdit24RegularIcon, 'ColumnEdit24Regular');

const ColumnTriple20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm5 0a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2Z",
    fill: primaryFill
  }));
};

exports.ColumnTriple20Filled = wrapIcon_1.default( /*#__PURE__*/ColumnTriple20FilledIcon, 'ColumnTriple20Filled');

const ColumnTriple20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm3 0H4v12h2V4Zm2 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4Zm3 0H9v12h2V4Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2Zm0 1h2v12h-2V4Z",
    fill: primaryFill
  }));
};

exports.ColumnTriple20Regular = wrapIcon_1.default( /*#__PURE__*/ColumnTriple20RegularIcon, 'ColumnTriple20Regular');

const ColumnTriple24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65Zm14.02 0c.97 0 1.75.78 1.75 1.75v14.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.96 0-1.75-.78-1.75-1.75V4.75c0-.97.79-1.75 1.75-1.75h2.5Zm-7.02 0c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.97.78-1.75 1.75-1.75h2.5Z",
    fill: primaryFill
  }));
};

exports.ColumnTriple24Filled = wrapIcon_1.default( /*#__PURE__*/ColumnTriple24FilledIcon, 'ColumnTriple24Filled');

const ColumnTriple24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65Zm14.02 0c.97 0 1.75.78 1.75 1.75v14.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.96 0-1.75-.78-1.75-1.75V4.75c0-.97.79-1.75 1.75-1.75h2.5Zm-7.02 0c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.97.78-1.75 1.75-1.75h2.5Zm-7 1.5H3.68a.25.25 0 0 0-.2.25v14.5c0 .14.12.25.26.25h2.5c.14 0 .25-.11.25-.25V4.75a.25.25 0 0 0-.25-.25Zm14.02 0h-2.5a.25.25 0 0 0-.25.25v14.5c0 .14.12.25.25.25h2.5c.14 0 .25-.11.25-.25V4.75a.25.25 0 0 0-.25-.25Zm-7.02 0h-2.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25V4.75a.25.25 0 0 0-.25-.25Z",
    fill: primaryFill
  }));
};

exports.ColumnTriple24Regular = wrapIcon_1.default( /*#__PURE__*/ColumnTriple24RegularIcon, 'ColumnTriple24Regular');

const ColumnTripleEdit20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm5 0a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h.22l.21-.84a3.2 3.2 0 0 1 .84-1.49L12 12.94V4a1 1 0 0 0-1-1H9Zm8 1v5c-.69.03-1.37.31-1.9.84l-2.1 2.1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-6.02 11.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ColumnTripleEdit20Filled = wrapIcon_1.default( /*#__PURE__*/ColumnTripleEdit20FilledIcon, 'ColumnTripleEdit20Filled');

const ColumnTripleEdit20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm3 0H4v12h2V4Zm2 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.94l-1 1V4H9v12h.47l-.04.16-.21.84H9a1 1 0 0 1-1-1V4Zm9 0v5c-.34.02-.68.1-1 .23V4h-2v6.94l-1 1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-6.02 11.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    fill: primaryFill
  }));
};

exports.ColumnTripleEdit20Regular = wrapIcon_1.default( /*#__PURE__*/ColumnTripleEdit20RegularIcon, 'ColumnTripleEdit20Regular');

const ColumnTripleEdit24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65Zm14.02 0c.97 0 1.75.78 1.75 1.75v6.52a3.29 3.29 0 0 0-3.62.7l-2.38 2.37V4.75c0-.97.79-1.75 1.75-1.75h2.5Zm-1.61 18L22 17.64v1.61c0 .97-.78 1.75-1.75 1.75h-1.61Zm-6.16-3.14 2.5-2.5V4.76c0-.97-.79-1.75-1.75-1.75h-2.5c-.97 0-1.75.78-1.75 1.75v14.5c0 .97.78 1.75 1.75 1.75h.43l.35-1.42c.16-.65.5-1.24.97-1.72Zm6.61-5.19-5.9 5.9c-.35.35-.59.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.48-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ColumnTripleEdit24Filled = wrapIcon_1.default( /*#__PURE__*/ColumnTripleEdit24FilledIcon, 'ColumnTripleEdit24Filled');

const ColumnTripleEdit24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65Zm0 1.5H3.68a.25.25 0 0 0-.2.25v14.5c0 .14.12.25.26.25h2.5c.14 0 .25-.11.25-.25V4.75a.25.25 0 0 0-.25-.25ZM20.26 3c.97 0 1.75.78 1.75 1.75v6.52c-.47-.2-.99-.3-1.5-.26V4.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v8.1l-1.5 1.5v-9.6c0-.97.79-1.75 1.75-1.75h2.5Zm.25 16.14 1.5-1.5v1.61c0 .97-.78 1.75-1.75 1.75h-1.61l1.5-1.5h.11c.14 0 .25-.11.25-.25v-.11ZM15 4.75v10.62l-1.5 1.5V4.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25h.8l-.02.08-.35 1.42h-.43c-.97 0-1.75-.78-1.75-1.75V4.75c0-.97.78-1.75 1.75-1.75h2.5c.96 0 1.75.78 1.75 1.75Zm4.11 7.92-5.9 5.9c-.35.35-.59.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.48-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z",
    fill: primaryFill
  }));
};

exports.ColumnTripleEdit24Regular = wrapIcon_1.default( /*#__PURE__*/ColumnTripleEdit24RegularIcon, 'ColumnTripleEdit24Regular');

const Comma20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 7.5a3.5 3.5 0 1 0-1.88 3.1c-.23.87-.56 1.6-.95 2.18-.8 1.16-1.83 1.72-2.92 1.72a.75.75 0 0 0 0 1.5c1.67 0 3.14-.88 4.16-2.38 1-1.49 1.59-3.58 1.59-6.12Z",
    fill: primaryFill
  }));
};

exports.Comma20Filled = wrapIcon_1.default( /*#__PURE__*/Comma20FilledIcon, 'Comma20Filled');

const Comma20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M13.5 7.5a3.5 3.5 0 1 0-1.28 2.7 7.78 7.78 0 0 1-1.24 2.89A4.26 4.26 0 0 1 7.5 15a.5.5 0 0 0 0 1c1.7 0 3.22-.84 4.3-2.32 1.07-1.48 1.7-3.6 1.7-6.18Z",
    fill: primaryFill
  }));
};

exports.Comma20Regular = wrapIcon_1.default( /*#__PURE__*/Comma20RegularIcon, 'Comma20Regular');

const Comma24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.2 12.34a4 4 0 1 1 1.77-3.87c.36 1.8.5 3.95-.21 5.9-.77 2.09-2.47 3.8-5.5 4.6a1 1 0 0 1-.51-1.94c2.46-.64 3.6-1.93 4.13-3.35.16-.43.26-.88.32-1.34Z",
    fill: primaryFill
  }));
};

exports.Comma24Filled = wrapIcon_1.default( /*#__PURE__*/Comma24FilledIcon, 'Comma24Filled');

const Comma24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M14.62 12.02a4 4 0 1 1 1.35-3.48c.36 1.81.36 3.97-.46 5.9-.86 2.04-2.6 3.76-5.57 4.54a.75.75 0 1 1-.38-1.46c2.53-.66 3.9-2.06 4.57-3.66.24-.59.4-1.2.49-1.84Z",
    fill: primaryFill
  }));
};

exports.Comma24Regular = wrapIcon_1.default( /*#__PURE__*/Comma24RegularIcon, 'Comma24Regular');

const Comment12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2C2.67 2 2 2.67 2 3.5v4C2 8.33 2.67 9 3.5 9H4v1a.5.5 0 0 0 .76.43L7.14 9H8.5c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-5Z",
    fill: primaryFill
  }));
};

exports.Comment12Filled = wrapIcon_1.default( /*#__PURE__*/Comment12FilledIcon, 'Comment12Filled');

const Comment12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 3a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h1c.28 0 .5.22.5.5v.62l1.74-1.05A.5.5 0 0 1 7 8h1.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5ZM2 3.5C2 2.67 2.67 2 3.5 2h5c.83 0 1.5.67 1.5 1.5v4C10 8.33 9.33 9 8.5 9H7.14l-2.38 1.43A.5.5 0 0 1 4 10V9h-.5A1.5 1.5 0 0 1 2 7.5v-4Z",
    fill: primaryFill
  }));
};

exports.Comment12Regular = wrapIcon_1.default( /*#__PURE__*/Comment12RegularIcon, 'Comment12Regular');

const Comment16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-5A2.5 2.5 0 0 0 12.5 2h-9Z",
    fill: primaryFill
  }));
};

exports.Comment16Filled = wrapIcon_1.default( /*#__PURE__*/Comment16FilledIcon, 'Comment16Filled');

const Comment16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5ZM3.5 3C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H5v2.9L8.31 11h4.19c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9Z",
    fill: primaryFill
  }));
};

exports.Comment16Regular = wrapIcon_1.default( /*#__PURE__*/Comment16RegularIcon, 'Comment16Regular');

const Comment20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h10.8C16.84 3 18 4.15 18 5.57v6.7a2.58 2.58 0 0 1-2.6 2.57h-4.59L6.8 17.8Zm-.6-.8Z",
    fill: primaryFill
  }));
};

exports.Comment20Filled = wrapIcon_1.default( /*#__PURE__*/Comment20FilledIcon, 'Comment20Filled');

const Comment20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M10.48 13.84h4.92c.9 0 1.6-.71 1.6-1.56V5.57C17 4.7 16.3 4 15.4 4H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16ZM6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h10.8C16.84 3 18 4.15 18 5.57v6.7a2.58 2.58 0 0 1-2.6 2.57h-4.59L6.8 17.8Z",
    fill: primaryFill
  }));
};

exports.Comment20Regular = wrapIcon_1.default( /*#__PURE__*/Comment20RegularIcon, 'Comment20Regular');

const Comment24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.25 3A3.25 3.25 0 0 0 2 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 0 0 2 1L13 18h5.75c1.8 0 3.25-1.46 3.25-3.25v-8.5C22 4.45 20.54 3 18.75 3H5.25Z",
    fill: primaryFill
  }));
};

exports.Comment24Filled = wrapIcon_1.default( /*#__PURE__*/Comment24FilledIcon, 'Comment24Filled');

const Comment24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.25 18A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25v8.5c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75Zm7.26-1.5h6.24c.97 0 1.75-.78 1.75-1.75v-8.5c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75Z",
    fill: primaryFill
  }));
};

exports.Comment24Regular = wrapIcon_1.default( /*#__PURE__*/Comment24RegularIcon, 'Comment24Regular');

const Comment28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.75 3A3.75 3.75 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.3a1.75 1.75 0 0 0 2.77 1.41L16.31 21h5.94A3.75 3.75 0 0 0 26 17.25V6.75A3.75 3.75 0 0 0 22.25 3H5.75Z",
    fill: primaryFill
  }));
};

exports.Comment28Filled = wrapIcon_1.default( /*#__PURE__*/Comment28FilledIcon, 'Comment28Filled');

const Comment28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M5.75 4.5c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H5.75ZM2 6.75A3.75 3.75 0 0 1 5.75 3h16.5A3.75 3.75 0 0 1 26 6.75v10.5A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75Z",
    fill: primaryFill
  }));
};

exports.Comment28Regular = wrapIcon_1.default( /*#__PURE__*/Comment28RegularIcon, 'Comment28Regular');

const Comment48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M4 13.25C4 9.25 7.25 6 11.25 6h25.5c4 0 7.25 3.25 7.25 7.25v15.5c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5Z",
    fill: primaryFill
  }));
};

exports.Comment48Filled = wrapIcon_1.default( /*#__PURE__*/Comment48FilledIcon, 'Comment48Filled');

const Comment48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M11.25 8.5a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 0 0 4.75-4.75v-15.5a4.75 4.75 0 0 0-4.75-4.75h-25.5ZM4 13.25C4 9.25 7.25 6 11.25 6h25.5c4 0 7.25 3.25 7.25 7.25v15.5c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5Z",
    fill: primaryFill
  }));
};

exports.Comment48Regular = wrapIcon_1.default( /*#__PURE__*/Comment48RegularIcon, 'Comment48Regular');

const CommentAdd12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3-2a.5.5 0 0 0-1 0V3H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V4h1.5a.5.5 0 0 0 0-1H9V1.5ZM8.5 8c.92 0 1.77-.28 2.48-.75A2 2 0 0 1 9 9H6.65l-2.87 1.92A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 0 0 8.5 8Z",
    fill: primaryFill
  }));
};

exports.CommentAdd12Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd12FilledIcon, 'CommentAdd12Filled');

const CommentAdd12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3-2a.5.5 0 0 0-1 0V3H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V4h1.5a.5.5 0 0 0 0-1H9V1.5ZM3 2h1.26c.12-.36.3-.7.5-1H3a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 .78.42L6.65 9H9a2 2 0 0 0 1.98-1.75c-.46.31-.99.54-1.55.65A1 1 0 0 1 9 8H6.5a.5.5 0 0 0-.28.08L4 9.57V8.5a.5.5 0 0 0-.5-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.CommentAdd12Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd12RegularIcon, 'CommentAdd12Regular');

const CommentAdd16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11V3.5Zm-.5 7.5A5.5 5.5 0 0 0 15 8.66v.84a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.76a5.5 5.5 0 0 0 4.24 9Z",
    fill: primaryFill
  }));
};

exports.CommentAdd16Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd16FilledIcon, 'CommentAdd16Filled');

const CommentAdd16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11V3.5ZM3.5 3h2.1c.18-.36.4-.7.66-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-.84c-.29.41-.63.78-1.02 1.1A1.5 1.5 0 0 1 12.5 11H8.31L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3Z",
    fill: primaryFill
  }));
};

exports.CommentAdd16Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd16RegularIcon, 'CommentAdd16Regular');

const CommentAdd20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5a5.5 5.5 0 0 0 4.9 8Z",
    fill: primaryFill
  }));
};

exports.CommentAdd20Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd20FilledIcon, 'CommentAdd20Filled');

const CommentAdd20RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm2 8.78V10.4c.36-.18.7-.4 1-.66v2.54a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5c-.16.32-.3.65-.4 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z",
    fill: primaryFill
  }));
};

exports.CommentAdd20Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd20RegularIcon, 'CommentAdd20Regular');

const CommentAdd24FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM18 7v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H18Zm-.5 6c1.75 0 3.33-.69 4.5-1.81v3.56c0 1.8-1.46 3.25-3.25 3.25H13l-5 3.75c-.82.62-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentAdd24Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd24FilledIcon, 'CommentAdd24Filled');

const CommentAdd24RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM18 7v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H18Zm2.5 7.75v-2.48a6.52 6.52 0 0 0 1.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75Z",
    fill: primaryFill
  }));
};

exports.CommentAdd24Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd24RegularIcon, 'CommentAdd24Regular');

const CommentAdd28FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H21V3.5ZM20.5 15c2.17 0 4.13-.92 5.5-2.4v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75a7.5 7.5 0 0 0 6 12Z",
    fill: primaryFill
  }));
};

exports.CommentAdd28Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd28FilledIcon, 'CommentAdd28Filled');

const CommentAdd28RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H21V3.5Zm3.5 13.75v-3.4A7.54 7.54 0 0 0 26 12.6v4.65A3.75 3.75 0 0 1 22.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75c-.35.46-.64.96-.88 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25Z",
    fill: primaryFill
  }));
};

exports.CommentAdd28Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd28RegularIcon, 'CommentAdd28Regular');

const CommentAdd48FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM36 6a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V6Zm-1 20c3.5 0 6.66-1.38 9-3.62v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8A13 13 0 0 0 35 26Z",
    fill: primaryFill
  }));
};

exports.CommentAdd48Filled = wrapIcon_1.default( /*#__PURE__*/CommentAdd48FilledIcon, 'CommentAdd48Filled');

const CommentAdd48RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M46 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM36 6a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V6Zm5.5 22.75v-4.49c.9-.52 1.75-1.16 2.5-1.88v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0 1 12 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8c-.5.78-.92 1.62-1.25 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 0 0 4.75-4.75Z",
    fill: primaryFill
  }));
};

exports.CommentAdd48Regular = wrapIcon_1.default( /*#__PURE__*/CommentAdd48RegularIcon, 'CommentAdd48Regular');

const CommentArrowLeft12FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM6.5 3a.5.5 0 0 0 0 1h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5A.5.5 0 0 0 11 3.5a.5.5 0 0 0-.15-.35l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6.5Zm2 5c.92 0 1.77-.28 2.48-.75A2 2 0 0 1 9 9H6.65l-2.87 1.92A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 0 0 8.5 8Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft12Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft12FilledIcon, 'CommentArrowLeft12Filled');

const CommentArrowLeft12RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M12 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM6.5 3a.5.5 0 0 0 0 1h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5A.5.5 0 0 0 11 3.5a.5.5 0 0 0-.15-.35l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6.5ZM3 2h1.26c.12-.36.3-.7.5-1H3a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 .78.42L6.65 9H9a2 2 0 0 0 1.98-1.75c-.46.31-.99.54-1.55.65A1 1 0 0 1 9 8H6.5a.5.5 0 0 0-.28.08L4 9.57V8.5a.5.5 0 0 0-.5-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft12Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft12RegularIcon, 'CommentArrowLeft12Regular');

const CommentArrowLeft16FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35A.5.5 0 0 0 13 5.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L11.29 5H8.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2ZM10.5 11A5.5 5.5 0 0 0 15 8.66v.84a2.5 2.5 0 0 1-2.5 2.5H8.69l-3.06 2.68A.98.98 0 0 1 4 13.94V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.76a5.5 5.5 0 0 0 4.24 9Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft16Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft16FilledIcon, 'CommentArrowLeft16Filled');

const CommentArrowLeft16RegularIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M15 5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.15.35-2 2a.5.5 0 0 1-.7-.7L11.29 6H8.5a.5.5 0 0 1 0-1h2.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35ZM3.5 3h2.1c.18-.36.4-.7.66-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0 0 15 9.5v-.84c-.29.41-.63.78-1.02 1.1A1.5 1.5 0 0 1 12.5 11H8.31L5 13.9V11H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft16Regular = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft16RegularIcon, 'CommentArrowLeft16Regular');

const CommentArrowLeft20FilledIcon = props => {
  const {
    fill: primaryFill = 'currentColor',
    className
  } = props;
  return React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }), React.createElement("path", {
    d: "M19 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM10.5 6a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L15.29 6H10.5Zm3 7c1.75 0 3.33-.69 4.5-1.81v1.09a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h3.42a6.5 6.5 0 0 0 5.48 10Z",
    fill: primaryFill
  }));
};

exports.CommentArrowLeft20Filled = wrapIcon_1.default( /*#__PURE__*/CommentArrowLeft20FilledIcon, 'CommentArrowLeft20Filled');