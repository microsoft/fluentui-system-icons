import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a3 3 0 00-3 3 .5.5 0 001 0 2 2 0 014 0c0 .68-.14 1.08-.31 1.36-.19.3-.43.5-.75.75l-.02.02c-.3.24-.67.53-.95.98-.3.47-.47 1.07-.47 1.89v.5a.5.5 0 001 0V10c0-.68.14-1.08.31-1.36.19-.3.43-.5.75-.75l.02-.02c.3-.24.67-.53.95-.98.3-.47.47-1.07.47-1.89a3 3 0 00-3-3z" fill={primaryFill} /><path d="M8 14a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Question16Regular = wrapIcon(rawSvg({}), 'Question16Regular');
export default Question16Regular;
      