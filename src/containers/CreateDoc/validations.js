import * as Yup from "yup";

export const CreateDocValidation = Yup.object().shape({
  anomes: Yup.string().required("Required"),
  ibge: Yup.string().required("Required"),
  siglauf: Yup.mixed().test("uf-test", "Required", (value) => {
    return value && Array.isArray(value) && value[0] && value[0].id;
  }),
  qtd_ben_bas: Yup.number().required("Required"),
  qtd_ben_var: Yup.number().required("Required"),
  qtd_ben_bvj: Yup.number().required("Required"),
  qtd_ben_bvn: Yup.number().required("Required"),
  qtd_ben_bvg: Yup.number().required("Required"),
  qtd_ben_bsp: Yup.number().required("Required"),
});
