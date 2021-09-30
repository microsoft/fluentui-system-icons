import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.01 7.86A1 1 0 018 7h4a1 1 0 110 2H8.87l-.19 1.3.35-.05a3.65 3.65 0 11.55 7.25 3.7 3.7 0 01-2.73-1.2l-.34-.38a1 1 0 111.48-1.34l.34.37c.31.35.77.55 1.25.55a1.65 1.65 0 10-.24-3.28l-1.68.27a1 1 0 01-1.15-1.13l.5-3.5zm7.28 4.43a1 1 0 011.42 0l.79.8.8-.8a1 1 0 011.4 1.42l-.79.79.8.8a1 1 0 01-1.42 1.4l-.79-.79-.8.8a1 1 0 01-1.4-1.42l.79-.79-.8-.8a1 1 0 010-1.4zM4.75 17a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Multiplier5X24Filled = wrapIcon(rawSvg({}), 'Multiplier5X24Filled');
export default Multiplier5X24Filled;
      