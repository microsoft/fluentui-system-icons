import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.78 18.53c-.3.3-.77.3-1.06 0L14 9.81l-8.72 8.72a.75.75 0 01-1.06-1.06l9.25-9.25c.3-.3.77-.3 1.06 0l9.25 9.25c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const ChevronUp28Regular = wrapIcon(rawSvg({}), 'ChevronUp28Regular');
export default ChevronUp28Regular;
      