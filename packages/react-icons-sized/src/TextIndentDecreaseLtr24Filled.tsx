import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 16h8.5a1 1 0 01.12 2H9a1 1 0 01-.12-2h8.62H9zm-6.7-4.7l2-2a1 1 0 011.49 1.31l-.08.1L4.4 12l1.3 1.3a1 1 0 01-1.32 1.49l-.1-.08-2-2a1 1 0 01-.08-1.32l.08-.1 2-2-2 2zM9 11h11.5a1 1 0 01.12 2H9a1 1 0 01-.12-2H20.5 9zm0-5h8.5a1 1 0 01.12 2H9a1 1 0 01-.12-2h8.62H9z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseLtr24Filled = wrapIcon(rawSvg({}), 'TextIndentDecreaseLtr24Filled');
export default TextIndentDecreaseLtr24Filled;
      