import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.93 1.72a8.53 8.53 0 013.86 0L12 4.87l-1.93-1.15zm-1.83.65l3.01 1.8v2.2l-2.79 2.02-2.04-.7-.59-3.54a8.53 8.53 0 012.41-1.78zM4.6 7.83L4.95 10l-1.43 1.43c.09-1.3.46-2.51 1.07-3.59zm-.97 5.6l2.33-2.32 2.04.7 1.08 3.34-.97 1.58-3.3-.2c-.58-.92-.99-1.97-1.18-3.1zm2.47 4.68l1.9.11.68 1.6c-.96-.4-1.84-1-2.58-1.71zm4.44 2.26l-1.18-2.8.96-1.57h3.37l.91 1.58-1.04 2.78a8.55 8.55 0 01-3.02.01zm4.83-.56l.57-1.52 1.67.1a8.5 8.5 0 01-2.24 1.42zm3.53-2.83l-3.02-.2-.94-1.62 1.09-3.34 2.01-.7 2.31 2.52a8.46 8.46 0 01-1.45 3.34zm1.6-5.4l-1.44-1.57.36-2.17a8.45 8.45 0 011.08 3.74zm-2.32-5.42l-.59 3.53-2.04.7-2.79-2.02v-2.2l3-1.8a8.53 8.53 0 012.42 1.79zm-8.7 5.36L12 9.68l2.54 1.84-.97 2.98h-3.13l-.97-2.98z" fill={primaryFill} /></svg>;
}

const SportSoccer24Regular = wrapIcon(rawSvg({}), 'SportSoccer24Regular');
export default SportSoccer24Regular;
      