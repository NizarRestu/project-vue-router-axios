<template>
  <div class="motor">
    <div class="header">
      <h1>Data Transportasi</h1>
      <img src="../../public/logo.png" alt="" />
    </div>
    <div class="input" id="input">
      <form @submit.prevent="add">
        <table class="tabel-input">
          <tr>
            <input type="hidden" v-model="form.id" required />
            <th><label>Nama Motor:</label></th>
            <th><input type="text" v-model="form.motor" required /></th>
          </tr>
          <tr>
            <th><label>Merek Motor:</label></th>
            <th><input type="text" v-model="form.merk" required /></th>
          </tr>
          <tr>
            <th><label>Tahun Buatan:</label></th>
            <th><input type="text" v-model="form.tahun" required /></th>
          </tr>
          <tr>
            <th><label class="bb">Kapasitas Tangki:</label></th>
            <th><input type="text" v-model="form.bahanbakar" required /></th>
          </tr>
          <tr>
            <th><label class="jenis">CC:</label></th>
            <th><input type="text" v-model="form.jenis" required /></th>
          </tr>
          <tr>
            <th><label class="image">Image:</label></th>
            <th><input type="text" v-model="form.image" required /></th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button class="button" type="submit" v-show="!updateSubmit">
                <i class="fa-solid fa-plus"></i>
                Add
              </button>
              <button
                class="button"
                type="button"
                v-show="updateSubmit"
                @click="update(form)"
              >
                <i class="fa-solid fa-plus"></i>
                Update
              </button>
            </th>
          </tr>
        </table>
      </form>
    </div>
    <div class="data">
      <table class="table table-striped tableData">
        <thead>
          <tr>
            <th class="th">Nama Motor</th>
            <th class="th">Merek Motor</th>
            <th class="th">Tahun Buatan</th>
            <th class="th">Kapasitas Tangki</th>
            <th class="th">CC Motor</th>
            <th class="th">Image</th>
            <th class="th">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="motor in motors" :key="motor.id">
            <td class="td td1">{{ motor.motor }}</td>
            <td class="td td1">{{ motor.merk }}</td>
            <td class="td td1">{{ motor.tahun }}</td>
            <td class="td td1">{{ motor.bahanbakar }}</td>
            <td class="td td1">{{ motor.jenis }}</td>
            <td>
              <img
                class="td"
                :src="motor.image"
                alt=""
                width="200px"
                height="130px"
              />
            </td>
            <td class="td td1">
              <a href="#input">
                <button class="edit" @click="edit(motor)">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </a>
              <button class="del" @click="del(motor)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "MotorVue",
  data() {
    return {
      form: {
        id: "",
        motor: "",
        merk: "",
        tahun: "",
        bahanbakar: "",
        jenis: "",
        image: "",
      },
      motors: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(" http://localhost:3000/motors")
        .then((res) => {
          this.motors = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    add() {
      axios.post(" http://localhost:3000/motors/", this.form).then((res) => {
        this.load();
        this.form.motor = "";
        this.form.merk = "";
        this.form.tahun = "";
        this.form.bahanbakar = "";
        this.form.jenis = "";
        this.form.image = "";
      });
    },
    edit(motor) {
      this.updateSubmit = true;
      this.form.id = motor.id;
      this.form.motor = motor.motor;
      this.form.merk = motor.merk;
      this.form.tahun = motor.tahun;
      this.form.bahanbakar = motor.bahanbakar;
      this.form.jenis = motor.jenis;
      this.form.image = motor.image;
    },
    update(form) {
      return axios
        .put(" http://localhost:3000/motors/" + form.id, {
          motor: this.form.motor,
          merk: this.form.merk,
          tahun: this.form.tahun,
          bahanbakar: this.form.bahanbakar,
          jenis: this.form.jenis,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.motor = "";
          this.form.merk = "";
          this.form.tahun = "";
          this.form.bahanbakar = "";
          this.form.jenis = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(motor) {
      axios.delete(" http://localhost:3000/motors/" + motor.id).then((res) => {
        this.load();
        let index = this.motors.indexOf(form.motor);
        this.motors.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.motor {
  scroll-behavior: smooth;
}
.th {
  text-align: center;
}
.td {
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}
.td1 {
  padding-top: 60px;
}
.button {
  background-color: #0384fc;
  color: white;
  border: none;
  width: 100%;
  height: 30px !important;
  border-radius: 5px;
  padding-bottom: 35px;
  transition: background-color 2s, color 2s, border 2s;
}
input {
  border-radius: 5px;
  height: 30px !important;
  cursor: pointer;
}
i {
  color: white;
}
.del {
  width: 50px;
  border: none;
  padding: 5px;
  background-color: rgb(252, 33, 33);
  border-radius: 5px;
  margin-right: 35px;
}
.edit {
  width: 50px;
  border: none;
  padding: 5px;
  background-color: rgb(24, 24, 245);
  border-radius: 5px;
  margin-right: 30px;
}
th {
  text-align: left;
  line-height: 35px;
}
.input {
  margin-left: 400px;
  margin-bottom: 40px;
}
.tableData {
  width: 1147px;
  border: 1px solid;
  scroll-behavior: smooth;
}
.header {
  display: flex;
  padding-top: 30px;
  margin-top: -30px;
  margin-bottom: 30px;
  background-color: #dddddd;
  transition: background-color 2s, color 2s;
}
.header:hover {
  background-color: black;
  color: white;
}
h1 {
  margin-left: auto;
}
img {
  width: 150px;
  margin-right: auto;
  margin-top: -20px;
}
</style>
