import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7A.5.5 0 012 6z" fill={primaryFill} /></svg>;
}

const Subtract12Regular = wrapIcon(rawSvg({}), 'Subtract12Regular');
export default Subtract12Regular;
      