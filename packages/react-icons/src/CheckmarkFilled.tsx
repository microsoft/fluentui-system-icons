import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.03 13.9L3.56 10a.75.75 0 00-1.12 1l4 4.5c.29.32.79.34 1.09.03l10.5-10.5a.75.75 0 00-1.06-1.06l-9.94 9.94z" fill={primaryFill} /></svg>;
}

const CheckmarkFilled = wrapIcon(rawSvg({}), 'CheckmarkFilled');
export default CheckmarkFilled;
      