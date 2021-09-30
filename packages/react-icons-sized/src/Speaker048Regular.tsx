import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.08 6.42A1.75 1.75 0 0128 7.72v32.56c0 1.51-1.8 2.31-2.92 1.3l-8.2-7.36c-.88-.79-2-1.22-3.18-1.22H9a5.25 5.25 0 01-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.7c1.17 0 2.3-.43 3.18-1.22l8.2-7.36zm.42 2.98l-6.95 6.25a7.25 7.25 0 01-4.85 1.85H9a2.75 2.75 0 00-2.75 2.75v7.5A2.75 2.75 0 009 30.5h4.7c1.79 0 3.51.66 4.85 1.85l6.95 6.25V9.4z" fill={primaryFill} /></svg>;
}

const Speaker048Regular = wrapIcon(rawSvg({}), 'Speaker048Regular');
export default Speaker048Regular;
      