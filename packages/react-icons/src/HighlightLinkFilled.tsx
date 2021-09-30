import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2C3.67 2 3 2.67 3 3.5v3C3 7.33 3.67 8 4.5 8h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11zM6 11a2 2 0 01-2-2h12a2 2 0 01-2 2H6zm0 1h6.5a3.5 3.5 0 00-3.29 4.7l-2.49 1.25A.5.5 0 016 17.5V12zm6.5 1a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const HighlightLinkFilled = wrapIcon(rawSvg({}), 'HighlightLinkFilled');
export default HighlightLinkFilled;
      