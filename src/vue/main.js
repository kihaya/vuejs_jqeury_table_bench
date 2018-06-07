window.addEventListener("DOMContentLoaded", function () {

    var app = new Vue({
        el: "#app",
        data: function () {
            return { table_data: [] }
        },
        created: function () {
            this.createTableData();
        },
        methods: {
            createTableData: function () {
                const N = 1000;
                var row = [];
                for (var j = 0; j < N; ++j) {
                    row.push(getRandomInt(10));
                }
                for (var i = 0; i < N; ++i) {
                    this.table_data.push(row)
                }
            }
        }
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

})