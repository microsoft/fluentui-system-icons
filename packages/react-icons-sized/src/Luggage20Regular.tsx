import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.5c0-.28.22-.5.5-.5h7a.5.5 0 110 1H13v1h.53a2.5 2.5 0 012.5 2.5l-.02 8A2.5 2.5 0 0114 16.96v.55a.5.5 0 11-1 0V17H7v.5a.5.5 0 01-1 0v-.54a2.5 2.5 0 01-2.03-2.47l.02-8A2.5 2.5 0 016.5 4H7V3h-.5a.5.5 0 01-.5-.5zM8 3v1h4V3H8zM6.5 5C5.66 5 5 5.67 5 6.5l-.03 8c0 .83.67 1.5 1.5 1.5h7.03c.83 0 1.5-.67 1.5-1.5l.03-8c0-.83-.67-1.5-1.5-1.5H6.5zm0 3.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1H7a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Luggage20Regular = wrapIcon(rawSvg({}), 'Luggage20Regular');
export default Luggage20Regular;
      