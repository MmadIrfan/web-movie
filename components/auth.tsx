export function login() {
  localStorage.setItem("isLoggedIn", "true");
}

export function logout() {
  localStorage.removeItem("isLoggedIn");
}

export function isLoggedIn() {
  return (
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true"
  );
}
