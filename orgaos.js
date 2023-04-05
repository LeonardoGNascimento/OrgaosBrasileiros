const tocantins = [];
const bahia = [
  {
    nome: "DER - BA",
    cod: "105200",
    link: "http://200.187.9.74:8180/smt/home.action",
  },
  {
    nome: "TRANSALVADOR - PREF. SALVADOR",
    cod: "238490",
    link: "http://transalvador.salvador.ba.gov.br/conteudo/index.php/multa/nadaConsta",
  },
  { nome: "PREFEITURA MUNICIPAL DE CATU - BA", cod: "234490", link: "" },
  {
    nome: "PREFEITURA MUNICIPAL DE PAULO AFONSO - BA",
    cod: "237810",
    link: "",
  },
];
const sergipe = [];
const pernambuco = [
  {
    nome: "DER - PE",
    cod: "117200",
    link: "",
  },
  {
    nome: "DETRAN - PE",
    cod: "117100",
    link: "https://www.detran.pe.gov.br/",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE PETROLINA - PE",
    cod: "225210",
    link: "",
  },
  { nome: "PREFEITURA MUNICIPAL DE GRAVATA - PE", cod: "224270", link: "" },
];
const alagoas = [
  {
    nome: "DETRAN - AL",
    cod: "102100",
    link: "https://www.detran.al.gov.br/",
  },
];

const riograndedonorte = [
  {
    nome: "DETRAN - RN",
    cod: "120100",
    link: "http://www2.detran.rn.gov.br/externo/consultarveiculo.asp",
  },
  { nome: "PREFEITURA MUNICIPAL DE MOSSORO - RN", cod: "217590", link: "" },
];
const ceara = [
  {
    nome: "DETRAN - CE",
    cod: "106100",
    link: "http://erenavam.detran.ce.gov.br/getran/emissao.do",
  },
  {
    nome: "DETRAN - CE",
    cod: "106100",
    link: "https://sistemas.detran.ce.gov.br/central/veiculos/consulta_completa",
  },
  {
    nome: "PREFEITURA DE FORTALEZA - CE",
    cod: "213890",
    link: "https://radar.serpro.gov.br/main.html#/cidadao-interno",
  },
];
const piaui = [
  {
    nome: "DETRAN - PI",
    cod: "118100",
    link: "http://taxas.detran.pi.gov.br/multa/index.jsf",
  },
  { nome: "PREFEITURA MUNICIPAL DE TERESINA - PI", cod: "212190", link: "" },
];
const maranhao = [
  {
    nome: "DETRAN - MA",
    cod: "110100",
    link: "http://www.detran.ma.gov.br/Infracoes/",
  },
  { nome: "PREFEITURA MUNICIPAL DE BALSAS - MA", cod: "207270", link: "" },
  { nome: "PREFEITURA MUNICIPAL DE IMPERATRIZ - MA", cod: "208030", link: "" },
  { nome: "PREFEITURA MUNICIPAL DE ESTREITO - MA", cod: "209630", link: "" },
  { nome: "PREFEITURA MUNICIPAL DE SAO LUIS - MA", cod: "209210", link: "" },
];
const amapa = [
  { nome: "PREFEITURA MUNICIPAL DE MACAPA - AP", cod: "206050", link: "" },
];
const para = [
  {
    nome: "DETRAN - PA",
    cod: "114100",
    link: "http://www.detran.pa.gov.br/sistransito/detran-web/servicos/b/indexBInfracao.jsf",
  },
  { nome: "PREFEITURA MUNICIPAL DE CAPANEMA - PA", cod: "204430", link: "" },
];
const roraima = [
  {
    nome: "DETRAN - RR",
    cod: "123100",
    link: "https://www.detran.rr.gov.br/",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE BOA VISTA - RR",
    cod: "203010",
    link: "",
  },
];
const amazonas = [
  {
    nome: "DETRAN - AM",
    cod: "103100",
    link: "https://digital.detran.am.gov.br/?openModalVeiculo=%2Fveiculo%2Fmultas",
  },
  {
    nome: "PREFEITURA DE MANAUS - AM",
    cod: "202550",
    link: "http://grm.prodam.am.gov.br/index.php/multas/consulta_pagamentos",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE PRESIDENTE FIGUEIREDO - AM",
    cod: "298410",
    link: "",
  },
  { nome: "PREFEITURA MUNICIPAL DE IRANDUBA - AM", cod: "298350", link: "" },
];
const acre = [
  {
    nome: "",
    cod: "",
    link: "",
  },
  { nome: "PREFEITURA MUNICIPAL DE RIO BRANCO - AC", cod: "201390", link: "" },
];
const rondonia = [
  {
    nome: "",
    cod: "",
    link: "",
  },
];
const matogrosso = [
  { nome: "PREFEITURA MUNICIPAL DE CUIABA - MT", cod: "290670", link: "" },
  { nome: "PREFEITURA MUNICIPAL DE SINOP - MT", cod: "289850", link: "" },
];
const matogrossodosul = [
  {
    nome: "DETRAN - MS",
    cod: "112100",
    link: "https://www.meudetran.ms.gov.br/infracao.php",
  },
];
const goias = [
  {
    nome: "DER - DF",
    cod: "107200",
    link: "",
  },
  {
    nome: "DETRAN - DF",
    cod: "107100",
    link: "https://portal.detran.df.gov.br/#/servicos/detran-digital/veiculos/consulta/debitos",
  },
  {
    nome: "DETRAN - DF",
    cod: "107100",
    link: "https://getran.detran.df.gov.br/site/veiculos/consultas/filtroplacarenavam-consultaveiculo.jsp",
  },
  {
    nome: "DETRAN - GO",
    cod: "109100",
    link: "https://www.detran.go.gov.br/psw/#/pages/conteudo/consulta-multas-renainf",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE APARECIDA DE GOIANIA - GO",
    cod: "292270",
    link: "",
  },
];
const parana = [
  {
    nome: "DETRAN - PR",
    cod: "116100",
    link: "https://www.extratodebito.detran.pr.gov.br/detranextratos/geraExtrato.do?action=iniciarProcesso",
  },
  {
    nome: "DETRAN - PR IMG",
    cod: "116100",
    link: "",
  },
  {
    nome: "DPRF",
    cod: "100",
    link: "https://nadaconsta.prf.gov.br/nada_consta/index.jsf",
  },
  {
    nome: "GIT CIDADÃO - PR",
    cod: "116100",
    link: "http://www.gitcidadao.pr.gov.br/",
  },
  {
    nome: "",
    cod: "",
    link: "",
  },
];
const santacatarina = [
  {
    nome: "DETRAN - SC",
    cod: "125100",
    link: "http://consultas.detrannet.sc.gov.br/servicos/consultaveiculo.asp?placa=&renavam=&g-recaptcha-response=&Submit=Consultar&modo=C",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE JOINVILLE - SC",
    cod: "281790",
    link: "",
  },
];
const riograndedosul = [
  {
    nome: "DETRAN - RS",
    cod: "121100",
    link: "https://www.portaldetransito.rs.gov.br/dtw/servicos/sit/notificacao_pesquisar.jsp",
  },
  {
    nome: "TODOS - RS RODA DETRAN",
    cod: "121100",
    link: "http://www.portaldetransito.rs.gov.br/dtw2/app/servico/ifr/guia-pagamento-multas.xhtml",
  },
];
const saopaulo = [
  {
    nome: " PREFEITURA DE BOTUCATU - SP",
    cod: "262490",
    link: "http://www2.admtransito.com.br/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: "PREFEITURA GUARUJA - SP",
    cod: "264750",
    link: "http://200.98.31.31/consulta/index.php",
  },
  {
    nome: " PREFEITURA DE PALMAS - TO",
    cod: "297330",
    link: "http://controlpk-to.perkons.com.br/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: " PREFEITURA DE PRAIA GRANDE - SP",
    cod: "269210",
    link: "http://www.parisadministracao.com.br/sttpublico/index.php",
  },
  {
    nome: " PREFEITURA DE SÃO CARLOS - SP",
    cod: "270790",
    link: "http://www2.admtransito.com.br/consulta/index.php",
  },
  {
    nome: " PREFEITURA DE SÃO SEBASTIÃO - SP",
    cod: "271150",
    link: "http://200.98.31.31/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: " PREFEITURA DE SUZANO - SP",
    cod: "271510",
    link: "http://200.98.31.31/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: "PREEFEITURA DE COTIA - SP  ",
    cod: "263610",
    link: "http://www2.admtransito.com.br/consulta/index.php",
  },
  {
    nome: "PREFEITURA DE BERTIOGA - SP ",
    cod: "229650",
    link: "http://www2.admtransito.com.br/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: "PREFEITURA DE CUBATÃO - SP ",
    cod: "263710",
    link: "http://www2.admtransito.com.br/consulta/index.php",
  },
  {
    nome: "PREFEITURA DE FERRAZ DE VASCONCELOS - SP ",
    cod: "264150",
    link: "http://200.98.31.31/consulta/index.php?ATIVIDADE=AUTUACOES",
  },
  {
    nome: "PREFEITURA DE TAUBATÉ - SP ",
    cod: "271830",
    link: "http://www2.admtransito.com.br/consulta/index.php",
  },
  {
    nome: "PREFEITURA DE MAIRIPORÃ - SP ",
    cod: "266710",
    link: "http://www2.admtransito.com.br/consulta/index.php",
  },
  {
    nome: "PREF. DE SÃO JOSÉ DO RIO PRETO - SP",
    cod: "270970",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=7097",
  },
  {
    nome: "PREFEITTURA DE SERTÃOZINHO - SP",
    cod: "271350",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=7135",
  },
  {
    nome: "PREFEITURA DE ANGATUBA - SP ",
    cod: "261430",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6143",
  },
  {
    nome: "PREFEITURA DE CONCHAL - SP ",
    cod: "263450",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6345",
  },
  {
    nome: "PREFEITURA DE FRANCA - SP ",
    cod: "264250",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6425",
  },
  {
    nome: "PREFEITURA DE FRANCO DA ROCHA - SP",
    cod: "264290",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6429",
  },
  {
    nome: "PREFEITURA DE GUARAREMA - SP",
    cod: "264670",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6467",
  },
  {
    nome: "PREFEITURA DE GUAREI - SP ",
    cod: "264710",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6471",
  },
  {
    nome: "PREFEITURA DE GUARIBA - SP",
    cod: "264730",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6473",
  },
  {
    nome: "PREFEITURA DE IBIUNA - SP ",
    cod: "264950",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6495",
  },
  {
    nome: "PREFEITURA DE ITAPEVA - SP",
    cod: "265490",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6549",
  },
  {
    nome: "PREFEITURA DE ITAPEVÍ - SP ",
    cod: "265510",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6551",
  },
  {
    nome: "PREFEITURA DE MOGI DAS CRUZES - SP",
    cod: "267130",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6713",
  },
  {
    nome: "PREFEITURA DE OSASCO - SP",
    cod: "267890",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6789",
  },
  {
    nome: "PREFEITURA DE SÃO VICENTE - SP",
    cod: "271210",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=7121",
  },
  {
    nome: "PREFEITURA DE VARZEA PAULISTA - SP",
    cod: "272330",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=7233",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE IBIUNA - SP",
    cod: "264950",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=6495",
  },
  {
    nome: "PREFEITURA DE SUMARÉ - SP",
    cod: "",
    link: "http://www.dcctransito.com.br/consulta/index.cfm?municipio=7149",
  },
  {
    nome: "DER - SP",
    cod: "126200",
    link: "http://www.multas1.der.sp.gov.br/der_multas_web/pages/DER_Multas_Web/index.aspx",
  },
  {
    nome: "PREEFEITURA DE PIRACICABA -SP",
    cod: "268750",
    link: "http://sistemas3.piracicaba.sp.gov.br/semuttran/multasweb/index.php?view=consulta#",
  },
  {
    nome: "PREEFITURA DE JUNDIAI - SP",
    cod: "266190",
    link: "https://jundiai.sp.gov.br/transportes/multas-de-transito/consulta-de-multa/",
  },
  {
    nome: "PREFEITURA DE BAURU - SP",
    cod: "262190",
    link: "https://www.emdurb.com.br/multas/autoinfracao",
  },
  {
    nome: "PREFEITURA DE CAMPINAS - SP",
    cod: "262910",
    link: "http://www.emdec.com.br/eficiente/sites/portalemdec/pt-br/site.php?secao=segunda_via_boleto_multa",
  },
  {
    nome: "PREFEITURA DE DIADEMA - SP",
    cod: "263770",
    link: "http://191.241.243.227/ConsultaMultasWeb/Home.aspx?codmun=6377",
  },
  {
    nome: "PREFEITURA DE GUARULHOS - SP",
    cod: "264770",
    link: "https://www.guarulhos.sp.gov.br/consulta-de-multas-de-transito",
  },
  {
    nome: "PREFEITURA DE SANTOS - SP",
    cod: "270710",
    link: "http://www.vtx2.com.br/infracoes/index.php?p=01PesqAutuacao",
  },
  {
    nome: "PREFEITURA DE SÃO BERNARDO DO CAMPO - SP",
    cod: "270750",
    link: "https://www.saobernardo.sp.gov.br/consultar-debitos",
  },
  {
    nome: "PREFEITURA DE SÃO JOSÉ DOS CAMPOS",
    cod: "270990",
    link: "https://radar.serpro.gov.br/main.html#/cidadao-interno",
  },
  {
    nome: "PREFEITURA DE SOROCABA - SP",
    cod: "271450",
    link: "https://www.urbes.com.br/multas/",
  },
  {
    nome: "PREFEITURA SÃO PAULO DSV",
    cod: "271070",
    link: "https://meuveiculo.prefeitura.sp.gov.br/frmPesquisarRenavam.aspx",
  },
  {
    nome: "PREFEITURA DE CARAPICUIBA - SP",
    cod: "263130",
    link: "http://189.57.47.194:8080/multas-municipe/home.action?municipio=1",
  },
  {
    nome: "PREFEITURA DE TABOÃO DA SERRA - SP",
    cod: "271570",
    link: "http://189.57.47.194:8080/multas-municipe/home.action;jsessionid=DA0FD22EDB3A721041C92C693593E2FE?municipio=7",
  },
  {
    nome: "PREFEITURA DE BARUERI - SP",
    cod: "262130",
    link: "http://189.57.47.194:8080/multas-municipe/home.action;jsessionid=D26E6D76E5E41CF92CEFD9CB9A93E119?municipio=11",
  },
  {
    nome: "PREFEITURA DE CAJAMAR - SP",
    cod: "262850",
    link: "http://189.57.47.194:8080/multas-municipe/home.action?municipio=3",
  },
  {
    nome: "PREFEITURA DE ITAPECERICA DA SERRA -SP",
    cod: "265450",
    link: "http://189.57.47.194:8080/multas-municipe/home.action;jsessionid=CFB231D147B356FAF1D4E184D668757D?municipio=5",
  },
  {
    nome: "PREFEITURA DE JACAREÍ - SP",
    cod: "265890",
    link: "http://189.57.47.194:8080/multas-municipe/home.action;jsessionid=005F741D135E79D3012D5FAF41312D63?municipio=20",
  },
  {
    nome: "PREFEITURA DE VINHEDO - SP",
    cod: "272370",
    link: "http://189.57.47.194:8080/multas-municipe/home.action;jsessionid=B1C3BAA30A46814D51B2061D224950AF?municipio=2",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE SAO JOSE DOS CAMPOS - SP",
    cod: "270990",
    link: "",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE SAO CAETANO DO SUL - SP",
    cod: "270770",
    link: "http://191.13.132.32/ConsultaMultasWeb/Home.aspx?codmun=7077",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE ITARARE - SP",
    cod: "265650",
    link: "",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE AMPARO - SP",
    cod: "261370",
    link: "",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE PEDREGULHO - SP",
    cod: "268410",
    link: "",
  },
];
const minasgerais = [
  {
    nome: "DER - MG",
    cod: "113200",
    link: "http://www.consultaait.der.mg.gov.br/grv6-frontend/",
  },
  {
    nome: "DETRAN - MG",
    cod: "113100",
    link: "https://www.detran.mg.gov.br/veiculos/situacao-do-veiculo/consultar-situacao-do-veiculo",
  },
  {
    nome: "PREFEITURA MUNICIPAL DE DIVINOPOLIS - MG",
    cod: "244450",
    link: "",
  },
  { nome: "PREFEITURA MUNICIPAL DE DIVINOPOLIS - MG", cod: "244450", link: "" },
];
const riodejaneiro = [
  {
    nome: "BRADESCO",
    cod: "119100",
    link: "https://www.ib7.bradesco.com.br/ibpfdetranrj/debitoVeiculoRJGrmConsultar.do",
  },
  {
    nome: "PREFEITURA RIO DE JANEIRO",
    cod: "260010",
    link: "http://www2.rio.rj.gov.br/multas/index.asp",
  },
];
const espiritosanto = [
  {
    nome: "DETRAN - ES",
    cod: "108100",
    link: "https://publicodetran.es.gov.br/consultaBoletoMulta.asp",
  },
];
const distritofederal = [
  {
    nome: "",
    cod: "",
    link: "",
  },
];
const paraiba = [
  {
    nome: "PREF. JOÃO PESSOA - SEMOB - PB",
    cod: "115100",
    link: "https://servicos.semobjp.pb.gov.br/multas/pesquisar/",
  },
  { nome: "PREFEITURA MUNICIPAL DE PITIMBU - PB", cod: "221390", link: "" },
];
export {
  tocantins,
  bahia,
  sergipe,
  pernambuco,
  alagoas,
  riograndedonorte,
  ceara,
  piaui,
  maranhao,
  amapa,
  para,
  roraima,
  amazonas,
  acre,
  rondonia,
  matogrosso,
  matogrossodosul,
  goias,
  parana,
  santacatarina,
  riograndedosul,
  saopaulo,
  minasgerais,
  riodejaneiro,
  espiritosanto,
  distritofederal,
  paraiba,
};
/*
{
    nome: "",
    cod: "",
    link: "",
  },
  */
