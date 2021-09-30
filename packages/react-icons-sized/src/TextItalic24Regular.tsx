import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 4h8.5a.75.75 0 01.1 1.5H15.06l-5.01 13h4.21c.38 0 .7.28.74.65v.1c0 .38-.27.7-.64.74l-.1.01h-9.5a.75.75 0 01-.75-.75c0-.38.28-.7.65-.74l.1-.01h3.68l.03-.07L13.45 5.5h-3.7a.75.75 0 01-.74-.65v-.1c0-.38.27-.7.64-.74l.1-.01h8.5-8.5z" fill={primaryFill} /></svg>;
}

const TextItalic24Regular = wrapIcon(rawSvg({}), 'TextItalic24Regular');
export default TextItalic24Regular;
      