import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-.85-.36L5.22 5H3.5C2.67 5 2 5.66 2 6.5v2.99c0 .83.67 1.5 1.5 1.5h1.72l1.3 1.28c.14-.32.31-.62.52-.9l-1.26-1.24a.5.5 0 00-.35-.14H3.5a.5.5 0 01-.5-.5V6.49c0-.27.22-.5.5-.5h1.93a.5.5 0 00.35-.14L8 3.68v6.7l1-1V2.5zm-.95 9.24a2.78 2.78 0 00-.73 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.61-2.58c-.22.08-.42.2-.6.37L12 7.8l-1.12 1.12-2.83 2.83zm5.64-5.73a6.63 6.63 0 00-1.85-2.87l-.02-.02V3.1a.5.5 0 10-.63.78l.01.01a2.3 2.3 0 01.25.24 5.52 5.52 0 011.22 1.97c.33-.1.68-.13 1.02-.1zm-1.9.6a3.82 3.82 0 00-.95-1.48l-.02-.01V5.1a.5.5 0 00-.63.78l.02.02.08.08a2.93 2.93 0 01.67 1.43l.67-.67.15-.14z" fill={primaryFill} /></svg>;
}

const SpeakerEdit16Regular = wrapIcon(rawSvg({}), 'SpeakerEdit16Regular');
export default SpeakerEdit16Regular;
      