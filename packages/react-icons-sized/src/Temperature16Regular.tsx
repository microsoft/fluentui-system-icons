import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.5a2.5 2.5 0 115 0v5.45a3.49 3.49 0 01-2.5 5.95A3.5 3.5 0 015 8.95V3.5zM7.5 2C6.67 2 6 2.67 6 3.5v5.89l-.17.15A2.5 2.5 0 007.5 13.9a2.5 2.5 0 001.67-4.36L9 9.39V3.5C9 2.67 8.33 2 7.5 2zM8 6a.5.5 0 00-1 0v4.09a1.5 1.5 0 101 0V6z" fill={primaryFill} /></svg>;
}

const Temperature16Regular = wrapIcon(rawSvg({}), 'Temperature16Regular');
export default Temperature16Regular;
      