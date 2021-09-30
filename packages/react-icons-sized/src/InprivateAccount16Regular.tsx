import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 8 3 8.67 3 9.5v.5c0 1.97 1.86 4 5 4 1.73 0 3.07-.62 3.93-1.5H8v.5c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5H8v.5h5z" fill={primaryFill} /><path d="M12.64 11.5H8v-1h4.96c-.05.34-.16.68-.32 1z" fill={primaryFill} /><path d="M10.75 4.25c0-.17-.02-.34-.05-.5H8v1h2.7c.03-.16.05-.33.05-.5z" fill={primaryFill} /><path d="M8 1.5c.97 0 1.81.5 2.3 1.25H8V2.5A1.75 1.75 0 108 6v-.25h2.3A2.75 2.75 0 118 1.5z" fill={primaryFill} /></svg>;
}

const InprivateAccount16Regular = wrapIcon(rawSvg({}), 'InprivateAccount16Regular');
export default InprivateAccount16Regular;
      