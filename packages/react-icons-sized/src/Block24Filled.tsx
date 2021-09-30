import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm4.25 9.25h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Block24Filled = wrapIcon(rawSvg({}), 'Block24Filled');
export default Block24Filled;
      