import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5a2.5 2.5 0 015 0v.7a5.5 5.5 0 00-3.98 4.82A2.5 2.5 0 014 8V4.5zm1.04 6.68A3.5 3.5 0 013 8a.5.5 0 00-1 0 4.5 4.5 0 003.32 4.34 5.47 5.47 0 01-.28-1.16zM6 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const MicProhibited16Filled = wrapIcon(rawSvg({}), 'MicProhibited16Filled');
export default MicProhibited16Filled;
      