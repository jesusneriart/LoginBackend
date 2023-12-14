const mongoose = require('mongoose');

const Account = mongoose.model('accounts');


module.exports = app => {

    //routes
    app.get('/account',async (req,res)=>{
        
        const {rUsername, rPassword} = req.query;

        if(rUsername==null || rPassword==null){
            res.send("INVALID CREDENTIALS");
            return
        }

        var userAcount = await Account.findOne({username:rUsername})
        console.log(userAcount)
        if (userAcount == null){
            //Create account
            console.log("CREATE NEW ACCOUNT...");

            var newAccount = new Account({
                username : rUsername,
                password : rPassword,

                lastAuthentication : Date.now()
            });

            await newAccount.save();

            res.send(newAccount);
            return
        } else{
            if(rPassword == userAcount.password){

                userAcount.lastAuthentication = Date.now();
                await userAcount.save();

                console.log("retrieving accoun")

                res.send(userAcount)
                return

                
            }
        }

        res.send("INVALID CREDENTIALS");
        return
        


    })

}  