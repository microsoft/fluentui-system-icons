import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 1h-.5a.25.25 0 00-.25.25V2h1v-.75A.25.25 0 006.75 1z" fill={primaryFill} /><path d="M8.5 3h-4a.5.5 0 00-.5.5V4h5v-.5a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M11.5 12a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M12 9.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M3 6.45c0-.61.32-1.15.81-1.45H9.2c.49.3.81.84.81 1.45v.05h.3a3.7 3.7 0 013.7 3.7v3.3a.5.5 0 01-.5.5H7v-2.1a.4.4 0 00-.4-.4h-.2a.4.4 0 00-.4.4V14H3.5a.5.5 0 01-.5-.5V6.45zm10 3.75c0-1.5-1.2-2.7-2.7-2.7H10V13h3v-2.8zM6 7.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zM6 9.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const BuildingSkyscraper16Filled = wrapIcon(rawSvg({}), 'BuildingSkyscraper16Filled');
export default BuildingSkyscraper16Filled;
      