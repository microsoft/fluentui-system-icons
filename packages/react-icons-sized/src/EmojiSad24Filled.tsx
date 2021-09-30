import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 11.5c-1.63 0-3.17.66-4.29 1.8a.75.75 0 001.07 1.05 4.48 4.48 0 016.43 0 .75.75 0 001.07-1.06A5.98 5.98 0 0012 13.5zM9 8.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const EmojiSad24Filled = wrapIcon(rawSvg({}), 'EmojiSad24Filled');
export default EmojiSad24Filled;
      