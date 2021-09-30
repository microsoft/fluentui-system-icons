import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.03 2.34a1.75 1.75 0 00-2.06 0l-7.42 5.4c-.98.72-.48 2.26.73 2.27H16V10H19.72c1.2 0 1.71-1.54.73-2.25l-7.42-5.41zM12 5.26a1 1 0 110 2 1 1 0 010-2zm-.75 10.15c-.1.19-.16.38-.2.6h-1.8v-5h2v4.4zm3.5-3.97A2.75 2.75 0 0013 14v.05l-.25.06v-3.1h2v.43zM11 17v3.5H3.75a.75.75 0 01-.75-.75v-.5C3 18.01 4 17 5.25 17H11zm-5.5-1h2.25v-5H5.5v5zm8.5-1h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zm-2 9a1.5 1.5 0 01-1.5-1.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8z" fill={primaryFill} /></svg>;
}

const BuildingBankToolbox24Filled = wrapIcon(rawSvg({}), 'BuildingBankToolbox24Filled');
export default BuildingBankToolbox24Filled;
      