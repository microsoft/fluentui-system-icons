import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-1c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 015.5 9zM2.7 7.6a3.5 3.5 0 014.9-4.9L2.7 7.6zM13 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM5.5 11a5.5 5.5 0 004.9-8H14a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-3.6c.75.38 1.6.6 2.5.6zM14 7.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM6 17c-.65 0-1.24-.2-1.73-.55l5.38-5.3c.2-.2.5-.2.7 0l5.38 5.3c-.49.35-1.08.55-1.73.55H6z" fill={primaryFill} /></svg>;
}

const ImageProhibited20Filled = wrapIcon(rawSvg({}), 'ImageProhibited20Filled');
export default ImageProhibited20Filled;
      