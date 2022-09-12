var arr1 = new Array (120)
arr1[0] = Math.round (Math.random () * 15)
for (i = 1; i < arr1.length; i++)
    arr1[i] = arr1[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
var arr2 = new Array (120)
arr2[0] = Math.round (Math.random () * 15)
for (i = 1; i < arr2.length; i++)
    arr2[i] = arr2[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
var arr3 = new Array (120)
arr3[0] = Math.round (Math.random () * 15)
for (i = 1; i < arr3.length; i++)
    arr3[i] = arr3[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
var arr4 = new Array (120)
arr4[0] = Math.round (Math.random () * 15)
for (i = 1; i < arr4.length; i++)
    arr4[i] = arr4[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
var config = {
    colors: [
        asciichart.blue,
        asciichart.green,
        asciichart.default, // default color
        undefined, // equivalent to default
    ]
}
 
console.log (asciichart.plot([ arr1, arr2, arr3, arr4 ], config))
