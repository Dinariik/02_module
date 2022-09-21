 let username = "Dinchik"
 let usersurname = "Nabieva"

 let username1 = username.substring(0,1).toUpperCase() + username.substring(1).toLowerCase()
 
 console.log(username1)
 if (username1 !== username) {
    console.log("Имя было изменено")
 }
 else {
    console.log ("Имя не изменено")
 }

 let usersurname1 = usersurname.substring(0,1).toUpperCase() + usersurname.substring(1).toLowerCase()
 console.log(usersurname1)
 if (usersurname1 !== usersurname) {
    console.log("Фамилия была изменена")
 }
 else {
    console.log ("Фамилия не изменена")
 }



  