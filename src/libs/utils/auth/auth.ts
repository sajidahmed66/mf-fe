import jwtDecode, { JwtPayload } from "jwt-decode";

export const authenticate = (token: string, cb: Function) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(token));
  }
  cb();
};

export const isAuthenticated = (): boolean => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    try {
      const decoded: JwtPayload = jwtDecode(localStorage.getItem("jwt")!);
      const { exp } = decoded;
      if (exp) {
        if (exp * 1000 < Date.now()) {
          return false;
        }
        return true;
      }
    } catch (err) {
      return false;
    }
  }
  return false;
};

// TODO update this configuration accordinly
export const userInfo = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt") as string);
  const decoded: JwtPayload = jwtDecode(jwt);
  return { ...decoded, token: jwt };
};

export const signOut = (cb: Function) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
  cb();
};
