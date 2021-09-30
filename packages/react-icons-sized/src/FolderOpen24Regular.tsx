import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 9.5v-.75c0-1.24-1-2.25-2.25-2.25h-5.72L9.64 4.52c-.4-.34-.9-.52-1.43-.52H4.25C3.01 4 2 5 2 6.25v11.5C2 18.99 3 20 4.25 20H18.47c.8 0 1.5-.55 1.7-1.33l1.75-7a1.75 1.75 0 00-1.7-2.17H20zm-15.75-4h3.96c.17 0 .34.06.48.17l2.58 2.16c.14.1.3.17.48.17h6c.41 0 .75.34.75.75v.75H6.42c-1.03 0-1.93.7-2.18 1.7l-.74 2.98V6.25c0-.41.34-.75.75-.75zm1.45 6.07a.75.75 0 01.72-.57h13.8c.16 0 .28.15.24.31l-1.75 7a.25.25 0 01-.24.19H4.28a.25.25 0 01-.24-.31l1.66-6.62z" fill={primaryFill} /></svg>;
}

const FolderOpen24Regular = wrapIcon(rawSvg({}), 'FolderOpen24Regular');
export default FolderOpen24Regular;
      