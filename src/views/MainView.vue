<template>
	<div class="row d-flex justify-content-center text-center">
		<div class="mt-4 col-12">
			<h1>shrink.it</h1>
			<h3>A simple tool to shorten long URLs quickly and easily.</h3>
			<br />

			<form
				@submit.prevent="shortenUrl"
				class="container mb-3"
			>
				<div class="row justify-content-center">
					<div class="col-md-8 col-12">
						<label class="form-label">URL</label>
						<input
							v-model="url"
							class="form-control form-control-lg"
							placeholder="Enter URL to shorten"
						/>
						<div class="text-center">
							<button
								type="submit"
								class="btn btn-primary mt-3 w-50"
							>
								shrink it!
							</button>
						</div>
					</div>
				</div>
			</form>

			<p
				v-if="shortenedUrl"
				class="mt-4"
			>
				Shortened URL:
				<a
					:href="shortenedUrl"
					target="_blank"
					>{{ shortenedUrl }}</a
				>
			</p>

			<p
				v-if="urlError"
				class="mt-2 text-danger"
			>
				Please enter a valid URL.
			</p>

			<p class="mt-4">
				Simply paste a long URL above, and we will turn it into a short and
				easy-to-share link. Try it now!
			</p>
			<p>
				Your shortened URL will be ready instantly for you to copy and share
				anywhere.
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const url = ref("");
const shortenedUrl = ref("");
const urlError = ref(false);

async function shortenUrl() {
	// Simple validation for a valid URL format
	const urlPattern = /^(https?:\/\/)([\w\d-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/;

	if (url.value && urlPattern.test(url.value)) {
		// Make a POST request to your Node.js server
		try {
			const response = await fetch("http://10.250.2.217:3000/shorten", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ longUrl: url.value }),
			});
			const data = await response.json();
			if (data.shortUrl) {
				shortenedUrl.value = data.shortUrl;
				url.value = ""; // Clear input field after submission
				urlError.value = false; // Reset error state
			} else {
				urlError.value = true;
			}
		} catch (error) {
			console.error("Error shortening URL:", error);
			urlError.value = true;
		}
	} else {
		urlError.value = true;
		shortenedUrl.value = ""; // Clear any previous shortened URL
	}
}
</script>
