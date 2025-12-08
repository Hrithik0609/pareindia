import { create } from 'zustand';
import { persist } from "zustand/middleware";

export const useTheme = create(
    persist(
        (set) => ({
            theme: 'light',
            toggleLight: () => {
                set((state) => ({ theme: 'light' }))
            },
            toggleDark: () => {
                set((state) => ({ theme: 'dark' }))
            }
        }),
        { name: 'theme-store' }
    )
)