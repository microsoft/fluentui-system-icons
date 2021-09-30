import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm16 6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" fill={primaryFill} /><path d="M14.04 17.13a.5.5 0 00-.14.22 1 1 0 11-1.93-.52c.1-.33.3-.79.7-1.17.43-.4 1.04-.66 1.8-.66A2.44 2.44 0 0117 17.36c0 .39-.07 1.02-.47 1.59l.1.12c.24.37.37.8.37 1.3 0 .83-.27 1.53-.81 2.02-.53.46-1.17.61-1.72.61-.5 0-1.03-.09-1.51-.4a2.5 2.5 0 01-.98-1.4 1 1 0 011.91-.59c.08.26.16.3.18.32.03.02.12.07.4.07.22 0 .34-.06.39-.1.03-.03.14-.14.14-.54 0-.12-.03-.16-.03-.17 0 0-.03-.04-.1-.07a1.6 1.6 0 00-.66-.12 1 1 0 110-2c.28 0 .45-.05.54-.09a.35.35 0 00.14-.1c.07-.09.11-.24.11-.45a.36.36 0 00-.1-.21c-.07-.07-.19-.15-.43-.15-.28 0-.39.08-.43.13z" fill={primaryFill} /><path d="M7.81 17.64c0-.16.07-.34.18-.47.1-.12.23-.17.34-.17.23 0 .4.11.48.24.06.1.14.32-.09.73-.1.19-.27.37-.52.58l-.42.32-.06.05c-.13.1-.28.2-.42.32-.69.54-1.49 1.35-1.49 2.76a1 1 0 001 1H9.83a1 1 0 100-2H8.31l.23-.2.37-.27.07-.06c.16-.11.33-.24.5-.39.34-.28.72-.65 1-1.14.52-.95.52-1.96.03-2.75A2.56 2.56 0 008.33 15c-1.55 0-2.52 1.4-2.52 2.64a1 1 0 002 0z" fill={primaryFill} /><path d="M2.55 19.02a1 1 0 01-1.13-1.66 2.97 2.97 0 001.15-1.56 1 1 0 011.98.2v6a1 1 0 11-2 0v-2.98z" fill={primaryFill} /></svg>;
}

const TextWordCount24Filled = wrapIcon(rawSvg({}), 'TextWordCount24Filled');
export default TextWordCount24Filled;
      