import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm7-14a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm7-21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /></svg>;
}

const Dialpad32Filled = wrapIcon(rawSvg({}), 'Dialpad32Filled');
export default Dialpad32Filled;
      