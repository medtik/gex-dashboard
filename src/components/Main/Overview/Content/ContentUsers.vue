<template>
  <table class="table">
    <thead align="left">
    <tr>
      <th class="title">Name</th>
      <th class="title">Email</th>
      <th class="title">Registration</th>
      <th class="title">Developer</th>
      <th class="title">Country</th>
      <th class="title">Edit</th>
      <th class="title">Delete</th>
    </tr>
    </thead>
    <tbody align="left">
    <tr v-for="user in users" :key="user.id">
      <td class="item color-main"> {{ user.name }}</td>
      <td class="item color">{{ user.email }}</td>
      <td class="item color">{{ user.reg }}</td>
      <td class="item color">{{ user.dev }}</td>
      <td class="item color">{{ user.country }}</td>
      <td class="item">
        <router-link :to="`/edit/${user.id}`">
          <button
            type="button"
            class="button edit"
          >Edit
          </button>
        </router-link>
      </td>
      <td class="item">
        <button
          type="button"
          class="button delete"
          @click="deleteUser(user)"
        >Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ContentUsers",

  props: {
    users: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteUser(user) {
      this.$emit("deleteUser", user);
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  .title {
    padding: 30px 0 15px 0;
    color: #b4bac6;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.49px;
  }
  .color {
    color: #8a96a0;
  }
  .color-main {
    color: #1a173b;
  }
  .item {
    padding: 15px 0;
    font-size: 15px;
    .button {
      display: flex;
      align-items: center;
      padding: 5px 12px;
      border-radius: 4px;
      color: white;
      font-size: 14px;
      border: none;
      cursor: pointer;
      outline: none;
      letter-spacing: 0.5px;
    }
    a {
      text-decoration: none;
    }
    .edit {
      background-color: #0077ff;
      &:hover {
        box-shadow: 0px 0px 10px 0px #9ea7fc;
      }
    }
    .delete {
      background-color: #f0166d;
      &:hover {
        box-shadow: 0px 0px 6px 0px #f0166d;
      }
    }
  }
}
</style>
