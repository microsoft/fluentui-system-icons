import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5zM2.75 4a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 00-.75-.75H2.75zM9.5 6a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5.26 7.71a1.36 1.36 0 100-2.71 1.36 1.36 0 000 2.71zm-1.4.68a.86.86 0 00-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.62.16 1.27.16 1.88 0h.06a1.67 1.67 0 001.26-1.63.86.86 0 00-.86-.86h-2.8z" fill={primaryFill} /></svg>;
}

const ContactCard16Regular = wrapIcon(rawSvg({}), 'ContactCard16Regular');
export default ContactCard16Regular;
      