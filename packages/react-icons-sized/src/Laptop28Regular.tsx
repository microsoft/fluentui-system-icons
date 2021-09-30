import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 6C5.01 6 4 7 4 8.25v9c0 1.24 1 2.25 2.25 2.25h15.5c1.24 0 2.25-1 2.25-2.25v-9C24 7.01 23 6 21.75 6H6.25zM5.5 8.25c0-.41.34-.75.75-.75h15.5c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75H6.25a.75.75 0 01-.75-.75v-9z" fill={primaryFill} /><path d="M2.75 20.5a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const Laptop28Regular = wrapIcon(rawSvg({}), 'Laptop28Regular');
export default Laptop28Regular;
      