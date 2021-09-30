import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.3 1.88a3.25 3.25 0 00-4.6 0L1.88 13.7a3.25 3.25 0 000 4.6L13.7 30.12a3.25 3.25 0 004.6 0L30.12 18.3a3.25 3.25 0 000-4.6L18.3 1.88zM1.88 18.3l.71-.7z" fill={primaryFill} /></svg>;
}

const Diamond32Filled = wrapIcon(rawSvg({}), 'Diamond32Filled');
export default Diamond32Filled;
      