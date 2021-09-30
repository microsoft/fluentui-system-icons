import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.13 8.25a4.87 4.87 0 11-1.1 9.63l-.1.03-2.21.9c-1 .41-2.15.13-2.85-.68l-.1-.15-.28-.36a2.5 2.5 0 01-.04-2.91l.1-.15 1.58-1.94.17-.2a4.87 4.87 0 014.83-4.17zm-4.8 5.72l-1 1.22a1.5 1.5 0 00-.12 1.71l.08.12.28.37a1.5 1.5 0 001.63.55l.14-.05 1.34-.55a4.88 4.88 0 01-2.36-3.37zm4.8-4.72a3.88 3.88 0 00-3.76 2.93l-.07.3-.03.25-.01.18v.21c0 1.78 1.18 3.28 2.81 3.74l.2.04.22.05.2.02.17.02H14.33a3.88 3.88 0 00-.2-7.74zM5.88 1c.66 0 1.29.13 1.86.37l.7-.23a2.5 2.5 0 012.66.73l.12.14.12.17.29.46c.53.84.5 1.91-.05 2.74l-.1.15-.13.14-.62.67A4.88 4.88 0 115.88 1zm-.04 1h.04A3.87 3.87 0 109.1 8.02l-.06.04-.2.13a3.44 3.44 0 01-4.77-1.05A3.5 3.5 0 015.61 2.1l.23-.1zm4.58.61a1.5 1.5 0 00-1.53-.56l-.14.04-2.36.78a2.5 2.5 0 00-1.46 3.74 2.44 2.44 0 003.75.46l.16-.16L10.6 5l.1-.11a1.5 1.5 0 00.15-1.6l-.07-.12-.28-.45-.08-.12zm-.8.53l.05.08.26.42a.5.5 0 01-.8.6l-.06-.08-.26-.43a.5.5 0 01.8-.59z" fill={primaryFill} /></svg>;
}

const SurfaceEarbuds20Regular = wrapIcon(rawSvg({}), 'SurfaceEarbuds20Regular');
export default SurfaceEarbuds20Regular;
      