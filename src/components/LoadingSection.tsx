import React, {Component} from "react";
import '../styles/LoadingSection.scss'
import {RotateSpinner} from "react-spinners-kit";

interface Props {
    loading: () => boolean | undefined,
}
interface State {

}

export class LoadingSection extends Component<Props, State> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div className="loader loader__parent">
            <div className="loader loader__wrapper">
                <RotateSpinner loading={this.props?.loading()} color="#1976D2" />
            </div>
        </div>
    }
}
