import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.54 4.12c.21.18.23.5.05.7L9.16 10l4.08 4.77c-.18.29-.34.63-.42 1.04L8.5 10.77l-4.33 5.06a.5.5 0 11-.76-.66L7.84 10 3.41 4.83a.5.5 0 01.76-.66L8.5 9.23l4.34-5.06a.5.5 0 01.7-.05z" fill={primaryFill} /><path d="M15.59 12c-.47 0-.84.42-.84.86a.5.5 0 11-1 0 1.87 1.87 0 013.43-1.04c.35.55.37 1.27-.05 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 110 1H14.3a.54.54 0 01-.05 0 .5.5 0 01-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.43-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 00-.75-.37z" fill={primaryFill} /></svg>;
}

const TextSubscriptRegular = wrapIcon(rawSvg({}), 'TextSubscriptRegular');
export default TextSubscriptRegular;
      