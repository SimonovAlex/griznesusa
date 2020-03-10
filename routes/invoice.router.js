const {Router} = require("express");
const path = require("path");
const pdf = require('html-pdf');

const CopartTmp = require(path.join(__dirname, "../pdfTemplates/copart"));
const GGTmp = require(path.join(__dirname, "../pdfTemplates/GG"));
const AIIATmp = require(path.join(__dirname, "../pdfTemplates/IAAI"));
const W8Tmp = require(path.join(__dirname, "../pdfTemplates/W8"));
const blue = require(path.join(__dirname, "../pdfTemplates/blue"));
const seaway = require(path.join(__dirname, "../pdfTemplates/saeway"));

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
        case "blue":
            pdfTMP = blue(req.body);
            break;
           case "seaway":
            pdfTMP = seaway(req.body);
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
            pdf.create(pdfTMP, {}).toFile(path.join(__dirname, "../",`/pdfTemplates/result.pdf`), (err) => {
                if (err) {
                    res.send(Promise.reject());
                }
                res.sendFile(path.join(__dirname, "../",`/pdfTemplates/result.pdf`));
            });
        } catch (e) {
            console.error('pdf.create', e);
        }
    });

module.exports = router;