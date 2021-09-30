import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const ReOrderDotsHorizontal24Regular = wrapIcon(rawSvg({}), 'ReOrderDotsHorizontal24Regular');
export default ReOrderDotsHorizontal24Regular;
      