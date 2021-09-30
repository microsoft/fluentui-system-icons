import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 8L9.6 10.68a.5.5 0 00.64.77l.07-.06 3.56-3.57.05-.07.03-.06.02-.06V7.6a.5.5 0 00.02-.1v.07-.11l-.02-.09-.02-.06-.04-.08-.05-.07-3.55-3.55a.5.5 0 00-.77.64l.06.07L12.3 7H8c-3.52 0-5.89 1.98-6 4.8v.2a.5.5 0 001 0c0-2.27 1.8-3.9 4.74-4h4.56z" fill={primaryFill} /></svg>;
}

const ArrowForward16Regular = wrapIcon(rawSvg({}), 'ArrowForward16Regular');
export default ArrowForward16Regular;
      