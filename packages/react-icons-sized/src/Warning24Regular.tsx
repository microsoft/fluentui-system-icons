import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 2.78a2.25 2.25 0 012.98.74l.09.14 7.76 14A2.25 2.25 0 0119.9 21H4.24a2.25 2.25 0 01-2.04-3.19l.07-.14 7.76-14.01c.2-.37.51-.67.88-.88zm9.51 15.62L12.66 4.39a.75.75 0 00-1.26-.1l-.06.1-7.75 14a.75.75 0 00.56 1.11h15.6a.75.75 0 00.7-1.02l-.04-.08-7.75-14.01 7.75 14zm-8.4-2.4a1 1 0 11-.01 2 1 1 0 010-2zM12 8.5c.38 0 .69.28.74.65v.1l.01 4.5a.75.75 0 01-1.5.1v-4.6c0-.41.33-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Warning24Regular = wrapIcon(rawSvg({}), 'Warning24Regular');
export default Warning24Regular;
      