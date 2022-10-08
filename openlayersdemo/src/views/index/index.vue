<template>
    <div id="map"></div>
</template>

<script>
import { Map, View } from "ol";//地图,视图
import OSM from "ol/source/OSM"; //可以理解为数据源,就是一张图片
import TileLayer from "ol/layer/Tile"; //可以理解为图层
import { fromLonLat } from "ol/proj";//将坐标从经度/纬度转换为不同的投影。
export default {
    name: 'OpenlayersdemoIndex',

    data() {
        return {
            map: null,
        };
    },

    mounted() {
        this.createMap();
    },

    methods: {
        createMap() {
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM({}),
                    }),
                ],
                view: new View({
                    center: [104.06, 30.67],   // 设置地图显示中心
                    projection: 'EPSG:4326',  // 指定投影使用坐标系EPSG:4326
                    zoom: 8,
                    maxZoom: 20,
                }),
            });
        },

    },
};
</script>

<style lang="less" scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>