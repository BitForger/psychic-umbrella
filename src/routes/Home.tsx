import React, {Component} from "react";
import {Box, Button, Form, FormField} from "grommet";
import logo from "../logo.svg";
import {Table} from "../components/Table";
import {RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps {

}

export class Home extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/*I want to add an input to take an id and show the summary here*/}
                    <div className="App-header App-header__id-input">
                        <Form onSubmit={this.handleSubmit}>
                            <FormField name="id" label="Input Content ID or Content Type" />
                            <Button type="submit" primary label="Submit" />
                        </Form>
                    </div>
                </header>
                <Box
                    direction="row"
                    pad="medium"
                >
                    <Table/>
                </Box>
            </div>
        );
    }

    handleSubmit({value}: any) {
        if (value.id) {
            this.props.history.push(`/${value.id}`)
        } else {
            return;
        }
    }
}
