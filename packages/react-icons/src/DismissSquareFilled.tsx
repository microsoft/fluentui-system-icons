import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.15 1.15a.5.5 0 000 .7L9.29 10l-2.14 2.15a.5.5 0 00.7.7L10 10.71l2.15 2.14a.5.5 0 00.7-.7L10.71 10l2.14-2.15a.5.5 0 00-.7-.7L10 9.29 7.85 7.15a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const DismissSquareFilled = wrapIcon(rawSvg({}), 'DismissSquareFilled');
export default DismissSquareFilled;
      