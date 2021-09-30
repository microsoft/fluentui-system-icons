import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm.62 7a.62.62 0 10-1.24 0 .62.62 0 001.24 0zm1.23-3.55c0-1.1-.82-1.95-1.85-1.95-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 001 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32zM14.5 11l.33-.01a2.5 2.5 0 01-.2.42l-3.46 5.91c-.15.27-.4.47-.67.58v-7.03a1 1 0 00.46-1.16c.95.8 2.19 1.29 3.54 1.29zM9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 00-.8 1.83v7.04a1.37 1.37 0 01-.7-.59l-3.46-5.9a2.5 2.5 0 01-.1-2.34L6.7 6h-.2A1.5 1.5 0 015 4.5v-2a.5.5 0 011 0v2c0 .28.22.5.5.5h2.52L9 5.5z" fill={primaryFill} /></svg>;
}

const CalligraphyPenQuestionMarkFilled = wrapIcon(rawSvg({}), 'CalligraphyPenQuestionMarkFilled');
export default CalligraphyPenQuestionMarkFilled;
      