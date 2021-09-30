import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zM6.5 9.5h7a.5.5 0 01.09 1H6.5a.5.5 0 01-.09-1h7.09-7z" fill={primaryFill} /></svg>;
}

const BlockRegular = wrapIcon(rawSvg({}), 'BlockRegular');
export default BlockRegular;
      