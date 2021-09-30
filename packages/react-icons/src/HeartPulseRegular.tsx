import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 16.8l4.75-4.8h-1a1.5 1.5 0 01-.36-.04l-3.86 3.9-3.87-3.9a1.5 1.5 0 01-.36.04h-1l4.75 4.8c.26.27.69.27.95 0zm6.22-12.49a4.42 4.42 0 01.98 4.7L17.5 9h-.89c.67-1.28.48-2.9-.6-3.98A3.3 3.3 0 0011.3 5l-.95.96a.5.5 0 01-.71 0L8.68 5a3.3 3.3 0 00-4.7-.01A3.4 3.4 0 003.41 9H2.5l-.18.01a4.4 4.4 0 01.94-4.74 4.3 4.3 0 016.13.02l.6.61.6-.6.1-.1a4.3 4.3 0 016.03.11zm-8.76 2a.5.5 0 00-.92 0L5.47 10H2.5a.5.5 0 000 1h3.3a.5.5 0 00.46-.3L7.5 7.79l2.04 4.9a.5.5 0 00.88.08l2.15-3.43 1.3 1.49c.1.1.24.17.38.17h3.25a.5.5 0 000-1h-3.02l-1.6-1.83a.5.5 0 00-.8.06l-2 3.18-2.12-5.1z" fill={primaryFill} /></svg>;
}

const HeartPulseRegular = wrapIcon(rawSvg({}), 'HeartPulseRegular');
export default HeartPulseRegular;
      