import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18c.5 0 .97-.04 1.44-.13a5.85 5.85 0 01-.75-1.08c-.24.14-.47.21-.69.21-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H10v-1H7.2a14.87 14.87 0 010-5h5.6c.09.56.15 1.16.18 1.78a6.32 6.32 0 00.95-.82c-.03-.32-.07-.65-.12-.96h2.73c.21.55.35 1.13.42 1.74.3.22.66.43 1.04.57A8 8 0 1010 18zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm5.9-10.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1zm6.21 7.58a5.69 5.69 0 01-3.06-1.72.62.62 0 00-.88 0 5.7 5.7 0 01-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 00.26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54z" fill={primaryFill} /></svg>;
}

const GlobeShield20Regular = wrapIcon(rawSvg({}), 'GlobeShield20Regular');
export default GlobeShield20Regular;
      