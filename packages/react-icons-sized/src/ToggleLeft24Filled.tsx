import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7a5 5 0 010 10H7A5 5 0 017 7h10zm-9.75 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /></svg>;
}

const ToggleLeft24Filled = wrapIcon(rawSvg({}), 'ToggleLeft24Filled');
export default ToggleLeft24Filled;
      