import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.82 0 1.5.67 1.5 1.5v.75C10.1 12.08 8.67 13 6.05 13 3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5zm4 0c.82 0 1.5.67 1.5 1.5v.53c.09 1.64-1.16 2.47-3.45 2.47-.3 0-.6-.02-.87-.05.53-.5.82-1.16.82-2.01V9.5A2 2 0 009.82 8h2.68zM6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5 1a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
}

const People16Filled = wrapIcon(rawSvg({}), 'People16Filled');
export default People16Filled;
      