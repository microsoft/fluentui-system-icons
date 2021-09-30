import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6.87l-.98-1.7a2.32 2.32 0 00-3.47-.67H8.5a.5.5 0 100 1h3.28L10.34 13H8.5a.5.5 0 000 1h1.26L8.3 16.53c-.08.15-.15.3-.2.47H5a2 2 0 01-2-2V5zm4 1.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM7 10a.75.75 0 10-1.5 0A.75.75 0 007 10zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5zM8 6.5c0 .27.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M13.65 10.05a1.34 1.34 0 011.5.61l3.67 6.37a1.3 1.3 0 01-.5 1.8c-.2.11-.42.17-.66.17h-7.33A1.33 1.33 0 019 17.68c0-.23.06-.45.17-.65l3.67-6.37c.18-.31.48-.52.8-.61zm.85 2.45a.5.5 0 10-1 0V15a.5.5 0 101 0v-2.5zM14 18a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareWarning20Filled = wrapIcon(rawSvg({}), 'TextBulletListSquareWarning20Filled');
export default TextBulletListSquareWarning20Filled;
      