import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3c1.11 0 2.18.2 3.16.57l-1.18 1.2a7.5 7.5 0 105.28 5.33l1.2-1.2A9 9 0 1112 3zm9.06-.33l.15.14a2.76 2.76 0 010 3.9l-6.3 6.35c-.18.18-.4.32-.65.39l-4.21 1.2a.5.5 0 01-.62-.61l1.2-4.22c.08-.24.2-.47.38-.65l6.31-6.35a2.74 2.74 0 013.74-.15zm-2.67 1.2l-6.31 6.36-.71 2.49 2.47-.71 6.3-6.36c.47-.46.5-1.18.1-1.68l-.1-.1a1.24 1.24 0 00-1.75 0z" fill={primaryFill} /></svg>;
}

const Status24Regular = wrapIcon(rawSvg({}), 'Status24Regular');
export default Status24Regular;
      