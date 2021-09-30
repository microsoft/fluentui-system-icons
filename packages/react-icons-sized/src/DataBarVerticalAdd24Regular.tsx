import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 4.75a2.75 2.75 0 10-5.5 0v14.5a2.75 2.75 0 003.67 2.6c-.37-.4-.68-.86-.94-1.35a1.25 1.25 0 01-1.23-1.25V4.75a1.25 1.25 0 012.5 0v8.06c.45-.43.95-.8 1.5-1.08V4.75z" fill={primaryFill} /><path d="M21.5 12.38V9.75a2.75 2.75 0 10-5.5 0v1.42c.48-.1.98-.17 1.5-.17V9.75a1.25 1.25 0 012.5 0v1.75a6.5 6.5 0 011.5.88z" fill={primaryFill} /><path d="M4.75 12a2.75 2.75 0 012.75 2.75v4.5a2.75 2.75 0 01-5.5 0v-4.5A2.75 2.75 0 014.75 12zm0 1.5c-.69 0-1.25.56-1.25 1.25v4.5a1.25 1.25 0 102.5 0v-4.5c0-.69-.56-1.25-1.25-1.25z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
}

const DataBarVerticalAdd24Regular = wrapIcon(rawSvg({}), 'DataBarVerticalAdd24Regular');
export default DataBarVerticalAdd24Regular;
      