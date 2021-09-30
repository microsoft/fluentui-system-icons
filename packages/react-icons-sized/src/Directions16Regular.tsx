import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.23 2.7a2.5 2.5 0 013.54 0l3.53 3.53a2.5 2.5 0 010 3.54L9.77 13.3a2.5 2.5 0 01-3.54 0L2.7 9.77a2.5 2.5 0 010-3.54L6.23 2.7zm2.83.7a1.5 1.5 0 00-2.12 0L3.4 6.94a1.5 1.5 0 000 2.12l3.54 3.54a1.5 1.5 0 002.12 0l3.54-3.54a1.5 1.5 0 000-2.12L9.06 3.4zm-.91 1.25c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 11-.7-.7L8.79 7H7.5a.5.5 0 00-.5.5V10a.5.5 0 11-1 0V7.5C6 6.67 6.67 6 7.5 6h1.3l-.65-.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const Directions16Regular = wrapIcon(rawSvg({}), 'Directions16Regular');
export default Directions16Regular;
      