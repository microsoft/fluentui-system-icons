import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h9c1.8 0 3.25 1.46 3.25 3.25v9c0 .65-.19 1.25-.51 1.75l-5.7-5.37a2.25 2.25 0 00-3.09 0L3.51 17C3.2 16.5 3 15.9 3 15.25v-9zM13.75 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M11.26 12.72l5.65 5.33c-.49.28-1.06.45-1.66.45h-9c-.6 0-1.17-.17-1.66-.45l5.64-5.33a.75.75 0 011.03 0z" fill={primaryFill} /><path d="M8.75 21C7.6 21 6.59 20.4 6 19.5h9.74a3.75 3.75 0 003.75-3.75V6.01c.9.58 1.5 1.59 1.5 2.74v7c0 2.9-2.35 5.25-5.25 5.25h-7z" fill={primaryFill} /></svg>;
}

const ImageMultiple24Filled = wrapIcon(rawSvg({}), 'ImageMultiple24Filled');
export default ImageMultiple24Filled;
      