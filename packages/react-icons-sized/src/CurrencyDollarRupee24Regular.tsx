import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.75a.75.75 0 10-1.5 0v.32A4.25 4.25 0 002 7.25v.54a4.75 4.75 0 002.67 4.27l.83.4v6.92a2.75 2.75 0 01-2-2.65v-.98a.75.75 0 00-1.5 0v.98c0 2.1 1.51 3.83 3.5 4.18v.34a.75.75 0 001.5 0v-.34a4.25 4.25 0 003.5-4.18v-.53a4.75 4.75 0 00-2.67-4.27l-.83-.4V4.6c1.16.33 2 1.4 2 2.65v1a.75.75 0 101.5 0v-1c0-2.1-1.51-3.83-3.5-4.18v-.32zM5.5 4.6v6.2l-.17-.09A3.25 3.25 0 013.5 7.8v-.54c0-1.26.85-2.32 2-2.65zM7 13.2l.17.08A3.25 3.25 0 019 16.2v.53c0 1.26-.84 2.32-2 2.64V13.2z" fill={primaryFill} /><path d="M12.75 3a.75.75 0 000 1.5H15c1.07 0 2 .6 2.45 1.5h-4.7a.75.75 0 000 1.5h4.99A2.75 2.75 0 0115 10h-2.25a.75.75 0 00-.61 1.19l7.5 10.5a.75.75 0 101.22-.88l-6.65-9.31H15a4.25 4.25 0 004.24-4h2.01a.75.75 0 000-1.5h-2.19a4.24 4.24 0 00-.82-1.5h3.01a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /></svg>;
}

const CurrencyDollarRupee24Regular = wrapIcon(rawSvg({}), 'CurrencyDollarRupee24Regular');
export default CurrencyDollarRupee24Regular;
      