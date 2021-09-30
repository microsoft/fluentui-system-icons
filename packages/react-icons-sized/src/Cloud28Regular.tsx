import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 12a6.5 6.5 0 0112.96 0h.27a4.75 4.75 0 110 9.5H7.25a4.75 4.75 0 110-9.5h.27zM14 7.5a5 5 0 00-5 5v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 000 6.5h13.5a3.25 3.25 0 000-6.5h-1a.75.75 0 01-.75-.75v-.25a5 5 0 00-5-5z" fill={primaryFill} /></svg>;
}

const Cloud28Regular = wrapIcon(rawSvg({}), 'Cloud28Regular');
export default Cloud28Regular;
      