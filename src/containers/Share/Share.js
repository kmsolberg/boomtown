import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, isPristine, isSubmitting } from 'redux-form';

import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './style.css';

const validate = values => {
    const errors = {};
    const requiredFields = [
        'title',
        'description',
        'tags'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        multiple={true}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />
);

const listOfTags = [
    { id: 7, title: 'Tools' },
    { id: 1, title: 'Househouse Items' },
    { id: 4, title: 'Physical Media' },
    { id: 3, title: 'Musical Instruments' },
    { id: 6, title: 'Sporting Goods' },
    { id: 2, title: 'Electronics' },
    { id: 5, title: 'Recreational Equipment' },
];


let Share = ({ stepIndex, renderStepActions, handleImageUpload, selectImage, handleSubmit, values }) => {

    const renderMenuItems = (tags) => {
        return tags.map((tag) => (
            <MenuItem
                key={tag.id}
                insetChildren={true}
                checked={values && values.tags.includes(tag.id)}
                value={[tag.id]}
                primaryText={tag.title}
            />
        ));
    };

    let uploadInput = false;

    return (
        <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(values);
            }}
            >
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Add an image</StepLabel>
                        <StepContent>
                            <p>We live in a visual culture. Upload an image of the item you are sharing.</p>
                            <RaisedButton
                                label="Select an image"
                                onClick={() => selectImage(uploadInput)}
                            />
                            <input
                                onChange={handleImageUpload}
                                ref={(input) => { uploadInput = input; }}
                                hidden
                                type="file"
                                d="input"
                            />
                            {renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Add a Title and Description.</StepLabel>
                        <StepContent>
                            <p>Describe the item to entice borrowers.</p>
                            <Field
                                name="title"
                                label="Item Title"
                                component={renderTextField}
                            />
                            <Field
                                name="description"
                                label="Item Description"
                                component={renderTextField}
                            />
                            {renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize your item.</StepLabel>
                        <StepContent>
                            <p>Let us know what type of item it is!</p>
                            <Field
                                name="tags"
                                label="Item Categories"
                                component={renderSelectField}
                            >
                                {renderMenuItems(listOfTags)}
                            </Field>
                            {renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Confirm your things!</StepLabel>
                        <StepContent>
                            <p>Is it all ready to share?</p>
                            <button type="submit">Submit!</button>
                            {renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
                {/* <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button> */}
                {/* {finished && (
                    <p style={{ margin: '20px 0', textAlign: 'center' }}>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            this.setState({stepIndex: 0, finished: false});
                        }}
                        >
                        Click here
                        </a> reset the form.
                    </p>
                )}  */}
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        submitting: state.form.isSubmitting,
        pristine: state.form.isPristine,
        values: state.form.share
    };
}

Share = reduxForm({
    form: 'share',
    validate
})(Share);

// To Do: Prop types go here...

export default connect(mapStateToProps)(Share);
