
module ui.game_ui.dezhou {
    export class BiPai1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"right":2,"height":720,"centerY":-2},"child":[{"type":"Image","props":{"y":198,"x":1,"skin":"dezhou_ui/game_ui/dezhou/effect/bipai/00001.png","blendMode":"lighter"},"compId":23},{"type":"Image","props":{"y":260,"x":1283,"skin":"dezhou_ui/game_ui/dezhou/effect/bipai/00001.png","scaleX":-1,"blendMode":"lighter"},"compId":24}]}],"animations":[{"nodes":[{"target":23,"keyframes":{"skin":[{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00001.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":0},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00002.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":3},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00003.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":4},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00004.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":5},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00005.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":6},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00006.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":7},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00007.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":8},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00008.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":9},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00009.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":10},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00010.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":11},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00011.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":12},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00013.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":13},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00014.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":14},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00015.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":15},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00016.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":16}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":17}]}},{"target":24,"keyframes":{"skin":[{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":3},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":5},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":7},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":9},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":11},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":13},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":15},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/00016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":17}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.BiPai1UI.uiView);
        }
    }
}

module ui.game_ui.dezhou {
    export class BiPai2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"right":2,"height":720,"centerY":-2},"child":[{"type":"Image","props":{"y":281,"x":478,"visible":true,"skin":"ui/game_ui/dezhou/tu_p.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":416,"x":792,"visible":true,"skin":"ui/game_ui/dezhou/tu_k.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":21}]}],"animations":[{"nodes":[{"target":20,"keyframes":{"y":[{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":10},{"value":281,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":20}],"x":[{"value":589,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":588,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"x","index":10},{"value":478,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":20}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":20,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":20,"label":null,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":20}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":20}]}},{"target":21,"keyframes":{"y":[{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0},{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"y","index":10},{"value":416,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":20}],"x":[{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"x","index":10},{"value":792,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":20}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.BiPai2UI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class GuZhuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":340,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":329,"x":740,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_1.png","scaleY":1,"scaleX":1,"right":111.42857142857144,"mouseEnabled":true,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":329,"x":524,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_2.png","scaleY":1,"scaleX":1,"mouseEnabled":true,"left":111.42857142857144,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":241,"x":375.55,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":6},{"type":"Image","props":{"y":426.9,"x":906.35,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7},{"type":"Image","props":{"x":628,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":3}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":3}]}},{"target":5,"keyframes":{"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"mouseEnabled","index":3}],"left":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":5,"key":"left","index":0},{"value":-300,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":3},{"value":420,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"left","index":10},{"value":380,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":13},{"value":420,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":15}]}},{"target":2,"keyframes":{"right":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":2,"key":"right","index":0},{"value":-300,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":3},{"value":420,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"right","index":10},{"value":380,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":13},{"value":420,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":15}],"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"mouseEnabled","index":3}]}},{"target":6,"keyframes":{"x":[{"value":346,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":6},{"value":937,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":26}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":26}]}},{"target":7,"keyframes":{"y":[{"value":427,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":6},{"value":425,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":26}],"x":[{"value":936,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":6},{"value":343,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":26}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":26}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.GuZhuUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class JianTouUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":4,"x":3,"width":100,"height":80},"child":[{"type":"Image","props":{"y":37,"x":60,"skin":"ui/game_ui/dezhou/tu_jiantou.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":6},{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.JianTouUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class PKUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":50,"x":50,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pk.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":3,"tweenMethod":"bounceOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":24}],"scaleX":[{"value":3,"tweenMethod":"bounceOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.PKUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class ShuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":510,"height":360},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dezhou_ui/game_ui/dezhou/effect/bipai/10011.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"dezhou_ui/game_ui/dezhou/effect/bipai/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":11}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.ShuUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_gray:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;
		public clip_money:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":64,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":6,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#efda8b","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":21,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":0,"x":0,"var":"img_gray","skin":"tongyong_ui/game_ui/tongyong/general/tu_txk.png"}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]},{"type":"Clip","props":{"y":1,"x":39,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.TouXiangUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.game_ui.dezhou.component.Ying_2UI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.game_ui.dezhou.component.Ying_2UI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game_ui.dezhou.component.Ying_2UI",ui.game_ui.dezhou.component.Ying_2UI);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.WanJia_LUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.game_ui.dezhou.component.Ying_2UI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"var":"img_frame","runtime":"ui.game_ui.dezhou.component.Ying_2UI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game_ui.dezhou.component.Ying_2UI",ui.game_ui.dezhou.component.Ying_2UI);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.WanJia_RUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class XiQianUI extends View {
		public clip_num0:Laya.Clip;
		public clip_num1:Laya.Clip;
		public clip_num2:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":360,"height":360},"child":[{"type":"Box","props":{"y":360,"x":640,"width":360,"height":360,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"dezhou_ui/game_ui/dezhou/tu_xq.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":190,"x":121,"var":"clip_num0","skin":"dezhou_ui/game_ui/dezhou/clip_xq.png","clipX":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":191,"x":182,"width":24,"var":"clip_num1","skin":"dezhou_ui/game_ui/dezhou/clip_xq.png","pivotY":18,"pivotX":13,"height":33,"clipX":10}},{"type":"Clip","props":{"y":190,"x":241,"var":"clip_num2","skin":"dezhou_ui/game_ui/dezhou/clip_xq.png","clipX":10,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.XiQianUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"dezhou_ui/game_ui/dezhou/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":30}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.YingUI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":194,"x":197,"skin":"dezhou_ui/game_ui/dezhou/tu_ying.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":70,"x":196,"skin":"dezhou_ui/game_ui/dezhou/tu_ying1.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":65,"x":197,"skin":"dezhou_ui/game_ui/dezhou/effect/yanhua/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"skin":[{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":7},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":11},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":13},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":17},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10014.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10015.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":19},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10016.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10017.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10018.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10019.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":23},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10020.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"dezhou_ui/game_ui/dezhou/effect/yanhua/10021.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.Ying_1UI.uiView);
        }
    }
}

module ui.game_ui.dezhou.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"width":190,"skin":"dezhou_ui/game_ui/dezhou/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":10,"width":190,"skin":"dezhou_ui/game_ui/dezhou/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}},{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.component.Ying_2UI.uiView);
        }
    }
}

module ui.game_ui.dezhou {
    export class DaiRuUI extends View {
		public img_take:Laya.Image;
		public text_take:laya.display.Text;
		public btn_enter:Laya.Button;
		public hslider_take:Laya.HSlider;
		public text_min:laya.display.Text;
		public text_max:laya.display.Text;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"dezhou_ui/game_ui/dezhou/tu_dairu.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":141,"x":303,"width":101,"var":"img_take","skin":"dezhou_ui/game_ui/dezhou/hslider2.png","sizeGrid":"0,51,0,30","scaleY":0.8,"scaleX":0.8,"height":71,"anchorY":1,"anchorX":0.7},"child":[{"type":"Text","props":{"y":15,"x":9,"wordWrap":true,"width":84,"var":"text_take","text":"99999","leading":6,"height":31,"fontSize":25,"color":"#dadada","align":"center"}}]},{"type":"Button","props":{"y":314,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","right":190,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":182,"x":51,"width":101,"text":"最小携带","height":24,"fontSize":24,"color":"#fffbb5","align":"center"}},{"type":"HSlider","props":{"y":145,"x":51,"width":496,"var":"hslider_take","value":50,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"Text","props":{"y":182,"x":445,"width":101,"text":"最大携带","height":24,"fontSize":24,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":212,"x":51,"width":101,"var":"text_min","text":"00","height":24,"fontSize":24,"color":"#00ff33","align":"center"}},{"type":"Text","props":{"y":212,"x":445,"width":101,"var":"text_max","text":"00","height":24,"fontSize":24,"color":"#00ff33","align":"center"}},{"type":"Text","props":{"y":259,"x":217,"wordWrap":true,"width":173,"text":"每局自动带入金币设置","leading":6,"height":25,"fontSize":15,"color":"#dadada","align":"center"}},{"type":"Button","props":{"y":38,"x":557,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.DaiRuUI.uiView);
        }
    }
}

module ui.game_ui.dezhou {
    export class DeZhouUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public view_paihe:ui.game_ui.tongyong.PaiXeiUI;
		public view_paixie:ui.game_ui.tongyong.FaPaiUI;
		public box_jackpot:Laya.Box;
		public img_jackpot:Laya.Image;
		public text_money:laya.display.Text;
		public bet0:Laya.Box;
		public text_bet0:laya.display.Text;
		public img_bet0:Laya.Image;
		public bet1:Laya.Box;
		public text_bet1:laya.display.Text;
		public img_bet1:Laya.Image;
		public bet2:Laya.Box;
		public text_bet2:laya.display.Text;
		public img_bet2:Laya.Image;
		public bet3:Laya.Box;
		public text_bet3:laya.display.Text;
		public img_bet3:Laya.Image;
		public bet4:Laya.Box;
		public text_bet4:laya.display.Text;
		public img_bet4:Laya.Image;
		public bet5:Laya.Box;
		public text_bet5:laya.display.Text;
		public img_bet5:Laya.Image;
		public bet6:Laya.Box;
		public text_bet6:laya.display.Text;
		public img_bet6:Laya.Image;
		public bet7:Laya.Box;
		public text_bet7:laya.display.Text;
		public img_bet7:Laya.Image;
		public bet8:Laya.Box;
		public text_bet8:laya.display.Text;
		public img_bet8:Laya.Image;
		public img_type0:Laya.Image;
		public text_type0:laya.display.Text;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public text_mangzhu:laya.display.Text;
		public player0:ui.game_ui.dezhou.component.TouXiangUI;
		public player1:ui.game_ui.dezhou.component.TouXiangUI;
		public player2:ui.game_ui.dezhou.component.TouXiangUI;
		public player3:ui.game_ui.dezhou.component.TouXiangUI;
		public player4:ui.game_ui.dezhou.component.TouXiangUI;
		public player5:ui.game_ui.dezhou.component.TouXiangUI;
		public player6:ui.game_ui.dezhou.component.TouXiangUI;
		public player7:ui.game_ui.dezhou.component.TouXiangUI;
		public player8:ui.game_ui.dezhou.component.TouXiangUI;
		public guang:Laya.Box;
		public img_guang0:Laya.Image;
		public img_guang1:Laya.Image;
		public img_guang2:Laya.Image;
		public img_guang3:Laya.Image;
		public img_guang4:Laya.Image;
		public img_guang5:Laya.Image;
		public img_guang6:Laya.Image;
		public img_guang7:Laya.Image;
		public img_guang8:Laya.Image;
		public btn_continue:Laya.Button;
		public btn_giveup:Laya.Button;
		public btn_call:Laya.Button;
		public btn_pass:Laya.Button;
		public btn_add:Laya.Button;
		public btn_enter:Laya.Button;
		public xipai:ui.game_ui.tongyong.effect.XiPaiUI;
		public add_bet:Laya.Box;
		public text_bet:laya.display.Text;
		public hslider_bet:Laya.VSlider;
		public img_mangzhu0:Laya.Image;
		public img_mangzhu1:Laya.Image;
		public img_mangzhu2:Laya.Image;
		public img_mangzhu3:Laya.Image;
		public img_mangzhu4:Laya.Image;
		public img_mangzhu5:Laya.Image;
		public img_mangzhu6:Laya.Image;
		public img_mangzhu7:Laya.Image;
		public img_mangzhu8:Laya.Image;
		public img_type1:Laya.Image;
		public text_type1:laya.display.Text;
		public img_type2:Laya.Image;
		public text_type2:laya.display.Text;
		public img_type3:Laya.Image;
		public text_type3:laya.display.Text;
		public img_type4:Laya.Image;
		public text_type4:laya.display.Text;
		public img_type5:Laya.Image;
		public text_type5:laya.display.Text;
		public img_type6:Laya.Image;
		public text_type6:laya.display.Text;
		public img_type7:Laya.Image;
		public text_type7:laya.display.Text;
		public img_type8:Laya.Image;
		public text_type8:laya.display.Text;
		public img_take:Laya.Image;
		public btn_menu:Laya.Button;
		public btn_closen:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"skin":"tongyong_ui/game_ui/tongyong/pai/1.png","height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":-3,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":196,"width":192,"height":184,"centerX":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":155,"x":92,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan2.sk"}}]},{"type":"PaiXei","props":{"y":115,"x":745,"var":"view_paihe","runtime":"ui.game_ui.tongyong.PaiXeiUI"}},{"type":"FaPai","props":{"y":183,"x":737,"var":"view_paixie","runtime":"ui.game_ui.tongyong.FaPaiUI"}},{"type":"Box","props":{"y":181,"x":548,"var":"box_jackpot"},"child":[{"type":"Image","props":{"y":5,"x":21,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png"}},{"type":"Image","props":{"y":-1,"x":2,"var":"img_jackpot","skin":"dezhou_ui/game_ui/dezhou/tu_cm.png"}},{"type":"Text","props":{"y":8,"x":41,"wordWrap":true,"width":110,"var":"text_money","text":"500.00","leading":6,"height":30,"fontSize":26,"color":"#ffff60","align":"center"}}]},{"type":"Box","props":{"y":474,"var":"bet0","centerX":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet0","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":-4,"var":"img_bet0","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":483,"x":397,"width":86,"var":"bet1","height":25.2,"centerX":-243,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet1","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":-5,"var":"img_bet1","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":390,"width":86,"var":"bet2","height":25.2,"centerX":-444,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet2","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":-5,"var":"img_bet2","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":210,"var":"bet3","centerX":-449,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet3","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":12,"x":-1,"var":"img_bet3","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"var":"bet4","centerX":-229,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet4","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":-7,"var":"img_bet4","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"var":"bet5","centerX":238,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet5","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":14,"x":91,"var":"img_bet5","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":210,"x":1080,"width":86,"var":"bet6","height":25.2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet6","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":90,"var":"img_bet6","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":390,"width":86,"var":"bet7","height":25.2,"centerX":439,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet7","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":93,"var":"img_bet7","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":483,"x":881,"width":86,"var":"bet8","height":25.2,"centerX":241,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_bet8","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}},{"type":"Image","props":{"y":13,"x":93,"var":"img_bet8","skin":"dezhou_ui/game_ui/dezhou/tu_cm1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":609,"width":157,"var":"img_type0","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":24,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":137,"var":"text_type0","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Text","props":{"y":21,"x":88,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":43,"x":88,"width":85,"var":"text_roomtype","text":"试玩场","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":43,"x":180,"width":153,"var":"text_mangzhu","text":"盲注：1/2","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"TouXiang","props":{"y":485,"x":477,"var":"player0","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":463,"x":221,"var":"player1","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":370,"x":18,"var":"player2","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":181,"x":18,"var":"player3","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":63,"x":213,"var":"player4","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":63,"x":954,"var":"player5","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":181,"x":1156,"var":"player6","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":370,"x":1156,"var":"player7","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":462,"x":953,"var":"player8","runtime":"ui.game_ui.dezhou.component.TouXiangUI"}},{"type":"Box","props":{"y":147,"x":641,"width":1083,"var":"guang","height":408,"anchorX":0.5},"compId":198,"child":[{"type":"Image","props":{"y":184,"x":360,"var":"img_guang0","skin":"dezhou_ui/game_ui/dezhou/lun_3.png","blendMode":"lighter"}},{"type":"Image","props":{"y":435,"x":66,"var":"img_guang1","skin":"dezhou_ui/game_ui/dezhou/lun_0.png","scaleY":-1,"blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":547,"width":569,"var":"img_guang2","skin":"dezhou_ui/game_ui/dezhou/lun_2.png","rotation":5,"pivotY":1,"pivotX":570,"height":223,"blendMode":"lighter"}},{"type":"Image","props":{"y":57,"x":6,"var":"img_guang3","skin":"dezhou_ui/game_ui/dezhou/lun_1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":-70,"x":61,"var":"img_guang4","skin":"dezhou_ui/game_ui/dezhou/lun_0.png","blendMode":"lighter"}},{"type":"Image","props":{"y":-70,"x":1025,"var":"img_guang5","skin":"dezhou_ui/game_ui/dezhou/lun_0.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Image","props":{"y":57,"x":1079,"var":"img_guang6","skin":"dezhou_ui/game_ui/dezhou/lun_1.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":548,"var":"img_guang7","skin":"dezhou_ui/game_ui/dezhou/lun_2.png","scaleX":-1,"rotation":-5,"blendMode":"lighter","anchorX":1}},{"type":"Image","props":{"y":435,"x":1035,"var":"img_guang8","skin":"dezhou_ui/game_ui/dezhou/lun_0.png","scaleY":-1,"scaleX":-1,"blendMode":"lighter"}}]},{"type":"Button","props":{"y":400,"x":640,"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"继续游戏","height":59,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":644,"var":"btn_giveup","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"弃牌","centerX":-214}},{"type":"Button","props":{"y":644,"x":556,"var":"btn_call","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"label":"跟注"}},{"type":"Button","props":{"y":644,"x":556,"var":"btn_pass","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"过牌"}},{"type":"Button","props":{"y":644,"var":"btn_add","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"label":"加注","centerX":213}},{"type":"Button","props":{"y":644,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"确定","centerX":213}},{"type":"XiPai","props":{"y":200,"x":480,"var":"xipai","runtime":"ui.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Box","props":{"y":262,"x":788,"width":130,"var":"add_bet","height":388},"child":[{"type":"Image","props":{"y":75,"x":63,"width":127,"skin":"dezhou_ui/game_ui/dezhou/hslider2.png","sizeGrid":"0,51,0,30","height":72,"anchorY":1,"anchorX":0.5},"child":[{"type":"Text","props":{"y":15,"x":7,"wordWrap":true,"width":114,"var":"text_bet","text":"131300","leading":6,"height":36,"fontSize":30,"color":"#dadada","align":"center"}}]},{"type":"Image","props":{"y":381,"x":63,"skin":"dezhou_ui/game_ui/dezhou/Vslider1.png","anchorY":1,"anchorX":0.5}},{"type":"VSlider","props":{"y":345,"x":48,"var":"hslider_bet","skin":"dezhou_ui/game_ui/dezhou/Vslider.png","scaleY":-1}}]},{"type":"Image","props":{"y":471,"x":528,"var":"img_mangzhu0","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":449,"x":271,"var":"img_mangzhu1","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":357,"x":69,"var":"img_mangzhu2","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":169,"x":69,"var":"img_mangzhu3","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":79,"x":329,"var":"img_mangzhu4","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":80,"x":936,"var":"img_mangzhu5","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":169,"x":1203,"var":"img_mangzhu6","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":357,"x":1203,"var":"img_mangzhu7","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":449,"x":1002,"var":"img_mangzhu8","skin":"dezhou_ui/game_ui/dezhou/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":585,"width":120,"var":"img_type1","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":-263,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type1","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":494,"width":120,"var":"img_type2","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":-463,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type2","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":300,"width":120,"var":"img_type3","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":-460,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type3","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":185,"width":120,"var":"img_type4","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":-265,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type4","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":185,"width":120,"var":"img_type5","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":253,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type5","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":300,"width":120,"var":"img_type6","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":455,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type6","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":494,"width":120,"var":"img_type7","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":456,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type7","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":585,"width":120,"var":"img_type8","skin":"dezhou_ui/game_ui/dezhou/tu_bm.png","height":39,"centerX":253,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":10,"wordWrap":true,"width":100,"var":"text_type8","text":"顺子","leading":6,"height":27,"fontSize":24,"color":"#fff400","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":129,"x":522,"var":"img_take","skin":"dezhou_ui/game_ui/dezhou/icon_jmoney.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":49,"x":1234,"var":"btn_closen","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":74,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":216,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":145,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":227,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"y":102,"x":1209,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"dezhou_ui/game_ui/dezhou/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}},{"target":198,"keyframes":{"var":[{"value":"point","tweenMethod":"linearNone","tween":false,"target":198,"key":"var","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.game_ui.tongyong.PaiXeiUI",ui.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.game_ui.tongyong.FaPaiUI",ui.game_ui.tongyong.FaPaiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.game_ui.dezhou.component.TouXiangUI",ui.game_ui.dezhou.component.TouXiangUI);
			View.regComponent("ui.game_ui.tongyong.effect.XiPaiUI",ui.game_ui.tongyong.effect.XiPaiUI);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.DeZhouUI.uiView);
        }
    }
}

module ui.game_ui.dezhou {
    export class DeZhou_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public btn_tab:Laya.Tab;
		public panal_wanfa:Laya.Panel;
		public img_wanfa:Laya.Image;
		public panal_jiesuan:Laya.Panel;
		public img_type:Laya.Image;
		public panal_settle:Laya.Panel;
		public img_settle:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":1,"centerX":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":38,"x":397,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":66,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"玩法介绍,牌型说明,结算计分","labelSize":20,"labelColors":"#cacaca,#cacaca,#ffffff","height":58}},{"type":"Panel","props":{"y":130,"x":20,"width":754,"var":"panal_wanfa","height":356},"child":[{"type":"Image","props":{"var":"img_wanfa","skin":"dezhou_ui/game_ui/dezhou/guize_1.png","height":442}}]},{"type":"Panel","props":{"y":131,"x":21,"width":746,"var":"panal_jiesuan","height":353},"child":[{"type":"Image","props":{"var":"img_type","skin":"dezhou_ui/game_ui/dezhou/guize_3.png","height":486}}]},{"type":"Panel","props":{"y":131,"x":21,"width":744,"var":"panal_settle","height":353},"child":[{"type":"Image","props":{"var":"img_settle","skin":"dezhou_ui/game_ui/dezhou/guize_4.png","height":629}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.dezhou.DeZhou_GuiZeUI.uiView);
        }
    }
}

module ui.game_ui.dezhou {
    export class DeZhou_HUDUI extends View {
		public view_hud:ui.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public lab_money0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public lab_money1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public lab_money2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_least3:Laya.Label;
		public lab_money3:Laya.Label;
		public box_fangka:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":360,"x":640,"var":"box_normal","top":0,"skewY":0,"right":0,"mouseThrough":true,"left":0,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1281,"var":"box_right","height":465,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":234,"x":195,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":961,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":356,"x":128,"wordWrap":true,"width":180,"var":"lab_least0","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#a9d6c1","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":402,"x":128,"wordWrap":true,"width":180,"var":"lab_money0","text":"准入：00","leading":6,"height":31,"fontSize":24,"color":"#a9d6c1","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":32,"x":20,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_02_1.png"}}]},{"type":"Image","props":{"y":234,"x":499,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":664,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":357,"x":128,"wordWrap":true,"width":180,"var":"lab_least1","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#80adc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":402,"x":128,"wordWrap":true,"width":180,"var":"lab_money1","text":"准入：00","leading":6,"height":31,"fontSize":24,"color":"#80adc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":140,"x":124,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_01_1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":367,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":356,"x":126,"wordWrap":true,"width":180,"var":"lab_least2","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#9d77aa","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":401,"x":127,"wordWrap":true,"width":180,"var":"lab_money2","text":"准入：00","leading":6,"height":31,"fontSize":24,"color":"#9d77aa","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":131,"x":127,"skin":"dezhou_ui/game_ui/dezhou/difen_03_1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":70,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":355,"x":126,"wordWrap":true,"width":180,"var":"lab_least3","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#c19a81","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":400,"x":127,"wordWrap":true,"width":180,"var":"lab_money3","text":"准入：00","leading":6,"height":31,"fontSize":24,"color":"#c19a81","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":131,"x":127,"skin":"dezhou_ui/game_ui/dezhou/difen_04_1.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Image","props":{"top":24,"skin":"dezhou_ui/game_ui/dezhou/zjh_title.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"x":0,"width":910,"var":"box_fangka","top":0,"skewY":0,"right":0,"mouseThrough":true,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka.png","right":421,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png"}}]},{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png","right":72,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":83,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game_ui.tongyong.HudUI",ui.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.game_ui.dezhou.DeZhou_HUDUI.uiView);
        }
    }
}
