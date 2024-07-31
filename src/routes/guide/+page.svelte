<script>
    import {onMount} from "svelte"
      import hljs from 'highlight.js';
    import js from "highlight.js/lib/languages/javascript"
    
    onMount(async ()=>{
        hljs.registerLanguage('javascript',js);
        hljs.highlightAll()
   
    }) 

</script>

<div class="horizontal w-auto">
    <div class="card  my-2 ml-auto mr-2 elevate-xl w-5">
       <h1>how to install  and usage </h1>
       <pre>
         <code class="language-javascript" >
            npm i svesome
            
            import Svesome from "svesome"
            //props
            icon="fa-home"
            type="fa-solid" //fas etc
            size="fa-2xl" //3xl
            
         </code>
       </pre>
    </div>
    <div hidden class="card elevate-md sticky top-0">
        ad
    </div>
</div>
<a style="text-decoration: none;" href="/">
    <div class="card text-center bg-brand w-sm-5 animate">
      <span style="color: #fff;" class="text-3">back home</span>
    </div>
 </a>
