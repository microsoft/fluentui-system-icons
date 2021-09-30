import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.38 4.68A1.25 1.25 0 007.5 5.76v16.48c0 .97 1.05 1.57 1.88 1.08l14.7-8.59a.85.85 0 000-1.46l-14.7-8.6zM6 5.76c0-2.13 2.3-3.45 4.14-2.38l14.7 8.6a2.35 2.35 0 010 4.05l-14.7 8.59A2.75 2.75 0 016 22.24V5.76z" fill={primaryFill} /></svg>;
}

const Play28Regular = wrapIcon(rawSvg({}), 'Play28Regular');
export default Play28Regular;
      