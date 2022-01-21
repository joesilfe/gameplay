import React, {
    createContext,
    ReactNode,
    useState,
} from 'react';



type BottomSheetModalViewContext = {
    isOpen: number;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

type BottomSheetModalViewProps = {
    children: ReactNode;
}


export const BottomSheetModalViewContext = createContext({} as BottomSheetModalViewContext)

export function BottomSheetModalViewProvider({ children }: BottomSheetModalViewProps) {

    const [isOpen, setIsOpen] = useState<number>(0);

    function handleOpenModal() {
        setIsOpen(1)
    }

    function handleCloseModal() {
        setIsOpen(0)
    }

    return (
        <BottomSheetModalViewContext.Provider value={{
            isOpen,
            handleOpenModal,
            handleCloseModal,
        }}>
            {children}
        </BottomSheetModalViewContext.Provider>
    )
}