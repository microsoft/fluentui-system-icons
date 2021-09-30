import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 13.66A5.47 5.47 0 015.02 11H2.8A6.02 6.02 0 006 13.66zM2.34 10h2.68l.05-.4A17.08 17.08 0 015.12 6H2.34a5.99 5.99 0 000 4zm3.67-2.68c.37-.51.81-.96 1.33-1.32H6.12c-.05.42-.09.86-.1 1.32zm3.3-3.74c.15.42.29.9.4 1.42H6.29c.11-.53.25-1 .4-1.42.22-.55.46-.97.7-1.23.25-.27.45-.35.61-.35.16 0 .36.08.6.35.25.26.49.68.7 1.23zM10.72 5h2.47a6.02 6.02 0 00-3.42-2.73c.17.28.32.6.45.95.2.53.37 1.12.5 1.78zM2.8 5h2.47c.13-.66.3-1.25.5-1.78.13-.34.28-.67.45-.95A6.02 6.02 0 002.8 5zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10.5 8a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H12a.5.5 0 000-1h-1V8.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const GlobeClock16Filled = wrapIcon(rawSvg({}), 'GlobeClock16Filled');
export default GlobeClock16Filled;
      