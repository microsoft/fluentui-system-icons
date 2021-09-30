import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.19 0 2.16.92 2.24 2.1v15.65c0 1.18-.92 2.16-2.1 2.24H6.26c-1.2 0-2.17-.92-2.25-2.1V4.25C4 3.06 4.92 2.09 6.1 2h11.65zM8.5 16a1.5 1.5 0 000 3h7a1.5 1.5 0 100-3h-7z" fill={primaryFill} /></svg>;
}

const DocumentFooter24Filled = wrapIcon(rawSvg({}), 'DocumentFooter24Filled');
export default DocumentFooter24Filled;
      