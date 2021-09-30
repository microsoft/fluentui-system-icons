import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 11a5 5 0 005 5h4.5a.5.5 0 000-1H9a4 4 0 010-8h5.3l-2.7 2.7a.5.5 0 10.7.7l3.54-3.53a.5.5 0 00.13-.5.5.5 0 00-.14-.25L12.3 2.6a.5.5 0 10-.71.7L14.29 6H9a5 5 0 00-5 5z" fill={primaryFill} /></svg>;
}

const ArrowHookUpRightRegular = wrapIcon(rawSvg({}), 'ArrowHookUpRightRegular');
export default ArrowHookUpRightRegular;
      