import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "seller" | "admin";
  avatar?: string;
  createdAt: string;
}

interface UseAuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: null,

  setUser: (user) => set({ user }),
}));
