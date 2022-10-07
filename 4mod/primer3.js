let roudMain = [true, false , false, true]
let x = 0
for (i = 0; i <roudMain.length; i++)
 if (roudMain[i] == true)
 {
    x = x+1
    if (x>=2)
    {
        console.log("Танк убит")
        break
    }
    else {
        console.log("Танк поврежден")
    }
}
    else {
        console.log("Танк двигается дальше "+ (i+1))
    }

 
