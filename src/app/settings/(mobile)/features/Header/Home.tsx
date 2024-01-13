import { Logox } from '@/components/ui/logo';
import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

const Header = memo(() => {
  return <MobileNavBar center={<Logox label={'TOOLBOSS'} size={'24px'} />} />;
});

export default Header;
