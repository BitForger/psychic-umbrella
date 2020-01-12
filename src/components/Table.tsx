import React, {Component} from "react";
import {axiosInstance} from "../axios/axiosInstance";
import {DataTable} from "grommet";

interface Props {

}

interface State {
    tableValues: any[],
}

export class Table extends Component<Props, State> {

    async componentDidMount(): Promise<void> {
        const initialResults = await axiosInstance.get(`${process.env.API_URI}/articles`);
        this.setState({tableValues: initialResults.data});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <>
            {this.state?.tableValues && <DataTable columns={this.state.tableValues}/>}
        </>
    }
}
