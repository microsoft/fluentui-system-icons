import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.03 15.5c.05-.53.18-1.03.39-1.5H6.25C5.01 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43C6.47 21.1 8.85 22 12 22c1.18 0 2.24-.13 3.2-.38l-.29-1.47c-.85.23-1.82.35-2.91.35-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h6.78zM17 7A5 5 0 107 7a5 5 0 0010 0zM8.5 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM22 16a4 4 0 01-1.76 3.32l-.14.68h-4.2l-.14-.68A4 4 0 1122 16zm-5.9 5l.16.8c.14.7.76 1.2 1.47 1.2h.54c.72 0 1.33-.5 1.47-1.2l.16-.8h-3.8z" fill={primaryFill} /></svg>;
}

const PersonLightbulb24Regular = wrapIcon(rawSvg({}), 'PersonLightbulb24Regular');
export default PersonLightbulb24Regular;
      