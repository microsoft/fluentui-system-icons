import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.9 2.01l11.5 2.25c.35.07.6.38.6.74v18c0 .36-.25.67-.6.74l-11.5 2.25a.75.75 0 01-.9-.74V2.75c0-.47.43-.83.9-.74zm.6 1.65v20.68l10-1.96V5.62l-10-1.96zM10 4.5V6H5.5v16H10v1.5H4.75a.75.75 0 01-.74-.65l-.01-.1V5.25c0-.38.28-.7.65-.74l.1-.01H10zm5 8.5a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const ConferenceRoom28Regular = wrapIcon(rawSvg({}), 'ConferenceRoom28Regular');
export default ConferenceRoom28Regular;
      