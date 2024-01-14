import { MobileNavBar } from '@lobehub/ui';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import SettingButton from '../../features/ChatHeader/SettingButton';
import ChatHeaderTitle from './ChatHeaderTitle';

const MobileHeader = memo(() => {
  const router = useRouter();
  // const [open, setOpen] = useState(false);

  // const items: MenuProps['items'] = [
  //   {
  //     icon: <Icon icon={Share2} />,
  //     key: 'share',
  //     label: t('share', { ns: 'common' }),
  //     onClick: () => setOpen(true),
  //   },
  //   !isInbox && {
  //     icon: <Icon icon={Settings} />,
  //     key: 'settings',
  //     label: t('header.session', { ns: 'setting' }),
  //     onClick: () => router.push(pathString('/chat/settings', { hash: location.hash })),
  //   },
  // ].filter(Boolean) as MenuProps['items'];

  return (
    <MobileNavBar
      center={<ChatHeaderTitle />}
      onBackClick={() => router.push('/chat')}
      right={
        <>
          <SettingButton mobile />
          {/*<Dropdown*/}
          {/*  menu={{*/}
          {/*    items,*/}
          {/*  }}*/}
          {/*  trigger={['click']}*/}
          {/*>*/}
          {/*  <ActionIcon icon={MoreHorizontal} />*/}
          {/*</Dropdown>*/}
        </>
      }
      showBackButton
    />
  );
});

export default MobileHeader;
