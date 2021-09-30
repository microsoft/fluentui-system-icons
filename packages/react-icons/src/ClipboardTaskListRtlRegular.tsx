import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 7.15c.2.2.2.5 0 .7L12.1 9.6a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm0 5.7a.5.5 0 00-.7-.7l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75zM6.5 8a.5.5 0 000 1H9a.5.5 0 000-1H6.5zM6 13.5c0-.28.22-.5.5-.5H9a.5.5 0 010 1H6.5a.5.5 0 01-.5-.5zM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM7.09 4H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1z" fill={primaryFill} /></svg>;
}

const ClipboardTaskListRtlRegular = wrapIcon(rawSvg({}), 'ClipboardTaskListRtlRegular');
export default ClipboardTaskListRtlRegular;
      