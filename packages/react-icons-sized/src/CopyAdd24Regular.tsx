import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 6.75V4.63C2.63 4.93 2 5.77 2 6.75v10.5A4.75 4.75 0 006.75 22h5.06c-.42-.44-.79-.94-1.08-1.5H6.75a3.25 3.25 0 01-3.25-3.25V6.75z" fill={primaryFill} /><path d="M18 11.17V4.25C18 3.01 17 2 15.75 2h-9C5.51 2 4.5 3 4.5 4.25v13c0 1.24 1 2.25 2.25 2.25h3.56a6.48 6.48 0 01-.3-1.5H6.76a.75.75 0 01-.75-.75v-13c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75V11c.52 0 1.02.06 1.5.17z" fill={primaryFill} /><path d="M16.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 000-1H17v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H16v2.5a.5.5 0 101 0z" fill={primaryFill} /></svg>;
}

const CopyAdd24Regular = wrapIcon(rawSvg({}), 'CopyAdd24Regular');
export default CopyAdd24Regular;
      