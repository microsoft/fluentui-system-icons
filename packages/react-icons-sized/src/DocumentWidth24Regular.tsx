import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 15.72l.01.02c.4.4.95.57 1.49.48v3.53c0 1.2-.93 2.17-2.1 2.24l-.15.01H6.25c-1.2 0-2.17-.93-2.24-2.1L4 19.75v-3.53c.49.08.98-.05 1.36-.37l.14-.13v4.03c0 .38.28.7.65.74l.1.01h11.5c.38 0 .7-.28.74-.65l.01-.1v-4.03zM4.78 8.97c.27.26.3.68.07.97l-.07.09-1.22 1.22h3.78c.37 0 .66.33.66.75 0 .38-.25.7-.57.74H3.56l1.22 1.23c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2.37-2.37A.77.77 0 011 12c0-.29.14-.54.35-.66l2.37-2.37c.3-.3.77-.3 1.06 0zm14.44 0a.75.75 0 01.98-.08l.08.08 2.37 2.36c.2.13.35.38.35.67 0 .25-.1.47-.28.6l-.07.06-2.37 2.37-.08.07c-.27.2-.62.2-.89 0l-.1-.07-.06-.09a.75.75 0 01-.01-.88l.08-.1 1.22-1.21h-3.78l-.1-.01c-.31-.05-.56-.37-.56-.74 0-.38.25-.7.57-.75H20.44l-1.22-1.22-.07-.09a.75.75 0 01.07-.97zM17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v3.52c-.47-.07-.97.06-1.36.38l-.14.12V4.25c0-.38-.28-.7-.65-.74l-.1-.01H6.25c-.38 0-.7.28-.74.65l-.01.1v4.02h-.01c-.4-.41-.96-.58-1.5-.5L4 4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h11.5z" fill={primaryFill} /></svg>;
}

const DocumentWidth24Regular = wrapIcon(rawSvg({}), 'DocumentWidth24Regular');
export default DocumentWidth24Regular;
      