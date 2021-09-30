import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm0 16.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0-11.75a3.85 3.85 0 00-3.75 3.75.75.75 0 001.5 0c0-1.18 1.1-2.25 2.25-2.25a2.36 2.36 0 012.25 2.25c0 .88-.24 1.38-.93 2.08l-.16.15-.57.52c-.94.9-1.34 1.6-1.34 2.75a.75.75 0 001.5 0c0-.65.21-1.03.89-1.67l.16-.15.2-.19.2-.18c1.08-1.04 1.55-1.88 1.55-3.31A3.85 3.85 0 0014 6.75z" fill={primaryFill} /></svg>;
}

const QuestionCircle28Filled = wrapIcon(rawSvg({}), 'QuestionCircle28Filled');
export default QuestionCircle28Filled;
      