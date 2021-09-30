import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 6h.5A2.5 2.5 0 0118 8.5v6a2.5 2.5 0 01-2.5 2.5h-5.38l-1-1h6.38c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-8C6.67 7 6 7.67 6 8.5v.76a4.47 4.47 0 00-1-.23V8.5A2.5 2.5 0 017.5 6H14v-.5c0-.83-.67-1.5-1.5-1.5h-8C3.67 4 3 4.67 3 5.5v3.76c-.36.12-.7.3-1 .5V5.5A2.5 2.5 0 014.5 3h8A2.5 2.5 0 0115 5.5V6zM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 00.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const SlideMultipleSearchRegular = wrapIcon(rawSvg({}), 'SlideMultipleSearchRegular');
export default SlideMultipleSearchRegular;
      