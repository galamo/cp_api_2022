import React from "react"

interface IProps {
    text: string,
    color?: string
}
export function HeaderApplication(props: IProps) {
    const { text, color = "red" } = props;
    return <h1 style={{ color }} >{text}</h1>
}

