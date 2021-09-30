import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 4h.16l.02.01c.08.01.17.04.25.1l.05.03 5.07 3.56 5.07-3.56a.75.75 0 011.17.5l.01.11V15.4c0 .2-.09.4-.24.54l-.08.07-5.5 3.87a.74.74 0 01-.83.02l-5.1-3.6-5.07 3.57a.75.75 0 01-1.17-.5L3 19.24V8.62c0-.21.09-.41.24-.55L3.32 8l5.5-3.86a.76.76 0 01.2-.1L9.14 4 9.2 4zm10.3 2.2l-4 2.8v8.8l4-2.8V6.2zm-11 0L4.5 9v8.8l4-2.8V6.2zm1.5 0V15l4 2.8V9l-4-2.8z" fill={primaryFill} /></svg>;
}

const Map24Regular = wrapIcon(rawSvg({}), 'Map24Regular');
export default Map24Regular;
      