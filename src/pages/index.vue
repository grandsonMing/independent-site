<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import { SfButton } from '@storefront-ui/vue';

	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="grid place-items-center w-full min-h-[80vh]">
		<nav-header></nav-header>
		<main-banners></main-banners>
		<!-- <main-second-banners></main-second-banners> -->
		<!-- <div>
			<img :src="VitailseLogo" width="300" class="mx-auto" />
			<p class="text-center lg:text-left">
				{{ t('intro.desc') }}
				<a
					href="https://tailwindcss.com/"
					class="text-blue-500 hover:underline"
					>TailwindCSS</a
				>
			</p>
			<p class="text-center">
				{{ t('intro.github') }}
				<a
					class="text-blue-500 hover:underline"
					href="https://github.com/zynth17/vitailse"
					>Github Repo</a
				>
			</p>
			<div class="mt-5 text-center">
				<button
					@click="store.$state.count++"
					class="px-4 py-2 text-white bg-blue-500 rounded dark:bg-blue-800"
				>
					Count : {{ store.$state.count }}
				</button>
				<SfButton class="w-full"> Hello </SfButton>
			</div>
		</div>
		<router-link
			:to="{ name: 'other-page' }"
			class="mt-5 text-center hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
			>{{ t('pages.other.menu') }}</router-link
		> -->
		<nav-footer></nav-footer>
	</div>
</template>

<route lang="yaml">
name: home
</route>
