import React              from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

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

                <Header />

                {this.renderChildren()}

                <Footer />
            </div>
        );
    }

}