<template>
	<div class="relative min-h-[576px] w-full">
		<picture>
			<source
				srcset="
					https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png
				"
				media="(min-width: 768px)"
			/>
			<img
				src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
				class="absolute w-full h-full z-[-1] object-cover"
				alt="hero"
			/>
		</picture>
		<div
			class="md:flex md:flex-row-reverse md:justify-center mx-auto min-h-[576px]"
		>
			<div
				class="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden"
			>
				<img
					src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-headphones.png"
					alt="Headphones"
					class="object-cover object-left w-full h-full"
				/>
			</div>
			<div
				class="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4"
			>
				<p
					class="font-bold tracking-widest uppercase typography-text-xs md:typography-text-sm text-neutral-500"
				>
					Feel the music
				</p>
				<h1
					class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4"
				>
					New Wireless Pro
				</h1>
				<p class="typography-text-base md:typography-text-lg">
					Spatial audio. Adjustable ear cups. On-device controls.
					All-day battery.
				</p>
				<div class="flex flex-col gap-4 mt-6 md:flex-row">
					<SfButton size="lg"> Order now </SfButton>
					<SfButton size="lg" variant="secondary" class="bg-white">
						Show more
					</SfButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { SfButton } from '@storefront-ui/vue';
</script>
