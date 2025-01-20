window.addEventListener('DOMContentLoaded', event => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    // add collapsible functionality to CW posts
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            if (this.classList.contains("static")) {
                return;
            }
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.classList.contains("shown")) {
                content.classList.remove("shown");
            } else {
                content.classList.add("shown");
            }
        });
    }
    
    // add datatable to the search page
    var table = document.getElementById('posts_table');
    if (table) {
        new DataTable('#posts_table', {
            responsive: true,
            columns: [
                { label: 'ID', name: 'id' },
                { label: 'Title', name: 'summary' },
                { 
                    label: 'Post', 
                    name: 'post', 
                    render: (data, type) => {
                        if (type === 'display') {
                            data = '<div class="post-wrap">' + data + '</div>';
                        }
                        return data;
                    } 
                },
                { label: 'Date', name: 'date', type: 'date' },
            ],
        });
    }
});