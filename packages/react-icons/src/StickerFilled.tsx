import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.11 2C16.71 2 18 3.3 18 4.89V11h-4.42a2.61 2.61 0 00-2.43 1.85c-1.48.4-3.13.01-4.3-1.16a.5.5 0 00-.7.7A5.42 5.42 0 0011 13.91V18H4.89C3.29 18 2 16.7 2 15.11V4.9C2 3.29 3.3 2 4.89 2H15.1zM18 12c-.06.08-.12.15-.2.22l-5.58 5.59L12 18V13.6c.08-.85.75-1.52 1.6-1.6H18zM7 7a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const StickerFilled = wrapIcon(rawSvg({}), 'StickerFilled');
export default StickerFilled;
      