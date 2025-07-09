import { useState, useCallback } from "react";

export default function useSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggle = useCallback(() => {
        setIsOn((prev) => !prev);
    }, []);

    return [isOn, toggle];
}