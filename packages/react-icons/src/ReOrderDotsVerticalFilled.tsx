import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const ReOrderDotsVerticalFilled = wrapIcon(rawSvg({}), 'ReOrderDotsVerticalFilled');
export default ReOrderDotsVerticalFilled;
      