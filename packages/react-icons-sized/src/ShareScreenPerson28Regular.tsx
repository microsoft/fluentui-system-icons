import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h16.5A3.75 3.75 0 0126 7.75V16h-.5a4 4 0 00-1-2.64V7.75c0-1.24-1-2.25-2.25-2.25H5.75c-1.24 0-2.25 1-2.25 2.25v12.5c0 1.24 1.01 2.25 2.25 2.25H15c0 .53.06 1.03.19 1.5H5.75A3.75 3.75 0 012 20.25V7.75zM21.5 19a3 3 0 100-6 3 3 0 000 6zm0 8c3.04 0 5.5-1.46 5.5-4.5v-.25c0-.97-.78-1.75-1.75-1.75h-7.5c-.97 0-1.75.78-1.75 1.75v.25c0 3.04 2.46 4.5 5.5 4.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPerson28Regular = wrapIcon(rawSvg({}), 'ShareScreenPerson28Regular');
export default ShareScreenPerson28Regular;
      