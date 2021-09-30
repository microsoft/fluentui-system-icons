import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13H6v-1.7l-.7.7h-.8a1.5 1.5 0 01-.65-.15L6 9.71V9.5c0-.57.14-1.11.38-1.59l-3.23 3.24A1.5 1.5 0 013 10.5v-.94L9.56 3h.94c.23 0 .45.05.65.15L7.9 6.38A3.49 3.49 0 019.5 6h.2l2.15-2.15c.1.2.15.42.15.65v.8l-.7.7H13V4.5A2.5 2.5 0 0010.5 2h-6zM3 4.5C3 3.67 3.67 3 4.5 3h.65L3 5.15V4.5zm0 2.06L6.56 3h1.59L3 8.15V6.56z" fill={primaryFill} /><path d="M7 9.5A2.5 2.5 0 019.5 7h6A2.5 2.5 0 0118 9.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5v-6zM9.5 8C8.67 8 8 8.67 8 9.5v6c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-6z" fill={primaryFill} /></svg>;
}

const PositionBackward20Regular = wrapIcon(rawSvg({}), 'PositionBackward20Regular');
export default PositionBackward20Regular;
      