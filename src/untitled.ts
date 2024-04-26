//contrato
//1 - Sistema deve usar Tailwindcss
//2 - Sistema deve ter um elemento HTML do tipo table (com ID definido) preparado e sem informações dentro
//3 - São necessários dois arrays para a geração da tabela
//3.1 - Um array de dados
//3,2 - Um array com objetos que caracterizam as colunas
//3.3 - Não é necessário, mas pode-se passar uma função de formatação dos dados da coluna
type columnObject = {
  columnLabel: string;
  acessor: string;
  formatFN?: (info: number | string) => string;
};

type columsArray = columnObject[];

[
  { columnLabel: "Total Investido", acessor: "investedAmount" },
  { columnLabel: "Rendimento Mensal", acessor: "interestReturns" },
  { columnLabel: "Rendimento Total", acessor: "totalInterestReturns" },
  { columnLabel: "Mês", acessor: "month" },
  { columnLabel: "Quantia total", acessor: "totalAmount" },
];
