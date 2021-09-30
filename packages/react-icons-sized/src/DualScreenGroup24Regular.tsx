import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 4h7.5C21.22 4 22 4.8 22 5.75v12.5c0 .96-.78 1.75-1.75 1.75H3.75c-.96 0-1.74-.79-1.74-1.75V5.75C2 4.78 2.79 4 3.76 4h9zm7.5 1.5h-7.5v13h7.5c.14 0 .25-.11.25-.25V5.75a.25.25 0 00-.25-.25zm-9 0h-7.5a.25.25 0 00-.24.25v12.5c0 .13.1.25.25.25h7.5v-13z" fill={primaryFill} /></svg>;
}

const DualScreenGroup24Regular = wrapIcon(rawSvg({}), 'DualScreenGroup24Regular');
export default DualScreenGroup24Regular;
      