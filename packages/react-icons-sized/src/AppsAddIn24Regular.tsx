import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3c1.24 0 2.25 1 2.25 2.25v6h6c1.24 0 2.25 1 2.25 2.25v5.25c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h5.25zm.75 9.75H4.5v6c0 .41.34.75.75.75h6v-6.75zm7.5 0h-6v6.75h6c.41 0 .75-.34.75-.75V13.5a.75.75 0 00-.75-.75zM10.5 4.5H5.25a.75.75 0 00-.75.75v6h6.75v-6a.75.75 0 00-.75-.75zM17.9 2h.1c.38 0 .7.28.74.65l.01.1v2.5h2.5c.38 0 .7.28.74.65L22 6c0 .38-.28.7-.65.74l-.1.01h-2.5v2.5c0 .38-.28.7-.65.74L18 10a.75.75 0 01-.74-.65l-.01-.1v-2.5h-2.5a.75.75 0 01-.74-.65L14 6c0-.38.28-.7.65-.74l.1-.01h2.5v-2.5c0-.38.28-.7.65-.74z" fill={primaryFill} /></svg>;
}

const AppsAddIn24Regular = wrapIcon(rawSvg({}), 'AppsAddIn24Regular');
export default AppsAddIn24Regular;
      