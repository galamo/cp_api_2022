export const ReactCheckpoint = (() => {

    let value: Array<any> = []
    let index = 0;
    const useState = (initialState: any) => {
        const localIndex = index;
        index++;
        if (!value[localIndex]) {
            value[localIndex] = initialState
        }
        const setterFunction = (newValue: any) => {
            value[localIndex] = newValue
        }
        return [value[localIndex], setterFunction]

    }
    const resetIndex = () => index = 0;
    return {
        useState,
        resetIndex
    }

})()

const { useState, resetIndex } = ReactCheckpoint
const MyComponent = () => {
    const [value, setValue] = useState(1)
    const [name, setName] = useState("Gal")

    if (value !== 2) {
        setValue(2)
        setName("Tomer")
    }
    const render = () => console.log("render component", value, name)
    return { render }
}

MyComponent().render()
resetIndex()
MyComponent().render()

