import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 4.75a2.75 2.75 0 01-2.75 2.75H4.75a2.75 2.75 0 110-5.5h14.5A2.75 2.75 0 0122 4.75zm-2 7a2.75 2.75 0 01-2.75 2.75H6.75a2.75 2.75 0 110-5.5h10.5A2.75 2.75 0 0120 11.75zm-3 7a2.75 2.75 0 01-2.75 2.75h-4.5a2.75 2.75 0 110-5.5h4.5A2.75 2.75 0 0117 18.75zm3.5-14c0-.69-.56-1.25-1.25-1.25H4.75a1.25 1.25 0 100 2.5h14.5c.7 0 1.25-.56 1.25-1.25zm-2 7c0-.69-.56-1.25-1.25-1.25H6.75a1.25 1.25 0 000 2.5h10.5c.7 0 1.25-.56 1.25-1.25zm-3 7c0-.69-.56-1.25-1.25-1.25h-4.5a1.25 1.25 0 000 2.5h4.5c.7 0 1.25-.56 1.25-1.25z" fill={primaryFill} /></svg>;
}

const DataFunnel24Regular = wrapIcon(rawSvg({}), 'DataFunnel24Regular');
export default DataFunnel24Regular;
      