import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 2A2.5 2.5 0 002 4.5v5A2.5 2.5 0 004.5 12h5.02a2.5 2.5 0 002.5-2.47l.06-5A2.5 2.5 0 009.58 2H4.5zM3 4.5C3 3.67 3.67 3 4.5 3h5.08c.83 0 1.5.68 1.5 1.52l-.06 5c0 .23-.06.45-.15.64L8.4 7.71a2 2 0 00-2.82 0l-2.44 2.44A1.5 1.5 0 013 9.5v-5zm.85 6.35L6.3 8.41a1 1 0 011.42 0l2.44 2.45c-.19.09-.4.14-.63.14H4.5a1.5 1.5 0 01-.65-.15zM7 14a3 3 0 01-2.24-1H9.5A3.5 3.5 0 0013 9.5V7 4.76A3 3 0 0114 7v2.5A4.5 4.5 0 019.5 14H7z" fill={primaryFill} /></svg>;
}

const ImageMultiple16Regular = wrapIcon(rawSvg({}), 'ImageMultiple16Regular');
export default ImageMultiple16Regular;
      