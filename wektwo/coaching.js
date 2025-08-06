function createPhone(color, size, type) {
  return {
    color: color,
    size: size,
    type: type,

    takePicture: function () {
      return this.type + "  1 + 2 + snap";
    },
    playMusic: function () {
      return this.type + " play + pause";
    },
    ring: function () {
      return this.type + " sound";
    },
  };
}
let phoneOne = createPhone("black", "large", "s24");
let phoneTwo = createPhone("white", "large", "16promax");

console.log("phoneOne:", phoneOne);
console.log(phoneOne.takePicture());
console.log(phoneOne.playMusic());
console.log(phoneOne.ring());

//no.1 Create a function to create a user object
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object
