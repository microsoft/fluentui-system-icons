import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4.5c-1.24 0-2.25 1-2.25 2.25V14h6.75A2.75 2.75 0 0114 16.75v6.75h7.25c1.24 0 2.25-1 2.25-2.25v-5a.75.75 0 011.5 0v5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25V6.75A3.75 3.75 0 016.75 3h5a.75.75 0 010 1.5h-5zm8.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 11-1.5 0V5.56l-6.22 6.22a.75.75 0 11-1.06-1.06l6.22-6.22h-6.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ExpandUpRight28Filled = wrapIcon(rawSvg({}), 'ExpandUpRight28Filled');
export default ExpandUpRight28Filled;
      