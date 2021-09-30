import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5C2 2.67 2.67 2 3.5 2h7c.83 0 1.5.67 1.5 1.5v3.53a4.55 4.55 0 00-1 0V3.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h3.53a4.55 4.55 0 000 1H3.5A1.5 1.5 0 012 10.5v-7zm7.85 1.65c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 11.7-.7L6 8.29l3.15-3.14c.2-.2.5-.2.7 0zM8 11.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm2.56-2.07a2.5 2.5 0 012.49.36.5.5 0 01.95.21v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.14-.98 1.5 1.5 0 00-1.92.17.5.5 0 11-.7-.7c.23-.25.51-.43.82-.56zm1.88 4.14a2.5 2.5 0 01-2.6-.45.5.5 0 01-.84-.37v-1c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-.12l.02.02a1.5 1.5 0 002.16.04.5.5 0 11.7.7 2.5 2.5 0 01-.82.56z" fill={primaryFill} /></svg>;
}

const CheckboxCheckedSync16Regular = wrapIcon(rawSvg({}), 'CheckboxCheckedSync16Regular');
export default CheckboxCheckedSync16Regular;
      