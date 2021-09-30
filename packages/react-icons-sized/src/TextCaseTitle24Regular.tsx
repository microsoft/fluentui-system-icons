import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 3a.75.75 0 00-.75.75v15.5a.75.75 0 001.5 0v-.24c.68.62 1.55.99 2.5.99 2.2 0 4-2.01 4-4.5S21.2 11 19 11c-.95 0-1.82.37-2.5.99V3.75a.75.75 0 00-.75-.75zm.75 12.5c0-1.83 1.28-3 2.5-3s2.5 1.17 2.5 3-1.28 3-2.5 3-2.5-1.17-2.5-3zM7.76 3c.31 0 .6.2.7.5l5.5 15.5a.75.75 0 11-1.42.5l-1.42-4H4.01l-1.56 4.02a.75.75 0 11-1.4-.54l6-15.5c.11-.3.4-.48.71-.48zm-.04 2.9L4.59 14h6L7.72 5.9z" fill={primaryFill} /></svg>;
}

const TextCaseTitle24Regular = wrapIcon(rawSvg({}), 'TextCaseTitle24Regular');
export default TextCaseTitle24Regular;
      