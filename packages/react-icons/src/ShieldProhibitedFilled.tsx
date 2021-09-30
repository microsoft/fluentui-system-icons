import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0l.07-.03A5.5 5.5 0 1117 9.26V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42z" fill={primaryFill} /><path d="M10.7 15.6l4.9-4.9a3.5 3.5 0 00-4.9 4.9zm.7.7a3.5 3.5 0 004.9-4.9l-4.9 4.9zm2.1 1.7a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill={primaryFill} /></svg>;
}

const ShieldProhibitedFilled = wrapIcon(rawSvg({}), 'ShieldProhibitedFilled');
export default ShieldProhibitedFilled;
      