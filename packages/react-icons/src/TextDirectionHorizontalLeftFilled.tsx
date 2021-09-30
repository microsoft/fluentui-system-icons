import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3c-.3 0-.58.19-.7.47l-3 7.5a.75.75 0 001.4.56L12 9.5h3l.8 2.03a.75.75 0 001.4-.56l-3-7.5a.75.75 0 00-.7-.47zm0 2.77L14.4 8h-1.8l.9-2.23zM5.22 4.22a.75.75 0 011.06 1.06L5.56 6h3.69a.75.75 0 010 1.5H5.56l.72.72a.75.75 0 01-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2zm0 7.5a.75.75 0 011.06 1.06l-.72.72h10.69a.75.75 0 010 1.5H5.56l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalLeftFilled = wrapIcon(rawSvg({}), 'TextDirectionHorizontalLeftFilled');
export default TextDirectionHorizontalLeftFilled;
      