import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 9.25a.75.75 0 110-1.5.75.75 0 010 1.5zm0 3a.75.75 0 110-1.5.75.75 0 010 1.5zM12 14.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-1-6a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5zM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-12c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ClipboardBulletListRtl20Regular = wrapIcon(rawSvg({}), 'ClipboardBulletListRtl20Regular');
export default ClipboardBulletListRtl20Regular;
      