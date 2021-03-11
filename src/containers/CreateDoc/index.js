import React from "react";
import { useHistory } from "react-router-dom";
import { Heading, HeadingLevel } from "baseui/heading";
import { Button, KIND, SIZE } from "baseui/button";
import { Formik, Field } from "formik";
import { postDoc } from "../../services/api";
import { CreateDocValidation } from "./validations";
import { fields, initialValues } from "./fields";

// TODO: add react error boundary
function CreateDoc({ handleSubmit }) {
  let history = useHistory();

  return (
    <div>
      <div className="create-doc__heading">
        <HeadingLevel>
          <Heading styleLevel={3}>Create new doc</Heading>
        </HeadingLevel>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateDocValidation}
        onSubmit={
          handleSubmit ||
          (async (values, { setSubmitting }) => {
            console.log(values);
            try {
              const finalPayload = { ...values, siglauf: values.siglauf[0].id };
              console.log(finalPayload);
              setSubmitting(true);
              await postDoc(finalPayload);
              setSubmitting(false);
              history.push("/");
            } catch (error) {
              alert(error);
              setSubmitting(false);
            }
          })
        }
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="create-doc__fields">
              {fields.map((props) => (
                <Field key={props.name} {...props} />
              ))}
            </div>
            <div className="create-doc__actions">
              <Button
                type="submit"
                disabled={isSubmitting}
                size={SIZE.compact}
                kind={KIND.primary}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CreateDoc;
