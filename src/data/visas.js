export const visas = [
    {
        name: "Australia",
        discountedPrice: "USD 120.00",
        description: "Australia, with its captivating mix of vibrant urban centers, coastal paradises, pristine wilderness, incredible wildlife, and ecological diversity, is undeniably one of the world's top destinations for travelers seeking memorable experiences. At 200 Travels, we specialize in providing efficient visa services for those intending to visit Australia. Whether your purpose is leisure, education, employment, or business, our team of seasoned visa professionals will navigate you through the intricate visa procedures.",
        types: [
            {
                name: "Study Visas",
                validity: "1 to 4 years",
                canDependentCome: "Yes",
                processingDuration: "4 Months",
                documentsRequired: [
                    "Confirmation of Enrolment (CoE)", "Valid Passport", "Visa Application Form", "Visa Application Fee", "Genuine Temporary Entrant (GTE) Statement", "Academic and Work Experience Documents", "English Proficiency Test Results (IELTS, TOEFL, or PTE scores)", "Overseas Student Health Cover (OSHC)", "Financial Requirements (Bank statements, Evidence of scholarships, Sponsorship letters)", "Police Character Requirements", "Health Requirements", "Statement of Purpose (SOP)", "Biometric Information"
                ]
            },
            {
                name: "Work Visas",
                validity: "Up to 5 years (Depending on type of work visa)",
                canDependentCome: "Yes",
                processingDuration: "2 to 4 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Visa Application Fee", "Job Offer from an Australian Employer", "Employer Nomination", "Proof of Work Experience", "English Language Proficiency Test Results", "Health Insurance", "Police Clearance", "Biometric Information"
                ] 
            },
            {
                name: "Business Visas",
                validity: "Up to 5 years",
                canDependentCome: "Yes",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Visa Application Fee", "Business Invitation Letter", "Proof of Business Activities or Investment", "Evidence of Financial Capacity", "Health and Character Requirements", "Biometric Information"
                ] 
            },
            {
                name: "Digital Nomad Considerations",
                validity: "12 Months",
                canDependentCome: "No",
                processingDuration: "1 to 2 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Visa Application Fee", "Proof of Remote Employment or Freelance Work", "Evidence of Financial Stability (Bank Statements)", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
        ]
    },
    {
        name: "Germany",
        discountedPrice: "USD 160.00",
        description: "Germany is renowned for its excellent education system, high-quality healthcare, and vibrant cities. Whether you're coming for studies, work, business, or as a digital nomad, we can help guide you through the visa process.",
        types: [
            {
                name: "Study Visas",
                validity: "1 to 4 years",
                canDependentCome: "Yes",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Admission Letter from a German University", "Valid Passport", "Visa Application Form", "Visa Application Fee", "Proof of Financial Support (Blocked account or scholarship)", "Academic Transcripts and Certificates", "English or German Proficiency Test Results", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
            {
                name: "Work Visas",
                validity: "Up to 4 years (or more, depending on employment contract)",
                canDependentCome: "Yes",
                processingDuration: "3 to 6 Months",
                documentsRequired: [
                    "Valid Passport", "Job Offer from a German Employer", "Proof of Work Experience", "Visa Application Fee", "Proof of Qualification", "Health Insurance", "Police Clearance", "Biometric Information"
                ] 
            },
            {
                name: "Business Visas",
                validity: "Up to 90 days per stay (Schengen Business Visa)",
                canDependentCome: "No",
                processingDuration: "1 to 2 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Invitation Letter from German Business Partner", "Proof of Financial Stability", "Travel and Medical Insurance", "Business Registration Documents", "Biometric Information"
                ] 
            },
            {
                name: "Digital Nomad Considerations",
                validity: "12 Months (Freelancer Visa or Residence Permit for Self-Employment)",
                canDependentCome: "Yes",
                processingDuration: "3 to 6 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Proof of Freelance Work or Remote Employment", "Proof of Financial Stability (Bank Statements)", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
        ]
    },
    {
        name: "China",
        discountedPrice: "USD 100.00",
        description: "China, with its deep history, stunning landscapes, and rapidly growing economy, is an attractive destination for students, professionals, and entrepreneurs.",
        types: [
            {
                name: "Study Visas",
                validity: "Up to 4 years (depending on the program)",
                canDependentCome: "No",
                processingDuration: "2 to 4 Months",
                documentsRequired: [
                    "Admission Letter from a Chinese University", "Valid Passport", "Visa Application Form", "Visa Application Fee", "Financial Support Proof", "Medical Report", "Academic Transcripts and Certificates", "Proof of Accommodation", "Biometric Information"
                ]
            },
            {
                name: "Work Visas",
                validity: "1 to 5 years (Depending on the employment contract)",
                canDependentCome: "Yes",
                processingDuration: "2 to 4 Months",
                documentsRequired: [
                    "Valid Passport", "Job Offer from a Chinese Employer", "Work Permit Notification Letter", "Visa Application Form", "Proof of Work Experience", "Health Insurance", "Police Clearance Certificate", "Biometric Information"
                ] 
            },
            {
                name: "Business Visas",
                validity: "3 to 12 months (depending on the type of business visa)",
                canDependentCome: "No",
                processingDuration: "1 to 2 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Invitation Letter from a Chinese Business Partner", "Business Registration Documents", "Proof of Financial Capacity", "Health Insurance", "Biometric Information"
                ] 
            },
            {
                name: "Digital Nomad Considerations",
                validity: "Not available for China (but specific long-term business visas may apply)",
                canDependentCome: "No",
                processingDuration: "N/A",
                documentsRequired: []
            },
        ]
    },
    {
        name: "Ireland",
        discountedPrice: "USD 190.00",
        description: "Ireland is a popular destination for students, professionals, and digital nomads due to its friendly policies and vibrant culture.",
        types: [
            {
                name: "Study Visas",
                validity: "1 to 4 years",
                canDependentCome: "Yes",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Offer Letter from an Irish University", "Valid Passport", "Visa Application Form", "Visa Application Fee", "Proof of Financial Support", "Health Insurance", "Academic Transcripts", "Proof of English Proficiency (IELTS, TOEFL)", "Biometric Information"
                ]
            },
            {
                name: "Work Visas",
                validity: "1 to 5 years (Depending on the employment contract)",
                canDependentCome: "Yes",
                processingDuration: "2 to 4 Months",
                documentsRequired: [
                    "Valid Passport", "Job Offer from an Irish Employer", "Work Permit Application", "Proof of Work Experience", "Health Insurance", "Proof of Accommodation", "Police Clearance Certificate", "Biometric Information"
                ] 
            },
            {
                name: "Business Visas",
                validity: "90 days",
                canDependentCome: "No",
                processingDuration: "1 to 2 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Invitation Letter from an Irish Business Partner", "Proof of Business Activity", "Proof of Financial Stability", "Health Insurance", "Biometric Information"
                ] 
            },
            {
                name: "Digital Nomad Considerations",
                validity: "12 months",
                canDependentCome: "Yes",
                processingDuration: "1 to 2 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Proof of Remote Work or Freelancing", "Proof of Financial Stability", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
        ]
    },
    {
        name: "Russia",
        discountedPrice: "USD 160.00",
        description: "Russia, with its rich cultural heritage, renowned academic institutions, and growing business opportunities, is an excellent destination for students, professionals, and entrepreneurs.",
        types: [
            {
                name: "Study Visas",
                validity: "1 to 4 years",
                canDependentCome: "Yes",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Invitation from a Russian University", "Valid Passport", "Visa Application Form", "Visa Application Fee", "Proof of Financial Support", "Medical Certificate (HIV Test)", "Academic Transcripts", "Passport-Sized Photos", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
            {
                name: "Work Visas",
                validity: "1 to 3 years (based on the employment contract)",
                canDependentCome: "Yes",
                processingDuration: "3 to 4 Months",
                documentsRequired: [
                    "Valid Passport", "Job Offer from a Russian Employer", "Work Permit Application", "Proof of Qualification", "Health Insurance", "Police Clearance", "Biometric Information"
                ] 
            },
            {
                name: "Business Visas",
                validity: "Up to 12 months",
                canDependentCome: "No",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Invitation Letter from Russian Business Partner", "Proof of Financial Stability", "Business Registration Documents", "Health Insurance", "Biometric Information"
                ] 
            },
            {
                name: "Digital Nomad Considerations",
                validity: "12 months (Freelancer Visa or similar)",
                canDependentCome: "Yes",
                processingDuration: "2 to 3 Months",
                documentsRequired: [
                    "Valid Passport", "Visa Application Form", "Proof of Freelance Work or Remote Employment", "Proof of Financial Stability", "Health Insurance", "Proof of Accommodation", "Biometric Information"
                ]
            },
        ]
    }
];
