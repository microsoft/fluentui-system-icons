import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.86 13.36l.7 3.53c.19.91.9 1.62 1.82 1.78l2.88.5a2.75 2.75 0 003.15-2.1l.37-1.63c.49-2.1-.38-4.4-2.53-5.25-2.11-.83-5.28-1.7-9.25-1.69-3.95.01-7.1.88-9.21 1.7-2.17.83-3.06 3.15-2.57 5.26l.37 1.61a2.75 2.75 0 003.15 2.1l2.88-.5a2.25 2.25 0 001.82-1.78l.7-3.53A15.38 15.38 0 0114 13a12.5 12.5 0 012.86.36z" fill={primaryFill} /></svg>;
}

const CallEnd28Filled = wrapIcon(rawSvg({}), 'CallEnd28Filled');
export default CallEnd28Filled;
      