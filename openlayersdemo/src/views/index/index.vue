<template>
    <div id="map"></div>
</template>

<script>

import "ol/ol.css";
import OSM from "ol/source/OSM"; //可以理解为数据源,就是一张图片
import Map from "ol/Map";
import View from "ol/View";
import { Point, LineString } from "ol/geom";
import Feature from "ol/Feature";
import { Icon, Style, Stroke } from "ol/style";
//导入相关模块
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { TileWMS, Vector as VectorSource } from 'ol/source';

export default {
    name: 'OpenlayersdemoIndex',

    data() {
        return {
            map: null, // map地图
            layer: null, //地图图层
            lightLayer: null, //灯图层
            houseLayer: null, //房子图层
            lineLayer: null, //线图层
            lineSource: null, //线数据源
            //线的数据
            lineData: [
                [118.765211, 32.084356],
                [118.794687, 32.089383],
                [118.808620, 32.065992],
            ],
        };
    },

    mounted() {
        this.createMap();
    },

    methods: {
        //画线
        drawLine() {
            let pointData = this.lineData; // 所有点位信息
            //下边来添加一线feature
            var feature = new Feature({
                type: "lineStyle",
                geometry: new LineString(
                    pointData // 线的坐标
                ),
            });
            let color = 'green';
            let lineStyle = new Style({
                stroke: new Stroke({
                    color: color,
                    width: 4,
                }),
            });
            // 添加线的样式
            feature.setStyle(lineStyle);
            // 添加线的fature
            this.lineSource.addFeature(feature);
        },
        createMap() {
            //创建空的矢量容器(point)
            this.lineSource = new VectorSource({ wrapX: false });
            this.lineLayer = new VectorLayer({
                source: this.lineSource,
            });
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM({}),
                    }),
                    this.lineLayer,
                ],
                view: new View({
                    center: [118.767700, 32.043005],   // 设置地图显示中心
                    projection: 'EPSG:4326',
                    zoom: 14,//当前放大倍数
                    minZoom: 1,//最小放大倍数
                    maxZoom: 20,//最大放大倍数
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