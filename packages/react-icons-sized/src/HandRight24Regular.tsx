import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4v6.25a.75.75 0 001.5 0V5.22c0-.24.2-.47.5-.47.26 0 .5.24.5.5v7.5a.75.75 0 001.3.52 1.96 1.96 0 01.12-.13c.1-.08.23-.2.4-.32.36-.25.81-.5 1.3-.58.54-.1 1.05-.04 1.4.14.2.1.36.26.44.53l-1.66 1.24a.76.76 0 00-.08.07l-2.18 2.18c-.93.93-1.7 2-2.3 3.19-.28.56-.85.91-1.47.91H9.04a1.5 1.5 0 01-1.33-.71C6.98 18.53 6 16.5 6 14.75V7c0-.27.22-.5.5-.5.29 0 .5.23.5.5v3.5a.75.75 0 001.5 0V5.25c0-.28.22-.5.5-.5.29 0 .5.22.5.5v5a.75.75 0 001.5 0V4c0-.28.21-.5.5-.5.29 0 .5.22.5.5zm1.99-.75c-.21 0-.42.03-.6.09l.6-.1zm-.6.09A1.98 1.98 0 0011.49 2c-.9 0-1.61.58-1.88 1.34a2 2 0 00-2.6 1.73A2 2 0 004.5 7v7.74c0 2.18 1.17 4.52 1.92 5.8A3 3 0 009.04 22h2.73c1.19 0 2.28-.67 2.81-1.74.52-1.04 1.2-1.98 2.02-2.8l2.14-2.14 1.96-1.47c.19-.14.3-.36.3-.6 0-1.06-.53-1.8-1.3-2.2a3.76 3.76 0 00-2.33-.29c-.52.1-.99.29-1.37.5V5.25c0-1.06-.89-2.01-2.01-2" fill={primaryFill} /></svg>;
}

const HandRight24Regular = wrapIcon(rawSvg({}), 'HandRight24Regular');
export default HandRight24Regular;
      