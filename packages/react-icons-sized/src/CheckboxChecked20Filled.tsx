import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.68C3 4.2 4.2 3 5.68 3h8.64C15.8 3 17 4.2 17 5.68v8.64C17 15.8 15.8 17 14.32 17H5.68A2.68 2.68 0 013 14.32V5.68zm10.85 2.17a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5z" fill={primaryFill} /></svg>;
}

const CheckboxChecked20Filled = wrapIcon(rawSvg({}), 'CheckboxChecked20Filled');
export default CheckboxChecked20Filled;
      