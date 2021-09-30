import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5V6a2 2 0 00-2 2v4.5c0 .83.67 1.5 1.5 1.5h6c-.31-.42-.5-.94-.5-1.5v-5c0-.56.19-1.08.5-1.5H5V3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1.55c.16-.03.33-.05.5-.05h.5V3.5c0-.83-.67-1.5-1.5-1.5h-5zm-1 7a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zM7 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM6.5 11a.5.5 0 110-1 .5.5 0 010 1zM10 7.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-5z" fill={primaryFill} /></svg>;
}

const Fax16Filled = wrapIcon(rawSvg({}), 'Fax16Filled');
export default Fax16Filled;
      