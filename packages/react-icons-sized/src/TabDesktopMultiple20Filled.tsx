import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2H6v2.5C6 5.33 6.67 6 7.5 6H15v6.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 12.5v-8z" fill={primaryFill} /><path d="M7 4.5V2h5.5A2.5 2.5 0 0115 4.5V5H7.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 18a2.5 2.5 0 01-2.45-2h7.45a3.5 3.5 0 003.5-3.5V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4H7.5z" fill={primaryFill} /></svg>;
}

const TabDesktopMultiple20Filled = wrapIcon(rawSvg({}), 'TabDesktopMultiple20Filled');
export default TabDesktopMultiple20Filled;
      