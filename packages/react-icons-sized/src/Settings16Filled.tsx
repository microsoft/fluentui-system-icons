import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.27 6.15c.26-.8.69-1.54 1.26-2.17.1-.1.25-.14.38-.1l1.36.49a.71.71 0 00.94-.54l.26-1.41a.35.35 0 01.27-.29 6.07 6.07 0 012.52 0c.14.03.25.14.27.28l.26 1.42a.7.7 0 00.94.54l1.36-.49a.36.36 0 01.38.1c.57.63 1 1.37 1.26 2.17.05.14 0 .29-.1.38l-1.1.93a.7.7 0 000 1.08l1.1.93c.1.1.15.24.1.38-.26.8-.69 1.54-1.26 2.17-.1.1-.25.14-.38.1l-1.36-.49a.71.71 0 00-.94.54l-.26 1.41a.35.35 0 01-.27.29 6.07 6.07 0 01-2.52 0 .35.35 0 01-.27-.29l-.26-1.41a.7.7 0 00-.94-.54l-1.36.49a.36.36 0 01-.38-.1c-.57-.63-1-1.37-1.26-2.17a.35.35 0 01.1-.38l1.1-.93a.7.7 0 000-1.08l-1.1-.93a.35.35 0 01-.1-.38zM6.25 8a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /></svg>;
}

const Settings16Filled = wrapIcon(rawSvg({}), 'Settings16Filled');
export default Settings16Filled;
      