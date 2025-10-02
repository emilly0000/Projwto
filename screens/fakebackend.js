// fakeBackend.js
let users = [];

export const signup = ({ name, email, password }) => {
  if (users.find(u => u.email === email)) {
    return { ok: false, message: "Email já cadastrado" };
  }
  const user = { name, email, password };
  users.push(user);
  return { ok: true, user };
};

export const login = ({ email, password }) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) return { ok: true, user };
  return { ok: false, message: "Email ou senha incorretos" };
};
