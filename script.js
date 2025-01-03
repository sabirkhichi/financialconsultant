document.addEventListener('DOMContentLoaded', function () {
    const urduButton = document.getElementById("language-toggle");
    
    urduButton.onclick = toggleLanguage;

    function toggleLanguage() {
        const elements = {
            "company-name": ["SABIR KHICHI & CO", "صابر کھچی اور کمپنی"],
            "company-tagline": ["FINANCIAL AND TAX CONSULTANT", "مالی اور ٹیکس کنسلٹنٹ"],
            "services-heading": ["What We Do", "ہم کیا کرتے ہیں"],
            "home-link": ["Home", "ہوم"],
            "services-link": ["Services", "خدمات"],
            "taxpayer-link": ["Become a Taxpayer", "ٹیکس دہندہ بنیں"],
            "contact-link": ["Contact Info", "رابطہ معلومات"]
        };

        for (let [id, [english, urdu]] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = urduButton.textContent === "Urdu" ? urdu : english;
            }
        }

        urduButton.textContent = urduButton.textContent === "Urdu" ? "English" : "Urdu";
    }
});
