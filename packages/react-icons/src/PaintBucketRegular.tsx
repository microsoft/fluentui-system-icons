import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 000 2.12L6.7 15.9a1.5 1.5 0 002.12 0l5.09-5.09a1.5 1.5 0 000-2.12L9.56 4.35A1.5 1.5 0 009 4V2.5zM8 5.2v1.3a.5.5 0 001 0V5.2l4.19 4.2a.5.5 0 01.08.6H3.2L8 5.2zm-.6 9.99L3.2 11h9.1l-4.2 4.19a.5.5 0 01-.7 0z" fill={primaryFill} /><path d="M16.02 11.4a.6.6 0 00-1.04 0l-1.65 2.82a2.51 2.51 0 104.34 0l-1.65-2.83zm-1.82 3.33l1.3-2.24 1.3 2.24a1.51 1.51 0 11-2.6 0z" fill={primaryFill} /></svg>;
}

const PaintBucketRegular = wrapIcon(rawSvg({}), 'PaintBucketRegular');
export default PaintBucketRegular;
      