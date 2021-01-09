<template>
  <div class="header">
    <div class="header-wrapper clearfix">
        <div class="header-logo fl"></div>
        <div class="header-cart fr">
            <span class="icon-moon icon-cart"></span>
        </div>
        <div class="header-user fr">
            <span class="icon-moon icon-user"></span>
        </div>
        <div class="header-search fr">
            <input class="search-input" type="text" placeholder="购物车">
            <span class="search-icon icon-moon icon-search"></span>
        </div>
        <ul class="header-nav fr">
            <li>
                <a class="nav-item" href="">魅族手机</a>
            </li>
            <li>
                <a class="nav-item" href="">魅蓝手机</a>
            </li>
            <li>
                <a class="nav-item" href="">魅族声学</a>
            </li>
            <li>
                <a class="nav-item" href="">智能配件</a>
            </li>
            <li>
                <a class="nav-item" href="">生活周边</a>
            </li>
        </ul>
    </div>
    <transition name="nav">
        <div class="nav-children">
            <div class="children-wrapper">
                <ul>
                    <li class="children-item">
                        <img src="https://openfile.meizu.com/group1/M00/04/57/Cgbj0VrxPbKAPw-1AAJWqasMn_A309.png" alt="">
                        <p>魅族15</p>
                        <p>￥2499起</p>
                    </li>
                    <li class="children-item">
                        <img src="https://openfile.meizu.com/group1/M00/04/57/Cgbj0VrxPbKAPw-1AAJWqasMn_A309.png" alt="">
                        <p>魅族15</p>
                        <p>￥2499起</p>
                    </li>
                    <li class="children-item">
                        <img src="https://openfile.meizu.com/group1/M00/04/57/Cgbj0VrxPbKAPw-1AAJWqasMn_A309.png" alt="">
                        <p>魅族15</p>
                        <p>￥2499起</p>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vheader',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    background-color: white;
    position: relative;
}
.header-wrapper{
    width: 1240px;
    margin: 0 auto;
}
.header-logo{
    width: 140px;
    height: 26px;
    margin: 28px 0;
    background: url("../assets/images/logo.png") no-repeat center;
}
.header-cart, .header-user{
    padding: 29px 10px 0 20px;
    font-size: 24px;
    cursor: pointer;
    line-height: 1px;
}
.header-search{
    width: 172px;
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 2px;
    position: relative;
    margin: 25px 0;
}
.search-input{
    width: 127px;
    height: 20px;
    border: 0;
    outline: none;
    position: absolute;
    left: 5px;
    top: 6px;
    font-size: 12px;
}
.search-icon{
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 8px;
}
.header-nav{
    li{
        display: inline-block;
    }
    a{
        display: inline-block;
        font-size: 16px;
        padding: 33px 20px;
        line-height: 1;
        cursor: pointer;
        transition: color .1s ease;
        &:hover{
            color: #31a5e7;
        }
    }
}
.nav-children{
    width: 100%;
    height: 156px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 82px;
    border-bottom: 1px solid #e9e9e9;
    z-index: 1;
}
.children-wrapper{
    width: 1240px;
    padding-left: 180px;
    margin: 0 auto;
}
.children-item{
    width: 136px;
    height: 145px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #666;
    img{
        width: 100px;
        height: 100px;
    }
}
</style>
