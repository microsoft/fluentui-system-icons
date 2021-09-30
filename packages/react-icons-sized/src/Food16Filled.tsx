import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 1.5a.5.5 0 00-1 0v3c0 1.2.86 2.22 2 2.45v7.55a.5.5 0 001 0V6.95A2.5 2.5 0 008 4.5v-3a.5.5 0 00-1 0v3c0 .65-.42 1.2-1 1.41V1.5a.5.5 0 00-1 0v4.41c-.58-.2-1-.76-1-1.41v-3zm7 13V8H9.5a.5.5 0 01-.5-.5v-4c0-.66.33-1.28.77-1.73A2.5 2.5 0 0111.5 1c.28 0 .5.22.5.5v13a.5.5 0 01-1 0z" fill={primaryFill} /></svg>;
}

const Food16Filled = wrapIcon(rawSvg({}), 'Food16Filled');
export default Food16Filled;
      