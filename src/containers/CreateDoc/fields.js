import TextField from "../../components/Fields/TextField";
import SelectField from "../../components/Fields/SelectField";
import { UFList } from "../../constants/UFs";

export const fields = [
  {
    name: "anomes",
    label: "Mês e ano de referência",
    mask: "99/9999",
    component: TextField,
    autoFocus: true,
  },
  {
    name: "ibge",
    label: "Código ibge do município",
    component: TextField,
  },
  {
    name: "siglauf",
    label: "UF",
    options: UFList,
    component: SelectField,
  },
  {
    name: "qtd_ben_bas",
    label: "Benefícios básicos",
    type: "number",
    component: TextField,
  },
  {
    name: "qtd_ben_var",
    label: "Benefícios variáveis",
    type: "number",
    component: TextField,
  },
  {
    name: "qtd_ben_bvj",
    label: "Benefícios jovem",
    type: "number",
    component: TextField,
  },
  {
    name: "qtd_ben_bvn",
    label: "Benefícios nutriz",
    type: "number",
    component: TextField,
  },
  {
    name: "qtd_ben_bvg",
    label: "Benefícios gestantes",
    type: "number",
    component: TextField,
  },
  {
    name: "qtd_ben_bsp",
    label: "Benefícios superação extrema pobreza",
    type: "number",
    component: TextField,
  },
];

export const initialValues = {
  anomes: "",
  ibge: "",
  siglauf: [UFList[0]],
  qtd_ben_bas: 0,
  qtd_ben_var: 0,
  qtd_ben_bvj: 0,
  qtd_ben_bvn: 0,
  qtd_ben_bvg: 0,
  qtd_ben_bsp: 0,
};
