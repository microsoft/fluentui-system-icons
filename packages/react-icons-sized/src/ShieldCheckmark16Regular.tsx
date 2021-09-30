import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4c.28 0 .5.22.5.5v1.1c-.32-.16-.65-.3-1-.4v-.22a6.64 6.64 0 01-4-1.8 6.65 6.65 0 01-4 1.8V7.5c0 1.43.36 2.56 1.02 3.44.05.66.22 1.29.48 1.86C3.84 11.6 3 9.81 3 7.5v-3c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L9.5 11.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark16Regular = wrapIcon(rawSvg({}), 'ShieldCheckmark16Regular');
export default ShieldCheckmark16Regular;
      