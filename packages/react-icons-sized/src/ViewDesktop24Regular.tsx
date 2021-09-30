import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 3c1.2 0 2.17.93 2.24 2.1l.01.15v10.5c0 1.2-.93 2.17-2.1 2.25h-4.4v2.5h1.75a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5H8.5V18H4.25c-1.19 0-2.16-.92-2.24-2.1V5.26c0-1.2.92-2.17 2.09-2.24L4.25 3h15.5zM14 18h-4v2.5h4V18zm5.75-13.5H4.25c-.38 0-.7.28-.74.65v10.6c0 .38.27.7.64.75h15.6c.38 0 .7-.28.74-.65l.01-.1V5.25c0-.38-.28-.7-.65-.74l-.1-.01zM18.5 6a.5.5 0 01.5.41v8.09a.5.5 0 01-.4.5H9.5a.5.5 0 01-.5-.4V6.5a.5.5 0 01.41-.5h9.09zm-11 0a.5.5 0 01.5.41v8.09a.5.5 0 01-.41.5h-2.1a.5.5 0 01-.48-.4L5 14.5v-8A.5.5 0 015.4 6H7.5z" fill={primaryFill} /></svg>;
}

const ViewDesktop24Regular = wrapIcon(rawSvg({}), 'ViewDesktop24Regular');
export default ViewDesktop24Regular;
      