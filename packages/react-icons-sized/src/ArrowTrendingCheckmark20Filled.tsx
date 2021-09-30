import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.8l-4.5 4.1a.75.75 0 01-1.03-.02L9 8.06l-4.72 4.72a.75.75 0 01-1.06-1.06l5.25-5.25a.75.75 0 011.06 0l1.5 1.5 3.79-3.47h-2.57a.75.75 0 110-1.5h4.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.62-1.83a.5.5 0 00-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 00-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 00.05-.7z" fill={primaryFill} /></svg>;
}

const ArrowTrendingCheckmark20Filled = wrapIcon(rawSvg({}), 'ArrowTrendingCheckmark20Filled');
export default ArrowTrendingCheckmark20Filled;
      