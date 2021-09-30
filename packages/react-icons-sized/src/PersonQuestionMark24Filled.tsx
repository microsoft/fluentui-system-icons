import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 14a6.47 6.47 0 00.57 7.76c-.8.16-1.66.24-2.59.24-3.42 0-5.94-1.07-7.49-3.24a2.75 2.75 0 01-.5-1.6v-.91C2 15 3 14 4.24 14h7.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 7.75a.62.62 0 100 1.25.62.62 0 000-1.25zm0-5.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.05.35-.22.56l-.1.12-.1.11-.26.3-.14.15c-.38.46-.53.8-.53 1.31a.5.5 0 101 0c0-.2.06-.36.24-.59l.08-.1.1-.12.27-.29.14-.15c.37-.45.52-.79.52-1.3 0-1.1-.82-1.95-1.85-1.95zM10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const PersonQuestionMark24Filled = wrapIcon(rawSvg({}), 'PersonQuestionMark24Filled');
export default PersonQuestionMark24Filled;
      