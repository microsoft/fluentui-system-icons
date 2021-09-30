import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 7.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M12 13.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M10.25 18a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical24Regular = wrapIcon(rawSvg({}), 'MoreVertical24Regular');
export default MoreVertical24Regular;
      