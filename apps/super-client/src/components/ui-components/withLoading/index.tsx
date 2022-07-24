import React, { ReactElement } from "react"
import CircularProgress from '@material-ui/core/CircularProgress';


interface ILoading {
    children: ReactElement,
    isLoading: boolean
}

export function WithLoading(props: ILoading): ReactElement {
    const { isLoading, children } = props
    return isLoading ? <CircularProgress /> : children

}