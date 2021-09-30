import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2C1.67 2 1 2.67 1 3.5v9c0 .83.67 1.5 1.5 1.5H6c.82 0 1.54-.4 2-1 .46.6 1.18 1 2 1h3.5c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5H10c-.82 0-1.54.4-2 1a2.5 2.5 0 00-2-1H2.5zm5 2.5v7c0 .83-.67 1.5-1.5 1.5H2.5a.5.5 0 01-.5-.5v-9c0-.28.22-.5.5-.5H6c.83 0 1.5.67 1.5 1.5zm1 7v-7c0-.83.67-1.5 1.5-1.5h3.5c.28 0 .5.22.5.5v9a.5.5 0 01-.5.5H10a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const BookOpen16Regular = wrapIcon(rawSvg({}), 'BookOpen16Regular');
export default BookOpen16Regular;
      