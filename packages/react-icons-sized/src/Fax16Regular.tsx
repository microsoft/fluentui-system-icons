import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5V6a2 2 0 00-2 2v4.5c0 .83.67 1.5 1.5 1.5h6c-.22-.3-.38-.63-.45-1H3.5a.5.5 0 01-.5-.5V8a1 1 0 011-1h5.05c.07-.37.23-.7.45-1H5V3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1.55c.16-.03.33-.05.5-.05h.5V3.5c0-.83-.67-1.5-1.5-1.5h-5zm6 4c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1zM11 7.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-5zm-6 1a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 11a.5.5 0 100-1 .5.5 0 000 1zM7 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM6.5 11a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const Fax16Regular = wrapIcon(rawSvg({}), 'Fax16Regular');
export default Fax16Regular;
      