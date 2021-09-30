import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 11.5h5.65a1 1 0 010 2h-2.39c.66.77 1 1.67 1 2.68 0 2.93-3.28 4.92-7.03 4.48-2.33-.27-3.97-1.22-4.83-2.83-.26-.49-.2-1.01.25-1.33.46-.32 1.26-.1 1.52.39.53 1 1.6 1.59 3.29 1.79 2.59.3 4.8-.91 4.8-2.5 0-1.1-.55-1.94-2.1-2.68H5a1 1 0 110-2h8.85zM6.99 9.7l-.3-.51c-.3-.6-.47-1.22-.44-1.84.16-2.96 2.94-4.71 6.6-4.29 2.27.27 4 1.09 5.15 2.49a1 1 0 01-.15 1.4.99.99 0 01-1.4-.1c-.81-.99-2.07-1.6-3.82-1.8-2.57-.3-4.38.72-4.38 2.32 0 .72.24 1.22.77 1.81.22.26.64.53 1.26.82H7.2c-.1-.17-.18-.27-.2-.3z" fill={primaryFill} /></svg>;
}

const TextStrikethrough24Filled = wrapIcon(rawSvg({}), 'TextStrikethrough24Filled');
export default TextStrikethrough24Filled;
      