import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a4 4 0 01.2 8H12a.75.75 0 01-.1-1.5H14a2.5 2.5 0 00.16-5H12a.75.75 0 01-.1-1.5H14zM8 6a.75.75 0 01.1 1.5H6a2.5 2.5 0 00-.16 5H8a.75.75 0 01.1 1.5H6a4 4 0 01-.2-8H8zM6.25 9.25h7.5a.75.75 0 01.1 1.5h-7.6a.75.75 0 01-.1-1.5h7.6-7.5z" fill={primaryFill} /></svg>;
}

const Link20Filled = wrapIcon(rawSvg({}), 'Link20Filled');
export default Link20Filled;
      