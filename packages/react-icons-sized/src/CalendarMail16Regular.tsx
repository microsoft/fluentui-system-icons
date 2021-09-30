import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5A2.5 2.5 0 013.5 1h5A2.5 2.5 0 0111 3.5V6h-1V4H2v4.5c0 .83.67 1.5 1.5 1.5H4v1h-.5A2.5 2.5 0 011 8.5v-5zM3.5 2c-.65 0-1.2.42-1.41 1H9.9c-.2-.58-.76-1-1.41-1h-5zM5 8.5C5 7.67 5.67 7 6.5 7h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 13.5v-5zM6.5 8a.5.5 0 00-.5.5v.44l4 2 4-2V8.5a.5.5 0 00-.5-.5h-7zM6 13.5c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-3.44l-3.78 1.89a.5.5 0 01-.44 0L6 10.05v3.45z" fill={primaryFill} /></svg>;
}

const CalendarMail16Regular = wrapIcon(rawSvg({}), 'CalendarMail16Regular');
export default CalendarMail16Regular;
      