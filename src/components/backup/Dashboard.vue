<template>
    <div id="dashboard">
        <page icon="dashboard">
            <header slot="title">Рабочая область</header>
            <header slot="sub-title">Рабочая область пользователя</header>
            <section slot="content" class="dashboard-content">
                <div class="ui four column stratched grid">
                    <div class="row">
                        <div class="column">
                            <widget icon="fa-microchip">
                                <header slot="title">CPU</header>
                                <header slot="sub-title">monitor</header>
                                <section slot="content">
                                    <div class="ui statistic">
                                        <div class="value">
                                            8
                                        </div>
                                        <div class="label">
                                            Cores
                                        </div>
                                    </div>
                                </section>
                            </widget>
                        </div>
                        <div class="column">
                            <widget icon="fa-microchip">
                                <header slot="title">CPU Frequency</header>
                                <header slot="sub-title">monitor</header>
                                <section slot="content">
                                     <div class="ui statistic">
                                        <div class="value">
                                            4.3
                                        </div>
                                        <div class="label">
                                            Ghz
                                        </div>
                                    </div>
                                </section>
                            </widget>
                        </div>
                        <div class="column">
                            <widget icon="fa-microchip">
                                <header slot="title">RAM</header>
                                <header slot="sub-title">monitor</header>
                                <section slot="content">
                                     <div class="ui statistic">
                                        <div class="value">
                                            16
                                        </div>
                                        <div class="label">
                                            GB
                                        </div>
                                    </div>
                                </section>
                            </widget>
                        </div>
                        <div class="column">
                            <widget icon="fa-microchip">
                                <header slot="title">HDD/SSD</header>
                                <header slot="sub-title">monitor</header>
                                <section slot="content">
                                     <div class="ui statistic">
                                        <div class="value">
                                            500
                                        </div>
                                        <div class="label">
                                            GB
                                        </div>
                                    </div>
                                </section>
                            </widget>
                        </div>
                        
                    </div>
                </div>
            </section>
        </page>
    </div>
</template>
<script>
    import Page from './Page.vue'
    import Widget from './Widget.vue'

    export default {
        components: {
            Page,
            Widget
        }
    }
</script>
<style >
    #dashboard {
        height: inherit;
    }
</style>