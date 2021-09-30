import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v4.68c.45-.24.96-.39 1.5-.42V5.75c0-.69.56-1.25 1.25-1.25H11v1.25C11 6.99 12 8 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.26a3.73 3.73 0 01-.42 1.5h4.68A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75zM19.5 6.5h-6.25a.75.75 0 01-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75z" fill={primaryFill} /><path d="M9.5 15.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M5.25 11A3.25 3.25 0 002 14.25v4.5C2 20.55 3.46 22 5.25 22h4.5c1.8 0 3.25-1.46 3.25-3.25v-4.5c0-1.8-1.46-3.25-3.25-3.25h-4.5zM3.5 14.25c0-.97.78-1.75 1.75-1.75h4.5c.97 0 1.75.78 1.75 1.75v4.5c0 .2-.04.4-.1.59l-2.3-2.31a2.25 2.25 0 00-3.2 0l-2.3 2.3c-.06-.18-.1-.37-.1-.58v-4.5zm4.53 3.84l2.3 2.3c-.18.07-.37.11-.58.11h-4.5c-.2 0-.4-.04-.59-.1l2.31-2.3c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const TabDesktopImage24Regular = wrapIcon(rawSvg({}), 'TabDesktopImage24Regular');
export default TabDesktopImage24Regular;
      