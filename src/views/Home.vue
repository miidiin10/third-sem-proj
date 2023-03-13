<template>
    <div class=".app-container">
        <div class="home" >
            <router-link to="/counter" class="link">⮞⮞Enter Counter App⮜⮜</router-link>
            <h1>AltSchool Third Semester Exam Project</h1>
            <footer>
                © Hameed Owoade
            </footer>
        </div>
    </div>    
</template>


<style>
  .app-container {
    height: 100vh;
    background: repeating-linear-gradient(
      45deg,
      #e5030355 0px,
      #e5030355 20px,
      grey 20px,
      grey 40px
    );
    
  }
h1 {
    font-size: larger;
}
.home {
    font-size: xx-large;
    background-color: darkgray;
    border-radius: 50px;
    padding: 30px;
    color: white;
    margin: 10%;
    font-family: 'Courier New', Courier, monospace;
}
.link {
    font-size: small;
    text-decoration: none;
    color: brown;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    /* margin-top: 15px; */
}
</style>