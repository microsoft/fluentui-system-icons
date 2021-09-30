import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 12a2 2 0 100-4 2 2 0 000 4zM8 2.5a.5.5 0 00-1 0V4h-.5A2.5 2.5 0 004 6.5V7H2.5a.5.5 0 000 1H4v1.5H2.5a.5.5 0 000 1H4V12H2.5a.5.5 0 000 1H4v.5A2.5 2.5 0 006.5 16H7v1.5a.5.5 0 001 0V16h1.5v1.5a.5.5 0 001 0V16H12v1.5a.5.5 0 001 0V16h.5a2.5 2.5 0 002.5-2.5V13h1.5a.5.5 0 000-1H16v-1.5h1.5a.5.5 0 000-1H16V8h1.5a.5.5 0 000-1H16v-.5A2.5 2.5 0 0013.5 4H13V2.5a.5.5 0 00-1 0V4h-1.5V2.5a.5.5 0 00-1 0V4H8V2.5zm5 7.5a3 3 0 11-6 0 3 3 0 016 0z" fill={primaryFill} /></svg>;
}

const DeveloperBoardFilled = wrapIcon(rawSvg({}), 'DeveloperBoardFilled');
export default DeveloperBoardFilled;
      