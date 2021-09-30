import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.53 21.07L8.29 14H5.75a.75.75 0 01-.72-.96l3-10.5c.1-.32.39-.54.72-.54h7c.51 0 .87.5.71.99L14.8 8h4.46c.66 0 1 .8.54 1.27l-1.69 1.76a6.59 6.59 0 00-2.25.18l1.64-1.71h-3.74a.75.75 0 01-.71-.99L14.7 3.5H9.3l-2.57 9h2.51c.5 0 .85.46.73.93L8.67 18.7l2.48-2.6a6.53 6.53 0 00-.1 2.27l-3.25 3.4c-.54.55-1.46.04-1.27-.7zM17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm3.35-7.15l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmark24Regular = wrapIcon(rawSvg({}), 'FlashCheckmark24Regular');
export default FlashCheckmark24Regular;
      