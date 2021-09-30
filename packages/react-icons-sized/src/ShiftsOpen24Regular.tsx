import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.25c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h3a.75.75 0 000-1.5h-3c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /><path d="M14.75 3a.75.75 0 000 1.5h3c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3h-3z" fill={primaryFill} /><path d="M12.5 6.75a.75.75 0 00-1.5 0v6c0 .41.34.75.75.75h4.5a.75.75 0 000-1.5H12.5V6.75z" fill={primaryFill} /></svg>;
}

const ShiftsOpen24Regular = wrapIcon(rawSvg({}), 'ShiftsOpen24Regular');
export default ShiftsOpen24Regular;
      