const sendgrid = require("sendgrid");
const helper = sendgrid.mail;

const keys = require("../config/keys");

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email("no-reply@emaily.com");
		this.subject = subject;
		this.body = new helper.Content("text/html", content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body); // sendgrid Mail class has addContent property
		this.addClickTracking(); // add click tracking to email
		this.addRecipients();
	}

	formatAddresses(recipients) {
		return recipients
			.filter(({ email }) => email.length > 0)
			.map(({ email }) => {
				// console.log("mailer email: ", email);
				return new helper.Email(email);
			});
	}

	addClickTracking() {
		// sendgrid click tracking setup
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new helper.Personalization();
		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: "POST",
			path: "/v3/mail/send",
			body: this.toJSON()
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
