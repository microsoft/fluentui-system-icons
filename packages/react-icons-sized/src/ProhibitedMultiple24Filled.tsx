import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 19.5a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zm0-2c-1.5 0-2.9-.5-4.01-1.32l9.44-9.44a6.75 6.75 0 01-5.43 10.76zm4.01-12.18l-9.44 9.44a6.75 6.75 0 019.44-9.44zm5.74 5.43a9.75 9.75 0 01-12.8 9.26A8.75 8.75 0 0020.02 7.7c.3.97.48 2 .48 3.06z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple24Filled = wrapIcon(rawSvg({}), 'ProhibitedMultiple24Filled');
export default ProhibitedMultiple24Filled;
      