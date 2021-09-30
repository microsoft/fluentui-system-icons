import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7zm8.5-.5h-7a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const CheckboxIndeterminate16Regular = wrapIcon(rawSvg({}), 'CheckboxIndeterminate16Regular');
export default CheckboxIndeterminate16Regular;
      