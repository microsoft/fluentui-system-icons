import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.93 2.05l1.03.2c.97.18 1.63 1.1 1.53 2.12l-.2 2.05c-.09.89-.72 1.65-1.57 1.88l-2.35.63a8.1 8.1 0 00.18 6.23l2.2.4a1.9 1.9 0 011.55 1.7l.2 2.04a2.17 2.17 0 01-1.5 2.28l-1.04.3c-1.04.32-2.12.04-2.85-.71-1.74-1.78-2.6-4.75-2.61-8.91 0-4.17.86-7.23 2.59-9.2a3.05 3.05 0 012.84-1.01zm6.77 5.1l.08.07 4 4c.26.26.29.68.07.97l-.07.09-4 4a.75.75 0 01-1.13-.97l.07-.09 2.71-2.72H12a.75.75 0 01-.74-.64v-.1c0-.39.27-.7.64-.75h6.54l-2.72-2.73a.75.75 0 01-.07-.98l.07-.08c.24-.24.6-.28.87-.14l.1.07z" fill={primaryFill} /></svg>;
}

const CallForward24Filled = wrapIcon(rawSvg({}), 'CallForward24Filled');
export default CallForward24Filled;
      