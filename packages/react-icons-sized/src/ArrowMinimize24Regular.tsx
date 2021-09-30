import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 2.22c.26.27.29.69.07.98l-.07.08-6.23 6.23h5.7c.38 0 .7.28.74.65v.1c0 .38-.27.7-.64.74H13.68a.73.73 0 01-.2-.04l-.1-.04a.75.75 0 01-.38-.56v-7.6a.75.75 0 011.49-.1V8.43l6.23-6.22c.29-.29.76-.29 1.06 0zM11 13.76v7.5a.75.75 0 01-1.5.1v-5.8l-6.22 6.22a.75.75 0 01-1.13-.98l.07-.08 6.22-6.22H2.75a.75.75 0 01-.74-.64v-.1c0-.42.33-.75.74-.75h7.63l.1.03.05.02.09.04.08.06c.06.04.11.09.15.14l.07.11.04.1.02.06.01.06v.06-.01l.01.08z" fill={primaryFill} /></svg>;
}

const ArrowMinimize24Regular = wrapIcon(rawSvg({}), 'ArrowMinimize24Regular');
export default ArrowMinimize24Regular;
      