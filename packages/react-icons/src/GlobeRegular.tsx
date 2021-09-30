import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm1.03 0h5.16a9.25 9.25 0 01-.56 1.6C11.41 16.4 10.66 17 10 17c-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6zm5.37-1H7.21a14.87 14.87 0 010-5h5.58a14.86 14.86 0 010 5zm.82 1h2.45a7.02 7.02 0 01-3.77 3.12c.24-.33.45-.7.64-1.1.27-.6.5-1.28.68-2.02zm2.93-1h-2.73a15.97 15.97 0 000-5h2.73a6.98 6.98 0 010 5zm-4.25-9.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1z" fill={primaryFill} /></svg>;
}

const GlobeRegular = wrapIcon(rawSvg({}), 'GlobeRegular');
export default GlobeRegular;
      