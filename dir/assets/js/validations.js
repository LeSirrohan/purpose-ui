$("form").validate({
    rules: {
        firstname: "required",
        lastname: "required",
        email: {
            required: true,
            minlength: 2
        },
        website: {
            required: true,
            minlength: 5
        },
        country: {
            required: true,
            minlength: 5
        },
        volume: {
            required: true,
            email: true
        },
        info: {
            "required"
        }
    },
    messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        email: "Please enter a valid email address",
        website: "Please enter a valid email address",
        country: "Please enter your lastname",
        volume: "Please accept our policy",
        info: "Please select at least 2 topics"
    }
});