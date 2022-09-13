let password ="124_4"

if (password.length>4 && (password.includes('-') || password.includes('_')))
   {
    console.log('Пароль является надёжным')
    }
     else{
    console.log('Пароль не является надёжным');
}