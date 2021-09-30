import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.23 2.18a1.33 1.33 0 011.54 0l5.85 4.16A.92.92 0 0116.1 8H3.9a.92.92 0 01-.52-1.66l5.85-4.16zm.77 3.7a.83.83 0 100-1.67.83.83 0 000 1.67zM4.5 9v4h2V9h-2zM3 16.17c0-1.2.97-2.17 2.17-2.17h3.17a3.49 3.49 0 000 3H3.5a.5.5 0 01-.5-.5v-.33zM9.05 13c.14-.14.29-.26.45-.37V9h-2v4h1.55zm2.45-1h1V9h-2v3.14c.32-.09.65-.14 1-.14zm2 0h2V9h-2v3zm-2 1a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H15a.5.5 0 000 1h.5a2.5 2.5 0 000-5H15zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const BuildingBankLink20Filled = wrapIcon(rawSvg({}), 'BuildingBankLink20Filled');
export default BuildingBankLink20Filled;
      