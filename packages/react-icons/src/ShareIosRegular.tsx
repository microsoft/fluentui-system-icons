import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9.5a.5.5 0 01.5.41V16a2.5 2.5 0 01-2.34 2.5H6a2.5 2.5 0 01-2.5-2.34V10a.5.5 0 011-.09V16c0 .78.6 1.42 1.36 1.5H14c.78 0 1.42-.6 1.5-1.36V10c0-.28.22-.5.5-.5zM5.4 6.39l4.25-4.24a.5.5 0 01.63-.06l.07.06 4.25 4.24a.5.5 0 01-.64.76l-.07-.05-3.39-3.4V13a.5.5 0 01-.41.5H10a.5.5 0 01-.5-.41V3.7L6.11 7.1a.5.5 0 01-.64.05L5.4 7.1a.5.5 0 01-.05-.64l.05-.07 4.25-4.24L5.4 6.39z" fill={primaryFill} /></svg>;
}

const ShareIosRegular = wrapIcon(rawSvg({}), 'ShareIosRegular');
export default ShareIosRegular;
      