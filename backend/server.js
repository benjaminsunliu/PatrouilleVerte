const express = require('express');
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const app = express();
const PORT = process.env.PORT || 5050;

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
const auth5 = new google.auth.GoogleAuth({
    keyFile: 'credentials5.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

let googleSheets1;
let googleSheets2;
let googleSheets3;
let googleSheets4;
let googleSheets5;
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
        if (!googleSheets5) {
            const client5 = await auth5.getClient();
            googleSheets5 = google.sheets({ version: 'v4', auth: client5 });
        }
        googleSheetsArray = [googleSheets1, googleSheets2, googleSheets3, googleSheets4, googleSheets5];
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


const ahcId = '1lEwGbfXF443vjZAU3csLxJgwvLTvKsPSm2sBdjD9HPc'; // Vrai ID
const beaId = '1P_f221HEY__s3taXSQ2zn6v1F3hHPzWj49FRGia0-EY'; // Vrai ID
const cdnId = '1tNDbZE0WhNvY9qOzuruXq8vlKynHtJ12-wxnc0pFpfc'; // Vrai ID
const dorId = '1rtuu2AWyVlsep3dm9v2KhFIc9aaiJhveb_rfzXzKnFo'; // Vrai ID
const mhmId = '1f95nzKVLPk7CIe45K34fkXGMrgBZ5LbWsKJsA1DY92w'; // Vrai ID
const lachId = '1SF8xca_TqaBwikEMGAyNSfcP7ziu2UKIhsW14TRbPzY'; // Vrai ID
const lasaId = '1LG7CVIpWvftAFBP8xz3ni8N1f_F60014OBCCCSuwr50'; // Vrai ID
const sudoId = '1XpXKtoMFvAOo3eh-qjUzlbUevFyxPxyLXzkHtNm0Zlg'; // Vrai ID
const mtlndId = '1ehJ_cTBXdF0AqPBO4B2JSGJcSw_GvlQHLUHHd_hVe-Q'; // Vrai ID
const outrId = '1V1kldMhtqJ_qZM4J9gY9giA08AsvUYjacDxGit_fZ-A'; // Vrai ID
const ptmcId = '141aoj1Y6d0D85YVkXHzGMHXIOoEcOYk_Kn44wyKe3es'; // Vrai ID
const proxId = '1zFSHCpeALLr44H2OL35lvjqQ3JK8Fke_j3O_LbbiqiQ'; // Vrai ID
const pmrId = '1JFFSMDH5qi9ngoAsUEcMR2pkJT8Q2ulZS8ytLJ5EFP4'; // Vrai ID
const rdpId = '1h_hikR4kIgDt3E4UIiPg-GuqyX0cvPEHKd5slbuMU5g'; // Vrai ID
const roseId = '1ho6VAiVYaBkrqIqbAOItk2Wqz94DjxGAJJT7UGkKzMQ'; // Vrai ID
const sleoId = '1EnDrCtuhCA8Nw1NyfUv2BfQTEypdgUZ3P8S5cvsH31o'; // Vrai ID
const stmarId = '17Xx4K50GvaIqXg4u488LW_h3Ly2OrSO4uq8KZz8iI90'; // Vrai ID
const verdId = '1ZYvCgbhcP0tyTvgmNY2A2-s-e80XLQQFt3tkSOeX7Q4'; // Vrai ID
const vmrId = '1FhZVVVw5xiF07Z3wZ4UCS0hAWtgQKUOWAiWg02Mkln8'; // Vrai ID
const smichId = '1XO67-SQ8QVFHaI6rPKNhj--LoZhLwB_IvRx2Om51DAw'; // Vrai ID
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

let EAUFormAHC = {};
let EAUFormBEA = {};
let EAUFormDOR = {};
let EAUFormMHM = {};
let EAUFormLACH = {};
let EAUFormLASA = {};
let EAUFormSUDO = {};
let EAUFormMTLND = {};
let EAUFormOUTR = {};
let EAUFormPTMC = {};
let EAUFormPROX = {};
let EAUFormPMR = {};
let EAUFormRDP = {};
let EAUFormROSE = {};
let EAUFormSLEO = {};
let EAUFormSTMAR = {};
let EAUFormVERD = {};
let EAUFormVMR = {};
let EAUFormSMICH = {};
let EAUFormNDG = {};
let EAUFormCDN = {};

let FORETFormAHC = {};
let FORETFormBEA = {};
let FORETFormDOR = {};
let FORETFormMHM = {};
let FORETFormLACH = {};
let FORETFormLASA = {};
let FORETFormSUDO = {};
let FORETFormMTLND = {};
let FORETFormOUTR = {};
let FORETFormPTMC = {};
let FORETFormPROX = {};
let FORETFormPMR = {};
let FORETFormRDP = {};
let FORETFormROSE = {};
let FORETFormSLEO = {};
let FORETFormSTMAR = {};
let FORETFormVERD = {};
let FORETFormVMR = {};
let FORETFormSMICH = {};
let FORETFormNDG = {};
let FORETFormCDN = {};


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
async function fetchFORETLabels(dropdownId) {
    const qtyRange = 'Forêt!B4:4';
    let foretLabels = [];
    try {
        const response = await googleSheets().spreadsheets.values.get({
            spreadsheetId: dropdownId,
            range: qtyRange,
        });

        if (response.data.values) {
            foretLabels = response.data.values.flat();
        } else {
            foretLabels = [];
        }
    } catch (err) {
        console.log(`No FORET labels found.`);
        foretLabels = [];
    }
    return foretLabels;
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
async function setFORETForm(dropdownId, FORETForm) {
    let dropdowns = await fetchDropdowns(dropdownId);
    let foretLabels = await fetchFORETLabels(dropdownId);

    for (let i = 0; i < foretLabels.length; i++) {
        const label = foretLabels[i];
        console.log(label);
        if (dropdowns.hasOwnProperty(label)) {
            FORETForm[label] = dropdowns[label];
        } else {
            FORETForm[label] = []; // Add the label with an empty array if there are no dropdown options
        }
    }
    return FORETForm;
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
app.get('/fetcheau', async (req, res) => {
    EAUFormAHC = await setEAUForm(ahcId, EAUFormAHC);
    setTimeout(() => {
        console.log('EAU form AHC set');
    }, 1000);
    EAUFormBEA = await setEAUForm(beaId, EAUFormBEA);
    setTimeout(() => {
        console.log('EAU form BEA set');
    }, 1000);
    EAUFormCDN = await setEAUForm(cdnId, EAUFormCDN);
    setTimeout(() => {
        console.log('EAU form CDN set');
    }, 1000);
    EAUFormDOR = await setEAUForm(dorId, EAUFormDOR);
    setTimeout(() => {
        console.log('EAU form DOR set');
    }, 1000);
    EAUFormMHM = await setEAUForm(mhmId, EAUFormMHM);
    setTimeout(() => {
        console.log('EAU form MHM set');
    }, 1000);
    EAUFormLACH = await setEAUForm(lachId, EAUFormLACH);
    setTimeout(() => {
        console.log('EAU form LACH set');
    }, 1000);
    EAUFormLASA = await setEAUForm(lasaId, EAUFormLASA);
    setTimeout(() => {
        console.log('EAU form LASA set');
    }, 1000);
    EAUFormSUDO = await setEAUForm(sudoId, EAUFormSUDO);
    setTimeout(() => {
        console.log('EAU form SUDO set');
    }, 1000);
    EAUFormMTLND = await setEAUForm(mtlndId, EAUFormMTLND);
    setTimeout(() => {
        console.log('EAU form MTLND set');
    }, 1000);
    EAUFormNDG = await setEAUForm(ndgId, EAUFormNDG);
    setTimeout(() => {
        console.log('EAU form NDG set');
    }, 1000);
    EAUFormOUTR = await setEAUForm(outrId, EAUFormOUTR);
    setTimeout(() => {
        console.log('EAU form OUTR set');
    }, 1000);
    EAUFormPTMC = await setEAUForm(ptmcId, EAUFormPTMC);
    setTimeout(() => {
        console.log('EAU form PTMC set');
    }, 1000);
    EAUFormPROX = await setEAUForm(proxId, EAUFormPROX);
    setTimeout(() => {
        console.log('EAU form PROX set');
    }, 1000);
    EAUFormPMR = await setEAUForm(pmrId, EAUFormPMR);
    setTimeout(() => {
        console.log('EAU form PMR set');
    }, 1000);
    EAUFormRDP = await setEAUForm(rdpId, EAUFormRDP);
    setTimeout(() => {
        console.log('EAU form RDP set');
    }, 1000);
    EAUFormROSE = await setEAUForm(roseId, EAUFormROSE);
    setTimeout(() => {
        console.log('EAU form ROSE set');
    }, 1000);
    EAUFormSLEO = await setEAUForm(sleoId, EAUFormSLEO);
    setTimeout(() => {
        console.log('EAU form SLEO set');
    }, 1000);
    EAUFormSTMAR = await setEAUForm(stmarId, EAUFormSTMAR);
    setTimeout(() => {
        console.log('EAU form STMAR set');
    }, 1000);
    EAUFormVERD = await setEAUForm(verdId, EAUFormVERD);
    setTimeout(() => {
        console.log('EAU form VERD set');
    }, 1000);
    EAUFormVMR = await setEAUForm(vmrId, EAUFormVMR);
    setTimeout(() => {
        console.log('EAU form VMR set');
    }, 1000);
    EAUFormSMICH = await setEAUForm(smichId, EAUFormSMICH);
    setTimeout(() => {
        console.log('EAU form SMICH set');
    }, 1000);
    res.send('EAU Data Fetched Successfully');
});
app.get('/fetchforet', async (req, res) => {
    FORETFormAHC = await setFORETForm(ahcId, FORETFormAHC);
    setTimeout(() => {
        console.log('FORET form AHC set');
    }, 1000);
    FORETFormBEA = await setFORETForm(beaId, FORETFormBEA);
    setTimeout(() => {
        console.log('FORET form BEA set');
    }, 1000);
    FORETFormCDN = await setFORETForm(cdnId, FORETFormCDN);
    setTimeout(() => {
        console.log('FORET form CDN set');
    }, 1000);
    FORETFormDOR = await setFORETForm(dorId, FORETFormDOR);
    setTimeout(() => {
        console.log('FORET form DOR set');
    }, 1000);
    FORETFormMHM = await setFORETForm(mhmId, FORETFormMHM);
    setTimeout(() => {
        console.log('FORET form MHM set');
    }, 1000);
    FORETFormLACH = await setFORETForm(lachId, FORETFormLACH);
    setTimeout(() => {
        console.log('FORET form LACH set');
    }, 1000);
    FORETFormLASA = await setFORETForm(lasaId, FORETFormLASA);
    setTimeout(() => {
        console.log('FORET form LASA set');
    }, 1000);
    FORETFormSUDO = await setFORETForm(sudoId, FORETFormSUDO);
    setTimeout(() => {
        console.log('FORET form SUDO set');
    }, 1000);
    FORETFormMTLND = await setFORETForm(mtlndId, FORETFormMTLND);
    setTimeout(() => {
        console.log('FORET form MTLND set');
    }, 1000);
    FORETFormNDG = await setFORETForm(ndgId, FORETFormNDG);
    setTimeout(() => {
        console.log('FORET form NDG set');
    }, 1000);
    FORETFormOUTR = await setFORETForm(outrId, FORETFormOUTR);
    setTimeout(() => {
        console.log('FORET form OUTR set');
    }, 1000);
    FORETFormPTMC = await setFORETForm(ptmcId, FORETFormPTMC);
    setTimeout(() => {
        console.log('FORET form PTMC set');
    }, 1000);
    FORETFormPROX = await setFORETForm(proxId, FORETFormPROX);
    setTimeout(() => {
        console.log('FORET form PROX set');
    }, 1000);
    FORETFormPMR = await setFORETForm(pmrId, FORETFormPMR);
    setTimeout(() => {
        console.log('FORET form PMR set');
    }, 1000);
    FORETFormRDP = await setFORETForm(rdpId, FORETFormRDP);
    setTimeout(() => {
        console.log('FORET form RDP set');
    }, 1000);
    FORETFormROSE = await setFORETForm(roseId, FORETFormROSE);
    setTimeout(() => {
        console.log('FORET form ROSE set');
    }, 1000);
    FORETFormSLEO = await setFORETForm(sleoId, FORETFormSLEO);
    setTimeout(() => {
        console.log('FORET form SLEO set');
    }, 1000);
    FORETFormSTMAR = await setFORETForm(stmarId, FORETFormSTMAR);
    setTimeout(() => {
        console.log('FORET form STMAR set');
    }, 1000);
    FORETFormVERD = await setFORETForm(verdId, FORETFormVERD);
    setTimeout(() => {
        console.log('FORET form VERD set');
    }, 1000);
    FORETFormVMR = await setFORETForm(vmrId, FORETFormVMR);
    setTimeout(() => {
        console.log('FORET form VMR set');
    }, 1000);
    FORETFormSMICH = await setFORETForm(smichId, FORETFormSMICH);
    setTimeout(() => {
        console.log('FORET form SMICH set');
    }, 1000);
    res.send('FORET Data Fetched Successfully');
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


// EAU Form Routes
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
app.get('/eaucdn', async (req, res) => {
    if (Object.keys(EAUFormCDN).length === 0) {
        EAUFormCDN = await setEAUForm(cdnId, EAUFormCDN);
    }
    res.send(EAUFormCDN);
});
app.get('/fetcheaucdn', async (req, res) => {
    EAUFormCDN = await setEAUForm(cdnId, EAUFormCDN);
    res.send(EAUFormCDN);
});
app.get('/eauahc', async (req, res) => {
    if (Object.keys(EAUFormAHC).length === 0) {
        EAUFormAHC = await setEAUForm(ahcId, EAUFormAHC);
    }
    res.send(EAUFormAHC);
}); 
app.get('/fetcheauahc', async (req, res) => {
    EAUFormAHC = await setEAUForm(ahcId, EAUFormAHC);
    res.send(EAUFormAHC);
});
app.get('/eaubea', async (req, res) => {
    if (Object.keys(EAUFormBEA).length === 0) {
        EAUFormBEA = await setEAUForm(beaId, EAUFormBEA);
    }   
    res.send(EAUFormBEA);
});
app.get('/fetcheaubea', async (req, res) => {
    EAUFormBEA = await setEAUForm(beaId, EAUFormBEA);
    res.send(EAUFormBEA);
});
app.get('/eaudor', async (req, res) => {
    if (Object.keys(EAUFormDOR).length === 0) {
        EAUFormDOR = await setEAUForm(dorId, EAUFormDOR);
    }
    res.send(EAUFormDOR);
});
app.get('/fetcheaudor', async (req, res) => {
    EAUFormDOR = await setEAUForm(dorId, EAUFormDOR);
    res.send(EAUFormDOR);
});
app.get('/eaumhm', async (req, res) => {
    if (Object.keys(EAUFormMHM).length === 0) {
        EAUFormMHM = await setEAUForm(mhmId, EAUFormMHM);
    }
    res.send(EAUFormMHM);
});
app.get('/fetcheaumhm', async (req, res) => {
    EAUFormMHM = await setEAUForm(mhmId, EAUFormMHM);
    res.send(EAUFormMHM);
});
app.get('/eaulach', async (req, res) => {
    if (Object.keys(EAUFormLACH).length === 0) {
        EAUFormLACH = await setEAUForm(lachId, EAUFormLACH);
    }
    res.send(EAUFormLACH);
});
app.get('/fetcheaulach', async (req, res) => {
    EAUFormLACH = await setEAUForm(lachId, EAUFormLACH);
    res.send(EAUFormLACH);
});
app.get('/eaulasa', async (req, res) => {
    if (Object.keys(EAUFormLASA).length === 0) {
        EAUFormLASA = await setEAUForm(lasaId, EAUFormLASA);
    }
    res.send(EAUFormLASA);
});
app.get('/fetcheaulasa', async (req, res) => {
    EAUFormLASA = await setEAUForm(lasaId, EAUFormLASA);
    res.send(EAUFormLASA);
});
app.get('/eausudo', async (req, res) => {
    if (Object.keys(EAUFormSUDO).length === 0) {
        EAUFormSUDO = await setEAUForm(sudoId, EAUFormSUDO);
    }
    res.send(EAUFormSUDO);
});
app.get('/fetcheausudo', async (req, res) => {
    EAUFormSUDO = await setEAUForm(sudoId, EAUFormSUDO);
    res.send(EAUFormSUDO);
});
app.get('/eaumtlnd', async (req, res) => {
    if (Object.keys(EAUFormMTLND).length === 0) {
        EAUFormMTLND = await setEAUForm(mtlndId, EAUFormMTLND);
    }
    res.send(EAUFormMTLND);
});
app.get('/fetcheaumtlnd', async (req, res) => {
    EAUFormMTLND = await setEAUForm(mtlndId, EAUFormMTLND);
    res.send(EAUFormMTLND);
});
app.get('/eauoutr', async (req, res) => {
    if (Object.keys(EAUFormOUTR).length === 0) {
        EAUFormOUTR = await setEAUForm(outrId, EAUFormOUTR);
    }
    res.send(EAUFormOUTR);
});
app.get('/fetcheauoutr', async (req, res) => {
    EAUFormOUTR = await setEAUForm(outrId, EAUFormOUTR);
    res.send(EAUFormOUTR);
});
app.get('/eauptmc', async (req, res) => {
    if (Object.keys(EAUFormPTMC).length === 0) {
        EAUFormPTMC = await setEAUForm(ptmcId, EAUFormPTMC);
    }
    res.send(EAUFormPTMC);
});
app.get('/fetcheauptmc', async (req, res) => {
    EAUFormPTMC = await setEAUForm(ptmcId, EAUFormPTMC);
    res.send(EAUFormPTMC);
});
app.get('/eauprox', async (req, res) => {
    if (Object.keys(EAUFormPROX).length === 0) {
        EAUFormPROX = await setEAUForm(proxId, EAUFormPROX);
    }
    res.send(EAUFormPROX);
});
app.get('/fetcheauprox', async (req, res) => {
    EAUFormPROX = await setEAUForm(proxId, EAUFormPROX);
    res.send(EAUFormPROX);
});
app.get('/eaupmr', async (req, res) => {
    if (Object.keys(EAUFormPMR).length === 0) {
        EAUFormPMR = await setEAUForm(pmrId, EAUFormPMR);
    }
    res.send(EAUFormPMR);
});
app.get('/fetcheaupmr', async (req, res) => {
    EAUFormPMR = await setEAUForm(pmrId, EAUFormPMR);
    res.send(EAUFormPMR);
});
app.get('/eaurdp', async (req, res) => {
    if (Object.keys(EAUFormRDP).length === 0) {
        EAUFormRDP = await setEAUForm(rdpId, EAUFormRDP);
    }
    res.send(EAUFormRDP);
});
app.get('/fetcheaurdp', async (req, res) => {
    EAUFormRDP = await setEAUForm(rdpId, EAUFormRDP);
    res.send(EAUFormRDP);
});
app.get('/eaurose', async (req, res) => {
    if (Object.keys(EAUFormROSE).length === 0) {
        EAUFormROSE = await setEAUForm(roseId, EAUFormROSE);
    }
    res.send(EAUFormROSE);
});
app.get('/fetcheaurose', async (req, res) => {
    EAUFormROSE = await setEAUForm(roseId, EAUFormROSE);
    res.send(EAUFormROSE);
});
app.get('/eausleo', async (req, res) => {
    if (Object.keys(EAUFormSLEO).length === 0) {
        EAUFormSLEO = await setEAUForm(sleoId, EAUFormSLEO);
    }
    res.send(EAUFormSLEO);
});
app.get('/fetcheausleo', async (req, res) => {
    EAUFormSLEO = await setEAUForm(sleoId, EAUFormSLEO);
    res.send(EAUFormSLEO);
});
app.get('/eaustmar', async (req, res) => {
    if (Object.keys(EAUFormSTMAR).length === 0) {
        EAUFormSTMAR = await setEAUForm(stmarId, EAUFormSTMAR);
    }
    res.send(EAUFormSTMAR);
});
app.get('/fetcheaustmar', async (req, res) => {
    EAUFormSTMAR = await setEAUForm(stmarId, EAUFormSTMAR);
    res.send(EAUFormSTMAR);
});
app.get('/eauverd', async (req, res) => {
    if (Object.keys(EAUFormVERD).length === 0) {
        EAUFormVERD = await setEAUForm(verdId, EAUFormVERD);
    }
    res.send(EAUFormVERD);
});
app.get('/fetcheauverd', async (req, res) => {
    EAUFormVERD = await setEAUForm(verdId, EAUFormVERD);
    res.send(EAUFormVERD);
});
app.get('/eauvmr', async (req, res) => {
    if (Object.keys(EAUFormVMR).length === 0) {
        EAUFormVMR = await setEAUForm(vmrId, EAUFormVMR);
    }
    res.send(EAUFormVMR);
});
app.get('/fetcheauvmr', async (req, res) => {
    EAUFormVMR = await setEAUForm(vmrId, EAUFormVMR);
    res.send(EAUFormVMR);
});
app.get('/eausmich', async (req, res) => {
    if (Object.keys(EAUFormSMICH).length === 0) {
        EAUFormSMICH = await setEAUForm(smichId, EAUFormSMICH);
    }
    res.send(EAUFormSMICH);
});
app.get('/fetcheausmich', async (req, res) => {
    EAUFormSMICH = await setEAUForm(smichId, EAUFormSMICH);
    res.send(EAUFormSMICH);
});

//FORET ROUTES
app.get('/foretndg', async (req, res) => {
    if (Object.keys(FORETFormNDG).length === 0) {
        FORETFormNDG = await setFORETForm(ndgId, FORETFormNDG);
    }
    res.send(FORETFormNDG);
});
app.get('/fetchforetndg', async (req, res) => {
    FORETFormNDG = await setFORETForm(ndgId, FORETFormNDG);
    res.send(FORETFormNDG);
});
app.get('/foretcdn', async (req, res) => {
    if (Object.keys(FORETFormCDN).length === 0) {
        FORETFormCDN = await setFORETForm(cdnId, FORETFormCDN);
    }
    res.send(FORETFormCDN);
});
app.get('/fetchforetcdn', async (req, res) => {
    FORETFormCDN = await setFORETForm(cdnId, FORETFormCDN);
    res.send(FORETFormCDN);
});
app.get('/foretahc', async (req, res) => {
    if (Object.keys(FORETFormAHC).length === 0) {
        FORETFormAHC = await setFORETForm(ahcId, FORETFormAHC);
    }
    res.send(FORETFormAHC);
});
app.get('/fetchforetahc', async (req, res) => {
    FORETFormAHC = await setFORETForm(ahcId, FORETFormAHC);
    res.send(FORETFormAHC);
});
app.get('/foretbea', async (req, res) => {
    if (Object.keys(FORETFormBEA).length === 0) {
        FORETFormBEA = await setFORETForm(beaId, FORETFormBEA);
    }
    res.send(FORETFormBEA);
});
app.get('/fetchforetbea', async (req, res) => {
    FORETFormBEA = await setFORETForm(beaId, FORETFormBEA);
    res.send(FORETFormBEA);
});
app.get('/foretdor', async (req, res) => {
    if (Object.keys(FORETFormDOR).length === 0) {
        FORETFormDOR = await setFORETForm(dorId, FORETFormDOR);
    }
    res.send(FORETFormDOR);
});
app.get('/fetchforetdor', async (req, res) => {
    FORETFormDOR = await setFORETForm(dorId, FORETFormDOR);
    res.send(FORETFormDOR);
});
app.get('/foretmhm', async (req, res) => {
    if (Object.keys(FORETFormMHM).length === 0) {
        FORETFormMHM = await setFORETForm(mhmId, FORETFormMHM);
    }
    res.send(FORETFormMHM);
});
app.get('/fetchforetmhm', async (req, res) => {
    FORETFormMHM = await setFORETForm(mhmId, FORETFormMHM);
    res.send(FORETFormMHM);
});
app.get('/foretlach', async (req, res) => {
    if (Object.keys(FORETFormLACH).length === 0) {
        FORETFormLACH = await setFORETForm(lachId, FORETFormLACH);
    }
    res.send(FORETFormLACH);
});
app.get('/fetchforetlach', async (req, res) => {
    FORETFormLACH = await setFORETForm(lachId, FORETFormLACH);
    res.send(FORETFormLACH);
});
app.get('/foretlasa', async (req, res) => {
    if (Object.keys(FORETFormLASA).length === 0) {
        FORETFormLASA = await setFORETForm(lasaId, FORETFormLASA);
    }
    res.send(FORETFormLASA);
});
app.get('/fetchforetlasa', async (req, res) => {
    FORETFormLASA = await setFORETForm(lasaId, FORETFormLASA);
    res.send(FORETFormLASA);
});
app.get('/foretsudo', async (req, res) => {
    if (Object.keys(FORETFormSUDO).length === 0) {
        FORETFormSUDO = await setFORETForm(sudoId, FORETFormSUDO);
    }
    res.send(FORETFormSUDO);
});
app.get('/fetchforetsudo', async (req, res) => {
    FORETFormSUDO = await setFORETForm(sudoId, FORETFormSUDO);
    res.send(FORETFormSUDO);
});
app.get('/foretmtlnd', async (req, res) => {
    if (Object.keys(FORETFormMTLND).length === 0) {
        FORETFormMTLND = await setFORETForm(mtlndId, FORETFormMTLND);
    }
    res.send(FORETFormMTLND);
});
app.get('/fetchforetmtlnd', async (req, res) => {
    FORETFormMTLND = await setFORETForm(mtlndId, FORETFormMTLND);
    res.send(FORETFormMTLND);
});
app.get('/foretoutr', async (req, res) => {
    if (Object.keys(FORETFormOUTR).length === 0) {
        FORETFormOUTR = await setFORETForm(outrId, FORETFormOUTR);
    }
    res.send(FORETFormOUTR);
});
app.get('/fetchforetoutr', async (req, res) => {
    FORETFormOUTR = await setFORETForm(outrId, FORETFormOUTR);
    res.send(FORETFormOUTR);
});
app.get('/foretptmc', async (req, res) => {
    if (Object.keys(FORETFormPTMC).length === 0) {
        FORETFormPTMC = await setFORETForm(ptmcId, FORETFormPTMC);
    }
    res.send(FORETFormPTMC);
});
app.get('/fetchforetptmc', async (req, res) => {
    FORETFormPTMC = await setFORETForm(ptmcId, FORETFormPTMC);
    res.send(FORETFormPTMC);
});
app.get('/foretprox', async (req, res) => {
    if (Object.keys(FORETFormPROX).length === 0) {
        FORETFormPROX = await setFORETForm(proxId, FORETFormPROX);
    }
    res.send(FORETFormPROX);
});
app.get('/fetchforetprox', async (req, res) => {
    FORETFormPROX = await setFORETForm(proxId, FORETFormPROX);
    res.send(FORETFormPROX);
});
app.get('/foretpmr', async (req, res) => {
    if (Object.keys(FORETFormPMR).length === 0) {
        FORETFormPMR = await setFORETForm(pmrId, FORETFormPMR);
    }
    res.send(FORETFormPMR);
});
app.get('/fetchforetpmr', async (req, res) => {
    FORETFormPMR = await setFORETForm(pmrId, FORETFormPMR);
    res.send(FORETFormPMR);
});
app.get('/foretrdp', async (req, res) => {
    if (Object.keys(FORETFormRDP).length === 0) {
        FORETFormRDP = await setFORETForm(rdpId, FORETFormRDP);
    }
    res.send(FORETFormRDP);
});
app.get('/fetchforetrdp', async (req, res) => {
    FORETFormRDP = await setFORETForm(rdpId, FORETFormRDP);
    res.send(FORETFormRDP);
});
app.get('/foretrose', async (req, res) => {
    if (Object.keys(FORETFormROSE).length === 0) {
        FORETFormROSE = await setFORETForm(roseId, FORETFormROSE);
    }
    res.send(FORETFormROSE);
});
app.get('/fetchforetrose', async (req, res) => {
    FORETFormROSE = await setFORETForm(roseId, FORETFormROSE);
    res.send(FORETFormROSE);
});
app.get('/foretsleo', async (req, res) => {
    if (Object.keys(FORETFormSLEO).length === 0) {
        FORETFormSLEO = await setFORETForm(sleoId, FORETFormSLEO);
    }
    res.send(FORETFormSLEO);
});
app.get('/fetchforetsleo', async (req, res) => {
    FORETFormSLEO = await setFORETForm(sleoId, FORETFormSLEO);
    res.send(FORETFormSLEO);
});
app.get('/foretstmar', async (req, res) => {
    if (Object.keys(FORETFormSTMAR).length === 0) {
        FORETFormSTMAR = await setFORETForm(stmarId, FORETFormSTMAR);
    }
    res.send(FORETFormSTMAR);
});
app.get('/fetchforetstmar', async (req, res) => {
    FORETFormSTMAR = await setFORETForm(stmarId, FORETFormSTMAR);
    res.send(FORETFormSTMAR);
});
app.get('/foretverd', async (req, res) => {
    if (Object.keys(FORETFormVERD).length === 0) {
        FORETFormVERD = await setFORETForm(verdId, FORETFormVERD);
    }
    res.send(FORETFormVERD);
});
app.get('/fetchforetverd', async (req, res) => {
    FORETFormVERD = await setFORETForm(verdId, FORETFormVERD);
    res.send(FORETFormVERD);
});
app.get('/foretvmr', async (req, res) => {
    if (Object.keys(FORETFormVMR).length === 0) {
        FORETFormVMR = await setFORETForm(vmrId, FORETFormVMR);
    }
    res.send(FORETFormVMR);
});
app.get('/fetchforetvmr', async (req, res) => {
    FORETFormVMR = await setFORETForm(vmrId, FORETFormVMR);
    res.send(FORETFormVMR);
});
app.get('/foretsmich', async (req, res) => {
    if (Object.keys(FORETFormSMICH).length === 0) {
        FORETFormSMICH = await setFORETForm(smichId, FORETFormSMICH);
    }
    res.send(FORETFormSMICH);
});
app.get('/fetchforetsmich', async (req, res) => {
    FORETFormSMICH = await setFORETForm(smichId, FORETFormSMICH);
    res.send(FORETFormSMICH);
});




// GMR POST ROUTES
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

// EAU POST ROUTES
app.post('/eauahc', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaubea', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaucdn', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaudor', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaumhm', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaulach', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaulasa', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eausudo', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaumtlnd', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaundg', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eauoutr', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eauptmc', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eauprox', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaupmr', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaurdp', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaurose', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eausleo', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eaustmar', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eauverd', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eauvmr', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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
app.post('/eausmich', async (req, res) => {
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
                range: 'EAU', // Specify the sheet name
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


// FORET POST ROUTES
app.post('/foretahc', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretbea', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretcdn', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretdor', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretmhm', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretlach', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretlasa', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretsudo', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretmtlnd', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretndg', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretoutr', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretptmc', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretprox', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretpmr', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretrdp', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretrose', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretsleo', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretstmar', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretverd', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretvmr', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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
app.post('/foretsmich', async (req, res) => {
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
                range: 'Forêt', // Specify the sheet name
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