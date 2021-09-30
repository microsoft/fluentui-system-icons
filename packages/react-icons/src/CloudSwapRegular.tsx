import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 11.62c0 .38-.06.75-.17 1.09l-.84-.84.01-.25a2.33 2.33 0 00-2.28-2.37h-.07a1 1 0 01-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 11.62 2.33 2.33 0 005.28 14h2.8a1.5 1.5 0 000 1h-2.8A3.33 3.33 0 012 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4zm1.85 8.85a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L16.29 14h-5.58l1.14-1.15z" fill={primaryFill} /></svg>;
}

const CloudSwapRegular = wrapIcon(rawSvg({}), 'CloudSwapRegular');
export default CloudSwapRegular;
      