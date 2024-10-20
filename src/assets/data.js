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
			incharge: "Melcie S. Francisco",
			position: "Librarian - Biswangan Campus",
			mobileNum: "09515766554",
			email: "Francisco.melcie10@gmail.com",
			opening: "7:00 A.M.",
			closing: "5:00 P.M.",
			contactId: 6,
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
	],
};

export default data;
