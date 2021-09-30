import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a1 1 0 01.12 2H8a4 4 0 00-.2 8H11a1 1 0 01.12 2H8a6 6 0 01-.22-12H11zm9 0a6 6 0 01.22 12H17a1 1 0 01-.12-2H20a4 4 0 00.2-8H17a1 1 0 01-.12-2H20zM8 13h12a1 1 0 01.12 2H8a1 1 0 01-.12-2H20 8z" fill={primaryFill} /></svg>;
}

const Link28Filled = wrapIcon(rawSvg({}), 'Link28Filled');
export default Link28Filled;
      