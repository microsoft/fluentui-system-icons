import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 5a.75.75 0 00-.75.75v8.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 00-.75-.75h-8.5zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM4 5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" fill={primaryFill} /></svg>;
}

const CheckboxIndeterminateRegular = wrapIcon(rawSvg({}), 'CheckboxIndeterminateRegular');
export default CheckboxIndeterminateRegular;
      