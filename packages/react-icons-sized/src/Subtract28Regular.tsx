import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 13.75c0-.41.34-.75.75-.75h20.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Subtract28Regular = wrapIcon(rawSvg({}), 'Subtract28Regular');
export default Subtract28Regular;
      