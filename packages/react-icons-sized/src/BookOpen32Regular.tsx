import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 26.33A4.5 4.5 0 0112.5 28H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8.5A4.5 4.5 0 0116 5.67 4.5 4.5 0 0119.5 4H28a2 2 0 012 2v20a2 2 0 01-2 2h-8.5a4.5 4.5 0 01-3.5-1.67zM17 8.5v15a2.5 2.5 0 002.5 2.5H28V6h-8.5A2.5 2.5 0 0017 8.5zm-2 0A2.5 2.5 0 0012.5 6H4v20h8.5a2.5 2.5 0 002.5-2.5v-15z" fill={primaryFill} /></svg>;
}

const BookOpen32Regular = wrapIcon(rawSvg({}), 'BookOpen32Regular');
export default BookOpen32Regular;
      