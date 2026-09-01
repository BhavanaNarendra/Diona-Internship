/* =========================================
   DEMO DATA
========================================= */

const datasets = [

    /* =====================================
       DATASET 1
    ===================================== */

    {
        claimNumber: "DEMO-20042047",

        workerName: "Alex Johnson",

        reportDate: "March 15, 2024",

        appId: "DEMO-712041",

        submitted: "March 19, 2024 19:21",

        returnToWork: {
            status: "returned",
            returnDate: "March 11, 2024",
            duties: "Full duties, regular hours",
            expectedReturnDate: "Not applicable",
            concerns: "No major concerns."
        },

        recovery: {
            status: "not-recovered",
            comments:
                "The worker continues to experience some discomfort while completing regular duties."
        },

        pain: 6,

        medicalTreatment: {
            continuing: true,
            providerType: "Physiotherapist",
            providerName: "Dr. Taylor",
            lastTreatmentDate: "March 12, 2024",
            frequency: "Twice a week"
        },

        homeExercises: {
            doing: true,
            exercises:
                "Stretching, mobility exercises and light strengthening."
        },

        medication: {
            taking: true,
            name: "Demo Medication"
        },

        additionalInformation:
            "The worker has provided additional information regarding recovery and return to work."
    },


    /* =====================================
       DATASET 2
    ===================================== */

    {
        claimNumber: "DEMO-30058721",

        workerName: "Priya Sharma",

        reportDate: "April 10, 2024",

        appId: "DEMO-824315",

        submitted: "April 12, 2024 10:30",

        returnToWork: {
            status: "not-returned",
            returnDate: "Not applicable",
            duties: "Modified duties, reduced hours",
            expectedReturnDate: "April 22, 2024",
            concerns:
                "The worker is concerned about returning to regular hours."
        },

        recovery: {
            status: "recovered",
            comments:
                "The worker reports significant improvement and expects a full recovery."
        },

        pain: 3,

        medicalTreatment: {
            continuing: false,
            providerType: "Medical Doctor",
            providerName: "Dr. Kumar",
            lastTreatmentDate: "April 5, 2024",
            frequency: "Once a week"
        },

        homeExercises: {
            doing: true,
            exercises:
                "Walking, stretching and prescribed rehabilitation exercises."
        },

        medication: {
            taking: false,
            name: "No medication"
        },

        additionalInformation:
            "The worker reports improvement and is following the recommended recovery plan."
    }

];


/* =========================================
   HELPER FUNCTION - FIELD
========================================= */

function createField(label, value) {

    return `
        <div class="field">

            <div class="field-label">
                ${label}
            </div>

            <div class="field-value">
                ${value || "—"}
            </div>

        </div>
    `;
}


/* =========================================
   HELPER FUNCTION - OPTION
========================================= */

function createOption(text, selected) {

    return `
        <div class="option ${selected ? "selected" : ""}">
            ${selected ? "✓ " : ""}
            ${text}
        </div>
    `;
}


/* =========================================
   HEADER
========================================= */

function generateHeader(data) {

    return `
        <header class="report-header">

            <div class="header-top">

                <div class="logo-area">

                    WCB MANITOBA

                    <div class="logo-subtitle">
                        Workers Compensation Board
                    </div>

                </div>

                <div class="document-title">

                    <h1>
                        Worker Progress Report
                    </h1>

                    <p>
                        ${data.reportDate}
                    </p>

                </div>

            </div>


            <div class="contact-bar">

                <span class="contact-item">
                    333 Broadway, Winnipeg, MB R3C 4W3
                </span>

                <span class="contact-item">
                    Phone: (204) 954-4321
                </span>

                <span class="contact-item">
                    Toll Free: 1-855-954-4321
                </span>

                <span class="contact-item">
                    wcb.mb.ca
                </span>

            </div>

        </header>
    `;
}


/* =========================================
   CLAIM INFORMATION
========================================= */

function generateClaimInformation(data) {

    return `
        <section class="section">

            <div class="section-title">
                Claim Information
            </div>

            <div class="field-grid">

                ${createField(
                    "Claim Number",
                    data.claimNumber
                )}

                ${createField(
                    "Worker Name",
                    data.workerName
                )}

                ${createField(
                    "Worker App ID",
                    data.appId
                )}

                ${createField(
                    "Submitted",
                    data.submitted
                )}

            </div>

        </section>
    `;
}


/* =========================================
   RETURN TO WORK
========================================= */

function generateReturnToWork(data) {

    return `
        <section class="section">

            <div class="section-title">
                Return to Work
            </div>

            <div class="options">

                ${createOption(
                    "I have not returned to work",
                    data.returnToWork.status === "not-returned"
                )}

                ${createOption(
                    "I returned to work",
                    data.returnToWork.status === "returned"
                )}

            </div>


            <div class="field-grid">

                ${createField(
                    "Return Date",
                    data.returnToWork.returnDate
                )}

                ${createField(
                    "Work Duties",
                    data.returnToWork.duties
                )}

                ${createField(
                    "Expected Return Date",
                    data.returnToWork.expectedReturnDate
                )}

                ${createField(
                    "Concerns About Returning",
                    data.returnToWork.concerns
                )}

            </div>

        </section>
    `;
}


/* =========================================
   RECOVERY
========================================= */

function generateRecovery(data) {

    return `
        <section class="section">

            <div class="section-title">
                Recovery
            </div>

            <div class="options">

                ${createOption(
                    "I have not fully recovered",
                    data.recovery.status === "not-recovered"
                )}

                ${createOption(
                    "I have fully recovered",
                    data.recovery.status === "recovered"
                )}

            </div>

            <div class="comment-box">

                <strong>
                    Recovery Comments:
                </strong>

                <br>

                ${data.recovery.comments}

            </div>

        </section>
    `;
}


/* =========================================
   PAIN
========================================= */

function generatePain(data) {

    let numbers = "";

    for (let i = 1; i <= 10; i++) {

        numbers += `
            <div class="pain-number
                ${i === data.pain ? "selected" : ""}">
                ${i}
            </div>
        `;
    }

    return `
        <section class="section">

            <div class="section-title">
                Pain / Discomfort
            </div>

            <div class="section-description">

                Current pain/discomfort rating on a
                scale of 1-10, where 1 is no pain and
                10 is severe pain.

            </div>

            <div class="pain-scale">

                ${numbers}

            </div>

            <div class="field-grid" style="margin-top: 10px;">

                ${createField(
                    "Current Pain Rating",
                    `${data.pain} / 10`
                )}

            </div>

        </section>
    `;
}


/* =========================================
   MEDICAL TREATMENT
========================================= */

function generateMedicalTreatment(data) {

    return `
        <section class="section">

            <div class="section-title">
                Medical Treatment
            </div>

            <div class="options">

                ${createOption(
                    "I am continuing to receive medical treatment",
                    data.medicalTreatment.continuing
                )}

                ${createOption(
                    "I am not continuing to receive medical treatment",
                    !data.medicalTreatment.continuing
                )}

            </div>

            <div class="field-grid">

                ${createField(
                    "Medical Provider Type",
                    data.medicalTreatment.providerType
                )}

                ${createField(
                    "Medical Provider Name",
                    data.medicalTreatment.providerName
                )}

                ${createField(
                    "Last Medical Treatment",
                    data.medicalTreatment.lastTreatmentDate
                )}

                ${createField(
                    "Treatment Frequency",
                    data.medicalTreatment.frequency
                )}

            </div>

        </section>
    `;
}


/* =========================================
   HOME EXERCISES
========================================= */

function generateExercises(data) {

    return `
        <section class="section">

            <div class="section-title">
                Home Exercises
            </div>

            <div class="options">

                ${createOption(
                    "I am not doing home exercises",
                    !data.homeExercises.doing
                )}

                ${createOption(
                    "I am doing home exercises",
                    data.homeExercises.doing
                )}

            </div>

            <div class="comment-box">

                <strong>
                    Exercises:
                </strong>

                <br>

                ${data.homeExercises.exercises}

            </div>

        </section>
    `;
}


/* =========================================
   MEDICATION
========================================= */

function generateMedication(data) {

    return `
        <section class="section">

            <div class="section-title">
                Medication
            </div>

            <div class="options">

                ${createOption(
                    "I am not taking medication",
                    !data.medication.taking
                )}

                ${createOption(
                    "I am taking medication",
                    data.medication.taking
                )}

            </div>

            <div class="field-grid">

                ${createField(
                    "Medication Name",
                    data.medication.name
                )}

            </div>

        </section>
    `;
}


/* =========================================
   OTHER INFORMATION
========================================= */

function generateAdditionalInformation(data) {

    return `
        <section class="section">

            <div class="section-title">
                Other Information
            </div>

            <div class="comment-box">

                ${data.additionalInformation}

            </div>

        </section>
    `;
}


/* =========================================
   CERTIFICATION
========================================= */

function generateCertification() {

    return `
        <section class="section">

            <div class="section-title">
                Certification
            </div>

            <div class="certification">

                I certify that the information given on this
                form is true, correct and complete to the best
                of my knowledge.

                <br><br>

                I agree to notify the Workers Compensation
                Board of Manitoba immediately once I return to
                any form of work and/or employment.

                <br><br>

                I understand that it is an offence to knowingly
                make a false statement to the WCB. I also
                understand that it is an offence to withhold
                information from WCB which affects my entitlement
                to compensation.

                <br><br>

                I understand that refusing to co-operate with,
                or follow my treatment, may result in the WCB
                reducing or suspending my benefits.

                <br><br>

                I understand that the Privacy Notice applies
                to the personal information collected in this
                document.

            </div>

        </section>
    `;
}


/* =========================================
   FOOTER
========================================= */

function generateFooter(data, pageNumber) {

    return `
        <footer class="report-footer">

            <span>
                Worker App ID: ${data.appId}
            </span>

            <span>
                Submitted: ${data.submitted}
            </span>

            <span class="page-number">
                Page ${pageNumber} of 3
            </span>

        </footer>
    `;
}


/* =========================================
   PAGE 1
========================================= */

function generatePageOne(data) {

    return `
        <div class="report-page">

            ${generateHeader(data)}

            ${generateClaimInformation(data)}

            ${generateReturnToWork(data)}

            ${generateRecovery(data)}

            <section class="section">

                <div class="section-title">
                    Worker Comments
                </div>

                <div class="comment-box">

                    The worker has provided the following
                    information regarding their return to work
                    and recovery.

                </div>

            </section>

            ${generateFooter(data, 1)}

        </div>
    `;
}


/* =========================================
   PAGE 2
========================================= */

function generatePageTwo(data) {

    return `
        <div class="report-page">

            ${generateHeader(data)}

            ${generatePain(data)}

            ${generateMedicalTreatment(data)}

            ${generateExercises(data)}

            ${generateMedication(data)}

            ${generateAdditionalInformation(data)}

            ${generateFooter(data, 2)}

        </div>
    `;
}


/* =========================================
   PAGE 3
========================================= */

function generatePageThree(data) {

    return `
        <div class="report-page">

            ${generateHeader(data)}

            ${generateCertification()}

            <section class="section">

                <div class="section-title">
                    Report Summary
                </div>

                <div class="field-grid">

                    ${createField(
                        "Worker",
                        data.workerName
                    )}

                    ${createField(
                        "Claim Number",
                        data.claimNumber
                    )}

                    ${createField(
                        "Pain Rating",
                        `${data.pain} / 10`
                    )}

                    ${createField(
                        "Report Date",
                        data.reportDate
                    )}

                </div>

            </section>

            <section class="section">

                <div class="comment-box">

                    This document has been generated dynamically
                    from the report dataset using HTML, CSS and
                    JavaScript.

                </div>

            </section>

            ${generateFooter(data, 3)}

        </div>
    `;
}


/* =========================================
   GENERATE COMPLETE REPORT
========================================= */

function generateReport(data) {

    const reportContainer =
        document.getElementById("report");

    reportContainer.innerHTML = `

        ${generatePageOne(data)}

        ${generatePageTwo(data)}

        ${generatePageThree(data)}

    `;
}


/* =========================================
   LOAD DATASET
========================================= */

function loadDataset(index) {

    generateReport(datasets[index]);

}


/* =========================================
   INITIAL LOAD
========================================= */

generateReport(datasets[0]);