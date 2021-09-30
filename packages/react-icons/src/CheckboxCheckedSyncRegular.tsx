import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.85 6.15c.2.2.2.5 0 .7l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7l1.65 1.64 4.65-4.64c.2-.2.5-.2.7 0zM2 4.68C2 3.2 3.2 2 4.68 2h8.64C14.8 2 16 3.2 16 4.68v4.53c-.32-.1-.66-.16-1-.19V4.68C15 3.75 14.25 3 13.32 3H4.68C3.75 3 3 3.75 3 4.68v8.64c0 .93.75 1.68 1.68 1.68h4.34c.03.34.1.68.19 1H4.68A2.68 2.68 0 012 13.32V4.68zM14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.5-7v.15a3.01 3.01 0 00-3.62.48.5.5 0 00.7.7 2 2 0 012.39-.33H15a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V12a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H14a.5.5 0 000-1h-1.5a.5.5 0 00-.5.5V17a.5.5 0 001 0v-.15a3.01 3.01 0 001.45.4z" fill={primaryFill} /></svg>;
}

const CheckboxCheckedSyncRegular = wrapIcon(rawSvg({}), 'CheckboxCheckedSyncRegular');
export default CheckboxCheckedSyncRegular;
      