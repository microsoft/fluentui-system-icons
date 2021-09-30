import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10V8h8v2H6zm11-4.09A1.5 1.5 0 0016.5 3h-13A1.5 1.5 0 003 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3.3-.2.66-.3 1.04-.3h6V5.91zM3.5 4h13a.5.5 0 010 1h-13a.5.5 0 010-1zM5 7.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-3zM9 13v4H6v-4h3zm8.5 0c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6zm0 5c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1zm.5-3.5a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zm-6.5-.5a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const BuildingRetailMoney20Filled = wrapIcon(rawSvg({}), 'BuildingRetailMoney20Filled');
export default BuildingRetailMoney20Filled;
      