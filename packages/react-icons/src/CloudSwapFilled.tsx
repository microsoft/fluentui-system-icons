import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 002 11.62 3.33 3.33 0 005.28 15h2.8a1.5 1.5 0 01.36-1.56l2-2A1.5 1.5 0 0112.9 13h1.18a1.5 1.5 0 012.47-1.56l1.27 1.27c.1-.34.17-.7.17-1.09a3.33 3.33 0 00-3.28-3.37h-.07zm-2.8 4.6a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L16.29 14h-5.58l1.14-1.15z" fill={primaryFill} /></svg>;
}

const CloudSwapFilled = wrapIcon(rawSvg({}), 'CloudSwapFilled');
export default CloudSwapFilled;
      