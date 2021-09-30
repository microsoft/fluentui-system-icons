import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a.5.5 0 00-.5.5.5.5 0 01-1 0 1.5 1.5 0 113 0 .5.5 0 01-1 0A.5.5 0 006 6zm4 0a.5.5 0 00-.5.5.5.5 0 01-1 0 1.5 1.5 0 113 0 .5.5 0 01-1 0A.5.5 0 0010 6zM4.54 8a.5.5 0 00-.5.57 4 4 0 007.92 0 .5.5 0 00-.5-.57H4.54zM8 11a3 3 0 01-2.83-2h5.66A3 3 0 018 11zm6-3A6 6 0 102 8a6 6 0 0012 0zM3 8a5 5 0 1110 0A5 5 0 013 8z" fill={primaryFill} /></svg>;
}

const EmojiLaugh16Regular = wrapIcon(rawSvg({}), 'EmojiLaugh16Regular');
export default EmojiLaugh16Regular;
      