import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8a5 5 0 0110 0v.03c.34.04.68.11 1 .22V8a6 6 0 10-5.75 6 4.47 4.47 0 01-.22-1H8a5 5 0 01-5-5zm8.5 0a.5.5 0 01-.01.11c-.37.09-.72.22-1.05.39H5a.5.5 0 010-1h6c.28 0 .5.22.5.5zm4.5 4.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-4.15-.65a.5.5 0 00-.7-.7l-1 1a.5.5 0 000 .7l1 1a.5.5 0 00.7-.7l-.14-.15h2.04c.14 0 .25.11.25.25v.25a.5.5 0 001 0v-.25c0-.69-.56-1.25-1.25-1.25h-2.04l.14-.15z" fill={primaryFill} /></svg>;
}

const SubtractCircleArrowBack16Regular = wrapIcon(rawSvg({}), 'SubtractCircleArrowBack16Regular');
export default SubtractCircleArrowBack16Regular;
      