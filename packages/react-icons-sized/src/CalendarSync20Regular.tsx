import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zM10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const CalendarSync20Regular = wrapIcon(rawSvg({}), 'CalendarSync20Regular');
export default CalendarSync20Regular;
      