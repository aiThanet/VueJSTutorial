<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>
      Edit
      <strong>{{smoothie.title}}</strong> smoothie
    </h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title" />
      </div>
      <div v-for="(ingredient, index) in smoothie.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]" />
        <i class="material-icons delete" @click="deleteIngredient(ingredient)">delete</i>
      </div>
      <div class="field add-ingredients">
        <label for="add-ingredient">Add an ingredient:</label>
        <input
          placeholder="press tab to add more ingredient"
          type="text"
          name="add-ingredient"
          @keydown.tab="addIngredient"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    editSmoothie() {
      if (this.smoothie.title) {
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: true
        });
        this.feedback = null;
        if (this.another) {
          this.smoothie.ingredients.push(this.another);
          this.another = null;
        }
        db.collection("Smoothie")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter a smoothie title";
      }
    },
    addIngredient() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    deleteIngredient(ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        ingredient => ingredient != ing
      );
    }
  },
  created() {
    // let ref = db
    //   .collection("Smoothie")
    //   .where("slug", "==", this.$route.params.smoothie_slug);
    // ref.get().then(snapshot => {
    //   snapshot.forEach(doc => {
    //     this.smoothie = doc.data();
    //     this.smoothie.id = doc.id;
    //   });
    // });
    let ref = db.collection("Smoothie").doc(this.$route.params.smoothie_id);
    ref.get().then(doc => {
      this.smoothie = doc.data();
      this.smoothie.id = doc.id;
    });
  }
};
</script>

<style scoped>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 40px auto;
  margin-top: 0;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>