import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 8a6 6 0 1112 0v3a2 2 0 01-2 2h-1a1 1 0 01-1-1V9a1 1 0 011-1h2A5 5 0 005 8h2a1 1 0 011 1v3a1 1 0 01-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 11.27 1H7a3 3 0 01-3-3V8zm11 1h-2v3h1a1 1 0 001-1V9zM5 12h2V9H5v3zm4 4a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const Headset20Regular = wrapIcon(rawSvg({}), 'Headset20Regular');
export default Headset20Regular;
      