/* =====================================================
   EXERCISE 2
   MEDICAL & TRAVEL EXPENSE REQUEST
===================================================== */


/* =====================================================
   DATASETS
===================================================== */

const datasets = [

    /* =================================================
       DATASET 1
    ================================================= */

    {

        workerName: "Alex Johnson",

        claimNumber: "DEMO-20042047",

        appId: "DEMO-712041",

        submitted:
            "March 28, 2024 20:43",


        prescriptionDrugs: [

            {
                drugName: "Naproxen",

                datePurchased:
                    "February 28, 2024",

                healthcareProvider:
                    "Dr. Taylor",

                amount: 20
            }

        ],


        overTheCounter: [

            {
                drugName: "Advil",

                datePurchased:
                    "March 28, 2024",

                amount: 8,

                seller:
                    "Shoppers Drug Mart",

                reason:
                    "Pain"
            }

        ],


        medicalSupplies: [

            {
                item: "Tensor",

                datePurchased:
                    "February 28, 2024",

                prescribed: "Yes",

                amount: 10,

                seller:
                    "Shoppers Drug Mart"
            }

        ],


        parking: [

            {
                facility:
                    "333 St Mary Ave, Winnipeg MB R3C 4A5",

                date:
                    "March 28, 2024",

                amount: 10,

                meter:
                    "12245"
            }

        ],


        mileage: [

            {
                appointmentDate:
                    "March 28, 2024",

                facility:
                    "HSC, 820 Sherbrook St, Winnipeg MB",

                workplace:
                    "WCB, 333 Broadway, Winnipeg MB",

                kilometers: 20
            }

        ],


        transportation: [

            {
                appointmentDate:
                    "March 28, 2024",

                startingPoint:
                    "Downtown Winnipeg",

                facility:
                    "HSC Winnipeg Women's Hospital",

                type: "Bus",

                amount: 3
            },


            {
                appointmentDate:
                    "March 27, 2024",

                startingPoint:
                    "25 Furby St, Winnipeg MB",

                facility:
                    "440 Edmonton St, Winnipeg MB",

                type: "Taxi",

                amount: 15
            }

        ]

    },


    /* =================================================
       DATASET 2
    ================================================= */

    {

        workerName:
            "Priya Sharma",

        claimNumber:
            "DEMO-30058721",

        appId:
            "DEMO-824315",

        submitted:
            "April 12, 2024 10:30",


        prescriptionDrugs: [

            {
                drugName:
                    "Naproxen",

                datePurchased:
                    "April 1, 2024",

                healthcareProvider:
                    "Dr. Kumar",

                amount: 20
            },


            {
                drugName:
                    "Ibuprofen",

                datePurchased:
                    "April 3, 2024",

                healthcareProvider:
                    "Dr. Kumar",

                amount: 12
            },


            {
                drugName:
                    "Acetaminophen",

                datePurchased:
                    "April 5, 2024",

                healthcareProvider:
                    "Dr. Rao",

                amount: 9
            }

        ],


        overTheCounter: [

            {
                drugName:
                    "Advil",

                datePurchased:
                    "April 2, 2024",

                amount: 8,

                seller:
                    "Shoppers Drug Mart",

                reason:
                    "Pain"
            },


            {
                drugName:
                    "Cold Relief",

                datePurchased:
                    "April 4, 2024",

                amount: 11,

                seller:
                    "Pharmacy Plus",

                reason:
                    "Recovery"
            }

        ],


        medicalSupplies: [

            {
                item:
                    "Tensor",

                datePurchased:
                    "April 1, 2024",

                prescribed:
                    "Yes",

                amount: 10,

                seller:
                    "Medical Store"
            },


            {
                item:
                    "Knee Support",

                datePurchased:
                    "April 4, 2024",

                prescribed:
                    "Yes",

                amount: 25,

                seller:
                    "Health Supplies"
            }

        ],


        parking: [

            {
                facility:
                    "City Medical Centre",

                date:
                    "April 2, 2024",

                amount: 10,

                meter:
                    "P1022"
            },


            {
                facility:
                    "General Hospital",

                date:
                    "April 6, 2024",

                amount: 12,

                meter:
                    "P2045"
            }

        ],


        mileage: [

            {
                appointmentDate:
                    "April 2, 2024",

                facility:
                    "City Medical Centre",

                workplace:
                    "Main Office",

                kilometers: 18
            },


            {
                appointmentDate:
                    "April 6, 2024",

                facility:
                    "General Hospital",

                workplace:
                    "Main Office",

                kilometers: 24
            }

        ],


        transportation: [

            {
                appointmentDate:
                    "April 2, 2024",

                startingPoint:
                    "Main Office",

                facility:
                    "City Medical Centre",

                type: "Bus",

                amount: 4
            },


            {
                appointmentDate:
                    "April 6, 2024",

                startingPoint:
                    "Main Office",

                facility:
                    "General Hospital",

                type: "Taxi",

                amount: 18
            },


            {
                appointmentDate:
                    "April 8, 2024",

                startingPoint:
                    "Home",

                facility:
                    "Physiotherapy Clinic",

                type: "Bus",

                amount: 5
            }

        ]

    }

];


/* =====================================================
   FORMAT MONEY
===================================================== */

function formatMoney(amount) {

    return `$${Number(amount).toFixed(2)}`;

}


/* =====================================================
   GENERATE HEADER
===================================================== */

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
                        Medical & Travel
                        Expense Request
                    </h1>

                    <p>

                        Claim Number:
                        ${data.claimNumber}

                    </p>

                </div>

            </div>


            <div class="contact-bar">

                <span>
                    333 Broadway,
                    Winnipeg, MB R3C 4W3
                </span>

                <span>
                    Phone: (204) 954-4321
                </span>

                <span>
                    Toll Free: 1-855-954-4321
                </span>

                <span>
                    wcb.mb.ca
                </span>

            </div>

        </header>

    `;

}


/* =====================================================
   GENERATE WORKER INFORMATION
===================================================== */

function generateWorkerInformation(data) {

    return `

        <section class="section">

            <div class="section-title">

                Worker Information

            </div>


            <div class="worker-info">


                <div class="info-item">

                    <span class="info-label">
                        Worker Name
                    </span>

                    <span class="info-value">
                        ${data.workerName}
                    </span>

                </div>


                <div class="info-item">

                    <span class="info-label">
                        Claim Number
                    </span>

                    <span class="info-value">
                        ${data.claimNumber}
                    </span>

                </div>


                <div class="info-item">

                    <span class="info-label">
                        Worker App ID
                    </span>

                    <span class="info-value">
                        ${data.appId}
                    </span>

                </div>


                <div class="info-item">

                    <span class="info-label">
                        Submitted
                    </span>

                    <span class="info-value">
                        ${data.submitted}
                    </span>

                </div>


            </div>

        </section>

    `;

}


/* =====================================================
   GENERATE TABLE ROWS
===================================================== */

function generateRows(rows, columns) {

    if (!rows || rows.length === 0) {

        return `

            <tr>

                <td
                    colspan="${columns}"
                    class="empty-row">

                    No expense records available.

                </td>

            </tr>

        `;

    }


    return rows.map(row => row).join("");

}


/* =====================================================
   PRESCRIPTION DRUGS
===================================================== */

function generatePrescriptionDrugs(data) {

    const rows =
        data.prescriptionDrugs
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.drugName}
                    </td>

                    <td>
                        ${item.datePurchased}
                    </td>

                    <td>
                        ${item.healthcareProvider}
                    </td>

                    <td class="amount">
                        ${formatMoney(item.amount)}
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Prescription Drugs

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Drug Name
                        </th>

                        <th>
                            Date Purchased
                        </th>

                        <th>
                            Healthcare Provider Name
                        </th>

                        <th>
                            Paid Amount
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${generateRows(
                        rows ? [rows] : [],
                        4
                    )}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   OVER-THE-COUNTER DRUGS
===================================================== */

function generateOTC(data) {

    const rows =
        data.overTheCounter
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.drugName}
                    </td>

                    <td>
                        ${item.datePurchased}
                    </td>

                    <td class="amount">
                        ${formatMoney(item.amount)}
                    </td>

                    <td>
                        ${item.seller}
                    </td>

                    <td>
                        ${item.reason}
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Over-the-Counter Drugs

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Drug Name
                        </th>

                        <th>
                            Date Purchased
                        </th>

                        <th>
                            Paid Amount
                        </th>

                        <th>
                            Seller's Name
                        </th>

                        <th>
                            Reason for Purchasing
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   MEDICAL SUPPLIES
===================================================== */

function generateMedicalSupplies(data) {

    const rows =
        data.medicalSupplies
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.item}
                    </td>

                    <td>
                        ${item.datePurchased}
                    </td>

                    <td>
                        ${item.prescribed}
                    </td>

                    <td class="amount">
                        ${formatMoney(item.amount)}
                    </td>

                    <td>
                        ${item.seller}
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Bandages, Braces or
                Other Medical Supplies

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Item Purchased
                        </th>

                        <th>
                            Date Purchased
                        </th>

                        <th>
                            Was this Prescribed?
                        </th>

                        <th>
                            Paid Amount
                        </th>

                        <th>
                            Seller's Name
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   PARKING
===================================================== */

function generateParking(data) {

    const rows =
        data.parking
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.facility}
                    </td>

                    <td>
                        ${item.date}
                    </td>

                    <td class="amount">
                        ${formatMoney(item.amount)}
                    </td>

                    <td>
                        ${item.meter}
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Parking for Medical Appointments

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Address of Healthcare
                            Provider / Facility
                        </th>

                        <th>
                            Date
                        </th>

                        <th>
                            Paid Amount
                        </th>

                        <th>
                            Meter Number
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   MILEAGE
===================================================== */

function generateMileage(data) {

    const rows =
        data.mileage
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.appointmentDate}
                    </td>

                    <td>
                        ${item.facility}
                    </td>

                    <td>
                        ${item.workplace}
                    </td>

                    <td>
                        ${item.kilometers} km
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Mileage to Medical Appointments

            </div>


            <div class="note">

                The WCB will generally reimburse
                only those transportation costs
                which are in excess of costs that
                would be incurred by the worker
                while travelling to and from work.

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Appointment Date
                        </th>

                        <th>
                            Healthcare Provider /
                            Medical Facility
                        </th>

                        <th>
                            Address of Workplace
                        </th>

                        <th>
                            Number of km
                            (Round Trip)
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   BUS / TAXI
===================================================== */

function generateTransportation(data) {

    const rows =
        data.transportation
        .map(item => {

            return `

                <tr>

                    <td>
                        ${item.appointmentDate}
                    </td>

                    <td>
                        ${item.startingPoint}
                    </td>

                    <td>
                        ${item.facility}
                    </td>

                    <td>
                        ${item.type}
                    </td>

                    <td class="amount">
                        ${formatMoney(item.amount)}
                    </td>

                </tr>

            `;

        })
        .join("");


    return `

        <section class="section">

            <div class="section-title">

                Bus or Taxi Fare for
                Medical Appointments

            </div>


            <div class="note">

                Pre-approval is required from your
                WCB representative to claim taxi
                fare(s).

            </div>


            <table class="expense-table">

                <thead>

                    <tr>

                        <th>
                            Appointment Date
                        </th>

                        <th>
                            Starting Point
                        </th>

                        <th>
                            Healthcare Provider /
                            Medical Facility
                        </th>

                        <th>
                            Bus or Taxi
                        </th>

                        <th>
                            Total Fare Paid
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </section>

    `;

}


/* =====================================================
   CALCULATE EXPENSE TOTALS
===================================================== */

function calculateTotals(data) {

    const prescription =
        data.prescriptionDrugs
        .reduce(
            (sum, item) =>
                sum + Number(item.amount),
            0
        );


    const otc =
        data.overTheCounter
        .reduce(
            (sum, item) =>
                sum + Number(item.amount),
            0
        );


    const supplies =
        data.medicalSupplies
        .reduce(
            (sum, item) =>
                sum + Number(item.amount),
            0
        );


    const parking =
        data.parking
        .reduce(
            (sum, item) =>
                sum + Number(item.amount),
            0
        );


    const transportation =
        data.transportation
        .reduce(
            (sum, item) =>
                sum + Number(item.amount),
            0
        );


    const total =
        prescription +
        otc +
        supplies +
        parking +
        transportation;


    return {

        prescription,

        otc,

        supplies,

        parking,

        transportation,

        total

    };

}


/* =====================================================
   SUMMARY
===================================================== */

function generateSummary(data) {

    const totals =
        calculateTotals(data);


    return `

        <section class="summary-box">

            <div class="summary-title">

                Expense Summary

            </div>


            <div class="summary-row">

                <span>
                    Prescription Drugs
                </span>

                <span>
                    ${formatMoney(
                        totals.prescription
                    )}
                </span>

            </div>


            <div class="summary-row">

                <span>
                    Over-the-Counter Drugs
                </span>

                <span>
                    ${formatMoney(
                        totals.otc
                    )}
                </span>

            </div>


            <div class="summary-row">

                <span>
                    Medical Supplies
                </span>

                <span>
                    ${formatMoney(
                        totals.supplies
                    )}
                </span>

            </div>


            <div class="summary-row">

                <span>
                    Parking
                </span>

                <span>
                    ${formatMoney(
                        totals.parking
                    )}
                </span>

            </div>


            <div class="summary-row">

                <span>
                    Bus / Taxi
                </span>

                <span>
                    ${formatMoney(
                        totals.transportation
                    )}
                </span>

            </div>


            <div class="grand-total">

                <span>
                    Total Expense Claimed
                </span>

                <span>
                    ${formatMoney(
                        totals.total
                    )}
                </span>

            </div>

        </section>

    `;

}


/* =====================================================
   PRIVACY NOTICE
===================================================== */

function generatePrivacyNotice() {

    return `

        <section class="privacy">

            <div class="privacy-title">

                Privacy Notice

            </div>


            I understand that the Privacy Notice
            applies to the personal information
            collected in this document.

        </section>

    `;

}


/* =====================================================
   FOOTER
===================================================== */

function generateFooter(data, pageNumber) {

    return `

        <footer class="report-footer">

            <span>

                Worker App ID:
                ${data.appId}

            </span>


            <span>

                Submitted:
                ${data.submitted}

            </span>


            <span class="page-number">

                Page ${pageNumber} of 2

            </span>

        </footer>

    `;

}


/* =====================================================
   GENERATE COMPLETE REPORT
===================================================== */

function generateReport(data) {

    const container =
        document.getElementById(
            "expenseReport"
        );


    container.innerHTML = `


        <!-- ==================================
             PAGE 1
        =================================== -->

        <div class="report-page">


            ${generateHeader(data)}


            ${generateWorkerInformation(data)}


            ${generatePrescriptionDrugs(data)}


            ${generateOTC(data)}


            ${generateMedicalSupplies(data)}


            ${generateParking(data)}


            ${generateFooter(
                data,
                1
            )}


        </div>


        <!-- ==================================
             PAGE 2
        =================================== -->

        <div class="report-page">


            ${generateHeader(data)}


            ${generateMileage(data)}


            ${generateTransportation(data)}


            ${generateSummary(data)}


            ${generatePrivacyNotice(data)}


            ${generateFooter(
                data,
                2
            )}


        </div>

    `;

}


/* =====================================================
   LOAD DATASET
===================================================== */

function loadDataset(index) {

    if (
        index < 0 ||
        index >= datasets.length
    ) {

        return;

    }


    generateReport(
        datasets[index]
    );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

generateReport(
    datasets[0]
);