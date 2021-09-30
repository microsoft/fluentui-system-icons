import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.7 1.88a3.25 3.25 0 014.6 0L30.12 13.7a3.25 3.25 0 010 4.6L18.3 30.12a3.25 3.25 0 01-4.6 0L1.88 18.3a3.25 3.25 0 010-4.6L13.7 1.88zm3.18 1.42a1.25 1.25 0 00-1.76 0L3.3 15.12a1.25 1.25 0 000 1.76L15.12 28.7c.48.49 1.28.49 1.76 0L28.7 16.88c.49-.48.49-1.28 0-1.76L16.88 3.3z" fill={primaryFill} /></svg>;
}

const Diamond32Regular = wrapIcon(rawSvg({}), 'Diamond32Regular');
export default Diamond32Regular;
      