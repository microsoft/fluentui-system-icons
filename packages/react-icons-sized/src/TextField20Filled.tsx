import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm5-.5v1a.5.5 0 001 0V7h1.5v6H9a.5.5 0 000 1h2a.5.5 0 000-1h-.5V7H12v.5a.5.5 0 001 0v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const TextField20Filled = wrapIcon(rawSvg({}), 'TextField20Filled');
export default TextField20Filled;
      