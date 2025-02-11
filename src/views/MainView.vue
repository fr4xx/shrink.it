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
				>
					{{ shortenedUrl }}
				</a>
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

function shortenUrl() {
	// Simple logic for the demo: appends a random string to simulate URL shortening
	if (url.value) {
		shortenedUrl.value = `https://short.ly/${Math.random()
			.toString(36)
			.substring(2, 8)}`;
	} else {
		alert("Please enter a URL!");
	}
}
</script>
