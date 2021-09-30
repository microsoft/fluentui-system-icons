import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 2a.75.75 0 00-.75.75v1C3 5.55 4.46 7 6.25 7h11.5C19.55 7 21 5.54 21 3.75v-1a.75.75 0 00-1.5 0v1c0 .97-.78 1.75-1.75 1.75H15.5V2.75a.75.75 0 00-1.5 0V5.5h-4V2.75a.75.75 0 00-1.5 0V5.5H6.25c-.97 0-1.75-.78-1.75-1.75v-1A.75.75 0 003.75 2z" fill={primaryFill} /><path d="M3.75 22a.75.75 0 01-.75-.75v-1C3 18.45 4.46 17 6.25 17h11.5c1.8 0 3.25 1.46 3.25 3.25v1a.75.75 0 01-1.5 0v-1c0-.97-.78-1.75-1.75-1.75H15.5v2.75a.75.75 0 01-1.5 0V18.5h-4v2.75a.75.75 0 01-1.5 0V18.5H6.25c-.97 0-1.75.78-1.75 1.75v1c0 .41-.34.75-.75.75z" fill={primaryFill} /><path d="M12 13.06l1.47 1.47a.75.75 0 101.06-1.06L13.06 12l1.47-1.47a.75.75 0 10-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 10-1.06 1.06L10.94 12l-1.47 1.47a.75.75 0 101.06 1.06L12 13.06z" fill={primaryFill} /><path d="M8.73 12.75l.07-.08.67-.67-.67-.67a1.85 1.85 0 01-.07-.08H2.75a.75.75 0 000 1.5h5.98z" fill={primaryFill} /><path d="M15.52 12.75h5.73a.75.75 0 000-1.5h-5.73l-.07.08-.67.67.67.67.07.08z" fill={primaryFill} /></svg>;
}

const TableDeleteRow24Regular = wrapIcon(rawSvg({}), 'TableDeleteRow24Regular');
export default TableDeleteRow24Regular;
      