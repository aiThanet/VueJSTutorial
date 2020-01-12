new Vue({
  el: "#app",
  data: {
    message: "haha",
    url: "https://www.youtube.com",
    classes: ["one", "two"],
    wage: 100,
    coor: {
      x: 0,
      y: 0
    },
    showName: true,
    showAge: false,
    items: ["A", "B", "C", "D", "E"]
  },
  methods: {
    greet(name) {
      return `Hello there  ${name}, ${this.message}`;
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e);
    },
    logCoor(e) {
      this.coor.x = e.offsetX;
      this.coor.y = e.offsetY;
    },
    updateName(e) {
      this.message = e.target.value;
    },
    logMessage(e) {
      console.log("hello world");
    },
    toggleShowName() {
      this.showName = !this.showName;
    },
    toggleShowAge() {
      this.showAge = !this.showAge;
    }
  }
});
