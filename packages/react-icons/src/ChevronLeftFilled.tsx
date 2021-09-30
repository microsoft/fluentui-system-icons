import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.27 15.8a.75.75 0 01-1.06-.03l-5-5.25a.75.75 0 010-1.04l5-5.25a.75.75 0 111.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06z" fill={primaryFill} /></svg>;
}

const ChevronLeftFilled = wrapIcon(rawSvg({}), 'ChevronLeftFilled');
export default ChevronLeftFilled;
      