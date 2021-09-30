import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.35 4.45c-.8-.6-1.9-.6-2.7 0L6.71 16.35a1.75 1.75 0 001.05 3.15h32.48c1.69 0 2.4-2.14 1.05-3.15L25.35 4.45zM24 14a2 2 0 110-4 2 2 0 010 4zM6 38.25C6 35.35 8.35 33 11.25 33h11.9a8.4 8.4 0 00-.28 8H7.25C6.56 41 6 40.44 6 39.75v-1.5zm20-8.15a7.78 7.78 0 014-1.1v-7.5h-4v8.6zm8-1.1h4v-7.5h-4V29zm-20 2h-4v-9.5h4V31zm4-9.5V31h4v-9.5h-4zM30.25 31a6.25 6.25 0 100 12.5h1.5a1.25 1.25 0 100-2.5h-1.5a3.75 3.75 0 110-7.5h1.5a1.25 1.25 0 100-2.5h-1.5zm9.5 0a6.25 6.25 0 110 12.5h-1.5a1.25 1.25 0 110-2.5h1.5a3.75 3.75 0 100-7.5h-1.5a1.25 1.25 0 110-2.5h1.5zM29 37.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const BuildingBankLink48Filled = wrapIcon(rawSvg({}), 'BuildingBankLink48Filled');
export default BuildingBankLink48Filled;
      