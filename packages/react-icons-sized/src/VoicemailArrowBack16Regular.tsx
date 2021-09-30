import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5.75c0-.27-.06-.52-.17-.75h1.34a1.74 1.74 0 00-.16.89c.35-.23.72-.42 1.12-.56a.75.75 0 01.95-.25A5.54 5.54 0 0110.84 5 1.75 1.75 0 009.25 4h-4.5A1.75 1.75 0 106.5 5.75zm-1.75.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 5.2V2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5V9c0 .28.22.5.5.5h2.6c-.07.32-.1.66-.1 1H2.5A1.5 1.5 0 011 9V2.5C1 1.67 1.67 1 2.5 1h9c.83 0 1.5.67 1.5 1.5v3.1c-.32-.16-.65-.3-1-.4zm3 5.3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const VoicemailArrowBack16Regular = wrapIcon(rawSvg({}), 'VoicemailArrowBack16Regular');
export default VoicemailArrowBack16Regular;
      