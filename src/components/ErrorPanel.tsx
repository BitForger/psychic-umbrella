import React, {Component} from "react";

export class ErrorPanel extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div className='error'>
            <h2 className='error error-header'>Error Encountered</h2>
            <p className='error error-body'>We were unable to fetch the data for this section. We apologize for the inconvenience. Please try again later</p>
        </div>
    }
}
