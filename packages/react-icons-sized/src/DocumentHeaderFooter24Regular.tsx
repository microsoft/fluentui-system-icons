import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 6.5C7 5.68 7.69 5 8.5 5h7a1.5 1.5 0 010 3h-7A1.5 1.5 0 017 6.5zm0 11c0-.82.68-1.5 1.5-1.5h7a1.5 1.5 0 110 3h-7A1.5 1.5 0 017 17.5zM20 4.1A2.25 2.25 0 0017.74 2H6.1A2.25 2.25 0 004 4.26V19.9A2.25 2.25 0 006.26 22H17.9a2.25 2.25 0 002.1-2.25V4.1zM6.24 3.5h11.6c.37.06.65.37.65.75v15.6a.75.75 0 01-.75.65H6.15a.75.75 0 01-.65-.75V4.15a.75.75 0 01.75-.65z" fill={primaryFill} /></svg>;
}

const DocumentHeaderFooter24Regular = wrapIcon(rawSvg({}), 'DocumentHeaderFooter24Regular');
export default DocumentHeaderFooter24Regular;
      