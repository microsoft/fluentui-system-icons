import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6v2h10V6H5z" fill={primaryFill} /><path d="M12 11v3h3v-3h-3z" fill={primaryFill} /><path d="M2 5.75A2.75 2.75 0 014.75 3h10.5A2.75 2.75 0 0118 5.75v8.5A2.75 2.75 0 0115.25 17H4.75A2.75 2.75 0 012 14.25v-8.5zm2-.25v3c0 .27.22.5.5.5h11a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5zm7 5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5zm-6.5 0a.5.5 0 000 1h5a.5.5 0 100-1h-5zM4 14c0 .28.22.5.5.5h5a.5.5 0 100-1h-5a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PreviewLink20Filled = wrapIcon(rawSvg({}), 'PreviewLink20Filled');
export default PreviewLink20Filled;
      