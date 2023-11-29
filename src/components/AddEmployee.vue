<template>
  <div class="container-fluid">
    <nav>
      <div class="d-flex justify-content-between mt-1">
        <div class="d-flex gap-2">
          <i class="bi bi-justify"></i>
          <h5 class="">1198</h5>
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
            <ul class="nav nav-pills mt-2 ps-1" id="pills-tab" role="tablist">
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
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Hyperion Sub DepartmentName:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="DepartmentName"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Manning Sub DepartmentWise:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="DepartmentWise"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Desgination:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Desgination"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Bifurication Of Management or NonManagement:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Bifurication Of Management or NonManagement"
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
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Level:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Level"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Hyperion Head Count:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Hyperion Head Count"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Date Of Joining:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Date of Joining"
                    />
                    <label for="exampleFormControlInput1" class="form-label"
                      >Date Of Leaving:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Date Of Leaving"
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
                    <tr>
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
                      <td>1</td>
                      <td>Basic</td>
                      <td>BR</td>
                      <td>>18000</td>
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
                  Deduction
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
                      <tr>
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
                        <td>1</td>
                        <td>Basic</td>
                        <td>BR</td>
                        <td>>18000</td>
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
                          <th class="text-muted" scope="col">Description</th>

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
                        <tr>
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
                          <td>1</td>
                          <td>Basic</td>
                          <td>BR</td>
                          <td>>18000</td>
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
                        <button class="btn mt-1 btn-light border-0 rounded-3">
                          Add Row
                        </button>
                      </div>

                      <div class="d-flex gap-2">
                        <div>
                          <button class="btn mt-1 btn-light border-0 rounded-3">
                            Download
                          </button>
                        </div>
                        <div>
                          <button class="btn mt-1 btn-light border-0 rounded-3">
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
</template>
<style scoped>
input {
  background: #f5f6ff;
}
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
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changePage() {
      this.$router.push({
        path: "/",
        query: {
          name: "employeedata",
        },
      });
    },
    printDocument() {
      // Add logic for printing here
      window.print();
    },
  },
};
</script>
