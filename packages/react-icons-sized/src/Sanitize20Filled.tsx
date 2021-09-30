import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.77 5.23a2.5 2.5 0 000 3.54l3.46 3.46c.11.11.23.2.35.3.04-.13.1-.25.17-.36.4-.6.9-1.02 1.49-1.27.26-.1.51-.17.76-.2V7.5a1.5 1.5 0 012.05-1.4c.07-.25.2-.48.39-.66L8.77 2.77a2.5 2.5 0 00-3.54 0L2.77 5.23zM12.5 6a.5.5 0 00-.5.5v5a.5.5 0 01-1 0v-4a.5.5 0 00-1 0v4.25a2.08 2.08 0 00-1.38.08c-.38.16-.74.44-1.04.9a.5.5 0 00.22.73 5.26 5.26 0 012.71 2.37c.55 1.03 1.6 2.17 2.99 2.17h.26A2.5 2.5 0 0016 16.62l.63-1.26a3.5 3.5 0 00.37-1.57V7.5a.5.5 0 00-1 0v4a.5.5 0 01-1 0v-5a.5.5 0 00-1 0v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5zm-9 6c.28 0 .5.22.5.5v.5h.5a.5.5 0 010 1H4v.5a.5.5 0 01-1 0V14h-.5a.5.5 0 010-1H3v-.5c0-.28.22-.5.5-.5zm3 3c.28 0 .5.22.5.5v.5h.5a.5.5 0 010 1H7v.5a.5.5 0 01-1 0V17h-.5a.5.5 0 010-1H6v-.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Sanitize20Filled = wrapIcon(rawSvg({}), 'Sanitize20Filled');
export default Sanitize20Filled;
      