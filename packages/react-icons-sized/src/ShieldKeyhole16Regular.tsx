import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 7.25c0 .51-.3.95-.75 1.15v1.1a.5.5 0 11-1 0V8.4a1.25 1.25 0 111.75-1.15z" fill={primaryFill} /><path d="M7.14 2.04A9.27 9.27 0 012.55 3.5H2.5A.5.5 0 002 4v2.76a7.5 7.5 0 003.69 6.45l2.06 1.22c.15.1.35.1.5 0l2.07-1.22A7.5 7.5 0 0014 6.76V4a.5.5 0 00-.5-.5h-.06a4.96 4.96 0 01-.8-.06 8.98 8.98 0 01-4.29-1.8.5.5 0 00-.7 0l-.11.1c-.09.08-.22.18-.4.3zM3 6.76V4.48a9.6 9.6 0 002.78-.63A9.3 9.3 0 008 2.65l.3.22a9.69 9.69 0 004.7 1.6v2.29a6.5 6.5 0 01-3.2 5.6L8 13.41l-1.8-1.07A6.5 6.5 0 013 6.75z" fill={primaryFill} /></svg>;
}

const ShieldKeyhole16Regular = wrapIcon(rawSvg({}), 'ShieldKeyhole16Regular');
export default ShieldKeyhole16Regular;
      