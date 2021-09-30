import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-1.55.75a.95.95 0 00-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8a.95.95 0 00-.95-.94h-3.1zM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4.75 4C3.78 4 3 4.78 3 5.75v8.5c0 .97.78 1.75 1.75 1.75h5.59a3.47 3.47 0 01-.3-1H4.75a.75.75 0 01-.75-.75v-8.5c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v5.29c.35.05.69.15 1 .3V5.75C19 4.78 18.22 4 17.25 4H4.75zm8.75 8a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H17a.5.5 0 000 1h.5a2.5 2.5 0 000-5H17zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const ContactCardLink20Regular = wrapIcon(rawSvg({}), 'ContactCardLink20Regular');
export default ContactCardLink20Regular;
      