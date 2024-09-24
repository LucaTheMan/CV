<script lang="ts">

</script>

<footer class="contact-footer">
    <div class="contact-info">
        <div class="contact-details">
            <h3>Contact Information:</h3>
            <p>Email: <a href="mailto:lucadettol@gmail.com">lucadettol@gmail.com</a></p>
            <p>Phone: <a href="tel:+31 6 14482304">+31 6 14482304</a></p>
        </div>
        <div class="socials">
            <h3>Socials:</h3>
            <a href="https://www.linkedin.com/in/luca-dettori-467095278/" target="_blank" class="social-link">
                <img src="/src/assets/portfolioPics/linkedin.png" alt="LinkedIn" class="social-icon">
            </a>
            <a href="mailto:lucadettol@gmail.com" target="_blank" class="social-link">
                <img src="/src/assets/portfolioPics/gmail.png" alt="gmail" class="social-icon">
            </a>
            <a href="https://www.instagram.com/lucadettori_/" target="_blank" class="social-link">
                <img src="/src/assets/portfolioPics/insta.png" alt="instagram" class="social-icon">
            </a>

        </div>
    </div>

    <div class="footer-message">
        <p>Feel free to reach out for any inquiries or opportunities. I'm always happy to connect!</p>
    </div>
</footer>

<style>

    .footer-message {
        text-align: center; /* Zorgt ervoor dat de tekst in het midden wordt uitgelijnd */
        margin-top: 20px; /* Voeg wat ruimte toe tussen de bovenste sectie en de tekst */
    }

    .footer-message p {
        font-size: 1.2em; /* Maak de tekst iets groter*/
    }

    /* Footer styling */
    .contact-footer {
        z-index: 2;
        grid-column: 2 / span 10; /* Laat de footer netjes binnen de grid vallen */
        background: linear-gradient(315deg, #134E5E, #71B280);

        padding: 20px;
        border-radius: 10px; /* Ronde hoeken voor een nette afwerking */
        margin-top: 50px; /* Voeg ruimte toe boven de footer */
    }

    .contact-info {
        display: flex; /* Flexbox voor een goede indeling */
        justify-content: space-between; /* Zorgt ervoor dat de inhoud aan beide zijden wordt uitgelijnd */
        align-items: flex-start; /* Zorgt ervoor dat de inhoud aan de bovenkant uitgelijnd is */
    }

    .contact-details {
        flex: 1; /* Zorgt ervoor dat dit deel van de footer de beschikbare ruimte gebruikt */
        margin-right: 20px; /* Ruimte tussen contactgegevens en sociale media */
    }

    .socials {
        text-align: right; /* Sociale media links rechts uitlijnen */
    }

    .social-link {
        display: inline-block;
        margin-left: 10px; /* Ruimte tussen de sociale media iconen */
    }

    .social-icon {
        width: 30px; /* Pas aan naar wens */
        height: auto;
    }

    .contact-info h3 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .contact-info p {
        font-size: 1.1em;
        line-height: 1.6;
        margin: 5px 0;
    }

</style>