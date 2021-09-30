import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.8 4.38a3.25 3.25 0 015.24-.9l5.48 5.48a3.25 3.25 0 01-.9 5.24l-5.4 2.55c-.4.2-.72.53-.88.95l-1.59 4.13a1.75 1.75 0 01-2.87.61l-3.13-3.13L4.06 25H3v-1.06l5.69-5.69-3.13-3.13c-.9-.9-.58-2.42.6-2.87l4.14-1.6c.42-.15.76-.47.95-.88l2.55-5.39zm4.18.16c-.86-.86-2.3-.6-2.82.49l-2.55 5.39c-.36.75-1 1.34-1.77 1.64L6.7 13.65a.25.25 0 00-.1.4l7.33 7.33c.13.13.35.08.41-.09l1.6-4.13c.3-.77.88-1.4 1.63-1.77l5.4-2.55a1.75 1.75 0 00.48-2.82l-5.48-5.48z" fill={primaryFill} /></svg>;
}

const Pin28Regular = wrapIcon(rawSvg({}), 'Pin28Regular');
export default Pin28Regular;
      