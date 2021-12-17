<template>
  <div class="modal fade login" id="modal-login" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <h2 class="pull-left text-uppercase">Crear Ruta</h2>

            <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
             
            <div class="row form-wrap mb-50">
                <div class="col-md-12 col-sm-12 col-xs-12 mb-25">
                    <h4 class="contact-title text-center">
                        <i class="pe-7s-mail"></i>
                        Datos
                    </h4> 
                </div>
                <!--title-->
                
                <div class="col-md-10 col-sm-10 col-sm-offset-1 col-xs-12">
                    <form action="#">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>First Name <span>*</span></label>
                                    <input type="text" placeholder="Your First Name">
                                </div>
                                <!--name-->  

                                <div class="form-group">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" placeholder="Your Last Name">
                                </div>
                                <!--name--> 

                                <div class="form-group">
                                    <label>Email <span>*</span></label>
                                    <input type="text" placeholder="Your Last Name">
                                </div>
                                <!--name-->  
                            </div>
                            <!--left-->

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <!--right-->

                            <div class="form-group col-sm-12 mb-0">
                                <button type="submit">
                                    send message
                                </button>
                            </div>
                            <!--button-->
                        </div>
                    </form>
                </div>                
            </div>
            <!--form wrap-->
        </div>
        <!-- /.modal-dialog -->
    </div>
  <!--header-->
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    msg: String
  },
  methods: {
   
  }
}
</script>
