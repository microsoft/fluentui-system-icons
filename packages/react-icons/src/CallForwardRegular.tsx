import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.93 2.08l-.18-.04c-1-.17-2.02.18-2.71.94C4.67 4.5 4 6.85 4 10c0 3.15.67 5.5 2.03 7.01a2.97 2.97 0 002.9.9l.65-.15a2.2 2.2 0 001.67-2.36L11.1 14a2.2 2.2 0 00-1.69-1.92l-1.4-.32-.03-.02-.04-.07a1.63 1.63 0 01-.1-.24c-.09-.32-.14-.8-.14-1.43 0-.85.1-1.42.25-1.68a.2.2 0 01.13-.09l1.33-.3A2.2 2.2 0 0011.11 6l.14-1.4a2.2 2.2 0 00-1.68-2.37l-.64-.15zM5.19 10c0-2.88.59-4.95 1.73-6.21.4-.45 1-.66 1.6-.57l.13.03.65.15a1 1 0 01.76 1.08l-.14 1.4a1 1 0 01-.76.87l-1.34.31a1.4 1.4 0 00-.88.64c-.3.49-.42 1.25-.42 2.3 0 1.6.29 2.58 1.08 2.88l.11.03 1.45.34a1 1 0 01.76.87l.14 1.4a1 1 0 01-.75 1.07l-.65.16c-.64.15-1.3-.05-1.74-.54-1.14-1.27-1.73-3.33-1.73-6.2zm9.16-4.35a.5.5 0 00-.7.7L16.29 9H10.5a.5.5 0 000 1h5.8l-2.65 2.65a.5.5 0 00.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5z" fill={primaryFill} /></svg>;
}

const CallForwardRegular = wrapIcon(rawSvg({}), 'CallForwardRegular');
export default CallForwardRegular;
      