import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zm12.5-.5a.5.5 0 001 0v-15a.5.5 0 00-1 0v15zM9 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V6a2 2 0 00-2-2H9z" fill={primaryFill} /></svg>;
}

const CenterHorizontal20Filled = wrapIcon(rawSvg({}), 'CenterHorizontal20Filled');
export default CenterHorizontal20Filled;
      