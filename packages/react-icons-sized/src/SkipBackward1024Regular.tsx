import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2.5a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5h-3.9a8.33 8.33 0 014.12-3.06A9.68 9.68 0 0119.6 9.1a.75.75 0 001.32-.72A11.19 11.19 0 008.03 3.51 9.61 9.61 0 003.5 6.65v-3.4a.75.75 0 00-.75-.75zm6.2 8.53c.33.09.55.38.55.72v8.5a.75.75 0 01-1.5 0v-6.42c-.38.37-.84.75-1.36 1.06a.75.75 0 11-.78-1.28 6.88 6.88 0 002.24-2.24l.01-.01a.75.75 0 01.84-.33zm4.25 1.6c.55-1 1.48-1.63 2.8-1.63 1.32 0 2.25.64 2.8 1.63.53.93.7 2.15.7 3.37 0 1.22-.17 2.44-.7 3.37A3.05 3.05 0 0116 21a3.05 3.05 0 01-2.8-1.63 7.03 7.03 0 01-.7-3.37c0-1.22.18-2.44.7-3.37zm1.3.73A5.6 5.6 0 0014 16c0 1.12.17 2.03.5 2.64.31.55.76.86 1.5.86s1.19-.31 1.5-.86c.33-.6.5-1.52.5-2.64a5.6 5.6 0 00-.5-2.64c-.31-.55-.76-.86-1.5-.86s-1.19.31-1.5.86z" fill={primaryFill} /></svg>;
}

const SkipBackward1024Regular = wrapIcon(rawSvg({}), 'SkipBackward1024Regular');
export default SkipBackward1024Regular;
      