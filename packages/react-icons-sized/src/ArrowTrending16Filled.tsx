import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 4h4.55l.1.02.12.03.1.05.04.02.05.03.07.07.09.1.06.1.04.1.02.1.01.13v4.5a.75.75 0 01-1.5.1V6.57l-4.22 4.22a.75.75 0 01-.98.08l-.08-.08-1.47-1.47-2.47 2.47a.75.75 0 01-1.13-.98l.07-.08 3-3c.26-.27.68-.3.98-.07l.08.07 1.47 1.47 3.7-3.69h-2.7a.75.75 0 01-.74-.65L8 4.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowTrending16Filled = wrapIcon(rawSvg({}), 'ArrowTrending16Filled');
export default ArrowTrending16Filled;
      