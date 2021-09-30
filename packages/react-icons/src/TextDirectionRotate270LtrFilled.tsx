import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 5.22a.75.75 0 001.06 1.06L6 5.56v3.69a.75.75 0 001.5 0V5.56l.72.72a.75.75 0 001.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2zm7.5 0a.75.75 0 101.06 1.06l.72-.72v10.69a.75.75 0 101.5 0V5.56l.72.72a.75.75 0 001.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2zM3 13.5c0-.3.19-.58.47-.7l7.5-3a.75.75 0 11.56 1.4L9.5 12v3l2.03.8a.75.75 0 01-.56 1.4l-7.5-3a.75.75 0 01-.47-.7zm2.77 0l2.23.9v-1.8l-2.23.9z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate270LtrFilled = wrapIcon(rawSvg({}), 'TextDirectionRotate270LtrFilled');
export default TextDirectionRotate270LtrFilled;
      