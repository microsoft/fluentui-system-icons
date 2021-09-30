import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1c.28 0 .5.22.5.5v5a.5.5 0 001 0v-4a.5.5 0 011 0v4.25l.31-.06c.32-.04.7-.02 1.07.14.38.16.74.44 1.04.9a.5.5 0 01-.22.73 5.26 5.26 0 00-2.71 2.37C6.94 11.86 5.89 13 4.5 13h-.26A2.5 2.5 0 012 11.62l-.63-1.26A3.5 3.5 0 011 8.79V2.5a.5.5 0 011 0v4a.5.5 0 001 0v-5a.5.5 0 011 0v5a.5.5 0 001 0v-5c0-.28.22-.5.5-.5zm2.87 10.3c-.28.54-.74 1.18-1.35 1.7a5.5 5.5 0 104.21-5.85l.02.02a1.5 1.5 0 01-.66 2.2 4.27 4.27 0 00-2.22 1.92zm2.38 1.2a.75.75 0 110-1.5.75.75 0 010 1.5zm4.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.05 2.53c.08.17.55.72 1.55.72s1.47-.55 1.55-.72a.5.5 0 11.9.44c-.25.5-1.05 1.28-2.45 1.28-1.4 0-2.2-.78-2.45-1.28a.5.5 0 11.9-.44z" fill={primaryFill} /></svg>;
}

const EmojiHandFilled = wrapIcon(rawSvg({}), 'EmojiHandFilled');
export default EmojiHandFilled;
      