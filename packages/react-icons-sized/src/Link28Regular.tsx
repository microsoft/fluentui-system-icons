import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a.75.75 0 01.1 1.5H8a4.5 4.5 0 00-.21 9H11a.75.75 0 01.1 1.5H8a6 6 0 01-.22-12H11zm9 0a6 6 0 01.22 12H17a.75.75 0 01-.1-1.5H20a4.5 4.5 0 00.21-9H17a.75.75 0 01-.1-1.5H20zM8 13.25h12a.75.75 0 01.1 1.5H8a.75.75 0 01-.1-1.5H20 8z" fill={primaryFill} /></svg>;
}

const Link28Regular = wrapIcon(rawSvg({}), 'Link28Regular');
export default Link28Regular;
      