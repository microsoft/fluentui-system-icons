import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a5 5 0 00-3 9v4.5a.5.5 0 00.76.43L8 13.58l2.24 1.35a.5.5 0 00.76-.43V10a5 5 0 00-3-9zM4 6a4 4 0 118 0 4 4 0 01-8 0zm6 4.58v3.04l-1.74-1.05a.5.5 0 00-.52 0L6 13.62v-3.04a4.98 4.98 0 004 0z" fill={primaryFill} /></svg>;
}

const Ribbon16Regular = wrapIcon(rawSvg({}), 'Ribbon16Regular');
export default Ribbon16Regular;
      