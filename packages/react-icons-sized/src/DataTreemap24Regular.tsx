import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H9v-15H6.25zm4.25 0V14h9V6.25c0-.97-.78-1.75-1.75-1.75H10.5zm9 11h-9v4h7.25c.97 0 1.75-.78 1.75-1.75V15.5z" fill={primaryFill} /></svg>;
}

const DataTreemap24Regular = wrapIcon(rawSvg({}), 'DataTreemap24Regular');
export default DataTreemap24Regular;
      