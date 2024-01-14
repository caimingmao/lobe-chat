import { SignUp } from "@clerk/nextjs";

export default function Page() {
  // 如果参数名为 'id'，你可以通过 router.query.id 来获取
  const unsafeMetaData = { inviter: '' };
  return <SignUp unsafeMetadata={unsafeMetaData} />;
}
