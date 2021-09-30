import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.03 2.58a.75.75 0 00-.39-.03c-.99.17-2 .65-2.9 1.23a18.85 18.85 0 00-3.87 3.27 13 13 0 01-.65.7c-.26.27-.57.6-.74.84-.38.54-.75 1.13-1.09 1.75-.1.18-.11.4-.05.6.9 2.66 3.7 5.1 7 6.86 3.31 1.77 7.3 2.95 10.83 2.95h.84c.41 0 .75-.33.75-.75v-2.8c0-1.03-.6-1.99-1.52-2.45l-2.38-1.2a11.4 11.4 0 01-1.25-1.92 6.91 6.91 0 01-.72-1.97l.54-.9a4.25 4.25 0 012-1.71l.86-.36a.75.75 0 00-.03-1.4l-7.23-2.7zm8.23 14.64c-1.58-.21-2.25-.4-3.51-.76l.89-1.34 1.93.97c.42.2.7.64.7 1.12zm-4 .65c1.4.4 2.13.62 4 .86v.52h-.09c-3.22 0-6.98-1.08-10.13-2.77-3.03-1.62-5.34-3.7-6.17-5.72l.27-.44a22.61 22.61 0 003.91 3.55 25.96 25.96 0 004.75 2.8l2.5.93.05.01.91.26zM8.79 8.93L6.76 6.35c.55-.46 1.15-.92 1.77-1.3a7.3 7.3 0 012.17-.99l5.36 2.01A5.75 5.75 0 0014.15 8l-.33.54-2.74-1.27a.75.75 0 00-1 .95l2.14 5.43-.55 1.31c-1.39-.7-2.32-1.27-3.36-2.01l.62-3.41a.75.75 0 00-.14-.6z" fill={primaryFill} /></svg>;
}

const Run24Filled = wrapIcon(rawSvg({}), 'Run24Filled');
export default Run24Filled;
      