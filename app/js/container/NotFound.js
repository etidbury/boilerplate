'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';


export default class NotFound extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="404: Not Found">
                <section className="not-found-page">

                    Page Not Found

                </section>
            </DocumentTitle>
        );
    }
}




