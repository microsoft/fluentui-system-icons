import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c1.3 0 2.42.8 2.84 2a.75.75 0 01-1.38.59l-.04-.1c-.2-.59-.77-.99-1.42-.99-.78 0-1.42.6-1.5 1.36V7H14a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V9c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm0 9.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const LockOpenFilled = wrapIcon(rawSvg({}), 'LockOpenFilled');
export default LockOpenFilled;
      