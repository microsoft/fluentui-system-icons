import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.25C1 2.55 1.56 2 2.25 2h.5C3.44 2 4 2.56 4 3.25v9.5c0 .69-.56 1.24-1.25 1.24h-.5C1.55 14 1 13.44 1 12.74v-9.5zM2.25 3a.25.25 0 00-.25.25v9.5c0 .13.11.24.25.24h.5c.14 0 .25-.1.25-.25v-9.5A.25.25 0 002.75 3h-.5zM5 3.25C5 2.55 5.56 2 6.25 2h.5c.68 0 1.24.56 1.24 1.25v9.5c0 .69-.56 1.24-1.24 1.24h-.5C5.55 14 5 13.44 5 12.74v-9.5zM6.25 3a.25.25 0 00-.25.25v9.5c0 .13.1.24.25.24h.5c.13 0 .24-.1.24-.25v-9.5A.25.25 0 006.75 3h-.5zm5.72 1.78a1.25 1.25 0 00-1.57-.72l-.58.2c-.67.24-1.01 1-.75 1.65l2.94 7.3c.25.63.94.94 1.57.72l.58-.2c.68-.24 1.02-.99.75-1.65l-2.94-7.3zM10.73 5c.13-.05.27.02.32.14l2.93 7.3a.25.25 0 01-.15.33l-.58.2a.25.25 0 01-.31-.14L10 5.54a.25.25 0 01.15-.33l.58-.2z" fill={primaryFill} /></svg>;
}

const Library16Regular = wrapIcon(rawSvg({}), 'Library16Regular');
export default Library16Regular;
      