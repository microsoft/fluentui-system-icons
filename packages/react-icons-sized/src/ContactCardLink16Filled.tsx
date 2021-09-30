import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3C1.78 3 1 3.78 1 4.75v6.5c0 .97.78 1.75 1.75 1.75h2.29a3.53 3.53 0 01.3-2c-.34 0-.69-.03-1.02-.12h-.05A1.67 1.67 0 013 9.24c0-.47.38-.86.86-.86h2.8c.44 0 .8.33.86.75.3-.1.64-.14.98-.14h4c.98 0 1.86.4 2.5 1.05v-5.3C15 3.78 14.22 3 13.25 3H2.75zm3.87 3.36a1.36 1.36 0 11-2.72 0 1.36 1.36 0 012.72 0zM9 6.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM8.5 10a2.5 2.5 0 000 5H9a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H9a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H12a.5.5 0 000 1h.5a2.5 2.5 0 000-5H12zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const ContactCardLink16Filled = wrapIcon(rawSvg({}), 'ContactCardLink16Filled');
export default ContactCardLink16Filled;
      