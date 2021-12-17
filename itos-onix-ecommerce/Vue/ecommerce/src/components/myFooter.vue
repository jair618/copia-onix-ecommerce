<template>
    <footer>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="copy-right">
                        Copyright © {{(new Date()).getFullYear()}} <a href="#" class="primary-color"><strong>ITOS.</strong></a> All rights reserved.
                    </div>
                    <!--left-->
                </div>
            </div>
        </div>
    </footer>
    <!--footer-->
</template>

<script>
export default {
  name: 'myFooter',
  props: {
    msg: String
  }
}
</script>
