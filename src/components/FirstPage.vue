<template>
  <div class="container-fluid">
    <nav class="position-sticky top-0 bg-white" style="z-index: 100">
      <div class="d-flex justify-content-between mt-1">
        <div class="d-flex gap-2">
          <div><i class="bi bi-justify"></i></div>

          <h6 class="mt-1 text-nowrap">EmployeeData</h6>
        </div>
        <div class="d-flex gap-2">
          <div>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Attach File
            </button>

            <!-- Modal -->
          </div>

          <div>
            <button
              @click="reloadPage()"
              class="btn bg-color border-1 rounded-3"
            >
              <i class="bi bi-arrow-clockwise"></i>
            </button>
          </div>

          <div>
            <button @click="addEmployee()" class="btn border-1 rounded-3 pe-1">
              +Add Employee
            </button>
          </div>
        </div>
      </div>
    </nav>
    <hr />
    <div class="container-fluid">
      <div class="card mt-3" v-if="show">
        <div class="card-header">
          <div class="d-flex gap-2">
            <div class="d-flex gap-2">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="ID"
              />
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="EmployeeName"
              />
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Desigination"
              />
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Bifurcation of Management"
              />
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Grade"
              />
            </div>
            <!-- <div class="d-flex gap-2">
              <button class="btn bg-color border-1 rounded-3">Filter</button>
              <button class="btn bg-color border-1 rounded-3">
                LastUpdateOn
              </button>
            </div> -->
          </div>
        </div>
        <div class="card-body">
          <table
            class="table table-striped table-responsive-lg table-responsive-md table-responsive-sm mt-3"
          >
            <thead>
              <tr class="sticky2">
                <th scope="col">S.no</th>
                <th scope="col">
                  <div class="d-flex gap-2"><i class="bi bi-heart"></i>Id</div>
                </th>
                <th scope="col">EmployeeName</th>

                <th scope="col">Desigination</th>
                <th scope="col">Bifurcation of Management</th>
                <th scope="col">Grade</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee, index) in employeeSummary" :key="index">
                <!-- <td>{{ employee }}</td> -->
                <td>{{ index + 1 }}</td>
                <td class="d-flex gap-2">
                  <i class="bi bi-heart"></i>{{ employee.employee_id }}
                </td>
                <td>
                  {{ employee.employee_name }}
                </td>
                <td>
                  {{ employee.designation }}
                </td>
                <td>
                  {{ employee.bifurcation_of_management_or_non_management }}
                </td>
                <td>{{ employee.grade }}</td>
                <td
                  class="text-center"
                  @click="employeeDeatils(employee.employee_name)"
                >
                  <i class="bi bi-eye"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="" v-if="!show">
        <nav>
          <div class="d-flex justify-content-between mt-1">
            <div class="d-flex gap-2">
              <i class="bi bi-justify"></i>
              <h6 class="">Employee Id:{{ currentEmployee.employee_id }}</h6>
            </div>
            <div class="d-flex gap-2">
              <div>
                <button
                  @click="changePage()"
                  class="btn bg-color border-1 rounded-3"
                >
                  <i class="bi bi-chevron-left"></i>
                </button>
              </div>
              <div>
                <button class="btn bg-color border-1 rounded-3">
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
              <div>
                <button
                  @click="printDocument"
                  class="btn bg-color border-1 rounded-3"
                >
                  <i class="bi bi-printer"></i>
                </button>
              </div>
              <div>
                <button class="btn bg-color border-1 rounded-3">
                  <i class="bi bi-three-dots"></i>
                </button>
              </div>
              <div>
                <button class="btn btn-primary border-1 rounded-3">Save</button>
              </div>
            </div>
          </div>
        </nav>
        <div class="container-fluid">
          <div class="bgcolor1">
            <div class="card shadow mt-2 mb-3">
              <div class="card-header">
                <ul
                  class="nav nav-pills mt-2 ps-1"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      >Details</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      >Salary Structure</a
                    >
                  </li>
                </ul>
              </div>

              <div class="card-body">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-6 line">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Employee Name:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name"
                          v-model="currentEmployee.employee_name"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Hyperion Sub DepartmentName:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="DepartmentName"
                          v-model="currentEmployee.hyperion_sub_department_name"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Manning Sub DepartmentWise:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="DepartmentWise"
                          v-model="currentEmployee.manning_sub_department_wise"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Desgination:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Desgination"
                          v-model="currentEmployee.designation"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Bifurication Of Management or NonManagement:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Bifurication Of Management or NonManagement"
                          v-model="
                            currentEmployee.bifurcation_of_management_or_non_management
                          "
                        />
                      </div>
                      <div class="col-6 line">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Grade:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Grade"
                          v-model="currentEmployee.grade"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Level:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Level"
                          v-model="currentEmployee.level"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Hyperion Head Count:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Hyperion Head Count"
                          v-model="currentEmployee.hyperion_head_count"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Date Of Joining:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Date of Joining"
                          v-model="currentEmployee.date_of_joining"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Date Of Leaving:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Date Of Leaving"
                          v-model="currentEmployee.date_of_leaving"
                        />
                        <label for="exampleFormControlInput1" class="form-label"
                          >Attach:</label
                        ><br />
                        <button
                          style="background-color: #f5f6ff"
                          class="btn border-1 rounded-3 input mb-5"
                        >
                          AttachFile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    Earning
                    <table
                      class="table table-bordered table-striped table-responsive-lg table-responsive-md table-responsive-sm mt-3"
                    >
                      <thead>
                        <tr class="sticky2">
                          <th class="text-muted" scope="col">
                            <div class="form-check">
                              <input
                                class="form-check-input mt-2"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                              </label>
                            </div>
                          </th>
                          <th class="text-muted" scope="col">S.no</th>
                          <th class="text-muted" scope="col">
                            <div class="d-flex gap-2">Componet*</div>
                          </th>
                          <th class="text-muted" scope="col">Abbr</th>

                          <th class="text-muted" scope="col">Amount</th>
                          <th class="text-muted" scope="col">Stastic...</th>
                          <th class="text-muted" scope="col">Depend...</th>
                          <th class="text-muted" scope="col">Is Tax a.</th>
                          <th class="text-muted" scope="col">Formula</th>
                          <th class="text-muted" scope="col">
                            <i class="bi bi-gear"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(earn, index) in earning" :key="index">
                          <td>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                              </label>
                            </div>
                          </td>
                          <td>{{ earn.idx }}</td>
                          <td>{{ earn.salary_component }}</td>
                          <td>{{ earn.abbr }}</td>
                          <td>{{ earn.amount }}</td>
                          <td>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                              </label>
                            </div>
                          </td>
                          <td>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                              </label>
                            </div>
                          </td>
                          <td>
                            <div class="form-check">
                              <input
                                class="form-check-input align-items-center"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                              </label>
                            </div>
                          </td>
                          <td></td>
                          <td>
                            <div class="d-flex gap-2">
                              <i
                                class="bi bi-pencil"
                                @click="editEarnings(earn)"
                              ></i
                              >Edit
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button class="btn mt-1 btn-light border-0 rounded-3">
                      Add Row
                    </button>
                    <div class="mt-3">
                      Deduction
                      <table
                        class="table table-bordered table-striped table-responsive-lg table-responsive-md table-responsive-sm mt-3"
                      >
                        <thead>
                          <tr>
                            <th class="text-muted" scope="col">
                              <div class="form-check">
                                <input
                                  class="form-check-input mt-2"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                </label>
                              </div>
                            </th>
                            <th class="text-muted" scope="col">S.no</th>
                            <th class="text-muted" scope="col">
                              <div class="d-flex gap-2">Componet*</div>
                            </th>
                            <th class="text-muted" scope="col">Abbr</th>

                            <th class="text-muted" scope="col">Amount</th>
                            <th class="text-muted" scope="col">Stastic...</th>
                            <th class="text-muted" scope="col">Depend...</th>
                            <th class="text-muted" scope="col">Is Tax a.</th>
                            <th class="text-muted" scope="col">Formula</th>
                            <th class="text-muted" scope="col">
                              <i class="bi bi-gear"></i>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(deduct, index) in deductions"
                            :key="index"
                          >
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                </label>
                              </div>
                            </td>
                            <td>{{ deduct.idx }}</td>
                            <td>{{ deduct.salary_component }}</td>
                            <td>{{ deduct.abbr }}</td>
                            <td>{{ deduct.amount }}</td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input align-items-center"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                </label>
                              </div>
                            </td>
                            <td></td>
                            <td>
                              <div class="d-flex gap-2">
                                <i class="bi bi-pencil"></i>Edit
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button class="btn mt-1 btn-light border-0 rounded-3">
                        Add Row
                      </button>
                      <div class="mt-3">
                        Increment Table
                        <table
                          class="table table-bordered table-striped table-responsive-lg table-responsive-md table-responsive-sm mt-3"
                        >
                          <thead>
                            <tr class="sticky2">
                              <th class="text-muted" scope="col">
                                <div class="form-check">
                                  <input
                                    class="form-check-input mt-2"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                  </label>
                                </div>
                              </th>
                              <th class="text-muted" scope="col">S.no</th>
                              <th class="text-muted" scope="col">
                                Description
                              </th>

                              <th class="text-muted" scope="col">
                                <div>Componet</div>
                              </th>

                              <th class="text-muted" scope="col">Date</th>
                              <th class="text-muted" scope="col">Percentage</th>
                              <th class="text-muted" scope="col">Depend...</th>

                              <th class="text-muted" scope="col">
                                <i class="bi bi-gear"></i>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="{ condition, index } in increments"
                              :key="index"
                            >
                              <td>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                  </label>
                                </div>
                              </td>
                              <td>{{ index + 1 }}</td>
                              <td>{{ condition.salary_component }}</td>
                              <td>{{ condition.abbr }}</td>
                              <td>>{{ condition.amount }}</td>
                              <td>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div class="form-check">
                                  <input
                                    class="form-check-input align-items-center"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                  </label>
                                </div>
                              </td>
                              <td></td>
                              <td>
                                <div class="d-flex gap-2">
                                  <i class="bi bi-pencil"></i>Edit
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                          <div>
                            <button
                              class="btn mt-1 btn-light border-0 rounded-3"
                            >
                              Add Row
                            </button>
                          </div>

                          <div class="d-flex gap-2">
                            <div>
                              <button
                                class="btn mt-1 btn-light border-0 rounded-3"
                              >
                                Download
                              </button>
                            </div>
                            <div>
                              <button
                                class="btn mt-1 btn-light border-0 rounded-3"
                              >
                                Upload
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Enter Value</h5>
          <button
            type="button"
            class="close text-white border-0 rounded-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card ps-2 mt-2">
            <label for="myFile">Custom Field:</label>
            <br />
            <div class="upload-btn-wrapper">
              <input @change="uploadFileChange" type="file" id="myFile" /><br />
              <button
                @click="uploadFile"
                class="btn bg-color ps-2 border-1 rounded-2 w-25 mt-2 mb-3"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      employeeSummary: [],
      file: null,
      selectedFile: null,
      url: "",
      file_url: "",
      show: true,
      currentEmployee: [],
      id: null,
      deductions: [],
      earning: [],
      increments: [],
      // token: localStorage.getItem("token") || null,
      // isAuthenticated: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    changePage() {
      this.show = true;
      this.$router.push({
        path: "/firstpage",
        query: {
          name: "employeedata",
        },
      });
    },
    printDocument() {
      // Add logic for printing here
      window.print();
    },
    reloadPage() {
      window.location.reload();
    },
    uploadFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      if (!this.selectedFile) {
        alert("Please select a file.");
        return;
      } else {
        // Create a FormData object and append the file

        const formData = new FormData();
        formData.append("file", this.selectedFile, this.selectedFile.name);
        formData.append("is_private", "1");

        console.log(formData);

        // Make a POST request to your server with the file
        axios
          .post("http://192.168.1.228:8000/api/method/upload_file", formData)
          .then((response) => {
            // Handle the server response
            console.log(response.data.message["file_url"]);
            // axios
            //   .get(
            //     "http://192.168.1.228:8000/api/method/hrforecasting.events.parse_pdf_to_excel",
            //     { params: { file_url: response.data.message["file_url"] } }
            //   )
            //   .then((response) => {
            //     // this.employeeSummary = response.data.message;
            //     console.log(response.data);
            //   })
            //   .catch((error) => {
            //     console.error(error.message);
            //   })
            //   .finally(() => {
            //     this.loading = false;
            //   });
          })
          .catch((error) => {
            // Handle errors
            console.error("Error uploading file:", error);
          });
      }
    },
    // filterId(name) {
    //   this.employeeSummary.filter((employee) => {
    //     if (employee.employee_name == name) {
    //       this.employeeSummary == name;
    //     }
    //   });
    // },

    addEmployee() {
      this.$router.push({
        path: "/addemployee",
        query: {
          name: "Addemployee",
        },
      });
    },
    employeeDeatils(name) {
      this.show = false;

      this.employeeSummary.filter((employee) => {
        if (employee.employee_name == name) {
          this.currentEmployee = employee;
          axios
            .get(
              "http://192.168.1.228:8000/api/resource/Employee Data/" +
                this.currentEmployee.name,
              {
                params: {
                  fields: JSON.stringify(["*"]),
                },
              }
            )
            .then((res) => {
              this.deductions = res.data.data.deduction;
              this.earning = res.data.data.earning;
              this.increment = res.data.data.increments;
              console.log(this.earning, "===earning");
              console.log(this.deductions, "===deductions");
            });
        }
      });
    },

    fetchData() {
      this.loading = true;
      axios
        .get("http://192.168.1.228:8000/api/resource/Employee Data", {
          params: {
            fields: JSON.stringify(["*"]),
          },
        })
        .then((response) => {
          this.employeeSummary = JSON.parse(JSON.stringify(response.data.data));
          console.log(this.employeeSummary);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: black;

  font-family: Poppins;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.bg-color {
  background: lightgray;
  color: black;
}
td {
  font-size: 12px;
}
.bi-justify::before {
  content: "\f42a";
  font-size: 20px;
  margin-top: 5px;
}
.form-check {
  padding-left: 3em;
}
.btn {
  padding: 2px 10px 5px 10px;
  background: skyblue;
  color: whitesmoke;
}
.bg-color1 {
  background: lightgray;
  height: 100vh;
  width: 100%;
}
.nav-pills .nav-link.active {
  background-color: transparent !important;
  color: #5b76ff !important;
  border-bottom: 4px solid #5b76ff !important;
}
.card {
  color: black;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.line {
  line-height: 40px;
}
</style>
<!--  -->