import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm0 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm0 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0-11.75a3.85 3.85 0 013.75 3.75c0 1.43-.47 2.27-1.55 3.3L16 14l-.2.19c-.8.74-1.05 1.12-1.05 1.82a.75.75 0 01-1.5 0c0-1.15.4-1.84 1.34-2.75l.57-.52c.81-.78 1.09-1.29 1.09-2.23 0-1.18-1.1-2.25-2.25-2.25a2.36 2.36 0 00-2.25 2.25.75.75 0 01-1.5 0A3.85 3.85 0 0114 6.75z" fill={primaryFill} /></svg>;
}

const QuestionCircle28Regular = wrapIcon(rawSvg({}), 'QuestionCircle28Regular');
export default QuestionCircle28Regular;
      