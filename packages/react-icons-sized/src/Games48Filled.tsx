import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a14 14 0 100 28h12a14 14 0 100-28H18zm-1.75 8c.69 0 1.25.56 1.25 1.25V23h3.25a1.25 1.25 0 110 2.5H17.5v3.25a1.25 1.25 0 11-2.5 0V25.5h-3.75a1.25 1.25 0 110-2.5H15v-3.75c0-.69.56-1.25 1.25-1.25zM32 27.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.5-4.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const Games48Filled = wrapIcon(rawSvg({}), 'Games48Filled');
export default Games48Filled;
      