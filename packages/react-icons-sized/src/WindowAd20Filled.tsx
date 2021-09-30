import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 8a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zM10 9v3H7V9h3zM3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM4.5 7v7.25c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V7h-11z" fill={primaryFill} /></svg>;
}

const WindowAd20Filled = wrapIcon(rawSvg({}), 'WindowAd20Filled');
export default WindowAd20Filled;
      