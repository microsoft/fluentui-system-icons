import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zm15 0a.75.75 0 011.5 0v16.5a.75.75 0 01-1.5 0V3.75zM10.25 5C9.01 5 8 6 8 7.25v9.5C8 17.99 9 19 10.25 19h3.5c1.24 0 2.25-1 2.25-2.25v-9.5C16 6.01 15 5 13.75 5h-3.5zM9.5 7.25c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v9.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75v-9.5z" fill={primaryFill} /></svg>;
}

const CenterHorizontal24Regular = wrapIcon(rawSvg({}), 'CenterHorizontal24Regular');
export default CenterHorizontal24Regular;
      