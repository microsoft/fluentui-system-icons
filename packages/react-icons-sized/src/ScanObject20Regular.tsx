import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 01-1 0v-2A2.5 2.5 0 014.5 2h2a.5.5 0 010 1h-2zm11 14c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 011 0v2a2.5 2.5 0 01-2.5 2.5h-2a.5.5 0 010-1h2zM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 010-1h2A2.5 2.5 0 0118 4.5v2a.5.5 0 01-1 0v-2zM4.5 17A1.5 1.5 0 013 15.5v-2a.5.5 0 00-1 0v2A2.5 2.5 0 004.5 18h2a.5.5 0 000-1h-2zm6.73-10.1a1.5 1.5 0 00-2.46 0l-2.6 3.75A1.5 1.5 0 007.42 13h5.18a1.5 1.5 0 001.23-2.35L11.23 6.9zm-1.64.57a.5.5 0 01.82 0l2.6 3.75a.5.5 0 01-.42.78H7.41a.5.5 0 01-.41-.78l2.59-3.75z" fill={primaryFill} /></svg>;
}

const ScanObject20Regular = wrapIcon(rawSvg({}), 'ScanObject20Regular');
export default ScanObject20Regular;
      