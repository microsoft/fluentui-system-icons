import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 00-5.09-4.22zm5.5 5.22h-3.76c.06.5.1 1 .13 1.52A5.57 5.57 0 0118 10.25a7.93 7.93 0 00-.4-2.75zm-4.77 0a19 19 0 01.14 1.71 5.51 5.51 0 00-3.6 3.29H7.15a19.44 19.44 0 010-5h5.68zm-5.52 6h1.77a5.53 5.53 0 001.14 4.47.99.99 0 01-.23.03c-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32zm.57 4.22A8.02 8.02 0 012.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52zM2.4 12.5h3.76a20.52 20.52 0 010-5H2.4a8 8 0 000 5zm16.61 2a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const GlobeClock20Filled = wrapIcon(rawSvg({}), 'GlobeClock20Filled');
export default GlobeClock20Filled;
      