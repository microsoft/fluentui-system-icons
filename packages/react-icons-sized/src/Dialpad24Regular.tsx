import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 17.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Dialpad24Regular = wrapIcon(rawSvg({}), 'Dialpad24Regular');
export default Dialpad24Regular;
      