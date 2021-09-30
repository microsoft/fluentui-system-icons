import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0c0-1.52-.53-2.93-1.4-4.04L5.96 15.1A6.5 6.5 0 0016.5 10zM4.9 14.04l9.14-9.14a6.5 6.5 0 00-9.13 9.13z" fill={primaryFill} /></svg>;
}

const ProhibitedFilled = wrapIcon(rawSvg({}), 'ProhibitedFilled');
export default ProhibitedFilled;
      