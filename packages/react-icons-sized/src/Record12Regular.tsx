import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a3 3 0 100-6 3 3 0 000 6zm5-3A5 5 0 111 6a5 5 0 0110 0zm-1 0a4 4 0 10-8 0 4 4 0 008 0z" fill={primaryFill} /></svg>;
}

const Record12Regular = wrapIcon(rawSvg({}), 'Record12Regular');
export default Record12Regular;
      