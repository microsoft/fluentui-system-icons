import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2v1.5c0 2.05-2.09 3.5-5.5 3.5S2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm5 0a2 2 0 012 2v.5c0 2.09-1.57 3.5-4.5 3.5l-.41-.01c.54-.63.85-1.39.9-2.25l.01-.24V12c0-.7-.23-1.33-.63-1.84l-.13-.16H16zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const People20Filled = wrapIcon(rawSvg({}), 'People20Filled');
export default People20Filled;
      