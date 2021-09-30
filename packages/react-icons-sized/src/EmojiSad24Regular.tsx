import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 10c1.63 0 3.16.65 4.28 1.8a.75.75 0 01-1.07 1.04 4.48 4.48 0 00-6.43.01.75.75 0 11-1.07-1.05A5.98 5.98 0 0112 13.5zM9 8.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm6 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const EmojiSad24Regular = wrapIcon(rawSvg({}), 'EmojiSad24Regular');
export default EmojiSad24Regular;
      