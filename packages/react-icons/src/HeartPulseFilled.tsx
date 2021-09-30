import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 4.29a4.3 4.3 0 00-6.13-.02 4.4 4.4 0 00-.94 4.74L2.5 9h2.3l1.32-3.09a1.5 1.5 0 012.76.01l1.39 3.32.96-1.54a1.5 1.5 0 012.4-.19L14.93 9h2.57l.2.01c.61-1.57.29-3.42-.98-4.7a4.3 4.3 0 00-6.13-.01l-.6.6-.6-.61zm.16 12.51L4.8 12h1c.6 0 1.15-.36 1.38-.91l.3-.72 1.14 2.7a1.5 1.5 0 002.65.22l1.43-2.28.42.48c.29.32.7.51 1.13.51h1l-4.75 4.8a.66.66 0 01-.95 0zM7.96 6.3a.5.5 0 00-.92 0L5.47 10H2.5a.5.5 0 000 1h3.3a.5.5 0 00.46-.3L7.5 7.79l2.04 4.9a.5.5 0 00.88.08l2.15-3.43 1.3 1.49c.1.1.24.17.38.17h3.25a.5.5 0 000-1h-3.02l-1.6-1.83a.5.5 0 00-.8.06l-2 3.18-2.12-5.1z" fill={primaryFill} /></svg>;
}

const HeartPulseFilled = wrapIcon(rawSvg({}), 'HeartPulseFilled');
export default HeartPulseFilled;
      