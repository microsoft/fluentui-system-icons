import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.54 2a6.5 6.5 0 00-5.68 9.67l-.8 2.08a1 1 0 001.21 1.32l2.49-.7A6.5 6.5 0 108.54 2zM6.57 15.74a6.49 6.49 0 007.71 1.64l2.49.7a1 1 0 001.2-1.33l-.8-2.08a6.47 6.47 0 00-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 01.16 5.98l-.13.2.97 2.54-2.86-.8-.18.09a5.47 5.47 0 01-5.67-.4 7.5 7.5 0 01-1.76-.26z" fill={primaryFill} /></svg>;
}

const ChatMultipleFilled = wrapIcon(rawSvg({}), 'ChatMultipleFilled');
export default ChatMultipleFilled;
      