import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.75v5.45a1.5 1.5 0 00-1.5 0V4.75a.25.25 0 00-.25-.25H12c-.69 0-1.25.56-1.25 1.25V12h-.25c-.52 0-.98.27-1.25.67V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25v10.5c0 .14.11.25.25.25H8c.4 0 .77-.2 1-.5v.5c0 .42.18.8.46 1.08-.42.27-.92.42-1.46.42H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /><path d="M18.13 11.2c.12.16.29.45.45.87.25.68.4 1.5.4 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.84-.52l.11-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 11.8-.6z" fill={primaryFill} /><path d="M13.7 11.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11z" fill={primaryFill} /><path d="M16.7 12.97c-.1-.3-.2-.55-.27-.7a.5.5 0 00-.9.45 4.6 4.6 0 01.45 1.78 3.94 3.94 0 01-.37 1.6l-.07.18a.5.5 0 00.89.44 5.53 5.53 0 00.55-2.22c0-.5-.1-1.02-.27-1.53z" fill={primaryFill} /></svg>;
}

const ImmersiveReader20Filled = wrapIcon(rawSvg({}), 'ImmersiveReader20Filled');
export default ImmersiveReader20Filled;
      