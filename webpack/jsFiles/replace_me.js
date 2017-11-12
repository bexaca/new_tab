jQuery(document).ready(function () {
    jQuery(".links__card").hover(function () {
        jQuery(this).siblings(".shop-card").toggleClass("card__hover");
    });
    jQuery("#addFunSite").click(function () {
        var nameFun = jQuery("#nameFun").val();
        var imageFun = jQuery("#imageFun").val();
        var URLFun = jQuery("#URLFun").val();
        if (nameFun == 0 || imageFun == 0 || URLFun == 0) {
            jQuery(".alert__msg").addClass("alert__msg-show");
            setTimeout(function () {
                jQuery(".alert__msg").removeClass("alert__msg-show");
            }, 4000);
        }
        else{
            $('.fun__card').append('<div class="col-md-3 fun__block"><div class="shop-card"><a target="_blank" href="' + URLFun + '"><div class="slider"><figure data-color="#E24938, #A30F22"><div class="image__div" style="background-image:url(' + imageFun + ')"></div></figure></div><div class="title">' + nameFun + '</div></a><div class="cta"><a href="#/" class="btn">x<span class="bg"></span></a></div></div></div>');
        }
    });
    jQuery("#addWorkSite").click(function () {
        var nameWork = jQuery("#nameWork").val();
        var imageWork = jQuery("#imageWork").val();
        var localWork = jQuery("#localWork").val();
        var devWork = jQuery("#devWork").val();
        var liveWork = jQuery("#liveWork").val();
        if (nameWork == 0 || imageWork == 0 || localWork == 0 || devWork == 0 || liveWork == 0) {
            jQuery(".alert__msg").addClass("alert__msg-show");
            setTimeout(function () {
                jQuery(".alert__msg").removeClass("alert__msg-show");
            }, 4000);
        }
        else{
            jQuery('.work__card').append('<div class="col-md-3 work__block"><div class="single__card"><div class="shop-card"><div class="slider"><figure data-color="#E24938, #A30F22"><div class="image__div" style="background-image:url(' + imageWork + ')"></div></figure></div><div class="title">' + nameWork + '</div><div class="cta"><a href="#/" class="btn">x<span class="bg"></span></a></div></div><div class="links__card"><a class="local__link" href="' + localWork + '" target="_blank"><div class="link__card"><span><i class="fa fa-map-marker" aria-hidden="true"></i></span></div></a><a target="_blank" href="' + devWork + '"><div class="link__card"><span><i class="fa fa-cog" aria-hidden="true"></i></span></div></a><a target="_blank" href="' + liveWork + '"><div class="link__card"><span><i class="fa fa-globe" aria-hidden="true"></i></span></div></a></div></div></div>');
        }
    });

    jQuery(".cta a.btn").click(function () {
        jQuery(this).parent().parent().parent().parent().remove('.col-md-3.work__block');
        jQuery(this).parent().parent().parent().remove('.col-md-3.fun__block');
    });

});
