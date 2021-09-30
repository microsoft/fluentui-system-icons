import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7A.5.5 0 016 10zm4 8a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 110-14 7 7 0 010 14z" fill={primaryFill} /></svg>;
}

const SubtractCircle20Regular = wrapIcon(rawSvg({}), 'SubtractCircle20Regular');
export default SubtractCircle20Regular;
      