// const blogs=[

// ];
// console.log(blogs)

let user = {
    name: "Adebayo Jesutomisin",
    race: "Black",
    location: "Nigeria",
    gender: "Male",
    blogs: [{ title: "how to maintain safety during war outrage", likes: 50 },
    { title: "how to maintain a normal blood pressure", likes: 40 }
    ],
    login: function () {
        console.log("this user has logged in")
    },
    logout: function () {
        console.log("this user has logged in")
    },
    logBlogs: function () {
        console.log(" this user has written the following blogs: ")
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);

        });
    }
};
user.logBlogs();
