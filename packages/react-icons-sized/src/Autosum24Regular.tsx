import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.06 4.46A.75.75 0 015.75 4h12.5a.75.75 0 010 1.5H7.52l5.36 5.54c.27.28.28.71.03 1L7.38 18.5h10.87a.75.75 0 010 1.5H5.75a.75.75 0 01-.57-1.24l6.15-7.17L5.2 5.27a.75.75 0 01-.15-.81z" fill={primaryFill} /></svg>;
}

const Autosum24Regular = wrapIcon(rawSvg({}), 'Autosum24Regular');
export default Autosum24Regular;
      