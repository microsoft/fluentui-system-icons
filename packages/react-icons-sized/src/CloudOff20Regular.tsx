import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73H5.1A3.34 3.34 0 002 11.62 3.33 3.33 0 005.28 15h9.01l2.86 2.85a.5.5 0 00.7-.7l-15-15zM13.3 14h-8A2.33 2.33 0 013 11.62a2.33 2.33 0 012.28-2.37h.07a1 1 0 001-.9c.04-.38.11-.74.23-1.06L13.29 14zM17 11.62c0 .9-.48 1.68-1.18 2.08l.73.73a3.4 3.4 0 001.45-2.8 3.33 3.33 0 00-3.28-3.38h-.07C14.4 5.92 12.82 4 10 4c-1.2 0-2.2.35-2.94.94l.71.71A3.76 3.76 0 0110 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 001 .9h.07A2.33 2.33 0 0117 11.62z" fill={primaryFill} /></svg>;
}

const CloudOff20Regular = wrapIcon(rawSvg({}), 'CloudOff20Regular');
export default CloudOff20Regular;
      