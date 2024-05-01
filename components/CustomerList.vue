<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto shadow-2xl">
    <section class="grid grid-cols-3">
      <div class="flex gap-2">
        <!-- <label for="search" class="block font-bold">Password</label> -->
        <input
          type="text"
          id="search"
          v-model="searchQuery"
          @input="debouncedSearch"
          placeholder="Search by phone number"
          class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-blue-500 sm:text-sm focus:border-blue-500"
        />
      </div>
      <div></div>
      <div class="text-right">
        <button
          class="bg-[#89BC40] hover:bg-[#89BC40] text-white px-4 py-2 rounded"
          @click="downloadCsv"
        >
          Export CSV
        </button>
      </div>
    </section>
    <div class="mt-8 flow-root" v-if="!loading && userList?.length">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  SL No.
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Address
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Dob
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Blood Group
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Occupation
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Family Members
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Complimentary Card
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(person, index) in userList" :key="person.id">
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  {{ person.name }}
                </td>
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  {{ person.lastName }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.phone }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.address }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.birthDate }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.email }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.bloodGroup }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.occupation }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.familyMembers }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.gender }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.hasComplimentaryCard ? "Yes" : "No" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="text-center h-screen flex items-center justify-center"
      v-else-if="loading"
    >
      Loading
    </div>
    <div
      class="text-center h-screen flex items-center justify-center"
      v-else-if="!loading && userList.length == 0"
    >
      No data
    </div>

    <Pagination
      class="mt-6"
      :perPage="perPage"
      :lastPage="lastPage"
      :total="total"
      :totalPerPage="totalPerPage"
      @onChange="onPageChanged"
    >
      <select
        class="focus:outline-none bg-none"
        v-model="perPage"
        @change="loadData"
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
        <option>200</option>
        <option>500</option>
        <option>1000</option>
      </select>
    </Pagination>
  </div>
</template>

<script setup>
import { mkConfig, generateCsv, download } from "export-to-csv";

import { ref } from "vue";
// import debounce from "lodash.debounce";
import { useDebounce } from "@/hooks/useDebounce";
import Pagination from "./Pagination";
definePageMeta({
  // layout: "Default",
  // middleware:['protected'],
});
const route = useRoute();
const config = useRuntimeConfig();
const page = ref(1);
const lastPage = ref(1);
const total = ref(0);
const perPage = ref(10);
const totalPerPage = ref(0);

const url = computed(() => {
  return (
    config.public.BASE_URL + `user?per_page=${perPage.value}&page=${page.value}`
  );
});
const style = "";
const inputClass =
  "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-blue-500 sm:text-sm focus:border-blue-500";
const defaultData = {
  name: "",
  address: "",
  phone: "",
  birthDate: "",
  email: "",
  occupation: "",
  familyMembers: "",
  gender: "",
  anniversary: "",
  hasComplimentaryCard: false,
};
const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: "user-list" });

const searchQuery = ref("");
const errors = ref({});
const loading = ref(false);
const userList = ref([]);
const success = ref(false);
const userId = ref(null);
const otp = ref("");

const formattedData = computed(() => {
  return {
    ...formData.value,
    hasComplimentaryCard: !!formData.value.hasComplimentaryCard == "Yes",
  };
});
const router = useRouter();
const loadData = (query = "") => {
  loading.value = true;
  errors.otpError = "";
  const token =
    window != null && window != undefined
      ? window.localStorage.getItem("ACCESS_TOKEN")
      : null;
  let finalUrl = url.value;
  if (searchQuery.value != "") {
    finalUrl += `?phone=${query}`;
  }
  fetch(finalUrl, {
    headers: { Authorization: "Bearer " + token },
  })
    .then((response) => {
      console.log(response, response.status);
      if (response.status == 401) {
        window.localStorage.removeItem("LOGIN_ACCOUNT");
        window.localStorage.removeItem("ACCESS_TOKEN");
        window.location.href = "/login";
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((res) => {
      // Process the retrieved data
      const { data, meta } = res;
      userList.value = data;
      loading.value = false;

      page.value = meta.current_page;
      lastPage.value = meta.last_page;
      total.value = meta.total;
      totalPerPage.value = data?.length;
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      loading.value = false;
      console.error("There was a problem with the fetch operation:", error);
    });
};
const search = async () => {
  loadData(searchQuery.value);
};
// const debouncedSearch = debounce(search, 500);
const debouncedSearch = useDebounce(search, 500);
const onPageChanged = (p) => {
  page.value = p;
  loadData();
};
const downloadCsv = () => {
  const newArray = userList.value.map((obj, index) => {
    // Iterate over each property in the object
    const newObj = {};
    for (const key in obj) {
      // Check if the property value is null
      if (obj[key] == null || obj[key] == undefined) {
        newObj[key] = "";
      } else if (obj[key] == 0) {
        newObj[key] = "No";
      } else if (obj[key] == 1) {
        newObj[key] = "Yes";
      } else {
        newObj[key] = obj[key];
      }
    }
    return {
      "SL No": index + 1,
      "First Name": newObj.name,
      "Last Name": newObj.lastName,
      Phone: newObj.phone,
      Email: newObj.email,
      Address: newObj.address,
      "Date of Birth": newObj.birthDate,
      "Blood Group": newObj.bloodGroup,
      Occupation: newObj.occupation,
      "Family Member": newObj.familyMembers,
      "Complimentary Card": newObj.hasComplimentaryCard,
      Gender: newObj.familyMembers,
    };
  });
  const csv = generateCsv(csvConfig)(newArray);
  download(csvConfig)(csv);
};
onMounted(() => {
  if (window?.localStorage?.getItem("ACCESS_TOKEN")) {
    loadData();
  } else {
    window.location.href = "/login";
  }
});
</script>
