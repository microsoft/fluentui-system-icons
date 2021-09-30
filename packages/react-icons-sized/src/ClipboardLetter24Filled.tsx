import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h4.83a1.5 1.5 0 01.05-1.12l1.79-3.98.01-.03.84-1.86V15l1.85-4.12a1.5 1.5 0 012.74 0L20 14.52V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M12.5 22a.51.51 0 01-.21-.04.5.5 0 01-.25-.66l1.8-4v-.01l2.7-6a.5.5 0 01.9 0l2.7 6 .02.02 1.8 3.98a.5.5 0 11-.92.42L19.37 18h-4.75l-1.67 3.7a.5.5 0 01-.44.3zm4.5-9.28L15.06 17h3.85L17 12.72z" fill={primaryFill} /></svg>;
}

const ClipboardLetter24Filled = wrapIcon(rawSvg({}), 'ClipboardLetter24Filled');
export default ClipboardLetter24Filled;
      