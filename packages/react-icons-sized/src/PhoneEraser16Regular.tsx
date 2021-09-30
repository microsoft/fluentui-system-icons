import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 10.88v2.37c0 .41-.34.75-.75.75h-4.5a.75.75 0 01-.75-.75V2.75c0-.41.34-.75.75-.75h4.13l.91-.91A1.75 1.75 0 009.25 1h-4.5C3.78 1 3 1.78 3 2.75v10.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-3.13l-.23.23c-.23.23-.5.4-.77.53zM5.5 12.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm7.56-11.15a1.5 1.5 0 00-2.12 0L6.35 5.94a1.5 1.5 0 000 2.12l1.59 1.59a1.5 1.5 0 002.12 0l4.59-4.59a1.5 1.5 0 000-2.12l-1.59-1.59zM8 5.71L10.3 8l-.95.94a.5.5 0 01-.7 0L7.06 7.35a.5.5 0 010-.7L8 5.7z" fill={primaryFill} /></svg>;
}

const PhoneEraser16Regular = wrapIcon(rawSvg({}), 'PhoneEraser16Regular');
export default PhoneEraser16Regular;
      