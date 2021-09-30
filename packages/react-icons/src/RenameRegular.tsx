import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a.5.5 0 000 1h1v14h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1V3h1a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M4.5 4h4v1h-4C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h4v1h-4A2.5 2.5 0 012 13.5v-7A2.5 2.5 0 014.5 4z" fill={primaryFill} /><path d="M15.5 15h-4v1h4a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-4v1h4c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /></svg>;
}

const RenameRegular = wrapIcon(rawSvg({}), 'RenameRegular');
export default RenameRegular;
      