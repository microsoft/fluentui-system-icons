import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.26 4.6a5.21 5.21 0 019.03 5.22l-.2.34a.5.5 0 01-.67.19l-3.47-2-1.93 3.38c1.34.4 2.5 1.33 3.31 2.52h-.09c-.34 0-.66.11-.92.31A4.9 4.9 0 009.5 12.5a4.9 4.9 0 00-3.82 2.06 1.5 1.5 0 00-1.01-.3 5.94 5.94 0 015.31-2.74l2.1-3.68-3.83-2.2a.5.5 0 01-.18-.7l.2-.33zm.92.42l1.7.98.02-.02a8.08 8.08 0 013.27-2.74 4.22 4.22 0 00-4.99 1.78zM14 7.8c.47-.82.7-1.46.77-2.09a5.8 5.8 0 00-.06-1.62 6.96 6.96 0 00-2.95 2.41L14 7.8zm.87.5l1.61.93a4.22 4.22 0 00-.74-5.02c.07.56.09 1.1.02 1.63-.1.79-.38 1.56-.89 2.46zm-9.63 7.3a.5.5 0 00-.96.03c-.17.7-.5 1.08-.86 1.3-.38.23-.87.32-1.42.32a.5.5 0 000 1c.64 0 1.33-.1 1.94-.47.34-.2.64-.5.88-.87a2.96 2.96 0 004.68-.01 2.96 2.96 0 004.74-.06c.64.9 1.7 1.41 2.76 1.41a.5.5 0 000-1c-.98 0-1.96-.64-2.29-1.65a.5.5 0 00-.95 0 1.98 1.98 0 01-3.79.07.5.5 0 00-.94 0 1.98 1.98 0 01-3.8-.08z" fill={primaryFill} /></svg>;
}

const BeachRegular = wrapIcon(rawSvg({}), 'BeachRegular');
export default BeachRegular;
      