import React from "react"

export default class LCComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        // console.log("Component mounted")
    }

    render(): React.ReactNode {
        return <div> Class Component </div>
    }
} 
