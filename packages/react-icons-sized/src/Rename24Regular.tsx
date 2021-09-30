import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 2h4a.75.75 0 01.1 1.5H12.5v17h1.25c.37 0 .69.28.74.65v.1c0 .38-.28.7-.64.74l-.1.01h-4a.75.75 0 01-.1-1.5H11v-17H9.75a.75.75 0 01-.74-.65L9 2.75c0-.38.28-.7.65-.74l.1-.01h4-4zm8.5 3c1.79 0 3.24 1.45 3.25 3.25v7.5A3.25 3.25 0 0118.44 19H13.5v-1.5h4.8c.94-.03 1.7-.8 1.69-1.75v-7.5c0-.97-.79-1.75-1.75-1.75H13.5V5h4.74zM10 5v1.5H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75H10V19H5.25A3.25 3.25 0 012 15.75v-7.5C2 6.45 3.46 5 5.25 5H10z" fill={primaryFill} /></svg>;
}

const Rename24Regular = wrapIcon(rawSvg({}), 'Rename24Regular');
export default Rename24Regular;
      