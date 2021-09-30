import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 11.5a.75.75 0 100 1.5.75.75 0 000-1.5zm0-8A2.5 2.5 0 007.5 8a.5.5 0 001 0 1.5 1.5 0 112.63.98l-.1.11-.12.1-.25.19A3.2 3.2 0 009.5 12a.5.5 0 001 0c0-.76.2-1.25.53-1.61l.08-.08.08-.07.09-.07.22-.17.15-.12A2.5 2.5 0 0010 5.5z" fill={primaryFill} /></svg>;
}

const QuestionCircleFilled = wrapIcon(rawSvg({}), 'QuestionCircleFilled');
export default QuestionCircleFilled;
      