'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="Home">
                <section className="home-page">

                    <div>
                        Home
                    </div>

                </section>
            </DocumentTitle>
        );
    }

}