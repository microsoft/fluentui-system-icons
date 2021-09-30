import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.8 7.77l.16-.83c.16-.82-.15-1.7-.8-2.28-1.57-1.38-3.84-2.16-7.17-2.16-3.32 0-5.89.79-7.31 2.17-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 004.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 015 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22z" fill={primaryFill} /><path d="M14.5 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
}

const CallExclamationFilled = wrapIcon(rawSvg({}), 'CallExclamationFilled');
export default CallExclamationFilled;
      