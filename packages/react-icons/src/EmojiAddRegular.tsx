import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1a8 8 0 017.98 8.59A5.46 5.46 0 0016 9.2V9a7 7 0 10-6.8 7c.1.34.23.67.39.98L9 17A8 8 0 119 1z" fill={primaryFill} /><path d="M6.15 11.43a4 4 0 003.19 1.17l-.03.06c-.1.3-.19.62-.24.95a5 5 0 01-3.62-1.48.5.5 0 01.7-.7z" fill={primaryFill} /><path d="M11.5 6.5a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /><path d="M6.5 6.5a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const EmojiAddRegular = wrapIcon(rawSvg({}), 'EmojiAddRegular');
export default EmojiAddRegular;
      