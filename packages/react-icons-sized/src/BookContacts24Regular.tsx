import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 12.25a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75v.5c0 1 1.38 1.75 3.25 1.75s3.25-.75 3.25-1.75v-.5zM14 8.75a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zM4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm1.5 0V18H19V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const BookContacts24Regular = wrapIcon(rawSvg({}), 'BookContacts24Regular');
export default BookContacts24Regular;
      