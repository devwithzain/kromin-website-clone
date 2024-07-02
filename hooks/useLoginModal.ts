import { ThooksProps } from "@types";
import { create } from "zustand";

const useLoginModal = create<ThooksProps>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
