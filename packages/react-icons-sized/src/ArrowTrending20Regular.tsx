import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.96 5.3a.5.5 0 00-.46-.3h-6a.5.5 0 000 1h4.8l-5.8 5.8-2.15-2.15a.5.5 0 00-.7 0l-5.5 5.5a.5.5 0 00.7.7L8 10.71l2.15 2.14c.2.2.5.2.7 0L17 6.71v4.79a.5.5 0 001 0v-6a.5.5 0 00-.04-.2z" fill={primaryFill} /></svg>;
}

const ArrowTrending20Regular = wrapIcon(rawSvg({}), 'ArrowTrending20Regular');
export default ArrowTrending20Regular;
      