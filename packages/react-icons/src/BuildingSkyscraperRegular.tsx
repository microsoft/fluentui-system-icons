import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M9.25 9.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7.5 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M9.25 12a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M14.5 14.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M13.75 12.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7 2a.5.5 0 00-.5.5V4h-.94a.5.5 0 00-.5.5v1.74A2 2 0 004 8v8.5c0 .27.22.5.5.5h12a.5.5 0 00.5-.5v-4A4.5 4.5 0 0012.5 8H12a2 2 0 00-.94-1.7V4.5a.5.5 0 00-.5-.5H9.5V2.5A.5.5 0 009 2H7zm3 4H6.06V5h4v1H10zm1 10h-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2H5V8a1 1 0 011-1h4a1 1 0 011 1v8zm-4 0v-2h2v2H7zm9 0h-4V9h.5a3.5 3.5 0 013.5 3.5V16zM8.5 4h-1V3h1v1z" fill={primaryFill} /></svg>;
}

const BuildingSkyscraperRegular = wrapIcon(rawSvg({}), 'BuildingSkyscraperRegular');
export default BuildingSkyscraperRegular;
      