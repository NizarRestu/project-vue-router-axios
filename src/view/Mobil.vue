<template>
  <div class="mobil">
    <div class="header">
      <h1>Data Transportasi</h1>
      <img src="../../public/logo.png" alt="" />
    </div>
    <div class="input" id="mobil">
      <form @submit.prevent="add">
        <table class="tabel-input">
          <tr>
            <input type="hidden" v-model="form.id" required />
            <th><label>Nama Mobil:</label></th>
            <th><input type="text" v-model="form.mobil" required /></th>
          </tr>
          <tr>
            <th><label>Merek Mobil:</label></th>
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
            <th><label class="jenis">Harga:</label></th>
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
              <!-- jika tidak update maka tombol update tidak muncul -->
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
            <th class="th">Nama Mobil</th>
            <th class="th">Merek Mobil</th>
            <th class="th">Tahun Buatan</th>
            <th class="th">Kapasitas Tangki</th>
            <th class="th">Harga</th>
            <th class="th">Image</th>
            <th class="th">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mobil in mobils" :key="mobil.id">
            <td class="td td1">{{ mobil.mobil }}</td>
            <td class="td td1">{{ mobil.merk }}</td>
            <td class="td td1">{{ mobil.tahun }}</td>
            <td class="td td1">{{ mobil.bahanbakar }}</td>
            <td class="td td1">{{ mobil.jenis }}</td>
            <td>
              <img
                class="td"
                :src="mobil.image"
                alt=""
                width="200px"
                height="130px"
              />
            </td>
            <td class="td td1">
              <a href="#mobil">
                <button class="edit" @click="edit(mobil)">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </a>
              <button class="del" @click="del(mobil)">
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
  name: "MobilVue",
  data() {
    return {
      form: {
        id: "",
        mobil: "",
        merk: "",
        tahun: "",
        bahanbakar: "",
        jenis: "",
        image: "",
      },
      mobils: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(" http://localhost:3000/mobils")
        .then((res) => {
          this.mobils = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    add() {
      axios.post(" http://localhost:3000/mobils/", this.form).then((res) => {
        this.load();
        this.form.mobil = "";
        this.form.merk = "";
        this.form.tahun = "";
        this.form.bahanbakar = "";
        this.form.jenis = "";
        this.form.image = "";
      });
    },
    edit(mobil) {
      this.updateSubmit = true;
      this.form.id = mobil.id;
      this.form.mobil = mobil.mobil;
      this.form.merk = mobil.merk;
      this.form.tahun = mobil.tahun;
      this.form.bahanbakar = mobil.bahanbakar;
      this.form.jenis = mobil.jenis;
      this.form.image = mobil.image;
    },
    update(form) {
      return axios
        .put(" http://localhost:3000/mobils/" + form.id, {
          mobil: this.form.mobil,
          merk: this.form.merk,
          tahun: this.form.tahun,
          bahanbakar: this.form.bahanbakar,
          jenis: this.form.jenis,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.mobil = "";
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
    del(mobil) {
      axios.delete(" http://localhost:3000/mobils/" + mobil.id).then((res) => {
        this.load();
        let index = this.mobils.indexOf(form.mobil);
        this.mobils.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
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
