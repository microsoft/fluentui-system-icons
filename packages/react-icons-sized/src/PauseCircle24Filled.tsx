import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 6.25v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0zm4.5 0v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const PauseCircle24Filled = wrapIcon(rawSvg({}), 'PauseCircle24Filled');
export default PauseCircle24Filled;
      