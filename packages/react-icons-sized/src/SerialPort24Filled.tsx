import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.23 10.39A2.75 2.75 0 014.91 7h14.18a2.75 2.75 0 012.68 3.39l-1.08 4.5A2.75 2.75 0 0118.02 17H5.98A2.75 2.75 0 013.3 14.9l-1.07-4.5zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5zm3.25-.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-2 3.25a.75.75 0 100-1.5.75.75 0 000 1.5zm3.25-.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm3.25-.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM12 11.5a.75.75 0 100-1.5.75.75 0 000 1.5zm3.25-.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const SerialPort24Filled = wrapIcon(rawSvg({}), 'SerialPort24Filled');
export default SerialPort24Filled;
      