import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 3.85a.5.5 0 11.7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7-.7L11.79 8 7.65 3.85zm-4 0a.5.5 0 11.7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7-.7L7.79 8 3.65 3.85z" fill={primaryFill} /></svg>;
}

const ChevronDoubleRight16Regular = wrapIcon(rawSvg({}), 'ChevronDoubleRight16Regular');
export default ChevronDoubleRight16Regular;
      