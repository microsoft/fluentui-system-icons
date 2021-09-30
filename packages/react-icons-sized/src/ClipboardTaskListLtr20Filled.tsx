import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm1.35 4.35L7.6 9.6a.5.5 0 01-.69.02l-.75-.69a.5.5 0 11.68-.73l.4.36 1.4-1.41a.5.5 0 11.71.7zm0 4.3c.2.2.2.5 0 .7L7.6 14.6a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zM11 13h2.5a.5.5 0 010 1H11a.5.5 0 010-1zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ClipboardTaskListLtr20Filled = wrapIcon(rawSvg({}), 'ClipboardTaskListLtr20Filled');
export default ClipboardTaskListLtr20Filled;
      