<template>
  <Disclosure as="nav" class="bg-white shadow sticky top-0" v-slot="{ open }">
    <div class="mx-auto max-w-7xl mb-4">
      <div class="relative flex h-16 justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <nuxt-link
              to="/"
              :class="
                route.name == 'index'
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
              "
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
              >Add customer
            </nuxt-link>
            <nuxt-link
              to="/customer-list"
              :class="
                route.name == 'customer-list'
                  ? 'border-indigo-500'
                  : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
              "
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
              >View customers</nuxt-link
            >
          </div>
        </div>
        <div class="flex">
          <button
            @click="logout"
            class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"
          >
            Logout
          </button>
          <nuxt-link
            to="/login"
            :class="
              route.name == 'login'
                ? 'border-indigo-500'
                : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
            "
            class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
            >Login</nuxt-link
          >
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >Dashboard</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Team</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Projects</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Calendar</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
  <slot></slot>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const isLogin = ref(true);
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

name: "Default";

const logout = ()=> {
  console.log("logout");
}
</script>
