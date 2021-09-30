import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v5.84a3.49 3.49 0 00-1.5-.34h-4a3.5 3.5 0 00-3.16 5H3.5A1.5 1.5 0 012 14.5v-9zm3 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm4 3.2a.95.95 0 00-.95-.95h-3.1a.95.95 0 00-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8zM11.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3zm1 4a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const ContactCardLink20Filled = wrapIcon(rawSvg({}), 'ContactCardLink20Filled');
export default ContactCardLink20Filled;
      