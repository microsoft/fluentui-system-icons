import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v4.74a5.36 5.36 0 01-2-1.36V6a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h6.73a6.7 6.7 0 001.45 2H6a3 3 0 01-3-3V6z" fill={primaryFill} /><path d="M22.5 12c-1.53 0-2.9-.61-4.15-1.85a.5.5 0 00-.7 0A5.72 5.72 0 0113.5 12a.5.5 0 00-.5.5v3.3c.1 3.05 1.74 5.14 4.84 6.17.1.04.22.04.32 0 3.2-1.06 4.84-3.25 4.84-6.47v-3.09a.5.5 0 00-.5-.41zm-6.6 1.9l.07-.06.07-.04a.5.5 0 01.5.04l.06.06 1.4 1.4 1.4-1.4.07-.06a.5.5 0 01.56 0l.07.06.06.07a.5.5 0 010 .56l-.06.07-1.4 1.4 1.4 1.4.06.07a.5.5 0 010 .56l-.06.07-.07.06a.5.5 0 01-.56 0l-.07-.06-1.4-1.4-1.4 1.4-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07 1.4-1.4-1.4-1.4-.06-.07a.5.5 0 010-.56l.06-.07z" fill={primaryFill} /></svg>;
}

const TabShieldDismiss24Filled = wrapIcon(rawSvg({}), 'TabShieldDismiss24Filled');
export default TabShieldDismiss24Filled;
      