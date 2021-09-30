import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1h-1V8zM5 2.5V5H4a2 2 0 00-2 2v5c0 1.1.9 2 2 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1V2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5zm5 .5v2H6V3h4zM4 6h8a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const BriefcaseMedical16Regular = wrapIcon(rawSvg({}), 'BriefcaseMedical16Regular');
export default BriefcaseMedical16Regular;
      