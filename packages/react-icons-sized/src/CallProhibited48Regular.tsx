import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.53 20.75c2.48-4.15 1.8-9.83-2.92-12.14A35.35 35.35 0 0024 5 35.35 35.35 0 008.4 8.6c-4.73 2.32-5.4 8-2.93 12.15a4.94 4.94 0 004.75 2.38l3.43-.35a5.25 5.25 0 004.52-3.85l.83-3.06c.22-.77.67-1.22 1.16-1.34 2.17-.5 5.5-.52 7.68 0 .49.11.94.57 1.15 1.34l.83 3.06a5.25 5.25 0 004.53 3.85l3.43.35c1.91.2 3.76-.73 4.75-2.38zm-4.02-9.9c3.05 1.5 3.82 5.35 1.87 8.62a2.44 2.44 0 01-2.34 1.18l-3.43-.36a2.75 2.75 0 01-2.37-2.02l-.83-3.05a4.2 4.2 0 00-3-3.13c-2.57-.6-6.28-.59-8.82 0a4.2 4.2 0 00-3 3.13l-.83 3.05a2.75 2.75 0 01-2.37 2.02l-3.43.36c-.94.1-1.86-.36-2.34-1.18-1.95-3.27-1.18-7.13 1.87-8.62A32.85 32.85 0 0124 7.5c6.09 0 11.01 1.64 14.5 3.35z" fill={primaryFill} /><path d="M24 44a11 11 0 110-22 11 11 0 010 22zm0-2.5a8.5 8.5 0 006.83-13.56l-11.9 11.89A8.46 8.46 0 0024 41.5zm5.06-15.33a8.5 8.5 0 00-11.9 11.9l11.9-11.9z" fill={primaryFill} /></svg>;
}

const CallProhibited48Regular = wrapIcon(rawSvg({}), 'CallProhibited48Regular');
export default CallProhibited48Regular;
      