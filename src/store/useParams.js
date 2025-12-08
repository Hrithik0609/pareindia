import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useParams = create(
    persist(
        (set) => ({
            params: {
                name: '',
                age: '',
                phone: '',
            },

            handleChange: (e) => {
                let { name, value } = e.target

                set((state) => ({
                    params: {
                        ...state.params,
                        [name]: value
                    }
                }))
            }
        }),
        { name: 'params-store' }
    ))