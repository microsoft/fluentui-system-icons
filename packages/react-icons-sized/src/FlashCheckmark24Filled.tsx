import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.53 21.07L8.29 14H5.75a.75.75 0 01-.72-.96l3-10.5c.1-.32.39-.54.72-.54h7c.51 0 .87.5.71.99L14.8 8h4.46c.66 0 1 .8.54 1.27l-1.69 1.76-.6-.03a6.5 6.5 0 00-6.44 7.37l-3.26 3.4c-.54.55-1.46.04-1.27-.7zM17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm3.35-7.15l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmark24Filled = wrapIcon(rawSvg({}), 'FlashCheckmark24Filled');
export default FlashCheckmark24Filled;
      