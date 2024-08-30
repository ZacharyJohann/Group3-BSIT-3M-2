<?php
session_start();

$loggedin = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#contact">Contact</a>
        <div id="navbar-login" class="navbar-login">
           <?php if ($loggedin): ?>
               <span>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?></span>
               <form action="logout.php" method="post" style="display:inline;">
                  <button type="submit">Logout</button>
               </form>
           <?php else: ?>
               <form action="login.php" method="post">
                  <input type="text" name="username" placeholder="Username" required>
                  <input type="password" name="password" placeholder="Password" required>
                  <button type="submit">Login</button>
               </form>
           <?php endif; ?>
        </div>
    </div>
</body>
</html>
