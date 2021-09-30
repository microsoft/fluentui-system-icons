import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M12.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M3.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M5 8a1 1 0 011-1h4a1 1 0 011 1v3a3.02 3.02 0 01-.15.93A3 3 0 015 11V8z" fill={primaryFill} /><path d="M4 8c0-.36.1-.7.27-1H2a1 1 0 00-1 1v2.5a2.5 2.5 0 003.44 2.32A3.98 3.98 0 014 11V8z" fill={primaryFill} /><path d="M12 8v3c0 .65-.16 1.27-.44 1.82A2.5 2.5 0 0015 10.5V8a1 1 0 00-1-1h-2.27A2 2 0 0112 8z" fill={primaryFill} /></svg>;
}

const PeopleTeam16Filled = wrapIcon(rawSvg({}), 'PeopleTeam16Filled');
export default PeopleTeam16Filled;
      