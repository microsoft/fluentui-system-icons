import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17h12a1 1 0 01.12 2H3a1 1 0 01-.12-2H15 3zm0-6h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3zm0-6h15a1 1 0 01.12 2H3a1 1 0 01-.12-2H18 3z" fill={primaryFill} /></svg>;
}

const List24Filled = wrapIcon(rawSvg({}), 'List24Filled');
export default List24Filled;
      