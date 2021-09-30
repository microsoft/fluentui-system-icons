import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 9c.41 0 .75.34.75.75v2.5c0 .69.56 1.25 1.25 1.25h.75V9.75a.75.75 0 011.5 0v3.75h4.25a.75.75 0 010 1.5h-6.5A2.75 2.75 0 019 12.25v-2.5c0-.41.34-.75.75-.75zm0-6c.41 0 .75.34.75.75V5h2V3.75a.75.75 0 011.5 0V5h2.75c.3 0 .58.19.7.47l.8 2.03h1A2.75 2.75 0 0122 10.25v5.5a2.75 2.75 0 01-2.75 2.75h-1l-.8 2.03a.75.75 0 01-.7.47h-7.5c-.2 0-.4-.09-.55-.24L5.74 17.6A2.75 2.75 0 015 15.7V12.5H3.5v3.75a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V11H5V7.75A2.75 2.75 0 017.75 5H9V3.75c0-.41.34-.75.75-.75zm-2 3.5c-.69 0-1.25.56-1.25 1.25v7.96c0 .32.12.62.34.85l2.74 2.94h6.66l.81-2.03a.75.75 0 01.7-.47h1.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 01-.7-.47l-.8-2.03h-8.5z" fill={primaryFill} /></svg>;
}

const Engine24Regular = wrapIcon(rawSvg({}), 'Engine24Regular');
export default Engine24Regular;
      