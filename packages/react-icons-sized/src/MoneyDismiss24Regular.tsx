import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8a3 3 0 100 6 3 3 0 000-6zM9 11a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM2 7.25C2 6.01 3 5 4.25 5h12.5C17.99 5 19 6 19 7.25v3.92a6.52 6.52 0 00-1.5-.17V9.5h-.75c-1.24 0-2.25-1-2.25-2.25V6.5h-8v.75c0 1.24-1 2.25-2.25 2.25H3.5v3h.75c1.24 0 2.25 1 2.25 2.25v.75h4.81c-.15.48-.25.98-.3 1.5H4.26C3.01 17 2 16 2 14.75v-7.5zm2.25-.75a.75.75 0 00-.75.75V8h.75c.41 0 .75-.34.75-.75V6.5h-.75zM17.5 8v-.75a.75.75 0 00-.75-.75H16v.75c0 .41.34.75.75.75h.75zm-14 6.75c0 .41.34.75.75.75H5v-.75a.75.75 0 00-.75-.75H3.5v.75zm.9 3.75h6.68c.08.52.22 1.03.42 1.5H7a3 3 0 01-2.6-1.5zm16.1-6.77c.55.29 1.06.65 1.5 1.08V10a3 3 0 00-1.5-2.6v4.33zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const MoneyDismiss24Regular = wrapIcon(rawSvg({}), 'MoneyDismiss24Regular');
export default MoneyDismiss24Regular;
      