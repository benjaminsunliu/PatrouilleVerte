const express = require('express');
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const app = express();
const PORT = 5050;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const auth2 = new google.auth.GoogleAuth({
    keyFile: 'credentials2.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const auth3 = new google.auth.GoogleAuth({
    keyFile: 'credentials3.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const auth4 = new google.auth.GoogleAuth({
    keyFile: 'credentials4.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

let googleSheets1;
let googleSheets2;
let googleSheets3;
let googleSheets4;
let googleSheetsArray = [];
let rotationCounter = 0;

// Middleware to initialize Google Sheets API clients
app.use(async (req, res, next) => {
    try {
        if (!googleSheets1) {
            const client1 = await auth.getClient();
            googleSheets1 = google.sheets({ version: 'v4', auth: client1 });
        }
        if (!googleSheets2) {
            const client2 = await auth2.getClient();
            googleSheets2 = google.sheets({ version: 'v4', auth: client2 });
        }
        if (!googleSheets3) {
            const client3 = await auth3.getClient();
            googleSheets3 = google.sheets({ version: 'v4', auth: client3 });
        }
        if (!googleSheets4) {
            const client4 = await auth4.getClient();
            googleSheets4 = google.sheets({ version: 'v4', auth: client4 });
        }

        googleSheetsArray = [googleSheets1, googleSheets2, googleSheets3, googleSheets4];
        next();
    } catch (error) {
        console.error('Error initializing Google Sheets API clients:', error);
        res.status(500).send('An error occurred while initializing Google Sheets API clients.');
    }
});

// Function to get the next Google Sheets client
function googleSheets() {
    const client = googleSheetsArray[rotationCounter % googleSheetsArray.length];
    console.log(`Using client index: ${rotationCounter % googleSheetsArray.length}`);
    rotationCounter++;
    return client;
}


const ahcId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const beaId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const cdnId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const dorId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const mhmId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const lachId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const lasaId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const sudoId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const mtlndId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const outrId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const ptmcId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const proxId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const pmrId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const rdpId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const roseId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const sleoId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const stmarId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const verdId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const vmrId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const smichId = '1pVILuNaT8gsWheXzfC-leegVQ9McYAF4a1Ae1tfkz8g';
const ndgId = '19yoHzR_EIHM33l1IVC2nI3K33PTHLEgvr35nHawthIs'; // Vrai ID 

let GMRFormAHC = {};
let GMRFormBEA = {};
let GMRFormDOR = {};
let GMRFormMHM = {};
let GMRFormLACH = {};
let GMRFormLASA = {};
let GMRFormSUDO = {};
let GMRFormMTLND = {};
let GMRFormOUTR = {};
let GMRFormPTMC = {};
let GMRFormPROX = {};
let GMRFormPMR = {};
let GMRFormRDP = {};
let GMRFormROSE = {};
let GMRFormSLEO = {};
let GMRFormSTMAR = {};
let GMRFormVERD = {};
let GMRFormVMR = {};
let GMRFormSMICH = {};
let GMRFormNDG = {};
let GMRFormCDN = {};

let EAUFormNDG = {};


async function fetchDropdowns(dropdownId) {
    const qtyRange = 'Listes Déroulantes!2:2';
    let dropdowns = {};
    let dropdownLabels = [];
    try {
        const response = await googleSheets().spreadsheets.values.get({
            spreadsheetId: dropdownId,
            range: qtyRange,
        });

        if (response.data.values) {
            dropdownLabels = response.data.values.flat();
        } else {
            dropdownLabels = [];
        }
    } catch (err) {
        console.log(`No dropdown options found.`);
        dropdownLabels = [];
    }

    for (let i = 0; i < dropdownLabels.length; i++) {
        const range = `Listes Déroulantes!${String.fromCharCode(65 + i)}3:${String.fromCharCode(65 + i)}`;
        const label = dropdownLabels[i];
        try {
            const response = await googleSheets().spreadsheets.values.get({
                spreadsheetId: dropdownId,
                range: range,
            });

            if (response.data.values) {
                dropdowns[label] = response.data.values.flat();
            } else {
                dropdowns[label] = [];
            }
        } catch (err) {
            console.log(`No dropdown options found for label: ${label}`);
            dropdowns[label] = [];
        }
    }
    return dropdowns;
}
async function fetchGMRLabels(dropdownId) {
    const qtyRange = 'GMR!B4:4';
    let gmrLabels = [];
    try {
        const response = await googleSheets().spreadsheets.values.get({
            spreadsheetId: dropdownId,
            range: qtyRange,
        });

        if (response.data.values) {
            gmrLabels = response.data.values.flat();
        } else {
            gmrLabels = [];
        }
    } catch (err) {
        console.log(`No GMR labels found.`);
        gmrLabels = [];
    }
    return gmrLabels;
}
async function setGMRForm(dropdownId, GMRForm) {
    let dropdowns = await fetchDropdowns(dropdownId);
    let gmrLabels = await fetchGMRLabels(dropdownId);

    for (let i = 0; i < gmrLabels.length; i++) {
        const label = gmrLabels[i];
        console.log(label);
        if (dropdowns.hasOwnProperty(label)) {
            GMRForm[label] = dropdowns[label];
        } else {
            GMRForm[label] = []; // Add the label with an empty array if there are no dropdown options
        }
    }
    return GMRForm;
}
async function fetchEAULabels(dropdownId) {
    const qtyRange = 'EAU!B4:4';
    let eauLabels = [];
    try {
        const response = await googleSheets().spreadsheets.values.get({
            spreadsheetId: dropdownId,
            range: qtyRange,
        });

        if (response.data.values) {
            eauLabels = response.data.values.flat();
        } else {
            eauLabels = [];
        }
    } catch (err) {
        console.log(`No EAU labels found.`);
        eauLabels = [];
    }
    return eauLabels;
}
async function setEAUForm(dropdownId, EAUForm) {
    let dropdowns = await fetchDropdowns(dropdownId);
    let eauLabels = await fetchEAULabels(dropdownId);

    for (let i = 0; i < eauLabels.length; i++) {
        const label = eauLabels[i];
        console.log(label);
        if (dropdowns.hasOwnProperty(label)) {
            EAUForm[label] = dropdowns[label];
        } else {
            EAUForm[label] = []; // Add the label with an empty array if there are no dropdown options
        }
    }
    return EAUForm;
}

app.get('/', async (req, res) => {
    GMRFormAHC = await setGMRForm(ahcId, GMRFormAHC);
    setTimeout(() => {
        console.log('GMR form AHC set');
    }, 1000);
    GMRFormBEA = await setGMRForm(beaId, GMRFormBEA);
    setTimeout(() => {
        console.log('GMR form BEA set');
    }, 1000);
    GMRFormDOR = await setGMRForm(dorId, GMRFormDOR);
    setTimeout(() => {
        console.log('GMR form DOR set');
    }, 1000);
    GMRFormMHM = await setGMRForm(mhmId, GMRFormMHM);
    setTimeout(() => {
        console.log('GMR form MHM set');
    }, 1000);
    GMRFormLACH = await setGMRForm(lachId, GMRFormLACH);
    setTimeout(() => {
        console.log('GMR form LACH set');
    }, 1000);
    GMRFormLASA = await setGMRForm(lasaId, GMRFormLASA);
    setTimeout(() => {
        console.log('GMR form LASA set');
    }, 1000);
    GMRFormSUDO = await setGMRForm(sudoId, GMRFormSUDO);
    setTimeout(() => {
        console.log('GMR form SUDO set');
    }, 1000);
    GMRFormMTLND = await setGMRForm(mtlndId, GMRFormMTLND);
    setTimeout(() => {
        console.log('GMR form MTLND set');
    }, 1000);
    GMRFormOUTR = await setGMRForm(outrId, GMRFormOUTR);
    setTimeout(() => {
        console.log('GMR form OUTR set');
    }, 1000);
    GMRFormPTMC = await setGMRForm(ptmcId, GMRFormPTMC);
    setTimeout(() => {
        console.log('GMR form PTMC set');
    }, 1000);
    GMRFormPROX = await setGMRForm(proxId, GMRFormPROX);
    setTimeout(() => {
        console.log('GMR form PROX set');
    }, 1000);
    GMRFormPMR = await setGMRForm(pmrId, GMRFormPMR);
    setTimeout(() => {
        console.log('GMR form PMR set');
    }, 1000);
    GMRFormRDP = await setGMRForm(rdpId, GMRFormRDP);
    setTimeout(() => {
        console.log('GMR form RDP set');
    }, 1000);
    GMRFormROSE = await setGMRForm(roseId, GMRFormROSE);
    setTimeout(() => {
        console.log('GMR form ROSE set');
    }, 1000);
    GMRFormSLEO = await setGMRForm(sleoId, GMRFormSLEO);
    setTimeout(() => {
        console.log('GMR form SLEO set');
    }, 1000);
    GMRFormSTMAR = await setGMRForm(stmarId, GMRFormSTMAR);
    setTimeout(() => {
        console.log('GMR form STMAR set');
    }, 1000);
    GMRFormVERD = await setGMRForm(verdId, GMRFormVERD);
    setTimeout(() => {
        console.log('GMR form VERD set');
    }, 1000);
    GMRFormVMR = await setGMRForm(vmrId, GMRFormVMR);
    setTimeout(() => {
        console.log('GMR form VMR set');
    }, 1000);
    GMRFormSMICH = await setGMRForm(smichId, GMRFormSMICH);
    setTimeout(() => {
        console.log('GMR form SMICH set');
    }, 1000);
    GMRFormNDG = await setGMRForm(ndgId, GMRFormNDG);
    setTimeout(() => { 
        console.log('GMR form NDG set');
    }, 1000);
    GMRFormCDN = await setGMRForm(cdnId, GMRFormCDN);
    setTimeout(() => {
        console.log('GMR form CDN set');
    }, 1000);
    res.send({ message: 'Data fetched successfully' });
});


app.get('/fetchgmr', async (req, res) => {
    GMRFormAHC = await setGMRForm(ahcId, GMRFormAHC);
    setTimeout(() => {
        console.log('GMR form AHC set');
    }, 1000);
    GMRFormBEA = await setGMRForm(beaId, GMRFormBEA);
    setTimeout(() => {
        console.log('GMR form BEA set');
    }, 1000);
    GMRFormDOR = await setGMRForm(dorId, GMRFormDOR);
    setTimeout(() => {
        console.log('GMR form DOR set');
    }, 1000);
    GMRFormMHM = await setGMRForm(mhmId, GMRFormMHM);
    setTimeout(() => {
        console.log('GMR form MHM set');
    }, 1000);
    GMRFormLACH = await setGMRForm(lachId, GMRFormLACH);
    setTimeout(() => {
        console.log('GMR form LACH set');
    }, 1000);
    GMRFormLASA = await setGMRForm(lasaId, GMRFormLASA);
    setTimeout(() => {
        console.log('GMR form LASA set');
    }, 1000);
    GMRFormSUDO = await setGMRForm(sudoId, GMRFormSUDO);
    setTimeout(() => {
        console.log('GMR form SUDO set');
    }, 1000);
    GMRFormMTLND = await setGMRForm(mtlndId, GMRFormMTLND);
    setTimeout(() => {
        console.log('GMR form MTLND set');
    }, 1000);
    GMRFormOUTR = await setGMRForm(outrId, GMRFormOUTR);
    setTimeout(() => {
        console.log('GMR form OUTR set');
    }, 1000);
    GMRFormPTMC = await setGMRForm(ptmcId, GMRFormPTMC);
    setTimeout(() => {
        console.log('GMR form PTMC set');
    }, 1000);
    GMRFormPROX = await setGMRForm(proxId, GMRFormPROX);
    setTimeout(() => {
        console.log('GMR form PROX set');
    }, 1000);
    GMRFormPMR = await setGMRForm(pmrId, GMRFormPMR);
    setTimeout(() => {
        console.log('GMR form PMR set');
    }, 1000);
    GMRFormRDP = await setGMRForm(rdpId, GMRFormRDP);
    setTimeout(() => {
        console.log('GMR form RDP set');
    }, 1000);
    GMRFormROSE = await setGMRForm(roseId, GMRFormROSE);
    setTimeout(() => {
        console.log('GMR form ROSE set');
    }, 1000);
    GMRFormSLEO = await setGMRForm(sleoId, GMRFormSLEO);
    setTimeout(() => {
        console.log('GMR form SLEO set');
    }, 1000);
    GMRFormSTMAR = await setGMRForm(stmarId, GMRFormSTMAR);
    setTimeout(() => {
        console.log('GMR form STMAR set');
    }, 1000);
    GMRFormVERD = await setGMRForm(verdId, GMRFormVERD);
    setTimeout(() => {
        console.log('GMR form VERD set');
    }, 1000);
    GMRFormVMR = await setGMRForm(vmrId, GMRFormVMR);
    setTimeout(() => {
        console.log('GMR form VMR set');
    }, 1000);
    GMRFormSMICH = await setGMRForm(smichId, GMRFormSMICH);
    setTimeout(() => {
        console.log('GMR form SMICH set');
    }, 1000);
    GMRFormNDG = await setGMRForm(ndgId, GMRFormNDG);
    setTimeout(() => { 
        console.log('GMR form NDG set');
    }, 1000);
    GMRFormCDN = await setGMRForm(cdnId, GMRFormCDN);
    setTimeout(() => {
        console.log('GMR form CDN set');
    }, 1000);
    res.send({ message: 'GMR Data fetched successfully' });
});

// GMR Form Routes
app.get('/gmrndg', async (req, res) => {
    if (Object.keys(GMRFormNDG).length === 0) {
        GMRFormNDG = await setGMRForm(ndgId, GMRFormNDG);
    }
    res.send(GMRFormNDG);
});
app.get('/fetchgmrndg', async (req, res) => {
    GMRFormNDG = await setGMRForm(ndgId, GMRFormNDG);
    res.send(GMRFormNDG);
});
app.get('/gmrcdn', async (req, res) => {
    if (Object.keys(GMRFormCDN).length === 0) {
        GMRFormCDN = await setGMRForm(cdnId, GMRFormCDN);
    }
    res.send(GMRFormCDN);
});
app.get('/fetchgmrcdn', async (req, res) => {
    GMRFormCDN = await setGMRForm(cdnId, GMRFormCDN);
    res.send(GMRFormCDN);
});
app.get('/gmrahc', async (req, res) => {
    if (Object.keys(GMRFormAHC).length === 0) {
        GMRFormAHC = await setGMRForm(ahcId, GMRFormAHC);
    }
    res.send(GMRFormAHC);
});
app.get('/fetchgmrahc', async (req, res) => {
    GMRFormAHC = await setGMRForm(ahcId, GMRFormAHC);
    res.send(GMRFormAHC);
});
app.get('/gmrbea', async (req, res) => {
    if (Object.keys(GMRFormBEA).length === 0) {
        GMRFormBEA = await setGMRForm(beaId, GMRFormBEA);
    }
    res.send(GMRFormBEA);
});
app.get('/fetchgmrbea', async (req, res) => {
    GMRFormBEA = await setGMRForm(beaId, GMRFormBEA);
    res.send(GMRFormBEA);
});
app.get('/gmrdor', async (req, res) => {
    if (Object.keys(GMRFormDOR).length === 0) {
        GMRFormDOR = await setGMRForm(dorId, GMRFormDOR);
    }
    res.send(GMRFormDOR);
});
app.get('/fetchgmrdor', async (req, res) => {
    GMRFormDOR = await setGMRForm(dorId, GMRFormDOR);
    res.send(GMRFormDOR);
});
app.get('/gmrmhm', async (req, res) => {
    if (Object.keys(GMRFormMHM).length === 0) {
        GMRFormMHM = await setGMRForm(mhmId, GMRFormMHM);
    }
    res.send(GMRFormMHM);
});
app.get('/fetchgmrmhm', async (req, res) => {
    GMRFormMHM = await setGMRForm(mhmId, GMRFormMHM);
    res.send(GMRFormMHM);
});
app.get('/gmrlach', async (req, res) => {
    if (Object.keys(GMRFormLACH).length === 0) {
        GMRFormLACH = await setGMRForm(lachId, GMRFormLACH);
    }
    res.send(GMRFormLACH);
});
app.get('/fetchgmrlach', async (req, res) => {
    GMRFormLACH = await setGMRForm(lachId, GMRFormLACH);
    res.send(GMRFormLACH);
});
app.get('/gmrlasa', async (req, res) => {
    if (Object.keys(GMRFormLASA).length === 0) {
        GMRFormLASA = await setGMRForm(lasaId, GMRFormLASA);
    }
    res.send(GMRFormLASA);
});
app.get('/fetchgmrlasa', async (req, res) => {
    GMRFormLASA = await setGMRForm(lasaId, GMRFormLASA);
    res.send(GMRFormLASA);
});
app.get('/gmrsudo', async (req, res) => {
    if (Object.keys(GMRFormSUDO).length === 0) {
        GMRFormSUDO = await setGMRForm(sudoId, GMRFormSUDO);
    }
    res.send(GMRFormSUDO);
});
app.get('/fetchgmrsudo', async (req, res) => {
    GMRFormSUDO = await setGMRForm(sudoId, GMRFormSUDO);
    res.send(GMRFormSUDO);
});
app.get('/gmrmtlnd', async (req, res) => {
    if (Object.keys(GMRFormMTLND).length === 0) {
        GMRFormMTLND = await setGMRForm(mtlndId, GMRFormMTLND);
    }
    res.send(GMRFormMTLND);
});
app.get('/fetchgmrmtlnd', async (req, res) => {
    GMRFormMTLND = await setGMRForm(mtlndId, GMRFormMTLND);
    res.send(GMRFormMTLND);
});
app.get('/fetchgmrmtlnd', async (req, res) => {
    GMRFormMTLND = await setGMRForm(mtlndId, GMRFormMTLND);
    res.send(GMRFormMTLND);
});
app.get('/gmroutr', async (req, res) => {
    if (Object.keys(GMRFormOUTR).length === 0) {
        GMRFormOUTR = await setGMRForm(outrId, GMRFormOUTR);
    }
    res.send(GMRFormOUTR);
});
app.get('/fetchgmroutr', async (req, res) => {
    GMRFormOUTR = await setGMRForm(outrId, GMRFormOUTR);
    res.send(GMRFormOUTR);
});
app.get('/gmrpmr', async (req, res) => {
    if (Object.keys(GMRFormPMR).length === 0) {
        GMRFormPMR = await setGMRForm(pmrId, GMRFormPMR);
    }
    res.send(GMRFormPMR);
});
app.get('/fetchgmrpmr', async (req, res) => {
    GMRFormPMR = await setGMRForm(pmrId, GMRFormPMR);
    res.send(GMRFormPMR);
});
app.get('/gmrrdp', async (req, res) => {
    if (Object.keys(GMRFormRDP).length === 0) {
        GMRFormRDP = await setGMRForm(rdpId, GMRFormRDP);
    }
    res.send(GMRFormRDP);
});
app.get('/fetchgmrrdp', async (req, res) => {
    GMRFormRDP = await setGMRForm(rdpId, GMRFormRDP);
    res.send(GMRFormRDP);
});
app.get('/gmrsleo', async (req, res) => {
    if (Object.keys(GMRFormSLEO).length === 0) {
        GMRFormSLEO = await setGMRForm(sleoId, GMRFormSLEO);
    }
    res.send(GMRFormSLEO);
});
app.get('/fetchgmrsleo', async (req, res) => {
    GMRFormSLEO = await setGMRForm(sleoId, GMRFormSLEO);
    res.send(GMRFormSLEO);
});
app.get('/gmrstmar', async (req, res) => {
    if (Object.keys(GMRFormSTMAR).length === 0) {
        GMRFormSTMAR = await setGMRForm(stmarId, GMRFormSTMAR);
    }
    res.send(GMRFormSTMAR);
});
app.get('/fetchgmrstmar', async (req, res) => {
    GMRFormSTMAR = await setGMRForm(stmarId, GMRFormSTMAR);
    res.send(GMRFormSTMAR);
});
app.get('/gmrverd', async (req, res) => {
    if (Object.keys(GMRFormVERD).length === 0) {
        GMRFormVERD = await setGMRForm(verdId, GMRFormVERD);
    }
    res.send(GMRFormVERD);
});
app.get('/fetchgmrverd', async (req, res) => {
    GMRFormVERD = await setGMRForm(verdId, GMRFormVERD);
    res.send(GMRFormVERD);
});
app.get('/gmrvmr', async (req, res) => {
    if (Object.keys(GMRFormVMR).length === 0) {
        GMRFormVMR = await setGMRForm(vmrId, GMRFormVMR);
    }
    res.send(GMRFormVMR);
});
app.get('/fetchgmrvmr', async (req, res) => {
    GMRFormVMR = await setGMRForm(vmrId, GMRFormVMR);
    res.send(GMRFormVMR);
});
app.get('/gmrsmich', async (req, res) => {
    if (Object.keys(GMRFormSMICH).length === 0) {
        GMRFormSMICH = await setGMRForm(smichId, GMRFormSMICH);
    }
    res.send(GMRFormSMICH);
});
app.get('/fetchgmrsmich', async (req, res) => {
    GMRFormSMICH = await setGMRForm(smichId, GMRFormSMICH);
    res.send(GMRFormSMICH);
});
app.get('/gmrptmc', async (req, res) => {
    if (Object.keys(GMRFormPTMC).length === 0) {
        GMRFormPTMC = await setGMRForm(ptmcId, GMRFormPTMC);
    }
    res.send(GMRFormPTMC);
});
app.get('/fetchgmrptmc', async (req, res) => {
    GMRFormPTMC = await setGMRForm(ptmcId, GMRFormPTMC);
    res.send(GMRFormPTMC);
});
app.get('/gmrprox', async (req, res) => {
    if (Object.keys(GMRFormPROX).length === 0) {
        GMRFormPROX = await setGMRForm(proxId, GMRFormPROX);
    }
    res.send(GMRFormPROX);
});
app.get('/fetchgmrprox', async (req, res) => {
    GMRFormPROX = await setGMRForm(proxId, GMRFormPROX);
    res.send(GMRFormPROX);
});
app.get('/gmrrose', async (req, res) => {
    if (Object.keys(GMRFormROSE).length === 0) {
        GMRFormROSE = await setGMRForm(roseId, GMRFormROSE);
    }
    res.send(GMRFormROSE);
});
app.get('/fetchgmrrose', async (req, res) => {
    GMRFormROSE = await setGMRForm(roseId, GMRFormROSE);
    res.send(GMRFormROSE);
});

app.get('/eaundg', async (req, res) => {
    if (Object.keys(EAUFormNDG).length === 0) {
        EAUFormNDG = await setEAUForm(ndgId, EAUFormNDG);
    }
    res.send(EAUFormNDG);
});
app.get('/fetcheaundg', async (req, res) => {
    EAUFormNDG = await setEAUForm(ndgId, EAUFormNDG);
    res.send(EAUFormNDG);
})





app.post('/gmrahc', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: ahcId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrbea', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: beaId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrdor', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: dorId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrmhm', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: mhmId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrlach', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: lachId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrlasa', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: lasaId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrsudo', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: sudoId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrmtlnd', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: mtlndId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmroutr', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: outrId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrptmc', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: ptmcId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrprox', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: proxId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrpmr', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: pmrId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrrdp', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: rdpId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrrose', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: roseId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrsleo', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: sleoId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrstmar', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: stmarId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrverd', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: verdId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrvmr', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: vmrId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrsmich', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: smichId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrndg', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: ndgId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});
app.post('/gmrcdn', async (req, res) => {
    // req.body contains all submitted form data
    const formData = req.body;
    let values = [];

    // Collect form data into a single row array
    const row = [];
    Object.entries(formData).forEach(([key, value]) => {
        row.push(value);
    });

    // Add the row to values array
    values.push(row);

    try {
        await googleSheets().spreadsheets.values.append(
            {
                spreadsheetId: cdnId,
                range: 'GMR', // Specify the sheet name
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: values,
                },
            }
        );

        res.send('Data appended successfully.');
    } catch (error) {
        console.error('Error appending data to sheet:', error);
        res.status(500).send('An error occurred while appending data to the sheet.');
    }
});





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));