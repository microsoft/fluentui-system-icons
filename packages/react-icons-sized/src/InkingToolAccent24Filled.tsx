import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7h16.25c.12 0 .22-.08.24-.2l.01-.05V3H3.75v3.75c0 .12.08.22.2.24L4 7zm7.98 6.95L14.62 8l.88-.5.76.5-2.91 6.55a.75.75 0 11-1.37-.6zM13 19c0 1.1-.45 2-1 2s-1-.9-1-2 .45-2 1-2 1 .9 1 2z" fill={primaryFill} /></svg>;
}

const InkingToolAccent24Filled = wrapIcon(rawSvg({}), 'InkingToolAccent24Filled');
export default InkingToolAccent24Filled;
      