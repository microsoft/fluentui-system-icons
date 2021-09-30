import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 16c0-.71.15-1.39.42-2H6.25C5.01 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6C6.06 20.92 8.58 22 12 22c1.18 0 2.24-.13 3.2-.38l-.34-1.73A5 5 0 0113 16zm4-9A5 5 0 107 7a5 5 0 0010 0zm5 9a4 4 0 01-1.76 3.32l-.14.68h-4.2l-.14-.68A4 4 0 1122 16zm-5.9 5l.16.8c.14.7.76 1.2 1.47 1.2h.54c.72 0 1.33-.5 1.47-1.2l.16-.8h-3.8z" fill={primaryFill} /></svg>;
}

const PersonLightbulb24Filled = wrapIcon(rawSvg({}), 'PersonLightbulb24Filled');
export default PersonLightbulb24Filled;
      