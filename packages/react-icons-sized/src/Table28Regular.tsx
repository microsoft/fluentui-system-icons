import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h14.5A3.75 3.75 0 0125 6.75v14.5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25V6.75zM4.5 18.5v2.75c0 1.24 1 2.25 2.25 2.25H9.5v-5h-5zm5-1.5v-6h-5v6h5zm1.5 1.5v5h6v-5h-6zm6-1.5v-6h-6v6h6zm1.5 1.5v5h2.75c1.24 0 2.25-1 2.25-2.25V18.5h-5zm5-1.5v-6h-5v6h5zm0-10.25c0-1.24-1-2.25-2.25-2.25H18.5v5h5V6.75zM17 4.5h-6v5h6v-5zm-7.5 0H6.75c-1.24 0-2.25 1-2.25 2.25V9.5h5v-5z" fill={primaryFill} /></svg>;
}

const Table28Regular = wrapIcon(rawSvg({}), 'Table28Regular');
export default Table28Regular;
      