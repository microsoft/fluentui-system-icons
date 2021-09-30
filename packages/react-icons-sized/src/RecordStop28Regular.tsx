import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM2 14a12 12 0 1124 0 12 12 0 01-24 0zm7-3.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 019 17.5v-7z" fill={primaryFill} /></svg>;
}

const RecordStop28Regular = wrapIcon(rawSvg({}), 'RecordStop28Regular');
export default RecordStop28Regular;
      