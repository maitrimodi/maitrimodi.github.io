(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Resume/resume.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Resume/resume.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <div *ngFor=\"let employer of employerData\">\n    <p>Company Name: {{employer.company_name}}</p>\n    <p>Company Location: {{employer.company_location}}</p>\n</div> -->\n\n<!-- <p id=\"abc\">employer works!</p> -->\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"row\">\n          <div class=\"col-lg-2 col-md-2\">\n                <qrcode [qrdata]=\"candidateData?._id\" [width]=\"150\" [errorCorrectionLevel]=\"'M'\" [elementType]=\"'svg'\"></qrcode>\n          </div>\n          <div class=\"col-lg-10 col-md-10\">\n              <h3>{{candidateData?.first_name}} {{candidateData?.last_name}}</h3>\n              <h4>Email: <strong>{{candidateData?.email}}</strong></h4>\n              <h4>Conatct: <strong>{{candidateData?.phone_number}}</strong></h4>\n          </div>\n           <div class=\"col-lg-12 col-md-12\">\n              <p class=\"bio\">I am a developer and I don't know many programming languages.</p>\n           </div>\n            <div class=\"col-lg-2 col-md-2\">\n                <h4 class=\"bio\"><strong>Skills</strong></h4>\n                <ul>\n                  <!-- <li *ngFor=\"let skill of candidateData.skills\">{{skill}}</li> -->\n                  <li>HTML</li> \n                  <li>CSS</li>\n                  <li>JavaScript</li>\n                  <li>TypeScript</li>\n                </ul>\n          </div>\n          <div class=\"col-lg-10 col-md-10\">\n            <h4 class=\"bio\"><strong>Experience</strong></h4>\n            <ul>\n              <li>\n                <h5>Jr. Web & Movile Application Developer</h5>\n                <p>BiztechCS (Dec 2017 - Jun 2019)</p>\n              </li>\n              <li>\n                <h5>Jr. Web & Movile Application Developer</h5>\n                <p>BiztechCS (Dec 2017 - Jun 2019)</p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-2 col-md-2\"></div>\n          <div class=\"col-lg-10 col-md-10\">\n            <h4 class=\"bio\"><strong>Education</strong></h4>\n            <ul>\n              <li>\n                <h5>Master of Computer Applications</h5>\n                <p>Gujarat Technological Universiry (June 2018)</p>\n              </li>\n              <li>\n                <h5>Bachelor of Computer Applications</h5>\n                <p>Gujarat Technological Universiry (June 2016)</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/addassessment/addassessment.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/addassessment/addassessment.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Add Assessment</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n                            <div class=\"row margintop\">\n                                <div class=\"col-md-2\">Title</div>\n                                <div class=\"col-md-6\">\n                                    <input formControlName=\"title\" placeholder=\"Title\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">Description</div>\n                                <div class=\"col-md-6\">\n                                    <textarea formControlName=\"description\"\n                                        placeholder=\"Description of the Assessment.\"></textarea>\n                                    <!-- <div class=\"form-group\">\n  \n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                            <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                        </div>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"row margintop\">\n                                <div class=\"col-md-6\">\n                                <input formControlName=\"additional_files\" type=\"file\" ng2FileSelect accept=\".pdf\"\n                                    [uploader]=\"uploader\" multiple /></div>\n                            </div>\n                            <!-- <div class=\"drop-zone\">\n                                <div ng2FileDrop (click)=\"fileinput.click()\" [uploader]=\"uploader\" class=\"drop-zone\">\n                                    Drag and drop files to upload\n                                </div>\n                            </div> -->\n                            <table>\n                                <thead>\n                                    <tr>\n                                        <th width=\"90%\">\n                                            File Name\n                                        </th>\n                                        <th width=\"10%\">\n                                            Remove\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of uploader.queue\">\n                                        <th width=\"90%\">\n                                            {{item._file.name}}\n                                        </th>\n                                        <th class=\"text-center\" width=\"10%\">\n                                            <mat-icon (click)=\"item.remove()\">delete</mat-icon>\n                                        </th>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Add\n                                Assessment</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/assessment.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/assessment.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <!-- <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Assessments</h4>\n                        <a routerLink=\"/admin/addassessment\">\n                            <mat-icon>playlist_add</mat-icon> Add Assessment\n                        </a>\n                    </div> -->\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Assessments\n                            <a  *ngIf=\"userInfo?.user?.role == 'Employer'\" [routerLink]=\"'../addassessment'\"><span class=\"material-icons\">add</span></a>\n                        </h4>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Title</th>\n                                <th>Employer Name</th>\n                                <th>Description</th>\n                                <th>Action</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let assessment of assessmentData\">\n                                    <td> <a [routerLink]=\"['../viewassessment', assessment._id]\">{{assessment.title}}</a>\n                                    </td>\n                                    <td>{{assessment.employer_id.company_name}}</td>\n                                    <td>{{assessment.description}}</td>\n                                    <td class=\"td-actions\">\n                                        <button mat-raised-button type=\"button\"\n                                            (click)=\"onClickMeToUpdate(assessment._id)\" matTooltip=\"Edit assessment\"\n                                            [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                     `       <i class=\"material-icons\">edit</i>\n                                        </button>\n                                        <button mat-raised-button type=\"button\" (click)=\"onClickMe(assessment._id)\"\n                                            matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/reviewassessment/reviewassessment.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/reviewassessment/reviewassessment.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Review Submitted assessment - {{assessmentData[0].title}}\n                        </h4>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n            \n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Candidate Name</th>\n                                <th>Submission date</th>\n                                <th>Submitted file</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let assessment of assessmentData\">\n                                    <td>{{assessment.candidate_id.first_name}} {{assessment.candidate_id.last_name}}\n                                    </td>\n                                    <td>{{assessment.submission_date}}</td>\n                                    <td><span *ngFor=\"let submittedassessment of assessment.assessement_file\"><a\n                                                target=\"_blank\"\n                                                href=\"{{submittedassessment.file_url}}\">{{submittedassessment.original_filename}}</a></span>\n                                    </td>\n                                    <!-- <td> <a [routerLink]=\"['../viewassessment', assessment._id]\">{{assessment.title}}</a>\n                                    </td>\n                                    <td>{{assessment.employer_id.company_name}}</td>\n                                    <td>{{assessment.description}}</td>\n                                    <td class=\"td-actions\">\n                                        <button mat-raised-button type=\"button\"\n                                            (click)=\"onClickMeToUpdate(assessment._id)\" matTooltip=\"Edit assessment\"\n                                            [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button>\n                                        <button mat-raised-button type=\"button\" (click)=\"onClickMe(assessment._id)\"\n                                            matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td> -->\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/submitassessment/submitassessment.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/submitassessment/submitassessment.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Submit Assessment</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div><label>Title : </label>\n                            {{assessmentData.title}}\n                        </div>\n                        <div><label>Employer Name : </label>\n                            {{assessmentData.employer_id.company_name}}\n                        </div>\n                        <div><label>Description : </label>\n                            {{assessmentData.description}}\n                        </div>\n                        <div><label>Assessment Files : </label>\n                            <div>\n                                <div *ngFor=\"let assessmentfile of assessmentData.additional_files\">\n                                    <a target=\"_blank\"\n                                        href=\"{{assessmentfile.file_url}}\">{{assessmentfile.original_filename}}</a>\n                                </div>\n                            </div>\n                        </div>\n                        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <textarea formControlName=\"shortnote\"\n                                            placeholder=\"Short note\"></textarea>\n                                    <!-- <div class=\"form-group\">\n\n                                    <div class=\"form-group\">\n                                        <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                    </div>\n                                </div> -->\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <input formControlName=\"additional_files\" type=\"file\" (change)=\"uploadFile($event)\"\n                                    accept=\".zip\" /><br />\n                            </div>\n                            <div>\n                                <label>Please upload .zip files only</label>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Submit\n                                Assessment</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/updateassessment/updateassessment.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/updateassessment/updateassessment.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Update Assessment</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n                            <div class=\"row margintop\">\n                                <div class=\"col-md-2\">Title</div>\n                                <div class=\"col-md-8\">\n                                    <input formControlName=\"title\" placeholder=\"Title\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"row margintop\">\n                                <div class=\"col-md-2\">Description</div>\n                                <div class=\"col-md-8\">\n\n                                    <textarea formControlName=\"description\"\n                                        placeholder=\"Description of the Assessment.\"></textarea>\n                                    <!-- <div class=\"form-group\">\n  \n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                            <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                        </div>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"row margintop\">\n                                <div class=\"col-md-6\">\n                                    <input formControlName=\"additional_files\" type=\"file\" ng2FileSelect accept=\".pdf\"\n                                        [uploader]=\"uploader\" multiple /></div>\n                            </div>\n                            <!-- <div class=\"drop-zone\">\n                                <div ng2FileDrop (click)=\"fileinput.click()\" [uploader]=\"uploader\" class=\"drop-zone\">\n                                    Drag and drop files to upload\n                                </div>\n                            </div> -->\n                            <table>\n                                <thead>\n                                    <tr>\n                                        <th width=\"30%\">\n                                            File Name\n                                        </th>\n                                        <th></th>\n                                        <th width=\"10%\">\n                                            Remove\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of uploader.queue\">\n                                        <td width=\"30%\">\n                                            {{item._file.name}}\n                                        </td>\n                                        <td>\n                                            Newly added\n                                        </td>\n                                        <td class=\"text-center\" width=\"10%\">\n                                            <mat-icon (click)=\"item.remove()\">delete</mat-icon>\n                                        </td>\n                                    </tr>\n                                    <tr *ngFor=\"let item of uploadedFiles\">\n                                        <td width=\"30%\">\n                                            {{item.original_filename}}\n                                        </td>\n                                        <td>\n                                            Already uploaded\n                                        </td>\n                                        <td class=\"text-center\" width=\"10%\">\n                                            <mat-icon (click)=\"removeFromArray(item._id)\">delete</mat-icon>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update\n                                Assessment</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/viewassessment/viewassessment.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/viewassessment/viewassessment.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">View Assessment</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div><label>Title : </label>\n                            {{assessmentData.title}}\n                        </div>\n                        <div><label>Employer Name : </label>\n                            {{assessmentData.employer_id.company_name}}\n                        </div>\n                        <div><label>Description : </label>\n                            {{assessmentData.description}}\n                        </div>\n                        <div><label>Assessment Files : </label>\n                            <div>\n                                <div *ngFor=\"let assessmentfile of assessmentData.additional_files\">\n                                    <a target=\"_blank\"\n                                        href=\"{{assessmentfile.file_url}}\">{{assessmentfile.original_filename}}</a>\n                                </div>\n                            </div>\n                        </div>\n                        <button  mat-raised-button (click)=\"ReviewSubmission(assessmentData._id)\" type=\"button\" class=\"btn btn-danger\">Review\n                            Assessment Submission</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate-profile/candidate-profile.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate-profile/candidate-profile.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">{{ candidateid ? 'Edit' : 'Add' }} Candidate</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [(formGroup)]=\"candidateForm\" (ngSubmit)=\"submitForm()\">\n                            <div>\n\n                                <label>Firstname:</label>\n                                <input formControlName=\"first_name\" placeholder=\"Enter your firstname\" type=\"text\">\n\n                            </div>\n                            <div>\n\n                                <label>Lastname: </label>\n                                <input formControlName=\"last_name\" placeholder=\"Enter your lastname\" type=\"text\">\n\n                            </div>\n                            <div>\n\n                                <label>Email: </label>\n                                <input formControlName=\"email\" placeholder=\"Enter your email\" type=\"email\">\n\n                            </div>\n                            <div>\n\n                                <label>Phone Number: </label>\n                                <input formControlName=\"phone_number\" placeholder=\"Enter your phone number\" type=\"text\">\n\n                            </div>\n\n                            <div>\n\n                                <label>Date of Birth: </label>\n                                <input formControlName=\"date_of_birth\" type=\"date\">\n\n                            </div>\n                            <div>\n\n                                <label> Resume Link :</label>\n                                <input formControlName=\"resume_link\" placeholder=\"Ex. resume\">\n\n                            </div>\n                            <div>\n\n                                <label> Bio :</label>\n                                <textarea formControlName=\"bio\"\n                                    placeholder=\"Ex. It a toronto based company..\"></textarea>\n\n                            </div>\n\n\n                            <button mat-raised-button type=\"submit\"\n                                class=\"btn btn-danger pull-right\">{{ candidateid ? 'Edit' : 'Add' }} Candidate</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n\n                        <div>\n\n                            <label> Skills :</label>\n                            <input [(ngModel)]=\"newSkill\" placeholder=\"Ex. html\">\n\n                            <button mat-raised-button type=\"button\" (click)=\"addSkill()\">Add</button>\n                        </div>\n                        <div>\n                            <ul>\n                                <li *ngFor=\"let skill of candidateData?.candidateDetails?.skills\">\n                                    {{skill}}\n                                    <button (click)=\"removeSkill(skill)\">Delete</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Education</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <table class=\"table table-hover\" *ngIf=\"educationData && educationData.length\">\n                            <thead class=\"text-warning\">\n                                <th>Degree</th>\n                                <th>Institute</th>\n                                <th>Passing Year</th>\n                                <th>Delete</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let education of educationData\">\n                                    <td>{{education.certificate_name}}</td>\n                                    <td>{{education.institute}}</td>\n                                    <td>{{education.passing_year}}</td>\n                                    <td><button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"deleteEducation(education._id)\">Delete</button></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <form [(formGroup)]=\"educationForm\" (ngSubmit)=\"submitEducationForm()\">\n                            <div>\n\n                                <label>Degree Name:</label>\n                                <input formControlName=\"certificate_name\" placeholder=\"Enter degree name\" type=\"text\">\n\n                            </div>\n                            <div>\n\n                                <label>Institute: </label>\n                                <input formControlName=\"institute\" placeholder=\"Enter institute name\" type=\"text\">\n\n                            </div>\n                            <div>\n\n                                <label>passing_year: </label>\n                                <input formControlName=\"passing_year\" placeholder=\"Enter passing year\" type=\"text\">\n\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Add\n                                Education</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Candidates</h4>\n                    </div>\n                    <div class=\"card-header card-header-warning\">\n                                <!-- <a [routerLink]=\"'../addemployer'\"><span class=\"material-icons\">add</span>Add Employer</a> -->\n                             \n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Candidate Name</th>\n                                <th>E-mail</th>\n                                <th>Bio</th>\n                                <th>Actions</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let candidate of candidateData\">\n                                    <td>{{candidate.userDetails?.first_name}} {{candidate.userDetails?.last_name}}</td>\n                                    <td>{{candidate.userDetails?.email}}</td>\n                                    <td>{{candidate.bio}}</td>\n                                    <td class=\"td-actions\">\n                                        <button mat-raised-button type=\"button\"  matTooltip=\"Edit assessment\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\" (click)=\"editCandidate(candidate._id)\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button>\n                                        <button mat-raised-button type=\"button\" (click)=\"onClickMe(candidate._id)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <p class=\"card-category\">{{userData?.fname}} {{userData?.lname}}</p>\n                      <h3 class=\"card-title\">{{userData?.number}}\n                          <small>GB</small>\n                      </h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons text-danger\">warning</i>\n                          <a href=\"javascript:void(0)\">Get More Space...</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">store</i>\n                      </div>\n                      <p class=\"card-category\">Revenue</p>\n                      <h3 class=\"card-title\">$34,245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">info_outline</i>\n                      </div>\n                      <p class=\"card-category\">Fixed Issues</p>\n                      <h3 class=\"card-title\">75</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">local_offer</i> Tracked from Github\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"fa fa-twitter\"></i>\n                      </div>\n                      <p class=\"card-category\">Followers</p>\n                      <h3 class=\"card-title\">+245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">update</i> Just Updated\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Daily Sales</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Email Subscriptions</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Completed Tasks</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-tabs card-header-primary\">\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <span class=\"nav-tabs-title\">Tasks:</span>\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">bug_report</i> Bugs\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">code</i> Website\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">cloud</i> Server\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"profile\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"messages\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"settings\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                  </div>\n                  <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                              <th>ID</th>\n                              <th>Name</th>\n                              <th>Salary</th>\n                              <th>Country</th>\n                          </thead>\n                          <tbody>\n                              <tr>\n                                  <td>1</td>\n                                  <td>Dakota Rice</td>\n                                  <td>$36,738</td>\n                                  <td>Niger</td>\n                              </tr>\n                              <tr>\n                                  <td>2</td>\n                                  <td>Minerva Hooper</td>\n                                  <td>$23,789</td>\n                                  <td>Curaçao</td>\n                              </tr>\n                              <tr>\n                                  <td>3</td>\n                                  <td>Sage Rodriguez</td>\n                                  <td>$56,142</td>\n                                  <td>Netherlands</td>\n                              </tr>\n                              <tr>\n                                  <td>4</td>\n                                  <td>Philip Chaney</td>\n                                  <td>$38,735</td>\n                                  <td>Korea, South</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer-profile/employer-profile.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer-profile/employer-profile.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">{{ employerid ? 'Edit' : 'Add' }} Employer</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [(formGroup)]=\"employerForm\" (ngSubmit)=\"submitForm()\">\n                            <div>\n                                <label>First name: </label>\n                                <input formControlName=\"first_name\" placeholder=\"Enter your firstname\" type=\"text\">\n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"last_name\" placeholder=\"Enter your lastname\" type=\"text\">\n                                \n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"email\" placeholder=\"Enter your email\" type=\"email\">\n                                \n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"phone_number\" placeholder=\"Enter your phone number\" type=\"text\">\n                                \n                            </div>\n\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"date_of_birth\" type=\"date\">\n                                \n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"company_name\" placeholder=\"Ex. xyz\">\n                                \n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"company_location\" placeholder=\"Ex. toronto\">\n                                \n                            </div>\n                            <div>\n                                \n                                    \n                                    <input formControlName=\"company_website\" placeholder=\"Ex. www.xyz.com\">\n                                \n                            </div>\n                            <div>\n\n                                \n                                    \n                                    <textarea formControlName=\"company_description\"\n                                        placeholder=\"Ex. It a toronto based company..\"></textarea>\n                                \n                            </div>\n\n                            <button mat-raised-button type=\"submit\"\n                                class=\"btn btn-danger pull-right\">{{ employerid ? 'Edit' : 'Add' }} Employer</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let employer of employerData\">\n    <p>Company Name: {{employer.company_name}}</p>\n    <p>Company Location: {{employer.company_location}}</p>\n</div> -->\n\n<!-- <p id=\"abc\">employer works!</p> -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <!-- <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Employers</h4>\n                    </div> -->\n                    <div class=\"card-header card-header-warning\">\n                                <!-- <a [routerLink]=\"'../addemployer'\"><span class=\"material-icons\">add</span>Add Employer</a> -->\n                             \n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Company Name</th>\n                                <th>Location</th>\n                                <th>Description</th>\n                                <th>Actions</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let employer of employerData\">\n                                    <td>{{employer.company_name}}</td>\n                                    <td>{{employer.company_location}}</td>\n                                    <td>{{employer.company_description}}</td>\n                                    <td class=\"td-actions\">\n                                        <button mat-raised-button type=\"button\"  matTooltip=\"Edit assessment\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\" (click)=\"editEmployer(employer._id)\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button>\n                                        <button mat-raised-button type=\"button\" (click)=\"onClickMe(employer._id)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, upStaffed\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-6 col-sm-6\">\n        <app-register></app-register>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <app-login></app-login>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/icons/icons.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/icons/icons.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/add-job-post/add-job-post.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/add-job-post/add-job-post.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Add Job Post</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    Job Post Title :  \n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"title\" placeholder=\"Title\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    Additional Information:\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"additional_info\" placeholder=\"additional information\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                             Position:\n                                                <select formControlName=\"position\" id=\"position\">\n                                                    <option value=\"Intern\">Intern</option>\n                                                    <option value=\"Intermediate\">Intermediate</option>\n                                                    <option value=\"Senior\">Senior</option>\n                                                    <option value=\"Associate\">Associate</option>\n                                                </select>\n                                            <!-- <input formControlName=\"position\" placeholder=\"Position\" type=\"text\"> -->\n                                        </div>\n                                    </div>\n                                    Post Date:\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"post_date\" placeholder=\"Post Date\" type=\"date\">\n                                        </div>\n                                    </div>\n                                    Post Expiry:\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"post_expiry\" placeholder=\"Post Expiry\" type=\"date\">\n                                        </div>\n                                    </div>\n                                    Requirement:\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"requirement\" placeholder=\"Requirement\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    Job id:\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <input formControlName=\"job_id\" placeholder=\"Job id\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    Assessment:\n                                    <select formControlName=\"assessment_id\" (change)=\"selectAssessmentHandler($event)\">\n                                        <option [ngValue]=\"null\" disabled>Choose Assessment</option>\n                                        <option class=\"dropdown-item\" *ngFor=\"let assessment of assessmentData\" [value]=\"assessment._id\"> {{assessment.title}} </option>\n                                    </select>\n                                    <br/><br/>\n                                    Employer:\n                                    <select formControlName=\"employer_id\" (change)=\"selectEmployerHandler($event)\">\n                                        <option [ngValue]=\"null\" disabled>Choose Employer</option>\n                                        <option class=\"dropdown-item\" *ngFor=\"let employer of employerData\" [value]=\"employer._id\">{{employer.company_name}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Add Job Post</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/job-post.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/job-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let jobpost of jobPostData\">\n    <p>Title: {{jobpost.title}}</p>\n    <p>Position: {{jobpost.position}}</p>\n</div> -->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Job Post\n                            <a *ngIf=\"userInfo?.user?.role == 'Employer'\" [routerLink]=\"'../add-job-post'\"><span class=\"material-icons\">add</span></a>\n                        </h4>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Title</th>\n                                <th>Position</th>\n                                <th>Posting Date</th>\n                                <th>Assessment</th>\n                                <th>Action</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let jobPost of jobPostData\">\n                                    <td><a [routerLink]=\"['../view-job-post', jobPost._id]\"> {{jobPost.title}}</a></td>\n                                    <td>{{jobPost.position}}</td>\n                                    <td>{{jobPost.post_date}}</td>\n                                    <td><a\n                                            [routerLink]=\"'../submitassessment/'+jobPost.assessment_id?._id\">{{jobPost.assessment_id?.title}}</a>\n                                    </td>\n                                    <td class=\"td-actions\">\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit jobPost\"\n                                            [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-primary btn-link btn-sm btn-just-icon\"\n                                            (click)=\"editJobPost(jobPost._id)\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button>\n                                        <button mat-raised-button type=\"button\" (click)=\"onClickMe(jobPost._id)\"\n                                            matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"\n                                            class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/update-job-post/update-job-post.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/update-job-post/update-job-post.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Edit Job Post</h4>\n                    </div>\n                    <div class=\"card-body\">\n                    <form [(formGroup)]=\"updateJobPostForm\" (ngSubmit)=\"updateForm()\">\n                        <div>\n                                <label>Job Post Title:</label>\n                                <input matNativeControl formControlName=\"title\" placeholder=\"Enter job post title\" type=\"text\">\n                        </div>\n                        <div>\n                                <label>Additional Information: </label>\n                                <input matNativeControl formControlName=\"additional_info\" placeholder=\"Enter additional information\" type=\"text\">\n                        </div>\n                        <div>\n                                <label>Position: </label>\n                                <select formControlName=\"position\">\n                                    <option value=\"Intern\">Intern</option>\n                                    <option value=\"Intermediate\">Intermediate</option>\n                                    <option value=\"Senior\">Senior</option>\n                                    <option value=\"Associate\">Associate</option>\n                                </select>\n                        </div>\n                        <div>\n                                <label>Post Date: </label>\n                                <input matNativeControl formControlName=\"post_date\" type=\"date\">\n                        </div>\n                        <div>\n                                <label>Post Expiry: </label>\n                                <input matNativeControl formControlName=\"post_expiry\" type=\"date\">\n                        </div>\n                        <div>\n                                <label>Requirement: </label>\n                                <input matNativeControl formControlName=\"requirement\" type=\"text\">\n                        </div>\n                        <div>\n                                <label>Job id: </label>\n                                <input matNativeControl formControlName=\"job_id\" type=\"text\">\n                        </div>\n                        <div>\n                                <label>Assessment: </label>\n                                <select formControlName=\"assessment_id\">\n                                    <option [ngValue]=\"null\" disabled>Choose Assessment</option>\n                                    <option class=\"dropdown-item\" *ngFor=\"let assessment of assessmentData\" [value]=\"assessment._id\"> {{assessment.title}} </option>\n                                </select>\n                        </div>\n                        <div>\n                                <label>Employer:</label>\n                                <select formControlName=\"employer_id\">\n                                    <option [ngValue]=\"null\" disabled>Choose Employer</option>\n                                    <option class=\"dropdown-item\" *ngFor=\"let employer of employerData\" [value]=\"employer._id\">{{employer.company_name}}</option>\n                                </select>\n                        </div>\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Job Post</button>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/view-job-post/view-job-post.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/view-job-post/view-job-post.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">View Job Post</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div><label>Job Post Title : </label>\n                            {{jobPostData.title}}\n                        </div>\n                        <div><label>Additional Information : </label>\n                            {{jobPostData.additional_info}}\n                        </div>\n                        <div><label>Position: </label>\n                            {{jobPostData.position}}\n                        </div>\n                        <div><label>Post Date: </label>\n                            {{jobPostData.post_date}}\n                        </div>\n                        <div><label>Post Expiry: </label>\n                            {{jobPostData.post_expiry}}\n                        </div>\n                        <div><label>Requirement: </label>\n                            {{jobPostData.requirement}}\n                        </div>\n                        <div><label>Job id: </label>\n                            {{jobPostData.job_id}}\n                        </div>\n                        <div><label>Assessment: </label>\n                            {{jobPostData.assessment_id.title}}\n                        </div>\n                        <div><label>Employer: </label>\n                            {{jobPostData.employer_id.first_name}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/add-job-application/add-job-application.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/add-job-application/add-job-application.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Add Application</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <input formControlName=\"jobPost_id\" type=\"hidden\" value={{jobpostdata._id}}/>\n                                     <div><strong>Job Post :</strong> {{jobpostdata.title}}</div><br/>\n                                     <div><strong>Position : </strong>{{jobpostdata.position}}</div><br/>\n                                     <div><strong>Requirement : </strong>{{jobpostdata.requirement}}</div><br/>\n                                     <!-- <textarea formControlName=\"description\"\n                                            placeholder=\"Additional Information.\"></textarea>\n                                     -->\n                                     \n                                    <br><br>\n                                    <!-- <div>Candidate : \n                                        <select formControlName=\"candidate_id\">\n                                            <option [ngValue]=\"null\" disabled>Choose Candidate</option>\n                                            <option *ngFor=\"let candidate of candidateData\"  [value]=\"candidate._id\">{{candidate.bio}} </option>\n                                        </select>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <button mat-raised-button  type=\"submit\" class=\"btn btn-danger pull-right\">Quick Apply</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/all-applications/all-applications.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/all-applications/all-applications.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">All Applications</h4>\n                    </div>\n                    <!-- <select formControlName=\"dropdownStatus\" >\n                        <option value=\"\" selected disabled>--Select Status--</option>\n                        <option class=\"dropdown-item\" *ngFor=\"let state of status\">{{state}}</option>\n                    </select> -->\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Candidate(User ID)</th>\n                                <th>Job Post</th>\n                                <th>Position</th>\n                                <th>Status</th>\n                                <th>Application Date</th>\n                                <th></th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let appdata of jobApplicationData\">\n                                    \n                                    <td>{{appdata.candidate_id}}</td>\n\n                                    <td>{{appdata.jobPost_id.title}}</td>\n                                    <td>{{appdata.jobPost_id.position}}</td>\n                                    <td>{{appdata.application_status}}</td>\n                                    <td>{{appdata.application_date}}</td>\n                                     <td class=\"td-actions\">\n                                    <!-- <a  [routerLink]=\"['../updateJobApplication/',appdata._id]\">Update</a>   -->\n\n                                       \n                                         <!-- <button mat-raised-button type=\"button\" (click)=\"delete(appdata._id)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button> -->\n                                    </td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/jobApplication.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/jobApplication.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let application of jobApplicationData\">\n    <p>Application: {{application.application_status}}</p>\n</div> -->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title right\">Job Applications\n                            <a [routerLink]=\"'../my-applications'\">My Applications</a>\n                        </h4>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Job Post</th>\n                                <th>Posted on</th>\n                                <th></th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let jobpost of jobPostData\">\n                                    <td>{{jobpost.title}}</td>\n                                    <td>{{jobpost.post_date}}</td>\n                                     <td class=\"td-actions\">\n                                         <a  [routerLink]=\"['../addjobApplication/',jobpost._id]\">Apply Now</a>\n                                         <!-- <a  [routerLink]=\"['/admin/jobApplication/updateJobApplication/',application._id]\">Update</a> \n\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Application\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button>\n                                         <button mat-raised-button type=\"button\" (click)=\"delete(jobpost._id)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button> -->\n                                    </td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/my-applications/my-applications.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/my-applications/my-applications.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">{{username}} Applications\n                                   <!-- <a [routerLink]=\"'/admin/jobApplication/addjobApplication'\"><span class=\"material-icons\"></span></a> -->\n                            </h4>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Job Post</th>\n                                <th>Position</th>\n                                <th>Status</th>\n                                <th>Application Date</th>\n                                <th></th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let appdata of jobApplicationData\">\n                                    <td>{{appdata.jobPost_id.title}}</td>\n                                    <td>{{appdata.jobPost_id.position}}</td>\n                                    <td>{{appdata.application_status}}</td>\n                                    <td>{{appdata.application_date}}</td>\n                                     <td class=\"td-actions\">\n                                    <a  [routerLink]=\"['../updateJobApplication/',appdata._id]\">Update</a>  \n\n                                        <!-- <button mat-raised-button type=\"button\" matTooltip=\"Edit Application\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button> -->\n                                         <button mat-raised-button type=\"button\" (click)=\"delete(appdata._id)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-info\">\n        <h4 class=\"card-title\">Login</h4>\n        <p class=\"card-category\">Upstaffed Login!</p>\n      </div>\n      <div class=\"card-body\">\n        <form [(formGroup)]=\"loginForm\" (submit)=\"submitForm(loginForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"email\" placeholder=\"Email address\" type=\"email\">\n            \n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"user_password\" placeholder=\"Password\" type=\"password\">\n            \n            </div>\n          </div>\n          <button mat-raised-button type=\"submit\" class=\"btn btn-info pull-right\">Login</button>\n          <div class=\"clearfix\"></div>\n          <p class=\"text-success\" *ngIf=\"messageShow == 'success'\"> {{responseMessage}}</p>\n          <p class=\"text-danger\" *ngIf=\"messageShow == 'error'\"> {{responseMessage}}</p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/maps.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/maps.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <!-- <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div> -->\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form>\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-warning\">\n        <h4 class=\"card-title\">Register</h4>\n        <p class=\"card-category\">Upstaffed Register!</p>\n      </div>\n      <div class=\"card-body\">\n        <form [(formGroup)]=\"registerForm\" (submit)=\"submitForm(registerForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              \n                \n                <input  formControlName=\"first_name\"  placeholder=\"Enter your firstname\" type=\"text\">\n\n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"last_name\"  placeholder=\"Enter your lastname\" type=\"text\">\n\n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"email\"  placeholder=\"Enter your email\" type=\"email\">\n\n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"user_password\"  placeholder=\"Create a password\" type=\"password\">\n\n            </div>\n            \n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"confirm_password\"  placeholder=\"Confirm password\" type=\"password\">\n\n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"phone_number\"  placeholder=\"Enter your phone number\" type=\"text\">\n\n            </div>\n            \n            <div class=\"col-md-12\">\n              \n                \n                <input formControlName=\"date_of_birth\"  type=\"date\">\n\n            </div>\n            <div class=\"col-md-12\">\n              \n                \n                <select formControlName=\"role\" >\n                  <option value=\"\" selected disabled>--Select Role--</option>\n                    <option class=\"dropdown-item\">Candidate</option>\n                    <option class=\"dropdown-item\">Employer</option>\n                </select>\n\n            </div>\n          </div>\n          <button mat-raised-button type=\"submit\" class=\"btn btn-warning pull-right\">Register</button>\n          <div class=\"clearfix\"></div>\n          <p class=\"text-success\" *ngIf=\"messageShow == 'success'\"> {{responseMessage}}</p>\n          <p class=\"text-danger\" *ngIf=\"messageShow == 'error'\"> {{responseMessage}}</p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-candidate/sidebar-candidate.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-candidate/sidebar-candidate.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        UpStaffed\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        <li>\n            <a href=\"#\" class=\"nav-link\" (click)=\"logout()\"><i class=\"material-icons\">power_off</i>Logout</a>\n            \n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-employer/sidebar-employer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-employer/sidebar-employer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        UpStaffed\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        <li>\n            <a href=\"#\" class=\"nav-link\" (click)=\"logout()\"><i class=\"material-icons\">power_off</i>Logout</a>\n            \n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        UpStaffed\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        <li>\n            <a href=\"#\" class=\"nav-link\" (click)=\"logout()\"><i class=\"material-icons\">power_off</i>Logout</a>\n            \n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-list/table-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-list/table-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Simple Table {{userData.fname}} {{userData.number}}</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead class=\"\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td>\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td>\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td>\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td>\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td>\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td>\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upgrade/upgrade.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upgrade/upgrade.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                \n                                    <input placeholder=\"Company (disabled)\" disabled>\n\n                              </div>\n                              <div class=\"col-md-3\">\n                                  \n                                    <input placeholder=\"Username\">\n\n                              </div>\n                              <div class=\"col-md-4\">\n                                  \n                                    <input placeholder=\"Email address\" type=\"email\">\n\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                \n                                  <input placeholder=\"Fist Name\" type=\"text\">\n\n                              </div>\n                              <div class=\"col-md-6\">\n                                \n                                  <input placeholder=\"Last Name\" type=\"text\">\n\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                \n                                  <input placeholder=\"Adress\" type=\"text\">\n\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                \n                                  <input placeholder=\"City\" type=\"text\">\n\n                              </div>\n                              <div class=\"col-md-4\">\n                                \n                                  <input placeholder=\"Country\" type=\"text\">\n\n                              </div>\n                              <div class=\"col-md-4\">\n                                \n                                  <input placeholder=\"Postal Code\" type=\"text\">\n\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                \n                                   <textarea placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"javascript:void(0)\">\n                          <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-sm-6\" *ngFor=\"let user of userData\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n                <div class=\"card-icon\">\n                    <i class=\"material-icons\">content_copy</i>\n                </div>\n                <p class=\"card-category\">{{user?.first_name}} {{user?.last_name}}</p>\n                <h3 class=\"card-title\">\n                    <small>{{user?.role}}</small>\n                </h3>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats\">\n                    <i class=\"material-icons text-danger\">warning</i>\n                    <a href=\"javascript:void(0)\">{{user?.email}}</a>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<!-- <div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/candidate-layout/candidate-layout.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/candidate-layout/candidate-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar-candidate></app-sidebar-candidate>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<!-- <div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/employer-layout/employer-layout.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/employer-layout/employer-layout.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar-employer></app-sidebar-employer>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<!-- <div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div> -->\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/candidate-layout/candidate-layout.module": [
		"./src/app/layouts/candidate-layout/candidate-layout.module.ts",
		"default~layouts-candidate-layout-candidate-layout-module~layouts-employer-layout-employer-layout-module",
		"layouts-candidate-layout-candidate-layout-module"
	],
	"./layouts/employer-layout/employer-layout.module": [
		"./src/app/layouts/employer-layout/employer-layout.module.ts",
		"default~layouts-candidate-layout-candidate-layout-module~layouts-employer-layout-employer-layout-module",
		"layouts-employer-layout-employer-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_candidate_layout_candidate_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/candidate-layout/candidate-layout.component */ "./src/app/layouts/candidate-layout/candidate-layout.component.ts");
/* harmony import */ var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _layouts_employer_layout_employer_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/employer-layout/employer-layout.component */ "./src/app/layouts/employer-layout/employer-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm5/angularx-qrcode.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { UpdateassessmentComponent } from './assessment/updateassessment/updateassessment.component';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__["QRCodeModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
                _layouts_candidate_layout_candidate_layout_component__WEBPACK_IMPORTED_MODULE_10__["CandidateLayoutComponent"],
                _layouts_employer_layout_employer_layout_component__WEBPACK_IMPORTED_MODULE_12__["EmployerLayoutComponent"]
                // UpdateassessmentComponent
            ],
            providers: [_providers_http_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _layouts_candidate_layout_candidate_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/candidate-layout/candidate-layout.component */ "./src/app/layouts/candidate-layout/candidate-layout.component.ts");
/* harmony import */ var _layouts_employer_layout_employer_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/employer-layout/employer-layout.component */ "./src/app/layouts/employer-layout/employer-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // }, {
    //   path: '',
    //   component: AdminLayoutComponent,
    //   children: [{
    //     path: '',
    //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    //   }]
    // }
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        pathMatch: 'full',
    }, {
        path: 'admin',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }, {
        path: 'candidate',
        component: _layouts_candidate_layout_candidate_layout_component__WEBPACK_IMPORTED_MODULE_6__["CandidateLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/candidate-layout/candidate-layout.module#CandidateLayoutModule'
            }]
    }, {
        path: 'employer',
        component: _layouts_employer_layout_employer_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmployerLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/employer-layout/employer-layout.module#EmployerLayoutModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/Resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/Resume/resume.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.bio{\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9SZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9SZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5iaW97XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/Resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(storage) {
        this.storage = storage;
        this.candidateData = this.storage.get('userInfo');
        this.candidateData = this.candidateData.user;
        console.log(this.candidateData);
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent.ctorParameters = function () { return [
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }
    ]; };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __importDefault(__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Resume/resume.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./resume.component.css */ "./src/app/components/Resume/resume.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/addassessment/addassessment.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/assessment/addassessment/addassessment.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margintop{\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3Nlc3NtZW50L2FkZGFzc2Vzc21lbnQvYWRkYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3Nlc3NtZW50L2FkZGFzc2Vzc21lbnQvYWRkYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbnRvcHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/assessment/addassessment/addassessment.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/assessment/addassessment/addassessment.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddassessmentComponent", function() { return AddassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AddassessmentComponent = /** @class */ (function () {
    function AddassessmentComponent(assessmentService, fb, router, storageService) {
        this.assessmentService = assessmentService;
        this.fb = fb;
        this.router = router;
        this.storageService = storageService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            isHTML5: true
        });
        this.files = [];
        this.percentDone = 0;
        this.userInfo = this.storageService.get('userInfo');
        console.log(this.userInfo);
    }
    AddassessmentComponent.prototype.ngOnInit = function () {
        // Reactive Form
        this.form = this.fb.group({
            title: [''],
            description: [''],
            additional_files: [null],
            employer_id: ['']
        });
    };
    AddassessmentComponent.prototype.submitForm = function () {
        var _this = this;
        //this.form.value.employer_id = "5ef54ecb30b0c84d38354f5f";
        this.form.value.employer_id = this.userInfo.employer._id;
        console.log("emploer id" + this.userInfo.user._id);
        console.log("test" + this.form.value.additional_files);
        for (var j = 0; j < this.uploader.queue.length; j++) {
            var data = new FormData();
            var fileItem = this.uploader.queue[j]._file;
            this.files.push(fileItem);
            console.log(fileItem.name);
        }
        this.uploader.clearQueue();
        this.assessmentService.addAssessment(this.form.value.title, this.form.value.description, this.files, this.form.value.employer_id).subscribe(function (event) {
            console.log(_this.form.value);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    console.log('Assessment successfully created!', event.body);
                    _this.percentDone = false;
                    _this.assessmentService.fetchAssessments();
                    _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/assessment']);
            }
        });
    };
    AddassessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    AddassessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addassessment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./addassessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/addassessment/addassessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./addassessment.component.css */ "./src/app/components/assessment/addassessment/addassessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], AddassessmentComponent);
    return AddassessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/assessment.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/assessment/assessment.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXNzbWVudC9hc3Nlc3NtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/assessment/assessment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/assessment/assessment.component.ts ***!
  \***************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent(assessmentService, router, StorageService) {
        this.assessmentService = assessmentService;
        this.router = router;
        this.StorageService = StorageService;
    }
    AssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assessmentSubscriber = this.assessmentService.assessmentSubscriber().subscribe(function (data) {
            console.log(data);
            _this.assessmentData = data ? data.data : undefined;
            console.log(_this.assessmentData);
        });
        this.assessmentService.fetchAssessments();
        this.userInfo = this.StorageService.get('userInfo');
        console.log("init");
    };
    AssessmentComponent.prototype.onClickMe = function (id) {
        this.assessmentService.removeAssessments(id);
    };
    AssessmentComponent.prototype.onClickMeToUpdate = function (id) {
        this.router.navigate(['/' + this.userInfo.user.role.toLowerCase() + '/updateassessment', id]);
    };
    AssessmentComponent.prototype.ngOnDestroy = function () {
        console.log("Destroy");
        if (this.assessmentSubscriber) {
            this.assessmentSubscriber.unsubscribe();
        }
    };
    AssessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    AssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assessment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/assessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assessment.component.css */ "./src/app/components/assessment/assessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/reviewassessment/reviewassessment.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/assessment/reviewassessment/reviewassessment.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXNzbWVudC9yZXZpZXdhc3Nlc3NtZW50L3Jldmlld2Fzc2Vzc21lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/assessment/reviewassessment/reviewassessment.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assessment/reviewassessment/reviewassessment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReviewassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewassessmentComponent", function() { return ReviewassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ReviewassessmentComponent = /** @class */ (function () {
    function ReviewassessmentComponent(assessmentService, router, activeRoute) {
        var _this = this;
        this.assessmentService = assessmentService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.assessmentSubscriber = this.assessmentService.submittedAssessmentSubscriber().subscribe(function (data) {
            //console.log(data);
            _this.assessmentData = data ? data.data : undefined;
            console.log("Review Assessment");
            console.log(_this.assessmentData);
        });
    }
    ReviewassessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.assessmentService.fetchSubmittedAssessment(_this.id);
        });
    };
    ReviewassessmentComponent.prototype.ngOnDestroy = function () {
        this.assessmentSubscriber.unsubscribe();
    };
    ReviewassessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ReviewassessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewassessment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reviewassessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/reviewassessment/reviewassessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reviewassessment.component.css */ "./src/app/components/assessment/reviewassessment/reviewassessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReviewassessmentComponent);
    return ReviewassessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/submitassessment/submitassessment.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/assessment/submitassessment/submitassessment.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXNzbWVudC9zdWJtaXRhc3Nlc3NtZW50L3N1Ym1pdGFzc2Vzc21lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/assessment/submitassessment/submitassessment.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assessment/submitassessment/submitassessment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SubmitassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitassessmentComponent", function() { return SubmitassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var SubmitassessmentComponent = /** @class */ (function () {
    function SubmitassessmentComponent(assessmentService, router, fb, activeRoute, storageService) {
        var _this = this;
        this.assessmentService = assessmentService;
        this.router = router;
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.storageService = storageService;
        this.percentDone = 0;
        this.assessmentSubscriber = this.assessmentService
            .assessmentOneSubscriber()
            .subscribe(function (data) {
            //console.log(data);
            _this.assessmentData = data ? data.data : undefined;
            //console.log(this.assessmentData);
        });
        this.userInfo = this.storageService.get('userInfo');
    }
    SubmitassessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            shortnote: [""],
            additional_files: [null],
        });
        //Fetch assessment Id from the query string parameters
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this.assessmentService.fetchAssessment(_this.id);
        });
    };
    SubmitassessmentComponent.prototype.uploadFile = function (event) {
        this.file = event.target.files[0];
        // console.log(file);
        // this.form.patchValue({
        //   avatar: file,
        // });
        // this.form.get("additional_files").updateValueAndValidity();
    };
    SubmitassessmentComponent.prototype.submitForm = function () {
        var _this = this;
        var candidateId = this.userInfo.candidate._id;
        console.log(this.file);
        this.assessmentService
            .submitAssessment(this.id, candidateId, this.file, this.form.value.shortnote)
            .subscribe(function (event) {
            console.log(_this.form.value);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log("Request has been made!");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log("Response header has been received!");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round((event.loaded / event.total) * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log("Assessment successfully created!", event.body);
                    _this.percentDone = false;
                    _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/assessment']);
            }
        });
    };
    SubmitassessmentComponent.prototype.ngOnDestroy = function () {
        this.assessmentSubscriber.unsubscribe();
    };
    SubmitassessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    SubmitassessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-submitassessment",
            template: __importDefault(__webpack_require__(/*! raw-loader!./submitassessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/submitassessment/submitassessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./submitassessment.component.css */ "./src/app/components/assessment/submitassessment/submitassessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], SubmitassessmentComponent);
    return SubmitassessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/updateassessment/updateassessment.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/assessment/updateassessment/updateassessment.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margintop{\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3Nlc3NtZW50L3VwZGF0ZWFzc2Vzc21lbnQvdXBkYXRlYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3Nlc3NtZW50L3VwZGF0ZWFzc2Vzc21lbnQvdXBkYXRlYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbnRvcHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/assessment/updateassessment/updateassessment.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assessment/updateassessment/updateassessment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdateassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateassessmentComponent", function() { return UpdateassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var UpdateassessmentComponent = /** @class */ (function () {
    function UpdateassessmentComponent(assessmentService, fb, router, activeRoute, storageService) {
        var _this = this;
        this.assessmentService = assessmentService;
        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.storageService = storageService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            isHTML5: true
        });
        this.files = [];
        this.percentDone = 0;
        this.uploadedFiles = [];
        this.removeFiles = [];
        this.form = this.fb.group({
            title: [''],
            description: [''],
            additional_files: [null],
            employer_id: ['']
        });
        this.assessmentSubscriber = this.assessmentService.assessmentOneSubscriber().subscribe(function (data) {
            _this.assessmentData = data ? data.data : undefined;
            console.log(_this.assessmentData);
            if (_this.assessmentData !== undefined) {
                _this.form.controls['title'].setValue(_this.assessmentData.title);
                _this.form.controls['description'].setValue(_this.assessmentData.description);
                _this.uploadedFiles = _this.assessmentData.additional_files;
            }
        });
        this.userInfo = this.storageService.get('userInfo');
    }
    UpdateassessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.assessmentService.fetchAssessment(_this.id);
        });
    };
    UpdateassessmentComponent.prototype.submitForm = function () {
        var _this = this;
        this.form.value.employer_id = "5ed92227fd1fd34cec9e336e";
        //this.form.value.employer_id = this.userInfo.user._id;
        console.log("test" + this.form.value.additional_files);
        for (var j = 0; j < this.uploader.queue.length; j++) {
            var data = new FormData();
            var fileItem = this.uploader.queue[j]._file;
            this.files.push(fileItem);
            console.log(fileItem.name);
        }
        this.uploader.clearQueue();
        this.assessmentService.UpdateAssessment(this.id, this.form.value.title, this.form.value.description, this.files, this.form.value.employer_id, this.removeFiles).subscribe(function (event) {
            console.log(_this.form.value);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
                    console.log('Assessment successfully created!', event.body);
                    _this.percentDone = false;
                    _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/assessment']);
            }
        });
    };
    UpdateassessmentComponent.prototype.removeFromArray = function (id) {
        var _this = this;
        this.uploadedFiles.forEach(function (element) {
            console.log(element._id);
            if (element._id === id) {
                _this.removeFiles.push(element);
                console.log("about to delete");
                _this.uploadedFiles = _this.uploadedFiles.filter(function (item) {
                    return item !== element;
                });
            }
        });
    };
    UpdateassessmentComponent.prototype.ngOnDestroy = function () {
        this.assessmentSubscriber.unsubscribe();
    };
    UpdateassessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    UpdateassessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateassessment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./updateassessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/updateassessment/updateassessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./updateassessment.component.css */ "./src/app/components/assessment/updateassessment/updateassessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], UpdateassessmentComponent);
    return UpdateassessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/assessment/viewassessment/viewassessment.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/assessment/viewassessment/viewassessment.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXNzbWVudC92aWV3YXNzZXNzbWVudC92aWV3YXNzZXNzbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/assessment/viewassessment/viewassessment.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/assessment/viewassessment/viewassessment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewassessmentComponent", function() { return ViewassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ViewassessmentComponent = /** @class */ (function () {
    function ViewassessmentComponent(assessmentService, router, activeRoute, storageService) {
        var _this = this;
        this.assessmentService = assessmentService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.storageService = storageService;
        this.assessmentSubscriber = this.assessmentService.assessmentOneSubscriber().subscribe(function (data) {
            //console.log(data);
            _this.assessmentData = data ? data.data : undefined;
            //console.log(this.assessmentData);
        });
        this.userInfo = this.storageService.get("userInfo");
    }
    ViewassessmentComponent.prototype.ReviewSubmission = function (id) {
        this.router.navigate(['/' + this.userInfo.user.role.toLowerCase() + '/reviewassessment', id]);
    };
    ViewassessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Fetch assessment Id from the query string parameters
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.assessmentService.fetchAssessment(_this.id);
        });
    };
    ViewassessmentComponent.prototype.ngOnDestroy = function () {
        this.assessmentSubscriber.unsubscribe();
    };
    ViewassessmentComponent.ctorParameters = function () { return [
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    ViewassessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewassessment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./viewassessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessment/viewassessment/viewassessment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./viewassessment.component.css */ "./src/app/components/assessment/viewassessment/viewassessment.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], ViewassessmentComponent);
    return ViewassessmentComponent;
}());



/***/ }),

/***/ "./src/app/components/candidate/candidate-profile/candidate-profile.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/candidate/candidate-profile/candidate-profile.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/candidate/candidate-profile/candidate-profile.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/candidate/candidate-profile/candidate-profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CandidateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateProfileComponent", function() { return CandidateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/candidate/candidate.service */ "./src/app/data/candidate/candidate.service.ts");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_data_education_education_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/data/education/education.service */ "./src/app/data/education/education.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var CandidateProfileComponent = /** @class */ (function () {
    function CandidateProfileComponent(fb, candidateService, router, route, storageServive, educationService) {
        var _this = this;
        this.fb = fb;
        this.candidateService = candidateService;
        this.router = router;
        this.route = route;
        this.storageServive = storageServive;
        this.educationService = educationService;
        this.candidateid = undefined;
        this.newSkill = '';
        this.userInfo = this.storageServive.get('userInfo');
        this.sub = this.route.params.subscribe(function (params) {
            _this.candidateid = params['id'];
            if (_this.candidateid) {
                _this.candidateService.fetchCandidate(_this.candidateid).subscribe(function (response) {
                    _this.candidateData = response.data;
                    _this.candidateData.candidateDetails.skills = _this.candidateData.candidateDetails.skills ? _this.candidateData.candidateDetails.skills : [];
                    _this.candidateForm = _this.fb.group({
                        resume_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.candidateDetails.resume_link, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.candidateDetails.bio, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.candidateDetails.skills, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.userDetails.first_name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.userDetails.last_name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.userDetails.email, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.userDetails.phone_number, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.candidateData.userDetails.date_of_birth, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
                    });
                });
                _this.educationService.fetchEducation(_this.candidateid);
            }
        });
        this.candidateForm = this.fb.group({
            resume_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.educationForm = this.fb.group({
            certificate_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            institute: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            passing_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.educationSubscriber = this.educationService.educationSubscriber().subscribe(function (data) {
            _this.educationData = data ? data.data : undefined;
            console.log(_this.educationData);
        });
    }
    CandidateProfileComponent.prototype.ngOnInit = function () {
    };
    CandidateProfileComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this.subCan) {
            this.subCan.unsubscribe();
        }
    };
    CandidateProfileComponent.prototype.submitForm = function () {
        var _this = this;
        var candidateDetails = this.candidateForm.value;
        Object.assign(candidateDetails, { skills: this.candidateData.candidateDetails.skills });
        this.subCan = this.candidateService.updateCandidate(candidateDetails, this.candidateData.candidateDetails._id).subscribe(function (response) {
            if (response.status == "success") {
                _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/candidates']);
            }
            else {
                alert('Something went wrong');
            }
        });
    };
    CandidateProfileComponent.prototype.submitEducationForm = function () {
        var _this = this;
        var educationDetails = this.educationForm.value;
        this.educationService.addEducation(this.candidateid, educationDetails).subscribe(function (data) {
            if (data && data.status == 'success') {
                _this.educationService.fetchEducation(_this.candidateid);
            }
        });
    };
    CandidateProfileComponent.prototype.deleteEducation = function (educationID) {
        this.educationService.removeEducation(educationID, this.candidateid);
    };
    CandidateProfileComponent.prototype.addSkill = function () {
        this.candidateData.candidateDetails.skills.push(this.newSkill);
        this.newSkill = '';
    };
    CandidateProfileComponent.prototype.removeSkill = function (removeSkill) {
        this.candidateData.candidateDetails.skills = this.candidateData.candidateDetails.skills.filter(function (skill) {
            if (skill != removeSkill) {
                return true;
            }
        });
    };
    CandidateProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: app_data_education_education_service__WEBPACK_IMPORTED_MODULE_5__["EducationService"] }
    ]; };
    CandidateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'candidate-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./candidate-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate-profile/candidate-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./candidate-profile.component.css */ "./src/app/components/candidate/candidate-profile/candidate-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], app_data_education_education_service__WEBPACK_IMPORTED_MODULE_5__["EducationService"]])
    ], CandidateProfileComponent);
    return CandidateProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/candidate/candidate.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/candidate/candidate.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/candidate/candidate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/candidate/candidate.component.ts ***!
  \*************************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/candidate/candidate.service */ "./src/app/data/candidate/candidate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CandidateComponent = /** @class */ (function () {
    function CandidateComponent(candidateService, router) {
        var _this = this;
        this.candidateService = candidateService;
        this.router = router;
        this.candidateSubscribe = this.candidateService.candidatesSubscriber().subscribe(function (data) {
            _this.candidateData = data ? data.data : undefined;
        });
        this.candidateService.fetchCandidates();
    }
    CandidateComponent.prototype.ngOnInit = function () {
    };
    CandidateComponent.prototype.onClickMe = function (id) {
        this.candidateService.removeCandidate(id);
    };
    CandidateComponent.prototype.ngOnDestroy = function () {
        this.candidateSubscribe.unsubscribe();
    };
    CandidateComponent.prototype.editCandidate = function (candidateID) {
        console.log(candidateID);
        this.router.navigate(['admin/candidate-profile', candidateID]);
    };
    CandidateComponent.ctorParameters = function () { return [
        { type: app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_1__["CandidateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate',
            template: __importDefault(__webpack_require__(/*! raw-loader!./candidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate/candidate.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./candidate.component.css */ "./src/app/components/candidate/candidate.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_1__["CandidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _sidebar_candidate_sidebar_candidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-candidate/sidebar-candidate.component */ "./src/app/components/sidebar-candidate/sidebar-candidate.component.ts");
/* harmony import */ var _sidebar_employer_sidebar_employer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-employer/sidebar-employer.component */ "./src/app/components/sidebar-employer/sidebar-employer.component.ts");
/* harmony import */ var app_layouts_admin_layout_providers_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layouts/admin-layout/providers-list */ "./src/app/layouts/admin-layout/providers-list.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _jobApplication_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jobApplication/all-applications/all-applications.component */ "./src/app/components/jobApplication/all-applications/all-applications.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/components/table-list/table-list.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/components/maps/maps.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upgrade/upgrade.component */ "./src/app/components/upgrade/upgrade.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assessment/assessment.component */ "./src/app/components/assessment/assessment.component.ts");
/* harmony import */ var _employer_employer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employer/employer.component */ "./src/app/components/employer/employer.component.ts");
/* harmony import */ var _job_post_job_post_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./job-post/job-post.component */ "./src/app/components/job-post/job-post.component.ts");
/* harmony import */ var _assessment_addassessment_addassessment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assessment/addassessment/addassessment.component */ "./src/app/components/assessment/addassessment/addassessment.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _jobApplication_add_job_application_add_job_application_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./jobApplication/add-job-application/add-job-application.component */ "./src/app/components/jobApplication/add-job-application/add-job-application.component.ts");
/* harmony import */ var _jobApplication_jobApplication_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./jobApplication/jobApplication.component */ "./src/app/components/jobApplication/jobApplication.component.ts");
/* harmony import */ var _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employer/employer-profile/employer-profile.component */ "./src/app/components/employer/employer-profile/employer-profile.component.ts");
/* harmony import */ var _job_post_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./job-post/add-job-post/add-job-post.component */ "./src/app/components/job-post/add-job-post/add-job-post.component.ts");
/* harmony import */ var _Resume_resume_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Resume/resume.component */ "./src/app/components/Resume/resume.component.ts");
/* harmony import */ var _jobApplication_my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./jobApplication/my-applications/my-applications.component */ "./src/app/components/jobApplication/my-applications/my-applications.component.ts");
/* harmony import */ var _assessment_updateassessment_updateassessment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assessment/updateassessment/updateassessment.component */ "./src/app/components/assessment/updateassessment/updateassessment.component.ts");
/* harmony import */ var _assessment_viewassessment_viewassessment_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assessment/viewassessment/viewassessment.component */ "./src/app/components/assessment/viewassessment/viewassessment.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm5/angularx-qrcode.js");
/* harmony import */ var _assessment_submitassessment_submitassessment_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assessment/submitassessment/submitassessment.component */ "./src/app/components/assessment/submitassessment/submitassessment.component.ts");
/* harmony import */ var _candidate_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./candidate/candidate-profile/candidate-profile.component */ "./src/app/components/candidate/candidate-profile/candidate-profile.component.ts");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/components/candidate/candidate.component.ts");
/* harmony import */ var _assessment_reviewassessment_reviewassessment_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./assessment/reviewassessment/reviewassessment.component */ "./src/app/components/assessment/reviewassessment/reviewassessment.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _job_post_view_job_post_view_job_post_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./job-post/view-job-post/view-job-post.component */ "./src/app/components/job-post/view-job-post/view-job-post.component.ts");
/* harmony import */ var _job_post_update_job_post_update_job_post_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./job-post/update-job-post/update-job-post.component */ "./src/app/components/job-post/update-job-post/update-job-post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { ResumeComponent } from './resume/resume/resume.component';
// import { MyApplicationsComponent } from './jobApplication/my-applications/my-applications.component';
// import { ViewassessmentComponent } from './assessment/viewassessment/viewassessment.component';
// import { AddJobPostComponent } from './job-post/add-job-post/add-job-post.component';
// import { UpdateJobPostComponent } from './job-post/update-job-post/update-job-post.component';
//import { AddemployerComponent } from './employer/addemployer/addemployer.component';






























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_38__["QRCodeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__["BrowserModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _sidebar_candidate_sidebar_candidate_component__WEBPACK_IMPORTED_MODULE_6__["SidebarCandidateComponent"],
                _sidebar_employer_sidebar_employer_component__WEBPACK_IMPORTED_MODULE_7__["SidebarEmployerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _jobApplication_all_applications_all_applications_component__WEBPACK_IMPORTED_MODULE_15__["AllApplicationsComponent"],
                // ResumeComponent,
                // MyApplicationsComponent,
                // ViewassessmentComponent,
                // AddJobPostComponent,
                // UpdateJobPostComponent,
                // //AddemployerComponent,
                // AddJobPostComponent,
                _job_post_update_job_post_update_job_post_component__WEBPACK_IMPORTED_MODULE_45__["UpdateJobPostComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_17__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_20__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_21__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__["NotificationsComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_23__["UpgradeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"],
                _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_25__["AssessmentComponent"],
                _employer_employer_component__WEBPACK_IMPORTED_MODULE_26__["EmployerComponent"],
                _job_post_job_post_component__WEBPACK_IMPORTED_MODULE_27__["JobPostComponent"],
                _assessment_addassessment_addassessment_component__WEBPACK_IMPORTED_MODULE_28__["AddassessmentComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileSelectDirective"],
                _jobApplication_add_job_application_add_job_application_component__WEBPACK_IMPORTED_MODULE_30__["AddJobApplicationComponent"],
                _jobApplication_jobApplication_component__WEBPACK_IMPORTED_MODULE_31__["JobApplicationComponent"],
                _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_32__["EmployerProfileComponent"],
                _job_post_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_33__["AddJobPostComponent"],
                _Resume_resume_component__WEBPACK_IMPORTED_MODULE_34__["ResumeComponent"],
                _jobApplication_my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_35__["MyApplicationsComponent"],
                _assessment_updateassessment_updateassessment_component__WEBPACK_IMPORTED_MODULE_36__["UpdateassessmentComponent"],
                _assessment_viewassessment_viewassessment_component__WEBPACK_IMPORTED_MODULE_37__["ViewassessmentComponent"],
                _assessment_submitassessment_submitassessment_component__WEBPACK_IMPORTED_MODULE_39__["SubmitassessmentComponent"],
                _candidate_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_40__["CandidateProfileComponent"],
                _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_41__["CandidateComponent"],
                _assessment_reviewassessment_reviewassessment_component__WEBPACK_IMPORTED_MODULE_42__["ReviewassessmentComponent"],
                _job_post_view_job_post_view_job_post_component__WEBPACK_IMPORTED_MODULE_44__["ViewJobPostComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _sidebar_candidate_sidebar_candidate_component__WEBPACK_IMPORTED_MODULE_6__["SidebarCandidateComponent"],
                _sidebar_employer_sidebar_employer_component__WEBPACK_IMPORTED_MODULE_7__["SidebarEmployerComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [app_layouts_admin_layout_providers_list__WEBPACK_IMPORTED_MODULE_8__["ProvidersList"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.usersSubscriber().subscribe(function (data) {
            // console.log("server returned:");
            // console.log(data);
            _this.userData = data ? data.users : undefined;
        });
        // setInterval(()=>{
        this.userService.fetchStudents();
        //   console.log('called');
        // }, 2000);
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/employer/employer-profile/employer-profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/employer/employer-profile/employer-profile.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZXIvZW1wbG95ZXItcHJvZmlsZS9lbXBsb3llci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/employer/employer-profile/employer-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/employer/employer-profile/employer-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: EmployerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerProfileComponent", function() { return EmployerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/employer/employer.service */ "./src/app/data/employer/employer.service.ts");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EmployerProfileComponent = /** @class */ (function () {
    function EmployerProfileComponent(fb, employerService, router, route, storageServive) {
        var _this = this;
        this.fb = fb;
        this.employerService = employerService;
        this.router = router;
        this.route = route;
        this.storageServive = storageServive;
        this.employerid = undefined;
        this.userInfo = this.storageServive.get('userInfo');
        this.sub = this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            _this.employerid = params['id'];
            if (_this.employerid) {
                _this.employerService.fetchEmployer(_this.employerid).subscribe(function (response) {
                    // this.employersData.next(data);
                    _this.employersData = response.data;
                    _this.employerForm = _this.fb.group({
                        company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.employerDetails.company_name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        company_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.employerDetails.company_location, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        company_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.employerDetails.company_website, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        company_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.employerDetails.company_description, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.userDetails.first_name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.userDetails.last_name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.userDetails.email, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.userDetails.phone_number, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.employersData.userDetails.date_of_birth, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
                    });
                });
            }
        });
        this.employerForm = this.fb.group({
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            company_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            company_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            company_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
    }
    EmployerProfileComponent.prototype.ngOnInit = function () {
    };
    EmployerProfileComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.subEmp)
            this.subEmp.unsubscribe();
    };
    EmployerProfileComponent.prototype.submitForm = function () {
        var _this = this;
        this.subEmp = this.employerService.updateEmployer(this.employerForm.value, this.employersData.employerDetails._id).subscribe(function (response) {
            if (response.status == "success") {
                _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/employers']);
            }
            else {
                alert('Something went wrong');
            }
        });
    };
    EmployerProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_2__["EmployerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    EmployerProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employer-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employer-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer-profile/employer-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employer-profile.component.css */ "./src/app/components/employer/employer-profile/employer-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_2__["EmployerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], EmployerProfileComponent);
    return EmployerProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/employer/employer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/employer/employer.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZXIvZW1wbG95ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/employer/employer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employer/employer.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerComponent", function() { return EmployerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/employer/employer.service */ "./src/app/data/employer/employer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EmployerComponent = /** @class */ (function () {
    function EmployerComponent(employerService, router) {
        var _this = this;
        this.employerService = employerService;
        this.router = router;
        this.employerSubscriber = this.employerService.employerSubscriber().subscribe(function (data) {
            console.log(data);
            _this.employerData = data ? data.data : undefined;
            console.log(_this.employerData);
        });
        this.employerService.fetchEmployers();
    }
    EmployerComponent.prototype.ngOnInit = function () {
    };
    EmployerComponent.prototype.onClickMe = function (id) {
        this.employerService.removeEmployer(id);
    };
    EmployerComponent.prototype.ngOnDestroy = function () {
        this.employerSubscriber.unsubscribe();
    };
    EmployerComponent.prototype.editEmployer = function (employerID) {
        console.log(employerID);
        this.router.navigate(['admin/employer-profile', employerID]);
    };
    EmployerComponent.ctorParameters = function () { return [
        { type: app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_1__["EmployerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EmployerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employer/employer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employer.component.css */ "./src/app/components/employer/employer.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_1__["EmployerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployerComponent);
    return EmployerComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, storage) {
        this.router = router;
        this.storage = storage;
        // let userInfo = this.storage.get('userInfo')
        // if(userInfo && userInfo.user.role == 'Admin') {
        //   this.router.navigate(['/admin']);
        // }else if(userInfo && userInfo.user.role == 'Candidate') {
        //   this.router.navigate(['/candidate']);
        // } else if(userInfo && userInfo.user.role == 'Employer') {
        //   this.router.navigate(['/employer']);
        // }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/icons/icons.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbnMvaWNvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/icons/icons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./icons.component.css */ "./src/app/components/icons/icons.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/job-post/add-job-post/add-job-post.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/job-post/add-job-post/add-job-post.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLXBvc3QvYWRkLWpvYi1wb3N0L2FkZC1qb2ItcG9zdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/job-post/add-job-post/add-job-post.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/job-post/add-job-post/add-job-post.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddJobPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobPostComponent", function() { return AddJobPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/job-post/job-post.service */ "./src/app/data/job-post/job-post.service.ts");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/data/employer/employer.service */ "./src/app/data/employer/employer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AddJobPostComponent = /** @class */ (function () {
    function AddJobPostComponent(jobPostService, assessmentService, employerService, fb, router, storageServive) {
        var _this = this;
        this.jobPostService = jobPostService;
        this.assessmentService = assessmentService;
        this.employerService = employerService;
        this.fb = fb;
        this.router = router;
        this.storageServive = storageServive;
        this.percentDone = 0;
        this.jobPostSubscriber = this.jobPostService.jobPostSubsciber().subscribe(function (data) {
            console.log(data);
            _this.jobPostData = data ? data.data : undefined;
            console.log(_this.jobPostData);
        });
        this.jobPostService.fetchJobPosts();
        // ==== fetch assessment ====
        this.assessmentSubscriber = this.assessmentService.assessmentSubscriber().subscribe(function (data) {
            _this.assessmentData = data ? data.data : undefined;
        });
        this.assessmentService.fetchAssessments();
        // ==== fetch employer ====
        this.employerSubscriber = this.employerService.employerSubscriber().subscribe(function (data) {
            _this.employerData = data ? data.data : undefined;
        });
        this.employerService.fetchEmployers();
        this.userInfo = this.storageServive.get('userInfo');
    }
    AddJobPostComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            title: [''],
            additional_info: [''],
            position: [''],
            post_date: [''],
            post_expiry: [''],
            job_id: [''],
            requirement: [''],
            assessment_id: [''],
            employer_id: ['']
        });
    };
    AddJobPostComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.get('assessment_id').value);
        this.jobPostService.addJobPost(this.form.value).subscribe(function (jobPost) {
            _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/job-posts']);
        });
    };
    AddJobPostComponent.prototype.onClickMe = function (id) {
        this.jobPostService.deleteJobPost(id);
    };
    AddJobPostComponent.prototype.ngOnDestroy = function () {
        this.jobPostSubscriber.unsubscribe();
    };
    AddJobPostComponent.ctorParameters = function () { return [
        { type: app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__["JobPostService"] },
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentService"] },
        { type: app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_4__["EmployerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    AddJobPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job-post',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-job-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/add-job-post/add-job-post.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-job-post.component.css */ "./src/app/components/job-post/add-job-post/add-job-post.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__["JobPostService"], app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentService"], app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_4__["EmployerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], AddJobPostComponent);
    return AddJobPostComponent;
}());



/***/ }),

/***/ "./src/app/components/job-post/job-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/job-post/job-post.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLXBvc3Qvam9iLXBvc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/job-post/job-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/job-post/job-post.component.ts ***!
  \***********************************************************/
/*! exports provided: JobPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostComponent", function() { return JobPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/job-post/job-post.service */ "./src/app/data/job-post/job-post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var JobPostComponent = /** @class */ (function () {
    // private assessmentData: any;
    // private assessmentSubscriber: any;
    // private employerData: any;
    // private employerSubsciber: any;
    function JobPostComponent(jobPostService, router) {
        var _this = this;
        this.jobPostService = jobPostService;
        this.router = router;
        this.jobPostSubscriber = this.jobPostService.jobPostSubsciber().subscribe(function (data) {
            console.log(data);
            _this.jobPostData = data ? data.data : undefined;
            console.log(_this.jobPostData);
        });
        this.jobPostService.fetchJobPosts();
        // //fetch assessments
        // this.jobPostSubscriber = this.jobPostService.jobPostSubsciber().subscribe((data: any) => {
        //   this.jobPostData = data ? data.data : undefined;
        // })
        // this.jobPostService.fetchJobPosts();
    }
    JobPostComponent.prototype.ngOnInit = function () {
    };
    JobPostComponent.prototype.onClickMe = function (id) {
        this.jobPostService.deleteJobPost(id);
    };
    JobPostComponent.prototype.editJobPost = function (jobPostID) {
        console.log(jobPostID);
        this.router.navigate(['admin/update-job-post', jobPostID]);
    };
    JobPostComponent.prototype.ngOnDestroy = function () {
        this.jobPostSubscriber.unsubscribe();
    };
    JobPostComponent.ctorParameters = function () { return [
        { type: app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_1__["JobPostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    JobPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-post',
            template: __importDefault(__webpack_require__(/*! raw-loader!./job-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/job-post.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./job-post.component.css */ "./src/app/components/job-post/job-post.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_1__["JobPostService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobPostComponent);
    return JobPostComponent;
}());



/***/ }),

/***/ "./src/app/components/job-post/update-job-post/update-job-post.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/job-post/update-job-post/update-job-post.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLXBvc3QvdXBkYXRlLWpvYi1wb3N0L3VwZGF0ZS1qb2ItcG9zdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/job-post/update-job-post/update-job-post.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/job-post/update-job-post/update-job-post.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateJobPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateJobPostComponent", function() { return UpdateJobPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/data/job-post/job-post.service */ "./src/app/data/job-post/job-post.service.ts");
/* harmony import */ var app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");
/* harmony import */ var app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/data/employer/employer.service */ "./src/app/data/employer/employer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var UpdateJobPostComponent = /** @class */ (function () {
    function UpdateJobPostComponent(fb, jobPostService, assessmentService, employerService, router, route, storageService) {
        var _this = this;
        this.fb = fb;
        this.jobPostService = jobPostService;
        this.assessmentService = assessmentService;
        this.employerService = employerService;
        this.router = router;
        this.route = route;
        this.storageService = storageService;
        this.jobPostId = undefined;
        this.assessmentSubscriber = this.assessmentService.assessmentSubscriber().subscribe(function (data) {
            _this.assessmentData = data ? data.data : undefined;
            console.log(_this.jobPostData);
        });
        this.assessmentService.fetchAssessments();
        this.employerSubscriber = this.employerService.employerSubscriber().subscribe(function (data) {
            _this.employerData = data ? data.data : undefined;
        });
        this.employerService.fetchEmployers();
        this.userInfo = this.storageService.get('userInfo');
        this.sub = this.route.params.subscribe(function (params) {
            _this.jobPostId = params['id'];
            if (_this.jobPostId) {
                _this.jobPostService.fetchJobPost(_this.jobPostId).subscribe(function (response) {
                    _this.jobPostData = response.data;
                    _this.updateJobPostForm = _this.fb.group({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.title, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        additional_info: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.additional_info, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.position, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        post_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.post_date, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        post_expiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.post_expiry, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        requirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.requirement, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        job_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.job_id, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.assessment_id, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                        employer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.jobPostData.jobPostDetails.employer_id, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
                    });
                });
            }
        });
        this.updateJobPostForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            additional_info: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            post_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            post_expiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            requirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            job_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            employer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        });
    }
    UpdateJobPostComponent.prototype.ngOnInit = function () {
    };
    UpdateJobPostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UpdateJobPostComponent.prototype.updateForm = function () {
        var _this = this;
        this.jobPostService.updateJobPost(this.updateJobPostForm.value, this.jobPostData.jobPostDetails._id).subscribe(function (response) {
            console.log(response);
            if (response.status == "success") {
                _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/job-posts']);
            }
            else {
                alert("Something went wrong");
            }
        });
    };
    UpdateJobPostComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_4__["JobPostService"] },
        { type: app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"] },
        { type: app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_6__["EmployerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    UpdateJobPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-job-post',
            template: __importDefault(__webpack_require__(/*! raw-loader!./update-job-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/update-job-post/update-job-post.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./update-job-post.component.css */ "./src/app/components/job-post/update-job-post/update-job-post.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_4__["JobPostService"],
            app_data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"],
            app_data_employer_employer_service__WEBPACK_IMPORTED_MODULE_6__["EmployerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], UpdateJobPostComponent);
    return UpdateJobPostComponent;
}());



/***/ }),

/***/ "./src/app/components/job-post/view-job-post/view-job-post.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/job-post/view-job-post/view-job-post.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLXBvc3Qvdmlldy1qb2ItcG9zdC92aWV3LWpvYi1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/job-post/view-job-post/view-job-post.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/job-post/view-job-post/view-job-post.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewJobPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobPostComponent", function() { return ViewJobPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ViewJobPostComponent = /** @class */ (function () {
    function ViewJobPostComponent() {
    }
    ViewJobPostComponent.prototype.ngOnInit = function () {
    };
    ViewJobPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-job-post',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-job-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/job-post/view-job-post/view-job-post.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-job-post.component.css */ "./src/app/components/job-post/view-job-post/view-job-post.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ViewJobPostComponent);
    return ViewJobPostComponent;
}());



/***/ }),

/***/ "./src/app/components/jobApplication/add-job-application/add-job-application.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/jobApplication/add-job-application/add-job-application.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iQXBwbGljYXRpb24vYWRkLWpvYi1hcHBsaWNhdGlvbi9hZGQtam9iLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/jobApplication/add-job-application/add-job-application.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/jobApplication/add-job-application/add-job-application.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddJobApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobApplicationComponent", function() { return AddJobApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/data/jobApplication/jobApplication.service */ "./src/app/data/jobApplication/jobApplication.service.ts");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AddJobApplicationComponent = /** @class */ (function () {
    function AddJobApplicationComponent(jobApplicationService, fb, route, router, storageServive) {
        var _this = this;
        this.jobApplicationService = jobApplicationService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.storageServive = storageServive;
        var id = this.route.snapshot.paramMap.get('id');
        this.jobApplicationService.getJobPostData(id).subscribe(function (data) {
            // console.log(data)
            _this.jobpostdata = data ? data.data : undefined;
        });
    }
    AddJobApplicationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            description: [''],
            jobPost_id: this.route.snapshot.paramMap.get('id')
        });
    };
    AddJobApplicationComponent.prototype.submitForm = function () {
        var _this = this;
        this.userInfo = this.storageServive.get('userInfo');
        // console.log(this.userInfo.user._id);
        this.jobApplicationService.findCandidate(this.userInfo.user._id).subscribe(function (data) {
            console.log("fetch canddate");
            console.log(data[0]._id);
            _this.candidate_id = data[0]._id;
            // console.log(this.candidate_id);
            // const id = this.route.snapshot.paramMap.get('id');
            _this.form.value.candidate_id = _this.candidate_id;
            // this.form.value.jobPost_id = id;
            console.log(_this.form.value);
            _this.jobApplicationService.addJobApplication(_this.form.value).subscribe(function (jobApplication) {
                _this.router.navigate(['/' + _this.userInfo.user.role.toLowerCase() + '/my-applications']);
            });
        });
    };
    AddJobApplicationComponent.prototype.ngOnDestroy = function () {
        // this.jobSubscriber.unsubscribe();
    };
    AddJobApplicationComponent.ctorParameters = function () { return [
        { type: app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_3__["JobApplicationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    AddJobApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // selector: 'app-add-job-application',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-job-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/add-job-application/add-job-application.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-job-application.component.css */ "./src/app/components/jobApplication/add-job-application/add-job-application.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_3__["JobApplicationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], AddJobApplicationComponent);
    return AddJobApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/jobApplication/all-applications/all-applications.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/jobApplication/all-applications/all-applications.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iQXBwbGljYXRpb24vYWxsLWFwcGxpY2F0aW9ucy9hbGwtYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/jobApplication/all-applications/all-applications.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/jobApplication/all-applications/all-applications.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AllApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllApplicationsComponent", function() { return AllApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/jobApplication/jobApplication.service */ "./src/app/data/jobApplication/jobApplication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AllApplicationsComponent = /** @class */ (function () {
    function AllApplicationsComponent(JobApplicationService) {
        // this.status = ["waiting","confirm","rejected"];
        var _this = this;
        this.JobApplicationService = JobApplicationService;
        this.jobApplicationSubscriber = this.JobApplicationService.jobApplicationSubscriber().subscribe(function (data) {
            _this.jobApplicationData = data ? data.data : undefined;
            // this.name = this.JobApplicationService.getUserName(this.jobApplicationData.candidate_id.user_id)
            console.log(_this.jobApplicationData);
        });
        this.JobApplicationService.fetchJobApplications();
        // this.JobApplicationService.getUserName(user_id);
    }
    //  getuser(user_id){
    //   this.name = this.JobApplicationService.getUserName(user_id);
    //   //  return this.JobApplicationService.getUserName(user_id);
    //  }
    AllApplicationsComponent.prototype.ngOnInit = function () { };
    AllApplicationsComponent.ctorParameters = function () { return [
        { type: app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"] }
    ]; };
    AllApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-applications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./all-applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/all-applications/all-applications.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./all-applications.component.css */ "./src/app/components/jobApplication/all-applications/all-applications.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"]])
    ], AllApplicationsComponent);
    return AllApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/jobApplication/jobApplication.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/jobApplication/jobApplication.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iQXBwbGljYXRpb24vam9iQXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/jobApplication/jobApplication.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/jobApplication/jobApplication.component.ts ***!
  \***********************************************************************/
/*! exports provided: JobApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationComponent", function() { return JobApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/jobApplication/jobApplication.service */ "./src/app/data/jobApplication/jobApplication.service.ts");
/* harmony import */ var app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/job-post/job-post.service */ "./src/app/data/job-post/job-post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var JobApplicationComponent = /** @class */ (function () {
    function JobApplicationComponent(JobApplicationService, jobPostService) {
        //   this.jobApplicationSubscriber = this.JobApplicationService.jobApplicationSubscriber().subscribe((data: any) => {   
        //   this.jobApplicationData = data ? data.data : undefined;
        // })
        // this.JobApplicationService.fetchJobApplications();
        var _this = this;
        this.JobApplicationService = JobApplicationService;
        this.jobPostService = jobPostService;
        this.jobPostSubscriber = this.jobPostService.jobPostSubsciber().subscribe(function (data) {
            // console.log(data);
            _this.jobPostData = data ? data.data : undefined;
        });
        this.jobPostService.fetchJobPosts();
    }
    JobApplicationComponent.prototype.delete = function (jobApplication) {
        this.JobApplicationService.deleteJobApplication(jobApplication);
    };
    JobApplicationComponent.prototype.ngOnInit = function () { };
    JobApplicationComponent.prototype.ngOnDestroy = function () {
        this.jobPostSubscriber.unsubscribe();
    };
    JobApplicationComponent.ctorParameters = function () { return [
        { type: app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"] },
        { type: app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__["JobPostService"] }
    ]; };
    JobApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // selector: 'app-job-Application',
            template: __importDefault(__webpack_require__(/*! raw-loader!./jobApplication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/jobApplication.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./jobApplication.component.css */ "./src/app/components/jobApplication/jobApplication.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"], app_data_job_post_job_post_service__WEBPACK_IMPORTED_MODULE_2__["JobPostService"]])
    ], JobApplicationComponent);
    return JobApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/jobApplication/my-applications/my-applications.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/jobApplication/my-applications/my-applications.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iQXBwbGljYXRpb24vbXktYXBwbGljYXRpb25zL215LWFwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/jobApplication/my-applications/my-applications.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/jobApplication/my-applications/my-applications.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyApplicationsComponent", function() { return MyApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/jobApplication/jobApplication.service */ "./src/app/data/jobApplication/jobApplication.service.ts");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MyApplicationsComponent = /** @class */ (function () {
    function MyApplicationsComponent(JobApplicationService, storageServive) {
        var _this = this;
        this.JobApplicationService = JobApplicationService;
        this.storageServive = storageServive;
        // this.jobApplicationSubscriber = this.JobApplicationService.jobApplicationSubscriber().subscribe((data: any) => {   this.jobApplicationData = data ? data.data : undefined;    })
        this.userInfo = this.storageServive.get('userInfo');
        this.JobApplicationService.findCandidate(this.userInfo.user._id).subscribe(function (data) {
            _this.candidate_id = data[0]._id;
            _this.username = _this.userInfo.user.first_name.charAt(0).toUpperCase() + _this.userInfo.user.first_name.slice(1);
            // candidate is stored in this.candidate variable
            /// we are passing to method fetchMyapplications
            _this.JobApplicationService.fetchMyApplications(_this.candidate_id).subscribe(function (data) {
                _this.jobApplicationData = data ? data.data : undefined;
            });
        });
        this.JobApplicationService.fetchJobApplications();
    }
    MyApplicationsComponent.prototype.ngOnInit = function () {
    };
    MyApplicationsComponent.prototype.delete = function (jobApplication) {
        this.JobApplicationService.deleteJobApplication(jobApplication);
    };
    MyApplicationsComponent.ctorParameters = function () { return [
        { type: app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
    ]; };
    MyApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-applications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./my-applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobApplication/my-applications/my-applications.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./my-applications.component.css */ "./src/app/components/jobApplication/my-applications/my-applications.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_jobApplication_jobApplication_service__WEBPACK_IMPORTED_MODULE_1__["JobApplicationService"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], MyApplicationsComponent);
    return MyApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userService, storage, router, http) {
        this.fb = fb;
        this.userService = userService;
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.loginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('het@gmail.com', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            user_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1234', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitForm = function (values) {
        var _this = this;
        this.userService.authenticate(values).subscribe(function (response) {
            if (response) {
                _this.messageShow = response.status;
                _this.responseMessage = response.message;
                if (response.status == "success") {
                    _this.loginForm.reset();
                    _this.storage.set('userInfo', response.data);
                    _this.http.updateAuth(response.data);
                    setTimeout(function () {
                        if (response.data && response.data.user.role == 'Admin') {
                            _this.router.navigate(['/admin']);
                        }
                        else if (response.data && response.data.user.role == 'Candidate') {
                            _this.router.navigate(['/candidate']);
                        }
                        else if (response.data && response.data.user.role == 'Employer') {
                            _this.router.navigate(['/employer']);
                        }
                        // this.router.navigate(['/admin']);
                    }, 500);
                }
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/maps/maps.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/maps/maps.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/maps/maps.component.ts ***!
  \***************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/maps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./maps.component.css */ "./src/app/components/maps/maps.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, userService) {
        this.element = element;
        this.router = router;
        this.userService = userService;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        //   if(titlee.charAt(0) === '#'){
        //       titlee = titlee.slice( 1 );
        //   }
        //   for(var item = 0; item < this.listTitles.length; item++){
        //       if(this.listTitles[item].path === titlee){
        //           return this.listTitles[item].title;
        //       }
        //   }
        return titlee.split('/')[titlee.split('/').length - 1].split('?')[0].toUpperCase();
        //   return titlee;
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_data_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/notifications/notifications.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.registerForm = this.fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Het', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Kansara', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('het@gmail.com', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            user_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1234', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1234', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('4564654655', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1996-06-19', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Candidate', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submitForm = function (values) {
        var _this = this;
        this.userService.addUser(values).subscribe(function (response) {
            if (response) {
                _this.messageShow = response.status;
                _this.responseMessage = response.message;
                if (response.status == "success") {
                    _this.registerForm.reset();
                }
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_data_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-candidate/sidebar-candidate.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/sidebar-candidate/sidebar-candidate.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci1jYW5kaWRhdGUvc2lkZWJhci1jYW5kaWRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/sidebar-candidate/sidebar-candidate.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sidebar-candidate/sidebar-candidate.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ROUTES, SidebarCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCandidateComponent", function() { return SidebarCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ROUTES;
// { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
// { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
// { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
// { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
// { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
var SidebarCandidateComponent = /** @class */ (function () {
    function SidebarCandidateComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        var userInfo = this.storage.get('userInfo');
        ROUTES = [
            // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
            // { path: './users', title: 'Users',  icon: 'supervised_user_circle', class: '' },
            // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
            // { path: './assessment', title: 'Assessment',  icon:'question_answer', class: '' },
            // { path: './employers', title: 'Employers',  icon:'question_answer', class: '' },
            { path: './jobApplication', title: 'Job Application', icon: 'library_books', class: '' },
            { path: './job-posts', title: 'Job Posts', icon: 'question_answer', class: '' },
            { path: './resume', title: 'Resume', icon: 'assignment', class: '' },
            { path: './candidate-profile/' + userInfo.candidate._id, title: 'Profile', icon: 'assignment', class: '' }
        ];
    }
    SidebarCandidateComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarCandidateComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarCandidateComponent.prototype.logout = function () {
        this.storage.remove('userInfo');
        this.router.navigate(['/']);
    };
    SidebarCandidateComponent.ctorParameters = function () { return [
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-candidate',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-candidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-candidate/sidebar-candidate.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar-candidate.component.css */ "./src/app/components/sidebar-candidate/sidebar-candidate.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarCandidateComponent);
    return SidebarCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-employer/sidebar-employer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/sidebar-employer/sidebar-employer.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci1lbXBsb3llci9zaWRlYmFyLWVtcGxveWVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar-employer/sidebar-employer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sidebar-employer/sidebar-employer.component.ts ***!
  \***************************************************************************/
/*! exports provided: ROUTES, SidebarEmployerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarEmployerComponent", function() { return SidebarEmployerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ROUTES;
// { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
// { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
// { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
// { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
// { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
var SidebarEmployerComponent = /** @class */ (function () {
    function SidebarEmployerComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        var userInfo = this.storage.get('userInfo');
        ROUTES = [
            // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
            // { path: './users', title: 'Users',  icon: 'supervised_user_circle', class: '' },
            // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
            { path: './assessment', title: 'Assessment', icon: 'question_answer', class: '' },
            // { path: './employers', title: 'Employers',  icon:'question_answer', class: '' },
            // { path: './jobApplication', title: 'Job Application',  icon:'library_books', class: '' },
            { path: './job-posts', title: 'Job Posts', icon: 'question_answer', class: '' },
            { path: './resume', title: 'Resume', icon: 'assignment', class: '' },
            { path: './employer-profile/' + userInfo.employer._id, title: 'Profile', icon: 'assignment', class: '' }
        ];
    }
    SidebarEmployerComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarEmployerComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarEmployerComponent.prototype.logout = function () {
        this.storage.remove('userInfo');
        this.router.navigate(['/']);
    };
    SidebarEmployerComponent.ctorParameters = function () { return [
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarEmployerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-employer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-employer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar-employer/sidebar-employer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar-employer.component.css */ "./src/app/components/sidebar-employer/sidebar-employer.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarEmployerComponent);
    return SidebarEmployerComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ROUTES = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: './users', title: 'Users', icon: 'supervised_user_circle', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: './assessment', title: 'Assessment', icon: 'question_answer', class: '' },
    { path: './employers', title: 'Employers', icon: 'supervised_user_circle', class: '' },
    { path: './candidates', title: 'Candidates', icon: 'supervised_user_circle', class: '' },
    { path: './job-posts', title: 'Job Posts', icon: 'question_answer', class: '' },
    { path: './jobApplication', title: 'Job Application', icon: 'library_books', class: '' }
];
// { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
// { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
// { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
// { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
// { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.logout = function () {
        this.storage.remove('userInfo');
        this.router.navigate(['/']);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/table-list/table-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/table-list/table-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtbGlzdC90YWJsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/table-list/table-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/table-list/table-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TableListComponent = /** @class */ (function () {
    function TableListComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userSubscriber = this.userService.usersSubscriber().subscribe(function (data) {
            console.log("server returned:");
            console.log(data);
            _this.userData = data ? data.users : undefined;
        });
        // setTimeout(()=>{
        this.userSubscriber.unsubscribe();
        // },10000);
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.prototype.ngOnDestroy = function () {
        this.userSubscriber.unsubscribe();
    };
    TableListComponent.ctorParameters = function () { return [
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./table-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-list/table-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./table-list.component.css */ "./src/app/components/table-list/table-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __importDefault(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./typography.component.css */ "./src/app/components/typography/typography.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrade/upgrade.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/upgrade/upgrade.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBncmFkZS91cGdyYWRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/upgrade/upgrade.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/upgrade/upgrade.component.ts ***!
  \*********************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrade',
            template: __importDefault(__webpack_require__(/*! raw-loader!./upgrade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upgrade/upgrade.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./upgrade.component.css */ "./src/app/components/upgrade/upgrade.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/data/user/user.service */ "./src/app/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.usersSubscriber().subscribe(function (data) {
            // console.log("server returned:");
            // console.log(data);
            _this.userData = data ? data.data : undefined;
        });
        // setInterval(()=>{
        this.userService.fetchStudents();
        //   console.log('called');
        // }, 2000);
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.ctorParameters = function () { return [
        { type: app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __importDefault(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/data/assessment/assessment.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/assessment/assessment.service.ts ***!
  \*******************************************************/
/*! exports provided: AssessmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentService", function() { return AssessmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessmentService = /** @class */ (function () {
    function AssessmentService(httpService, storageService) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.assessments = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.assessment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.submittedassessment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    AssessmentService.prototype.fetchAssessments = function () {
        var _this = this;
        this.httpService.get('assessment/lists').subscribe(function (data) {
            _this.assessments.next(data);
        });
    };
    AssessmentService.prototype.fetchAssessment = function (id) {
        var _this = this;
        this.httpService.get('assessment/' + id).subscribe(function (data) {
            _this.assessment.next(data);
        });
    };
    AssessmentService.prototype.fetchSubmittedAssessment = function (id) {
        var _this = this;
        this.httpService.get('candidateassessment/' + id).subscribe(function (data) {
            _this.submittedassessment.next(data);
        });
    };
    AssessmentService.prototype.removeAssessments = function (id) {
        var _this = this;
        this.httpService.delete('assessment/' + id).subscribe(function (data) {
            _this.fetchAssessments();
        });
    };
    AssessmentService.prototype.addAssessment = function (title, description, additional_files, employer_id) {
        var formData = new FormData();
        var count = 1;
        for (var _i = 0, additional_files_1 = additional_files; _i < additional_files_1.length; _i++) {
            var file = additional_files_1[_i];
            formData.append('additional_files', file); // file.name is optional
        }
        formData.append("title", title);
        formData.append("description", description);
        //formData.append("additional_files", additional_files);
        formData.append("employer_id", employer_id);
        console.log("formdata " + formData);
        var userInfo = this.storageService.get('userInfo');
        console.log(userInfo);
        return this.httpService.post('assessment/', formData, this.httpService.getFileUploadHeaders());
    };
    AssessmentService.prototype.submitAssessment = function (assessment_id, candidate_id, assessement_file, other_notes) {
        var formData = new FormData();
        formData.append("assessment_id", assessment_id);
        formData.append("candidate_id", candidate_id);
        formData.append("other_notes", other_notes);
        formData.append("assessement_file", assessement_file);
        return this.httpService.post('candidateassessment/', formData, this.httpService.getFileUploadHeaders());
    };
    AssessmentService.prototype.UpdateAssessment = function (id, title, description, additional_files, employer_id, filesTodelete) {
        var formData = new FormData();
        var count = 1;
        for (var _i = 0, additional_files_2 = additional_files; _i < additional_files_2.length; _i++) {
            var file = additional_files_2[_i];
            formData.append('additional_files', file); // file.name is optional
        }
        formData.append("title", title);
        formData.append("filesTodelete", JSON.stringify(filesTodelete));
        formData.append("description", description);
        //formData.append("additional_files", additional_files);
        formData.append("employer_id", employer_id);
        console.log("formdata " + formData);
        var userInfo = this.storageService.get('userInfo');
        console.log(userInfo);
        return this.httpService.put('assessment/' + id, formData, this.httpService.getFileUploadHeaders());
    };
    AssessmentService.prototype.clearAssessment = function () {
        this.assessments.next(undefined);
    };
    AssessmentService.prototype.clearOneAssessment = function () {
        this.assessment.next(undefined);
    };
    AssessmentService.prototype.assessmentSubscriber = function () {
        return this.assessments;
    };
    AssessmentService.prototype.assessmentOneSubscriber = function () {
        return this.assessment;
    };
    AssessmentService.prototype.submittedAssessmentSubscriber = function () {
        return this.submittedassessment;
    };
    AssessmentService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    AssessmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], AssessmentService);
    return AssessmentService;
}());



/***/ }),

/***/ "./src/app/data/candidate/candidate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/candidate/candidate.service.ts ***!
  \*****************************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidateService = /** @class */ (function () {
    function CandidateService(httpService) {
        this.httpService = httpService;
        this.candidates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    CandidateService.prototype.fetchCandidates = function () {
        var _this = this;
        this.httpService.get('candidate/lists').subscribe(function (data) {
            _this.candidates.next(data);
        });
    };
    CandidateService.prototype.fetchCandidate = function (id) {
        return this.httpService.get('candidate/fetch/' + id);
    };
    CandidateService.prototype.updateCandidate = function (candidateData, id) {
        return this.httpService.post('candidate/update/' + id, candidateData);
    };
    CandidateService.prototype.removeCandidate = function (id) {
        var _this = this;
        var confirmed = confirm('Are you sure?');
        if (confirmed) {
            this.httpService.delete('candidate/delete/' + id).subscribe(function (data) {
                _this.fetchCandidates();
            });
        }
    };
    CandidateService.prototype.clearcandidates = function () {
        this.candidates.next(undefined);
        ///candidates = undefined     --same as assigning
    };
    CandidateService.prototype.candidatesSubscriber = function () {
        return this.candidates;
    };
    CandidateService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    CandidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/data/education/education.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/education/education.service.ts ***!
  \*****************************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducationService = /** @class */ (function () {
    function EducationService(httpService) {
        this.httpService = httpService;
        this.education = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    EducationService.prototype.fetchEducation = function (candidateid) {
        var _this = this;
        this.httpService.get('education/list/' + candidateid).subscribe(function (data) {
            _this.education.next(data);
        });
    };
    EducationService.prototype.addEducation = function (candidateid, educationData) {
        return this.httpService.post('education/add/' + candidateid, educationData);
    };
    EducationService.prototype.removeEducation = function (id, candidateid) {
        var _this = this;
        var confirmed = confirm('Are you sure?');
        if (confirmed) {
            this.httpService.delete('education/delete/' + id).subscribe(function (data) {
                _this.fetchEducation(candidateid);
            });
        }
    };
    EducationService.prototype.clearEducation = function () {
        this.education.next(undefined);
    };
    EducationService.prototype.educationSubscriber = function () {
        return this.education;
    };
    EducationService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    EducationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/data/employer/employer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/data/employer/employer.service.ts ***!
  \***************************************************/
/*! exports provided: EmployerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerService", function() { return EmployerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployerService = /** @class */ (function () {
    function EmployerService(httpService) {
        this.httpService = httpService;
        this.employers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    EmployerService.prototype.fetchEmployers = function () {
        var _this = this;
        this.httpService.get('employer/lists').subscribe(function (data) {
            _this.employers.next(data);
        });
    };
    EmployerService.prototype.fetchEmployer = function (id) {
        return this.httpService.get('employer/fetch/' + id);
    };
    EmployerService.prototype.updateEmployer = function (employerData, id) {
        return this.httpService.post('employer/update/' + id, employerData);
    };
    EmployerService.prototype.removeEmployer = function (id) {
        var _this = this;
        var confirmed = confirm('Are you sure?');
        if (confirmed) {
            this.httpService.delete('employer/delete/' + id).subscribe(function (data) {
                _this.fetchEmployers();
            });
        }
    };
    EmployerService.prototype.clearEmployer = function () {
        this.employers.next(undefined);
    };
    EmployerService.prototype.employerSubscriber = function () {
        return this.employers;
    };
    EmployerService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    EmployerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EmployerService);
    return EmployerService;
}());



/***/ }),

/***/ "./src/app/data/job-post/job-post.service.ts":
/*!***************************************************!*\
  !*** ./src/app/data/job-post/job-post.service.ts ***!
  \***************************************************/
/*! exports provided: JobPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostService", function() { return JobPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobPostService = /** @class */ (function () {
    function JobPostService(httpService) {
        this.httpService = httpService;
        this.jobPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.jobPost = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    //get all job posts
    JobPostService.prototype.fetchJobPosts = function () {
        var _this = this;
        this.httpService.get('job-post/lists').subscribe(function (data) {
            _this.jobPosts.next(data);
        });
    };
    JobPostService.prototype.fetchJobPost = function (id) {
        return this.httpService.get('job-post/fetch/' + id);
    };
    JobPostService.prototype.clearJobPosts = function () {
        this.jobPosts.next(undefined);
    };
    JobPostService.prototype.jobPostSubsciber = function () {
        return this.jobPosts;
    };
    JobPostService.prototype.fetchModel = function () {
        return this.httpService.get('job-post/lists');
    };
    JobPostService.prototype.updateJobPost = function (jobPostData, id) {
        return this.httpService.post('job-post/update/' + id, jobPostData);
    };
    JobPostService.prototype.addJobPost = function (jobPosts) {
        return this.httpService.post('job-post/', jobPosts);
    };
    JobPostService.prototype.deleteJobPost = function (id) {
        var _this = this;
        var confirmed = confirm("Are you sure you want to delete?");
        if (confirmed) {
            this.httpService.delete('job-post/delete/' + id).subscribe(function (data) {
                _this.fetchJobPosts();
            });
        }
    };
    JobPostService.prototype.getJobPost = function (id) {
        return this.httpService.get('job-post/lists/' + id);
    };
    JobPostService.prototype.getAssessment = function (id) {
        return this.httpService.get('assessment/lists/' + id);
    };
    JobPostService.prototype.getEmployer = function (id) {
        return this.httpService.get('employer/lists/' + id);
    };
    JobPostService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    JobPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], JobPostService);
    return JobPostService;
}());



/***/ }),

/***/ "./src/app/data/jobApplication/jobApplication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/data/jobApplication/jobApplication.service.ts ***!
  \***************************************************************/
/*! exports provided: JobApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationService", function() { return JobApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobApplicationService = /** @class */ (function () {
    function JobApplicationService(httpService) {
        this.httpService = httpService;
        this.jobApplications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.jobPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    JobApplicationService.prototype.fetchJobApplications = function () {
        var _this = this;
        this.httpService.get('jobApplication/lists').subscribe(function (data) {
            _this.jobApplications.next(data);
        });
    };
    JobApplicationService.prototype.fetchModel = function () {
        return this.httpService.get('jobApplication/lists');
    };
    JobApplicationService.prototype.fetchMyApplications = function (user_id) {
        return this.httpService.get('jobApplication/lists/myapp/' + user_id);
    };
    JobApplicationService.prototype.findCandidate = function (user_id) {
        // console.log(user_id);
        return this.httpService.get('jobApplication/candidate/' + user_id);
    };
    JobApplicationService.prototype.getUserName = function (user_id) {
        var _this = this;
        return this.httpService.get('jobApplication/user/' + user_id).subscribe(function (data) {
            _this.jobApplications.next(data);
            // console.log(data.first_name);
        });
    };
    JobApplicationService.prototype.fetchJobPosts = function () {
        var _this = this;
        this.httpService.get('job-post/lists').subscribe(function (data) {
            _this.jobPosts.next(data);
        });
    };
    JobApplicationService.prototype.addJobApplication = function (jobApplication) {
        console.log("Service file ");
        console.log(jobApplication);
        return this.httpService.post('jobApplication/', jobApplication);
    };
    JobApplicationService.prototype.updateJobApplication = function (jobApplication) {
        console.log("Service file ");
        console.log(jobApplication._id);
        return this.httpService.put('jobApplication/update/' + jobApplication._id, jobApplication);
    };
    JobApplicationService.prototype.deleteJobApplication = function (id) {
        var _this = this;
        var confirmed = confirm('Are you sure you want to delete this application?');
        if (confirmed) {
            this.httpService.delete('jobApplication/delete/' + id).subscribe(function (data) {
                _this.fetchJobApplications();
            });
        }
    };
    //get specific application
    JobApplicationService.prototype.getApplication = function (id) {
        return this.httpService.get('jobApplication/lists/' + id);
    };
    JobApplicationService.prototype.getJobPostData = function (id) {
        return this.httpService.get('job-post/lists/' + id);
        // return this.httpService.get('jobApplication/lists/' + id)
    };
    JobApplicationService.prototype.jobApplicationSubscriber = function () {
        return this.jobApplications;
    };
    JobApplicationService.prototype.clearJobApplication = function () {
        this.jobApplications.next(undefined);
        ///same as {jobApplications = undefined}
    };
    JobApplicationService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    JobApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], JobApplicationService);
    return JobApplicationService;
}());



/***/ }),

/***/ "./src/app/data/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/data/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpService) {
        this.httpService = httpService;
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    UserService.prototype.fetchStudents = function () {
        var _this = this;
        this.httpService.get('user/list').subscribe(function (data) {
            _this.users.next(data);
        });
    };
    UserService.prototype.addUser = function (userData) {
        return this.httpService.post('user/register', userData);
    };
    UserService.prototype.authenticate = function (loginData) {
        return this.httpService.post('user/authenticate', loginData);
    };
    UserService.prototype.clearStudents = function () {
        this.users.next(undefined);
    };
    UserService.prototype.usersSubscriber = function () {
        return this.users;
    };
    UserService.ctorParameters = function () { return [
        { type: app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router, storage) {
        this.location = location;
        this.router = router;
        this.storage = storage;
        this.yScrollStack = [];
        var userInfo = this.storage.get('userInfo');
        if (userInfo && userInfo.user.role == 'Candidate') {
            this.router.navigate(['/candidate']);
        }
        else if (userInfo && userInfo.user.role == 'Employer') {
            this.router.navigate(['/employer']);
        }
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/providers-list.ts":
/*!********************************************************!*\
  !*** ./src/app/layouts/admin-layout/providers-list.ts ***!
  \********************************************************/
/*! exports provided: ProvidersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersList", function() { return ProvidersList; });
/* harmony import */ var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _data_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/user/user.service */ "./src/app/data/user/user.service.ts");
/* harmony import */ var _data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/assessment/assessment.service */ "./src/app/data/assessment/assessment.service.ts");



var ProvidersList = [
    _providers_http_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"],
    _data_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
    _data_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_2__["AssessmentService"]
];


/***/ }),

/***/ "./src/app/layouts/candidate-layout/candidate-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/candidate-layout/candidate-layout.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2FuZGlkYXRlLWxheW91dC9jYW5kaWRhdGUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/candidate-layout/candidate-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/candidate-layout/candidate-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: CandidateLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLayoutComponent", function() { return CandidateLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var CandidateLayoutComponent = /** @class */ (function () {
    function CandidateLayoutComponent(location, router, storage) {
        this.location = location;
        this.router = router;
        this.storage = storage;
        this.yScrollStack = [];
        var userInfo = this.storage.get('userInfo');
        if (userInfo && userInfo.user.role == 'Admin') {
            this.router.navigate(['/admin']);
        }
        else if (userInfo && userInfo.user.role == 'Employer') {
            this.router.navigate(['/employer']);
        }
    }
    CandidateLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    CandidateLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    CandidateLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    CandidateLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    CandidateLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    CandidateLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    CandidateLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./candidate-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/candidate-layout/candidate-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./candidate-layout.component.scss */ "./src/app/layouts/candidate-layout/candidate-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], CandidateLayoutComponent);
    return CandidateLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/employer-layout/employer-layout.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layouts/employer-layout/employer-layout.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZW1wbG95ZXItbGF5b3V0L2VtcGxveWVyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/employer-layout/employer-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/employer-layout/employer-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerLayoutComponent", function() { return EmployerLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/providers/storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var EmployerLayoutComponent = /** @class */ (function () {
    function EmployerLayoutComponent(location, router, storage) {
        this.location = location;
        this.router = router;
        this.storage = storage;
        this.yScrollStack = [];
        var userInfo = this.storage.get('userInfo');
        if (userInfo && userInfo.user.role == 'Admin') {
            this.router.navigate(['/admin']);
        }
        else if (userInfo && userInfo.user.role == 'Candidate') {
            this.router.navigate(['/candidate']);
        }
    }
    EmployerLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    EmployerLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    EmployerLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    EmployerLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    EmployerLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    EmployerLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    EmployerLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employer-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/employer-layout/employer-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employer-layout.component.scss */ "./src/app/layouts/employer-layout/employer-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_providers_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], EmployerLayoutComponent);
    return EmployerLayoutComponent;
}());



/***/ }),

/***/ "./src/app/providers/http/http.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/http/http.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http, storage) {
        this.http = http;
        this.storage = storage;
        //private host:string = "http://localhost:3000/";
        this.host = "https://upstaffed-mm.herokuapp.com/";
        // private httpOptions: HttpParams;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        // this.httpOptions = {};
        this.updateAuth();
        this.userInfo = this.storage.get('userInfo');
    }
    HttpService.prototype.updateAuth = function (userData) {
        if (userData === void 0) { userData = undefined; }
        var userInfo = userData ? userData : this.storage.get('userInfo');
        if (userInfo && userInfo.token) {
            // console.log(userInfo.token)
            this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token
            });
        }
    };
    HttpService.prototype.getFileUploadHeaders = function () {
        return {
            reportProgress: true,
            observe: 'events',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + this.userInfo.token
            })
        };
    };
    HttpService.prototype.get = function (api_route) {
        return this.http.get(this.host + api_route, this.httpOptions);
    };
    HttpService.prototype.post = function (api_route, params, httpOptionalParams) {
        if (httpOptionalParams === void 0) { httpOptionalParams = {}; }
        var httpHeadParams = Object.assign(this.httpOptions, httpOptionalParams);
        console.log(httpHeadParams);
        return this.http.post(this.host + api_route, params, httpHeadParams);
    };
    HttpService.prototype.put = function (api_route, params, httpOptionalParams) {
        if (httpOptionalParams === void 0) { httpOptionalParams = {}; }
        var httpHeadParams = Object.assign(this.httpOptions, httpOptionalParams);
        console.log(httpHeadParams);
        return this.http.put(this.host + api_route, params, httpHeadParams);
    };
    HttpService.prototype.delete = function (api_route) {
        return this.http.delete(this.host + api_route, this.httpOptions);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
    ]; };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/providers/storage/storage.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/storage/storage.service.ts ***!
  \******************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maitrimodi/Documents/web_project_nithya/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map