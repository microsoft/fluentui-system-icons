import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.15 13.35l-3-3a.5.5 0 010-.7l3-3a.5.5 0 11.7.7L7.71 9.5h5.79a.5.5 0 010 1H7.7l2.15 2.15a.5.5 0 01-.7.7zM2 10a8 8 0 1016 0 8 8 0 00-16 0zm8 7a7 7 0 110-14 7 7 0 010 14z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeftRegular = wrapIcon(rawSvg({}), 'ArrowCircleLeftRegular');
export default ArrowCircleLeftRegular;
      