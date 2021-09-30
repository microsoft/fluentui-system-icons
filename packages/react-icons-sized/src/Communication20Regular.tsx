import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4a7 7 0 00-4.95 11.95.5.5 0 01-.7.7 8 8 0 1111.32 0 .5.5 0 01-.72-.7A7 7 0 0010 4z" fill={primaryFill} /><path d="M10 7a4 4 0 00-2.83 6.82.5.5 0 11-.71.71A4.99 4.99 0 0110 6a5 5 0 013.54 8.53.5.5 0 01-.71-.7A3.99 3.99 0 0010 7z" fill={primaryFill} /><path d="M10 9a2 2 0 100 4 2 2 0 000-4zm-1 2a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const Communication20Regular = wrapIcon(rawSvg({}), 'Communication20Regular');
export default Communication20Regular;
      