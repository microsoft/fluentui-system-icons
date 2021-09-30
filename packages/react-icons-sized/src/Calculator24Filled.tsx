import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.25C4 3.45 5.46 2 7.25 2h9.5C18.55 2 20 3.46 20 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25h-9.5A3.25 3.25 0 014 18.75V5.25zM9 5a2 2 0 00-2 2v1c0 1.1.9 2 2 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9zm.5 8.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM8.25 18.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17 13.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zm-1.25 5.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-2.5-5.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 18.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const Calculator24Filled = wrapIcon(rawSvg({}), 'Calculator24Filled');
export default Calculator24Filled;
      