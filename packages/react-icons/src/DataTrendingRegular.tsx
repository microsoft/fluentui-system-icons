import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 16.5a.5.5 0 01-.5.5h-12A1.5 1.5 0 013 15.5v-12a.5.5 0 011 0v12c0 .28.22.5.5.5h12c.28 0 .5.22.5.5zm-5-11c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V6.7l-4.65 4.65a.5.5 0 01-.7 0L9 9.71l-3.15 3.14a.5.5 0 01-.7-.7l3.5-3.5a.5.5 0 01.7 0L11 10.29 15.3 6h-2.8a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DataTrendingRegular = wrapIcon(rawSvg({}), 'DataTrendingRegular');
export default DataTrendingRegular;
      