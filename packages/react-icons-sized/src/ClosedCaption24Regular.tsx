import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h13.5zm0 1.5H5.11c-.9.08-1.61.83-1.61 1.75v9.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75zM5.5 12c0-3.15 2.71-4.78 5.12-3.4a.75.75 0 01-.74 1.3C8.48 9.1 7 10 7 12s1.48 2.9 2.88 2.1a.75.75 0 01.74 1.3c-2.4 1.37-5.12-.26-5.12-3.4zm7.5 0c0-3.15 2.71-4.78 5.12-3.4a.75.75 0 01-.74 1.3c-1.4-.8-2.88.1-2.88 2.1s1.48 2.9 2.88 2.1a.75.75 0 01.74 1.3C15.72 16.78 13 15.15 13 12z" fill={primaryFill} /></svg>;
}

const ClosedCaption24Regular = wrapIcon(rawSvg({}), 'ClosedCaption24Regular');
export default ClosedCaption24Regular;
      