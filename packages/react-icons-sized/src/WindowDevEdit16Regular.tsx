import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5v1.94c-.13.09-.26.2-.37.3l-.63.64V5H3v5.5c0 .83.67 1.5 1.5 1.5h3.14c-.12.25-.22.51-.3.79l-.04.2H4.5A2.5 2.5 0 012 10.5V4.5zM4.5 3c-.65 0-1.21.42-1.42 1h8.83c-.2-.58-.76-1-1.41-1h-6zm6.49 5.39l-2.6 2.6a.5.5 0 01-.24-.84L9.79 8.5 8.15 6.85a.5.5 0 01.7-.7l2 2a.5.5 0 01.14.24zM6.85 6.85a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L5.21 8.5l1.64-1.65zm8.7.6c-.62-.6-1.6-.6-2.21 0l-4.3 4.3c-.35.35-.6.8-.72 1.28l-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29c.61-.6.61-1.6 0-2.2z" fill={primaryFill} /></svg>;
}

const WindowDevEdit16Regular = wrapIcon(rawSvg({}), 'WindowDevEdit16Regular');
export default WindowDevEdit16Regular;
      