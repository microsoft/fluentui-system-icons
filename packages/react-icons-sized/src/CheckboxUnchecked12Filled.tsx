import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5C10 2.67 9.33 2 8.5 2h-5zM4 3.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V4c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CheckboxUnchecked12Filled = wrapIcon(rawSvg({}), 'CheckboxUnchecked12Filled');
export default CheckboxUnchecked12Filled;
      