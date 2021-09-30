import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.88c-.21.22-.45.42-.7.59a.5.5 0 01-.55-.83A3.01 3.01 0 0017 4v-.5h1v6a.5.5 0 01-1 0V5.88zm-6.14 9.02a.5.5 0 01-.37.14.47.47 0 01-.36-.14.54.54 0 01-.13-.38V6.61c0-.17.05-.3.15-.41.1-.1.23-.16.38-.16s.28.05.38.16c.1.1.15.24.15.4v3.06h.02a2.23 2.23 0 012.04-1.17c.8 0 1.44.3 1.93.9.5.6.74 1.39.74 2.38 0 1-.25 1.79-.74 2.38-.49.6-1.14.9-1.95.9a2.3 2.3 0 01-2.06-1.18H11v.65a.5.5 0 01-.15.38zm2.03-.79c.56 0 1-.2 1.33-.63.32-.42.48-.99.48-1.71s-.16-1.29-.48-1.71a1.58 1.58 0 00-1.33-.63c-.54 0-.98.21-1.33.65-.34.43-.5.99-.5 1.69s.16 1.27.5 1.7c.35.43.8.64 1.33.64zM2.57 15a.63.63 0 01-.41-.13.45.45 0 01-.16-.35.9.9 0 01.07-.3l2.94-7.69c.14-.35.39-.53.75-.53.35 0 .58.18.72.53l2.95 7.68a.9.9 0 01.07.3c0 .15-.05.26-.16.36a.6.6 0 01-.41.13c-.27 0-.46-.14-.56-.42l-.81-2.2H3.94l-.81 2.2c-.1.28-.29.42-.56.42zm1.7-3.55h2.96L5.77 7.43h-.04l-1.46 4.02z" fill={primaryFill} /></svg>;
}

const TextFootnoteRegular = wrapIcon(rawSvg({}), 'TextFootnoteRegular');
export default TextFootnoteRegular;
      