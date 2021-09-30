import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.92 2.3A1.5 1.5 0 005.5 3.48V20.5a1.5 1.5 0 002.68.93l4.19-5.3c.31-.4.79-.62 1.3-.62h6.84a1.5 1.5 0 00.93-2.69L7.92 2.3z" fill={primaryFill} /></svg>;
}

const Cursor24Filled = wrapIcon(rawSvg({}), 'Cursor24Filled');
export default Cursor24Filled;
      