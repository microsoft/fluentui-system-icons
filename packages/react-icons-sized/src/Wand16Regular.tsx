import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 1c.28 0 .5.22.5.5V2h.5a.5.5 0 010 1H14v.5a.5.5 0 01-1 0V3h-.5a.5.5 0 010-1h.5v-.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M3.5 3c.28 0 .5.22.5.5V4h.5a.5.5 0 110 1H4v.5a.5.5 0 11-1 0V5h-.5a.5.5 0 010-1H3v-.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M12.5 12a.5.5 0 000-1H12v-.5a.5.5 0 00-1 0v.5h-.5a.5.5 0 000 1h.5v.5a.5.5 0 001 0V12h.5z" fill={primaryFill} /><path d="M8.73 4.56a1.91 1.91 0 012.7 2.71l-7.16 7.17a1.91 1.91 0 01-2.71-2.7l7.17-7.18zm-.48 1.9l-5.98 5.98a.91.91 0 001.29 1.3l5.98-5.99-1.29-1.3zm2 .58l.48-.48a.91.91 0 10-1.3-1.29l-.47.48 1.29 1.3z" fill={primaryFill} /></svg>;
}

const Wand16Regular = wrapIcon(rawSvg({}), 'Wand16Regular');
export default Wand16Regular;
      