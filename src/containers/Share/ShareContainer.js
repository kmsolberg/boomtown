import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';
import Share from './Share';
import { updateStepIndex, setItemImageUrl } from '../../redux/modules/share';

class ShareContainer extends Component {

    handleNext = () => {
        const { stepIndex } = this.props;
        return this.props.dispatch(updateStepIndex(stepIndex + 1));
    }

    handlePrev = (stepIndex) => {
        if (stepIndex > 0) {
            return this.props.dispatch(updateStepIndex(stepIndex - 1));
        }
        return this.props.dispatch(updateStepIndex(stepIndex));
    }

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    handleImageUpload = () => {
        const cloud = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;

        cloud.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result);
                this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
                this.handleNext();
            });
    }

    handleSubmit = () => {
        this.props.mutate({
            variables: {
                title: `${this.props.values.values.title}`,
                itemowner: `${this.props.authenticated}`,
                description: `${this.props.values.values.description}`,
                imageurl: `${this.props.imageurl}`,
                tags: this.props.values.values.tags.map((tag) =>
                    ({ id: tag })
                )
            }
        })
            .then(({ data }) => {
                console.log('got data', data);
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            });
    }

    renderStepActions = (step) => {
        const { stepIndex, submitting } = this.props;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onTouchTap={stepIndex === 3 ? () => this.handleSubmit() : () => this.handleNext()}
                    style={{ marginRight: 12 }}
                    disabled={submitting}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple
                        disableFocusRipple
                        onTouchTap={() => this.handlePrev()}
                    />
                )}
            </div>
        );
    }

    render() {
        const { stepIndex } = this.props;

        return (
            <Share
                stepIndex={stepIndex}
                renderStepActions={this.renderStepActions}
                selectImage={this.selectImage}
                handleImageUpload={this.handleImageUpload}
                handleSubmit={this.handleSubmit}
                shareForm={this.props.values}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        shareForm: state.form.share,
        stepIndex: state.share.stepIndex,
        authenticated: state.auth.userLogin,
        imageurl: state.share.imageUrl,
    };
}

const addItem = gql`
    mutation addItem(
        $title: String!
        $itemowner: ID!
        $description: String!
        $imageurl: String
        $tags: [AssignedTag]
        ) {
            addItem(
            title: $title
            itemowner: $itemowner
            description: $description
            imageurl: $imageurl
            tags: $tags
        ) {
            title
            description
            itemowner {
                id
            }
            imageurl
            tags {
                title
                id
            }
        }
        }
`;

ShareContainer.propTypes = {
    mutate: PropTypes.func.isRequired
};

const ShareWithData = graphql(addItem)(ShareContainer);

export default connect(mapStateToProps)(ShareWithData);
