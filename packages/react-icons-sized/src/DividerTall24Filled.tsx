import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3v18a1 1 0 102 0V3a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
}

const DividerTall24Filled = wrapIcon(rawSvg({}), 'DividerTall24Filled');
export default DividerTall24Filled;
      