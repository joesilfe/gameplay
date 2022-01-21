import React from "react";

import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

type BackdropProps = BottomSheetBackdropProps & {

}

export function CustomBackdrop({ ...props }: BackdropProps) {

    return (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={0}
            appearsOnIndex={1}
            opacity={0.8}
            enableTouchThrough={true}
        />
    );
};