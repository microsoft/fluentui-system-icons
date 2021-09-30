import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.34 3c-.22.45-.34.96-.34 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .7.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V8c.54 0 1.05-.12 1.5-.34v10.59A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h10.59zm3.16-1a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const Badge24Regular = wrapIcon(rawSvg({}), 'Badge24Regular');
export default Badge24Regular;
      