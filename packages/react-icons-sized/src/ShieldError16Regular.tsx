import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zm0 6.5A.75.75 0 108 10a.75.75 0 000 1.5zm-.86-9.46A9.27 9.27 0 012.55 3.5H2.5A.5.5 0 002 4v2.76a7.5 7.5 0 003.69 6.45l2.06 1.22c.15.1.35.1.5 0l2.07-1.22A7.5 7.5 0 0014 6.76V4a.5.5 0 00-.5-.5h-.06a4.96 4.96 0 01-.8-.06 8.98 8.98 0 01-4.29-1.8.5.5 0 00-.7 0l-.11.1c-.09.08-.22.18-.4.3zM3 6.76V4.48a9.6 9.6 0 002.78-.63A9.3 9.3 0 008 2.65l.3.22a9.69 9.69 0 004.7 1.6v2.29a6.5 6.5 0 01-3.2 5.6L8 13.41l-1.8-1.07A6.5 6.5 0 013 6.75z" fill={primaryFill} /></svg>;
}

const ShieldError16Regular = wrapIcon(rawSvg({}), 'ShieldError16Regular');
export default ShieldError16Regular;
      