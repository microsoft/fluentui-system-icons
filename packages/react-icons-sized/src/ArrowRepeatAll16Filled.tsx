import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 5.51c.26 0 .48.13.62.33l.04.06a4 4 0 01-3.2 6.1H7.54l.73.72c.26.27.29.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2-2a.75.75 0 01-.08-.98l.08-.08 2-2a.75.75 0 011.13.97l-.07.09-.72.72H10a2.5 2.5 0 002.5-2.34V8c0-.5-.14-.96-.4-1.34a.75.75 0 01.64-1.14zm-5.03-3.3a.75.75 0 01.98-.06l.08.07 2 2 .07.08c.2.26.2.62.01.89l-.08.09-2 2-.08.07c-.26.2-.62.2-.89.01l-.09-.08-.07-.08a.75.75 0 01-.01-.88l.08-.1.72-.72H6a2.5 2.5 0 00-2.5 2.34V8c0 .42.1.82.29 1.17l.1.18c.07.11.11.24.11.38a.75.75 0 01-1.39.4A4 4 0 015.8 4L6 4h2.44l-.72-.72-.07-.09a.75.75 0 01.07-.97z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAll16Filled = wrapIcon(rawSvg({}), 'ArrowRepeatAll16Filled');
export default ArrowRepeatAll16Filled;
      