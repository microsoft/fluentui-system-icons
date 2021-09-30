import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 16a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6.5 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /></svg>;
}

const MoreHorizontal32Regular = wrapIcon(rawSvg({}), 'MoreHorizontal32Regular');
export default MoreHorizontal32Regular;
      