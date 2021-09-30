import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zM10 14.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L10 14.44l6.47-6.47L10 14.44z" fill={primaryFill} /></svg>;
}

const CheckboxChecked24Regular = wrapIcon(rawSvg({}), 'CheckboxChecked24Regular');
export default CheckboxChecked24Regular;
      