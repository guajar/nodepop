/**
 * Created by Jose on 09/04/2017.
 */

'use strict';


module.exports ={

    isEmail: function isValidEmail(mail)
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }

}