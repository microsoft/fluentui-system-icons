import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.97 9.69A1 1 0 116.54 8.3l4.75-5a1 1 0 011.45 0l4.75 5a1 1 0 11-1.46 1.38L13 6.5v11l3.02-3.19a1 1 0 111.46 1.38l-4.76 5a1 1 0 01-1.45 0l-4.74-5a1 1 0 111.44-1.38L11 17.5v-11L7.97 9.7z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown24Filled = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown24Filled');
export default ArrowBidirectionalUpDown24Filled;
      