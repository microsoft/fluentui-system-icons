import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.75a.75.75 0 00-1.4-.39 1.71 1.71 0 01-.1.16l-.33.41c-.3.33-.72.68-1.2.87a.75.75 0 00.56 1.4c.36-.15.69-.34.97-.55v4.6a.75.75 0 001.5 0v-6.5zm8 1.75a2.5 2.5 0 115 0v3a2.5 2.5 0 01-5 0v-3zm3.5 0a1 1 0 10-2 0v3a1 1 0 102 0v-3zM3 12.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1H4v2h1.5a.5.5 0 010 1H4v1.5a.5.5 0 01-1 0v-5zm5 0c0-.28.22-.5.5-.5H10a2 2 0 010 4H9v1.5a.5.5 0 01-1 0v-5zM9 15h1a1 1 0 100-2H9v2zm5.75-3a1.75 1.75 0 000 3.5h.5a.75.75 0 010 1.5h-.76a.49.49 0 01-.49-.49v-.01a.5.5 0 00-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 100-3.5h-.5a.75.75 0 010-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 101 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76zM7.99 4.37v.01a.75.75 0 01-1.48-.25c-.07.41 0 0 0 0a1.71 1.71 0 01.1-.37A2.7 2.7 0 019.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.7 6.7 0 01-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 00-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 00-.2.43z" fill={primaryFill} /></svg>;
}

const Fps120Filled = wrapIcon(rawSvg({}), 'Fps120Filled');
export default Fps120Filled;
      