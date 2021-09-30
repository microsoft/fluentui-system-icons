import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3C1.78 3 1 3.78 1 4.75v6.5c0 .97.78 1.75 1.75 1.75h2.29a3.53 3.53 0 010-1H2.75a.75.75 0 01-.75-.75v-6.5c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v4.59c.37.17.71.42 1 .71v-5.3C15 3.78 14.22 3 13.25 3H2.75zm4.77 6.14a.86.86 0 00-.86-.75h-2.8a.86.86 0 00-.86.86c0 .77.52 1.43 1.27 1.62l.05.01c.33.09.68.13 1.02.12a3.5 3.5 0 012.18-1.86zM9 6.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM5.26 7.71a1.36 1.36 0 100-2.71 1.36 1.36 0 000 2.71zM8.5 10a2.5 2.5 0 000 5H9a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H9a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H12a.5.5 0 000 1h.5a2.5 2.5 0 000-5H12zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const ContactCardLink16Regular = wrapIcon(rawSvg({}), 'ContactCardLink16Regular');
export default ContactCardLink16Regular;
      