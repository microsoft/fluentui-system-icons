import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5v14a1 1 0 102 0V5a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
}

const DividerShort24Filled = wrapIcon(rawSvg({}), 'DividerShort24Filled');
export default DividerShort24Filled;
      