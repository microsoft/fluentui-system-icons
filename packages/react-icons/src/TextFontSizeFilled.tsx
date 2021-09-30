import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 3c.32 0 .6.2.7.5l4.26 12.25a.75.75 0 01-1.42.5l-1.3-3.75h-4.66L9.2 16.26a.75.75 0 01-1.4.01L6.92 14H4.26l-.8 2.25a.75.75 0 01-1.42-.5L4.8 8a.75.75 0 011.41-.02l2.28 5.9L12.3 3.48c.1-.3.39-.5.7-.49zM4.8 12.5h1.55l-.8-2.1-.75 2.1zm8.19-6.52L11.14 11h3.58l-1.74-5.02z" fill={primaryFill} /></svg>;
}

const TextFontSizeFilled = wrapIcon(rawSvg({}), 'TextFontSizeFilled');
export default TextFontSizeFilled;
      