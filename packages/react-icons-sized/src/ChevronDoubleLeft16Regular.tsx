import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 12.15a.5.5 0 01-.7.7l-4.5-4.5a.5.5 0 010-.7l4.5-4.5a.5.5 0 11.7.7L4.21 8l4.14 4.15zm4 0a.5.5 0 01-.7.7l-4.5-4.5a.5.5 0 010-.7l4.5-4.5a.5.5 0 01.7.7L8.21 8l4.14 4.15z" fill={primaryFill} /></svg>;
}

const ChevronDoubleLeft16Regular = wrapIcon(rawSvg({}), 'ChevronDoubleLeft16Regular');
export default ChevronDoubleLeft16Regular;
      