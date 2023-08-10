$(document).ready(() => {
    $("#btnDoiTien").click(() => {
        if ($("#stId").val() === "") {
            $("#stId").toggleClass("error");
            return;
        }

        let st = parseFloat($("#stId").val());
        let dv = $("#dvId").val();

        let k = "Kết quả tại đây..."
        switch (dv) {
            // ...
        }

        $("#kq").html(`<h1>${k}</h1>`);
    });

    $(".tab a").click(function() {
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).slideDown("slow");
    });

    let n = $(".slider > div").length;
    let h = "";
    for (let i = 0; i < n; i++)
        h += `
            <button class="digit">${i + 1}</button>
        `;
    $(".slider-button :first-child").after(h);
    $(".slider").height($(".slider img").height() + 5);

    let current = -1;
    let showSlider = (current) => {
        $(".slider > div").slideUp("slow");
        $(".slider > div").eq(current).slideDown("slow");

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active");
    }
    $("button.digit").click(function() {
        current = parseInt($(this).text()) - 1;
        showSlider(current);
    });

    $(".next").click(function() {
        current++;
        if (current === n)
            current = 0;
        showSlider(current);

        clearInterval(timer);
        runSlider();
        
    });

    $(".prev").click(function() {
        current--;
        if (current < 0)
            current = n - 1;
        showSlider(current);
    });

    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 2000);
    };
    runSlider();
});