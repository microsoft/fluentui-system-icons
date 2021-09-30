import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 001 1h14a1 1 0 100-2H5a1 1 0 00-1 1zm0 18a1 1 0 001 1h1.75a1 1 0 100-2H5a1 1 0 00-1 1zm5.25 0a1 1 0 001 1h3.5a1 1 0 100-2h-3.5a1 1 0 00-1 1zm7 0a1 1 0 001 1H19a1 1 0 100-2h-1.75a1 1 0 00-1 1zm1.46-7.3l-5 5a1 1 0 01-1.42 0l-5-5a1 1 0 111.42-1.4L11 15.58V6a1 1 0 112 0v9.59l3.3-3.3a1 1 0 011.4 1.42z" fill={primaryFill} /></svg>;
}

const PaddingDown24Filled = wrapIcon(rawSvg({}), 'PaddingDown24Filled');
export default PaddingDown24Filled;
      