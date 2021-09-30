import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a4 4 0 014 3.8V12.73l.06.06c.8.86 1.3 1.97 1.41 3.16l.02.27.01.28a5.5 5.5 0 11-9.73-3.51l.17-.2.06-.06V6a4 4 0 013.6-3.98l.2-.02h.2zm0 2a2 2 0 00-2 1.85v7.75l-.33.3A3.49 3.49 0 0012 20a3.5 3.5 0 002.49-5.96l-.16-.15-.33-.3V6a2 2 0 00-2-2zm0 4a1 1 0 011 1v5.2a2.5 2.5 0 11-2 0V9a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const Temperature24Filled = wrapIcon(rawSvg({}), 'Temperature24Filled');
export default Temperature24Filled;
      