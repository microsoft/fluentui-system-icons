import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 9.25v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5C11 8.56 10.44 8 9.75 8h-3.5C5.56 8 5 8.56 5 9.25zm1 0c0-.14.11-.25.25-.25H7v1H6v-.75zm4 .75H8V9h1.75c.14 0 .25.11.25.25V10zm-2 1h2v.75c0 .14-.11.25-.25.25H8v-1zm-1 0v1h-.75a.25.25 0 01-.25-.25V11h1zM3 3c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.67.44 1.06V13a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V6H9.5A1.5 1.5 0 018 4.5V2H5zm4.5 3h2.3L9 2.2v2.3c0 .28.22.5.5.5z" fill={primaryFill} /></svg>;
}

const DocumentTable16Regular = wrapIcon(rawSvg({}), 'DocumentTable16Regular');
export default DocumentTable16Regular;
      