import { createLink, Link } from '@tanstack/react-router';
import { forwardRef, ReactNode, type ForwardedRef } from 'react';

export type HeaderProps = {};

export function Header(props: HeaderProps) {
  return (
    <header className={'Header'}>
      <LinkButton to={'/'}>Home</LinkButton>
      <LinkButton to={'/tenants/$tenantId/'} params={{ tenantId: '1' }}>
        Tenant 1 with <code>'a'</code>
      </LinkButton>
      <LinkButton2 to={'/tenants/$tenantId/'} params={{ tenantId: '2' }}>
        Tenant 2 with <code>'Link'</code>
      </LinkButton2>
    </header>
  );
}

export interface LinkButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

export const LinkButton = createLink(
  forwardRef(function LinkButton(
    props: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) {
    const { size, ...rest } = props;

    console.log('LinkButton', props);

    return <a ref={ref} data-size={size} {...rest} />;
  })
);

export const LinkButton2 = createLink(
  forwardRef(function LinkButton(
    props: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) {
    const { size, ...rest } = props;

    console.log('LinkButton2', props);

    return <Link ref={ref} data-size={size} {...rest} />;
  })
);
