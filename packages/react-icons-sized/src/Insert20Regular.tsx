import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M6 17a1 1 0 01-1-1v-2a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6zm-2-1c0 1.1.9 2 2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2z" fill={primaryFill} /><path d="M2 10c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15A.5.5 0 012 10z" fill={primaryFill} /></svg>;
}

const Insert20Regular = wrapIcon(rawSvg({}), 'Insert20Regular');
export default Insert20Regular;
      