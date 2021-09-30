import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm9.96-3.8a.5.5 0 10-.92-.4l-3.5 8a.5.5 0 10.92.4l3.5-8zm-5.1 1.45a.5.5 0 00-.71 0l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L5.21 10l1.64-1.65a.5.5 0 000-.7zm6.29.7L14.79 10l-1.64 1.65a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7z" fill={primaryFill} /></svg>;
}

const CodeCircle20Filled = wrapIcon(rawSvg({}), 'CodeCircle20Filled');
export default CodeCircle20Filled;
      