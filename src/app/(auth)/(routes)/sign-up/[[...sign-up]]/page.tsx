import { SignUp } from "@clerk/nextjs";
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  // 如果参数名为 'id'，你可以通过 router.query.id 来获取
  console.log(router.query.icode)
  const unsafeMetaData = {inviter:router.query.icode}
  return <SignUp unsafeMetadata={unsafeMetaData} />;
};
