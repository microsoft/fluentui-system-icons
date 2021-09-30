import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 6.85a.5.5 0 00-.7-.7L7 9.29 5.85 8.15a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.5zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7zm8.5-.5h-7a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const CheckboxChecked16Regular = wrapIcon(rawSvg({}), 'CheckboxChecked16Regular');
export default CheckboxChecked16Regular;
      