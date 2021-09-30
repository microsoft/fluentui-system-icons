import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .7.43 1.35 1.1 1.62l7.5 3.04.4.14V20.04l-7.34-2.98a.25.25 0 01-.16-.23V7.75l7.75 3.01v4.65a2.5 2.5 0 011.5-1.3v-3.35l7.75-2.99v3.78c.89.45 1.5 1.37 1.5 2.44V7.17c0-.7-.43-1.35-1.1-1.62l-7.5-3.04zm-2.25 1.4a2.25 2.25 0 011.7 0l6.59 2.66-2.67 1.04-7.53-2.93 1.91-.78zM7.21 5.5l7.48 2.9L12 9.46 4.6 6.56 7.21 5.5zM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const BoxToolbox24Regular = wrapIcon(rawSvg({}), 'BoxToolbox24Regular');
export default BoxToolbox24Regular;
      