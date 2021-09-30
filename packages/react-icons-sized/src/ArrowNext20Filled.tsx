import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 4.75c.38 0 .7.28.74.65l.01.1v9a.75.75 0 01-1.5.1V5.5c0-.41.34-.75.75-.75zm-8.28.22a.75.75 0 01.98-.07l.08.07 4.5 4.5c.27.27.3.68.07.98l-.07.08-4.5 4.5a.75.75 0 01-1.13-.98l.07-.08L9.44 10 5.47 6.03a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ArrowNext20Filled = wrapIcon(rawSvg({}), 'ArrowNext20Filled');
export default ArrowNext20Filled;
      