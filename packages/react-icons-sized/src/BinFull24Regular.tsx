import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.38 2.34c.22.35.12.82-.22 1.04L5.3 11h4.2v-.75c0-.97.78-1.75 1.75-1.75h3.25v-.75c0-.97.78-1.75 1.75-1.75h3c.97 0 1.75.78 1.75 1.75V11h.25c.41 0 .75.34.75.75v7c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 18.75v-7c0-.26.13-.5.34-.63l14-9a.75.75 0 011.04.22zM19.5 11V7.75a.25.25 0 00-.25-.25h-3a.25.25 0 00-.25.25V11h3.5zm-5 0v-1h-3.25a.25.25 0 00-.25.25V11h3.5zm-11 1.5v6.25c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75V12.5h-17z" fill={primaryFill} /></svg>;
}

const BinFull24Regular = wrapIcon(rawSvg({}), 'BinFull24Regular');
export default BinFull24Regular;
      