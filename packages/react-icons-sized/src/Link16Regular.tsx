import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 4h1a3.5 3.5 0 01.2 7H9.5a.5.5 0 01-.1-.99h.1l1-.01a2.5 2.5 0 00.16-5H9.5a.5.5 0 01-.09-1h1.09-1zm-4 0h1a.5.5 0 01.09 1H5.5a2.5 2.5 0 00-.16 5H6.5a.5.5 0 01.09 1H5.5a3.5 3.5 0 01-.2-7h1.2-1zm0 3h5a.5.5 0 01.09 1H5.5a.5.5 0 01-.09-1h.09z" fill={primaryFill} /></svg>;
}

const Link16Regular = wrapIcon(rawSvg({}), 'Link16Regular');
export default Link16Regular;
      