import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5H13a7.5 7.5 0 0112.41-5.67A4.75 4.75 0 0020.75 10h-.27A6.5 6.5 0 0014 4zm13 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-7-2.8v6.8a.5.5 0 001 0v-6.8l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.35-.15.5.5 0 00-.35.15l-3 3a.5.5 0 00.7.7L20 16.71z" fill={primaryFill} /></svg>;
}

const CloudBackup28Filled = wrapIcon(rawSvg({}), 'CloudBackup28Filled');
export default CloudBackup28Filled;
      