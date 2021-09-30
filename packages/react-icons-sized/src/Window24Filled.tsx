import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3A3.5 3.5 0 003 6.5v11A3.5 3.5 0 006.5 21h11a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0017.5 3h-11zM5 8h14v9.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 015 17.5V8z" fill={primaryFill} /></svg>;
}

const Window24Filled = wrapIcon(rawSvg({}), 'Window24Filled');
export default Window24Filled;
      