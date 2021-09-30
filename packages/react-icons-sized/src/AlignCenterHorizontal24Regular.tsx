import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 12.75a.75.75 0 000-1.5H20v-2.5c0-1.24-1-2.25-2.25-2.25h-2.5c-1.24 0-2.25 1-2.25 2.25v2.5h-2v-4.5c0-1.24-1-2.25-2.25-2.25h-2.5C5.01 4.5 4 5.5 4 6.75v4.5H2.75a.75.75 0 000 1.5H4v4.5c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-4.5h2v2.5c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-2.5h1.25zm-2.75-4v6.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 01-.75-.75v-6.5c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75zm-9-2v10.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 01-.75-.75V6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const AlignCenterHorizontal24Regular = wrapIcon(rawSvg({}), 'AlignCenterHorizontal24Regular');
export default AlignCenterHorizontal24Regular;
      