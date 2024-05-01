<template>
  <section class="h-screen flex justify-center items-center">
    <div class="p-4 max-w-lg md:min-w-[28rem] mx-auto shadow-2xl">
      <section class="p-4">
        <nav class="sticky top-0 bg-white z-[101] mb-4">
          <center class="h-[100px]">
            <img
              :width="250"
              :height="150"
              src="/assets/khulshi.png"
              class="bg-white mb-4"
            />
          </center>
        </nav>
        <form
          v-if="!regFormSubmitted"
          @submit.prevent="submitForm"
          class="grid gap-2"
        >
          <!-- email -->
          <div class="grid gap-2" :style="style">
            <label for="email" class="block font-bold">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              :class="inputClass"
              placeholder="e.g. test@mart.com"
              required
            />
            <span v-if="errors.email" class="text-red-500">{{
              errors.email
            }}</span>
          </div>

          <!-- Email -->
          <div class="grid gap-2" :style="style">
            <label for="email" class="block font-bold">Password</label>
            <input
              type="password"
              id="email"
              v-model="formData.password"
              :class="inputClass"
              placeholder="******"
            />
            <span v-if="errors.email" class="text-red-500">{{
              errors.email
            }}</span>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            {{ loading ? "Processing" : "Login" }}
          </button>
        </form>
      </section>
      <div v-if="errors">
        <div
          v-for="error in errors"
          :key="error"
          class="text-center text-red-500"
        >
          {{ error }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Default from "../layouts/Default.vue";
import Login from "../components/Login.vue";
// import AccountStorage from "../storage/Index";
definePageMeta({
  layout: "empty",
  middleware: ["protected"],
});
const route = useRoute();
const router = useRouter();

const config = useRuntimeConfig();
const url = config.public.BASE_URL + "user/login";
const style = "";
const inputClass =
  "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-blue-500 sm:text-sm focus:border-blue-500";
const defaultData = {
  password: "",
  email: "",
};
const formData = ref({ ...defaultData });

const errors = ref({});
const loading = ref(false);
const regFormSubmitted = ref(false);
const success = ref(false);
const userId = ref(null);
const otp = ref("");
const isLogin = ref(false);

const submitForm = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  };
  loading.value = true;
  errors.otpError = "";
  // Send POST request using fetch
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          errors.value = data;
          throw new Error(data);
        });
      }
      return response.json();
    })
    .then((data) => {
      loading.value = false;
      console.log(data, "check data");
      if (data.user) {
        localStorage.setItem("LOGIN_ACCOUNT", JSON.stringify(data.user));
        localStorage.setItem("ACCESS_TOKEN", data.accessToken);
        isLogin.value = true;
        // router.push("/customer-list");
        // Reload the page
        window.location.href = "/customer-list";
      }
    })
    .catch((error) => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      console.error("Error:", error, error.message, 2345);
      // Handle error from the server or network
    });
};

onMounted(() => {
  if (window?.localStorage?.getItem('ACCESS_TOKEN')) {
    window.location.href = '/customer-list'
  }
  
});
</script>
