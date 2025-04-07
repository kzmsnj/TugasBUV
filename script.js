document.addEventListener('DOMContentLoaded', function() {
    // Create a button element for theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '☀️';
    themeToggle.title = 'Ubah Tema';
    document.body.appendChild(themeToggle);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Toggle all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.toggle('dark-mode');
        });
        
        // Toggle header and footer
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '🌙';
            
            // Change header and footer styles for dark mode
            header.style.backgroundColor = '#1a1a2e';
            footer.style.backgroundColor = '#1a1a2e';
            
            // Add animation effect
            document.querySelectorAll('section').forEach(section => {
                section.style.transition = 'background-color 0.5s ease';
            });
        } else {
            themeToggle.innerHTML = '☀️';
            
            // Restore header and footer original styles
            header.style.backgroundColor = '#2c3e50';
            footer.style.backgroundColor = '#2c3e50';
        }
    });
    
    // Add hover effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });
    
    // Create search functionality for the bupati table
    const searchDiv = document.createElement('div');
    searchDiv.innerHTML = `
        <label for="bupatiSearch">Cari Bupati:</label>
        <input type="text" id="bupatiSearch" placeholder="Masukkan nama bupati...">
    `;
    
    // Insert search box before the table
    const bupatiSection = document.querySelector('section:nth-child(3)');
    const table = bupatiSection.querySelector('table');
    bupatiSection.insertBefore(searchDiv, table);
    
    // Add search functionality
    const searchInput = document.getElementById('bupatiSearch');
    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
    
    // Create year counter for footer
    const footerText = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Pemerintah Kabupaten Purbalingga. Semua Hak Dilindungi.`;
});