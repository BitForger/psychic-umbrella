import React, {Component} from "react";

export class ContentInfo extends Component<{ idInfo: any | undefined }> {
    render() {
        return <div className='content-info content-info__container'>
            <div className="content-info content-info__title-wrapper">
                <h1 className="content-info content-info__title">{this.props.idInfo.name}</h1>
                <h3 className="content-info content-info__meta">Created: {new Date(this.props.idInfo.created).toLocaleString()}</h3>
            </div>
            <div className="content-info content-info__image-wrapper">
                <img src={this.props.idInfo.image} alt=""/>
            </div>
        </div>;
    }
}
