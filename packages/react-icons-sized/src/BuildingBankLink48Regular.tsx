import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 14a2 2 0 100-4 2 2 0 000 4zm1.35-9.55c-.8-.6-1.9-.6-2.7 0L6.71 16.35a1.75 1.75 0 001.05 3.15H9v12c-1.77.85-3 2.66-3 4.75v3.5c0 .7.56 1.25 1.25 1.25h15.62a8.38 8.38 0 01-.78-2.5H8.5v-2.25a2.75 2.75 0 012.75-2.75h11.62a8.22 8.22 0 012.38-2.89v-11.1h4.25V29H32v-9.5h4.5V29H39v-9.5h1.24c1.69 0 2.4-2.15 1.05-3.16L25.35 4.45zM22.75 31H18.5V19.5h4.25V31zM16 31h-4.5V19.5H16V31zm-5.99-14L24 6.56 37.99 17H10zm20.24 14a6.25 6.25 0 100 12.5h1.5a1.25 1.25 0 100-2.5h-1.5a3.75 3.75 0 110-7.5h1.5a1.25 1.25 0 100-2.5h-1.5zm9.5 0a6.25 6.25 0 110 12.5h-1.5a1.25 1.25 0 110-2.5h1.5a3.75 3.75 0 100-7.5h-1.5a1.25 1.25 0 110-2.5h1.5zM29 37.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const BuildingBankLink48Regular = wrapIcon(rawSvg({}), 'BuildingBankLink48Regular');
export default BuildingBankLink48Regular;
      