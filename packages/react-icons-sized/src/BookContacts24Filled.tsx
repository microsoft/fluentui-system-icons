import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zm9 10.25v.5c0 1-1.38 1.75-3.25 1.75S9 13.75 9 12.75v-.5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75zM14 8.75a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /></svg>;
}

const BookContacts24Filled = wrapIcon(rawSvg({}), 'BookContacts24Filled');
export default BookContacts24Filled;
      