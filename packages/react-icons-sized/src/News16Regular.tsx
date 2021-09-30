import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM4 9V8h1v1H4zm3.5-2a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM1 4c0-1.1.9-2 2-2h8a2 2 0 012 2 2 2 0 012 2v4.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5V4zm11.5 6.5a.5.5 0 01-.5-.5V4a1 1 0 00-1-1H3a1 1 0 00-1 1v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V6a1 1 0 00-1-1v5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
}

const News16Regular = wrapIcon(rawSvg({}), 'News16Regular');
export default News16Regular;
      