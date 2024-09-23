<script lang="ts">
    import PortfolioAnimation from "../components/PortfolioAnimation.svelte";
    import "../styles/portfolio.css"
    import  {SkillPoint} from "../lib/SkillPoint";
    import {Workexperience} from "../lib/Workexperience";
    import Footer from "../components/Footer.svelte";
    export let params;

    const skillPoints: SkillPoint[] = [];
    const workexperience: Workexperience[] = [];

    skillPoints.push(new SkillPoint('src/assets/portfolioPics/threeJs.png',"ThreeJs",
        'I have developed everything you see in the background with ThreeJs. So I got a bit of experience with it',
        'linear-gradient(315deg, #ffbc00, #ff0058)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/nodeJs.png',"NodeJs",
        'In my first and second year I had to develop a website, the backend was written in NodeJs & Express',
        'linear-gradient(315deg, #03a9f4, #ff0058)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/svelte.png',"Svelte",
        'In my second year I had to develop an auction site in svelte. The website you are on now is also built with svelte',
        'linear-gradient(315deg, #4dff03, #00d0ff)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/java.png',"Java",
        'I am fluent in Java due to the fact that it is the first language you learn in University. I have built a chat application and a game in Java for school projects',
        'linear-gradient(315deg, #005AA7, #FFFDE4)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/javascript.png',"Javascript",
        'Javascript was my second programming language. I have used it in my previous school projects and on the website you are now',
        'linear-gradient(315deg, #FF0099, #493240)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/css.png',"Css",
        "With all the websites I've made I used css to style it. This site is also using CSS",
        'linear-gradient(315deg, #02AAB0, #00CDAC)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/capcut.png',"CapCut",
        "I am very proficient and know my way through CapCut. I use this app to edit videos for TikTok and other social media platforms",
        'linear-gradient(315deg, #403B4A,#E7E9BB)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/tiktok.png',"TikTok",
        "I post various podcast clips on my TikTok page and in the past year I got over 20 million views on my channel",
        'linear-gradient(315deg, #314755,#26a0da)'));
    skillPoints.push(new SkillPoint('src/assets/portfolioPics/wordpress.png',"WordPress",
        "During my minor I've worked with WordPress to build a partner website for bol.com. In this minor I also learned SEO,SEA and Google Analytics",
        'linear-gradient(315deg, #F4D03F,#16A085)'));

    workexperience.push(new Workexperience('src/assets/portfolioPics/weLocalize.png','WeLocalize',
        "I am currently employed at WeLocalize, where I focus on data annotation for machine learning purposes.\n\n" +
        "Key Responsibilities:\n" +
        "• Labeling data in target languages for various machine learning tasks, conducting research as needed.\n" +
        "• Ensuring language accuracy and cultural relevance for the intended audience.\n" +
        "• Maintaining attention to detail and adhering to task instructions, consistently applying best practices.\n" +
        "• Meeting established productivity and quality benchmarks.\n" +
        "• Promptly identifying and reporting any issues or bugs."));

    workexperience.push(new Workexperience('src/assets/portfolioPics/youngones.png','YoungOnes',
        "YoungOnes is a freelance platform that enables businesses to hire freelancers for various assignments. " +
        "Since 2022, I have been active on this platform, completing assignments for a wide range of companies across different sectors. " +
        "My roles have ranged from logistical support to promotional activities and customer service, depending on the needs of the client. " +
        "Some of the companies I have worked for include:\n\n" +
        "•Guts&Gusto\n" +
        "•The Sting\n" +
        "•Dustin\n" +
        "•Bleckmann\n" +
        "•Vliegveld Twenthe\n" +
        "•Markteffect\n\n" +
        "Through these assignments, I have gained valuable experience working in dynamic environments " +
        "and adapting to the specific requirements and demands of different clients."));


    workexperience.push(new Workexperience('src/assets/portfolioPics/ctn.png','CTN',
        'During the COVID-19 pandemic, I worked at CovidTestNederland, where I held dual roles as both an administrative employee and a tester. ' +
        'In addition to managing the testing process, I was responsible for handling administrative tasks to ensure smooth operations. \n\n Over time, ' +
        'I took on a leadership role, overseeing the entire testing and administrative workflow, ensuring the efficiency ' +
        'and accuracy of the testing procedures and documentation.'));

</script>


<PortfolioAnimation/>
<main class="homePage">
    <div class="grid-item" style="grid-column: 2 / span 12; visibility: hidden; height: 50px"></div>
    <div class="grid-item" style="grid-column: 2 / span 5; height: 250px">
        <h1 style="font-size: 70px">Luca Dettori</h1>
        <h2>🚀 Welcome to my website!!</h2>
    </div>

    <div class="grid-item" style="grid-column: 8 / span 3; height: 400px ;visibility: hidden"></div>

    <div class="grid-item" style="grid-column: 2 / span 7; height: 80px; align-content: center; text-align: center; margin-bottom: 80px">
        <p style="font-size: 30px; font-weight: bold; font-family: 'American Typewriter'">⬇️ Scroll to learn about me ⬇️</p>
    </div>

    <div class="title-container">
        <h2 class="title">About Me</h2>
    </div>

    <div class="aboutMe-container">
        <!-- Eerste rechthoek (links uitgelijnd) -->
        <div class="aboutMe-box box-left">
            <h3>Software Engineer</h3>
            <p> My name is Luca Dettori and I am currently studying Software Engineering at Saxion University.
                I am in my third year and over these years I've worked on several projects including this website
                and gained knowledge over several programming languages (see below).
            </p>
        </div>
        <!-- tweede rechthoek (rechts uitgelijnd) -->
        <div class="aboutMe-box box-right" >
            <h3>Hobbies</h3>
            <p> If I'm not programming you can find me in the GYM, playing football with friends, editing/filming videos for tiktok and other social media platforms and trading crypto.
                I consistently workout 4x a week for over 5+ years and have developed a good amount of self-discipline this way.
            </p>

        </div>
    </div>


    <div class="title-container">
        <h2 class="title">Skills</h2>
    </div>

    <div class="skills-container">
        {#each skillPoints as k}
            <div class="box" style="--bg-color: {k.getBackgroundColor()}">

                <div class="content">
                    {#if k.getImage()}
                        <!-- Toon de afbeelding als die beschikbaar is -->
                        <img src="{k.getImage()}" alt="Knowledge Point Image" class="knowledge-image" >
                    {/if}
                        <!-- Toon de inhoud als er geen afbeelding is -->
                        <h2>{k.getTitle()}</h2>
                        <p>{k.getDescription()}</p>
                </div>
            </div>

        {/each}
    </div>

    <div class="title-container">
        <h2 class="title">Work experience</h2>
    </div>

    <div class="workexp-container">
        <!-- Eerste rechthoek (links uitgelijnd) -->
        {#each workexperience as wk}
            <div class="workexp-box">
                <div class="title-logo">
                    <h3>{wk.getTitle()}</h3>
                    <img src={wk.getImage()} alt="{wk.getTitle()} logo" class="company-logo" />
                </div>
                <p>{wk.getDescription()}</p>
            </div>
        {/each}

    </div>

    <Footer/>

</main>

<style>


    .homePage {
        position: relative;

        display: grid;
        grid-template-columns: repeat(12, 1fr);
        height: 200%;
        gap: 20px;
        padding: 20px;

    }

    h1, h2 {
        font-family: elevon, sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    .grid-item {
        background: linear-gradient(315deg, #134E5E, #71B280);
        padding: 20px;
        border-radius: 5px;
        z-index: 2;
        position: relative;

    }

    /*aboutme skills and work experience titles*/
    .title-container{
        grid-column: 1 / span 12; /* Zorg ervoor dat de container de volledige breedte van de grid bedekt */
        display: flex;
        justify-content: center; /* Centreert horizontaal */
        align-items: center; /* Centreert verticaal (optioneel) */
        text-align: center;
        height: 100%; /* Optioneel, afhankelijk van de hoogte die je wilt hebben */
        align-content: center;

    }

    .title {
        font-size: 40px;
        font-family: 'American Typewriter';
        font-weight: bold;
    }

    /*aboutme*/
    .aboutMe-container {
        grid-column: 2 / span 10;
        display: flex;
        flex-direction: column; /* Zet de elementen onder elkaar */
        gap: 40px; /* Ruimte tussen de boxen */
        align-items: center; /* Zorgt dat alle boxen in het midden worden uitgelijnd */
        z-index: 2;
    }

    .aboutMe-box {
        width: 50%; /* Pas dit aan naar de gewenste breedte */
        background: linear-gradient(315deg, #FF0099, #493240);

        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }

    /* Specifieke stijlen voor links en rechts uitlijning */
    .box-left {
        align-self: flex-start; /* Zorgt dat de box aan de linkerkant staat */
    }

    .box-right {
        align-self: flex-end; /* Zorgt dat de box aan de rechterkant staat */
    }

    .aboutMe-box:hover {
        transform: translateY(-10px); /* Laat de box iets omhoog komen bij hover */
    }

    /*skills*/
    /* Wanneer je over de .box heen hovert, verberg de afbeelding en toon de tekst */
    .box:hover .knowledge-image {
        opacity: 0;
        transform: scale(0.9);
    }

    .box:hover .content {
        opacity: 1;
    }

    /*Work experience*/
    .workexp-container {
        grid-column: 2 / span 10;

        display: flex;
        justify-content: space-between; /* Zorgt voor ruimte tussen de boxen */
        align-items: flex-start; /* Zorgt ervoor dat de boxen op één lijn staan aan de bovenkant */
        flex-direction: row;

        gap: 20px; /* Voegt een kleine ruimte tussen de boxen toe */
        padding: 20px; /* Ruimte rondom de hele container */
        z-index: 2;
    }

    .workexp-box {
        flex: 1; /* Zorgt ervoor dat elke box evenveel ruimte inneemt */
        background: linear-gradient(315deg, #134E5E, #71B280); /* Voegt een mooie kleurverloop toe */
        border-radius: 10px; /* Maakt de hoeken afgerond */
        padding: 20px; /* Ruimte binnen de box */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Voegt een schaduw toe voor diepte-effect */
        transition: transform 0.3s ease-in-out; /* Voor een hover-effect */
    }

    .title-logo {
        display: flex;
        align-items: center;
        justify-content: space-between; /* Zorgt ervoor dat de titel links staat en het logo rechts */
    }

    .company-logo {
        width: 90px; /* Pas de grootte van het logo aan naar wens */
        height: auto;
    }

    .workexp-box:hover {
        transform: translateY(-10px); /* Laat de box een beetje omhoog komen bij hover */
    }

    .workexp-box p{
        white-space: pre-line;

    }



    h3 {
        font-size: 1.8em;
        margin-bottom: 10px;
    }

    p {
        text-align: left;
        font-size: 1.1em;
        line-height: 1.6;

    }




</style>
