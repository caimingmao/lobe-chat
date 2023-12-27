import { SideNav } from '@lobehub/ui';
import { memo } from 'react';

import { useGlobalStore } from '@/store/global';

import TopActions from './TopActions';
import { UserButton } from '@clerk/nextjs';

export default memo(() => {
  const [tab, setTab] = useGlobalStore((s) => [s.sidebarKey, s.switchSideBar]);

  return (
    <SideNav
      avatar={<UserButton afterSignOutUrl="/"/>}
      bottomActions={<span></span>}
      style={{ height: '100%' }}
      topActions={<TopActions setTab={setTab} tab={tab} />}
    />
  );
});
