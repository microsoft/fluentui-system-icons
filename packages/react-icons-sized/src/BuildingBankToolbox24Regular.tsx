import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.26a1 1 0 11-2 0 1 1 0 012 0zm.03-3.92a1.75 1.75 0 00-2.06 0l-7.42 5.4c-.98.72-.48 2.27.73 2.27h.22v5.8A2.75 2.75 0 003 18.24v1.5c0 .41.34.75.75.75H11V19H4.5v-.75c0-.69.56-1.25 1.25-1.25H11v-.5c0-.35.07-.7.2-1H9.5V10h1.75v5.4a2.5 2.5 0 011.5-1.29v-4.1h1.75v1.54c.38-.2.8-.3 1.25-.3H16v-1.24h2v1.24h1.25l.25.01v-1.25h.22c1.2 0 1.71-1.55.73-2.26l-7.42-5.41zm-1.18 1.2c.09-.06.21-.06.3 0l6.8 4.97H5.05l6.8-4.96zM6 15.5V10h2v5.5H6zm8-.5h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zm-2 9a1.5 1.5 0 01-1.5-1.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8z" fill={primaryFill} /></svg>;
}

const BuildingBankToolbox24Regular = wrapIcon(rawSvg({}), 'BuildingBankToolbox24Regular');
export default BuildingBankToolbox24Regular;
      