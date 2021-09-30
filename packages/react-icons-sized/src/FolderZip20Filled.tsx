import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.5h-1.44l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 004.5 17H13v-1.94a.52.52 0 010-.12V14h-.5a.5.5 0 010-1h.5v-2h-.5a.5.5 0 010-1h.5V9h-.5a.5.5 0 01-.5-.5v-4z" fill={primaryFill} /><path d="M14 4.5h-1V8h1V4.5z" fill={primaryFill} /><path d="M15 4.5h.5a2.5 2.5 0 012.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 01-2.34 2.5H14v-1.5h.5a.5.5 0 000-1H14v-.96a.48.48 0 000-.09v-.95h.5a.5.5 0 100-1H14V9h.5a.5.5 0 00.5-.5v-4z" fill={primaryFill} /><path d="M7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v1h5.15a.5.5 0 00.22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09z" fill={primaryFill} /></svg>;
}

const FolderZip20Filled = wrapIcon(rawSvg({}), 'FolderZip20Filled');
export default FolderZip20Filled;
      