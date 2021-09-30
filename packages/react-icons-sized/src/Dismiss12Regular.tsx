import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.09 2.22l.06-.07a.5.5 0 01.63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 11.7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 01-.7-.7L5.29 6 2.15 2.85a.5.5 0 01-.06-.63l.06-.07-.06.07z" fill={primaryFill} /></svg>;
}

const Dismiss12Regular = wrapIcon(rawSvg({}), 'Dismiss12Regular');
export default Dismiss12Regular;
      