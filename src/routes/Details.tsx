import React, {Component} from "react";
import {RouteComponentProps} from "react-router";
import {axiosInstance} from "../axios/axiosInstance";
import {ErrorPanel} from "../components/ErrorPanel";
import '../styles/ContentInfo.scss';
import {Box, Button} from "grommet";
import {ContentInfo} from "../components/ContentInfo";
import {Link} from "react-router-dom";
import {LoadingSection} from "../components/LoadingSection";
import nanoid from "nanoid";

interface Props extends RouteComponentProps<{id: string}> {
}

interface State {
    loading?: boolean;
    requestError?: boolean;
    idInfo?: any;
}

export class Details extends Component<Props, State> {
    id: string = '';
    constructor(props: Props) {
        super(props);
        console.log('props', props);
        this.id = props.match.params.id;
        this.state = {
            loading: true,
        };
        this.isLoading = this.isLoading.bind(this);
    }

    async componentDidMount(): Promise<void> {
        let requestError = false;
        let request;

        try {
            request = await axiosInstance.get(`${process.env.REACT_APP_API_URI}/content/${this.id}`);
        } catch (e) {
            requestError = true;
        }

        this.setState({
            requestError,
            idInfo: request?.data || false,
            loading: false,
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let elems;
        if (this.state?.idInfo && Array.isArray(this.state?.idInfo)) {
            elems = [];
            for (const info of this.state.idInfo) {
                elems.push(<ContentInfo key={nanoid()} idInfo={info}/>)
            }
        } else {
            elems = <ContentInfo idInfo={this.state?.idInfo}/>
        }
        return <Box pad='medium' direction="row" wrap={true} background={'#262a38'}>
            <Link to="/">
                <Button label={'Home'} />
            </Link>
            {this.state.loading && <LoadingSection loading={this.isLoading} />}
            {/*Display Error Panel here if there is a request error*/}
            {this.state?.requestError && <ErrorPanel />}
            {/*Show a returned values*/}
            {!this.state?.requestError && this.state?.idInfo && elems}
        </Box>
    }

    isLoading() {
        return this.state?.loading;
    }
}
