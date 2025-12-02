// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                if (filter === 'all') {
                    project.classList.add('fade-in');
                    project.style.display = 'block';
                } else {
                    const category = project.getAttribute('data-category');
                    if (category === filter) {
                        project.classList.add('fade-in');
                        project.style.display = 'block';
                    } else {
                        project.classList.remove('fade-in');
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
});
