import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v8.15l-.26-.52a2.46 2.46 0 00-1.24-1.18V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h7.46l-.75 1.5H4.75A2.75 2.75 0 012 17.25V4.75A2.75 2.75 0 014.75 2h12.5zM9 13.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L9 13.44zm7.16-.61l-4 8A1.5 1.5 0 0013.51 23h8a1.5 1.5 0 001.33-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const CheckboxWarning24Regular = wrapIcon(rawSvg({}), 'CheckboxWarning24Regular');
export default CheckboxWarning24Regular;
      