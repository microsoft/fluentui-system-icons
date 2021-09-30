import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M38.2 39.96l3.67 3.67a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l2.79 2.8A6.5 6.5 0 004 14.5v19a6.5 6.5 0 006.5 6.5h27c.23 0 .47-.01.7-.04zm-2.47-2.46H10.5a4 4 0 01-4-4v-19a4 4 0 012.52-3.72l5.75 5.76c-.26.13-.51.27-.75.44C12.5 18.08 11 20.12 11 24c0 3.84 1.38 5.93 3.06 7.04a6.23 6.23 0 004.03.93 5.1 5.1 0 003.68-2 1.25 1.25 0 00-2.04-1.45c-.36.51-1.03.87-1.9.97-.87.09-1.76-.11-2.39-.53-.86-.57-1.94-1.8-1.94-4.96 0-3.12 1.14-4.38 1.98-4.98.37-.27.8-.44 1.26-.52l19 19zm5.77-4c0 .77-.22 1.49-.6 2.1l1.8 1.8a6.47 6.47 0 001.3-3.9v-19A6.5 6.5 0 0037.5 8H13.3l2.5 2.5h21.7a4 4 0 014 4v19zm-7.22-4.53l1.78 1.78c.26-.22.5-.48.7-.77a1.25 1.25 0 00-2.03-1.46c-.12.17-.27.32-.45.45zm-7.93-7.93l2.18 2.18c.17-2.56 1.18-3.66 1.95-4.2 1.34-.96 3.4-.64 4.21.64a1.25 1.25 0 002.12-1.32c-1.7-2.72-5.48-3-7.79-1.36a6.94 6.94 0 00-2.67 4.06z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff48Regular = wrapIcon(rawSvg({}), 'ClosedCaptionOff48Regular');
export default ClosedCaptionOff48Regular;
      