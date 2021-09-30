import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 17a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /><path d="M8 8a6 6 0 000 12h12a6 6 0 000-12H8zm-4.5 6A4.5 4.5 0 018 9.5h12a4.5 4.5 0 110 9H8A4.5 4.5 0 013.5 14z" fill={primaryFill} /></svg>;
}

const ToggleLeft28Regular = wrapIcon(rawSvg({}), 'ToggleLeft28Regular');
export default ToggleLeft28Regular;
      