import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29.9 5.14c.48.5.46 1.3-.04 1.77l-19 18a1.25 1.25 0 01-1.77-.06L2.34 17.6a1.25 1.25 0 011.82-1.7l5.9 6.33L28.14 5.09c.5-.47 1.3-.45 1.77.05z" fill={primaryFill} /></svg>;
}

const Checkmark32Filled = wrapIcon(rawSvg({}), 'Checkmark32Filled');
export default Checkmark32Filled;
      