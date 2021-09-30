import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 11a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM9 8.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const EmojiSurprise24Filled = wrapIcon(rawSvg({}), 'EmojiSurprise24Filled');
export default EmojiSurprise24Filled;
      