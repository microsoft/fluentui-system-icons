import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.35 7.94a4.25 4.25 0 015.67-3.16l.47.17a.75.75 0 10.52-1.4l-.47-.18a5.75 5.75 0 00-7.66 4.28L13.03 12H7.75a.75.75 0 100 1.5h4.99l-1.1 5.56a4.25 4.25 0 01-5.66 3.16l-.47-.17a.75.75 0 00-.52 1.4l.47.18a5.75 5.75 0 007.66-4.28l1.14-5.85h4.99a.75.75 0 000-1.5h-4.7l.8-4.06z" fill={primaryFill} /></svg>;
}

const FStop28Regular = wrapIcon(rawSvg({}), 'FStop28Regular');
export default FStop28Regular;
      