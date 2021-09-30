import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z" fill={primaryFill} /><path d="M4 10a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2z" fill={primaryFill} /><path d="M16 6a2 2 0 00-2 2v8a2 2 0 104 0V8a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
}

const Poll20Filled = wrapIcon(rawSvg({}), 'Poll20Filled');
export default Poll20Filled;
      