import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2.25c.31 0 .6.2.7.5l3.5 9.5a.75.75 0 01-1.4.5l-.93-2.5H2.63l-.93 2.5a.75.75 0 11-1.4-.5l3.5-9.5c.1-.3.39-.5.7-.5zm0 2.92L3.18 8.75h2.64L4.5 5.17zm5.25-2.92A.75.75 0 009 3v9.5c0 .41.34.75.75.75h2.5a3.25 3.25 0 001.57-6.1 3 3 0 00-2.32-4.9H9.75zm3.25 3c0 .83-.67 1.5-1.5 1.5h-1v-3h1c.83 0 1.5.67 1.5 1.5zm-.75 6.5H10.5v-3.5h1.75a1.75 1.75 0 110 3.5z" fill={primaryFill} /></svg>;
}

const TextCaseUppercase16Filled = wrapIcon(rawSvg({}), 'TextCaseUppercase16Filled');
export default TextCaseUppercase16Filled;
      