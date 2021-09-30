import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.1 3.9c.17.18.19.45.05.64l-.05.07L6.7 8H10a7.5 7.5 0 017.5 7.26v.24a.5.5 0 01-1 0A6.5 6.5 0 0010.23 9H6.7l3.4 3.39a.5.5 0 01-.64.76l-.07-.05-4.24-4.25a.5.5 0 01-.06-.63l.06-.07L9.39 3.9c.2-.2.51-.2.7 0zM2.15 8.15L6.39 3.9a.5.5 0 01.76.64l-.05.07L3.2 8.5l3.9 3.89a.5.5 0 01-.64.76l-.07-.05-4.24-4.25a.5.5 0 01-.06-.63l.06-.07L6.39 3.9 2.15 8.15z" fill={primaryFill} /></svg>;
}

const ArrowReplyAll20Regular = wrapIcon(rawSvg({}), 'ArrowReplyAll20Regular');
export default ArrowReplyAll20Regular;
      