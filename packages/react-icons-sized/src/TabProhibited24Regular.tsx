import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h6.27c-.3-.46-.53-.97-.7-1.5H5.74c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.56c.53.18 1.04.42 1.5.71V5.75A2.75 2.75 0 0018.25 3H5.75z" fill={primaryFill} /><path d="M17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-3.3-3.25a4 4 0 015.56-5.56l-5.57 5.56zm1.05 1.06l5.56-5.56a4 4 0 01-5.56 5.56z" fill={primaryFill} /></svg>;
}

const TabProhibited24Regular = wrapIcon(rawSvg({}), 'TabProhibited24Regular');
export default TabProhibited24Regular;
      