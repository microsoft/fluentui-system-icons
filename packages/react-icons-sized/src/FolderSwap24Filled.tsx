import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.82 6.5h5.93c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v8.28l-2.01-2.01A1.75 1.75 0 0017.17 17h-2.33A1.75 1.75 0 0012 15.02l-2.5 2.5a1.75 1.75 0 000 2.48H4.26c-1.2 0-2.17-.93-2.24-2.1L2 17.75V10.5h6.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48z" fill={primaryFill} /><path d="M8.2 4c.47 0 .92.14 1.3.4l.15.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96z" fill={primaryFill} /><path d="M13.78 16.79a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 000 1.06l2.5 2.5a.75.75 0 101.06-1.07l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5a.75.75 0 00-1.06 1.06L19.44 18h-6.87l1.21-1.21z" fill={primaryFill} /></svg>;
}

const FolderSwap24Filled = wrapIcon(rawSvg({}), 'FolderSwap24Filled');
export default FolderSwap24Filled;
      