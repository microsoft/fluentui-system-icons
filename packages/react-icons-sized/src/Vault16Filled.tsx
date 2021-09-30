import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 8.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zm3.5.5a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm6.85 2.65a1.5 1.5 0 000-1.3l.5-.5a.5.5 0 00-.7-.7l-.5.5a1.5 1.5 0 00-1.3 0l-.5-.5a.5.5 0 10-.7.7l.5.5a1.5 1.5 0 000 1.3l-.5.5a.5.5 0 10.7.7l.5-.5a1.5 1.5 0 001.3 0l.5.5a.5.5 0 00.7-.7l-.5-.5z" fill={primaryFill} /></svg>;
}

const Vault16Filled = wrapIcon(rawSvg({}), 'Vault16Filled');
export default Vault16Filled;
      