import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 013.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 00-2.15-1.6h-.07a1 1 0 01-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 9.62 2.33 2.33 0 005.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 012 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2zm3.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V13h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V14h-1.5a.5.5 0 010-1H13v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CloudAdd20Regular = wrapIcon(rawSvg({}), 'CloudAdd20Regular');
export default CloudAdd20Regular;
      