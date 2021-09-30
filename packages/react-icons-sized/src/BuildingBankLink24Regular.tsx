import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.25a1 1 0 11-2 0 1 1 0 012 0zm.03-3.93a1.75 1.75 0 00-2.06 0L3.55 7.74c-.98.71-.48 2.26.73 2.26h.22v5.8A2.75 2.75 0 003 18.25v1.5c0 .41.34.75.75.75h7.42A4.75 4.75 0 0111 19H4.5v-.75c0-.69.56-1.25 1.25-1.25h5.82c.31-.58.74-1.1 1.26-1.5h-.08V10h1.75v4.67c.4-.11.82-.17 1.25-.17H16V10h2v4.5h1.5V10h.22c1.2 0 1.71-1.55.73-2.26l-7.42-5.42zm-1.18 1.22c.09-.07.21-.07.3 0l6.8 4.96H5.05l6.8-4.96zm-.6 6.46v5.5H9.5V10h1.75zM6 15.5V10h2v5.5H6zm17 3.75a3.75 3.75 0 00-3.75-3.75h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5V23h.2A3.75 3.75 0 0023 19.24zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5h-.15a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const BuildingBankLink24Regular = wrapIcon(rawSvg({}), 'BuildingBankLink24Regular');
export default BuildingBankLink24Regular;
      