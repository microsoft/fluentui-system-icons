import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 5.5c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5V8a.5.5 0 01-1 0V6.7L7.35 9.36a.5.5 0 11-.7-.7L9.29 6H8a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.13 3.7A2.5 2.5 0 016.5 2h5A2.5 2.5 0 0114 4.5v5c0 1.1-.7 2.03-1.7 2.37v.36c0 .34-.1.76-.38 1.12-.3.37-.75.65-1.38.65H4.77A2.75 2.75 0 012 11.23V5.46c0-.55.2-1 .55-1.32.34-.31.78-.45 1.22-.45h.36zM4 4.7h-.23a.81.81 0 00-.55.18c-.12.1-.22.28-.22.58v5.77c0 1 .78 1.77 1.77 1.77h5.77a.7.7 0 00.59-.27.89.89 0 00.18-.5V12H6.5A2.5 2.5 0 014 9.5V4.7zM6.5 3C5.67 3 5 3.67 5 4.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /></svg>;
}

const WindowNew16Regular = wrapIcon(rawSvg({}), 'WindowNew16Regular');
export default WindowNew16Regular;
      