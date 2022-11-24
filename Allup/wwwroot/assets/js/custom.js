$(document).ready(() => {
    $(".searchBtn").click(() => {
        let searchInput = $(".searchInput").val();
    let selectedCategory = $(".searchCategory option:selected").val();

        console.log(searchInput)
        console.log(selectedCategory)


        fetch("/shop/search/" + selectedCategory + "?text=" + searchInput)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            })
    })

    $(document).on("click", ".showModalbtn", function (e) {
        e.preventDefault()
        let proId = $(this).attr('value');
        
        //let url = "/product/ProductModal/" + "?id=" + proId
        //console.log(url);
        fetch("/product/ProductModal/" + "?id=" + proId).then(response => {
            return response.text();
        }).then(data => {
            $("#productQuickModals").html(data);
            $("#productQuickModals").addClass("show");
            $(".backz").toggleClass('modal-backdrop');
            $(".backz").toggleClass('fade');
        })
    })

    $(document).on("click", ".close", function () {
        $(this).parent().parent().parent().parent().removeClass("show");
        let body = document.body;
        $(body).removeClass("modal-open");
        $(".modal-backdrop").addClass("backz");
        $(".backz").toggleClass('modal-backdrop');
        $(".backz").toggleClass('fade');

    })
})