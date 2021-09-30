import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 4.75v14.5a.75.75 0 001.5 0V4.75a.75.75 0 00-1.5 0z" fill={primaryFill} /></svg>;
}

const DividerShort24Regular = wrapIcon(rawSvg({}), 'DividerShort24Regular');
export default DividerShort24Regular;
      