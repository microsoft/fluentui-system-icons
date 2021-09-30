import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6a2 2 0 100 4 2 2 0 000-4zM7 8a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M10.62 4.4a.7.7 0 01-.83-.57l-.26-1.42a.35.35 0 00-.27-.28 6.07 6.07 0 00-2.52 0 .35.35 0 00-.27.29L6.2 3.83a.71.71 0 01-.94.54l-1.36-.49a.36.36 0 00-.38.1c-.57.63-1 1.37-1.26 2.17-.05.14 0 .29.1.38l1.1.93a.7.7 0 010 1.08l-1.1.93c-.1.1-.15.24-.1.38.26.8.69 1.54 1.26 2.17.1.1.25.14.38.1l1.36-.49a.7.7 0 01.94.54l.26 1.41c.02.15.13.26.27.29a6.07 6.07 0 002.52 0 .35.35 0 00.27-.29l.26-1.41a.71.71 0 01.94-.54l1.36.49c.13.04.28 0 .38-.1.57-.63 1-1.37 1.26-2.17a.35.35 0 00-.1-.38l-1.1-.93a.7.7 0 010-1.08l1.1-.93c.1-.1.15-.24.1-.38-.26-.8-.69-1.54-1.26-2.17a.36.36 0 00-.38-.1l-1.36.49a.71.71 0 01-.11.03zM4 4.98l.94.33a1.71 1.71 0 002.25-1.3l.18-.97a5.1 5.1 0 011.26 0l.18.97a1.7 1.7 0 002.25 1.3l.94-.33c.26.33.47.7.63 1.08l-.75.64a1.7 1.7 0 000 2.6l.75.64c-.16.39-.37.75-.63 1.08l-.94-.33a1.7 1.7 0 00-2.25 1.3l-.18.97a5.1 5.1 0 01-1.26 0l-.18-.97a1.7 1.7 0 00-2.25-1.3l-.94.33c-.26-.33-.47-.7-.63-1.08l.75-.64a1.7 1.7 0 000-2.6l-.75-.64c.16-.39.37-.75.63-1.08z" fill={primaryFill} /></svg>;
}

const Settings16Regular = wrapIcon(rawSvg({}), 'Settings16Regular');
export default Settings16Regular;
      