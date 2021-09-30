import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V5h1a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1V2.5zm5 .5H6v2h4V3zM8.5 8a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1h-1V8z" fill={primaryFill} /></svg>;
}

const BriefcaseMedical16Filled = wrapIcon(rawSvg({}), 'BriefcaseMedical16Filled');
export default BriefcaseMedical16Filled;
      