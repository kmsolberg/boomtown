import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

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

// const validate = values => {
//     const errors = {};
//     const requiredFields = [
//         'title',
//         'description',
//         'tags'
//     ];
//     requiredFields.forEach(field => {
//         if (!values[field]) {
//             errors[field] = 'Required';
//         }
//     });
//     return errors;
// };

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <div>
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
        {...touched && ((error && <span>{error}</span>))}
    </div>
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        multiple
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


let Share = (props) => {
    const {
        stepIndex,
        renderStepActions,
        handleImageUpload,
        selectImage,
        handleSubmit,
        shareForm
    } = props;

    const renderMenuItems = (tags) => {
        return tags.map((tag) => (
            <MenuItem
                key={tag.id}
                insetChildren
                checked={
                    shareForm &&
                    shareForm.values &&
                    shareForm.values.tags &&
                    shareForm.values.tags.includes(tag.id)
                }
                value={tag.id}
                primaryText={tag.title}
            />
        ));
    };

    let uploadInput = false;

    return (
        <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(shareForm.values);
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
                            {renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
            </form>
        </div>
    );
};

renderTextField.propTypes = {
    input: PropTypes.oneOfType([PropTypes.object]).isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
};

renderSelectField.propTypes = {
    children: PropTypes.shape(PropTypes.object).isRequired,
    values: PropTypes.arrayOf(PropTypes.object).isRequired,
    input: PropTypes.oneOfType([PropTypes.object]).isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
};

Share.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    renderStepActions: PropTypes.func.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    selectImage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        shareForm: state.form.share,
    };
}

Share = reduxForm({
    form: 'share',
    validate,
})(Share);

export default connect(mapStateToProps)(Share);
