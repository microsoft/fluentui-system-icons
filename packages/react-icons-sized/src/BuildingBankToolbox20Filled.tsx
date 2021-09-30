import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.23 2.18a1.33 1.33 0 011.54 0l5.85 4.16A.92.92 0 0115.1 8H2.9a.92.92 0 01-.52-1.66l5.85-4.16zM9 5.88A.83.83 0 109 4.2a.83.83 0 000 1.67zM3.5 9v4h2V9h-2zm.67 5C2.97 14 2 14.97 2 16.17v.33c0 .28.22.5.5.5H9v-3H4.17zm7.33-4V9h-2v3c.37-.5.91-.84 1.54-.96.07-.38.23-.74.46-1.04zm-3 3V9h-2v4h2zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" fill={primaryFill} /></svg>;
}

const BuildingBankToolbox20Filled = wrapIcon(rawSvg({}), 'BuildingBankToolbox20Filled');
export default BuildingBankToolbox20Filled;
      