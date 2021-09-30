import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1zM3 6a3 3 0 013-3h8a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14V6zm9.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z" fill={primaryFill} /></svg>;
}

const Image20Filled = wrapIcon(rawSvg({}), 'Image20Filled');
export default Image20Filled;
      