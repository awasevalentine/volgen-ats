import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export interface UserData {
  first_name?: string;
  last_name?: string;
  email?: string;
}

const useAuthHelper = () => {
  const getToken = useSelector((state: RootState) => state.auth.access_token);
  const getProfile = useSelector((state: RootState) => state.auth.profile);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<UserData | null>(null);

  useEffect(() => {
    if (getProfile) {
      setUserDetails(getProfile);
      setIsLoading(false);
    }
  }, [getProfile]);

  const isAuthenticated = () => {
    return !!getToken;
  };

  return {
    isAuthenticated,
    userDetails,
    isLoading,
    getToken,
  };
};

export default useAuthHelper;
