import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9V8h1v1H4zM1 4c0-1.1.9-2 2-2h7a2 2 0 012 2v6.5a.5.5 0 001 0V4a2 2 0 012 2v4.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5V4zm2.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zm4 0a.5.5 0 000 1h2a.5.5 0 000-1h-2zm0 2a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /></svg>;
}

const News16Filled = wrapIcon(rawSvg({}), 'News16Filled');
export default News16Filled;
      