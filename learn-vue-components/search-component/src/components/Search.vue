<template>
    <div>
        <div class="container">
            <i-input v-model="searchData" placeholder="请输入您想搜索的商品" class="search" size ="large">
                <Button slot="append" icon= "ios-search" @click = "search"/>
            </i-input>
            <Tag v-for="(item, index) in promotionTags" :key = "index" closable 
                 @on-close = "closeTags(index)">
                <span  @click="selectTags(index)">
                    {{ item }}
                </span>
            </Tag>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            promotionTags: [
                '买二免一','领200胜券','199减100', '母婴五折抢', '充100送20'
            ],
            searchData: ''
        }
    },
    methods: {
        search() {
            // console.log(this.searchData)
            this.$router.push({
                path:'/search',
                query: {
                    searchData: this.searchData
                }
            })
        },
        selectTags(index) {
            this.searchData = this.promotionTags[index]
        },
        closeTags(index) {
            this.promotionTags.splice(index, 1)
        }
    }
}
</script>
<style scoped>
.container {
    padding-top: 15px;
    margin: 0 auto;
    margin-bottom: 1px;
    width: 460px;
}
.search {
    margin: 5px 0px;
}
</style>
