import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm6.5 6a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
}

const Tablet20Filled = wrapIcon(rawSvg({}), 'Tablet20Filled');
export default Tablet20Filled;
      