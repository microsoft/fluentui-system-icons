import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.18 1.12a.5.5 0 01.54-.07l13 6.5a.5.5 0 010 .9l-13 6.5a.5.5 0 01-.7-.6L2.98 8 1.02 1.65a.5.5 0 01.16-.53zM3.87 8.5l-1.55 5.03L13.38 8 2.32 2.47 3.87 7.5H9.5a.5.5 0 010 1H3.87z" fill={primaryFill} /></svg>;
}

const Send16Regular = wrapIcon(rawSvg({}), 'Send16Regular');
export default Send16Regular;
      