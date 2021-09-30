import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.3 20.17c2.58-3.7 1.92-9.04-2.59-10.99A39.66 39.66 0 0024 6C17.4 6 12.05 7.56 8.29 9.18c-4.5 1.95-5.17 7.3-2.6 11a4.25 4.25 0 004 1.79l3.16-.37a5.25 5.25 0 004.38-3.6l.71-2.2c.23-.71.66-1.11 1.1-1.2 1.28-.3 3.1-.45 4.96-.45 1.86 0 3.67.15 4.95.44.45.1.88.5 1.1 1.2l.72 2.21a5.25 5.25 0 004.38 3.6l3.17.37c1.56.18 3.09-.5 3.98-1.8z" fill={primaryFill} /><path d="M25 29.25a1.25 1.25 0 10-2.5 0v5.5c0 .69.56 1.25 1.25 1.25h3.5a1.25 1.25 0 100-2.5H25v-4.25z" fill={primaryFill} /><path d="M24 44a11 11 0 100-22 11 11 0 000 22zm0-2.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" fill={primaryFill} /></svg>;
}

const CallMissed48Filled = wrapIcon(rawSvg({}), 'CallMissed48Filled');
export default CallMissed48Filled;
      