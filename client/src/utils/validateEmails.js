const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
	let invalidEmails = emails
		.split(",") // split comma-separated string to list
		.map(email => email.trim()) // remove spaces
		.filter(email => re.test(email) === false) // if emails re is false
		.filter(email => email.length > 0); // remove trailing comma blank email

	if (invalidEmails && invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}
};
