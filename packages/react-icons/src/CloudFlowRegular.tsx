import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 9.76a3 3 0 00-1.04-.6 2.3 2.3 0 00-2.24-1.91h-.07a1 1 0 01-1-.9C13.45 4.32 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 9.62 2.33 2.33 0 005.28 12h5.94a2.5 2.5 0 00-.37.7l-.1.3H5.28A3.33 3.33 0 012 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2zm6.93 8.23A2.01 2.01 0 0118 12a2 2 0 01-3.73 1h-1.05a.5.5 0 00-.47.34l-.55 1.63A1.5 1.5 0 0110.78 16H10a2 2 0 11-.27-1h1.05a.5.5 0 00.47-.34l.55-1.63a1.94 1.94 0 01.1-.22c.25-.5.76-.81 1.32-.81H14a2 2 0 012.93-1.77zm-.44.9a1 1 0 00-1.49.86V12a1 1 0 002 .01V12a1 1 0 00-.51-.87zM9 16a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const CloudFlowRegular = wrapIcon(rawSvg({}), 'CloudFlowRegular');
export default CloudFlowRegular;
      