import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7zM7 5.5A2.75 2.75 0 117 11a2.75 2.75 0 010-5.5zM16 2a2 2 0 012 1.85V6a2 2 0 01-1.85 2H14.5l-1.2 1.6a1 1 0 01-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 01-1.4-1.6l-.01-.17L10 6V4a2 2 0 011.85-2H16z" fill={primaryFill} /></svg>;
}

const PersonFeedbackFilled = wrapIcon(rawSvg({}), 'PersonFeedbackFilled');
export default PersonFeedbackFilled;
      