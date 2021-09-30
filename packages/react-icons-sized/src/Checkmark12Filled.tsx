import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 01-1.08.02L2.22 6.53a.75.75 0 011.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 011.06-.04z" fill={primaryFill} /></svg>;
}

const Checkmark12Filled = wrapIcon(rawSvg({}), 'Checkmark12Filled');
export default Checkmark12Filled;
      