import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 5.45 3.46 4 5.25 4h17.5C24.55 4 26 5.46 26 7.25v13.5c0 1.8-1.45 3.25-3.25 3.25h-8.28l-1.5-1.5h9.78c.97 0 1.75-.78 1.75-1.75V7.25c0-.97-.78-1.75-1.75-1.75H5.25c-.96 0-1.75.78-1.75 1.75v5.48c-.55.29-1.05.65-1.5 1.08V7.25z" fill={primaryFill} /><path d="M11.62 14.5A6.53 6.53 0 009.97 13h10.28a.75.75 0 010 1.5h-8.63z" fill={primaryFill} /><path d="M13 18.5h5.25a.75.75 0 000-1.5h-5.42c.11.48.17.98.17 1.5z" fill={primaryFill} /><path d="M7 9.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017 9.75z" fill={primaryFill} /><path d="M10.88 21.82a5.5 5.5 0 10-1.06 1.06l2.9 2.9a.75.75 0 101.06-1.06l-2.9-2.9zm-.38-3.32a4 4 0 11-8 0 4 4 0 018 0z" fill={primaryFill} /></svg>;
}

const SlideSearch28Regular = wrapIcon(rawSvg({}), 'SlideSearch28Regular');
export default SlideSearch28Regular;
      