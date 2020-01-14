import React, {Component} from "react";
import {RouteComponentProps} from "react-router";
import {axiosInstance} from "../axios/axiosInstance";
import {ErrorPanel} from "../components/ErrorPanel";
import '../styles/ContentInfo.scss';
import {Box} from "grommet";
import {ContentInfo} from "../components/ContentInfo";
import {Link} from "react-router-dom";

interface Props extends RouteComponentProps<{id: string}> {
}

interface State {
    requestError?: boolean;
    idInfo?: any;
}

export class Details extends Component<Props, State> {
    id: string = '';
    constructor(props: Props) {
        super(props);
        console.log('props', props);
        this.id = props.match.params.id;
    }

    async componentDidMount(): Promise<void> {
        let requestError = false;
        let request;

        try {
            request = await axiosInstance.get(`${process.env.REACT_APP_API_URI}/content/${this.id}`);
        } catch (e) {
            requestError = true;
        }
        console.log('request', request);

        this.setState({
            requestError,
            idInfo: request?.data || false
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Box pad='medium' direction="row">
            <Link to="/">Home</Link>
            {this.state?.requestError && <ErrorPanel />}
            {!this.state?.requestError && this.state?.idInfo && <ContentInfo idInfo={this.state.idInfo}/>}
        </Box>
    }
}
