import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.04 19a11 11 0 0121.92 0h.29a7.75 7.75 0 016.78 4h-3.1a5.23 5.23 0 00-3.68-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V20a8.5 8.5 0 00-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 100 10.5H23v2.5H12.75a7.75 7.75 0 010-15.5h.3zM23 26a1 1 0 011-1h20a1 1 0 011 1v3a1 1 0 01-1 1H24a1 1 0 01-1-1v-3zm20 6H25v9a4 4 0 004 4h10a4 4 0 004-4v-9zm-12 3h6a1 1 0 110 2h-6a1 1 0 110-2z" fill={primaryFill} /></svg>;
}

const CloudArchive48Regular = wrapIcon(rawSvg({}), 'CloudArchive48Regular');
export default CloudArchive48Regular;
      