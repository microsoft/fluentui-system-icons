import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zM9 2c.4 0 .79.04 1.17.11-.23.29-.42.6-.59.92a5 5 0 103.54 7.8c.35.09.71.14 1.08.16a6.03 6.03 0 01-1.2 1.48v5.03a.5.5 0 01-.75.43L9 16.08l-3.25 1.85A.5.5 0 015 17.5v-5.03A5.98 5.98 0 019 2zm0 12c-1.1 0-2.12-.3-3-.8v3.44l2.75-1.57a.5.5 0 01.5 0L12 16.64V13.2c-.88.5-1.9.8-3 .8z" fill={primaryFill} /></svg>;
}

const RibbonAddRegular = wrapIcon(rawSvg({}), 'RibbonAddRegular');
export default RibbonAddRegular;
      