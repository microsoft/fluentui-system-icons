import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0017 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 5H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M14.5 11c1.33 0 2.55-.47 3.5-1.26V13a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5.2a5.5 5.5 0 005.3 7z" fill={primaryFill} /><path d="M5.5 16a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /></svg>;
}

const TvArrowRight20Filled = wrapIcon(rawSvg({}), 'TvArrowRight20Filled');
export default TvArrowRight20Filled;
      