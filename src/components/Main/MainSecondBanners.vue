<template>
	<div class="flex flex-col w-full gap-6 md:flex-row">
		<div class="flex flex-col gap-6 md:flex-row">
			<div
				v-for="{
					title,
					subtitle,
					description,
					callToAction,
					image,
					backgroundColor,
					reverse,
				} in displayDetails"
				:key="title"
				:class="[
					`relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
					{ 'flex-col-reverse': reverse },
				]"
			>
				<a
					class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
					:aria-label="title"
					href="#"
				/>
				<div class="flex flex-col p-4 text-center md:p-10">
					<p
						class="mb-2 font-bold tracking-widest uppercase typography-headline-6"
					>
						{{ subtitle }}
					</p>
					<p class="mb-4 font-bold typography-display-2">
						{{ title }}
					</p>
					<p class="mb-4 typography-text-lg">{{ description }}</p>
					<SfButton class="font-semibold !bg-neutral-900">
						{{ callToAction }}
					</SfButton>
				</div>
				<div class="flex items-center w-full">
					<img :src="image" :alt="title" class="w-full" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { SfButton } from '@storefront-ui/vue';

	const displayDetails = [
		{
			title: 'Pack it Up',
			subtitle: 'Be active',
			description: 'Explore the great outdoors with our backpacks',
			callToAction: 'Discover now',
			image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png',
			backgroundColor: 'bg-warning-200',
			reverse: false,
		},
		{
			title: 'Sunny Days Ahead',
			subtitle: 'Be inspired',
			description: 'Step out in style with our sunglasses collection',
			callToAction: 'Discover now',
			image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png',
			backgroundColor: 'bg-negative-200',
			reverse: true,
		},

		{
			title: 'Pack it Up',
			subtitle: 'Be active',
			description: 'Explore the great outdoors with our backpacks',
			callToAction: 'Discover now',
			image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png',
			backgroundColor: 'bg-warning-200',
			reverse: true,
		},
		{
			title: 'Sunny Days Ahead',
			subtitle: 'Be inspired',
			description: 'Step out in style with our sunglasses collection',
			callToAction: 'Discover now',
			image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png',
			backgroundColor: 'bg-negative-200',
			reverse: false,
		},
	];
</script>
