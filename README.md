WCB Assignment — Dynamic PDF-Based Web Reports

Project Overview

This project contains two web-based exercises developed using HTML, CSS, and JavaScript.

The objective is to create web pages that generate content similar to the provided PDF documents while supporting dynamic data, structured layouts, headers, footers, page numbers, tables, and print-to-PDF functionality.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Technologies Used

- HTML5
- CSS3
- JavaScript

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project Structure

wcb-assignment/
│
├── README.md
│
├── ai-prompt-history.md
│
├── exercise-1/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── exercise-2/
    ├── index.html
    ├── style.css
    └── script.js

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercise 1 — Worker Progress Report

Exercise 1 implements a dynamic Worker Progress Report based on the provided reference PDF.

Features

- Structured report layout
- Header and footer
- Worker information
- Dynamic report data
- Multiple report sections
- Page numbering
- Demo Dataset 1
- Demo Dataset 2
- Print / Save as PDF functionality
- A4 print layout
- Responsive screen layout

Dynamic Behaviour

The report data is maintained in JavaScript.

The same HTML structure can display different worker information by switching between the available demo datasets.

This demonstrates that the page is not dependent on a single fixed set of data.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercise 2 — Medical & Travel Expense Request

Exercise 2 implements a dynamic Medical & Travel Expense Request based on the provided reference PDF.

Expense Categories

The implementation includes:

- Prescription Drugs
- Over-the-Counter Drugs
- Medical Supplies
- Parking for Medical Appointments
- Mileage to Medical Appointments
- Bus or Taxi Fare for Medical Appointments

Features

- Worker information
- Dynamic expense tables
- Multiple records per category
- Automatic expense calculation
- Expense summary
- Privacy notice
- Header and footer
- Page numbers
- Demo Dataset 1
- Demo Dataset 2
- Print / Save as PDF functionality
- A4 print layout
- Responsive design

Dynamic Behaviour

The JavaScript data model supports different numbers of records in each expense category.

For example, one dataset may contain one prescription record while another dataset can contain multiple prescription records.

The page automatically generates the corresponding table rows.

Expense Calculation

The total monetary expense is calculated dynamically using JavaScript from the applicable monetary expense entries.

Mileage is displayed as kilometres because the provided reference document specifies kilometres but does not provide a reimbursement rate. Therefore, no reimbursement rate has been assumed.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Assumptions

Where the reference PDFs did not provide sufficient information for a dynamic implementation, the following assumptions were made:

1. Demo data is used to demonstrate dynamic behaviour.
2. The same report template is reused for different datasets.
3. Monetary expense values are calculated dynamically using JavaScript.
4. Mileage is displayed in kilometres and is not converted into a monetary value because no mileage reimbursement rate was specified in the reference document.
5. The browser's print functionality is used to support Print / Save as PDF.
6. The implementation uses HTML, CSS and JavaScript without a backend or database.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

How to Run

No installation or build process is required.

Exercise 1

Open:

exercise-1/index.html

in a modern web browser.

Exercise 2

Open:

exercise-2/index.html

in a modern web browser.

Use the demo buttons to switch between datasets and use Print / Save PDF to generate a printable version.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser Compatibility

The project is designed to run in modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

AI Usage

AI assistance was used during development for code generation, explanation, debugging guidance, and project structuring.

The relevant prompt history is included separately in:

ai-prompt-history.md

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Video Demonstrations

The repository will contain or link to the required narrated demonstrations.

Exercise 1

2-minute narrated demonstration covering:

- Requirement understanding
- Assumptions
- Browser execution
- Dynamic dataset demonstration
- HTML/CSS/JavaScript implementation
- Challenges and solutions
- AI usage disclosure

Exercise 2

2-minute narrated demonstration covering:

- Requirement understanding
- Assumptions
- Browser execution
- Dynamic table demonstration
- Automatic expense calculation
- HTML/CSS/JavaScript implementation
- Challenges and solutions
- AI usage disclosure

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Submission

The GitHub repository will contain both completed exercises, project documentation, AI prompt history, and the required video demonstrations/links.