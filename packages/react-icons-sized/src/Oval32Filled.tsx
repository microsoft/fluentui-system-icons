import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6a10 10 0 000 20h8a10 10 0 000-20h-8z" fill={primaryFill} /></svg>;
}

const Oval32Filled = wrapIcon(rawSvg({}), 'Oval32Filled');
export default Oval32Filled;
      