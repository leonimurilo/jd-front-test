import React from "react";
import { Formik, Field } from "formik";
import { postDoc } from "../../services/api";
import { CreateDocValidation } from "./validations";

const fields = [
  {
    name: "qtd_ben_bvn",
    type: "number",
  },
  {},
];

function CreateDoc(props) {
  return (
    <Formik
      initialValues={{
        anomes: "",
        ibge: "",
        siglauf: "",
        qtd_ben_bas: 0,
        qtd_ben_var: 0,
        qtd_ben_bvj: 0,
        qtd_ben_bvn: 0,
        qtd_ben_bvg: 0,
        qtd_ben_bsp: 0,
      }}
      validationSchema={CreateDocValidation}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        try {
          const resp = await postDoc(values);
          console.log(resp.data);
        } catch (error) {
          alert(error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            name="anomes"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.anomes}
          />
          {errors.anomes && touched.anomes && errors.anomes}
          <input
            name="ibge"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ibge}
          />
          {errors.ibge && touched.ibge && errors.ibge}
          <input
            name="siglauf"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.siglauf}
          />
          {errors.siglauf && touched.siglauf && errors.siglauf}
          <input
            name="qtd_ben_bas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_bas}
          />
          {errors.qtd_ben_bas && touched.qtd_ben_bas && errors.qtd_ben_bas}
          <input
            name="qtd_ben_var"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_var}
          />
          {errors.qtd_ben_var && touched.qtd_ben_var && errors.qtd_ben_var}
          <input
            name="qtd_ben_bvj"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_bvj}
          />
          {errors.qtd_ben_bvj && touched.qtd_ben_bvj && errors.qtd_ben_bvj}
          <input
            name="qtd_ben_bvn"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_bvn}
          />
          {errors.qtd_ben_bvn && touched.qtd_ben_bvn && errors.qtd_ben_bvn}
          <input
            name="qtd_ben_bvg"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_bvg}
          />
          {errors.qtd_ben_bvg && touched.qtd_ben_bvg && errors.qtd_ben_bvg}
          <input
            name="qtd_ben_bsp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qtd_ben_bsp}
          />
          {errors.qtd_ben_bsp && touched.qtd_ben_bsp && errors.qtd_ben_bsp}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default CreateDoc;
