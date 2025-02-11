<template>
	<div class="row d-flex justify-content-center text-center">
		<div class="mt-4 col-12">
			<h1>Contact Us</h1>
			<h4>We'd love to hear from you!</h4>
			<br />

			<!-- Contact Form -->
			<form
				@submit.prevent="submitForm"
				class="container mb-3"
			>
				<div class="row justify-content-center">
					<div class="col-md-8 col-12">
						<!-- Name Field -->
						<label
							for="name"
							class="form-label"
							>Your Name</label
						>
						<input
							v-model="name"
							type="text"
							id="name"
							class="form-control form-control-lg"
							placeholder="Enter your name"
							required
						/>

						<!-- Email Field -->
						<label
							for="email"
							class="form-label mt-3"
							>Your Email</label
						>
						<input
							v-model="email"
							type="email"
							id="email"
							class="form-control form-control-lg"
							placeholder="Enter your email"
							required
						/>

						<!-- Message Field -->
						<label
							for="message"
							class="form-label mt-3"
							>Your Message</label
						>
						<textarea
							v-model="message"
							id="message"
							class="form-control form-control-lg"
							rows="4"
							placeholder="Write your message"
							required
						></textarea>

						<!-- Submit Button -->
						<div class="text-center mt-3">
							<button
								type="submit"
								class="btn btn-primary w-50"
							>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>

			<!-- Success/Error Messages -->
			<div
				v-if="statusMessage"
				class="mt-4"
			>
				<p :class="statusClass">{{ statusMessage }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const statusMessage = ref("");
const statusClass = ref("text-success");

function submitForm() {
	// Simple form submission logic for demo purposes
	if (name.value && email.value && message.value) {
		statusMessage.value =
			"Thank you for your message! We will get back to you soon.";
		statusClass.value = "text-success";

		// Reset form fields after submission
		name.value = "";
		email.value = "";
		message.value = "";
	} else {
		statusMessage.value = "Please fill in all fields.";
		statusClass.value = "text-danger";
	}
}
</script>
