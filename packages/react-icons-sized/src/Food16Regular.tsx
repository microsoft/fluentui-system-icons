import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 1c.28 0 .5.22.5.5v3c0 .65.42 1.2 1 1.41V1.5a.5.5 0 011 0v4.41c.58-.2 1-.76 1-1.41v-3a.5.5 0 011 0v3a2.5 2.5 0 01-2 2.45v7.55a.5.5 0 01-1 0V6.95A2.5 2.5 0 013 4.5v-3c0-.28.22-.5.5-.5zm6.98 1.48c.16-.16.34-.28.52-.37V7h-1V3.5c0-.34.17-.72.48-1.02zM11 8v6.5a.5.5 0 001 0v-13a.5.5 0 00-.5-.5 2.5 2.5 0 00-1.73.77A2.5 2.5 0 009 3.5v4c0 .28.22.5.5.5H11z" fill={primaryFill} /></svg>;
}

const Food16Regular = wrapIcon(rawSvg({}), 'Food16Regular');
export default Food16Regular;
      