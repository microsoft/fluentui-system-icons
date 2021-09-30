import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3.5c0-.83-.67-1.5-1.5-1.5h-3C5.67 2 5 2.67 5 3.5v9c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-9zM9.5 3c.28 0 .5.22.5.5v9a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V11h1.5a.5.5 0 000-1H6V8.5h2a.5.5 0 000-1H6V6h1.5a.5.5 0 000-1H6V3.5c0-.28.22-.5.5-.5h3z" fill={primaryFill} /></svg>;
}

const Ruler16Regular = wrapIcon(rawSvg({}), 'Ruler16Regular');
export default Ruler16Regular;
      