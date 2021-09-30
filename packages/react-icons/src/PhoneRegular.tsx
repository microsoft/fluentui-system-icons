import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 14a.5.5 0 000 1h2a.5.5 0 000-1H9z" fill={primaryFill} /><path d="M7 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" fill={primaryFill} /></svg>;
}

const PhoneRegular = wrapIcon(rawSvg({}), 'PhoneRegular');
export default PhoneRegular;
      