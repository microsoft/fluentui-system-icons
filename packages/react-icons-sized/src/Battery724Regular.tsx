import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h12zm0 1.5H5c-.78 0-1.42.6-1.5 1.36V15c0 .78.6 1.42 1.36 1.5H17c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5H17zM6 9h7a1 1 0 011 .88V14a1 1 0 01-.88 1H6a1 1 0 01-1-.88V10a1 1 0 01.88-1H13 6z" fill={primaryFill} /></svg>;
}

const Battery724Regular = wrapIcon(rawSvg({}), 'Battery724Regular');
export default Battery724Regular;
      