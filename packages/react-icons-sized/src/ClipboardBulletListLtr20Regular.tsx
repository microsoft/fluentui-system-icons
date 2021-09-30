import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 8.5c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H13a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm-1-6a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM7.09 4H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1z" fill={primaryFill} /></svg>;
}

const ClipboardBulletListLtr20Regular = wrapIcon(rawSvg({}), 'ClipboardBulletListLtr20Regular');
export default ClipboardBulletListLtr20Regular;
      