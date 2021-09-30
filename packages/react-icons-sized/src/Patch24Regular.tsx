import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.25 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm4.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-1.75 1.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 10.25a.75.75 0 100-1.5.75.75 0 000 1.5zM3.24 18.3a3.25 3.25 0 010-4.6L13.7 3.24a3.25 3.25 0 014.6 0l2.46 2.46a3.25 3.25 0 010 4.6L10.3 20.76a3.25 3.25 0 01-4.6 0L3.24 18.3zm1.06-3.54c-.69.69-.69 1.8 0 2.48l2.46 2.46c.69.69 1.8.69 2.48 0l1.7-1.7L6 13.06l-1.7 1.7zM16.94 12L12 7.06 7.06 12 12 16.94 16.94 12zM18 10.94l1.7-1.7c.69-.69.69-1.8 0-2.48L17.24 4.3a1.75 1.75 0 00-2.48 0L13.06 6 18 10.94zm-7.77-5.65l-1-1a1.75 1.75 0 00-2.47 0L4.3 6.77c-.69.69-.69 1.8 0 2.48l1 1-1.07 1.05-1-1a3.25 3.25 0 010-4.59L5.7 3.24a3.25 3.25 0 014.6 0l1 1-1.07 1.05zm2.48 14.48l1 1a3.25 3.25 0 004.59 0l2.46-2.47a3.25 3.25 0 000-4.6l-1-1-1.05 1.07 1 1c.68.68.68 1.78 0 2.47l-2.47 2.46c-.69.69-1.8.69-2.48 0l-1-1-1.05 1.07z" fill={primaryFill} /></svg>;
}

const Patch24Regular = wrapIcon(rawSvg({}), 'Patch24Regular');
export default Patch24Regular;
      