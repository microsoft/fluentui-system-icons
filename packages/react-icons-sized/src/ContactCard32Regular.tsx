import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 13a1 1 0 011-1h6a1 1 0 010 2h-6a1 1 0 01-1-1zm1 4a1 1 0 100 2h6a1 1 0 000-2h-6zm-6-4a2 2 0 11-4 0 2 2 0 014 0zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5zM2 7.25C2 5.45 3.46 4 5.25 4h21.5C28.55 4 30 5.46 30 7.25v17.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 24.75V7.25zM5.25 6C4.56 6 4 6.56 4 7.25v17.5c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25V7.25C28 6.56 27.44 6 26.75 6H5.25z" fill={primaryFill} /></svg>;
}

const ContactCard32Regular = wrapIcon(rawSvg({}), 'ContactCard32Regular');
export default ContactCard32Regular;
      