$(function () {
  let arr = ["a", "b", "c", "d", "e"];
  console.log("Before " + arr);
  arr = jQuery.map(arr, function (n, i) {
    return n.toUpperCase() + i;
  });
  console.log("After: " + arr);
  // debugger;
  $("div").text(arr.join(", "));
});
