---
markup: "mmark"

bg_image: images/background/2022-035b.jpg
draft: false
information:
 - info: "Otwock, Poland"
   label: Location
 - info: "16-24 September 2023"
   label: Date
 - info: "around 35"
   label: Participants
title: "NGSchool2023"
description: "Advances in Computational Biology"
---

<div class="mb-3">
  <b>NGSchool2023: Advances in Computational Biology</b>  will be held in-person, from the <b>16<sup>th</sup> to 24<sup>th</sup> of September 2023</b>.
</div>

<div class="mb-3">
    The topics covered during the Summer School will include:
    <ul>
        <li>Single-cell data analysis</li>
        <li>Whole genome sequencing</li>
        <li>Epigentetics and epigenomics</li>
        <li>Multi-modal data integration</li>
        <li>Cancer evolution</li>
    </ul>
</div>

<div class="mb-3">
    Jump to:
    <ul> 
        <li><a href='#dates'>Important dates</a> </li>
        <li><a href='#registration'>Registration</a></li>
        <li><a href='#speakers'>Speakers and tutors</a></li>
        <li><a href='#program'>Program</a></li>
        <li><a href='#more'>More information</a> </li>
        <li><a href='#venue'>Venue</a></li>  
        <li><a href='#organizers'>Organizers</a></li>
    </ul>
</div>

<div class="mb-3">
    <h2 id='dates'>Important dates</h2>  
    <table class="table table-bordered table-striped">
    <tr>
        <th style="text-align: center">Date</th>
        <th style="text-align: center">Event</th>
        <th></th>
    </tr>
    <tr>
        <td class="date-td" style="text-align: center;">24.05</td>
        <td>Registration opens</td>
        <td>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MXRxbGpldHRkdmFvam5tb29ucDBndnQwbDggdXNteWN6eW5za2FAbmdzY2hvb2wuZXU&tmsrc=usmyczynska%40ngschool.eu" target="_blank" class="btn btn-primary">Add to Google Calendar <i class="far fa-calendar-plus ms-2"></i></a>
        </td>
    </tr>
    <tr>
        <td class="date-td" style="text-align: center;"><s>21.06</s><span style="color: red;"><b> 5.07</b></span></td>
        <td>Registration deadline</td>
        <td>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGhlYTk5azY4c2VucjAxam92ZjJ2OWYycjAgdXNteWN6eW5za2FAbmdzY2hvb2wuZXU&tmsrc=usmyczynska%40ngschool.eu" target="_blank" class="btn btn-primary">Add to Google Calendar <i class="far fa-calendar-plus ms-2"></i></a>
        </td>
    </tr>
    <tr>
        <td class="date-td" style="text-align: center;">09.08</td>
        <td>Selection results announcement</td>
        <td>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmgybzZwMWl1bTlzNWpiOWFoamEwb2ViNXAgdXNteWN6eW5za2FAbmdzY2hvb2wuZXU&tmsrc=usmyczynska%40ngschool.eu" target="_blank" class="btn btn-primary">Add to Google Calendar <i class="far fa-calendar-plus ms-2"></i></a>
        </td>
    </tr>
    <tr>
        <td class="date-td" style="text-align: center;">19.08</td>
        <td>Fee payment deadline</td>
        <td>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjVxbTVuZm05cGUwMmE0a3Q1dWprMjd2ZWUgdXNteWN6eW5za2FAbmdzY2hvb2wuZXU&tmsrc=usmyczynska%40ngschool.eu" target="_blank" class="btn btn-primary">Add to Google Calendar <i class="far fa-calendar-plus ms-2"></i></a>
        </td>
    </tr>
    <tr>
        <td class="date-td" style="text-align: center;">16-24.09</td>
        <td>NGSchool</td>
        <td>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDY1amw1ZGY4aTVoZG5yNWpwODFwMm45YnYgdXNteWN6eW5za2FAbmdzY2hvb2wuZXU&tmsrc=usmyczynska%40ngschool.eu" target="_blank" class="btn btn-primary">Add to Google Calendar <i class="far fa-calendar-plus ms-2"></i></a>
        </td>
    </tr>
    </table>
</div>

<!-- Countdown -->
<div class="alert alert-info">
    <h2 id="countdown" class="text-center mb-0"></h2>
</div>

<script>
    var timezoneOffsetFromUTC = (new Date()).getTimezoneOffset()*60*1000;

    var countDownDateRegistrationStart = new Date("May 24 2023 00:00:01").getTime();
    // var countDownDateRegistrationEnd = new Date("Jun 21 2023 23:59:59").getTime();
    var countDownDateRegistrationEnd = new Date("Jul 5 2023 23:59:59").getTime();
    var countDownDateSchoolStart = new Date("Sep 16 2023 00:00:00").getTime();
    var countDownDateSchoolEnd = new Date("Sep 24 2023 23:59:59").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime() + timezoneOffsetFromUTC;

        var distanceRegistrationStart = countDownDateRegistrationStart - now;
        var distanceRegistrationEnd = countDownDateRegistrationEnd - now;
        var distanceSchoolStart = countDownDateSchoolStart - now;
        var distanceSchoolEnd = countDownDateSchoolEnd - now;

        if (distanceRegistrationStart > 0) {
            var days = Math.floor(distanceRegistrationStart / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceRegistrationStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceRegistrationStart % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distanceRegistrationStart % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = "Registration opens in " + days + " days " + hours + " hours "
            + minutes + " min and " + seconds + " sec!";
        }
        else if (distanceRegistrationStart <= 0 && distanceRegistrationEnd > 0) {
            var days = Math.floor(distanceRegistrationEnd / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceRegistrationEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceRegistrationEnd % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distanceRegistrationEnd % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = "Registration closes in " + days + " days " + hours + " hours "
            + minutes + " min and " + seconds + " sec!";
        }
        else if (distanceRegistrationEnd <= 0 && distanceSchoolStart > 0) {
            var days = Math.floor(distanceSchoolStart / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceSchoolStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceSchoolStart % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distanceSchoolStart % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = "NGSchool2023 starts in " + days + " days " + hours + " hours "
            + minutes + " min and " + seconds + " sec!";
        }
        else if (distanceSchoolStart <= 0 && countDownDateSchoolEnd > 0) {
            var days = Math.floor(distanceSchoolEnd / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceSchoolEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceSchoolEnd % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distanceSchoolEnd % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = "NGSchool2023 is here!";
        }
        else {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "NGSchool2023 is over. Thank you for attending!";
        }
    }, 1000);
</script>

<div class="mb-3">
    <h2 id="registration">Registration</h2> 
    <h3>Registration form</h3> 
    <p>
        The deadline to submit your application is <s>21.06.2023</s> <b>5.07.2023 at 23:59 UTC</b>. Selection results will be announced at the beginning of August. If you have any question or problems get in touch via email: <a href="mailto: info@ngschool.eu">info@ngschool.eu</a>.
    </p>
    <div class="d-flex justify-content-center mb-3">
        <a href="https://ngsheet.ngschool.eu/" target="_blank" class="btn btn-success btn-lg btn-block disabled d-flex justify-content-between align-items-center">
            Registration form (closed)
            <i class="fa-solid fa-play ms-3"></i>
        </a>
    </div>
    <h3>Registration fee</h3> 
    <p>
        The registration fee for the selected participants will be <b>100 EUR/460 PLN for academia</b> and <b>300 EUR/1380 PLN for industry</b>. This fully covers the costs of accommodation and board during the school. <br>
        We try to make our events accessible and affordable for all, and keep the registration fees to a minimum. However, we understand that in some circumstances covering the costs of participation in our event can still be challenging. We do not want the money to be a limiting factor in anyone’s participation, so we will provide financial support for a number of selected participants, primarily based on their socio-economic status. We can offer two types of support: 
        <ul style="color: #7b7b7b">
            <li>Travel grant to help you cover the cost of your travel to the event's venue.</li>
            <li>Fee discount or waiver directed to those participants who cannot get the fee covered by their institutions.</li>
        </ul>
        <span style="color: #7b7b7b">
            Both types of support will be preferentially grated to participants from academia (students, PhD candidates and faculty stuff), but application from industry will be considered, too. <br>
            If you wish to be considered for travel grant, fee discount/waiver or both, make sure to fill the Bursary section of the application form, explaining your situation. We will try our best to help you.
        </span>
    </p>
    <div class="alert alert-info">
        <h4 class="text-center">Registration fee waiver for Ukrainian participants</h4> 
        <p>
            NGSchool's mission is to promote and support science. We want to help by doing what we do best: supporting  scientists. With this in mind, we are offering a fee waiver for accepted applicants from Ukraine or Ukrainians who were displaced as an effect of Russian aggression. Additionally, as in previous years, we will support participants with travel grants. Please mention your situation in the Bursary section of the registration form.
        </p>
    </div>
</div>

<div class="alert alert-warning">
    <h4 class="text-center">For participants applying from Russian institutions</h4>
    <p>NGSchool condemns the aggression against Ukraine in the strongest possible terms and stands in solidarity with our colleagues in Ukraine. Since Russian Universities publicly supported the war we are unable to accept participants affiliated with those institutions. However, we note that many Russian academics, at great personal peril, have publicly criticized this invasion. We would like to support all those harmed by Putin's regime and therefore extend our invitation to Russian academics and students provided they will come as individuals, without affiliation. We will not be able to accept payments for registration fees from Russian universities and companies and will not be able to provide receipts to those organizations.</p>
</div>

<div>
<h2 id='more'>More information</h2> 
    <p>
    If you have any questions regarding NGSchool2023 please first refer to our <a href="/faq" target="_blank">FAQ page</a>. If you cannot find an answer to your question there or need further explanation, you can reach us using <a href="/contact" target="_blank">contact form</a> or our email address <a href="mailto: info@ngschool.eu">info@ngschool.eu</a>.
    </p>
</div>

<hr>

<div class="mt-3">
    <h2 id="speakers">Speakers and tutors</h2>
    <div class="speaker-list d-flex flex-wrap">
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/fabiola-curion.webp">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/fabiola-curion/" target="_blank">Fabiola Curion</a>
                </div>
                <div class="speaker-item-affiliation">
                    Helmholtz Center Munich<br>& Technical University of Munich, Germany
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/jan-krumsiek.png">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/jan-krumsiek/" target="_blank">Jan Krumsiek</a>
                </div>
                <div class="speaker-item-affiliation">
                    Weill Cornell Medicine, USA
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/gustav-lindwall.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/gustav-lindwall/" target="_blank">Gustav Lindwall</a>
                </div>
                <div class="speaker-item-affiliation">
                    Chalmers University of Technology, Sweden
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/maxim-freydin.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/maxim-freydin/" target="_blank">Maxim Freydin</a>
                </div>
                <div class="speaker-item-affiliation">
                    Queen Mary University of London, United Kingdom
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/silvia-perez-lluch.webp">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/silvia-perez-lluch/" target="_blank">Silvia Perez-Lluch</a>
                </div>
                <div class="speaker-item-affiliation">
                    Centre for Genomic Regulation, Barcelona, Spain
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/jakub-mieczkowski.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/jakub-mieczkowski/" target="_blank">Jakub Mieczkowski</a>
                </div>
                <div class="speaker-item-affiliation">
                    Medical University of Gdansk, Poland
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/kerstin-hasse.png">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/kerstin-hasse/" target="_blank">Kerstin Haase</a>
                </div>
                <div class="speaker-item-affiliation">
                    Charité Universitätsmedizin, Germany<br>& German Cancer Research Center (DKFZ), Germany
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/giada-fiandaca.webp">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/giada-fiandaca/" target="_blank">Giada Fiandaca</a>
                </div>
                <div class="speaker-item-affiliation">
                    Laboratory of Computational Modeling,<br>University of Trento, Italy
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/diana-sharysh.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/diana-sharysh/" target="_blank">Diana Sharysh</a>
                </div>
                <div class="speaker-item-affiliation">
                    Aarhus University, Denmark
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/vitalii-kleshchevnikov.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/vitalii-kleshchevnikov/" target="_blank">Vitalii Kleshchevnikov</a>
                </div>
                <div class="speaker-item-affiliation">
                    Wellcome Sanger Institute, United Kingdom
                </div>
            </div>
        </div>
        <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/tomasz-kopacz.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/tomasz-kopacz/" target="_blank">Tomasz Kopacz</a>
                </div>
                <div class="speaker-item-affiliation">
                    Microsoft
                </div>
            </div>
        </div>
        <!-- <div class="speaker-item col-12 col-lg-6 mb-3">
            <img src="/images/people/urszula-smyczynska.jpg">
            <div class="d-flex flex-column">
                <div class="speaker-item-name">
                    <a href="/people/urszula-smyczynska/" target="_blank">Urszula Smyczyńska</a>
                </div>
                <div class="speaker-item-affiliation">
                    Medical University of Lodz, Poland
                </div>
            </div>
        </div> -->
    </div>
    <p class="text-center mt-3"><b>And more to be announced soon!</b></p>
</div>

<hr>

<div class="mt-3" id='program-div'>
    <h2 id='program'>Program</h2> 
    <div style="display: flex;">
        <iframe id='program-iframe' width=100% height=800 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQZf_9jDJ_4giGYjTizVNMfguXsZdQPm7uOujNRAzj-hCWmLzcAZo0_yY-APh0RmZH9-DtSbbAVYHuJ/pubhtml?gid=1762051258&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
    <p class="text-center mt-3"><b>More details to be announced soon!</b></p>
</div>

<hr>

<div class="mt-3">
    <h2 id="venue">Venue</h2>
    <p>
        NGSchool2023 will take place in <a href="https://glassresidence.pl/en/home/" target="_blank">Glass Residence</a> in Otwock, near Warsaw, Poland. You can see the map with all important locations <a href="https://goo.gl/maps/3j1Fto5rFTredzHE9" target="_blank">here</a>.
    </p>
    <div class="venue-photo-list d-flex flex-wrap">
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue1.png">
        </div>
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue2.png">
        </div>
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue3.png">
        </div>
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue4.png">
        </div>
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue5.png">
        </div>
        <div class="photo-item col-6 col-md-3">
            <img src="/images/ngschool2023/venue6.png">
        </div>
    </div>
</div>

<hr>

<div class="mt-3">
    <h2 id="organizers">Organizers</h2>
    <ul>
        <li><a href="/people/gabriel-deards" target="_blank">Gabriel Deards</a>, Weill Cornell Medicine, Cornell University, USA</li>
        <li><a href="/people/szymon-grabia" target="_blank">Szymon Grabia</a>, Medical University of Lodz, Poland</li>
        <li><a href="/people/marcin-kaszkowiak" target="_blank">Marcin Kaszkowiak</a>, Institute of Hematology and Blood Transfusion</li>
        <li><a href="/people/zuzanna-nowicka" target="_blank">Zuzanna Nowicka</a>, Medical University of Lodz, Poland</li>
        <li><a href="/people/dalma-muller" target="_blank">Dalma Müller</a>, Semmelweis University, Budapest</li>
        <li><a href="/people/vishma-pratap" target="_blank">Vishma Pratap Sur</a>, Czech Academy of Sciences, Czech Republic</li>
        <li><a href="/people/diana-sharysh" target="_blank">Diana Sharysh</a>, Aarhus University, Denmark</li>
        <li><a href="/people/karolina-sienkiewicz" target="_blank">Karolina Sienkiewicz</a>, Weill Cornell Medicine, Cornell University, USA</li>
        <li><a href="/people/urszula-smyczynska" target="_blank">Urszula Smyczyńska</a>, Medical University of Lodz, Poland</li>
        <li><a href="/people/wiktoria-wilman" target="_blank">Wiktoria Wilman</a>, NaturalAntibody S.A., Szczecin, Poland</li>
    </ul>
</div>

<hr>
