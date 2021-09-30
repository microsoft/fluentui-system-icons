import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 007 7.94v-1.52a6.5 6.5 0 117.46-7.17h1.5A8 8 0 002 10zm11.75.25A3.75 3.75 0 0010 14v8.5a3.75 3.75 0 003.75 3.75h8.5A3.75 3.75 0 0026 22.5V14a3.75 3.75 0 00-3.75-3.75h-8.5zM11.5 14c0-1.24 1-2.25 2.25-2.25h8.5c1.24 0 2.25 1 2.25 2.25v8.5c0 1.24-1 2.25-2.25 2.25h-8.5c-1.24 0-2.25-1-2.25-2.25V14z" fill={primaryFill} /></svg>;
}

const Shapes28Regular = wrapIcon(rawSvg({}), 'Shapes28Regular');
export default Shapes28Regular;
      