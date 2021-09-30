import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v1.67c-.6.28-1 .88-1 1.58v3.01c0 .41.33.74.74.74h8.52c.41 0 .74-.33.74-.74V6.25c0-.7-.4-1.3-1-1.58V3a1 1 0 00-1-1H3zm6 2.52c-.77.1-1.37.71-1.48 1.48H4.48A1.75 1.75 0 003 4.52V3h6v1.52zm.25.98c.41 0 .75.34.75.75V9H2V6.25a.75.75 0 011.5 0v.1c0 .36.3.65.65.65h3.7c.36 0 .65-.3.65-.65v-.1c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Couch12Regular = wrapIcon(rawSvg({}), 'Couch12Regular');
export default Couch12Regular;
      