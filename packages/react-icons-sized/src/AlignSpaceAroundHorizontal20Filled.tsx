import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 16c.83 0 1.5-.67 1.5-1.5v-9C9 4.67 8.33 4 7.5 4h-2C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h2zm7 0c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2z" fill={primaryFill} /></svg>;
}

const AlignSpaceAroundHorizontal20Filled = wrapIcon(rawSvg({}), 'AlignSpaceAroundHorizontal20Filled');
export default AlignSpaceAroundHorizontal20Filled;
      