import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.48 18.3c-.8.83-2.09.38-2.43-.6-.28-.8-.64-1.77-1-2.48C8 13.1 7.38 11.9 5.67 10.37c-.23-.2-.52-.36-.84-.49-1.13-.44-2.2-1.61-1.91-3l.35-1.77a2.5 2.5 0 011.8-1.92l5.6-1.53a4.5 4.5 0 015.6 3.54l.69 3.76A3 3 0 0114 12.5h-.89l.01.05c.08.41.18.97.24 1.58.07.62.1 1.29.05 1.92a3.68 3.68 0 01-.5 1.73c-.11.16-.27.35-.44.52z" fill={primaryFill} /></svg>;
}

const ThumbDislike20Filled = wrapIcon(rawSvg({}), 'ThumbDislike20Filled');
export default ThumbDislike20Filled;
      