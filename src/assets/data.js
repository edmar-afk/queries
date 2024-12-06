import librarybg from "./img/schoolOffices/library.jpg";
import clinicbg from "./img/schoolOffices/clinic.jpg";
import registrarbg from "./img/schoolOffices/clinic.jpg";
import admissionIcon from "../assets/img/officeBuildings/admission.png";
import guidanceIcon from "../assets/img/officeBuildings/guidance.jpg";
import registrarIcon from "../assets/img/officeBuildings/registrar.png";
import libraryIcon from "../assets/img/officeBuildings/library.png";
import clinicIcon from "../assets/img/officeBuildings/clinic.jpg";
import scholarshipIcon from "../assets/img/officeBuildings/scholarship.png";
import interfaithIcon from "../assets/img/officeBuildings/interfaith.jpg";
import servicesIcon from "../assets/img/officeBuildings/services.png";
import admissionBg from "../assets/img/schoolOffices/admission.jpeg";
const data = {
	officeData: [
		{ id: 1, officeName: "Admission", officeImg: admissionIcon },
		{ id: 2, officeName: "Guidance ", officeImg: guidanceIcon },
		{ id: 3, officeName: "Registrar", officeImg: registrarIcon },
		{ id: 4, officeName: "Library", officeImg: libraryIcon },
		{ id: 5, officeName: "Clinic", officeImg: clinicIcon },
		{ id: 6, officeName: "Scholarship", officeImg: scholarshipIcon },
		{ id: 7, officeName: "Interfaith ", officeImg: interfaithIcon },
		{ id: 8, officeName: "Services", officeImg: servicesIcon },
		{ id: 9, officeName: "DSA", officeImg: servicesIcon },
	],
	questions: [
		{
			id: 1,
			text: "Is there any penalties if someone borrow books and return it for a very long time? If yes, what penalty is this?",
		},
		{ id: 2, text: "Do you give old books to the students? If yes, how can we ask for?" },
		{ id: 3, text: "What are the steps for freshmen to enroll in this institution?" },
		{ id: 4, text: "How much our allowance in TES per year?" },
		{ id: 5, text: "What are the graduation requirements for my program, BSIT?" },
		{ id: 6, text: "If one of my school records is missing, who’s responsible for it?" },
		{ id: 7, text: "Is there any payment for getting a copy of my COE?" },
		{ id: 8, text: "Male condoms are given freely, how about oral contraceptive pills?" },
	],

	faqs: [
		{
			id: 1,
			officeId: 9,
			officeName: "DSA",
			sets: [
				{ question: "What services does the DSA office provide?" },
				{ question: "How can I get academic advising?" },
				{ question: "How can I get involved in student government?" },
				{ question: "What is the process for reporting a student conduct issue?" },
				{ question: "What resources are available for students struggling with mental health?" },
				{ question: "How can I request accommodations for a disability?" },
				{ question: "What are the deadlines for submitting applications for scholarships or financial aid?" },
				{ question: "How can I get involved in campus activities and events?" },
				{ question: "What is the process for appealing a disciplinary decision?" },
				{ question: "How can I contact the DSA office?" },
			],
		},
		{
			id: 2,
			officeId: 1,
			officeName: "JHCSC Admission",
			sets: [
				{ question: "When will be the deadline for the application and submission of requirements for freshmen?" },
				{ question: "How do I track the status of my admission application?" },
				{ question: "What are the steps for freshmen to enroll in this institution?" },
				{ question: "How do I submit my credentials for enrolling?" },
				{
					question:
						"What are the requirements for international students transferring or enrolling to JHCSC CMSE Campus?",
				},
				{ question: "What are the programs offered in JHCS CMSE Campus?" },
				{
					question:
						"What are the common mistakes students made during the application process, and how can I avoid them?",
				},
				{ question: "How to pre-enlist in the portal?" },
				{ question: "How can we access/know what is the result of our College Admission Exam?" },
			],
		},
		{
			id: 3,
			officeId: 3,
			officeName: "JHCSC Registrar",
			sets: [
				{ question: "What are the graduation requirements?" },
				{ question: "Do we have to go to the main campus to get our school records?" },
				{ question: "If one of my school records is missing, who’s responsible for it? " },
				{ question: "What are the requirements of getting TOR? Is there any payment? If yes, how much?" },
				{ question: "How do I drop and add subject?" },
				{
					question: "How many days it takes to get my TOR after requesting?",
				},
				{ question: "Is it okay to pay my miscellaneous fee when I graduate?" },
				{
					question: "Is there any payment of getting a copy of my COE?",
				},
				{ question: "Can we get a copy of the school calendar? If yes, how?" },
				{ question: "How can I request a LOA (leave of absence)?" },
				{ question: "I entered wrong information in the online enrollment, how can I correct?" },
			],
		},
		{
			id: 4,
			officeId: 5,
			officeName: "JHCSC Clinic",
			sets: [
				{ question: "Does free dental check-up done annually?" },
				{ question: "Is there any available free sanitary pads for girls who had emergency period?" },
				{ question: "Male condoms are given freely, how about oral contraceptives pills?" },
				{ question: "What are the medical services are available?" },
				{ question: "If there’s a day that the school nurse is in leave who to call if there is a health emergency?" },
				{
					question: "Is the medicines in the clinic are free?",
				},
				{ question: "How can I schedule an appointment in the school clinic?" },
				{
					question: "Is the clinic offers health insurance?",
				},
				{ question: "Is clinic services free?" },
				{ question: "Is there free medical check-up? If yes, when and how can I set appointment?" },
			],
		},
		{
			id: 5,
			officeId: 2,
			officeName: "JHCSC Guidance & Counseling",
			sets: [
				{ question: "How can I handle academic stress and pressure?" },
				{ question: "Are there any group of counseling sessions available? If yes, how to set an appointment?" },
				{ question: "What types of counseling services are available?" },
				{ question: "Who to call if I want to set an appointment for counseling?" },
				{ question: "What if I am shy/afraid to consult your office? What should I do?" },
				{
					question: "Can I get help on improving my study habit and academic performance?",
				},
				{ question: "Are counseling session limited? If yes, how many times is the max?" },
				{
					question: "How would you encourage student to finish their study?",
				},
				{
					question:
						"What actions does your office to prevent those individual persons from being addicted to online games while studying?",
				},
				{
					question:
						"How can your office prevent my fellow student from dropping their subject for a particular reason?",
				},
			],
		},
		{
			id: 6,
			officeId: 4,
			officeName: "JHCSC Library",
			sets: [
				{
					question:
						"Is there any penalties if someone borrow books and return it for a very long time? If yes, what penalty is this?",
				},
				{ question: "Can we borrow those capstone books?" },
				{ question: "How long we can borrow the books?" },
				{ question: "Do you give old books to the students? If yes, how can we ask for?" },
				{ question: "What are the requirements to borrow books? And how can we get those requirements?" },
				{
					question: "What if my library yellow card and ID is lost, what should I do?",
				},
				{ question: "What are the library rules?" },
				{
					question: "What if I lost a library book?",
				},
				{
					question: "Can I print a copy of the book from the library?",
				},
				{
					question: "Does library offers free printing?",
				},
			],
		},
		{
			id: 7,
			officeId: 8,
			officeName: "JHCSC Services for Student with Special Needs and Person with Disabilities",
			sets: [
				{
					question: "Are there any available mobility devices that they can use wile at school?",
				},
				{ question: "Does the school promote anti bullying policy for them?" },
				{ question: "Is there any fair treatment for those PWD’s in the school?" },
				{ question: "What will happen if I have more than 2 scholarship?" },
				{ question: "What services does the school available for student with disabilities?" },
				{
					question: "Does this school accept students with disabilities?",
				},
				{ question: "Will student’s disability information be kept confidential?" },
				{
					question: "Does the school offers special scholarships for students with disability?",
				},
				{
					question: "Does the school gives monthly financial support to those students with disability?",
				},
			],
		},
		{
			id: 8,
			officeId: 8,
			officeName: "JHCSC Interfaith Services",
			sets: [
				{
					question: "JHCSC has diverse religions, is it okay to have visitors to preach in class?",
				},
				{
					question:
						"Does the school restrict or hold any invitations (related to church meetings) for students to attend?",
				},
				{
					question:
						"If a non-Catholic student was ask to pray in the class, does he/she should recite the memorize one so that everyone can pray or compose his/her own prayer?",
				},
				{ question: "Is interfaith program done annually?" },
				{
					question:
						"Does the school really need to compulsory the student to attend even if they are not in the same religion, last program requires the attendance of the students?",
				},
				{
					question: "What kind of faiths are represented during interfaith programs in the school?",
				},
				{ question: "Will student’s disability information be kept confidential?" },
				{
					question: "What is the purpose of Interfaith services?",
				},
				{
					question: "Do I have to be religious to attend?",
				},
				{
					question: "What should I expect during the service?",
				},
				{
					question: "How can I get involved in interfaith activities?",
				},
			],
		},
		{
			id: 9,
			officeId: 6,
			officeName: "JHCSC Scholarship",
			sets: [
				{
					question: "What are the qualifications to be accepted in your scholarship services?",
				},
				{
					question: "What are the scholarship does this school offers?",
				},
				{
					question: "Why is it that scholarship is limited?",
				},
				{ question: "What are the basis for students who are willing to apply the scholarship?" },
				{
					question: "What are the qualifications in TES?",
				},
				{
					question: "What kind of faiths are represented during interfaith programs in the school?",
				},
				{ question: "What is the purpose of these scholarship services?" },
				{
					question: "What should I expect during the service?",
				},
				{
					question: "How much our allowance in TES per year?",
				},
				{
					question: "When to get our allowance in TES?",
				},
				{
					question: "How to get our allowance in TES?",
				},
			],
		},
	],

	offices: [
		{
			id: 1,
			name: "JHCSC Admission",
			img: admissionBg,
			incharge: "Shella Mae Parami",
			mobileNum: "09514875930",
			email: "shellamaeparami@gmail.com",
			position: "Admission - Biswangan Campus",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 4,
		},
		{
			id: 2,
			name: "JHCSC Guidance & Counseling",
			img: admissionBg,
			incharge: "Cristy Udjaji",
			mobileNum: "09123456789",
			email: "UdjajiCristy@gmail.com",
			position: "Guidance & Counseling - Biswangan Campus",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 5,
		},
		{
			id: 3,
			name: "JHCSC Registrar",
			img: registrarbg,
			incharge: "Adelina Mejoy",
			mobileNum: "09655908879",
			email: "adelinamejoy2019@gmail.com",
			position: "Registrar - Biswangan Campus",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 3,
		},
		{
			id: 4,
			name: "JHCSC Library",
			img: librarybg,
			incharge: "Rialyn E. Calago, RL",
			position: "Librarian - Biswangan Campus",
			mobileNum: "09855441788",
			email: "calago.re@s.msumain.edu.ph",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 6,
			staffs: [
				{
					name: "Disie Joy Reutotar",
					position: "Librarian - Poblacion Campus",
					number: "09459808592",
					email: "Retuatotardesie@gmail.com",
				},
			],
		},
		{
			id: 5,
			name: "JHCSC Clinic",
			img: clinicbg,
			incharge: "Anzeille Mae Miral",
			position: "Librarian - Biswangan Campus",
			mobileNum: "09452588312",
			email: "patigayonmiralanzeillemae@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 7,
		},
		{
			id: 6,
			name: "JHCSC Scholarship",
			img: admissionBg,
			incharge: "Melanie Bucog",
			position: "Scholarship - Biswangan Campus",
			mobileNum: "09071715665",
			email: "melaniebucog@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 8,
		},
		{
			id: 7,
			name: "JHCSC Interfaith Services",
			img: admissionBg,
			incharge: "Dennis Navas",
			position: "Scholarship - Biswangan Campus",
			mobileNum: "09123456789",
			email: "dennisnavas71@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 9,
		},
		{
			id: 8,
			name: "JHCSC Services for Student with Special Needs and Person with Disabilities",
			img: admissionBg,
			incharge: "Cristy Udjaji",
			position: "Services for student with special needs and person with disabilities - Biswangan Campus",
			mobileNum: "09123456789",
			email: "UdjajiCristy@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 10,
		},
		{
			id: 9,
			name: "DSA",
			img: admissionBg,
			incharge: "Kleener Joy Pates",
			position: "DSA",
			mobileNum: "09094975147",
			email: "kleenerjoypates@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 15,
		},
	],
};

export default data;
