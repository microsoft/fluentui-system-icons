import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.4 1.35a.5.5 0 00-.76 0 18.24 18.24 0 01-4.3 3.4.5.5 0 00-.24.37L2.15 12h-.66a.5.5 0 000 1H14.5a.5.5 0 000-1h-.6l-.96-6.88a.5.5 0 00-.25-.37 18.23 18.23 0 01-4.28-3.4zM11.28 12A17.4 17.4 0 018.5 5.73a.5.5 0 00-.97 0c-.86 3.34-1.87 5-2.8 6.27H3.16l.9-6.5c1.12-.66 2.84-1.9 3.96-3.08A20.47 20.47 0 0012 5.5l.9 6.5h-1.62zm-1.2 0H5.93A16.5 16.5 0 008 7.66c.6 1.81 1.25 3.1 2.06 4.34z" fill={primaryFill} /></svg>;
}

const Tent16Regular = wrapIcon(rawSvg({}), 'Tent16Regular');
export default Tent16Regular;
      