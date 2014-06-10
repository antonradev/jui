


(function($) {

    $.fn.juiforms = function() {


        if (this.length) {


            if (this.hasClass("jui-email-error")) {
                this.removeClass("jui-email-error");
                $(this).prev().prev('span')[0].remove();
                $(this).prev('.clearfix')[0].remove();
                $(".jui-form-controll input[type='submit']").removeAttr("disabled");
            }


            if (this.data('email') !== undefined) {

                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test(this.val())) {
                    this.addClass('jui-email-error');
                    this.before("<span class='jui-email-error-message'>Please enter a valid Email address</span>");
                    this.before("<div class='clearfix'></div>");
                    $(".jui-form-controll input[type='submit']").attr("disabled", "true");
                }
            }



            if (this.val().length < 3) {

                if (!this.hasClass('jui-text-field-error')) {
                    this.addClass('jui-text-field-error');
                    this.before("<span class='jui-error-message'>Please insert value for this field</span>");
                    this.before("<div class='clearfix'></div>");
                    $(".jui-form-controll input[type='submit']").attr("disabled", "true");
                }
            }
            else {
                if (this.hasClass("jui-text-field-error")) {
                    this.removeClass("jui-text-field-error");
                    $(this).prev().prev('span')[0].remove();
                    $(this).prev('.clearfix')[0].remove();
                    $(".jui-form-controll input[type='submit']").removeAttr("disabled");
                }
                else {
                    return;
                }
            }


        }
        else {
            console.log("There is no selector in the Markup code");
            return;
        }
    };


}(jQuery));



$(".jui-form-controll .jui-input-data").blur(function() {
    $(this).juiforms();
});



