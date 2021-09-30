import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 10-7.41 7.98 5.46 5.46 0 01-.38-.98H10a7 7 0 117-6.8c.34.1.67.23.98.39L18 10zm-7.34 2.89a.75.75 0 10-.44 1.08c.1-.38.25-.74.44-1.08zm-.17-6.48a.5.5 0 00-.99.09v4.59a.5.5 0 001-.09V6.41zm1.15 8.51a2 2 0 001.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.71 4.71 0 010-1.01l.46-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ErrorCircleSettings20Regular = wrapIcon(rawSvg({}), 'ErrorCircleSettings20Regular');
export default ErrorCircleSettings20Regular;
      