import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9.75c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5zm-9 0c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v.5c0 1.44-1.43 3-4 3-2.57 0-4-1.56-4-3v-.5z" fill={primaryFill} /><path d="M10.75 4.5A2.75 2.75 0 005.69 3H4a.5.5 0 00-.5.5v2a.5.5 0 000 .05v.95C3.5 7.33 4.17 8 5 8h.38a.61.61 0 10-.46-1 .5.5 0 01-.42-.5V6h.25c.3 0 .57-.09.8-.24a2.75 2.75 0 005.2-1.26zm-4.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm-1 0a.5.5 0 01-.5.5H4.5V4h.75v.5z" fill={primaryFill} /></svg>;
}

const PersonSupport16Regular = wrapIcon(rawSvg({}), 'PersonSupport16Regular');
export default PersonSupport16Regular;
      