import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8.75a.75.75 0 00-1.17-.62l-1.5 1a.75.75 0 10.84 1.24l.33-.22v5.1a.75.75 0 001.5 0v-6.5zm9 0a.75.75 0 00-1.17-.62l-1.5 1a.75.75 0 10.84 1.24l.33-.22v5.1a.75.75 0 101.5 0v-6.5zM13 14a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zM5.25 4A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25zM3.5 7.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5z" fill={primaryFill} /></svg>;
}

const RatioOneToOne24Regular = wrapIcon(rawSvg({}), 'RatioOneToOne24Regular');
export default RatioOneToOne24Regular;
      