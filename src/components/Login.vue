<template>
    <grid>
        <grid-column>
            <div class="ui segments" id="login">
                <loader v-if="loading" size="medium" text="Вход"></loader>
                <div class="ui segment">
                    <h3>Вход</h3>
                </div>
                <div class="ui secondary segment">
                    <form class="ui icon form">
                        <div class="field">
                            <label>Логин</label>
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="login" v-model="login" placeholder="Логин...">
                            </div>
                        </div>
                        <div class="field">
                            <label>Пароль</label>
                            <div class="ui left icon input">
                                <i class="unlock alternate icon icon"></i>
                                <input type="password" name="password" v-model="password" placeholder="Пароль...">
                            </div>
                        </div>
                        <button class="ui fluid large teal submit button" @click.prevent="enter">Вход</button>
                    </form>
                </div>
            </div>
        </grid-column>
    </div>
    </grid>
</template>
<script>
    import Loader from './Loader.vue'
    import Grid from './Grid/Grid.vue'
    import GridColumn from './Grid/GridColumn.vue'

    export default {
         data() {
            return {
                login: 'test',
                password: 'test',
                loading: false,
            }
        },
        methods: {
            enter(event){
                if(this.login && this.password) {
                    this.$store.dispatch('login');
                }else {
                    $('#login').transition('shake');
                }
            },
        },
        components: {
            Loader,
            Grid,
            GridColumn
        }
    }

</script>
<style scoped>
    .grid-column {
        align-items: center;
        justify-content: center;
    }

   #login {
        width: 350px;
        height: 300px;
        margin: 0 auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   }
</style>