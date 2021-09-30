import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM3.5 8.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM3.9 11A1.9 1.9 0 002 12.9v5.2c0 1.05.85 1.9 1.9 1.9h10.2a1.9 1.9 0 001.9-1.9v-5.2a1.9 1.9 0 00-1.9-1.9h-1.85c.41 0 .75-.34.75-.75v-1.5a.75.75 0 00-1.5 0v1.5c0 .41.34.75.75.75H3.9zm-.4 1.9c0-.22.18-.4.4-.4h10.2c.22 0 .4.18.4.4v5.2a.4.4 0 01-.4.4H3.9a.4.4 0 01-.4-.4v-5.2zm.25-7.4a.25.25 0 00-.25.25v.5a.75.75 0 01-1.5 0v-.5C2 4.78 2.78 4 3.75 4h.5a.75.75 0 010 1.5h-.5zm7.75.25a.25.25 0 00-.25-.25h-.5a.75.75 0 010-1.5h.5c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 01-1.5 0v-.5zM17 16.08c0 .48.42.87.89.74A5.5 5.5 0 0017.5 6.1l.3-.35a.75.75 0 10-1.13-.98l-1.5 1.75a.75.75 0 000 .98l1.5 1.75a.75.75 0 101.14-.98l-.6-.7a4 4 0 01.37 7.79c-.33.1-.59.38-.59.73z" fill={primaryFill} /></svg>;
}

const Orientation24Regular = wrapIcon(rawSvg({}), 'Orientation24Regular');
export default Orientation24Regular;
      