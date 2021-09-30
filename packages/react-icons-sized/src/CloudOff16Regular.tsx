import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.79 12.5l2.36 2.35a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l3.28 3.3c-.22.44-.35.92-.4 1.37C1.97 6.73 1 8.32 1 9.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h7.29zm-1-1H4.5c-1.15 0-1.74-.34-2.06-.7A1.96 1.96 0 012 9.5c0-.74.69-2 2.5-2A.5.5 0 005 7c0-.35.06-.73.2-1.1l5.6 5.6zm2.63-.56l-.2.16.72.71.14-.11A2.8 2.8 0 0015 9.5c0-.94-.47-1.7-1.13-2.22a3.86 3.86 0 00-1.9-.75 3.73 3.73 0 00-1.34-2.6 4.23 4.23 0 00-4.88-.3l.73.73A3.23 3.23 0 0110 4.7c.57.47 1 1.2 1 2.3 0 .28.22.5.5.5.65 0 1.29.21 1.76.57.46.36.74.85.74 1.43 0 .65-.2 1.12-.58 1.44z" fill={primaryFill} /></svg>;
}

const CloudOff16Regular = wrapIcon(rawSvg({}), 'CloudOff16Regular');
export default CloudOff16Regular;
      