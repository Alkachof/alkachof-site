import { act, renderHook } from "@testing-library/react"

import useModal from "./useModal"

describe("UseModal hook", () => {
    test("hook toggles modal", () => {
        const { result } = renderHook(() => useModal())

        expect(result.current.showModal).toBe(false)

        act(() => {
            result.current.toggleModal()
        })

        expect(result.current.showModal).toBe(true)

    })

    test("hook closes modal", () => {
        const { result } = renderHook(() => useModal())

        act(() => {
            result.current.toggleModal()
        })

        expect(result.current.showModal).toBe(true)

        act(() => {
            result.current.closeModal()
        })

        expect(result.current.showModal).toBe(false)
    })
})