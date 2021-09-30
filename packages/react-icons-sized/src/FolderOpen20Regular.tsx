import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7.07V7a2.5 2.5 0 00-2.5-2.5H9.66l-1.6-1.2a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.46 17h10.72c.72 0 1.34-.5 1.47-1.21l1.36-7A1.5 1.5 0 0017 7.07zM4.5 4h2.66c.11 0 .22.04.3.1L9.2 5.4c.08.06.19.1.3.1h5c.82 0 1.5.67 1.5 1.5H5.82c-.71 0-1.33.51-1.47 1.22l-1.3 6.67a1.5 1.5 0 01-.05-.4V5.5C3 4.67 3.67 4 4.5 4zm.83 4.4a.5.5 0 01.5-.4h10.7a.5.5 0 01.5.6l-1.36 7a.5.5 0 01-.49.4H4.46a.5.5 0 01-.49-.6l1.36-7z" fill={primaryFill} /></svg>;
}

const FolderOpen20Regular = wrapIcon(rawSvg({}), 'FolderOpen20Regular');
export default FolderOpen20Regular;
      