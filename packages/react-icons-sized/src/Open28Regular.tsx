import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 4.5A2.75 2.75 0 004.5 7.25v13.5a2.75 2.75 0 002.75 2.75h13.5a2.75 2.75 0 002.75-2.75v-4.5a.75.75 0 011.5 0v4.5C25 23.1 23.1 25 20.75 25H7.25A4.25 4.25 0 013 20.75V7.25C3 4.9 4.9 3 7.25 3h4.5a.75.75 0 010 1.5h-4.5zm8.25-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 01-1.5 0V5.56l-6.22 6.22a.75.75 0 11-1.06-1.06l6.22-6.22h-6.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Open28Regular = wrapIcon(rawSvg({}), 'Open28Regular');
export default Open28Regular;
      