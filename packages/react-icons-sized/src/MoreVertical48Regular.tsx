import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 15.75a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" fill={primaryFill} /><path d="M24 27.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" fill={primaryFill} /><path d="M20.75 35.5a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical48Regular = wrapIcon(rawSvg({}), 'MoreVertical48Regular');
export default MoreVertical48Regular;
      