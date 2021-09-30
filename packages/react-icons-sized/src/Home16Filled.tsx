import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.69 1.26a1 1 0 00-1.38 0L2.47 5.84c-.3.28-.47.68-.47 1.1v5.56c0 .83.67 1.5 1.5 1.5H5c.83 0 1.5-.67 1.5-1.5V10c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .83.67 1.5 1.5 1.5h1.5c.83 0 1.5-.67 1.5-1.5V6.93c0-.41-.17-.8-.47-1.09L8.7 1.26z" fill={primaryFill} /></svg>;
}

const Home16Filled = wrapIcon(rawSvg({}), 'Home16Filled');
export default Home16Filled;
      