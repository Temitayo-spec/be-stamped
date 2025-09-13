import {create} from 'zustand'

export type NavigationState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useNavigation = create<NavigationState>((set) => ({
  isOpen: false,
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}))
