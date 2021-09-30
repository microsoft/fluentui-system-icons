import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.01 2.58a2.01 2.01 0 00-2.83 0L2.85 5.83a.5.5 0 01-.7 0 .5.5 0 010-.7l3.33-3.28a3.02 3.02 0 014.24.02 2.99 2.99 0 010 4.23l-4.33 4.32c-.77.76-2.01.76-2.78 0-.76-.76-.76-2 0-2.76l4.04-4.03c.2-.2.51-.2.71 0 .2.2.2.51 0 .7L3.32 8.38a.95.95 0 000 1.35c.38.38.98.38 1.36 0L9 5.41a2 2 0 000-2.83z" fill={primaryFill} /></svg>;
}

const Attach12Regular = wrapIcon(rawSvg({}), 'Attach12Regular');
export default Attach12Regular;
      