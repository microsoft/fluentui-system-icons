import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 12.5c.78 0 1.42.6 1.5 1.36V15h-1.5a2.5 2.5 0 00-2.5 2.5v3.22c-.84.2-1.7.28-2.5.28-2.72 0-6.34-.96-6.5-4.27V14c0-.78.6-1.42 1.36-1.5H13.5zm8 2.5c.17 0 .34.02.5.05v-1.19a1.5 1.5 0 00-1.5-1.36h-5.01l.11.16c.25.39.4.85.4 1.34v1h5.5zM8.5 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm9 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM12 17.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-4zm10 .5a1 1 0 01-1-1h-1c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2h-1zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const PeopleMoney24Filled = wrapIcon(rawSvg({}), 'PeopleMoney24Filled');
export default PeopleMoney24Filled;
      