import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .7.43 1.35 1.1 1.62l7.5 3.04c.13.06.27.1.42.14l.04-.22.46-1.83c.16-.65.5-1.24.97-1.72l.26-.26v-6.84l7.75-2.99v3.24a3.3 3.3 0 011.5.25V7.17c0-.7-.43-1.35-1.1-1.62l-7.5-3.04zm-2.25 1.4a2.25 2.25 0 011.7 0l6.59 2.66-2.67 1.04-7.53-2.93 1.91-.78zM7.21 5.5l7.48 2.9L12 9.46 4.6 6.56 7.21 5.5zM3.5 7.75l7.75 3.01v9.37a2.26 2.26 0 01-.1-.03l-7.5-3.04a.25.25 0 01-.15-.23V7.75zm15.6 4.92l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const BoxEdit24Regular = wrapIcon(rawSvg({}), 'BoxEdit24Regular');
export default BoxEdit24Regular;
      