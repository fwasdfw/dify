const translation = {
  title: "Strumenti",
  createCustomTool: "Crea Strumento Personalizzato",
  customToolTip: "Scopri di più sugli strumenti personalizzati di Dify",
  type: {
    all: "Tutti",
    builtIn: "Integrato",
    custom: "Personalizzato",
    workflow: "Flusso di lavoro",
  },
  contribute: {
    line1: "Sono interessato a ",
    line2: "contribuire con strumenti a Dify.",
    viewGuide: "Visualizza la guida",
  },
  author: "Di",
  auth: {
    unauthorized: "Per Autorizzare",
    authorized: "Autorizzato",
    setup: "Configura l'autorizzazione per utilizzare",
    setupModalTitle: "Configura Autorizzazione",
    setupModalTitleDescription:
      "Dopo aver configurato le credenziali, tutti i membri all'interno del workspace possono utilizzare questo strumento durante l'orchestrazione delle applicazioni.",
  },
  includeToolNum: "{{num}} strumenti inclusi",
  addTool: "Aggiungi Strumento",
  addToolModal: {
    type: "tipo",
    category: "categoria",
    add: "aggiungi",
    added: "aggiunto",
    manageInTools: "Gestisci in Strumenti",
    emptyTitle: "Nessun strumento di flusso di lavoro disponibile",
    emptyTip: 'Vai a "Flusso di lavoro -> Pubblica come Strumento"',
  },
  createTool: {
    title: "Crea Strumento Personalizzato",
    editAction: "Configura",
    editTitle: "Modifica Strumento Personalizzato",
    name: "Nome",
    toolNamePlaceHolder: "Inserisci il nome dello strumento",
    nameForToolCall: "Nome chiamata strumento",
    nameForToolCallPlaceHolder:
      "Usato per il riconoscimento della macchina, ad esempio getCurrentWeather, list_pets",
    nameForToolCallTip: "Supporta solo numeri, lettere e underscore.",
    description: "Descrizione",
    descriptionPlaceholder:
      "Breve descrizione dello scopo dello strumento, ad esempio, ottenere la temperatura per una posizione specifica.",
    schema: "Schema",
    schemaPlaceHolder: "Inserisci qui il tuo schema OpenAPI",
    viewSchemaSpec: "Visualizza la Specifica OpenAPI-Swagger",
    importFromUrl: "Importa da URL",
    importFromUrlPlaceHolder: "https://...",
    urlError: "Per favore inserisci un URL valido",
    examples: "Esempi",
    exampleOptions: {
      json: "Weather(JSON)",
      yaml: "Pet Store(YAML)",
      blankTemplate: "Modello Vuoto",
    },
    availableTools: {
      title: "Strumenti Disponibili",
      name: "Nome",
      description: "Descrizione",
      method: "Metodo",
      path: "Percorso",
      action: "Azioni",
      test: "Test",
    },
    authMethod: {
      title: "Metodo di autorizzazione",
      type: "Tipo di autorizzazione",
      keyTooltip:
        'Http Header Key, Puoi lasciarlo come "Authorization" se non sai cos\'è o impostarlo su un valore personalizzato',
      types: {
        none: "Nessuno",
        api_key: "API Key",
        apiKeyPlaceholder: "Nome dell'intestazione HTTP per API Key",
        apiValuePlaceholder: "Inserisci API Key",
      },
      key: "Chiave",
      value: "Valore",
    },
    authHeaderPrefix: {
      title: "Tipo di Auth",
      types: {
        basic: "Basic",
        bearer: "Bearer",
        custom: "Custom",
      },
    },
    privacyPolicy: "Informativa sulla privacy",
    privacyPolicyPlaceholder:
      "Per favore inserisci l'informativa sulla privacy",
    toolInput: {
      title: "Input Strumento",
      name: "Nome",
      required: "Richiesto",
      method: "Metodo",
      methodSetting: "Impostazione",
      methodSettingTip: "L'utente compila la configurazione dello strumento",
      methodParameter: "Parametro",
      methodParameterTip: "LLM compila durante l'inferenza",
      label: "Tag",
      labelPlaceholder: "Scegli tag (opzionale)",
      description: "Descrizione",
      descriptionPlaceholder: "Descrizione del significato del parametro",
    },
    customDisclaimer: "Disclaimer personalizzato",
    customDisclaimerPlaceholder:
      "Per favore inserisci disclaimer personalizzato",
    confirmTitle: "Confermare per salvare?",
    confirmTip: "Le app che utilizzano questo strumento saranno influenzate",
    deleteToolConfirmTitle: "Eliminare questo Strumento?",
    deleteToolConfirmContent:
      "L'eliminazione dello Strumento è irreversibile. Gli utenti non potranno più accedere al tuo Strumento.",
  },
  test: {
    title: "Test",
    parametersValue: "Parametri & Valore",
    parameters: "Parametri",
    value: "Valore",
    testResult: "Risultati del Test",
    testResultPlaceholder: "I risultati del test verranno mostrati qui",
  },
  thought: {
    using: "Utilizzando",
    used: "Usato",
    requestTitle: "Richiesta a",
    responseTitle: "Risposta da",
  },
  setBuiltInTools: {
    info: "Info",
    setting: "Impostazione",
    toolDescription: "Descrizione dello strumento",
    parameters: "parametri",
    string: "stringa",
    number: "numero",
    required: "Richiesto",
    infoAndSetting: "Info & Impostazioni",
  },
  noCustomTool: {
    title: "Nessun strumento personalizzato!",
    content:
      "Aggiungi e gestisci i tuoi strumenti personalizzati qui per costruire app AI.",
    createTool: "Crea Strumento",
  },
  noSearchRes: {
    title: "Spiacenti, nessun risultato!",
    content:
      "Non abbiamo trovato strumenti che corrispondono alla tua ricerca.",
    reset: "Reimposta Ricerca",
  },
  builtInPromptTitle: "Prompt",
  toolRemoved: "Strumento rimosso",
  notAuthorized: "Strumento non autorizzato",
  howToGet: "Come ottenere",
  openInStudio: "Apri in Studio",
  toolNameUsageTip:
    "Nome chiamata strumento per il ragionamento e il prompting dell'agente",
};

export default translation;
