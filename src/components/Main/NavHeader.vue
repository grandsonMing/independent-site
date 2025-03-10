<template>
	<div class="w-full h-full">
		<div
			v-if="isOpen"
			class="fixed inset-0 w-screen h-screen transition-opacity bg-opacity-50 bg-neutral-500"
		/>
		<header
			ref="menuRef"
			class="flex flex-wrap w-full py-2 border-0 md:flex-nowrap md:py-5 bg-primary-700 border-neutral-200 md:relative md:h-20 md:z-10"
		>
			<div
				class="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10"
			>
				<SfButton
					class="block text-white bg-transparent md:hidden font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
					:aria-haspopup="true"
					:aria-expanded="isOpen"
					variant="tertiary"
					square
					@click="toggle()"
				>
					<SfIconMenu class="text-white" />
				</SfButton>
				<a
					href="#"
					aria-label="SF Homepage"
					class="flex ml-4 mr-auto text-white shrink-0 md:ml-0 md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
				>
					<picture>
						<source
							srcset="
								https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg
							"
							media="(min-width: 1024px)"
						/>
						<img
							src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
							alt="Sf Logo"
							class="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]"
						/>
					</picture>
				</a>
				<SfButton
					class="hidden text-white bg-transparent md:flex font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
					:aria-haspopup="true"
					:aria-expanded="isOpen"
					variant="tertiary"
					square
					@click="toggle()"
				>
					<template #suffix>
						<SfIconExpandMore class="hidden md:inline-flex" />
					</template>
					<span class="hidden px-2 md:inline-flex whitespace-nowrap"
						>Browse products</span
					>
				</SfButton>
				<nav>
					<ul>
						<li role="none">
							<transition
								enter-active-class="transition duration-500 ease-in-out transform"
								leave-active-class="transition duration-500 ease-in-out transform"
								enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
								enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
								leave-from-class="translate-x-0 md:opacity-100"
								leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
							>
								<SfDrawer
									ref="drawerRef"
									v-model="isOpen"
									disable-click-away
									placement="top"
									class="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
								>
									<div
										class="sticky top-0 flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden w-full max-w-[376px]"
									>
										<div
											class="flex items-center font-medium text-white typography-text-lg"
										>
											Browse products
										</div>
										<SfButton
											square
											variant="tertiary"
											aria-label="Close navigation menu"
											class="ml-2 text-white"
											@click="close()"
											@keydown.enter.space="close()"
										>
											<SfIconClose />
										</SfButton>
									</div>
									<div
										v-for="{
											heading,
											items,
										} in categoriesContent"
										:key="heading"
										class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
									>
										<h2
											role="presentation"
											class="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
										>
											{{ heading }}
										</h2>
										<hr class="mb-3.5" />
										<ul>
											<li
												v-for="item in items"
												:key="item.title"
											>
												<SfListItem
													tag="a"
													:href="item.link"
													size="sm"
													role="none"
													class="typography-text-base md:typography-text-sm py-4 md:py-1.5"
												>
													{{ item.title }}
												</SfListItem>
											</li>
										</ul>
									</div>
									<div
										class="flex flex-col items-center justify-center overflow-hidden bg-neutral-100 md:rounded-md border-neutral-300 grow"
									>
										<img
											:src="bannerDetails.image"
											:alt="bannerDetails.title"
											class="object-contain"
										/>
										<p
											class="px-4 mt-4 mb-4 font-medium text-center typography-text-base"
										>
											{{ bannerDetails.title }}
										</p>
									</div>
									<SfButton
										square
										size="sm"
										variant="tertiary"
										aria-label="Close navigation menu"
										class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
										@click="close()"
									>
										<SfIconClose class="text-neutral-500" />
									</SfButton>
								</SfDrawer>
							</transition>
						</li>
					</ul>
				</nav>
				<form
					role="search"
					class="hidden md:flex flex-[100%] mt-2 md:mt-0 md:ml-10 pb-2 md:pb-0"
					@submit.prevent="search"
				>
					<SfInput
						v-model="inputValue"
						type="search"
						class="[&::-webkit-search-cancel-button]:appearance-none"
						placeholder="Search"
						wrapper-class="flex-1 h-10 pr-0"
						size="base"
					>
						<template #suffix>
							<span class="flex items-center">
								<SfButton
									variant="tertiary"
									square
									aria-label="search"
									type="submit"
									class="rounded-l-none hover:bg-transparent active:bg-transparent"
								>
									<SfIconSearch />
								</SfButton>
							</span>
						</template>
					</SfInput>
				</form>
				<nav
					class="flex items-center justify-end flex-nowrap md:ml-10 gap-x-1"
					aria-label="SF Navigation"
				>
					<SfButton
						v-for="actionItem in actionItems"
						:key="actionItem.ariaLabel"
						class="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
						:aria-label="actionItem.ariaLabel"
						variant="tertiary"
						square
					>
						<template #prefix>
							<Component :is="actionItem.icon" />
						</template>
						<span
							v-if="actionItem.role === 'login'"
							class="hidden pr-2 lg:inline-flex whitespace-nowrap"
							>{{ actionItem.label }}</span
						>
					</SfButton>
				</nav>
			</div>
			<form
				role="search"
				class="flex md:hidden flex-[100%] my-2 mx-4"
				@submit.prevent="search"
			>
				<SfInput
					v-model="inputValue"
					type="search"
					class="[&::-webkit-search-cancel-button]:appearance-none"
					placeholder="Search"
					wrapper-class="flex-1 h-10 pr-0"
					size="base"
				>
					<template #suffix>
						<span class="flex items-center">
							<SfButton
								variant="tertiary"
								square
								aria-label="search"
								type="submit"
								class="rounded-l-none hover:bg-transparent active:bg-transparent"
							>
								<SfIconSearch />
							</SfButton>
						</span>
					</template>
				</SfInput>
			</form>
		</header>
	</div>
</template>
<script lang="ts" setup>
	import {
		SfButton,
		SfDrawer,
		SfIconShoppingCart,
		SfIconFavorite,
		SfIconPerson,
		SfIconClose,
		SfIconExpandMore,
		SfListItem,
		useDisclosure,
		useTrapFocus,
		SfIconMenu,
		SfInput,
		SfIconSearch,
	} from '@storefront-ui/vue';
	import { ref } from 'vue';
	import { onClickOutside } from '@vueuse/core';

	const { isOpen, toggle, close } = useDisclosure();
	const menuRef = ref();
	const drawerRef = ref();

	useTrapFocus(drawerRef, {
		activeState: isOpen,
		arrowKeysUpDown: true,
		initialFocus: 'container',
	});
	onClickOutside(menuRef, () => {
		close();
	});

	const inputValue = ref('');

	const search = () => {
		alert(`Successfully found 10 results for ${inputValue.value}`);
	};

	const actionItems = [
		{
			icon: SfIconShoppingCart,
			label: '',
			ariaLabel: 'Cart',
			role: 'button',
		},
		{
			icon: SfIconFavorite,
			label: '',
			ariaLabel: 'Wishlist',
			role: 'button',
		},
		{
			icon: SfIconPerson,
			label: 'Log in',
			ariaLabel: 'Log in',
			role: 'login',
		},
	];
	const bannerDetails = {
		image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png',
		title: 'New in designer watches',
	};

	const categoriesContent = [
		{
			heading: 'Women',
			items: [
				{
					title: "All Women's",
					link: '#',
				},
				{
					title: 'Clothing',
					link: '#',
				},
				{
					title: 'Shoes',
					link: '#',
				},
				{
					title: 'Accessories',
					link: '#',
				},
				{
					title: 'Wearables',
					link: '#',
				},
				{
					title: 'Food & Drinks',
					link: '#',
				},
			],
		},
		{
			heading: 'Men',
			items: [
				{
					title: 'All Men’s',
					link: '#',
				},
				{
					title: 'Clothing',
					link: '#',
				},
				{
					title: 'Shoes',
					link: '#',
				},
				{
					title: 'Accessories',
					link: '#',
				},
				{
					title: 'Wearables',
					link: '#',
				},
				{
					title: 'Food & Drinks',
					link: '#',
				},
			],
		},
		{
			heading: 'Kids',
			items: [
				{
					title: 'All Kids',
					link: '#',
				},
				{
					title: 'Clothing',
					link: '#',
				},
				{
					title: 'Shoes',
					link: '#',
				},
				{
					title: 'Accessories',
					link: '#',
				},
				{
					title: 'Wearables',
					link: '#',
				},
				{
					title: 'Food & Drinks',
					link: '#',
				},
			],
		},
	];
</script>
