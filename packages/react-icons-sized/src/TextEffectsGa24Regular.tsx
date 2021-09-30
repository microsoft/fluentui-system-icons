import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2.5A2.5 2.5 0 0119.5 5v2.5a2.5 2.5 0 010 5V18a2.5 2.5 0 01-5 0V5A2.5 2.5 0 0117 2.5zM18 18v-7h1.5a1 1 0 100-2H18V5a1 1 0 10-2 0v13a1 1 0 102 0zM2.5 8A2.5 2.5 0 015 5.5h6A2.5 2.5 0 0113.5 8c0 1.84-.33 4.31-1.52 6.43A7.7 7.7 0 015 18.5a2.5 2.5 0 010-5c.74 0 1.25-.17 1.62-.41.39-.24.72-.61 1-1.12.24-.43.43-.93.57-1.47H5A2.5 2.5 0 012.5 8zm7.24 2.5a8.04 8.04 0 01-.81 2.21A4.2 4.2 0 015 15a1 1 0 100 2 6.2 6.2 0 005.67-3.31C11.7 11.89 12 9.69 12 8a1 1 0 00-1-1H5a1 1 0 000 2h4.96c-.04.5-.11 1-.22 1.5z" fill={primaryFill} /></svg>;
}

const TextEffectsGa24Regular = wrapIcon(rawSvg({}), 'TextEffectsGa24Regular');
export default TextEffectsGa24Regular;
      