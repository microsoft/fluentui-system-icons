import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75zM4.5 5.75c0-.69.56-1.25 1.25-1.25H7.7L4.5 8.31V5.75zm0 4.12L9 4.5h2.67L4.5 13.04V9.87zm8.47-5.37h2.67L4.5 17.77V14.6l8.47-10.1zm3.97 0h1.31c.4 0 .74.18.97.46L7.02 19.5H5.75c-.4 0-.76-.19-.99-.48L16.94 4.5zm2.56 1.68v3.18L10.99 19.5H8.33L19.5 6.18zm0 4.73v3.18l-4.54 5.41H12.3l7.2-8.59zm0 4.73v2.61c0 .69-.56 1.25-1.25 1.25h-1.99l3.24-3.86z" fill={primaryFill} /></svg>;
}

const TabInPrivate24Regular = wrapIcon(rawSvg({}), 'TabInPrivate24Regular');
export default TabInPrivate24Regular;
      