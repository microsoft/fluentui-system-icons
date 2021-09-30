import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75c0-.41.34-.75.75-.75h4.5c.2 0 .39.08.53.22L13.56 11h5.88l-3.72-3.72a.75.75 0 111.06-1.06l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 11-1.06-1.06l3.72-3.72h-5.88l-4.78 4.78a.75.75 0 01-.53.22h-4.5a.75.75 0 010-1.5h4.19l4.25-4.25L7.94 7.5H3.75A.75.75 0 013 6.75z" fill={primaryFill} /></svg>;
}

const Merge24Regular = wrapIcon(rawSvg({}), 'Merge24Regular');
export default Merge24Regular;
      