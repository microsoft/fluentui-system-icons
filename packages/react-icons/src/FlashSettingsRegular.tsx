import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.95 0 1.4 1.14.77 1.81l-.25.25a5.54 5.54 0 00-1.37-.03l.9-.91a.06.06 0 00.01-.03v-.05a.08.08 0 00-.03-.03L14.77 8H11.5a.5.5 0 01-.47-.67l1.5-4.25a.06.06 0 00-.07-.08H7.21a.06.06 0 00-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 01.49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 2.88-2.95a5.57 5.57 0 00.05 1.38l-2.21 2.26c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zm4.3 9.95l.36.35a2 2 0 010 2.86l-.36.35c.13.31.3.6.49.87l.4-.11a2 2 0 012.51 1.45l.12.48a4.26 4.26 0 00.96 0l.12-.48a2 2 0 012.52-1.45l.4.11c.18-.27.35-.56.47-.87l-.35-.35a2 2 0 010-2.86l.35-.35c-.12-.31-.29-.6-.48-.87l-.4.11a2 2 0 01-2.51-1.45l-.12-.48a4.26 4.26 0 00-.96 0l-.12.48a2 2 0 01-2.52 1.45l-.4-.11c-.18.27-.35.56-.48.87zm4 2.78a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const FlashSettingsRegular = wrapIcon(rawSvg({}), 'FlashSettingsRegular');
export default FlashSettingsRegular;
      