import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.57 24.99l4.72 4.72a1 1 0 001.42-1.42l-26-26a1 1 0 00-1.42 1.42l6.58 6.57c-.44.9-.7 1.86-.81 2.77C3.93 13.47 2 16.65 2 19a5.9 5.9 0 001.37 3.9C4.5 24.19 6.3 25 9 25h14l.57-.01zM21.6 23H9c-2.3 0-3.48-.68-4.12-1.4A3.91 3.91 0 014 19c0-1.47 1.38-4 5-4a1 1 0 001-1c0-.7.13-1.46.4-2.2L21.58 23zm5.25-1.11c-.24.2-.52.4-.86.55l1.47 1.48A5.61 5.61 0 0030 19c0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 00-3.78-1.5 7.46 7.46 0 00-2.7-5.2A8.46 8.46 0 0016 6c-2.04 0-3.67.6-4.92 1.55l1.44 1.43C13.39 8.38 14.53 8 16 8c1.3 0 2.82.44 4 1.4 1.13.93 2 2.4 2 4.6a1 1 0 001 1c1.3 0 2.58.42 3.51 1.15A3.55 3.55 0 0128 19c0 1.3-.42 2.25-1.16 2.89z" fill={primaryFill} /></svg>;
}

const CloudOff32Regular = wrapIcon(rawSvg({}), 'CloudOff32Regular');
export default CloudOff32Regular;
      