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
								Check stats!
							</button>
						</div>
					</div>
				</div>
			</form>

			<!-- Stats display section (Table) -->
			<div
				v-if="urlStats"
				class="mt-4"
			>
				<h5>Statistics for {{ urlStats.shortenedUrl }}</h5>
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<th>Metric</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>Original URL</strong></td>
							<td>
								<a
									:href="urlStats.originalUrl"
									target="_blank"
									>{{ urlStats.originalUrl }}</a
								>
							</td>
						</tr>
						<tr>
							<td><strong>Visit Count</strong></td>
							<td>{{ urlStats.visitCount }} times</td>
						</tr>
						<tr>
							<td><strong>Last Visited</strong></td>
							<td>{{ urlStats.lastVisited || "N/A" }}</td>
						</tr>
					</tbody>
				</table>
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

// Fetch URL stats from backend
async function fetchUrlStats() {
	if (!url.value) {
		errorMessage.value = "Please enter a shortened URL!";
		return;
	}

	// Extract the short code from the entered shortened URL
	const shortCode = url.value.split("/").pop();

	// Make an API call to get stats
	try {
		const response = await fetch(
			`http://http://10.250.2.217:3000/url/${shortCode}`
		);
		if (!response.ok) {
			throw new Error("URL not found or no data available");
		}
		const data = await response.json();
		urlStats.value = {
			shortenedUrl: url.value,
			originalUrl: data.original_url, // Added original URL here
			visitCount: data.visit_count,
			lastVisited: data.created_at, // Or add a field for last visit if needed
		};
		errorMessage.value = "";
	} catch (error) {
		urlStats.value = null;
		errorMessage.value =
			error.message || "An error occurred while fetching data.";
	}
}
</script>
