const {Router} = require("express");
const pdf = require('html-pdf');

const CopartTmp = require("../pdfTemplates/copart");
const GGTmp = require("../pdfTemplates/GG");
const AIIATmp = require("../pdfTemplates/IAAI");
const W8Tmp = require("../pdfTemplates/W8");

const router = Router();

const getPdfTmp = req => {
    let pdfTMP;
    switch (req.body.auction) {
        case "G&G":
            pdfTMP = GGTmp(req.body);
            break;
        case "AIIA":
            pdfTMP = AIIATmp(req.body);
            break;
        case "Copart":
            pdfTMP = CopartTmp(req.body);
            break;
        case "W8":
            pdfTMP = W8Tmp(req.body);
            break;
    }
    return pdfTMP;
};

// /api/invoice
router.post(
    '/invoice',
    async (req, res) => {
        try {
            const pdfTMP = getPdfTmp(req);
            pdf.create(pdfTMP, {}).toFile(`/pdfTemplates/result.pdf`, (err) => {
                if (err) {
                    res.send(Promise.reject());
                }
                res.sendFile(`/pdfTemplates/result.pdf`);
            });
        } catch (e) {
            console.error('pdf.create', e);
        }
    });

module.exports = router;