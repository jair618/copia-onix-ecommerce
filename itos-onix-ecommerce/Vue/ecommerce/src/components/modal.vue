<template>
  <div class="modal fade in" id="newsletter" tabindex="-1" style="display: block; padding-right: 17px;">
        <div class="modal-dialog" role="document">
            <div class="modal-content"> 
                <div class="modal-body text-center"> 
                     {{msg[0].type}}
                    <!--newsletter-->           
                </div>
                <!--modal body-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    msg: String
  },
  methods: {
   
  }
}
</script>
