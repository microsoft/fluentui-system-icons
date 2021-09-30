import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 6a.75.75 0 00-.75.75v10.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V6.75a.75.75 0 00-.75-.75H6.75zm11.5-3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3zM4.5 5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75z" fill={primaryFill} /></svg>;
}

const CheckboxIndeterminate24Regular = wrapIcon(rawSvg({}), 'CheckboxIndeterminate24Regular');
export default CheckboxIndeterminate24Regular;
      