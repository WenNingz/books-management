<template>
  <v-container fluid>
    <v-layout child-flex>
      <div>
        <v-toolbar flat color="white">

          <v-toolbar-title>BOOK LIST</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <!-- <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.id_no" label="No"></v-text-field>
                    </v-flex> -->
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.author" label="Author"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>

            </v-card>
          </v-dialog>

        </v-toolbar>

        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id_no }}</td>
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.author }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
          <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-layout>

  </v-container>
</template>

<script>
// import Dialog from './components/Dialog';

export default {
  name: "Home",
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: 'No',
        align: 'left',
        sortable: false,
        value: 'id_no'
      },
      { text: 'Title', value: 'title' },
      { text: 'Author', value: 'author' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      // id_no: '',
      title: 0,
      author: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      // id_no: '',
      title: 0,
      author: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          id_no: 'Frozen Yogurt',
          title: 159,
          author: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          id_no: 'Ice cream sandwich',
          title: 237,
          author: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          id_no: 'Eclair',
          title: 262,
          author: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          id_no: 'Cupcake',
          title: 305,
          author: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          id_no: 'Gingerbread',
          title: 356,
          author: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          id_no: 'Jelly bean',
          title: 375,
          author: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          id_no: 'Lollipop',
          title: 392,
          author: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          id_no: 'Honeycomb',
          title: 408,
          author: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          id_no: 'Donut',
          title: 452,
          author: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          id_no: 'KitKat',
          title: 518,
          author: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
};
</script>

<style scoped>
</style>
