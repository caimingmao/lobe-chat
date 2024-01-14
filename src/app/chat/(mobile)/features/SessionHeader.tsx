import { ActionIcon, MobileNavBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus } from 'lucide-react';
import { memo } from 'react';

import { MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useSessionStore } from '@/store/session';
import { Logox } from '@/components/ui/logo';
import { UserButton } from '@clerk/nextjs';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const [createSession] = useSessionStore((s) => [s.createSession]);
  // const router = useRouter();
  // const avatar = useGlobalStore((st) => st.settings.avatar);
  return (
    <MobileNavBar
      center={<Logox label={'TOOLBOSS'} size={'24px'} />}
      left={<UserButton afterSignOutUrl="/" />}
      right={
        <ActionIcon
          icon={MessageSquarePlus}
          onClick={() => createSession()}
          size={MOBILE_HEADER_ICON_SIZE}
        />
      }
      style={{ boxShadow: "0px 1px 5px 2px #ccc" }}
    />
  );
});

export default Header;
