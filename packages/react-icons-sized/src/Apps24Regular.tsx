import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 2.33l3.17 3.18c.88.88.88 2.3 0 3.18l-2.58 2.58A2.25 2.25 0 0121 13.5v5.25c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h5.25c1.13 0 2.06.83 2.23 1.91l2.58-2.58c.88-.88 2.3-.88 3.18 0zm-14 16.42c0 .41.34.75.75.75h6v-6.75H4.5v6zm8.25.75h6c.41 0 .75-.34.75-.75V13.5a.75.75 0 00-.75-.75h-6v6.75zm-2.25-15H5.25a.75.75 0 00-.75.75v6h6.75v-6a.75.75 0 00-.75-.75zm2.25 4.8v1.95h1.94L12.75 9.3zm3.62-5.9L13.2 6.56c-.3.3-.3.77 0 1.06l3.18 3.18c.3.3.77.3 1.06 0l3.18-3.18c.3-.3.3-.77 0-1.06l-3.18-3.18a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
}

const Apps24Regular = wrapIcon(rawSvg({}), 'Apps24Regular');
export default Apps24Regular;
      