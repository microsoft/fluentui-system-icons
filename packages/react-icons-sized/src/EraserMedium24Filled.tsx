import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.65 2.64a2.25 2.25 0 013.2.02l4.9 5c.86.89.86 2.3 0 3.17l-.7.7a6.5 6.5 0 00-9.04 5.55L5.64 11.7 4.1 13.2c-.3.3-.3.78 0 1.07l5.1 5c.3.3.77.3 1.06 0l.8-.81c.09.58.25 1.13.48 1.65l-.22.22c-.87.88-2.29.89-3.17.02l-5.1-5.01c-.9-.88-.9-2.32 0-3.2l9.6-9.51z" fill={primaryFill} /><path d="M17.5 12a5.5 5.5 0 11.01 10.99A5.5 5.5 0 0117.5 12z" fill={primaryFill} /></svg>;
}

const EraserMedium24Filled = wrapIcon(rawSvg({}), 'EraserMedium24Filled');
export default EraserMedium24Filled;
      