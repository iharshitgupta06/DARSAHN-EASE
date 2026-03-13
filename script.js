document.addEventListener('DOMContentLoaded', function() {
    // 1. Date Lock: Prevent selection of past dates
    const visitDateInput = document.getElementById('visitDate');
    if (visitDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0
        let dd = today.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        visitDateInput.min = yyyy + '-' + mm + '-' + dd;
    }

    // 2. Receipt Logic: Handle form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page refresh

            const fullName = document.getElementById('fullName').value;
            const visitDate = document.getElementById('visitDate').value;
            const timeSlot = document.getElementById('timeSlot').value;

            // Generate a random Reference Number (e.g., MAH-7829)
            const randomId = Math.floor(1000 + Math.random() * 9000);
            const refNumber = `MAH-${randomId}`;

            // Hide the hero section and booking form
            document.getElementById('hero-section').style.display = 'none';
            document.getElementById('booking-section').style.display = 'none';
            
            // Show the receipt section
            document.getElementById('receipt-section').style.display = 'flex';

            // Populate the receipt details
            document.getElementById('refNum').textContent = refNumber;
            document.getElementById('receiptName').textContent = fullName;
            document.getElementById('receiptDate').textContent = visitDate;
            document.getElementById('receiptTime').textContent = timeSlot;
            
            // Scroll to the top to cleanly view the receipt
            window.scrollTo(0, 0);
        });
    }

    // Print Receipt button handler
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Book Another button handler
    const bookAnotherBtn = document.getElementById('bookAnotherBtn');
    if (bookAnotherBtn) {
        bookAnotherBtn.addEventListener('click', function() {
            window.location.reload();
        });
    }
});
