import React from "react";
import "../../App.css";

interface IFormProps {
    /* The http path that the form will be posted to */
    action: string;

    /* A prop which allows content to be injected */
    render: () => React.ReactNode;
}

export interface IValues {
    [key: string]: any;
}

export interface IErrors {
    [key: string]: string;
}

export interface IFormState {
    values: IValues;
    errors: IErrors;
    submitSuccess?: boolean;
}

export class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        const errors: IErrors = {};
        const values: IValues = {};
        this.state = {
            errors,
            values
        };
    }

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {IErrors} errors - The field errors
     */
    private haveErrors(errors: IErrors) {
        let haveError: boolean = false;
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });
        return haveError;
    }

    /**
     * Executes the validation rules for all the fields on the for and sets the error state
     * @returns {boolean} - Whether the form is valid or not
     */
    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({ submitSuccess });
        }
    };

    private validateForm(): boolean {
        // TODO - validate form
        return true;
    }

    /**
     * Submits the form to the http api
     * @returns {boolean} - Whether the form submission was successful or not
     */
    private async submitForm(): Promise<boolean> {
        // TODO - submit the form
        return true;
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate={true}>
                <div className="container">
                    {this.props.render()}
                    <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={this.haveErrors(errors)}
                        >
                            Send it
                        </button>
                    </div>
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The emails were successfully sent!
                        </div>
                    )}
                    {submitSuccess === false &&
                        !this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, an unexpected error has occured
                            </div>
                    )}
                    {submitSuccess === false &&
                        this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, the form is invalid. Please review, adjust and try again
                            </div>
                        )}
                </div>
            </form>
        );
    }

}
