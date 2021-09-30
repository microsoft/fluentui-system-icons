import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H5.5C4.67 2 4 2.67 4 3.5v17c0 .83.67 1.5 1.5 1.5h5.97l.2-.01a3.87 3.87 0 01.6-4.73l5-5A3.86 3.86 0 0120 11.13V10h-6a2 2 0 01-2-2zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5zm8.53 4.97a2.87 2.87 0 00-4.06 0l-5 5a2.87 2.87 0 104.06 4.06l5-5a2.87 2.87 0 000-4.06zm-3 1.06a1.37 1.37 0 111.94 1.94L19 17.94 17.06 16l1.97-1.97zm-2 4.94c.3.3.3.77 0 1.06l-1 1a.75.75 0 11-1.06-1.06l1-1c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const DocumentPill24Filled = wrapIcon(rawSvg({}), 'DocumentPill24Filled');
export default DocumentPill24Filled;
      