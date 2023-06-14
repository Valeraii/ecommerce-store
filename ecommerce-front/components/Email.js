import emailjs from "@emailjs/browser"

(function(){
    emailjs.init("kVPiWt2jPqDAaEXsb");
 })();

export const sendEmail = (templateParams) => {
    emailjs
        .send(
            "service_hol146a",
            "template_tlf37dw",
            templateParams
        )
        .then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
}