import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M11.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M15 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const MoreHorizontal20Regular = wrapIcon(rawSvg({}), 'MoreHorizontal20Regular');
export default MoreHorizontal20Regular;
      