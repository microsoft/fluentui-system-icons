import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.76 14a.84.84 0 01-.55-.18.6.6 0 01-.21-.46c0-.11.03-.25.1-.41L6.01 2.7c.18-.47.51-.7 1-.7.45 0 .77.22.95.7l3.94 10.24c.06.16.09.3.09.4 0 .2-.07.35-.22.47a.8.8 0 01-.54.18c-.36 0-.61-.19-.75-.56l-1.08-2.92H4.58l-1.07 2.92c-.14.37-.39.56-.75.56zm2.26-4.73h3.96L7.03 3.9h-.06L5.02 9.27zm7.77 5.46l5.48 5.48 4.16-4.16c.76-.76.76-2 0-2.75l-2.72-2.73a1.95 1.95 0 00-2.76 0l-4.16 4.16zm1.96-3.37L13 13.1V2.76c0-.23.06-.4.2-.55.13-.14.3-.2.5-.2.21 0 .38.06.5.2.14.14.21.32.21.55v4.07h.03a2.97 2.97 0 012.71-1.56c1.07 0 1.93.4 2.58 1.2.66.79.99 1.85.99 3.17l-.02.51-.29-.29a2.93 2.93 0 00-1.16-.71 3.34 3.34 0 00-.63-1.8 2.11 2.11 0 00-1.77-.84c-.72 0-1.3.3-1.76.87a3.52 3.52 0 00-.69 2.26c0 .66.12 1.24.35 1.72zm2.46 9.91l-5.48-5.48-1.16 1.16c-.76.76-.76 2 0 2.76l2.72 2.72c.34.34.77.53 1.21.56V23H20a.75.75 0 100-1.5h-3.02l.23-.23z" fill={primaryFill} /></svg>;
}

const TextClearFormatting24Filled = wrapIcon(rawSvg({}), 'TextClearFormatting24Filled');
export default TextClearFormatting24Filled;
      