import React, {Component} from "react";

export class ContentInfo extends Component<{ idInfo: any | undefined }> {
    render() {
        return <div className='content-info content-info__container' id={this.props.idInfo?.id}>
            <div className="content-info content-info__title-wrapper">
                <h1 className="content-info content-info__title">
                    {/*Use an a tag here because we need to actually load the page again with the
                        new URL instead of just changing the path*/}
                    <a href={`/${this.props.idInfo.id}`}>{this.props.idInfo.name}</a>
                </h1>
                <h3 className="content-info content-info__meta">Created: {new Date(this.props.idInfo.created).toLocaleString()}</h3>
            </div>
            <div className="content-info content-info__image-wrapper">
                {this.props.idInfo?.image ?
                    <img src={this.props.idInfo.image} alt=""/> :
                    <p>We could not find an image for this content</p>
                }
            </div>
        </div>;
    }
}
