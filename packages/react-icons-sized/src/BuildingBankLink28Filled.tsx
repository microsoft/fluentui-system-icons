import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.11 2.3a1.5 1.5 0 011.78 0l9.5 7a1.5 1.5 0 01-.74 2.7H4.35a1.5 1.5 0 01-.74-2.7l9.5-7zm.9 6.7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5 4H22v5h-2.5v-5zM13 22.75c0-1.03.32-1.97.87-2.75H6.25A3.25 3.25 0 003 23.25v.5c0 .41.34.75.75.75h9.58a4.74 4.74 0 01-.33-1.75zm2-3.87c.7-.51 1.56-.83 2.5-.87V13H15v5.88zM13 19v-6h-2.5v6H13zm-4.5-6v6H6v-6h2.5zm9.24 7.5a2.25 2.25 0 000 4.5h.5a.75.75 0 010 1.5h-.5a3.75 3.75 0 010-7.5h.5a.75.75 0 010 1.5h-.5zM17 22.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM23.25 25a2.25 2.25 0 000-4.5h-.5a.75.75 0 010-1.5h.5a3.75 3.75 0 010 7.5h-.5a.75.75 0 010-1.5h.5z" fill={primaryFill} /></svg>;
}

const BuildingBankLink28Filled = wrapIcon(rawSvg({}), 'BuildingBankLink28Filled');
export default BuildingBankLink28Filled;
      