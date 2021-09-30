import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 12a.75.75 0 00-.75.82c.28 3.07 2.55 5.68 6 5.68s5.72-2.6 6-5.68a.75.75 0 00-.75-.82H6.75zM12 17a4.4 4.4 0 01-4.37-3.5h8.74A4.4 4.4 0 0112 17z" fill={primaryFill} /><path d="M15.25 8.75c-.4 0-.71.29-.76.61a.75.75 0 11-1.48-.22 2.25 2.25 0 012.24-1.89c1.12 0 2.08.8 2.24 1.89a.75.75 0 11-1.48.22.75.75 0 00-.76-.61z" fill={primaryFill} /><path d="M8 9.36a.75.75 0 01.75-.61c.4 0 .71.29.76.61a.75.75 0 101.48-.22 2.25 2.25 0 00-2.24-1.89c-1.12 0-2.08.8-2.24 1.89a.75.75 0 001.48.22z" fill={primaryFill} /><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
}

const EmojiLaugh24Regular = wrapIcon(rawSvg({}), 'EmojiLaugh24Regular');
export default EmojiLaugh24Regular;
      