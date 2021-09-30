import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1zM8.5 3h3a.5.5 0 010 1h-3a.5.5 0 010-1zM9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm-1-6a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3.75a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const ClipboardBulletListLtr20Filled = wrapIcon(rawSvg({}), 'ClipboardBulletListLtr20Filled');
export default ClipboardBulletListLtr20Filled;
      