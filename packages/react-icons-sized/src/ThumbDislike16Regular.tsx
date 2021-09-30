import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.58 10l.05.45a11 11 0 01-.02 2.68c-.07.44-.2.88-.44 1.23-.25.38-.64.64-1.17.64-.52 0-.83-.37-1.02-.7-.2-.31-.37-.75-.54-1.2l-.01-.03c-.55-1.4-1.3-3.31-3.3-4.65-.31-.2-.6-.36-.86-.46-.7-.29-1.32-1.06-1.16-1.94l.23-1.2a2 2 0 011.43-1.55l4.95-1.38a3.5 3.5 0 014.37 2.73l.46 2.42A2.5 2.5 0 0111.09 10h-.51zm1.53-5.2a2.5 2.5 0 00-3.13-1.94L4.03 4.23a1 1 0 00-.71.78l-.23 1.2c-.05.28.17.66.56.82.31.13.66.31 1.03.55 2.28 1.53 3.13 3.7 3.67 5.11l.01.02c.2.5.33.85.47 1.08A.73.73 0 009 14c.14 0 .25-.05.35-.2.12-.18.22-.46.28-.83a10.06 10.06 0 00-.08-3.12 12.2 12.2 0 00-.03-.2L9.5 9.6V9.6A.5.5 0 0110 9h1.09a1.5 1.5 0 001.47-1.78l-.45-2.42z" fill={primaryFill} /></svg>;
}

const ThumbDislike16Regular = wrapIcon(rawSvg({}), 'ThumbDislike16Regular');
export default ThumbDislike16Regular;
      