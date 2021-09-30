import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.5 7.36a.75.75 0 11-1.5-.22 2.25 2.25 0 012.25-1.89c1.12 0 2.08.8 2.24 1.89a.75.75 0 11-1.48.22.75.75 0 00-.76-.61c-.4 0-.71.29-.76.61zM12 18c-3.14 0-5.24-2.36-5.5-5.25h11C17.24 15.64 15.14 18 12 18zM8.75 8.75c-.4 0-.71.29-.76.61a.75.75 0 11-1.48-.22 2.25 2.25 0 012.24-1.89c1.12 0 2.08.8 2.24 1.89a.75.75 0 11-1.48.22.75.75 0 00-.76-.61z" fill={primaryFill} /></svg>;
}

const EmojiLaugh24Filled = wrapIcon(rawSvg({}), 'EmojiLaugh24Filled');
export default EmojiLaugh24Filled;
      