import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 14c.96 0 1.75.78 1.75 1.75v3.5c0 .97-.79 1.75-1.75 1.75h-5.5C2.78 21 2 20.22 2 19.25v-3.5c0-.97.78-1.75 1.75-1.75h5.5zm11 0c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-5.5c-.96 0-1.75-.78-1.75-1.75v-3.5c0-.97.79-1.75 1.75-1.75h5.5zm0-11c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 12 2 11.22 2 10.25v-5.5c0-.92.7-1.68 1.6-1.75h16.65z" fill={primaryFill} /></svg>;
}

const BroadActivityFeed24Filled = wrapIcon(rawSvg({}), 'BroadActivityFeed24Filled');
export default BroadActivityFeed24Filled;
      