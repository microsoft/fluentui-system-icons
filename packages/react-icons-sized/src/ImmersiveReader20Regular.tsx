import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.5v5.7a1.5 1.5 0 00-1-.18V4.5a.5.5 0 00-.5-.5H12c-.83 0-1.5.67-1.5 1.5V12c-.38 0-.73.14-1 .38V5.5C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H8c.39 0 .74-.15 1-.39.03.37.19.7.43.94-.4.28-.9.45-1.43.45H3.5A1.5 1.5 0 012 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5z" fill={primaryFill} /><path d="M13.7 11.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11z" fill={primaryFill} /><path d="M18.15 11.2c.12.16.28.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.17.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 01.8-.6z" fill={primaryFill} /><path d="M16.72 12.97c-.1-.3-.2-.55-.27-.7a.5.5 0 10-.9.45A4.6 4.6 0 0116 14.5a3.94 3.94 0 01-.37 1.6l-.08.18a.5.5 0 10.9.44A5.5 5.5 0 0017 14.5c0-.5-.1-1.02-.28-1.53z" fill={primaryFill} /></svg>;
}

const ImmersiveReader20Regular = wrapIcon(rawSvg({}), 'ImmersiveReader20Regular');
export default ImmersiveReader20Regular;
      