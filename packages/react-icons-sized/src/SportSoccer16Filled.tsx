import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm4.14-4.97c-.73.35-1.37.85-1.89 1.47l.65 2.1 1 .34 2.1-1.59V4.27L5.64 3.03zm-3.1 5.6c.1.87.4 1.67.85 2.37h1.9l.64-.63L5.1 7.9l-1.02-.35-1.54 1.08zm4.35 4.76a5.53 5.53 0 002.22 0l.8-1.78-.62-.61H6.71l-.61.61.79 1.78zM12.6 11c.44-.67.74-1.45.84-2.28l-1.54-1.16-1.01.34-.83 2.46.64.64h1.9zm-.38-6.51a5.52 5.52 0 00-1.87-1.46L8.5 4.27v1.08l2.1 1.6 1-.34.63-2.12z" fill={primaryFill} /></svg>;
}

const SportSoccer16Filled = wrapIcon(rawSvg({}), 'SportSoccer16Filled');
export default SportSoccer16Filled;
      