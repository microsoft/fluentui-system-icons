import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.45 4.17a.73.73 0 00-1.02-.01 8.23 8.23 0 00.17 11.86c.3.27.74.24 1.01-.03a.78.78 0 00-.02-1.11 6.73 6.73 0 01-.15-9.62c.3-.3.32-.78.01-1.1z" fill={primaryFill} /><path d="M7.21 5.93a.71.71 0 00-1-.02 5.73 5.73 0 00.18 8.35c.3.27.73.23.99-.03.32-.33.26-.85-.04-1.14a4.24 4.24 0 01-.14-6.05c.29-.3.33-.8.01-1.11z" fill={primaryFill} /><path d="M12.79 5.93a.71.71 0 011-.02 5.73 5.73 0 01-.18 8.35.71.71 0 01-.99-.03c-.32-.33-.26-.85.04-1.14a4.24 4.24 0 00.14-6.05c-.29-.3-.33-.8-.01-1.11z" fill={primaryFill} /><path d="M14.55 4.17a.73.73 0 011.02-.01 8.23 8.23 0 01-.17 11.86.73.73 0 01-1.01-.03.78.78 0 01.02-1.11 6.73 6.73 0 00.15-9.62.78.78 0 01-.01-1.1z" fill={primaryFill} /><path d="M10 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const Live20Filled = wrapIcon(rawSvg({}), 'Live20Filled');
export default Live20Filled;
      