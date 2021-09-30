import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 1.75c4.56 0 8.25 3.7 8.25 8.25 0 2.83-1.22 4.75-3.25 4.75-1.2 0-2.12-.68-2.67-1.82a3.5 3.5 0 01-2.83 1.32c-2.3 0-3.75-1.82-3.75-4.25 0-2.46 1.41-4.25 3.75-4.25.9 0 1.66.26 2.25.72a.75.75 0 011.49-.08l.01.11V10c0 2.1.73 3.25 1.75 3.25s1.75-1.15 1.75-3.25a6.75 6.75 0 10-4.45 6.35.75.75 0 01.5 1.4A8.23 8.23 0 011.76 10c0-4.56 3.7-8.25 8.25-8.25zm-.5 5.5C8.08 7.25 7.25 8.3 7.25 10c0 1.67.87 2.75 2.25 2.75s2.25-1.08 2.25-2.75c0-1.7-.83-2.75-2.25-2.75z" fill={primaryFill} /></svg>;
}

const MentionFilled = wrapIcon(rawSvg({}), 'MentionFilled');
export default MentionFilled;
      