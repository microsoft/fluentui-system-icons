import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.6 3.5c.81-.66 1.99-.66 2.8 0l7.76 6.21c.53.43.84 1.08.84 1.76v11.28c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-6a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v6c0 1.24-1 2.25-2.25 2.25h-3C5.01 25 4 24 4 22.75V11.47c0-.68.31-1.33.84-1.76L12.6 3.5zm1.87 1.17a.75.75 0 00-.94 0l-7.75 6.21a.75.75 0 00-.28.59v11.28c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-6c0-1.24 1-2.25 2.25-2.25h3.5c1.24 0 2.25 1 2.25 2.25v6c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75V11.47c0-.23-.1-.44-.28-.59l-7.75-6.21z" fill={primaryFill} /></svg>;
}

const Home28Regular = wrapIcon(rawSvg({}), 'Home28Regular');
export default Home28Regular;
      