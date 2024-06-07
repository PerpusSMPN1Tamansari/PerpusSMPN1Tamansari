document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <h1>Library App</h1>
        <div id="login">
            <h2>Login</h2>
            <form id="login-form">
                <input type="email" id="login-email" placeholder="Email" required><br>
                <input type="password" id="login-password" placeholder="Password" required><br>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#" id="show-signup">Sign Up</a></p>
        </div>
        <div id="signup" style="display: none;">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="email" id="signup-email" placeholder="Email" required><br>
                <input type="password" id="signup-password" placeholder="Password" required><br>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="#" id="show-login">Login</a></p>
        </div>
        <div id="dashboard" style="display: none;">
            <h2>Dashboard</h2>
            <nav>
                <button id="show-visits">Kunjungan/Tamu</button>
                <button id="show-returns">Pengembalian Buku</button>
                <button id="show-borrows">Peminjaman Buku</button>
                <button id="show-members">Kartu Digital/Member</button>
                <button id="show-collections">Koleksi Buku</button>
                <button id="show-games">Games</button>
                <button id="logout">Logout</button>
            </nav>
            <div id="content"></div>
        </div>
    `;

    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const dashboard = document.getElementById('dashboard');
    const content = document.getElementById('content');

    showSignup.addEventListener('click', () => {
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'block';
    });

    showLogin.addEventListener('click', () => {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement login functionality
        alert('Login successful');
        document.getElementById('login').style.display = 'none';
        dashboard.style.display = 'block';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement signup functionality
        alert('Signup successful');
        document.getElementById('signup').style.display = 'none';
        dashboard.style.display = 'block';
    });

    document.getElementById('logout').addEventListener('click', () => {
        dashboard.style.display = 'none';
        document.getElementById('login').style.display = 'block';
    });

    document.getElementById('show-visits').addEventListener('click', () => {
        content.innerHTML = '<h3>Kunjungan/Tamu</h3><p>Daftar kunjungan...</p>';
    });

    document.getElementById('show-returns').addEventListener('click', () => {
        content.innerHTML = '<h3>Pengembalian Buku</h3><p>Daftar pengembalian...</p>';
    });

    document.getElementById('show-borrows').addEventListener('click', () => {
        content.innerHTML = '<h3>Peminjaman Buku</h3><p>Daftar peminjaman...</p>';
    });

    document.getElementById('show-members').addEventListener('click', () => {
        content.innerHTML = '<h3>Kartu Digital/Member</h3><p>Daftar member...</p>';
    });

    document.getElementById('show-collections').addEventListener('click', () => {
        content.innerHTML = '<h3>Koleksi Buku</h3><p>Daftar koleksi...</p>';
    });

    document.getElementById('show-games').addEventListener('click', () => {
        content.innerHTML = '<h3>Games</h3><p>Daftar games...</p>';
    });
});
