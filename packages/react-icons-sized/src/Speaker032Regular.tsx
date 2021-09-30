import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.87 4.72A1.25 1.25 0 0118 5.6v20.8a1.25 1.25 0 01-2.13.88l-4.7-4.7A2 2 0 009.76 22H6a4 4 0 01-4-4v-4a4 4 0 014-4h3.76a2 2 0 001.41-.59l4.7-4.69zm.13 2.7l-3.41 3.4A4 4 0 019.76 12H6a2 2 0 00-2 2v4c0 1.1.9 2 2 2h3.76a4 4 0 012.83 1.17L16 24.6V7.4z" fill={primaryFill} /></svg>;
}

const Speaker032Regular = wrapIcon(rawSvg({}), 'Speaker032Regular');
export default Speaker032Regular;
      