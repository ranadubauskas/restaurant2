console.log("script running!");
const button1 = document.querySelector("#button1");
const mail=document.querySelector("#mail");
const container=document.querySelector("#container");
button1.addEventListener("click", event =>{
  container.innerHTML=`<iframe src=
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sTheDailyScoop!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                    width="275"
                    height="250"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
            </iframe>`
})
let numMail=0;
const button2 = document.querySelector("#button2");
button2.addEventListener("click", event =>{
  alert("You are now signed up for mailing list!")
  numMail++;
  mail.innerHTML="Current # on mailing list: " + numMail;
});
