import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 9.5V21H6.25a3.25 3.25 0 01-3.24-3.06L3 17.75V9.5h8.5zm1.5 6h8.5v2.25c0 1.8-1.45 3.25-3.25 3.25H13v-5.5zm5.25-13a3.25 3.25 0 013.25 3.06V14H13V2.5h5.25zm-6.75 0V8H3V5.75C3 3.95 4.46 2.5 6.25 2.5h5.25z" fill={primaryFill} /></svg>;
}

const Board24Filled = wrapIcon(rawSvg({}), 'Board24Filled');
export default Board24Filled;
      