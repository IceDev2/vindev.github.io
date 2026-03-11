function handleClick(event) {
    // Ambil link tujuan
    const targetUrl = event.target.getAttribute('href');
    
    // Kalau link masih kosong (#), cegah biar halamannya nggak refresh
    if (targetUrl === '#') {
        event.preventDefault();
        alert('Link belum diatur, jangan lupa ganti href di HTML-nya ya!');
    }
}
