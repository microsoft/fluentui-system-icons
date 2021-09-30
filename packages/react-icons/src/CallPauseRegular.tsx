import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 01-.67 3.24l-.6.45c-.28.22-.4.52-.34.78.18.8.59 1.56 1.15 2.12.17.16.47.22.8.1l.66-.26a2.5 2.5 0 013.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5zm.49.88c-.59.32-.98.88-1 1.65-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 004.62 5.15 1.9 1.9 0 001.91.16 2.91 2.91 0 001.45-1.65.84.84 0 00-.06-.7l-.95-1.7a1.5 1.5 0 00-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32a5.32 5.32 0 01-1.42-2.61c-.17-.73.2-1.4.71-1.8l.6-.45c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 00-.58-.43 3.1 3.1 0 00-2.25.23zM13 2.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6zm3 0a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z" fill={primaryFill} /></svg>;
}

const CallPauseRegular = wrapIcon(rawSvg({}), 'CallPauseRegular');
export default CallPauseRegular;
      