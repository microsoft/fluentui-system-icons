import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.24 2.18a.75.75 0 00-.98 1.14l1.75 1.5c.28.24.7.24.98 0l1.75-1.5a.75.75 0 10-.98-1.14L15.5 3.26l-1.26-1.08zM10 4c-.3 0-.58.19-.7.47l-4.25 10.5a.75.75 0 101.4.56L7.87 12h4.26l1.42 3.53a.75.75 0 101.4-.56L10.7 4.47A.75.75 0 0010 4zm0 2.75l1.52 3.75H8.48L10 6.75z" fill={primaryFill} /></svg>;
}

const FontDecreaseFilled = wrapIcon(rawSvg({}), 'FontDecreaseFilled');
export default FontDecreaseFilled;
      