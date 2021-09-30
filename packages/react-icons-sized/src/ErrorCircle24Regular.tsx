import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.67a8.34 8.34 0 000 16.66 8.34 8.34 0 000-16.66zm0 10.83a1 1 0 110 2 1 1 0 010-2zM12 7c.37 0 .69.28.74.65v4.6a.75.75 0 01-1.48.1l-.01-.1v-4.5c0-.41.33-.75.74-.75z" fill={primaryFill} /></svg>;
}

const ErrorCircle24Regular = wrapIcon(rawSvg({}), 'ErrorCircle24Regular');
export default ErrorCircle24Regular;
      