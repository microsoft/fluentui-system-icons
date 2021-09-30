import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3.25a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0V8H14a.75.75 0 000-1.5h-1.5V3.25zm-8.75.25a.75.75 0 100 1.5H8a6 6 0 01-4.47 5.03.75.75 0 00.44 1.44c4.39-1.32 5.72-5.15 5.53-7.29a.75.75 0 00-.75-.68h-5zm14.52 16.71l-5.48-5.48 4.16-4.16a1.95 1.95 0 012.76 0l2.72 2.73c.76.76.76 2 0 2.75l-4.16 4.16zm-6.54-4.42l5.48 5.48-.23.23H20a.75.75 0 010 1.5h-5.5a1.94 1.94 0 01-1.2-.57l-2.73-2.72c-.76-.76-.76-2 0-2.76l1.16-1.16z" fill={primaryFill} /></svg>;
}

const TextClearFormattingGa24Filled = wrapIcon(rawSvg({}), 'TextClearFormattingGa24Filled');
export default TextClearFormattingGa24Filled;
      