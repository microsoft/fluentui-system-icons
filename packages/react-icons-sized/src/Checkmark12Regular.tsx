import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 3.15c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L5 7.29l4.15-4.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const Checkmark12Regular = wrapIcon(rawSvg({}), 'Checkmark12Regular');
export default Checkmark12Regular;
      