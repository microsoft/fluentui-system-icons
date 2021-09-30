import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.33 6.4l-.9-.88a1.25 1.25 0 010-1.77 1.24 1.24 0 011.76 0l3.1 3.1A2.45 2.45 0 0111.47 11c-.26.58-.85 1-1.54 1H4.7A1.7 1.7 0 013 10.3V9.24c0-.3.05-.58.14-.85A1.75 1.75 0 115.48 6.5l.25-.01h3.16c.12 0 .24 0 .35.02l.09-.12zm.16-1.94a.24.24 0 00-.35 0c-.1.1-.1.25 0 .35l1.6 1.58-.47.45c-.17.18-.26.32-.32.44l-.17.4-.42-.11a1.73 1.73 0 00-.47-.07H5.73C4.78 7.5 4 8.28 4 9.24v1.07c0 .39.31.7.69.7H7v-.45c0-.25-.25-.56-.68-.56H5.5a.5.5 0 010-1h.82C7.2 9 8 9.66 8 10.56V11h1.93c.35 0 .65-.26.69-.6l.06-.57.55.14c.47.11.98-.02 1.35-.38.56-.57.56-1.48 0-2.04l-3.1-3.1zM3.63 7.49c.24-.29.53-.52.87-.7v-.04a.75.75 0 10-.87.74z" fill={primaryFill} /></svg>;
}

const AnimalRabbit16Regular = wrapIcon(rawSvg({}), 'AnimalRabbit16Regular');
export default AnimalRabbit16Regular;
      