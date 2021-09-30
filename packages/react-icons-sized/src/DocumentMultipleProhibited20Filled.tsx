import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2v4.5c0 .83.67 1.5 1.5 1.5H17v6.5c0 .83-.67 1.5-1.5 1.5h-4.7A5.5 5.5 0 006 9.02V3.5C6 2.67 6.67 2 7.5 2H11zM5 9.02V4a1 1 0 00-1 1v4.2c.32-.08.66-.15 1-.18zM10.4 17c-.18.36-.4.7-.66 1H14a1 1 0 001-1h-4.6zM12 2.25V6.5c0 .28.22.5.5.5h4.25L12 2.25zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const DocumentMultipleProhibited20Filled = wrapIcon(rawSvg({}), 'DocumentMultipleProhibited20Filled');
export default DocumentMultipleProhibited20Filled;
      