import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.94 5L19 10.06 9.06 20c-.28.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L13.94 5zm-7.42 6l-1.5 1.5H2.75a.75.75 0 010-1.5h3.77zm14.36-8.17l.15.14.14.15a3.58 3.58 0 01-.14 4.91l-.97.97L15 3.94l.97-.97a3.58 3.58 0 014.9-.14zM10.52 7l-1.5 1.5H2.75a.75.75 0 110-1.5h7.77zm4-4l-1.5 1.5H2.75a.75.75 0 110-1.5h11.77z" fill={primaryFill} /></svg>;
}

const Drafts24Filled = wrapIcon(rawSvg({}), 'Drafts24Filled');
export default Drafts24Filled;
      