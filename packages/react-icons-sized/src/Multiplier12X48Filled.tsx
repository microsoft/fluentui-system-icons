import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.34 20.24A1.5 1.5 0 0022 18.9a2.68 2.68 0 01.45-1c.35-.49 1.09-1.14 2.8-1.14 1.54 0 2.55.5 3.13 1.19.57.68.9 1.76.64 3.3a2.45 2.45 0 01-1.27 1.81c-.6.37-1.26.62-2.08.93l-1.09.43a9.44 9.44 0 00-3.8 2.48C19.66 28.23 19 30.04 19 32.5a1.5 1.5 0 001.5 1.5h10a1.5 1.5 0 100-3h-8.38c.18-1.01.54-1.68.95-2.16.62-.72 1.5-1.19 2.64-1.65l.78-.3c.91-.35 1.97-.75 2.83-1.29a5.43 5.43 0 002.66-3.85c.38-2.2-.04-4.24-1.31-5.75-1.27-1.5-3.21-2.25-5.42-2.25-2.66 0-4.3 1.1-5.23 2.36a5.67 5.67 0 00-1 2.44v.02l-.01.01c0 .01-.03.3 0 .01a1.5 1.5 0 001.33 1.65zm16.22 4.2a1.5 1.5 0 00-2.12 2.12L36.88 29l-2.44 2.44a1.5 1.5 0 002.12 2.12L39 31.12l2.44 2.44a1.5 1.5 0 002.12-2.12L41.12 29l2.44-2.44a1.5 1.5 0 00-2.12-2.12L39 26.88l-2.44-2.44zM16.5 32.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-5.6-18.7c.65.18 1.1.78 1.1 1.45v17a1.5 1.5 0 11-3 0V19.67a15.4 15.4 0 01-2.73 2.12 1.5 1.5 0 11-1.54-2.58c1.37-.82 2.5-1.94 3.3-2.88a15.94 15.94 0 001.17-1.59l.01-.01a1.5 1.5 0 011.7-.68z" fill={primaryFill} /></svg>;
}

const Multiplier12X48Filled = wrapIcon(rawSvg({}), 'Multiplier12X48Filled');
export default Multiplier12X48Filled;
      