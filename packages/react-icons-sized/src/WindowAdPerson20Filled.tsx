import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4zm4 3.5V9H7v3h3zM5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.66c-.1-.33-.16-.69-.16-1.06v-.32-.12H5.75c-.69 0-1.25-.56-1.25-1.25V7H17V5.5A2.5 2.5 0 0014.5 3h-9zm12 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12.55 14c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06s4-1.43 4-3.06v-.32c0-.4-.17-.8-.43-1.1a1.5 1.5 0 00-1.12-.52h-4.9z" fill={primaryFill} /></svg>;
}

const WindowAdPerson20Filled = wrapIcon(rawSvg({}), 'WindowAdPerson20Filled');
export default WindowAdPerson20Filled;
      