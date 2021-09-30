import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6zm5.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 10.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75V11a2 2 0 01-2 2H9a2 2 0 01-2-2v-.25z" fill={primaryFill} /></svg>;
}

const BookContactsFilled = wrapIcon(rawSvg({}), 'BookContactsFilled');
export default BookContactsFilled;
      