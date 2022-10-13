<template>
  <div class="kapal">
    <div class="header">
      <h1>Data Transportasi</h1>
      <img src="../../public/logo.png" alt="" />
    </div>
    <div class="input" id="kapal">
      <form @submit.prevent="add">
        <table class="tabel-input">
          <tr>
            <input type="hidden" v-model="form.id" required />
            <th><label>Nama Kapal:</label></th>
            <th><input type="text" v-model="form.kapal" required /></th>
          </tr>
          <tr>
            <th><label>Pelabuhan:</label></th>
            <th><input type="text" v-model="form.merk" required /></th>
          </tr>
          <tr>
            <th><label>Type Kapal:</label></th>
            <th><input type="text" v-model="form.tahun" required /></th>
          </tr>
          <tr>
            <th><label class="bb">Gross Tonagge</label></th>
            <th><input type="text" v-model="form.bahanbakar" required /></th>
          </tr>
          <tr>
            <th><label class="jenis">Imo Number:</label></th>
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
            <th class="th">Nama Kapal</th>
            <th class="th">Pelabuhan</th>
            <th class="th">Type Kapal</th>
            <th class="th">Gross Tonagge</th>
            <th class="th">Imo Number</th>
            <th class="th">Image</th>
            <th class="th">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kapal in kapals" :key="kapal.id">
            <td class="td td1">{{ kapal.kapal }}</td>
            <td class="td td1">{{ kapal.merk }}</td>
            <td class="td td1">{{ kapal.tahun }}</td>
            <td class="td td1">{{ kapal.bahanbakar }}</td>
            <td class="td td1">{{ kapal.jenis }}</td>
            <td>
              <img
                class="td"
                :src="kapal.image"
                alt=""
                width="200px"
                height="130px"
              />
            </td>
            <td class="td td1">
              <a href="#kapal">
                <button class="edit" @click="edit(kapal)">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </a>
              <button class="del" @click="del(kapal)">
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
  name: "KapalVue",
  data() {
    return {
      form: {
        id: "",
        kapal: "",
        merk: "",
        tahun: "",
        bahanbakar: "",
        jenis: "",
        image: "",
      },
      kapals: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(" http://localhost:3000/kapals")
        .then((res) => {
          this.kapals = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    add() {
      axios.post(" http://localhost:3000/kapals/", this.form).then((res) => {
        this.load();
        this.form.kapal = "";
        this.form.merk = "";
        this.form.tahun = "";
        this.form.bahanbakar = "";
        this.form.jenis = "";
        this.form.image = "";
      });
    },
    edit(kapal) {
      this.updateSubmit = true;
      this.form.id = kapal.id;
      this.form.kapal = kapal.kapal;
      this.form.merk = kapal.merk;
      this.form.tahun = kapal.tahun;
      this.form.bahanbakar = kapal.bahanbakar;
      this.form.jenis = kapal.jenis;
      this.form.image = kapal.image;
    },
    update(form) {
      return axios
        .put(" http://localhost:3000/kapals/" + form.id, {
          kapal: this.form.kapal,
          merk: this.form.merk,
          tahun: this.form.tahun,
          bahanbakar: this.form.bahanbakar,
          jenis: this.form.jenis,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.kapal = "";
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
    del(kapal) {
      axios.delete(" http://localhost:3000/kapals/" + kapal.id).then((res) => {
        this.load();
        let index = this.kapals.indexOf(form.kapal);
        this.kapals.splice(index, 1);
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
