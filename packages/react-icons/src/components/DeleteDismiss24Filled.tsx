import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DeleteDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM12 1.5A3.5 3.5 0 0115.5 5h5a1 1 0 110 2h-.84l-.46 4.59A6.5 6.5 0 0011.8 22H8.32a2.75 2.75 0 01-2.73-2.48L4.34 7H3.5a1 1 0 010-2h5A3.5 3.5 0 0112 1.5zm1.72 13.09l-.07.06-.06.07a.5.5 0 000 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 000-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 000-.56l-.06-.07-.07-.06a.5.5 0 00-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 00-.49-.04l-.07.04zM12 3.5c-.83 0-1.5.67-1.5 1.5h3c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default DeleteDismiss24Filled;