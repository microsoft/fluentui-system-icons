import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.84 10.54C7.14 6.92 10.15 5 14.25 5c3.95 0 7.37 1.7 9.05 4H19a1 1 0 100 2h6a1 1 0 001-1V4a1 1 0 10-2 0v2.75C21.72 4.45 18.12 3 14.25 3c-4.9 0-8.5 2.38-11.1 6.46a1 1 0 001.7 1.08zM18.24 13c-1.66 0-2.86.74-3.6 1.95a7.92 7.92 0 00-.9 4.05c0 1.46.22 2.92.9 4.05a3.97 3.97 0 003.6 1.95c1.66 0 2.86-.74 3.59-1.95.68-1.13.9-2.6.9-4.05 0-1.46-.22-2.92-.9-4.05a3.97 3.97 0 00-3.6-1.95zm-2.5 6a6 6 0 01.62-3.02c.36-.6.91-.98 1.88-.98.96 0 1.51.38 1.88.98a6 6 0 01.62 3.02 6 6 0 01-.62 3.02c-.37.6-.92.98-1.88.98-.97 0-1.52-.38-1.88-.98a6 6 0 01-.62-3.02zM11 14a1 1 0 00-1.86-.52v.01a3.2 3.2 0 01-.17.25 8.13 8.13 0 01-2.49 2.4 1 1 0 001.03 1.72A9.18 9.18 0 009 16.73V24a1 1 0 002 0V14z" fill={primaryFill} /></svg>;
}

const SkipForward1028Filled = wrapIcon(rawSvg({}), 'SkipForward1028Filled');
export default SkipForward1028Filled;
      