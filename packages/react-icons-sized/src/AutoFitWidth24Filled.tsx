import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 18a1 1 0 102 0V6a1 1 0 00-2 0v12z" fill={primaryFill} /><path d="M19 18a1 1 0 102 0V6a1 1 0 10-2 0v12z" fill={primaryFill} /><path d="M13.79 13.8l-.09.1a1 1 0 001.5 1.3l2.36-2.34c.27-.18.44-.5.44-.86s-.17-.68-.44-.86L15.2 8.78l-.1-.08a1 1 0 00-1.3.1h-.01l-.09.1a1 1 0 00.1 1.3l.79.8H9.4l.8-.8.1-.11a1 1 0 000-1.19h-.01l-.1-.1-.1-.1-.02-.01a1 1 0 00-1.17 0l-.01.01-.1.09-2.36 2.35-.07.05c-.23.2-.37.49-.37.81 0 .36.17.68.44.86l2.36 2.36.1.08a1 1 0 001.4-1.4l-.09-.1-.8-.8h5.18l-.8.8z" fill={primaryFill} /></svg>;
}

const AutoFitWidth24Filled = wrapIcon(rawSvg({}), 'AutoFitWidth24Filled');
export default AutoFitWidth24Filled;
      