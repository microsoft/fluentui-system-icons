import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2C7.78 2 7 2.78 7 3.75v3c0 .14-.11.25-.25.25h-3C2.78 7 2 7.78 2 8.75v3c0 .97.78 1.75 1.75 1.75h8c.97 0 1.75-.78 1.75-1.75v-3c0-.14.11-.25.25-.25h2.5c.97 0 1.75-.78 1.75-1.75v-3C18 2.78 17.22 2 16.25 2h-7.5zm7.5 5H13.5V3.5h2.75c.14 0 .25.11.25.25v3c0 .14-.11.25-.25.25zM12 7H8.48l.02-.25v-3c0-.14.11-.25.25-.25H12V7zM7 8.5V12H3.75a.25.25 0 01-.25-.25v-3c0-.14.11-.25.25-.25H7zm1.5 0h3.52l-.02.25v3c0 .14-.11.25-.25.25H8.5V8.5zm8.75 2c-.97 0-1.75.78-1.75 1.75v3c0 .14-.11.25-.25.25h-8.5c-.97 0-1.75.78-1.75 1.75v3c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75h-3zM17 12.25c0-.14.11-.25.25-.25h3c.14 0 .25.11.25.25v3.25h-3.52l.02-.25v-3zM17 17h3.5v3.25c0 .14-.11.25-.25.25H17V17zm-1.5-.02v3.52h-4V17h3.75c.08 0 .17 0 .25-.02zM10 17v3.5H6.75a.25.25 0 01-.25-.25v-3c0-.14.11-.25.25-.25H10z" fill={primaryFill} /></svg>;
}

const TetrisApp24Regular = wrapIcon(rawSvg({}), 'TetrisApp24Regular');
export default TetrisApp24Regular;
      