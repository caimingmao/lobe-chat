import { MobileNavBar, MobileNavBarTitle } from '@lobehub/ui';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import HeaderContent from '@/app/chat/settings/features/HeaderContent';
import { pathString } from '@/utils/url';
import { Logox } from '@/components/ui/logo';

const Header = memo(() => {
  const { t } = useTranslation('setting');
  const router = useRouter();

  return (
    <MobileNavBar
      center={<Logox label={'TOOLBOSS'} size={'24px'} />}
      onBackClick={() => router.push(pathString('/chat/mobile', { hash: location.hash }))}
      right={<HeaderContent />}
      showBackButton
    />
  );
});

export default Header;
