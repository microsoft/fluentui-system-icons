import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.43.8 1.05.8 1.72v9.8c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-5a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v5c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-9.8c0-.67.3-1.3.8-1.72l6.75-5.7z" fill={primaryFill} /></svg>;
}

const Home24Filled = wrapIcon(rawSvg({}), 'Home24Filled');
export default Home24Filled;
      