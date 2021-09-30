import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 7.88a.62.62 0 100 1.25.62.62 0 000-1.25zM17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-5.77a6.47 6.47 0 00-.37-7.51h.07l.07.01h4.6a.75.75 0 000-1.5H12.5V6.65a.75.75 0 00-1.5 0V12.8a6.48 6.48 0 00-8-.79V6.25C3 4.45 4.46 3 6.25 3h11.5zM6.5 14c-1.05 0-1.86.82-1.85 1.96a.5.5 0 001-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .23-.07.4-.31.68l-.1.11-.27.3c-.48.53-.67.89-.67 1.46a.5.5 0 001 0c0-.23.08-.4.32-.7l.1-.1.27-.3c.48-.53.66-.88.66-1.45 0-1.1-.82-1.95-1.85-1.95z" fill={primaryFill} /></svg>;
}

const ShiftsQuestionMark24Filled = wrapIcon(rawSvg({}), 'ShiftsQuestionMark24Filled');
export default ShiftsQuestionMark24Filled;
      