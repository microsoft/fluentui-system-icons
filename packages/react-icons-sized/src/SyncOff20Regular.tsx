import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-6.93 6h5.2l.75-2.64a.5.5 0 11.96.28l-2 7a.5.5 0 11-.96-.28L7.98 10H3a7 7 0 1014 0h-4.98l-1.04 3.64a.5.5 0 11-.96-.28l2-7a.5.5 0 11.96.28L12.31 9h4.62A7 7 0 0010 3z" fill={primaryFill} /></svg>;
}

const SyncOff20Regular = wrapIcon(rawSvg({}), 'SyncOff20Regular');
export default SyncOff20Regular;
      