import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25a1.25 1.25 0 012.3-.7.5.5 0 10.82-.55 2.25 2.25 0 10-1.74 3.5H15.5a.5.5 0 000-1H4.38a.5.5 0 00-.06 0A1.25 1.25 0 013 6.25z" fill={primaryFill} /><path d="M8.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /><path d="M5.5 10a.5.5 0 000 1h12a.5.5 0 000-1h-12z" fill={primaryFill} /><path d="M2 13c0-.28.22-.5.5-.5h12a.5.5 0 010 1h-12A.5.5 0 012 13z" fill={primaryFill} /><path d="M5.5 15a.5.5 0 000 1h12a.5.5 0 100-1h-12z" fill={primaryFill} /></svg>;
}

const ReadingListRegular = wrapIcon(rawSvg({}), 'ReadingListRegular');
export default ReadingListRegular;
      