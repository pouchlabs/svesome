<script>
    import "../out/pouchcss.min.css";
    import "highlight.js/styles/default.min.css"
    import "../out/app.css"
    import {onMount} from "svelte";
    import Svesome from "$lib";
    import hljs from 'highlight.js';
    import js from "highlight.js/lib/languages/javascript"
    
    onMount(async ()=>{
        hljs.registerLanguage('javascript',js);
        hljs.highlightAll()
        await import("../out/pouchcss.js")
    }) 



</script>
<div class="navba horizontal p-sm-2 bg-bran elevate-x">
    <span class='text-4 text-brand ml-3'>svesome</span>
    <div class="ml-auto">
      <a href="https://github.com/pouchlabs/svesome" class="ml-2 mr-2 text-brand"><Svesome type="fa-brands" size="fa-2xl" icon="fa-github"></Svesome></a>
    </div>
</div>
<div class="horizontal">
<h1 class="text-5 mx-auto">Welcome! your awesome <small><a href="https://fontawesome.com/" style="color: #418FDE;" class="" target="_blank" >fontawesome</a></small></h1>
<p class="mx-auto">fontawesome v6 icon for svelte</p>

</div>

<slot></slot>
<footer class="horizontal h-1 w-full p-1 sticky bottom-0">
  
</footer>
