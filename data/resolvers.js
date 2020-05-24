// data/resolvers.js
const { User } = require('../models')
require('dotenv').config()
const actions = require("../actions/modules")
const otpTool = require('otp-without-db')
const key = "secretKey"


verifykey = process.env.VERIFYKEY

const resolvers = {
   /* Query: {
        // fetch the profile of currently authenticated user
        async me(_, args, { user }) {
            // make sure user is logged in
            if (!user) {
                throw new Error('You are not authenticated!')
            }

            // user is authenticated
            return await User.findById(user.id)
        }
    },
*/
    Mutation: {
        // Handle user signup
        async signup(_, { verify, firstname, lastname, phone }) {
            try{
            if (verify === verifykey) {
                const user = await User.findOne({ where: { phone } })
                if (!user) {
                    const user = await User.create({
                        firstname,
                        lastname,
                        phone
                    })
                    return await (actions.checkphone([phone]))
                    // return status
                   
                }
                else {
                    return ({
                        "status": false,
                        "code":300,
                        "token": null
                    })
                }
            }
            else { return ("Not Verified") }
        }
        catch(err){
            return("Server error")
        }
        },

        // Handles user in
        async login(_, { verify, phone, otp, hash }) {
            try{
            if (verify === verifykey) {

                if (otpTool.verifyOTP(phone, otp, hash, key)===true){
                    const user =  await User.findOne({ where: { phone } })
                    return await (actions.tokencreate(user.id, user.firstname, user.lastname, user.phone))

                }
                // return json web token
                else {
                    return {
                        "status": false,
                        "code":400,
                        "hash": null
                    }

                }
            }
            else { return ("Not Verified") }
        }
        catch(err){
            return("Server")
        }
        },
        async checkphone(_, { verify, phone }) {
            try{
            if (verify === verifykey) {
                const user = await User.findOne({ where: { phone } })

                if (!user) {
                    return ({
                        status: false,
                        "code":400,
                        hash: null
                    })
                }
                // return json web token
                else {

                    return await (actions.checkphone([phone]))


                }


            }
            else { return ("Not Verified") }
        }
        catch(err){
            return("Server Error")
        }
        }
    }
}

module.exports = resolvers