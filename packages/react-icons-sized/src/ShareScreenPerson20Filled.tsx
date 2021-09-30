import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h5.03a4.88 4.88 0 01-.03-.5 2.5 2.5 0 012.5-2.5h.26A3 3 0 1118 11V7a3 3 0 00-3-3H5zm12 7a2 2 0 10-4 0 2 2 0 004 0zm-6 4.5a3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPerson20Filled = wrapIcon(rawSvg({}), 'ShareScreenPerson20Filled');
export default ShareScreenPerson20Filled;
      