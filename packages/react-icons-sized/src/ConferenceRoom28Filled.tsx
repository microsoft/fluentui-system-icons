import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.9 2.01l11.5 2.25c.35.07.6.38.6.74v18c0 .36-.25.67-.6.74l-11.5 2.25a.75.75 0 01-.9-.74V2.75c0-.47.43-.83.9-.74zM15 13a1 1 0 100 2 1 1 0 000-2zm-5-8.5v19H4.75a.75.75 0 01-.74-.65l-.01-.1V5.25c0-.38.28-.7.65-.74l.1-.01H10z" fill={primaryFill} /></svg>;
}

const ConferenceRoom28Filled = wrapIcon(rawSvg({}), 'ConferenceRoom28Filled');
export default ConferenceRoom28Filled;
      