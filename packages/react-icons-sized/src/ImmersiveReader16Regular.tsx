import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5C1 2.67 1.67 2 2.5 2H6c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h3.5c.83 0 1.5.67 1.5 1.5v3.7a1.5 1.5 0 00-1-.18V3.5a.5.5 0 00-.5-.5H10c-.83 0-1.5.67-1.5 1.5v3.88L7.88 9H7.5V4.5C7.5 3.67 6.83 3 6 3H2.5a.5.5 0 00-.5.5v9c0 .28.22.5.5.5h3.58c.14.37.41.68.77.85-.27.1-.55.15-.85.15H2.5A1.5 1.5 0 011 12.5v-9zm9.7 4.54c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L8.29 13H7.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 11.8-.6zm-1.7 1.08a5.5 5.5 0 01.55 2.22 4.9 4.9 0 01-.55 2.22.5.5 0 11-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.6 4.6 0 00-.23-.56.5.5 0 11.9-.44z" fill={primaryFill} /></svg>;
}

const ImmersiveReader16Regular = wrapIcon(rawSvg({}), 'ImmersiveReader16Regular');
export default ImmersiveReader16Regular;
      