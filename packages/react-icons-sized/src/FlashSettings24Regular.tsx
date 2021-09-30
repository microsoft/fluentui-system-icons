import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 14l-1.77 7.07c-.19.74.73 1.25 1.27.7l3.26-3.4a6.55 6.55 0 01.09-2.26L8.67 18.7l1.31-5.27a.75.75 0 00-.72-.93H6.74l2.58-9h5.39l-1.67 5.01c-.16.49.2.99.71.99h3.74l-1.64 1.71a6.51 6.51 0 012.25-.18l1.7-1.76A.75.75 0 0019.24 8h-4.46l1.67-5.01a.75.75 0 00-.71-.99h-7a.75.75 0 00-.72.54l-3 10.5c-.14.48.22.96.72.96h2.54zm4.2 1.63l.45.43a2 2 0 010 2.88l-.45.43c.2.57.5 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.18 5.18 0 001.72 0l.17-.72a2 2 0 012.52-1.45l.6.18c.36-.47.65-1 .85-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.17 5.17 0 00-1.72 0l-.17.72a2 2 0 01-2.51 1.45l-.6-.18c-.37.47-.66 1-.86 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const FlashSettings24Regular = wrapIcon(rawSvg({}), 'FlashSettings24Regular');
export default FlashSettings24Regular;
      