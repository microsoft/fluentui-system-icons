import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6.87l-.98-1.7-.02-.04V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3.61l-.3.53c-.1.15-.16.3-.21.47H5a2 2 0 01-2-2V5z" fill={primaryFill} /><path d="M9.76 14l.58-1H8.5a.5.5 0 000 1h1.26z" fill={primaryFill} /><path d="M11.78 10.5l.2-.33c.15-.27.34-.5.57-.67H8.5a.5.5 0 100 1h3.28z" fill={primaryFill} /><path d="M7 6.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M6.25 10.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M8.5 6a.5.5 0 100 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /><path d="M13.65 10.05a1.34 1.34 0 011.5.61l3.67 6.37a1.3 1.3 0 01-.5 1.8c-.2.11-.42.17-.66.17h-7.33A1.33 1.33 0 019 17.68c0-.23.06-.45.17-.65l3.67-6.37c.18-.31.48-.52.8-.61zm.85 2.45a.5.5 0 10-1 0V15a.5.5 0 101 0v-2.5zM14 18a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareWarning20Regular = wrapIcon(rawSvg({}), 'TextBulletListSquareWarning20Regular');
export default TextBulletListSquareWarning20Regular;
      