// import { getServerConfig } from '@/config/server';
import { ChatErrorType } from '@/types/fetch';

// interface AuthConfig {
//   accessCode?: string | null;
//   apiKey?: string | null;
// }

export const checkAuth = () => {
  return { auth: false, error: ChatErrorType.BalanceNotEnough };
  // const { ACCESS_CODES } = getServerConfig();

  // // if apiKey exist
  // if (apiKey) {
  //   return { auth: true };
  // }

  // // if accessCode doesn't exist
  // if (!ACCESS_CODES.length) return { auth: true };

  // if (!accessCode || !ACCESS_CODES.includes(accessCode)) {
  //   return { auth: false, error: ChatErrorType.InvalidAccessCode };
  // }

  // return { auth: true };
};
