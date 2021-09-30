import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v7.31c-.5-.1-1-.13-1.5-.08V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05c.08.05.15.11.22.18l.04.03.05.04L19.4 8.4A2 2 0 0120 9.83V20a2 2 0 01-2 2H9.49l1.5-1.5H18zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38zM6.48 22.53a.75.75 0 001.06 0l4.41-4.4a3.47 3.47 0 10-4.9-4.91l-.04.04-.03-.04a3.47 3.47 0 10-4.9 4.9l4.4 4.41z" fill={primaryFill} /></svg>;
}

const DocumentHeart24Regular = wrapIcon(rawSvg({}), 'DocumentHeart24Regular');
export default DocumentHeart24Regular;
      