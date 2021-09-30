import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 01-1.23.85 7.97 7.97 0 00-13.14 0 .75.75 0 11-1.23-.86 9.47 9.47 0 0114.5-1.34zM5.48 9.46a6.44 6.44 0 018.65-.43c-.52.1-1 .4-1.31.9a4.94 4.94 0 00-7.2 1.84.75.75 0 01-1.33-.67c.3-.61.7-1.16 1.19-1.65zm4.3 6.51l1.08-2.15a1.24 1.24 0 10-1.08 2.15zm1.7-3.4l.68-1.35a4.13 4.13 0 00-5.9 1.9.75.75 0 001.37.6c.13-.32.32-.6.54-.82.9-.9 2.3-1.01 3.31-.33zm2.12-2.02l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const WifiWarning20Filled = wrapIcon(rawSvg({}), 'WifiWarning20Filled');
export default WifiWarning20Filled;
      