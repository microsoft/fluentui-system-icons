import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 12.5h16.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Subtract24Regular = wrapIcon(rawSvg({}), 'Subtract24Regular');
export default Subtract24Regular;
      