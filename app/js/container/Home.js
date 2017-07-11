'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';

import {Link}        from 'react-router';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="Home">
                <section className="home-page">
                    Homepage.
                </section>
            </DocumentTitle>
        );
    }

}
