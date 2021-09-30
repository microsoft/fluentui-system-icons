import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75zm-2.5 14a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zm7.4-9.37l.05.1.58 1.45c.33.83.24 1.77-.25 2.51l-.1.16-.16.2c-.23.31-.3.7-.2 1.08l.04.14.59 1.45a.75.75 0 01-1.35.65l-.05-.1-.58-1.45a2.75 2.75 0 01.25-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.14-.59-1.45a.75.75 0 011.3-.74l.05.09zm-16.5 0l.05.1.58 1.45c.33.83.24 1.77-.25 2.51l-.1.16-.16.2c-.23.31-.3.7-.2 1.08l.04.14.59 1.45a.75.75 0 01-1.35.65l-.05-.1-.58-1.45a2.75 2.75 0 01.25-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.14-.59-1.45a.75.75 0 011.3-.74l.05.09z" fill={primaryFill} /></svg>;
}

const PhoneVibrate24Regular = wrapIcon(rawSvg({}), 'PhoneVibrate24Regular');
export default PhoneVibrate24Regular;
      