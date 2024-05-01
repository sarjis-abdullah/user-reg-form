<template>
  <Default>
    <section class="grid items-center aaa h-screen scrollable-container" style="background-image: linear-gradient(45deg, #DAEAA5, #89BBEF);">
      <div class="p-4 min-w-[30rem] grid grid-cols-1 mx-auto shadow-2xl bg-white" style="">
        <section class="order-2 px-4 pb-">
          <center class="h-[100px]">
            <img
              
              src="/assets/khulshi.png"
              class="bg-white mb-4"
            />
            <!-- <NuxtImg :width="250"
              :height="150" src="/assets/khulshi.png" /> -->
          </center>
          <form v-if="!regFormSubmitted" @submit.prevent="submitForm" class="">
            <section class="grid gap-2 grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
              <!-- Name -->
              <div class="grid gap-2" :style="style">
                <label for="name" :class="brandColor" class="block font-bold"
                  >First Name <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  :class="inputClass"
                  placeholder="e.g. John"
                  required
                />
                <span v-if="errors.name" class="text-red-500">{{
                  errors.name
                }}</span>
              </div>
              <div class="grid gap-2" :style="style">
                <label for="name" :class="brandColor" class="block font-bold"
                  >Last Name <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="name"
                  v-model="formData.lastName"
                  :class="inputClass"
                  placeholder="e.g. Doe"
                  required
                />
                <span v-if="errors.name" class="text-red-500">{{
                  errors.lastName
                }}</span>
              </div>
              <!-- Phone -->
              <div class="grid gap-2" :style="style">
                <label for="phone" :class="brandColor" class="block font-bold"
                  >Phone <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="phone"
                  v-model="formData.phone"
                  :class="inputClass"
                  placeholder="e.g. +880123456789"
                  required
                />
                <span v-if="errors.phone" class="text-red-500">{{
                  errors.phone
                }}</span>
              </div>

              <!-- Birth Date -->
              <div class="grid gap-2" :style="style">
                <label
                  for="birthDate"
                  :class="brandColor"
                  class="block font-bold"
                >
                  Date of Birth <span class="text-red-500">*</span></label
                >
                <input
                  type="date"
                  id="birthDate"
                  v-model="formData.birthDate"
                  :class="inputClass"
                  required
                />
                <span v-if="errors.birthDate" class="text-red-500">{{
                  errors.birthDate
                }}</span>
              </div>
              <!-- Email -->
              <div class="grid gap-2" :style="style">
                <label for="email" :class="brandColor" class="block font-bold"
                  >Email <span class="text-red-500">*</span></label
                >
                <input
                  type="email"
                  id="emailid"
                  v-model="formData.email"
                  placeholder="e.g. john@gmail.com"
                  :class="inputClass"
                  required
                />
                <span v-if="errors.email" class="text-red-500">{{
                  errors.email
                }}</span>
              </div>

              <!-- Address -->
              <div class="grid gap-2" :style="style">
                <label for="address" :class="brandColor" class="block font-bold"
                  >Address <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="address"
                  v-model="formData.address"
                  :class="inputClass"
                  placeholder="e.g. 1 no road, Khulshi, Chittagong"
                  required
                />
                <span v-if="errors.address" class="text-red-500">{{
                  errors.address
                }}</span>
              </div>

              <!-- Occupation -->
              <div class="grid gap-2" :style="style">
                <label
                  for="occupation"
                  :class="brandColor"
                  class="block font-bold"
                  >Blood Group</label
                >
                <select
                  id="occupation"
                  v-model="formData.bloodGroup"
                  class="focus:outline-none bg-none"
                  style="background: none"
                  :class="inputClass"
                >
                  <option disabled :value="''">Select your blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
              <div class="grid gap-2" :style="style">
                <label
                  for="occupation"
                  :class="brandColor"
                  class="block font-bold"
                  >Occupation</label
                >
                <select
                  id="occupation"
                  v-model="formData.occupation"
                  class="focus:outline-none bg-none"
                  style="background: none"
                  :class="inputClass"
                >
                  <option disabled :value="''">Select Occupation</option>
                  <option value="Business">Business</option>
                  <option value="Service">Service</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                  <!-- Add more options as needed -->
                </select>
              </div>

              <!-- Family Members -->
              <div class="grid gap-2" :style="style">
                <label
                  for="familyMembers"
                  :class="brandColor"
                  class="block font-bold"
                  >Family Members</label
                >
                <select
                  id="familyMembers"
                  v-model="formData.familyMembers"
                  class="focus:outline-none bg-none"
                  :class="inputClass"
                  style="background: none"
                >
                  <option disabled :value="''">Select Family Members</option>
                  <option value="1-3">1-3</option>
                  <option value="4-6">4-6</option>
                  <option value="7-Above">7-Above</option>
                  <!-- Add more options as needed -->
                </select>
              </div>

              <!-- Anniversary -->
              <div class="grid gap-2" :style="style">
                <label
                  for="anniversary"
                  :class="brandColor"
                  class="block font-bold"
                  >Anniversary</label
                >
                <input
                  type="date"
                  id="anniversary"
                  v-model="formData.anniversary"
                  :class="inputClass"
                />
                <span v-if="errors.anniversary" class="text-red-500">{{
                  errors.anniversary
                }}</span>
              </div>

              <!-- Gender -->
              <div class="flex gap-4 mt-2" style="">
                <label :class="brandColor" class="block font-bold"
                  >Gender</label
                >
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    v-model="formData.gender"
                    value="Male"
                    class="form-radio"
                  />
                  <span class="ml-2">Male</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    v-model="formData.gender"
                    value="Female"
                    class="form-radio"
                  />
                  <span class="ml-2">Female</span>
                </label>
              </div>
              <div class="flex gap-4 mt-2">
                <label :class="brandColor" class="block font-bold"
                  >Complimentary Card</label
                >
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="card"
                    v-model="formData.hasComplimentaryCard"
                    value="Yes"
                    class="form-radio"
                  />
                  <span class="ml-2">Yes</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="card"
                    v-model="formData.hasComplimentaryCard"
                    value="No"
                    class="form-radio"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </section>

            <div class="flex gap-4 mt-6">
              <input type="checkbox" v-model="isAgree" />
              <a
                :class="brandColor"
                :href="TERMS_AND_CONDITION_LINK"
                target="_blank"
                class="block underline hover:text-blue-500"
                >I agree with terms & condition</a
              >
            </div>
            <button
              type="submit"
              :disabled="!isAgree || loading"
              :class="
                isAgree
                  ? 'bg-[#89BC40] hover:bg-[#89BC40]'
                  : 'bg-gray-500 hover:bg-gray-600'
              "
              class="text-white px-4 py-2 rounded mt-4 w-full"
            >
              {{!loading ? 'Submit' : 'Processing'}}
            </button>
          </form>

          <form v-else @submit.prevent="submitOtpForm" class="grid gap-2">
            <label
              @click="
                () => {
                  success = false;
                  regFormSubmitted = false;
                  errors.otpError = '';
                  otp = '';
                  errors = {};
                }
              "
              class="block cursor-pointer"
              >< Back</label
            >
            <!-- Name -->
            <div class="grid gap-2" :style="style">
              <label for="name" class="block font-bold">OTP</label>
              <input
                type="text"
                id="name"
                v-model="otp"
                :class="inputClass"
                placeholder="e.g. 1234"
                required
              />
              <span v-if="errors?.otp" class="text-red-500">{{
                errors.otp
              }}</span>
            </div>

            <button
              type="submit"
              :disabled="otp == '' || otp == null"
              v-if="!loading"
              class="bg-[#89BC40] hover:bg-[#89BC40] text-white px-4 py-2 rounded mt-4"
            >
              Submit
            </button>
            <span v-else>Processing</span>
            <div class="mt-4 text-center text-red-500" v-if="errors.otpError">
              {{ errors.otpError }}
            </div>
          </form>
        </section>
        <!-- <section class="order-1">
          image
        </section> -->
      </div>
    </section>
  </Default>
</template>

<script setup>
import { ref } from "vue";
import Default from "../layouts/Default.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
definePageMeta({
  layout: "Default",
});
const config = useRuntimeConfig();
const url = config.public.BASE_URL + "user";
const style = "";
const inputClass =
  "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-blue-500 sm:text-sm focus:border-blue-500";
const defaultData = {
  name: "",
  lastName: "",
  address: "",
  phone: "",
  birthDate: "",
  email: "",
  occupation: "",
  familyMembers: "",
  gender: "",
  anniversary: "",
  bloodGroup: "",
  hasComplimentaryCard: false,
};
const TERMS_AND_CONDITION_LINK =
  "https://reg.kbakery.com.bd/terms&condition?fbclid=IwAR3ZHAuljA8NIQrStmVdluorz8VY4EWvitgrQvpPS5kMCxeboy4-Zgzdvw4_aem_AX98AXyHp5MERWziwe-z6zha2l6MmwgUPO7OD5sOi7nSXQpUMafwcgnJUTJ8BMLSL-5bWtuyrL95BUSdxRFX2OTY";
const formData = ref({ ...defaultData });

const errors = ref({});
const loading = ref(false);
const isAgree = ref(false);
const regFormSubmitted = ref(false);
const success = ref(false);
const userId = ref(null);
const otp = ref("");
const brandColor = ref("");

const formattedData = computed(() => {
  return {
    ...formData.value,
    hasComplimentaryCard: !!formData.value.hasComplimentaryCard == "Yes",
  };
});

const submitForm = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData.value),
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
      console.log("Success:", data);
      userId.value = data.data.id;
      formData.value = { ...defaultData };
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      regFormSubmitted.value = true;
    })
    .catch((error) => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      // Handle error from the server or network
    });
};
const notify = () => {
  toast.success("Thanks for the registration.", {
    autoClose: 2000,
  }); // ToastOptions
};
const submitOtpForm = () => {
  // Options for the fetch request
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: otp.value,
    }),
  };
  loading.value = true;
  errors.value.otpError = "";
  // Send POST request using fetch
  fetch(url + "/" + userId.value, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      // regFormSubmitted.value = false
      errors.value.otpError = "";
      otp.value = null;
      userId.value = null;
      regFormSubmitted.value = false;
      errors.value = {};
      isAgree.value = false;
      notify();
    })
    .catch((error) => {
      console.error("Error:", error);
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      errors.value.otpError = "Otp not matched";
      // Handle error from the server or network
    });
};
</script>
<style >
.aaa {
  /* background-image: url("assets/bg-image-1.jpg"); */
}
::-webkit-scrollbar {
    width: 1px; /* Adjust width as needed */
}

/* Optionally, you can style the scrollbar track */
::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Change background color as needed */
}

/* Optionally, you can style the scrollbar thumb */
::-webkit-scrollbar-thumb {
    background-color: #888; /* Change thumb color as needed */
}
</style>
