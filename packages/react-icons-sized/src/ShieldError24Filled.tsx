import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.45 2.15C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 5-2.96 8.68-8.73 10.95a.75.75 0 01-.54 0C5.96 19.68 3 16 3 11V5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0zM12 16a.75.75 0 100 1.5.75.75 0 000-1.5zm0-9.02c-.38 0-.7.28-.74.65l-.01.1v6.6a.75.75 0 001.5 0V7.63a.75.75 0 00-.75-.65z" fill={primaryFill} /></svg>;
}

const ShieldError24Filled = wrapIcon(rawSvg({}), 'ShieldError24Filled');
export default ShieldError24Filled;
      