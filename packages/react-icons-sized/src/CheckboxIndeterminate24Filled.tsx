import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 6.25a1 1 0 00-1 1v9.5a1 1 0 001 1h9.5a1 1 0 001-1v-9.5a1 1 0 00-1-1h-9.5zM18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const CheckboxIndeterminate24Filled = wrapIcon(rawSvg({}), 'CheckboxIndeterminate24Filled');
export default CheckboxIndeterminate24Filled;
      