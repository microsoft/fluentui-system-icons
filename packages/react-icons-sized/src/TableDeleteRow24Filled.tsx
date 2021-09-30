import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 2H8v5H6.25A3.25 3.25 0 013 3.75v-1c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M9.5 2h5v5h-5V2z" fill={primaryFill} /><path d="M21 2.75a.75.75 0 00-.75-.75H16v5h1.75C19.55 7 21 5.54 21 3.75v-1z" fill={primaryFill} /><path d="M20.25 22c.41 0 .75-.34.75-.75v-1c0-1.8-1.46-3.25-3.25-3.25H16v5h4.25z" fill={primaryFill} /><path d="M9.5 22h5v-5h-5v5z" fill={primaryFill} /><path d="M3.75 22H8v-5H6.25A3.25 3.25 0 003 20.25v1c0 .41.34.75.75.75z" fill={primaryFill} /><path d="M15.52 12.75h5.73a.75.75 0 000-1.5h-5.73l-.07.08-.67.67.67.67.07.08z" fill={primaryFill} /><path d="M8.73 12.75l.07-.08.67-.67-.67-.67a1.85 1.85 0 01-.07-.08H2.75a.75.75 0 000 1.5h5.98z" fill={primaryFill} /><path d="M14.53 14.53c-.3.3-.77.3-1.06 0L12 13.06l-1.47 1.47a.75.75 0 11-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 111.06-1.06L12 10.94l1.47-1.47a.75.75 0 111.06 1.06L13.06 12l1.47 1.47c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const TableDeleteRow24Filled = wrapIcon(rawSvg({}), 'TableDeleteRow24Filled');
export default TableDeleteRow24Filled;
      