import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-3a.5.5 0 00-.5.5v2h-2a.5.5 0 000 1h2v2a.5.5 0 001 0v-2h2a.5.5 0 000-1h-2v-2A.5.5 0 008 5z" fill={primaryFill} /></svg>;
}

const AddCircle16Filled = wrapIcon(rawSvg({}), 'AddCircle16Filled');
export default AddCircle16Filled;
      