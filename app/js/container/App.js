import React              from 'react';


export default class App extends React.Component {

    renderChildren() {
        return React.cloneElement(this.props.children, {
            params: this.props.params,
            query: this.props.query
        });
    }
    render() {
        return (
            <div>

                {this.renderChildren()}

            </div>
        );
    }

}