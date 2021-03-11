import { NumericalColumn, StringColumn, CustomColumn } from "baseui/data-table";

export const columns = [
  // Displaying id column to make perception of delete feature easier
  StringColumn({
    title: "ID",
    mapDataToValue: (data) => data.id,
  }),
  StringColumn({
    title: "UF",
    mapDataToValue: (data) => data.siglauf,
  }),
  StringColumn({
    title: "Código ibge do município",
    mapDataToValue: (data) => data.ibge,
  }),
  CustomColumn({
    title: "Mês e ano de referência",
    mapDataToValue: (data) => data.anomes,
    renderCell: (props) => {
      try {
        const month = props.value.slice(4, 6);
        const year = props.value.slice(0, 4);
        return (
          <div>
            <span>
              {month}/{year}
            </span>
          </div>
        );
      } catch (e) {
        return <div>{props.value}</div>;
      }
    },
  }),
  NumericalColumn({
    title: "Benefícios básicos",
    mapDataToValue: (data) => data.qtd_ben_bas,
  }),
  NumericalColumn({
    title: "Benefícios variáveis",
    mapDataToValue: (data) => data.qtd_ben_var,
  }),
  NumericalColumn({
    title: "Benefícios jovem",
    mapDataToValue: (data) => data.qtd_ben_bvj,
  }),
  NumericalColumn({
    title: "Benefícios nutriz",
    mapDataToValue: (data) => data.qtd_ben_bvn,
  }),
  NumericalColumn({
    title: "Benefícios gestantes",
    mapDataToValue: (data) => data.qtd_ben_bvg,
  }),
  NumericalColumn({
    title: "Benefícios superação extrema pobreza",
    mapDataToValue: (data) => data.qtd_ben_bsp,
  }),
];
