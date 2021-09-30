import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V4.7l-4.65 4.65a.5.5 0 01-.7 0L9 7.71l-5.15 5.14a.5.5 0 01-.7-.7l5.5-5.5a.5.5 0 01.7 0L11 8.29 15.3 4h-2.8a.5.5 0 010-1h4zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.62-1.83a.5.5 0 00-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 00-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 00.05-.7z" fill={primaryFill} /></svg>;
}

const ArrowTrendingCheckmarkRegular = wrapIcon(rawSvg({}), 'ArrowTrendingCheckmarkRegular');
export default ArrowTrendingCheckmarkRegular;
      