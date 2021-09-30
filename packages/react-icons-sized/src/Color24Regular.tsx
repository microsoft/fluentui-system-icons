import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.84 5.86C6.78 1.94 12.87.8 17.2 3.5c4.28 2.66 5.86 7.77 4.1 12.57-1.65 4.54-6.01 6.33-9.16 4.05-1.17-.85-1.63-1.92-1.85-3.66l-.1-.99-.05-.4c-.12-.93-.31-1.35-.7-1.57-.54-.3-.9-.3-1.6-.03l-.35.14-.18.08c-1.01.44-1.69.6-2.54.42l-.2-.05-.17-.04c-2.78-.87-3.2-4.65-.56-8.16zm.98 6.71l.13.04.13.03c.44.09.81.02 1.44-.24l.6-.26c1.2-.5 1.98-.54 3.04.05.92.51 1.28 1.3 1.46 2.66l.06.46.05.53.05.43c.17 1.36.48 2.09 1.24 2.64 2.28 1.65 5.54.3 6.87-3.35 1.52-4.15.18-8.51-3.48-10.79-3.67-2.28-8.9-1.3-11.37 1.99-2.08 2.76-1.82 5.28-.22 5.81zm11.23-1.99a1.25 1.25 0 112.41-.65 1.25 1.25 0 01-2.41.65zm.5 3.49a1.25 1.25 0 112.4-.65 1.25 1.25 0 01-2.4.65zm-2.48-6.5a1.25 1.25 0 112.41-.64 1.25 1.25 0 01-2.41.65zm-.03 9a1.25 1.25 0 112.42-.64 1.25 1.25 0 01-2.42.65zm-3.5-9.96a1.25 1.25 0 112.42-.65 1.25 1.25 0 01-2.42.65z" fill={primaryFill} /></svg>;
}

const Color24Regular = wrapIcon(rawSvg({}), 'Color24Regular');
export default Color24Regular;
      