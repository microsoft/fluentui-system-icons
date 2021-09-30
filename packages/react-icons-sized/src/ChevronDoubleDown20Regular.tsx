import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.85 8.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.14 9.35a.5.5 0 11.71-.7L10 13.8l5.15-5.16c.2-.2.5-.2.7 0zm0-4c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.14 5.35a.5.5 0 11.71-.7L10 9.8l5.15-5.16c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ChevronDoubleDown20Regular = wrapIcon(rawSvg({}), 'ChevronDoubleDown20Regular');
export default ChevronDoubleDown20Regular;
      