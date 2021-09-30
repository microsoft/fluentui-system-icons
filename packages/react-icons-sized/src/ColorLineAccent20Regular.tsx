import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.1 13a1.5 1.5 0 001.77.95l3.1-.76.22-.07h.02l.26-.12H16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h.1z" fill={primaryFill} /></svg>;
}

const ColorLineAccent20Regular = wrapIcon(rawSvg({}), 'ColorLineAccent20Regular');
export default ColorLineAccent20Regular;
      