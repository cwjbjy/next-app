import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenState {
  token: string;
  updateToken: (params: string) => void;
}

const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      token: '',
      updateToken: (token) => set({ token }),
    }),
    {
      name: 'token', //存储的名称
    },
  ),
);

export default useTokenStore;
