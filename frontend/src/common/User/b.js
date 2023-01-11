document.write(`
<link rel="stylesheet" href="style.css">
<div class="sidebar">
  <div class="logo-details">
      <i class='bx bx-world bx-sm icon'></i>
      <div class="logo_name">SIGNALS WORD</div>
      <i class='bx bx-menu' id="btn" ></i>
  </div>
<ul class="nav-list">
  <li>
      <i class='bx bx-search' ></i>
     <input type="text" placeholder="Search...">
     <span class="tooltip">Search</span>
  </li>
  <li>
  <a href="../index.html">
    <i class='bx bx-folder' ></i>
    <span class="links_name">Home</span>
  </a>
    <span class="tooltip">Home</span>
  </li>
  <li>
    <a href="../dashboard/dashboard.html">
      <i class='bx bx-grid-alt'></i>
      <span class="links_name">Dashboard</span>
    </a>
     <span class="tooltip">Dashboard</span>
  </li>
  <li>
   <a href="../User/User.html">
     <i class='bx bx-user' ></i>
     <span class="links_name">User</span>
   </a>
   <span class="tooltip">User</span>
 </li>
 <li>
   <a href="../Tutorial/Tutorial.html">
     <i class='bx bx-chat' ></i>
     <span class="links_name">Tutorial</span>
   </a>
   <span class="tooltip">Tutorial</span>
 </li>
 <li class="profile">
     <div class="profile-details">
       <!--<img src="profile.jpg" alt="profileImg">-->
       <div class="name_job">
         <div class="name">Szymon Cogiel</div>
         <div class="job">Student AGH</div>
       </div>
     </div>
     <i class='bx bx-log-out' id="log_out" ></i>
 </li>
</ul>
</div>

`);
