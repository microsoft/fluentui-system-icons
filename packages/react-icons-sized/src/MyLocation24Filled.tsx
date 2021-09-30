import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a1 1 0 011 .88V4.31a7.75 7.75 0 016.69 6.7L21 11a1 1 0 01.12 2H19.69A7.75 7.75 0 0113 19.69V21a1 1 0 01-2 .12V19.69A7.75 7.75 0 014.31 13H3a1 1 0 01-.12-2H4.31a7.75 7.75 0 016.7-6.69L11 3a1 1 0 011-1zm0 4.25a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5zM12 8a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
}

const MyLocation24Filled = wrapIcon(rawSvg({}), 'MyLocation24Filled');
export default MyLocation24Filled;
      