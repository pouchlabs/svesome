<script  >
import Svesome from "$lib";
 let icons = ["fa-house",
 "fa-user",
 "fa-image",
 "fa-bars",
 "fa-download",
 "fa-check",
 "fa-users",
 "fa-star",
 "fa-phone",
 "fa-comment",
 "fa-face-smile",
 "fa-caret-up",
 "fa-arrow-up",
 "fa-bell",
 "fa-clipboard",
 "fa-filter",
 "fa-bolt"
 ]
</script>
<div class="horizontal w-auto">
    <div class="card horizontal my-2 ml-auto mr-1 elevate-xl w-5">
        {#each icons as i}
          <span class="m-2">
            <Svesome icon={i} ></Svesome>
          </span>
        {/each}
    </div>
    <div hidden class="card elevate-md sticky top-0">
        ad
    </div>
</div>

<div class="horizontal my-2">
 <a style="text-decoration: none;" href="/guide">
    <div class="card text-center bg-brand w-sm-5 animate">
      <span style="color: #fff;" class="text-3">how to use svesome</span>
    </div>
 </a>
</div>
