import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM6.84 2.62L8 3.4l1.16-.78a5.52 5.52 0 00-2.32 0zm-1.2.4c-.73.36-1.37.86-1.89 1.48l.65 2.1 1 .34 2.1-1.59V4.27L5.64 3.03zM3.04 5.6a5.46 5.46 0 00-.51 1.82l.89-.62-.37-1.2zm-.5 3.03c.1.87.4 1.67.85 2.37h1.9l.64-.63L5.1 7.9l-1.02-.35-1.54 1.08zM4.23 12c.4.38.86.7 1.37.95L5.18 12h-.95zm2.66 1.39a5.53 5.53 0 002.22 0l.8-1.78-.62-.61H6.71l-.61.61.79 1.78zm3.51-.44c.5-.25.97-.57 1.37-.95h-.95l-.42.95zM12.61 11c.44-.67.74-1.45.84-2.28l-1.54-1.16-1.01.34-.83 2.46.64.64h1.9zm.87-3.52a5.46 5.46 0 00-.53-1.89l-.37 1.22.9.67zm-1.25-3a5.52 5.52 0 00-1.87-1.45L8.5 4.27v1.08l2.1 1.6 1-.34.63-2.12zM6.1 7.69L6.86 10h2.28l.77-2.32L8 6.23 6.09 7.68z" fill={primaryFill} /></svg>;
}

const SportSoccer16Regular = wrapIcon(rawSvg({}), 'SportSoccer16Regular');
export default SportSoccer16Regular;
      