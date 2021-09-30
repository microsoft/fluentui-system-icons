import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.33 3.46l.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 01-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 012.6-.1z" fill={primaryFill} /><path d="M12.9 4H4.5A2.5 2.5 0 002 6.5v2.26c.52-.48 1.12-.98 1.72-1.4A6.55 6.55 0 015.7 6.32c.32-.09.66-.12.99-.05.34.08.63.28.84.59.47.67.13 1.4-.2 1.92-.16.27-.37.56-.57.83l-.02.04c-.21.29-.42.58-.61.88-.16.28-.2.62-.13.86.03.12.1.2.17.27.07.06.19.12.37.13.33.03.76-.08 1.3-.27a.5.5 0 11.33.94 4.2 4.2 0 01-1.71.33 1.52 1.52 0 01-1.41-1.12 2.19 2.19 0 01.21-1.65h.01v-.01c.22-.34.45-.66.66-.95l.01-.02c.21-.29.4-.54.55-.78.32-.53.3-.73.22-.84a.4.4 0 00-.25-.17 1.08 1.08 0 00-.5.03c-.47.12-1.04.44-1.66.88-.85.6-1.7 1.38-2.3 1.98v3.35A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5V7.13l-3.45 3.47a2.9 2.9 0 01-1.22.73l-1.96.6A1.84 1.84 0 019.1 9.58l.62-1.94c.14-.44.38-.84.7-1.17L12.9 4z" fill={primaryFill} /></svg>;
}

const WhiteboardFilled = wrapIcon(rawSvg({}), 'WhiteboardFilled');
export default WhiteboardFilled;
      