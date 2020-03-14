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
        // case "AIIA":
        //     pdfTMP = AIIATmp(req.body);
        //     break;
        case "Copart":
            pdfTMP = CopartTmp(req.body);
            break;
        // case "W8":
        //     pdfTMP = W8Tmp(req.body);
        //     break;
        // case "blue":
        //     pdfTMP = blue(req.body);
        //     break;
        // case "seaway":
        //     pdfTMP = seaway(req.body);
        //     break;

        default:
            pdfTMP = CopartTmp(req.body);
    }
    return pdfTMP;
};

// /api/invoice
router.post(
    '/invoice',
    async (request, result) => {
        try {
            const pdfTMP = getPdfTmp(request);
            pdf.create(pdfTMP, {}).toFile(path.join(__dirname, "../",`/pdfTemplates/result.pdf`), (err) => {
                if (err) {
                    console.log('pdf.create exception');
                    console.log(err);
                    result.send(Promise.reject());
                }
                result.sendFile(path.join(__dirname, "../",`/pdfTemplates/result.pdf`));
            });
        } catch (e) {
            console.log('invoice exception', e);
        }
    });

module.exports = router;