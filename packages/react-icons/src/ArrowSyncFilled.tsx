import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.89 3.75a6.25 6.25 0 00-3.63 11.26.75.75 0 01-.9 1.2 7.75 7.75 0 014-13.93l-.6-.59A.75.75 0 019.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 11-1.06-1.06L9.9 3.75zm.22 12.5a6.25 6.25 0 003.63-11.26.75.75 0 01.9-1.2 7.75 7.75 0 01-4 13.93l.6.59a.75.75 0 01-1.06 1.06l-2.12-2.12a.75.75 0 010-1.06l2.12-2.12a.75.75 0 111.06 1.06l-1.13 1.12z" fill={primaryFill} /></svg>;
}

const ArrowSyncFilled = wrapIcon(rawSvg({}), 'ArrowSyncFilled');
export default ArrowSyncFilled;
      