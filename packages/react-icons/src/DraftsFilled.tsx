import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.61 8.32l-3.93-3.94-8.04 8.04-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.73-.46l8.03-8.04z" fill={primaryFill} /><path d="M17.18 2.82a2.78 2.78 0 00-3.93 0l-.87.86 3.94 3.93.86-.86.13-.14c.96-1.09.91-2.75-.13-3.8z" fill={primaryFill} /><path d="M11.65 3H2.5a.5.5 0 000 1h8.15l1-1z" fill={primaryFill} /><path d="M8.65 6H2.5a.5.5 0 000 1h5.15l1-1z" fill={primaryFill} /><path d="M5.65 9l-1 1H2.5a.5.5 0 110-1h3.15z" fill={primaryFill} /></svg>;
}

const DraftsFilled = wrapIcon(rawSvg({}), 'DraftsFilled');
export default DraftsFilled;
      