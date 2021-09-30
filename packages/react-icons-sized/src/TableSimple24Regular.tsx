import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v5h6.75V4.5h-5zm5 8.25H4.5v5c0 .97.78 1.75 1.75 1.75h5v-6.75zm1.5 0v6.75h5c.97 0 1.75-.78 1.75-1.75v-5h-6.75zm6.75-1.5v-5c0-.97-.78-1.75-1.75-1.75h-5v6.75h6.75z" fill={primaryFill} /></svg>;
}

const TableSimple24Regular = wrapIcon(rawSvg({}), 'TableSimple24Regular');
export default TableSimple24Regular;
      