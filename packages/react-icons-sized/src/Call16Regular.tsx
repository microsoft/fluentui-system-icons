import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.71 5.26c-.19-1.26.7-2.39 2.06-2.8a.99.99 0 011.2.6l.44 1.15a1 1 0 01-.26 1.1L5.86 6.48a.5.5 0 00-.15.47l.01.05a5.12 5.12 0 00.16.58 7.27 7.27 0 001.8 2.89l.1.1.04.03a.5.5 0 00.48.1l1.67-.53a1 1 0 011.07.32l.8.96c.33.4.29 1-.1 1.34-1.03.97-2.46 1.17-3.45.37a12.73 12.73 0 01-4.58-7.91zm3.05 1.76l1.07-.98a2 2 0 00.52-2.18L7.92 2.7a1.99 1.99 0 00-2.45-1.2C3.8 2 2.44 3.52 2.72 5.4a13.73 13.73 0 004.94 8.54c1.5 1.2 3.48.8 4.77-.4.76-.72.84-1.9.18-2.71l-.8-.96a2 2 0 00-2.14-.64l-1.39.44a6.6 6.6 0 01-.93-1.23 6.27 6.27 0 01-.6-1.42z" fill={primaryFill} /></svg>;
}

const Call16Regular = wrapIcon(rawSvg({}), 'Call16Regular');
export default Call16Regular;
      