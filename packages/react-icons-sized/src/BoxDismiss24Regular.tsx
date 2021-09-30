import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 2.51c.9-.36 1.9-.36 2.8 0l7.5 3.04c.67.27 1.1.91 1.1 1.62v5.64a6.52 6.52 0 00-1.5-1.08V7.77l-7.75 3v2.3a6.5 6.5 0 00-1.5 2.64v-4.95L3.5 7.75v9.08c0 .1.06.19.16.23l7.5 3.04.09.03v-.84c.26.9.71 1.73 1.3 2.43-.65.1-1.33.02-1.96-.23l-7.5-3.04C2.43 18.18 2 17.54 2 16.83V7.17c0-.7.43-1.35 1.1-1.62l7.5-3.04zm2.25 1.4a2.25 2.25 0 00-1.7 0l-1.9.77 7.52 2.93 2.67-1.04-6.6-2.67zm1.84 4.5L7.21 5.5 4.6 6.56 12 9.45l2.7-1.04zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const BoxDismiss24Regular = wrapIcon(rawSvg({}), 'BoxDismiss24Regular');
export default BoxDismiss24Regular;
      