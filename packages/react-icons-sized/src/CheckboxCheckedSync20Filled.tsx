import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.68 2A2.68 2.68 0 002 4.68v8.64C2 14.8 3.2 16 4.68 16h4.53A5.5 5.5 0 0116 9.2V4.69C16 3.2 14.8 2 13.32 2H4.68zm8.17 4.15c.2.2.2.5 0 .7l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7l1.65 1.64 4.65-4.64c.2-.2.5-.2.7 0zM14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.5-7v.15a3.01 3.01 0 00-3.62.48.5.5 0 00.7.7 2 2 0 012.39-.33H15a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V12a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H14a.5.5 0 000-1h-1.5a.5.5 0 00-.5.5V17a.5.5 0 001 0v-.15a3.01 3.01 0 001.45.4z" fill={primaryFill} /></svg>;
}

const CheckboxCheckedSync20Filled = wrapIcon(rawSvg({}), 'CheckboxCheckedSync20Filled');
export default CheckboxCheckedSync20Filled;
      