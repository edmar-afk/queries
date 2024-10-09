import logo from "../assets/img/logo.jpg";
import librarybg from "./img/schoolOffices/library.jpg";
import clinicbg from "./img/schoolOffices/clinic.jpg";
import registrarbg from "./img/schoolOffices/clinic.jpg";
const data = {
	officeData: [
		{ id: 1, officeName: "Admission", officeImg: logo },
		{ id: 2, officeName: "Guidance ", officeImg: logo },
		{ id: 3, officeName: "Registrar", officeImg: logo },
		{ id: 4, officeName: "Library", officeImg: logo },
		{ id: 5, officeName: "Clinic", officeImg: logo },
		{ id: 6, officeName: "Scholarship", officeImg: logo },
		{ id: 7, officeName: "Interfaith ", officeImg: logo },
		{ id: 8, officeName: "Scholarship", officeImg: logo },
	],
	questions: [
		{ id: 1, text: "What are the admission requirements?" },
		{ id: 2, text: "How can I apply for a scholarship?" },
		{ id: 3, text: "Where is the library located?" },
		{ id: 4, text: "What services does the clinic offer?" },
	],
	offices: [
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
			contactId: 4,
			staffs: [
				{
					name: "Sample name sa staff 1",
					role: "Assistant Librarian",
				},
				{
					name: "Sample name sa staff 2",
					role: "Library Aide",
				},
			],
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
			contactId: 9,
			staffs: [
				{
					name: "Sample name sa staff 1",
					role: "Assistant Librarian",
				},
				{
					name: "Sample name sa staff 2",
					role: "Library Aide",
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
			contactId: 9,
			staffs: [
				{
					name: "Sample name sa staff 1",
					role: "Assistant Librarian",
				},
				{
					name: "Sample name sa staff 2",
					role: "Library Aide",
				},
			],
		},
	],
};

export default data;
