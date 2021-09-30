import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75C2 5.78 2.78 5 3.75 5h13.5c.97 0 1.75.78 1.75 1.75v4.42A6.52 6.52 0 0011.02 17H3.75C2.78 17 2 16.22 2 15.25v-8.5zm3 .5c0 .41-.34.75-.75.75h-1v1.5h1c1.24 0 2.25-1 2.25-2.25v-1H5v1zm5.5 6.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-6.25.5c.41 0 .75.34.75.75v1h1.5v-1c0-1.24-1-2.25-2.25-2.25h-1V14h1zm12.5-6a.75.75 0 01-.75-.75v-1h-1.5v1c0 1.24 1 2.25 2.25 2.25h1V8h-1zM4.4 18.5h6.68c.08.52.22 1.03.42 1.5H7a3 3 0 01-2.6-1.5zm16.1-6.77c.55.29 1.06.65 1.5 1.08V10a3 3 0 00-1.5-2.6v4.33zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const MoneyDismiss24Filled = wrapIcon(rawSvg({}), 'MoneyDismiss24Filled');
export default MoneyDismiss24Filled;
      