<template>
	<div class="row d-flex justify-content-center text-center">
		<div class="mt-4 col-12">
			<h1>Check Shortened URL Stats</h1>
			<h3>
				Enter your shortened URL to see statistics like visit count and more!
			</h3>
			<br />

			<!-- Form to enter shortened URL -->
			<form
				@submit.prevent="fetchUrlStats"
				class="container mb-3"
			>
				<div class="row justify-content-center">
					<div class="col-md-8 col-12">
						<label class="form-label">Shortened URL</label>
						<input
							v-model="url"
							class="form-control form-control-lg"
							placeholder="Enter shortened URL to check stats"
						/>
						<div class="text-center">
							<button
								type="submit"
								class="btn btn-primary mt-3 w-50"
							>
								check stats!
							</button>
						</div>
					</div>
				</div>
			</form>

			<!-- Stats display section -->
			<div
				v-if="urlStats"
				class="mt-4"
			>
				<h5>Statistics for {{ urlStats.shortenedUrl }}</h5>
				<p><strong>Visit Count:</strong> {{ urlStats.visitCount }} times</p>
				<p>
					<strong>Last Visited:</strong> {{ urlStats.lastVisited || "N/A" }}
				</p>
			</div>

			<!-- Error message for invalid URL -->
			<div
				v-if="errorMessage"
				class="mt-4 text-danger"
			>
				<p>{{ errorMessage }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const url = ref("");
const urlStats = ref(null);
const errorMessage = ref("");

function fetchUrlStats() {
	if (!url.value) {
		errorMessage.value = "Please enter a shortened URL!";
		return;
	}

	// Simulate fetching data (this could be an API call)
	// For now, we'll just use dummy data as an example.
	if (url.value === "https://shrink.it/example") {
		urlStats.value = {
			shortenedUrl: url.value,
			visitCount: 123,
			lastVisited: "2025-02-11 14:30",
		};
		errorMessage.value = "";
	} else {
		urlStats.value = null;
		errorMessage.value =
			"Invalid shortened URL or no data available for this URL.";
	}
}
</script>
