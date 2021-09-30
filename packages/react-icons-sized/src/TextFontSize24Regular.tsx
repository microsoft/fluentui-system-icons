import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.21 17.11L15.04 3.5a.75.75 0 011.37-.11l.05.1L21.96 19a.75.75 0 01-1.38.6l-.04-.1-1.6-4.5h-6.39l-1.58 4.45a.75.75 0 01-.35.45l-.1.05a.75.75 0 01-.92-.33l-.05-.1-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.76-9.5a.75.75 0 011.34-.1l.05.1 3.01 7.64L15.04 3.5 10.21 17.1zm-3.7-5.32L5.03 15.5h2.92L6.5 11.8zM15.74 6l-2.67 7.51h5.33L15.75 6z" fill={primaryFill} /></svg>;
}

const TextFontSize24Regular = wrapIcon(rawSvg({}), 'TextFontSize24Regular');
export default TextFontSize24Regular;
      