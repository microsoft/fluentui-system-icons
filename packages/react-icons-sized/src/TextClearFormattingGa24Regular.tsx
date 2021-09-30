import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3.25a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0V8H14a.75.75 0 000-1.5h-1.5V3.25zm-8.75.25a.75.75 0 100 1.5H8a6 6 0 01-4.47 5.03.75.75 0 00.44 1.44c4.39-1.32 5.72-5.15 5.53-7.29a.75.75 0 00-.75-.68h-5zM20 21.5h-3.02l5.45-5.45c.76-.76.76-2 0-2.76l-2.72-2.72c-.77-.76-2-.76-2.76 0l-6.38 6.38c-.76.76-.76 2 0 2.76l2.72 2.72c.34.34.77.52 1.21.56V23H20a.75.75 0 000-1.5zm-6.15-5.71l4.16-4.16a.45.45 0 01.64 0l2.72 2.73c.17.17.18.45 0 .63l-4.16 4.16-3.36-3.36zm-2.22 2.22l1.16-1.16 3.36 3.36-1.16 1.16a.45.45 0 01-.63 0l-2.73-2.73a.45.45 0 010-.63z" fill={primaryFill} /></svg>;
}

const TextClearFormattingGa24Regular = wrapIcon(rawSvg({}), 'TextClearFormattingGa24Regular');
export default TextClearFormattingGa24Regular;
      