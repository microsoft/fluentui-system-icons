import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 7.5a2.75 2.75 0 100-5.5H4.75a2.75 2.75 0 000 5.5h14.5z" fill={primaryFill} /><path d="M17.25 14.5a2.75 2.75 0 100-5.5H6.75a2.75 2.75 0 000 5.5h10.5z" fill={primaryFill} /><path d="M17 18.75A2.75 2.75 0 0014.25 16h-4.5a2.75 2.75 0 000 5.5h4.5A2.75 2.75 0 0017 18.75z" fill={primaryFill} /></svg>;
}

const DataFunnel24Filled = wrapIcon(rawSvg({}), 'DataFunnel24Filled');
export default DataFunnel24Filled;
      