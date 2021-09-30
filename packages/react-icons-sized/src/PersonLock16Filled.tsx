import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 8v1h-.63C8.4 9 8 9.4 8 9.9v4.2c0 .5.4.9.88.9h5.24c.49 0 .88-.4.88-.9V9.9c0-.5-.4-.9-.88-.9h-.62V8a2 2 0 10-4 0zm2-1a1 1 0 011 1v1h-2V8a1 1 0 011-1zm0 5.75a.75.75 0 110-1.5.75.75 0 010 1.5zM7 14V9.9c0-.9.63-1.68 1.5-1.86V8h-5C2.67 8 2 8.67 2 9.5v.5c0 1.97 1.86 4 5 4zm2.75-9.75a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z" fill={primaryFill} /></svg>;
}

const PersonLock16Filled = wrapIcon(rawSvg({}), 'PersonLock16Filled');
export default PersonLock16Filled;
      