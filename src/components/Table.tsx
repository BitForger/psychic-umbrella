import React, {Component} from "react";
import {axiosInstance} from "../axios/axiosInstance";
import {DataTable} from "grommet";
import {LoadingSection} from "./LoadingSection";
import nanoid from "nanoid";
import '../styles/ErrorPanel.scss';
import {ErrorPanel} from "./ErrorPanel";
import {Link} from "react-router-dom";

interface Props {

}

interface State {
    tableValues?: any[];
    requestError?: boolean;
    loading: boolean;
}

export class Table extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
        };

        this.isLoading.bind(this);
    }

    private columns = [
        {
            property: 'name',
            header: 'Name',
            render: (datum: any) => (
                <Link to={'/'+datum.id}>{datum.name}</Link>
            )
        },
        {
            property: 'created',
            header: 'Created Date',
        },
        {
            property: 'url',
            header: 'URL',
            render: (datum: any) => (
                <Link to={datum.url}>{datum.url}</Link>
            )
        }
    ];

    async componentDidMount(): Promise<void> {
        let articles;
        let errorFound = false;
        try {
            articles = await axiosInstance.get(`${process.env.REACT_APP_API_URI}/content/article`);
        } catch (e) {
            errorFound = true;
        }
        this.setState({
            tableValues: !errorFound && articles?.data.map((value: {[s: string]: any}) => {
                value.key = nanoid();
                return value;
            }),
            loading: false,
            requestError: errorFound,
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log('state', this.state);
        return <>
            {this.state.loading && <LoadingSection loading={this.isLoading}/>}
            {!this.state.loading && this.state.requestError && <ErrorPanel />}
            {this.state?.tableValues && !this.state.requestError && <DataTable primaryKey="key" columns={this.columns} data={this.state.tableValues}/>}
        </>
    }

    isLoading() {
        return this.state?.loading;
    }
}
