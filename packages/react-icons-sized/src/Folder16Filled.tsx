import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 4h-.02l-1.12-.89A.5.5 0 005.75 3H4a2 2 0 00-2 2v.5h3.56L7.2 4zm1.5 0L6.08 6.37a.5.5 0 01-.34.13H2V11c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2H8.7z" fill={primaryFill} /></svg>;
}

const Folder16Filled = wrapIcon(rawSvg({}), 'Folder16Filled');
export default Folder16Filled;
      