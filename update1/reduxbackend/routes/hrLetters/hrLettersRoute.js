const express = require("express");
const {
  hrLettersPdfCtrl,
  fetchAdressProofsCtrl,
  addUserDocumentsCtrl,
  fetchUsersDocumentsCtrl,
  deleteAddressProofCtrl,
} = require("../../controllers/hrLetters/hrLettersCtrl");
const { pdfUpload } = require("../../middlewares/uploads/pdfUpload");

const hrLettersRoute = express.Router();

hrLettersRoute.post("/", pdfUpload.single("adharPdf"), hrLettersPdfCtrl);
hrLettersRoute.post(
  "/userDocuments",
  pdfUpload.single("document"),
  addUserDocumentsCtrl
);
hrLettersRoute.get("/", fetchAdressProofsCtrl);
hrLettersRoute.get("/userDocuments", fetchUsersDocumentsCtrl);
hrLettersRoute.delete("/:id", deleteAddressProofCtrl);

module.exports = hrLettersRoute;
