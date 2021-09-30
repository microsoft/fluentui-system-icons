import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.3 20.17c2.58-3.7 1.92-9.04-2.59-10.99A39.66 39.66 0 0024 6C17.4 6 12.05 7.56 8.29 9.18c-4.5 1.95-5.17 7.3-2.6 11a4.25 4.25 0 004 1.79l3.16-.37a5.25 5.25 0 004.38-3.6l.71-2.2c.23-.71.66-1.11 1.1-1.2 1.28-.3 3.1-.45 4.96-.45 1.86 0 3.67.15 4.95.44.45.1.88.5 1.1 1.2l.72 2.21a5.25 5.25 0 004.38 3.6l3.17.37c1.56.18 3.09-.5 3.98-1.8z" fill={primaryFill} /><path d="M24 44a11 11 0 110-22 11 11 0 010 22zm0-2.5a8.5 8.5 0 006.83-13.56l-11.9 11.89A8.46 8.46 0 0024 41.5zm-6.83-3.44l11.9-11.89a8.5 8.5 0 00-11.9 11.9z" fill={primaryFill} /></svg>;
}

const CallProhibited48Filled = wrapIcon(rawSvg({}), 'CallProhibited48Filled');
export default CallProhibited48Filled;
      