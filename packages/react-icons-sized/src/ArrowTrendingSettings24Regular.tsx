import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 3c.41 0 .75.34.75.75v5a.75.75 0 01-1.5 0V5.56l-5.97 5.97c-.3.3-.77.3-1.06 0l-2.22-2.22-5.97 5.97a.75.75 0 01-1.06-1.06l6.5-6.5c.3-.3.77-.3 1.06 0L13 9.94l5.44-5.44h-3.19a.75.75 0 010-1.5h5zm-5.97 10.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const ArrowTrendingSettings24Regular = wrapIcon(rawSvg({}), 'ArrowTrendingSettings24Regular');
export default ArrowTrendingSettings24Regular;
      