import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.92 1.38a3 3 0 012.16 0l4.96 1.9c.58.23.96.79.96 1.4v6.63a1.5 1.5 0 01-.96 1.4l-4.96 1.91a3 3 0 01-2.16 0l-4.96-1.9a1.5 1.5 0 01-.96-1.4V4.68c0-.62.38-1.18.96-1.4l4.96-1.91zM4.7 5.04a.5.5 0 10-.4.92l3.2 1.37v3.17a.5.5 0 101 0V7.33l3.2-1.37a.5.5 0 10-.4-.92L8 6.46 4.7 5.04z" fill={primaryFill} /></svg>;
}

const Cube16Filled = wrapIcon(rawSvg({}), 'Cube16Filled');
export default Cube16Filled;
      