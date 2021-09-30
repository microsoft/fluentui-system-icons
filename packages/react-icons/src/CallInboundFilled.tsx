import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.54 2.12a4.1 4.1 0 00-2.99.32 2.87 2.87 0 00-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 009 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 001.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 00-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 01-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 00.82-3.36l-.9-1.56c-.25-.46-.69-.78-1.2-.91z" fill={primaryFill} /><path d="M17.85 2.15c.2.2.2.5 0 .7L12.71 8h3.79a.5.5 0 010 1h-5a.5.5 0 01-.5-.5v-5a.5.5 0 111 0v3.8l5.15-5.15c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CallInboundFilled = wrapIcon(rawSvg({}), 'CallInboundFilled');
export default CallInboundFilled;
      