import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm0 2.5a17.5 17.5 0 100 35 17.5 17.5 0 000-35zm.25 25.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-19a6.36 6.36 0 016.25 6.25c0 2.12-.77 3.47-2.68 5.53l-1.01 1.08c-1.03 1.14-1.43 1.87-1.47 2.72V28.87l-.03.12a1.25 1.25 0 01-2.47-.23c-.01-1.79.67-3.01 2.3-4.79l1.03-1.1C27.53 21.39 28 20.5 28 19.26a3.87 3.87 0 00-3.75-3.75 3.88 3.88 0 00-3.74 3.56l-.02.32a1.25 1.25 0 01-2.49-.13A6.37 6.37 0 0124.25 13z" fill={primaryFill} /></svg>;
}

const QuestionCircle48Regular = wrapIcon(rawSvg({}), 'QuestionCircle48Regular');
export default QuestionCircle48Regular;
      