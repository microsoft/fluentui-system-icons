import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 4h7.5C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4h9zm7.75 3h-7.75v11.5h7.5c.13 0 .25-.11.25-.25V7zm-9.25 0H3.5v11.25c0 .13.11.25.25.25h7.5V7z" fill={primaryFill} /></svg>;
}

const DualScreenHeader24Regular = wrapIcon(rawSvg({}), 'DualScreenHeader24Regular');
export default DualScreenHeader24Regular;
      